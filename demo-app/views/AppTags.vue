<script lang="ts" setup>
import DsfrTag from '../../src/components/DsfrTag/DsfrTag.vue'
import DsfrTags from '../../src/components/DsfrTag/DsfrTags.vue'

const tags = [
  {
    icon: 'fr-icon-ancient-pavilion-fill',
    label: 'Elément 1 de la liste de tags',
  },
  {
    icon: 'ri-notification-3-line',
    label: 'Elément 2 de la liste de tags',
  },
]
</script>

<template>
  <div>
    <DsfrTag label="Bonjour VueDsfr !" />
  </div>
  <div class="fr-mt-2w">
    <DsfrTag
      label="Vue Power"
      icon="ri-notification-3-line"
    />
  </div>
  <div class="fr-mt-2w">
    <DsfrTags :tags="tags" />
  </div>
</template>
