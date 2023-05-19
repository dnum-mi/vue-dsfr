import { createRouter, createWebHistory } from 'vue-router'

import AboutUs from './views/AboutUs.vue'
import AppHome from './views/AppHome.vue'
import AppAlerts from './views/AppAlerts.vue'
import SchemeSettings from './views/SchemeSettings.vue'
import LanguageSelector from './views/LanguageSelector.vue'
import AppForm from './views/AppForm.vue'
import SimpleModal from './views/SimpleModal.vue'

export const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/modal', name: 'Modal', component: SimpleModal },
  { path: '/forms', name: 'Forms', component: AppForm },
  { path: '/languages', name: 'Languages', component: LanguageSelector },
  { path: '/settings', name: 'Settings', component: SchemeSettings },
  { path: '/alerts', name: 'Alertes', component: AppAlerts },
]

export default createRouter({
  history: createWebHistory(''),
  routes,
})
