'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "353c1299f62081c18bc92f30ad364618",
"index.html": "4181d6e5f2faa26f896e1f793679a4e1",
"/": "4181d6e5f2faa26f896e1f793679a4e1",
"main.dart.js": "15b95de027a072d304c785a56eed8be9",
"Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"node_modules/destroy/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/destroy/index.js": "f16c90b1ea929c508f3be515a6a141f4",
"node_modules/destroy/README.md": "1781169baa24e5f44c7ad740f3d71df9",
"node_modules/destroy/package.json": "7a82dc9c7d0afe025c431f46ee1667d7",
"node_modules/.bin/mime": "d028184965062ef86cdcfe246753ef27",
"node_modules/toidentifier/LICENSE": "1a261071a044d02eb6f2bb47f51a3502",
"node_modules/toidentifier/index.js": "279de9b706fd68a63d92cb4bc364c772",
"node_modules/toidentifier/README.md": "fd789409142ed442ccec71e57b173376",
"node_modules/toidentifier/package.json": "d5651db9a48212c948ff5ccff97db20a",
"node_modules/content-type/LICENSE": "f4b767f006864f81a4901347fe4efdab",
"node_modules/content-type/HISTORY.md": "bf5a18f36e5be9cfb5614c0a154d6de9",
"node_modules/content-type/index.js": "44890ac38a6cffb3d6efb5652bfce578",
"node_modules/content-type/README.md": "7dd3c3a8fa71a08b63a4cc4c26b67fc4",
"node_modules/content-type/package.json": "30c7dd532e8319d1ed60092df8a754ca",
"node_modules/ms/license.md": "fd56fd5f1860961dfa92d313167c37a6",
"node_modules/ms/index.js": "ae157c9a8e70902576c2d8a06dbcde32",
"node_modules/ms/readme.md": "90e631c6afccde3ed414d3d230734864",
"node_modules/ms/package.json": "a463874235116f46caf8171753ad6a21",
"node_modules/content-disposition/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/content-disposition/HISTORY.md": "2fa841b0727d6434c26332a4ea07838b",
"node_modules/content-disposition/index.js": "30daea1ccaec65c195c624437fd7ea20",
"node_modules/content-disposition/README.md": "64d104d47f8de5e7776a6098f29db130",
"node_modules/content-disposition/package.json": "65add767ad384d73c9ff09918113c497",
"node_modules/methods/LICENSE": "c16a7dd9f946172f07086576d135d9d3",
"node_modules/methods/HISTORY.md": "0355fb5e6662ffcdf19e5f736882f34d",
"node_modules/methods/index.js": "17d4a4ba378c1fd10dcfd061439f7ea0",
"node_modules/methods/README.md": "882a4df2d7dc4b518fd3bb8c85e1c652",
"node_modules/methods/package.json": "9ca4600c2e94469de9343051ee3f78b1",
"node_modules/proxy-addr/LICENSE": "6e8686b7b13dd7ac8733645a81842c4a",
"node_modules/proxy-addr/HISTORY.md": "31445ae0eb7987b5487ca79f48114def",
"node_modules/proxy-addr/index.js": "0ec33ea2ccb3a107c666a0b311f0e28e",
"node_modules/proxy-addr/README.md": "4bc9aa46f3afb34d0ab0c82cf244a21b",
"node_modules/proxy-addr/package.json": "787d9fac146c7b77cc3f7a8c156a8be9",
"node_modules/depd/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/depd/History.md": "bbe1469d587d6d7e5e5deb717e9aa31a",
"node_modules/depd/index.js": "fc83ac89ac144234a74ca42769f0c4c6",
"node_modules/depd/Readme.md": "7bdff4ed8d628fd33365a6314fa7a7d8",
"node_modules/depd/package.json": "17d698deaf91fbb66e67a827ae6715e1",
"node_modules/depd/lib/compat/callsite-tostring.js": "6b7b6b5b14ad2be86acce3d6bb4a64e6",
"node_modules/depd/lib/compat/index.js": "863b7f4fae75ce11af3ce68aa7a4e962",
"node_modules/depd/lib/compat/event-listener-count.js": "12b1ddab08bda110a232d7e724fe162c",
"node_modules/depd/lib/browser/index.js": "5b958f39df1df069739ccd3765bad0de",
"node_modules/range-parser/LICENSE": "d4246fb961a4f121eef5ffca47f0b010",
"node_modules/range-parser/HISTORY.md": "6fdb98eb13b0d3dd31f0ff795be6a52b",
"node_modules/range-parser/index.js": "e72576333d27d1c9b3901c4b9e597f27",
"node_modules/range-parser/README.md": "f4b241a4d3c3eac1d542759d73164083",
"node_modules/range-parser/package.json": "0041278471a7642b8f770256504cc45b",
"node_modules/bytes/LICENSE": "013e95467eddb048f19a6f5b42820f86",
"node_modules/bytes/History.md": "cdb58f28139f5c1c229d1bce042250da",
"node_modules/bytes/index.js": "a317b58c1896b9b1d2124bfb8886484d",
"node_modules/bytes/Readme.md": "80be7bb75739cf008ed7400efd5b0b0d",
"node_modules/bytes/package.json": "80b97fd060c567466ca74ee5f4bc9fd8",
"node_modules/express/LICENSE": "5513c00a5c36cd361da863dd9aa8875d",
"node_modules/express/History.md": "7096ebc3aca3b6bb3b8a2f6766915631",
"node_modules/express/index.js": "866e37a4d9fb8799d5415d32ac413465",
"node_modules/express/Readme.md": "5012106533bf4472fcbaf4dc77912023",
"node_modules/express/package.json": "9890263d0f7e8a2a994718486a21f678",
"node_modules/express/lib/middleware/query.js": "a6e9a6c92c5bfdd9d7b08b267a3b1d44",
"node_modules/express/lib/middleware/init.js": "3711ae7ea348d39a41c5139a63e89c12",
"node_modules/express/lib/response.js": "b5a9b48bef9b072a350d0b8737d54bbf",
"node_modules/express/lib/request.js": "4f3a3b078531e551c6784f08a7ea02e4",
"node_modules/express/lib/express.js": "d467bc485eddf6d38278bc6b1dc16389",
"node_modules/express/lib/utils.js": "23899065325f9a3b0501bccc5231be8d",
"node_modules/express/lib/view.js": "91c7455190f39cc30d0c5d4627d701fd",
"node_modules/express/lib/application.js": "569b549e619807c5cd58ab89d7e81109",
"node_modules/express/lib/router/route.js": "be5fcf9a22c2524e813c9a79effb4610",
"node_modules/express/lib/router/index.js": "c11694deadcecb691f6860a530cc7472",
"node_modules/express/lib/router/layer.js": "c6e16965ef05cc02cfee78022496abab",
"node_modules/encodeurl/LICENSE": "272621efa0ff4f18a73221e49ab60654",
"node_modules/encodeurl/HISTORY.md": "6af548dfa20004d203a20ca28f0ded82",
"node_modules/encodeurl/index.js": "b90cf71779f72e14be703a4e494e968c",
"node_modules/encodeurl/README.md": "927f12b955e3abfe907852d1ab957002",
"node_modules/encodeurl/package.json": "25d15869b16e9e5d22a0baeaa8b45f88",
"node_modules/merge-descriptors/LICENSE": "aaf57ba8c5c9bf256fea7e943991a81a",
"node_modules/merge-descriptors/HISTORY.md": "ed8bad35fde048c49302f3138bc4ec7b",
"node_modules/merge-descriptors/index.js": "b4d3859e603602c87a45682862055af0",
"node_modules/merge-descriptors/README.md": "92a3bcc5f7e8a33de24b60bd6ca5c33f",
"node_modules/merge-descriptors/package.json": "9648a1889c3c4154235aa46e4a743618",
"node_modules/array-flatten/LICENSE": "44088ba57cb871a58add36ce51b8de08",
"node_modules/array-flatten/README.md": "328fdaf1ee65869341567f4fb6716e02",
"node_modules/array-flatten/package.json": "4f1838dbcd4be1e558b29fbf4cc984c2",
"node_modules/array-flatten/array-flatten.js": "4b17fa06c54846b686b8b799e9dd253a",
"node_modules/safe-buffer/LICENSE": "badd5e91c737e7ffdf10b40c1f907761",
"node_modules/safe-buffer/index.js": "b1622ff2944ba3f13a1cf6fbcf0f9e3f",
"node_modules/safe-buffer/README.md": "570381ffb15269fa623a0b75e67eb63a",
"node_modules/safe-buffer/package.json": "d909f7dbf4f6448f5ce872ff354aeae2",
"node_modules/safe-buffer/index.d.ts": "372fa012d04e945ab97c27e000f8df78",
"node_modules/ee-first/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/ee-first/index.js": "e7a3f46d4b903c9f8a025cb753b1a538",
"node_modules/ee-first/README.md": "8591e9d47fb8574f4a99ac3de242b3cc",
"node_modules/ee-first/package.json": "94a52c880a0aa9ec316d5459dfd0e66d",
"node_modules/inherits/LICENSE": "5b2ef2247af6d355ae9d9f988092d470",
"node_modules/inherits/inherits_browser.js": "7c26fc24b695f2afbc284bbd5f64d6a4",
"node_modules/inherits/README.md": "de7eab94959b05c9765cad499ab092db",
"node_modules/inherits/package.json": "31cf7880986abad9052cb23fd6efc08c",
"node_modules/inherits/inherits.js": "09b210610125b162700734fb93dc892c",
"node_modules/iconv-lite/encodings/dbcs-data.js": "e56d3d57df85dc818087254a8a16a699",
"node_modules/iconv-lite/encodings/tables/cp949.json": "d99876b274d44fc737c8495ba36b3784",
"node_modules/iconv-lite/encodings/tables/shiftjis.json": "6d542ffdf3409fd2e8bd01247777b6f7",
"node_modules/iconv-lite/encodings/tables/gbk-added.json": "ef78bd5dab20daf8c2bb6c34e5b66bff",
"node_modules/iconv-lite/encodings/tables/gb18030-ranges.json": "4fbec8c88acbb1ef60a5aebf9e8e719b",
"node_modules/iconv-lite/encodings/tables/cp936.json": "9eae47acf0b20461508fdc4506bd905e",
"node_modules/iconv-lite/encodings/tables/big5-added.json": "f29eda07f68f9e3f234638d42956f9ab",
"node_modules/iconv-lite/encodings/tables/eucjp.json": "98d5cf16fc6b791a0b2c829339766d16",
"node_modules/iconv-lite/encodings/tables/cp950.json": "15d09686ce9e9ba80b3014d3161e2e7e",
"node_modules/iconv-lite/encodings/dbcs-codec.js": "6decbcdfe2ba5ed5c3a75466ce94cdfc",
"node_modules/iconv-lite/encodings/internal.js": "701b0858fb6fa82101365d81d7406f04",
"node_modules/iconv-lite/encodings/index.js": "7a13671a7fbc74c463377b3cda863503",
"node_modules/iconv-lite/encodings/utf7.js": "cf6746c76930fe21a716ef03d700b208",
"node_modules/iconv-lite/encodings/sbcs-data.js": "336be4eda323a03b88d06985f15c3524",
"node_modules/iconv-lite/encodings/sbcs-codec.js": "6f257833a4d930eaa9af9225faef16b8",
"node_modules/iconv-lite/encodings/utf16.js": "7ad12158af65189b85796de64923f031",
"node_modules/iconv-lite/encodings/sbcs-data-generated.js": "78c27d9268d36644ac77b82b956f5b1f",
"node_modules/iconv-lite/LICENSE": "f942263d98f0d75e0e0101884e86261d",
"node_modules/iconv-lite/Changelog.md": "11f7c1fc239799ded47d06c8abd91b9b",
"node_modules/iconv-lite/README.md": "011c8d9193893a9aa6ab12469e808399",
"node_modules/iconv-lite/package.json": "c2c4acb285c834c3723ee3cd4ba6f4f2",
"node_modules/iconv-lite/lib/index.js": "c1da5b53fa60006bc973dc785bed2ca6",
"node_modules/iconv-lite/lib/streams.js": "8628e41438801c5bfdabf3be9b1ff548",
"node_modules/iconv-lite/lib/extend-node.js": "24ac97737522b61c26b830d350cfcaea",
"node_modules/iconv-lite/lib/bom-handling.js": "7b3d4519f05bf0cc8d70a4d950c72c55",
"node_modules/iconv-lite/lib/index.d.ts": "083c701ad23d900ab019a2e094158898",
"node_modules/fresh/LICENSE": "373c2cf0978b37e434394a43b4cbbdb4",
"node_modules/fresh/HISTORY.md": "47e08786429a2f1a69b5d251e51a9d16",
"node_modules/fresh/index.js": "57dbafb6c310ce7063690f5688acedd5",
"node_modules/fresh/README.md": "2409eba75b77a1b1258045cd372b4b6e",
"node_modules/fresh/package.json": "70c8b095d84cb3e18a90c850a2bc4410",
"node_modules/qs/LICENSE": "d5c7c6dc45a33a0a9620ed81315672d7",
"node_modules/qs/test/stringify.js": "7270ccf1e92b2ecd35b92d526e12526b",
"node_modules/qs/test/index.js": "16c8338cc83b85a875270f50ac1e4ed6",
"node_modules/qs/test/parse.js": "fe15b5909c82c908b1b92d89d9695aae",
"node_modules/qs/test/utils.js": "6a378244218f385cdd20d6dc3b49b567",
"node_modules/qs/CHANGELOG.md": "cccf4ef4f2c9ef63008645c88cb73f82",
"node_modules/qs/dist/qs.js": "61970fed53534892319f5d11d9ea3281",
"node_modules/qs/README.md": "0b7348e09324003311fba7c55e710f3c",
"node_modules/qs/package.json": "23eafc6edc04c2ede85805376dc03d49",
"node_modules/qs/lib/stringify.js": "98adbcd903baa8d38e70aa4f7384fc9f",
"node_modules/qs/lib/index.js": "1459a9952f6b500d24818bb6e3e37368",
"node_modules/qs/lib/parse.js": "e8d7396234ffb4c2772844eb86e52ce5",
"node_modules/qs/lib/utils.js": "9231894a95b9eb149920c7711a1ba6ba",
"node_modules/qs/lib/formats.js": "547b7a8b6b81236db977dcd1a548c9e8",
"node_modules/path-to-regexp/LICENSE": "44088ba57cb871a58add36ce51b8de08",
"node_modules/path-to-regexp/History.md": "9f6ae1a279c6994a01a2ec44294cb607",
"node_modules/path-to-regexp/index.js": "cb184302e8d26369e9c0392fa4c8d0cb",
"node_modules/path-to-regexp/Readme.md": "ec68cdeaf09933d8bf7a962c261aed81",
"node_modules/path-to-regexp/package.json": "c216fcb0cb8999d829960509650e5767",
"node_modules/safer-buffer/LICENSE": "3baebc2a17b8f5bff04882cd0dc0f76e",
"node_modules/safer-buffer/Porting-Buffer.md": "fcaa030e67b1d41e34571b602a343f72",
"node_modules/safer-buffer/safer.js": "b548fa7365e81d472250949a6b4ccc69",
"node_modules/safer-buffer/Readme.md": "b65f4b9724ff4c546ee7d4820e3c91dc",
"node_modules/safer-buffer/tests.js": "373f9327325c35bb109038dc3b8e5a14",
"node_modules/safer-buffer/package.json": "0892f8c4dd3a38cba2a937be01f529b3",
"node_modules/safer-buffer/dangerous.js": "7557e84f2db56a79916613053f9297d6",
"node_modules/mime-types/LICENSE": "bf1f9ad1e2e1d507aef4883fff7103de",
"node_modules/mime-types/HISTORY.md": "b83f2792634c2ba332a7d8cd7cbe2617",
"node_modules/mime-types/index.js": "bf015bb6811afc5c98e3e5f7072fdc79",
"node_modules/mime-types/README.md": "e146eb2a68b2f5c203928896269f995c",
"node_modules/mime-types/package.json": "13e4f1553abffb32e9ce4f18ba3b8cac",
"node_modules/type-is/LICENSE": "0afd201e48c7d095454eed4ac1184e40",
"node_modules/type-is/HISTORY.md": "6025a974d281159ed5421301b58fd126",
"node_modules/type-is/index.js": "f9aa3afdc332adae59aa21d31090582d",
"node_modules/type-is/README.md": "2683527a9b2faadd364a0eab9cc00935",
"node_modules/type-is/package.json": "2f2724b700aadfa76c39083472a37ddb",
"node_modules/vary/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/vary/HISTORY.md": "01fb6033779e4f75d95e327672ebd572",
"node_modules/vary/index.js": "8217c2d942ee5bf6866c92662515d975",
"node_modules/vary/README.md": "d7add56e89e476e09f62ad4a926f1f7a",
"node_modules/vary/package.json": "e5dd96c18c627c3e5ec890558c6c9843",
"node_modules/unpipe/LICENSE": "934ab86a8ab081ea0326add08d550739",
"node_modules/unpipe/HISTORY.md": "3e523df8ac60d8c162c57521955bda8c",
"node_modules/unpipe/index.js": "377f0c4bddbbd7e73b32a53e687df342",
"node_modules/unpipe/README.md": "b242ac151ac9750bf7ca20fe02dcf7b0",
"node_modules/unpipe/package.json": "f1e5a4412b0af2e3ec11227df35215a8",
"node_modules/raw-body/LICENSE": "c970d30155ebbdb1903e6de8c0666e18",
"node_modules/raw-body/HISTORY.md": "941e8b9351551d9635b1f58eed0ea138",
"node_modules/raw-body/index.js": "baf003bb8c6c6fc1cffe0d4afe787e21",
"node_modules/raw-body/README.md": "f0bbd92a99e34ac64ba86f1853eec8e0",
"node_modules/raw-body/package.json": "ed2e444299563341317d8708394c9bd0",
"node_modules/raw-body/index.d.ts": "ee9c2c994cbbc6d6e96d6460488ae4f1",
"node_modules/http-errors/LICENSE": "607209623abfcc77b9098f71a0ef52f9",
"node_modules/http-errors/HISTORY.md": "54bff0d52f53f60163559b7b466172b5",
"node_modules/http-errors/index.js": "1eb9f6e0a67d3a37f02d9f98cf9163cc",
"node_modules/http-errors/README.md": "ca084980372754c3b5251fd2172af981",
"node_modules/http-errors/package.json": "0a5650110729426f0b7372cf2eea604b",
"node_modules/accepts/LICENSE": "bf1f9ad1e2e1d507aef4883fff7103de",
"node_modules/accepts/HISTORY.md": "a5ab659ea52c189a52686b7b2d0aaa2e",
"node_modules/accepts/index.js": "4fe4d2c90a2fd19d6e97443a7d24f815",
"node_modules/accepts/README.md": "9e6a0252de997173ebb7a3ff44a785b8",
"node_modules/accepts/package.json": "26ae7b6b3a590e19fba5faa0ecb3e3ab",
"node_modules/cookie-signature/History.md": "dc394515ce0ad9e572acab06c54847ca",
"node_modules/cookie-signature/index.js": "a9634aa95d321b9a6d90bec5d3d23937",
"node_modules/cookie-signature/Readme.md": "57ae8b42de3dd0c1f22d5f4cf191e15a",
"node_modules/cookie-signature/package.json": "c8c7862e81043c1429e40902e542ccc2",
"node_modules/forwarded/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/forwarded/HISTORY.md": "ba854f852a81318ea0356f4286e20dab",
"node_modules/forwarded/index.js": "485e8b30d7f9b0394b2ac54ed51ddb06",
"node_modules/forwarded/README.md": "5e737f1f3045f9875119cf34bf28fb03",
"node_modules/forwarded/package.json": "54de82f66e729555c4ca9f8407931c63",
"node_modules/negotiator/LICENSE": "6417a862a5e35c17c904d9dda2cbd499",
"node_modules/negotiator/HISTORY.md": "9286f41017a183d586addf8609bcb2bd",
"node_modules/negotiator/index.js": "9ed619fb70c6bc360f3908dd90a79046",
"node_modules/negotiator/README.md": "2b89b1a3e31c185b5cea428ebd5569d9",
"node_modules/negotiator/package.json": "54c4585290a47fdc497726629bd58c44",
"node_modules/negotiator/lib/encoding.js": "e03dd226452c58ce083ab4468851f0b1",
"node_modules/negotiator/lib/language.js": "4538455326d31cc086bb901f7e3b83fc",
"node_modules/negotiator/lib/mediaType.js": "0fdaa0ed7cab2ce5fcbd7b361a85892c",
"node_modules/negotiator/lib/charset.js": "7977a65b1542fa8ce9650e58607f4b07",
"node_modules/body-parser/LICENSE": "0afd201e48c7d095454eed4ac1184e40",
"node_modules/body-parser/HISTORY.md": "fdc24998caf881fb588b5dd9c564fc33",
"node_modules/body-parser/index.js": "7b203b1ba7da7e9e3824e8c0c1708ea8",
"node_modules/body-parser/README.md": "0b6a422b2b1b220d6f54adea76b538d5",
"node_modules/body-parser/package.json": "1d420f3f299aea6733b5fa4c5ad821e7",
"node_modules/body-parser/lib/types/raw.js": "acb38e4fe575afaf8d1a257e47c6e362",
"node_modules/body-parser/lib/types/urlencoded.js": "906a833480ce8841bfa5aeb95b5c085f",
"node_modules/body-parser/lib/types/json.js": "ef0d64e8db843813870c15cd5eb1efb3",
"node_modules/body-parser/lib/types/text.js": "beb4ada09306f8d6435566d9e88076d3",
"node_modules/body-parser/lib/read.js": "046366a27279a7d65e7ae694823e76bc",
"node_modules/utils-merge/LICENSE": "1cf0906082187f374cb9a63c54eb782c",
"node_modules/utils-merge/index.js": "20d03f8bf4486091c44f17a97cbb6c24",
"node_modules/utils-merge/README.md": "9e6a49a7623199d699f595777116296f",
"node_modules/utils-merge/package.json": "165876ab1322712a1e74c2e714e078a4",
"node_modules/serve-static/LICENSE": "27b1707520b14d0bc890f4e75cd387b0",
"node_modules/serve-static/HISTORY.md": "42a409931684070e79db555331ce7178",
"node_modules/serve-static/index.js": "3707f8d6ee2c6d88ffab23c0c4f1509b",
"node_modules/serve-static/README.md": "82cd51b8e01130ac88fe4cd9c9ea972d",
"node_modules/serve-static/package.json": "db183a4f4bc740b2ba54aa4b8d3f506f",
"node_modules/mime/LICENSE": "8e8ea2ad138ce468f8570a0edbadea65",
"node_modules/mime/CHANGELOG.md": "90baac6a6f8d7e4a7dc0b15bb7a6ce65",
"node_modules/mime/types.json": "4ac089e4f393ed139cb2ee55726c66a5",
"node_modules/mime/mime.js": "2930e6caad95dfad928d76fc1eb2e003",
"node_modules/mime/README.md": "72cfb57e293629e482629af74f4a92fd",
"node_modules/mime/package.json": "6f4b77d8c1dc37a8318d5ba1527e6513",
"node_modules/mime/cli.js": "d028184965062ef86cdcfe246753ef27",
"node_modules/mime/src/test.js": "e79c602593f0f279e1cb2d8d4a3ce3bf",
"node_modules/mime/src/build.js": "daf164e6d251c818b190db781f845776",
"node_modules/ipaddr.js/LICENSE": "88f60a4b6e44cb849b5d907a7664c0ef",
"node_modules/ipaddr.js/README.md": "6782f9a6accf829084c303895a2c26a9",
"node_modules/ipaddr.js/ipaddr.min.js": "25cbb7a40252e3e2004437b72e1eaee5",
"node_modules/ipaddr.js/package.json": "f5f6ed58c665eb36c69a8592672adcd2",
"node_modules/ipaddr.js/lib/ipaddr.js": "faea7806284886c6c63a41c247008fbd",
"node_modules/ipaddr.js/lib/ipaddr.js.d.ts": "69fe76ecec2eb98cd45f17ec7dc7393b",
"node_modules/cookie/LICENSE": "bc85b43b6f963e8ab3f88e63628448ca",
"node_modules/cookie/HISTORY.md": "91a6932f361ba4272eb4c69bade2094a",
"node_modules/cookie/index.js": "7c823649d28959ab6a327bb7a75251a6",
"node_modules/cookie/README.md": "116384f13856d5718b1d4313494dfda9",
"node_modules/cookie/package.json": "a4e965edb5651b80ef67cb4dca47c9fc",
"node_modules/escape-html/LICENSE": "f8746101546eeb9e4f6de64bb8bdf595",
"node_modules/escape-html/index.js": "0c95e46d0f08bd96b93cfbea66888afc",
"node_modules/escape-html/Readme.md": "79c73d9ec4ca382fa642702f356b4046",
"node_modules/escape-html/package.json": "946a8ea16b4c77b2c3b15252db271c8b",
"node_modules/statuses/LICENSE": "36e2bc837ce69a98cc33a9e140d457e5",
"node_modules/statuses/HISTORY.md": "59a03d6bdd1d4de4888fae4450f8bd61",
"node_modules/statuses/index.js": "93ef82ab57885976022f1b594741dc19",
"node_modules/statuses/README.md": "b24bdc13faa92fbcf1fe2cf6a63d098a",
"node_modules/statuses/codes.json": "24a60aa6f42d759204b75dc8ecc0ecf4",
"node_modules/statuses/package.json": "7f2a0f779762c816d8ff2528eefbb566",
"node_modules/parseurl/LICENSE": "e7842ed4f188e53e53c3e8d9c4807e89",
"node_modules/parseurl/HISTORY.md": "0f7f38fa8d79e3bf70557ef4a655d412",
"node_modules/parseurl/index.js": "3750351b6b1aa7f3e65d5499ea45006e",
"node_modules/parseurl/README.md": "59555697a7f93937af7f76fe5326fa0d",
"node_modules/parseurl/package.json": "90cef3e8fc3549e80d7512e4209007d1",
"node_modules/etag/LICENSE": "6e8686b7b13dd7ac8733645a81842c4a",
"node_modules/etag/HISTORY.md": "959d386c253288fd5dd2dc4765efa273",
"node_modules/etag/index.js": "8eaca1927e67861a7682b7b2c0906ef1",
"node_modules/etag/README.md": "89c2c0f9f52f551591bfc484e9e4a5bb",
"node_modules/etag/package.json": "80b7d2ff69f1a28e4079a33a7ef7ff5e",
"node_modules/send/LICENSE": "df2b0938eba0709b77ac937e2d552b7a",
"node_modules/send/HISTORY.md": "4f5680a2dbc10cfc2dd07af3169bf474",
"node_modules/send/node_modules/ms/license.md": "fd56fd5f1860961dfa92d313167c37a6",
"node_modules/send/node_modules/ms/index.js": "52620b13382ca384cbe89011c4b16460",
"node_modules/send/node_modules/ms/readme.md": "b68b70253368a0c383cd67171269fb00",
"node_modules/send/node_modules/ms/package.json": "b5135f12caddee55fae2251ddd81bc49",
"node_modules/send/index.js": "edf8ff5c77445e2bd6e21cfa4bf6deab",
"node_modules/send/README.md": "5793eb6b10ef0df065e01c8a0e5c35ba",
"node_modules/send/package.json": "7c7e7ad039472e19d4e66777fa83f17f",
"node_modules/finalhandler/LICENSE": "b506956e5cbfbe0d04f8a5c40107ec89",
"node_modules/finalhandler/HISTORY.md": "307cefb319b745bc613eefb9efa80e5b",
"node_modules/finalhandler/index.js": "a3444524d4b81aeec8b0be8b54cefd24",
"node_modules/finalhandler/README.md": "8358f10f677962dbb488edd7d1019aa7",
"node_modules/finalhandler/package.json": "8f605b47e3c5afaf72a9d2af42843053",
"node_modules/on-finished/LICENSE": "1b1f7f9cec194121fdf616b971df7a7b",
"node_modules/on-finished/HISTORY.md": "58ca467c6ca386064f1d5832c9c03b95",
"node_modules/on-finished/index.js": "befdf51b0f78ec7b5e61fe648aa9df75",
"node_modules/on-finished/README.md": "a3c532cc93a36f95dc4f19a0ecce50df",
"node_modules/on-finished/package.json": "4ad8736586b33b7960a39cce810222b8",
"node_modules/debug/LICENSE": "ddd815a475e7338b0be7a14d8ee35a99",
"node_modules/debug/CHANGELOG.md": "504a70c7eb9eba0c4b26965cf4d252c6",
"node_modules/debug/Makefile": "f8739cab4ae015ee84820716a8ac193a",
"node_modules/debug/README.md": "03694893d682191b3c893701ba6f4a55",
"node_modules/debug/component.json": "510af4d67a35446e6dccea1429399c3a",
"node_modules/debug/node.js": "79f3814f32362c1c6f9dbb8a1e3b01bf",
"node_modules/debug/package.json": "b7d3e011c91384bd06ccecc764a09cb1",
"node_modules/debug/karma.conf.js": "06f3babbdc43c6c4dd1493b6c1af32e2",
"node_modules/debug/src/index.js": "dd13897ea2eed92695bb7e4e744a9148",
"node_modules/debug/src/node.js": "25807a97fbb1fcc42a013abc7d7768c4",
"node_modules/debug/src/browser.js": "62cfee6d6dd5ffec5d3ed35073791aec",
"node_modules/debug/src/inspector-log.js": "b22697b673c7c3586f22ae0206258fde",
"node_modules/debug/src/debug.js": "74bdccf347345d27fe8a4ac3add99c60",
"node_modules/media-typer/LICENSE": "c6e0ce1e688c5ff16db06b7259e9cd20",
"node_modules/media-typer/HISTORY.md": "370be51f8776b7e79b16228f7dc6762a",
"node_modules/media-typer/index.js": "ef1845377cbbf76edd411a370738ed2b",
"node_modules/media-typer/README.md": "6e254e8ccc8ce7eaf9cdd8e5852d7bdf",
"node_modules/media-typer/package.json": "979791b27db58d8d8dee6fbdfd3a5f38",
"node_modules/mime-db/db.json": "d419d80c8488a8a5ec0b8874f09616a0",
"node_modules/mime-db/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/mime-db/HISTORY.md": "4bbaacbd40e0d378fc36ab72a8ba2cb1",
"node_modules/mime-db/index.js": "a3e41e93954b3742ed84d3050d6038cf",
"node_modules/mime-db/README.md": "494ba40453ea80540d9aa16843e3129a",
"node_modules/mime-db/package.json": "4735aad4bb8426e2310864ea292a6221",
"node_modules/setprototypeof/LICENSE": "4846f1626304c2c0f806a539bbc7d54a",
"node_modules/setprototypeof/test/index.js": "057b874f30e15981324966ff9294dbe5",
"node_modules/setprototypeof/index.js": "dd15d377665805ff7251e0a0f52fb837",
"node_modules/setprototypeof/README.md": "5fffc64ea56408057a5ccd7f84f8b050",
"node_modules/setprototypeof/package.json": "ed7e9697a7ec091386b307a87d6b7ce7",
"node_modules/setprototypeof/index.d.ts": "9b4107177bcdb4f9438d31bf446f629f",
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
".git/objects/95/0c886a1d95cce1b5751a25898cbdf713f9e770": "7b8a75d8ad65ead3732d7a8354b1881e",
".git/objects/92/ac63919512626ac2d5d5bb85ccf5b08d2b3af7": "6f9aa33efa58fbc5a378fae321a6be2d",
".git/objects/66/56575c3818eb541d76b3af460f2b8c9dd18eb3": "2cbc35821848d0f09395069dd857e8b8",
".git/objects/50/ff75147d5cd0fdd65cd792e68e6a08c67da7cc": "58e64a6edf5ba1d4fdce692c5044e14b",
".git/objects/3b/3e58e80c0646161f404a41c49d9f0bda501ddb": "0261f3e2a6d3667253669f7be0382c4c",
".git/objects/03/0dbb4a8e20f0fd526f40eac1ac4f96bf2fcab2": "dfa56a20a77bea1c5e425db1d431bd94",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/eda2463a24cf95e0709cc7dc3d638cddb2f3d2": "3fc9a4e5756e2a2e3043959367bcd362",
".git/objects/51/eb6102bfe8267a2b5c406ceaab317477439cd1": "3c7e03513a0e9b6964b0a598399dea8a",
".git/objects/67/045665db202cf951f839a5f3e73efdcfd45021": "fe95cfaa1761c7b5a74c9c8b06525f83",
".git/objects/94/8d292b732c24806f33b4a390cf2330c0252c72": "9e1741a80b7a0aaf4c8e49f032b032a8",
".git/objects/02/9086a364f1d84eed49b26518f0087deadc6467": "effa9ffede9844d72780b89fae738f31",
".git/objects/a5/d9b31682ac3eb4563f9b2f23f84fefb3f1cacc": "b4e79ed41057b55047de0a4ef7bd34bc",
".git/objects/ae/c5a2af8d66fa18bbf4e9de263058654e5c997c": "7101cad434fc1daf193bb00eb0bcfb56",
".git/objects/d8/17b09e242761f56ceaaabdb3ab3762b578ba38": "af43451715ab640817881042ed3b26f9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/609d1e31a7957b3369bff835c2da0b37060161": "18452b170d478e969a799322b0f5ddb4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/e56d1c9c2aa0e17a540246e36025e43d81299c": "1b9a09fd3c6d0264b4044b44aec25189",
".git/objects/e2/c5a87397160779c3ac1ece590fda8f855c0391": "7a1077f48f4476aaf18cd87bcb1efc86",
".git/objects/f4/aecaa13807634e26eeb9a6c4cc5f24a7e37481": "7a05eb9c11bdbe5edf93b78d498895f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/e458e0d9ad3c83e3eed3630c6f454e18917a7e": "90fc4199d12a55d0203fb104c03e3aea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/050fd2c06f538bb9fce35e9af966d2cf2a3223": "83c579582a38a57246c874f51632b570",
".git/objects/21/4b5baa1bcfb1fb21a1af56638c6b1c7baa951b": "c937e5ce4f5801693a726586a202dcc9",
".git/objects/72/3b44e754e3319332ee6ade2cdb120f952f9fd9": "e3481ff74d3bff22ca953ba55fc3102d",
".git/objects/72/17440cedb193f07448aadc9b73e1325841d469": "b3b268d223752d8a92788f0bf4f80814",
".git/objects/2f/bc3942d3364ba1f2679393b35e1d71367e6fef": "fb9535a323f9915b141bcc27cbcb3da4",
".git/objects/43/dbaab7e0434b01da1daf951000d6646501ea7d": "c8d4bceab82e63ad4a14e9cfe68047c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0721b04a156403f859c4bf11647a693b1ec1be": "be73d65bbc0533d777887506ef7a0364",
".git/objects/5d/9913b111fa66ab8eb7528e9129f637213751ee": "d4ef5672f22f01556a44257ffb6e227f",
".git/objects/5d/5dd9571a1a08149f92c7f4dc47870017bdc42f": "514c4652834083ffb1f31a3ac93c442f",
".git/objects/91/7a65087e515c3f79260d200add3e409469b8ea": "dfe27c61c68a52e7efd7e2949ddb9e3b",
".git/objects/3a/7a0cab7c84e92de225af3db83eef003ed1c9af": "dd0336dac6848fbe86961c025c04762d",
".git/objects/54/ca9d6fc87c23fb170b503a9168475893938f1f": "4c0e8590b7115364968031b9c48a9e5d",
".git/objects/98/298c68defdc399e248032217669ad0e17850a3": "e6cd870bcdb557bfbf43c46f2bf979a0",
".git/objects/98/2f410b7587ba180f3e8fe85260e8b9dc53c9ca": "7064088218c05a051a8d29540871d33b",
".git/objects/53/0c7ceef7312ea1575c360d897f3630ea1311c9": "322b6d2b0cd48be11687da398e070fdf",
".git/objects/53/a17854be367f9e5c60d8975b539f0ea38b68c3": "c00746840910d65c10a2aeefe6ed4f49",
".git/objects/30/939ccb7a2ce37f62c4f01a2004a94f9a54666c": "939b5d94c071980cb3731410fa310cd0",
".git/objects/01/2ec751f7b27e9cdcacc8fb662e095f15dd666c": "7fa0a354a0628d83c161c1fbd8fb2b25",
".git/objects/99/88e1b427af403b795c494cfa7c19af54dab0fc": "c5fad2763f139f1e6dc76691b1846fce",
".git/objects/55/d0262abbb79f7e3766103048136b902e962b92": "7685b01ff8811b409ae6fe140dca8d51",
".git/objects/63/377b1760b844cbb63fedc8d02b22e21cfe95b1": "515df4b3c2fd0592a7df019bf32354fd",
".git/objects/bf/19a972b5066e5db643e4955ab744e0594cfbfd": "fa0a4dcae63806d26b8f5532f1db023c",
".git/objects/d3/b5f375b59df68d967f76cd5ee782beebf79d0c": "af65af5d416a48b39b2695f02fc4f933",
".git/objects/d3/df9c9dd07b0261a69f3ea8add64a3a48645cf9": "cc6175c9977abb558a3d18d8c30feadd",
".git/objects/d4/11c360193ccdfd1a26c900fb00a1f933b39431": "8e21fc7577499c7e262e9ca2a8a9bd5a",
".git/objects/b8/64f416a5140d0ac24cf8ebe387cb7b0f42b6c9": "4ffaef2d0791583dc715355e8863eaea",
".git/objects/dd/7cc025640767b67e5395fa05ea22e73e3eedbb": "d5055a6d7af0cb6792fd0fbedc71654e",
".git/objects/aa/83c7d129a9f7283eee587790fbdab33f6fdc47": "96c665126b3372b9970a20c7d8117e3e",
".git/objects/b7/b186eae685a2941ab3e5439325aac9a61b4871": "80bc97b2688e43a36be905d0a0151bd6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d4e95c6d7b0911563e0794d2e92673ab983e74": "d53b551aa0c54346005aa7836332b4d9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ff/0cab93f43ea672401e1b5fb0c949df2d7217e0": "d05189bdd04bd17cf32232d9c4737f68",
".git/objects/e9/96b28dd1eda7419a13d6d07195c444e246a7f2": "16c6af3ffd3acc5f0b04462713b7071a",
".git/objects/cb/b486a67a94bfcb7ea1bfc55b8403fe724515cb": "178579eddfe3d2076051a007ed2744bb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9779cd979c8a8068cd0d16ccad6d8fd108aebb": "bd5f4a223a3f1c99346f5b0db4ff100e",
".git/objects/79/751db11c10db2c44bb418477a3db9bd83523a3": "1ad75420cbd32f79be6449e950f19d79",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/6ac46cf69c8b615fd60208e423eef10ec74914": "31d376c590a6a81ef1143456c0b2f877",
".git/objects/70/565edf22771bf9350b26033928e38b6fd68968": "48b9e81b80f797cc7dca8606499fbe67",
".git/objects/84/f44c32a902490dd6142f6d7f2d89fda04f1a91": "81bb056e4a4fbf04f8aa30830cd38182",
".git/objects/4a/eda2f867d1f20248eb0a670c2a7fa89d38d728": "1f7296767a7dc229ecfca5c2f60d567b",
".git/objects/24/92db7076672f21d645822bc95d35bcc835c315": "1b0d814d06e345792617a7e747e3a1e5",
".git/objects/8d/e3337aa058b460942067eb0f31640618930cf7": "3385ec80dec2db74eacfefa95aa6d6a3",
".git/objects/40/3b2fe8aaa3947ad90035b02a738764bcb26622": "a8f6c7e286aee7b8c0294a0dd143634e",
".git/objects/25/2bb1bec8a972452aa5d4b36a2f5987db003656": "b8e2634e4197dc11fa8f8fbcadc6d1b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "823cc6cf2553626cb91320790560d684",
".git/logs/refs/heads/main": "823cc6cf2553626cb91320790560d684",
".git/logs/refs/remotes/origin/HEAD": "dbce2b13f6fe64230e2dd2c7286c99df",
".git/logs/refs/remotes/origin/main": "92d411f83bba5f5e6f340a947e07ae30",
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
".git/refs/heads/main": "b8bb6f0dde654cb0c8eff3b0ddef9dc6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b8bb6f0dde654cb0c8eff3b0ddef9dc6",
".git/index": "75b8cbb24b6e174bad81782b379af0a0",
".git/packed-refs": "8fb6f35f4fdd4683497e1fe5c4097ab5",
".git/COMMIT_EDITMSG": "a66b6b16fb565dc854adfd7b0aabd916",
".git/FETCH_HEAD": "2c738b065749a4daca488508d4b05bf2",
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
