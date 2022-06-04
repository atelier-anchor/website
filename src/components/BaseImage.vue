<script setup lang="ts">
import { computed } from 'vue'
import type { Image } from '@/data'

const path = (suffix: string) => `${props.dir}/${props.image.name}${suffix}.${props.image.type}`
const src = computed(() => ({
  base: props.image.url ? props.image.url : path(''),
  dark: path('.dark'),
  light: path('.light'),
}))

const props = defineProps<{
  dir: string
  image: Image
}>()
</script>

<template>
  <picture v-if="image.dark">
    <source :srcset="src.dark" media="(prefers-color-scheme: dark)" />
    <img :src="src.light" :alt="image.name" />
  </picture>
  <img v-else :src="src.base" :alt="image.name" />
</template>
