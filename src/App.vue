<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="max-w-12xl mx-auto p-4 md:p-8">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
