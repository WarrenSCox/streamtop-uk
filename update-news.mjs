import fs from "node:fs/promises";

const feeds={
 UK:"https://feeds.skynews.com/feeds/rss/uk.xml",
 WORLD:"https://feeds.skynews.com/feeds/rss/world.xml",
 POLITICS:"https://feeds.skynews.com/feeds/rss/politics.xml",
 BUSINESS:"https://feeds.skynews.com/feeds/rss/business.xml",
 TECH:"https://feeds.skynews.com/feeds/rss/technology.xml",
 ENTERTAINMENT:"https://feeds.skynews.com/feeds/rss/entertainment.xml"
};

const decode=s=>String(s??"")
 .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")
 .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
 .replace(/&lt;/g,"<").replace(/&gt;/g,">").trim();

function tag(xml,name){
 const m=xml.match(new RegExp("<"+name+"(?:\\s[^>]*)?>([\\s\\S]*?)<\\/"+name+">","i"));
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
 return "";
}
async function fetchFeed(url){
 const r=await fetch(url,{redirect:"follow",headers:{
  "User-Agent":"Mozilla/5.0 (compatible; WozzaNews/5.3.36)",
  "Accept":"application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
 }});
 if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);
 const xml=await r.text();
 if(!/<rss\b|<feed\b/i.test(xml))throw new Error("Response was not RSS/XML");
 return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
}

const categories={};
for(const [cat,url] of Object.entries(feeds)){
 const items=await fetchFeed(url);
 console.log(`${cat}: ${items.length} raw RSS items`);
 const rows=items.map(x=>({
  title:tag(x,"title"),
  link:tag(x,"link")||tag(x,"guid"),
  published:tag(x,"pubDate")||tag(x,"dc:date"),
  source:"Sky News",
  image:media(x)
 })).filter(x=>x.title&&/^https?:\/\//i.test(x.link)).slice(0,10);
 if(!rows.length)throw new Error(`${cat}: RSS returned no usable stories`);
 categories[cat]=rows;
 console.log(`${cat}: ${rows.length} stories`);
}

await fs.writeFile("news.json",JSON.stringify({
 updated:new Date().toISOString(),
 source:{name:"Sky News",url:"https://news.sky.com/info/rss",official:true},
 categories
},null,2)+"\n");
