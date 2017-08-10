#!/usr/bin/env node

/**
 * build svg icon
 * @author Allenice
 * @since 2017-02-17
 */

const fs = require('fs-plus')
const path = require('path')
const Svgo = require('svgo')
const glob = require('glob')
const colors = require('colors')
const args = require('yargs')
  .usage('Usage: $0 -s svgSourcePath -t targetPath')
  .demandOption(['s', 't'])
  .describe('s', 'svg source path')
  .describe('t', 'generate icon path')
  .describe('ext', 'generated file\'s extension')
  .default('ext', 'js')
  .describe('tpl', 'the template file which to generate icon files')
  .help('help')
  .alias('h', 'help')
  .argv

// svg fle path
const sourcePath = path.join(process.cwd(), args.s, '**/*.svg')

// generated icon path
const targetPath = path.join(process.cwd(), args.t)

// the template file which to generate icon files
const tplPath = args.tpl ? path.join(process.cwd(), args.tpl) : path.join(__dirname, '../icon.tpl.txt')
const tpl = fs.readFileSync(tplPath, 'utf8')

const ext = args.ext

// delete previous icons
fs.removeSync(targetPath)

let svgo = new Svgo({
  plugins: [
    {
      removeAttrs: {
        attrs: ['(path|rect|circle|polygon|line|polyline|g|ellipse):(fill|stroke)']
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
        remove: true,
        prefix: 'svgicon-'
      }
    },
    {
      convertShapeToPath: true
    }
  ]
})

// simple template compile
function compile (content, data) {
    return content.replace(/\${(\w+)}/gi, function (match, name) {
        return data[name] ? data[name] : ''
    })
}

// get file path by filename
function getFilePath (filename, subDir = '') {
  let filePath = filename.replace(path.resolve(args.s), '').replace(path.basename(filename), '')

  if (subDir) {
    filePath = filePath.replace(subDir + path.sep, '')
  }

  if ( /^[\/\\]/.test(filePath) ) {
    filePath = filePath.substr(1)
  }

  return filePath.replace(/\\/g, '/', 'g')
}

// generate index.js, which import all icons
function generateIndex(files, subDir = '') {
  let content = ext === 'js' ? '/* eslint-disable */\n' : ''
  let dirMap = {}

  files.forEach((file) => {
    let name = path.basename(file).split('.')[0]
    let filePath = getFilePath(file, subDir)
    let dir = filePath.split('/')[0]

    if (dir) {
      if (!dirMap[dir]) {
        dirMap[dir] = []
        content += `require('./${dir}')\n`
      }
      dirMap[dir].push(file)
    } else {
      content += `require('./${filePath}${name}')\n`
    }
  })

  fs.writeFileSync(path.join(targetPath, subDir, `index.${ext}`), content, 'utf-8')
  console.log(colors.green(`Generated ${subDir ? subDir + path.sep : ''}index.${ext}`))

  // generate subDir index.js
  for (let dir in dirMap) {
    generateIndex(dirMap[dir], path.join(subDir, dir))
  }
}

glob(sourcePath, function (err, files) {
  if (err) {
    console.log(err)
    return false
  }

  files = files.map((f) => path.normalize(f))

  files.forEach((filename, ix) => {
    let name = path.basename(filename).split('.')[0]
    let content = fs.readFileSync(filename, 'utf-8')
    let filePath = getFilePath(filename)

    svgo.optimize(content, (result) => {
      let data = result.data.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
      let viewBox = result.data.match(/viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/)

      if (viewBox && viewBox.length > 1) {
        viewBox = viewBox[1]
      } else if (result.info.height && result.info.width){
        viewBox = `0, 0, ${result.info.height}, ${result.info.width}`
      } else {
        viewBox = '0, 0, 200, 200'
      }

      // add pid attr, for css
      let shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
      let id = 0
      data = data.replace(shapeReg, function (match) {
        return match + `pid="${id++}" `
      })

      // replace element id, make sure ID is unique. fix #16
      let idReg = /svgicon-(\w)/g
      data = data.replace(idReg, function (match, elId) {
        return `svgicon-${filePath.replace(/[\\\/]/g, '-')}${name}-${elId}`
      })

      let content = compile(tpl, {
          name: `${filePath}${name}`,
          width: parseFloat(result.info.width) || 16,
          height: parseFloat(result.info.height) || 16,
          viewBox: `'${viewBox}'`,
          data: data
      })

      fs.writeFileSync(path.join(targetPath, filePath, name + `.${ext}`), content, 'utf-8')
      console.log(colors.yellow(`Generated icon: ${filePath}${name}`))

      if (ix === files.length - 1) {
        generateIndex(files)
      }

    })
  })
})

