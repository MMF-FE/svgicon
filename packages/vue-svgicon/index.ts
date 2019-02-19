import Vue from 'vue'
import Svgicon, { setOptions } from './components/Svgicon'
import { PluginOptions } from './typings/index'

export default {
    install(vue: typeof Vue, options: PluginOptions = {}) {
        let tagName = options.tagName || 'svgicon'
        vue.component(tagName, Svgicon)
        setOptions(options)
    }
}
