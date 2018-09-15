const appEnv = process.env.APP_ENV

module.exports = {
    presets: [
        [
            '@vue/app',
            {
                useBuiltIns: appEnv === 'lib' ? false : 'usage'
            }
        ]
    ]
}
