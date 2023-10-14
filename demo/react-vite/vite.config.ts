import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react'
import svgicon from 'vite-plugin-svgicon'

const filename = (metaUrl) => fileURLToPath(metaUrl)
const __dirname = path.dirname(filename(import.meta.url))

const srcPath = path.resolve(__dirname, './src')

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgicon({
            include: [
                '**/assets/svg/**/*.svg',
                '**/assets/font-awesome/**/*.svg',
            ],
            svgFilePath: svgFilePath[0],
            component: 'react',
        }),
        svgicon({
            include: ['**/assets/font-awesome/**/*.svg'],
            svgFilePath: svgFilePath[1],
            component: 'react',
        }),
    ],
    resolve: {
        alias: [
            {
                find: /^@\//,
                replacement: `${srcPath}${path.sep}`,
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
                find: '@yzfe/react-svgicon',
                replacement: path.join(
                    __dirname,
                    'node_modules/@yzfe/react-svgicon'
                ),
            },
        ],
    },
})
