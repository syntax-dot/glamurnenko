<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <div>Пакет</div>
      <h1>{{ '«' + serviceName + '»' }}</h1>
    </div>

    <div :class="$style.info">
      <div>
        <div>Срок:</div>
        <h4>{{ time }}</h4>
      </div>

      <br>

      <div>
        <div>Вопросов/Комплектов на оценку:</div>
        <h4>{{ set }}</h4>
      </div>
    </div>

    <div :class="$style.price">
      <del :class="$style.old_price">{{ price + '₽' }}</del>
      <h3>{{ discountPrice + '₽' }}</h3>
    </div>

    <div :class="$style.btn">
      <BaseButton title="Заказать"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from '../BaseButton'
import { PurchaseCardProps } from './PurchaseCard.props'

defineProps<PurchaseCardProps>()
</script>

<style module>
.root {
  display: grid;
  grid-template-rows: 120px 180px 70px 1fr;
  border: 2px solid #e6e6e6;
  height: 470px;
  width: 300px;
  transition: all 0.3s ease-in-out;
}

.title {
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.info {
  font-size: 18px;
  margin-left: 30px;
  line-height: 1.4;
}

.price {
  text-align: center;
  font-size: 22px;
}

.price:first-child {
  color: #e6e6e6;
}

.old_price {
  color: #bfbfbf;
  position: relative;
  text-decoration: none;
}

.old_price:before {
  content: " ";
  display: block;
  width: 100%;
  border-top: 2px solid rgba(255, 0, 0, 0.8);
  height: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(-7deg);
  }

.btn {
  align-items: center;
  margin: auto;
  margin-bottom: 40px;
}

.root:hover {
  border: 2px solid #bfbfbf;
  box-shadow: 0px 0px 8px 10px rgba(0, 0, 0, 0.05);
}
</style>
