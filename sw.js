const CACHE = 'stk-org-chart-shell-v5';

function isSupabaseTraffic(url) {
  const host = url.hostname.toLowerCase();
  if (host === 'supabase.co' || host.endsWith('.supabase.co') || host.endsWith('.supabase.in')) return true;
  const path = url.pathname;
  if (path.indexOf('/rest/v1/') !== -1 || path.indexOf('/realtime/') !== -1 || path.indexOf('/auth/v1/') !== -1) return true;
  return false;
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(['./', './index.html']))
      .then(() => self.skipWaiting())
      .catch(() => { /* instalasi ulang saat online */ })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Hanya dokumen aplikasi. Respons Supabase (REST, Auth, Realtime) tidak pernah di-cache.
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (isSupabaseTraffic(url) || url.protocol === 'ws:' || url.protocol === 'wss:') return;
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.ok && !isSupabaseTraffic(new URL(response.url))) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(() => {});
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
  );
});
