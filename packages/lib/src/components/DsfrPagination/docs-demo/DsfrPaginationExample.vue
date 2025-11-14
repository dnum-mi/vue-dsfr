<script setup lang="ts">
import type { Page } from '../DsfrPagination.vue'

import { ref } from 'vue'

import DsfrPagination from '../DsfrPagination.vue'

const currentPage = ref(5)

const pages = ref<Page[]>([
  { title: 'Lien vers la page 1', href: '#1', label: '1' },
  { title: 'Lien vers la page 2', href: '#2', label: '2' },
  { title: 'Lien vers la page 3', href: '#3', label: '3' },
  { title: 'Lien vers la page 4', href: '#4', label: '4' },
  { title: 'Lien vers la page 5', href: '#5', label: '5' },
  { title: 'Lien vers la page 6', href: '#6', label: '6' },
  { title: 'Lien vers la page 7', href: '#7', label: '7' },
  { title: 'Lien vers la page 8', href: '#8', label: '8' },
  { title: 'Lien vers la page 9', href: '#9', label: '9' },
  { title: 'Lien vers la page 10', href: '#10', label: '10' },
])
</script>

<template>
  <DsfrPagination
    v-model:current-page="currentPage"
    :pages="pages"
    :trunc-limit="2"
    current-page-title-suffix=" - page courante"
  />
</template>
