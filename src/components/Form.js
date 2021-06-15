const form_template = `
<form>
    <div class="form-floating mb-2">
        <Input v-model="sampleForm.text" placeholder="Search..." name="search-input" type="text"></Input>
        <p>{{ sampleForm.text }}</p>
        <button class="btn btn-outline-warning btn-xl disabled p-1 m-2">検索</button>
    </div>
</form>
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