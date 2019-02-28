import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: () =>
                import('@/views/about.vue' /* webpackChunkName: "public-views" */)
        }
    ]
})
