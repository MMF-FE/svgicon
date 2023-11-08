const path = require('path')
const isPrd = process.env.NODE_ENV === 'production'
const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

module.exports = {
    base: isPrd ? '/svgicon/' : '/',
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
                        text: 'API',
                        link: '/api/',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/MMF-FE/svgicon',
                    },
                    {
                        text: 'v3.x',
                        link: 'https://mmf-fe.github.io/svgicon/v3/',
                    },
                ],
                sidebar: {
                    '/guide/': ['', 'component', 'advanced', 'other'],
                    '/api/': [''],
                },
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    {
                        text: 'Guide',
                        link: '/en/guide/',
                    },
                    {
                        text: 'API',
                        link: '/en/api/',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/MMF-FE/svgicon',
                    },
                    {
                        text: 'v3.x',
                        link: 'https://mmf-fe.github.io/svgicon/v3/',
                    },
                ],
                sidebar: {
                    '/en/guide/': ['', 'component', 'advanced', 'other'],
                    '/en/api/': [''],
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
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-66013213-2', // UA-00000000-0
            },
        ],
    ],
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
        config.resolve.alias.set('@fa', svgFilePath[1])

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
