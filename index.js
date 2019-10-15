module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// list here all supported plugins
	var pluginsList = ['cordova-plugin-camera', 'cordova-plugin-device', 'cordova-plugin-geolocation', 'cordova-plugin-contacts', 'cordova-plugin-sms', 'cordova-plugin-email', 'cordova-plugin-walkiemate', 'cordova-plugin-inappbrowser', 'cordova-plugin-jailbreakcheck.js', 'cordova-plugin-network-information', 'cordova-plugin-badge', 'cordova-plugin-splashscreen', 'cordova-plugin-base64togallery', 'cordova-plugin-calendar', 'cordova-plugin-keychainstore', 'cordova-plugin-logtofile', 'cordova-plugin-wechat'];

	exports.install = function (Vue, options) {

	  // declare global Vue.cordova object
	  Vue.cordova = Vue.cordova || {
	    deviceready: false,
	    plugins: []

	    // Cordova events wrapper
	  };Vue.cordova.on = function (eventName, cb) {
	    document.addEventListener(eventName, cb, false);
	  };

	  // let Vue know that deviceready has been triggered
	  document.addEventListener('deviceready', function () {
	    Vue.cordova.deviceready = true;
	  }, false);

	  // load supported plugins
	  pluginsList.forEach(function (pluginName) {
	    var plugin = __webpack_require__(1)("./" + pluginName);
	    plugin.install(Vue, options, function (pluginLoaded) {
	      if (pluginLoaded) {
	        Vue.cordova.plugins.push(pluginName);
	      }
	      if (Vue.config.debug) {
	        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded');
	      }
	    });
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./cordova-plugin-badge": 2,
		"./cordova-plugin-badge.js": 2,
		"./cordova-plugin-base64togallery": 3,
		"./cordova-plugin-base64togallery.js": 3,
		"./cordova-plugin-calendar": 4,
		"./cordova-plugin-calendar.js": 4,
		"./cordova-plugin-camera": 5,
		"./cordova-plugin-camera.js": 5,
		"./cordova-plugin-contacts": 6,
		"./cordova-plugin-contacts.js": 6,
		"./cordova-plugin-device": 7,
		"./cordova-plugin-device.js": 7,
		"./cordova-plugin-email": 8,
		"./cordova-plugin-email.js": 8,
		"./cordova-plugin-geolocation": 9,
		"./cordova-plugin-geolocation.js": 9,
		"./cordova-plugin-inappbrowser": 10,
		"./cordova-plugin-inappbrowser.js": 10,
		"./cordova-plugin-jailbreakcheck": 11,
		"./cordova-plugin-jailbreakcheck.js": 11,
		"./cordova-plugin-jpush": 12,
		"./cordova-plugin-jpush.js": 12,
		"./cordova-plugin-keychainstore": 13,
		"./cordova-plugin-keychainstore.js": 13,
		"./cordova-plugin-logtofile": 14,
		"./cordova-plugin-logtofile.js": 14,
		"./cordova-plugin-network-information": 15,
		"./cordova-plugin-network-information.js": 15,
		"./cordova-plugin-sms": 16,
		"./cordova-plugin-sms.js": 16,
		"./cordova-plugin-splashscreen": 17,
		"./cordova-plugin-splashscreen.js": 17,
		"./cordova-plugin-walkiemate": 18,
		"./cordova-plugin-walkiemate.js": 18,
		"./cordova-plugin-wechat": 19,
		"./cordova-plugin-wechat.js": 19
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof cordova.plugins.notification.badge === 'undefined') {
	      return cb(false);
	    }

	    // pass through the sms object
	    Vue.cordova.badge = cordova.plugins.notification.badge;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof cordova.base64ToGallery === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.base64ToGallery = cordova.base64ToGallery;

	        return cb(true);
	    }, false);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.plugins.calendar === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.calendar = window.plugins.calendar;

	        return cb(true);
	    }, false);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.camera === 'undefined') {
	      return cb(false);
	    }

	    // pass through the camera object
	    Vue.cordova.camera = navigator.camera;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.contacts === 'undefined') {
	      return cb(false);
	    }

	    // pass through the contacts object
	    Vue.cordova.contacts = navigator.contacts;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
	      return cb(false);
	    }

	    // default values
	    Vue.cordova.device = {
	      cordova: null,
	      model: null,
	      platform: null,
	      uuid: null,
	      imei: null,
	      version: null,
	      manufacturer: null,
	      isVirtual: null,
	      serial: null
	    };

	    Object.keys(Vue.cordova.device).forEach(function (key) {
	      if (typeof device[key] !== 'undefined') {
	        Vue.cordova.device[key] = device[key];
	      }
	    });

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.cordova.plugins.email === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.email = window.cordova.plugins.email;

	        return cb(true);
	    }, false);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.geolocation === 'undefined') {
	      return cb(false);
	    }

	    // pass through the geolocation object
	    Vue.cordova.geolocation = navigator.geolocation;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof cordova.InAppBrowser === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.InAppBrowser = cordova.InAppBrowser;

	        return cb(true);
	    }, false);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.cordova.plugins.JailBreakCheck === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.JailBreakCheck = window.cordova.plugins.JailBreakCheck;
	        return cb(true);
	    }, false);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.plugins.jPushPlugin === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.jpush = window.plugins.jPushPlugin;

	        return cb(true);
	    }, false);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.cordova.plugins.KeychainStore === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.KeychainStore = window.cordova.plugins.KeychainStore;
	        return cb(true);
	    }, false);
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof window.logToFile === 'undefined') {
	      return cb(false);
	    }

	    // pass through the sms object
	    Vue.cordova.logToFile = window.logToFile;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.connection === 'undefined') {
	      return cb(false);
	    }
	    // pass through the sms object
	    Vue.cordova.connection = navigator.connection;
	    return cb(true);
	  }, false);
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof window.sms === 'undefined') {
	      return cb(false);
	    }

	    // pass through the sms object
	    Vue.cordova.sms = window.sms;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.splashscreen === 'undefined') {
	      return cb(false);
	    }

	    // pass through the contacts object
	    Vue.cordova.splashscreen = navigator.splashscreen;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	    document.addEventListener('deviceready', function () {

	        if (typeof window.cordova.plugins.sfsctech === 'undefined') {
	            return cb(false);
	        }

	        // pass through the sms object
	        Vue.cordova.sfsctech = window.cordova.plugins.sfsctech;
	        return cb(true);
	    }, false);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof window.Wechat === 'undefined') {
	      return cb(false);
	    }

	    // pass through the sms object
	    Vue.cordova.Wechat = window.Wechat;

	    return cb(true);
	  }, false);
	};

/***/ })
/******/ ]);