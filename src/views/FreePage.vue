<template>
  <div :class="$style.root">
    Здесь пока ничего нет
    <BaseButton title="Вернуться"
                @click="$router.push('/')"/>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from '../components/BaseButton'

</script>

<style module>
.root {

}
</style>
