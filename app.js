const SERVICES = [
  {id:'netflix', name:'Netflix', slug:'netflix', tone:'brick'},
  {id:'prime', name:'Prime', slug:'amazon-prime-video', tone:'blue'},
  {id:'disney', name:'Disney', slug:'disney-plus', tone:'green'},
  {id:'apple', name:'Apple', slug:'apple-tv-plus', tone:'yellow'},
  {id:'max', name:'HBO', slug:'hbo-max', tone:'navy'},
  {id:'bbc', name:'BBC', slug:'bbc-iplayer', tone:'blue'},
  {id:'itv', name:'ITV', slug:'itvx', tone:'green'},
  {id:'channel4', name:'Channel 4', slug:'channel-4', tone:'yellow'},
  {id:'ukcinema', name:'UK Cinema', slug:null, tone:'brick', cinema:true},
  {id:'uscinema', name:'US Cinema', slug:null, tone:'blue', cinema:true}
];

const state = {service: SERVICES[0], type: 'MOVIE', data: null, installPrompt: null};
const els = {
  tabs: document.querySelector('#serviceTabs'),
  chart: document.querySelector('#chart'),
  loading: document.querySelector('#loading'),
  error: document.querySelector('#errorBox'),
  errorText: document.querySelector('#errorText'),
  fallback: document.querySelector('#fallbackLink'),
  chartTitle: document.querySelector('#chartTitle'),
  sourceBadge: document.querySelector('#sourceBadge'),
  updated: document.querySelector('#updatedText'),
  install: document.querySelector('#installBtn')
};

function justWatchUrl(service, type) {
  if (service.cinema) return 'https://www.justwatch.com/uk/movies';
  return `https://www.justwatch.com/uk/provider/${service.slug}/${type === 'MOVIE' ? 'movies' : 'tv-series'}`;
}

function dataUrls() {
  const urls = [];
  const gh = location.hostname.match(/^([^.]+)\.github\.io$/i);
  const repo = location.pathname.split('/').filter(Boolean)[0];
  if (gh && repo) urls.push(`https://raw.githubusercontent.com/${gh[1]}/${repo}/main/data/rankings.json`);
  urls.push('./data/rankings.json');
  return urls;
}

function isUsableRankingFeed(body) {
  const netflix = body?.services?.netflix;
  return Boolean(
    body &&
    typeof body === 'object' &&
    body.services &&
    Array.isArray(netflix?.movies) && netflix.movies.length > 0 &&
    Array.isArray(netflix?.tv) && netflix.tv.length > 0 &&
    netflix?.sources?.movies && netflix?.sources?.tv
  );
}

async function fetchOneRankingFeed(base) {
  const stamp = Date.now();
  const separator = base.includes('?') ? '&' : '?';
  const res = await fetch(`${base}${separator}ww=${stamp}`, {
    cache: 'no-store',
    headers: {'Accept':'application/json'}
  });
  if (!res.ok) throw new Error(`Ranking feed returned ${res.status}`);
  const body = await res.json();
  if (!isUsableRankingFeed(body)) throw new Error('Ranking feed is empty or incomplete');
  return body;
}

async function fetchRankings() {
  let lastError;
  const urls = dataUrls();

  // Try every source twice. This protects the app from a brief GitHub Pages/raw
  // propagation delay immediately after the rankings workflow commits a new file.
  for (let attempt = 0; attempt < 2; attempt += 1) {
    for (const base of urls) {
      try {
        return await fetchOneRankingFeed(base);
      } catch (error) {
        console.warn(`WozzaWatch ranking source failed: ${base}`, error);
        lastError = error;
      }
    }
    if (attempt === 0) await new Promise(resolve => setTimeout(resolve, 900));
  }

  throw lastError || new Error('Ranking feed could not be loaded');
}

function syncControls({scroll = true} = {}) {
  const buttons = [...document.querySelectorAll('.service-tab')];
  buttons.forEach(button => button.classList.toggle('active', button.dataset.service === state.service.id));
  const activeService = buttons.find(button => button.dataset.service === state.service.id);
  if (scroll && activeService) activeService.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  document.querySelectorAll('.segmented button').forEach(button => {
    button.classList.toggle('active', button.dataset.type === state.type);
  });
  const segmented = document.querySelector('.segmented');
  if (segmented) { segmented.classList.toggle('cinema-hidden', Boolean(state.service.cinema)); segmented.classList.toggle('disney-combined', state.service.id === 'disney'); }
}

