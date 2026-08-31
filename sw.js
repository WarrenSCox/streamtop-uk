const CACHE='wozzawatch-v4.4.1';
const ASSETS=['./','./index.html','./styles.css?v=4.4.1','./app.js?v=4.4.1','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))])));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.hostname==='raw.githubusercontent.com'||url.pathname.endsWith('/data/rankings.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(event.request)));
    return;
  }
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match('./index.html')));
    return;
  }
  if(url.origin===self.location.origin && (url.pathname.endsWith('/app.js')||url.pathname.endsWith('/styles.css')||url.pathname.endsWith('/sw.js'))){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }).catch(()=>caches.match(event.request)));
    return;
  }
  if(url.origin===self.location.origin)event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
