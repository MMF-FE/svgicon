/**
 *
 * @author vfasky<vfasky@gmail.com>
 *
 **/
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const coverage = process.env.NODE_ENV === 'coverage'

var config = {
  resolve: {
    modules: [
      path.resolve('./component'),
      "node_modules"
    ],
    alias: {
      'vue-svgicon': path.resolve('./index.js')
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    loaders: [].concat([
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ])
  },
  plugins: [],
  // target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "#inline-cheap-module-source-map"
}

if (coverage) {
  config.module.loaders = [{
    test: /\.(js|ts|vue)/,
    exclude: /(node_modules|bower_components)/,
    include: path.resolve('./component'),  // instrument only testing sources with Istanbul, after ts-loader runs
    loader: 'istanbul-instrumenter-loader'
  }].concat(config.module.loaders)
}

module.exports = config
