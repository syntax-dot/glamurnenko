<template>
  <div :class="$style.root">
    <div :class="$style.logo"/>
    <div :class="$style.title">
      <h1>Наша миссия:</h1>
      <h2 :class="$style.quote"> «Миллион красиво одетых женщин»</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  margin-top: 86px;
  position: relative;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% max-content;
  z-index: 1;
}
.logo {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/Images/logo/logo.png);
  background-size: auto;
  background-position: inherit;
  background-repeat: no-repeat;
}

.title {
  grid-row-start: 2;
  text-transform: uppercase;
  text-align: left;
  bottom: 20px;
}

.title > h1 {
  font-size: 1.3rem;
}

.title > h2 {
  color: #c2af8f;
  font-size: 0.9rem;
  letter-spacing: -1px;
  font-weight: 500;
  text-decoration: underline;
}
</style>
