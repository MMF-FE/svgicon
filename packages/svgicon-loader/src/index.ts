import type { loader } from 'webpack'
import * as loaderUtils from 'loader-utils'
import gen, { SvgoConfig } from '@yzfe/svgicon-gen'
import { LoaderOptions } from '../typings'

const SvgiconLoader: loader.Loader = function (source) {
    this.cacheable(true)

    const callback = this.async()

    const options = (loaderUtils.getOptions(this) || {}) as LoaderOptions

    ;(async () => {
        const icon = await gen(
            source as string,
            this.resourcePath,
            options.svgFilePath,
            options.svgoConfig as SvgoConfig
        )

        if (callback) {
            let result = `
            const data = ${JSON.stringify(icon)}
        `

            switch (options.component) {
                case 'react':
                    result += `
                    import React from 'react'
                    import { ReactSvgIcon } from '@yzfe/react-svgicon'
                    function SvgIconFC (props) {
                        return React.createElement(ReactSvgIcon, {
                            ...props,
                            data
                        })
                    }

                    SvgIconFC.iconName = data.name
                    SvgIconFC.iconData = data.data
                    export default SvgIconFC
                `
                    break
                case 'taro':
                    result += `
                    import React from 'react'
                    import { TaroSvgIcon } from '@yzfe/taro-svgicon'
                    function SvgIconFC (props) {
                        return React.createElement(TaroSvgIcon, {
                            ...props,
                            data
                        })
                    }

                    SvgIconFC.iconName = data.name
                    SvgIconFC.iconData = data.data
                    export default SvgIconFC
                `
                    break
                case 'vue':
                    result += `
                    import { defineComponent, h} from 'vue'
                    import { VueSvgIcon } from '@yzfe/vue-svgicon'
                    const name = (data.name.split('/').pop() || '').replace(/^[\\d_]+/, '')
                    const componentName = name || 'SvgIcon'

                    export default defineComponent({
                        name: componentName,
                        setup() {
                            return {}
                        },
                        render() {
                            return h(VueSvgIcon, {...this.$attrs, data})
                        }
                    })
                `
                    break
                case 'custom':
                    result += options.customCode
                    break
                default:
                    result += `
                    module.exports = data
                    `
                    break
            }
            callback(null, result)
        }
    })()
}

module.exports = SvgiconLoader
