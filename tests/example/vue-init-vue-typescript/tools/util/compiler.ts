/**
 * mini tpl compiler
 * @author MMF-FE <https://github.com/MMF-FE/vue-svgicon>
 */

import * as fs from 'fs-extra'

/**
 * compile file
 *
 * @param {String} tplFile file path
 * @param {any} data
 * @returns
 */
export function compileFile(tplFile: string, data) {
    let conent = fs.readFileSync(tplFile, 'utf8')

    return conent.replace(/\${(\w+)}/gi, function(match, name) {
        return data[name] ? data[name] : match
    })
}
