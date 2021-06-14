const template = `
<div>
    <Navi></Navi>
    <Header :title="title"></Header>
    <router-link to="/"></router-link>
    <router-link to="/signin">Sign in</router-link>
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
        return {
            title
        }
    },
    template
}