<template>
    <svg
        version="1.1"
        v-html="svgicon.path"
        :class="svgicon.clazz"
        :viewBox="svgicon.box"
        :style="svgicon.style"
        @click="onClick"
    />
</template>

<script lang="ts">
import Vue from 'vue'
import { PluginOptions, Icon, IconData } from '../../typings'
import SvgIcon from '../SvgIcon'

export default Vue.extend({
    inheritAttrs: false,
    data() {
        return {
            svgicon: new SvgIcon({}),
        }
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
</script>

<style lang="scss">
/* recommended css code for vue-svgicon */
.svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
}

.svg-fill {
    fill: currentColor;
    stroke: none;
}

.svg-up {
    /* default */
    transform: rotate(0deg);
}

.svg-right {
    transform: rotate(90deg);
}

.svg-down {
    transform: rotate(180deg);
}

.svg-left {
    transform: rotate(-90deg);
}

</style>