<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { typefaces, works } from '@/data'
import BaseImage from '@/components/BaseImage.vue'

const route = useRoute()
const data = computed(() =>
  Object.entries(route.name === 'works' ? works : typefaces)
    .filter(([, item]) => !item.exclude)
    .sort(([, a], [, b]) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
    .reduce((res, [id, item]) => ((res[id] = item), res), {} as typeof works)
)
</script>

<template>
  <section v-for="(item, id) in data" class="flex flex-col items-center gap-4 sm:gap-8 lg:flex-row">
    <div class="w-64 flex-shrink-0">
      <h2 class="text-2xl lg:sticky lg:top-8">
        <RouterLink :to="{ name: 'post', params: { section: route.name as string, id } }">
          {{ item.name }}
        </RouterLink>
      </h2>
    </div>
    <div>
      <BaseImage :image="item.images[0]" :dir="`${route.path}/${id}`" />
    </div>
  </section>
</template>
