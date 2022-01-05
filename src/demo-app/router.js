import { createRouter, createWebHistory } from 'vue-router'

import AboutUs from './views/AboutUs.vue'
import AppHome from './views/AppHome.vue'

// const routes = [
//   {
//     name: 'Home',
//     path: '/',
//     component: AppHome,
//   },
//   // {
//   //   name: 'About',
//   //   path: '/a-propos',
//   //   component: AboutUs,
//   // },
// ]

const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/about', name: 'AboutUs', component: AboutUs },
]

export default createRouter({
  history: createWebHistory(''),
  routes,
})
