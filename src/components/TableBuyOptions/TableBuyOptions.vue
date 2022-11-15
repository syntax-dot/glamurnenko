<template>
  <div :class="$style.root">
    <table style="width: 100%;">
      <tbody>
        <tr>
          <th width="50%">Вы получаете:</th>
          <th width="200px">Теория</th>
          <th width="200px">Практика</th>
          <th width="200px">VIP</th>
        </tr>
        <tr>
          <td>Все материалы тренинга</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <td>Проверка ДЗ</td>
          <td>&#9866;</td>
          <td>2,5 Месяца <div>* имиджмейкером команды Гламурненько.ру</div></td>
          <td>2,5 Месяца <div>* лично Екатерины Маляровой</div></td>
        </tr>
        <tr>
          <td>Тренажёр по стилевым типажам</td>
          <td>&#9866;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <td>Тренажёр по вещам и образам</td>
          <td>&#9866;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr :class="$style.price">
          <th>Цена</th>
          <th>7 999</th>
          <th>9 999</th>
          <th>24 999</th>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td colspan="3" :class="$style.symbols">
            <span v-for="symbol in symbols"
                  :key="symbol"
                  :class="$style.symbol">
              {{ symbol }}
            </span>
          </td>
        </tr>
        <tr :class="$style.buttons">
          <td>&nbsp;</td>
          <td>
            <BaseButton title="Заказать"
                        width="100%"
                        height="40px"
                        color="#000"
                        @click="clickHandler"/>
          </td>
          <td>
            <BaseButton title="Заказать"
                        width="100%"
                        height="40px"
                        color="#000"
                        @click="clickHandler"/>
          </td>
          <td>
            <BaseButton title="Заказать"
                        width="100%"
                        height="40px"
                        color="#000"
                        @click="clickHandler"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from '../BaseButton'

const symbols = '₽₴$€'

function clickHandler() {
  console.log('click')
}
</script>

<style module>
.root {
  background-color: #fdc300;
}

tbody {
  height: 600px;
  width: 1200px;
  background-color: #fff000;
  font-weight: bold;
}

th {
  text-transform: uppercase;
  background-color: #ffd100;
  font-size: 22px;
}

td {
  text-align: center;
}
td > div {
  font-size: 10px;
}

td:first-child {
  text-align: left;
}

td, th {
  padding: 0 20px 0 20px;
}

th:first-child {
  text-align: left;
}

.root > div {
  background: #fff000;
}

.price > th {
  font-size: 24px;
}

.symbol {
  border: 1px solid #000;
  width: 40px;
  height: 40px;
  margin: auto;
  padding: 6px 8px;
  margin: 8px;
}

.buttons > td {
  font-weight: bold;
  height: 70px;
}
</style>
