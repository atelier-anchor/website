<script setup lang="ts">
import type { Image } from '@/data'

const imageTypes = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml',
}

defineProps<{
  image: Image
  dir: string
}>()
</script>

<template>
  <picture v-if="image.dark">
    <template v-if="image.type.length === 1">
      <source
        :srcset="`${dir}/${image.name}.dark.${image.type[0]}`"
        media="(prefers-color-scheme: dark)"
      />
      <img
        :src="`${dir}/${image.name}.light.${image.type[0]}`"
        :alt="image.name"
        :class="{ 'w-screen': image.type[0] === 'svg' }"
      />
    </template>
    <template v-else>
      <!-- TODO -->
    </template>
  </picture>
  <picture v-else>
    <source
      v-for="imageType in image.type.slice(0, -1)"
      :srcset="`${dir}/${image.name}.${imageType}`"
      :type="imageTypes[imageType]"
    />
    <img :src="`${dir}/${image.name}.${image.type.slice(-1)}`" :alt="image.name" />
  </picture>
</template>
