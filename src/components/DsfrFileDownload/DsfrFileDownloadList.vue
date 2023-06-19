<script lang="ts" setup>
import DsfrFileDownload, { type DsfrFileDownloadProps } from './DsfrFileDownload.vue'

withDefaults(defineProps<{
  files: DsfrFileDownloadProps[]
  title: string
}>(), {
  files: () => [],
  title: '',
})
</script>

<template>
  <div class="fr-downloads-group fr-downloads-group--bordered">
    <h4
      v-if="title"
      class="fr-downloads-group__title"
    >
      {{ title }}
    </h4>
    <ul>
      <li
        v-for="(element, idx) of files"
        :key="idx"
      >
        <DsfrFileDownload
          :title="element.title"
          :format="element.format"
          :size="element.size"
          :href="element.href"
          :download="element.download"
        />
      </li>
    </ul>
  </div>
</template>
