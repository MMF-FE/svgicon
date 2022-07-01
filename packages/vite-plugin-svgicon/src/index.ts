/* eslint-disable @typescript-eslint/no-non-null-assertion */
import gen, { SvgoConfig } from '@yzfe/svgicon-gen'
import { promises as fs } from 'fs'
import minimatch from 'minimatch'
import { Plugin } from 'vite'

export interface PluginOptions {
    svgFilePath?: string | string[]
    /** load as a component */
    component?: 'react' | 'custom'
    /** custom code when load as a custom component */
    customCode?: string
    svgoConfig?: SvgoConfig
    /** Svg files to be excluded, use minimatch */
    exclude?: string | string[]
    /** Svg files to be included, use minimatch */
    include?: string | string[]
}

let vuePlugin: Plugin

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
            minimatch(id, includePattern) &&
            (!excludes ||
                excludes.every((excludePattern) => {
                    return !minimatch(id, excludePattern)
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
    if (options.component === 'react') {
        result += `
            import React from 'react'
            import { ReactSvgIcon } from '@yzfe/react-svgicon'
            function SvgIconFC (props) {
                var newProps = {
                    data: data
                }
                if (props) {
                    Object.keys(props).forEach(function each(key) {
                        newProps[key] = props[key]
                    })
                }
                return React.createElement(ReactSvgIcon, newProps)
            }

            SvgIconFC.iconName = data.name

            export default SvgIconFC
        `
    } else if (options.component === 'custom') {
        result += options.customCode
    } else {
        result += `
        export default data
        `
    }
    return result
}

export default function svgicon(options: PluginOptions = {}): Plugin {
    const plugin: Plugin = {
        name: 'svgicon',
        enforce: 'pre',
        configResolved(config) {
            vuePlugin = config.plugins.find((p) => p.name === 'vite:vue')!

            // find vue2
            if (!vuePlugin) {
                vuePlugin = config.plugins.find(
                    (p) => p.name === 'vite-plugin-vue2'
                )!
            }

            if (!vuePlugin)
                throw new Error(
                    '[vite-plugin-svgicon] no vue plugin found, do you forget to install it?'
                )
        },
        async load(id: string) {
            if (isSvgIconFile(id, options)) {
                const code = await fs.readFile(id, 'utf-8')
                return genSvgIcon(code, id, options)
            }
        },
        async handleHotUpdate(ctx) {
            if (isSvgIconFile(ctx.file, options)) {
                return vuePlugin.handleHotUpdate?.({
                    ...ctx,
                    async read() {
                        return genSvgIcon(await ctx.read(), ctx.file, options)
                    },
                })
            }
        },
    }

    return plugin
}
