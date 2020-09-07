declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '*.svg' {
    import { Icon } from '@yzfe/vue-svgicon'
    const resource: Icon
    export default resource
}
