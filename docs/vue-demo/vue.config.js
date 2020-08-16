const path = require('path')
const svgFilePath = path.join(__dirname, '../../packages/assets/svg')

module.exports = {
    pluginOptions: {
        vueSvgicon: {
            svgFilePath,
            pathAlias: '@icon',
            transformAssetUrls: {
                icon: ['data'],
            },
        },
    },

    chainWebpack: (config) => {
        config.resolve.symlinks(false)
    },
}
