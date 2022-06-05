<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <p v-for="p in data" class="mb-4 sm:mb-8">{{ p }}</p>
</template>
