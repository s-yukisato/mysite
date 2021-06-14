const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/signup',
            component: Signup,
            props: true
        },
        {
            path: '/signin',
            component: Signin,
            props: true
        }
    ]
})