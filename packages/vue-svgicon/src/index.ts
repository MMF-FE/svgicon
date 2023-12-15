import { defineComponent, h, App, PropType, isVue2 } from 'vue-demi'

import {
    svgIcon,
    Props,
    Options,
    setOptions,
    getOptions,
    Icon,
    IconData,
} from '@yzfe/svgicon'

const VueSvgIcon = defineComponent({
    props: {
        /** icon data */
        data: {
            type: [Object, String] as PropType<Icon | string>,
        },
        width: {
            type: [String, Number],
        },
        height: {
            type: [String, Number],
        },
        scale: {
            type: [String, Number],
        },
        dir: {
            type: String,
        },
        color: {
            type: [String, Array] as PropType<string | string[]>,
        },
        stopColors: {
            type: Array as PropType<string[]>,
        },
        title: {
            type: String,
        },
        fill: {
            type: Boolean,
            default: () => !getOptions().isStroke,
        },
        original: {
            type: Boolean,
            default: () => !!getOptions().isOriginalDefault,
        },
        replace: {
            type: Function as PropType<(svgInnerContent: string) => string>,
        },
    },
    render(createElement: any) {
        // @ts-ignore
        const result = svgIcon(this.$props)

        if (isVue2) {
            return createElement('svg', {
                attrs: {
                    viewBox: result.box,
                    ...this.$attrs,
                },
                staticStyle: {
                    ...result.style,
                },
                staticClass: result.className,
                // @ts-ignore
                on: this.$listeners,
                domProps: {
                    innerHTML: result.path,
                },
            })
        }

        return h('svg', {
            viewBox: result.box,
            style: result.style,
            class: result.className,
            innerHTML: result.path,
        })
    },
})

const VueSvgIconPlugin = {
    install: (app: App, options: { tagName: string } & Options): void => {
        app.component(options.tagName, VueSvgIcon)
        setOptions(options)
    },
}

export {
    VueSvgIcon,
    VueSvgIconPlugin,
    setOptions,
    Props,
    Options,
    Icon,
    IconData,
}
