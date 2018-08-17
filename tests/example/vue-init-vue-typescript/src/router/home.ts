/**
 * home module router
 */

import { RouteConfig } from 'vue-router'

function getView(viewName) {
    return (resolve, reject) => {
        require.ensure(
            [],
            require => {
                let map = {
                    home: require('views/Home'),
                    defaultView: require('views/Home')
                }

                resolve(map[viewName])
            },
            reject,
            'home'
        )
    }
}

let routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'defaultView',
        path: '*'
    }
]

routes.forEach(v => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
