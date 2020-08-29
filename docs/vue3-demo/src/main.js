import { createApp } from 'vue'
import App from './App.vue'
import { VueSvgIcon } from '@yzfe/vue-svgicon'
console.log(VueSvgIcon)
import '@yzfe/vue-svgicon/dist/index.css'

const app = createApp(App)
app.component('icon', VueSvgIcon)

app.mount('#app')
