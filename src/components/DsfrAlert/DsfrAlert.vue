<script setup lang="ts">
import { computed } from 'vue'

import type { DsfrAlertProps } from './DsfrAlert.types.js'

import { useRandomId } from '@/utils/random-utils'

export type { DsfrAlertProps, DsfrAlertType } from './DsfrAlert.types.js'

const props = withDefaults(defineProps<DsfrAlertProps>(), {
  id: () => useRandomId('basic', 'alert'),
  title: '',
  titleTag: 'h3',
  type: 'info',
  closeButtonLabel: 'Fermer',
})

const emit = defineEmits<{ (e: 'close'): void }>()
const onClick = () => emit('close')

const idAlert = computed( () => `message-notif-${props.id}`)

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
  <div
    v-if="!closed"
    :id="id"
    class="fr-alert"
    :class="classes"
    :role="alert ? 'alert' : undefined"
  >
    <component
      :id="idAlert"
      :is="titleTag"
      v-if="!small"
      class="fr-alert__title"
    >
      {{ title }}
    </component>
    <slot>
      {{ description }}
    </slot>
    <button
      v-if="closeable"
      class="fr-btn fr-btn--close"
      :aria-describedby="idAlert"
      :title="closeButtonLabel"
      :aria-label="closeButtonLabel"
      @click="onClick">
      <span class="fr-sr-only">Fermer la notification</span>
    </button>
  </div>
</template>