function selectService(index, {scroll = true} = {}) {
  if (index < 0 || index >= SERVICES.length) return false;
  state.service = SERVICES[index];
  if (state.type === 'COMBINED' && state.service.id !== 'disney') state.type = 'MOVIE';
  if (state.service.cinema) state.type = 'MOVIE';
  syncControls({scroll});
  renderCurrent();
  return true;
}

function initTabs() {
  SERVICES.forEach((service, index) => {
    const button = document.createElement('button');
    button.className = `service-tab ${service.tone}`;
    button.type = 'button';
    button.textContent = service.name;
    button.dataset.service = service.id;
    button.addEventListener('click', () => selectService(index, {scroll:false}));
    els.tabs.appendChild(button);
  });
  syncControls({scroll:false});
}

function providerIndex() {
  return SERVICES.findIndex(service => service.id === state.service.id);
}

function setProviderIndex(index) {
  if (index < 0 || index >= SERVICES.length) return false;
  state.service = SERVICES[index];
  if (state.type === 'COMBINED' && state.service.id !== 'disney') state.type = 'MOVIE';
  if (state.service.cinema) state.type = 'MOVIE';
  syncControls({scroll:true});
  renderCurrent();
  return true;
}

function setContentType(type) {
  if (state.service.cinema) return false;
  if (!['MOVIE','SHOW','COMBINED'].includes(type) || (type === 'COMBINED' && state.service.id !== 'disney') || state.type === type) return false;
  state.type = type;
  syncControls({scroll:false});
  renderCurrent();
  return true;
}

function animateChartChange(axis, direction, applyChange) {
  const card = document.querySelector('.chart-wrap');
  if (!card || card.dataset.animating === '1') return;
  card.dataset.animating = '1';
  const outClass = axis === 'x'
    ? (direction === 'next' ? 'chart-out-next' : 'chart-out-prev')
    : (direction === 'next' ? 'chart-out-up' : 'chart-out-down');
  const inClass = axis === 'x'
    ? (direction === 'next' ? 'chart-in-next' : 'chart-in-prev')
    : (direction === 'next' ? 'chart-in-up' : 'chart-in-down');
  const classes=['chart-out-next','chart-out-prev','chart-in-next','chart-in-prev','chart-out-up','chart-out-down','chart-in-up','chart-in-down','chart-edge-next','chart-edge-prev','chart-edge-up','chart-edge-down'];
  card.classList.remove(...classes);
  card.classList.add(outClass);
  window.setTimeout(() => {
    applyChange();
    card.classList.remove(outClass);
    card.classList.add(inClass);
    window.setTimeout(() => {
      card.classList.remove(inClass);
      delete card.dataset.animating;
    }, 210);
  }, 170);
}

function bounceChartEdge(direction) {
  const card = document.querySelector('.chart-wrap');
  if (!card || card.dataset.animating === '1') return;
  const cls = `chart-edge-${direction}`;
  card.classList.remove('chart-edge-next','chart-edge-prev','chart-edge-up','chart-edge-down');
  void card.offsetWidth;
  card.classList.add(cls);
  window.setTimeout(() => card.classList.remove(cls), 260);
}

