module.exports = [
    {
        type: 'input',
        name: 'svgFilePath',
        message: 'The svg file path, use relative path: ',
        validate: (input) => !!input,
    },
    {
        type: 'input',
        name: 'tagName',
        message: 'The registered name of the vue-svgicon component: ',
        default: 'icon',
    },
    {
        type: 'confirm',
        name: 'isVue3',
        message: 'Use vue 3.x ?',
        default: false,
    },
]
