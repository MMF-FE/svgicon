declare module 'highlight.js/lib/highlight' {
    import hjs from 'highlight.js'
    export = hjs
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '*.svg' {
    import { Icon } from 'vue-svgicon'
    const resource: Icon
    export default resource
}
