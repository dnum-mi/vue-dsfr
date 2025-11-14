<script setup lang="ts">
useScheme()

const quickLinks = [
  {
    label: 'Accueil',
    to: '/',
    icon: 'ri-home-2-line',
  },
  {
    label: 'À propos',
    to: '/apropos',
    icon: 'ri-flag-line',
  },
  {
    label: 'Onglets',
    to: '/tabs',
    icon: 'ri-list-check-2',
  },
]
</script>

<template>
  <DsfrHeader
    service-title="serviceTitle"
    service-description="serviceDescription"
    logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />
  <NuxtPage />
</template>
