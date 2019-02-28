const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-svgicon/' : '/',
    chainWebpack: config => {
        config.module
            .rule('vue-svgicon')
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/vue-svgicon-loader')
            .options({
                idSeparator: '-',
                svgFilePath: path.join(__dirname, 'src/assets/svg')
            })

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = options.transformAssetUrls || {}
                options.transformAssetUrls['icon'] = ['name', 'icon']
                return options
            })

        config.module
            .rule('svg')
            .exclude.add(path.join(__dirname, './src/assets/svg'))

        config.resolve.alias.set(
            '@icon',
            path.join(__dirname, './src/assets/svg')
        )

        config.resolve.symlinks(false)
    }
}
