<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Credits } from '@/types'
import PostAuthorTitle from '@/components/post/PostAuthorTitle.vue'

defineProps<{
  name: string
  category: string
  credits: Credits
  to?: string
}>()
</script>

<template>
  <div>
    <div class="mb-4">
      <h2 v-if="to" class="text-2xl">
        <RouterLink :to="to">{{ name }}</RouterLink>
      </h2>
      <h1 v-else class="text-2xl">{{ name }}</h1>
      <div>{{ category }}</div>
    </div>
    <ul>
      <PostAuthorTitle v-for="(author, title) in credits" :title="title">
        {{ author }}
      </PostAuthorTitle>
    </ul>
  </div>
</template>
