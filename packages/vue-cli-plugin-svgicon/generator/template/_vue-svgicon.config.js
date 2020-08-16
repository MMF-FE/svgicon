const path = require('path')
const svgFilePath = path.resolve('<%= svgFilePath %>')
const tagName = '<%= tagName %>'

module.exports = {
    tagName,
    svgFilePath,
    svgoConfig: {},
    pathAlias: '@icon',
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
