<script setup>
import { onMounted, reactive, watchEffect } from 'vue'

import DsfrRadioButtonSet from '@/components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

import { useScheme } from '@/composables'

const options = [
  {
    label: 'System',
    value: 'system',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  },
]

const preferences = reactive({
  theme: undefined,
  scheme: undefined,
})

onMounted(() => {
  const { theme, scheme, setScheme } = useScheme()
  preferences.scheme = scheme.value

  watchEffect(() => { preferences.theme = theme.value })

  watchEffect(() => setScheme(preferences.scheme))
})
</script>

<template>
  <p>
    <DsfrButton @click="preferences.scheme = 'system'">
      System
    </DsfrButton>
    <DsfrButton @click="preferences.scheme = 'light'">
      Light
    </DsfrButton>
    <DsfrButton @click="preferences.scheme = 'dark'">
      Dark
    </DsfrButton>
  </p>

  <DsfrRadioButtonSet
    v-model="preferences.scheme"
    :options="options"
  />
</template>
