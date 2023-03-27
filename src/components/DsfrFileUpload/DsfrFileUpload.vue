<script>
import { defineComponent } from 'vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrFileUpload',

  props: {
    id: {
      type: String,
      default: () => getRandomId('file-upload'),
    },
    label: {
      type: String,
      default: 'Ajouter un fichier',
    },
    accept: {
      type: Array,
      default: () => [],
    },
    hint: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    validMessage: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue', 'change'],

  methods: {
    onChange ($event) {
      this.$emit('update:modelValue', $event.target.value)
      this.$emit('change', $event.target.files)
    },
  },
})
</script>

<template>
  <div
    class="fr-upload-group"
    :class="{
      'fr-upload-group--error': error,
      'fr-upload-group--valid': validMessage,
      'fr-upload-group--disabled': disabled,
    }"
  >
    <label
      class="fr-label"
      :for="id"
    >
      {{ label }}
      <span
        v-if="hint"
        class="fr-hint-text"
      >{{ hint }}</span>
    </label>
    <input
      :id="id"
      class="fr-upload"
      type="file"
      :aria-describedby="error || validMessage ? `${id}-desc` : null"
      v-bind="$attrs"
      :value="modelValue"
      :disabled="disabled"
      :accept="accept.join(',')"
      @change="onChange($event)"
    >
    <div
      v-if="error || validMessage"
      class="fr-messages-group"
    >
      <p
        v-if="error"
        :id="`${id}-desc`"
        class="fr-error-text  fr-mt-3v"
      >
        {{ error ?? validMessage }}
      </p>
    </div>
  </div>
</template>
