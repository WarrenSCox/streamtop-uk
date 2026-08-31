const SERVICES = [
  { id:'netflix', name:'Netflix', slug:'netflix' },
  { id:'prime', name:'Prime Video', slug:'amazon-prime-video' },
  { id:'disney', name:'Disney+', slug:'disney-plus' },
  { id:'apple', name:'Apple TV+', slug:'apple-tv-plus' },
  { id:'max', name:'HBO Max', slug:'hbo-max' },
  { id:'bbc', name:'BBC iPlayer', slug:'bbc-iplayer' },
  { id:'itv', name:'ITVX', slug:'itvx' },
];

const state = {
  service: SERVICES[0],
  type: 'MOVIE',
  data: null,
  installPrompt: null,
};

const els = {
  tabs: document.querySelector('#serviceTabs'),
  chart: document.querySelector('#chart'),
  loading: document.querySelector('#loading'),
  error: document.querySelector('#errorBox'),
  errorText: document.querySelector('#errorText'),
  fallback: document.querySelector('#fallbackLink'),
  chartTitle: document.querySelector('#chartTitle'),
  sourceLink: document.querySelector('#sourceLink'),
  updated: document.querySelector('#updatedText'),
  refresh: document.querySelector('#refreshBtn'),
  install: document.querySelector('#installBtn'),
};

function justWatchUrl(service, type) {
  return `https://www.justwatch.com/uk/provider/${service.slug}/${type === 'MOVIE' ? 'movies' : 'tv-series'}`;
}

function dataUrls() {
  const urls = [];
  const hostMatch = location.hostname.match(/^([^.]+)\.github\.io$/i);
  const repo = location.pathname.split('/').filter(Boolean)[0];
  if (hostMatch && repo) {
    urls.push(`https://raw.githubusercontent.com/${hostMatch[1]}/${repo}/main/data/rankings.json`);
  }
  urls.push('./data/rankings.json');
  return urls;
}

async function fetchRankings(force = false) {
  let lastError;
  for (const base of dataUrls()) {
    try {
      const url = `${base}${base.includes('?') ? '&' : '?'}v=${force ? Date.now() : Math.floor(Date.now()/300000)}`;
      const res = await fetch(url, { cache:'no-store' });
      if (!res.ok) throw new Error(`Ranking feed returned ${res.status}`);
      const body = await res.json();
      if (!body || !body.services) throw new Error('Ranking feed is not ready yet');
      return body;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error('Ranking feed could not be loaded');
}

function initTabs() {
  SERVICES.forEach(service => {
    const btn = document.createElement('button');
    btn.className = 'service-tab';
    btn.type = 'button';
    btn.textContent = service.name;
    btn.dataset.service = service.id;
    btn.addEventListener('click', () => {
      state.service = service;
      document.querySelectorAll('.service-tab').forEach(b => b.classList.toggle('active', b === btn));
      renderCurrent();
    });
    els.tabs.appendChild(btn);
  });
  els.tabs.firstElementChild?.classList.add('active');
}

function posterUrl(raw) {
  if (!raw) return '';
  if (raw.startsWith('//')) return `https:${raw}`;
  if (raw.startsWith('/')) return `https://images.justwatch.com${raw}`;
  return raw;
}

function trendText(item) {
  if (!item.trend) return '';
  const amount = Number(item.trendDifference || 0);
  if (item.trend === 'UP') return amount ? `▲ ${Math.abs(amount)}` : '▲';
  if (item.trend === 'DOWN') return amount ? `▼ ${Math.abs(amount)}` : '▼';
  return '—';
}

function renderTitles(titles) {
  els.chart.innerHTML = '';
  if (!Array.isArray(titles) || !titles.length) throw new Error('No titles were returned for this chart.');
  titles.slice(0,10).forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'chart-item';

    const rank = document.createElement('div');
    rank.className = 'rank';
    rank.textContent = String(item.rank || index + 1).padStart(2,'0');

    let visual;
    if (item.poster) {
      const img = document.createElement('img');
      img.className = 'poster';
      img.alt = '';
      img.loading = 'lazy';
      img.src = posterUrl(item.poster);
      img.addEventListener('error', () => {
        const ph = document.createElement('div');
        ph.className = 'poster poster-placeholder';
        ph.textContent = state.type === 'MOVIE' ? '🎬' : '📺';
        img.replaceWith(ph);
      }, { once:true });
      visual = img;
    } else {
      visual = document.createElement('div');
      visual.className = 'poster poster-placeholder';
      visual.textContent = state.type === 'MOVIE' ? '🎬' : '📺';
    }

    const info = document.createElement('div');
    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = item.title || 'Untitled';
    const meta = document.createElement('p');
    meta.className = 'meta';
    const bits = [item.year, state.type === 'MOVIE' ? 'Movie' : 'TV series'];
    const trend = trendText(item);
    if (trend) bits.push(trend);
    if (item.daysInTop10) bits.push(`${item.daysInTop10}d top 10`);
    meta.textContent = bits.filter(Boolean).join(' · ');
    info.append(title, meta);

    const watch = document.createElement('a');
    watch.className = 'watch';
    watch.textContent = 'Details ↗';
    watch.target = '_blank';
    watch.rel = 'noopener';
    watch.href = item.url || justWatchUrl(state.service, state.type);

    li.append(rank, visual, info, watch);
    els.chart.appendChild(li);
  });
}

