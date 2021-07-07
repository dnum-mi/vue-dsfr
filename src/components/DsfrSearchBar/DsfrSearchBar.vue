<template>
  <div class="fr-search-bar">
    <DsfrInput
      :id="id"
      type="search"
      :placeholder="placeholder"
      :model-value="modelValue"
      :label-visible="labelVisible"
      :label="label"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.esc="$emit('update:modelValue', '')"
    />
    <DsfrButton
      title="Rechercher"
      @click="$emit('search')"
    >
      {{ buttonText }}
      <v-icon
        v-if="!hideIcon"
        name="ri-search-2-line"
      />
    </DsfrButton>
  </div>
</template>

<script>
import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import { RiSearch2Line } from 'oh-vue-icons/icons'

import { getRandomId } from '../../utils/random-utils.js'
import DsfrInput from '../DsfrInput/DsfrInput.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

VIcon.add(RiSearch2Line)

export default {
  name: 'SearchBar',
  components: {
    DsfrInput,
    DsfrButton,
    VIcon,
  },
  props: {
    id: {
      type: String,
      default: getRandomId('search', 'input'),
    },
    label: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    dark: Boolean,
    hideIcon: Boolean,
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Rechercher',
    },
  },

  emits: ['update:modelValue', 'search'],

  data () {
    return {
      classesText: {
        type: String,
        default: '',
      },
      classesButton: {
        type: String,
        default: '',
      },
    }
  },
}
</script>

<style scoped>
:deep(.fr-input) {
  box-shadow: inset 0 -2px 0 0 var(--bf500);
  border-radius: 0.25rem 0 0 0;
}
</style>
