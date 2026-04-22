<script lang="ts" setup>
import type { DsfrUserMenuProps } from './DsfrUserMenu.types'

import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import { useCollapsable } from '../../composables'
import { useRandomId } from '../../utils/random-utils'

export type { DsfrUserMenuProps }

const props = withDefaults(defineProps<DsfrUserMenuProps>(), {
  id: () => useRandomId('user-menu'),
  isConnected: false,
  unconnectedLabel: 'Me connecter',
  unconnectedTitle: 'Me connecter',
  connectedLabel: 'Mon espace',
  connectedTitle: 'Mon espace',
  connectionIcon: false,
  userLabel: '',
  userInfo: '',
  links: () => [],
  hasDisconnectButton: false,
  disconnectButtonLabel: 'Me déconnecter',
  hasUserInfo: false,
  noOutline: false,
})

const emit = defineEmits<{
  /** Événement émis lors du basculement de l'expansion d'un élément de menu */
  toggleExpand: [payload: string]
  /** Événement émis lors de la déconnexion de l'utilisateur */
  disconnect: []
}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = ref(false)

const btnRef = ref<HTMLElement>()

const computedConnectionIcon = computed(() =>
  typeof props.connectionIcon === 'boolean' && props.connectionIcon
    ? 'fr-icon-account-circle-fill'
    : props.connectionIcon,
)

// Fermer le menu au clic extérieur
const onDocumentClick = (event: MouseEvent) => {
  if (collapse.value && !collapse.value.contains(event.target as Node) && btnRef.value && !btnRef.value.contains(event.target as Node)) {
    expanded.value = false
  }
}

// Fermer le menu à la pression d'Escape
const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && expanded.value) {
    expanded.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
})

/*
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
 */
watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <nav class="fr-nav fr-nav--expanded usermenu__nav">
    <div class="fr-nav__item">
      <!-- Bouton non connecté -->
      <button
        v-if="!props.isConnected"
        :id="`${props.id}-button`"
        :title="props.unconnectedTitle"
        type="button"
        class="fr-btn fr-btn--tertiary fr-btn--md usermenu__btn"
        :class="{
          [`${computedConnectionIcon} fr-btn--icon-left`]: computedConnectionIcon,
          'fr-btn--tertiary-no-outline': props.noOutline,
        }"
      >
        {{ props.unconnectedLabel }}
      </button>

      <!-- Bouton connecté + menu déroulant -->
      <template v-else>
        <button
          :id="`${props.id}-connected-button`"
          ref="btnRef"
          :aria-controls="`${props.id}-menu`"
          :aria-expanded="expanded"
          :title="props.connectedTitle"
          type="button"
          class="fr-nav__btn fr-btn usermenu__toggle"
          :class="{
            [`${computedConnectionIcon} fr-btn--icon-left`]: computedConnectionIcon,
            'fr-btn--tertiary-no-outline': props.noOutline,
            'fr-btn--tertiary': !props.noOutline,
          }"
          @click="expanded = !expanded"
        >
          <span class="fr-btn__text">{{ props.connectedLabel }}</span>
        </button>

        <!-- Menu déroulant -->
        <div
          :id="`${props.id}-menu`"
          ref="collapse"
          class="fr-menu usermenu__menu fr-collapse"
          :class="{
            'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a requestAnimationFrame (RAF)
            'fr-collapsing': collapsing,
          }"
          @transitionend="onTransitionEnd(expanded, true)"
        >
          <!-- En-tête utilisateur -->
          <div
            v-if="props.userLabel"
            class="usermenu__header"
          >
            <p>
              <span class="usermenu__user-label">{{ props.userLabel }}</span>
              <span
                v-if="props.hasUserInfo && props.userInfo"
                class="usermenu__user-info"
              >
                {{ props.userInfo }}
              </span>
            </p>
          </div>

          <!-- Listes des liens -->
          <ul
            v-if="props.links.length > 0"
            class="fr-menu__list usermenu__links"
          >
            <li
              v-for="link, idx in props.links"
              :key="idx"
              class="fr-nav__item"
            >
              <a
                class="fr-nav__link"
                :class="{ [`${link.icon}`]: link.icon, 'fr-link--icon-left': !!link.icon }"
                :href="link.to?.toString() ?? '#'"
                @click="expanded = false"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>

          <!-- Bouton déconnexion -->
          <div
            v-if="props.hasDisconnectButton"
            class="usermenu__footer"
          >
            <button
              type="button"
              class="fr-btn fr-btn--secondary fr-btn--sm fr-icon-logout-box-r-line fr-btn--icon-left usermenu__btn"
              @click="() => {
                emit('disconnect')
                expanded = false
              }"
            >
              {{ props.disconnectButtonLabel }}
            </button>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.fr-nav.usermenu__nav {
  position: relative;
}

.fr-menu.usermenu__menu {
  width:fit-content
}
.usermenu__header {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-default-grey);
  text-align: left;
}

.usermenu__user-label {
  display: block;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.usermenu__user-info {
  display: block;
  font-size: 0.75rem;
  color: var(--text-mention-grey);
  line-height: 1.25rem;
}
.usermenu__btn,
.usermenu__toggle,
.fr-btns-group:not(.fr-btns-group--sm):not(.fr-btns-group--lg):not([class^="fr-btns-group--icon-"]):not([class*=" fr-btns-group--icon-"]) .fr-btn.usermenu__btn,
.fr-btns-group:not(.fr-btns-group--sm):not(.fr-btns-group--lg):not([class^="fr-btns-group--icon-"]):not([class*=" fr-btns-group--icon-"]) .usermenu__toggle {
  width: fit-content;
  max-width: fit-content;
}

.usermenu__toggle[aria-expanded]::after {
  --icon-size: 1rem;
  background-color: currentColor;
  content: "";
  display: inline-block;
  flex: 0 0 auto;
  height: var(--icon-size);
  margin-left: auto;
  margin-right: 0;
  -webkit-mask-image: url(/node_modules/.pnpm/@gouvfr+dsfr@1.14.3/node_modules/@gouvfr/dsfr/dist/icons/arrows/arrow-down-s-line.svg);
  mask-image: url(/node_modules/.pnpm/@gouvfr+dsfr@1.14.3/node_modules/@gouvfr/dsfr/dist/icons/arrows/arrow-down-s-line.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition: transform .3s;
  vertical-align: calc((.75em - var(--icon-size))*.5);
  width: var(--icon-size);
}

.usermenu__toggle[aria-expanded="true"]::after {
  transform: rotate(180deg);
}

.usermenu__links .fr-nav__link {
  justify-content: flex-start;
}

.usermenu__footer {
  padding: 0.75rem 1rem;
}
</style>
