import Vue from 'vue'
import App from './App.vue'
import VueSvgIcon, { PluginOptions } from '@yzfe/vue-svgicon'

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'svgicon'
})

new Vue({
    render: h => h(App)
}).$mount('#app')