function initProviderSwipe() {
  const target = document.querySelector('.chart-wrap');
  if (!target) return;

  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let tracking = false;
  let lastTapAt = 0;
  let lastTapX = 0;
  let lastTapY = 0;
  let tapTimer = null;

  const toggleContentType = () => {
    if (state.service.cinema) return;
    const nextType = state.type === 'MOVIE' ? 'SHOW' : 'MOVIE';
    const card = document.querySelector('.chart-wrap');
    if (!card || card.dataset.animating === '1') return;
    card.dataset.animating = '1';
    card.classList.remove('chart-toggle');
    void card.offsetWidth;
    card.classList.add('chart-toggle');
    window.setTimeout(() => {
      setContentType(nextType);
      window.setTimeout(() => {
        card.classList.remove('chart-toggle');
        delete card.dataset.animating;
      }, 120);
    }, 95);
  };

  target.addEventListener('touchstart', event => {
    if (event.touches.length !== 1 || target.dataset.animating === '1') return;
    const touch = event.touches[0];
    if (touch.clientX < 24 || touch.clientX > window.innerWidth - 24) return;
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = Date.now();
    tracking = true;
  }, {passive:true});

  target.addEventListener('touchend', event => {
    if (!tracking || event.changedTouches.length !== 1) return;
    tracking = false;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    const elapsed = Date.now() - startTime;
    const swipeThreshold = 55;

    // Horizontal swipes navigate providers. Vertical movement is deliberately
    // ignored so normal page scrolling remains completely native.
    if (ax >= swipeThreshold && ax > ay * 1.2) {
      lastTapAt = 0;
      if (tapTimer) {
        clearTimeout(tapTimer);
        tapTimer = null;
      }
      const current = providerIndex();
      if (dx < 0) {
        animateChartChange('x','next',() => setProviderIndex((current + 1) % SERVICES.length));
      } else {
        animateChartChange('x','prev',() => setProviderIndex((current - 1 + SERVICES.length) % SERVICES.length));
      }
      return;
    }

    // A vertical gesture is just a normal scroll — never change Movies/TV.
    if (ay > 16 || ax > 16 || elapsed > 450) return;

    // Don't turn a deliberate double-tap on a link/button into a chart change.
    if (event.target.closest('a,button')) return;

    const now = Date.now();
    const closeToLastTap = Math.hypot(touch.clientX - lastTapX, touch.clientY - lastTapY) < 42;
    if (lastTapAt && now - lastTapAt <= 330 && closeToLastTap) {
      if (tapTimer) {
        clearTimeout(tapTimer);
        tapTimer = null;
      }
      lastTapAt = 0;
      toggleContentType();
      return;
    }

    lastTapAt = now;
    lastTapX = touch.clientX;
    lastTapY = touch.clientY;
    if (tapTimer) clearTimeout(tapTimer);
    tapTimer = window.setTimeout(() => {
      lastTapAt = 0;
      tapTimer = null;
    }, 340);
  }, {passive:true});

  target.addEventListener('touchcancel', () => {
    tracking = false;
  }, {passive:true});

  // Desktop/testing convenience: a true double-click on the card also toggles.
  target.addEventListener('dblclick', event => {
    if (event.target.closest('a,button')) return;
    toggleContentType();
  });
}

function posterUrl(raw) {
  if (!raw) return '';
  if (raw.startsWith('//')) return `https:${raw}`;
  if (raw.startsWith('/')) return `https://images.justwatch.com${raw}`;
  return raw;
}


const WATCHLIST_KEY = 'wozzawatch-my-list-v1';
const WATCHED_KEY = 'wozzawatch-watched-v1';
function readWatchList(){try{return JSON.parse(localStorage.getItem(WATCHLIST_KEY)||'[]')}catch{return[]}}
function writeWatchList(items){localStorage.setItem(WATCHLIST_KEY,JSON.stringify(items))}
function readWatched(){try{return JSON.parse(localStorage.getItem(WATCHED_KEY)||'[]')}catch{return[]}}
function writeWatched(items){localStorage.setItem(WATCHED_KEY,JSON.stringify(items))}
function itemMediaType(item){const raw=String(item?.type||state.type||'MOVIE').toUpperCase();return raw==='SHOW'||raw==='SERIES'||raw==='TV'?'SHOW':'MOVIE'}
function watchId(item){return `${state.service.id}|${itemMediaType(item)}|${String(item.title||'').trim().toLowerCase()}`}
function isSaved(item){const id=watchId(item),title=String(item.title||'').trim().toLowerCase();return readWatchList().some(x=>x.id===id||(x.serviceId===state.service.id&&String(x.title||'').trim().toLowerCase()===title))}
function archiveWatched(item){const watched=readWatched().filter(x=>x.id!==item.id);watched.unshift({...item,watchedAt:new Date().toISOString()});writeWatched(watched)}
function youtubeTrailerUrl(title){return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title||''} trailer`)}`}
function eyesMarkup(){return '<span class="watch-eyes" aria-hidden="true"><span class="watch-eye"><span class="watch-pupil"></span></span><span class="watch-eye"><span class="watch-pupil"></span></span></span>'}
function toggleSaved(item,button){
  const id=watchId(item), titleKey=String(item.title||'').trim().toLowerCase(), list=readWatchList(), at=list.findIndex(x=>x.id===id||(x.serviceId===state.service.id&&String(x.title||'').trim().toLowerCase()===titleKey));
  if(at>=0){
    const removed={...list[at],id,type:itemMediaType(item)};list.splice(at,1);archiveWatched(removed);
    button.classList.remove('saved','pupil-pop');button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',`Add ${item.title||'title'} to My List`)
  }
  else{
    list.push({id,title:item.title||'Untitled',poster:posterUrl(item.poster||''),service:state.service.name,serviceId:state.service.id,type:itemMediaType(item),addedAt:new Date().toISOString()});
    button.classList.add('saved');button.classList.remove('pupil-pop');void button.offsetWidth;button.classList.add('pupil-pop');setTimeout(()=>button.classList.remove('pupil-pop'),700);button.setAttribute('aria-pressed','true');button.setAttribute('aria-label',`Remove ${item.title||'title'} from My List`)
  }
  writeWatchList(list);
}

