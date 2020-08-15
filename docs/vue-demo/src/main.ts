import Vue from 'vue'
import App from './App.vue'
import VueSvgIcon, { PluginOptions } from '@yzfe/vue-svgicon'
import '@yzfe/vue-svgicon/dist/svgicon.css'
Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon',
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
