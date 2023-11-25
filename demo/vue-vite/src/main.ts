import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

createApp(App)
    .use(VueSvgIconPlugin, {
        tagName: 'icon',
    })
    .mount('#app')
