var cacheName = 'yapp-pwa';
var filesToCache = [
  "./index.html",
  "./assets/cached.html",
  "./scripts/main.js",
  "./styles/beauty.css"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('message', function(event){
  console.log("message received");
  if(event.data.action === 'skipWaiting'){

    self.skipWaiting();
    
  }
});