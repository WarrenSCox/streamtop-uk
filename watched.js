
function updateWatchedCounts(){
  const el=document.getElementById('watchedCounts'); if(!el)return;
  const items=loadWatched();
  const movies=items.filter(x=>x.type==='MOVIE').length;
  const shows=items.filter(x=>x.type==='SHOW').length;
  el.textContent=`MOVIES ${movies} | SHOWS ${shows}`;
}
const WATCHLIST_KEY='wozzawatch-my-list-v1', WATCHED_KEY='wozzawatch-watched-v1';
const listEl=document.querySelector('#watchedList'),emptyEl=document.querySelector('#emptyWatched'),chartTitle=document.querySelector('#chartTitle');let currentType='MOVIE';
function readKey(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}}function writeKey(key,v){localStorage.setItem(key,JSON.stringify(v))}function youtube(title){return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title||''} trailer`)}`}function mediaType(item){return item?.type==='SHOW'?'SHOW':'MOVIE'}
function restore(item){const list=readKey(WATCHLIST_KEY);if(!list.some(x=>x.id===item.id))list.push({...item,addedAt:new Date().toISOString()});writeKey(WATCHLIST_KEY,list);writeKey(WATCHED_KEY,readKey(WATCHED_KEY).filter(x=>x.id!==item.id));render()}
function permanentlyRemove(item){writeKey(WATCHED_KEY,readKey(WATCHED_KEY).filter(x=>x.id!==item.id));render()}
function trashIcon(){return '<svg class="trash-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M20 20h24l-2 34H22L20 20Z" fill="currentColor"/><path d="M16 15h32v7H16zM25 8h14l3 7H22l3-7Z" fill="currentColor"/><path d="M28 28v18M36 28v18" stroke="#eef0fb" stroke-width="4" stroke-linecap="round"/></svg>'}
function watchedDate(value){if(!value)return'';const d=new Date(value);if(Number.isNaN(d.getTime()))return'';return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric'}).format(d)}
function render(){updateWatchedCounts();const items=readKey(WATCHED_KEY).filter(x=>mediaType(x)===currentType).sort((a,b)=>(Date.parse(b.watchedAt)||0)-(Date.parse(a.watchedAt)||0));listEl.innerHTML='';chartTitle.textContent=currentType==='SHOW'?'WATCHED TV SHOWS':'WATCHED MOVIES';emptyEl.classList.toggle('hidden',items.length>0);emptyEl.querySelector('strong').textContent=currentType==='SHOW'?'No watched TV shows yet 👀':'No watched movies yet 👀';
 items.forEach((item,i)=>{const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');const a=document.createElement('a');a.className='poster-link';a.href=youtube(item.title);a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title} — search YouTube for trailer`);if(item.poster){const img=document.createElement('img');img.className='poster';img.alt='';img.src=item.poster;img.loading='lazy';a.append(img)}else{const ph=document.createElement('div');ph.className='poster poster-placeholder';ph.textContent='▶';a.append(ph)}const info=document.createElement('div');info.className='item-info';const title=document.createElement('div');title.className='title';title.textContent=item.title;info.append(title);const b=document.createElement('button');b.type='button';b.className='restore-watch';b.textContent='↩';b.title='Put back on Watchlist';b.setAttribute('aria-label',`Put ${item.title} back on Watchlist`);b.addEventListener('click',()=>restore(item));const del=document.createElement('button');del.type='button';del.className='delete-watched';del.innerHTML=trashIcon();del.title='Remove from watched history';del.setAttribute('aria-label',`Permanently remove ${item.title} from watched history`);del.addEventListener('click',()=>permanentlyRemove(item));const actions=document.createElement('div');actions.className='watched-actions';actions.append(b,del);li.append(rank,a,info,actions);listEl.append(li)})}
function setWatchedType(type){currentType=type;document.querySelectorAll('.watched-controls .segmented button').forEach(b=>b.classList.toggle('active',b.dataset.type===type));const wrap=document.querySelector('.chart-wrap');if(wrap&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){wrap.classList.remove('chart-toggle');void wrap.offsetWidth;wrap.classList.add('chart-toggle');setTimeout(()=>wrap.classList.remove('chart-toggle'),260)}render()}
document.querySelectorAll('.watched-controls .segmented button').forEach(button=>button.addEventListener('click',()=>setWatchedType(button.dataset.type)));render();
function toggleWatchedType(){setWatchedType(currentType==='MOVIE'?'SHOW':'MOVIE')}
function initWatchedDoubleTap(){const target=document.querySelector('.chart-wrap');if(!target)return;let lastTapAt=0,lastTapX=0,lastTapY=0;target.addEventListener('touchend',e=>{if(e.changedTouches.length!==1||e.target.closest?.('a,button'))return;const t=e.changedTouches[0],now=Date.now();if(lastTapAt&&now-lastTapAt<340&&Math.hypot(t.clientX-lastTapX,t.clientY-lastTapY)<28){lastTapAt=0;e.preventDefault();toggleWatchedType();return}lastTapAt=now;lastTapX=t.clientX;lastTapY=t.clientY},{passive:false});target.addEventListener('dblclick',e=>{if(!e.target.closest('a,button'))toggleWatchedType()})}
function initWatchedEdgeBack(){let sx=0,sy=0,tracking=false,edge='';const EDGE=24,THRESHOLD=58;window.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const t=e.touches[0],w=innerWidth,h=innerHeight;edge=t.clientX<=EDGE?'left':t.clientX>=w-EDGE?'right':t.clientY<=EDGE?'top':t.clientY>=h-EDGE?'bottom':'';if(!edge)return;sx=t.clientX;sy=t.clientY;tracking=true},{passive:true});window.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1)return;const t=e.touches[0],dx=t.clientX-sx,dy=t.clientY-sy;const deliberate=edge==='left'?dx>12:edge==='right'?dx<-12:edge==='top'?dy>12:dy<-12;if(deliberate)e.preventDefault()},{passive:false});window.addEventListener('touchend',e=>{if(!tracking||e.changedTouches.length!==1){tracking=false;return}const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;tracking=false;const go=edge==='left'?dx>=THRESHOLD:edge==='right'?dx<=-THRESHOLD:edge==='top'?dy>=THRESHOLD:dy<=-THRESHOLD;if(go)location.href='my-list.html'},{passive:true});window.addEventListener('touchcancel',()=>{tracking=false},{passive:true})}
initWatchedDoubleTap();initWatchedEdgeBack();

