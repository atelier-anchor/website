<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { parseMarkdown } from '@/utils'
import data from '@/data.json'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BasePicture from '@/components/BasePicture.vue'
import BaseVideo from '@/components/BaseVideo.vue'
import PostMeta from '@/components/post/PostMeta.vue'
import type { Video } from '@/components/BaseVideo.vue'

export interface Work {
  name: string
  date: string
  category: string
  exclude?: boolean
  credits: Record<string, string>
  description: string[]
  images: string[]
  videos?: Video[]
}

const { params, path } = useRoute()
const work = computed(() => {
  const section = params.section as keyof typeof data
  const id = params.id as string
  return (data[section] as Record<string, Work>)[id]
})

useHead({
  title: `${work.value.name} - atelierAnchor`,
})
</script>

<template>
  <ColumnContainer class="flex-col-reverse sm:gap-8">
    <template #left>
      <article class="h-fit sm:top-4 md:sticky lg:top-8">
        <PostMeta v-bind="work" class="mb-4 sm:mb-8" />
        <p v-for="p in work.description" class="mb-4 last:mb-0" v-html="parseMarkdown(p)"></p>
      </article>
    </template>
    <template #right>
      <figure v-for="image in work.images">
        <BasePicture :image="image" :dir="`${path}`" width="1920" height="1440" />
      </figure>
      <figure v-for="video in work.videos">
        <BaseVideo :video="video" :dir="`${path}`" width="1920" height="1080" />
      </figure>
    </template>
  </ColumnContainer>
</template>
