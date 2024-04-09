<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCheckboxSet from '../DsfrCheckboxSet.vue'

const modelValue1 = ref(undefined)
const modelValue2 = ref(undefined)
const modelValue3 = ref(undefined)
const modelValue4 = ref(undefined)
const modelValue5 = ref(undefined)
const modelValue6 = ref(undefined)

const options1 = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    name: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    name: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
  {
    label: 'Troisième valeur',
    id: 'name1-3',
    name: 'name1-3',
    hint: 'Description de la troisième valeur',
  },
] as const

const options2 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).map(([key, value]) => [key, value.replace('name1', 'name2')]),
))

const options3 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).map(([key, value]) => [key, value.replace('name1', 'name3')]),
))

const options4 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, value.replace('name1', 'name4')]),
))

const options5 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, value.replace('name1', 'name5')]),
))

const options6 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, value.replace('name1', 'name6')]),
))

const errorMessage = 'Message d’erreur'
const validMessage = 'Message de validation'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue1"
        legend="Groupe de cases à cocher simple"
        :options="options1"
      />
      <p>
        modelValue1: {{ modelValue1 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue2"
        legend="Groupe de cases à cocher avec erreur"
        :options="options2"
        :error-message="errorMessage"
      />
      <p>
        modelValue2: {{ modelValue2 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue3"
        legend="Groupe de cases à cocher avec message de validation"
        :options="options3"
        :valid-message="validMessage"
      />
      <p>
        modelValue3: {{ modelValue3 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue4"
        legend="Groupe de cases à cocher en ligne"
        :options="options4"
        inline
      />
      <p>
        modelValue4: {{ modelValue4 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue5"
        legend="Groupe de cases à cocher en ligne avec erreur"
        :options="options5"
        inline
        error-message="Message d’erreur"
      />
      <p>
        modelValue5: {{ modelValue5 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue6"
        legend="Groupe de cases à cocher en ligne avec erreur"
        :options="options6"
        inline
        valid-message="Message de validation"
      />
      <p>
        modelValue6: {{ modelValue6 }}
      </p>
    </div>
  </div>
</template>
