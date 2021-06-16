const template = `
<div>
    <Navi></Navi>
    <router-view />
    <Footer></Footer>
</div>
`

const App = {
    template,
    components: {
        Navi,
        Header,
        Footer
    },
    props: {

    },
    setup() {
        const title = Vue.ref("Top Page")
        Vue.watchEffect((to, from) => {
            console.log(`画面遷移前のpath：${from}`)
            console.log(`画面遷移後のpath：${to}`)
        })
        return {
            title
        }
    }
}