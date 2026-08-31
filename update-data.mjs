import { mkdir, readFile, writeFile } from 'node:fs/promises';

const ENDPOINT = 'https://apis.justwatch.com/graphql';
const NETFLIX_TSV = 'https://www.netflix.com/tudum/top10/data/all-weeks-countries.tsv';
const PRIME_MOVIES_URL = 'https://www.primevideo.com/movie/ref%3Datv_hom_Marqueetvuk_c_9zZ8D2_hom?tr=gb';
const APPLE_MOVIES_URL = 'https://tv.apple.com/gb/collection/most-popular-now/uts.col.ChartsMovies.tvs.sbd.4000';
const APPLE_TV_URL = 'https://tv.apple.com/gb/collection/most-popular-now/uts.col.ChartsShows.tvs.sbd.4000';
const UK_CINEMA_URL = 'https://www.cinemauk.org.uk/the-industry/facts-and-figures/latest-uk-cinema-statistics/weekend-top-10-box-office/';
const US_CINEMA_URL = 'https://www.imdb.com/chart/boxoffice/?ref_=ext_shr_lnk';
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
    const res = await fetch(url, { headers:{'user-agent':'WozzaWatch/4.6 (+GitHub Actions)',...extraHeaders}, signal:controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally { clearTimeout(timeout); }
}

async function gql(query, variables) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(ENDPOINT, { method:'POST', headers:{'content-type':'application/json','accept':'application/json','user-agent':'WozzaWatch/4.6 (+GitHub Actions)'}, body:JSON.stringify({query,variables}), signal:controller.signal });
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
      const chartItems=mapChartEdges(data?.streamingCharts?.edges||[]);

      // Some providers (notably ITVX) only expose a Top 5 through the
      // streamingCharts field. Keep those ranked items first, then backfill
      // the remaining places from JustWatch UK's provider popularity list.
      if(chartItems.length>=10) return {items:chartItems.slice(0,10),mode:'justwatch-daily',packageCode};

      let popularItems=[];
      try {
        const popular=await gql(POPULAR_QUERY,{country:'GB',language:'en',first:20,filter:{objectTypes:[objectType],packages:[packageCode],monetizationTypes:['FLATRATE','ADS','FREE']}});
        popularItems=mapPopularEdges(popular?.popularTitles?.edges||[]);
      } catch(err) {
        lastError=err;
      }

      const merged=[];
      const seen=new Set();
      for(const item of [...chartItems,...popularItems]){
        const key=norm(item.title);
        if(!key||seen.has(key)) continue;
        seen.add(key);
        merged.push({...item,rank:merged.length+1});
        if(merged.length===10) break;
      }
      if(merged.length) {
        console.log(`JustWatch ${pkg?.clearName||''} ${objectType}: ${chartItems.length} chart + ${Math.max(0,merged.length-chartItems.length)} popularity backfill = ${merged.length}`);
        return {items:merged,mode:chartItems.length?'justwatch-daily+popular':'justwatch-popular',packageCode};
      }
    } catch(err){lastError=err;}
  }

  // Final popularity-only pass in case streamingCharts itself errors.
  for (const packageCode of packageCandidates(pkg)) {
    try {
      const data=await gql(POPULAR_QUERY,{country:'GB',language:'en',first:20,filter:{objectTypes:[objectType],packages:[packageCode],monetizationTypes:['FLATRATE','ADS','FREE']}});
      const items=mapPopularEdges(data?.popularTitles?.edges||[]).slice(0,10).map((x,i)=>({...x,rank:i+1}));
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
function decodePrimePayload(value='') {
  return String(value)
    .replace(/\\u003c/gi,'<').replace(/\\u003e/gi,'>')
    .replace(/\\u0026/gi,'&').replace(/\\u0027/gi,"'")
    .replace(/\\u0022/gi,'"').replace(/\\\//g,'/');
}
function primeSection(payload) {
  const decoded=decodePrimePayload(payload);
  const marker=/Top\s*10\s*movies\s*in\s*the\s*UK/i.exec(decoded);
  if(!marker) throw new Error('Prime UK Top 10 heading was not found');
  return decoded.slice(marker.index,marker.index+700000);
}
function cleanPrimeTitle(value='') {
  return stripTags(decodePrimePayload(String(value)).replace(/\\"/g,'"').replace(/\\'/g,"'"));
}
function isPrimeNoise(value='') {
  const v=cleanPrimeTitle(value).trim();
  if(!validPublicTitle(v)) return true;
  return /^(?:image|new movie|deal|most liked|recently added|top 10|trending|prime|prime video|included with prime|watch now|watch with a free prime trial|more details|rent|buy|play|continue watching|movies|top 10 movies in the uk|featured originals and exclusives movies|see more)$/i.test(v);
}
function extractPrimeReadableTitles(section) {
  // Handles markdown/readability output as well as text stripped from HTML.
  const lines=decodePrimePayload(section).split(/\r?\n/).map(x=>cleanPrimeTitle(x.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, '').replace(/^#{1,6}\s*/,''))).filter(Boolean);
  const out=[];
  const seen=new Set();
  for(const line of lines){
    if(isPrimeNoise(line)) continue;
    if(/^(?:available to|suitable for|watch with|leaving soon|top-rated|documentaries|paranormal screams)/i.test(line)) continue;
    const key=norm(line);
    if(!key||seen.has(key)) continue;
    seen.add(key);
    out.push({title:line,url:PRIME_MOVIES_URL});
    if(out.length===10) break;
  }
  return out;
}
function extractPrimeCandidateTitles(section) {
  const candidates=[];
  const add=(title,url=PRIME_MOVIES_URL)=>{
    const clean=cleanPrimeTitle(title);
    if(!isPrimeNoise(clean)) candidates.push({title:clean,url});
  };

  // 1) Visible card links.
  const anchorRe=/<a\b([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while((m=anchorRe.exec(section))&&candidates.length<100){
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

  // 2) Heading text / labels.
  const headingRe=/<h[2-6]\b[^>]*>([\s\S]*?)<\/h[2-6]>/gi;
  while((m=headingRe.exec(section))&&candidates.length<160) add(m[1]);
  for(const re of [/\balt=["']([^"']+)["']/gi,/\baria-label=["']([^"']+)["']/gi]){
    while((m=re.exec(section))&&candidates.length<220)add(m[1]);
  }

  // 3) Hydration JSON.
  for(const key of ['title','displayTitle','heading','headline','ariaLabel','altText']){
    const re=new RegExp(`(?:\\\\?"${key}\\\\?"|"${key}")\\s*:\\s*(?:\\\\?"|")((?:\\\\.|[^"\\\\]){2,160})(?:\\\\?"|")`,'gi');
    while((m=re.exec(section))&&candidates.length<320)add(m[1]);
  }

  const htmlCandidates=uniqueItems(candidates);
  if(htmlCandidates.length>=10) return htmlCandidates;

  // 4) Last-resort readable-text extraction from the same official section.
  const readable=extractPrimeReadableTitles(section.replace(/<[^>]+>/g,'\n'));
  return uniqueItems([...htmlCandidates,...readable]);
}

const PRIME_DIRECT_URLS = [
  // Canonical public UK movies landing page (same page exposed to search engines).
  'https://www.primevideo.com/movie/ref%3Datv_hom_Marqueetvuk_c_9zZ8D2_hom?tr=gb',
  // Territory hint helps when the caller is a GitHub-hosted runner outside the UK.
  'https://www.primevideo.com/movie/ref%3Datv_hom_Marqueetvuk_c_9zZ8D2_hom?tr=gb&avCurrentTerritory=UK&language=en_GB',
  'https://www.primevideo.com/movie?avCurrentTerritory=UK&language=en_GB&tr=gb'
];
function primeItemsFromPayload(payload, transport='direct') {
  const section=primeSection(payload);
  const candidates=extractPrimeCandidateTitles(section);
  console.log(`Prime ${transport}: ${candidates.length} candidate titles; first: ${candidates.slice(0,12).map(x=>x.title).join(' | ')}`);
  const items=candidates.slice(0,10).map((item,i)=>({rank:i+1,title:item.title,year:null,poster:null,url:item.url||PRIME_MOVIES_URL,trend:null,trendDifference:0,daysInTop10:null,topRank:null}));
  if(items.length<10) throw new Error(`Prime ${transport} parser returned only ${items.length} titles`);
  return items;
}


function primeIndexedTitleLooksSafe(value='') {
  const v=cleanPrimeTitle(value).trim();
  if(!validPublicTitle(v) || isPrimeNoise(v)) return false;

  // Never allow HTML/source/search-engine plumbing to become a chart title.
  if(/[<>={}]/.test(v)) return false;
  if(/(?:<!\[CDATA|href\s*=|aria-label\s*=|role\s*=|maxlength\s*=|rel\s*=|class\s*=|data-[a-z-]+\s*=|new Date\s*\(|\.G\.[A-Z]|site:primevideo|primevideo\.com|all search|images maps|account rewards|search prime video)/i.test(v)) return false;
  if(/^(?:https?:\/\/|www\.|\/\/|\/\*|\*\/)/i.test(v)) return false;

  // Movie titles are short human-readable strings. Reject code-heavy strings.
  const letters=(v.match(/[A-Za-z]/g)||[]).length;
  const weird=(v.match(/[\\<>={}\[\]|;]/g)||[]).length;
  if(letters < 2 || weird > 0) return false;
  return true;
}

function extractPrimeIndexedTitles(payload, transport='indexed-search') {
  const decoded=decodePrimePayload(payload);

  // The query string on a search page can itself contain the heading. Prefer a
  // heading occurrence that is followed by Prime-style chart markers.
  const markerRe=/Top\s*10\s*movies\s*in\s*the\s*UK/ig;
  const markers=[...decoded.matchAll(markerRe)];
  let section='';
  for(const marker of markers){
    const candidate=decoded.slice(marker.index, marker.index+220000);
    if(/(?:\bImage\b|###|#\s*1\s*movie\s*in\s*the\s*UK|Featured Originals and Exclusives movies)/i.test(candidate)) {
      section=candidate;
      break;
    }
  }
  if(!section) throw new Error(`${transport} did not expose a usable UK Top 10 section`);

  // Stop before the next Prime carousel so we only inspect the Top 10 block.
  const stop=section.search(/Featured\s+Originals\s+and\s+Exclusives\s+movies|Top-rated\s+movies|Documentaries|Paranormal\s+screams/i);
  if(stop>0) section=section.slice(0,stop);

  const candidates=[];
  const add=(value)=>{
    const v=cleanPrimeTitle(value)
      .replace(/^[-*•#\d.)\s]+/,'')
      .replace(/\s+(?:Image|NEW MOVIE|MOST LIKED|DEAL|RECENTLY ADDED)$/i,'')
      .trim();
    if(primeIndexedTitleLooksSafe(v)) candidates.push({title:v,url:PRIME_MOVIES_URL});
  };

  // Strongest signal from indexed/readable Prime text:
  //   * Movie title\nImage\n### Movie title
  // or simply a markdown heading within the Top 10 section.
  let m;
  const repeatedRe=/(?:^|\n)\s*(?:[-*•]\s*)?([^\n]{2,120})\s*\n\s*Image\s*\n\s*#{1,6}\s*([^\n]{2,120})/gim;
  while((m=repeatedRe.exec(section))){
    const a=cleanPrimeTitle(m[1]);
    const b=cleanPrimeTitle(m[2]);
    if(norm(a)===norm(b)) add(a);
  }

  // Prime's indexed page can omit the duplicate heading for some cards. In
  // that case accept only a clean line immediately followed by "Image".
  const imageRe=/(?:^|\n)\s*(?:[-*•]\s*)?([^\n]{2,120})\s*\n\s*Image(?:\s|$)/gim;
  while((m=imageRe.exec(section))) add(m[1]);

  // HTML heading fallback, but only if the heading itself is clean text.
  const headingRe=/<h[2-6]\b[^>]*>([\s\S]*?)<\/h[2-6]>/gi;
  while((m=headingRe.exec(section))) add(m[1]);

  const deduped=uniqueItems(candidates)
    .filter(x=>!/^top 10 movies in the uk$/i.test(x.title))
    .slice(0,10);

  console.log(`Prime ${transport}: ${deduped.length} SAFE indexed titles; first: ${deduped.map(x=>x.title).join(' | ')}`);
  if(deduped.length<10) throw new Error(`${transport} returned only ${deduped.length} safe chart titles`);

  return deduped.map((x,i)=>({rank:i+1,title:x.title,year:null,poster:null,url:PRIME_MOVIES_URL,trend:null,trendDifference:0,daysInTop10:null,topRank:null}));
}

async function fetchPrimeViaPublicSearchIndex() {
  // Search-result HTML is not a trustworthy representation of Prime's page.
  // It can contain our query text plus unrelated result cards/images, which
  // previously produced false "movie titles". Never publish that as official.
  // Keep this explicit failure so fetchOfficialPrimeMovies() continues to the
  // labelled JustWatch UK fallback when Prime hides its carousel from CI.
  throw new Error('public search index disabled: cannot safely prove 10 Prime UK chart titles');
}

async function fetchOfficialPrimeMovies() {
  const headers={
    'user-agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'accept-language':'en-GB,en;q=0.9',
    'cookie':'lc-main=en_GB; i18n-prefs=GBP; av-timezone=Europe%2FLondon',
    'referer':'https://www.primevideo.com/'
  };
  const errors=[];

  // 1) Prime itself. This is preferred because it is the official page with no intermediary.
  for(const url of PRIME_DIRECT_URLS){
    try{
      const html=await fetchText(url,headers);
      const hasUk=/Top\s*10\s*movies\s*in\s*the\s*UK/i.test(decodePrimePayload(html));
      console.log(`Prime direct fetch: ${url} (${html.length} chars, UK heading=${hasUk})`);
      if(!hasUk) throw new Error('Prime returned a page without the UK Top 10 carousel');
      return primeItemsFromPayload(html,'direct');
    }catch(err){
      errors.push(`direct: ${err.message}`);
      console.warn(`Prime direct attempt failed: ${err.message}`);
    }
  }

  // 2) Render the SAME official Prime page through Jina Reader. This is useful on
  // GitHub Actions because Amazon can geolocate/cloud-block the runner and omit the
  // UK carousel. Reader renders the public page in a browser; provenance remains Prime.
  const readerHeaders={
    'accept':'text/plain',
    'user-agent':'WozzaWatch/4.6.4 (+GitHub Actions)',
    'x-engine':'browser',
    'x-no-cache':'true',
    'x-timeout':'20'
  };
  for(const officialUrl of PRIME_DIRECT_URLS.slice(0,2)){
    const readerUrl=`https://r.jina.ai/${officialUrl}`;
    try{
      const text=await fetchText(readerUrl,readerHeaders);
      const hasUk=/Top\s*10\s*movies\s*in\s*the\s*UK/i.test(text);
      console.log(`Prime reader fetch: ${text.length} chars, UK heading=${hasUk}`);
      if(!hasUk) throw new Error('Rendered Prime page did not contain the UK Top 10 heading');
      return primeItemsFromPayload(text,'reader');
    }catch(err){
      errors.push(`reader: ${err.message}`);
      console.warn(`Prime reader attempt failed: ${err.message}`);
    }
  }

  // 3) Last-resort discovery transport: Jina Search. We only accept it when the
  // returned text contains Prime's exact UK heading, then parse the official Prime
  // section itself. This avoids silently substituting US or generic popularity data.
  try{
    const query=encodeURIComponent('site:primevideo.com/movie "Top 10 movies in the UK" Prime Video');
    const searchText=await fetchText(`https://s.jina.ai/${query}`,{
      'accept':'text/plain',
      'user-agent':'WozzaWatch/4.6.4 (+GitHub Actions)',
      'x-no-cache':'true'
    });
    const hasUk=/Top\s*10\s*movies\s*in\s*the\s*UK/i.test(searchText);
    const hasPrime=/primevideo\.com\/movie/i.test(searchText);
    console.log(`Prime search transport: ${searchText.length} chars, UK heading=${hasUk}, Prime URL=${hasPrime}`);
    if(!hasUk||!hasPrime) throw new Error('Search transport did not return the official Prime UK chart');
    return primeItemsFromPayload(searchText,'search');
  }catch(err){
    errors.push(`search: ${err.message}`);
    console.warn(`Prime search attempt failed: ${err.message}`);
  }

  // 4) Public search-index fallback. Search engines can see the UK-specific
  // Prime page even when Amazon geolocates GitHub's runner outside the UK. We
  // still require the exact official Prime heading and parse only the indexed
  // Prime page text. If that condition is not met, we refuse to call it official.
  try {
    return await fetchPrimeViaPublicSearchIndex();
  } catch(err) {
    errors.push(`indexed: ${err.message}`);
    console.warn(`Prime indexed fallback failed: ${err.message}`);
  }

  throw new Error(errors.join(' | ')||'Prime UK chart unavailable');
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

function decodeEntities(value='') {
  return String(value)
    .replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
    .replace(/&nbsp;/g,' ').replace(/&pound;/g,'£').replace(/&dollar;/g,'$')
    .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)));
}
function cleanCell(value='') {
  return decodeEntities(String(value).replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' '))
    .replace(/\s+/g,' ').trim();
}
function tableRows(html='') {
  return [...String(html).matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(row =>
    [...row[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(cell=>cleanCell(cell[1]))
  ).filter(row=>row.length);
}
function htmlLines(html='') {
  return decodeEntities(String(html)
    .replace(/<script[\s\S]*?<\/script>/gi,'\n').replace(/<style[\s\S]*?<\/style>/gi,'\n')
    .replace(/<(?:br|\/p|\/div|\/li|\/h\d|\/tr|\/td|\/section)>/gi,'\n').replace(/<[^>]+>/g,' '))
    .split(/\n+/).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
}
function moneyValue(value='') {
  const m=String(value).match(/[£$]\s?([\d,.]+)/);
  return m ? Number(m[1].replace(/,/g,'')) : null;
}

async function fetchOfficialUKCinema() {
  const html=await fetchText(UK_CINEMA_URL, {'accept-language':'en-GB,en;q=0.9'});
  const rows=tableRows(html);
  const items=[];
  for(const cells of rows){
    const rank=Number(cells[0]);
    if(!Number.isInteger(rank)||rank<1||rank>10||cells.length<2) continue;
    let title=cells[1].trim();
    // UK Cinema Association appends distributor in brackets to the title cell.
    title=title.replace(/\s+\([^()]{2,45}\)\s*$/,'').trim();
    if(!title) continue;
    items.push({rank,title,weekendGross:moneyValue(cells[2]),cumulativeGross:moneyValue(cells[3]),url:UK_CINEMA_URL});
  }
  const unique=[...new Map(items.map(x=>[x.rank,x])).values()].sort((a,b)=>a.rank-b.rank).slice(0,10);
  if(unique.length!==10) throw new Error(`UK Cinema Association returned ${unique.length}/10 chart rows`);
  return unique;
}

function cleanImdbTitle(value='') {
  return cleanCell(value)
    .replace(/^\s*(?:10|[1-9])\s*[.\-)]\s*/, '')
    .replace(/\s+/g,' ')
    .trim();
}
function validImdbChartTitle(value='') {
  const v=cleanImdbTitle(value);
  if(!v || v.length<1 || v.length>140) return false;
  return !/^(?:IMDb Charts|Top box office \(US\)|Weekend of|Weekend Gross|Total Gross|Weeks Released|Rate|Mark as watched|10 Titles|Share)$/i.test(v);
}
function imdbTitleUrl(href='') {
  if(!href) return US_CINEMA_URL;
  const decoded=decodeEntities(href);
  if(/^https?:\/\//i.test(decoded)) return decoded;
  if(decoded.startsWith('/title/')) return `https://www.imdb.com${decoded.split('?')[0]}`;
  return US_CINEMA_URL;
}
function parseImdbBoxOfficeHtml(html='') {
  const out=[];
  const add=(rank,title,url=US_CINEMA_URL)=>{
    rank=Number(rank);
    title=cleanImdbTitle(title);
    if(!Number.isInteger(rank)||rank<1||rank>10||!validImdbChartTitle(title)) return;
    if(out.some(x=>x.rank===rank || norm(x.title)===norm(title))) return;
    out.push({rank,title,url:imdbTitleUrl(url)});
  };

  // IMDb's current chart renders numbered h3 headings such as
  // <h3 class="ipc-title__text">1. Movie title</h3> inside a /title/ link.
  let m;
  const linkedHeading=/<a\b[^>]*href=["']([^"']*\/title\/tt\d+[^"']*)["'][^>]*>[\s\S]{0,1800}?<h3\b[^>]*>([\s\S]*?)<\/h3>/gi;
  while((m=linkedHeading.exec(html))){
    const text=cleanCell(m[2]);
    const mm=text.match(/^\s*(10|[1-9])\s*[.\-)]\s*(.+)$/);
    if(mm) add(mm[1],mm[2],m[1]);
  }

  // Some IMDb responses put the heading before the title link or omit the
  // surrounding anchor in the SSR markup. Capture numbered h3 text as well.
  const heading=/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi;
  while((m=heading.exec(html))){
    const text=cleanCell(m[1]);
    const mm=text.match(/^\s*(10|[1-9])\s*[.\-)]\s*(.+)$/);
    if(mm) add(mm[1],mm[2]);
  }

  // JSON/SSR fallback: titleText is common in IMDb's embedded page data.
  const jsonTitle=/"titleText"\s*:\s*\{\s*"text"\s*:\s*"((?:\\.|[^"\\])+)"[\s\S]{0,450}?"position"\s*:\s*(10|[1-9])/gi;
  while((m=jsonTitle.exec(html))){
    let title=m[1];
    try{ title=JSON.parse(`"${title}"`); }catch{}
    add(m[2],title);
  }

  return out.sort((a,b)=>a.rank-b.rank).slice(0,10);
}
function parseImdbReadable(text='') {
  const lines=decodeEntities(String(text)).split(/\r?\n/).map(x=>x.replace(/^\s*[-*#>]+\s*/,'').replace(/\s+/g,' ').trim()).filter(Boolean);
  const start=lines.findIndex(x=>/^Top box office \(US\)$/i.test(x));
  const section=(start>=0?lines.slice(start):lines).slice(0,320);
  const titles=[];
  const add=(title,url=US_CINEMA_URL)=>{
    title=cleanImdbTitle(title);
    if(validImdbChartTitle(title) && !titles.some(x=>norm(x.title)===norm(title))) {
      titles.push({rank:titles.length+1,title,url:imdbTitleUrl(url)});
    }
  };
  for(let i=0;i<section.length && titles.length<10;i++){
    if(!/^Weekend Gross:\s*\$/i.test(section[i])) continue;
    // Jina renders IMDb titles as Markdown links: [Movie title](https://www.imdb.com/title/tt.../)
    // Find the nearest IMDb title link before the Weekend Gross line and keep
    // the label only, rather than accidentally storing the full Markdown link.
    for(let j=i-1;j>=Math.max(0,i-10);j--){
      const md=section[j].match(/^\[([^\]]+)\]\((https?:\/\/www\.imdb\.com\/title\/tt\d+[^)]*)\)$/i);
      if(md){ add(md[1],md[2]); break; }
      const html=section[j].match(/^(.+?)\s+(https?:\/\/www\.imdb\.com\/title\/tt\d+\S*)$/i);
      if(html){ add(html[1],html[2]); break; }
    }
  }
  return titles.slice(0,10);
}
async function fetchUSCinemaIMDb() {
  const errors=[];
  const headers={
    'user-agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'accept-language':'en-US,en;q=0.9'
  };

  try{
    const html=await fetchText(US_CINEMA_URL,headers);
    const items=parseImdbBoxOfficeHtml(html);
    console.log(`US cinema IMDb direct: ${items.length}/10`);
    if(items.length===10) return items;
    errors.push(`direct returned ${items.length}/10`);
  }catch(err){
    errors.push(`direct: ${err.message}`);
    console.warn(`US cinema IMDb direct failed: ${err.message}`);
  }

  // GitHub-hosted runners can occasionally receive bot/interstitial markup from
  // IMDb. Jina Reader renders the same public IMDb chart and gives us readable
  // text; the source remains IMDb, not a substitute chart provider.
  try{
    const readerUrl=`https://r.jina.ai/https://www.imdb.com/chart/boxoffice/`;
    const text=await fetchText(readerUrl,{
      'accept':'text/plain',
      'user-agent':'WozzaWatch/4.8.2 (+GitHub Actions)',
      'x-engine':'browser',
      'x-no-cache':'true',
      'x-timeout':'20'
    });
    const items=parseImdbReadable(text);
    console.log(`US cinema IMDb reader: ${items.length}/10`);
    if(items.length===10) return items;
    errors.push(`reader returned ${items.length}/10`);
  }catch(err){
    errors.push(`reader: ${err.message}`);
    console.warn(`US cinema IMDb reader failed: ${err.message}`);
  }

  throw new Error(errors.join(' | ') || 'IMDb US box-office chart unavailable');
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
const output={version:11,generatedAt:new Date().toISOString(),country:'GB',strategy:'Official source first; labelled fallback when no compatible official chart is available.',services:{}};
const packageData=await gql(PACKAGES_QUERY,{country:'GB',platform:'WEB'}); const packages=packageData?.packages||[];
let netflixOfficial=null; try{netflixOfficial=await fetchOfficialNetflix(); console.log(`Netflix official week ${netflixOfficial.week}`);}catch(err){console.error('Netflix official:',err.message);}
let primeMoviesOfficial=null; try{primeMoviesOfficial=await fetchOfficialPrimeMovies(); console.log(`Prime official movies: ${primeMoviesOfficial.length}`);}catch(err){console.error('Prime official movies:',err.message);}
let appleMoviesOfficial=null; try{appleMoviesOfficial=await fetchOfficialApple(APPLE_MOVIES_URL,'MOVIE'); console.log(`Apple official movies: ${appleMoviesOfficial.length}`);}catch(err){console.error('Apple official movies:',err.message);}
let appleTVOfficial=null; try{appleTVOfficial=await fetchOfficialApple(APPLE_TV_URL,'SHOW'); console.log(`Apple official TV: ${appleTVOfficial.length}`);}catch(err){console.error('Apple official TV:',err.message);}
let ukCinemaOfficial=null; try{ukCinemaOfficial=await fetchOfficialUKCinema(); console.log(`UK cinema official: ${ukCinemaOfficial.length}`);}catch(err){console.error('UK cinema official:',err.message);}
let usCinemaIMDb=null; try{usCinemaIMDb=await fetchUSCinemaIMDb(); console.log(`US cinema IMDb: ${usCinemaIMDb.length}`);}catch(err){console.error('US cinema IMDb:',err.message);}

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

// Cinema charts are movie-only. They deliberately use the same simple item shape as
// streaming charts, so the existing WozzaWatch card can render them without clutter.
{
  const old=previous?.services?.ukcinema;
  const entry={provider:'UK Cinema',movies:[],tv:[],sources:{},error:null};
  if(ukCinemaOfficial?.length){
    entry.movies=await enrichOfficial(ukCinemaOfficial,[],'MOVIE');
    entry.sources.movies={kind:'official',label:'UK Cinema Association / Comscore',displayName:'UK Cinema Association',url:UK_CINEMA_URL,cadence:'weekly',note:'Official UK weekend box-office Top 10 published by the UK Cinema Association using Comscore data.'};
  } else if(Array.isArray(old?.movies)&&old.movies.length){
    entry.movies=old.movies.map((x,i)=>({...x,rank:i+1})); entry.sources.movies=old.sources?.movies; entry.stale=true;
  } else entry.error='movies: no ranking available';
  output.services.ukcinema=entry;
}
{
  const old=previous?.services?.uscinema;
  const entry={provider:'US Cinema',movies:[],tv:[],sources:{},error:null};
  if(usCinemaIMDb?.length){
    entry.movies=await enrichOfficial(usCinemaIMDb,[],'MOVIE');
    entry.sources.movies={kind:'fallback',label:'IMDb',displayName:'IMDb',url:US_CINEMA_URL,cadence:'weekly',note:'US weekend box-office Top 10 from IMDb, reported by Box Office Mojo.'};
  } else if(Array.isArray(old?.movies)&&old.movies.length && /IMDb/i.test(old?.sources?.movies?.label||old?.sources?.movies?.displayName||'')){
    entry.movies=old.movies.map((x,i)=>({...x,rank:i+1})); entry.sources.movies=old.sources?.movies; entry.stale=true;
  } else entry.error='movies: no IMDb ranking available';
  output.services.uscinema=entry;
}

await mkdir('data',{recursive:true}); await writeFile('data/rankings.json',JSON.stringify(output,null,2)+'\n'); console.log(`Saved rankings at ${output.generatedAt}`);
