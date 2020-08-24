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
import '@yzfe/svgicon/lib/svgicon.css'

interface ComponentProps extends Props {
    [key: string]: unknown
}

class ReactSvgIcon extends React.PureComponent<ComponentProps> {
    public render(): JSX.Element {
        const props = this.props
        const result = svgIcon(props)
        const attrs: Record<string, unknown> = {}

        if (props) {
            const propsKeys = getPropKeys()
            for (const key in props) {
                if (propsKeys.indexOf(key as keyof Props) < 0) {
                    attrs[key] = props[key]
                }
            }
        }

        attrs.viewBox = result.box
        attrs.className = (attrs.className || '') + ` ${result.className}`
        attrs.style = {
            ...((attrs.style as Record<string, string>) || {}),
            ...result.style,
        }

        return (
            <svg
                {...attrs}
                dangerouslySetInnerHTML={{ __html: result.path }}
            ></svg>
        )
    }
}

// const ReactSvgIcon = function (props: ComponentProps): JSX.Element {
//     const result = svgIcon(props)

//     const attrs: Record<string, unknown> = {}

//     if (props) {
//         const propsKeys = getPropKeys()
//         for (const key in props) {
//             if (propsKeys.indexOf(key as keyof Props) < 0) {
//                 attrs[key] = props[key]
//             }
//         }
//     }

//     attrs.viewBox = result.box
//     attrs.version = '1.1'
//     attrs.className = (attrs.className || '') + ` ${result.className}`
//     attrs.style = {
//         ...((attrs.style as Record<string, string>) || {}),
//         ...result.style,
//     }

//     return (
//         <svg {...attrs} dangerouslySetInnerHTML={{ __html: result.path }}></svg>
//     )
// }

/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<ComponentProps> {
    iconName: string
}

export {
    ReactSvgIcon,
    ReactSvgIconFC,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
}
