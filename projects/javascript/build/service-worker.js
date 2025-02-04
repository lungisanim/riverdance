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

importScripts(
<<<<<<< HEAD
  "/precache-manifest.deda6dae8d06e98bcdc0f8fb42fb26da.js"
=======
  "/precache-manifest.75136daa53cb1ba44cf6aa4495b2fae8.js"
>>>>>>> 6b3de3858d2949638cf832554c85d4b60b250a5f
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
<<<<<<< HEAD
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
=======
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
>>>>>>> 6b3de3858d2949638cf832554c85d4b60b250a5f
});
