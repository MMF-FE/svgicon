// svgo config
import SVGO from 'svgo'

export default {
    plugins: [
        {
            removeAttrs: {},
        },
        {
            removeTitle: true,
        },
        {
            inlineStyles: {
                onlyMatchedOnce: false,
            },
        },
        {
            minifyStyles: true,
        },
        {
            convertStyleToAttrs: true,
        },
        {
            removeStyleElement: true,
        },
        {
            removeComments: true,
        },
        {
            removeDesc: true,
        },
        {
            removeUselessDefs: true,
        },
        {
            convertShapeToPath: true,
        },
    ],
} as SVGO.Options
