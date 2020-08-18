const path = require('path')
const svgFilePaths = '<%= svgFilePath %>'.split(',').map((v) => path.resolve(v))
const tagName = '<%= tagName %>'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {},
    transformAssetUrls: {
        [tagName]: ['data'],
    },
}
