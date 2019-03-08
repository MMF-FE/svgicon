const path = require('path')
const svgFilePath = process.env.SVG || ''

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
