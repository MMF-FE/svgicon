import { defineConfig } from 'vitepress'
import path from 'path'
import svgicon from 'vite-plugin-svgicon'
const isPrd = process.env.NODE_ENV === 'production'

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: isPrd ? '/svgicon/' : '/',
    title: 'svgicon',
    description: 'SVG icon components and tool set',
    vite: {
        resolve: {
            alias: {
                '@icon': svgFilePath[0],
                '@fa': svgFilePath[1],
            },
        },
        plugins: [
            // @ts-ignore
            svgicon({
                include: ['**/assets/**/*.svg'],
                svgFilePath: [
                    path.join(__dirname, '../../packages/assets/svg'),
                    path.join(__dirname, '../../packages/assets/font-awesome'),
                ],
            }),
        ],
    },
    vue: {
        template: {
            transformAssetUrls: {
                icon: ['data'],
            },
        },
    },
    locales: {
        root: {
            lang: 'en-US',
            label: 'English',
            title: 'svgicon',
            description: 'SVG icon components and toolset',
            themeConfig: {
                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'API', link: '/api/' },
                    {
                        text: 'v3.x',
                        link: 'https://mmf-fe.github.io/svgicon/v3/',
                    },
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: 'Quick Start',
                            link: '/guide/',
                        },
                        {
                            text: 'Component',
                            link: '/guide/component',
                        },
                        {
                            text: 'In-Depth',
                            link: '/guide/advanced',
                        },
                        {
                            text: 'Other',
                            link: '/guide/other',
                        },
                    ],
                },
            },
        },
        zh: {
            lang: 'zh-CN',
            label: '简体中文',
            link: '/zh/',
            title: 'svgicon',
            description: 'SVG 图标组件和工具集',
            themeConfig: {
                logoLink: '/zh/',
                nav: [
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'API', link: '/zh/api/' },
                    {
                        text: 'v3.x',
                        link: 'https://mmf-fe.github.io/svgicon/v3/',
                    },
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            text: '快速上手',
                            link: '/zh/guide/',
                        },
                        {
                            text: '组件',
                            link: '/zh/guide/component',
                        },
                        {
                            text: '深入',
                            link: '/zh/guide/advanced',
                        },
                        {
                            text: '其他',
                            link: '/zh/guide/other',
                        },
                    ],
                },
            },
        },
    },
    themeConfig: {
        search: {
            provider: 'local',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/MMF-FE/svgicon' },
        ],
    },
})
