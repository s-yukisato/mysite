const about_template = `
<div class="center-block d-flex m-3">
    <template v-for="(item, key) in cardList">
        <Card :key="key" :item="item" />
    </template>
</div>
`

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
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: "https://s-yukisato.github.io/mysite/src/assets/social-media-on-cell-phone.jpg",
    next: "/mysite/"
}

const card4 = {
    title: "働くとは",
    content: "now is time",
    src: "https://s-yukisato.github.io/mysite/src/assets/business-woman-flow-chart.jpg",
    next: "/mysite/"
}

const About = {
    components: {
        Card
    },
    setup() {
        const cardList = [card1, card2, card3, card4]
        return {
            cardList
        }
    },
    template: about_template
}