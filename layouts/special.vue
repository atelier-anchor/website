<template>
  <div
    class="mx-auto flex min-h-[max(100vh,320px)] min-w-[320px] max-w-[1800px] flex-col items-center justify-around gap-16 p-4 lg:p-8"
  >
    <main class="mt-[10vh] text-center">
      <slot></slot>
    </main>
    <SiteLogo />
  </div>
</template>
