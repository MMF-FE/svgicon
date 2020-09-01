import Vue from 'vue'
import App from './App.vue'
import '@yzfe/svgicon-polyfill'

import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.config.productionTip = false

Vue.component('icon', VueSvgIcon)

new Vue({
    render: (h) => h(App),
}).$mount('#app')
