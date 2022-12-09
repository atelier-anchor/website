<script setup lang="ts">
import SiteLogo from '@/components/header/SiteLogo.vue'
</script>

<template>
  <div class="mt-[10vh] text-center">
    <slot></slot>
  </div>
  <div>
    <SiteLogo />
  </div>
</template>
