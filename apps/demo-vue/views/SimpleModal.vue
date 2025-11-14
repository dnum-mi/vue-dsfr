<script setup lang="ts">
import type { Preferences, UseSchemeResult } from '@gouvminint/vue-dsfr'

import darkThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/environment/moon.svg'
import lightThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/environment/sun.svg'
import systemThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/system/system.svg'
import { DsfrModal, useScheme } from '@gouvminint/vue-dsfr'
import { onMounted, reactive, ref, watchEffect } from 'vue'

const isModalOpen = ref(false)
const isThemeModalOpen = ref(false)
const displayAlert = ref(false)
const close = () => {
  displayAlert.value = false
  setTimeout(
    () => { isModalOpen.value = false },
    1000,
  )
}

const actions = [
  {
    label: 'Valider',
    onClick: () => {
      displayAlert.value = true
      setTimeout(
        close,
        2000,
      )
    },
  },
  {
    label: 'Annuler',
    secondary: true,
    onClick: () => { isModalOpen.value = false },
  },
]

const preferences: Preferences = reactive({
  theme: 'light',
  scheme: 'light',
})

onMounted(() => {
  const { theme, scheme, setScheme } = useScheme() as UseSchemeResult
  preferences.scheme = scheme.value

  watchEffect(() => {
    preferences.theme = theme.value
  })

  watchEffect(() => setScheme(preferences.scheme))
})

const options = [
  {
    label: 'Thème clair',
    value: 'light',
    svgPath: lightThemeSvg,
  },
  {
    label: 'Thème sombre',
    value: 'dark',
    svgPath: darkThemeSvg,
  },
  {
    label: 'Thème système',
    value: 'system',
    hint: 'Utilise les paramètres système',
    svgPath: systemThemeSvg,
  },
]
</script>

<template>
  <div>
    <DsfrButton
      class="my-1"
      @click="isModalOpen = true"
    >
      Ouvrir modal
    </DsfrButton>
  </div>

  <DsfrButton
    ref="modalOrigin"
    label="Changer le thème"
    @click="isThemeModalOpen = true"
  />
  <DsfrModal
    :opened="isThemeModalOpen"
    title="Changer le thème"
    :origin="$refs.modalOrigin"
    @close="isThemeModalOpen = false"
  >
    <DsfrRadioButtonSet
      v-model="preferences.scheme"
      :options="options"
      name="theme-selector"
      legend="Choisissez un thème pour personnaliser l’apparence du site."
    />
  </DsfrModal>

  <DsfrModal
    v-if="isThemeModalOpen"
    title="Exemple de modale"
    :opened="isModalOpen"
    :actions="actions"
    @close="isModalOpen = false"
  >
    <DsfrAlert
      :closed="!displayAlert"
      type="success"
      small
      description="Opération terminée avec succès"
    />
    Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échap</kbd>
  </DsfrModal>

  <DsfrModal
    title="Exemple de modale"
    :opened="isModalOpen"
    :actions="actions"
    @close="isModalOpen = false"
  >
    <DsfrAlert
      :closed="!displayAlert"
      type="success"
      small
      description="Opération terminée avec succès"
    />
    Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échap</kbd>
  </DsfrModal>
</template>
