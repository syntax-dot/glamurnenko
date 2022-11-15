<template>
  <div :class="$style.root">
    <h1>Здесь пока ничего нет</h1>

    <div>
      <img src="https://media.giphy.com/media/YYQ6sw8jt2HRxX4uVi/giphy.gif" width="600">
    </div>

    <BaseButton title="Вернуться"
                @click="$router.push('/')"/>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from '../BaseButton'

</script>

<style module>
.root {
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
}

.root > h1 {
  text-align: center;
  text-transform: uppercase;
}
</style>
