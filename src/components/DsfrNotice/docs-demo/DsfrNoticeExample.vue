<script lang="ts" setup>
import DsfrNotice from '../DsfrNotice.vue'
import { ref } from 'vue'

const isClosed = ref(false)
const close = () => {
  isClosed.value = true; setTimeout(() => {
    isClosed.value = false
  }, 3000)
}
</script>

<template>
  <div class="demo-container-col">
    <DsfrNotice title="Notice simple" />

    <DsfrNotice
      v-if="!isClosed"
      closeable
      @close="close()"
    >
      Notice fermable, avec un
      <a
        href="/composants/DsfrNotice"
        rel="noopener noreferrer"
        target="_blank"
      >
        lien externe
      </a>
    </DsfrNotice>
  </div>
</template>
