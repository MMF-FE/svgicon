import './debug'
import Vue from 'vue'
import App from './App.vue'
import { VueSvgIcon } from '@yzfe/vue2-svgicon'

import '@yzfe/svgicon/lib/svgicon.css'

import {
    Button,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Input,
} from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Input.name, Input)

// @ts-ignore
Vue.component('icon', VueSvgIcon)

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
