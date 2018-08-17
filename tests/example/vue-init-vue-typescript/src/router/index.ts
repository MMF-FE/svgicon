import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

// routes
import homeRoute from './home'
/** auto import */

Vue.use(Router)

// prettier-ignore
let routes: RouteConfig[] = []
    .concat(homeRoute)
    /** auto concat */
    .concat([])

export default new Router({
    routes
})
