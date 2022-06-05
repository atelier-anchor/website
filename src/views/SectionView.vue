<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
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
  <ColumnContainer
    v-for="(item, id) in data"
    is="article"
    class="mb-4 items-center last:mb-0 sm:mb-8"
  >
    <template #left>
      <PostMeta :work="item" :to="`${route.path}/${id}`" class="hidden md:block" />
    </template>
    <template #right>
      <BaseImage :image="item.images[0]" :dir="`${route.path}/${id}`" />
    </template>
  </ColumnContainer>
</template>
