const card_template = `
<div class="card" style="width: 18rem;">
  <img :src="item.src" class="card-img-top" alt="...">
  <div class="card-body">
    <h3><u>{{ item.title }}</u></h3>
    <p class="card-text">{{ item.content }}</p>
    <a :href="item.next" class="btn btn-primary">詳しく見る</a>
  </div>
</div>
`

const Card = {
  props: ['item'],
  template: card_template
}
