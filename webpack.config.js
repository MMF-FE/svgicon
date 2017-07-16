var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var isBuild = process.env.NODE_ENV === 'production'

var config = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, './demo/src'),
      path.join(__dirname, './node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.join(__dirname, './demo/src'),
      'vue-svgicon': path.join(__dirname, './index.js'),
      'polyfill': path.join(__dirname, './polyfill/index.js')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (isBuild) {
  config.devtool = ''
  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

var demo = merge(config, {
  entry: {
    'demo': './demo/src/main.js'
  },
})

var build = merge(config, {
  entry: {
    'index': './index.js'
  },
  output: {
    library: 'VueSvgIcon',
    libraryTarget: 'umd'
  }
})

var polyfill = merge(config, {
  entry: {
    'polyfill': './polyfill/index.js'
  },
  output: {
    library: 'VueSvgIconPolyfill',
    libraryTarget: 'umd'
  }
})

if (isBuild) {
  module.exports = [demo, build, polyfill]
} else {
  module.exports = demo
}
