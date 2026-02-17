<script lang="ts" setup>
import type { DsfrToggleSwitchGroupProps } from './DsfrToggleSwitch.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

export type { DsfrToggleSwitchGroupProps }

const props = withDefaults(defineProps<DsfrToggleSwitchGroupProps>(), {
  id: () => useRandomId('toggle-group'),
  legend: '',
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
</script>

<template>
  <fieldset
    class="fr-fieldset"
    :class="{
      [`fr-fieldset--${status}`]: status,
    }"
    role="group"
    :aria-labelledby="status ? `${id}-legend ${id}-message-${status}` : `${id}-legend`"
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
          v-for="(toggleSwitch, index) in toggleSwitches"
          :key="index"
        >
          <DsfrToggleSwitch
            v-bind="toggleSwitch"
            :input-id="toggleSwitch.inputId ? `${id}-${toggleSwitch.inputId}` : `${id}-${useRandomId('toggle')}`"
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
