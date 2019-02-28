import Vue from 'vue'
import SvgIcon, { setOptions } from '@/components/Svgicon'
import { PluginOptions } from '../typings'

let VueSvgIconPlugin = {
    install(vue: typeof Vue, options: PluginOptions = {}) {
        let tagName = options.tagName || 'svgicon'
        setOptions(options)
        vue.component(tagName, SvgIcon)
    }
}

export default VueSvgIconPlugin
