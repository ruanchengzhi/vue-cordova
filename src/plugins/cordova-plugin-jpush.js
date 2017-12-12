exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.plugins.jPushPlugin === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.jpush = window.plugins.jPushPlugin

        return cb(true)

    }, false)
}
