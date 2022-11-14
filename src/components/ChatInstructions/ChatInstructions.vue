<template>
  <div :class="$style.root">
    <div :class="$style.img"
         :style="{ backgroundImage: `url(${pathToImg})` }">
         <!-- <img :src="`${pathToImg}`"> -->
    </div>

    <div :class="$style.description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChatInstructionsProps } from './ChatInstructions.props'

defineProps<ChatInstructionsProps>()

// function getSvgUrl(name: string): string {
//   return new URL(`${name}`, import.meta.url).pathname
// }

// const pathImg = computed(() => getSvgUrl(props.pathToImg))
</script>

<style module>
.root {
  display: grid;
  grid-template-columns: max-content auto;
}
.img {
  height: 800px;
  width: 400px;
}

.description {
  text-align: left;
  margin: auto;
}
</style>
