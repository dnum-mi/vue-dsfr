<script lang="ts" setup>
import DsfrSelect from '../DsfrSelect.vue'
</script>

<template>
  <div
    class="flex flex-col"
  >
    <DsfrSelect
      label="Label du select"
      :options="[1, 2, 3, 4, 5]"
    />
    <DsfrSelect
      label="Label du select"
      description="Description du select"
      :options="['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']"
    />
    <DsfrSelect
      label="Label du select"
      border-bottom
      required
      :options="[
        { value: 'Value 1', text: 'Text 1' },
        { value: 'Value 2', text: 'Text 2' },
        { value: 'Value 3', text: 'Text 3' },
        { value: 'Value 4', text: 'Text 4' },
        { value: 'Value 5', text: 'Text 5' },
      ]"
    />
  </div>
</template>
