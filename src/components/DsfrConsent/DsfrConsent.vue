<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ url?: string }>(), {
  url: '',
})

// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'accept-all'): void
  (e: 'refuse-all'): void,
  (e: 'customize'): void,
}>()

const isExternalLink = computed(() => typeof props.url === 'string' && props.url.startsWith('http'))
const is = computed(() => props.url ? (isExternalLink.value ? 'a' : 'RouterLink') : 'a')
const linkProps = computed(() => ({ [isExternalLink.value ? 'href' : 'to']: props.url }))
</script>

<template>
  <div
    class="fr-consent-banner__content"
  >
    <p class="fr-text--sm">
      <!-- @slot Slot par défaut pour la description -->
      <slot>
        Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site.
        Pour en savoir plus, visitez la page
        <component
          :is="is"
          v-bind="linkProps"
          data-testid="link"
        >
          Données personnelles et cookies
        </component>.
        Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.
      </slot>
    </p>
  </div>
  <ul class="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
    <li>
      <button
        class="fr-btn"
        title="Autoriser tous les cookies"
        @click.stop="$emit('accept-all')"
      >
        Tout accepter
      </button>
    </li>

    <li>
      <button
        class="fr-btn"
        title="Refuser tous les cookies"
        @click.stop="$emit('refuse-all')"
      >
        Tout refuser
      </button>
    </li>
    <li>
      <button
        class="fr-btn fr-btn--secondary"
        data-fr-opened="false"
        aria-controls="fr-consent-modal"
        title="Personnaliser les cookies"
        @click.stop="$emit('customize')"
      >
        Personnaliser
      </button>
    </li>
  </ul>
</template>
