const SERVICES = [
  {id:'netflix', name:'Netflix', slug:'netflix', tone:'brick', domain:'netflix.com'},
  {id:'prime', name:'Prime', slug:'amazon-prime-video', tone:'blue', domain:'primevideo.com'},
  {id:'disney', name:'Disney', slug:'disney-plus', tone:'green', domain:'disneyplus.com'},
  {id:'apple', name:'Apple', slug:'apple-tv-plus', tone:'yellow', domain:'tv.apple.com'},
  {id:'max', name:'HBO', slug:'hbo-max', tone:'navy', domain:'hbomax.com'},
  {id:'bbc', name:'BBC', slug:'bbc-iplayer', tone:'blue', domain:'bbc.co.uk'},
  {id:'itv', name:'ITV', slug:'itvx', tone:'green', domain:'itv.com'}
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
}

function selectService(index, {scroll = true} = {}) {
  if (index < 0 || index >= SERVICES.length) return false;
  state.service = SERVICES[index];
  syncControls({scroll});
  renderCurrent();
  return true;
}

function initTabs() {
  SERVICES.forEach((service, index) => {
    const button = document.createElement('button');
    button.className = `service-tab ${service.tone}`;
    button.type = 'button';
    button.dataset.service = service.id;
    button.setAttribute('aria-label', service.name);

    const logo = document.createElement('img');
    logo.className = 'service-logo';
    logo.alt = '';
    logo.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(service.domain)}&sz=128`;

    button.appendChild(logo);
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
  syncControls({scroll:true});
  renderCurrent();
  return true;
}

function setContentType(type) {
  if (!['MOVIE','SHOW'].includes(type) || state.type === type) return false;
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
        if (current >= SERVICES.length - 1) bounceChartEdge('next');
        else animateChartChange('x','next',() => setProviderIndex(current + 1));
      } else {
        if (current <= 0) bounceChartEdge('prev');
        else animateChartChange('x','prev',() => setProviderIndex(current - 1));
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

    const title = document.createElement('a');
    title.className = 'title title-link';
    title.textContent = item.title || 'Untitled';
    title.target = '_blank';
    title.rel = 'noopener';
    title.href = item.detailsUrl || item.url || justWatchUrl(state.service, state.type);
    title.dataset.tooltip = 'Click for details';
    title.setAttribute('aria-label', `${item.title || 'Untitled'} — open details`);

    info.append(title);
    li.append(rank, visual, info);
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
  const key = state.type === 'MOVIE' ? 'movies' : 'tv';
  const typeLabel = state.type === 'MOVIE' ? 'Movies' : 'TV Shows';
  const serviceData = state.data?.services?.[service.id];
  const source = serviceData?.sources?.[key];
  const fallbackUrl = justWatchUrl(service, state.type);

  els.chartTitle.textContent = `${service.name} ${typeLabel}`;
  const isOfficial = source?.kind === 'official';
  els.sourceBadge.innerHTML = '';
  els.sourceBadge.href = source?.url || fallbackUrl;
  els.sourceBadge.setAttribute('aria-label', isOfficial ? 'Official stats — open source' : 'Stats from JustWatch — open source');
  els.sourceBadge.className = `source-badge ${isOfficial ? 'official' : 'fallback'}`;

  const sourceText = document.createElement('span');
  sourceText.className = 'source-text';
  sourceText.textContent = isOfficial ? 'Official Stats' : 'Stats from JustWatch';

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
