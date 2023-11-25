import { defineComponent, h, App, PropType } from 'vue'

import {
    svgIcon,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
} from '@yzfe/svgicon'

const VueSvgIcon = defineComponent({
    props: {
        /** icon data */
        data: {
            type: Object as PropType<Icon>,
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
            default: true,
        },
        original: {
            type: Boolean,
            default: false,
        },
        replace: {
            type: Function as PropType<(svgInnerContent: string) => string>,
        },
    },
    render() {
        const result = svgIcon(this.$props)

        return h('svg', {
            viewBox: result.box,
            style: result.style,
            class: result.className,
            innerHTML: result.path,
        })
    },
})

const VueSvgIconPlugin = {
    install: (app: App, options: { tagName: string }): void => {
        app.component(options.tagName, VueSvgIcon)
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
