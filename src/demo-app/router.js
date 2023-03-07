import { createRouter, createWebHistory } from 'vue-router'

import AboutUs from './views/AboutUs.vue'
import AppHome from './views/AppHome.vue'
import SchemeSettings from './views/SchemeSettings.vue'
import LanguageSelector from './views/LanguageSelector.vue'
import SimpleModal from './views/SimpleModal.vue'
import AppForm from './views/AppForm.vue'

export const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/modal', name: 'Modal', component: SimpleModal },
  { path: '/forms', name: 'Forms', component: AppForm },
  { path: '/languages', name: 'Languages', component: LanguageSelector },
  { path: '/settings', name: 'Settings', component: SchemeSettings },
]

export default createRouter({
  history: createWebHistory(''),
  routes,
})
