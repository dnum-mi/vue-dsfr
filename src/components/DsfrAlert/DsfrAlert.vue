<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrAlert',

  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'alert')
      },
    },
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    small: Boolean,
    closed: Boolean,
    closeable: Boolean,
  },

  emits: ['close'],

  computed: {
    error () {
      return this.type === 'error'
    },
    success () {
      return this.type === 'success'
    },
    warning () {
      return this.type === 'warning'
    },
    info () {
      return this.type === 'info'
    },
    classes () {
      return {
        'fr-alert--error': this.error,
        'fr-alert--success': this.success,
        'fr-alert--warning': this.warning,
        'fr-alert--info': this.info,
        'fr-alert--sm': this.small,
      }
    },
  },

  methods: {
    onClick () {
      this.$emit('close')
    },
  },
})
</script>

<template>
  <transition name="slide-fade">
    <div
      v-if="!closed"
      :id="id"
      class="fr-alert"
      :class="classes"
    >
      <div class="alert-content">
        <p
          v-if="!small"
          class="fr-alert__title"
        >
          {{ title }}
        </p>
        <p class="fr-alert__description">
          {{ description }}
        </p>
      </div>
      <button
        v-if="closeable"
        class="fr-btn fr-btn--close"
        title="Fermer"
        aria-label="Fermer"
        @click="onClick"
      />
    </div>
  </transition>
</template>

<style src="@gouvfr/dsfr/dist/component/alert/alert.main.min.css" />

<style scoped>

</style>
