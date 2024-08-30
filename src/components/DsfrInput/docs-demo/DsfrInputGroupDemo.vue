<script lang="ts" setup>
import { ref } from 'vue'

import DsfrInputGroup from '../DsfrInputGroup.vue'
import DsfrInput from '../DsfrInput.vue'

const type = 'text'
const label = 'Label champ de saisie'
const placeholder = 'Yo'
const modelValue = ref('')
const modelValue2 = ref('')
const validMessage1 = 'Message de validation'
const errorMessage1 = 'Message d’erreur'
const errorMessage2 = 'Message d’erreur 2'
const hint = 'Texte d’indice du champ'
const id = ''
const readonly = ''
</script>

<template>
  <div class="fr-container fr-my-2w">
    <h2>1. Avec un message de succès</h2>

    <DsfrInputGroup
      :id="id"
      :valid-message="validMessage1"
      :placeholder="placeholder"
      :readonly="readonly !== ''"
      :model-value="modelValue"
      :label="label"
      :type="type"
      :hint="hint"
      label-visible
    />

    <h2>2. Avec un message d’erreur</h2>

    <DsfrInputGroup
      :id="id"
      :error-message="errorMessage1"
      :placeholder="placeholder"
      :readonly="readonly !== ''"
      :model-value="modelValue"
      :label="label"
      :type="type"
      :hint="hint"
      label-visible
    />

    <h2>3. Avec plusieurs messages</h2>

    <DsfrInputGroup
      :id="id"
      :error-message="[errorMessage1, errorMessage2]"
      :valid-message="[validMessage1]"
      :placeholder="placeholder"
      :readonly="readonly !== ''"
      :model-value="modelValue"
      :label="label"
      :type="type"
      :hint="hint"
      label-visible
    />

    <h2>4. Avec plusieurs champs de saisie</h2>

    <DsfrInputGroup
      valid-message="Tout va bien pour ces deux champs"
    >
      <p>
        <DsfrInput
          :id="id"
          :placeholder="placeholder"
          :readonly="readonly !== ''"
          :model-value="modelValue"
          :label="label"
          :type="type"
          :hint="hint"
          label-visible
        />
      </p>

      <p>
        <DsfrInput
          :id="id"
          :placeholder="placeholder"
          :readonly="readonly !== ''"
          :model-value="modelValue2"
          :label="label"
          :type="type"
          :hint="hint"
          label-visible
        />
      </p>
    </DsfrInputGroup>
  </div>
</template>
