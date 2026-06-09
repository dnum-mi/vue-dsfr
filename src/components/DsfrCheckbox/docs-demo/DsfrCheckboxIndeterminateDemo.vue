<script lang="ts" setup>
import type { DsfrCheckboxProps } from '../DsfrCheckbox.types'

import { computed, ref, watch } from 'vue'

import DsfrCheckbox from '../DsfrCheckbox.vue'
import DsfrCheckboxSet from '../DsfrCheckboxSet.vue'

const checked = ref()

const options: Omit<DsfrCheckboxProps, 'modelValue'>[] = [
  {
    label: 'Côte d’Armor',
    value: 22,
    id: '22',
    name: '22',
  },
  {
    label: 'Finistère',
    value: 29,
    id: '29',
    name: '29',
  },
  {
    label: 'Ille-et-Vilaine',
    value: 35,
    id: '35',
    name: '35',
  },
  {
    label: 'Morbihan',
    value: 56,
    id: '56',
    name: '56',
  },
]
const modelValueDept = ref([])
console.log('modelValueDept', modelValueDept.value) // eslint-disable-line no-console
const checkedOptions = options.map(option => ({ checked: true, ...option }))

const isIndeterminate = computed(() => modelValueDept.value.length > 0 && modelValueDept.value.length < options.length)
const isAllChecked = computed(() => modelValueDept.value.length === options.length)
const isChecked = computed(() => checked.value === true || isAllChecked.value)
watch(isAllChecked, (newValue) => {
  console.log('isAllChecked', newValue) // eslint-disable-line no-console
  if (checked.value !== newValue) {
    checked.value = newValue
  }
})
watch(isIndeterminate, (newValue) => {
  console.log('isIndeterminate', newValue) // eslint-disable-line no-console
  if (checked.value && !newValue) {
    modelValueDept.value = checkedOptions.map(option => option.value)
  }
})
watch(checked, (newValue) => {
  console.log('checked', newValue) // eslint-disable-line no-console
  if (!newValue && !isIndeterminate.value) {
    modelValueDept.value = []
    return
  }
  if (newValue && !isAllChecked.value) {
    modelValueDept.value = checkedOptions.map(option => option.value)
    return
  }
  if (newValue && isIndeterminate.value) {
    modelValueDept.value = checkedOptions.map(option => option.value)
  }
})
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrCheckbox
      v-model="checked"
      value="Bretagne"
      name="checkbox-simple"
      label="Région Bretagne"
      :checked
      :indeterminate="isIndeterminate"
    />

    <div class="fr-my-2v fr-px-10v">
      <DsfrCheckboxSet
        v-model="modelValueDept"
        :options
      >
        <template #legend>
          <span class="fr-sr-only">Départements de la région Bretagne</span>
        </template>
      </DsfrCheckboxSet>
      <p> modelValueDept: {{ modelValueDept }} </p>
    </div>
    checked : {{ checked }}<br>
    isAllChecked : {{ isAllChecked }}<br>
    isChecked : {{ isChecked }}<br>
    isIndeterminate : {{ isIndeterminate }}
  </div>
</template>

<style scoped>
.required {
  color: #f60700;
}
</style>
