const CATS=["UK","WORLD","POLITICS","BUSINESS","TECH","ENTERTAINMENT","STOCKS"];
const COLORS=["#F5A083","#B9C9E3","#BFE2AF","#FFDD69","#CFC5EF","#F4A083","#B9D9C3"];
let active="UK", data={categories:{}};
const $=s=>document.querySelector(s);
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function ago(d){if(!d)return"";let n=(Date.now()-new Date(d))/60000;if(n<60)return Math.max(1,Math.floor(n))+"m ago";if(n<1440)return Math.floor(n/60)+"h ago";return Math.floor(n/1440)+"d ago"}
function tabs(){let n=$("#newsTabs");CATS.forEach((c,i)=>{let b=document.createElement("button");b.textContent=c;b.style.background=COLORS[i];b.className="service-tab "+(c===active?"active":"");b.onclick=()=>{active=c;tabsRefresh();render()};n.appendChild(b)})}
function tabsRefresh(){[...$("#newsTabs").children].forEach(b=>b.classList.toggle("active",b.textContent===active));const a=[...$("#newsTabs").children].find(b=>b.textContent===active);a?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});}
function updateSourceStrip(){
 const stock=active==="STOCKS";
 $("#newsProviderSwitch").classList.toggle("stock-sources",stock);
 $("#newsProviderSwitch").setAttribute("aria-label",stock?"News sources: The Twelfth Magpie, Yahoo Finance and Reuters":"News sources: Sky News, The Guardian and Metro");
 $("#newsProviderSwitch").innerHTML=stock?`<div class="news-provider-btn" aria-label="The Twelfth Magpie"><span class="stock-logo magpie-logo"><b>TWELFTH</b><small>MAGPIE</small></span></div><div class="news-provider-btn" aria-label="Yahoo Finance UK"><span class="stock-logo yahoo-logo"><b>yahoo!</b><small>finance</small></span></div><div class="news-provider-btn" aria-label="Reuters"><span class="stock-logo reuters-logo"><span class="reuters-mark" aria-hidden="true">◌</span><b>Reuters</b></span></div>`:`<div class="news-provider-btn" aria-label="Sky News"><span class="sky-logo">sky <b>news</b></span></div><div class="news-provider-btn" aria-label="The Guardian"><span class="guardian-logo"><i>G</i><b>The<br>Guardian</b></span></div><div class="news-provider-btn" aria-label="Metro"><span class="metro-logo">METRO</span></div>`;
}
function categoryRows(){return data.categories?.[active]||[]}
const STOCK_PHOTOS={
 ai:[
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&h=500&q=82"
 ],
 markets:[
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=500&h=500&q=82"
 ],
 money:[
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&h=500&q=82"
 ],
 business:[
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&h=500&q=82"
 ],
 office:[
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&h=500&q=82"
 ],
 retail:[
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&h=500&q=82",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&h=500&q=82"
 ]
};
const STOCK_GENERIC=[
 ...STOCK_PHOTOS.markets,...STOCK_PHOTOS.business,...STOCK_PHOTOS.money,...STOCK_PHOTOS.office
];
function stableIndex(text,n){
 let h=0;for(const c of String(text||""))h=((h<<5)-h+c.charCodeAt(0))|0;
 return Math.abs(h)%n;
}
function stockPhotoPool(item){
 const t=String(item?.title||"").toLowerCase();
 if(/\b(chatgpt|openai|ai\b|artificial intelligence|tech|technology|chip|semiconductor|software|spacex|tesla)\b/.test(t))return STOCK_PHOTOS.ai;
 if(/\b(yen|dollar|euro|sterling|pound|currency|currencies|forex|fx|exchange rate|inflation|interest rate|rates|bond|yield|treasury|fed\b|federal reserve|bank of england)\b/.test(t))return STOCK_PHOTOS.money;
 if(/\b(oil|energy|crude|brent|wti|gas|shell|bp\b|opec)\b/.test(t))return STOCK_PHOTOS.markets;
 if(/\b(luxury|retail|shop|shopping|brand|fashion|consumer)\b/.test(t))return STOCK_PHOTOS.retail;
 if(/\b(bank|banking|pank|finance|financial|lender|mortgage|credit)\b/.test(t))return STOCK_PHOTOS.business;
 if(/\b(job|jobs|employment|payroll|worker|office|company|companies|business)\b/.test(t))return STOCK_PHOTOS.office;
 if(/\b(stock|stocks|share|shares|ftse|market|markets|index|indices|equity|equities|invest|portfolio|dividend|earnings)\b/.test(t))return STOCK_PHOTOS.markets;
 return STOCK_GENERIC;
}
function stockFallbacks(item){
 const primary=stockPhotoPool(item);
 const first=stableIndex(item?.title,primary.length);
 const ordered=[primary[first],...primary.filter((_,i)=>i!==first)];
 const genericStart=stableIndex((item?.title||"")+"generic",STOCK_GENERIC.length);
 const generic=[...STOCK_GENERIC.slice(genericStart),...STOCK_GENERIC.slice(0,genericStart)];
 return [...new Set([...ordered,...generic])];
}
function render(){
 const rows=categoryRows();
 const newsTitle=$("#newsTitle");
 newsTitle.textContent=active==="STOCKS"?"STOCKS":"LATEST "+active;
 updateSourceStrip();
 newsTitle.classList.toggle("entertainment-title",active==="ENTERTAINMENT");
 $("#newsChart").innerHTML=rows.slice(0,10).map((x,i)=>{
  const fallbacks=active==="STOCKS"?stockFallbacks(x):[];
  const fallback=fallbacks[0]||"";
  const meta=ago(x.published);
  const byline="";
  return `<li class="news-row"><span class="rank">${String(i+1).padStart(2,"0")}</span><a class="news-image-link" href="${esc(x.link)}" target="_blank" rel="noopener" aria-label="${esc(x.title)}">${(x.image||fallback)?`<img class="poster news-thumb" src="${esc(x.image||fallback)}" alt="" data-stock-fallback="${esc(fallback)}" data-stock-fallbacks="${esc(JSON.stringify(fallbacks))}">`:`<span class="poster news-thumb news-thumb-fallback">W</span>`}</a><a class="news-story" href="${esc(x.link)}" target="_blank" rel="noopener"><span class="news-copy"><strong>${esc(x.title)}</strong><small>${byline}${esc(meta)}</small></span></a></li>`;
 }).join("");
 $("#newsChart").querySelectorAll("img[data-stock-fallback]").forEach(img=>{
  img.addEventListener("error",()=>{
   let list=[];try{list=JSON.parse(img.dataset.stockFallbacks||"[]")}catch{}
   const current=img.getAttribute("src")||"";
   const next=list.find(url=>url&&url!==current);
   if(next){
    img.dataset.stockFallbacks=JSON.stringify(list.filter(url=>url!==next));
    img.src=next;
    return;
   }
   img.onerror=null;
  });
 });
 $("#newsError").classList.toggle("hidden",rows.length>0);
}
async function loadNews(){
 try{
  const r=await fetch("./news.json?v="+Date.now(),{cache:"no-store"});
  if(!r.ok)throw new Error("news.json "+r.status);
  const x=await r.json();
  data=(x&&x.categories)?x:{categories:{}};
  const d=x.updated?new Date(x.updated):null;
  $("#newsUpdated").textContent=d&&!Number.isNaN(d.valueOf())?"Updated "+d.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})+", "+d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}):"Latest headlines";
 }catch(e){console.error("WozzaNews load failed",e);data={categories:{}}}
 render();
}
tabs();loadNews();
function initMenu(){const menu=$("#wozzaMenu"),bd=$("#wozzaMenuBackdrop"),trigger=$(".header-copy");let timer=null,start=null;
 const open=()=>{menu.classList.add("open");menu.setAttribute("aria-hidden","false");bd.hidden=false};
 const close=()=>{menu.classList.remove("open");menu.setAttribute("aria-hidden","true");bd.hidden=true};
 trigger?.addEventListener("click",open);bd?.addEventListener("click",close);$(".wozza-menu-back")?.addEventListener("click",close);
 $("#wozzaMenuList")?.addEventListener("click",e=>{let b=e.target.closest("[data-href]");if(b)location.href=b.dataset.href});
 document.addEventListener("pointerdown",e=>{if(e.target.closest("a,button,.wozza-menu"))return;start={x:e.clientX,y:e.clientY};timer=setTimeout(()=>{if(start&&start.x>innerWidth*.2&&start.x<innerWidth*.8&&start.y>innerHeight*.2&&start.y<innerHeight*.8)open()},350)});
 document.addEventListener("pointermove",e=>{if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)>12){clearTimeout(timer);timer=null}});
 document.addEventListener("pointerup",()=>{clearTimeout(timer);timer=null;start=null});document.addEventListener("pointercancel",()=>{clearTimeout(timer);timer=null;start=null});
}initMenu();
function initNewsCategorySwipe(){
 const target=document.querySelector('.news-chart-wrap');if(!target)return;
 let startX=0,startY=0,tracking=false;
 target.addEventListener('touchstart',event=>{
   if(event.touches.length!==1)return;
   const touch=event.touches[0];
   if(touch.clientX<24||touch.clientX>window.innerWidth-24)return;
   startX=touch.clientX;startY=touch.clientY;tracking=true;
 },{passive:true});
 target.addEventListener('touchend',event=>{
   if(!tracking||event.changedTouches.length!==1)return;
   tracking=false;
   const touch=event.changedTouches[0];
   const dx=touch.clientX-startX,dy=touch.clientY-startY;
   const ax=Math.abs(dx),ay=Math.abs(dy);
   const swipeThreshold=55;
   if(ax>=swipeThreshold&&ax>ay*1.2){
     const current=CATS.indexOf(active);
     active=dx<0?CATS[(current+1)%CATS.length]:CATS[(current-1+CATS.length)%CATS.length];
     tabsRefresh();render();
   }
 },{passive:true});
 target.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
}initNewsCategorySwipe();
let edge=null;document.addEventListener("touchstart",e=>{let t=e.touches[0];if(t.clientX>innerWidth-28)edge={x:t.clientX,y:t.clientY}},{passive:true});document.addEventListener("touchend",e=>{if(!edge)return;let t=e.changedTouches[0];if(edge.x-t.clientX>70&&Math.abs(t.clientY-edge.y)<80)location.href="index.html";edge=null},{passive:true});
