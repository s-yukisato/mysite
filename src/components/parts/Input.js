const input_template = `
<label for="id">{{ labelText }}</label>
<input
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
/>
`

const Input = {
    template: input_template,
    props: {
        modelValue: { type: String },
        id: { type: String, required: true },
        type: { type: String, required: true },
        name: { type: String, required: true },
        placeholder: { type: String, required: false },
        labelText: { type: String }
    },
    emits: ['update:modelValue'],
};
