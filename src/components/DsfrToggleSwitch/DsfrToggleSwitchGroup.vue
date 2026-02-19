<script lang="ts" setup>
import type { DsfrToggleSwitchGroupProps } from './DsfrToggleSwitch.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

export type { DsfrToggleSwitchGroupProps }

const props = withDefaults(defineProps<DsfrToggleSwitchGroupProps>(), {
  id: () => useRandomId('toggle-group'),
  legend: '',
  disabled: false,
  toggleSwitches: () => [],
})

const message = computed(() => {
  if (props.status === 'valid') {
    return props.validMessage
  }
  if (props.status === 'error') {
    return props.errorMessage
  }
  return undefined
})

const toggleSwitchesWithInputId = computed(() => (
  props.toggleSwitches.map((toggleSwitch, index) => ({
    ...toggleSwitch,
    resolvedInputId: toggleSwitch.inputId
      ? `${props.id}-${toggleSwitch.inputId}`
      : `${props.id}-toggle-${index}`,
  }))
))
</script>

<template>
  <fieldset
    class="fr-fieldset"
    :class="{
      [`fr-fieldset--${status}`]: status,
    }"
    :disabled="disabled"
    role="group"
    :aria-labelledby="`${id}-legend`"
    :aria-describedby="message ? `${id}-message-${status}` : undefined"
  >
    <legend
      :id="`${id}-legend`"
      class="fr-fieldset__legend"
    >
      {{ legend }}
    </legend>
    <div class="fr-fieldset__element">
      <ul class="fr-toggle__list">
        <li
          v-for="(toggleSwitch, index) in toggleSwitchesWithInputId"
          :key="index"
        >
          <DsfrToggleSwitch
            v-bind="toggleSwitch"
            :input-id="toggleSwitch.resolvedInputId"
            :disabled="disabled || toggleSwitch.disabled"
            :border-bottom="borders"
            :active-text="activeText"
            :inactive-text="inactiveText"
            :no-text="noText"
          />
        </li>
      </ul>
    </div>
    <div
      :id="`${id}-messages`"
      class="fr-messages-group"
      aria-live="polite"
    >
      <p
        v-if="message"
        :id="`${id}-message-${status}`"
        class="fr-message"
        :class="{
          'fr-message--error': status === 'error',
          'fr-message--valid': status === 'valid',
        }"
      >
        {{ message }}
      </p>
    </div>
  </fieldset>
</template>
