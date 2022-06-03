<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { typefaces, works } from '@/data'
import BaseImage from '@/components/BaseImage.vue'

const route = useRoute()
const work = computed(
  () => (route.params.section === 'works' ? works : typefaces)[route.params.id as string]
)
</script>

<template>
  <div class="flex flex-col gap-4 sm:gap-8 lg:flex-row">
    <div class="lg:sticky top-8 h-fit flex flex-col gap-8 lg:max-w-lg">
      <div>
        <h2 class="text-2xl">{{ work.name }}</h2>
        <p>{{ work.type }}</p>
      </div>
      <ul>
        <li v-for="(name, title) in work.credits">{{ title }}: {{ name }}</li>
      </ul>
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
