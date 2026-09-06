import { readFile, writeFile, mkdir } from 'node:fs/promises';

const OUT='youtube.json';
const TRAILERS_URL='https://charts.youtube.com/charts/TrendingTrailers/gb';
const API='https://www.googleapis.com/youtube/v3/videos';
const KEY=process.env.YOUTUBE_API_KEY||'';
const UA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/140 Safari/537.36';

const clean=s=>String(s||'').replace(/\\u0026/g,'&').replace(/\\u003d/g,'=').replace(/\\u0027/g,"'").replace(/\\u003c/g,'<').replace(/\\u003e/g,'>').replace(/\\\"/g,'"').replace(/&amp;/g,'&').trim();
async function get(url){const r=await fetch(url,{headers:{'user-agent':UA,'accept-language':'en-GB,en;q=0.9'}});if(!r.ok)throw new Error(`${r.status} ${r.statusText}`);return r;}
function walk(node,out=[]){
  if(!node||typeof node!=='object')return out;
  if(node.videoId){
    const title=clean(node.title?.runs?.[0]?.text||node.title?.simpleText||node.headline?.simpleText||'');
    const thumbs=node.thumbnail?.thumbnails||node.thumbnailRenderer?.showCustomThumbnailRenderer?.thumbnail?.thumbnails||[];
    if(title)out.push({videoId:String(node.videoId),title,thumbnail:thumbs.at(-1)?.url||''});
  }
  for(const v of Object.values(node))walk(v,out);return out;
}
function extractJsonAfter(html,marker){const at=html.indexOf(marker);if(at<0)return null;let i=html.indexOf('{',at+marker.length);if(i<0)return null;let depth=0,str=false,esc=false;for(let j=i;j<html.length;j++){const c=html[j];if(str){if(esc)esc=false;else if(c==='\\\\')esc=true;else if(c==='"')str=false;continue}if(c==='"'){str=true;continue}if(c==='{')depth++;else if(c==='}'&&--depth===0){try{return JSON.parse(html.slice(i,j+1))}catch{return null}}}return null}
function unique(items){const seen=new Set();return items.filter(x=>x.videoId&&!seen.has(x.videoId)&&seen.add(x.videoId));}
function regexVideos(html){
 const out=[]; const re=/"videoId"\s*:\s*"([A-Za-z0-9_-]{11})"/g;let m;
 while((m=re.exec(html))&&out.length<80){const win=html.slice(m.index,Math.min(html.length,m.index+2400));const tm=win.match(/"(?:title|headline)"\s*:\s*\{?[\s\S]{0,400}?"(?:text|simpleText)"\s*:\s*"((?:\\.|[^"\\])+)"/);if(!tm)continue;let title=tm[1];try{title=JSON.parse('"'+title+'"')}catch{}out.push({videoId:m[1],title:clean(title),thumbnail:`https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`})}return unique(out);
}
async function trailers(){
 const html=await (await get(TRAILERS_URL)).text();
 let items=[];for(const marker of ['var ytInitialData =','window["ytInitialData"] =','ytInitialData =','__NEXT_DATA__']){const data=extractJsonAfter(html,marker);if(data)items.push(...walk(data));}
 items=unique(items.length?items:regexVideos(html)).filter(x=>x.title).slice(0,10);
 if(items.length<5)throw new Error(`Only ${items.length} trailer candidates parsed from YouTube Charts`);
 return items.map((x,i)=>({rank:i+1,title:x.title,videoId:x.videoId,poster:x.thumbnail||`https://i.ytimg.com/vi/${x.videoId}/hqdefault.jpg`,url:`https://www.youtube.com/watch?v=${x.videoId}`}));
}
async function mostPopular(category='0'){
 if(!KEY)throw new Error('YOUTUBE_API_KEY GitHub secret is not configured');
 const q=new URLSearchParams({part:'snippet',chart:'mostPopular',regionCode:'GB',maxResults:'10',videoCategoryId:category,key:KEY});
 const body=await (await get(`${API}?${q}`)).json();
 return (body.items||[]).slice(0,10).map((x,i)=>({rank:i+1,title:x.snippet?.title||'Untitled',videoId:x.id,poster:x.snippet?.thumbnails?.high?.url||x.snippet?.thumbnails?.medium?.url||x.snippet?.thumbnails?.default?.url||`https://i.ytimg.com/vi/${x.id}/hqdefault.jpg`,url:`https://www.youtube.com/watch?v=${x.id}`,channel:x.snippet?.channelTitle||''}));
}
let previous={};try{previous=JSON.parse(await readFile(OUT,'utf8'))}catch{}
const output={version:1,generatedAt:new Date().toISOString(),country:'GB',trailers:previous.trailers||[],videos:previous.videos||[],sources:{...(previous.sources||{})}};
try{output.trailers=await trailers();output.sources.trailers={kind:'official',label:'YouTube Charts',url:TRAILERS_URL,note:'Official UK Trending Movie Trailers chart.'};console.log(`YouTube trailers official: ${output.trailers.length}/10`)}catch(e){console.error('YouTube trailers official:',e.message);try{output.trailers=await mostPopular('1');output.sources.trailers={kind:'fallback',label:'YouTube Film & Animation',displayName:'YouTube',url:TRAILERS_URL,note:'Official trailer chart could not be parsed; using YouTube UK Film & Animation mostPopular as fallback.'};console.log(`YouTube trailers fallback: ${output.trailers.length}/10`)}catch(f){console.error('YouTube trailers fallback:',f.message);if(output.trailers.length)output.sources.trailers={...(output.sources.trailers||{}),stale:true}}}
try{output.videos=await mostPopular('0');output.sources.videos={kind:'official',label:'YouTube mostPopular',url:'https://www.youtube.com/',note:'YouTube Data API mostPopular chart for GB; since 2025 this pool is drawn from YouTube trending Music, Movies and Gaming charts.'};console.log(`YouTube videos: ${output.videos.length}/10`)}catch(e){console.error('YouTube videos:',e.message);if(output.videos.length)output.sources.videos={...(output.sources.videos||{}),stale:true}}
if(!output.trailers.length&&!output.videos.length)throw new Error('No YouTube chart data available; refusing to overwrite with an empty file.');
await writeFile(OUT,JSON.stringify(output,null,2)+'\n');
