<template>
  <div :class="$style.root">
  <div :class="$style.left">
    <NavigationLink></NavigationLink>
  </div>

<div :class="$style.right">
  <SocialLinks>
  </SocialLinks>
  <ContactsLinks></ContactsLinks>
</div>

  </div>

</template>

<script lang="ts" setup>
import { ContactsLinks } from '../ContactsLinks'
import { NavigationLink } from '../NavigationLink'
import { SocialLinks } from '../SocialLinks'

</script>

<style module>
.root {

}

</style>
