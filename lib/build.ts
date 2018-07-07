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
    svgConfig?: string | { [key: string]: any }
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

        let svgoConfig =
            typeof options.svgConfig === 'string'
                ? require(options.svgConfig)
                : options.svgConfig

        let svgo = new Svgo(svgoConfig)

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
                let viewBoxMatch = result.data.match(
                    /viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/
                )
                let viewBox: string = '0 0 200 200'

                if (viewBoxMatch && viewBoxMatch.length > 1) {
                    viewBox = viewBoxMatch[1]
                } else if (result.info.height && result.info.width) {
                    viewBox = `0 0 ${result.info.width} ${result.info.height}`
                }

                // add pid attr, for css
                let shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
                let id = 0
                data = data.replace(shapeReg, function(match: string) {
                    return match + `pid="${id++}" `
                })

                // rename fill and stroke. (It can restroe in vue-svgicon)
                let styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi
                let styleReg = /fill=\"|stroke="/gi
                data = data.replace(styleShaeReg, function(shape: string) {
                    return shape.replace(styleReg, function(styleName) {
                        return '_' + styleName
                    })
                })

                // replace element id, make sure ID is unique. fix #16
                let idReg = /svgicon-(\w+)/g
                data = data.replace(idReg, function(
                    match: string,
                    elId: string
                ) {
                    return `svgicon_${filePath.replace(
                        /[\\\/]/g,
                        '_'
                    )}${name}_${elId}`
                })

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
