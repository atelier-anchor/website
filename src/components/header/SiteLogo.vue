<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" class="block w-32 sm:w-40">
    <picture>
      <source srcset="@/assets/atelier-anchor.dark.svg" media="(prefers-color-scheme: dark)" />
      <img src="@/assets/atelier-anchor.light.svg" alt="atelierAnchor" width="333.42" height="125.06" />
    </picture>
  </RouterLink>
</template>
