exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.plugins.sfsctech === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.sfsctech = window.plugins.sfsctech

        return cb(true)

    }, false)
}
