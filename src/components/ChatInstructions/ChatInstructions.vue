<template>
  <div :class="$style.root">
    <div :class="$style.img"
         :style="{ backgroundImage: `url(${pathToImg})` }"/>

    <div :class="$style.description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChatInstructionsProps } from './ChatInstructions.props'

defineProps<ChatInstructionsProps>()
</script>

<style module>
.root {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 36px;
  margin-bottom: 48px;
}
.img {
  height: 300px;
  width: 190px;
  background-size: cover;
}

.description {
  margin: auto;
  font-size: 1.6rem;
  line-height: 26px;
}
</style>
