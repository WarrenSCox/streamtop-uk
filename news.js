const CATS=["UK","WORLD","POLITICS","BUSINESS","TECH","ENTERTAINMENT","STOCK_MARKET"];
const COLORS=["#F5A083","#B9C9E3","#BFE2AF","#FFDD69","#CFC5EF","#F4A083","#B9D9C3"];
let active="UK", data={categories:{}};
const $=s=>document.querySelector(s);
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function ago(d){if(!d)return"";let n=(Date.now()-new Date(d))/60000;if(n<60)return Math.max(1,Math.floor(n))+"m ago";if(n<1440)return Math.floor(n/60)+"h ago";return Math.floor(n/1440)+"d ago"}
function tabs(){let n=$("#newsTabs");CATS.forEach((c,i)=>{let b=document.createElement("button");b.textContent=c;b.style.background=COLORS[i];b.className="service-tab "+(c===active?"active":"");b.onclick=()=>{active=c;tabsRefresh();render()};n.appendChild(b)})}
function tabsRefresh(){[...$("#newsTabs").children].forEach(b=>b.classList.toggle("active",b.textContent===active));const a=[...$("#newsTabs").children].find(b=>b.textContent===active);a?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});}
function updateSourceStrip(){
 const stock=active==="STOCK_MARKET";
 $("#newsProviderSwitch").classList.toggle("stock-sources",stock);
 $("#newsProviderSwitch").setAttribute("aria-label",stock?"News sources: Motley Fool UK, Yahoo Finance UK and Reuters":"News sources: Sky News, The Guardian and Metro");
 $("#newsProviderSwitch").innerHTML=stock?`<div class="news-provider-btn" aria-label="Motley Fool UK"><span class="stock-logo fool-logo">The Motley<br><b>Fool.</b></span></div><div class="news-provider-btn" aria-label="Yahoo Finance UK"><span class="stock-logo yahoo-logo"><b>yahoo!</b><small>finance</small></span></div><div class="news-provider-btn" aria-label="Reuters"><span class="stock-logo reuters-logo"><span class="reuters-mark" aria-hidden="true">◌</span><b>Reuters</b></span></div>`:`<div class="news-provider-btn" aria-label="Sky News"><span class="sky-logo">sky <b>news</b></span></div><div class="news-provider-btn" aria-label="The Guardian"><span class="guardian-logo"><i>G</i><b>The<br>Guardian</b></span></div><div class="news-provider-btn" aria-label="Metro"><span class="metro-logo">METRO</span></div>`;
}
function categoryRows(){return data.categories?.[active]||[]}
function render(){
 const rows=categoryRows();
 const newsTitle=$("#newsTitle");
 newsTitle.textContent=active==="STOCK_MARKET"?"STOCK MARKET":"LATEST "+active;
 updateSourceStrip();
 newsTitle.classList.toggle("entertainment-title",active==="ENTERTAINMENT");
 $("#newsChart").innerHTML=rows.slice(0,10).map((x,i)=>{
  const meta=ago(x.published);
  const byline=active==="STOCK_MARKET"&&x.source?`<span class="stock-story-source">${esc(x.source)}</span><span aria-hidden="true"> · </span>`:"";
  return `<li class="news-row"><span class="rank">${String(i+1).padStart(2,"0")}</span><a class="news-image-link" href="${esc(x.link)}" target="_blank" rel="noopener" aria-label="${esc(x.title)}">${x.image?`<img class="poster news-thumb" src="${esc(x.image)}" alt="">`:`<span class="poster news-thumb news-thumb-fallback">W</span>`}</a><a class="news-story" href="${esc(x.link)}" target="_blank" rel="noopener"><span class="news-copy"><strong>${esc(x.title)}</strong><small>${byline}${esc(meta)}</small></span></a></li>`;
 }).join("");
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
