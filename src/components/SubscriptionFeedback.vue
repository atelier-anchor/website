<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SpecialPageContainer from '@/components/SpecialPageContainer.vue'
</script>

<template>
  <SpecialPageContainer>
    <h2 class="mb-8 text-2xl">
      <template v-if="$route.name === 'thank-you'">
        感谢订阅
        <br class="mb-2" />
        thank you~
      </template>
      <template v-if="$route.name === 'unsubscription-successful'">
        退订成功
        <br class="mb-2" />
        unsubscription successful
      </template>
    </h2>
    <p class="text-xl">
      <RouterLink to="/">continue &rightarrow;</RouterLink>
    </p>
  </SpecialPageContainer>
</template>
