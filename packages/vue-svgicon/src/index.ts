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

const VueSvgIcon = {
    functional: true,
    props: getPropKeys(),
    render(h: CreateElement, context: RenderContext<Props>): VNode {
        const result = svgIcon(context.props)

        return h('svg', {
            ...context.data,
            attrs: {
                viewBox: result.box,
                ...context.data.attrs,
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
