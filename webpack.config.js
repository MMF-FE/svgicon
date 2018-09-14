const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const REPORT = process.env.REPORT

let config = {
    mode: 'production',
    entry: {
        polyfill: './polyfill/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'VueSvgIconPolyfill',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: false
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: []
}

if (REPORT) {
    config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
