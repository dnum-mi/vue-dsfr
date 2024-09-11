<script setup lang="ts">
import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

import DsfrRadioButtonSet from '@/components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import { useScheme } from '@/composables/index'
import darkThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/environment/moon.svg'
import lightThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/environment/sun.svg'
import systemThemeSvg from '@gouvfr/dsfr/dist/artwork/pictograms/system/system.svg'

import { onMounted, reactive, ref, watchEffect } from 'vue'
import type { Preferences, UseSchemeResult } from '@/composables/index'
import DsfrModal from '../DsfrModal.vue'

const isThemeModalOpen = ref(false)

const preferences: Preferences = reactive({
  theme: 'light',
  scheme: 'light',
})

onMounted(() => {
  const { theme, scheme, setScheme } = useScheme() as UseSchemeResult
  preferences.scheme = scheme.value

  watchEffect(() => { preferences.theme = theme.value })

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
  <div class="fr-container fr-my-2v">
    <DsfrButton
      @click="isThemeModalOpen = true"
    >
      Changer le thème
    </DsfrButton>

    <DsfrModal
      :opened="isThemeModalOpen"
      title="Changer le thème"
      @close="isThemeModalOpen = false"
    >
      <DsfrRadioButtonSet
        v-model="preferences.scheme"
        :options="options"
        name="theme-selector"
        legend="Choisissez un thème pour personnaliser l’apparence du site."
      />
    </DsfrModal>
  </div>
</template>
