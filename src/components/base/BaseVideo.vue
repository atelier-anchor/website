<script setup lang="ts">
defineProps<{
  video: Video
  dir: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <video controls :poster="`${dir}/${video.poster}`" :width="width" :height="height">
    <source :src="`${dir}/${video.src}`" type="video/webm" />
  </video>
</template>
