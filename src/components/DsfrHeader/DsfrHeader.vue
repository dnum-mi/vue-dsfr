<script>
import '@gouvfr/dsfr/dist/component/header/header.module.js'

import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrSearchBar from '../DsfrSearchBar/DsfrSearchBar.vue'
import DsfrHeaderMenuLinks from './DsfrHeaderMenuLinks.vue'
export default {
  name: 'DsfrHeader',

  components: {
    DsfrLogo,
    DsfrHeaderMenuLinks,
    DsfrSearchBar,
  },

  props: {
    serviceTitle: {
      type: String,
      default: undefined,
    },
    serviceDescription: {
      type: String,
      default: undefined,
    },
    homeTo: {
      type: String,
      default: '/',
    },
    modelValue: {
      type: String,
      default: '',
    },
    quickLinks: {
      type: Array,
      default: () => undefined,
    },
    showSearch: Boolean,
    logoText: {
      type: [String, Array],
      default: () => 'Gouvernement',
    },
  },

  emits: ['update:modelValue', 'search'],

  data () {
    return {
      menuOpened: false,
      searchModalOpened: false,
      modalOpened: false,
    }
  },

  computed: {
    linkComponent () {
      return '$nuxt' in this ? 'nuxt-link' : 'router-link'
    },
    isWithSlotOperator () {
      return this.$slots.operator?.().length
    },
  },

  methods: {
    hideModal () {
      this.modalOpened = false
      this.menuOpened = false
      this.searchModalOpened = false
    },
    showModal () {
      this.modalOpened = true
    },
    showMenu () {
      this.showModal()
      this.menuOpened = true
    },
    showSearchModal () {
      this.showModal()
      this.searchModalOpened = true
    },
  },
}
</script>

<template>
  <header
    role="banner"
    class="fr-header"
  >
    <div class="fr-header__body">
      <div class="fr-container  width-inherit">
        <div class="fr-header__body-row">
          <div class="fr-header__brand  fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <DsfrLogo
                  :logo-text="logoText"
                  data-testid="header-logo"
                />
              </div>
              <div
                v-if="isWithSlotOperator"
                class="fr-header__operator"
              >
                <!-- @slot Slot nommé operator pour le logo opérateur. Sera dans `<div class="fr-header__operator">` -->
                <slot name="operator" />
              </div>
              <div
                v-if="showSearch || (quickLinks && quickLinks.length)"
                class="fr-header__navbar"
              >
                <button
                  class="fr-btn--menu  fr-btn"
                  aria-controls="header-search"
                  aria-label="Recherche"
                  title="Recherche"
                  :data-fr-opened="`${modalOpened}`"
                  @click="showSearchModal"
                >
                  <VIcon
                    name="ri-search-line"
                  />
                </button>
                <button
                  id="button-menu"
                  class="fr-btn--menu  fr-btn"
                  :data-fr-opened="`${modalOpened}`"
                  aria-controls="header-navigation"
                  aria-haspopup="menu"
                  aria-label="Menu"
                  title="Menu"
                  data-testid="open-menu-btn"
                  @click="showMenu"
                >
                  <VIcon
                    name="ri-menu-fill"
                  />
                </button>
              </div>
            </div>
            <div
              v-if="serviceTitle"
              class="fr-header__service"
            >
              <component
                :is="linkComponent"
                :to="homeTo"
                :title="`Accueil - ${serviceTitle}`"
                v-bind="$attrs"
              >
                <p class="fr-header__service-title">
                  {{ serviceTitle }}
                </p>
              </component>
              <p
                v-if="serviceDescription"
                class="fr-header__service-tagline"
              >
                {{ serviceDescription }}
              </p>
            </div>
          </div>
          <div class="fr-header__tools">
            <div
              v-if="quickLinks && quickLinks.length"
              class="fr-header__tools-links"
            >
              <DsfrHeaderMenuLinks
                v-if="!menuOpened"
                :links="quickLinks"
              />
            </div>
            <div
              v-if="showSearch"
              class="fr-header__search  fr-modal"
            >
              <DsfrSearchBar
                :model-value="modelValue"
                style="justify-content: flex-end"
                @update:model-value="$emit('update:modelValue', $event)"
                @search="$emit('search', $event)"
              />
            </div>
          </div>
        </div>
        <div
          v-if="showSearch || (quickLinks && quickLinks.length)"
          id="header-navigation"
          class="fr-header__menu  fr-modal"
          :class="{ 'fr-modal--opened': modalOpened }"
          aria-labelledby="button-menu"
        >
          <div class="fr-container">
            <button
              class="fr-link--close  fr-link"
              aria-controls="header-navigation"
              data-testid="close-modal-btn"
              @click="hideModal"
            >
              <VIcon
                name="ri-close-line"
              />
              Fermer
            </button>
            <div class="fr-header__menu-links">
              <DsfrHeaderMenuLinks
                v-if="menuOpened"
                :links="quickLinks"
              />
            </div>
            <div
              v-if="searchModalOpened"
              class="flex  justify-center  items-center"
            >
              <DsfrSearchBar
                :model-value="modelValue"
                style="justify-content: flex-end"
                @update:modelValue="$emit('update:modelValue', $event)"
                @search="$emit('search', $event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style src="@gouvfr/dsfr/dist/component/header/header.main.css" />
