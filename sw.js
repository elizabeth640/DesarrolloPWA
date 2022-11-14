self.addEventListener('install', function(event) {
  console.log('install', event);
});

self.addEventListener('message', function(event) {
  console.log('message', event);
});

self.addEventListener('fetch', function(event) {
  console.log('fetch', event);
});
// self.addEventListener('fetch', event => {

//     //if ( event.request.url.includes( 'style.css' )) {
//     //     event.respondWith( null );
//     //} else {
//     //     event.respondWith( fetch( event.request ) );
//     //}

//     // if ( event.request.url.includes('.jpg') ) {
//     //     console.log( event.request.url );
//     // }


//     // if ( event.request.url.includes( 'style.css' ) ) {

//     //     let respuesta = new Response(`
//     //         body { 
//     //             background-color: red !important; 
//     //             color: pink; 
//     //         }`
//     //     , {
//     //         headers: {
//     //             'Content-Type': 'text/css'
//     //         }
//     //     });

//     //     event.respondWith( respuesta );

//     // }

//     //event.respondWith( fetch('img/hola.jpg' ) );


//     const resp = fetch( event.request )
//     .then( resp => {

//         return resp.ok ? resp : fetch('img/service.png');
//         if (resp.ok) {
//             return resp;
//         } else {
//             return fetch('img/service.png');
//         }
//     });

//     event.respondWith( resp );

// });
