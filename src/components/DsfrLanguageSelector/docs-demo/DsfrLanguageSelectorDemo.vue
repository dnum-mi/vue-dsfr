<script lang="ts" setup>
import type { DsfrLanguageSelectorElement } from '../DsfrLanguageSelector.vue'

import { ref } from 'vue'

import DsfrLanguageSelector from '../DsfrLanguageSelector.vue'

const languages = [
  { label: 'Français', codeIso: 'fr' },
  { label: 'English', codeIso: 'en' },
  { label: 'Deutsch', codeIso: 'de' },
]
const currentLanguage = ref('fr')

const selectLanguage = (language: DsfrLanguageSelectorElement) => {
  currentLanguage.value = language.codeIso
}
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrLanguageSelector
      id="language-selector"
      :languages
      :current-language
      @select="selectLanguage($event)"
    />
  </div>
</template>
