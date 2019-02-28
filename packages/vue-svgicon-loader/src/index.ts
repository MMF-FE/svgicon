import * as path from 'path'
import { loader } from 'webpack'
import * as loaderUtils from 'loader-utils'
import * as Svgo from 'svgo'
import svgoConfig from './default/svgo'
import utils from './utils'
import { LoaderOptions, OptimizedSvg } from '../typings'

// @ts-ignore
const svgo = new Svgo(svgoConfig)

let SvgiconLoader: loader.Loader = function(source) {
    this.cacheable(true)

    const callback = this.async()

    const options = (loaderUtils.getOptions(this) as LoaderOptions) || {}
    const name = path.basename(this.resourcePath).split('.')[0]

    let sourcePath = options.svgFilePath || process.cwd()

    if (!path.isAbsolute(sourcePath)) {
        sourcePath = path.join(process.cwd(), options.svgFilePath)
    }

    new Promise(async (resolve, reject) => {
        let result = (await svgo.optimize(source)) as OptimizedSvg
        let filePath = utils.getFilePath(sourcePath, this.resourcePath)

        let data = result.data
            .replace(/<svg[^>]+>/gi, '')
            .replace(/<\/svg>/gi, '')

        // get view box
        let viewBox = utils.getViewBox(result)

        // add pid attr, for css
        data = utils.addPid(data)

        // rename fill and stroke. (It can restroe in vue-svgicon)
        data = utils.renameStyle(data)

        // replace element id, make sure ID is unique. fix #16
        data = utils.changeId(data, filePath, name, options.idSeparator)

        // escape single quotes
        data = data.replace(/\'/g, "\\'")

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
                            data
                        }
                    })}
            `
            )
        }
    })
}

module.exports = SvgiconLoader
