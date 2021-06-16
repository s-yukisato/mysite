const card_template = `
<div class="card col-xs-10 col-md-6 col-lg-4 col-xl-3 m-2" :key="key" style="width: 18rem;">
  <img :src="item.src" class="card-img-top" alt="...">
  <div class="card-body">
    <h3><u>{{ item.title }}</u></h3>
    <p class="card-text">{{ item.content }}</p>
    <a :href="item.next" class="rounded-pill">詳しく見る</a>
  </div>
</div>
`

const Card = {
  template: card_template,
  props: ['item', 'key'],
}
