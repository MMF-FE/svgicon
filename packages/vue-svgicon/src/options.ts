import { PluginOptions } from '../typings'

import SvgIcon from '@yzfe/svgicon'

export function setOptions(opts: PluginOptions): void {
    // Object.assign(options, opts)
    SvgIcon.options = {
        ...SvgIcon.options,
        ...opts,
    }
}
