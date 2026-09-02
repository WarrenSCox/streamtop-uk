const WATCHLIST_KEY='wozzawatch-my-list-v1', WATCHED_KEY='wozzawatch-watched-v1';
const listEl=document.querySelector('#watchedList'),emptyEl=document.querySelector('#emptyWatched'),chartTitle=document.querySelector('#chartTitle');let currentType='MOVIE';
function readKey(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}}function writeKey(key,v){localStorage.setItem(key,JSON.stringify(v))}function youtube(title){return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title||''} trailer`)}`}function mediaType(item){return item?.type==='SHOW'?'SHOW':'MOVIE'}
function restore(item){const list=readKey(WATCHLIST_KEY);if(!list.some(x=>x.id===item.id))list.push({...item,addedAt:new Date().toISOString()});writeKey(WATCHLIST_KEY,list);writeKey(WATCHED_KEY,readKey(WATCHED_KEY).filter(x=>x.id!==item.id));render()}
function permanentlyRemove(item){writeKey(WATCHED_KEY,readKey(WATCHED_KEY).filter(x=>x.id!==item.id));render()}
function trashIcon(){return '<svg class="trash-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M20 20h24l-2 34H22L20 20Z" fill="currentColor"/><path d="M16 15h32v7H16zM25 8h14l3 7H22l3-7Z" fill="currentColor"/><path d="M28 28v18M36 28v18" stroke="#eef0fb" stroke-width="4" stroke-linecap="round"/></svg>'}
function watchedDate(value){if(!value)return'';const d=new Date(value);if(Number.isNaN(d.getTime()))return'';return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric'}).format(d)}
function render(){const items=readKey(WATCHED_KEY).filter(x=>mediaType(x)===currentType).sort((a,b)=>(Date.parse(b.watchedAt)||0)-(Date.parse(a.watchedAt)||0));listEl.innerHTML='';chartTitle.textContent=currentType==='SHOW'?'WATCHED TV SHOWS':'WATCHED MOVIES';emptyEl.classList.toggle('hidden',items.length>0);emptyEl.querySelector('strong').textContent=currentType==='SHOW'?'No watched TV shows yet 👀':'No watched movies yet 👀';
 items.forEach((item,i)=>{const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');const a=document.createElement('a');a.className='poster-link';a.href=youtube(item.title);a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title} — search YouTube for trailer`);if(item.poster){const img=document.createElement('img');img.className='poster';img.alt='';img.src=item.poster;img.loading='lazy';a.append(img)}else{const ph=document.createElement('div');ph.className='poster poster-placeholder';ph.textContent='▶';a.append(ph)}const info=document.createElement('div');info.className='item-info';const title=document.createElement('div');title.className='title';title.textContent=item.title;info.append(title);const b=document.createElement('button');b.type='button';b.className='restore-watch';b.textContent='↩';b.title='Put back on Watchlist';b.setAttribute('aria-label',`Put ${item.title} back on Watchlist`);b.addEventListener('click',()=>restore(item));const del=document.createElement('button');del.type='button';del.className='delete-watched';del.innerHTML=trashIcon();del.title='Remove from watched history';del.setAttribute('aria-label',`Permanently remove ${item.title} from watched history`);del.addEventListener('click',()=>permanentlyRemove(item));const actions=document.createElement('div');actions.className='watched-actions';actions.append(b,del);li.append(rank,a,info,actions);listEl.append(li)})}
function setWatchedType(type){currentType=type;document.querySelectorAll('.watched-controls .segmented button').forEach(b=>b.classList.toggle('active',b.dataset.type===type));const wrap=document.querySelector('.chart-wrap');if(wrap&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){wrap.classList.remove('chart-toggle');void wrap.offsetWidth;wrap.classList.add('chart-toggle');setTimeout(()=>wrap.classList.remove('chart-toggle'),260)}render()}
document.querySelectorAll('.watched-controls .segmented button').forEach(button=>button.addEventListener('click',()=>setWatchedType(button.dataset.type)));render();
function toggleWatchedType(){setWatchedType(currentType==='MOVIE'?'SHOW':'MOVIE')}
function initWatchedDoubleTap(){const target=document.querySelector('.chart-wrap');if(!target)return;let lastTapAt=0,lastTapX=0,lastTapY=0;target.addEventListener('touchend',e=>{if(e.changedTouches.length!==1||e.target.closest?.('a,button'))return;const t=e.changedTouches[0],now=Date.now();if(lastTapAt&&now-lastTapAt<340&&Math.hypot(t.clientX-lastTapX,t.clientY-lastTapY)<28){lastTapAt=0;e.preventDefault();toggleWatchedType();return}lastTapAt=now;lastTapX=t.clientX;lastTapY=t.clientY},{passive:false});target.addEventListener('dblclick',e=>{if(!e.target.closest('a,button'))toggleWatchedType()})}
function initWatchedEdgeBack(){let sx=0,sy=0,tracking=false,edge='';const EDGE=24,THRESHOLD=58;window.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const t=e.touches[0],w=innerWidth,h=innerHeight;edge=t.clientX<=EDGE?'left':t.clientX>=w-EDGE?'right':t.clientY<=EDGE?'top':t.clientY>=h-EDGE?'bottom':'';if(!edge)return;sx=t.clientX;sy=t.clientY;tracking=true},{passive:true});window.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1)return;const t=e.touches[0],dx=t.clientX-sx,dy=t.clientY-sy;const deliberate=edge==='left'?dx>12:edge==='right'?dx<-12:edge==='top'?dy>12:dy<-12;if(deliberate)e.preventDefault()},{passive:false});window.addEventListener('touchend',e=>{if(!tracking||e.changedTouches.length!==1){tracking=false;return}const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;tracking=false;const go=edge==='left'?dx>=THRESHOLD:edge==='right'?dx<=-THRESHOLD:edge==='top'?dy>=THRESHOLD:dy<=-THRESHOLD;if(go)location.href='my-list.html'},{passive:true});window.addEventListener('touchcancel',()=>{tracking=false},{passive:true})}
initWatchedDoubleTap();initWatchedEdgeBack();

// v5.3.22 — after four quiet seconds, alternate the two selector icons every four seconds.
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

// v5.3.22 — aggressively adopt new PWA releases without an update popup.
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
