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
        @click="close"
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
    close () {
      this.$emit('close')
    },
  },
})
</script>

<style scoped>
.fr-alert {
  position: relative;
  padding: 1rem 2.25rem 0.75rem 3.5rem;
  color: var(--g700)
}

.fr-alert--error {
  box-shadow: inset 0 0 0 1px var(--error), inset 2.5rem 0 0 0 var(--error);
  display: flex;
}

.fr-alert--success {
  box-shadow: inset 0 0 0 1px var(--success), inset 2.5rem 0 0 0 var(--success);
}

.fr-alert--info {
  box-shadow: inset 0 0 0 1px var(--info), inset 2.5rem 0 0 0 var(--info);
}

.fr-alert--sm {
  padding: .575rem 2.25rem .75rem 3.5rem;

  & .fr-alert__description {
    margin: 0;
  }
}

.fr-alert__title {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin: 0;
}

.fr-alert__description {
  margin: 0.5rem 0 0 0;
  line-height: 2rem;
}

.alert-icon {
  position: absolute;
  top: 0.85rem;
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
