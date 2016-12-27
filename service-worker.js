/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","f624bcd2db10994a130932176f50f856"],["/bower_components/app-layout/app-drawer/app-drawer.html","42374b7d1dc355271661d03f36f1b362"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","19b611bbac046ded73c13b8410652376"],["/bower_components/app-layout/app-header/app-header.html","4e0611f70434dc5d84af18a0e9779231"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","164f065b476fc80bb0832895a64d9690"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","3c7625771a0962ff8a7def697886b0ce"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","6553a3c7f1835eedd09b2d4191201908"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","d239c76a7e08db3fc8f46eebbc3155f3"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","ab168337b6ea4e8f54205c02da76f0ec"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","25617f66cc34a1af275d409d045330ea"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","6b961c1529177272fe086bb56ce72a39"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","8819a9e809201c5ba3d2d40403ede42a"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","552919ee78264a99ff1d3c3b5910d31b"],["/bower_components/app-layout/helpers/helpers.html","76e084f8a0e1add6843d20d376ecf1f4"],["/bower_components/app-route/app-location.html","9052397b983d288303c6efe539606113"],["/bower_components/app-route/app-route-converter-behavior.html","2c9b3ff13a631bf794eb47add6a74458"],["/bower_components/app-route/app-route.html","ec9942b5cc7b8ecf337712246403e968"],["/bower_components/app-storage/app-network-status-behavior.html","87a0f4c375d52d642980afb6d8948787"],["/bower_components/app-storage/app-storage-behavior.html","1f9b50f2d858dd462d9e1638a8ed5d07"],["/bower_components/firebase/firebase.js","0e187efdeea0cd355709e7cdeceae58d"],["/bower_components/font-roboto/roboto.html","4fa582f0702a651ddea0643b823749e7"],["/bower_components/humanize-duration/humanize-duration.js","e8216321c28fed42ddccfb31560a7693"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","6c7b2eb76564b74d61ad219d9b824179"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","298da29f86055cf03a05254d7576465b"],["/bower_components/iron-ajax/iron-ajax.html","fa31b950b374aec627e9ca5ab59febf5"],["/bower_components/iron-ajax/iron-request.html","753b3352306644057defbac8c11072ab"],["/bower_components/iron-behaviors/iron-button-state.html","28ebfe02b0f1e8e3a7bef827a23fa374"],["/bower_components/iron-behaviors/iron-control-state.html","d2564a7127188bb0bcce3d719ba65529"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","ee79b2b196b19b2b107b869f9278aac9"],["/bower_components/iron-collapse/iron-collapse.html","39ef3c04cd49f06b6d5e3d2732c1f860"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","6ed7cb2d04401a8e5d1a74c56201dd51"],["/bower_components/iron-dropdown/iron-dropdown.html","df5b7a0c0b28354cb7ab7f7a913eac2b"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","f631bc1b1e8ffaffd9e7bf19ba2dbba3"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","910c3181d5d32a2d173952fe960e3237"],["/bower_components/iron-flex-layout/iron-flex-layout.html","c84f73133ad49e771c68e95c155fb061"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","e0693f47d1bb61268ae9591fa5477011"],["/bower_components/iron-icon/iron-icon.html","ceb6cba7f46d40e638cc17558eb3e958"],["/bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["/bower_components/iron-icons/social-icons.html","56c1e8822dc1f653ba5637e73246a752"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","697ec822fe829a3c382e555e8259bf70"],["/bower_components/iron-image/iron-image.html","fbe75f9c3cbae9b1c37638b26ba42d33"],["/bower_components/iron-input/iron-input.html","34771e6aeac8540ab33d954310b41770"],["/bower_components/iron-list/iron-list.html","4e2201ef18c1610a67b72c328ac87667"],["/bower_components/iron-location/iron-location.html","c314b97c8f222e336ade1ab7bb6a06a8"],["/bower_components/iron-location/iron-query-params.html","f4b226ba8a80951b1a580f98ea214601"],["/bower_components/iron-media-query/iron-media-query.html","1f6599b427468e7c4ce6a0c7a6d68709"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","62cf3ac7f51f26a12b800644ef1df768"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","6a69be36fd4a249ad94337059d4b9c33"],["/bower_components/iron-meta/iron-meta.html","a01967fda8d42f3e63adc1c2e3945be3"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","3284b252bfb6e9b9eb7bfed65ce63015"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","b0874bf84b4c1d2b1ed8218ac7f6003b"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","471b784de2884442489394f15840037a"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","a8037083112378b0fa1362e224c3dfaf"],["/bower_components/iron-pages/iron-pages.html","58c990ebb0677e50f7658ff95b7d702a"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e9131c25c25968c88b5f7c0f4300e2e7"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","dd7c91617b240bd4c15438581894196f"],["/bower_components/iron-selector/iron-multi-selectable.html","4c3924e1d92c72b86343c0d160d1e268"],["/bower_components/iron-selector/iron-selectable.html","bd348105f7ab0f112c80d182697f823a"],["/bower_components/iron-selector/iron-selection.html","a35d01bb93772ecc27e1037e8f027193"],["/bower_components/iron-selector/iron-selector.html","b16e67c27ef856b12149a467cc5223b0"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","17e2e704ad282c3d7a1e8635a770697a"],["/bower_components/moment/min/moment.min.js","59844fa6f9b2e7aa25f3fadd47f8dc87"],["/bower_components/neon-animation/animations/fade-in-animation.html","548a3fd152850daa94eb600c5ee53f69"],["/bower_components/neon-animation/animations/fade-out-animation.html","cccc3272f07a6e685b0879642b2da562"],["/bower_components/neon-animation/animations/opaque-animation.html","bc026f665e84592ff9142a04d3b7e46e"],["/bower_components/neon-animation/animations/scale-up-animation.html","4c62bbd842a3035bc36470a7d8c1cb67"],["/bower_components/neon-animation/neon-animatable-behavior.html","d4b39447351e643f58833e2414703516"],["/bower_components/neon-animation/neon-animation-behavior.html","93b88ead56cc22307e95d1dddfd5e15a"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","40900f1948290df79c35bb2f52d48560"],["/bower_components/neon-animation/web-animations.html","aa5266664b17a9a7d7ebf0c4e6fcf8c9"],["/bower_components/paper-behaviors/paper-button-behavior.html","a129cc7da0636be3c21f2ecb98f82e32"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","300385d4f6d53226918d81823a4f6151"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","75f48b041a91699a40bf2dac12fd4f03"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","ac5cdb37beb1aef31f3bfb72fbfa5d63"],["/bower_components/paper-button/paper-button.html","d6f33310abf35771c6dbdd1d16c3761e"],["/bower_components/paper-card/paper-card.html","1ea2552beebc798ac381bc01fbff6fee"],["/bower_components/paper-checkbox/paper-checkbox.html","b8fd0284d2a167c1b0c240caafa1f51a"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","929bf8d531acfd5b888827593a2cdf1c"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","c45645b477016ee30c18b66309c9870e"],["/bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","75bdde2ae0d6d090175edd3a8e775927"],["/bower_components/paper-dialog/paper-dialog.html","f05bfb5566964e338de90b9f7c746b51"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","bd8d99e625c1baab3431ae830d788c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","bca08a857917ded4c8b3d3c218bd1438"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","cdc56101f8124a61253814ddcaa678e0"],["/bower_components/paper-fab/paper-fab.html","8a49ce8809224808c95b90e03a5be155"],["/bower_components/paper-icon-button/paper-icon-button.html","b70305a74e0c46546eea30e1ee842fcc"],["/bower_components/paper-input/paper-input-addon-behavior.html","143d8267137447ebf29d0883603f87b6"],["/bower_components/paper-input/paper-input-behavior.html","5f478f20090d18a40f64bd3fcf638eeb"],["/bower_components/paper-input/paper-input-char-counter.html","1dbc44a45729df4cd727c2eb2757928d"],["/bower_components/paper-input/paper-input-container.html","b612625d901fffa38822fe88328d8376"],["/bower_components/paper-input/paper-input-error.html","3dc8b128fcfc210e014b73c916c72f51"],["/bower_components/paper-input/paper-input.html","da3862283aeb6291f52070a4cd27b545"],["/bower_components/paper-item/paper-item-behavior.html","fa1e9edce996ee83aacc47a546f8bff4"],["/bower_components/paper-item/paper-item-shared-styles.html","28753fc92c1da41937963127d040eb65"],["/bower_components/paper-item/paper-item.html","0e02617f6d7b70b65028f949e576b2d9"],["/bower_components/paper-listbox/paper-listbox.html","dcd51a3d82074f963fa4bccd149eaa86"],["/bower_components/paper-material/paper-material-shared-styles.html","5ffed888ebf4d91973b4d13e0325aada"],["/bower_components/paper-material/paper-material.html","061b4f35df8aa13d7ef3f71106715f86"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","b5946667663109e8f1a1c0973f812a0b"],["/bower_components/paper-menu-button/paper-menu-button.html","b78945db6bdc65df3cb44aaaaaafa9cf"],["/bower_components/paper-ripple/paper-ripple.html","15ddf86f638c406418c3054ea9fde15b"],["/bower_components/paper-styles/color.html","7e7b6c4b6df20d684db1c1f9d75485b0"],["/bower_components/paper-styles/default-theme.html","356001e16dc2f911f8faeff659c61abb"],["/bower_components/paper-styles/shadow.html","3de212121d13169e7b1a8b2872446330"],["/bower_components/paper-styles/typography.html","75795596f1e9e0e90872cacb2936b1df"],["/bower_components/paper-tabs/paper-tab.html","6dfe70aeaf0435546663362aba48bbaa"],["/bower_components/paper-tabs/paper-tabs-icons.html","f8e9e4ba00752fc54f1046143ba1be28"],["/bower_components/paper-tabs/paper-tabs.html","b602e2edc47a58fd9cf4cb17c842cef2"],["/bower_components/polymer/polymer-micro.html","95677d24a37aa92d15eae0ba1c3cb748"],["/bower_components/polymer/polymer-mini.html","4e733fca92b310689d46724b7e125156"],["/bower_components/polymer/polymer.html","ef17160cf97b14bd43189f84b635a457"],["/bower_components/polymerfire/firebase-app.html","646292c91a112e2486b9c3daaff585d9"],["/bower_components/polymerfire/firebase-auth.html","6bce3d426019342707834ace5767afcc"],["/bower_components/polymerfire/firebase-common-behavior.html","fa47aa4267ba96fd63d80577bdbe1bdc"],["/bower_components/polymerfire/firebase-database-behavior.html","87548b56910b4b9a2e81e848c1e89f89"],["/bower_components/polymerfire/firebase-document.html","0807066ddff2ac502b478c16de4f19f3"],["/bower_components/polymerfire/firebase-query.html","892a8a8b3253587b487fa5135076b5df"],["/bower_components/polymerfire/firebase.html","52bf49ef935cd7cee84b0c9a0c13dad5"],["/bower_components/polymerfire/polymerfire.html","5f2e85fdf233e2f32a0c6e8c75965cf0"],["/bower_components/promise-polyfill/Promise-Statics.js","bea5966a51ba3023ee0a801ad7865c1c"],["/bower_components/promise-polyfill/Promise.js","d64797afd60b82e98a19f8177444e27d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","5cd73b659ecf9c535a5ae5f2254557a7"],["/bower_components/promise-polyfill/promise-polyfill.html","e3f270d4caf545387b445f02c0147be8"],["/bower_components/underscore/underscore-min.js","f4535377bca6bb48dba643dd8ad729de"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","ee1bb82be5cc45523608e1926bc73079"],["/index.html","f5f1c51f16c5295c162a4e8442da8dba"],["/src/hack-app.html","4c9d1eb004ee597dc17932b9b1426ebd"],["/src/hack-home.html","384069457e9de18aa55dfabb03dbf534"],["/src/hack-schedule-filter.html","4476343db29061c0fa2aee05a17ea9df"],["/src/hack-schedule-row.html","f75819ba940a704675b2b6f81488b6fb"],["/src/hack-schedule.html","a2eee49d8e7ed9d36007c6d4c0196a90"],["/src/hack-session-dialog.html","e08b93525928e0b671d18cb3f485b2f9"],["/src/hack-sponsors.html","aedcec42af2050f13d5a75f0772d20a7"],["/src/hack-view404.html","1b8bd54969c47136cca8f246943c3cd4"],["/src/shared-styles.html","0688366713bfe6ccc105dc0be75644d0"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




