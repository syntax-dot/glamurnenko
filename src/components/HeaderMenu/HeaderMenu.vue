<template>
  <div :class="[$style.root, {
    [$style.fixed]: scrollTop > 650
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

const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll(e: Event) {
  scrollTop.value = window.scrollY
  console.log(e)
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
  position: relative;
  top: 0;
  left: 0;
  height: 124px;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 0 20px;
  z-index: 2;
}

.fixed {
  position: sticky;
  top: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
}

.left, .right {
  display: grid;
  grid-auto-flow: column;
}
.left {
  justify-content: start;
  grid-gap: 24px;
}

.right {
  justify-content: end;
  grid-gap: 66px;
}

/* @media screen and (max-width: 1024px) {
  .right {
    justify-content: start;
  }
} */
</style>
