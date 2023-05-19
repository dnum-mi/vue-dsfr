<script setup>
import { ref } from 'vue'

import DsfrRadioButtonSet from '@/components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import DsfrAlert from '@/components/DsfrAlert/DsfrAlert.vue'
import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'
import DsfrFileUpload from '@/components/DsfrFileUpload/DsfrFileUpload.vue'

const inputValue = ref('')
const filesToUpload = ref(undefined)

const updateFiles = (files) => {
  console.log(files)
}

const sendFile = () => {
  console.log('inputValue:', inputValue.value)
  console.log('filesToUpload:', filesToUpload.value)
}

const whatever = ref('')
const radioTest = ref('')
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
        legend="Légende des boutons radio"
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
          }
        ]"
      />
    </div>
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
  </form>
</template>
