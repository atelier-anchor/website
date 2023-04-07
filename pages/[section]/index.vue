<script setup lang="ts">
const posts = usePosts()
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <SectionItem v-for="post in posts" :post="post" />
  </div>
</template>
