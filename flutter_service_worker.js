'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "353c1299f62081c18bc92f30ad364618",
"index.html": "91f26a48f1611e9767b61bda5e7b6e84",
"/": "91f26a48f1611e9767b61bda5e7b6e84",
"main.dart.js": "e16b12b7288b68961d98e634bc8d0bbd",
"Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"index.js": "793a2534fd90f66520eaa0508fccd264",
"NOTICES": "8d60b1505543c1f994912f792d2e8cfb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"package-lock.json": "0578ac8e28d4ca5d44ecddba0fd46f4a",
"package.json": "f5d65853397b1953b9b6e94651d55dba",
"FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"manifest.json": "a83afc1569a0bb985234715e93bf67cd",
".git/ORIG_HEAD": "0c43c00c0a187d1ddb2b579cf3ada65c",
".git/config": "704a5a1f45736a3d9184959c6a9b488f",
".git/objects/92/ac63919512626ac2d5d5bb85ccf5b08d2b3af7": "6f9aa33efa58fbc5a378fae321a6be2d",
".git/objects/50/ff75147d5cd0fdd65cd792e68e6a08c67da7cc": "58e64a6edf5ba1d4fdce692c5044e14b",
".git/objects/03/0dbb4a8e20f0fd526f40eac1ac4f96bf2fcab2": "dfa56a20a77bea1c5e425db1d431bd94",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/67/045665db202cf951f839a5f3e73efdcfd45021": "fe95cfaa1761c7b5a74c9c8b06525f83",
".git/objects/a5/d9b31682ac3eb4563f9b2f23f84fefb3f1cacc": "b4e79ed41057b55047de0a4ef7bd34bc",
".git/objects/d8/17b09e242761f56ceaaabdb3ab3762b578ba38": "af43451715ab640817881042ed3b26f9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/609d1e31a7957b3369bff835c2da0b37060161": "18452b170d478e969a799322b0f5ddb4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/e458e0d9ad3c83e3eed3630c6f454e18917a7e": "90fc4199d12a55d0203fb104c03e3aea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/050fd2c06f538bb9fce35e9af966d2cf2a3223": "83c579582a38a57246c874f51632b570",
".git/objects/72/3b44e754e3319332ee6ade2cdb120f952f9fd9": "e3481ff74d3bff22ca953ba55fc3102d",
".git/objects/43/dbaab7e0434b01da1daf951000d6646501ea7d": "c8d4bceab82e63ad4a14e9cfe68047c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0721b04a156403f859c4bf11647a693b1ec1be": "be73d65bbc0533d777887506ef7a0364",
".git/objects/5d/5dd9571a1a08149f92c7f4dc47870017bdc42f": "514c4652834083ffb1f31a3ac93c442f",
".git/objects/91/7a65087e515c3f79260d200add3e409469b8ea": "dfe27c61c68a52e7efd7e2949ddb9e3b",
".git/objects/54/ca9d6fc87c23fb170b503a9168475893938f1f": "4c0e8590b7115364968031b9c48a9e5d",
".git/objects/98/298c68defdc399e248032217669ad0e17850a3": "e6cd870bcdb557bfbf43c46f2bf979a0",
".git/objects/98/2f410b7587ba180f3e8fe85260e8b9dc53c9ca": "7064088218c05a051a8d29540871d33b",
".git/objects/53/0c7ceef7312ea1575c360d897f3630ea1311c9": "322b6d2b0cd48be11687da398e070fdf",
".git/objects/53/a17854be367f9e5c60d8975b539f0ea38b68c3": "c00746840910d65c10a2aeefe6ed4f49",
".git/objects/01/2ec751f7b27e9cdcacc8fb662e095f15dd666c": "7fa0a354a0628d83c161c1fbd8fb2b25",
".git/objects/bf/19a972b5066e5db643e4955ab744e0594cfbfd": "fa0a4dcae63806d26b8f5532f1db023c",
".git/objects/d3/df9c9dd07b0261a69f3ea8add64a3a48645cf9": "cc6175c9977abb558a3d18d8c30feadd",
".git/objects/d4/11c360193ccdfd1a26c900fb00a1f933b39431": "8e21fc7577499c7e262e9ca2a8a9bd5a",
".git/objects/b8/64f416a5140d0ac24cf8ebe387cb7b0f42b6c9": "4ffaef2d0791583dc715355e8863eaea",
".git/objects/dd/7cc025640767b67e5395fa05ea22e73e3eedbb": "d5055a6d7af0cb6792fd0fbedc71654e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d4e95c6d7b0911563e0794d2e92673ab983e74": "d53b551aa0c54346005aa7836332b4d9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ff/0cab93f43ea672401e1b5fb0c949df2d7217e0": "d05189bdd04bd17cf32232d9c4737f68",
".git/objects/e9/96b28dd1eda7419a13d6d07195c444e246a7f2": "16c6af3ffd3acc5f0b04462713b7071a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/751db11c10db2c44bb418477a3db9bd83523a3": "1ad75420cbd32f79be6449e950f19d79",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/6ac46cf69c8b615fd60208e423eef10ec74914": "31d376c590a6a81ef1143456c0b2f877",
".git/objects/24/92db7076672f21d645822bc95d35bcc835c315": "1b0d814d06e345792617a7e747e3a1e5",
".git/objects/8d/e3337aa058b460942067eb0f31640618930cf7": "3385ec80dec2db74eacfefa95aa6d6a3",
".git/objects/25/2bb1bec8a972452aa5d4b36a2f5987db003656": "b8e2634e4197dc11fa8f8fbcadc6d1b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbce2b13f6fe64230e2dd2c7286c99df",
".git/logs/refs/heads/main": "dbce2b13f6fe64230e2dd2c7286c99df",
".git/logs/refs/remotes/origin/HEAD": "dbce2b13f6fe64230e2dd2c7286c99df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "0c43c00c0a187d1ddb2b579cf3ada65c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "ffded28449994f62930e106ce46e882e",
".git/packed-refs": "8fb6f35f4fdd4683497e1fe5c4097ab5",
".git/COMMIT_EDITMSG": "b003ca1a167deee01832f1cc9e18aa6c",
".git/FETCH_HEAD": "a00beb054ed15fe22cd4204ddf6af7df",
"fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "8d60b1505543c1f994912f792d2e8cfb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
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
