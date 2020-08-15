<template>
    <svg
        version="1.1"
        v-html="path"
        :class="clazz"
        :viewBox="box"
        :style="style"
        @click="onClick"
    />
</template>

<script lang="ts" src="./SvgIcon.ts"></script>

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