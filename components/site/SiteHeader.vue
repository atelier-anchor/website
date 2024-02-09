<script setup lang="ts">
const showNav = ref(false)
const toggleNav = () => {
  showNav.value = !showNav.value
}
const closeNav = () => {
  showNav.value = false
}
onMounted(() => {
  const navElem = document.querySelector('nav')
  document.addEventListener('click', (e) => {
    if (navElem && e.clientY > navElem.offsetTop + navElem.offsetHeight) {
      closeNav()
    }
  })
  window.addEventListener('resize', (e) => closeNav())
})

const route = useRoute()
watch(() => route.fullPath, closeNav)
</script>

<template>
  <header class="sticky top-0 z-20 h-fit bg-white py-4 sm:z-10 lg:py-8 dark:bg-black">
    <div class="flex items-center justify-between">
      <SiteLogo />
      <SiteNavToggler :active="showNav" @click="toggleNav" />
    </div>
    <SiteNav :show="showNav" />
  </header>
</template>
