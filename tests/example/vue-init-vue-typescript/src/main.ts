import Vue from 'vue'

// register plugins hooks fo vue component
import 'common/registerHooks'

import svgicon from 'vue-svgicon'
console.log(svgicon)
// import all icons
import 'components/icons'

import router from 'router'

import App from 'pages/App'

Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
