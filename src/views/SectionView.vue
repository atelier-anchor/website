<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const data = computed(() =>
  Object.entries(route.name === 'works' ? works : typefaces)
    .filter(([, item]) => !item.exclude)
    .sort(([, a], [, b]) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
    .reduce((res, [id, item]) => ((res[id] = item), res), {} as typeof works)
)

const to = (id: string) => `${route.path}/${id}`
</script>

<template>
  <ColumnContainer
    v-for="(item, id) in data"
    is="article"
    class="mb-4 items-center last:mb-0 sm:mb-8"
  >
    <template #left>
      <PostMeta :work="item" :to="to(id)" class="hidden md:block" />
    </template>
    <template #right>
      <LinkFigure :image="item.images[0]" :to="to(id)" />
    </template>
  </ColumnContainer>
</template>
