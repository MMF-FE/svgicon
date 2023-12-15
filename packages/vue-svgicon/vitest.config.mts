/// <reference types="vitest" />

import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import svgicon from 'vite-plugin-svgicon'

const filename = (metaUrl) => fileURLToPath(metaUrl)
const __dirname = path.dirname(filename(import.meta.url))

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

export default defineConfig({
    plugins: [
        Vue(),
        svgicon({
            include: ['**/assets/**/*.svg'],
            svgFilePath,
        }),
        svgicon({
            include: ['**/assets/**/*.svg'],
            matchQuery: /component/,
            svgFilePath: [svgFilePath[0]],
            component: 'vue',
        }),
    ],
    resolve: {
        preserveSymlinks: true,
        alias: [
            {
                find: '@icon',
                replacement: svgFilePath[0],
            },
            {
                find: '@fa',
                replacement: svgFilePath[1],
            },
            {
                find: '@yzfe/vue-svgicon',
                replacement: path.join(
                    __dirname,
                ),
            },
        ],
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
})
