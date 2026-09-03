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
function render(){const all=read(),r=all.filter(x=>(x.type||'MOVIE')===type),counts={MOVIE:0,SHOW:0,BOOK:0};all.forEach(x=>counts[x.type]!==undefined&&counts[x.type]++);$('#watchlistCounts').textContent=`MOVIES ${counts.MOVIE} | TV ${counts.SHOW} | BOOKS ${counts.BOOK}`;$('#chartTitle').textContent=`WATCHLIST ${type==='MOVIE'?'MOVIES':type==='SHOW'?'TV':'BOOKS'}`;$('#myList').innerHTML=r.map((x,i)=>`<li class="chart-item accent-${i%4}" draggable="true" data-id="${esc(x.id)}"><span class="rank">${String(i+1).padStart(2,'0')}</span>${x.poster?`<img class="poster" src="${esc(x.poster)}" alt="">`:`<div class="poster poster-placeholder">${type==='BOOK'?'W':''}</div>`}<span class="item-info"><span><strong class="title">${esc(x.title)}</strong><small class="list-meta provider-line">${esc(provider(x))}</small></span></span><button class="watch-toggle saved${x.readKind==='AUDIOBOOK'?' audiobook-ear-toggle':''}" data-remove="${esc(x.id)}" type="button" aria-label="Move ${esc(x.title)} to Watched">${x.readKind==='AUDIOBOOK'?'<svg class="audio-ear" viewBox="0 0 64 88" aria-hidden="true" focusable="false"><use class="audio-ear-shell" href="ear-icon.svg?v=6.2.5#ear-shell"></use><use class="audio-ear-detail" href="ear-icon.svg?v=6.2.5#ear-detail"></use></svg>':'<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}</button></li>`).join('');$('#emptyList').classList.toggle('hidden',r.length>0);pile();document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{const rect=b.getBoundingClientRect(),list=read(),at=list.findIndex(x=>x.id===b.dataset.remove);if(at>=0){const [x]=list.splice(at,1);write(list);const w=watched();w.unshift({...x,watchedAt:new Date().toISOString()});writeWatched(w);render();fallingEyes({getBoundingClientRect:()=>rect},x)}});initDrag()}
function saveDomOrder(){const ids=[...document.querySelectorAll('#myList .chart-item')].map(x=>x.dataset.id),all=read(),map=new Map(all.filter(x=>(x.type||'MOVIE')===type).map(x=>[x.id,x])),ordered=ids.map(id=>map.get(id)).filter(Boolean);let n=0;write(all.map(x=>(x.type||'MOVIE')===type?ordered[n++]:x));render()}
function initDrag(){
  const list=$('#myList');if(!list)return;
  const rows=[...list.querySelectorAll('.chart-item')];
  let drag=null,holdTimer=null,startX=0,startY=0,lastX=0,lastY=0,active=false,pointerId=null,autoScrollRaf=null;
  const updateRanks=()=>[...list.querySelectorAll('.chart-item .rank')].forEach((el,i)=>el.textContent=String(i+1).padStart(2,'0'));
  const moveRow=(x,y)=>{
    const over=document.elementFromPoint(x,y)?.closest?.('#myList .chart-item');
    if(!over||over===drag)return;
    const rect=over.getBoundingClientRect();
    list.insertBefore(drag,y<rect.top+rect.height/2?over:over.nextSibling);
    updateRanks();
  };
  const autoScroll=()=>{
    if(!active)return;
    const edge=86;
    let dy=0;
    if(lastY<edge)dy=-Math.max(3,(edge-lastY)*.16);
    else if(lastY>innerHeight-edge)dy=Math.max(3,(lastY-(innerHeight-edge))*.16);
    if(dy)window.scrollBy(0,dy);
    autoScrollRaf=requestAnimationFrame(autoScroll);
  };
  const begin=(li,id)=>{
    if(!li||active)return;
    drag=li;active=true;pointerId=id??null;
    clearTimeout(holdTimer);holdTimer=null;
    li.classList.add('hold-dragging');
    document.body.classList.add('watchlist-reordering');
    li.setAttribute('aria-grabbed','true');
    navigator.vibrate?.(18);
    cancelAnimationFrame(autoScrollRaf);autoScrollRaf=requestAnimationFrame(autoScroll);
  };
  const cleanup=save=>{
    clearTimeout(holdTimer);holdTimer=null;
    cancelAnimationFrame(autoScrollRaf);autoScrollRaf=null;
    const did=active;
    if(drag){drag.classList.remove('hold-dragging');drag.removeAttribute('aria-grabbed')}
    rows.forEach(x=>x.classList.remove('drag-over'));
    document.body.classList.remove('watchlist-reordering');
    drag=null;active=false;pointerId=null;
    if(save&&did)saveDomOrder();
  };
  rows.forEach(li=>{
    li.draggable=true;
    li.addEventListener('contextmenu',e=>{if(active)e.preventDefault()});
    li.addEventListener('dragstart',e=>{
      if(e.target.closest('button,a')||e.pointerType==='touch'){e.preventDefault();return}
      drag=li;active=true;li.classList.add('hold-dragging');document.body.classList.add('watchlist-reordering');
      e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',li.dataset.id||'');
    });
    li.addEventListener('dragover',e=>{if(!drag||drag===li)return;e.preventDefault();lastY=e.clientY;moveRow(e.clientX,e.clientY)});
    li.addEventListener('drop',e=>{e.preventDefault();cleanup(true)});
    li.addEventListener('dragend',()=>cleanup(true));
    li.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'||e.target.closest('button,a')||e.button!==0)return;
      startX=lastX=e.clientX;startY=lastY=e.clientY;pointerId=e.pointerId;
      clearTimeout(holdTimer);
      holdTimer=setTimeout(()=>begin(li,e.pointerId),320);
    });
    li.addEventListener('pointermove',e=>{
      if(e.pointerId!==pointerId)return;
      lastX=e.clientX;lastY=e.clientY;
      if(!active){
        if(Math.hypot(e.clientX-startX,e.clientY-startY)>11){clearTimeout(holdTimer);holdTimer=null;pointerId=null}
        return;
      }
      e.preventDefault();
      moveRow(e.clientX,e.clientY);
    },{passive:false});
    li.addEventListener('pointerup',e=>{if(e.pointerId===pointerId)cleanup(active)});
    li.addEventListener('pointercancel',e=>{if(e.pointerId===pointerId)cleanup(false)});
  });
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
function initMenu(){const m=$('#wozzaMenu'),bd=$('#wozzaMenuBackdrop'),t=$('.header-copy');const open=()=>{m.classList.add('open');m.setAttribute('aria-hidden','false');bd.hidden=false},close=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');bd.hidden=true};t?.addEventListener('click',open);bd?.addEventListener('click',close);$('.wozza-menu-back')?.addEventListener('click',close);$('#wozzaMenuList')?.addEventListener('click',e=>{const b=e.target.closest('[data-href]');if(b)location.href=b.dataset.href})}initMenu();initGestures();render();
