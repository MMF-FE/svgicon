import { PluginObject } from 'vue'
import SvgIcon, { setOptions } from '@/components/Svgicon'
import { PluginOptions } from '../typings/index'

let VueSvgIconPlugin: PluginObject<PluginOptions> = {
    install(Vue, options = {}) {
        let tagName = options.tagName || 'svgicon'
        setOptions(options)
        Vue.component(tagName, SvgIcon)
    }
}

export default VueSvgIconPlugin
