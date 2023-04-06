import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import vueComponents from 'unplugin-vue-components/vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        { 'vite-ssg': ['ViteSSG'] },
        { vue: [['createApp', 'createVueApp']] },
        {
          from: 'vue-router',
          imports: ['RouteLocationNormalized', 'RouteRecordRaw', 'RouterScrollBehavior'],
          type: true,
        },
      ],
      dirs: ['./src'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    vueComponents({
      dts: 'src/components.d.ts',
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
