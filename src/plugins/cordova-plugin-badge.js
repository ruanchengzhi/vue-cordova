exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.sms === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.badge = cordova.plugins.notification.badge

    return cb(true)

  }, false)
}
