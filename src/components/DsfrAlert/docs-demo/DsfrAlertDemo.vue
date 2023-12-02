<script lang="ts" setup>
import { ref } from 'vue'

import DsfrAlert, { type DsfrAlertType } from '../DsfrAlert.vue'
import type { TitleTag } from '@/common-types'

const defaultAlerts: {
  [key: string]: {
    id: string,
    type: DsfrAlertType,
    title?: string,
    small?: true,
    description: string,
    titleTag: TitleTag,
    closed?: boolean,
    closeable?: true,
  }[]
} = {
  'Grandes non fermables': [
    {
      id: '1',
      type: 'error',
      title: 'Titre de l’erreur',
      description: 'Description de l’erreur',
      titleTag: 'h2',
    },
    {
      id: '2',
      type: 'info',
      title: 'Titre de l’info',
      description: 'Description de l’info',
      titleTag: 'h3',
    },
    {
      id: '3',
      type: 'warning',
      title: 'Titre de l’avertissement',
      description: 'Description de l’avertissement',
      titleTag: 'h4',
    },
    {
      id: '4',
      type: 'success',
      title: 'Titre du succès',
      description: 'Description du succès',
      titleTag: 'h5',
    },
  ],
  'Grandes fermables': [
    {
      id: '5',
      type: 'error',
      title: 'Titre de l’erreur',
      description: 'Description de l’erreur',
      titleTag: 'h2',
      closeable: true,
      closed: false,
    },
    {
      id: '6',
      type: 'info',
      title: 'Titre de l’info',
      description: 'Description de l’info',
      titleTag: 'h3',
      closeable: true,
      closed: false,
    },
    {
      id: '7',
      type: 'warning',
      title: 'Titre de l’avertissement',
      description: 'Description de l’avertissement',
      titleTag: 'h4',
      closeable: true,
      closed: false,
    },
    {
      id: '8',
      type: 'success',
      title: 'Titre du succès',
      description: 'Description du succès',
      titleTag: 'h5',
      closeable: true,
      closed: false,
    },
  ],
  'Petites non fermables': [
    {
      id: '9',
      type: 'error',
      small: true,
      description: 'Description de l’erreur',
      titleTag: 'h2',
    },
    {
      id: '10',
      type: 'info',
      small: true,
      description: 'Description de l’info',
      titleTag: 'h3',
    },
    {
      id: '11',
      type: 'warning',
      small: true,
      description: 'Description de l’avertissement',
      titleTag: 'h4',
    },
    {
      id: '12',
      type: 'success',
      small: true,
      description: 'Description du succès',
      titleTag: 'h5',
    },
  ],
  'Petites fermables': [
    {
      id: '13',
      type: 'error',
      small: true,
      description: 'Description de l’erreur',
      titleTag: 'h2',
      closeable: true,
      closed: false,
    },
    {
      id: '14',
      type: 'info',
      small: true,
      description: 'Description de l’info',
      titleTag: 'h3',
      closeable: true,
      closed: false,
    },
    {
      id: '15',
      type: 'warning',
      small: true,
      description: 'Description de l’avertissement',
      titleTag: 'h4',
      closeable: true,
      closed: false,
    },
    {
      id: '16',
      type: 'success',
      small: true,
      description: 'Description du succès',
      titleTag: 'h5',
      closeable: true,
      closed: false,
    },
  ],
}

const alertGroups = ref(defaultAlerts)

const onClose = (id: string) => {
  Object.values(alertGroups.value)
    .flat()
    .forEach((alert) => {
      if (alert.id === id) {
        alert.closed = true // mettre la propriété closed à true pour cette alerte
        setTimeout(() => { alert.closed = false }, 3000) // la remettre à false au bout de 3 secondes
      }
    })
}
</script>

<template>
  <div class="fr-container fr-p-2w">
    <div
      v-for="(alerts, title, i) in alertGroups"
      :key="`alert-group-${i}`"
      :class="i > 0 ? 'fr-mt-6w' : ''"
    >
      <h2>{{ title }}</h2>
      <DsfrAlert
        v-for="alert in alerts"
        :key="`alert-${alert.id}`"
        :type="alert.type"
        :title="alert.title"
        :description="alert.description"
        :title-tag="alert.titleTag"
        :small="alert.small"
        :closed="alert.closed"
        :closeable="alert.closeable"
        @close="onClose(alert.id)"
      />
    </div>
  </div>
</template>
