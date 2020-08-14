export type IconMeta = Record<string, { name: string; [key: string]: unknown }>

declare global {
    interface Window {
        iconMetas: IconMeta
    }
}

const meta: IconMeta = window.iconMetas || {}

export default meta
