<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>
    <RouterLink to="/" class="inline-block w-32 sm:w-40">
      <picture>
        <source srcset="/atelier-anchor.dark.svg" media="(prefers-color-scheme: dark)" />
        <img src="/atelier-anchor.light.svg" alt="atelierAnchor" />
      </picture>
    </RouterLink>
  </h1>
</template>
