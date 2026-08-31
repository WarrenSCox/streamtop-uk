import { mkdir, readFile, writeFile } from 'node:fs/promises';

const ENDPOINT = 'https://apis.justwatch.com/graphql';
const NETFLIX_TSV = 'https://www.netflix.com/tudum/top10/data/all-weeks-countries.tsv';
const PRIME_MOVIES_URL = 'https://www.primevideo.com/movie/ref=atv_hom_Marqueetvuk_c_9zZ8D2_hom?tr=gb';
const APPLE_MOVIES_URL = 'https://tv.apple.com/gb/collection/most-popular-now/uts.col.ChartsMovies.tvs.sbd.4000';
const APPLE_TV_URL = 'https://tv.apple.com/gb/collection/most-popular-now/uts.col.ChartsShows.tvs.sbd.4000';
const SERVICES = [
  { id:'netflix', name:'Netflix', aliases:['Netflix'] },
  { id:'prime', name:'Prime Video', aliases:['Amazon Prime Video','Prime Video'] },
  { id:'disney', name:'Disney+', aliases:['Disney Plus','Disney+'] },
  { id:'apple', name:'Apple TV+', aliases:['Apple TV Plus','Apple TV+','Apple TV'] },
  { id:'max', name:'HBO Max', aliases:['HBO Max','Max'] },
  { id:'bbc', name:'BBC iPlayer', aliases:['BBC iPlayer'] },
  { id:'itv', name:'ITVX', aliases:['ITVX','ITV X'] },
];

const OFFICIAL = {
  netflix: {
    label:'Official Netflix',
    url:'https://www.netflix.com/tudum/top10/united-kingdom',
    cadence:'weekly',
    note:'Netflix Tudum UK weekly Top 10',
  },
  prime: {
    label:'Official Prime',
    url:PRIME_MOVIES_URL,
    cadence:'live',
    note:'Prime Video public UK Top 10 movies',
  },
  appleMovies: {
    label:'Official Apple',
    url:APPLE_MOVIES_URL,
    cadence:'live',
    note:'Apple TV public UK Most Popular Now movies',
  },
  appleTV: {
    label:'Official Apple',
    url:APPLE_TV_URL,
    cadence:'live',
    note:'Apple TV public UK Most Popular Now TV shows',
  },
  disney: {
    label:'Official Disney+',
    url:'https://www.disneyplus.com/en-gb/explore/what-to-watch',
    cadence:'daily',
    note:'Disney+ publishes a combined UK Top 10; WozzaWatch keeps separate Movies/TV tabs, so it uses a fallback for those tabs.',
  }
};

const PACKAGES_QUERY = `query Packages($country: Country!, $platform: Platform!) { packages(country: $country, platform: $platform) { id packageId clearName shortName technicalName } }`;
const CHART_QUERY = `query StreamTopChart($chartCountry: Country,$country: Country!,$language: Language!,$first: Int!,$filter: StreamingChartsFilter) { streamingCharts(country:$chartCountry,filter:$filter,first:$first) { edges { streamingChartInfo { rank trend trendDifference daysInTop10 topRank } node { id objectType ... on MovieOrShowOrSeason { content(country:$country,language:$language) { title fullPath posterUrl(profile:S166,format:WEBP) originalReleaseYear } } } } } }`;

const TITLE_LOOKUP_QUERY = `query WozzaWatchTitleLookup($country: Country!,$language: Language!,$first: Int!,$filter: TitleFilter) { popularTitles(country:$country,filter:$filter,first:$first,sortBy:POPULAR) { edges { node { id objectType ... on MovieOrShowOrSeason { content(country:$country,language:$language) { title fullPath posterUrl(profile:S166,format:WEBP) originalReleaseYear } } } } } }`;

const POPULAR_QUERY = `query StreamTopPopular($country: Country!,$language: Language!,$first: Int!,$filter: TitleFilter) { popularTitles(country:$country,filter:$filter,first:$first,sortBy:POPULAR) { edges { node { id objectType ... on MovieOrShowOrSeason { content(country:$country,language:$language) { title fullPath posterUrl(profile:S166,format:WEBP) originalReleaseYear } } } } } }`;

async function fetchText(url, extraHeaders = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(url, { headers:{'user-agent':'WozzaWatch/4.2 (+GitHub Actions)',...extraHeaders}, signal:controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally { clearTimeout(timeout); }
}

async function gql(query, variables) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(ENDPOINT, { method:'POST', headers:{'content-type':'application/json','accept':'application/json','user-agent':'WozzaWatch/4.2 (+GitHub Actions)'}, body:JSON.stringify({query,variables}), signal:controller.signal });
    if (!res.ok) throw new Error(`JustWatch HTTP ${res.status}`);
    const body = await res.json();
    if (body.errors?.length) throw new Error(body.errors.map(e=>e.message).join('; '));
    return body.data;
  } finally { clearTimeout(timeout); }
}

