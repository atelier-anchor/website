<script setup lang="ts">
// See https://github.com/nuxt/nuxt/discussions/18391
const route = useRoute()
const to = computed(() => `${route.path.replace(/\/+$/g, '')}/${post.id}`)

const { post } = defineProps<{
  post: Post
}>()
</script>

<template>
  <BaseContainer is="article" class="items-center gap-0">
    <template #left>
      <PostMeta
        :name="post.name"
        :category="post.category"
        :credits="post.credits"
        :to="to"
        class="max-md:hidden"
      />
    </template>
    <template #right>
      <BaseFigure
        :image="post.cover ?? post.images[0]"
        :to="to"
        :title="post.name"
        width="1920"
        height="1440"
      />
    </template>
  </BaseContainer>
</template>
