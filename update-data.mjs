import { mkdir, readFile, writeFile } from 'node:fs/promises';

const ENDPOINT = 'https://apis.justwatch.com/graphql';
const SERVICES = [
  { id:'netflix', name:'Netflix', aliases:['Netflix'] },
  { id:'prime', name:'Prime Video', aliases:['Amazon Prime Video','Prime Video'] },
  { id:'disney', name:'Disney+', aliases:['Disney Plus','Disney+'] },
  { id:'apple', name:'Apple TV+', aliases:['Apple TV Plus','Apple TV+','Apple TV'] },
  { id:'max', name:'HBO Max', aliases:['HBO Max','Max'] },
  { id:'bbc', name:'BBC iPlayer', aliases:['BBC iPlayer'] },
  { id:'itv', name:'ITVX', aliases:['ITVX','ITV X'] },
];

const PACKAGES_QUERY = `query Packages($country: Country!, $platform: Platform!) {
  packages(country: $country, platform: $platform) {
    id packageId clearName shortName technicalName
  }
}`;

const CHART_QUERY = `query StreamTopChart(
  $chartCountry: Country,
  $country: Country!,
  $language: Language!,
  $first: Int!,
  $filter: StreamingChartsFilter
) {
  streamingCharts(country: $chartCountry, filter: $filter, first: $first) {
    edges {
      streamingChartInfo { rank trend trendDifference daysInTop10 topRank }
      node {
        id
        objectType
        ... on MovieOrShowOrSeason {
          content(country: $country, language: $language) {
            title
            fullPath
            posterUrl(profile: S166, format: WEBP)
            originalReleaseYear
          }
        }
      }
    }
  }
}`;

const POPULAR_QUERY = `query StreamTopPopular(
  $country: Country!,
  $language: Language!,
  $first: Int!,
  $filter: TitleFilter
) {
  popularTitles(country: $country, filter: $filter, first: $first, sortBy: POPULAR) {
    edges {
      node {
        id
        objectType
        ... on MovieOrShowOrSeason {
          content(country: $country, language: $language) {
            title
            fullPath
            posterUrl(profile: S166, format: WEBP)
            originalReleaseYear
          }
        }
      }
    }
  }
}`;

async function gql(query, variables) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(ENDPOINT, {
      method:'POST',
      headers:{
        'content-type':'application/json',
        'accept':'application/json',
        'user-agent':'StreamTopUK/2.0 (+GitHub Actions)'
      },
      body:JSON.stringify({ query, variables }),
      signal:controller.signal,
    });
    if (!res.ok) throw new Error(`JustWatch HTTP ${res.status}`);
    const body = await res.json();
    if (body.errors?.length) throw new Error(body.errors.map(e => e.message).join('; '));
    return body.data;
  } finally {
    clearTimeout(timeout);
  }
}

function norm(value='') {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g,'');
}

function findPackage(packages, service) {
  const aliases = service.aliases.map(norm);
  return packages.find(p => aliases.includes(norm(p.clearName))) ||
    packages.find(p => aliases.some(a => norm(p.clearName).includes(a) || a.includes(norm(p.clearName))));
}

function packageCandidates(pkg) {
  return [...new Set([pkg?.shortName, pkg?.id, pkg?.technicalName, pkg?.packageId != null ? String(pkg.packageId) : null].filter(Boolean))];
}

function mapChartEdges(edges=[]) {
  return edges.slice(0,10).map((edge, index) => {
    const info = edge.streamingChartInfo || {};
    const node = edge.node || {};
    const c = node.content || {};
    return {
      rank: info.rank || index + 1,
      title: c.title || 'Untitled',
      year: c.originalReleaseYear || null,
      poster: c.posterUrl || null,
      url: c.fullPath ? `https://www.justwatch.com${c.fullPath}` : null,
      trend: info.trend || null,
      trendDifference: info.trendDifference || 0,
      daysInTop10: info.daysInTop10 || null,
      topRank: info.topRank || null,
    };
  });
}

function mapPopularEdges(edges=[]) {
  return edges.slice(0,10).map((edge, index) => {
    const node = edge.node || {};
    const c = node.content || {};
    return {
      rank:index + 1,
      title:c.title || 'Untitled',
      year:c.originalReleaseYear || null,
      poster:c.posterUrl || null,
      url:c.fullPath ? `https://www.justwatch.com${c.fullPath}` : null,
      trend:null,
      trendDifference:0,
      daysInTop10:null,
      topRank:null,
    };
  });
}

async function fetchOne(pkg, objectType) {
  let lastError;
  for (const packageCode of packageCandidates(pkg)) {
    try {
      const data = await gql(CHART_QUERY, {
        chartCountry:'GB', country:'GB', language:'en', first:10,
        filter:{
          category:'DAILY_POPULARITY_SAME_CONTENT_TYPE',
          objectType,
          packages:[packageCode]
        }
      });
      const items = mapChartEdges(data?.streamingCharts?.edges || []);
      if (items.length) return { items, mode:'daily-chart', packageCode };
    } catch (err) {
      lastError = err;
    }
  }

  // Compatibility fallback if JustWatch changes the streamingCharts endpoint.
  for (const packageCode of packageCandidates(pkg)) {
    try {
      const data = await gql(POPULAR_QUERY, {
        country:'GB', language:'en', first:10,
        filter:{
          objectTypes:[objectType],
          packages:[packageCode],
          monetizationTypes:['FLATRATE','ADS','FREE']
        }
      });
      const items = mapPopularEdges(data?.popularTitles?.edges || []);
      if (items.length) return { items, mode:'popular-fallback', packageCode };
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error('No ranking returned');
}

let previous = {};
try {
  previous = JSON.parse(await readFile('data/rankings.json','utf8'));
} catch {}

const output = {
  version:2,
  generatedAt:new Date().toISOString(),
  country:'GB',
  source:'JustWatch public GraphQL data',
  services:{}
};

const packageData = await gql(PACKAGES_QUERY, { country:'GB', platform:'WEB' });
const packages = packageData?.packages || [];

for (const service of SERVICES) {
  const pkg = findPackage(packages, service);
  const entry = { provider: pkg?.clearName || service.name, movies:[], tv:[], modes:{}, error:null };
  if (!pkg) {
    entry.error = `Could not match ${service.name} in the UK provider list.`;
    const old = previous?.services?.[service.id];
    if (old) Object.assign(entry, { movies:old.movies || [], tv:old.tv || [], modes:old.modes || {}, stale:true });
    output.services[service.id] = entry;
    continue;
  }

  for (const [key, type] of [['movies','MOVIE'],['tv','SHOW']]) {
    try {
      const result = await fetchOne(pkg, type);
      entry[key] = result.items;
      entry.modes[key] = result.mode;
      console.log(`${service.name} ${key}: ${result.items.length} (${result.mode}, ${result.packageCode})`);
    } catch (err) {
      console.error(`${service.name} ${key}:`, err.message);
      const old = previous?.services?.[service.id]?.[key];
      if (Array.isArray(old) && old.length) {
        entry[key] = old;
        entry.stale = true;
      }
      entry.error = [entry.error, `${key}: ${err.message}`].filter(Boolean).join(' | ');
    }
  }
  output.services[service.id] = entry;
}

await mkdir('data', { recursive:true });
await writeFile('data/rankings.json', JSON.stringify(output, null, 2) + '\n');
console.log(`Saved rankings at ${output.generatedAt}`);
