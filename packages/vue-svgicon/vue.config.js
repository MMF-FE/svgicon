const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const svgFilePath = path.join(__dirname, '../assets/svg')

module.exports = defineConfig({
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'test') {
            config.module
                .rule('vue-svgicon')
                .test(/\.svg$/)
                .use('svgicon')
                .loader('@yzfe/svgicon-loader')
                .options({
                    idSeparator: '_',
                    svgFilePath,
                })
            config.module
                .rule('vue')
                .use('vue-loader')
                .loader('vue-loader')
                .tap((options) => {
                    options.transformAssetUrls =
                        options.transformAssetUrls || {}
                    options.transformAssetUrls['icon'] = ['data']
                    return options
                })
            config.module.rule('svg').exclude.add(svgFilePath)
            config.resolve.alias.set('@icon', svgFilePath)
        }
        // config.resolve.symlinks(false)
    },
})
