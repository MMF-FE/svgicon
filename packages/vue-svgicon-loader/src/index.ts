import { loader } from 'webpack'

let SvgiconLoader: loader.Loader = function(source, map) {
    this.callback(
        null,
        `
        console.log('${this.resourceQuery}')
        if (module.hot) {
            module.hot.accept()
        }
         module.exports = '${this.resourceQuery}'
    `,
        map
    )
}

module.exports = SvgiconLoader
