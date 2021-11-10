const cacheName = 'v1';
const cacheAssets = [
    ['index.html', 'style.css'],
    ['index.html', 'style.css'],
    ['index.html', 'style.css'],
    ['index.html', 'style.css']
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
            .catch((err) => console.log(err))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache === cacheName) {
                        console.log('Service Worker: Clearing old cache');
                        caches.delete(cache);
                    }
                })
            );
        })
    );

});

self.addEventListener('fetch', (event) => {
    event
        .respondWith(
            fetch(event.request))
        .catch(() => caches.match(e.request));
});