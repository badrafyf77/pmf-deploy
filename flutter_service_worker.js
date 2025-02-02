'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bcac6491bce33cfd2035c52c78a37ef4",
"version.json": "47624fa55042ef68d106abddfe6af3f5",
"index.html": "816a32b492dc56a45ca10a26ab47fb73",
"/": "816a32b492dc56a45ca10a26ab47fb73",
"main.dart.js": "f51888a421857720471dc1aa243a9035",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "54f9fb6982ae2e0054f860f6e2c51eb6",
"icons/favicon.ico": "595884701709b23abe75a621110a8fac",
"icons/apple-icon.png": "8d38ac0b67466ccda0e0c10eeee96fed",
"icons/apple-icon-144x144.png": "dea2a1e8f1c360e45e0419e92df3729e",
"icons/android-icon-192x192.png": "c49fc9c79ce7b08b1b8eec4f0c212aa4",
"icons/apple-icon-precomposed.png": "8d38ac0b67466ccda0e0c10eeee96fed",
"icons/apple-icon-114x114.png": "405584f703700b9997d1184ac3d0c680",
"icons/ms-icon-310x310.png": "d7c61060329642986b57e67fd86e1340",
"icons/ms-icon-144x144.png": "dea2a1e8f1c360e45e0419e92df3729e",
"icons/apple-icon-57x57.png": "53d47f260a4c2ac572df15d44df98422",
"icons/apple-icon-152x152.png": "7aca6f564815b7e4c3519bbc2b590971",
"icons/ms-icon-150x150.png": "d62678bbaea8def0bb3e5516b8c9e799",
"icons/android-icon-72x72.png": "c12c608bb85a2f3ea54278e833caea8a",
"icons/android-icon-96x96.png": "39f31abd03d793cd83305516eb315b4d",
"icons/android-icon-36x36.png": "69068fa75f1dc07b12f59c79356b8307",
"icons/apple-icon-180x180.png": "12640eb480a06d824093d3990aff5e61",
"icons/favicon-96x96.png": "185b6280f8b662c02f847649c5df1b36",
"icons/android-icon-48x48.png": "0ed80d9feda944c44ca337bb1b17e04d",
"icons/apple-icon-76x76.png": "a86d3d99661834e9786e06db82270f70",
"icons/apple-icon-60x60.png": "6ae064a8a5976e366a83919d1ae95b2d",
"icons/android-icon-144x144.png": "dea2a1e8f1c360e45e0419e92df3729e",
"icons/apple-icon-72x72.png": "c12c608bb85a2f3ea54278e833caea8a",
"icons/apple-icon-120x120.png": "79ce0195f0bea768fdd40c429ff2eae4",
"icons/favicon-32x32.png": "b1da90808dcd63119ecf5167c1a378d3",
"icons/ms-icon-70x70.png": "5f3bdd24140517e9b22eecd8f83b111b",
"manifest.json": "e63053ae6b20ab38892b94ae0a3878ff",
"assets/AssetManifest.json": "cdf0bfac7d7830a54f69b3bd69024dcd",
"assets/NOTICES": "00877edb5906ddcb52566f0872faef5a",
"assets/FontManifest.json": "94aeac1332d1708f89d82fa22f36ee72",
"assets/AssetManifest.bin.json": "8d04b562dbf315c2d6305b5e81231e42",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1d4cd753382012572d6d686ebec1ea12",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8b96e3eba777dc26f1e1f64c559f77d5",
"assets/fonts/MaterialIcons-Regular.otf": "b28c3699fcd38ea9285daa1b7d57390a",
"assets/assets/images/achievements.jpg": "4b0dbe9bf544e5f188fd5fc3db732d56",
"assets/assets/images/world_cup_26.png": "c86ad059c7e3742ea21851452260e80b",
"assets/assets/images/pmf_background.jpg": "def76ec1f548139591b31577a404e532",
"assets/assets/images/pmf_logo.png": "8e368217698461dc9138ed66bc0c3064",
"assets/assets/images/menu.png": "265bbb072edfea430404413b23cebfa0",
"assets/assets/images/moussa.jpeg": "b62162ce3488c673bcc12dfd4400f3ba",
"assets/assets/images/stars.png": "8f46ba5883318b360d537a50d2cc73ed",
"assets/assets/images/post1.jpeg": "4d53d8d0ef21a8ca226d48958475fb77",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
