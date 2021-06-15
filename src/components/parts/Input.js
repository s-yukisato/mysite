const input_template = `
  <input
    class="form-control"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
  />
  <button @click="updateValue" class="btn btn-outline-success btn-xl disabled p-1 m-2">{{ btn-msg }}</button>

`

const Input = {
    template: input_template,
    props: {
        modelValue: { type: String },
        value: { type: String, required: false },
        type: { type: String, required: true },
        name: { type: String, required: true },
        placeholder: { type: String, required: false },
        btnMsg: { type: String, required: true }
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
