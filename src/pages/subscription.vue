<script setup lang="ts">
defineProps<{
  msg: {
    zh: string
    en: string
  }
}>()
</script>

<template>
  <SpecialPageContainer>
    <h1 class="mb-8 text-2xl">
      {{ msg.zh }}
      <br class="mb-2" />
      {{ msg.en }}
    </h1>
    <p class="text-xl">
      <RouterLink to="/">continue &rightarrow;</RouterLink>
    </p>
  </SpecialPageContainer>
</template>
