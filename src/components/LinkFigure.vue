<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Image } from '@/data'
import BasePicture from '@/components/BasePicture.vue'

defineProps<{
  image: Image
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" class="group">
    <figure class="overflow-hidden">
      <BasePicture :image="image" :dir="to" />
    </figure>
  </RouterLink>
</template>

<style scoped>
:deep(img) {
  @apply duration-500 group-hover:scale-105;
}
</style>
