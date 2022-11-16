<template>
  <!-- <div v-for="link in links"
       :class="$style.root">
    <a>{{ link }}</a> -->
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
const links = [
  'Вакансии',
  'Карта сайта',
  'Политика конфедонциальности',
  'Перепечатка разрешена',
  '© syntax-dot, 2022 Тел.: 8(800)555-35-35',
  'Email: alekseew.aleksandr2012@yandex.ru',
]
</script>

<style module>
.root {
  font-size: 0.75rem;
  display: grid;
  grid-auto-flow: row;
  justify-content: space-between;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  margin: 43px 0;
}

.root > a {
  cursor: pointer;
}

a:hover {
  color: rgba(255, 255, 255, 1);
}

@media screen and (max-width: 1024px) {
  .root {
    padding-left: 10px;
  }
}
</style>
