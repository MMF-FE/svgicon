import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { PluginOptions } from '../typings'
import { setOptions } from './options'

const VueSvgIconPlugin = {
    install(vue: typeof Vue, options: PluginOptions = {}): void {
        const tagName = options.tagName || 'svgicon'
        setOptions(options)
        vue.component(tagName, SvgIcon)
    },
}

export default VueSvgIconPlugin
