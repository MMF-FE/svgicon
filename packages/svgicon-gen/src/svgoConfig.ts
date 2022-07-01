// svgo config
import { OptimizeOptions } from 'svgo'

export default {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    // customize default plugin options
                    inlineStyles: {
                        onlyMatchedOnce: false,
                    },
                },
            },
        },
        'convertStyleToAttrs',
        'removeStyleElement',
    ],
} as OptimizeOptions
