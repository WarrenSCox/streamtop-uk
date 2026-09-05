const KEY='wozzawatch-my-list-v1',WATCHED='wozzawatch-watched-v1';let type='MOVIE';const TYPES=['MOVIE','SHOW','BOOK'];const $=s=>document.querySelector(s);const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}};const write=x=>localStorage.setItem(KEY,JSON.stringify(x));const watched=()=>{try{return JSON.parse(localStorage.getItem(WATCHED)||'[]')}catch{return[]}};const writeWatched=x=>localStorage.setItem(WATCHED,JSON.stringify(x));const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function animateTab(t){const b=document.querySelector(`.segmented button[data-type="${t}"]`);if(!b)return;b.classList.remove('wozza-tab-animate');void b.offsetWidth;b.classList.add('wozza-tab-animate');setTimeout(()=>b.classList.remove('wozza-tab-animate'),760)}
function setType(t,anim=true){if(!TYPES.includes(t))return;type=t;document.querySelectorAll('.segmented button').forEach(x=>x.classList.toggle('active',x.dataset.type===type));render();if(anim)animateTab(t)}
function provider(x){return x.author||x.service||''}
const EYE_POS=[
 [7,3,-15,.88],[28,1,10,.96],[51,4,-6,.90],[76,2,14,.98],[101,5,-11,.92],[126,1,8,.95],[153,4,-14,.91],[181,2,12,.97],
 [18,20,11,.94],[43,18,-10,1.02],[69,22,8,.96],[96,18,-6,1.04],[123,23,12,.92],[149,19,-9,1.01],[174,21,7,.95],
 [38,37,-8,1.03],[66,39,10,.97],[94,36,-12,1.05],[121,40,7,.98],[148,37,-6,1.02],[79,53,-4,1.04],[109,52,8,1.00]
];
let pileTimer=null;
function eyePair([x,y,r,s],i){return `<span class="pile-eye-pair" data-eye="${i}" style="--pile-x:${x}px;--pile-y:${y}px;--pile-r:${r}deg;--pile-s:${s}"><span class="watch-eyes"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span></span>`}
function earPair([x,y,r,s],i){return `<span class="pile-ear" style="--pile-x:${x}px;--pile-y:${y}px;--pile-r:${r}deg;--pile-s:${s}"><svg class="audio-ear" viewBox="0 0 64 88" aria-hidden="true" focusable="false"><use class="audio-ear-shell" href="ear-icon.svg?v=6.2.5#ear-shell"></use><use class="audio-ear-detail" href="ear-icon.svg?v=6.2.5#ear-detail"></use></svg></span>`}
function schedulePileLife(){clearTimeout(pileTimer);const box=$('#watchedPileEyes');if(!box||!box.children.length||matchMedia('(prefers-reduced-motion: reduce)').matches)return;pileTimer=setTimeout(()=>{const pairs=[...box.querySelectorAll('.pile-eye-pair')];if(!pairs.length)return;const pair=pairs[Math.floor(Math.random()*pairs.length)],modes=['nervous-glance','random-blink','eye-pop'],mode=modes[Math.floor(Math.random()*modes.length)];pair.classList.remove(...modes);void pair.offsetWidth;pair.classList.add(mode);setTimeout(()=>pair.classList.remove(mode),1600);schedulePileLife()},1800+Math.random()*2600)}
function pile(){const w=watched(),p=$('#watchedPile'),box=$('#watchedPileEyes');$('#watchedPileCount').textContent=w.length;p.classList.toggle('hidden',w.length===0);if(box){const n=Math.min(EYE_POS.length,Math.max(0,w.length));box.innerHTML=EYE_POS.slice(0,n).map((pos,i)=>w[i]?.readKind==='AUDIOBOOK'?earPair(pos,i):eyePair(pos,i)).join('');schedulePileLife()}}
function fallingEyes(from,item){const pileEl=$('#watchedPile');if(!from||!pileEl||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const a=from.getBoundingClientRect(),b=pileEl.getBoundingClientRect(),fly=document.createElement('span');fly.className='falling-watch-eyes'+(item?.readKind==='AUDIOBOOK'?' falling-ear':'');fly.innerHTML=item?.readKind==='AUDIOBOOK'?'<svg class="audio-ear" viewBox="0 0 64 88" aria-hidden="true" focusable="false"><use class="audio-ear-shell" href="ear-icon.svg?v=6.2.5#ear-shell"></use><use class="audio-ear-detail" href="ear-icon.svg?v=6.2.5#ear-detail"></use></svg>':'<span class="watch-eyes"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>';fly.style.left=`${a.left+a.width/2-20}px`;fly.style.top=`${a.top+a.height/2-14}px`;fly.style.setProperty('--fall-x',`${b.left+b.width/2-(a.left+a.width/2)}px`);fly.style.setProperty('--fall-y',`${b.top+42-(a.top+a.height/2)}px`);document.body.appendChild(fly);setTimeout(()=>{fly.remove();pileEl.classList.remove('pile-bump');void pileEl.offsetWidth;pileEl.classList.add('pile-bump');setTimeout(()=>pileEl.classList.remove('pile-bump'),450)},820)}
function render(){const all=read(),r=all.filter(x=>(x.type||'MOVIE')===type),counts={MOVIE:0,SHOW:0,BOOK:0};all.forEach(x=>counts[x.type]!==undefined&&counts[x.type]++);$('#watchlistCounts').textContent=`MOVIES ${counts.MOVIE} | TV ${counts.SHOW} | BOOKS ${counts.BOOK}`;$('#chartTitle').textContent=`WATCHLIST ${type==='MOVIE'?'MOVIES':type==='SHOW'?'TV':'BOOKS'}`;$('#myList').innerHTML=r.map((x,i)=>`<li class="chart-item accent-${i%4}" data-id="${esc(x.id)}"><span class="rank">${String(i+1).padStart(2,'0')}</span>${x.poster?`<img class="poster" src="${esc(x.poster)}" alt="">`:`<div class="poster poster-placeholder">${type==='BOOK'?'W':''}</div>`}<span class="item-info"><span><strong class="title">${esc(x.title)}</strong><small class="list-meta provider-line">${esc(provider(x))}</small></span></span><button class="watch-toggle saved${x.readKind==='AUDIOBOOK'?' audiobook-ear-toggle':''}" data-remove="${esc(x.id)}" type="button" aria-label="Move ${esc(x.title)} to Watched">${x.readKind==='AUDIOBOOK'?'<svg class="audio-ear" viewBox="0 0 64 88" aria-hidden="true" focusable="false"><use class="audio-ear-shell" href="ear-icon.svg?v=6.2.5#ear-shell"></use><use class="audio-ear-detail" href="ear-icon.svg?v=6.2.5#ear-detail"></use></svg>':'<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}</button></li>`).join('');$('#emptyList').classList.toggle('hidden',r.length>0);pile();document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{const rect=b.getBoundingClientRect(),list=read(),at=list.findIndex(x=>x.id===b.dataset.remove);if(at>=0){const [x]=list.splice(at,1);write(list);const w=watched();w.unshift({...x,watchedAt:new Date().toISOString()});writeWatched(w);render();fallingEyes({getBoundingClientRect:()=>rect},x)}});initDrag()}
function saveDomOrder(){const ids=[...document.querySelectorAll('#myList .chart-item')].map(x=>x.dataset.id),all=read(),map=new Map(all.filter(x=>(x.type||'MOVIE')===type).map(x=>[x.id,x])),ordered=ids.map(id=>map.get(id)).filter(Boolean);let n=0;write(all.map(x=>(x.type||'MOVIE')===type?ordered[n++]:x));render()}
function initDrag(){
  const list=$('#myList');if(!list)return;
  let drag=null,holdTimer=null,startX=0,startY=0,lastX=0,lastY=0,activated=false,moved=false;
  const updateRanks=()=>[...list.querySelectorAll('.chart-item .rank')].forEach((el,i)=>el.textContent=String(i+1).padStart(2,'0'));
  const moveRow=(x,y)=>{
    if(!drag)return;
    const others=[...list.querySelectorAll('.chart-item')].filter(row=>row!==drag);
    const before=others.find(row=>{const r=row.getBoundingClientRect();return y<r.top+r.height/2});
    const oldNext=drag.nextElementSibling;
    if(before)list.insertBefore(drag,before);else list.appendChild(drag);
    if(drag.nextElementSibling!==oldNext){updateRanks();moved=true}
  };
  const begin=()=>{
    if(!drag||activated)return;
    activated=true;
    drag.classList.add('hold-dragging');
    document.body.classList.add('watchlist-reordering');
    drag.setAttribute('aria-grabbed','true');
    navigator.vibrate?.(18);
  };
  const finish=(save=true)=>{
    clearTimeout(holdTimer);holdTimer=null;
    const didDrag=activated;
    if(drag){drag.classList.remove('hold-dragging');drag.removeAttribute('aria-grabbed')}
    document.body.classList.remove('watchlist-reordering');
    drag=null;activated=false;
    if(save&&didDrag&&moved){saveDomOrder();navigator.vibrate?.(12)}
    moved=false;
  };

  // Mobile: the old reliable pattern — hold still, then drag. A normal swipe/scroll
  // before the hold threshold cancels reordering so the page still scrolls normally.
  list.addEventListener('touchstart',e=>{
    const row=e.target.closest('.chart-item');
    if(!row||e.target.closest('button,a')||e.touches.length!==1)return;
    const t=e.touches[0];
    drag=row;startX=lastX=t.clientX;startY=lastY=t.clientY;moved=false;activated=false;
    clearTimeout(holdTimer);holdTimer=setTimeout(begin,340);
  },{passive:true});
  list.addEventListener('touchmove',e=>{
    if(!drag||e.touches.length!==1)return;
    const t=e.touches[0];lastX=t.clientX;lastY=t.clientY;
    if(!activated){
      if(Math.hypot(t.clientX-startX,t.clientY-startY)>12){clearTimeout(holdTimer);holdTimer=null;drag=null}
      return;
    }
    e.preventDefault();
    moveRow(t.clientX,t.clientY);
    const edge=72;
    if(t.clientY<edge)window.scrollBy(0,-9);
    else if(t.clientY>innerHeight-edge)window.scrollBy(0,9);
  },{passive:false});
  list.addEventListener('touchend',e=>{if(!drag)return;if(activated)e.preventDefault();finish(true)},{passive:false});
  list.addEventListener('touchcancel',()=>finish(false),{passive:true});

  // Desktop/mouse: native drag-and-drop.
  list.querySelectorAll('.chart-item').forEach(row=>{
    row.draggable=matchMedia('(pointer:fine)').matches;
    row.addEventListener('dragstart',e=>{
      if(e.target.closest('button,a')){e.preventDefault();return}
      drag=row;activated=true;moved=false;
      row.classList.add('hold-dragging');document.body.classList.add('watchlist-reordering');
      e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',row.dataset.id||'');
    });
  });
  list.addEventListener('dragover',e=>{if(!drag)return;e.preventDefault();moveRow(e.clientX,e.clientY)});
  list.addEventListener('drop',e=>{if(!drag)return;e.preventDefault();finish(true)});
  list.addEventListener('dragend',()=>{if(drag)finish(true)});
}


