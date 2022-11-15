<template>
  <div :class="$style.root">
    <a href="https://www.instagram.com/"
       target="_blank">

      <div :class="$style.img"
           :style="{ backgroundImage: `url(${inst})` }"/>
    </a>

    <a href="https://ru-ru.facebook.com/"
       target="_blank">

      <div :style="{ backgroundImage: `url(${face})` }"
           :class="$style.img"/>
    </a>

    <a href="https://vk.com/"
       target="_blank">

      <div :style="{ backgroundImage: `url(${vk})` }"
           :class="$style.img"/>
    </a>
  </div>
</template>

<script lang="ts" setup>
import inst from '../../assets/Images/social/inst.png'
import face from '../../assets/Images/social/facebook.png'
import vk from '../../assets/Images/social/vk.png'
</script>

<style module>
.root {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  transition: all 0.3 ease-in-out;
}

.img {
  width: 25px;
  height: 25px;
  background-size: 25px;
  background-position: -25px 0;
}

.img:hover {
  background-position: 0;
}
</style>
