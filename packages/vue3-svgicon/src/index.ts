import { defineComponent, h, App } from 'vue'

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
