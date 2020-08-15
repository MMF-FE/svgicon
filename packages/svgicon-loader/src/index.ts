import { loader } from 'webpack'
import * as loaderUtils from 'loader-utils'
import gen from '@yzfe/svgicon-gen'
import { LoaderOptions } from '../typings'
import SVGO from 'svgo'

const SvgiconLoader: loader.Loader = function (source) {
    this.cacheable(true)

    const callback = this.async()

    const options = (loaderUtils.getOptions(this) || {}) as LoaderOptions

    ;(async () => {
        const icon = await gen(
            source as string,
            this.resourcePath,
            options.svgFilePath,
            options.svgoConfig as SVGO.Options
        )

        if (callback) {
            callback(
                null,
                `
                    module.exports = ${JSON.stringify(icon)}
            `
            )
        }
    })()
}

module.exports = SvgiconLoader
