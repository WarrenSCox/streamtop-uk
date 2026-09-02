import fs from "node:fs/promises";
const feeds={
 UK:"https://feeds.skynews.com/feeds/rss/uk.xml",
 WORLD:"https://feeds.skynews.com/feeds/rss/world.xml",
 POLITICS:"https://feeds.skynews.com/feeds/rss/politics.xml",
 BUSINESS:"https://feeds.skynews.com/feeds/rss/business.xml",
 TECH:"https://feeds.skynews.com/feeds/rss/technology.xml",
 ENTERTAINMENT:"https://feeds.skynews.com/feeds/rss/entertainment.xml"
};
const decode=s=>String(s||"").replace(/<!\[CDATA\[|\]\]>/g,"").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim();
const tag=(x,n)=>decode((x.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${n}>`,"i"))||[])[1]);
const attr=(x,n,a)=>((x.match(new RegExp(`<${n}[^>]*\\s${a}=["']([^"']+)["'][^>]*>`,"i"))||[])[1]||"");
let out={updated:new Date().toISOString(),source:{name:"Sky News",url:"https://news.sky.com/info/rss",official:true},categories:{}};
for(const [cat,url] of Object.entries(feeds)){try{let r=await fetch(url,{headers:{"user-agent":"WozzaNews/1.0"}});if(!r.ok)throw Error(r.status);let xml=await r.text();let items=[...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);out.categories[cat]=items.slice(0,10).map(x=>({title:tag(x,"title"),link:tag(x,"link"),published:tag(x,"pubDate"),source:"Sky News",image:attr(x,"media:content","url")||attr(x,"media:thumbnail","url")||attr(x,"enclosure","url")})).filter(x=>x.title&&x.link)}catch(e){console.error(cat,e.message);out.categories[cat]=[]}}
await fs.writeFile("news.json",JSON.stringify(out,null,2));