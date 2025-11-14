<script lang="ts" setup>
import { ref } from 'vue'

import DsfrRadioButtonSet from '../DsfrRadioButtonSet.vue'

const modelValue1 = ref()
const modelValue2 = ref()
const modelValue3 = ref()
const modelValue4 = ref()
const modelValue5 = ref()
const modelValue6 = ref()

const options1 = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description one',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description two',
  },
  {
    label: 'Troisième valeur',
    id: 'name1-3',
    value: 'name1-3',
    hint: 'Description three',
  },
]

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
</script>

<template>
  <div class="fr-container fr-my-2v">
    <div>
      <DsfrRadioButtonSet
        v-model="modelValue1"
        legend="Groupe de boutons radio simple"
        hint="Texte de description additionnel"
        :options="options1"
        name="name-1"
      />
      <p>
        modelValue1: {{ modelValue1 }}
      </p>
    </div>

    <div>
      <DsfrRadioButtonSet
        v-model="modelValue2"
        legend="Groupe de boutons radio avec message d’erreur"
        :options="options2"
        name="name-2"
        error-message="Message d’erreur"
      />
    </div>

    <div>
      <DsfrRadioButtonSet
        v-model="modelValue3"
        legend="Groupe de boutons radio avec message de validation"
        :options="options3"
        name="name-3"
        valid-message="Message de validation"
      />
    </div>

    <div>
      <DsfrRadioButtonSet
        v-model="modelValue4"
        legend="Groupe de boutons radio en ligne"
        :options="options4"
        name="name-4"
        inline
      />
      <p>
        modelValue4: {{ modelValue4 }}
      </p>
    </div>

    <div>
      <DsfrRadioButtonSet
        v-model="modelValue5"
        legend="Groupe de boutons radio en ligne avec message d’erreur"
        :options="options5"
        name="name-5"
        inline
        error-message="Message d’erreur"
      />
    </div>

    <div>
      <DsfrRadioButtonSet
        v-model="modelValue6"
        legend="Groupe de boutons radio en ligne avec message de validation"
        :options="options6"
        name="name-6"
        inline
        valid-message="Message de validation"
      />
    </div>
  </div>
</template>
