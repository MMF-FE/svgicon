require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const inquirer = require('inquirer')
const envList = ['doc', 'dev', 'sit', 'uat', 'deploy']

async function build() {
    if (!process.env.ENV) {
        throw new Error('请设置 process.env.ENV')
        process.exit(1)
    }

    if (envList.indexOf(process.env.ENV) < 0) {
        throw new Error('没有对应的 ENV')
        process.exit(1)
    }

    const config = require('./config')
    const utils = require('./utils')

    return new Promise((resolve, reject) => {
        rm(
            path.join(config.build.assetsRoot, config.build.assetsSubDirectory),
            async err => {
                if (err) return reject(err)
                try {
                    let loader = utils.loading('building for dll...')
                    const dllWebpackConfig = require('./webpack.dll.conf')
                    await utils.runWebpack(dllWebpackConfig)
                    loader.stop()

                    loader = utils.loading('building for production... ')
                    const webpackConfig = require('./webpack.prod.conf')
                    await utils.runWebpack(webpackConfig)
                    loader.stop()

                    console.log(chalk.cyan('  Build complete.\n'))
                    console.log(
                        chalk.yellow(
                            '  Tip: built files are meant to be served over an HTTP server.\n' +
                                "  Opening index.html over file:// won't work.\n"
                        )
                    )
                    resolve()
                } catch (error) {
                    console.log(chalk.red(error))
                    reject(error)
                }
            }
        )
    })
}

if (!module.parent) {
    // 直接运行
    ;(async function() {
        let answers = null
        // 如果没有指明坏境就询问
        if (!process.env.ENV) {
            answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'env',
                    message: '要 build 的坏境是?',
                    choices: envList,
                    default: 'dev'
                }
            ])
            process.env.ENV = answers.env
        }
        build()
    })()
} else {
    // 被其他模块调用
    module.exports = build
}
