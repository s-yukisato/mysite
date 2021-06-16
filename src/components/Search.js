const Search_template = `
<div class="form-floating mb-2">
    <Input v-model="seachWord" placeholder="Search..." name="search" type="text"></Input>
    <p>{{ searchWord }}</p>
    <button @click="updateValue" class="btn btn-outline-primary btn-xl p-1 m-2">{{ btnMsg }}</button>
</div>
`

const Search = {
  template: search_template,
  components: {
    Input
  },
  setup() {
    const searchWord = Vue.ref("")
    const search = Vue.computed(() => {
      if (searchWord.value === "") return users.value;

      return users.value.filter((user) => {
        return (
          user.name.includes(searchWord) ||
          user.email.includes(searchWord) ||
          user.website.includes(searchWord)
        );
      });
    });
    return {
      inputList,
      sampleForm
    }
  }
}