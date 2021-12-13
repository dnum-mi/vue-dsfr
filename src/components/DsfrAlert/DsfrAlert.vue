<template>
  <transition name="slide-fade">
    <div
      v-if="!closed"
      :id="id"
      role="alert"
      class="fr-alert"
      :class="classes"
    >
      <VIcon
        class="alert-icon"
        scale="1.25"
        :name="icon"
      />
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

<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

const iconNames = {
  error: 'ri-alert-fill',
  success: 'ri-checkbox-circle-fill',
  info: 'ri-information-fill',
}

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
    size: {
      type: String,
      default: 'medium',
    },
    closed: Boolean,
    sm: Boolean,
    closeable: Boolean,
  },

  emits: ['close'],

  computed: {
    small () {
      return this.size === 'small' || this.sm
    },
    icon () {
      return iconNames[this.type] || 'ri-information-fill'
    },
    error () {
      return this.type === 'error'
    },
    success () {
      return this.type === 'success'
    },
    info () {
      return !this.error && !this.success
    },
    classes () {
      return {
        'fr-alert--error': this.error,
        'fr-alert--success': this.success,
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

<style src="./alert.main.css" />

<style scoped>

.fr-alert,
.close-icon {
  color: var(--text-default-grey);
}
.fr-alert--sm {
  padding: .575rem 2.25rem .75rem 3.5rem;

  & .alert-icon {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    color: var(--w);
  }

  & .fr-alert__description {
    margin: 0;
  }
}

.alert-icon {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  color: var(--w);
}

.alert-content {
  display: flex;
  flex-direction: column;
}

.close-icon {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: none;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
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
</style>
