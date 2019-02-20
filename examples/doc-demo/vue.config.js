const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-svgicon/' : '/',
    chainWebpack: config => {
        config.module
            .rule('vue-svgicon')
            .test(/\.vuesvgicon$/)
            .use('svgicon')
            .loader('@yzfe/vue-svgicon-loader')

        config.resolve.symlinks(false)
    }
}
