<script setup lang="ts">
import stores from '@/components/dash/stores.json'
import DashSubscription from '@/components/dash/DashSubscription.vue'

const storeName = (s: { name: string; city?: string }) =>
  s.city ? `${s.name}（${s.city}）` : s.name
</script>

<template>
  <h3>纸质版购买 / Printed version available in:</h3>
  <ul class="list-disc pl-4 lg:columns-2 lg:gap-16">
    <li v-for="store in stores">
      <a v-if="store.url" :href="store.url" class="after:content-['↗']">
        {{ storeName(store) }}
      </a>
      <template v-else>{{ storeName(store) }}</template>
    </li>
  </ul>
  <h3>电子版订阅 / Digital version subscription:</h3>
  <DashSubscription />
</template>
