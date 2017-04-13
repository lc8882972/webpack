var cacheFiles = [
    'index.html',
    'styles.css',
    '/assets/jquery.min.js',
    'bundle.js',
    '/assets/f9198618367adab48fce67c78bd4b31c8701e41c.jpg'
];
self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (event) {
    // console.log('Handling fetch event for', event.request.url);

    event.respondWith(

        caches.open('v1').then(function (cache) {

            return cache.match(event.request)
                .then(function (response) {
                    if (response) {
                        return response;
                    }
                    console.log(event.request);
                    fetch(event.request).then(function (response) {
                        console.log('found in network');
                        return response;
                    }).catch(function (error) {
                        console.log(error);
                        throw error;
                    });

                }).catch(function (error) {
                    console.log(error);
                    return error;
                });
        })
    );
});

self.addEventListener('sync', function (event) {
    // console.log('Handling fetch event for', event.request.url);

    console.log(event);
});

function abc(){
    
}


var obj= new abc();

