const WATCHLIST_KEY='wozzawatch-my-list-v1';
const listEl=document.querySelector('#myList'), emptyEl=document.querySelector('#emptyList'), chartTitle=document.querySelector('#chartTitle');
let currentType='MOVIE';
function readList(){try{return JSON.parse(localStorage.getItem(WATCHLIST_KEY)||'[]')}catch{return[]}}
function writeList(v){localStorage.setItem(WATCHLIST_KEY,JSON.stringify(v))}
function youtube(title){return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title||''} trailer`)}`}
function eyes(){return '<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}
function render(){
 const all=readList();
 const items=all.filter(item=>(item.type==='SHOW'?'SHOW':'MOVIE')===currentType);
 listEl.innerHTML='';
 chartTitle.textContent=currentType==='SHOW'?'MY LIST TV SHOWS':'MY LIST MOVIES';
 emptyEl.classList.toggle('hidden',items.length>0);
 emptyEl.querySelector('strong').textContent=currentType==='SHOW'?'No TV shows yet 👀':'No movies yet 👀';
 emptyEl.querySelector('p').textContent=currentType==='SHOW'?'Tap the empty eyes beside any TV show to save it for later.':'Tap the empty eyes beside any movie to save it for later.';
 items.forEach((item,i)=>{
  const li=document.createElement('li');li.className=`chart-item accent-${i%4}`;
  const rank=document.createElement('div');rank.className='rank';rank.textContent=String(i+1).padStart(2,'0');
  const a=document.createElement('a');a.className='poster-link';a.href=youtube(item.title);a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`${item.title} — search YouTube for trailer`);
  if(item.poster){const img=document.createElement('img');img.className='poster';img.alt='';img.src=item.poster;img.loading='lazy';a.append(img)}else{const ph=document.createElement('div');ph.className='poster poster-placeholder';ph.textContent='▶';a.append(ph)}
  const info=document.createElement('div');info.className='item-info';const wrap=document.createElement('div');const title=document.createElement('div');title.className='title';title.textContent=item.title;const meta=document.createElement('div');meta.className='list-meta';meta.textContent=`${item.service||''}${currentType==='SHOW'?' · TV':' · Movie'}`;wrap.append(title,meta);info.append(wrap);
  const b=document.createElement('button');b.type='button';b.className='watch-toggle saved';b.innerHTML=eyes();b.setAttribute('aria-pressed','true');b.setAttribute('aria-label',`Remove ${item.title} from My List`);b.addEventListener('click',()=>{const next=readList().filter(x=>x.id!==item.id);writeList(next);render()});
  li.append(rank,a,info,b);listEl.append(li);
 });
}
document.querySelectorAll('.my-list-controls .segmented button').forEach(button=>button.addEventListener('click',()=>{
 currentType=button.dataset.type;
 document.querySelectorAll('.my-list-controls .segmented button').forEach(b=>b.classList.toggle('active',b===button));
 render();
}));
render();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
