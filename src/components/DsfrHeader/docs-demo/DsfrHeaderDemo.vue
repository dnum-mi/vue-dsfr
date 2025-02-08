<script lang="ts" setup>
import { getCurrentInstance, ref, watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import VIcon from '../../VIcon/VIcon.vue'
import DsfrHeader from '../DsfrHeader.vue'
import type { DsfrHeaderProps } from '../DsfrHeader.vue'

import type { DsfrLanguageSelectorElement } from '@/components/DsfrLanguageSelector/DsfrLanguageSelector.types'

const logoText = ['Ministère', 'de l’intérieur']
const serviceTitle = 'Nom du Site/Service'
const serviceDescription = 'baseline - précisions sur l‘organisation'
const placeholder = ''
const homeTo = '/'
const quickLinks: DsfrHeaderProps['quickLinks'] = [
  { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconRight: true },
  { label: 'Se connecter', to: '/login', class: 'fr-icon-user-fill' },
  { label: 'S’enregistrer', to: '/signup', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
]
const languageSelector = ref({
  id: 'language-selector',
  languages: [
    { label: 'Français', codeIso: 'fr' },
    { label: 'English', codeIso: 'en' },
    { label: 'Deutsch', codeIso: 'de' },
  ],
  currentLanguage: 'fr',
})

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
).component('VIcon', VIcon)

const search = ref('')
watch(search, (newValue) => {
  console.log('search', newValue) // eslint-disable-line no-console
})

const selectLanguage = (language: DsfrLanguageSelectorElement) => {
  languageSelector.value.currentLanguage = language.codeIso
}
</script>

<template>
  <!-- Attention, il faut au moins vue 3.4 pour les props raccourcies -->
  <!-- cf. https://blog.vuejs.org/posts/vue-3-4#v-bind-same-name-shorthand -->
  <DsfrHeader
    :logo-text
    :service-title
    :service-description
    :placeholder
    :home-to
    :quick-links
    :language-selector
    @language-select="selectLanguage($event)"
  />
</template>
