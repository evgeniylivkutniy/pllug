if (navigator?.serviceWorker) {
    // console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then((req) => console.log('Service Worker Registered'))
            .catch((err) => console.log(`Service Worker Error:  ${err}`));
    });
}
