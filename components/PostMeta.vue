<script setup lang="ts">
defineProps<{
  name: string
  category: Category | Category[]
  credits: Credit[]
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
      <div>{{ formatCategory(category) }}</div>
    </div>
    <dl>
      <PostAuthorItem v-for="credit in credits" :credit="credit" />
    </dl>
  </div>
</template>
