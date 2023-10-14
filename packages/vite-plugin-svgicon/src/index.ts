/* eslint-disable @typescript-eslint/no-non-null-assertion */
import gen, { SvgoConfig } from '@yzfe/svgicon-gen'
import { promises as fs } from 'fs'
import { minimatch } from 'minimatch'

import { Plugin } from 'vite'

//#region PluginOptions
export interface PluginOptions {
    svgFilePath?: string | string[]
    /** load as a component */
    component?: 'react' | 'vue' | 'custom'
    /** custom code when load as a custom component */
    customCode?: string
    svgoConfig?: SvgoConfig
    /** Svg files to be excluded, use minimatch */
    exclude?: string | string[]
    /** Svg files to be included, use minimatch */
    include?: string | string[]
    /** Match query which import icon with query string */
    matchQuery?: RegExp
}
//#endregion PluginOptions

function isSvgIconFile(id: string, options: PluginOptions) {
    if (!options.include) return false

    const includes = Array.isArray(options.include)
        ? options.include
        : [options.include]

    const excludes =
        options.exclude &&
        (Array.isArray(options.exclude) ? options.exclude : [options.exclude])

    return includes.some((includePattern) => {
        return (
            minimatch(id, includePattern, {
                dot: true,
            }) &&
            (!excludes ||
                excludes.every((excludePattern) => {
                    return !minimatch(id, excludePattern, {
                        dot: true,
                    })
                }))
        )
    })
}

async function genSvgIcon(
    source: string,
    filename: string,
    options: PluginOptions
) {
    const iconData = await gen(
        source,
        filename,
        options.svgFilePath,
        options.svgoConfig
    )

    let result = `
    const data = ${JSON.stringify(iconData)}
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
        case 'vue':
            result += `
            import { defineComponent, h} from 'vue'
            import { VueSvgIcon } from '@yzfe/vue3-svgicon'
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
            export default data
            `
            break
    }

    return result
}

export default function svgicon(options: PluginOptions = {}): Plugin {
    const plugin: Plugin = {
        name: 'svgicon',
        enforce: 'pre',
        async load(id: string) {
            if (id?.includes('?')) {
                const query = id.split('?').pop()
                if (query && options.matchQuery?.test(query)) {
                    id = id.replace('?' + query, '')
                }
            }
            if (isSvgIconFile(id, options)) {
                const code = await fs.readFile(id, 'utf-8')
                return genSvgIcon(code, id, options)
            }
        },
    }

    return plugin
}
