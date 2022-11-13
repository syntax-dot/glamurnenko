<template>
  <div :class="$style.root">
    <a href="https://www.instagram.com/"
       target="_blank">
      <img src="../../assets/Images/social/inst.png">
    </a>

    <a href="https://ru-ru.facebook.com/"
       target="_blank">
      <img src="../../assets/Images/social/facebook.png">
    </a>

    <a href="https://vk.com/"
       target="_blank">
      <img src="../../assets/Images/social/vk.png">
    </a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  display: grid;
  grid-auto-flow: column;
  /* grid-gap: 1px; */
  width: 100%;
}
</style>
