<script setup lang="ts">
import type { Page } from '../DsfrPagination.vue'

import { ref } from 'vue'

import DsfrPagination from '../DsfrPagination.vue'

const currentPage = ref(1)

const pages = ref<Page[]>([
  { title: '1', href: '#1', label: '1' },
  { title: '2', href: '#2', label: '2' },
  { title: '3', href: '#3', label: '3' },
  { title: '4', href: '#4', label: '4' },
  { title: '5', href: '#5', label: '5' },
  { title: '6', href: '#6', label: '6' },
  { title: '7', href: '#7', label: '7' },
  { title: '8', href: '#8', label: '8' },
  { title: '9', href: '#9', label: '9' },
  { title: '10', href: '#10', label: '10' },
])
</script>

<template>
  <DsfrPagination
    v-model:current-page="currentPage"
    :pages="pages"
  />
</template>
