<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Image, Numberish } from '@/data'
import BasePicture from '@/components/BasePicture.vue'

defineProps<{
  image: Image
  to: string
  width?: Numberish
  height?: Numberish
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
