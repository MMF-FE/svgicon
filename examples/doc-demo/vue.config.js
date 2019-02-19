const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-svgicon/' : '/',
    outputDir: path.join(__dirname, '../../demo')
}
