<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Work } from '@/data'
import PostAuthorTitle from '@/components/post/PostAuthorTitle.vue'

defineProps<{
  work: Work
  to?: string
}>()
</script>

<template>
  <div>
    <div class="mb-4">
      <h2 class="text-2xl">
        <RouterLink v-if="to" :to="to">
          {{ work.name }}
        </RouterLink>
        <template v-else>
          {{ work.name }}
        </template>
      </h2>
      <div>{{ work.type }}</div>
    </div>
    <ul>
      <PostAuthorTitle
        v-for="(name, title) in work.credits"
        :title="title"
        :name="(name as string)"
      />
    </ul>
  </div>
</template>
