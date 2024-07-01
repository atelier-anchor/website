<script setup lang="ts">
const back = () => {
  window.history.back()
}

definePageMeta({
  layout: 'special',
})
</script>

<template>
  <div>
    <Title>404</Title>
    <h1 class="mb-4 text-3xl">404</h1>
    <p class="mb-8 text-xl">
      您到达了一片不锚之地。
      <br class="mb-2" />
      Oops, you are now in an anchorless zone.
    </p>
    <p class="text-xl">
      <button aria-label="Go back" @click="back">&leftarrow; go back</button>
    </p>
  </div>
</template>
