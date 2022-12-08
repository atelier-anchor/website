<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PostAuthorTitle from '@/components/post/PostAuthorTitle.vue'

defineProps<{
  name: string
  category: string
  credits: Record<string, string>
  to?: string
}>()
</script>

<template>
  <div>
    <div class="mb-4">
      <h2 class="text-2xl">
        <RouterLink v-if="to" :to="to">
          {{ name }}
        </RouterLink>
        <template v-else>
          {{ name }}
        </template>
      </h2>
      <div>{{ category }}</div>
    </div>
    <ul>
      <PostAuthorTitle v-for="(author, title) in credits" :title="title">
        {{ author }}
      </PostAuthorTitle>
    </ul>
  </div>
</template>
