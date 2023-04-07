<script setup lang="ts">
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
        <NuxtLink :to="to">{{ name }}</NuxtLink>
      </h2>
      <h1 v-else class="text-2xl">{{ name }}</h1>
      <div>{{ category }}</div>
    </div>
    <dl>
      <PostAuthorItem v-for="(author, title) in credits" :title="title" :author="author" />
    </dl>
  </div>
</template>
