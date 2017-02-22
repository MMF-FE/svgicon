/**
 * Register global vue
 */

module.exports = function (Vue) {
    let svgicon = require('./component/svgicon.vue')
    Vue.component('svgicon', svgicon)
}
