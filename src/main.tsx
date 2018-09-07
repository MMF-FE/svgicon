import "../dist/polyfill.js"
import Vue from 'vue'
import App from './App'
import SvgIcon from '@/components/SvgIcon.vue'

import '@/components/icons'
import 'highlight.js/styles/github-gist.css'

Vue.config.productionTip = false

Vue.use(SvgIcon, {
    tagName: 'icon'
})

new Vue({
    render: h => {
        return <App />
    }
}).$mount('#app')
