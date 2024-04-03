<script lang="ts" setup>
import { ref, watch, getCurrentInstance } from 'vue'
import { OhVueIcon } from 'oh-vue-icons'
import { createWebHistory, createRouter } from 'vue-router'

import DsfrHeader from '../DsfrHeader.vue'

const logoText = ['Ministère', 'de l’intérieur']
const serviceTitle = 'Nom du Site/Service'
const serviceDescription = 'baseline - précisions sur l‘organisation'
const placeholder = ''
const homeTo = '/'
const quickLinks = [
  { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconRight: true },
  { label: 'Se connecter', to: '/login', class: 'fr-icon-user-fill' },
  { label: 'S’enregistrer', to: '/signup', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
]

const app = getCurrentInstance()
app?.appContext.app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: { template: '<div>Accueil</div>' } },
      { path: '/space/create', component: { template: '<div>Espace</div>' } },
      { path: '/login', component: { template: '<div>login</div>' } },
      { path: '/signup', component: { template: '<div>signup</div>' } },
    ],
  }),
).component('VIcon', OhVueIcon)

const search = ref('')
watch(search, (newValue) => {
  console.log('search', newValue)
})
</script>

<template>
  <DsfrHeader
    :logo-text="logoText"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :placeholder="placeholder"
    :home-to="homeTo"
    :quick-links="quickLinks"
  />
</template>
