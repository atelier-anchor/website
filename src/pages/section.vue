<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <!-- TODO: -->
    <SectionItem v-for="post in getPosts($route.name?.toString() || '')" :post="post" />
  </div>
</template>
