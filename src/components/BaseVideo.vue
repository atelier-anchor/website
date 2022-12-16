<script setup lang="ts">
import { computed } from 'vue'
import { types } from '@/utils'

export interface Video {
  src: string
  poster: string
  width?: number | string
  height?: number | string
}

const ext = computed(() => props.video.src.replace(/^.+\.([^\.]+)$/g, '$1'))

const props = defineProps<{
  video: Video
  dir: string
}>()
</script>

<template>
  <video controls :poster="`${dir}/${video.poster}`">
    <source :src="`${dir}/${video.src}`" :type="types[ext]" />
  </video>
</template>
