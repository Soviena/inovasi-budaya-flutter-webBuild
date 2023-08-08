'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "010a2fb2cfa7427d8d3487737a3d3590",
"version.json": "63646f529597211ff521dedcfda2d823",
"assets/assets/image/backgroundSplash_image.png": "17afed2146a9c9b946f40cdcea0f5a1f",
"assets/assets/image/Akhlak.png": "748ebdb08ad2227004a40cde67976f06",
"assets/assets/image/Poster1.png": "cb6d3df6ffe538d1555d9b90031dbdbc",
"assets/assets/image/Poster2.png": "26b280d14caaa4ab3dfb6428c0eca058",
"assets/assets/image/Poster3.png": "54b4931203a22994fa0e5a23856e5f60",
"assets/assets/image/Visi_Misi_Image.png": "13b09c2fb89ea82163ae6b2fdbf84eb7",
"assets/assets/image/Inspeksi.png": "b4d2dd8668755b49f1867b6ae59b7c71",
"assets/assets/image/Pengujian.png": "56ab9651a837d9d6fa62ab61ca2daaa1",
"assets/assets/image/Sertifikasi.png": "76181760f1aa6183704f9c84ce2cbd91",
"assets/assets/image/Konsultasi.png": "7f70f97b3ded23088451ff6c1e514587",
"assets/assets/image/Pelatihan.png": "bce79876243aafbcdfaaff6a99a24e8b",
"assets/assets/image/Materi_Sharing.png": "a44a0605ee87ef4429213fadf38f82c2",
"assets/assets/image/Kinerja.png": "1cd75e3ab4eb98d3dce27e94c56cb0a4",
"assets/assets/image/Aktivitas.png": "2e7169e18ddd9adf721130a910bdcbb9",
"assets/assets/image/Safety_Moment.png": "9f7dc7a800117adf8053125a5a5b11e6",
"assets/assets/image/Feedback.png": "6a6d81f7dd94ddae527d1bf46113dbeb",
"assets/assets/image/Profil.png": "3decb16884e6c03a13486217bc9bc211",
"assets/assets/image/PosterAkhlak.jpg": "307346ff1d6e383f78329b2b4b8e19d1",
"assets/assets/image/Posterlandscape1.jpg": "d069282799c7d3153859cc52dd766545",
"assets/assets/image/Posterlandscape2.jpg": "f1df529ff6e3d751a42d01dbe17441e4",
"assets/assets/image/PosterPerilakuAkhlak.jpg": "5b737309e9fc4f81839c7eb9c71759f7",
"assets/assets/image/Siapkeakhlak.jpg": "953cfc513a2a080b0deede2f985dae52",
"assets/assets/image/Gambar_Kinerja_Kecil.png": "f2286bf2f993efa9b236fdadbc0a4d6b",
"assets/assets/font/Montserrat.ttf": "52a37115b1d8d5d6ae0b0e373e692c9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/fonts/MaterialIcons-Regular.otf": "67ac116752c97b2dcd8ec0af465a4eaa",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "92e4db9d7a1fd630aa0627d624b6780a",
"assets/AssetManifest.bin": "9eb95b52d293ee5fdfa630a57f3c134f",
"assets/FontManifest.json": "2b86cfb96be3b85e9048a73cb0412db8",
"assets/NOTICES": "922e4194705fe10ec457ab899f8e2a02",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9de7daa56f66b4c0c95175018183951f",
"/": "9de7daa56f66b4c0c95175018183951f",
"manifest.json": "e414f2b57a29e637ccb5aed47bca123d",
"sqflite_sw.js": "4fdd89a73707c2fe970ba46b4f9eea1c",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"Archive.zip": "abf1de5335b1c7a417902964da118c19"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
