<template>
  <div :class="$style.root">
    <table style="width: 100%;">
      <tbody>
        <tr>
          <th>Вы получаете:</th>
          <th>Теория</th>
          <th>Практика</th>
          <th>VIP</th>
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
        <tr>
          <th>Цена</th>
          <th>7 999</th>
          <th>9 999</th>
          <th>24 999</th>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>Заказать</td>
          <td>Заказать</td>
          <td>Заказать</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  /* display: grid;
  box-sizing: border-box;
  gap: 2px;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: row;
  background-color: #ffd100;
  font-weight: bold;
  text-align: center; */
  background-color: #fdc300;
}
tbody {
  background-color: #fff000;
  font-weight: bold;
}

th {
  text-transform: uppercase;
  background-color: #ffd100;
}

td {
  text-align: center;
}
td > div {
  font-size: 10px;
}

.root > div {
  background: #fff000;
}

.div1 { grid-area: 7 / 2 / 8 / 5; }
</style>
