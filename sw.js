var cacheName = 'yapp-pwa';
var filesToCache = [
  "./index.html",
  "./assets/cached.html",
  "./styles/beauty.css",
  "./scripts/main.js"
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
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(fetch(event.request));
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// interface CacheStorage {
//   delete(cacheName: string): Promise<boolean>;
//   has(cacheName: string): Promise<boolean>;
//   keys(): Promise<string[]>;
//   match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
//   open(cacheName: string): Promise<Cache>;
// }