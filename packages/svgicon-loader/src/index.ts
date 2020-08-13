import * as path from 'path'
import { loader } from 'webpack'
import * as loaderUtils from 'loader-utils'
import * as Svgo from 'svgo'
import svgoConfig from './default/svgo'
import utils from './utils'
import { OptimizedSvg } from '../typings'

const svgo = new Svgo(svgoConfig)

const SvgiconLoader: loader.Loader = function (source) {
    this.cacheable(true)

    const callback = this.async()

    const options = loaderUtils.getOptions(this) || {}
    const svgFilePath = options.svgFilePath as string
    const name = path.basename(this.resourcePath).split('.')[0]

    let sourcePath = svgFilePath || process.cwd()

    if (!path.isAbsolute(sourcePath)) {
        sourcePath = path.join(process.cwd(), svgFilePath)
    }

    ;(async () => {
        const result = (await svgo.optimize(source as string)) as OptimizedSvg
        const filePath = utils.getFilePath(sourcePath, this.resourcePath)

        let data = result.data
            .replace(/<svg[^>]+>/gi, '')
            .replace(/<\/svg>/gi, '')

        // get view box
        const viewBox = utils.getViewBox(result)

        // add pid attr, for css
        data = utils.addPid(data)

        // rename fill and stroke. (It can restroe in vue-svgicon)
        data = utils.renameStyle(data)

        // replace element id, make sure ID is unique. fix #16
        data = utils.changeId(
            data,
            filePath,
            name,
            options.idSeparator as string
        )

        // escape single quotes
        data = data.replace(/'/g, "\\'")

        if (callback) {
            callback(
                null,
                `
                    module.exports = ${JSON.stringify({
                        name: `${filePath}${name}`,
                        data: {
                            width: result.info.width,
                            height: result.info.height,
                            viewBox,
                            data,
                        },
                    })}
            `
            )
        }
    })()
}

module.exports = SvgiconLoader
