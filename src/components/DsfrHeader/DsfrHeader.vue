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
              <router-link
                :to="homeTo"
                :title="`Accueil - ${serviceTitle}`"
                v-bind="$attrs"
              >
                <p class="fr-header__service-title">
                  {{ serviceTitle }}
                </p>
              </router-link>
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
                @show-hide-notif="showNotif"
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
                @show-hide-notif="showNotif"
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
<script>
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
  emits: ['update:modelValue', 'search', 'show-hide-notif'],
  data () {
    return {
      menuOpened: false,
      searchModalOpened: false,
      modalOpened: false,
    }
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
    showNotif (idLink) {
      const index = this.quickLinks.findIndex((e) => e.id === idLink)
      // ici, on déclenche l'événement show-hide-notif du parent,
      // dont la méthode devra inverser la valeur de la propriété showNotif de l'élément
      // du tableau quickLinks qui correspond à l'index
      this.$emit('show-hide-notif', index)
    },
  },
}
</script>

<style scoped>
.fr-header {
  --link-underline: none;
  --link-blank-font: none;
  --link-blank-content: none;
  --ul-type: none;
  --ol-type: none;
  --ul-start: 0;
  --ol-start: 0;
  --xl-block: 0;
  --li-bottom: 0;
  --ol-content: none;
  width: 100%;
  position: relative;
  background-color: var(--w-g750);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 8px 16px -16px rgba(0, 0, 0, 0.32);
}

.fr-header__body-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 -1rem;
}

