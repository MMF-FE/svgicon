import { defineConfig } from 'umi'
import path from 'path'

const svgFilePath = [
    path.join(__dirname, '../../packages/assets/svg'),
    path.join(__dirname, '../../packages/assets/font-awesome'),
]

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [{ path: '/', component: '@/pages/index' }],
    chainWebpack(config) {
        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                svgFilePath,
                component: 'react',
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        config.resolve.alias.set('@icon', svgFilePath[0])
        config.resolve.alias.set('@fa', svgFilePath[1])
    },
})
