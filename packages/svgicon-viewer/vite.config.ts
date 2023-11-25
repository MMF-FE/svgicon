import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'

const srcPath = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: /^@\//,
                replacement: `${srcPath}${path.sep}`,
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
