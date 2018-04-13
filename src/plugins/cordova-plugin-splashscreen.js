exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.splashscreen === 'undefined') {
      return cb(false)
    }

    // pass through the contacts object
    Vue.cordova.splashscreen = navigator.splashscreen

    return cb(true)

  }, false)
}
