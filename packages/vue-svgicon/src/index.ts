import Vue, { CreateElement, VNode } from 'vue'
import SvgIconClass, {
    Props,
    Options,
    SvgIconConstructor,
    Icon,
    IconData,
} from '@yzfe/svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

const VueSvgIcon = Vue.extend({
    inheritAttrs: false,
    data() {
        return {
            svgicon: null as SvgIconClass | null,
        }
    },

    watch: {
        $attrs: {
            deep: true,
            handler: function () {
                if (this.svgicon) {
                    this.svgicon.props = this.$attrs
                }
            },
        },
    },

    created() {
        this.svgicon = new SvgIconClass(this.$attrs)
    },

    methods: {
        onClick(e: Event) {
            this.$emit('click', e)
        },
    },

    render: function (h: CreateElement): VNode {
        return h('svg', {
            attrs: {
                version: '1.1',
                viewBox: this.svgicon?.box,
            },
            style: this.svgicon?.style,
            class: this.svgicon?.clazz,
            domProps: {
                innerHTML: this.svgicon?.path,
            },
            on: {
                click: this.onClick,
            },
        })
    },
})

const setOptions = SvgIconClass.setOptions

export {
    Icon,
    IconData,
    VueSvgIcon,
    SvgIconConstructor,
    setOptions,
    Props,
    Options,
}
