import { Icon } from '@yzfe/vue3-svgicon'

const req = import.meta.glob<Icon>('@icon/**/*.svg', {
    eager: true,
    import: 'default',
})

export default Object.keys(req).map((v) => req[v])
