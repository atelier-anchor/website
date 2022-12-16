<script setup lang="ts">
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import PostMeta from '@/components/post/PostMeta.vue'

defineProps<{
  id: string
  name: string
  category: string
  credits: Record<string, string>
  images: string[]
}>()
</script>

<template>
  <ColumnContainer is="article" class="items-center gap-0">
    <template #left>
      <PostMeta v-bind="$props" :to="`${$route.path}/${id}`" class="hidden md:block" />
    </template>
    <template #right>
      <LinkFigure
        :image="images[0]"
        :to="`${$route.path}/${id}`"
        :title="name"
        width="1920"
        height="1440"
      />
    </template>
  </ColumnContainer>
</template>
