<script lang="ts" setup>
import { getRandomId } from '../../utils/random-utils'

withDefaults(defineProps<{
  id?: string
  label?: string
  accept?: string[]
  hint?: string
  error?: string
  validMessage?: string
  disabled?: boolean
  modelValue?: string
}>(), {
  id: () => getRandomId('file-upload'),
  label: 'Ajouter un fichier',
  accept: () => [],
  hint: '',
  validMessage: '',
  error: '',
  modelValue: '',
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void,
  (e: 'change', payload: FileList): void,
}>()

const onChange = ($event: InputEvent) => {
  emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
  emit('change', ($event.target as (InputEvent['target'] & { files: FileList }))?.files)
}
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
      :aria-describedby="error || validMessage ? `${id}-desc` : undefined"
      v-bind="$attrs"
      :value="modelValue"
      :disabled="disabled"
      :accept="accept.join(',')"
      @change="onChange($event as InputEvent)"
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
