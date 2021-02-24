import React from 'react'
import { renderToString } from 'react-dom/server'
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

        const customStyle = {
            ...((attrs.style as Record<string, string>) || {}),
            ...result.style,
        }

        const customClassNames =
            (attrs.className || '') + ` ${result.className}`

        attrs.viewBox = result.box

        const svgStr = renderToString(
            <svg
                xmlns="http://www.w3.org/2000/svg"
                {...attrs}
                dangerouslySetInnerHTML={{ __html: result.path }}
            ></svg>
        )
            .replace(/"/g, "'")
            .replace(/<|>/g, (matched) => encodeURI(matched))
            .replace(/#/g, '%23')
            .replace(/"/g, "'")
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')

        const svgUrl = `data:image/svg+xml,${svgStr}`

        return (
            <View
                className={customClassNames}
                style={{
                    ...customStyle,
                    backgroundImage: `url("${svgUrl}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
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
