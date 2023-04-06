<script setup lang="ts">
import { Post } from '@/types'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseFigure from '@/components/base/BaseFigure.vue'
import PostMeta from '@/components/PostMeta.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <BaseContainer is="article" class="items-center gap-0">
    <template #left>
      <PostMeta
        :name="post.name"
        :category="post.category"
        :credits="post.credits"
        :to="`${$route.path}/${post.id}`"
        class="max-md:hidden"
      />
    </template>
    <template #right>
      <BaseFigure
        :image="post.images[0]"
        :to="`${$route.path}/${post.id}`"
        :title="post.name"
        width="1920"
        height="1440"
      />
    </template>
  </BaseContainer>
</template>
