const path = require('path')
const webpack = require('webpack')
var config = require('./config')
var env = process.env.ENV || 'dev'
require('shelljs/global')

const assetsRoot = config.build.assetsRoot

rm(path.join(assetsRoot, '**/*.dll.*.js'))
rm(path.join(assetsRoot, '**/*.dll.*.js.map'))

let webpackConfig = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: {
        vendor: ['tslib'],
        vue: [
            'vue/dist/vue.runtime.esm.js',
            'vue-router',
            'vuex',
            'vue-svgicon',
            'vue-property-decorator',
            'vue-class-component',
            'vuex-class'
        ]
    },
    output: {
        path: path.join(assetsRoot, config.build.assetsSubDirectory),
        filename: 'dll/[name].dll.[chunkhash].js',
        library: '[name]_library',
        publicPath:
            env === 'dev'
                ? config.dev.assetsPublicPath
                : config.build.assetsPublicPath
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js'
        }
    },
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: env === 'dev' ? '"development"' : '"production"'
            }
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DllPlugin({
            path: path.join(assetsRoot, 'manifest', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}

module.exports = webpackConfig
