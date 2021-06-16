const about_template = `
<div class="container-fluid p-3 m-3 justify-content-center">
    <h1 class="text-center p-3 m-3"><u>Contents</u></h1>
    <div class="form-floating p-3 m-3 d-flex">
        <Input v-model="searchWord" id="search-card" type="text" name="search-input" labelText="Search"></Input>
    </div>
    <div class="form-floating d-flex flex-row-reverse p-3 m-3 d-flex">
        <Checkbox
            @checked="hasChecked"
            name="search-check"
            :options="options"
        ></Checkbox>
    </div>
    <div class="container-fluid">
        <div class="row center-block m-3">
            <template v-for="(item, key) in search_result">
                <Card :key="key" :item="item" />
            </template>
        </div>
    </div>
</div>
`

const About = {
    template: about_template,
    components: {
        Card,
        Checkbox,
        Input
    },
    setup() {
        const cardList = [card1, card2, card3, card4]
        const searchWord = Vue.ref("")
        const search_result = Vue.computed(() => {
            let word = searchWord.value.toLocaleLowerCase()
            if (searchWord.value === "") return cardList;
            if (search_tag.value.includes("title") && search_tag.value.includes("content")) {
                return cardList.filter((card) => card.title.toLocaleLowerCase().includes(word) || card.content.toLocaleLowerCase().includes(word));
            } else if (search_tag.value.includes("title")) {
                return cardList.filter((card) => card.title.toLocaleLowerCase().includes(word))
            } else if (search_tag.value.includes("content")) {
                return cardList.filter((card) => card.content.toLocaleLowerCase().includes(word))
            };
        });

        const search_tag = Vue.ref([])
        const options = [
            { label: "タイトル", value: "title" },
            { label: "内容", value: "content" },
        ]
        const hasChecked = (values) => {
            search_tag.value = values
        }
        return {
            cardList,
            searchWord,
            search_result,
            search_tag,
            options,
            hasChecked
        }
    }
}

const card1 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/sample.png",
    next: "/mysite/"
}

const card2 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/buy-online-black-friday.jpg",
    nexxt: "/mysite/"
}

const card3 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/social-media-on-cell-phone.jpg",
    next: "/mysite/"
}

const card4 = {
    title: "働くとは",
    content: "now is time",
    src: "https://s-yukisato.github.io/mysite/src/assets/business-woman-flow-chart.jpg",
    next: "/mysite/"
}