import '@yzfe/vue-svgicon-polyfill'
import Vue from 'vue'
import App from './App'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'
import 'vue-svgicon/dist/svgicon.css'
import 'highlight.js/styles/github-gist.css'

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon'
})

new Vue({
    render: h => h(App)
}).$mount('#app')
