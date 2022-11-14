<template>
  <div :class="$style.root">
    <button :class="$style.btn" @click="$emit('click')">
      НАВЕРХ ⏏
      <!-- <span>&#5169;</span> -->
      <!-- <span>&#94;</span> -->
    </button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  margin: 0 auto;
}

.btn {
  width: 90px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.3);
  /* scale: 1.1; */
}
</style>
