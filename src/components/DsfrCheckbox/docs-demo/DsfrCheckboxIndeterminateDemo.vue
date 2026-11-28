<script lang="ts" setup>
import type { DsfrCheckboxProps } from '../DsfrCheckbox.types.ts'

import { computed, ref } from 'vue'

import DsfrCheckbox from '../DsfrCheckbox.vue'
import DsfrCheckboxSet from '../DsfrCheckboxSet.vue'

interface Department {
  label: string
  value: string
  officesLegend: string
  offices: Omit<DsfrCheckboxProps, 'modelValue'>[]
}

const departments: Department[] = [
  {
    label: 'Côtes-d’Armor',
    value: '22',
    officesLegend: 'Préfecture et sous-préfectures des Côtes-d’Armor',
    offices: [
      { id: '22-saint-brieuc-P', name: '22-prefecture', label: 'Préfecture des Côtes-d’Armor (Saint-Brieuc)', value: '22-saint-brieuc-P' },
      { id: '22-dinan-SP', name: '22-dinan', label: 'Sous-préfecture de Dinan', value: '22-dinan-SP' },
      { id: '22-guingamp-SP', name: '22-guingamp', label: 'Sous-préfecture de Guingamp', value: '22-guingamp-SP' },
      { id: '22-lannion-SP', name: '22-lannion', label: 'Sous-préfecture de Lannion', value: '22-lannion-SP' },
    ],
  },
  {
    label: 'Finistère',
    value: '29',
    officesLegend: 'Préfecture et sous-préfectures du Finistère',
    offices: [
      { id: '29-quimper-P', name: '29-prefecture', label: 'Préfecture du Finistère (Quimper)', value: '29-quimper-P' },
      { id: '29-brest-SP', name: '29-brest', label: 'Sous-préfecture de Brest', value: '29-brest-SP' },
      { id: '29-chateaulin-SP', name: '29-chateaulin', label: 'Sous-préfecture de Châteaulin', value: '29-chateaulin-SP' },
      { id: '29-morlaix-SP', name: '29-morlaix', label: 'Sous-préfecture de Morlaix', value: '29-morlaix-SP' },
    ],
  },
  {
    label: 'Ille-et-Vilaine',
    value: '35',
    officesLegend: 'Préfecture et sous-préfectures d’Ille-et-Vilaine',
    offices: [
      { id: '35-rennes-P', name: '35-prefecture', label: 'Préfecture d’Ille-et-Vilaine (Rennes)', value: '35-rennes-P' },
      { id: '35-fougeres-vitre-SP', name: '35-fougeres-vitre', label: 'Sous-préfecture de Fougères-Vitré', value: '35-fougeres-vitre-SP' },
      { id: '35-redon-SP', name: '35-redon', label: 'Sous-préfecture de Redon', value: '35-redon-SP' },
      { id: '35-saint-malo-SP', name: '35-saint-malo', label: 'Sous-préfecture de Saint-Malo', value: '35-saint-malo-SP' },
    ],
  },
  {
    label: 'Morbihan',
    value: '56',
    officesLegend: 'Préfecture et sous-préfectures du Morbihan',
    offices: [
      { id: '56-vannes-P', name: '56-prefecture', label: 'Préfecture du Morbihan (Vannes)', value: '56-vannes-P' },
      { id: '56-lorient-SP', name: '56-lorient', label: 'Sous-préfecture de Lorient', value: '56-lorient-SP' },
      { id: '56-pontivy-SP', name: '56-pontivy', label: 'Sous-préfecture de Pontivy', value: '56-pontivy-SP' },
    ],
  },
]

const allOfficeValues = departments.flatMap(department => department.offices.map(office => office.value))
const selectedValues = ref<string[]>([
  '22-saint-brieuc-P',
  '22-dinan-SP',
  '29-quimper-P',
  '29-brest-SP',
  '35-rennes-P',
  '35-fougeres-vitre-SP',
  '35-redon-SP',
  '35-saint-malo-SP',
])

const isAllSelected = computed(() => allOfficeValues.every(value => selectedValues.value.includes(value)))
const isIndeterminate = computed(() => selectedValues.value.some(value => allOfficeValues.includes(value)) && !isAllSelected.value)
const selectAll = computed({
  get: () => isAllSelected.value,
  set: (checked: boolean) => {
    selectedValues.value = checked ? [...allOfficeValues] : []
  },
})

function isDepartmentSelected (department: Department) {
  return department.offices.every(office => selectedValues.value.includes(office.value))
}

function isDepartmentIndeterminate (department: Department) {
  const selectedOfficeCount = department.offices.filter(office => selectedValues.value.includes(office.value)).length
  return selectedOfficeCount > 0 && selectedOfficeCount < department.offices.length
}

function setDepartmentSelected (department: Department, selected: boolean) {
  const departmentOfficeValues = department.offices.map(office => office.value)

  if (selected) {
    selectedValues.value = [...new Set([...selectedValues.value, ...departmentOfficeValues])]
    return
  }

  selectedValues.value = selectedValues.value.filter(value => !departmentOfficeValues.includes(value))
}
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrCheckbox
      v-model="selectAll"
      value="Bretagne"
      name="checkbox-region"
      label="Région Bretagne"
      :indeterminate="isIndeterminate"
    />

    <div
      v-for="department in departments"
      :key="department.value"
      class="fr-my-2v fr-ml-4v"
    >
      <DsfrCheckbox
        :id="`department-${department.value}`"
        :model-value="isDepartmentSelected(department)"
        :value="department.value"
        :name="`department-${department.value}`"
        :label="department.label"
        :indeterminate="isDepartmentIndeterminate(department)"
        @update:model-value="setDepartmentSelected(department, $event)"
      />

      <div class="fr-ml-4v">
        <DsfrCheckboxSet
          v-model="selectedValues"
          :options="department.offices"
          :legend="department.officesLegend"
        />
      </div>
    </div>
  </div>
</template>
