'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8eb17526062b6f4023cafd65b32c4d27",
"assets/assets/images/background/background_1_large.png": "90f13f88b80c436be55c4c6c856cf82b",
"assets/assets/images/background/background_1_small.png": "c940f1108a82ac2fdf4c31fd61e76020",
"assets/assets/images/background/background_2.png": "74fdc2847dc4bb629d7acdcd1f7543b9",
"assets/assets/images/background/background_3.png": "276735427f7d6f36c45016cfd32f2693",
"assets/assets/images/background/background_4.png": "a850014dadd1bdd24aee60058304d9d0",
"assets/assets/images/background/background_5.png": "5b657b968c68696cf8a5961b23070d94",
"assets/assets/images/background/background_below_large.png": "e98b0d8546df2ad28c95e7676bd356bf",
"assets/assets/images/background/background_below_small.png": "ea83c4ae4050cab8bf5589fee7e9657e",
"assets/assets/images/background/menu_background.png": "f1eaeee7af8c917d553509c63d42ab70",
"assets/assets/images/benifits/benifit_1.png": "523b9e9139b1ec035a1c73ab57e8257d",
"assets/assets/images/benifits/benifit_2.png": "de705292141ca428c39ffc64d438901c",
"assets/assets/images/benifits/benifit_3.png": "c0ad7062da0634161db744c61e5d35b3",
"assets/assets/images/icons/body_builder_icon.png": "456197339a9cc2287377e2bc5ff950ec",
"assets/assets/images/icons/book_icon.png": "e708e44f0e11bb8947fa9ce2b0a60c78",
"assets/assets/images/icons/calisthenics_icon.png": "b234baf52d00122c52918ac4ac739af5",
"assets/assets/images/icons/certificate_icon.png": "5543441ac4479d2aefc799a49d757242",
"assets/assets/images/icons/crown_icon.png": "8dd9cdbb469ce2a92d315af5249cb6dc",
"assets/assets/images/icons/download_icon.png": "afc31c144c67bbc02dacf3d26083b9ad",
"assets/assets/images/icons/feature_1_icon.png": "a6ed57acce02a8caa954ce34e50b2f57",
"assets/assets/images/icons/feature_2_icon.png": "af024ace57aa6986d5e8de5f66420567",
"assets/assets/images/icons/feature_3_icon.png": "fb4e043b19e2ef5a19686299f123c89f",
"assets/assets/images/icons/feature_4_icon.png": "4c8017d910576f209d2c70c7590e5b1c",
"assets/assets/images/icons/feature_5_icon.png": "55bf04015c888e66d168c0565f4bc5d5",
"assets/assets/images/icons/flag_icon.png": "089f086a351abb564d53912eea3ca9ef",
"assets/assets/images/icons/food_plate_icon.png": "08355d671daaddff2bfc155a7b55b2b1",
"assets/assets/images/icons/medal_icon.png": "4008f8a500a5211c3aecca101b2a9575",
"assets/assets/images/icons/menu_benifits_icon.png": "53a912ef799f293058bf5a676e1dbcf3",
"assets/assets/images/icons/menu_experts_icon.png": "6efaf742b30e0e7e0d3a0a56ea44df46",
"assets/assets/images/icons/menu_features_icon.png": "1be9ba3baaad4ad47de03330f605f0b4",
"assets/assets/images/icons/menu_home_icon.png": "52ff346b293d6d90e6935df021eeee6d",
"assets/assets/images/icons/menu_testimonals_icon.png": "71116b5bb87123ac3ec291785fa9a39e",
"assets/assets/images/icons/nuetrition_icon.png": "74799b90f0b41f780ec21c5c80922f6c",
"assets/assets/images/icons/pad_icon.png": "a9a7eae1ad8f9a51b71e3953df496e26",
"assets/assets/images/logo/logo_large.png": "8eb6648a1d501f88b49f4335c15c2144",
"assets/assets/images/logo/logo_small.png": "2d3d991a507ba2619ef769fffeeea7f7",
"assets/assets/images/persons/person_1.png": "dd58011f51fb3fa85b80485adf2ac4b9",
"assets/assets/images/persons/person_2.png": "ed8cbbbd503afa009141ec51bc7bbcb2",
"assets/assets/images/persons/person_3.png": "0982e9a8f76295ff44f9556d13f08462",
"assets/assets/images/persons/trainer_1.png": "6fa30a2995a2e1b62b390f464d3111c4",
"assets/assets/images/persons/trainer_2.png": "ec0bbfda0833c02088cfad03fe8db4cc",
"assets/assets/images/persons/trainer_3.png": "547caeaddd336ed7db098571b4e5f979",
"assets/assets/images/screens/mobile_top_large.png": "2d6acdb7d0031c68b467c709de8f4eb9",
"assets/assets/images/screens/mobile_top_small.png": "312a5a39cc45ae9008fd31b554571040",
"assets/assets/images/screens/screen_1.png": "c6023b4926f6c2205b78631f9e562583",
"assets/assets/images/screens/screen_2.png": "64769e1b7c281a15db1a00d63f1fd31a",
"assets/assets/images/screens/screen_3.png": "2f842144dbe0f004a06b8e13badcfbd7",
"assets/assets/images/screens/screen_4.png": "08e126fe2174d23ce52e01ff9e8cad8d",
"assets/assets/images/screens/screen_5.png": "e1cc299d93aba2aa95f34129fa927ee6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c86cdf9dd26bb4c51827099175a66ae6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c17c511676d9adc3547abbc46c8911e8",
"/": "c17c511676d9adc3547abbc46c8911e8",
"main.dart.js": "dae3377485d438eb1b66a68af1b4a7d4",
"manifest.json": "329f28e5d432c7298f6a5d98b4a0218f",
"version.json": "a1fa20a05effff92ae82998dc75869a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
