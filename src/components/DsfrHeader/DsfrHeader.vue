<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, useSlots, type StyleValue } from 'vue'
import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrSearchBar from '../DsfrSearchBar/DsfrSearchBar.vue'
import DsfrHeaderMenuLinks from './DsfrHeaderMenuLinks.vue'
import { type DsfrHeaderMenuLinkProps } from './DsfrHeaderMenuLink.vue'

type DsfrHeaderProps = {
  serviceTitle?: string
  serviceDescription?: string
  homeTo?: string
  logoText?: string | string[]
  modelValue?: string
  operatorImgAlt?: string
  operatorImgSrc?: string
  operatorImgStyle?: StyleValue
  placeholder?: string
  quickLinks?: DsfrHeaderMenuLinkProps[]
  searchLabel?: string
  quickLinksAriaLabel?: string
  showSearch?: boolean
}

const props = withDefaults(defineProps<DsfrHeaderProps>(), {
  serviceTitle: undefined,
  serviceDescription: undefined,
  homeTo: '/',
  logoText: () => 'Gouvernement',
  modelValue: '',
  operatorImgAlt: '',
  operatorImgSrc: '',
  operatorImgStyle: () => undefined,
  placeholder: 'Rechercher...',
  quickLinks: () => undefined,
  searchLabel: 'Recherche',
  quickLinksAriaLabel: 'Menu secondaire',
})

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    hideModal()
  }
}
onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})

const menuOpened = ref(false)
const searchModalOpened = ref(false)
const modalOpened = ref(false)

const hideModal = () => {
  modalOpened.value = false
  menuOpened.value = false
  searchModalOpened.value = false
  document.getElementById('button-menu')?.focus()
}
const showMenu = () => {
  modalOpened.value = true
  menuOpened.value = true
  searchModalOpened.value = false
  document.getElementById('close-button')?.focus()
}
const showSearchModal = () => {
  modalOpened.value = true
  menuOpened.value = false
  searchModalOpened.value = true
}
const onQuickLinkClick = hideModal

const slots = useSlots()
const isWithSlotOperator = computed(() => slots.operator?.().length || !!props.operatorImgSrc)

// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'update:modelValue', payload: string): void,
  (e: 'search', payload: string): void,
}>()
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
                <slot name="operator">
                  <img
                    v-if="operatorImgSrc"
                    class="fr-responsive-img"
                    :src="operatorImgSrc"
                    :alt="operatorImgAlt"
                    :style="operatorImgStyle"
                  >
                </slot>
              </div>
              <div
                v-if="showSearch || quickLinks?.length"
                class="fr-header__navbar"
              >
                <button
                  v-if="showSearch"
                  class="fr-btn  fr-btn--search"
                  aria-controls="header-search"
                  aria-label="Recherche"
                  title="Recherche"
                  :data-fr-opened="showSearchModal"
                  @click="showSearchModal"
                />
                <button
                  v-if="quickLinks?.length"
                  id="button-menu"
                  class="fr-btn--menu  fr-btn"
                  :data-fr-opened="showMenu"
                  aria-controls="header-navigation"
                  aria-haspopup="menu"
                  aria-label="Menu"
                  title="Menu"
                  data-testid="open-menu-btn"
                  @click="showMenu()"
                />
              </div>
            </div>
            <div
              v-if="serviceTitle"
              class="fr-header__service"
            >
              <RouterLink
                :to="homeTo"
                :title="`Accueil - ${serviceTitle}`"
                v-bind="$attrs"
              >
                <p class="fr-header__service-title">
                  {{ serviceTitle }}
                </p>
              </RouterLink>
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
              <nav role="navigation">
                <DsfrHeaderMenuLinks
                  v-if="!menuOpened"
                  :links="quickLinks"
                  :nav-aria-label="quickLinksAriaLabel"
                />
              </nav>
            </div>
            <div
              v-if="showSearch"
              class="fr-header__search  fr-modal"
            >
              <DsfrSearchBar
                :label="searchLabel"
                :model-value="modelValue"
                :placeholder="placeholder"
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
          aria-label="Menu modal"
          role="dialog"
          aria-modal="true"
        >
          <div class="fr-container">
            <button
              id="close-button"
              class="fr-btn fr-btn--close"
              aria-controls="header-navigation"
              data-testid="close-modal-btn"
              @click="hideModal"
            >
              Fermer
            </button>
            <div class="fr-header__menu-links">
              <nav role="navigation">
                <DsfrHeaderMenuLinks
                  v-if="menuOpened"
                  role="navigation"
                  :links="quickLinks"
                  :nav-aria-label="quickLinksAriaLabel"
                  @link-click="onQuickLinkClick"
                />
              </nav>
            </div>
            <div
              v-if="searchModalOpened"
              class="flex  justify-center  items-center"
            >
              <DsfrSearchBar
                :model-value="modelValue"
                :placeholder="placeholder"
                @update:model-value="$emit('update:modelValue', $event)"
                @search="$emit('search', $event)"
              />
            </div>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </header>
</template>
