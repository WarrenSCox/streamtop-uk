import fs from "node:fs/promises";

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
 const r=await fetch(url,{redirect:"follow",headers:{
  "User-Agent":"Mozilla/5.0 (compatible; WozzaNews/5.3.41)",
  "Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
 }});
 if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();
 if(!/<rss\b|<feed\b/i.test(xml))throw new Error("Response was not RSS/XML");
 return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
}
async function buildProvider(name,feeds,previousProvider){
 const categories={};
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

  if(!rawItems.length){
   const previousRows=previousProvider?.categories?.[cat];
   if(Array.isArray(previousRows) && previousRows.length){
    categories[cat]=previousRows;
    console.warn(`${name} ${cat}: no RSS items received — keeping ${previousRows.length} previous stories`);
    continue;
   }
   console.warn(`${name} ${cat}: no RSS items received and no previous category is available — continuing with an empty category${lastError?` (${lastError.message})`:""}`);
   categories[cat]=[];
   continue;
  }

  const seen=new Set();
  let rows=rawItems.map(x=>({
   title:cleanHeadline(tag(x,"title")),
   link:tag(x,"link")||tag(x,"guid"),
   published:tag(x,"pubDate")||tag(x,"dc:date"),
   source:name==="SKY"?"Sky News":name==="GUARDIAN"?"The Guardian":"Metro",
   categories:[...x.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi)].map(m=>cleanHeadline(m[1])).join(" "),
   image:media(x)
  })).filter(x=>{
   if(!x.title||!/^https?:\/\//i.test(x.link))return false;
   const key=(x.link||x.title).toLowerCase();
   if(seen.has(key))return false;
   seen.add(key);
   return true;
  });

  if(name==="METRO"){
   rows=rows.filter(row=>metroCategoryMatches(cat,row));
  }

  rows=rows.slice(0,10);
  if(!rows.length){
   const previousRows=previousProvider?.categories?.[cat];
   if(Array.isArray(previousRows) && previousRows.length){
    categories[cat]=previousRows;
    console.warn(`${name} ${cat}: RSS returned no correctly classified stories — keeping ${previousRows.length} previous stories`);
   }else{
    categories[cat]=[];
    console.warn(`${name} ${cat}: RSS returned no correctly classified stories and no previous category is available — continuing with an empty category`);
   }
   continue;
  }
  categories[cat]=rows;
  console.log(`${name} ${cat}: ${rows.length} correctly classified usable stories`);
 }
 return {categories};
}

const providers={
 SKY:await buildProvider("SKY",skyFeeds,previousNews?.providers?.SKY),
 GUARDIAN:await buildProvider("GUARDIAN",guardianFeeds,previousNews?.providers?.GUARDIAN),
 METRO:await buildProvider("METRO",metroFeeds,previousNews?.providers?.METRO)
};

await fs.writeFile("news.json",JSON.stringify({
 updated:new Date().toISOString(),
 providers,
 // Backwards compatibility for any cached v5.3.38 client:
 categories:providers.SKY.categories
},null,2)+"\n");
