<script setup lang="ts">
defineProps<{
  name: string
  category: Category | Category[]
  credits: Credit[]
  to?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <hgroup class="flex flex-col gap-1">
      <h2 v-if="to" class="text-2xl/none">
        <NuxtLink :to="to">{{ name }}</NuxtLink>
      </h2>
      <h1 v-else class="text-2xl/none">{{ name }}</h1>
      <p>{{ formatCategory(category) }}</p>
    </hgroup>
    <dl v-if="credits">
      <PostAuthorItem v-for="credit in credits" :credit="credit" />
    </dl>
  </div>
</template>
