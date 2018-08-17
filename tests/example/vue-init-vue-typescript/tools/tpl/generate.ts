/**
 * Generate component files
 * @date 2017-03-07 17:21:25
 * @author Allenice
 * @link http://www.allenice233.com
 */

'use strict'

import * as fs from 'fs-extra'
import * as path from 'path'
import * as colors from 'colors'
import * as inq from 'inquirer'
import { compileFile } from '../util/compiler'

function writeFiles(distPath, data) {
    let tplPath = path.join(__dirname, './component')

    fs.readdir(tplPath, (err, files) => {
        if (err) {
            console.log(colors.red(err.message))
            return false
        }

        files.forEach(filename => {
            let content = compileFile(path.join(tplPath, filename), data)
            let distFileName =
                data.componentName +
                '.' +
                filename
                    .split('.')
                    .slice(1, -1)
                    .join('.')

            if (filename.indexOf('index') >= 0) {
                distFileName = 'index.ts'
            }

            // 暂时去掉默认生成 test.ts
            if (filename.indexOf('test') > 0) {
                return false
            }

            let filePath = path.join(distPath, distFileName)

            console.log(colors.green('write file: '))
            console.log(colors.underline(filePath))
            fs.writeFileSync(filePath, content, 'utf8')
        })

        console.log(colors.green(`${data.componentName} is generated.`))
    })
}

export default async function(distPath, data) {
    if (fs.existsSync(distPath)) {
        let answer = await inq.prompt({
            type: 'confirm',
            name: 'isOverride',
            message: `The component ${
                data.componentPath
            } is exist. Do your want to override it?`
        })

        if (answer['isOverride']) {
            writeFiles(distPath, data)
        }
    } else {
        fs.mkdirpSync(distPath)
        writeFiles(distPath, data)
    }
}
