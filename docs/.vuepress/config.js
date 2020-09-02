const path = require('path')
const isPrd = process.env.NODE_ENV === 'production'
const svgFilePath = [path.join(__dirname, '../../packages/assets/svg')]

module.exports = {
    base: isPrd ? '/svgicon/' : '/',
    dest: './docs-dist',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 3,
        locales: {
            '/': {
                selectText: '选择语言',
                label: '中文',
                nav: [
                    {
                        text: '指南',
                        link: '/guide/',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/MMF-FE/svgicon',
                    },
                ],
                sidebar: {
                    '/guide/': ['', 'deep'],
                },
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    {
                        text: 'Guide',
                        link: '/guide/',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/MMF-FE/svgicon',
                    },
                ],
                sidebar: {
                    '/guide/': ['', 'deep'],
                },
            },
        },
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'svgicon',
            description: 'SVG 图标组件和工具集',
        },
        '/en/': {
            lang: 'en-US',
            title: 'svgicon',
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
