<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Post } from '@/types'
import { flat, shuffle } from '@/utils'
import data from '@/data.json'
import LinkFigure from '@/components/LinkFigure.vue'

const posts = computed(() =>
  shuffle(flat(Object.values(data) as Post[][]).filter((i) => !i.exclude && !i.carousel_exclude))
)
const postIndex = ref<number>(0)

const { resolve } = useRouter()
const path = (id: string) => {
  for (const section of ['works', 'typefaces', 'dash']) {
    if ((data as Record<string, Post[]>)[section].find((i) => i.id === id)) {
      return `${resolve(section).path}/${id}`
    }
  }
  return ''
}

onMounted(() =>
  setInterval(() => (postIndex.value = (postIndex.value + 1) % posts.value.length), 6000)
)
</script>

<template>
  <ClientOnly>
    <Transition v-for="({ id, name, images }, i) in posts">
      <div
        v-show="postIndex === i"
        class="absolute top-0 flex h-full items-center overflow-hidden py-4 lg:py-8"
      >
        <LinkFigure :image="images[0]" :to="path(id)" :title="name" width="1920" height="1440" />
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-[2s];
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

:deep(img) {
  @apply min-h-[max(50vh,200px)] object-cover sm:h-full;
}
</style>
