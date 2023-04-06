<script setup lang="ts">
const back = () => window.history.back()
</script>

<template>
  <SpecialPageContainer>
    <h1 class="mb-4 text-3xl">404</h1>
    <p class="mb-8 text-xl">
      您到达了一片不锚之地。
      <br class="mb-2" />
      Oops, you are now in an anchorless zone.
    </p>
    <p class="text-xl">
      <a href="javascript:;" @click="back">&leftarrow; go back</a>
    </p>
  </SpecialPageContainer>
</template>
