import fs from "node:fs/promises";

const STOCK_KEY="STOCKS";
const LEGACY_KEY="STOCK_MARKET";
const SOURCES={
 MAGPIE:{
  label:"The Twelfth Magpie",
  feeds:[
   "https://www.twelfthmagpie.com/feed/",
   "https://news.google.com/rss/search?q=stocks%20OR%20shares%20OR%20FTSE%20source%3A%22The%20Twelfth%20Magpie%22%20when%3A7d&hl=en-GB&gl=GB&ceid=GB:en"
  ]
 },
 YAHOO:{
  label:"Yahoo Finance",
  feeds:[
   "https://finance.yahoo.com/news/rssindex",
   "https://feeds.finance.yahoo.com/rss/2.0/headline?s=%5EFTSE,%5EGSPC,%5EDJI,%5EIXIC&region=GB&lang=en-GB",
   "https://news.google.com/rss/search?q=stocks%20OR%20shares%20OR%20markets%20source%3A%22Yahoo%20Finance%22%20when%3A7d&hl=en-GB&gl=GB&ceid=GB:en"
  ]
 },
 REUTERS:{
  label:"Reuters",
  feeds:[
   "https://news.google.com/rss/search?q=stocks%20OR%20shares%20OR%20markets%20source%3AReuters%20when%3A7d&hl=en-GB&gl=GB&ceid=GB:en"
  ]
 }
};

const decode=s=>String(s??"")
 .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")
 .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
 .replace(/&lt;/g,"<").replace(/&gt;/g,">")
 .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n))
 .replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).trim();
