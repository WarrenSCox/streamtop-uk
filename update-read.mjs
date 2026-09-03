import fs from 'node:fs/promises';

const BOOKS_URL='https://www.lovereading.co.uk/genres/lrt10/uk-top-10-books';
const AUDIO_URL='https://www.audible.co.uk/charts/best';
const headers={
  'User-Agent':'Mozilla/5.0 (compatible; WozzaRead/6.1.0; +https://github.com/)',
  'Accept':'text/html,application/xhtml+xml'
};

const decode=s=>String(s||'')
  .replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'")
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)))
  .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n))
  .replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();

async function html(url){
  const r=await fetch(url,{redirect:'follow',headers});
  if(!r.ok) throw Error(`${r.status} ${url}`);
  return r.text();
}
const absolute=(href,base)=>{try{return new URL(href,base).href}catch{return ''}};
const attr=(tag,name)=>{
  const m=String(tag||'').match(new RegExp(`\\b${name}=["']([^"']+)["']`,'i'));
  return m?.[1]||'';
};
function bestImg(fragment,base){
  const tags=[...String(fragment||'').matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]);
  for(const tag of tags){
    let u=attr(tag,'data-src')||attr(tag,'data-lazy-src')||attr(tag,'src');
    if(!u){
      const ss=attr(tag,'srcset')||attr(tag,'data-srcset');
      if(ss) u=ss.split(',').pop()?.trim().split(/\s+/)[0]||'';
    }
    if(u&&!/^data:/i.test(u)) return absolute(u.replace(/&amp;/g,'&'),base);
  }
  return '';
}
function metaImage(src,base){
  const patterns=[
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i
  ];
  for(const p of patterns){const m=src.match(p);if(m?.[1])return absolute(m[1].replace(/&amp;/g,'&'),base)}
  return bestImg(src,base);
}

function normText(s){
  return decode(s).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
function imageUrlFromTag(tag,base){
  let u=attr(tag,'data-src')||attr(tag,'data-lazy-src')||attr(tag,'src');
  const ss=attr(tag,'srcset')||attr(tag,'data-srcset');
  if(ss){
    const candidate=ss.split(',').map(x=>x.trim().split(/\s+/)[0]).filter(Boolean).pop();
    if(candidate) u=candidate;
  }
  return u&&!/^data:/i.test(u)?absolute(u.replace(/&amp;/g,'&'),base):'';
}
function productCover(src,base,expectedTitle,kind){
  // Lock artwork to the exact title. A missing cover is safer than a wrong cover.
  const wanted=normText(expectedTitle);
  const tags=[...String(src||'').matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]);
  const candidates=[];
  for(const [index,tag] of tags.entries()){
    const u=imageUrlFromTag(tag,base);
    if(!u) continue;
    const altRaw=decode(attr(tag,'alt'));
    const alt=normText(altRaw);
    if(!alt||!wanted) continue;
    let score=0;
    if(kind==='AUDIOBOOKS'){
      // Audible product pages expose the real square artwork as "<title> cover art".
      if(alt===`${wanted} cover art`) score=1000;
      else if(alt.startsWith(wanted)&&alt.includes('cover art')) score=900;
      else if(alt.includes(wanted)&&alt.includes('cover')) score=800;
    }else{
      // LoveReading product pages expose the primary jacket with the book title as alt text.
      if(alt===wanted) score=1000;
      else if(alt===`${wanted} book cover`||alt===`${wanted} cover`) score=950;
      else if(alt.startsWith(wanted)&&alt.includes('cover')) score=850;
    }
    if(score) candidates.push({score,index,url:u,alt:altRaw});
  }
  candidates.sort((a,b)=>b.score-a.score||a.index-b.index);
  return candidates[0]?.url||'';
}

