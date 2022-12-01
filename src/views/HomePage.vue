<template>
  <div :class="$style.root">
    <div :class="$style.intro"/>
    <Logo/>
    <ServiceDescription/>
  </div>
</template>

<script lang="ts" setup>
import { Logo } from '../components/Logo'
import { ServiceDescription } from '../components/ServiceDescription'
</script>

<style module>
.root {
  user-select: none;
  /* height: 100%; */
  /* height: 100vh; */
}

.intro {
  position: absolute;
  left: 0;
  top: 0;
  height: 90%;
  width: 100%;
  background-image: url(../assets/Images/background/bg-main.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
