const path = require('path')
const svgFilePaths = [
    '../../packages/assets/svg',
    '../../packages/assets/font-awesome',
    './src/assets/svg',
].map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        '@icon': svgFilePaths[0],
        "@fa": svgFilePaths[1],
        '@assetsIcon': svgFilePaths[2],
    },
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
