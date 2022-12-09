<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SpecialPageContainer from '@/components/SpecialPageContainer.vue'

const { name } = useRoute()
const text = computed(() => {
  const p = {
    'thank-you': ['感谢订阅', 'thank you~'],
    'unsubscription-successful': ['退订成功', 'unsubscription successful'],
  }
  return p[name as keyof typeof p]
})
</script>

<template>
  <SpecialPageContainer>
    <h2 class="mb-8 text-2xl">
      {{ text[0] }}
      <br class="mb-2" />
      {{ text[1] }}
    </h2>
    <p class="text-xl">
      <RouterLink to="/">continue &rightarrow;</RouterLink>
    </p>
  </SpecialPageContainer>
</template>
