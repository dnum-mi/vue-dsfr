import { createRouter, createWebHistory } from 'vue-router'

import AboutUs from './views/AboutUs.vue'
import AppHome from './views/AppHome.vue'
import SchemeSettings from './views/SchemeSettings.vue'

const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/settings', name: 'Settings', component: SchemeSettings },
]

export default createRouter({
  history: createWebHistory(''),
  routes,
})
