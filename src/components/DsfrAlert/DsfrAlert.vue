<script setup lang="ts">
import { computed } from 'vue'

import { getRandomId } from '../../utils/random-utils'

const props = withDefaults(defineProps<{
  id?: string,
  type?: 'error' | 'success' | 'warning' | 'info',
  title?: string,
  description: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  small?: boolean,
  closed?: boolean,
  closeable?: boolean,
}>(), {
  id: () => getRandomId('basic', 'alert'),
  type: 'info',
  titleTag: 'h3',
  title: '',
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
