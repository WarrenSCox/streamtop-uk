const KEY='wozzawatch-watched-v1',LIST='wozzawatch-my-list-v1',TYPES=['MOVIE','SHOW','BOOK'];let type='MOVIE';const $=s=>document.querySelector(s),esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));const get=k=>{try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return[]}},put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
function animate(t){const b=document.querySelector(`[data-type="${t}"]`);if(!b)return;b.classList.remove('wozza-tab-animate');void b.offsetWidth;b.classList.add('wozza-tab-animate');setTimeout(()=>b.classList.remove('wozza-tab-animate'),700)}function setType(t){type=t;document.querySelectorAll('.segmented button').forEach(b=>b.classList.toggle('active',b.dataset.type===t));render();animate(t)}
function trashMarkup(){return '<svg class="trash-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 3h8l1 2h4v2H3V5h4l1-2Zm-2 6h12l-1 12H7L6 9Zm3 2v8h2v-8H9Zm4 0v8h2v-8h-2Z"/></svg>'}
function render(){const all=get(KEY),r=all.filter(x=>(x.type||'MOVIE')===type),c={MOVIE:0,SHOW:0,BOOK:0};all.forEach(x=>c[x.type]!==undefined&&c[x.type]++);$('#watchedCounts').textContent=`MOVIES ${c.MOVIE} | TV ${c.SHOW} | BOOKS ${c.BOOK}`;$('#chartTitle').textContent=`${type==='BOOK'?'READ': 'WATCHED'} ${type==='MOVIE'?'MOVIES':type==='SHOW'?'TV':'BOOKS'}`;$('#emptyWatched strong').textContent=type==='BOOK'?'Nothing read yet 👀':'Nothing watched yet 👀';$('#watchedList').innerHTML=r.map((x,i)=>`<li class="chart-item accent-${i%4}"><span class="rank">${String(i+1).padStart(2,'0')}</span>${x.poster?`<img class="poster" src="${esc(x.poster)}" alt="">`:`<div class="poster poster-placeholder">${type==='BOOK'?'W':''}</div>`}<span class="item-info"><span><strong class="title">${esc(x.title)}</strong><small class="list-meta provider-line">${esc(x.author||x.service||'')}</small></span></span><span class="watched-actions"><button class="restore-watch" data-restore="${esc(x.id)}" aria-label="Restore ${esc(x.title)}">↩</button><button class="delete-watched" data-delete="${esc(x.id)}" aria-label="Permanently delete ${esc(x.title)}">${trashMarkup()}</button></span></li>`).join('');$('#emptyWatched').classList.toggle('hidden',r.length>0);document.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{const w=get(KEY),at=w.findIndex(x=>x.id===b.dataset.restore);if(at<0)return;const [x]=w.splice(at,1),l=get(LIST);l.push(x);put(KEY,w);put(LIST,l);render()});document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{const w=get(KEY),at=w.findIndex(x=>x.id===b.dataset.delete);if(at<0)return;w.splice(at,1);put(KEY,w);render()})}
document.querySelectorAll('.segmented button').forEach(b=>b.onclick=()=>setType(b.dataset.type));
function initWatchedGestures(){
  const target=$('.chart-wrap');if(!target)return;
  let sx=0,sy=0,tracking=false,lastTap=0,lastX=0,lastY=0,lastTouchAt=0;
  const move=dir=>{const i=TYPES.indexOf(type);setType(TYPES[(i+dir+TYPES.length)%TYPES.length])};
  target.addEventListener('touchstart',e=>{
    if(e.target.closest('button,a')||e.touches.length!==1)return;
    lastTouchAt=Date.now();
    const t=e.touches[0];sx=t.clientX;sy=t.clientY;tracking=true;
  },{passive:true});
  target.addEventListener('touchend',e=>{
    if(!tracking||e.changedTouches.length!==1)return;tracking=false;
    if(e.target.closest('button,a'))return;
    const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy,ax=Math.abs(dx),ay=Math.abs(dy);
    if(ax>=58&&ax>ay*1.25){lastTap=0;move(dx<0?1:-1);return}
    if(ax>16||ay>16)return;
    const now=Date.now(),close=Math.hypot(t.clientX-lastX,t.clientY-lastY)<42;
    if(lastTap&&now-lastTap<=330&&close){lastTap=0;move(1);return}
    lastTap=now;lastX=t.clientX;lastY=t.clientY;
  },{passive:true});
  target.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
  target.addEventListener('dblclick',e=>{
    if(e.target.closest('button,a'))return;
    // Touch double-taps are already handled above. Some mobile browsers also
    // emit a synthetic dblclick afterwards, which would otherwise advance twice.
    if(Date.now()-lastTouchAt<700)return;
    move(1);
  });
}
initWatchedGestures();
function initMenu(){const m=$('#wozzaMenu'),bd=$('#wozzaMenuBackdrop'),trigger=$('.header-copy');if(!m||!bd)return;const open=()=>{m.classList.add('open');m.setAttribute('aria-hidden','false');bd.hidden=false},close=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');bd.hidden=true};trigger?.addEventListener('click',open);trigger?.setAttribute('role','button');trigger?.setAttribute('tabindex','0');trigger?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});bd.addEventListener('click',close);$('.wozza-menu-back')?.addEventListener('click',close);$('#wozzaMenuList')?.addEventListener('click',e=>{const b=e.target.closest('[data-href]');if(b)location.href=b.dataset.href})}
initMenu();render();
