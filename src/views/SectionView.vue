<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import BaseImage from '@/components/BaseImage.vue'
import PostMeta from '@/components/post/PostMeta.vue'

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
    <PostMeta :work="item" :to="`${route.path}/${id}`" />
    <div>
      <BaseImage :image="item.images[0]" :dir="`${route.path}/${id}`" />
    </div>
  </section>
</template>
