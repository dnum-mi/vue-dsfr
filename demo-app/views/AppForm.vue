<script setup lang="ts">
import { ref } from 'vue'

import DsfrAlert from '@/components/DsfrAlert/DsfrAlert.vue'
import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'
import DsfrCheckboxSet from '@/components/DsfrCheckbox/DsfrCheckboxSet.vue'
import DsfrSelect from '@/components/DsfrSelect/DsfrSelect.vue'
import DsfrFileUpload from '@/components/DsfrFileUpload/DsfrFileUpload.vue'
import DsfrRadioButtonSet from '@/components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import type { DsfrCheckboxSetProps } from '@/components/DsfrCheckbox/DsfrCheckbox.types'

const inputValue = ref('')
const showAlert = ref(true)
const filesToUpload = ref(undefined)

const updateFiles = (files) => {
  console.log(files) // eslint-disable-line no-console
}

const sendFile = () => {
  console.log('inputValue:', inputValue.value) // eslint-disable-line no-console
  console.log('filesToUpload:', filesToUpload.value) // eslint-disable-line no-console
}

const isGood = ref<boolean>()
const whatever = ref('')
const radioTest = ref('')
const radioTest2 = ref('')

const options = [
  { value: true, text: 'Oui', disabled: false },
  { value: false, text: 'Non', disabled: false },
]

const selectedCheckbox = ref(false)
const selectedCheckboxes = ref([])
const cbLegend = 'Légende des cases à cocher'
const cbOptions: DsfrCheckboxSetProps['options'] = [
  {
    value: 'test1',
    modelValue: 'test1',
    label: 'Test 1',
  },
  {
    value: 'test2',
    modelValue: 'test2',
    label: 'Test 2',
  },
  {
    value: 'test3',
    modelValue: 'test3',
    label: 'Test 3',
  },
]
</script>

<template>
  <form @submit.prevent="sendFile()">
    <DsfrInput
      v-model="inputValue"
      label="Label de l’input text"
      label-visible
    />
    <DsfrFileUpload
      v-model="filesToUpload"
      label="Label de l’input file"
      label-visible
      @change="updateFiles($event)"
    />
    <div>
      <DsfrRadioButtonSet
        v-model="radioTest"
        legend="Légende des boutons radio dans la prop"
        name="radio-123aui"
        :options="[
          {
            label: 'label 1',
            value: 1,
            required: true,
          },
          {
            label: 'label 2',
            value: 2,
          },
        ]"
      />
      <DsfrRadioButtonSet
        v-model="radioTest2"
        name="radio-123auie"
        :options="[
          {
            label: 'label 2.1',
            value: 1,
            required: true,
          },
          {
            label: 'label 2.2',
            value: 2,
          },
        ]"
      >
        <template #legend>
          Légende des boutons radio dans le slot
        </template>
      </DsfrRadioButtonSet>
    </div>

    <DsfrSelect
      v-model="isGood"
      required
      label="Est-ce que c’est bon ?"
      :options
    />

    <DsfrButton
      type="submit"
      label="Bouton de soumission du formulaire"
    />
    <DsfrInput
      v-model="whatever"
      label="Label input"
    >
      <template #tip>
        <DsfrAlert v-if="showAlert" />
        <VIcon
          name="ri-question-line"
          @mouseover="showAlert = true"
          @mouseout="showAlert = false"
        />
      </template>
    </DsfrInput>

    <h2>ChecboxSet :</h2>
    <DsfrCheckboxSet
      v-model="selectedCheckboxes"
      :legend="cbLegend"
      :options="cbOptions"
    />
    Sélectionné(s) : {{ selectedCheckboxes }}

    <h2>Checbox seule :</h2>
    <DsfrCheckbox
      v-model="selectedCheckbox"
      label="Une seule checkbox"
      value="test_only_cb"
    />
    Sélectionné : {{ selectedCheckbox }}
  </form>
</template>
