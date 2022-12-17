<script setup lang="ts">
import stores from '@/components/dash/stores.json'

const storeName = (s: { name: string; city?: string }) =>
  s.city ? `${s.name}（${s.city}）` : s.name
</script>

<template>
  <ul class="list-disc pl-4 lg:columns-2 lg:gap-16">
    <li v-for="store in stores">
      <a v-if="store.url" :href="store.url" class="after:content-['↗']">
        {{ storeName(store) }}
      </a>
      <template v-else>{{ storeName(store) }}</template>
    </li>
  </ul>
</template>