const MOVIE_PLACEHOLDER = '<svg class="placeholder-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 24h40v28H12zM11 13.5 48 7l4 11-37 6.5z" fill="currentColor"/><path d="m18 12 8-1.4-5.3 10.1-8 1.4zm16-2.8 8-1.4-5.3 10.1-8 1.4z" fill="#eef0fb"/><rect x="18" y="32" width="28" height="5" rx="2.5" fill="#eef0fb"/></svg>';
const TV_PLACEHOLDER = '<svg class="placeholder-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="21" y="5" width="22" height="54" rx="8" fill="currentColor"/><circle cx="32" cy="17" r="4" fill="#eef0fb"/><circle cx="27" cy="28" r="2.5" fill="#eef0fb"/><circle cx="37" cy="28" r="2.5" fill="#eef0fb"/><circle cx="32" cy="46" r="6" fill="none" stroke="#eef0fb" stroke-width="3"/></svg>';

function renderTitles(titles) {
  els.chart.innerHTML = '';
  if (!Array.isArray(titles) || !titles.length) throw new Error('No titles were returned for this chart.');

  titles.slice(0, 10).forEach((item, index) => {
    const li = document.createElement('li');
    li.className = `chart-item accent-${index % 4}`;

    const rank = document.createElement('div');
    rank.className = 'rank';
    rank.textContent = String(index + 1).padStart(2, '0');

    let visual;
    if (item.poster) {
      const img = document.createElement('img');
      img.className = 'poster';
      img.alt = '';
      img.loading = 'lazy';
      img.src = posterUrl(item.poster);
      img.onerror = () => {
        const p = document.createElement('div');
        p.className = 'poster poster-placeholder';
        p.innerHTML = state.type === 'MOVIE' ? MOVIE_PLACEHOLDER : TV_PLACEHOLDER;
        img.replaceWith(p);
      };
      visual = img;
    } else {
      visual = document.createElement('div');
      visual.className = 'poster poster-placeholder';
      visual.innerHTML = state.type === 'MOVIE' ? MOVIE_PLACEHOLDER : TV_PLACEHOLDER;
    }

    const info = document.createElement('div');
    info.className = 'item-info';

    const detailsHref = youtubeTrailerUrl(item.title || '');
    const visualLink = document.createElement('a');
    visualLink.className = 'poster-link';
    visualLink.href = detailsHref;
    visualLink.target = '_blank';
    visualLink.rel = 'noopener';
    visualLink.setAttribute('aria-label', `${item.title || 'Untitled'} — search YouTube for trailer`);
    visualLink.append(visual);

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = item.title || 'Untitled';

    info.append(title);
    const watch = document.createElement('button');
    const saved = isSaved(item);
    watch.type = 'button';
    watch.className = `watch-toggle${saved ? ' saved' : ''}`;
    watch.innerHTML = eyesMarkup();
    watch.setAttribute('aria-pressed', saved ? 'true' : 'false');
    watch.setAttribute('aria-label', `${saved ? 'Remove' : 'Add'} ${item.title || 'title'} ${saved ? 'from' : 'to'} My List`);
    watch.addEventListener('click', event => { event.stopPropagation(); toggleSaved(item, watch); });
    li.classList.add('has-watch-toggle');
    li.append(rank, visualLink, info, watch);
    els.chart.appendChild(li);
  });
}

