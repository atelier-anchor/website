<script setup lang="ts">
import { Post } from '@/types'
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import PostMeta from '@/components/post/PostMeta.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <ColumnContainer is="article" class="items-center gap-0">
    <template #left>
      <PostMeta
        :name="post.name"
        :category="post.category"
        :credits="post.credits"
        :to="`${$route.path}/${post.id}`"
        class="hidden md:block"
      />
    </template>
    <template #right>
      <LinkFigure
        :image="post.images[0]"
        :to="`${$route.path}/${post.id}`"
        :title="post.name"
        width="1920"
        height="1440"
      />
    </template>
  </ColumnContainer>
</template>
