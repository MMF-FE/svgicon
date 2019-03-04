const webpack = require('webpack')
const svgFilePath = process.env.SVG || ''
console.log(svgFilePath)
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
        config.resolve.symlinks(false)
    }
}
