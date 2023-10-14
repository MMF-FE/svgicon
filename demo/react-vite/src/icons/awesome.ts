import { ReactSvgIconFC } from '@yzfe/react-svgicon'

const req = import.meta.glob<ReactSvgIconFC>('@fa/**/*.svg', {
    eager: true,
    import: 'default',
})

export default Object.keys(req).map((v) => req[v])
