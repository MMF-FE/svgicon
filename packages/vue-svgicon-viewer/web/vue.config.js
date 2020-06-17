const path = require('path')
const fs = require('fs')
const svgFilePath = process.env.SVGFILEPATH || ''
let metaPath = process.env.METAPATH || path.join(svgFilePath, 'meta.json')

if (!fs.existsSync(metaPath)) {
    metaPath = path.join(__dirname, 'meta.json')
}

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue-svgicon')
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/vue-svgicon-loader')
            .options({
                idSeparator: '_',
                svgFilePath
            })

        config.module.rule('svg').exclude.add(svgFilePath)

        config.resolve.alias.set('@icon', svgFilePath)

        config.resolve.alias.set('@meta', metaPath)

        let postcssOptions = {
            sourceMap: false,
            config: {
                path: path.join(__dirname, './postcss.config.js')
            }
        }

        config.module
            .rule('css')
            .oneOf('normal')
            .use('postcss-loader')
            .options(postcssOptions)
        config.module
            .rule('css')
            .oneOf('vue-modules')
            .use('postcss-loader')
            .options(postcssOptions)
        config.resolve.symlinks(false)
    }
}
