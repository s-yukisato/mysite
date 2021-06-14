const template = `
<div>
    <Navi></Navi>
    <Header :title="title"></Header>
    <router-view />
    <Footer></Footer>
</div>
`

const App = {
    components: {
        Navi,
        Header,
        Footer
    },
    props: {

    },
    setup() {
        const title = Vue.ref("Top Page")
        Vue.watch('$route', (to, from) => {
            console.log(`画面遷移前のpath：${from}`)
            console.log(`画面遷移後のpath：${to}`)
        })
        return {
            title
        }
    },
    template
}