.fr-header__brand {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.fr-header__brand-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.fr-header__logo {
  order: 1;
  flex: 0 0 auto;
  padding: 0.75rem;
}

.fr-header__logo .fr-logo {
  font-size: 0.7875rem;
  margin: -1em;
}

.fr-header__logo .fr-logo::before {
  width: 2.0625rem;
  height: 0.75rem;
  margin-bottom: 0.25rem;
  background-size: 2.0625rem 0.84375rem, 2.0625rem 0.75rem, 0;
  background-position: 0 -0.04688rem, 0 0, 0 0;
}

:root[data-fr-mourning] .fr-header__logo .fr-logo::before {
  background-size: 2.0625rem 0.84375rem, 0, 2.0625rem 0.75rem;
}

.fr-header__logo .fr-logo::after {
  min-width: 1.96875rem;
  background-size: 3.9375rem 2.8125rem;
  background-position: 0 calc(100% + 1.40625rem);
  padding-top: 1.65625rem;
}

:root[data-fr-theme="dark"] .fr-header__logo .fr-logo::after {
  background-position: -1.96875rem 100%;
}

.fr-header__operator {
  padding: 0.75rem;
  order: 2;
  flex: 0 1 auto;
}

.fr-header__operator img {
  display: block;
}

.fr-header__service {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  width: 100%;
}

.fr-header__service-title {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
}

.fr-header__service-title, .fr-header__service-tagline {
  margin-bottom: 0;
}

.fr-modal {
  overflow: auto;
  justify-content: initial;
  padding-top: 1rem;
  padding-bottom: 4.5rem;
}

.fr-modal:not([role="dialog"]) {
  transition: none;
}

.fr-modal::before {
  content: none;
}

.fr-modal::after {
  content: none;
}

.fr-modal > * > .fr-link--close {
  margin-bottom: 1.5rem;
}

.fr-header__navbar {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0.25rem;
  margin-left: auto;
  order: 3;
  flex: 0 0 auto;
  align-self: flex-start;
  z-index: 2500;
}

.fr-header__navbar .fr-btn {
  font-size: 1rem;
  line-height: 1.5rem;
  min-height: 2.5rem;
  padding: 0.5rem 1.5rem;
  flex-direction: row;
  overflow: hidden;
  max-width: 2.5rem;
  max-height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex: 0 0 auto;
  white-space: nowrap;
}

::v-deep(.fr-links-group .fr-link) {
  font-size: 0.875rem;
  line-height: 1.5rem;
  min-height: 2rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  overflow: initial;
  max-width: none;
  max-height: none;
}

::v-deep(.fr-links-group .fr-link::before) {
  font: normal normal normal 1rem/1 dsfr-icons;
  margin-left: -0.25rem;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.fr-header__tools-links {
  display: none;
}

.fr-header__tools-links ::v-deep(.fr-links-group) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
}

.fr-header__tools-links ::v-deep(.fr-links-group > *:not(:last-child) > .fr-link::after),
.fr-header__tools-links ::v-deep(.fr-links-group > .fr-link:not(last-child)::after) {
  content: "";
  display: block;
  position: relative;
  right: -1rem;
  width: 1px;
  height: 1rem;
}

.fr-header__tools-links ::v-deep(.fr-link) {
  overflow: initial;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.fr-header__menu-links ::v-deep(.fr-links-group) {
  display: flex;
  flex-direction: column;
}

.fr-header__menu-links ::v-deep(.fr-links-group .fr-link) {
  border-radius: 0;
  width: 100%;
  min-height: 3rem;
}

.fr-header__service {
  color: var(--g800);
  box-shadow: inset 0 1px 0 0 var(--g300);
}

.fr-header__menu-links ::v-deep(.fr-link) {
  box-shadow: inset 0 -1px 0 0 var(--g300);
}

.fr-header__tools-links ::v-deep(.fr-link::after) {
  background-color: var(--g400);
}

.fr-header__navbar .fr-service__title {
  color: var(--g800);
}

.fr-header__navbar .fr-btn {
  background-color: var(--t-plain);
  color: var(--bf500);
}

:root:not([data-fr-theme="dark"]) .fr-header__navbar .fr-btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root:not([data-fr-theme="dark"]) [class*="fr-scheme-light"] .fr-header__navbar .fr-btn,
:root:not([data-fr-theme="dark"]) [class*="--scheme-light-"] .fr-header__navbar .fr-btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root:not([data-fr-theme="dark"]) [class*="fr-scheme-dark"] .fr-header__navbar .fr-btn,
:root:not([data-fr-theme="dark"]) [class*="--scheme-dark-"] .fr-header__navbar .fr-btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root[data-fr-theme="dark"] .fr-header__navbar .fr-btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

.fr-header__navbar .fr-btn--menu {
  color: var(--g700);
}

.fr-modal {
  background-color: var(--w-g750);
}

@media (min-width: 48em) {
  .fr-header__service-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 62em) {
  .fr-header__body-row {
    padding: 1.5rem 0;
  }

  .fr-header__brand {
    margin-top: -1rem;
    margin-bottom: -1rem;
    flex-wrap: nowrap;
    width: auto;
  }

  .fr-header__brand-top {
    width: auto;
  }

  .fr-header__logo, .fr-header__operator, .fr-header__service {
    padding: 1rem;
  }

  .fr-header__logo:not(:last-child), .fr-header__operator:not(:last-child),
  .fr-header__service:not(:last-child) {
    margin-right: 0.5rem;
  }

  .fr-header__service {
    margin-left: 0;
    margin-right: 0;
  }

  .fr-header__service {
    box-shadow: none;
    width: auto;
  }

  .fr-modal {
    padding: 0;
    margin: 0;
    width: auto;
    height: auto;
    visibility: inherit;
    opacity: 1;
    position: initial;
    background-color: transparent;
    overflow: initial;
  }

  .fr-modal > * > .fr-link--close {
    display: none;
  }

  .fr-header__navbar {
    display: none;
  }

  .fr-header__tools {
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    flex: 1 0 auto;
  }

  .fr-header__tools-links + .fr-header__search {
    margin-top: 1rem;
  }

  .fr-header__tools .fr-header__search {
    max-width: 25rem;
    margin-left: auto;
  }

  .fr-header__tools-links {
    display: initial;
  }

  .fr-nav {
    justify-content: flex-start;
  }

  .fr-nav__list {
    max-width: calc(100% + 1rem);
  }

  .fr-nav .fr-menu::after, .fr-nav .fr-mega-menu {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 8px 16px -16px rgba(0, 0, 0, 0.32);
  }

  .fr-header__menu {
    box-shadow: inset 0 1px 0 0 var(--g300);
  }
}

</style>
