<script setup lang="ts">
import { computed } from 'vue'

import { getRandomId } from '@/utils/random-utils'
import type { DsfrAlertProps } from './DsfrAlert.types'

export type { DsfrAlertProps, DsfrAlertType } from './DsfrAlert.types'

const props = withDefaults(defineProps<DsfrAlertProps>(), {
  id: () => getRandomId('basic', 'alert'),
  title: '',
  titleTag: 'h3',
  type: 'info',
})

const emit = defineEmits<{(e: 'close'): void}>()
const onClick = () => emit('close')

const classes = computed(
  () => ([
    `fr-alert--${props.type}`,
    {
      'fr-alert--sm': props.small,
    },
  ]),
)

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
        <component
          :is="titleTag"
          v-if="!small"
          class="fr-alert__title"
        >
          {{ title }}
        </component>
        <p class="fr-alert__description">
          <slot>
            {{ description }}
          </slot>
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
