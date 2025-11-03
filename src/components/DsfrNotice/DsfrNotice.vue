<script lang="ts" setup>
import type { DsfrNoticeProps } from './DsfrNotice.types'

export type { DsfrNoticeProps }

withDefaults(defineProps<DsfrNoticeProps>(), {
  title: '',
  desc: '',
  type: 'info',
})

defineEmits<{ (event: 'close'): void }>()

defineSlots<{
  /**
   * Slot pour le contenu du titre du bandeau.
   */
  default: () => any
  /**
   * Slot pour le contenu de la description du bandeau.
   */
  desc: () => any
}>()
</script>

<template>
  <div
    class="fr-notice"
    :class="`fr-notice--${type}`"
  >
    <div class="fr-container">
      <div class="fr-notice__body">
        <p>
          <span class="fr-notice__title">
            <slot>
              {{ title }}
            </slot>
          </span>
          <span class="fr-notice__desc">
            <slot name="desc">
              {{ desc }}
            </slot>
          </span>
        </p>
        <button
          v-if="closeable"
          class="fr-btn--close  fr-btn"
          title="Masquer le message"
          @click="$emit('close')"
        >
          Masquer le message
        </button>
      </div>
    </div>
  </div>
</template>