// v6.2.36 — Search to add: TV (TVmaze), films (Wikidata) and books (Open Library).
const SEARCH_LIMIT_PER_TYPE=3;
let searchTimer=null,searchRun=0,searchResults=[];
const norm=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
function searchItemId(x){return x.id||`search|${x.type}|${norm(x.title)}`}
function sameWatchItem(a,b){return String(a?.type||'MOVIE').toUpperCase()===String(b?.type||'MOVIE').toUpperCase()&&norm(a?.title)===norm(b?.title)}
function isSearchSaved(x){return read().some(i=>i.id===searchItemId(x)||sameWatchItem(i,x))}
function searchTypeLabel(t){return t==='SHOW'?'TV':t==='BOOK'?'BOOK':'FILM'}
function searchTypePlural(t){return t==='SHOW'?'TV':t==='BOOK'?'Books':'Movies'}
function searchPosterFallback(t){return `<span class="poster search-poster-fallback">${t==='BOOK'?'W':t==='SHOW'?'TV':'FILM'}</span>`}
function searchEyesMarkup(){return '<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}
function updateSearchSavedStates(){
  document.querySelectorAll('[data-search-save]').forEach(btn=>{
    const item=searchResults[Number(btn.dataset.searchSave)];if(!item)return;
    const saved=isSearchSaved(item);btn.classList.toggle('saved',saved);btn.setAttribute('aria-pressed',saved?'true':'false');btn.setAttribute('aria-label',saved?`${item.title} is already in your Watchlist`:`Add ${item.title} to Watchlist`);
  });
}
function addSearchItem(item,button){
  if(isSearchSaved(item)){
    const status=$('#watchlistSearchStatus');if(status)status.textContent=`${item.title} is already in your Watchlist.`;return;
  }
  const list=read();list.push({id:searchItemId(item),title:item.title||'Untitled',poster:item.poster||'',service:item.service||item.meta||searchTypeLabel(item.type),serviceId:'search',type:item.type,author:item.author||'',addedAt:new Date().toISOString()});write(list);
  button.classList.add('saved');button.classList.remove('pupil-pop');void button.offsetWidth;button.classList.add('pupil-pop');setTimeout(()=>button.classList.remove('pupil-pop'),700);button.setAttribute('aria-pressed','true');
  render();updateSearchSavedStates();
  const status=$('#watchlistSearchStatus');if(status)status.textContent=`Added to ${searchTypePlural(item.type)} ✓`;
}
function renderSearchResults(items){
  searchResults=items;const box=$('#watchlistSearchResults'),status=$('#watchlistSearchStatus');if(!box)return;
  if(!items.length){box.hidden=true;box.innerHTML='';if(status)status.textContent='No matching TV, films or books found.';return}
  box.hidden=false;
  box.innerHTML=items.map((x,i)=>{const saved=isSearchSaved(x),meta=x.meta||searchTypeLabel(x.type);return `<li class="watchlist-search-result" data-search-type="${esc(x.type)}">${x.poster?`<img class="poster search-poster" src="${esc(x.poster)}" alt="" loading="lazy">`:searchPosterFallback(x.type)}<span class="search-result-copy"><strong>${esc(x.title)}</strong><small><b>${searchTypeLabel(x.type)}</b>${meta?` · ${esc(meta)}`:''}</small></span><button class="watch-toggle search-save-toggle${saved?' saved':''}" type="button" data-search-save="${i}" aria-pressed="${saved}" aria-label="${saved?`${esc(x.title)} is already in your Watchlist`:`Add ${esc(x.title)} to Watchlist`}">${searchEyesMarkup()}</button></li>`}).join('');
  box.querySelectorAll('[data-search-save]').forEach(btn=>btn.addEventListener('click',()=>{const item=searchResults[Number(btn.dataset.searchSave)];if(item)addSearchItem(item,btn)}));
  if(status)status.textContent=`${items.length} result${items.length===1?'':'s'} found`;
}
function yearFrom(value){const m=String(value||'').match(/\b(18|19|20)\d{2}\b/);return m?m[0]:''}
async function fetchJson(url,timeout=9000){
  const ctrl=new AbortController(),timer=setTimeout(()=>ctrl.abort(),timeout);try{const r=await fetch(url,{signal:ctrl.signal,headers:{Accept:'application/json'}});if(!r.ok)throw new Error(`HTTP ${r.status}`);return await r.json()}finally{clearTimeout(timer)}
}
async function searchTv(q){
  const data=await fetchJson(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`);
  return (Array.isArray(data)?data:[]).slice(0,SEARCH_LIMIT_PER_TYPE).map(row=>{const show=row.show||{},year=yearFrom(show.premiered);return {id:`search|SHOW|tvmaze-${show.id}`,type:'SHOW',title:show.name||'',poster:show.image?.medium||show.image?.original||'',meta:year||'',service:year?`TV · ${year}`:'TV'}}).filter(x=>x.title);
}
function looksLikeFilm(desc){const d=norm(desc);return /\bfilm\b|\bmovie\b/.test(d)&&!/film festival|film company|film studio|film series|film franchise|film character|film soundtrack|film director|film producer|film actor|film actress/.test(d)}
function commonsImage(filename){return filename?`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=180`:''}
async function searchFilms(q){
  const base='https://www.wikidata.org/w/api.php';
  const found=await fetchJson(`${base}?action=wbsearchentities&search=${encodeURIComponent(q)}&language=en&uselang=en&type=item&limit=10&format=json&origin=*`);
  const films=(found.search||[]).filter(x=>looksLikeFilm(x.description)).slice(0,SEARCH_LIMIT_PER_TYPE);if(!films.length)return[];
  let entities={};try{const ids=films.map(x=>x.id).join('|'),detail=await fetchJson(`${base}?action=wbgetentities&ids=${encodeURIComponent(ids)}&props=claims&format=json&origin=*`);entities=detail.entities||{}}catch{}
  return films.map(x=>{const claim=entities[x.id]?.claims?.P18?.[0]?.mainsnak?.datavalue?.value||'',year=yearFrom(x.description);return {id:`search|MOVIE|wikidata-${x.id}`,type:'MOVIE',title:x.label||'',poster:commonsImage(claim),meta:year||'',service:year?`Film · ${year}`:'Film'}}).filter(x=>x.title);
}
async function searchBooks(q){
  const data=await fetchJson(`https://openlibrary.org/search.json?title=${encodeURIComponent(q)}&fields=key,title,author_name,first_publish_year,cover_i&limit=6`);
  return (data.docs||[]).slice(0,SEARCH_LIMIT_PER_TYPE).map(x=>{const author=Array.isArray(x.author_name)?x.author_name[0]||'':'';return {id:`search|BOOK|openlibrary-${x.key||norm(x.title)}`,type:'BOOK',title:x.title||'',poster:x.cover_i?`https://covers.openlibrary.org/b/id/${x.cover_i}-M.jpg`:'',author,meta:[author,x.first_publish_year].filter(Boolean).join(' · '),service:author||'Book'}}).filter(x=>x.title);
}
function rankSearch(items,q){const n=norm(q);return items.sort((a,b)=>{const at=norm(a.title),bt=norm(b.title),score=t=>t===n?0:t.startsWith(n)?1:t.includes(n)?2:3;return score(at)-score(bt)||at.localeCompare(bt)}).slice(0,9)}
async function runWatchlistSearch(raw){
  const q=String(raw||'').trim(),box=$('#watchlistSearchResults'),status=$('#watchlistSearchStatus'),spinner=$('#watchlistSearchSpinner'),run=++searchRun;
  if(q.length<2){searchResults=[];if(box){box.hidden=true;box.innerHTML=''}if(status)status.textContent=q?'Type at least 2 characters.':'';if(spinner)spinner.hidden=true;return}
  if(status)status.textContent='Searching TV, films and books…';if(spinner)spinner.hidden=false;
  const settled=await Promise.allSettled([searchTv(q),searchFilms(q),searchBooks(q)]);if(run!==searchRun)return;if(spinner)spinner.hidden=true;
  const items=rankSearch(settled.flatMap(x=>x.status==='fulfilled'?x.value:[]),q);renderSearchResults(items);
  if(!items.length&&settled.some(x=>x.status==='rejected')&&status)status.textContent='Search is temporarily unavailable. Try again.';
}
function initWatchlistSearch(){
  const input=$('#watchlistSearch');if(!input)return;
  input.addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>runWatchlistSearch(input.value),320)});
  input.addEventListener('search',()=>{clearTimeout(searchTimer);runWatchlistSearch(input.value)});
  input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();clearTimeout(searchTimer);runWatchlistSearch(input.value)}});
}

