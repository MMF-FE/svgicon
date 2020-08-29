const path = require('path')
const svgFilePaths = <%- JSON.stringify(svgFilePath.split('|'), null) %>.map((v) => path.resolve(v))
const tagName = '<%= tagName %>'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    <%_ if (isVue3) { _%>
    pathAlias: {
        '@yzfe/vue-svgicon$': "@yzfe/vue-svgicon/dist/vue3.js"
    },
    transformAssetUrls: {},
    <%_ } else { _%>
    pathAlias: {},
    transformAssetUrls: {
        [tagName]: ['data'],
    },
    <%_ } _%>
}
