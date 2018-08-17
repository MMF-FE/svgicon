/**
 * create router module
 */

import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as yargs from 'yargs'
import * as colors from 'colors'
import * as inq from 'inquirer'

import getGitUser from '../util/getGitUser'
import getDate from '../util/getDate'
import { compileFile } from '../util/compiler'

// tslint:disable-next-line
let version = require('../../package.json').version
let gitUser = getGitUser()
let user = os.userInfo({ encoding: 'utf8' })
const tab = '    '

function build(data) {
    let outFile: string = data.outFile
    let viewPath: string = data.args.viewPath
    let srcReg = /^src\//

    // 如果 src 开头的话，去掉 src
    if (srcReg.test(viewPath)) {
        viewPath = viewPath.replace(srcReg, '')
    }

    let renderData = {
        username: data.context.username,
        curDate: data.context.curDate,
        version: data.context.version,
        routerName: data.args.routerName,
        componentPath: viewPath
    }

    let code = compileFile(
        path.join(__dirname, '../tpl/router/router.ts.txt'),
        renderData
    )
    fs.writeFileSync(outFile, code, 'utf8')
    console.log(colors.green('write file: '))
    console.log(colors.underline(outFile))

    // 如果不是覆盖原来的模块的话，修改 router/index.ts, 引入该模块
    if (!data.isOverride) {
        write(data)
    }
}

function write(data) {
    let routerPath = path.join(path.resolve(), 'src/router/index.ts')
    let routerIndex = fs.readFileSync(routerPath, 'utf8')
    let name = data.args.routerName

    // import module
    routerIndex = routerIndex.replace(
        `/** auto import */`,
        `/** auto import */\nimport ${name}Route from './${name}'`
    )

    // concat routes
    routerIndex = routerIndex.replace(
        `/** auto concat */`,
        `/** auto concat */\n${tab}.concat(${name}Route)`
    )

    fs.writeFileSync(routerPath, routerIndex, 'utf8')
    console.log(colors.green('write file: '))
    console.log(colors.underline(routerPath))
}

let command: yargs.CommandModule = {
    command: 'router <routerName> <viewPath>',
    describe: 'Add router module',
    builder: {
        routerName: {
            describe: 'router file name'
        },
        viewPath: {
            describe: 'the path where the router views is located'
        }
    },
    async handler(args) {
        let data = {
            args,
            isOverride: false,
            outFile: path.join(
                path.resolve(),
                'src/router',
                args.routerName + '.ts'
            ),
            context: {
                username: gitUser || user.username,
                version,
                curDate: getDate()
            }
        }

        if (fs.existsSync(data.outFile)) {
            let answer = await inq.prompt({
                type: 'confirm',
                name: 'isOverride',
                message: `The "${
                    data.outFile
                }" is exist. Do your want to override it?`
            })
            if (answer['isOverride']) {
                data.isOverride = true
                build(data)
            }
        } else {
            build(data)
        }
    }
}

export default command
