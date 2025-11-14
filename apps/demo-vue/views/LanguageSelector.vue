<script setup>
import { DsfrLanguageSelector } from '@gouvminint/vue-dsfr'

defineProps({
  defaultLanguage: {
    type: String,
    default: 'fr',
  },
})

const languages = [
  {
    codeIso: 'fr',
    label: 'Français',
  },
  {
    codeIso: 'es',
    label: 'Español',
  },
]

const changeLanguage = (language) => {
  console.log('Select ', JSON.stringify(language))
}
</script>

<template>
  <DsfrLanguageSelector
    :languages="languages"
    @select="changeLanguage($event)"
  />
</template>
