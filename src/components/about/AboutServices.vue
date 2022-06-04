<script setup lang="ts">
defineProps<{
  data: {
    summary: string
    items: string[]
  }[]
}>()
</script>

<template>
  <div>
    <template v-for="service in data">
      <p class="mb-4 sm:mb-8">{{ service.summary }}</p>
      <ul class="mb-4 list-disc pl-4 sm:mb-8">
        <li v-for="item in service.items">{{ item }}</li>
      </ul>
    </template>
  </div>
</template>
