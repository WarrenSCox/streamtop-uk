const JW_ENDPOINT = 'https://apis.justwatch.com/graphql';

const SERVICES = [
  { id:'netflix', name:'Netflix', aliases:['Netflix'], slug:'netflix' },
  { id:'prime', name:'Prime Video', aliases:['Amazon Prime Video','Prime Video'], slug:'amazon-prime-video' },
  { id:'disney', name:'Disney+', aliases:['Disney Plus','Disney+'], slug:'disney-plus' },
  { id:'apple', name:'Apple TV+', aliases:['Apple TV','Apple TV Plus','Apple TV+'], slug:'apple-tv-plus' },
  { id:'max', name:'HBO Max', aliases:['HBO Max','Max'], slug:'hbo-max' },
  { id:'bbc', name:'BBC iPlayer', aliases:['BBC iPlayer'], slug:'bbc-iplayer' },
  { id:'itv', name:'ITVX', aliases:['ITVX','ITV X'], slug:'itvx' },
];

const state = {
  service: SERVICES[0],
  type: 'MOVIE',
  packages: null,
  packageMap: new Map(),
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
      loadChart();
    });
    els.tabs.appendChild(btn);
  });
  els.tabs.firstElementChild?.classList.add('active');
}

function justWatchUrl(service, type) {
  return `https://www.justwatch.com/uk/provider/${service.slug}/${type === 'MOVIE' ? 'movies' : 'tv-series'}`;
}

async function gql(query, variables) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(JW_ENDPOINT, {
      method:'POST',
      headers:{ 'content-type':'application/json' },
      body:JSON.stringify({ query, variables }),
      signal:controller.signal,
    });
    if (!res.ok) throw new Error(`Data source returned ${res.status}`);
    const body = await res.json();
    if (body.errors?.length) throw new Error(body.errors[0].message || 'Data source error');
    return body.data;
  } finally {
    clearTimeout(timer);
  }
}

async function discoverPackages() {
  if (state.packages) return state.packages;
  const query = `query ProviderPackages($country: Country!, $platform: Platform!) {
    packages(country: $country, platform: $platform) {
      id packageId clearName shortName
    }
  }`;
  const data = await gql(query, { country:'GB', platform:'WEB' });
  state.packages = data.packages || [];
  for (const service of SERVICES) {
    const packageMatch = state.packages.find(p => service.aliases.some(a =>
      String(p.clearName || '').toLowerCase() === a.toLowerCase()
    ));
    if (packageMatch) {
      // JustWatch's current popularTitles package filter accepts package strings;
      // prefer shortName and retain id as a fallback candidate.
      state.packageMap.set(service.id, packageMatch.shortName || packageMatch.id || String(packageMatch.packageId));
    }
  }
  return state.packages;
}

async function fetchPopularTitles(service, type) {
  await discoverPackages();
  const packageCode = state.packageMap.get(service.id);
  if (!packageCode) throw new Error(`Could not identify ${service.name} in the UK provider list.`);

  const query = `query TopTitles($country: Country!, $language: Language!, $first: Int!, $filter: TitleFilter) {
    popularTitles(country: $country, first: $first, sortBy: POPULAR, filter: $filter) {
      edges {
        node {
          id
          objectType
          ... on Movie {
            content(country:$country, language:$language) { title originalReleaseYear posterUrl fullPath }
          }
          ... on Show {
            content(country:$country, language:$language) { title originalReleaseYear posterUrl fullPath }
          }
        }
      }
    }
  }`;

  const variables = {
    country:'GB', language:'en', first:10,
    filter:{ objectTypes:[type], packages:[packageCode], monetizationTypes:['FLATRATE','ADS','FREE'] }
  };

  let data;
  try {
    data = await gql(query, variables);
  } catch (err) {
    // Some provider package identifiers can vary by schema version. If the discovered shortName
    // isn't accepted, try the provider id as a compatibility fallback.
    const pkg = state.packages.find(p => service.aliases.some(a => String(p.clearName||'').toLowerCase() === a.toLowerCase()));
    if (pkg?.id && pkg.id !== packageCode) {
      variables.filter.packages = [pkg.id];
      data = await gql(query, variables);
    } else throw err;
  }
  return (data.popularTitles?.edges || []).slice(0,10).map(e => e.node).filter(Boolean);
}

