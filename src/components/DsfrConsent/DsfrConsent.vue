<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrContent',

  props: {
    url: {
      type: String,
      default: '',
    },
  },

  emits: ['accept-all', 'refuse-all', 'customize'],

  computed: {
    isExternalLink () {
      return typeof this.url === 'string' && this.url.startsWith('http')
    },
    is () {
      return this.url ? (this.isExternalLink ? 'a' : 'RouterLink') : 'a'
    },
    linkProps () {
      return { [this.isExternalLink ? 'href' : 'to']: this.url }
    },
  },
})
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

<style src="@gouvfr/dsfr/dist/component/consent/consent.main.min.css" />
