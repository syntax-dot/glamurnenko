<template>
  <div :class="$style.root">
    <h1>Пакеты услуг</h1>
    <div :class="$style.cards">
      <PurchaseCard v-for="card in cards"
                    :key="card.price"
                    :serviceName="card.serviceName"
                    :time="card.time"
                    :set="card.set"
                    :price="card.price"
                    :discountPrice="card.discountPrice"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PurchaseCardProps } from '../PurchaseCard/PurchaseCard.props'
import PurchaseCard from '../PurchaseCard/PurchaseCard.vue'

const cards: PurchaseCardProps[] = [
  {
    serviceName: 'Попробовать',
    time: 'в пределах 24 часов',
    set: '5 ваших луков или 5 вопросов',
    price: 890,
    discountPrice: 499,
  },
  {
    serviceName: '1 день',
    time: 'в пределах 24 часов',
    set: 'до 100',
    price: 3900,
    discountPrice: 2900,
  },
  {
    serviceName: '1 месяц',
    time: 'в течении месяца',
    set: 'неограничено',
    price: 11900,
    discountPrice: 9900,
  },
]
</script>

<style module>
.root {
  text-align: center;

}

.root > h1 {
  text-transform: uppercase;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  text-align: left;
  margin: 20px 40px;
  grid-gap: 72px;
}
</style>
