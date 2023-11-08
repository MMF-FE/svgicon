import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const packageJson = require('./package.json')

/** @type {import('rollup').RollupOptions} */
export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            exports: 'default',
        },
        {
            file: packageJson.module,
            format: 'es',
        },
    ],
    external: Object.keys(packageJson.dependencies),
    plugins: [resolve(), commonjs(), typescript()],
}
