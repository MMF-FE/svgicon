import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.scss'

import { VueSvgIcon } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('icon', VueSvgIcon)
    },
} as Theme
