const form_template = `
<form>
    <div class="form-floating mb-2">
        <Input v-model="sampleForm.text" :btnMsg="inputList.btnMsg" :placeholder="inputList.placeholder" :name="inputList.name" :type="inputList.type"></Input>
        <p>{{ sampleForm.text }}</p>
    </div>
</form>
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