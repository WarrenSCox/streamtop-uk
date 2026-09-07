import fs from "node:fs/promises";

const SOURCES={
 FOOL:{label:"Motley Fool UK",feeds:["https://www.fool.co.uk/feed/","https://news.google.com/rss/search?q=site%3Afool.co.uk%2Finvesting%2F&hl=en-GB&gl=GB&ceid=GB:en"]},
 YAHOO:{label:"Yahoo Finance UK",feeds:["https://uk.finance.yahoo.com/rss/","https://news.google.com/rss/search?q=site%3Auk.finance.yahoo.com%2Fnews%2F&hl=en-GB&gl=GB&ceid=GB:en"]},
 REUTERS:{label:"Reuters",feeds:["https://news.google.com/rss/search?q=site%3Areuters.com%2Fmarkets%2F&hl=en-GB&gl=GB&ceid=GB:en"]}
};
const decode=s=>String(s??"").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).trim();
const clean=s=>decode(s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
const tag=(s,n)=>decode(s.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${n}>`,"i"))?.[1]);
const attr=(s,n)=>decode(s.match(new RegExp(`\\b${n}=["']([^"']+)["']`,"i"))?.[1]);
const ms=x=>Date.parse(x?.published||"")||0;
const titleKey=s=>clean(s).toLowerCase().replace(/\s*[-|–]\s*(?:reuters|yahoo finance|the motley fool).*$/i,"").replace(/[^a-z0-9]+/g," ").trim();
function linkKey(s){try{const u=new URL(s);return u.hostname.replace(/^www\./,"")+u.pathname.replace(/\/$/,"")}catch{return String(s||"")}}
function image(item){
 for(const m of item.matchAll(/<(?:media:content|media:thumbnail|enclosure)\b[^>]*>/gi)){
  const url=attr(m[0],"url");if(url&&(/^<media:/i.test(m[0])||/image\//i.test(attr(m[0],"type"))))return url;
 }
 return attr(tag(item,"description"),"src")||"";
}
function relevant(row){
 const s=`${row.title} ${row.categories}`.toLowerCase();
 const positive=/\b(stock market|stocks|shares|share price|ftse|nasdaq|s&p 500|dow jones|equities|investing|investors|dividend|earnings|quarterly results|annual results|company results|profit warning|ipo|stock exchange|market rally|market selloff|market sell-off|market crash|interest rates|central bank|bank of england|federal reserve|inflation|bond yields|treasury yields|commodities|oil prices|gold prices|takeover|merger|acquisition|isa|portfolio|market cap|market capitalisation)\b/i;
 const negative=/\b(mortgage rates|house prices|property prices|council tax|benefits|state pension|inheritance tax|car insurance|energy bills|savings account|credit card|personal loan|shopping deals|lottery|celebrity|football|premier league)\b/i;
 return positive.test(s)&&!negative.test(s);
}
function parse(xml,source){
 const items=[...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(x=>x[0]);
 return items.map(item=>{
  const origin=clean(tag(item,"source"));
  let title=clean(tag(item,"title"));
  if(source==="REUTERS")title=title.replace(/\s*[-|–]\s*Reuters\s*$/i,"").trim();
  let link=tag(item,"link")||tag(item,"guid");
  // Yahoo syndicates other publishers. Only its own reporting counts as Yahoo.
  if(source==="YAHOO" && origin && !/^Yahoo Finance(?: UK)?$/i.test(origin))return null;
  if(source==="REUTERS" && !/^Reuters$/i.test(origin))return null;
  if(source==="FOOL" && origin && !/^(?:The )?Motley Fool(?: UK)?$/i.test(origin))return null;
  const row={title,link,published:tag(item,"pubDate")||tag(item,"dc:date"),source:SOURCES[source].label,provider:source,categories:[...item.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi)].map(x=>clean(x[1])).join(" "),image:image(item)};
  return row;
 }).filter(x=>x&&x.title&&/^https?:\/\//i.test(x.link)&&ms(x)&&relevant(x));
}
function unique(rows){
 const links=new Set(),titles=new Set();
 return rows.filter(x=>{const l=linkKey(x.link),t=titleKey(x.title);if(links.has(l)||titles.has(t))return false;links.add(l);titles.add(t);return true});
}
export function mixStock(rowsBySource,limit=10){
 const names=Object.keys(SOURCES).filter(n=>rowsBySource[n]?.length);
 const queues=Object.fromEntries(names.map(n=>[n,unique(rowsBySource[n]).sort((a,b)=>ms(b)-ms(a))]));
 const picked=[],counts=Object.fromEntries(names.map(n=>[n,0])),usedL=new Set(),usedT=new Set();
 const valid=x=>x&&!usedL.has(linkKey(x.link))&&!usedT.has(titleKey(x.title));
 function add(x,n){picked.push(x);counts[n]++;usedL.add(linkKey(x.link));usedT.add(titleKey(x.title))}
 // Four per source when all three have enough stories; unused slots are donated.
 const cap=names.length===3?4:limit;
 while(picked.length<limit){
  const options=names.filter(n=>counts[n]<cap).map(n=>({n,x:queues[n].find(valid)})).filter(v=>v.x).sort((a,b)=>ms(b.x)-ms(a.x));
  if(!options.length)break;add(options[0].x,options[0].n);
 }
 while(picked.length<limit){
  const options=names.map(n=>({n,x:queues[n].find(valid)})).filter(v=>v.x).sort((a,b)=>ms(b.x)-ms(a.x));
  if(!options.length)break;add(options[0].x,options[0].n);
 }
 return picked.sort((a,b)=>ms(b)-ms(a));
}
async function fetchFeed(url){
 const r=await fetch(url,{redirect:"follow",signal:AbortSignal.timeout(15000),headers:{"User-Agent":"Mozilla/5.0 (compatible; WozzaNews/6.2.53)","Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"}});
 if(!r.ok)throw Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();if(!/<rss\b|<feed\b/i.test(xml))throw Error("Not an RSS feed");return xml;
}
export async function updateStock(){
 let previous={};try{previous=JSON.parse(await fs.readFile("news.json","utf8"))}catch{}
 const pools={},health={},now=Date.now();
 for(const [name,config] of Object.entries(SOURCES)){
  let rows=[],errors=[];
  for(const url of config.feeds){
   try{rows=parse(await fetchFeed(url),name);if(rows.length)break;errors.push(`${url}: no relevant articles`)}
   catch(e){errors.push(`${url}: ${e.message}`)}
  }
  const live=unique(rows).filter(x=>ms(x)<=now+300000).sort((a,b)=>ms(b)-ms(a)).slice(0,30);
  const old=previous.providers?.[name]?.categories?.STOCK_MARKET||[];
  pools[name]=live.length?live:old.filter(x=>ms(x)>now-7*86400000&&relevant(x));
  health[name]={ok:live.length>0,count:live.length,retainedPrevious:live.length?0:pools[name].length,errors};
  console.log(`STOCK ${name}: ${live.length} live, ${health[name].retainedPrevious} retained`);
  errors.forEach(e=>console.warn(`STOCK ${name}: ${e}`));
 }
 const livePools=Object.fromEntries(Object.keys(SOURCES).map(n=>[n,health[n].ok?pools[n]:[]]));
 let rows=mixStock(livePools);
 const liveCount=rows.length;
 if(rows.length<10){
  const candidates=mixStock(pools,30);
  const links=new Set(rows.map(x=>linkKey(x.link))),titles=new Set(rows.map(x=>titleKey(x.title)));
  for(const x of candidates){if(rows.length===10)break;if(links.has(linkKey(x.link))||titles.has(titleKey(x.title)))continue;rows.push(x);links.add(linkKey(x.link));titles.add(titleKey(x.title))}
  rows.sort((a,b)=>ms(b)-ms(a));
 }
 const retained=rows.length-liveCount;
 const providers={...previous.providers};
 for(const n of Object.keys(SOURCES))providers[n]={...(providers[n]||{}),categories:{...(providers[n]?.categories||{}),STOCK_MARKET:pools[n]},health:{...(providers[n]?.health||{}),STOCK_MARKET:health[n]}};
 const result={...previous,updated:previous.updated||new Date().toISOString(),stockUpdated:new Date().toISOString(),categories:{...previous.categories,STOCK_MARKET:rows},health:{...previous.health,categories:{...previous.health?.categories,STOCK_MARKET:{status:rows.length===10&&!retained?"healthy":rows.length?"stale":"failed",count:rows.length,liveProviders:Object.keys(SOURCES).filter(n=>health[n].ok),failedProviders:Object.keys(SOURCES).filter(n=>!health[n].ok),retainedPrevious:retained,sourceHealth:health}}},providers};
 await fs.writeFile("news.json",JSON.stringify(result,null,2)+"\n");
 console.log(`STOCK MARKET: ${rows.length}/10, ${retained} retained`);
 if(rows.length<10||retained)console.warn(`::warning::Stock Market is ${result.health.categories.STOCK_MARKET.status}`);
 return result;
}
if(process.argv[1]&&import.meta.url===new URL("file://"+process.argv[1]).href)await updateStock();