document.querySelectorAll('.segmented button').forEach(b=>b.onclick=()=>setType(b.dataset.type));function initGestures(){
  const target=$('.chart-wrap');if(!target)return;
  let sx=0,sy=0,tracking=false;
  const move=dir=>{const i=TYPES.indexOf(type);setType(TYPES[(i+dir+TYPES.length)%TYPES.length])};
  target.addEventListener('touchstart',e=>{
    if(e.target.closest('a,button')||e.touches.length!==1||document.body.classList.contains('watchlist-reordering'))return;
    const t=e.touches[0];sx=t.clientX;sy=t.clientY;tracking=true;
  },{passive:true});
  target.addEventListener('touchend',e=>{
    if(!tracking||e.changedTouches.length!==1||document.body.classList.contains('watchlist-reordering'))return;
    tracking=false;
    if(e.target.closest('a,button'))return;
    const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;
    if(Math.abs(dx)>=58&&Math.abs(dx)>Math.abs(dy)*1.25)move(dx<0?1:-1);
  },{passive:true});
  target.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
}
function initMenu(){const m=$('#wozzaMenu'),bd=$('#wozzaMenuBackdrop'),t=$('.header-copy');const open=()=>{m.classList.add('open');m.setAttribute('aria-hidden','false');bd.hidden=false},close=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');bd.hidden=true};t?.addEventListener('click',open);bd?.addEventListener('click',close);$('.wozza-menu-back')?.addEventListener('click',close);$('#wozzaMenuList')?.addEventListener('click',e=>{const b=e.target.closest('[data-href]');if(b)location.href=b.dataset.href})}initMenu();initGestures();render();initWatchlistSearch();

// v6.2.29 — complete the main Wozza pull-navigation loop:
// WozzaWatch → WozzaTune → Watchlist → WozzaWatch.
function initTopPullSwitch(nextUrl){
  let startY=0,pulling=false,distance=0;
  const threshold=92;
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1||document.body.classList.contains('watchlist-reordering'))return;
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
    if(!pulling)return;
    pulling=false;
    if(distance>=threshold)location.href=nextUrl;
    distance=0;
  };
  window.addEventListener('touchend',finish,{passive:true});
  window.addEventListener('touchcancel',()=>{pulling=false;distance=0;},{passive:true});
}
initTopPullSwitch('index.html');
