<script setup>
// @ts-check
import { ref } from 'vue'
import DsfrNotice from '@/components/DsfrNotice/DsfrNotice.vue'
import DsfrAlert from '@/components/DsfrAlert/DsfrAlert.vue'

const noticeClosed = ref(false)

const closeNotice = () => {
  noticeClosed.value = true
  setTimeout(() => { noticeClosed.value = false }, 2000)
}

const alertClosed = ref(false)

const closeAlert = () => {
  alertClosed.value = true
  setTimeout(() => { alertClosed.value = false }, 2000)
}
</script>

<template>
  <p>
    <DsfrAlert
      title="Titre d’une info"
      type="info"
    />
  </p>
  <p>
    <DsfrAlert
      :closeable="true"
      title="Titre d’une erreur"
      type="error"
      :closed="alertClosed"
      @close="closeAlert()"
    />
  </p>
  <p>
    <DsfrNotice title="Titre d’un bandeau d’information importante" />
  </p>
  <p>
    <DsfrNotice
      v-if="!noticeClosed"
      title="Titre d’un bandeau d’information importante"
      :closeable="true"
      @close="closeNotice()"
    />
  </p>
</template>
