const WATCHLIST_KEY='wozzawatch-my-list-v1';
const WATCHED_KEY='wozzawatch-watched-v1';
const listEl=document.querySelector('#myList'), emptyEl=document.querySelector('#emptyList'), chartTitle=document.querySelector('#chartTitle'), pileButton=document.querySelector('#watchedPile'), pileEyes=document.querySelector('#watchedPileEyes'), pileCount=document.querySelector('#watchedPileCount'), undoToast=document.querySelector('#undoToast'), undoButton=document.querySelector('#undoButton');
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
  lastNervousIndex=idx;const pair=pairs[idx];pair.classList.remove('nervous-glance');void pair.offsetWidth;pair.classList.add('nervous-glance');
  setTimeout(()=>pair.classList.remove('nervous-glance'),1050);
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
function moveRowOneStep(li,direction){
 const sibling=direction<0?li.previousElementSibling:li.nextElementSibling;
 if(!sibling)return false;
 if(direction<0)listEl.insertBefore(li,sibling);else listEl.insertBefore(sibling,li);
 persistVisibleOrder();updateVisibleRanks();
 li.classList.remove('flick-moved-up','flick-moved-down');void li.offsetWidth;
 li.classList.add(direction<0?'flick-moved-up':'flick-moved-down');
 setTimeout(()=>li.classList.remove('flick-moved-up','flick-moved-down'),330);
 if(navigator.vibrate)navigator.vibrate(14);
 return true;
}
function enableRowFlick(li){
 let startX=0,startY=0,lastY=0,startTime=0,tracking=false,claimed=false;
 const reset=()=>{tracking=false;claimed=false;window.__watchlistRowFlick=false};
 li.addEventListener('touchstart',e=>{
  if(e.touches.length!==1||e.target.closest?.('a,button'))return;
  const t=e.touches[0];startX=t.clientX;startY=t.clientY;lastY=t.clientY;startTime=performance.now();tracking=true;claimed=false;window.__watchlistRowFlick=true;
 },{passive:true});
 li.addEventListener('touchmove',e=>{
  if(!tracking||e.touches.length!==1)return;
  const t=e.touches[0],dx=t.clientX-startX,dy=t.clientY-startY;lastY=t.clientY;
  if(Math.abs(dx)>Math.abs(dy)+18){reset();return;}
  if(Math.abs(dy)>=22){claimed=true;e.preventDefault()}
 },{passive:false});
 li.addEventListener('touchend',()=>{
  if(!tracking){reset();return;}
  const dy=lastY-startY,elapsed=performance.now()-startTime;
  if(claimed&&elapsed<=480&&Math.abs(dy)>=34&&Math.abs(dy)<=150)moveRowOneStep(li,dy<0?-1:1);
  reset();
 },{passive:true});
 li.addEventListener('touchcancel',reset,{passive:true});
}
function render(){
 const all=readList();const items=all.filter(item=>mediaType(item)===currentType);listEl.innerHTML='';chartTitle.textContent=currentType==='SHOW'?'WATCHLIST TV SHOWS':'WATCHLIST MOVIES';emptyEl.classList.toggle('hidden',items.length>0);emptyEl.querySelector('strong').textContent=currentType==='SHOW'?'No TV shows yet 👀':'No movies yet 👀';emptyEl.querySelector('p').innerHTML=`Add titles to your list from the chart pages by clicking the <span class="instruction-eyes">${eyes()}</span>`;
 items.forEach((item,i)=>{
  const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');
  const a=document.createElement('a');a.className='poster-link';a.href=youtube(item.title);a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title} — search YouTube for trailer`);if(item.poster){const img=document.createElement('img');img.className='poster';img.alt='';img.src=item.poster;img.loading='lazy';a.append(img)}else{const ph=document.createElement('div');ph.className='poster poster-placeholder';ph.textContent='▶';a.append(ph)}
  const info=document.createElement('div');info.className='item-info';const wrap=document.createElement('div');const title=document.createElement('div');title.className='title';title.textContent=item.title;const meta=document.createElement('div');meta.className='list-meta';meta.textContent=`${item.service||''}${currentType==='SHOW'?' · TV':' · Movie'}`;wrap.append(title,meta);info.append(wrap);
  li.dataset.id=String(item.id);
  const b=document.createElement('button');b.type='button';b.className='watch-toggle saved';b.innerHTML=eyes();b.setAttribute('aria-pressed','true');b.setAttribute('aria-label',`Move ${item.title} to Watched`);b.addEventListener('click',()=>removeItem(item,b));li.append(rank,a,info,b);listEl.append(li);enableRowFlick(li);
 });renderPile();
}
document.querySelectorAll('.my-list-controls .segmented button').forEach(button=>button.addEventListener('click',()=>{currentType=button.dataset.type;document.querySelectorAll('.my-list-controls .segmented button').forEach(b=>b.classList.toggle('active',b===button));render()}));
undoButton.addEventListener('click',()=>{if(!lastRemoved)return;const item=lastRemoved;const list=readList();if(!list.some(x=>x.id===item.id)){list.push({...item,addedAt:item.addedAt||new Date().toISOString()});writeList(list)}writeWatched(readWatched().filter(x=>x.id!==item.id));lastRemoved=null;clearTimeout(undoTimer);undoToast.classList.add('hidden');render()});
render();
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopNervousPile();else scheduleNervousPile()});


// v5.3.18: when already at the top, a deliberate downward pull switches
// WozzaWatch → WozzaTune → Watchlist → WozzaWatch instead of native refresh.
function initTopPullSwitch(nextUrl,nextLabel){
  let startY=0,pulling=false,distance=0;
  const threshold=92;
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1||window.__watchlistRowFlick)return;
    startY=e.touches[0].clientY;distance=0;pulling=true;
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling||e.touches.length!==1||window.__watchlistRowFlick)return;
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


// v5.3.18: at the bottom, a deliberate upward flick switches backwards
// through Watch ← Tune ← List. No popup/"Opening" message.
function initBottomFlickSwitch(prevUrl){
  let startY=0,tracking=false,distance=0; const threshold=82;
  const atBottom=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3;
  window.addEventListener('touchstart',e=>{if(e.touches.length!==1||!atBottom()||window.__watchlistRowFlick)return;startY=e.touches[0].clientY;distance=0;tracking=true;},{passive:true});
  window.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1||window.__watchlistRowFlick)return;const dy=startY-e.touches[0].clientY;if(dy<=0){distance=0;return;}if(!atBottom()){tracking=false;return;}distance=dy;if(dy>12)e.preventDefault();},{passive:false});
  const finish=()=>{if(!tracking)return;tracking=false;if(distance>=threshold)location.href=prevUrl;distance=0;};
  window.addEventListener('touchend',finish,{passive:true});window.addEventListener('touchcancel',()=>{tracking=false;distance=0;},{passive:true});
}
initBottomFlickSwitch('tune.html');

// v5.3.18 — after four quiet seconds, alternate the two selector icons every four seconds.
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

// v5.3.18 — aggressively adopt new PWA releases without an update popup.
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
