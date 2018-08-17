require('shelljs/global')

const path = require('path')
const config = require('./config')
const ora = require('ora')
let webpack = require('webpack')
const env = process.env.ENV || 'dev'
const packageConfig = require('../package.json')

let assetsRoot = config.dev.assetsRoot
let assetsSubDirectory = config.dev.assetsSubDirectory

if (process.env.NODE_ENV === 'production') {
    assetsRoot = config.build.assetsRoot
    assetsSubDirectory = config.build.assetsSubDirectory
}

exports.assetsPath = function(_path) {
    return path.posix.join(assetsSubDirectory, _path)
}

exports.getDllNames = function() {
    let map = {}
    ls(path.join(assetsRoot, assetsSubDirectory, '**/*.dll.*.js')).forEach(
        file => {
            let info = path.parse(file)

            map[
                String(info.name)
                    .split('.dll.')
                    .shift() + '.dll'
            ] = path.join(assetsSubDirectory, 'dll', info.base)
        }
    )

    return map
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}

// run webpack
exports.runWebpack = function(webpackConfig) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                reject(err)
                return
            }
            process.stdout.write(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false
                }) + '\n\n'
            )

            if (stats.hasErrors()) {
                reject(new Error('Build failed with errors.\n'))
            } else {
                resolve(stats)
            }
        })
    })
}

exports.loading = function(msg = 'loading') {
    var spinner = ora(msg + ' ')
    spinner.start()
    return spinner
}
