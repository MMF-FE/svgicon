const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const configPath = path.resolve('./.vue-svgicon.config.js')
let options = {}

if (fs.existsSync(configPath)) {
    options = require(configPath)
}

module.exports = (api, cliOptions) => {
    if (cliOptions.pluginOptions && cliOptions.pluginOptions.vueSvgicon) {
        _.merge(options, cliOptions.pluginOptions.vueSvgicon)
    }

    //#region chainWebpack
    const svgFilePath = options.svgFilePath
    const svgoConfig = options.svgoConfig
    const pathAlias = options.pathAlias
    const transformAssetUrls = options.transformAssetUrls

    api.chainWebpack((config) => {
        if (!svgFilePath) {
            console.error('@yzfe/vue-cli-plugin-svgicon: svgFilePath no set.')
            return
        }

        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                svgFilePath,
                svgoConfig,
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        if (transformAssetUrls && Object.keys(transformAssetUrls).length) {
            config.module
                .rule('vue')
                .use('vue-loader')
                .loader('vue-loader')
                .tap((opt) => {
                    opt.transformAssetUrls = opt.transformAssetUrls || {}
                    // opt.transformAssetUrls['icon'] = ['data']
                    for (let tag in transformAssetUrls) {
                        opt.transformAssetUrls[tag] = transformAssetUrls[tag]
                    }
                    return opt
                })
        }

        if (pathAlias && Object.keys(pathAlias).length) {
            for (let name in pathAlias) {
                config.resolve.alias.set(name, pathAlias[name])
            }
        }
    })
    // #endregion chainWebpack
}
