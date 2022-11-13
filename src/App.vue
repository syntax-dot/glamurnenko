<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderMenu/>
    </div>
    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer"/>
    <Footer/>
  </div>
</template>

<script  lang="ts" setup>
import { Footer } from './components/Footer'
import { HeaderMenu } from './components/HeaderMenu'
</script>

<style module>
:root {
  /* background-color: #202124; */
  background-color: #000;
  /* background-color: #ffffff; */
}
.root {
  display: grid;
  margin-left: 390px;
  margin-right: 375px;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'header' 'content' 'footer';
}
</style>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

body {
  color: aliceblue;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Oranienbaum', serif;
}
</style>
