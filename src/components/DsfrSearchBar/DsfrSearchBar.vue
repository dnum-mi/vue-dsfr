<template>
  <div
    class="fr-search-bar"
    :class="{ 'fr-search-bar--lg': large }"
  >
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
      <v-icon
        v-if="!hideIcon || large"
        class="fr-search-bar__icon"
        name="ri-search-2-line"
      />
      <span class="fr-btn__text">{{ buttonText }}</span>
    </DsfrButton>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import { RiSearch2Line } from 'oh-vue-icons/icons'

import { getRandomId } from '../../utils/random-utils.js'
import DsfrInput from '../DsfrInput/DsfrInput.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

VIcon.add(RiSearch2Line)

export default defineComponent({
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
    large: Boolean,
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
})
</script>

<style scoped>
.fr-search-bar {
  display: flex;

}

:deep(.ov-icon) {
  font-size: 1.25rem;
  vertical-align: -0.1em;
}
:deep(.fr-input) {
  box-shadow: inset 0 -2px 0 0 var(--bf500);
  border-radius: 0.25rem 0 0 0;
}
:deep(.fr-btn) {
  box-shadow: inset 0 -2px 0 0 var(--bf500);
  border-radius: 0 0.25rem 0 0;
}

.fr-search-bar--lg :deep(.fr-input) {
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
}

.fr-search-bar--lg :deep(.fr-btn) {
  font-size: 1.25rem;
  line-height: 2rem;
  min-height: 3.5rem;
  padding: 0.75rem 2rem;
  flex-direction: row;

  & .fr-btn__text {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  @media (max-width: 768px) {
    & {
      font-size: inherit;
      line-height: inherit;
      min-height: inherit;
      padding: 0.5rem 1.5rem;
    }

    & .fr-btn__text {
      display: none;
    }
  }
}
</style>