function posterUrl(raw) {
  if (!raw) return '';
  // JustWatch poster URLs commonly include a size placeholder such as {profile}.
  return raw
    .replace('{profile}', 's166')
    .replace('{format}', 'webp')
    .replace('https://images.justwatch.com', 'https://images.justwatch.com');
}

function renderTitles(titles) {
  els.chart.innerHTML = '';
  if (!titles.length) throw new Error('No titles were returned for this chart.');
  titles.forEach((node, index) => {
    const c = node.content || {};
    const li = document.createElement('li');
    li.className = 'chart-item';

    const rank = document.createElement('div');
    rank.className = 'rank';
    rank.textContent = String(index + 1).padStart(2,'0');

    const img = document.createElement('img');
    img.className = 'poster';
    img.alt = '';
    img.loading = 'lazy';
    const p = posterUrl(c.posterUrl);
    if (p) img.src = p;
    img.addEventListener('error', () => {
      const ph = document.createElement('div');
      ph.className = 'poster poster-placeholder';
      ph.textContent = state.type === 'MOVIE' ? '🎬' : '📺';
      img.replaceWith(ph);
    }, { once:true });

    const info = document.createElement('div');
    const title = document.createElement('p');
    title.className = 'title'; title.textContent = c.title || 'Untitled';
    const meta = document.createElement('p');
    meta.className = 'meta'; meta.textContent = [c.originalReleaseYear, state.type === 'MOVIE' ? 'Movie' : 'TV series'].filter(Boolean).join(' · ');
    info.append(title, meta);

    const watch = document.createElement('a');
    watch.className = 'watch';
    watch.textContent = 'Details ↗';
    watch.target = '_blank'; watch.rel = 'noopener';
    watch.href = c.fullPath ? `https://www.justwatch.com${c.fullPath}` : justWatchUrl(state.service, state.type);

    li.append(rank, img, info, watch);
    els.chart.appendChild(li);
  });
}

function setLoading(on) {
  els.loading.classList.toggle('hidden', !on);
  if (on) {
    els.chart.innerHTML = '';
    els.error.classList.add('hidden');
  }
}

async function loadChart() {
  const s = state.service;
  const label = state.type === 'MOVIE' ? 'Movies' : 'TV Shows';
  els.chartTitle.textContent = `${s.name} · Top 10 ${label}`;
  const url = justWatchUrl(s, state.type);
  els.sourceLink.href = url;
  els.fallback.href = url;
  setLoading(true);
  els.refresh.disabled = true;
  try {
    const titles = await fetchPopularTitles(s, state.type);
    renderTitles(titles);
    els.updated.textContent = `Updated ${new Intl.DateTimeFormat('en-GB', { hour:'2-digit', minute:'2-digit' }).format(new Date())}`;
  } catch (err) {
    console.error(err);
    els.errorText.textContent = `${err.message || 'The live feed could not be reached'} You can still open the equivalent UK popularity page directly.`;
    els.error.classList.remove('hidden');
    els.updated.textContent = 'Live feed unavailable';
  } finally {
    setLoading(false);
    els.refresh.disabled = false;
  }
}

document.querySelectorAll('.segmented button').forEach(btn => {
  btn.addEventListener('click', () => {
    state.type = btn.dataset.type;
    document.querySelectorAll('.segmented button').forEach(b => b.classList.toggle('active', b === btn));
    loadChart();
  });
});

els.refresh.addEventListener('click', () => {
  state.packages = null;
  state.packageMap.clear();
  loadChart();
});

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
loadChart();
