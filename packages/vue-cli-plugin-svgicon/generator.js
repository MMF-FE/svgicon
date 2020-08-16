const package = require(__dirname, './package.json')

module.exports = (api) => {
    api.extendPackage({
        devDependencies: {
            '@yzfe/vue-svgicon': package.dependencies['@yzfe/vue-svgicon'],
        },
    })
}
