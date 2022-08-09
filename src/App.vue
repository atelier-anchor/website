<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div
    class="relative mx-auto flex min-h-screen min-w-[320px] max-w-[1440px] flex-col gap-8 p-4 sm:flex-row sm:gap-16 lg:p-8"
  >
    <SiteHeader />
    <main class="relative w-full grow">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