function formatUpdated(value) {
  if (!value) return 'Waiting for update';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Ranking cache loaded';
  return `Updated ${new Intl.DateTimeFormat('en-GB', {weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'}).format(date)}`;
}

function fitSingleLine(element, maxPx = 25, minPx = 13) {
  element.style.fontSize = `${maxPx}px`;
  let size = maxPx;
  while (element.scrollWidth > element.clientWidth && size > minPx) {
    size -= 0.5;
    element.style.fontSize = `${size}px`;
  }
}

function setLoading(on) {
  els.loading.classList.toggle('hidden', !on);
  if (on) {
    els.chart.innerHTML = '';
    els.error.classList.add('hidden');
  }
}

function renderCurrent() {
  const service = state.service;
  const key = state.type === 'MOVIE' ? 'movies' : state.type === 'SHOW' ? 'tv' : 'combined';
  const typeLabel = state.type === 'MOVIE' ? 'Movies' : state.type === 'SHOW' ? 'TV Shows' : 'Combined';
  const serviceData = state.data?.services?.[service.id];
  const source = serviceData?.sources?.[key];
  const fallbackUrl = source?.url || justWatchUrl(service, state.type);

  els.chartTitle.textContent = service.cinema ? service.name : `${service.name} ${typeLabel}`;
  const isOfficial = source?.kind === 'official';
  const fallbackName = source?.displayName || (source?.label || '').replace(/^JustWatch UK$/i, 'JustWatch').replace(/^Stats from\s+/i, '') || 'Source';
  els.sourceBadge.innerHTML = '';
  els.sourceBadge.href = source?.url || fallbackUrl;
  els.sourceBadge.setAttribute('aria-label', isOfficial ? 'Official stats — open source' : `Stats from ${fallbackName} — open source`);
  els.sourceBadge.className = `source-badge ${isOfficial ? 'official' : 'fallback'}`;

  const sourceText = document.createElement('span');
  sourceText.className = 'source-text';
  sourceText.textContent = isOfficial ? 'Official Stats' : `Stats from ${fallbackName}`;

  els.sourceBadge.append(sourceText);
  if (isOfficial) {
    const verified = document.createElement('span');
    verified.className = 'verified-tick';
    verified.setAttribute('aria-hidden', 'true');
    verified.textContent = '✓';
    els.sourceBadge.append(verified);
  }
  els.fallback.href = source?.url || fallbackUrl;
  els.error.classList.add('hidden');
  els.chart.innerHTML = '';

  requestAnimationFrame(() => fitSingleLine(els.chartTitle));

  try {
    const titles = serviceData?.[key];
    if (serviceData?.error && (!titles || !titles.length)) throw new Error(serviceData.error);
    renderTitles(titles);
    els.updated.textContent = formatUpdated(state.data?.generatedAt);
  } catch (error) {
    els.errorText.textContent = `${error.message || 'This ranking is not available yet'} You can still open the source directly.`;
    els.error.classList.remove('hidden');
  }
}

async function loadData() {
  setLoading(true);
  try {
    state.data = await fetchRankings();
    renderCurrent();
  } catch (error) {
    console.error(error);
    els.errorText.textContent = `${error.message || 'The ranking cache could not be loaded.'} The automatic GitHub refresh may not have run yet.`;
    els.error.classList.remove('hidden');
    els.updated.textContent = 'Ranking feed unavailable';
  } finally {
    setLoading(false);
  }
}

document.querySelectorAll('.segmented button').forEach(button => {
  button.addEventListener('click', () => {
    if (state.service.cinema) return;
    if (button.dataset.type === 'COMBINED' && state.service.id !== 'disney') return;
    state.type = button.dataset.type;
    syncControls({scroll:false});
    renderCurrent();
  });
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  state.installPrompt = event;
  els.install.classList.remove('hidden');
});

els.install.addEventListener('click', async () => {
  if (!state.installPrompt) return;
  state.installPrompt.prompt();
  await state.installPrompt.userChoice;
  state.installPrompt = null;
  els.install.classList.add('hidden');
});

window.addEventListener('appinstalled', () => els.install.classList.add('hidden'));
window.addEventListener('resize', () => fitSingleLine(els.chartTitle));
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(console.warn));

initTabs();
initProviderSwipe();
loadData();
