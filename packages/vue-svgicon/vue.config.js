module.exports = {
    chainWebpack: config => {
        // config.externals(['@yzfe/vue-svgicon-loader'])
        config.output.set('library', 'VueSvgIconPlugin')
        config.output.set('libraryExport', 'default')
    }
}
