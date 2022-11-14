<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderMenu/>
    </div>
    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer"/>
    <UpButton :class="$style.up_btn"/>
    <Footer/>
  </div>
</template>

<script  lang="ts" setup>
import { Footer } from './components/Footer'
import { HeaderMenu } from './components/HeaderMenu'
import { UpButton } from './components/UpButton'
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

.footer {
  padding-top: 30px;
}

@media screen and (max-width: 1440px) {
  .root {
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .root {
    margin-left: 0;
    margin-right: 0;
  }
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
