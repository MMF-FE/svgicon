import Vue from 'vue'
import SvgIcon, { setOptions } from '@/components/Svgicon'
import { PluginOptions, Icon } from './lib/type'
import icons from './lib/icons'
import notLoadedIcons from '@/lib/notLoadedIcons'

let VueSvgIconPlugin = {
    icons,
    register(newIcons: { [key: string]: Icon }) {
        for (let name in newIcons) {
            if (!icons[name]) {
                icons[name] = newIcons[name]
            }

            // check new register icon is not loaded, and set loaded to true
            if (notLoadedIcons[name]) {
                notLoadedIcons[name].$set(notLoadedIcons, 'loaded', true)
                // remove from not loaded
                delete notLoadedIcons[name]
            }
        }
    },
    install(vue: typeof Vue, options: PluginOptions = {}) {
        let tagName = options.tagName || 'svgicon'
        setOptions(options)
        vue.component(tagName, SvgIcon)
    }
}

export default VueSvgIconPlugin
