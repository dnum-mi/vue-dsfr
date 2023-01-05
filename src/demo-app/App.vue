<script setup>
import { ref, watch } from 'vue'
import pDebounce from 'p-debounce'

import DsfrAccordion from '../components/DsfrAccordion/DsfrAccordion.vue'
import DsfrAccordionsGroup from '../components/DsfrAccordion/DsfrAccordionsGroup.vue'
import DsfrButton from '../components/DsfrButton/DsfrButton.vue'
import DsfrHeader from '../components/DsfrHeader/DsfrHeader.vue'
import DsfrNavigation from '../components/DsfrNavigation/DsfrNavigation.vue'
import DsfrSkipLinks from '../components/DsfrSkipLinks/DsfrSkipLinks.vue'
import DsfrModal from '../components/DsfrModal/DsfrModal.vue'
import DsfrFileUpload from '../components/DsfrFileUpload/DsfrFileUpload.vue'
import DsfrBreadcrumb from '../components/DsfrBreadcrumb/DsfrBreadcrumb.vue'
import DsfrRadioButtonSet from '../components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import DsfrAlert from '../components/DsfrAlert/DsfrAlert.vue'
import FdrAutoComplete from './components/FdrAutoComplete.vue'

const isModalOpen = ref(false)
const displayAlert = ref(false)
const close = () => {
  displayAlert.value = false
  setTimeout(
    () => { isModalOpen.value = false },
    1000,
  )
}

const inputValue = ref('')
const filesToUpload = ref(undefined)

const updateFiles = (files) => {
  console.log(files)
}

const sendFile = () => {
  console.log('inputValue:', inputValue.value)
  console.log('filesToUpload:', filesToUpload.value)
}

// eslint-disable-next-line no-unused-vars
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

const cityList = ref([])
const cityQuery = ref('')
const whatever = ref('')

watch(
  cityQuery,
  pDebounce(async (query) => {
    cityList.value = cityQuery.value === '' ? [] : await getCityListWithZipCodeByQuery(query)
  },
  300,
  ),
)

/**
 * @async
 * @function
 *
 * @params {string} query
 *
 * @returns {Promise.<CommuneResponse[]>} - Promesse contenant la liste des communes correspondant à la recherche
 */
const getCityListByQuery = (query) => fetch(`https://geo.api.gouv.fr/communes?nom=${query}&fields=codesPostaux`)
  .then(res => res.json())

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
const getCityListWithZipCodeByQuery = async query => (await getCityListByQuery(query))
  .map(({ nom, codesPostaux }) => {
    if (codesPostaux.length === 1) {
      return `${nom} (${codesPostaux[0]})`
    }

    return codesPostaux.map(codePostal => (`${nom} (${codePostal})`))
  })
  .flat()

const showNotifications = ref(false)

const accordionTitle = 'Titre de l’accordéon'
const expandedId = ref(undefined)

const displayNotifications = () => {
  showNotifications.value = true
}

const links = [
  {
    id: 'header',
    text: 'Allons au header',
  },
  {
    id: 'content',
    text: 'Allons au content',
  },
  {
    id: 'footer',
    text: 'Allons au footer',
  },
]

const quickLinks = [
  {
    label: 'Notifications',
    path: '',
    icon: 'ri-notification-3-line',
    iconOnly: true,
    button: true,
    onClick: ($event) => {
      $event.preventDefault()
      displayNotifications()
    },
  },
  {
    label: 'À propos',
    to: { name: 'AboutUs' },
  },
  {
    label: 'DSFR',
    href: 'https://systeme-de-design.gouv.fr/',
  },
]

const navItems = [
  {
    to: { name: 'Home' },
    text: 'Accueil',
  },
  {
    to: { name: 'AboutUs' },
    text: 'À propos',
  },
]

const radioTest = ref('')

const selectAddress = (address) => {
  console.log(address)
}
</script>

<template>
  <div style="position: relative; padding-bottom: 4rem;">
    <DsfrSkipLinks
      :links="links"
    />
    <DsfrHeader
      :quick-links="quickLinks"
      show-search
      placeholder="Rechercher placeholder"
    />
    <div class="fr-container">
      <DsfrNavigation
        :nav-items="navItems"
      />
      <h1>Demo VueDsfr</h1>

      <DsfrBreadcrumb
        :links="[{text: 'Accueil', to: '/'}, {text: 'Test fil d’Ariane'}]"
      />

      <FdrAutoComplete
        v-model="cityQuery"
        :options="cityList"
        autocomplete="nothing"
        label="Adresse (autocompletion)"
        label-visible
        placeholder="Commencez à taper une adresse..."
        @update:model-value="selectAddress($event)"
      />

      <router-view />

      <div>
        <DsfrButton
          class="my-1"
          @click="isModalOpen = true"
        >
          Open modal
        </DsfrButton>
      </div>

      <DsfrModal
        title="Notifications"
        :opened="showNotifications"
        @close="showNotifications = false"
      >
        Notifications
      </DsfrModal>
      <VIcon
        name="ri-search-line"
        scale="1.25"
      />
      équivaut à
      <span class="fr-fi-search-line" />
      <DsfrAccordionsGroup>
        <li>
          <DsfrAccordion
            :title="accordionTitle"
            :expanded-id="expandedId"
            @expand="expandedId = $event === expandedId ? undefined : $event"
          >
            Contenu de l’accordéon dans l’accordéon
          </DsfrAccordion>
        </li>
      </DsfrAccordionsGroup>
      <form @submit.prevent="sendFile()">
        <DsfrInput
          v-model="inputValue"
          label="Test"
          label-visible
        />
        <DsfrFileUpload
          v-model="filesToUpload"
          label="Test"
          label-visible
          @change="updateFiles($event)"
        />
        <DsfrRadioButtonSet
          v-model="radioTest"
          :options="[
            {
              label: 'label 1',
              value: 1,
              required: true,
            },
            {
              label: 'label 2',
              value: 2,
            }
          ]"
        />
        <DsfrButton
          type="submit"
          label="Bouton de soumission du formulaire"
        />
        <DsfrInput
          v-model="whatever"
          label="Label input"
        >
          <template #tip>
            <DsfrAlert v-if="showAlert" />
            <VIcon
              name="ri-question-line"
              @mouseover="showAlert = true"
              @mouseout="showAlert = false"
            />
          </template>
        </DsfrInput>
      </form>
      <DsfrTranscription title="Le titre de la transcription">
        La transcription blablabla
      </DsfrTranscription>
    </div>

    <DsfrModal
      v-if="isModalOpen"
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
      Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échappe</kbd>
    </DsfrModal>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.my-1 {
  margin-block: 0.5rem;
}
</style>