const norm = (v='') => String(v).toLowerCase().replace(/[^a-z0-9]+/g,'');
function findPackage(packages, service) {
  const aliases=service.aliases.map(norm);
  return packages.find(p=>aliases.includes(norm(p.clearName))) || packages.find(p=>aliases.some(a=>norm(p.clearName).includes(a)||a.includes(norm(p.clearName))));
}
function packageCandidates(pkg) { return [...new Set([pkg?.shortName,pkg?.id,pkg?.technicalName,pkg?.packageId!=null?String(pkg.packageId):null].filter(Boolean))]; }

function mapChartEdges(edges=[]) {
  return edges.slice(0,10).map((edge,index)=>{ const info=edge.streamingChartInfo||{}, c=edge.node?.content||{}; return {
    rank:index+1, sourceRank:info.rank||null, title:c.title||'Untitled', year:c.originalReleaseYear||null, poster:c.posterUrl||null,
    url:c.fullPath?`https://www.justwatch.com${c.fullPath}`:null, trend:info.trend||null, trendDifference:info.trendDifference||0,
    daysInTop10:info.daysInTop10||null, topRank:info.topRank||null
  };});
}
function mapPopularEdges(edges=[]) { return edges.slice(0,10).map((edge,index)=>{ const c=edge.node?.content||{}; return {rank:index+1,title:c.title||'Untitled',year:c.originalReleaseYear||null,poster:c.posterUrl||null,url:c.fullPath?`https://www.justwatch.com${c.fullPath}`:null,trend:null,trendDifference:0,daysInTop10:null,topRank:null};}); }

async function fetchJustWatch(pkg, objectType) {
  let lastError;
  for (const packageCode of packageCandidates(pkg)) {
    try {
      const data=await gql(CHART_QUERY,{chartCountry:'GB',country:'GB',language:'en',first:10,filter:{category:'DAILY_POPULARITY_SAME_CONTENT_TYPE',objectType,packages:[packageCode]}});
      const items=mapChartEdges(data?.streamingCharts?.edges||[]);
      if(items.length) return {items,mode:'justwatch-daily',packageCode};
    } catch(err){lastError=err;}
  }
  for (const packageCode of packageCandidates(pkg)) {
    try {
      const data=await gql(POPULAR_QUERY,{country:'GB',language:'en',first:10,filter:{objectTypes:[objectType],packages:[packageCode],monetizationTypes:['FLATRATE','ADS','FREE']}});
      const items=mapPopularEdges(data?.popularTitles?.edges||[]);
      if(items.length) return {items,mode:'justwatch-popular',packageCode};
    } catch(err){lastError=err;}
  }
  throw lastError||new Error('No ranking returned');
}

function parseTsv(text) {
  const lines=text.trim().split(/\r?\n/); const headers=lines.shift().split('\t');
  return lines.map(line=>{ const vals=line.split('\t'), row={}; headers.forEach((h,i)=>row[h]=vals[i]??''); return row; });
}
function cleanNetflixCell(value='') {
  const v=String(value??'').trim();
  return !v || /^(?:N\/?A|NULL)$/i.test(v) ? '' : v;
}

