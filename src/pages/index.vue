<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCarouselPosts, getPost } from '@/utils'
import BaseFigure from '@/components/base/BaseFigure.vue'

const posts = getCarouselPosts()
const postIndex = ref(0)

const { resolve } = useRouter()
const path = (id: string) => {
  for (const section of ['works', 'typefaces', 'dash']) {
    if (getPost(section, id)) {
      return `${resolve(section).path}/${id}`
    }
  }
  return ''
}

onMounted(() =>
  setInterval(() => {
    postIndex.value = (postIndex.value + 1) % posts.length
  }, 6000)
)
</script>

<template>
  <ClientOnly>
    <Transition v-for="({ id, name, images }, i) in posts">
      <div
        v-show="postIndex === i"
        class="absolute top-0 flex h-full items-center overflow-hidden py-4 lg:py-8"
      >
        <BaseFigure :image="images[0]" :to="path(id)" :title="name" width="1920" height="1440" />
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
