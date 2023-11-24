import { defineConfig } from 'vitepress'
import path from 'path'
import svgicon from 'vite-plugin-svgicon'

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'svgicon',
    description: 'SVG icon components and tool set',
    vite: {
        resolve: {
            alias: {
                '@icon': svgFilePath[0],
                '@fa': svgFilePath[1],
            }
        },
        plugins: [
            // @ts-ignore
            svgicon({
                include: ['**/assets/**/*.svg'],
                svgFilePath: [
                    path.join(__dirname, '../../packages/assets/svg'),
                    path.join(__dirname, '../../packages/assets/font-awesome'),
                ],
            })
        ]
    },
    vue: {
        template: {
            transformAssetUrls: {
                'icon': ['data']
            }
        }
    },
    locales: {
        root: {
            lang: 'en-US',
            label: 'English',
            themeConfig: {
                nav: [

                ]
            },
        },
        zh: {
            lang: 'zh-CN',
            label: '简体中文',
            link: '/zh/',
            themeConfig: {
                logoLink: '/zh/',
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
