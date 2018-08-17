/**
 * For module import or split code use require
 */
interface NodeRequire {
    ensure(
        paths: string[],
        callback: (require) => void,
        chunkName?: string
    ): void
    ensure(
        paths: string[],
        callback: (require) => void,
        errorCallback?: (err) => void,
        chunkName?: string
    ): void
}

declare module 'env' {
    import env from 'env/dev'
    export default env
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}
