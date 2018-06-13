exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.cordova.plugins.KeychainStore === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.KeychainStore = window.cordova.plugins.KeychainStore
        return cb(true)

    }, false)
}
