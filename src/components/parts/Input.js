const input_template = `
<template>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :input="updateValue"
  />
</template>
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
