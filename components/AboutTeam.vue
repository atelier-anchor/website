<script setup lang="ts">
const members = [
  {
    name: 'Willie Liu',
    avatar: 'willie-liu.webp',
    titles: ['Co-founder', 'Art director'],
  },
  {
    name: 'Xiyao Du',
    avatar: 'xiyao-du.webp',
    titles: ['Co-founder', 'Academic director'],
  },
  {
    name: 'oooooohmygosh',
    avatar: 'oooooohmygosh.webp',
    titles: ['Graphic designer', 'Distribution director'],
  },
  {
    name: 'Xiangdong Zeng',
    avatar: 'xiangdong-zeng.webp',
    titles: ['Technical advisor'],
  },
  {
    name: 'Shachō 🍗',
    avatar: 'shacho.webp',
    titles: ['CEO'],
  },
]
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-2">
    <div v-for="{ name, avatar, titles } in members" class="flex items-center gap-4 sm:gap-8">
      <div class="clip-path-circle w-20">
        <BaseImage :image="avatar" dir="/about" width="80" height="80" />
      </div>
      <div>
        <h3 class="mb-2">{{ name }}</h3>
        <ul>
          <li v-for="title in titles">{{ title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
