<script setup lang="ts">
const dark = computed(() => image.includes('{light,dark}.'))
const basename = computed(() => image.replace(/(?:\.\{light,dark\})?\.[^.]+$/g, ''))
const ext = computed(() => image.split('.').at(-1))

const { image } = defineProps<{
  image: string
  dir: string
  width?: number | string
  height?: number | string
}>()
</script>

<template>
  <picture>
    <template v-if="dark">
      <source :srcset="`${dir}/${basename}.dark.${ext}`" media="(prefers-color-scheme: dark)" />
      <img
        :src="`${dir}/${basename}.light.${ext}`"
        :alt="basename"
        :width="width"
        :height="height"
      />
    </template>
    <img v-else :src="`${dir}/${image}`" :alt="basename" :width="width" :height="height" />
  </picture>
</template>
