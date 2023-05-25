<script setup lang="ts">
const alias = (title: string) =>
  title
    .split(' ')
    .map((s) => s[0].toUpperCase())
    .join('')

defineProps<{
  credit: Credit
}>()
</script>

<template>
  <div class="flex">
    <dt class="w-8 flex-shrink-0 after:content-[':']">
      <abbr :title="credit.title">
        {{ alias(credit.title) }}
      </abbr>
    </dt>
    <dd>{{ formatName(credit.name) }}</dd>
  </div>
</template>
