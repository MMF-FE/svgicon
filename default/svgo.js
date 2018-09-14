module.exports = {
    plugins: [
        {
            removeAttrs: {}
        },
        {
            removeTitle: true
        },
        {
            removeComments: true
        },
        {
            removeDesc: true
        },
        {
            removeUselessDefs: true
        },
        {
            convertStyleToAttrs: true
        },
        {
            cleanupIDs: {
                remove: true,
                prefix: 'svgicon'
            }
        },
        {
            convertShapeToPath: true
        }
    ]
}
