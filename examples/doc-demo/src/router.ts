import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: () =>
                import('@/views/Home.vue' /* webpackChunkName: "home-views" */)
        },
        {
            name: 'about',
            path: '/about',
            component: () =>
                import('@/views/About.vue' /* webpackChunkName: "about-views" */)
        }
    ]
})
