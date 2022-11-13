<template>
  <div :class="$style.root">
    <a> Вакансии </a>
    <a> Карта сайта </a>
    <a> Политика конфедонциальности </a>
    <a> Перепечатка разрешена </a>
    <a> © syntax-dot, 2022 Тел.: 8(800)555-35-35 </a>
    <a> Email: alekseew.aleksandr2012@yandex.ru </a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  font-size: 12px;
  display: grid;
  grid-auto-flow: row;
  justify-content: space-between;
  height: 15vh;
  padding-left: 20px;
}

.root > a {
  cursor: pointer;
}
</style>
