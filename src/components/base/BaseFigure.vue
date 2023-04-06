<script setup lang="ts">
defineProps<{
  image: string
  to: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <RouterLink :to="to" class="group overflow-hidden sm:h-full">
    <BasePicture :image="image" :dir="to" :width="width" :height="height" />
  </RouterLink>
</template>

<style scoped>
:deep(img) {
  @apply duration-400 group-hover:scale-105;
}
</style>
