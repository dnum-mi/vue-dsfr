<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrNewsLetter',

  props: {
    title: {
      type: String,
      default: 'Abonnez-vous à notre lettre d’information',
    },
    description: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    labelEmail: {
      type: String,
      default: 'Votre adresse électronique (ex. : nom@example.com)',
    },
    placeholder: {
      type: String,
      default: 'nom@example.com',
    },
    inputTitle: {
      type: String,
      default: 'Adresse électronique',
    },
    hintText: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: 'S’abonner',
    },
    buttonTitle: {
      type: String,
      default: 'S‘abonner à notre lettre d’information',
    },

  },

  emits: ['update:email'],
})
</script>

<template>
  <div class="fr-follow__newsletter">
    <div>
      <h5 class="fr-h5 fr-follow__title">
        {{ title }}
      </h5>
      <p class="fr-text--sm fr-follow__desc">
        {{ description }}
      </p>
    </div>
    <div>
      <form action="">
        <label
          class="fr-label"
          for="newsletter-email"
        >
          {{ labelEmail }}
        </label>
        <div class="fr-input-wrap fr-input-wrap--addon">
          <input
            id="newsletter-email"
            class="fr-input"
            aria-describedby="fr-newsletter-hint-text"
            :title="inputTitle || labelEmail"
            :placeholder="placeholder || labelEmail"
            type="email"
            name="newsletter-email"
            :value="email"
            autocomplete="email"
            @input="$emit('update:email', $event.target.value)"
          >
          <button
            id="newsletter-button"
            class="fr-btn"
            :title="buttonTitle"
            type="submit"
          >
            {{ buttonText }}
          </button>
        </div>
        <p
          v-if="error"
          id="newsletter-email-desc-error"
          class="fr-error-text"
        >
          {{ error }}
        </p>
        <p
          id="fr-newsletter-hint-text"
          class="fr-hint-text"
        >
          {{ hintText }}
        </p>
      </form>
    </div>
  </div>
</template>
