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

}
</style>
