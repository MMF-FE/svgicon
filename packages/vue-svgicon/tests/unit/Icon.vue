<template>
    <div>
        <svgicon :data="arrowIcon" ref="arrow" />
        <svgicon :data="vueIcon" ref="vue" />
        <svgicon :data="maskIcon" ref="mask" />
        <svgicon :data="giftIcon" ref="gift" />
    </div>
</template>
<script>
import Vue from 'vue'
import vueIcon from '@icon/vue.svg'
import arrowIcon from '@icon/arrow.svg'
import maskIcon from '@icon/mask.svg'
import giftIcon from '@icon/gift.svg'

const svgicon = {
    render(h) {
        return h('icon', {
            attrs: this.$attrs,
            on: this.$listeners,
        })
    },
}
export default Vue.extend({
    components: {
        svgicon,
    },
    data() {
        return {
            vueIcon,
            arrowIcon,
            maskIcon,
            giftIcon,
        }
    },
})
</script>
