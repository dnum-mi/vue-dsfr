<script lang="ts" setup>
import type { DsfrNewsLetterProps } from './DsfrFollow.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

export type { DsfrNewsLetterProps }

const props = withDefaults(defineProps<DsfrNewsLetterProps>(), {
  id: () => useRandomId('newsletter', 'email'),
  title: 'Abonnez-vous à notre lettre d’information',
  description: '',
  email: '',
  error: '',
  labelEmail: 'Votre adresse électronique (ex. : prenom.nom@example.com)',
  placeholder: 'prenom.nom@example.com',
  inputTitle: 'Adresse courriel',
  hintText: '',
  buttonText: 'S’abonner',
  buttonTitle: 'S‘abonner à notre lettre d’information',
  buttonAction: () => {},
  onSubmit: () => {},
  onlyCallout: false,
})

const emailValue = defineModel<string>('email')

const buttonId = computed(() => `${props.id}-button`)
const hintId = computed(() => `${props.id}-hint`)
const errorId = computed(() => `${props.id}-desc-error`)
const describedById = computed(() => {
  if (props.error) {
    return errorId.value
  }
  return props.hintText ? hintId.value : undefined
})
</script>

<template>
  <div class="fr-follow__newsletter">
    <div>
      <h3 class="fr-h5 fr-follow__title">
        {{ title }}
      </h3>
      <p class="fr-text--sm fr-follow__desc">
        {{ description }}
      </p>
    </div>
    <div v-if="onlyCallout">
      <button
        class="fr-btn"
        :title="buttonTitle"
        @click="buttonAction ? buttonAction($event) : () => {}"
      >
        {{ buttonText }}
      </button>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit(emailValue)">
        <label
          class="fr-label"
          :for="id"
        >
          {{ labelEmail }}
        </label>
        <div class="fr-input-wrap fr-input-wrap--addon">
          <input
            :id="id"
            v-model="emailValue"
            class="fr-input"
            :class="{ 'fr-input--error': error }"
            :aria-describedby="describedById"
            :aria-invalid="error ? true : undefined"
            :title="inputTitle || labelEmail"
            :placeholder="placeholder || labelEmail"
            type="email"
            name="newsletter-email"
            autocomplete="email"
          >
          <button
            :id="buttonId"
            class="fr-btn"
            :title="buttonTitle"
            type="submit"
          >
            {{ buttonText }}
          </button>
        </div>
        <div
          v-if="error"
          class="fr-messages-group"
          role="alert"
        >
          <p
            :id="errorId"
            class="fr-error-text"
          >
            {{ error }}
          </p>
        </div>
        <p
          v-if="hintText"
          :id="hintId"
          class="fr-hint-text"
        >
          {{ hintText }}
        </p>
      </form>
    </div>
  </div>
</template>
