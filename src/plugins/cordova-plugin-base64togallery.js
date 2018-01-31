exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof cordova.base64ToGallery === 'undefined') {
            return cb(false)
        }

        // pass through the sms object
        Vue.cordova.base64ToGallery = cordova.base64ToGallery

        return cb(true)

    }, false)
}
