// list here all supported plugins
const pluginsList = [
    'cordova-plugin-camera',
    'cordova-plugin-device',
    'cordova-plugin-geolocation',
    'cordova-plugin-contacts',
    'cordova-plugin-sms',
    'cordova-plugin-email',
    'cordova-plugin-walkiemate',
    'cordova-plugin-inappbrowser',
    'cordova-plugin-jailbreakcheck.js',
    'cordova-plugin-network-information',
    'cordova-plugin-badge',
    'cordova-plugin-splashscreen',
    'cordova-plugin-base64togallery',
    'cordova-plugin-calendar',
    'cordova-plugin-keychainstore',
    'cordova-plugin-logtofile',
    'cordova-plugin-http',
    'cordova-plugin-wechat'
]

exports.install = (Vue, options) => {

  // declare global Vue.cordova object
  Vue.cordova = Vue.cordova || {
    deviceready: false,
      plugins: []
  }

  // Cordova events wrapper
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = require('./plugins/' + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })

}
