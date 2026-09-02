const CACHE='wozzawatch-v5.3.41.0';
const ASSETS=[
  './news-icon.png',
  './news.json',
  './news.js',
  './news.html','./news.js?v=5.3.41','./','./index.html','./tune.html','./tune.js?v=5.3.39','./my-list.html','./my-list.js?v=5.3.39','./watched.html','./watched.js?v=5.3.39','./my-list-icon.svg','./read-icon.svg','./news-icon.svg','./tune-icon.svg','./single-icon.svg','./single-icon.svg','./album-icon.svg','./album-icon.svg','./styles.css?v=5.3.41','./app.js?v=5.3.39','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))])));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.hostname==='raw.githubusercontent.com'||url.pathname.endsWith('/data/rankings.json')){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(event.request)));return}if(event.request.mode==='navigate'){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));return}if(url.origin===self.location.origin&&(url.pathname.endsWith('/app.js')||url.pathname.endsWith('/tune.js')||url.pathname.endsWith('/my-list.js')||url.pathname.endsWith('/watched.js')||url.pathname.endsWith('/styles.css')||url.pathname.endsWith('/sw.js'))){event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));return}if(url.origin===self.location.origin)event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});

self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
