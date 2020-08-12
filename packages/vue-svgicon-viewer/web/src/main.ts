import Vue from 'vue'
import App from './App.vue'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'
import 'vue-svgicon/dist/svgicon.css'

import {
    Button,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Input
} from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Input.name, Input)

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon'
})

new Vue({
    render: h => h(App)
}).$mount('#app')
