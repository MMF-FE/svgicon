import { loader } from 'webpack'

let SvgiconLoader: loader.Loader = function(source, map) {
    this.callback(null, 'module.exports = {}', map)
}

module.exports = SvgiconLoader
