<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import { fromEntries } from '@/utils'
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const items = computed(() => {
  const entries = Object.entries(route.name === 'works' ? works : typefaces)
    .filter(([, item]) => !item.exclude)
    .sort(([, a], [, b]) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
  return fromEntries(entries)
})

const to = (id: string) => `${route.path}/${id}`
</script>

<template>
  <ColumnContainer
    v-for="(item, id) in items"
    is="article"
    class="mb-4 items-center last:mb-0 sm:mb-8"
  >
    <template #left>
      <PostMeta :work="item" :to="to(id)" class="hidden md:block" />
    </template>
    <template #right>
      <LinkFigure :image="item.images[0]" :to="to(id)" width="1920" height="1440" />
    </template>
  </ColumnContainer>
</template>
