<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { dash, typefaces, works } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BasePicture from '@/components/BasePicture.vue'
import PostMeta from '@/components/post/PostMeta.vue'

type WorkType = 'works' | 'typefaces' | 'dash'

const route = useRoute()
const work = computed(
  () =>
    ({
      works: works,
      typefaces: typefaces,
      dash: dash,
    }[route.params.section as WorkType][route.params.id as string])
)
</script>

<template>
  <ColumnContainer class="flex-col-reverse">
    <template #left>
      <article class="h-fit sm:top-4 md:sticky lg:top-8">
        <PostMeta :work="work" class="mb-4 sm:mb-8" />
        <p v-for="p in work.description" class="mb-4 last:mb-0">
          {{ p }}
        </p>
      </article>
    </template>
    <template #right>
      <figure v-for="image in work.images" class="mb-4 last:mb-0 sm:mb-8">
        <BasePicture :image="image" :dir="`${route.path}`" width="1920" height="1440" />
      </figure>
    </template>
  </ColumnContainer>
</template>
