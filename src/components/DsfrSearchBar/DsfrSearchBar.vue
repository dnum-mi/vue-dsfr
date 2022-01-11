<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'
import DsfrInput from '../DsfrInput/DsfrInput.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default defineComponent({
  name: 'DsfrSearchBar',
  components: {
    DsfrInput,
    DsfrButton,
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
    large: Boolean,
    buttonText: {
      type: String,
      default: '',
    },
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
})
</script>

<template>
  <div
    class="fr-search-bar"
    :class="{ 'fr-search-bar--lg': large }"
    role="search"
  >
    <DsfrInput
      :id="id"
      type="search"
      :placeholder="placeholder"
      :model-value="modelValue"
      :label-visible="labelVisible"
      :label="label"
      @update:modelValue="$emit('update:modelValue', $event)"
      @keydown.enter="$emit('search')"
    />
    <DsfrButton
      title="Rechercher"
      :icon="!hideIcon && 'ri-search-line'"
      :icon-only="!hideIcon"
      :class="{'no-max-width': hideIcon}"
      @click="$emit('search')"
    >
      {{ buttonText }}
    </DsfrButton>
  </div>
</template>

<style src="./search.main.css" />

<style scoped>
.fr-search-bar {
  display: flex;
}

:deep(.ov-icon) {
  font-size: 1.25rem;
  vertical-align: -0.1em;
}

.no-max-width {
  max-width: none;
}
</style>
