const form_template = `
<div>
    <Input v-model="sampleForm.text" placeholder="Search" name="search-input" type="text"></Input>
    <p>{{ sampleForm.text }}</p>
</div>
`

const Form = {
    template: form_template,
    components: {
        Input
    },
    setup() {
        const sampleForm = Vue.reactive({
            text: ""
        })
        return {
            sampleForm
        }
    }
}