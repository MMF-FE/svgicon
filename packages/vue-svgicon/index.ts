import { PluginObject } from 'vue'
import SvgIcon, { setOptions } from './components/Svgicon'
import { PluginOptions } from './typings/index'

let VueSvgIconPlugin: PluginObject<PluginOptions> = {
    install(vue, options = {}) {
        let tagName = options.tagName || 'svgicon'
        vue.component(tagName, SvgIcon)
        setOptions(options)
    }
}

export default VueSvgIconPlugin