async function secondaryCover(row,kind){
  try{
    if(kind==='BOOKS'){
      const q=encodeURIComponent(`intitle:${row.title} inauthor:${row.author||''}`);
      const r=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=5`,{headers:{'User-Agent':headers['User-Agent']}});
      if(!r.ok)return '';
      const j=await r.json();
      const hit=(j.items||[]).find(x=>normText(x.volumeInfo?.title)===normText(row.title) && (!row.author||(x.volumeInfo?.authors||[]).some(a=>normText(a).includes(normText(row.author))||normText(row.author).includes(normText(a)))));
      const u=hit?.volumeInfo?.imageLinks?.thumbnail||hit?.volumeInfo?.imageLinks?.smallThumbnail||'';
      return u.replace(/^http:/,'https:');
    }
    const term=encodeURIComponent(`${row.title} ${row.author||''}`);
    const r=await fetch(`https://itunes.apple.com/search?country=gb&media=audiobook&limit=10&term=${term}`,{headers:{'User-Agent':headers['User-Agent']}});
    if(!r.ok)return '';
    const j=await r.json();
    const hit=(j.results||[]).find(x=>normText(x.collectionName||x.trackName)===normText(row.title));
    return String(hit?.artworkUrl100||'').replace(/100x100bb/g,'600x600bb');
  }catch{return ''}
}

async function enrichImages(rows,kind){
  return Promise.all(rows.map(async row=>{
    if(!row.url) return row;
    try{
      const page=await html(row.url);
      let image=productCover(page,row.url,row.title,kind);
      if(!image) image=await secondaryCover(row,kind);
      return {...row,image};
    }catch(e){
      console.warn(`cover lookup failed for ${row.title}: ${e.message}`);
      return {...row,image:await secondaryCover(row,kind)};
    }
  }));
}

function booksFromHtml(src){
  // LoveReading exposes the Official UK Top 10 as ten /book/ links followed by an /author/ link.
  // Restrict parsing to the chart itself so recommendations/navigation cannot leak into the Top 10.
  const start=src.search(/UK Top 10 Books|Official UK Top 10/i);
  const end=start>=0?src.slice(start).search(/Browse Books|Join Our Community|Customer Service/i):-1;
  const area=start>=0?src.slice(start,end>0?start+end:Math.min(src.length,start+180000)):src;
  const bookLinks=[...area.matchAll(/<a\b([^>]*href=["'][^"']*\/book\/[^"']+["'][^>]*)>([\s\S]*?)<\/a>/gi)]
    .map(m=>({index:m.index,tag:m[0],href:attr(m[0],'href'),title:decode(m[2])}))
    .filter(x=>x.title&&x.href);
  const unique=[];
  const seen=new Set();
  for(const b of bookLinks){
    const key=b.href.split('#')[0];
    if(seen.has(key)) continue;
    seen.add(key); unique.push(b);
    if(unique.length===10) break;
  }
  return unique.map((b,i)=>{
    const next=unique[i+1]?.index??area.length;
    const seg=area.slice(b.index,next);
    const am=seg.match(/<a\b[^>]*href=["'][^"']*\/author\/[^"']+["'][^>]*>([\s\S]*?)<\/a>/i);
    const image=bestImg(seg,BOOKS_URL);
    return {title:b.title,author:decode(am?.[1]||''),image,url:absolute(b.href,BOOKS_URL)};
  });
}

function audibleFromHtml(src){
  // Audible's ranked result is the h3 whose visible text starts "1.", "2." etc.
  // Other h3s on the page are reviews/messages and are intentionally ignored.
  const hs=[...src.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)];
  const ranked=[];
  for(const h of hs){
    const text=decode(h[1]);
    const rm=text.match(/^(\d{1,3})\.\s*(.+)$/);
    if(!rm) continue;
    const rank=+rm[1];
    if(rank<1||rank>10) continue;
    const a=h[1].match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    ranked.push({rank,index:h.index+h[0].length,title:decode(a?.[2]||rm[2]),url:absolute(a?.[1]||'',AUDIO_URL)});
  }
  ranked.sort((a,b)=>a.rank-b.rank);
  const dedup=[]; const used=new Set();
  for(const r of ranked){if(!used.has(r.rank)){used.add(r.rank);dedup.push(r)}}
  return dedup.map((r,i)=>{
    const next=dedup[i+1]?.index??Math.min(src.length,r.index+14000);
    const seg=src.slice(r.index,Math.min(next,r.index+14000));
    const by=seg.match(/By:\s*(?:<\/span>)?\s*(?:<[^>]+>\s*)*<a\b[^>]*>([\s\S]*?)<\/a>/i)
      ||seg.match(/By:\s*(?:<\/span>)?\s*([^<\n]+)/i);
    const narBlock=(seg.match(/Narrated by:\s*([\s\S]*?)(?:Length:|Release date:|Language:|<\/li>)/i)||[])[1]||'';
    const narrator=decode(narBlock).replace(/^\s*:/,'').trim();
    const image=bestImg(seg,AUDIO_URL);
    return {title:r.title,author:decode(by?.[1]||''),narrator,image,url:r.url};
  });
}

let previous={charts:{}};
try{previous=JSON.parse(await fs.readFile('read.json','utf8'))}catch{}
const next={updated:new Date().toISOString(),charts:{...previous.charts},sources:{BOOKS:BOOKS_URL,AUDIOBOOKS:AUDIO_URL}};
let changed=false;

for(const [key,url,parser] of [['BOOKS',BOOKS_URL,booksFromHtml],['AUDIOBOOKS',AUDIO_URL,audibleFromHtml]]){
  try{
    let rows=parser(await html(url));
    if(rows.length!==10||rows.some(x=>!x.title)) throw Error(`expected exactly 10 ranked titles, got ${rows.length}`);
    rows=await enrichImages(rows,key);
    rows=rows.map(({url:_,...x})=>x);
    next.charts[key]=rows;
    changed=true;
    console.log(`${key}: verified 10 (${rows.filter(x=>x.image).length} covers)`);
  }catch(e){
    console.warn(`${key}: ${e.message}; retaining previous verified chart`);
    if(!next.charts[key]?.length) console.warn(`${key}: no previous chart available`);
  }
}

if(!changed&&Object.keys(next.charts).length===0) throw Error('No WozzaRead charts could be verified');
await fs.writeFile('read.json',JSON.stringify(next,null,2)+'\n');
