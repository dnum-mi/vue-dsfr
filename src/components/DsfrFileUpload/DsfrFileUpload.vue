<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
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
    hint: {
      type: String,
      default: undefined,
    },
    error: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<template>
  <div
    class="fr-upload-group"
    :class="{ 'fr-input-group--error': error }"
  >
    <label
      class="
    fr-label"
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
      :aria-describedby="`${id}-desc`"
      v-bind="$attrs"
    >
    <p
      v-if="error"
      :id="`${id}-desc`"
      class="fr-error-text"
    >
      <VIcon
        name="ri-alert-line"
        class="icon"
      />
      {{ error }}
    </p>
  </div>
</template>

<style src="./upload.css" />

<style scoped>
.icon {
  margin-right: 0.25rem;
}
</style>
