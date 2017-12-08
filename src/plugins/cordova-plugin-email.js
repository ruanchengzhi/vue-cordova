exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.cordova.plugins.email === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.email = window.cordova.plugins.email

        return cb(true)

    }, false)
}
