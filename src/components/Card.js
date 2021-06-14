const card_template = `
<div class="card" style="width: 18rem;">
  <img :src="items.data.src" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">{{ items.data.content }}</p>
  </div>
</div>
`

const Card = {
  props: ['items'],
  template: card_template
}
