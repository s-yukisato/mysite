const card_template = `
<div class="card" style="width: 18rem;">
  <img :src="item.data.src" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="text-white">{{ item.data.title }}</h3>
    <p class="card-text bg-dark text-white">{{ item.data.content }}</p>
  </div>
</div>
`

const Card = {
  props: ['item'],
  template: card_template
}