function decodeHtml(value='') {
  return String(value)
    .replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
    .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#x27;/gi,"'")
    .replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(Number(n)));
}
function stripTags(value='') { return decodeHtml(String(value).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()); }
function titleFromSlug(slug='') {
  return decodeURIComponent(slug).split('-').filter(Boolean).map(word=>word.length<=3&&/^[a-z]+$/.test(word)?word:word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
function validPublicTitle(value='') {
  const v=stripTags(value).trim();
  if(!v || v.length<2 || v.length>120) return false;
  return !/^(?:image|play|watch|details|top ?10|new movie|trending|most popular now|prime video|apple tv|see more)$/i.test(v);
}
function uniqueItems(items=[]) {
  const seen=new Set();
  return items.filter(item=>{const key=norm(item.title); if(!key||seen.has(key))return false; seen.add(key); return true;});
}
async function fetchOfficialApple(url, objectType) {
  const html=await fetchText(url);
  const pathType=objectType==='MOVIE'?'movie':'show';
  const marker=html.search(/Most Popular Now/i);
  const section=marker>=0?html.slice(marker, marker+500000):html;
  const items=[];
  const re=new RegExp(`<a\\b([^>]*?)href=["']([^"']*\\/gb\\/${pathType}\\/([^"'/?#]+)\\/[^"']+)["']([^>]*)>([\\s\\S]*?)<\\/a>`, 'gi');
  let match;
  while((match=re.exec(section))&&items.length<20){
    const attrs=`${match[1]} ${match[4]}`;
    const inner=match[5];
    const aria=(attrs.match(/aria-label=["']([^"']+)["']/i)||[])[1];
    const alt=(inner.match(/alt=["']([^"']+)["']/i)||[])[1];
    const innerText=stripTags(inner);
    const title=[aria,alt,innerText,titleFromSlug(match[3])].find(validPublicTitle);
    if(!title)continue;
    items.push({rank:items.length+1,title:stripTags(title),year:null,poster:null,url:match[2].startsWith('http')?match[2]:`https://tv.apple.com${match[2]}`,trend:null,trendDifference:0,daysInTop10:null,topRank:null});
  }
  const deduped=uniqueItems(items).slice(0,10).map((x,i)=>({...x,rank:i+1}));
  if(deduped.length<10) throw new Error(`Apple public chart parser returned only ${deduped.length} titles`);
  return deduped;
}
function primeSection(html) {
  // Prime's public page is rendered in several different shapes (SSR HTML,
  // hydration JSON and escaped HTML). Anchor the parser to the UK Top 10
  // heading, then only inspect the following chunk.
  const decoded = String(html)
    .replace(/\\u003c/gi,'<').replace(/\\u003e/gi,'>')
    .replace(/\\u0026/gi,'&').replace(/\\u0027/gi,"'")
    .replace(/\\u0022/gi,'"').replace(/\\\//g,'/');
  const markers=['Top 10 movies in the UK','Top 10 Movies in the UK'];
  let idx=-1;
  for(const marker of markers){idx=decoded.toLowerCase().indexOf(marker.toLowerCase()); if(idx>=0)break;}
  if(idx<0) throw new Error('Prime UK Top 10 heading was not found');
  return decoded.slice(idx,idx+650000);
}
function cleanPrimeTitle(value='') {
  return stripTags(String(value)
    .replace(/\\u0026/gi,'&').replace(/\\u0027/gi,"'")
    .replace(/\\u0022/gi,'"').replace(/\\"/g,'"').replace(/\\'/g,"'"));
}
function isPrimeNoise(value='') {
  const v=cleanPrimeTitle(value).trim();
  if(!validPublicTitle(v)) return true;
  return /^(?:new movie|deal|most liked|recently added|top 10|trending|prime|included with prime|watch now|watch with a free prime trial|more details|rent|buy|play|continue watching|movies|top 10 movies in the uk)$/i.test(v);
}
function extractPrimeCandidateTitles(section) {
  const candidates=[];
  const add=(title,url=PRIME_MOVIES_URL)=>{
    const clean=cleanPrimeTitle(title);
    if(!isPrimeNoise(clean)) candidates.push({title:clean,url});
  };

  // 1) Visible card links: most stable when Prime server-renders the carousel.
  const anchorRe=/<a\b([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while((m=anchorRe.exec(section))&&candidates.length<80){
    const href=m[2];
    if(!/(?:\/detail\/|\/gp\/video\/detail\/|\/region\/[^/]+\/detail\/)/i.test(href)) continue;
    const attrs=`${m[1]} ${m[3]}`;
    const inner=m[4];
    const aria=(attrs.match(/aria-label=["']([^"']+)["']/i)||[])[1];
    const alt=(inner.match(/<img\b[^>]*alt=["']([^"']+)["']/i)||[])[1];
    const headings=[...inner.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(x=>x[1]);
    const url=href.startsWith('http')?href:`https://www.primevideo.com${href}`;
    [aria,...headings,alt].filter(Boolean).forEach(v=>add(v,url));
  }

  // 2) Heading text used by Prime cards even where the outer anchor is hydrated client-side.
  const headingRe=/<h[2-6]\b[^>]*>([\s\S]*?)<\/h[2-6]>/gi;
  while((m=headingRe.exec(section))&&candidates.length<120) add(m[1]);

  // 3) Image alt/aria labels.
  const labelRes=[/\balt=["']([^"']+)["']/gi,/\baria-label=["']([^"']+)["']/gi];
  for(const re of labelRes){while((m=re.exec(section))&&candidates.length<180)add(m[1]);}

  // 4) Prime regularly moves card data into hydration JSON. Accept several title keys.
  const jsonKeys=['title','displayTitle','heading','headline','ariaLabel','altText'];
  for(const key of jsonKeys){
    const re=new RegExp(`(?:\\\\?"${key}\\\\?"|"${key}")\\s*:\\s*(?:\\\\?"|\")((?:\\\\.|[^"\\\\]){2,160})(?:\\\\?"|\")`,'gi');
    while((m=re.exec(section))&&candidates.length<260)add(m[1]);
  }

  return uniqueItems(candidates);
}
async function fetchOfficialPrimeMovies() {
  const html=await fetchText(PRIME_MOVIES_URL,{
    'user-agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'accept-language':'en-GB,en;q=0.9'
  });
  const section=primeSection(html);
  const candidates=extractPrimeCandidateTitles(section);
  const items=candidates.slice(0,10).map((item,i)=>({rank:i+1,title:item.title,year:null,poster:null,url:item.url||PRIME_MOVIES_URL,trend:null,trendDifference:0,daysInTop10:null,topRank:null}));
  if(items.length<10) {
    console.warn('Prime candidates found:', candidates.slice(0,20).map(x=>x.title).join(' | '));
    throw new Error(`Prime public chart parser returned only ${items.length} titles`);
  }
  return items;
}
async function fetchOfficialNetflix() {
  const rows=parseTsv(await fetchText(NETFLIX_TSV)).filter(r=>r.country_iso2==='GB');
  if(!rows.length) throw new Error('No UK rows in Netflix dataset');
  const latest=rows.reduce((m,r)=>r.week>m?r.week:m,'');
  const byCategory=cat=>rows
    .filter(r=>r.week===latest&&r.category===cat)
    .sort((a,b)=>Number(a.weekly_rank)-Number(b.weekly_rank))
    .slice(0,10)
    .map((r,i)=>{
      const showTitle=cleanNetflixCell(r.show_title);
      const seasonTitle=cleanNetflixCell(r.season_title);
      return {
        rank:i+1, sourceRank:Number(r.weekly_rank)||i+1,
        title:showTitle||'Untitled', showTitle:showTitle||null, seasonTitle:seasonTitle||null, year:null, poster:null,
        url:cat==='Films'?'https://www.netflix.com/tudum/top10/united-kingdom/films.html':'https://www.netflix.com/tudum/top10/united-kingdom/tv.html',
        trend:null, trendDifference:0, daysInTop10:Number(r.cumulative_weeks_in_top_10)||null, topRank:null
      };
    });
  return { week:latest, movies:byCategory('Films'), tv:byCategory('TV') };
}
async function lookupTitleMetadata(title, objectType) {
  if (!title || title === 'Untitled') return null;
  try {
    const data = await gql(TITLE_LOOKUP_QUERY, {
      country:'GB', language:'en', first:5,
      filter:{searchQuery:title, objectTypes:[objectType]}
    });
    const edges=data?.popularTitles?.edges||[];
    const exact=edges.find(e=>norm(e.node?.content?.title)===norm(title)) || edges[0];
    const c=exact?.node?.content;
    if(!c) return null;
    return {
      poster:c.posterUrl||null,
      year:c.originalReleaseYear||null,
      justWatchUrl:c.fullPath?`https://www.justwatch.com${c.fullPath}`:null
    };
  } catch(err) {
    console.warn(`Metadata lookup failed for ${title}: ${err.message}`);
    return null;
  }
}

async function enrichOfficial(official, fallback=[], objectType) {
  const lookup=new Map();
  for (const item of fallback) lookup.set(norm(item.title), item);
  const enriched=[];
  for (let i=0;i<official.length;i++) {
    const x=official[i];
    const candidates=[x.showTitle,x.title].filter(Boolean).map(norm);
    const hit=candidates.map(k=>lookup.get(k)).find(Boolean);
    let meta=hit ? {poster:hit.poster,year:hit.year,justWatchUrl:hit.url} : null;
    if(!meta?.poster) meta=await lookupTitleMetadata(x.title, objectType);
    enriched.push({
      ...x,
      rank:i+1,
      poster:meta?.poster||x.poster||null,
      year:meta?.year||x.year||null,
      detailsUrl:meta?.justWatchUrl||null
    });
  }
  return enriched;
}

let previous={}; try{previous=JSON.parse(await readFile('data/rankings.json','utf8'));}catch{}
const output={version:5,generatedAt:new Date().toISOString(),country:'GB',strategy:'Official source first; labelled fallback when no compatible official chart is available.',services:{}};
const packageData=await gql(PACKAGES_QUERY,{country:'GB',platform:'WEB'}); const packages=packageData?.packages||[];
let netflixOfficial=null; try{netflixOfficial=await fetchOfficialNetflix(); console.log(`Netflix official week ${netflixOfficial.week}`);}catch(err){console.error('Netflix official:',err.message);}
let primeMoviesOfficial=null; try{primeMoviesOfficial=await fetchOfficialPrimeMovies(); console.log(`Prime official movies: ${primeMoviesOfficial.length}`);}catch(err){console.error('Prime official movies:',err.message);}
let appleMoviesOfficial=null; try{appleMoviesOfficial=await fetchOfficialApple(APPLE_MOVIES_URL,'MOVIE'); console.log(`Apple official movies: ${appleMoviesOfficial.length}`);}catch(err){console.error('Apple official movies:',err.message);}
let appleTVOfficial=null; try{appleTVOfficial=await fetchOfficialApple(APPLE_TV_URL,'SHOW'); console.log(`Apple official TV: ${appleTVOfficial.length}`);}catch(err){console.error('Apple official TV:',err.message);}

for(const service of SERVICES){
  const pkg=findPackage(packages,service); const entry={provider:pkg?.clearName||service.name,movies:[],tv:[],sources:{},error:null};
  for(const [key,type] of [['movies','MOVIE'],['tv','SHOW']]){
    let fallback=null;
    if(pkg){ try{fallback=await fetchJustWatch(pkg,type);}catch(err){console.error(`${service.name} fallback ${key}:`,err.message);} }
    if(service.id==='netflix' && netflixOfficial?.[key]?.length){
      entry[key]=await enrichOfficial(netflixOfficial[key],fallback?.items||[],type);
      entry.sources[key]={kind:'official',label:OFFICIAL.netflix.label,url:OFFICIAL.netflix.url,cadence:'weekly',asOf:netflixOfficial.week,note:OFFICIAL.netflix.note};
    } else if(service.id==='prime' && key==='movies' && primeMoviesOfficial?.length){
      entry[key]=await enrichOfficial(primeMoviesOfficial,fallback?.items||[],type);
      entry.sources[key]={kind:'official',label:OFFICIAL.prime.label,url:OFFICIAL.prime.url,cadence:OFFICIAL.prime.cadence,note:OFFICIAL.prime.note};
    } else if(service.id==='apple' && key==='movies' && appleMoviesOfficial?.length){
      entry[key]=await enrichOfficial(appleMoviesOfficial,fallback?.items||[],type);
      entry.sources[key]={kind:'official',label:OFFICIAL.appleMovies.label,url:OFFICIAL.appleMovies.url,cadence:OFFICIAL.appleMovies.cadence,note:OFFICIAL.appleMovies.note};
    } else if(service.id==='apple' && key==='tv' && appleTVOfficial?.length){
      entry[key]=await enrichOfficial(appleTVOfficial,fallback?.items||[],type);
      entry.sources[key]={kind:'official',label:OFFICIAL.appleTV.label,url:OFFICIAL.appleTV.url,cadence:OFFICIAL.appleTV.cadence,note:OFFICIAL.appleTV.note};
    } else if(fallback?.items?.length){
      entry[key]=fallback.items.map((x,i)=>({...x,rank:i+1}));
      entry.sources[key]={kind:'fallback',label:'JustWatch UK',url:`https://www.justwatch.com/uk/provider/${service.id==='prime'?'amazon-prime-video':service.id==='disney'?'disney-plus':service.id==='apple'?'apple-tv-plus':service.id==='max'?'hbo-max':service.id==='bbc'?'bbc-iplayer':service.id==='itv'?'itvx':'netflix'}/${key==='movies'?'movies':'tv-series'}`,cadence:'daily',note:service.id==='disney'?OFFICIAL.disney.note:'No compatible public official Movies/TV chart is currently used, so WozzaWatch falls back to JustWatch UK popularity.'};
    } else {
      const old=previous?.services?.[service.id]?.[key];
      if(Array.isArray(old)&&old.length){ entry[key]=old.map((x,i)=>({...x,rank:i+1})); entry.sources[key]=previous.services[service.id]?.sources?.[key]||{kind:'stale',label:'Previous cached result',url:null,note:'Fresh data was unavailable.'}; entry.stale=true; }
      else entry.error=[entry.error,`${key}: no ranking available`].filter(Boolean).join(' | ');
    }
  }
  output.services[service.id]=entry;
}
await mkdir('data',{recursive:true}); await writeFile('data/rankings.json',JSON.stringify(output,null,2)+'\n'); console.log(`Saved rankings at ${output.generatedAt}`);
