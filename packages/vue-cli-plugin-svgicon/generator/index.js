const pkg = require('../package.json')
const devDeps = pkg.devDependencies

module.exports = (api, options) => {
    api.render('./template', options)

    let deps = {
        '@yzfe/svgicon': devDeps['@yzfe/svgicon'],
    }

    if (options.isVue3) {
        deps['@yzfe/vue3-svgicon'] = devDeps['@yzfe/vue3-svgicon']
        api.injectImports(api.entryFile, [
            `import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'`,
            `import '@yzfe/svgicon/lib/svgicon.css'`,
        ])
    } else {
        deps['@yzfe/vue-svgicon'] = devDeps['@yzfe/vue-svgicon']
        api.injectImports(api.entryFile, [
            `import { VueSvgIcon } from '@yzfe/vue-svgicon'`,
            `import '@yzfe/svgicon/lib/svgicon.css'`,
        ])
    }

    api.extendPackage({
        dependencies: deps,
        devDependencies: {
            '@yzfe/svgicon-loader': devDeps['@yzfe/svgicon-loader'],
        },
    })
}

module.exports.hooks = (api, options) => {
    api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
            encoding: 'utf-8',
        })

        const lines = contentMain.split(/\r?\n/g)

        if (options.isVue3) {
            let injectCode = `.use(VueSvgIconPlugin, { tagName: '${options.tagName}' })`
            const renderIndex = lines.findIndex((line) =>
                line.match(/createApp\(\w+\)/)
            )
            lines[renderIndex] = lines[renderIndex].replace(
                /createApp\(\w+\)/g,
                (match) => {
                    return match + injectCode
                }
            )
        } else {
            let injectCode = `
Vue.component('${options.tagName}', VueSvgIcon)
`
            const renderIndex = lines.findIndex((line) => line.match(/new Vue/))
            lines[renderIndex - 1] += `${injectCode}`
        }

        fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
    })
}
