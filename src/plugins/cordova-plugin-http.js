exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.cordova.plugins.http === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.http = window.cordova.plugin.http
        return cb(true)

    }, false)
}
