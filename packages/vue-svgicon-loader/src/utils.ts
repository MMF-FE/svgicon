// build icon data, utils

import * as path from 'path'
import { OptimizedSvg } from '../typings'

export default {
    // Simple template compiler
    compile(content: string, data: { [key: string]: any }) {
        return content.replace(/\${(\w+)}/gi, function(match, name) {
            return data[name] ? data[name] : ''
        })
    },

    // get svg viewBox
    getViewBox(svgoResult: OptimizedSvg) {
        let viewBoxMatch = svgoResult.data.match(
            /viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/
        )
        let viewBox: string = '0 0 200 200'

        if (viewBoxMatch && viewBoxMatch.length > 1) {
            viewBox = viewBoxMatch[1]
        } else if (svgoResult.info.height && svgoResult.info.width) {
            viewBox = `0 0 ${svgoResult.info.width} ${svgoResult.info.height}`
        }

        return viewBox
    },

    // add pid attr, for css
    addPid(content: string) {
        let shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
        let id = 0
        content = content.replace(shapeReg, function(match: string) {
            return match + `pid="${id++}" `
        })

        return content
    },

    // rename fill and stroke. (It can restroe in vue-svgicon)
    renameStyle(content: string) {
        let styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi
        let styleReg = /fill=\"|stroke="/gi
        content = content.replace(styleShaeReg, function(shape: string) {
            return shape.replace(styleReg, function(styleName) {
                return '_' + styleName
            })
        })

        return content
    },

    // replace element id, make sure ID is unique. fix #16
    changeId(content: string, filePath: string, name: string, idSep = '_') {
        let idReg = /svgicon(\w+)/g
        content = content.replace(idReg, function(match: string, elId: string) {
            return `svgicon${idSep}${filePath.replace(/[\\\/]/g, idSep)}${name}${idSep}${elId}`
        })

        return content
    },

    // get file path by filename
    getFilePath(sourcePath: string, filename: string) {
        let filePath = filename
            .replace(path.resolve(sourcePath), '')
            .replace(path.basename(filename), '')

        if (/^[\/\\]/.test(filePath)) {
            filePath = filePath.substr(1)
        }

        return filePath.replace(/\\/g, '/')
    }
}
