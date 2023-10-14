import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const packageJson = require('./package.json')

/** @type {import('rollup').RollupOptions} */
export default {
    input: 'src/index.tsx',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            plugins: [terser()],
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [resolve(), commonjs(), typescript({})],
    external: [...Object.keys(packageJson.peerDependencies || {})],
}
