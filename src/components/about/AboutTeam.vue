<script setup lang="ts">
defineProps<{
  data: {
    name: string
    avatar: string
    titles: string[]
  }[]
}>()
</script>

<template>
  <div class="flex flex-col gap-4 sm:gap-8">
    <div v-for="member in data" class="flex items-center gap-4 sm:gap-8">
      <div class="w-20 clip-path-circle">
        <img :src="member.avatar" :alt="member.name" />
      </div>
      <div>
        <h3 class="mb-2">{{ member.name }}</h3>
        <ul>
          <li v-for="title in member.titles">{{ title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