function formatUpdated(value) {
  if (!value) return 'Waiting for first automatic refresh';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return 'Ranking cache loaded';
  return `Updated ${new Intl.DateTimeFormat('en-GB', {
    weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'
  }).format(d)}`;
}

function setLoading(on) {
  els.loading.classList.toggle('hidden', !on);
  if (on) {
    els.chart.innerHTML = '';
    els.error.classList.add('hidden');
  }
}

function renderCurrent() {
  const s = state.service;
  const label = state.type === 'MOVIE' ? 'Movies' : 'TV Shows';
  const url = justWatchUrl(s, state.type);
  els.chartTitle.textContent = `${s.name} · Top 10 ${label}`;
  els.sourceLink.href = url;
  els.fallback.href = url;
  els.error.classList.add('hidden');
  els.chart.innerHTML = '';

  try {
    const key = state.type === 'MOVIE' ? 'movies' : 'tv';
    const serviceData = state.data?.services?.[s.id];
    const titles = serviceData?.[key];
    if (serviceData?.error && (!titles || !titles.length)) throw new Error(serviceData.error);
    renderTitles(titles);
    els.updated.textContent = formatUpdated(state.data?.generatedAt);
  } catch (err) {
    els.errorText.textContent = `${err.message || 'This ranking is not available yet'} You can still open the UK provider page directly.`;
    els.error.classList.remove('hidden');
  }
}

async function loadData(force = false) {
  setLoading(true);
  els.refresh.disabled = true;
  try {
    state.data = await fetchRankings(force);
    renderCurrent();
  } catch (err) {
    console.error(err);
    els.errorText.textContent = `${err.message || 'The ranking cache could not be loaded.'} The automatic GitHub refresh may not have run yet.`;
    els.error.classList.remove('hidden');
    els.updated.textContent = 'Ranking feed unavailable';
  } finally {
    setLoading(false);
    els.refresh.disabled = false;
  }
}

document.querySelectorAll('.segmented button').forEach(btn => {
  btn.addEventListener('click', () => {
    state.type = btn.dataset.type;
    document.querySelectorAll('.segmented button').forEach(b => b.classList.toggle('active', b === btn));
    renderCurrent();
  });
});

els.refresh.addEventListener('click', () => loadData(true));

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  state.installPrompt = e;
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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(console.warn));
}

initTabs();
loadData();
