<template>
  <div :class="[$style.root, {
    [$style.hidden]: hidden,
    [$style.black]: scrollTop > 500,
  }]">
    <div :class="$style.left">
      <NavigationLink v-for="link, index in links"
                      :key="index"
                      :title="link.title"
                      :to="link.to"/>
    </div>

    <div :class="$style.right">
      <SocialLinks/>
      <ContactsLinks/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ContactsLinks } from '../ContactsLinks'
import { NavigationLink } from '../NavigationLink'
import { NavigationLinkProps } from '../NavigationLink/NavigationLink.props'
import { SocialLinks } from '../SocialLinks'
import { onMounted, onUnmounted, ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const hidden = ref(false)
const scrollTop = ref(0)
const oldScrollTop = ref(0)

const throttledFn = useThrottleFn(() => {
  scrollTop.value = window.scrollY

  handleOpacity(scrollTop.value, oldScrollTop.value)

  oldScrollTop.value = scrollTop.value
}, 100)

onMounted(() => {
  window.addEventListener('scroll', throttledFn)
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledFn)
})

function handleOpacity(scrollTop: number, oldScroll: number) {
  if (scrollTop > 500 && scrollTop > oldScroll)
    return hidden.value = true

  return hidden.value = false
}

const links: NavigationLinkProps[] = [
  { title: 'Блог', to: { name: 'blog' } },
  { title: 'Бесплатно', to: { name: 'free' } },
  { title: 'Семинары', to: { name: 'seminars' } },
  { title: 'Тренинги', to: { name: 'trainings' } },
  { title: 'Услуги', to: { name: 'services' } },
  { title: 'Отзывы', to: { name: 'reviews' } },
  { title: 'Контакты', to: { name: 'contacts' } },
]
</script>

<style module>
.root {
  position: sticky;
  top: 0;
  height: 80px;
  box-sizing: border-box;
  padding: 0 20px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  user-select: none;
  opacity: 1;
  transition: opacity 0.4s;
  z-index: 3;
}

.hidden {
  opacity: 0;
}

.black {
  background-color: rgba(0, 0, 0, 0.5);
}

.left, .right {
  display: grid;
  grid-auto-flow: column;
}
.left {
  justify-content: start;
  grid-gap: 26px;
}

.right {
  justify-content: end;
  grid-gap: 66px;
}

@media screen and (max-width: 1024px) {
  .root {
    padding: 0 10px;
  }
}
</style>
