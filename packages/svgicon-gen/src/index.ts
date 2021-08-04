import SVGO from 'svgo'
import { Icon } from './types'
import utils from './utils'
import defaultSVGConfig from './svgoConfig'
import path from 'path'
import fs from 'fs'

const svgoCache: Record<string, SVGO> = {}

/**
 * generate svgicon object
 * @export
 * @param {string} source svg file content
 * @param {string} filename svg icon file absolute path
 * @param {(string | string[])} [svgRootPath] svg icon root path, to calc relative path
 * @param {SVGO.Options} [svgoConfig] svgo config
 * @returns {Promise<Icon>}
 */
export default async function gen(
    source: string,
    filename: string,
    svgRootPath?: string | string[],
    svgoConfig?: SVGO.Options
): Promise<Icon> {
    if (!source) {
        source = fs.readFileSync(filename, {
            encoding: 'utf8',
        })
    }

    svgRootPath = svgRootPath || process.cwd()
    // if (!path.isAbsolute(svgRootPath)) {
    //     svgRootPath = path.join(process.cwd(), svgRootPath)
    // }
    let svgRootPaths = Array.isArray(svgRootPath) ? svgRootPath : [svgRootPath]

    svgRootPaths = svgRootPaths.map((rp) => {
        if (!path.isAbsolute(rp)) {
            return path.join(process.cwd(), rp)
        }
        return rp
    })

    const name = path.basename(filename).split('.')[0]
    const filePath = utils.getFilePath(svgRootPaths, filename)

    const config: SVGO.Options = defaultSVGConfig
    let key = ''

    if (svgoConfig && svgoConfig.plugins) {
        config.plugins = svgoConfig.plugins
    }

    if (config.plugins) {
        config.plugins.push({
            cleanupIDs: {
                remove: true,
                prefix: 'svgiconid',
            },
        })
    }

    key = JSON.stringify(config)
    let svgo!: SVGO
    if (svgoCache[key]) {
        svgo = svgoCache[key]
    } else {
        svgo = new SVGO(config)
        svgoCache[key] = svgo
    }

    const result = await svgo.optimize(source)

    let data = result.data.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')

    // get view box
    const viewBox = utils.getViewBox(result)

    // add pid attr, for css
    data = utils.addPid(data)

    // rename fill and stroke. (It can restroe in vue-svgicon)
    data = utils.renameStyle(data)

    // replace element id, make sure ID is unique. fix #16
    data = utils.changeId(data, filePath, name)

    // escape single quotes
    data = data.replace(/'/g, "\\'")

    const originalColors = utils.getOriginalColors(data)
    const stopColors = utils.getStopColors(data)

    const icon: Icon = {
        name: `${filePath}${name}`,
        data: {
            width: result.info.width,
            height: result.info.height,
            viewBox,
            data,
            originalColors,
            stopColors,
        },
    }

    return icon
}
