import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const packageJson = require('./package.json')

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            exports: 'named',
        },
        {
            file: packageJson.module,
            format: 'es',
        },
    ],
    external: Object.keys(packageJson.dependencies),
    plugins: [
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
}
