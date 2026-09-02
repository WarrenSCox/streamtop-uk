const TYPES={BOOKS:{title:'UK TOP 10 BOOKS'},AUDIOBOOKS:{title:'UK TOP 10 AUDIOBOOKS'}};
let active='BOOKS',data={charts:{}};const $=s=>document.querySelector(s);
const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function rows(){return data.charts?.[active]||[]}
function searchUrl(title){return active==='BOOKS'?`https://www.amazon.co.uk/s?k=${encodeURIComponent(title)}`:`https://open.spotify.com/search/${encodeURIComponent(title)}`}
function render(){
  const meta=TYPES[active],r=rows();
  $('#readTitle').textContent=meta.title;
  document.body.classList.toggle('read-audio-mode',active==='AUDIOBOOKS');
  document.querySelectorAll('.read-tab').forEach(b=>b.classList.toggle('active',b.dataset.readType===active));
  $('#readChart').innerHTML=r.slice(0,10).map((x,i)=>{
    const art=x.image
      ?`<a class="read-cover-link" href="${esc(searchUrl(x.title))}" target="_blank" rel="noopener noreferrer" aria-label="Search ${esc(x.title)} on ${active==='BOOKS'?'Amazon UK':'Spotify'}"><img class="poster read-cover" src="${esc(x.image)}" alt="${esc(x.title)} cover"></a>`
      :`<a class="read-cover-link" href="${esc(searchUrl(x.title))}" target="_blank" rel="noopener noreferrer" aria-label="Search ${esc(x.title)} on ${active==='BOOKS'?'Amazon UK':'Spotify'}"><span class="poster read-cover read-cover-fallback">W</span></a>`;
    return `<li class="read-row"><span class="rank">${String(i+1).padStart(2,'0')}</span>${art}<span class="read-copy"><strong>${esc(x.title)}</strong><small>${esc(x.author||'')}</small></span></li>`
  }).join('');
  $('#readError').classList.toggle('hidden',r.length===10)
}
async function load(){try{const res=await fetch('./read.json?v='+Date.now(),{cache:'no-store'});if(!res.ok)throw Error(res.status);data=await res.json();const d=data.updated?new Date(data.updated):null;$('#readUpdated').textContent=d&&!Number.isNaN(d.valueOf())?'Updated '+d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})+', '+d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}):'Latest UK charts'}catch(e){console.error('WozzaRead load failed',e);data={charts:{}}}render()}
function setReadType(type){if(!TYPES[type]||type===active)return;active=type;render()}
function toggleReadType(){setReadType(active==='BOOKS'?'AUDIOBOOKS':'BOOKS')}
document.querySelectorAll('.read-tab').forEach(b=>b.addEventListener('click',()=>setReadType(b.dataset.readType)));
function initReadGestures(){const target=$('.read-chart-wrap');if(!target)return;let sx=0,sy=0,tracking=false,lastTap=0,lastX=0,lastY=0;target.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const t=e.touches[0];if(t.clientX<24||t.clientX>innerWidth-24)return;sx=t.clientX;sy=t.clientY;tracking=true},{passive:true});target.addEventListener('touchend',e=>{if(!tracking||e.changedTouches.length!==1)return;tracking=false;const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy,ax=Math.abs(dx),ay=Math.abs(dy);if(ax>=55&&ax>ay*1.2){toggleReadType();lastTap=0;return}if(ax>16||ay>16||e.target.closest('a,button'))return;const now=Date.now(),close=Math.hypot(t.clientX-lastX,t.clientY-lastY)<42;if(lastTap&&now-lastTap<=330&&close){lastTap=0;toggleReadType();return}lastTap=now;lastX=t.clientX;lastY=t.clientY;setTimeout(()=>{if(Date.now()-lastTap>=330)lastTap=0},340)},{passive:true});target.addEventListener('touchcancel',()=>tracking=false,{passive:true});target.addEventListener('dblclick',e=>{if(!e.target.closest('a,button'))toggleReadType()})}
function initMenu(){const menu=$('#wozzaMenu'),bd=$('#wozzaMenuBackdrop'),trigger=$('.header-copy');let timer=null,start=null;const open=()=>{menu.classList.add('open');menu.setAttribute('aria-hidden','false');bd.hidden=false};const close=()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true');bd.hidden=true};trigger?.addEventListener('click',open);bd?.addEventListener('click',close);$('.wozza-menu-back')?.addEventListener('click',close);$('#wozzaMenuList')?.addEventListener('click',e=>{let b=e.target.closest('[data-href]');if(b)location.href=b.dataset.href});document.addEventListener('pointerdown',e=>{if(e.target.closest('a,button,.wozza-menu'))return;start={x:e.clientX,y:e.clientY};timer=setTimeout(()=>{if(start&&start.x>innerWidth*.2&&start.x<innerWidth*.8&&start.y>innerHeight*.2&&start.y<innerHeight*.8)open()},350)});document.addEventListener('pointermove',e=>{if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)>12){clearTimeout(timer);timer=null}});['pointerup','pointercancel'].forEach(n=>document.addEventListener(n,()=>{clearTimeout(timer);timer=null;start=null}))}
initMenu();initReadGestures();load();
