import fs from "node:fs/promises";

const providers={
 SKY:{
  name:"Sky News",
  homepage:"https://news.sky.com/info/rss",
  feeds:{
   UK:"https://feeds.skynews.com/feeds/rss/uk.xml",
   WORLD:"https://feeds.skynews.com/feeds/rss/world.xml",
   POLITICS:"https://feeds.skynews.com/feeds/rss/politics.xml",
   BUSINESS:"https://feeds.skynews.com/feeds/rss/business.xml",
   TECH:"https://feeds.skynews.com/feeds/rss/technology.xml",
   ENTERTAINMENT:"https://feeds.skynews.com/feeds/rss/entertainment.xml"
  }
 },
 GUARDIAN:{
  name:"The Guardian",
  homepage:"https://www.theguardian.com/help/feeds",
  feeds:{
   UK:"https://www.theguardian.com/uk-news/rss",
   WORLD:"https://www.theguardian.com/world/rss",
   POLITICS:"https://www.theguardian.com/politics/rss",
   BUSINESS:"https://www.theguardian.com/business/rss",
   TECH:"https://www.theguardian.com/technology/rss",
   ENTERTAINMENT:"https://www.theguardian.com/culture/rss"
  }
 },
 INDEPENDENT:{
  name:"The Independent",
  homepage:"https://www.independent.co.uk/service/rss-feeds-775086.html",
  feeds:{
   UK:"https://www.independent.co.uk/news/uk/rss",
   WORLD:"https://www.independent.co.uk/news/world/rss",
   POLITICS:"https://www.independent.co.uk/news/uk/politics/rss",
   BUSINESS:"https://www.independent.co.uk/news/business/rss",
   TECH:"https://www.independent.co.uk/tech/rss",
   ENTERTAINMENT:"https://www.independent.co.uk/arts-entertainment/rss"
  }
 }
};

const decode=s=>String(s??"")
 .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")
 .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
 .replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(+n)).trim();

function cleanHeadline(s){
 return decode(s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
}
function tag(xml,name){
 const pattern = `<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`;
 const m=xml.match(new RegExp(pattern,"i"));
 return decode(m?.[1]);
}
function media(xml){
 const patterns=[
  /<media:content\b[^>]*\burl=["']([^"']+)["']/i,
  /<media:thumbnail\b[^>]*\burl=["']([^"']+)["']/i,
  /<enclosure\b[^>]*\burl=["']([^"']+)["'][^>]*\btype=["']image\//i,
  /<enclosure\b[^>]*\btype=["']image\/[^"']*["'][^>]*\burl=["']([^"']+)["']/i
 ];
 for(const p of patterns){const m=xml.match(p);if(m)return decode(m[1])}
 const html=tag(xml,"description")||tag(xml,"content:encoded");
 const im=html.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i);
 return im?decode(im[1]):"";
}
async function fetchFeed(url){
 const r=await fetch(url,{redirect:"follow",headers:{
  "User-Agent":"Mozilla/5.0 (compatible; WozzaNews/5.3.39)",
  "Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
 }});
 if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();
 if(!/<rss\b|<feed\b/i.test(xml))throw new Error("Response was not RSS/XML");
 return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
}

const newsProviders={};
for(const [providerKey,provider] of Object.entries(providers)){
 const categories={};
 for(const [cat,url] of Object.entries(provider.feeds)){
  try{
   const items=await fetchFeed(url);
   console.log(`${providerKey}/${cat}: ${items.length} RSS items received`);
   const rows=items.map(x=>({
    title:cleanHeadline(tag(x,"title")),
    link:tag(x,"link")||tag(x,"guid"),
    published:tag(x,"pubDate")||tag(x,"dc:date"),
    source:provider.name,
    image:media(x)
   })).filter(x=>x.title&&/^https?:\/\//i.test(x.link)).slice(0,10);
   if(!rows.length)throw new Error("RSS returned no usable stories");
   categories[cat]=rows;
   console.log(`${providerKey}/${cat}: ${rows.length} stories`);
  }catch(err){
   // One publisher/category should never take down the other working feeds.
   console.error(`${providerKey}/${cat}: ${err.message}`);
   categories[cat]=[];
  }
 }
 newsProviders[providerKey]={
  name:provider.name, url:provider.homepage, categories
 };
}

// Sky remains the backwards-compatible default.
await fs.writeFile("news.json",JSON.stringify({
 updated:new Date().toISOString(),
 defaultProvider:"SKY",
 providers:newsProviders,
 categories:newsProviders.SKY.categories
},null,2)+"\n");
