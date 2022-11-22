<script setup lang="ts">
defineProps<{
  data: {
    printed: {
      summary: string
      stores: {
        name: string
        url?: string
      }[]
    }
    digital: {
      summary: string
      emailLabel: string
      submitLabel: string
      notice: string
    }
  }
}>()
</script>

<template>
  <div>
    <h3 class="mb-4 sm:mb-8">{{ data.printed.summary }}</h3>
    <ul class="mb-4 list-disc pl-4 sm:mb-8 lg:columns-2 lg:gap-16">
      <li v-for="store in data.printed.stores">
        <a v-if="store.url" :href="store.url" class="after:content-['_↗']">{{ store.name }}</a>
        <template v-else>{{ store.name }}</template>
      </li>
    </ul>
    <h3 class="mb-4 sm:mb-8">{{ data.digital.summary }}</h3>
    <p><!-- TODO --></p>
  </div>
</template>
