<script lang="ts" setup>
import DsfrLogo from '../DsfrLogo.vue'

const logoText = ['République', 'Française']
const small = false
const large = false
</script>

<template>
  <DsfrLogo
    :small="small"
    :large="large"
    :logo-text="logoText"
  />
</template>
