<script setup lang="ts">
const { resolve } = useRouter()
const path = (id: string) => {
  for (const section of ['works', 'typefaces', 'dash']) {
    const { isValidPost } = useQuery(section, id)
    if (isValidPost) {
      return `${resolve(section).path}/${id}`
    }
  }
  return ''
}

let timer: number
const posts = useCarouselPosts()
const postIndex = ref(0)
onMounted(() => {
  timer = window.setInterval(() => {
    postIndex.value = (postIndex.value + 1) % posts.length
  }, 6000)
})
onUnmounted(() => {
  console.log(timer)
  clearInterval(timer)
})
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
    <template #fallback>
      <p>Loading images…</p>
    </template>
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
