import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import svgicon from 'vue-svgicon'
console.log(svgicon)

import '@/components/icons'

new Vue({
    render: h => h(App)
}).$mount('#app')
