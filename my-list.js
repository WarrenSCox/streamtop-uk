const WATCHLIST_KEY='wozzawatch-my-list-v1';
const WATCHED_KEY='wozzawatch-watched-v1';
const listEl=document.querySelector('#myList'), emptyEl=document.querySelector('#emptyList'), chartTitle=document.querySelector('#chartTitle'), watchlistCounts=document.querySelector('#watchlistCounts'), pileButton=document.querySelector('#watchedPile'), pileEyes=document.querySelector('#watchedPileEyes'), pileCount=document.querySelector('#watchedPileCount'), undoToast=document.querySelector('#undoToast'), undoButton=document.querySelector('#undoButton');
let currentType='MOVIE', undoTimer=null, lastRemoved=null, nervousTimer=null, lastNervousIndex=-1;
function readKey(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}}
function writeKey(key,v){localStorage.setItem(key,JSON.stringify(v))}
function readList(){return readKey(WATCHLIST_KEY)}
function writeList(v){writeKey(WATCHLIST_KEY,v)}
function readWatched(){return readKey(WATCHED_KEY)}
function writeWatched(v){writeKey(WATCHED_KEY,v)}
function youtube(title){return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title||''} trailer`)}`}
function eyes(){return '<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}
function mediaType(item){return item?.type==='SHOW'?'SHOW':'MOVIE'}
function archive(item){const watched=readWatched().filter(x=>x.id!==item.id);watched.unshift({...item,watchedAt:new Date().toISOString()});writeWatched(watched)}
function stopNervousPile(){if(nervousTimer)clearTimeout(nervousTimer);nervousTimer=null}
function scheduleNervousPile(){
 stopNervousPile();
 if(document.hidden||window.matchMedia('(prefers-reduced-motion: reduce)').matches||pileEyes.children.length===0)return;
 nervousTimer=setTimeout(()=>{
  const pairs=[...pileEyes.querySelectorAll('.pile-eye-pair')];if(!pairs.length)return;
  let idx=Math.floor(Math.random()*pairs.length);
  if(pairs.length>1&&idx===lastNervousIndex)idx=(idx+1+Math.floor(Math.random()*(pairs.length-1)))%pairs.length;
  lastNervousIndex=idx;const pair=pairs[idx];
  const animations=['nervous-glance','random-blink','eye-pop'];
  const animation=animations[Math.floor(Math.random()*animations.length)];
  pair.classList.remove(...animations);void pair.offsetWidth;pair.classList.add(animation);
  setTimeout(()=>pair.classList.remove(animation),1650);
  scheduleNervousPile();
 },4000);
}
function renderPile(){
 const watched=readWatched(), count=watched.length;
 pileButton.classList.toggle('hidden',count===0);pileButton.setAttribute('aria-label',`Open Watched — ${count} ${count===1?'title':'titles'}`);pileCount.textContent=String(count);
 pileEyes.innerHTML='';
 const visible=Math.min(count,28);
 // Build a loose heap: fill a wide bottom row first, then shorter centred rows.
 const rows=[10,8,6,4], positions=[];
 let used=0;
 for(let row=0;row<rows.length && used<visible;row++){
  const n=Math.min(rows[row],visible-used), spacing=20, rowWidth=(n-1)*spacing, centre=112;
  for(let col=0;col<n;col++){
   const i=used+col, jitter=((i*17)%9)-4;
   positions.push({x:centre-rowWidth/2+col*spacing+jitter,y:3+row*15+((i*7)%5)});
  }
  used+=n;
 }
 positions.forEach((pos,i)=>{
  const pair=document.createElement('span');pair.className='pile-eye-pair';pair.innerHTML=eyes();
  pair.style.setProperty('--pile-x',`${pos.x}px`);pair.style.setProperty('--pile-y',`${pos.y}px`);pair.style.setProperty('--pile-r',`${((i*23)%35)-17}deg`);pair.style.setProperty('--pile-s',`${.72+((i*13)%24)/100}`);pileEyes.append(pair);
 });
 scheduleNervousPile();
}
function animateEyesFall(fromRect){
 requestAnimationFrame(()=>{
  const target=pileButton.getBoundingClientRect();if(!target.width)return;
  const flyer=document.createElement('span');flyer.className='falling-watch-eyes';flyer.innerHTML=eyes();document.body.append(flyer);
  const sx=fromRect.left+fromRect.width/2-20,sy=fromRect.top+fromRect.height/2-14,tx=target.left+target.width/2-20,ty=target.top+target.height/2-8;
  flyer.style.left=`${sx}px`;flyer.style.top=`${sy}px`;flyer.style.setProperty('--fall-x',`${tx-sx}px`);flyer.style.setProperty('--fall-y',`${ty-sy}px`);
  flyer.addEventListener('animationend',()=>{flyer.remove();pileButton.classList.remove('pile-bump');void pileButton.offsetWidth;pileButton.classList.add('pile-bump');setTimeout(()=>pileButton.classList.remove('pile-bump'),420)},{once:true});
 });
}
function showUndo(item){lastRemoved=item;clearTimeout(undoTimer);undoToast.classList.remove('hidden');undoToast.querySelector('span').textContent=`${item.title} moved to Watched`;undoTimer=setTimeout(()=>{undoToast.classList.add('hidden');lastRemoved=null},5000)}
function removeItem(item,button){
 const fromRect=button.getBoundingClientRect();writeList(readList().filter(x=>x.id!==item.id));archive(item);render();animateEyesFall(fromRect);showUndo(item);
}
function updateVisibleRanks(){[...listEl.querySelectorAll('.chart-item')].forEach((li,i)=>{const rank=li.querySelector('.rank');if(rank)rank.textContent=String(i+1).padStart(2,'0')})}
function persistVisibleOrder(){
 const orderedIds=[...listEl.querySelectorAll('.chart-item')].map(li=>li.dataset.id);
 const all=readList(), ordered=orderedIds.map(id=>all.find(x=>String(x.id)===id)).filter(Boolean);let n=0;
 const merged=all.map(item=>mediaType(item)===currentType?ordered[n++]:item);writeList(merged);
}
function enableHoldDrag(li){
 let holdTimer=null,startX=0,startY=0,lastY=0,active=false,cancelled=false;
 const HOLD_MS=360, MOVE_TOLERANCE=9;
 const clearHold=()=>{if(holdTimer){clearTimeout(holdTimer);holdTimer=null}};
 const endDrag=(save=true)=>{
  clearHold();
  if(active){
   active=false;
   li.classList.remove('hold-dragging');
   document.body.classList.remove('watchlist-reordering');
   window.__watchlistRowDrag=false;window.__watchlistLastDragAt=Date.now();
   if(save){persistVisibleOrder();updateVisibleRanks()}
   if(navigator.vibrate)navigator.vibrate(10);
  }
  cancelled=false;
 };
 li.addEventListener('contextmenu',e=>{if(active||holdTimer)e.preventDefault()});
 li.addEventListener('touchstart',e=>{
  if(e.touches.length!==1||e.target.closest?.('a,button'))return;
  const t=e.touches[0];startX=t.clientX;startY=t.clientY;lastY=t.clientY;cancelled=false;active=false;
  clearHold();
  holdTimer=setTimeout(()=>{
   if(cancelled)return;
   active=true;window.__watchlistRowDrag=true;
   document.body.classList.add('watchlist-reordering');li.classList.add('hold-dragging');
   if(navigator.vibrate)navigator.vibrate(18);
  },HOLD_MS);
 },{passive:true});
 li.addEventListener('touchmove',e=>{
  if(e.touches.length!==1)return;
  const t=e.touches[0],dx=t.clientX-startX,dy=t.clientY-startY;lastY=t.clientY;
  if(!active){
   if(Math.hypot(dx,dy)>MOVE_TOLERANCE){cancelled=true;clearHold()}
   return;
  }
  e.preventDefault();e.stopPropagation();
  const rows=[...listEl.querySelectorAll('.chart-item')].filter(row=>row!==li);
  let before=null;
  for(const row of rows){const r=row.getBoundingClientRect();if(t.clientY<r.top+r.height/2){before=row;break}}
  if(before){if(li.nextElementSibling!==before)listEl.insertBefore(li,before)}
  else if(listEl.lastElementChild!==li)listEl.appendChild(li);
  updateVisibleRanks();
 },{passive:false});
 li.addEventListener('touchend',()=>endDrag(true),{passive:true});
 li.addEventListener('touchcancel',()=>endDrag(active),{passive:true});
}
function render(){
 const all=readList();const movieCount=all.filter(item=>mediaType(item)==='MOVIE').length,showCount=all.filter(item=>mediaType(item)==='SHOW').length;if(watchlistCounts)watchlistCounts.textContent=`MOVIES ${movieCount} | SHOWS ${showCount}`;const items=all.filter(item=>mediaType(item)===currentType);listEl.innerHTML='';chartTitle.textContent=currentType==='SHOW'?'WATCHLIST TV SHOWS':'WATCHLIST MOVIES';emptyEl.classList.toggle('hidden',items.length>0);emptyEl.querySelector('strong').textContent=currentType==='SHOW'?'No TV shows yet 👀':'No movies yet 👀';emptyEl.querySelector('p').innerHTML=`Add titles to your list from the chart pages by clicking the <span class="instruction-eyes">${eyes()}</span>`;
 items.forEach((item,i)=>{
  const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');
  const a=document.createElement('a');a.className='poster-link';a.href=youtube(item.title);a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title} — search YouTube for trailer`);if(item.poster){const img=document.createElement('img');img.className='poster';img.alt='';img.src=item.poster;img.loading='lazy';a.append(img)}else{const ph=document.createElement('div');ph.className='poster poster-placeholder';ph.textContent='▶';a.append(ph)}
  const info=document.createElement('div');info.className='item-info';const wrap=document.createElement('div');const title=document.createElement('div');title.className='title';title.textContent=item.title;const meta=document.createElement('div');meta.className='list-meta';meta.textContent=`${item.service||''}${currentType==='SHOW'?' · TV':' · Movie'}`;wrap.append(title,meta);info.append(wrap);
  li.dataset.id=String(item.id);
  const b=document.createElement('button');b.type='button';b.className='watch-toggle saved';b.innerHTML=eyes();b.setAttribute('aria-pressed','true');b.setAttribute('aria-label',`Move ${item.title} to Watched`);b.addEventListener('click',()=>removeItem(item,b));li.append(rank,a,info,b);listEl.append(li);enableHoldDrag(li);
 });renderPile();
}
document.querySelectorAll('.my-list-controls .segmented button').forEach(button=>button.addEventListener('click',()=>{currentType=button.dataset.type;document.querySelectorAll('.my-list-controls .segmented button').forEach(b=>b.classList.toggle('active',b===button));render()}));
function setWatchlistType(type){currentType=type;document.querySelectorAll('.my-list-controls .segmented button').forEach(b=>b.classList.toggle('active',b.dataset.type===type));const wrap=document.querySelector('.chart-wrap');if(wrap&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){wrap.classList.remove('chart-toggle');void wrap.offsetWidth;wrap.classList.add('chart-toggle');setTimeout(()=>wrap.classList.remove('chart-toggle'),260)}render()}
function toggleWatchlistType(){setWatchlistType(currentType==='MOVIE'?'SHOW':'MOVIE')}
function initWatchlistDoubleTap(){
 const target=document.querySelector('.chart-wrap');if(!target)return;let lastTapAt=0,lastTapX=0,lastTapY=0;
 target.addEventListener('touchend',e=>{
  if(e.changedTouches.length!==1||e.target.closest?.('a,button')||window.__watchlistRowDrag||Date.now()-(window.__watchlistLastDragAt||0)<500)return;
  const t=e.changedTouches[0],now=Date.now();
  if(lastTapAt&&now-lastTapAt<340&&Math.hypot(t.clientX-lastTapX,t.clientY-lastTapY)<28){lastTapAt=0;e.preventDefault();toggleWatchlistType();return}
  lastTapAt=now;lastTapX=t.clientX;lastTapY=t.clientY;
 },{passive:false});
 target.addEventListener('dblclick',e=>{if(!e.target.closest('a,button')&&Date.now()-(window.__watchlistLastDragAt||0)>=500)toggleWatchlistType()});
}
initWatchlistDoubleTap();
undoButton.addEventListener('click',()=>{if(!lastRemoved)return;const item=lastRemoved;const list=readList();if(!list.some(x=>x.id===item.id)){list.push({...item,addedAt:item.addedAt||new Date().toISOString()});writeList(list)}writeWatched(readWatched().filter(x=>x.id!==item.id));lastRemoved=null;clearTimeout(undoTimer);undoToast.classList.add('hidden');render()});
render();
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopNervousPile();else scheduleNervousPile()});


// v5.3.28: when already at the top, a deliberate downward pull switches
// WozzaWatch → WozzaTune → Watchlist → WozzaWatch instead of native refresh.
function initTopPullSwitch(nextUrl,nextLabel){
  let startY=0,pulling=false,distance=0;
  const threshold=92;
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1||window.__watchlistRowDrag)return;
    startY=e.touches[0].clientY;distance=0;pulling=true;
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling||e.touches.length!==1||window.__watchlistRowDrag)return;
    const dy=e.touches[0].clientY-startY;
    if(dy<=0){distance=0;return;}
    if(window.scrollY>1){pulling=false;distance=0;return;}
    distance=dy;
    e.preventDefault();
  },{passive:false});
  const finish=()=>{
    if(!pulling)return;pulling=false;
    if(distance>=threshold)location.href=nextUrl;
    distance=0;
  };
  window.addEventListener('touchend',finish,{passive:true});
  window.addEventListener('touchcancel',()=>{pulling=false;distance=0;},{passive:true});
}

initTopPullSwitch('index.html','WozzaWatch');


// v5.3.28: at the bottom, a deliberate upward flick switches backwards
// through Watch ← Tune ← List. No popup/"Opening" message.
function initBottomFlickSwitch(prevUrl){
  let startY=0,tracking=false,distance=0; const threshold=82;
  const atBottom=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3;
  window.addEventListener('touchstart',e=>{if(e.touches.length!==1||!atBottom()||window.__watchlistRowDrag)return;startY=e.touches[0].clientY;distance=0;tracking=true;},{passive:true});
  window.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1||window.__watchlistRowDrag)return;const dy=startY-e.touches[0].clientY;if(dy<=0){distance=0;return;}if(!atBottom()){tracking=false;return;}distance=dy;if(dy>12)e.preventDefault();},{passive:false});
  const finish=()=>{if(!tracking)return;tracking=false;if(distance>=threshold)location.href=prevUrl;distance=0;};
  window.addEventListener('touchend',finish,{passive:true});window.addEventListener('touchcancel',()=>{tracking=false;distance=0;},{passive:true});
}
initBottomFlickSwitch('tune.html');

// v5.3.28 — after four quiet seconds, alternate the two selector icons every four seconds.
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

// v5.3.28 — aggressively adopt new PWA releases without an update popup.
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


// v5.3.28 — Ranked All Wozzas menu. Hold + drag; top three become header navigation.
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


// v5.3.28 — Android-safe ranked menu.
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
