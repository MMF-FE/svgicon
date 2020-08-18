const path = require('path')
const svgFilePaths = '../../packages/assets/svg,./src/assets/svg'
    .split(',')
    .map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        '@icon': svgFilePaths[0],
        '@assetsIcon': svgFilePaths[1],
    },
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
