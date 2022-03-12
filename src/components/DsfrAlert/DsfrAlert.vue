<script lang="ts">
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
        class="close-icon"
        title="Fermer"
        aria-label="Fermer"
        @click="onClick"
      >
        <VIcon
          scale="1"
          name="ri-close-line"
        />
      </button>
    </div>
  </transition>
</template>

<style src="@gouvfr/dsfr/dist/component/alert/alert.main.css" />

<style scoped>
.fr-alert,
.close-icon {
  color: var(--text-default-grey);
}

.fr-alert--info::before,
.fr-alert--warning::before,
.fr-alert--success::before,
.fr-alert--error::before
{
  height: 40px;
}
.fr-alert--sm {
  padding: .575rem 2.25rem .75rem 3.5rem;
  height: 40px;
  & .fr-alert__description {
    margin: 0;
  }
}

.alert-content {
  display: flex;
  flex-direction: column;
}
.close-icon {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 2rem;
  height: 2rem;

  &:hover {
    border-radius: 1rem;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
/* .slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
*/
</style>
