<template>
  <h1 v-text="title"
      :class="$style.root"
      @click="$router.push(props.to)"/>
</template>

<script lang="ts" setup>
import { NavigationLinkProps } from './NavigationLink.props'

const props = defineProps<NavigationLinkProps>()
</script>

<style module>
.root {
  font-size: 18px;
  /* font-weight: bold; */
  text-transform: uppercase;
  /* width: fit-content; */
  padding-bottom: 8px;
  padding-top: 8px;
  color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.root:hover {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #393b3b;
}
</style>
