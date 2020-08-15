import Vue from 'vue'
import SvgIcon from '@yzfe/svgicon'

export default Vue.extend({
    inheritAttrs: false,
    data() {
        return {
            svgicon: null as SvgIcon | null,
        }
    },

    computed: {
        path: function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.svgicon ? this.svgicon.path : ''
        },

        clazz: function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.svgicon ? this.svgicon.clazz : ''
        },

        box: function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.svgicon ? this.svgicon.box : ''
        },

        style: function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.svgicon ? this.svgicon.style : ''
        },
    },

    watch: {
        $attrs: function () {
            if (this.svgicon) {
                this.svgicon.props = {
                    ...this.$attrs,
                }
            }
        },
    },

    created() {
        this.svgicon = new SvgIcon({
            ...this.$attrs,
        })
    },

    methods: {
        onClick(e: Event) {
            this.$emit('click', e)
        },
    },
})
