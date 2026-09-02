import fs from "node:fs/promises";

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
async function fetchFeed(url){
 const r=await fetch(url,{redirect:"follow",headers:{
  "User-Agent":"Mozilla/5.0 (compatible; WozzaNews/5.3.40)",
  "Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
 }});
 if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();
 if(!/<rss\b|<feed\b/i.test(xml))throw new Error("Response was not RSS/XML");
 return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
}
async function buildProvider(name,feeds){
 const categories={};
 for(const [cat,feedValue] of Object.entries(feeds)){
  const urls=Array.isArray(feedValue)?feedValue:[feedValue];
  let items=null,lastError=null;
  for(const url of urls){
   try{items=await fetchFeed(url);if(items.length)break;}catch(err){lastError=err;console.warn(`${name} ${cat}: ${url} failed — ${err.message}`)}
  }
  if(!items?.length)throw lastError||new Error(`${name} ${cat}: no RSS items received`);
  console.log(`${name} ${cat}: ${items.length} RSS items received`);
  const rows=items.map(x=>({
   title:cleanHeadline(tag(x,"title")),
   link:tag(x,"link")||tag(x,"guid"),
   published:tag(x,"pubDate")||tag(x,"dc:date"),
   source:name==="SKY"?"Sky News":name==="GUARDIAN"?"The Guardian":"Metro",
   image:media(x)
  })).filter(x=>x.title&&/^https?:\/\//i.test(x.link)).slice(0,10);
  if(!rows.length)throw new Error(`${name} ${cat}: RSS returned no usable stories`);
  categories[cat]=rows;
  console.log(`${name} ${cat}: ${rows.length} usable stories`);
 }
 return {categories};
}

const providers={
 SKY:await buildProvider("SKY",skyFeeds),
 GUARDIAN:await buildProvider("GUARDIAN",guardianFeeds),
 METRO:await buildProvider("METRO",metroFeeds)
};

await fs.writeFile("news.json",JSON.stringify({
 updated:new Date().toISOString(),
 providers,
 // Backwards compatibility for any cached v5.3.38 client:
 categories:providers.SKY.categories
},null,2)+"\n");
