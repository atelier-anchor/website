<script setup lang="ts">
import SiteLogo from '@/components/header/SiteLogo.vue'
</script>

<template>
  <div class="mt-[10vh] text-center text-xl">
    <h1 class="mb-4 text-3xl">404</h1>
    <p class="mb-8">
      您到达了一片不锚之地。
      <br class="mb-2" />
      Oops, you are now in an anchorless zone.
    </p>
    <p>
      <a href="javascript:;" onclick="window.history.back()">&leftarrow; go back</a>
    </p>
  </div>
  <div>
    <SiteLogo />
  </div>
</template>
