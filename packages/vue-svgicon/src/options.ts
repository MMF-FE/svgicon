import { PluginOptions } from '../typings'

import SvgIcon from './SvgIcon'

export function setOptions(opts: PluginOptions): void {
    // Object.assign(options, opts)
    SvgIcon.options = {
        ...SvgIcon.options,
        ...opts,
    }
}
