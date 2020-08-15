const path = require('path')
const svgFilePath = path.join(__dirname, '../../packages/assets/svg')

module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                idSeparator: '_',
                svgFilePath,
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((options) => {
                options.transformAssetUrls = options.transformAssetUrls || {}
                options.transformAssetUrls['icon'] = ['data']
                return options
            })

        config.resolve.alias.set('@icon', svgFilePath)
        config.resolve.symlinks(false)
    },
}
