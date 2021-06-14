const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/mysite/',
            component: Home,
        },
        {
            path: '/mysite/signup',
            component: Signup,
            props: true
        },
        {
            path: '/mysite/signin',
            component: Signin,
            props: true
        },
        {
            path: '/mysite/about',
            component: About,
            props: true
        }
    ]
})

// router.beforeEach(function (to, from, next)) {
//     // ユーザー一覧ページへアクセスしたときに/topへリダイレクトされる例
//     if (to.path === '/users') {
//         next('/top')
//     } else {
//         // 引数無しでnextを呼び出すと通常通りの遷移が行われる
//         next()
//     }
// }