<script setup lang="ts">
import { getPosts } from '@/utils'
import SectionItem from '@/components/SectionItem.vue'
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <SectionItem v-for="post in getPosts($route.name as string)" :post="post" />
  </div>
</template>