// v5.3.29 — after four quiet seconds, alternate the two selector icons every four seconds.
function initIdleGestureHint(){
  const selector=document.querySelector('.segmented');
  if(!selector||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let timer=null,step=0;
  const clearClasses=()=>selector.classList.remove('idle-hint-first','idle-hint-second');
  const stop=()=>{if(timer)clearTimeout(timer);timer=null;clearClasses()};
  const play=()=>{
    clearClasses();void selector.offsetWidth;
    selector.classList.add(step%2===0?'idle-hint-first':'idle-hint-second');
    step++;
    timer=setTimeout(play,4000);
  };
  const arm=()=>{stop();step=0;timer=setTimeout(play,4000)};
  ['pointerdown','touchstart','keydown','wheel'].forEach(name=>document.addEventListener(name,arm,{passive:true}));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else arm()});
  arm();
}
initIdleGestureHint();

// v5.3.29 — aggressively adopt new PWA releases without an update popup.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });
      await reg.update();
      if (reg.waiting) reg.waiting.postMessage({type:'SKIP_WAITING'});
      let reloading=false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloading) return; reloading=true; window.location.reload();
      });
    } catch (e) { console.warn('Service worker update check failed', e); }
  });
}

function initWozzaMenu(){const trigger=document.querySelector('.header-copy'),menu=document.querySelector('#wozzaMenu'),backdrop=document.querySelector('#wozzaMenuBackdrop');if(!trigger||!menu||!backdrop)return;trigger.setAttribute('role','button');trigger.setAttribute('tabindex','0');trigger.setAttribute('aria-haspopup','menu');trigger.setAttribute('aria-expanded','false');const open=()=>{backdrop.hidden=false;menu.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true')};const close=()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true');trigger.setAttribute('aria-expanded','false');setTimeout(()=>{if(!menu.classList.contains('open'))backdrop.hidden=true},180)};const toggle=()=>menu.classList.contains('open')?close():open();trigger.addEventListener('click',toggle);trigger.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});backdrop.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});menu.querySelectorAll('.prototype-item').forEach(button=>button.addEventListener('click',()=>{button.classList.remove('prototype-pulse');void button.offsetWidth;button.classList.add('prototype-pulse')}))}initWozzaMenu();


