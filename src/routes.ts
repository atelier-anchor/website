export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/views/WorksView.vue'),
  },
  {
    path: '/typefaces',
    name: 'typefaces',
    component: () => import('@/views/WorksView.vue'),
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/views/DashView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
]
