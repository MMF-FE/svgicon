#!/usr/bin/env node

/**
 * build svg icon
 * @author Allenice
 * @since 2017-02-17
 */

const fs = require('fs-plus')
const path = require('path')
const Svgo = require('svgo')
const golb = require('glob')
const args = require('yargs')
    .usage('Usage: $0 -s svgSourcePath -t targetPath')
    .demandOption(['s', 't'])
    .describe('s', 'svg file path')
    .describe('t', 'generate icon path')
    .help('help')
    .alias('h', 'help')
    .argv

// svg fle path
let filepath = path.join(process.cwd(), args.s, '**/*.svg')
// generated icon path
let targetPath = path.join(process.cwd(), args.t)

// console.log(filepath, targetPath)

let svgo = new Svgo({
    plugins: [
        {
            removeAttrs: {
                attrs: ['fill', 'stroke', 'sketch:type', 'id', 'opacity', 'fill-rule']
            }
        },
        {
            removeTitle: true
        },
        {
            removeStyleElement: true
        },
        {
            removeComments: true
        },
        {
            removeDesc: true
        },
        {
            removeUselessDefs: true
        },
        {
            cleanupIDs: {
                remove: true
            }
        },
        {
            convertShapeToPath: true
        }
    ]
})

// generate index.js, which import all icons
function generateIndex (files) {
    let content = ''
    files.forEach((filename) => {
        let name = path.basename(filename).split('.')[0]
        content += `require('./${name}')\n`
    })

    fs.writeFile(path.join(targetPath, 'index.js'), content, 'utf-8', (err) => {
        if (err) {
            console.log(err)
            return false
        }

        console.log('Generated index.js')
    })
}

golb(filepath, function(err, files) {
    if (err) {
        console.log(err)
        return false
    }

    files.forEach((filename, ix) => {
        let name = path.basename(filename).split('.')[0]
        let content = fs.readFileSync(filename, 'utf-8')

        svgo.optimize(content, (result) => {
            let data = result.data.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
            let viewBox = result.data.match(/viewBox="(\d+\s\d+\s\d+\s\d+)"/)

            if (viewBox && viewBox.length > 1) {
                viewBox = viewBox[1]
            }

            let content = `
var icon = require('vue-svgicon')
icon.register({
    '${name}': {
        width: ${result.info.width},
        height: ${result.info.height},
        viewBox: '${viewBox}',
        data: '${data}'
    }
})`
            fs.writeFile(path.join(targetPath, name + '.js'), content, 'utf-8', function (err) {
                if (ix === files.length - 1) {
                    generateIndex(files)
                }
                if (err) {
                    console.log(err)
                    return false
                }

                console.log(`Generated icon: ${name}`)
            })
        })
    })
})

