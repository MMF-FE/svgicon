// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        // to edit target browsers: use "browserlist" field in package.json
        // 浏览器配置在 package.json 那里编辑
        autoprefixer: {},
        'postcss-assets': {
            relative: true,
            loadPaths: ['./src/assets/images']
        }
    }
}
