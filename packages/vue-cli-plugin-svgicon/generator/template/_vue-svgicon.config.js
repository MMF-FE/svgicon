const path = require('path')
const svgFilePaths = <%- JSON.stringify(svgFilePath.split('|'), null) %>.map((v) => path.resolve(v))
const tagName = '<%= tagName %>'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {},
    <%_ if (isVue3) { _%>
    transformAssetUrls: {},
    <%_ } else { _%>
    transformAssetUrls: {
        [tagName]: ['data'],
    },
    <%_ } _%>
}
