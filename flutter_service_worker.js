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
"main.dart.js": "429dac4f474191e058b5edf580b35fea",
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
"index.html": "d7cf8333378d45ccd84eb88f21de2d4d",
"/": "d7cf8333378d45ccd84eb88f21de2d4d",
"manifest.json": "e414f2b57a29e637ccb5aed47bca123d",
"sqflite_sw.js": "4fdd89a73707c2fe970ba46b4f9eea1c",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"Archive.zip": "e2d51831d5efa2a7e2d205bbb5d8705f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "dd438cf933e2eaf55a3f0ff6e4aff502",
".git/refs/remotes/origin/main": "8fcae4fed0b9898bb54045e8c3463aa4",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/057762a69c6df7b8627066b6b784f99c983c06": "1082f8fb7da91fbaf767a831675700a6",
".git/objects/58/80c3841ab1f367cde1a2908c8a762558d8b776": "cc7c6bd396412e32cebb77e3eab51b54",
".git/objects/01/677918a2b282d5480cf080e8fe7f9c789e8096": "bd82ddb877559efdc76ab482e076bce6",
".git/objects/d6/d22b6a6147deca890520266356bcba357499f5": "0ae72545b85444b2de3f8f7d22e7baef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/78/e9b2e301817b7b05fc87484d77eae8b094b03a": "2004cd4d5b0b638afa2905115531290d",
".git/objects/65/6db66684354d3b5bca92e5c395e1ffcdf4a472": "2ff96512a6010bfd397902a11d325c79",
".git/objects/3c/b4ca8f579fffdc897d971e837b8e828952f07a": "d71c35702b6de90821a83ae7f96cfca5",
".git/objects/82/9d94e1ed30ef0d4c8a410a1a089991cfe77f44": "4e4762323ecca60f47303369fba96a3d",
".git/objects/e9/61a1b5634ef843546a0bc6cf70ebd2d55ae6cf": "ee989a4a3ca46cfed04b9ba998f6dac4",
".git/objects/e9/d818e31ded8d5a9ead78325eccffeb7312a1a1": "bd8b45f77f92325eb0a31e9191fb40eb",
".git/objects/43/0df7ab496792888f8f0e77560f6a7023095e30": "044dd41fc2cc317936003d1a70f63f51",
".git/objects/e7/1b7caa3542a2fb0a74f6e42e4251836ff44d42": "7fc4b9b5662de535a150b18105ece440",
".git/objects/e7/9bcc0847a2cfdc893e6dee55d77492cc4359f6": "93c953a782de58ce6ddf1e3ad4726842",
".git/objects/fd/e62334ce931a646ae0efba75734b3594e6c3b3": "a77bc3a3f42222edb14f58ac83951d2b",
".git/objects/fd/2a82e4c290a66e70e9421af2812054e8837013": "8fe9c24d06d0540de88c5e043729b124",
".git/objects/5b/0cf8a5aac5d96a64367c79cfae135d3774e6b2": "833ccbacba74e7d3a6fbe773bf732d09",
".git/objects/5b/350072e964c89d06a1b059109ab2f8de28b251": "cb72ed5a12cc03f79a866e9c2f342e87",
".git/objects/7a/f7e34e9d1f851e010c05cb66ae8d87f337acb2": "53123ca4481d42350b971de51ac581ae",
".git/objects/17/baf994f74f754c54593e6451395ecf57019393": "510ecb689c1ac9075c083eb4d6686315",
".git/objects/b0/98565bed791c8d16b568dcec9553ab7417f42c": "f308a4360339003c2b8f062dc6e9b9d5",
".git/objects/60/d070be7b9865865238ef861a50d7f0e3af168a": "1d9125fbb9d334869533eb6417430253",
".git/objects/74/90e27bc62f04dd9b40b61cc4a001f961486b8e": "a10b07e39c9e6ac4efab280a5a96fab1",
".git/objects/88/0dfcb904f41acefb2a175bc47e78f24be2ae4b": "7b6fb7214e7921af8789d93f34f1a1fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/64/0734404185a1a39b5a34340ba309ed0991cd87": "c503f327e0285bd05b88d93c7196b165",
".git/objects/36/f188739f20fd0e9e304c38533bcb0cc5d3b768": "104fbd0bca9a033dfed73e76482aa43a",
".git/objects/36/fc834ca7e83a16b84590d2a9f0e8ade8ec5636": "9f1c1a31116a12c7a78ef727514bcdef",
".git/objects/9d/12a6505a5a448e8633f982370747d96f4cd8c0": "41b917849004542177346c442dd93f7a",
".git/objects/4d/468245e8d53169bb9f7bcab70d43ff8fad90fb": "3955335cf153cadc4ea55d70a101c933",
".git/objects/f8/6744b11055c9bff02a308675dd17f77414c346": "614d9cbf40e2384a60efda70b4fdebe5",
".git/objects/b3/2c4f54cd524cf5a76531cf4e9cbca5aa1b13e4": "74eca5b09219141d2a0263fb46825572",
".git/objects/54/2bc430f2f51562f8cd8bb9e587564db83757a3": "eb6899dc7252a57f1ba7ed4176546db0",
".git/objects/cd/b6c04f277cac25f8cbd610434cbf743a880a1c": "0b360cbaeb11c4be7d404ea1fe161800",
".git/objects/a6/9f732b0fa0de6f5f061a93393cc04abeb2e05c": "070859e84f508dd8703e4eaf5b13c534",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/c99dde49eabf7a396af7b9e351462f40955123": "5fcc9addafe3f549ad28c7c28ca51697",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/f9338765cbd7043f07cb1a09c39a808047d19f": "b2d874d6b7ef5187c0708d2e12f56ad4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f54be988a21b75c107b5c8173ce6a126591337": "d6fcc17348c62027b1e18e6efe49f2ed",
".git/objects/ae/00a293dd72e3bbc738c8ac1ffef74b3b702ace": "946e91cb12614bef8cecb5257e9e6999",
".git/objects/ae/484eeb6686c58e077d1438c840ac982be33ef4": "9fdd57217f26982e0c19195cc4df9671",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ac/aa634de72a7b8a4b8222651f5f9cd422a0ce66": "c3cb018e25740a7357d6d8837ae294a8",
".git/objects/ef/4f721738a84e67863a916ab2ef77cf51688401": "d4a6054baf06e385cebd0fe04653ce90",
".git/objects/b5/e619ffb84ee102ad86aa9cb27f7973deb04a0b": "80b22a5edc50a90447865fbabe7405e1",
".git/objects/bc/9603d71e620f105e85160426a12d807ecadf26": "c53bcc117b6d435787a23f5e42f82e84",
".git/objects/28/f40f8d4463c6a69d233a8d5d1fc03352b93df6": "d064a380ae4723bc304d4867abc2a3e9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/e2/dc253eb48f0bc75db82989cbfd2e5aaef4688e": "74c5f1dfacc01011614929fb59313ecd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/06/5af759b5ae2138e1aae332ba8e0818607e65c2": "e2567dcb25d891f56604ecb79231ab1d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9b/f144ace11bd06158521994448354a9663424ca": "38576be0a3e85ae36818d4b2cfed7b2d",
".git/objects/d2/a890f71005a275fd460b7b28d3f302fd9eb00d": "a3850dd04d5c2a9f5e08825bfe841b31",
".git/objects/dc/93f469ba83e3907f2fb32a11ee4bc17eba2136": "19e6e0bb34ebcbe84a5ff0fad0931cb7",
".git/objects/f9/78e21b33a63d7213d6f1a9692fb62760965c83": "4cab31ede6c3459d079a640122844394",
".git/objects/27/1c5ec2c20e944129e6a3a5408d633e6612a4eb": "706ef55dd9fa9c348e07eceacded57df",
".git/objects/ed/e04281d274d920cec600afbe5364e74d0e3f03": "2ae7553e64af3ace610cab1f613e0c57",
".git/objects/15/8fd5579f7594c8289e401d3aee525a3b54cc2b": "f53e8c50d038c1134a7a63b63418e37d",
".git/objects/49/0ef950b4220d402a25287727171c402bf92cba": "9baa216b1546e3b29afbec96b69d590c",
".git/objects/d5/7276011f5fe8338d29afd08cbc1237bf95bbd4": "1a23fc8abe62f504853e53a52c0da44c",
".git/objects/4f/4b0b6a8ce20d41aaea4ffa052f645419526d76": "24f7ebc2e903262adf1df974705e1259",
".git/objects/39/78bb5ea5300aa9cc94eb1f8de7cc3ce76da937": "6429674b2c8b239240eb8859db935e20",
".git/objects/d8/28920f95e30cb0019ce5959cfc4a3fef3a0dc3": "7b3f1472ce4c8a51d3d98a6e15284a90",
".git/objects/76/eeea751653f6abaf669ce2ee5644b563bd832a": "5d1ab83d803ceae2ef37d7d4ad091cd1",
".git/objects/48/f31e48bb1dfe82be11e47eddb403df43fff563": "d850f10e21ee44bf1aff868013b40c2d",
".git/COMMIT_EDITMSG": "f4c5ebbfaaeeca9afe3bcc17500d07ad",
".git/logs/HEAD": "a809a8dcc2326ad02262b372dd795d9e",
".git/logs/refs/heads/main": "bb3e7434a71ce25f7b3d1b2b8dcca25b",
".git/logs/refs/remotes/origin/main": "718b502882aed1a1dbf7efb3debf006d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "e8d652aa41a31de52757e6a6c1dea15b",
".git/index": "12045b5c716bdb724b45f1d94ef02902"};
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
