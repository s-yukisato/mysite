const header_template = `
<header class="bg-warning py-5">
    <div class="container px-4 px-lg-5">
        <div class="text-center text-muted">
            <h1>{{ title }}</h1>
        </div>
    </div>
</header>
`

const Header = {
    template: header_template,
    props: {
        title: {
            type: String,
            default: "Home Page"
        }
    },
    setup() {

    }
}