/**
 * create store module
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

function build(data) {
    let outFile = data.outFile
    let renderData = {
        username: data.context.username,
        curDate: data.context.curDate,
        version: data.context.version,
        storeName: data.args.storeName
    }

    let tpl = path.join(__dirname, '../tpl/store/store.ts.txt')
    let code = compileFile(tpl, renderData)

    fs.writeFileSync(outFile, code, 'utf8')
    console.log(colors.green('write file: '))
    console.log(colors.underline(outFile))
}

let command: yargs.CommandModule = {
    command: 'store <storeName>',
    describe: 'Add store module',
    builder: {
        path: {
            alias: 'p',
            describe: 'The store module path',
            default: 'src/store/modules'
        },
        filename: {
            alias: 'n',
            describe: 'The store file name. Default is store name'
        }
    },
    async handler(args) {
        let filename = args.filename || args.storeName
        let data = {
            args,
            outFile: path.join(path.resolve(), args.path, filename + '.ts'),
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
                build(data)
            }
        } else {
            build(data)
        }
    }
}

export default command
