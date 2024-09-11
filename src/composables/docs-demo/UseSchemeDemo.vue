<script setup>
import { onMounted, reactive, watchEffect } from 'vue'
import { DsfrButton, useScheme } from '../../index'

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
  <div class="fr-container">
    <p>
      Thème courant : {{ preferences.theme }} ('light' ou 'dark')
    </p>
    <p>
      Scheme courant : {{ preferences.scheme }} ('system', 'light', ou 'dark')
    </p>
    <p style="display: flex; gap: 0.5rem">
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
  </div>
</template>
