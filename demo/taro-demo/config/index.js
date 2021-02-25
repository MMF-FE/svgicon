import path from 'path'

const svgFilePath = [
  path.join(__dirname, '../../../packages/assets/svg'),
  path.join(__dirname, '../../../packages/assets/font-awesome'),
]

const config = {
  projectName: 'taro-demo',
  date: '2021-2-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@icon': svgFilePath[0],
    '@fa': svgFilePath[1]
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain (chain, webpack) {
      chain.merge({
        module: {
          rule: {
            svgIcon: {
              test: /\.svg$/,
              include: svgFilePath,
              use: [{
                loader: "@yzfe/svgicon-loader",
                options: {
                  svgFilePath,
                  component: 'taro',
                }
              }]
            }
          }
        }
      })

      chain.module
      .rule('image')
      .exclude.add(svgFilePath)
      .end()
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui'],
    webpackChain (chain, webpack) {
      chain.merge({
        module: {
          rule: {
            svgIcon: {
              test: /\.svg$/,
              include: svgFilePath,
              use: [{
                loader: "@yzfe/svgicon-loader",
                options: {
                  svgFilePath,
                  component: 'taro',
                }
              }]
            }
          }
        }
      })

      chain.module
      .rule('image')
      .exclude.add(svgFilePath)
      .end()
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
