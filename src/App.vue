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
  display: grid;
  margin: 0 380px;
  /* grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'header' 'content' 'footer'; */
}

.root, .header {

}
.header {
  width: 100%;
  /* padding: 0 380px; */
  /* align-self: center; */
}

.content {
  margin-top: 123px;
}

.footer {
  padding-top: 30px;
}

.up_btn {
  text-align: center;
}

@media screen and (max-width: 1440px) {
  .root {
    margin: 0 120px;
  }
}

@media screen and (max-width: 1024px) {
  .root {
    margin: 0;
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
