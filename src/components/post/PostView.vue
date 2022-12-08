<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown } from '@/utils'
import data from '@/data.json'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BasePicture from '@/components/BasePicture.vue'
import PostMeta from '@/components/post/PostMeta.vue'

interface Work {
  name: string
  category: string
  credits: Record<string, string>
  description: string[]
  images: string[]
  // videos?: Video[]
}

const route = useRoute()
const work = computed(() => {
  const section = route.params.section as keyof typeof data
  const id = route.params.id as string
  return (data[section] as Record<string, Work>)[id]
})
</script>

<template>
  <ColumnContainer class="flex-col-reverse">
    <template #left>
      <article class="h-fit sm:top-4 md:sticky lg:top-8">
        <PostMeta v-bind="work" class="mb-4 sm:mb-8" />
        <p v-for="p in work.description" class="mb-4 last:mb-0" v-html="parseMarkdown(p)"></p>
      </article>
    </template>
    <template #right>
      <figure v-for="image in work.images" class="mb-4 last:mb-0 sm:mb-8">
        <BasePicture :image="image" :dir="`${route.path}`" width="1920" height="1440" />
      </figure>
    </template>
  </ColumnContainer>
</template>
