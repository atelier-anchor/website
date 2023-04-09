<script setup lang="ts">
const post = usePost()

definePageMeta({
  middleware: ({ params }) => {
    const { isValidPost } = useQuery(params.section as string, params.id as string)
    if (!isValidPost) {
      return navigateTo('/404')
    }
  },
})
</script>

<template>
  <div>
    <Title>{{ post?.name }}</Title>
    <BaseContainer v-if="post" is="article" class="flex-col-reverse sm:gap-8">
      <template #left>
        <article class="h-fit sm:top-4 md:sticky lg:top-8">
          <PostMeta
            :name="post.name"
            :category="post.category"
            :credits="post.credits"
            :class="post.description ? 'mb-4 sm:mb-8' : null"
          />
          <div class="flex flex-col gap-4">
            <p v-for="p in post.description" v-html="parseMarkdown(p)"></p>
          </div>
        </article>
      </template>
      <template #right>
        <BasePicture
          v-for="image in post.images"
          :image="image"
          :dir="$route.path"
          width="1920"
          height="1440"
        />
        <BaseVideo
          v-for="video in post.videos"
          :video="video"
          :dir="$route.path"
          width="1920"
          height="1080"
        />
      </template>
    </BaseContainer>
  </div>
</template>
