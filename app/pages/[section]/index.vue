<script setup lang="ts">
const posts = usePosts()

definePageMeta({
  middleware: ({ params }) => {
    const { isValidSection } = useQuery(params.section as string)
    if (!isValidSection) {
      return navigateTo('/404')
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <Title>{{ $route.params.section }}</Title>
    <SectionItem v-for="post in posts" :post="post" />
  </div>
</template>
