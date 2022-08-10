<script setup lang="ts">
import { ref } from 'vue'
import SiteLogo from '@/components/SiteLogo.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteNavBarHamburger from '@/components/SiteNavBarHamburger.vue'

const isNavOpen = ref(false)
const toggleNav = () => (isNavOpen.value = !isNavOpen.value)
</script>

<template>
  <header class="sticky top-0 z-10 h-fit bg-white py-4 dark:bg-black lg:py-8">
    <div class="flex items-center justify-between">
      <h1>
        <SiteLogo class="w-32 sm:w-40" />
      </h1>
      <SiteNavBarHamburger :active="isNavOpen" @click="toggleNav" />
    </div>
    <SiteNav :isNavOpen="isNavOpen" />
  </header>
</template>
