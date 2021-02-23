/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "21bd8ee09acbf44e358e5195fad9275b"
  },
  {
    "url": "assets/css/0.styles.9e92e356.css",
    "revision": "002cb5222481a814cd803379d814d206"
  },
  {
    "url": "assets/img/1(0).6b04bddb.png",
    "revision": "6b04bddb3712318775eb28f2ff27e7a8"
  },
  {
    "url": "assets/img/1(1).4dcc6d94.png",
    "revision": "4dcc6d9432adc74ce16c606895470c64"
  },
  {
    "url": "assets/img/1(11).041f4c10.png",
    "revision": "041f4c10aff64bb30ede4077e81c49d8"
  },
  {
    "url": "assets/img/1(12).f32655c6.png",
    "revision": "f32655c6f02e3b9aa6833840c83178df"
  },
  {
    "url": "assets/img/1(13).6f199b4a.png",
    "revision": "6f199b4a765932edc7e02e84b89e4ef7"
  },
  {
    "url": "assets/img/1(14).6b04bddb.png",
    "revision": "6b04bddb3712318775eb28f2ff27e7a8"
  },
  {
    "url": "assets/img/1(15).99898b75.png",
    "revision": "99898b752d39f307d50d75b306570615"
  },
  {
    "url": "assets/img/1(16).8beb6b95.png",
    "revision": "8beb6b9548ca45d6682303934b18115c"
  },
  {
    "url": "assets/img/1(17).3daa3142.png",
    "revision": "3daa31423b465558b4f89d4e1e41f6da"
  },
  {
    "url": "assets/img/1(18).d17a2146.png",
    "revision": "d17a214623aa8fbe21de94ed2079a80f"
  },
  {
    "url": "assets/img/1(2).39c4f4f7.png",
    "revision": "39c4f4f74643a6a96077523d4151fe59"
  },
  {
    "url": "assets/img/1(20).9625e58f.png",
    "revision": "9625e58f7265cda711ccce08c11d8d4f"
  },
  {
    "url": "assets/img/1(3).48037d22.png",
    "revision": "48037d228c70a3f05549943ddbdb1527"
  },
  {
    "url": "assets/img/1(4).d8705d44.png",
    "revision": "d8705d4458b68215bd928514e6e00ed0"
  },
  {
    "url": "assets/img/1(6).c6b598b5.png",
    "revision": "c6b598b5e92efcb5993d710f7a43e7b1"
  },
  {
    "url": "assets/img/1(9).dac8a877.png",
    "revision": "dac8a87731217ae0941c1f3fc748d74d"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/docker01.94d8669d.png",
    "revision": "94d8669d315e30fd0cb70d81eeba8215"
  },
  {
    "url": "assets/img/docker02.92f1d270.png",
    "revision": "92f1d270e1cc5d8ad53c356fd1140957"
  },
  {
    "url": "assets/img/flume1.a6e5fe3c.png",
    "revision": "a6e5fe3c25456c2ebe5f0ef19d6dd7bb"
  },
  {
    "url": "assets/img/flume2.46609584.png",
    "revision": "4660958496929b2a77e62972b4a17d6e"
  },
  {
    "url": "assets/img/flume3.8f962a52.png",
    "revision": "8f962a5213190229b5a3c85babb4e7c4"
  },
  {
    "url": "assets/img/Git01.1b288224.png",
    "revision": "1b288224848742e5a5cd03da87ea7ee0"
  },
  {
    "url": "assets/img/Git02.3bc9d5f2.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/grafana01.9fcdc30e.png",
    "revision": "9fcdc30e6f9e8f9e3ec0c2477304d5d5"
  },
  {
    "url": "assets/img/grafana02.0cc23744.png",
    "revision": "0cc237447c85a0d1ccd280d1493a5e0c"
  },
  {
    "url": "assets/img/grafana03.a2276295.png",
    "revision": "a2276295577a81ce77edb583fd72bb60"
  },
  {
    "url": "assets/img/kafka1.01d84736.png",
    "revision": "01d8473667b750100b7586bb6a2f1974"
  },
  {
    "url": "assets/img/kafka2.a7931f38.png",
    "revision": "a7931f386c27df349d94917cfb984fd9"
  },
  {
    "url": "assets/img/kafka3.323ea144.png",
    "revision": "323ea144f012b638c75c50d3a405335d"
  },
  {
    "url": "assets/img/ke01.43a394a9.png",
    "revision": "43a394a9f3ea21ddfa8f36deaeb853f1"
  },
  {
    "url": "assets/img/km01.f11d7c50.png",
    "revision": "f11d7c50a8e047de48336bcb5f86bb15"
  },
  {
    "url": "assets/img/km02.49e86e12.png",
    "revision": "49e86e12a14f896303b3bf9f04971b40"
  },
  {
    "url": "assets/img/km03.8819ffdf.png",
    "revision": "8819ffdfd39cee890b92c246fa2889eb"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/spark01.6f89ed28.png",
    "revision": "6f89ed287dad155be9174b2f8cc14d18"
  },
  {
    "url": "assets/img/springcloud_arch.64f395de.png",
    "revision": "64f395debe2b407c69020167b4a7803b"
  },
  {
    "url": "assets/img/springcloud_arch01.34c05990.png",
    "revision": "34c05990bfae9f39c8eeafe9a56b0173"
  },
  {
    "url": "assets/img/springcloud_bus01.0f2fd07d.png",
    "revision": "0f2fd07dee8172712214c4decb08604a"
  },
  {
    "url": "assets/img/springcloud_zuul01.54b9676f.png",
    "revision": "54b9676f6def6bf4034dee8a84b2bc01"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.0344f81a.js",
    "revision": "57d35b34bc23dc768e26b7a2b7010e5e"
  },
  {
    "url": "assets/js/10.45a93dd7.js",
    "revision": "ee6541cf1f3b84373860133590b75ad9"
  },
  {
    "url": "assets/js/11.0e95a760.js",
    "revision": "899ee958779e603150c5e0d4b64b8001"
  },
  {
    "url": "assets/js/12.2eecf320.js",
    "revision": "77b4d56fe6c93ae06d9c33443cb6510f"
  },
  {
    "url": "assets/js/13.eca18ada.js",
    "revision": "56cdb385a6898bca3a7c1904630251ab"
  },
  {
    "url": "assets/js/14.75bfc384.js",
    "revision": "d00e364a7b7222ed94696aa8e5147c13"
  },
  {
    "url": "assets/js/15.d403fc9a.js",
    "revision": "b0560f7d887608b998127df64f64a951"
  },
  {
    "url": "assets/js/16.71fad5e7.js",
    "revision": "577c18cb7b74ee012805e897ae827746"
  },
  {
    "url": "assets/js/17.fa375019.js",
    "revision": "fbebe11d477101c0c5ac15ba5cccc301"
  },
  {
    "url": "assets/js/18.f23f1185.js",
    "revision": "20346159c4b4019900776123d94fab2b"
  },
  {
    "url": "assets/js/19.e202ae72.js",
    "revision": "9664330edd3d188861346c4419dd90a1"
  },
  {
    "url": "assets/js/20.a0472aaa.js",
    "revision": "c35fb7dd7b133b2f7344047e726e932a"
  },
  {
    "url": "assets/js/21.dd76efdc.js",
    "revision": "339c4a91b0acfb2647d1df60477ba685"
  },
  {
    "url": "assets/js/22.0d45decc.js",
    "revision": "ea936611eaa8e40e1af44bd55123fd6c"
  },
  {
    "url": "assets/js/23.b16a19c3.js",
    "revision": "61787a15fec3de80c3b8d7ea03637a33"
  },
  {
    "url": "assets/js/24.a1a09167.js",
    "revision": "6e852c0e3b1108d13ec939d6e10f4f72"
  },
  {
    "url": "assets/js/25.c9484572.js",
    "revision": "e256453a180a7fbc69313cfacd5e8651"
  },
  {
    "url": "assets/js/26.ffcbf61a.js",
    "revision": "ae1ca5d989ec50efb98544ffde63f40d"
  },
  {
    "url": "assets/js/27.14206c11.js",
    "revision": "1c3ee3e4713826b6380516b3bd249c8b"
  },
  {
    "url": "assets/js/28.d59214d8.js",
    "revision": "d3971cfe79a0b0b8fcf0c94d0660ba6e"
  },
  {
    "url": "assets/js/29.1bb68aa8.js",
    "revision": "b29a700b7d3ecf5f03bbbbf3b945ff72"
  },
  {
    "url": "assets/js/3.0e796fb0.js",
    "revision": "006c8ca776af419d2d07657d3cff41d2"
  },
  {
    "url": "assets/js/30.3c7e1c12.js",
    "revision": "56ac3b9c982162f14b2ebee7be40542b"
  },
  {
    "url": "assets/js/31.c018a2ff.js",
    "revision": "a601924c8de6e1b37e8498c9cebc4ab0"
  },
  {
    "url": "assets/js/32.a550a6e3.js",
    "revision": "fec2c9c327bb0afe4b42211b904d43e8"
  },
  {
    "url": "assets/js/33.bfee9aa2.js",
    "revision": "1cf63a2ce6abd5d85dda20aa097d9d34"
  },
  {
    "url": "assets/js/34.4a6df674.js",
    "revision": "21370689dc328b31bce50c69f73c9f31"
  },
  {
    "url": "assets/js/35.0bf3a521.js",
    "revision": "d29fd88aa47f8090b1d5be8945f946f4"
  },
  {
    "url": "assets/js/36.a5e83626.js",
    "revision": "fbd7e84e3063598869d37ade43af7b68"
  },
  {
    "url": "assets/js/37.8dc53e84.js",
    "revision": "43dfc757b35aaa77aa55fbbbcca9b821"
  },
  {
    "url": "assets/js/38.f0653e63.js",
    "revision": "081c2076ab906f39914e134e09465b19"
  },
  {
    "url": "assets/js/39.b28bee7d.js",
    "revision": "1f0b67db36a8010ba6b0496663e52ed0"
  },
  {
    "url": "assets/js/4.481b095a.js",
    "revision": "0f09de3296174ffb3cffecc185428f74"
  },
  {
    "url": "assets/js/40.2849ba2d.js",
    "revision": "5299967b81319acc66fb88ee5467b678"
  },
  {
    "url": "assets/js/41.1cf3ef40.js",
    "revision": "aa02d96cdd18366b3ed47641f2a22705"
  },
  {
    "url": "assets/js/42.5f24a620.js",
    "revision": "52e85951d8898dc5282a892e90a49144"
  },
  {
    "url": "assets/js/43.edb10bf6.js",
    "revision": "e6a89543790c06e5612039c515e0d4db"
  },
  {
    "url": "assets/js/44.0bd6b557.js",
    "revision": "2432c870696b195f142059ae00ee9d52"
  },
  {
    "url": "assets/js/45.a866e87e.js",
    "revision": "63c6ab55b6a856e7b7172c05f77bb3c1"
  },
  {
    "url": "assets/js/46.4811287b.js",
    "revision": "7f7ef4247ccab9488a29e7433660525e"
  },
  {
    "url": "assets/js/47.12da40c2.js",
    "revision": "9baf1048f47a1886acfead1d00633fb3"
  },
  {
    "url": "assets/js/48.c6ead6bc.js",
    "revision": "2191b9faaf14c0ccd7cb242ac816b827"
  },
  {
    "url": "assets/js/49.f02a400f.js",
    "revision": "ef45a180d18aaec6d89b42c0ac949f04"
  },
  {
    "url": "assets/js/5.82fe7249.js",
    "revision": "e2b7df7303f2f758f5de466386875186"
  },
  {
    "url": "assets/js/50.8d72c9fb.js",
    "revision": "3031bb57a1590a89d5a70fc685228032"
  },
  {
    "url": "assets/js/51.92bde08b.js",
    "revision": "003286024936427d3e613403a8e6e5b6"
  },
  {
    "url": "assets/js/52.b677913d.js",
    "revision": "eec39f8cf9212a2896e404f43c1a1315"
  },
  {
    "url": "assets/js/53.53373ad0.js",
    "revision": "cc70b292dadf9016d65d08260b52e368"
  },
  {
    "url": "assets/js/54.9685f4bb.js",
    "revision": "b99be4ce269d030377d49e154d7ccc03"
  },
  {
    "url": "assets/js/55.ae12f514.js",
    "revision": "886d6c20970368c3d339c6ca7ce226b2"
  },
  {
    "url": "assets/js/56.b4cb6c32.js",
    "revision": "20afbac7bfc21018531bcc4f492aed0e"
  },
  {
    "url": "assets/js/57.b3788b5c.js",
    "revision": "b5572e94afaf2633a5f9a348f3fcbe0a"
  },
  {
    "url": "assets/js/58.f28058a2.js",
    "revision": "e20154693de6b6eb6895e98f6da04ca7"
  },
  {
    "url": "assets/js/59.ca2a6f66.js",
    "revision": "2c5ad8a2ba570b6fe2edc40bdad1b395"
  },
  {
    "url": "assets/js/6.586cf53e.js",
    "revision": "3f77b4b55a9320d171f5649ee6088174"
  },
  {
    "url": "assets/js/60.b0b98b84.js",
    "revision": "13aca369cad93335fc19e6898bd64394"
  },
  {
    "url": "assets/js/61.6b6cbe93.js",
    "revision": "e6edf07c571eb6c4b3d50def5ca317e7"
  },
  {
    "url": "assets/js/62.733b69da.js",
    "revision": "fe1ade6371bac6bcfc4a9c7f829f4fef"
  },
  {
    "url": "assets/js/63.00f88500.js",
    "revision": "7adc3a6bb67d3f8cf1278ff5e1ca264e"
  },
  {
    "url": "assets/js/64.38a042bc.js",
    "revision": "75658a323c83afc3dae16fd5962d6aee"
  },
  {
    "url": "assets/js/7.20539665.js",
    "revision": "e9268c77f0d9f09e86bf6128fad1c289"
  },
  {
    "url": "assets/js/8.bf91f490.js",
    "revision": "79296e15d6de0a7acdfab5280de217c5"
  },
  {
    "url": "assets/js/9.1e2198b3.js",
    "revision": "d0f03bcdfc5f0daf2214b67dd9cc7489"
  },
  {
    "url": "assets/js/app.19c5d863.js",
    "revision": "51271279971142e1a19cf7f80d7b0997"
  },
  {
    "url": "avatar.jpg",
    "revision": "34acbbe2f492ac07446544f9356b8120"
  },
  {
    "url": "backgroud.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "blogs/BigData/Flume.html",
    "revision": "b539a0eeb30789f3ffe2e1a4f84f4a47"
  },
  {
    "url": "blogs/BigData/Grafana.html",
    "revision": "dd1e4157e21599b044698754f10ed779"
  },
  {
    "url": "blogs/BigData/influxDB.html",
    "revision": "4291f74d3f09a7206c32bdbc719af6ce"
  },
  {
    "url": "blogs/BigData/Kafka.html",
    "revision": "8e9429e5216962988b4e3fbec7a97750"
  },
  {
    "url": "blogs/BigData/KafkaEagle.html",
    "revision": "3a39c6b9e7bfcb18540f81c99876842e"
  },
  {
    "url": "blogs/BigData/KafkaManager.html",
    "revision": "dc07e2a3e5b8d02f97e0df95de263b39"
  },
  {
    "url": "blogs/BigData/RabbitMQAndKafka.html",
    "revision": "9004d794b8d56d8b67d6e0ed7dba8f81"
  },
  {
    "url": "blogs/BigData/Spark.html",
    "revision": "a682036bcc0f67af00affb52c7466ad7"
  },
  {
    "url": "blogs/BigData/StreamProcessing.html",
    "revision": "f9f179a09d73dd6880f0876a3afe8113"
  },
  {
    "url": "blogs/BigData/Zookeeper.html",
    "revision": "001cd77bb44c5b9e9a88aa0c66fa0971"
  },
  {
    "url": "blogs/DevTools/Git.html",
    "revision": "b817af94b6b55840cc8472829fdaaefa"
  },
  {
    "url": "blogs/DevTools/IDEA.html",
    "revision": "8a2c3c4451cdbd568fcae5aacc915b18"
  },
  {
    "url": "blogs/DevTools/IDEAShortcut.html",
    "revision": "a24effd752a4e71ae0d66ce5d905ec24"
  },
  {
    "url": "blogs/DevTools/Maven.html",
    "revision": "7530f6d277c7e536be3eac40190ce4f2"
  },
  {
    "url": "blogs/DevTools/VMtoCentos7.html",
    "revision": "27a8fa8742bb8c70e90e7f8bbd9ba3a2"
  },
  {
    "url": "blogs/DevTools/VScode.html",
    "revision": "ac5a8d31b032711c1d201a2f71e5ea8f"
  },
  {
    "url": "blogs/DevTools/WSL2.html",
    "revision": "6f53c3c34d31132737d78d385f838fd5"
  },
  {
    "url": "blogs/Framework/Docker.html",
    "revision": "7f498d64282c286c5c5663e677dfa86a"
  },
  {
    "url": "blogs/Framework/Logback.html",
    "revision": "176231d76c5076987d4719c712acd3ae"
  },
  {
    "url": "blogs/Framework/Lombok.html",
    "revision": "ed3e5f06361dec5350d6698748b80a98"
  },
  {
    "url": "blogs/Framework/Mysql.html",
    "revision": "f8cca75fdfbfb68e718a1a45fa46c1e9"
  },
  {
    "url": "blogs/Framework/SpringBoot.html",
    "revision": "022048cb8b081ebafc18edd1e320b6cc"
  },
  {
    "url": "blogs/index.html",
    "revision": "a637c0a52c44ce9e720b19ec4915bc69"
  },
  {
    "url": "blogs/JavaNotes/JDK8NewFeatures.html",
    "revision": "e0c5b9ee54152aa5242ce17368147c36"
  },
  {
    "url": "blogs/JavaNotes/RESTful.html",
    "revision": "a4ce61fa92dcba29e7bc6d2a040d988c"
  },
  {
    "url": "blogs/JavaNotes/RestTemplate.html",
    "revision": "a60623fc923c2e6e6702a0c042b78a31"
  },
  {
    "url": "blogs/JavaNotes/SpringIOCAOP.html",
    "revision": "261b13e3ce1c4978e35dd96cf939007b"
  },
  {
    "url": "blogs/JavaNotes/TimeAndDateConversion.html",
    "revision": "223d47094f8e734d60495f3d6138dc78"
  },
  {
    "url": "blogs/LinuxNotes/Bash.html",
    "revision": "bfe1b026c8c9d3dc3217cf11dff1d617"
  },
  {
    "url": "blogs/LinuxNotes/Firewall.html",
    "revision": "c8c68b7a79827f3b2c4c2106bf39d705"
  },
  {
    "url": "blogs/LinuxNotes/Gitlab_CI.html",
    "revision": "2d36279ff1cab5e90026847981852f84"
  },
  {
    "url": "blogs/LinuxNotes/Gitlab-runner.html",
    "revision": "dd9d009796486d43f2b769c68717d203"
  },
  {
    "url": "blogs/LinuxNotes/Gitlab.html",
    "revision": "5b871e89cd43688009a563cbba2eb1f6"
  },
  {
    "url": "blogs/LinuxNotes/Linux.html",
    "revision": "58db8b727f84a278bf60ab535022c281"
  },
  {
    "url": "blogs/Other/Interview.html",
    "revision": "30ac208653fa108c4fda75160842f37f"
  },
  {
    "url": "blogs/Other/Projects-demo.html",
    "revision": "3165914e606e9b5abfb1c28dcd145c0d"
  },
  {
    "url": "blogs/Other/SoftwareSummary.html",
    "revision": "a2a526ef41babf550c78a68585ded5fe"
  },
  {
    "url": "blogs/SpringCloudNotes/SpringCloud.html",
    "revision": "e78fee3f593010d16bf4e5b06f13c6d6"
  },
  {
    "url": "blogs/SpringCloudNotes/SpringCloudBus.html",
    "revision": "d507664f2d94f404cfbed6ab70997eaf"
  },
  {
    "url": "blogs/SpringCloudNotes/SpringCloudConfig.html",
    "revision": "1f166ac3503c6cf7cfc2d1033f083456"
  },
  {
    "url": "blogs/SpringCloudNotes/SpringCloudNetflix.html",
    "revision": "88f913ef26d5631cab981f362959dfa0"
  },
  {
    "url": "blogs/SpringCloudNotes/SpringCloudSleuth.html",
    "revision": "54d464249dc925a386779abbf062e7bb"
  },
  {
    "url": "blogs/StudyNotes/Apache.html",
    "revision": "95268e21f3776c13a688d9078c55f825"
  },
  {
    "url": "blogs/StudyNotes/Cmd.html",
    "revision": "aed9bb9c1ce8bc1f0891295c89117649"
  },
  {
    "url": "blogs/StudyNotes/FreeDomainName.html",
    "revision": "e9ef2e7a0c578895eb6ef5771682ebcb"
  },
  {
    "url": "blogs/StudyNotes/GithubAction.html",
    "revision": "7e3b8aea289b364570f7c4efb934d8b5"
  },
  {
    "url": "blogs/StudyNotes/IntranetPenetration.html",
    "revision": "f46ed8ae7f97b1f787f1f3e68bc2998f"
  },
  {
    "url": "blogs/StudyNotes/MavenSettings.html",
    "revision": "a828d36d064647ef2b06381cc4ff086f"
  },
  {
    "url": "blogs/StudyNotes/OneManager.html",
    "revision": "e7d243e56524d7bfb33595cd1167b682"
  },
  {
    "url": "blogs/StudyNotes/vuepress.html",
    "revision": "54a1271b94ae0fbb8df7e44b0ccf65ad"
  },
  {
    "url": "categories/BigData/index.html",
    "revision": "6e3121b12dc30a336a48bfea8a25876a"
  },
  {
    "url": "categories/DevTools/index.html",
    "revision": "0941a5afd7d8e1c77cb121dcab3382a5"
  },
  {
    "url": "categories/Framework/index.html",
    "revision": "062df8e81f0840fa464f3c81af723c5d"
  },
  {
    "url": "categories/index.html",
    "revision": "be59ddbe16c83b38aa63bc1570924cd2"
  },
  {
    "url": "categories/JavaNotes/index.html",
    "revision": "ba47e00333aa135799869568689439c5"
  },
  {
    "url": "categories/LinuxNotes/index.html",
    "revision": "c2799af4b603f92b5e4c5bbe24cfab9e"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "8a0596ac1bc781f570f888909503fae5"
  },
  {
    "url": "categories/SpringCloudNotes/index.html",
    "revision": "fe85ebedb293f1d89b805ce1c2717dbb"
  },
  {
    "url": "categories/StudyNotes/index.html",
    "revision": "2eda629db8b4bb8d846000e2572f51f2"
  },
  {
    "url": "icon_vuepress_hjwu.png",
    "revision": "6e884e476c3732a6ee57d9c92ed9637d"
  },
  {
    "url": "icon_vuepress_hjwu.svg",
    "revision": "846fc9949ff3b6ae81057521f797047b"
  },
  {
    "url": "index.html",
    "revision": "c2f382f988aa323693f9f6d2dfee2223"
  },
  {
    "url": "js/jquery-3.5.1.min.js",
    "revision": "dc5e7f18c8d36ac1d3d4753a87c98d0a"
  },
  {
    "url": "js/mouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "js/ProjectsData.js",
    "revision": "a18444604a757473425bef7b674cc1eb"
  },
  {
    "url": "logo.jpg",
    "revision": "34acbbe2f492ac07446544f9356b8120"
  },
  {
    "url": "tag/AOP/index.html",
    "revision": "8d6ba27772334f306dd2758a7a2295ae"
  },
  {
    "url": "tag/Apache/index.html",
    "revision": "f0b7f981990b0a750d41bc0d211cd182"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "8bc1af2d1d6ca3185aebc3dcf352eee0"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "dc5a212c76d5c97b55db47090999dc2f"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "d39ed716981f17ce6c30683a5ed85fe3"
  },
  {
    "url": "tag/Date/index.html",
    "revision": "11f5f8cb1aa26c2e72395c2527ce0dd8"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "1443e0ea4321d4cb0cffb1dd9ff7d265"
  },
  {
    "url": "tag/domain/index.html",
    "revision": "0f684781081d48d537f938bf57de5665"
  },
  {
    "url": "tag/Eureka/index.html",
    "revision": "e4a62bd59a9a70eb02a14acf04eb4d12"
  },
  {
    "url": "tag/Feign/index.html",
    "revision": "d5e70c71ce50074f7b1544a1abb772cc"
  },
  {
    "url": "tag/firewall/index.html",
    "revision": "143b1705eb676e6ad9b13a7ae33b6e5f"
  },
  {
    "url": "tag/Flink/index.html",
    "revision": "db1a82538474b61b7fde10898daa27a9"
  },
  {
    "url": "tag/Flume/index.html",
    "revision": "1e3af1048e694b700c4bd2e78118a61d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "a3a249211adb85fcceec60e2a5b1cdef"
  },
  {
    "url": "tag/GithubActions/index.html",
    "revision": "4a7e849c04fe6bdeab5a596a82858e1f"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "5ae1b2fdfaaef5b4c89ae5798338890b"
  },
  {
    "url": "tag/Grafana/index.html",
    "revision": "b66d2ec4a1adcb1a5de0d7e6215b5b29"
  },
  {
    "url": "tag/heroku/index.html",
    "revision": "61332e1158e88b20a14ba37734b601c5"
  },
  {
    "url": "tag/Hystrix/index.html",
    "revision": "fcee2797175c6fbbee0c72ae678af011"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "c5f7364a96d7189e2a4d634a0b919a34"
  },
  {
    "url": "tag/index.html",
    "revision": "c5fdbd025514d63ffa276bc3cf39890d"
  },
  {
    "url": "tag/influxDB/index.html",
    "revision": "32f3ed0c56d15768c4dd7e394b09abd6"
  },
  {
    "url": "tag/IOC/index.html",
    "revision": "9a99e62b18ac68b1fd2f35b5a5176bb2"
  },
  {
    "url": "tag/iptables/index.html",
    "revision": "372145f46a125bb3d3be88610bbe36ef"
  },
  {
    "url": "tag/JDK8/index.html",
    "revision": "f9ced83fa09a18cd3664d284083dbd07"
  },
  {
    "url": "tag/Kafka Eagle/index.html",
    "revision": "2c5eb6e768149b8e5c7dc5c248cac3c1"
  },
  {
    "url": "tag/kafka/index.html",
    "revision": "789f836e366188ef2376d92bf7ded7fe"
  },
  {
    "url": "tag/Kafka/index.html",
    "revision": "6674d53b3d47645bf8f48bc99a1e98f9"
  },
  {
    "url": "tag/KafkaManager/index.html",
    "revision": "0e4a5e70537aaa5700ab0e8574d22fd2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "03a34a56a99df8f0b4646148192fcc62"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "df0a599c8f8594637ac884b4d42ab3a3"
  },
  {
    "url": "tag/LocalDate/index.html",
    "revision": "129d8005e27ff769e3221308bd5a16f4"
  },
  {
    "url": "tag/LocalDateTime/index.html",
    "revision": "c4c35f95a10808b8bef447574ee399d5"
  },
  {
    "url": "tag/Logback/index.html",
    "revision": "ddcf96a27023e39dd8662b5febc94e7b"
  },
  {
    "url": "tag/Lombok/index.html",
    "revision": "38ef60adc5f6aa2d90d605231bcebe24"
  },
  {
    "url": "tag/Maven/index.html",
    "revision": "694bc9b7fb08c1290e3d4a4235116bcc"
  },
  {
    "url": "tag/natapp/index.html",
    "revision": "898b0e64ee92ffe8d5da1cb6bc701f85"
  },
  {
    "url": "tag/Netflix/index.html",
    "revision": "49da7075507a0eecdb0a7320bb5bf376"
  },
  {
    "url": "tag/OneDrive/index.html",
    "revision": "bac550a19c85d66757e06e10b689d542"
  },
  {
    "url": "tag/php/index.html",
    "revision": "dbee7db6a9d39b8cf0ac748c5f28bbaf"
  },
  {
    "url": "tag/rabbitMQ/index.html",
    "revision": "b90c8e8b55bd03306295b2cc1c8bbbe2"
  },
  {
    "url": "tag/RESTful/index.html",
    "revision": "eb62ac55d7dfda10aa0f8a7a078d38cf"
  },
  {
    "url": "tag/RestTemplate/index.html",
    "revision": "ec3166572e53edae401649d6f50be28d"
  },
  {
    "url": "tag/Ribbon/index.html",
    "revision": "e21894368bc16775956d11f8ffc2a03a"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "995a045c34948b3b1972ae77cde5ee15"
  },
  {
    "url": "tag/Spark/index.html",
    "revision": "7fd4778f8a503cf671a4a1352f789bd4"
  },
  {
    "url": "tag/SpringBoot/index.html",
    "revision": "2a535f8d22e91afe38d3201643b59126"
  },
  {
    "url": "tag/SpringCloud/index.html",
    "revision": "7d5b88fe711599e582db51912490c0bb"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "3e466e75797b81fa52b342ff6d1070bd"
  },
  {
    "url": "tag/Storm/index.html",
    "revision": "2284ab67b3bf9eeb4e20c402867a3184"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7d92b519b9896cb91520e99a01b47bf5"
  },
  {
    "url": "tag/ufw/index.html",
    "revision": "3c9fb9ac94326b229ef89916389e42da"
  },
  {
    "url": "tag/Valine/index.html",
    "revision": "160ebe3e5e5683504c39694940836a18"
  },
  {
    "url": "tag/VMware/index.html",
    "revision": "29105d51fc40dd9d6e8cf4892b2ad9f5"
  },
  {
    "url": "tag/VScode/index.html",
    "revision": "5aa2f777d26840576b7976daccae9a44"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "491a5edaefd685d9b9658419471b386b"
  },
  {
    "url": "tag/WSL2/index.html",
    "revision": "9a7c4db5877a2731947dcb197130bea1"
  },
  {
    "url": "tag/zookeeper/index.html",
    "revision": "2ef09ccd3b9226fc780c4024152cdfbb"
  },
  {
    "url": "tag/Zuul/index.html",
    "revision": "e9bb0faa136710995cf7879513438594"
  },
  {
    "url": "timeline/index.html",
    "revision": "e78b4fa483fc3e19279d6888b3643b56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
