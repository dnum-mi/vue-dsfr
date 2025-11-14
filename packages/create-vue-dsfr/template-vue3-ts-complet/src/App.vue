<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

import useToaster from './composables/use-toaster'

useScheme()

const toaster = useToaster()

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  {
    label: 'Home',
    to: '/',
    icon: 'ri-home-4-line',
    iconAttrs: { color: 'var(--red-marianne-425-625)' },
  },
  {
    label: 'À propos',
    to: '/a-propos',
    icon: 'ri-question-mark',
    iconRight: true,
  },
]
const searchQuery = ref('')

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

function close () {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />

  <div class="fr-container  fr-mt-3w  fr-mt-md-5w  fr-mb-5w">
    <router-view />
  </div>

  <ReloadPrompt
    :offline-ready="offlineReady"
    :need-refresh="needRefresh"
    @close="close()"
    @update-service-worker="updateServiceWorker()"
  />

  <AppToaster
    :messages="toaster.messages"
    @close-message="toaster.removeMessage($event)"
  />
</template>
