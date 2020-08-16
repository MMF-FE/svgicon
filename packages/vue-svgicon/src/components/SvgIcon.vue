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

<script lang="ts" src="./SvgIcon.ts"></script>

<style lang="css" src="@yzfe/svgicon/lib/svgicon.css"></style>
