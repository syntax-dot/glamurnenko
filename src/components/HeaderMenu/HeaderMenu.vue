<template>
  <div :class="$style.root">
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
  z-index: 2;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  /* grid-template-rows: 1fr; */
  height: 124px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.left {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  /* margin-left: 40px; */
}

.right {
  display: grid;
  grid-template-columns: 100px max-content;
  grid-gap: 66px;
}

@media screen and (max-width: 1440px) {
  .root {
    padding-left: 20px;
    padding-right: 20px;
  }

  .left {
    grid-gap: 34px;
  }
}

@media screen and (max-width: 1024px) {
  .root {
  }

  .left {
  }
}
</style>
