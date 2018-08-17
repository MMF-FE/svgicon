import * as os from 'os'
import * as path from 'path'
import * as yargs from 'yargs'
import * as colors from 'colors'
import getGitUser from '../util/getGitUser'
import getDate from '../util/getDate'
import generate from '../tpl/generate'

// 路径分隔符
const PS = path.sep

// tslint:disable-next-line
let version = require('../../package.json').version
let gitUser = getGitUser()
let user = os.userInfo({ encoding: 'utf8' })

let command: yargs.CommandModule = {
    command: ['add <componentPath>', 'a'],
    describe: 'Add a component to project',
    builder: {
        help: {
            alias: 'h'
        }
    },
    handler(args) {
        let dirs = (args.componentPath as string).split(PS)
        let srcPath = dirs[0]
        let componentPath = dirs.slice(1).join(PS)

        let i18nKey = dirs.slice(1).join('.')
        let componentName = componentPath.substr(
            componentPath.lastIndexOf(PS) + 1
        )
        let ComponentName =
            componentName[0].toLocaleUpperCase() + componentName.substr(1)

        // 如果确定需要在 src 目录以外添加组件，请删除这个判断
        if (srcPath !== 'src') {
            console.log(
                colors.red(
                    '如果您确定需要在 src 目录以外添加组件，请删除 tools/command/add.ts 中的判断逻辑。'
                )
            )
            return false
        }

        let distFilePath = path.join(path.resolve(), args.componentPath)

        generate(distFilePath, {
            i18nKey,
            componentPath: componentPath
                .toLowerCase()
                .split(PS)
                .join('-'),
            componentName: componentName,
            ComponentName: ComponentName,
            username: gitUser || user.username,
            version: version,
            curDate: getDate()
        })
    }
}

export default command
