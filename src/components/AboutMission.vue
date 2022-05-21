<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <div>
    <p v-for="mission in data" class="mb-4 sm:mb-8">{{ mission }}</p>
  </div>
</template>
