<script setup lang="ts">
import { Post } from '@/types'
import data from '@/data.json'
import SectionItem from '@/components/section/SectionItem.vue'

const getPosts = (name: string) =>
  (data as Record<string, Post[]>)[name]
    .filter((post) => !post.exclude)
    .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <SectionItem v-for="post in getPosts($route.name as string)" :post="post" />
  </div>
</template>
