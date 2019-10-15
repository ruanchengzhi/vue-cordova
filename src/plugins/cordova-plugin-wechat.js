exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.Wechat === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.Wechat = window.Wechat

    return cb(true)

  }, false)
}
