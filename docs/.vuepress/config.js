const path = require('path')
const isPrd = process.env.NODE_ENV === 'production'
const svgFilePath = [path.join(__dirname, '../../packages/assets/svg')]

module.exports = {
    base: isPrd ? '/yzfe/svgicon/' : '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'YZFE-SvgIcon',
            description: 'SVG 图标组件和工具集',
        },
        '/en/': {
            lang: 'en-US',
            title: 'YZFE-SvgIcon',
            description: 'SVG icon components and toolset',
        },
    },
    chainWebpack: (config) => {
        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                svgFilePath,
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        config.resolve.alias.set('@icon', svgFilePath[0])

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((opt) => {
                opt.transformAssetUrls = opt.transformAssetUrls || {}
                opt.transformAssetUrls['icon'] = ['data']
                return opt
            })
    },
}
