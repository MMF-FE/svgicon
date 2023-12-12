import Vue from 'vue'
import App from './App.vue'
import { VueSvgIcon, setOptions } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.config.productionTip = false

setOptions({
    defaultWidth: '1em',
    defaultHeight: '1em',
    isOriginalDefault: true,
})
Vue.component('icon', VueSvgIcon)
new Vue({
    render: (h) => h(App),
}).$mount('#app')
