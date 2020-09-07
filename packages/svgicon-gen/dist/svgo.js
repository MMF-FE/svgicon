"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
