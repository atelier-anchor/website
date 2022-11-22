<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div
    class="relative mx-auto flex min-h-[max(100vh,480px)] min-w-[320px] max-w-[1440px] flex-col px-4 sm:flex-row sm:gap-16 lg:px-8"
  >
    <SiteHeader />
    <main class="relative w-full grow sm:py-4 lg:py-8">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
