<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="relative mx-auto min-h-screen min-w-[320px] max-w-[1440px] p-4 lg:p-8">
    <div class="sm:flex sm:gap-16">
      <SiteHeader />
      <main class="mb-8 w-full sm:mb-0">
        <RouterView />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
