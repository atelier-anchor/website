<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SiteLogo from '@/components/SiteLogo.vue'
</script>

<template>
  <header>
    <h1>
      <RouterLink to="/"> <SiteLogo class="w-32 sm:w-40" /></RouterLink>
    </h1>
  </header>
</template>
