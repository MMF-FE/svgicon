import { PluginOptions } from '../typings'

const options: PluginOptions = {
    defaultWidth: '',
    defaultHeight: '',
    classPrefix: 'svg',
    isStroke: false,
    isOriginalDefault: false,
}

export function setOptions(opts: PluginOptions): void {
    // Object.assign(options, opts)
    options.defaultWidth = opts.defaultWidth || options.defaultWidth
    options.defaultHeight = opts.defaultHeight || options.defaultHeight
    options.classPrefix = opts.classPrefix || options.classPrefix
    options.isStroke = opts.isStroke || options.isStroke
    options.isOriginalDefault =
        opts.isOriginalDefault || options.isOriginalDefault
}

export default options
