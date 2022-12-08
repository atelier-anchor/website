<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BasePicture from '@/components/BasePicture.vue'

defineProps<{
  image: string
  to: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <RouterLink :to="to" class="group block sm:h-full">
    <figure class="overflow-hidden sm:h-full">
      <BasePicture :image="image" :dir="to" :width="width" :height="height" />
    </figure>
  </RouterLink>
</template>

<style scoped>
:deep(img) {
  @apply duration-500 group-hover:scale-105;
}
</style>
