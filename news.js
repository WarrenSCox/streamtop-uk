const CATS=["UK","WORLD","POLITICS","BUSINESS","TECH","ENTERTAINMENT"];
const COLORS=["#F5A083","#B9C9E3","#BFE2AF","#FFDD69","#CFC5EF","#F4A083"];
let active="UK", data={categories:{}};
const $=s=>document.querySelector(s);
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function ago(d){if(!d)return"";let n=(Date.now()-new Date(d))/60000;if(n<60)return Math.max(1,Math.floor(n))+"m ago";if(n<1440)return Math.floor(n/60)+"h ago";return Math.floor(n/1440)+"d ago"}
function tabs(){let n=$("#newsTabs");CATS.forEach((c,i)=>{let b=document.createElement("button");b.textContent=c;b.style.background=COLORS[i];b.className="service-tab "+(c===active?"active":"");b.onclick=()=>{active=c;tabsRefresh();render()};n.appendChild(b)})}
function tabsRefresh(){[...$("#newsTabs").children].forEach(b=>b.classList.toggle("active",b.textContent===active));const a=[...$("#newsTabs").children].find(b=>b.textContent===active);a?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});}
function render(){let rows=data.categories?.[active]||[];$("#newsTitle").textContent="LATEST "+active;$("#newsChart").innerHTML=rows.slice(0,10).map((x,i)=>`<li class="chart-row news-row"><span class="rank">${String(i+1).padStart(2,"0")}</span><a class="news-story" href="${esc(x.link)}" target="_blank" rel="noopener">${x.image?`<img class="poster news-thumb" src="${esc(x.image)}" alt="">`:`<span class="news-thumb news-thumb-fallback">W</span>`}<span class="news-copy"><strong>${esc(x.title)}</strong><small>${esc(x.source||"Sky News")} · ${ago(x.published)}</small></span></a></li>`).join("");$("#newsError").classList.toggle("hidden",rows.length>0)}
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
 document.addEventListener("pointerup",()=>{clearTimeout(timer);timer=null;start=null}); document.addEventListener("pointercancel",()=>{clearTimeout(timer);timer=null;start=null});
}initMenu();
function initNewsCategorySwipe(){const target=document.querySelector('.news-chart-wrap');if(!target)return;let sx=0,sy=0,tracking=false;target.addEventListener('touchstart',e=>{if(e.touches.length!==1||e.target.closest?.('a,button'))return;const t=e.touches[0];if(t.clientX>innerWidth-28)return;sx=t.clientX;sy=t.clientY;tracking=true},{passive:true});target.addEventListener('touchend',e=>{if(!tracking||e.changedTouches.length!==1){tracking=false;return}const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;tracking=false;if(Math.abs(dx)<55||Math.abs(dx)<Math.abs(dy)*1.25)return;let i=CATS.indexOf(active);i=dx<0?Math.min(CATS.length-1,i+1):Math.max(0,i-1);if(CATS[i]!==active){active=CATS[i];tabsRefresh();render()}},{passive:true})}initNewsCategorySwipe();
let edge=null;document.addEventListener("touchstart",e=>{let t=e.touches[0];if(t.clientX>innerWidth-28)edge={x:t.clientX,y:t.clientY}},{passive:true});document.addEventListener("touchend",e=>{if(!edge)return;let t=e.changedTouches[0];if(edge.x-t.clientX>70&&Math.abs(t.clientY-edge.y)<80)location.href="index.html";edge=null},{passive:true});
