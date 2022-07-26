'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c392a310fb28a85010ba9e13391a7ac4",
"assets/assets/assets/1_fondo.png": "dc81ba9df9e2a29b253b601f1674badb",
"assets/assets/assets/1_logo%20-%20copia.png": "8688821540ce08620769d4e1ef2c6bfc",
"assets/assets/assets/1_logo%2520-%2520copia.png": "8688821540ce08620769d4e1ef2c6bfc",
"assets/assets/assets/1_logo.png": "0f7db0228362a4d943ca3fd0a76f9bfc",
"assets/assets/assets/2_fondoazul.png": "1acdc5d4363bec186684f7a23b3e5efd",
"assets/assets/assets/2_personas.png": "ce66e0144049fff51257f11263592172",
"assets/assets/assets/3_fondo.png": "f21ba52102887f4925668e5696410db7",
"assets/assets/assets/3_hombres.png": "6f29b4ceb8f38b6ea042cb286143e683",
"assets/assets/assets/3_logonaranja.png": "f855f94a93456c9f92deae43f6f6c780",
"assets/assets/assets/3_mesa.png": "24d0820f6aeaf711380a1237db6f8cae",
"assets/assets/assets/3_personaportatil.png": "eeb323f768215da6a212e328ee4deaeb",
"assets/assets/assets/3_tablero.png": "5ab4a08191c8ad49b3c40140405503cc",
"assets/assets/assets/3_tecnologia.png": "701a64012ce4dbb40e7aac92b093801b",
"assets/assets/assets/4_bolivar.png": "0d95eaff3babe63640be34a17c101327",
"assets/assets/assets/4_caracol.png": "731caaa3f4cf71bcd5cc84948f749954",
"assets/assets/assets/4_eltiempo.png": "567ddb4fac4b6d39f135daec342805d1",
"assets/assets/assets/4_enel.png": "e12193e08c801acc6b5f5a720de52a13",
"assets/assets/assets/4_fbolivar.png": "1171b2c757e05e3ff1ca32e6060ae06d",
"assets/assets/assets/4_fondo.png": "d5edba283506e8c39bb25b3c95037b16",
"assets/assets/assets/4_history.png": "70ce75c0b8f7d4d54a26704fb9de99f0",
"assets/assets/assets/4_movi.png": "b1feb8fc982b595764e3e8b2f77c6124",
"assets/assets/assets/4_red.png": "44355c8ed0b6e89e1108e6f5617670d3",
"assets/assets/assets/4_redmue.png": "4d4935179f32e3f826aec5b94762460d",
"assets/assets/assets/4_renting.png": "90bc17a4005a7347d88b3b2e2cf6a038",
"assets/assets/assets/4_renting2.jpg": "abd8b44b7c304abbc6a6e1e0f5b85c69",
"assets/assets/assets/4_rosario.png": "ec951fbfa82373c74944b88f0bf8e36d",
"assets/assets/assets/4_sdm.jpg": "dfc4d1cd28279bced8cead91245b2037",
"assets/assets/assets/4_ss.jpg": "1966d76cc2856b3f7cec0b1159ccbdb6",
"assets/assets/assets/4_tecno.jpg": "7a6f20d3443955637d1c9be1396aa35a",
"assets/assets/assets/4_titanes.png": "e10a12d6f134387c29feeaa8315af9c5",
"assets/assets/assets/4_trans.jpg": "e642d3c79d905074ce9287fc5118ea57",
"assets/assets/assets/5_email.png": "0b075f74074428eb5dcd2f3f70da496d",
"assets/assets/assets/5_facebook.png": "e584f38d880a5ca5cff2360b836c2e6d",
"assets/assets/assets/5_fondo.png": "6fe7d1e10cdbf346deae678bc25594a5",
"assets/assets/assets/5_insta.png": "4e9365387db9c9a2281390fa70bc0caf",
"assets/assets/assets/5_linkedin.png": "0200addac978e2dce63a5e370fafbb8f",
"assets/assets/assets/5_ubicacion.png": "2c4d270e6e5b823479dd026a3db88d88",
"assets/assets/assets/5_whatsapp.png": "08e5ba5a9941c49d1cfdd290b6f51e36",
"assets/assets/assets/aliados_1.png": "9b7eb2eedce70083f5cae2f568cdff59",
"assets/assets/assets/aliados_2.png": "74e4a050132a3ca491dd7b7fab5c66a7",
"assets/assets/assets/aliados_3.png": "67b6a513cc6df8d40b389333f2129110",
"assets/assets/assets/historia/contaduria.png": "668ffd7a397a4b7afa780a9e2f345bd4",
"assets/assets/assets/historia/derecha.png": "9436eddc342cec780cfbea78fb09dcdf",
"assets/assets/assets/historia/desing.png": "a2bcd8ff92adf1d56233576e396ca2c7",
"assets/assets/assets/historia/fondo_historia.png": "84e1bc4f927e804d9fbd34af40c9b56d",
"assets/assets/assets/historia/ing.png": "b8f9beeac8b14f4a626efa8ef958d6a6",
"assets/assets/assets/historia/izquierda.png": "515b8998a7a9e2fb8e1fd44a2426ed7b",
"assets/assets/assets/historia/Psicologia.png": "f7b34a2e864253ce944bae90bf0c86d5",
"assets/assets/assets/historia/publicidad.png": "1d57d9faa2f599498d05650a30ad2204",
"assets/assets/assets/servicios/1.png": "099d8bc0b709c9191f8066724a2e7b72",
"assets/assets/assets/servicios/2.png": "048ba1dfa2865f72db0f6d4db12635b2",
"assets/assets/assets/servicios/3.png": "48bfdfa2463f7904b4cb3f657fd6675c",
"assets/assets/assets/servicios/4.png": "0f1b3c1f9861dd770c217a624b1b88ae",
"assets/assets/assets/servicios/5.png": "238c580cb00513c6abb2df5e9545636d",
"assets/assets/assets/servicios/6.png": "48c7057136ee4d970c196d45241d3273",
"assets/assets/assets/servicios/acompanamiento.png": "24b133795ef310e3269abe3915b04fc7",
"assets/assets/assets/servicios/asesoria.png": "7a68d4ca8bba9038c88f05fbf9b7afc5",
"assets/assets/assets/servicios/bola.png": "7087128f4b97d5b64a504a96195266ef",
"assets/assets/assets/servicios/consultoria.png": "8397800bd25b82c15d63b3a1b16df00e",
"assets/assets/assets/servicios/fondo.png": "563f5b18beaca97967d16833743dfb6f",
"assets/assets/assets/servicios/formacion.png": "a76693fc8d76f6a3781b9516b0248e31",
"assets/assets/assets/servicios/generacion.png": "0eba9f612484bcc014bbbecf9359ecb4",
"assets/assets/assets/servicios/imagen1.png": "a4f0a4ece21ff4bd9f0d6d42ff296ff5",
"assets/assets/assets/servicios/imagen2.png": "ad7575a70efa21f42205075ef2bf8f33",
"assets/assets/assets/servicios/imagen3.png": "b4ebef90ea2c93f77df031b6d05244fc",
"assets/assets/assets/servicios/imagen4.png": "e79d615a88d015e21f19c9de20d6bd32",
"assets/assets/assets/servicios/imagen5.png": "2ff0fea9a8c2b58c22ce8d7b2ff95b59",
"assets/assets/assets/servicios/imagen6.png": "fc1686c13061c6db355823c8f33f104a",
"assets/assets/assets/servicios/investigacion.png": "215cfa56ddc26aabb1e7e407e572ca2e",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-02.png": "095d4fd8b1fbdca6034bfde59d62c776",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-09.png": "69bbdd7b5e0febc712f61bcf87a50385",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-10.png": "a08237ba9baf824d207841fb2115ffc2",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-11.png": "c4f3d0babac36ae964e7475ad84fa89b",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-12.png": "7a17dcf9e43b22042bbc7c4d6bef2f7e",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-13.png": "82d2ee10a8ebc67078bce2e11d3d8bc0",
"assets/assets/assets/servicios/Sin%20t%C3%ADtulo-1-15.png": "a2b779ff6d09d5e39cc67e7e3d4f31a9",
"assets/assets/assets/tecnologia/3_logonaranja.png": "a9095e47aac91c449bf47e994e034223",
"assets/assets/assets/tecnologia/bigoapp.png": "c29163cddea2889e6b7a64da274c7242",
"assets/assets/assets/tecnologia/cabeza_inclinada.png": "8754675a6845b5d6725910eceb2bd657",
"assets/assets/assets/tecnologia/camino.png": "b9eea087160e83737e22bae1359dc8e8",
"assets/assets/assets/tecnologia/cicla.png": "5346346838101ae4ad0b8283cc81b6af",
"assets/assets/assets/tecnologia/cicla1.png": "472135f5b0259c43decc6838fc2303cd",
"assets/assets/assets/tecnologia/cicla2.png": "6f6f5ffe4c4e355a12332cf6d48237f4",
"assets/assets/assets/tecnologia/dispositivo.png": "649a48c082c5f67358b89a75b2ae2f13",
"assets/assets/assets/tecnologia/facebook_edit.png": "993fb2195584826ca86f74cc2eb8c3bd",
"assets/assets/assets/tecnologia/fondo.png": "22393b7fb7ab058194f236795db8e2dc",
"assets/assets/assets/tecnologia/instagram.png": "6f43e043a76554714c64cfff9141f71e",
"assets/assets/assets/tecnologia/luz.png": "890d5fe46f2bf53e4fc8a42f63e226ad",
"assets/assets/assets/tecnologia/mano.png": "a47142ba31e0890b4819124e163d5ea3",
"assets/assets/assets/tecnologia/manonavi.png": "91ff91556b02acdfcd13e8356fd03ed4",
"assets/assets/assets/tecnologia/mapa.png": "9d3d6ab16e576c75fe52ab6138d5c587",
"assets/assets/assets/tecnologia/moto.png": "a16272daba49e8efd945c7a53cd5a17e",
"assets/assets/assets/tecnologia/navi.png": "adb0cdbd92ad9c2942d9a5ebcea7fb05",
"assets/assets/assets/tecnologia/navi2.png": "7e773d220fc949f0e7e925b187df0cbb",
"assets/assets/assets/tecnologia/navi3.png": "76c64db38ad9df92f993270bf0d2cec2",
"assets/assets/assets/tecnologia/navi4.png": "b186e19c4728e9f8489ea0ee3e2baedb",
"assets/assets/assets/tecnologia/placa.png": "943fdf373cb3098658b412a07c72d93e",
"assets/assets/assets/tecnologia/plano.png": "7a15b27f2fe6a7b61338d486f021b790",
"assets/assets/assets/tecnologia/telefono1.png": "918bd47f5ee9aa904aac14036f673f37",
"assets/assets/assets/tecnologia/telefono2.png": "1f4c402c734d189aef6955459988693d",
"assets/assets/assets/tecnologia/titulo.png": "08b8fb0e310b7035aeb0057406f99be1",
"assets/assets/assets/tecnologia/twitter.png": "7b6da8eafbfd51a6780fce3b57ae55b4",
"assets/assets/assets/tecnologia/web.png": "9f75627e1b3a847cd70be4d1db040cc6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "29ba7b8511886e5e3277a54890821714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6606654071857bbeeb9c7c26924beab",
"/": "a6606654071857bbeeb9c7c26924beab",
"main.dart.js": "6b5296b354916a759178bb21fcadeba4",
"manifest.json": "f47fce1b09a5f723cf0ef9caa08a1e09",
"version.json": "c3b6d7a23267a172a4a63994915f4226"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
