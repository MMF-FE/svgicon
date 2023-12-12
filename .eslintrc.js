/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ['@yzfe/ts'],
    overrides: [
        {
            files: [
                '**/*/rollup.config.js',
                'packages/vue-svgicon/rollup.vue2.config.js',
            ],
            parserOptions: {
                sourceType: 'module',
            },
        },
    ],
}
