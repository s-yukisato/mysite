const form_template = `
<div class="form-floating mb-2">
    <Input v-model="sampleForm.text" :btnMsg="inputList.btnMsg" placeholder="Search..." name="search" type="text"></Input>
    <p>{{ sampleForm.text }}</p>
</div>
`

const Form = {
    template: form_template,
    components: {
        Input
    },
    setup() {
        const inputList = {
            type: "text",
            name: "search-input",
            placeholder: "Search...",
            btnMsg: "検索"
        }
        const sampleForm = Vue.reactive({
            text: "Search..."
        })
        return {
            inputList,
            sampleForm
        }
    }
}