<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  link: string
}>()
</script>

<template>
  <h2 class="text-3xl" :class="{ 'text-primary': $route.fullPath.includes(link) }">
    <RouterLink :to="{ name: link }">{{ link }}</RouterLink>
  </h2>
</template>
