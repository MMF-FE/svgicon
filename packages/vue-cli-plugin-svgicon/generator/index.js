const pkg = require('../package.json')
const devDeps = pkg.devDependencies

module.exports = (api, options) => {
    api.render('./template', options)

    let deps = {
        '@yzfe/svgicon': devDeps['@yzfe/svgicon'],
    }

    deps['@yzfe/vue-svgicon'] = devDeps['@yzfe/vue-svgicon']
    api.injectImports(api.entryFile, [
        `import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'`,
        `import '@yzfe/svgicon/lib/svgicon.css'`,
    ])

    api.extendPackage({
        dependencies: deps,
        devDependencies: {
            '@yzfe/svgicon-loader': devDeps['@yzfe/svgicon-loader'],
        },
    })
}

module.exports.hooks = (api, options) => {
    api.afterInvoke(() => {})
}