const clean=s=>decode(s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
const tag=(s,n)=>decode(s.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${n}>`,"i"))?.[1]);
const attr=(s,n)=>decode(String(s||"").match(new RegExp(`\\b${n}=["']([^"']+)["']`,"i"))?.[1]);
const ms=x=>Date.parse(x?.published||"")||0;
const titleKey=s=>clean(s).toLowerCase()
 .replace(/\s*[-|–]\s*(?:reuters|yahoo finance|the twelfth magpie|the motley fool).*$/i,"")
 .replace(/[^a-z0-9]+/g," ").trim();
function linkKey(s){try{const u=new URL(s);return u.hostname.replace(/^www\./,"")+u.pathname.replace(/\/$/,"")}catch{return String(s||"")}}

function embeddedImage(item){
 for(const m of item.matchAll(/<(?:media:content|media:thumbnail|enclosure)\b[^>]*>/gi)){
  const url=attr(m[0],"url");
  if(url&&(/^<media:/i.test(m[0])||/image\//i.test(attr(m[0],"type"))))return url;
 }
 for(const field of ["description","content:encoded"]){
  const html=tag(item,field);const img=attr(html,"src");if(img)return img;
 }
 return "";
}
function relevant(row){
 const s=`${row.title} ${row.categories}`.toLowerCase();
 const positive=/\b(stock market|stocks?|shares?|share price|ftse|nasdaq|s&p ?500|dow jones|equities|investing|investors?|dividend|earnings|results|profit warning|ipo|stock exchange|market rally|market selloff|market sell-off|market crash|interest rates?|central bank|bank of england|federal reserve|inflation|bond yields?|treasury yields?|commodities|oil prices?|gold prices?|takeover|merger|acquisition|isa|portfolio|market cap|market capitalisation)\b/i;
 const negative=/\b(mortgage rates?|house prices?|property prices?|council tax|benefits|state pension|inheritance tax|car insurance|energy bills|savings account|credit card|personal loan|shopping deals|lottery|celebrity|football|premier league)\b/i;
 return positive.test(s)&&!negative.test(s);
}
function sourceMatches(source,origin){
 if(!origin)return true; // direct publisher feeds often omit <source>
 if(source==="MAGPIE")return /Twelfth Magpie|Motley Fool UK/i.test(origin);
 if(source==="YAHOO")return /^Yahoo Finance(?: UK)?$/i.test(origin);
 if(source==="REUTERS")return /^Reuters$/i.test(origin);
 return false;
}
function parse(xml,source){
 const items=[...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(x=>x[0]);
 return items.map(item=>{
  const origin=clean(tag(item,"source"));
  if(!sourceMatches(source,origin))return null;
  let title=clean(tag(item,"title"));
  title=title.replace(/\s*[-|–]\s*(?:Reuters|Yahoo Finance|The Twelfth Magpie|The Motley Fool)\s*$/i,"").trim();
  const row={
   title,
   link:tag(item,"link")||tag(item,"guid"),
   published:tag(item,"pubDate")||tag(item,"dc:date"),
   source:SOURCES[source].label,
   provider:source,
   categories:[...item.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi)].map(x=>clean(x[1])).join(" "),
   image:embeddedImage(item)
  };
  return row;
 }).filter(x=>x&&x.title&&/^https?:\/\//i.test(x.link)&&ms(x)&&relevant(x));
}
function unique(rows){
 const links=new Set(),titles=new Set();
 return rows.filter(x=>{const l=linkKey(x.link),t=titleKey(x.title);if(!t||links.has(l)||titles.has(t))return false;links.add(l);titles.add(t);return true});
}

// When all three sources are healthy the result is deliberately 4/3/3.
// The source with the freshest story gets the fourth slot, then the final 10 are shown newest-first.
export function mixStocks(rowsBySource,limit=10){
 const names=Object.keys(SOURCES).filter(n=>rowsBySource[n]?.length);
 if(!names.length)return [];
 const queues=Object.fromEntries(names.map(n=>[n,unique(rowsBySource[n]).sort((a,b)=>ms(b)-ms(a))]));
 const targets={};
 if(names.length===3&&limit===10){
  names.forEach(n=>targets[n]=3);
  const freshest=[...names].sort((a,b)=>ms(queues[b][0])-ms(queues[a][0]))[0];targets[freshest]=4;
 }else{
  const base=Math.floor(limit/names.length),remainder=limit-base*names.length;
  const freshness=[...names].sort((a,b)=>ms(queues[b][0])-ms(queues[a][0]));
  names.forEach(n=>targets[n]=base);for(let i=0;i<remainder;i++)targets[freshness[i%freshness.length]]++;
 }
 const picked=[],usedL=new Set(),usedT=new Set();
 const add=x=>{const l=linkKey(x.link),t=titleKey(x.title);if(usedL.has(l)||usedT.has(t))return false;usedL.add(l);usedT.add(t);picked.push(x);return true};
 for(const n of names){for(const x of queues[n]){if(picked.filter(y=>y.provider===n).length>=targets[n])break;add(x)}}
 // If a source cannot meet its target, donate empty slots to the freshest remaining stories.
 const leftovers=names.flatMap(n=>queues[n]).filter(x=>!usedL.has(linkKey(x.link))&&!usedT.has(titleKey(x.title))).sort((a,b)=>ms(b)-ms(a));
 for(const x of leftovers){if(picked.length>=limit)break;add(x)}
 return picked.sort((a,b)=>ms(b)-ms(a)).slice(0,limit);
}

async function fetchText(url,accept="text/html,application/xhtml+xml,application/rss+xml,application/xml;q=0.9,*/*;q=0.8"){
 const r=await fetch(url,{redirect:"follow",signal:AbortSignal.timeout(15000),headers:{"User-Agent":"Mozilla/5.0 (compatible; WozzaNews/6.2.54)",Accept:accept}});
 if(!r.ok)throw Error(`${r.status} ${r.statusText}`);
 return {text:await r.text(),url:r.url};
}
async function fetchFeed(url){
 const {text}=await fetchText(url,"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8");
 if(!/<rss\b|<feed\b/i.test(text))throw Error("Not an RSS feed");return text;
}
async function enrichRow(row){
 // Fill missing thumbnails from the article's OpenGraph image and, where a redirect resolves,
 // keep the publisher's final article URL rather than an aggregator link.
 if(row.image&&!/news\.google\.com/i.test(row.link))return row;
 try{
  const {text,url}=await fetchText(row.link);
  const og=text.match(/<meta\b[^>]*(?:property|name)=["'](?:og:image|twitter:image)["'][^>]*content=["']([^"']+)["'][^>]*>/i)?.[1]
   ||text.match(/<meta\b[^>]*content=["']([^"']+)["'][^>]*(?:property|name)=["'](?:og:image|twitter:image)["'][^>]*>/i)?.[1];
  const canonical=text.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
   ||text.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1];
  return {...row,link:/^https?:\/\//i.test(canonical||"")?decode(canonical):url,image:row.image||decode(og||"")};
 }catch{return row}
}
async function enrichRows(rows){
 const out=[];for(let i=0;i<rows.length;i+=6){out.push(...await Promise.all(rows.slice(i,i+6).map(enrichRow)))}return out;
}

export async function updateStocks(){
 let previous={};try{previous=JSON.parse(await fs.readFile("news.json","utf8"))}catch{}
 const pools={},health={},now=Date.now();
 for(const [name,config] of Object.entries(SOURCES)){
  let rows=[],errors=[];
  // Combine successful feeds rather than stopping at the first one; this makes each source more resilient.
  for(const url of config.feeds){
   try{const parsed=parse(await fetchFeed(url),name);rows.push(...parsed);if(!parsed.length)errors.push(`${url}: no relevant articles`)}
   catch(e){errors.push(`${url}: ${e.message}`)}
  }
  let live=unique(rows).filter(x=>ms(x)<=now+300000&&ms(x)>now-7*86400000).sort((a,b)=>ms(b)-ms(a)).slice(0,12);
  live=await enrichRows(live);
  const prior=previous.providers?.[name]?.categories?.[STOCK_KEY]||previous.providers?.[name]?.categories?.[LEGACY_KEY]||[];
  pools[name]=live.length?live:prior.filter(x=>ms(x)>now-7*86400000&&relevant(x));
  health[name]={ok:live.length>0,count:live.length,retainedPrevious:live.length?0:pools[name].length,errors};
  console.log(`STOCKS ${name}: ${live.length} live, ${health[name].retainedPrevious} retained`);
  errors.forEach(e=>console.warn(`STOCKS ${name}: ${e}`));
 }
 const livePools=Object.fromEntries(Object.keys(SOURCES).map(n=>[n,health[n].ok?pools[n]:[]]));
 let rows=mixStocks(livePools,10),liveCount=rows.length;
 if(rows.length<10){
  const fallback=mixStocks(pools,10),links=new Set(rows.map(x=>linkKey(x.link))),titles=new Set(rows.map(x=>titleKey(x.title)));
  for(const x of fallback){if(rows.length===10)break;if(links.has(linkKey(x.link))||titles.has(titleKey(x.title)))continue;rows.push(x);links.add(linkKey(x.link));titles.add(titleKey(x.title))}
  rows.sort((a,b)=>ms(b)-ms(a));
 }
 const retained=rows.length-liveCount;
 const providers={...previous.providers};
 for(const n of Object.keys(SOURCES))providers[n]={...(providers[n]||{}),categories:{...(providers[n]?.categories||{}),[STOCK_KEY]:pools[n]},health:{...(providers[n]?.health||{}),[STOCK_KEY]:health[n]}};
 const categories={...previous.categories,[STOCK_KEY]:rows};delete categories[LEGACY_KEY];
 const healthCategories={...previous.health?.categories,[STOCK_KEY]:{status:rows.length===10&&!retained?"healthy":rows.length?"stale":"failed",count:rows.length,liveProviders:Object.keys(SOURCES).filter(n=>health[n].ok),failedProviders:Object.keys(SOURCES).filter(n=>!health[n].ok),retainedPrevious:retained,sourceHealth:health}};delete healthCategories[LEGACY_KEY];
 const result={...previous,updated:previous.updated||new Date().toISOString(),stocksUpdated:new Date().toISOString(),categories,health:{...previous.health,categories:healthCategories},providers};
 await fs.writeFile("news.json",JSON.stringify(result,null,2)+"\n");
 console.log(`STOCKS: ${rows.length}/10 — ${Object.keys(SOURCES).map(n=>`${n} ${rows.filter(x=>x.provider===n).length}`).join(", ")}`);
 if(rows.length<10||retained)console.warn(`::warning::Stocks is ${result.health.categories[STOCK_KEY].status}`);
 return result;
}
if(process.argv[1]&&import.meta.url===new URL("file://"+process.argv[1]).href)await updateStocks();
