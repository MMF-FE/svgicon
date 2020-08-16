<template>
    <svg
        version="1.1"
        v-html="svgicon && svgicon.path"
        :class="svgicon && svgicon.clazz"
        :viewBox="svgicon && svgicon.box"
        :style="svgicon && svgicon.style"
        @click="onClick"
    />
</template>

<script lang="ts" src="./SvgIcon.ts"></script>

<style lang="css" src="@yzfe/svgicon/lib/svgicon.css"></style>
