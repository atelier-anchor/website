<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BaseImage from '@/components/BaseImage.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const work = computed(
  () => (route.params.section === 'works' ? works : typefaces)[route.params.id as string]
)
</script>

<template>
  <ColumnContainer class="flex-col-reverse">
    <template #left>
      <article class="top-8 h-fit md:sticky">
        <PostMeta :work="work" class="mb-4 sm:mb-8" />
        <p v-for="p in work.description" class="mb-4 last:mb-0">
          {{ p }}
        </p>
      </article>
    </template>
    <template #right>
      <figure v-for="image in work.images" class="mb-4 last:mb-0 sm:mb-8">
        <BaseImage :image="image" :dir="`${route.path}`" />
      </figure>
    </template>
  </ColumnContainer>
</template>
