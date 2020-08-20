import { CreateElement, VNode, RenderContext } from 'vue'
import {
    svgIcon,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
    getPropKeys,
} from '@yzfe/svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

const VueSvgIcon = {
    functional: true,
    render(h: CreateElement, context: RenderContext<Props>): VNode {
        const result = svgIcon(context.props)
        const attrs: Record<string, string> = {}

        if (context.data.attrs) {
            const propsKeys = getPropKeys()
            for (const key in context.data.attrs) {
                if (propsKeys.indexOf(key as keyof Props) < 0) {
                    attrs[key] = context.data.attrs[key]
                }
            }
        }

        return h('svg', {
            ...context.data,
            attrs: {
                version: '1.1',
                viewBox: result.box,
                ...attrs,
            },
            staticStyle: {
                ...result.style,
                ...context.data.staticStyle,
            },
            staticClass:
                result.className +
                (context.data.staticClass
                    ? ` ${context.data.staticClass}`
                    : ''),
            domProps: {
                innerHTML: result.path,
            },
        })
    },
}

export { VueSvgIcon, setOptions, Props, Options, Icon, IconData }
