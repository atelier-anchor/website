<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-screen-2xl p-4 lg:p-8">
    <div class="sm:flex sm:gap-16 lg:gap-24 xl:gap-32">
      <SiteHeader />
      <main class="mb-8 flex flex-col gap-4 sm:mb-0">
        <RouterView />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
