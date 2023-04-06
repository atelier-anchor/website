<script setup lang="ts">
const address = ['15A, Lane 141', 'Xing’an Road', 'Huangpu District', 'Shanghai, China']
</script>

<template>
  <address class="not-italic">
    <template v-for="line in address">{{ line }}<br /></template>
    <a href="mailto:hi@atelier-anchor.com">hi@atelier-anchor.com</a>
  </address>
</template>
