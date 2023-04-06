<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = ['works', 'typefaces', 'dash', 'about']
</script>

<template>
  <ul class="my-2 sm:mt-4 sm:mb-0">
    <li
      v-for="link in links"
      class="text-3xl"
      :class="{ 'text-primary': $route.fullPath.includes(link) }"
    >
      <RouterLink :to="{ name: link }">{{ link }}</RouterLink>
    </li>
  </ul>
</template>
