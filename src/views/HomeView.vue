<script setup lang="ts">
// import TheWelcome from '@/components/TheWelcome.vue'
import { typefaces } from '@/data'
</script>

<template>
  <main>
    <div v-for="(item, name) in typefaces">
      <h3 class="text-lg my-8">{{ name }}</h3>
      <ul class="list-disc pl-4">
        <li v-for="i in item">{{ i }}</li>
      </ul>
    </div>
  </main>
</template>
