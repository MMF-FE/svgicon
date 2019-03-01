import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'
import 'vue-svgicon/dist/svgicon.css'

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
