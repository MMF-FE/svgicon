import SVGO from 'svgo'
import { Icon } from '../typings'
import utils from './utils'
import _ from 'lodash'
import defaultSVGConfig from './svgo'
import * as path from 'path'

const svgoCache: Record<string, SVGO> = {}

/**
 * generate svgicon object
 * @param source svg icon content
 * @param filename svg icon file absolute path
 * @param svgRootPath svg icon root path, to calc relative path
 * @param svgoConfig svgo config
 */
export default async function gen(
    source: string,
    filename: string,
    svgRootPath?: string | string[],
    svgoConfig?: SVGO.Options
): Promise<Icon> {
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

    let config: SVGO.Options = defaultSVGConfig
    let key = ''

    if (svgoConfig) {
        config = _.merge({}, defaultSVGConfig, svgoConfig)
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

    const icon: Icon = {
        name: `${filePath}${name}`,
        data: {
            width: result.info.width,
            height: result.info.height,
            viewBox,
            data,
        },
    }

    return icon
}
