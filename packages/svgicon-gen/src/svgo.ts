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
            cleanupIDs: {
                remove: true,
                prefix: 'svgiconid',
            },
        },
        {
            convertShapeToPath: true,
        },
    ],
} as SVGO.Options
