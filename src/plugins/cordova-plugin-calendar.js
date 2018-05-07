exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.plugins.calendar === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.calendar = window.plugins.calendar

        return cb(true)

    }, false)
}
