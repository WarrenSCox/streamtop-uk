import fs from "node:fs/promises";

const CATEGORIES=["UK","WORLD","POLITICS","BUSINESS","TECH","ENTERTAINMENT"];
const PROVIDERS=["SKY","GUARDIAN","METRO"];
const SOURCE_LABELS={SKY:"Sky News",GUARDIAN:"The Guardian",METRO:"Metro"};

async function loadPreviousNews(){
 try{
  return JSON.parse(await fs.readFile("news.json","utf8"));
 }catch{
  return null;
 }
}

const previousNews=await loadPreviousNews();

const skyFeeds={
 UK:"https://feeds.skynews.com/feeds/rss/uk.xml",
 WORLD:"https://feeds.skynews.com/feeds/rss/world.xml",
 POLITICS:"https://feeds.skynews.com/feeds/rss/politics.xml",
 BUSINESS:"https://feeds.skynews.com/feeds/rss/business.xml",
 TECH:"https://feeds.skynews.com/feeds/rss/technology.xml",
 ENTERTAINMENT:"https://feeds.skynews.com/feeds/rss/entertainment.xml"
};
const guardianFeeds={
 UK:"https://www.theguardian.com/uk-news/rss",
 WORLD:"https://www.theguardian.com/world/rss",
 POLITICS:"https://www.theguardian.com/politics/rss",
 BUSINESS:"https://www.theguardian.com/business/rss",
 TECH:"https://www.theguardian.com/technology/rss",
 ENTERTAINMENT:"https://www.theguardian.com/culture/rss"
};
// Metro is WordPress-backed. Each category has fallbacks so one renamed Metro section
// cannot take the whole WozzaNews refresh down.
const metroFeeds={
 UK:["https://metro.co.uk/news/feed/","https://metro.co.uk/feed/"],
 WORLD:["https://metro.co.uk/tag/world/feed/","https://metro.co.uk/news/world/feed/","https://metro.co.uk/feed/"],
 POLITICS:["https://metro.co.uk/tag/politics/feed/","https://metro.co.uk/news/politics/feed/","https://metro.co.uk/feed/"],
 BUSINESS:["https://metro.co.uk/tag/business/feed/","https://metro.co.uk/feed/"],
 TECH:["https://metro.co.uk/tag/technology/feed/","https://metro.co.uk/tech/feed/","https://metro.co.uk/feed/"],
 ENTERTAINMENT:["https://metro.co.uk/entertainment/feed/","https://metro.co.uk/feed/"]
};

const decode=s=>String(s??"")
 .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")
 .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
 .replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(+n)).trim();

