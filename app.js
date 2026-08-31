const SERVICES = [
  {id:'netflix', name:'Netflix', slug:'netflix', tone:'brick'},
  {id:'prime', name:'Prime', slug:'amazon-prime-video', tone:'blue'},
  {id:'disney', name:'Disney', slug:'disney-plus', tone:'green'},
  {id:'apple', name:'Apple', slug:'apple-tv-plus', tone:'yellow'},
  {id:'max', name:'HBO', slug:'hbo-max', tone:'navy'},
  {id:'bbc', name:'BBC', slug:'bbc-iplayer', tone:'blue'},
  {id:'itv', name:'ITV', slug:'itvx', tone:'green'}
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

async function fetchRankings() {
  let lastError;
  for (const base of dataUrls()) {
    try {
      const res = await fetch(`${base}?v=${Math.floor(Date.now()/300000)}`, {cache:'no-store'});
      if (!res.ok) throw new Error(`Ranking feed returned ${res.status}`);
      const body = await res.json();
      if (!body?.services) throw new Error('Ranking feed is not ready yet');
      return body;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('Ranking feed could not be loaded');
}

function initTabs() {
  SERVICES.forEach(service => {
    const button = document.createElement('button');
    button.className = `service-tab ${service.tone}`;
    button.type = 'button';
    button.textContent = service.name;
    button.dataset.service = service.id;
    button.addEventListener('click', () => {
      state.service = service;
      document.querySelectorAll('.service-tab').forEach(x => x.classList.toggle('active', x === button));
      renderCurrent();
    });
    els.tabs.appendChild(button);
  });
  els.tabs.firstElementChild?.classList.add('active');
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

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = item.title || 'Untitled';

    const details = document.createElement('a');
    details.className = 'watch';
    details.textContent = 'Details';
    details.target = '_blank';
    details.rel = 'noopener';
    details.href = item.detailsUrl || item.url || justWatchUrl(state.service, state.type);

    info.append(title, details);
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
  els.sourceBadge.textContent = source?.label || 'Source unavailable';
  els.sourceBadge.href = source?.url || fallbackUrl;
  els.sourceBadge.setAttribute('aria-label', `Open source: ${source?.label || 'source'}`);
  els.sourceBadge.className = `source-badge ${source?.kind === 'official' ? 'official' : 'fallback'}`;
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
    document.querySelectorAll('.segmented button').forEach(x => x.classList.toggle('active', x === button));
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
loadData();
