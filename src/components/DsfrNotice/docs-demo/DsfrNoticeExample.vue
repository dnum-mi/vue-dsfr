<script lang="ts" setup>
import { ref } from 'vue'

import DsfrNotice from '../DsfrNotice.vue'

const isClosed = ref(false)
const close = () => {
  isClosed.value = true; setTimeout(() => {
    isClosed.value = false
  }, 3000)
}
</script>

<template>
  <div class="demo-container-col">
    <DsfrNotice
      title="Notice simple"
    />

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

    <DsfrNotice
      title="Notice simple"
      desc="Texte de description plutot long lorem ipsum sit consectetur adipiscing elit."
    />

    <DsfrNotice
      title="Notice simple"
      type="warning"
    />

    <DsfrNotice
      title="Notice simple"
      type="alert"
    />

    <DsfrNotice
      title="Notice simple"
      type="weather-orange"
    />
  </div>
</template>
