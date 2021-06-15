const form_template = `
<div>
    <Input v-model="sampleForm.text" placeholder="Search" name="search-input" type="text"></Input>
    <p>{{ sampleForm.text }}</p>
    <button class="btn btn-outline-warning p-1 m-2">検索</button>
</div>
`

const Form = {
    template: form_template,
    components: {
        Input
    },
    setup() {
        const sampleForm = Vue.reactive({
            text: "Search..."
        })
        return {
            sampleForm
        }
    }
}