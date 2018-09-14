// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'vue-svgicon/dist/polyfill'

Vue.config.productionTip = false

import svgicon from 'vue-svgicon'
console.log(svgicon)

Vue.use(svgicon, {
    tagName: 'icon'
})

import '@/components/icons'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
