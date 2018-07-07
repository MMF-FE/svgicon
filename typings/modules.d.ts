declare module 'highlight.js/lib/highlight' {
    import hjs from 'highlight.js'
    export = hjs
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '@/components/SvgIcon.vue' {
    import VueSvgIcon from 'typings'
    export default VueSvgIcon
}
