<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCheckbox from '../DsfrCheckbox.vue'

const hint = 'Indication pour ce champ'
const modelValue = ref(undefined)

const errorMessage = 'Message d’erreur'
const validMessage = 'Message de validation'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-simple"
      label="Case à cocher simple"
    />
    {{ modelValue }}

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-disabled"
      label="Case à cocher désactivée"
      disabled
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-hint"
      label="Case à cocher avec indication"
      :hint="hint"
    />

    <DsfrCheckbox
      v-model="modelValue"
      label="Case à cocher obligatoire"
      required
      :hint="hint"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-required-custom"
      label="Case à cocher obligatoire personnalisée"
      required
      :hint="hint"
    >
      <template #required-tip>
        <em class="required">&nbsp;(obligatoire)</em>
      </template>
    </DsfrCheckbox>

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-error"
      label="Case à cocher avec message d’erreur"
      required
      :hint="hint"
      :error-message="errorMessage"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-error"
      label="Case à cocher avec message de validation"
      required
      :hint="hint"
      :valid-message="validMessage"
    />
  </div>
</template>

<style scoped>
.required {
  color: #f60700;
}
</style>
