module.exports = {
    configureWebpack: () => {
        return {
            externals: [
                /\@yzfe\/vue-svgicon-loader/i,
                {
                    vue: {
                        commonjs: 'vue',
                        commonjs2: 'vue',
                        root: 'Vue'
                    }
                }
            ]
        }
    },
    chainWebpack: config => {
        config.output.set('library', 'VueSvgIconPlugin')
        config.output.set('libraryExport', 'default')

        config.resolve.symlinks(false)
    }
}
