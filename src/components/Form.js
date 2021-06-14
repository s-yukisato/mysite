const form_template = `
<template>
    <Input v-model="sampleForm.text" placeholder="サンプル" name="sample-input" type="text"></Input>
    <p>{{ sampleForm.text }}</p>
</template>
`

const Form = {
    template: form_template,
    name: "Form",
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