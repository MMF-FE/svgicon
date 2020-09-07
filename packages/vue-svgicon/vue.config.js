const path = require('path')

module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'test') {
            chainTestWebpack(config)
        } else {
            chainLibWebpack(config)
        }
    },
}

function chainLibWebpack(config) {
    config.output.set('library', 'VueSvgIconPlugin')
    config.output.set('libraryExport', 'default')

    config.resolve.symlinks(false)
}

function chainTestWebpack(config) {
    const svgFilePath = path.join(__dirname, '../assets/svg')

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
            options.transformAssetUrls = options.transformAssetUrls || {}
            options.transformAssetUrls['icon'] = ['data']
            return options
        })

    config.module.rule('svg').exclude.add(svgFilePath)

    config.resolve.alias.set('@icon', svgFilePath)

    config.resolve.symlinks(false)
}
