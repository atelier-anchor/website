<script setup lang="ts">
import team from '@/components/about/team.json'
import BasePicture from '@/components/BasePicture.vue'
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-2">
    <div v-for="member in team" class="flex items-center gap-4 sm:gap-8">
      <div class="clip-path-circle w-20">
        <BasePicture :image="member.avatar" dir="/about" width="1200" height="1200" />
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
