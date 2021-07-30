// build icon data, utils
import * as path from 'path'
import { OptimizedSvg } from './types'

export default {
    // Simple template compiler
    compile(content: string, data: { [key: string]: string }): string {
        return content.replace(/\${(\w+)}/gi, function (match, name) {
            return data[name] ? data[name] : ''
        })
    },

    // get svg viewBox
    getViewBox(svgoResult: OptimizedSvg): string {
        const viewBoxMatch = svgoResult.data.match(
            /viewBox="([-\d.]+\s[-\d.]+\s[-\d.]+\s[-\d.]+)"/
        )
        let viewBox = '0 0 200 200'

        if (viewBoxMatch && viewBoxMatch.length > 1) {
            viewBox = viewBoxMatch[1]
        } else if (svgoResult.info.height && svgoResult.info.width) {
            viewBox = `0 0 ${svgoResult.info.width} ${svgoResult.info.height}`
        }

        return viewBox
    },

    // add pid attr, for css
    addPid(content: string): string {
        const shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
        let id = 0
        content = content.replace(shapeReg, function (match: string) {
            return match + `pid="${id++}" `
        })

        return content
    },

    // rename fill and stroke. (It can restroe in vue-svgicon)
    renameStyle(content: string): string {
        const styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi
        const styleReg = /fill="|stroke="/gi
        content = content.replace(styleShaeReg, function (shape: string) {
            return shape.replace(styleReg, function (styleName) {
                return '_' + styleName
            })
        })

        return content
    },

    // replace element id, make sure ID is unique. fix #16
    changeId(
        content: string,
        filePath: string,
        name: string,
        idSep = '_'
    ): string {
        const idReg = /svgiconid(\w+)/g
        content = content.replace(idReg, function (
            match: string,
            elId: string
        ) {
            return `svgiconid${idSep}${filePath.replace(
                /[\\/]/g,
                idSep
            )}${name}${idSep}${elId}`
        })

        return content
    },

    // get file path by filename
    getFilePath(svgRootPath: string | string[], filename: string): string {
        // let filePath = filename
        //     .replace(path.resolve(sourcePath), '')
        //     .replace(path.basename(filename), '')
        let filePath = ''
        const rootPaths = Array.isArray(svgRootPath)
            ? svgRootPath
            : [svgRootPath]

        rootPaths.forEach((rp) => {
            filename = filename.replace(rp, '')
        })

        filePath = filename.replace(path.basename(filename), '')

        if (/^[/\\]/.test(filePath)) {
            filePath = filePath.substr(1)
        }

        return filePath.replace(/\\/g, '/')
    },

    /** get original colors */
    getOriginalColors(content: string): {type: string, color: string}[] {
        const reg = /(fill|stroke)="([\w\,#\s\'\(\)-_]+)"/gi
        const colors: {type: string, color: string}[] = []

        content.replace(reg, (match, prop, color) => {
            colors.push({
                type: prop,
                color
            })

            return match
        })

        return colors
    },

     /** get original colors */
     getStopColors(content: string): string[] {
        const reg = /stop-color="([\w\,#\s\'\(\)-_]+)"/gi
        const colors: string[] = []

        content.replace(reg, (match, color) => {
            colors.push(color)

            return match
        })

        return colors
    }
}
