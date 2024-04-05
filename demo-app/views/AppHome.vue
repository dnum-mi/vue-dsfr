<script setup>
import { ref, watch } from 'vue'
import pDebounce from 'p-debounce'

import FdrAutoComplete from '../components/FdrAutoComplete.vue'
import useToaster from '../composables/use-toaster'
import AsyncButton from '../components/AsyncButton.vue'

defineProps({})

const toaster = useToaster()

const cityList = ref([])
const cityQuery = ref('')
watch(
  cityQuery,
  pDebounce(async (query) => {
    cityList.value =
      cityQuery.value === '' ? [] : await getCityListWithZipCodeByQuery(query)
  }, 300),
)

/**
 * @async
 * @function
 *
 * @params {string} query
 *
 * @returns {Promise.<CommuneResponse[]>} - Promesse contenant la liste des communes correspondant à la recherche
 */
const getCityListByQuery = (query) =>
  fetch(
    `https://geo.api.gouv.fr/communes?nom=${query}&fields=codesPostaux`,
  ).then((res) => res.json())
/**
 * @async
 * @function
 *
 * @params {string} query
 *
 * @returns {Promise.<string[]>} - Promesse contenant la liste des communes associé à son code postal
 *                                 sous la forme "Nom (codePostal)". Une même ville peut apparaître plusieurs fois
 *                                 si elle a plusieurs codes postaux.
 */
const getCityListWithZipCodeByQuery = async (query) =>
  (await getCityListByQuery(query))
    .map(({ nom, codesPostaux }) => {
      if (codesPostaux.length === 1) {
        return `${nom} (${codesPostaux[0]})`
      }

      return codesPostaux.map((codePostal) => `${nom} (${codePostal})`)
    })
    .flat()
const selectAddress = (address) => {
  console.log(address)
}

const isLoading = ref(false)
const disabled = ref(false)

const onClick = () => {
  isLoading.value = true
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <FdrAutoComplete
    v-model="cityQuery"
    :options="cityList"
    autocomplete="nothing"
    label="Ville ou CP (autocompletion)"
    label-visible
    placeholder="Commencez à taper une ville ou un code postal..."
    @update:model-value="selectAddress($event)"
  />
  <p>
    <a
      href="https://www.systeme-de-design.gouv.fr/comment-utiliser-le-dsfr/developpeurs/prise-en-main-du-dsfr"
      target="_blank"
    >
      Prise en main du DSFR
    </a>
  </p>

  <VIcon
    name="ri-search-line"
    scale="1.25"
  />

  équivaut à
  <span class="fr-fi-search-line" />

  <p class="fr-my-2w">
    <DsfrButton @click="toaster.addMessage({ description: 'Message pour l’utilisateur', type: 'info'})">
      Cliquer pour voir une alerte
    </DsfrButton>
  </p>

  <AsyncButton
    :is-loading="isLoading"
    :disabled="disabled"
    @click="onClick($event)"
  >
    Cliquer pour voir un chargement
  </AsyncButton>

  <p class="fr-my-2v">
    <DsfrFranceConnect secure />
  </p>

  <p class="fr-my-2v">
    <DsfrFranceConnect
      url="https://example.com"
      help-title="titre du lien d’aide"
      help-label="texte du lien d’aide"
    >
      <span>Se connecter avec</span>
    </DsfrFranceConnect>
  </p>
</template>
