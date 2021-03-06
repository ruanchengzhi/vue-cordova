exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.logToFile === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.logToFile = window.logToFile

    return cb(true)

  }, false)
}
