<script setup lang="ts">
defineProps<{
  image: string
  dir: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <img
    :src="`${dir.replace(/\/$/, '')}/${image}`"
    :alt="image.split('.')[0]"
    :width="width"
    :height="height"
  />
</template>
