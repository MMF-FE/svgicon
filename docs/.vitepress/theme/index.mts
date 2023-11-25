import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.scss'

import { VueSvgIcon } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

// @ts-ignore
const components = import.meta.glob('../components/*.vue', {   eager: true })


export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('icon', VueSvgIcon)
        Object.keys(components).forEach((key) => {
            const name = key.match(/\.\/components\/(.*)\.vue/)![1]
            app.component(name, components[key].default)
        })
    },
} as Theme
