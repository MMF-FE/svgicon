import * as path from 'path'
import * as fs from 'fs-plus'
import * as colors from 'colors'
import * as glob from 'glob'
import * as Svgo from 'svgo'

interface OptimizedSvg {
    data: string
    info: {
        width: string
        height: string
        [key: string]: any
    }
}

export interface Options {
    sourcePath: string
    targetPath: string
    ext?: string
    es6?: boolean
    tpl?: string
    idSP?: string
    svgo?: string | { [key: string]: any }
}

/**
 * build svg icon
 */
export default async function build(options: Options) {
    return new Promise((resolve, reject) => {
        // delete previous icons
        fs.removeSync(options.targetPath)

        // the template file which to generate icon files
        const tplPath = options.tpl
            ? path.join(process.cwd(), options.tpl)
            : path.join(
                  __dirname,
                  `../../default/icon.tpl${options.es6 ? '.es6' : ''}.txt`
              )
        const tpl = fs.readFileSync(tplPath, 'utf8')
        const svgo = new Svgo(getSvgoConfig(options.svgo))

        glob(path.join(options.sourcePath, '**/*.svg'), function(
            err: any,
            files: string[]
        ) {
            if (err) {
                reject(err)
                return
            }

            files = files.map(f => path.normalize(f))

            files.forEach(async (filename, ix) => {
                let name = path.basename(filename).split('.')[0]
                let svgContent = fs.readFileSync(filename, 'utf-8')
                let filePath = getFilePath(options.sourcePath, filename)
                let result: OptimizedSvg = (await svgo.optimize(
                    svgContent
                )) as OptimizedSvg
                let data = result.data
                    .replace(/<svg[^>]+>/gi, '')
                    .replace(/<\/svg>/gi, '')

                // get view box
                let viewBox = getViewBox(result)

                // add pid attr, for css
                data = addPid(data)

                // rename fill and stroke. (It can restroe in vue-svgicon)
                data = renameStyle(data)

                // replace element id, make sure ID is unique. fix #16
                data = changeId(data, filePath, name, options.idSP)

                // escape single quotes
                data = data.replace(/\'/g, "\\'")

                let content = compile(tpl, {
                    name: `${filePath}${name}`,
                    width: parseFloat(result.info.width) || 16,
                    height: parseFloat(result.info.height) || 16,
                    viewBox: `'${viewBox}'`,
                    data: data
                })

                try {
                    fs.writeFileSync(
                        path.join(
                            options.targetPath,
                            filePath,
                            name + `.${options.ext}`
                        ),
                        content,
                        'utf-8'
                    )
                    console.log(
                        colors.yellow(`Generated icon: ${filePath}${name}`)
                    )

                    if (ix === files.length - 1) {
                        generateIndex(options, files)
                        resolve()
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    })
}

// simple template compile
function compile(content: string, data: { [key: string]: any }) {
    return content.replace(/\${(\w+)}/gi, function(match, name) {
        return data[name] ? data[name] : ''
    })
}

// get file path by filename
function getFilePath(sourcePath: string, filename: string, subDir = '') {
    let filePath = filename
        .replace(path.resolve(sourcePath), '')
        .replace(path.basename(filename), '')

    if (subDir) {
        filePath = filePath.replace(subDir + path.sep, '')
    }

    if (/^[\/\\]/.test(filePath)) {
        filePath = filePath.substr(1)
    }

    return filePath.replace(/\\/g, '/')
}

// generate index.js, which import all icons
function generateIndex(opts: Options, files: string[], subDir = '') {
    let isES6 = opts.es6
    let content = ''
    let dirMap: { [key: string]: any } = {}

    switch (opts.ext) {
        case 'js':
            content += '/* eslint-disable */\n'
            break
        case 'ts':
            content += '/* tslint:disable */\n'
            break
    }

    files.forEach(file => {
        let name = path.basename(file).split('.')[0]
        let filePath = getFilePath(opts.sourcePath, file, subDir)
        let dir = filePath.split('/')[0]

        if (dir) {
            if (!dirMap[dir]) {
                dirMap[dir] = []
                content += isES6
                    ? `import './${dir}'\n`
                    : `require('./${dir}')\n`
            }
            dirMap[dir].push(file)
        } else {
            content += isES6
                ? `import './${filePath}${name}'\n`
                : `require('./${filePath}${name}')\n`
        }
    })

    fs.writeFileSync(
        path.join(opts.targetPath, subDir, `index.${opts.ext}`),
        content,
        'utf-8'
    )
    console.log(
        colors.green(
            `Generated ${subDir ? subDir + path.sep : ''}index.${opts.ext}`
        )
    )

    // generate subDir index.js
    for (let dir in dirMap) {
        generateIndex(opts, dirMap[dir], path.join(subDir, dir))
    }
}

// get svgo config
function getSvgoConfig(svgo?: string | { [key: string]: any }) {
    if (!svgo) {
        return require('../../default/svgo')
    } else if (typeof svgo === 'string') {
        return require(path.join(process.cwd(), svgo))
    } else {
        return svgo
    }
}

// get svg viewbox
function getViewBox(svgoResult: OptimizedSvg) {
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
}

// add pid attr, for css
function addPid(content: string) {
    let shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
    let id = 0
    content = content.replace(shapeReg, function(match: string) {
        return match + `pid="${id++}" `
    })

    return content
}

// rename fill and stroke. (It can restroe in vue-svgicon)
function renameStyle(content: string) {
    let styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi
    let styleReg = /fill=\"|stroke="/gi
    content = content.replace(styleShaeReg, function(shape: string) {
        return shape.replace(styleReg, function(styleName) {
            return '_' + styleName
        })
    })

    return content
}

// replace element id, make sure ID is unique. fix #16
function changeId(
    content: string,
    filePath: string,
    name: string,
    idSep = '_'
) {
    let idReg = /svgicon(\w+)/g
    content = content.replace(idReg, function(match: string, elId: string) {
        return `svgicon${idSep}${filePath.replace(/[\\\/]/g, idSep)}${name}${idSep}${elId}`
    })

    return content
}
