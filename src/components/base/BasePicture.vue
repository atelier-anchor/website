<script setup lang="ts">
const dark = computed(() => props.image.includes('{light,dark}.'))
const basename = computed(() => props.image.replace(/(?:\.\{light,dark\})?\.[^.]+$/g, ''))
const ext = computed(() => props.image.split('.').at(-1))

const props = defineProps<{
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
