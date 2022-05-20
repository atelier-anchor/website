<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SiteLogo from '@/components/SiteLogo.vue'

const navLinks = ['works', 'typefaces', 'dash', 'about']
</script>

<template>
  <header>
    <h1 class="mb-4 sm:mb-8">
      <RouterLink to="/"><SiteLogo class="w-32 sm:w-40" /></RouterLink>
    </h1>
    <ul>
      <li v-for="link in navLinks">
        <h2 class="text-3xl mb-2">
          <RouterLink :to="link">{{ link }}</RouterLink>
        </h2>
      </li>
    </ul>
  </header>
</template>
