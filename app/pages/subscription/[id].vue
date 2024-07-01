<script setup lang="ts">
const route = useRoute()
const msg = computed(() => {
  const data = {
    'thank-you': { zh: '感谢订阅', en: 'thank you~' },
    'unsubscribed-successfully': { zh: '退订成功', en: 'unsubscribed successfully' },
  }
  return data[route.params.id as keyof typeof data]
})

definePageMeta({
  layout: 'special',
  middleware: ({ params }) => {
    if (params.id !== 'thank-you' && params.id !== 'unsubscribed-successfully') {
      navigateTo('/404')
    }
  },
})
</script>

<template>
  <div>
    <h1 class="mb-8 text-2xl">
      {{ msg.zh }}
      <br class="mb-2" />
      {{ msg.en }}
    </h1>
    <p class="text-xl">
      <NuxtLink to="/">continue &rightarrow;</NuxtLink>
    </p>
  </div>
</template>
