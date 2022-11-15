<template>
  <div :class="$style.root">
    <IsEmpty/>
  </div>
</template>

<script lang="ts" setup>
import { IsEmpty } from '../components/IsEmpty'
</script>

<style module>
.root {

}

.empty {
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
}

.empty > h1 {
  text-align: center;
  text-transform: uppercase;
}
</style>
