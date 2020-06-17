import Vue from 'vue'
import App from './App.vue'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'
import 'vue-svgicon/dist/svgicon.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon'
})

Vue.use(ElementUI)

new Vue({
    render: h => h(App)
}).$mount('#app')
