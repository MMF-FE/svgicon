import Vue from 'vue'
import SvgIcon from '@yzfe/svgicon'

export default Vue.extend({
    inheritAttrs: false,
    data() {
        return {
            svgicon: new SvgIcon({}),
        }
    },

    watch: {
        $attrs: function () {
            if (this.svgicon) {
                this.svgicon.props = this.$attrs
            }
        },
    },

    created() {
        this.svgicon = new SvgIcon(this.$attrs)
    },

    methods: {
        onClick(e: Event) {
            this.$emit('click', e)
        },
    },
})
