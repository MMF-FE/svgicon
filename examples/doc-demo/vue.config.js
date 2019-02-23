const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-svgicon/' : '/',
    chainWebpack: config => {
        config.module
            .rule('vue-svgicon')
            .test(/\.vuesvgicon$/)
            .use('svgicon')
            .loader('@yzfe/vue-svgicon-loader')

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // options.transformAssetUrls = options.transformAssetUrls || {}
                // options.transformAssetUrls['icon'] = ['name', 'icon']
                return options
            })

        config.resolve.alias.set(
            '@icon',
            '@yzfe/vue-svgicon-loader/test.vuesvgicon'
        )

        config.resolve.symlinks(false)
    }
}
