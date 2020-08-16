const path = require('path')
const svgFilePath = path.resolve('../../packages/assets/svg')
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath,
    svgoConfig: {},
    pathAlias: '@icon',
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
