import { PluginFunction } from 'vue'

import { Options } from '@yzfe/svgicon'

export { Icon, IconData } from '@yzfe/svgicon'

export type PluginOptions = Options

declare const VueSvgIconPlugin: {
    install: PluginFunction<PluginOptions>
}

export default VueSvgIconPlugin
