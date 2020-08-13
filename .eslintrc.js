module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            accessors: 'off',
                            constructors: 'no-public',
                            methods: 'explicit',
                            properties: 'explicit',
                            parameterProperties: 'off',
                        },
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: ['class', 'interface', 'typeAlias'],
                        format: ['PascalCase'],
                    },
                ],
            },
        },
    ],
}
