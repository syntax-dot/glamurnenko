<template>
  <div :class="$style.root">
    <button :class="$style.btn" @click="$emit('click')">
      НАВЕРХ
      <span>&#5169;</span>
      <!-- <span>&#94;;</span> -->
    </button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {

}

.btn {
  width: 240px;
  height: 50px;
  background-color: transparent;
  border: 2 px solid #fff;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
}
</style>
