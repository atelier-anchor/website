<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { Post } from '@/types'
import { parseMarkdown } from '@/utils'
import data from '@/data.json'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BasePicture from '@/components/BasePicture.vue'
import BaseVideo from '@/components/BaseVideo.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const post = computed(
  () =>
    (data as Record<string, Post[]>)[route.params.section as string].find(
      ({ id }) => id === route.params.id
    ) as Post
)

useHead({
  title: `${post.value.name} - atelierAnchor`,
})
</script>

<template>
  <ColumnContainer class="flex-col-reverse sm:gap-8">
    <template #left>
      <article class="h-fit sm:top-4 md:sticky lg:top-8">
        <PostMeta
          :name="post.name"
          :category="post.category"
          :credits="post.credits"
          class="mb-4 sm:mb-8"
        />
        <p v-for="p in post.description" class="mb-4 last:mb-0" v-html="parseMarkdown(p)"></p>
      </article>
    </template>
    <template #right>
      <BasePicture
        v-for="image in post.images"
        :image="image"
        :dir="$route.path"
        width="1920"
        height="1440"
      />
      <BaseVideo
        v-for="video in post.videos"
        :video="video"
        :dir="$route.path"
        width="1920"
        height="1080"
      />
    </template>
  </ColumnContainer>
</template>
