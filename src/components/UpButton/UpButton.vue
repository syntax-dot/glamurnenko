<template>
  <div v-if="scrollTop > 1000"
       :class="$style.root">
    <button :class="$style.btn" @click="toTop">
      НАВЕРХ ⏏
      <!-- <span>&#5169;</span> -->
      <!-- <span>&#94;</span> -->
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll(e: Event) {
  scrollTop.value = window.scrollY
  console.log(window.scrollY)
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style module>
.root {
  /* margin: 0 auto; */
  /* position: sticky;
  top: 90%;
  left: 50%;
  z-index: 2; */
}

.btn {
  width: 90px;
  height: 40px;
  background-color: rgb(0, 0, 0);
  border: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.3);
  /* scale: 1.1; */
}
</style>
