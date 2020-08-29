/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { defineComponent, h } from 'vue'

import {
    svgIcon,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
    getPropKeys,
} from '@yzfe/svgicon'

const VueSvgIcon = defineComponent({
    props: getPropKeys(),
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

export { VueSvgIcon, setOptions, Props, Options, Icon, IconData }