function cleanHeadline(s){return decode(s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()}
function tag(xml,name){
 const pattern=`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`;
 const m=xml.match(new RegExp(pattern,"i"));
 return decode(m?.[1]);
}
function media(xml){
 const patterns=[
  /<media:content\b[^>]*\burl=["']([^"']+)["']/i,
  /<media:thumbnail\b[^>]*\burl=["']([^"']+)["']/i,
  /<enclosure\b[^>]*\burl=["']([^"']+)["'][^>]*\btype=["']image\//i,
  /<enclosure\b[^>]*\btype=["']image\/[^"']*["'][^>]*\burl=["']([^"']+)["']/i,
  /<img\b[^>]*\bsrc=["']([^"']+)["']/i
 ];
 for(const p of patterns){const m=xml.match(p);if(m)return decode(m[1])}
 return "";
}

function metroCategoryMatches(cat,row){
 const hay=`${row.title||""} ${row.link||""} ${row.categories||""}`.toLowerCase();
 const has=(words)=>words.some(w=>hay.includes(w));
 const rules={
  TECH:[
   "technology","/tech/"," tech ","artificial intelligence"," ai ","chatgpt","gemini","claude",
   "iphone","android","smartphone"," apple "," google ","microsoft","samsung","gadget",
   "software","cybersecurity","cyber attack","internet","whatsapp","instagram","tiktok","social media","gaming",
   "playstation","xbox","nintendo","computer","laptop","robot"
  ],
  ENTERTAINMENT:[
   "/entertainment/","eastenders","coronation street","emmerdale","soap","celebrity","actor",
   "actress","film","movie","cinema","music","singer","album","tv ","television","netflix",
   "strictly","reality","hollywood","showbiz","theatre"
  ],
  BUSINESS:[
   "/business/","business","economy","economic","finance","financial","market","shares","stock",
   "bank","company","companies","jobs","retail","inflation","mortgage","house prices","money",
   "tax","budget","investment","pound"
  ],
  POLITICS:[
   "/politics/","labour","conservative","tory","parliament"," mp ","prime minister","downing street",
   "government","election","reform uk","lib dem","starmer","badenoch","minister"
  ],
  WORLD:[
   "/world/","world news","usa","united states","america","ukraine","russia","gaza","israel",
   "iran","china","europe","france","germany","spain","italy","australia","canada","india"
  ]
 };
 if(cat==="UK") return /metro\.co\.uk\/(?:news\/)?/i.test(row.link||"") &&
  !metroCategoryMatches("TECH",row) &&
  !metroCategoryMatches("ENTERTAINMENT",row) &&
  !metroCategoryMatches("BUSINESS",row);
 return has(rules[cat]||[]);
}

async function fetchFeed(url){
 const r=await fetch(url,{redirect:"follow",signal:AbortSignal.timeout(15000),headers:{
  "User-Agent":"Mozilla/5.0 (compatible; WozzaNews/6.2.33)",
  "Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
 }});
 if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();
 if(!/<rss\b|<feed\b/i.test(xml))throw new Error("Response was not RSS/XML");
 return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
}

async function buildProvider(name,feeds,previousProvider){
 const categories={};
 const health={};
 for(const [cat,feedValue] of Object.entries(feeds)){
  const urls=Array.isArray(feedValue)?feedValue:[feedValue];
  let rawItems=[],lastError=null;

  for(const url of urls){
   try{
    const received=await fetchFeed(url);
    if(received.length) rawItems.push(...received);
    // Non-Metro feeds are authoritative category feeds, so one successful endpoint is enough.
    if(name!=="METRO" && received.length) break;
   }catch(err){
    lastError=err;
    console.warn(`${name} ${cat}: ${url} failed — ${err.message}`);
   }
  }

  const seen=new Set();
  let rows=rawItems.map(x=>({
   title:cleanHeadline(tag(x,"title")),
   link:tag(x,"link")||tag(x,"guid"),
   published:tag(x,"pubDate")||tag(x,"dc:date"),
   source:SOURCE_LABELS[name],
   provider:name,
   categories:[...x.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi)].map(m=>cleanHeadline(m[1])).join(" "),
   image:media(x)
  })).filter(x=>{
   if(!x.title||!/^https?:\/\//i.test(x.link))return false;
   const key=(x.link||x.title).toLowerCase();
   if(seen.has(key))return false;
   seen.add(key);
   return true;
  });

  if(name==="METRO") rows=rows.filter(row=>metroCategoryMatches(cat,row));
  rows=rows.slice(0,20);

  if(rows.length){
   categories[cat]=rows;
   health[cat]={ok:true,count:rows.length};
   console.log(`${name} ${cat}: ${rows.length} live usable stories`);
   continue;
  }

  const previousRows=previousProvider?.categories?.[cat];
  categories[cat]=Array.isArray(previousRows)?previousRows:[];
  health[cat]={ok:false,count:0,reason:lastError?.message||"No correctly classified live stories"};
  console.warn(`${name} ${cat}: no live usable stories${categories[cat].length?` — retained ${categories[cat].length} previous provider stories for diagnostics`:""}`);
 }
 return {categories,health};
}

function publishedMs(row){
 const n=Date.parse(row?.published||"");
 return Number.isFinite(n)?n:0;
}
function headlineKey(title){
 return cleanHeadline(title).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
}
function linkKey(link){return String(link||"").toLowerCase().split(/[?#]/)[0]}
function uniqueRows(rows){
 const links=new Set(),titles=new Set();
 return rows.filter(row=>{
  const link=linkKey(row?.link);
  const title=headlineKey(row?.title);
  if(!row?.title||!row?.link)return false;
  if((link&&links.has(link))||(title&&titles.has(title)))return false;
  if(link)links.add(link);if(title)titles.add(title);
  return true;
 });
}

// Build one freshness-led Top 10 while keeping a healthy source mix.
// With 3 live providers the freshest source may contribute 4, the others 3 each.
// Missing/short providers automatically donate unused slots to the remaining live sources.
function mixedTop10(cat,providers){
 const liveNames=PROVIDERS.filter(name=>providers[name]?.health?.[cat]?.ok && providers[name]?.categories?.[cat]?.length);
 const queues=Object.fromEntries(liveNames.map(name=>[
  name,
  uniqueRows(providers[name].categories[cat]).sort((a,b)=>publishedMs(b)-publishedMs(a))
 ]));
 if(!liveNames.length)return {rows:[],liveNames};

 const freshest=[...liveNames].sort((a,b)=>publishedMs(queues[b][0])-publishedMs(queues[a][0]));
 const base=Math.floor(10/liveNames.length);
 let extra=10-(base*liveNames.length);
 const quotas=Object.fromEntries(freshest.map(name=>[name,base+(extra-->0?1:0)]));
 const picked=[],counts=Object.fromEntries(liveNames.map(name=>[name,0]));
 const usedLinks=new Set(),usedTitles=new Set();

 function canUse(row){
  const link=linkKey(row?.link);
  const title=headlineKey(row?.title);
  return row?.title&&row?.link&&!usedLinks.has(link)&&!usedTitles.has(title);
 }
 function add(row,name){
  const clean={...row,provider:name,source:row.source||SOURCE_LABELS[name]};
  picked.push(clean);counts[name]++;
  usedLinks.add(linkKey(clean.link));
  usedTitles.add(headlineKey(clean.title));
 }

 // First pass honours soft provider quotas but always chooses the freshest available next story.
 while(picked.length<10){
  const options=liveNames
   .filter(name=>counts[name]<quotas[name])
   .map(name=>({name,row:queues[name].find(canUse)}))
   .filter(x=>x.row)
   .sort((a,b)=>publishedMs(b.row)-publishedMs(a.row));
  if(!options.length)break;
  add(options[0].row,options[0].name);
 }

 // Backfill any unused quota from whichever live provider has the freshest remaining story.
 while(picked.length<10){
  const options=liveNames
   .map(name=>({name,row:queues[name].find(canUse)}))
   .filter(x=>x.row)
   .sort((a,b)=>publishedMs(b.row)-publishedMs(a.row));
  if(!options.length)break;
  add(options[0].row,options[0].name);
 }

 return {rows:picked,liveNames};
}

function previousMixed(cat){
 const rows=previousNews?.categories?.[cat];
 return Array.isArray(rows)?rows:[];
}

const providers={
 SKY:await buildProvider("SKY",skyFeeds,previousNews?.providers?.SKY),
 GUARDIAN:await buildProvider("GUARDIAN",guardianFeeds,previousNews?.providers?.GUARDIAN),
 METRO:await buildProvider("METRO",metroFeeds,previousNews?.providers?.METRO)
};

const categories={};
const health={categories:{}};
for(const cat of CATEGORIES){
 const mixed=mixedTop10(cat,providers);
 let rows=mixed.rows;
 let retained=0;

 // If the live sources cannot make a full Top 10, preserve verified previous mixed stories
 // only for the missing slots. A complete live chart never uses stale provider data.
 if(rows.length<10){
  const usedLinks=new Set(rows.map(x=>linkKey(x.link)));
  const usedTitles=new Set(rows.map(x=>headlineKey(x.title)));
  for(const old of previousMixed(cat)){
   const link=linkKey(old?.link);
   const title=headlineKey(old?.title);
   if(!old?.title||!old?.link||usedLinks.has(link)||usedTitles.has(title))continue;
   rows.push(old);retained++;
   usedLinks.add(link);usedTitles.add(title);
   if(rows.length===10)break;
  }
 }

 categories[cat]=rows.slice(0,10);
 const failedProviders=PROVIDERS.filter(name=>!providers[name]?.health?.[cat]?.ok);
 health.categories[cat]={
  status:categories[cat].length===10&&retained===0?"healthy":categories[cat].length?"stale":"failed",
  liveProviders:mixed.liveNames,
  failedProviders,
  retainedPrevious:retained,
  count:categories[cat].length
 };
 console.log(`MIXED ${cat}: ${categories[cat].length}/10 stories from ${mixed.liveNames.join(", ")||"no live providers"}${retained?` + ${retained} retained previous`:""}`);
 if(categories[cat].length<10||retained){
  console.warn(`::warning::WozzaNews ${cat} is ${health.categories[cat].status}: ${categories[cat].length}/10 rows, ${retained} retained previous`);
 }
}

await fs.writeFile("news.json",JSON.stringify({
 updated:new Date().toISOString(),
 categories,
 health,
 // Keep provider pools for diagnostics/future resilience, but the app now renders one mixed chart.
 providers
},null,2)+"\n");
