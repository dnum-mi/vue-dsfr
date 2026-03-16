<script setup lang="ts">
import type { DsfrNavigationMenuLinkProps } from '../../DsfrNavigation/DsfrNavigation.types'

import { ref } from 'vue'

import DsfrUserMenu from '../DsfrUserMenu.vue'

const links = ref<DsfrNavigationMenuLinkProps[]>([
  { text: 'Mon profil', to: '#', icon: 'fr-icon-account-circle-line' },
  { text: 'Ma Messagerie', to: '#', icon: 'fr-icon-mail-line' },
  { text: 'Mes notifications', to: '#', icon: 'fr-icon-flashlight-line' },
  { text: 'Mes paramètres', to: '#', icon: 'fr-icon-settings-5-line' },
])
const isConnected = ref(true)
const handleDisconnect = () => {
  console.log('Déconnexion demandée') // eslint-disable-line no-console
  isConnected.value = false
}
</script>

<template>
  <div class="fr-container fr-my-2w">
    <div class="fr-grid-row fr-grid-row--gutter">
      <!-- État connecté avec menu complet -->
      <div class="fr-col-12 fr-col-md-6">
        <div class="fr-header__tools">
          <ul class="fr-btns-group">
            <li>
              <DsfrUserMenu
                :is-connected="isConnected"
                :connection-icon="true"
                user-label="Jean Dupont"
                user-info="jean.dupont@example.com"
                :has-user-info="true"
                :links="links"
                :has-disconnect-button="true"
                @disconnect="handleDisconnect"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
