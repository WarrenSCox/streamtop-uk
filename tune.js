const state={service:'ukmusic',type:'SINGLE',data:null};
const SERVICE_ORDER=['ukmusic','usmusic'];
const SERVICE_LABEL={ukmusic:'UK Music',usmusic:'USA Music'};
const els={chart:document.querySelector('#chart'),loading:document.querySelector('#loading'),error:document.querySelector('#errorBox'),errorText:document.querySelector('#errorText'),fallback:document.querySelector('#fallbackLink'),chartTitle:document.querySelector('#chartTitle'),sourceBadge:document.querySelector('#sourceBadge'),updated:document.querySelector('#updatedText')};
const SOURCES={ukmusic:{SINGLE:'https://www.officialcharts.com/charts/singles-chart/',ALBUM:'https://www.officialcharts.com/charts/albums-chart/'},usmusic:{SINGLE:'https://ca.billboard.com/charts/hot-100',ALBUM:'https://ca.billboard.com/charts/billboard-200'}};
function dataUrls(){const u=[];const gh=location.hostname.match(/^([^.]+)\.github\.io$/i);const repo=location.pathname.split('/').filter(Boolean)[0];if(gh&&repo)u.push(`https://raw.githubusercontent.com/${gh[1]}/${repo}/main/data/rankings.json`);u.push('./data/rankings.json');return u}
async function loadFeed(){let e;for(let a=0;a<2;a++){for(const base of dataUrls()){try{const r=await fetch(`${base}${base.includes('?')?'&':'?'}ww=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw Error(`Ranking feed returned ${r.status}`);const b=await r.json();if(!b?.services?.ukmusic&&!b?.services?.usmusic)throw Error('Music rankings are not available yet');return b}catch(x){e=x}}if(!a)await new Promise(r=>setTimeout(r,700))}throw e||Error('Ranking feed unavailable')}
function formatUpdated(v){if(!v)return'Waiting for update';const d=new Date(v);return Number.isNaN(d.getTime())?'Ranking cache loaded':`Updated ${new Intl.DateTimeFormat('en-GB',{weekday:'short',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}).format(d)}`}
function fit(el,max=25,min=13){el.style.fontSize=`${max}px`;let n=max;while(el.scrollWidth>el.clientWidth&&n>min){n-=.5;el.style.fontSize=`${n}px`}}
function sourceFor(){return SOURCES[state.service][state.type]}
function render(){const key=state.type==='SINGLE'?'singles':'albums',label=state.type==='SINGLE'?'Singles':'Albums',d=state.data?.services?.[state.service],source=d?.sources?.[key];els.chartTitle.textContent=`${SERVICE_LABEL[state.service]} ${label}`;els.sourceBadge.href=source?.url||sourceFor();const official=source?.kind==='official';els.sourceBadge.className=`source-badge ${official?'official':'fallback'}`;els.sourceBadge.innerHTML=official?'<span class="source-text">Official Stats</span><span class="verified-tick" aria-hidden="true">✓</span>':`<span class="source-text">Stats from ${source?.displayName||source?.label||'source'}</span>`;if(source?.stale){const stale=document.createElement('span');stale.className='stale-alert';stale.textContent='!';stale.title='This source did not update successfully, so the last available results are being shown.';stale.onclick=e=>{e.preventDefault();e.stopPropagation();alert(stale.title)};els.sourceBadge.append(stale)}els.fallback.href=source?.url||sourceFor();els.chart.innerHTML='';els.error.classList.add('hidden');requestAnimationFrame(()=>fit(els.chartTitle));const items=d?.[key];if(!Array.isArray(items)||!items.length){els.errorText.textContent='This chart is not available yet. You can still open the source directly.';els.error.classList.remove('hidden');return}items.slice(0,10).forEach((item,i)=>{const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');const img=document.createElement('img');img.className='poster';img.alt='';img.loading='lazy';img.src=item.poster|| (state.type==='SINGLE'?'single-icon.svg':'album-icon.svg');const spotifyUrl=`https://open.spotify.com/search/${encodeURIComponent([item.title,item.artist].filter(Boolean).join(' '))}`;const a=document.createElement('a');a.className='poster-link';a.href=spotifyUrl;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title||'Untitled'} — search Spotify`);a.append(img);const info=document.createElement('div');info.className='item-info';const title=document.createElement('div');title.className='title';title.textContent=item.title||'Untitled';info.append(title);if(item.artist){const artist=document.createElement('div');artist.className='artist';artist.textContent=item.artist;info.append(artist)}li.append(rank,a,info);els.chart.append(li)});els.updated.textContent=formatUpdated(state.data?.generatedAt)}
function setType(t){
  if(!['SINGLE','ALBUM'].includes(t)||t===state.type)return;
  state.type=t;
  document.querySelectorAll('.segmented button').forEach(b=>b.classList.toggle('active',b.dataset.type===t));
  render();
}
function setService(id,direction=0){
  if(!SERVICE_ORDER.includes(id)||id===state.service)return;
  state.service=id;
  document.querySelectorAll('.service-tab').forEach(b=>b.classList.toggle('active',b.dataset.service===id));
  const active=document.querySelector(`.service-tab[data-service="${id}"]`);
  active?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  if(direction){
    const out=direction>0?'chart-out-prev':'chart-out-next',inn=direction>0?'chart-in-prev':'chart-in-next';
    card.dataset.animating='1';
    card.classList.add(out);
    setTimeout(()=>{
      card.classList.remove(out);
      render();
      card.classList.add(inn);
      setTimeout(()=>{card.classList.remove(inn);delete card.dataset.animating},230);
    },170);
  }else render();
}
document.querySelectorAll('.segmented button').forEach(b=>b.addEventListener('click',()=>setType(b.dataset.type)));
document.querySelectorAll('.service-tab').forEach(b=>b.addEventListener('click',()=>setService(b.dataset.service)));

const card=document.querySelector('.chart-wrap');
function initMusicGestures(){
  if(!card)return;
  let startX=0,startY=0,startTime=0,tracking=false,lastTapAt=0,lastTapX=0,lastTapY=0,tapTimer=null;

  const toggleMusicType=()=>{
    if(card.dataset.animating==='1')return;
    const next=state.type==='SINGLE'?'ALBUM':'SINGLE';
    card.dataset.animating='1';
    card.classList.remove('chart-toggle');
    void card.offsetWidth;
    card.classList.add('chart-toggle');
    setTimeout(()=>{
      setType(next);
      setTimeout(()=>{card.classList.remove('chart-toggle');delete card.dataset.animating},120);
    },95);
  };

  card.addEventListener('touchstart',event=>{
    if(event.touches.length!==1||card.dataset.animating==='1')return;
    const touch=event.touches[0];
    if(touch.clientX<24||touch.clientX>window.innerWidth-24)return;
    startX=touch.clientX;startY=touch.clientY;startTime=Date.now();tracking=true;
  },{passive:true});

  card.addEventListener('touchend',event=>{
    if(!tracking||event.changedTouches.length!==1)return;
    tracking=false;
    const touch=event.changedTouches[0];
    const dx=touch.clientX-startX,dy=touch.clientY-startY,ax=Math.abs(dx),ay=Math.abs(dy),elapsed=Date.now()-startTime;

    if(ax>=55&&ax>ay*1.2){
      lastTapAt=0;if(tapTimer){clearTimeout(tapTimer);tapTimer=null}
      const i=SERVICE_ORDER.indexOf(state.service);
      const next=dx<0?(i+1)%SERVICE_ORDER.length:(i-1+SERVICE_ORDER.length)%SERVICE_ORDER.length;
      setService(SERVICE_ORDER[next],dx<0?1:-1);
      return;
    }
    if(ay>16||ax>16||elapsed>450)return;
    if(event.target.closest('a,button'))return;

    const now=Date.now();
    const close=Math.hypot(touch.clientX-lastTapX,touch.clientY-lastTapY)<42;
    if(lastTapAt&&now-lastTapAt<=330&&close){
      if(tapTimer){clearTimeout(tapTimer);tapTimer=null}
      lastTapAt=0;toggleMusicType();return;
    }
    lastTapAt=now;lastTapX=touch.clientX;lastTapY=touch.clientY;
    if(tapTimer)clearTimeout(tapTimer);
    tapTimer=setTimeout(()=>{lastTapAt=0;tapTimer=null},340);
  },{passive:true});

  card.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
  card.addEventListener('dblclick',event=>{if(!event.target.closest('a,button'))toggleMusicType()});
}
initMusicGestures();
(async()=>{try{state.data=await loadFeed();render()}catch(e){els.errorText.textContent=e.message;els.error.classList.remove('hidden');els.updated.textContent='Ranking feed unavailable'}finally{els.loading.classList.add('hidden')}})();


// v5.3.25: when already at the top, a deliberate downward pull switches
// WozzaWatch → WozzaTune → Watchlist → WozzaWatch instead of native refresh.
function initTopPullSwitch(nextUrl,nextLabel){
  let startY=0,pulling=false,distance=0;
  const threshold=92;
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1)return;
    startY=e.touches[0].clientY;distance=0;pulling=true;
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling||e.touches.length!==1)return;
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

initTopPullSwitch('my-list.html','Watchlist');


// v5.3.25: at the bottom, a deliberate upward flick switches backwards
// through Watch ← Tune ← List. No popup/"Opening" message.
function initBottomFlickSwitch(prevUrl){
  let startY=0,tracking=false,distance=0; const threshold=82;
  const atBottom=()=>window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3;
  window.addEventListener('touchstart',e=>{if(e.touches.length!==1||!atBottom())return;startY=e.touches[0].clientY;distance=0;tracking=true;},{passive:true});
  window.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1)return;const dy=startY-e.touches[0].clientY;if(dy<=0){distance=0;return;}if(!atBottom()){tracking=false;return;}distance=dy;if(dy>12)e.preventDefault();},{passive:false});
  const finish=()=>{if(!tracking)return;tracking=false;if(distance>=threshold)location.href=prevUrl;distance=0;};
  window.addEventListener('touchend',finish,{passive:true});window.addEventListener('touchcancel',()=>{tracking=false;distance=0;},{passive:true});
}
initBottomFlickSwitch('index.html');



// v5.3.25 — after four quiet seconds, alternate the two selector icons every four seconds.
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

// v5.3.25 — aggressively adopt new PWA releases without an update popup.
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


// v5.3.25 — Ranked All Wozzas menu. Hold + drag; top three become header navigation.
const WOZZA_ORDER_KEY='wozzawatch-nav-order-v1';
const WOZZA_META={
 watch:{label:'WozzaWatch',href:'index.html',icon:'icon.png'},
 tune:{label:'WozzaTune',href:'tune.html',icon:'tune-icon.svg'},
 list:{label:'Watchlist',href:'my-list.html',icon:'my-list-icon.svg'},
 read:{label:'WozzaRead',href:null,icon:'read-icon.png'},
 news:{label:'WozzaNews',href:null,icon:'news-icon.png'}
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


// v5.3.25 — Android-safe ranked menu.
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
