exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.connection === 'undefined') {
      return cb(false)
    }
    // pass through the sms object
    Vue.cordova.connection = navigator.connection
    return cb(true)
  }, false)
}
