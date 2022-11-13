<template>
  <div :class="$style.root">
    <div :class="$style.intro">
      <div :class="$style.text">
        <div :class="$style.oblique_stripe">
          Новинка
        </div>

        <h1>
          Скорая стильная помощь
        </h1>
      </div>

      <div :class="$style.intro_description">
        {{ introDescription }}
      </div>
    </div>

    <div>
      <img :class="$style.image" src="../../assets/Images/preview/form-reservation-bigcolor.jpg">
    </div>

    <div :class="$style.discription">
      <h1>Как всё происходит</h1>
      <div>После оплаты мы подключаем вас в канал Telegram с нашим стилистом.</div>
      <div>Подключение происходит в рабочее время: ПН-ПТ с 10 до 19 МСК</div>
      <div>Сразу же вы можете писать свои вопросы.</div>
      <div>Ответы будут в пределах часа в рабочее время: ПН-ПТ с 10 до 19 МСК</div>
      <div>Если вы не получаете ответ за 1 час, мы продлеваем действие услуги на 24 часа.</div>
      <div>А если нужна помощь в выходной день?</div>
      <div :class="$style.instruction">
        Напишите об этом как  можно раньше, но не менее, чем за 24 часа.
        Получите подтвержение стилиста. Если вы отправляетесь, к примеру, на шопинг в выходной день и вам нужно,
        чтобы стилист был с вами на связи,
        такой вариант возможен по предварительной договорённости со стилистом
      </div>
    </div>

    <BuyOptions/>
  </div>
</template>

<script lang="ts" setup>
import { BuyOptions } from '../BuyOptions'

const introDescription = 'Онлайн-консультация стилиста в вашем мобильном телефоне когда вам нужно: на шоппинге, во время разбора гардероба, когда подбираете комплект, просто когда нужен совет'

// const description =
</script>

<style module>
.root {
  margin-top: 150px;
  position: relative;
  background-color: #fff;
  color: #000;
  width: 100%;
  /* height: 100%; */
  z-index: 2;
}

.intro  {
  height: 250px;
  overflow: hidden;
}

.text {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  text-align: center;
}

.text > h1 {
  font-size: 40px;
  text-transform: uppercase;
  margin-top: 60px;
}

.oblique_stripe {
  padding-top: 8px;
  height: 28px;
  width: 250px;
  background-color: #fc0b38;
  font-size: 18px;
  text-align: center;
  color: #fff;
  transform: rotate(320deg);
  margin-left: -45px;
  margin-top: 45px;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.6);
}

.intro_description {
  text-align: center;
  margin: 40px 40px 0 40px;
  line-height: 1.8;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
}

.image {
  height: 100%;
  width: 100%;
  /* background-image: url(../../assets/Images/preview/form-reservation-bigcolor.jpg); */
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  user-select: none;
}

.discription {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 36px;
  height: 100%;
  margin: 60px 250px 0 250px;
  text-align: left;
  /* line-height: 3.1; */
}

.discription > h1 {
  font-size: 40px;
  text-transform: uppercase;
}

.discription > div {
  font-size: 18px;
}

.instruction {
  padding: 0 64px 0px 64px;
  line-height: 1.4;
}
</style>
