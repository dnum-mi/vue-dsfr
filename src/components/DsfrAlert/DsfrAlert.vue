<script setup lang="ts">
import type { DsfrAlertProps } from './DsfrAlert.types'

import { computed } from 'vue'

import { useRandomId } from '@/utils/random-utils'

export type { DsfrAlertProps, DsfrAlertType } from './DsfrAlert.types'

const props = withDefaults(defineProps<DsfrAlertProps>(), {
  id: () => useRandomId('basic', 'alert'),
  title: '',
  titleTag: 'h3',
  type: 'info',
  closeButtonLabel: 'Fermer le message',
})

const emit = defineEmits<{
  /** Émis lors de la fermeture de l’alerte */
  close: []
}>()

defineSlots<{
  /** Slot par défaut pour le contenu de l’alerte. Utilisable si pas de description en props */
  default: () => any
}>()

const onClick = () => emit('close')

const classes = computed(
  () => ([
    `fr-alert--${props.type}`,
    {
      'fr-alert--sm': props.small,
    },
  ]),
)

const idTitle = computed(() => useRandomId('alert', 'title'))
const idDescription = computed(() => useRandomId('alert', 'description'))

const idListDescribedby = computed(() => {
  if (props.description && !props.title) {
    return idDescription.value
  }
  if (!props.description && props.title) {
    return idTitle.value
  }
  return `${idTitle.value} ${idDescription.value}`
})
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
      :is="titleTag"
      v-if="!small"
      :id="idTitle"
      class="fr-alert__title"
    >
      {{ title }}
    </component>
    <p
      v-if="description"
      :id="idDescription"
    >
      {{ description }}
    </p>
    <slot v-else />
    <button
      v-if="closeable"
      :aria-describedby="idListDescribedby"
      :title="closeButtonLabel"
      class="fr-btn fr-btn--close"
      @click="onClick"
    >
      <span class="fr-sr-only">{{ closeButtonLabel }}</span>
    </button>
  </div>
</template>

<style scoped>
p {
  padding: 0;
  margin: 0;
}

.fr-alert--sm {
  padding: .5rem 2.25rem .5rem 3rem;
}
</style>
