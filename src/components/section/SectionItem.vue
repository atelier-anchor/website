<script setup lang="ts">
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import PostMeta from '@/components/post/PostMeta.vue'

defineProps<{
  id: string
  item: any
}>()
</script>

<template>
  <!-- TODO: gap-0 -->
  <ColumnContainer is="article" class="items-center gap-0">
    <template #left>
      <PostMeta :work="item" :to="`${$route.path}/${id}`" class="hidden md:block" />
    </template>
    <template #right>
      <LinkFigure :image="item.images[0]" :to="`${$route.path}/${id}`" width="1920" height="1440" />
    </template>
  </ColumnContainer>
</template>
