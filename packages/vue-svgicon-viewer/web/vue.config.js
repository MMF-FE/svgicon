const webpack = require('webpack')
const svgFilePath = process.env.SVG

module.exports = {
    chainWebpack: config => {
        config.plugin('defineSVGPath').use(webpack.DefinePlugin, [
            {
                SVG_FILE_PATH: JSON.stringify(svgFilePath)
            }
        ])
    }
}
