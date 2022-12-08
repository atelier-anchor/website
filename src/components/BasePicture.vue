<script setup lang="ts">
import { computed } from 'vue'

const types: { [key: string]: string } = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml',
}

const dark = computed(() => props.image.includes('{light,dark}.'))
const basename = computed(() => props.image.replace(/(?:\.\{light,dark\})?\.[^.]+$/g, ''))
const exts = computed(() => props.image.replace(/^.+\.\{?(.+?)\}?$/g, '$1').split(','))
const path = (ext: string) => `${props.dir}/${basename.value}.${ext}`

const props = defineProps<{
  image: string
  dir: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <picture v-if="dark">
    <template v-for="ext in exts.slice(0, -1)">
      <source
        :srcset="path(`dark.${ext}`)"
        :type="types[ext]"
        media="(prefers-color-scheme: dark)"
      />
      <source :srcset="path(`light.${ext}`)" :type="types[ext]" />
    </template>
    <source :srcset="path(`dark.${exts.at(-1)}`)" media="(prefers-color-scheme: dark)" />
    <img :src="path(`light.${exts.at(-1)}`)" :alt="basename" :width="width" :height="height" />
  </picture>
  <picture v-else>
    <source v-for="ext in exts.slice(0, -1)" :srcset="path(ext)" :type="types[ext]" />
    <img :src="path(exts.at(-1) as string)" :alt="basename" :width="width" :height="height" />
  </picture>
</template>
