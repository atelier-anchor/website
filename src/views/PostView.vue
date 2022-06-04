<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import BaseImage from '@/components/BaseImage.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const work = computed(
  () => (route.params.section === 'works' ? works : typefaces)[route.params.id as string]
)
</script>

<template>
  <div class="flex flex-col gap-4 sm:gap-8 lg:flex-row">
    <div class="top-8 flex h-fit flex-col gap-8 lg:sticky lg:max-w-lg">
      <PostMeta :work="work" />
      <p v-for="p in work.description">
        {{ p }}
      </p>
    </div>
    <div class="flex flex-col gap-8">
      <figure v-for="image in work.images">
        <BaseImage :image="image" :dir="`${route.path}`" />
      </figure>
    </div>
  </div>
</template>
