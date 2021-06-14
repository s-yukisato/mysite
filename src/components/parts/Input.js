const input_template = `
<template>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>
`

const Input = {
    name: "Input",
    props: {
        value: { type: String, required: false },
        type: { type: String, required: true },
        name: { type: String, required: true },
        placeholder: { type: String, required: false }
    },
    setup(_, context) {
        const updateValue = (e) => {
            context.emit("input", e.target.value)
        }
        return {
            updateValue
        }
    },
};
