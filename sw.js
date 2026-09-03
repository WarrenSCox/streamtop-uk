const CACHE='wozzawatch-v6.2.3';
const ASSETS=[
  './news-icon.png',
  './news.json',
  './news.js',
  './read.html','./read.js?v=6.2.3','./read.json','./news.html','./news.js?v=6.1.6','./','./index.html','./tune.html','./tune.js?v=6.1.6','./my-list.html','./my-list.js?v=6.1.6','./watched.html','./watched.js?v=6.1.6','./my-list-icon.svg','./read-icon.svg','./news-icon.svg','./tune-icon.svg','./single-icon.svg','./single-icon.svg','./album-icon.svg','./album-icon.svg','./styles.css?v=6.2.3','./app.js?v=6.1.6','./manifest.webmanifest','./icon.svg','./ear-icon.svg'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))])));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.hostname==='raw.githubusercontent.com'||url.pathname.endsWith('/data/rankings.json')){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(event.request)));return}if(event.request.mode==='navigate'){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));return}if(url.origin===self.location.origin&&(url.pathname.endsWith('/app.js')||url.pathname.endsWith('/read.js')||url.pathname.endsWith('/tune.js')||url.pathname.endsWith('/my-list.js')||url.pathname.endsWith('/watched.js')||url.pathname.endsWith('/styles.css')||url.pathname.endsWith('/ear-icon.svg')||url.pathname.endsWith('/sw.js'))){event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));return}if(url.origin===self.location.origin)event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});

self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
