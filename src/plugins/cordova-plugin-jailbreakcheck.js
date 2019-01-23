exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.cordova.plugins.JailBreakCheck === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.JailBreakCheck = window.cordova.plugins.JailBreakCheck
        return cb(true)

    }, false)
}
