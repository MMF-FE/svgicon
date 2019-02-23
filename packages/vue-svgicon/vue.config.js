module.exports = {
    chainWebpack: config => {
        config.output.set('library', 'VueSvgIconPlugin')
        config.output.set('libraryExport', 'default')

        config.resolve.symlinks(false)
    }
}
