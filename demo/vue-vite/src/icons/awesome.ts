import { Icon } from '@yzfe/vue3-svgicon'

const req = import.meta.glob<Icon>('@fa/**/*.svg', {
    eager: true,
    import: 'default',
})

export default Object.keys(req).map((v) => req[v])
