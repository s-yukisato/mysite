const about_template = `
<div class="center-block">
    <template v-for="(item, key) in cardList">
        <Card :key="key" :item="item" />
    </template>
</div>
`

const card1 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/sample.png"
}

const card2 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/buy-online-black-friday.jpg"
}

const card3 = {
    title: "Progressing",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/social-media-on-cell-phone.jpg"
}

const About = {
    components: {
        Card
    },
    setup() {
        const cardList = [card1, card2, card3]
        return {
            cardList
        }
    },
    template: about_template
}