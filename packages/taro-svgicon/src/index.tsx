import React from 'react'
import {
    svgIcon,
    Props,
    Options,
    setOptions,
    getPropKeys,
    Icon,
    IconData,
} from '@yzfe/svgicon'

import { View } from '@tarojs/components'
interface ComponentProps extends Props {
    [key: string]: unknown
}
class TaroSvgIcon extends React.PureComponent<ComponentProps> {
    public render(): JSX.Element {
        const props = this.props
        const result = svgIcon(props)
        const attrs: Record<string, any> = {}

        if (props) {
            const propsKeys = getPropKeys()
            for (const key in props) {
                if (propsKeys.indexOf(key as keyof Props) < 0) {
                    attrs[key] = props[key]
                }
            }
        }

        attrs.viewBox = result.box

        // 兼容fontsize
        if (attrs.style && attrs.style.fontSize) {
            attrs.style.width = parseFloat(attrs.style.fontSize)
            attrs.style.height = parseFloat(attrs.style.fontSize)
        }

        let attrsMap: string[] = []
        for (const key in attrs) {
            attrsMap.push(`${key}='${attrs[key]}'`)
        }
        const svgStr = `<svg
                xmlns="http://www.w3.org/2000/svg"
                ${attrsMap.join(' ')}
            >
            ${result.path}
            </svg>`
            .replace(/"/g, "'")
            .replace(/<|>/g, (matched) => encodeURI(matched))
            .replace(/#/g, '%23')
            .replace(/"/g, "'")
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')

        const customStyle = {
            ...((attrs.style as Record<string, string>) || {}),
            ...result.style,
            backgroundImage: `url("data:image/svg+xml,${svgStr}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }

        const customClassNames =
            (attrs.className || '') + ` ${result.className}`

        return (
            <View
                className={customClassNames}
                style={{
                    ...customStyle,
                }}
            ></View>
        )
    }
}

/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface TaroSvgIconFC extends React.FC<ComponentProps> {
    iconName: string
}

export {
    TaroSvgIcon,
    TaroSvgIconFC,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
}
