<script setup lang="ts">
defineProps<{
  is?: string
}>()
</script>

<template>
  <component :is="is ? is : 'div'" class="flex flex-col gap-4 md:flex-row md:gap-8">
    <div class="md:w-1/3 md:min-w-[256px] md:shrink-0">
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </component>
</template>
