<template>
  <div :class="$style.root">
    <HeaderMenu :class="$style.header"/>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer">
      <UpButton :class="$style.up_btn"/>
      <Footer/>
    </div>
  </div>
</template>

<script  lang="ts" setup>
import { Footer } from './components/Footer'
import { HeaderMenu } from './components/HeaderMenu'
import { UpButton } from './components/UpButton'
</script>

<style module>
:root {
  background-color: #000;
}
.root {
  justify-content: center;
  display: grid;
  grid-template-areas: 'Header' 'Content' 'Footer';
}

.header {
  width: 100%;
}

.content {
  max-width: 1390px;
}

.footer {
  padding-top: 30px;
}

.up_btn {
  text-align: center;
}

@media screen and (max-width: 1440px) {

}

@media screen and (max-width: 1024px) {

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
