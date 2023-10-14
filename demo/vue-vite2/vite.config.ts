import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import svgicon from 'vite-plugin-svgicon'

const svgFilePath = [path.join(__dirname, '../../packages/assets/svg')]

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
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, '../../packages/assets/svg'),
        }),
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            matchQuery: /component/,
            component: 'vue',
            svgFilePath: path.join(__dirname, '../../packages/assets/svg'),
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
                find: '@yzfe/vue3-svgicon',
                replacement: path.join(
                    __dirname,
                    'node_modules/@yzfe/vue3-svgicon'
                ),
            },
        ],
    },
})
