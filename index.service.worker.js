self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(event) {
  event.waitUntil(caches.keys().then(function(n) { return Promise.all(n.map(function(k) { return caches.delete(k); })); }).then(function() { return self.registration.unregister(); }));
});
self.addEventListener('fetch', function(event) { event.respondWith(fetch(event.request)); });
