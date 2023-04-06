<script setup lang="ts">
const address = [
  '101 A, No. 15, Lane 545',
  'Zhenning Road',
  'Changning District',
  'Shanghai, China',
]
</script>

<template>
  <address class="not-italic">
    <template v-for="line in address">{{ line }}<br /></template>
    <a href="mailto:hi@atelier-anchor.com">hi@atelier-anchor.com</a>
  </address>
</template>
