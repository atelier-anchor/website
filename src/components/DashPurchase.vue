<script setup lang="ts">
import stores from '@/data/stores.json'

const storeName = (s: { name: string; city?: string }) =>
  s.city ? `${s.name}（${s.city}）` : s.name
</script>

<template>
  <ul class="grid list-disc lg:grid-cols-2">
    <li v-for="store in stores" class="ml-4">
      <a v-if="store.url" :href="store.url" class="after:content-['↗']">
        {{ storeName(store) }}
      </a>
      <template v-else>{{ storeName(store) }}</template>
    </li>
  </ul>
</template>
