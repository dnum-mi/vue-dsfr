<script lang="ts" setup>
import DsfrBreadcrumb from '../DsfrBreadcrumb.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'

const app = getCurrentInstance()
app?.appContext.app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: { template: '<div>Accueil</div>' } },
      { path: '/bibliotheque', component: { template: '<div>Bibliothèque</div>' } },
      { path: '/livre', component: { template: '<div>Livre</div>' } },
    ],
  }),
)
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrBreadcrumb
      breadcrumb-id="mon-fil-dariane"
      :links="[
        { text: 'Accueil', to: '/' },
        { text: 'Bibliothèque', to: '/bibliotheque' },
        { text: 'Livre', to: '/livre' },
        { text: 'Le Seigneur des anneaux' },
      ]"
    />
  </div>
</template>
