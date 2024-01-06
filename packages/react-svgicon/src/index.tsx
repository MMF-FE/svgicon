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

interface ComponentProps extends Props {
    onClick?: React.MouseEventHandler<SVGSVGElement>
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

function createIconComponent(data: Icon) {
    const name = (data.name.split('/').pop() || '').replace(/^[\\d_]+/, '')

    const Component: ReactSvgIconFC = (props) => {
        return <ReactSvgIcon {...props} data={data} />
    }

    Component.displayName = name
    Component.iconName = data.name
    Component.iconData = data.data

    return Component
}

/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<ComponentProps> {
    iconName: string
    iconData: IconData
}

export {
    ReactSvgIcon,
    ReactSvgIconFC,
    createIconComponent,
    Props,
    Options,
    Icon,
    IconData,
    setOptions,
}