// v5.3.29 — Ranked All Wozzas menu. Hold + drag; top three become header navigation.
const WOZZA_ORDER_KEY='wozzawatch-nav-order-v1';
const WOZZA_META={
 watch:{label:'WozzaWatch',href:'index.html',icon:'icon.svg'},
 tune:{label:'WozzaTune',href:'tune.html',icon:'tune-icon.svg'},
 list:{label:'Watchlist',href:'my-list.html',icon:'my-list-icon.svg'},
 read:{label:'WozzaRead',href:null,icon:'read-icon.svg'},
 news:{label:'WozzaNews',href:null,icon:'news-icon.svg'}
};
function getWozzaOrder(){
  const fallback=['watch','tune','list','read','news'];
  try{
    const saved=JSON.parse(localStorage.getItem(WOZZA_ORDER_KEY)||'[]');
    const clean=saved.filter(x=>fallback.includes(x));
    fallback.forEach(x=>{if(!clean.includes(x))clean.push(x)});
    return clean;
  }catch(e){return fallback}
}
function saveWozzaOrder(order){localStorage.setItem(WOZZA_ORDER_KEY,JSON.stringify(order))}
function renderWozzaMenuOrder(){
  const list=document.getElementById('wozzaMenuList'); if(!list)return;
  const order=getWozzaOrder();
  order.forEach((id,i)=>{
    const row=list.querySelector(`[data-wozza="${id}"]`); if(!row)return;
    const rank=row.querySelector('.wozza-menu-rank'); if(rank)rank.textContent=String(i+1).padStart(2,'0');
    list.appendChild(row);
  });
  renderTopWozzas(order);
}
function renderTopWozzas(order=getWozzaOrder()){
  const nav=document.querySelector('.brand-nav'); if(!nav)return;
  const current=location.pathname.split('/').pop()||'index.html';
  const currentId=current==='tune.html'?'tune':current==='my-list.html'||current==='watched.html'?'list':'watch';
  const top=order.slice(0,3);
  nav.innerHTML='';
  top.forEach(id=>{
    const m=WOZZA_META[id]; if(!m)return;
    const active=id===currentId;
    const el=document.createElement(m.href?'a':'button');
    el.className='brand-link'+(active?' active':'')+(!m.href?' prototype-nav':'');
    if(m.href)el.href=m.href; else el.type='button';
    el.setAttribute('aria-label',m.label);
    el.innerHTML=`<img src="${m.icon}" alt=""><span>${active?m.label.toUpperCase():''}</span>`;
    if(!m.href)el.addEventListener('click',()=>{const menu=document.getElementById('wozzaMenu');if(menu&&!menu.classList.contains('open'))document.querySelector('.header-copy')?.click()});
    nav.appendChild(el);
  });
}
function initWozzaRankDrag(){
  const list=document.getElementById('wozzaMenuList');if(!list)return;
  let timer=null,drag=null,startY=0,lastY=0,activated=false;
  const cancel=()=>{clearTimeout(timer);timer=null;if(drag)drag.classList.remove('wozza-menu-dragging');drag=null;activated=false};
  list.addEventListener('touchstart',e=>{
    const row=e.target.closest('.wozza-menu-item');if(!row||e.touches.length!==1)return;
    drag=row;startY=lastY=e.touches[0].clientY;activated=false;
    timer=setTimeout(()=>{if(!drag)return;activated=true;drag.classList.add('wozza-menu-dragging');navigator.vibrate?.(18)},350);
  },{passive:true});
  list.addEventListener('touchmove',e=>{
    if(!drag||e.touches.length!==1)return;
    const y=e.touches[0].clientY;
    if(!activated){if(Math.abs(y-startY)>10)cancel();return}
    e.preventDefault(); lastY=y;
    const el=document.elementFromPoint(e.touches[0].clientX,y);
    const over=el?.closest?.('.wozza-menu-item');
    if(over&&over!==drag&&over.parentElement===list){
      const rect=over.getBoundingClientRect();
      list.insertBefore(drag,y<rect.top+rect.height/2?over:over.nextSibling);
      [...list.querySelectorAll('.wozza-menu-item')].forEach((r,i)=>r.querySelector('.wozza-menu-rank').textContent=String(i+1).padStart(2,'0'));
    }
  },{passive:false});
  list.addEventListener('touchend',e=>{
    clearTimeout(timer);
    if(activated&&drag){
      e.preventDefault();
      drag.classList.remove('wozza-menu-dragging');
      const order=[...list.querySelectorAll('.wozza-menu-item')].map(r=>r.dataset.wozza);
      saveWozzaOrder(order);renderTopWozzas(order);navigator.vibrate?.(12);
    }
    drag=null;activated=false;
  },{passive:false});
  list.addEventListener('touchcancel',cancel,{passive:true});
}
renderWozzaMenuOrder();initWozzaRankDrag();


// v5.3.29 — Android-safe ranked menu.
// Quick tap navigates; hold+drag reorders. Native long-press link/image menus are suppressed.
function hardenWozzaMenuRows(){
  const list=document.getElementById('wozzaMenuList'); if(!list)return;
  list.querySelectorAll('.wozza-menu-item').forEach(row=>{
    row.addEventListener('contextmenu',e=>e.preventDefault());
    row.addEventListener('dragstart',e=>e.preventDefault());
    row.querySelectorAll('img').forEach(img=>{
      img.draggable=false;
      img.addEventListener('contextmenu',e=>e.preventDefault());
      img.addEventListener('dragstart',e=>e.preventDefault());
    });
    row.addEventListener('click',e=>{
      if(row.dataset.suppressTap==='1'){
        e.preventDefault();
        row.dataset.suppressTap='0';
        return;
      }
      const href=row.dataset.href;
      if(href) location.href=href;
    });
  });

  let movedWhileDragging=false;
  list.addEventListener('touchstart',()=>{movedWhileDragging=false},{passive:true});
  list.addEventListener('touchmove',()=>{
    if(list.querySelector('.wozza-menu-dragging')) movedWhileDragging=true;
  },{passive:true});
  list.addEventListener('touchend',()=>{
    if(!movedWhileDragging)return;
    const rows=list.querySelectorAll('.wozza-menu-item');
    rows.forEach(r=>r.dataset.suppressTap='1');
    setTimeout(()=>rows.forEach(r=>r.dataset.suppressTap='0'),450);
  },{passive:true});
}
hardenWozzaMenuRows();
