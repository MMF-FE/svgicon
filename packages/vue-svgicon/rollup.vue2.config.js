import { dts } from 'rollup-plugin-dts'

/** @type {import('rollup').RollupOptions} */
export default {
    input: 'src/index.vue2.d.ts',
    output: [
        {
            file: 'dist/index.vue2.d.ts',
            format: 'esm',
        },
    ],
    plugins: [dts()],
}
