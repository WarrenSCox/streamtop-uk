const CACHE = 'streamtop-uk-v2';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  ]));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Ranking JSON is deliberately network-first and is not replaced with HTML when offline.
  if (url.hostname === 'raw.githubusercontent.com' || url.pathname.endsWith('/data/rankings.json')) {
    event.respondWith(fetch(event.request, { cache:'no-store' }).catch(() => caches.match(event.request)));
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
