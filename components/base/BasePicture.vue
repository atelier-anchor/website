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
    <img
      :src="dark ? `${dir}/${basename}.dark.${ext}` : `${dir}/${image}`"
      :alt="basename"
      :width="width"
      :height="height"
    />
  </picture>
</template>
