const about_template = `
<Card :items="cardList" />
`

const About = {
    components: {
        Card
    },
    setup() {
        const cardList = Vue.reactive({
            data: {
                title: "Progressing",
                content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                src: "https://s-yukisato.github.io/mysite/src/assets/sample.png"
            }
        })
        return {
            cardList
        }
    },
    template: about_template
}