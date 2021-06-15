const input_template = `
  <input
    class="form-control"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
`

const Input = {
    template: input_template,
    props: {
        modelValue: { type: String },
        value: { type: String, required: false },
        type: { type: String, required: true },
        name: { type: String, required: true },
        placeholder: { type: String, required: false }
    },
    setup(_, context) {
        const updateValue = (e) => {
            context.emit("update:modelValue", e.target.value)
        }
        return {
            updateValue
        }
    },
};
