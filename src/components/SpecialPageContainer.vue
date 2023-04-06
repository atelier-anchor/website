<script setup lang="ts">
import SiteLogo from '@/components/site/SiteLogo.vue'
</script>

<template>
  <div class="mt-[10vh] text-center">
    <slot></slot>
  </div>
  <SiteLogo />
</template>
