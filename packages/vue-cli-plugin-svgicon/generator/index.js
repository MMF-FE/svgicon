const pkg = require('../package.json')
module.exports = (api, options) => {
    api.render('./template', options)
    api.extendPackage({
        dependencies: {
            '@yzfe/vue-svgicon': pkg.dependencies['@yzfe/vue-svgicon'],
        },
    })

    api.injectImports(
        api.entryFile,
        `import { VueSvgIcon } from '@yzfe/vue-svgicon'`
    )

    api.injectImports(
        api.entryFile,
        `import '@yzfe/vue-svgicon/dist/index.css'`
    )
}

module.exports.hooks = (api, options) => {
    api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
            encoding: 'utf-8',
        })
        const lines = contentMain.split(/\r?\n/g)

        let injectCode = `
Vue.component('${options.tagName}', VueSvgIcon)
`

        if (options.isVue3) {
            injectCode = `
app.component('${options.tagName}', VueSvgIcon)
`
        }

        const renderIndex = lines.findIndex((line) => line.match(/new Vue/))
        lines[renderIndex - 1] += `${injectCode}`

        fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
    })
}
