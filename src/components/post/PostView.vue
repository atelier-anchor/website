<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { getPost, parseMarkdown } from '@/utils'
import ColumnContainer from '@/components/shared/ColumnContainer.vue'
import BasePicture from '@/components/shared/BasePicture.vue'
import BaseVideo from '@/components/shared/BaseVideo.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const post = computed(() => getPost(route.params.section as string, route.params.id as string))

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
          :class="post.description ? 'mb-4 sm:mb-8' : null"
        />
        <div class="flex flex-col gap-4">
          <p v-for="p in post.description" v-html="parseMarkdown(p)"></p>
        </div>
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
