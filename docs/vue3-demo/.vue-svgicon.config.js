const path = require('path')
const svgFilePaths = ["./src/assets/svg-icon", "../../packages/assets/svg"].map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        '@yzfe/vue-svgicon$': "@yzfe/vue-svgicon/dist/vue3.js",
    },
    transformAssetUrls: {},
}
