import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import { fileURLToPath } from 'url'

import svgicon from 'vite-plugin-svgicon'

const filename = (metaUrl) => fileURLToPath(metaUrl)
const __dirname = path.dirname(filename(import.meta.url))

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    video: ['src', 'poster'],
                    source: ['src'],
                    img: ['src'],
                    image: ['xlink:href', 'href'],
                    use: ['xlink:href', 'href'],
                    icon: ['data'],
                },
            },
        }),
        svgicon({
            include: ['**/assets/**/*.svg'],
            svgFilePath: [
                path.join(__dirname, '../../packages/assets/svg'),
                path.join(__dirname, '../../packages/assets/font-awesome'),
            ],
        }),
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            matchQuery: /component/,
            svgFilePath: path.join(__dirname, '../../packages/assets'),
            component: 'vue',
        }),
    ],
    resolve: {
        alias: [
            {
                find: /^vue$/,
                replacement: path.join(__dirname, 'node_modules/vue'),
            },
            {
                find: '@icon',
                replacement: svgFilePath[0],
            },
            {
                find: '@fa',
                replacement: svgFilePath[1],
            },
            {
                find: '@yzfe/vue3-svgicon',
                replacement: path.join(
                    __dirname,
                    'node_modules/@yzfe/vue3-svgicon'
                ),
            },
        ],
    },
})
