<script setup lang="ts">
import type { Image } from '@/data'
import BasePicture from '@/components/BasePicture.vue'

interface Member {
  name: string
  avatar: Image
  titles: string[]
}

defineProps<{
  data: Member[]
}>()
</script>

<template>
  <div v-for="member in data" class="mb-4 flex items-center gap-4 last:mb-0 sm:mb-8 sm:gap-8">
    <div class="clip-path-circle w-20">
      <BasePicture :image="member.avatar" dir="/about" width="80" height="80" />
    </div>
    <div>
      <h3 class="mb-2">{{ member.name }}</h3>
      <ul>
        <li v-for="title in member.titles">{{ title }}</li>
      </ul>
    </div>
  </div>
</template>
