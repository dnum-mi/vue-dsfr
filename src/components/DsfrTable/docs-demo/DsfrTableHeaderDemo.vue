<script lang="ts" setup>
import { computed, ref } from 'vue'

import DsfrTable from '../DsfrTable.vue'
import DsfrTableHeader from '../DsfrTableHeader.vue'

const icon = ref<{ name: string } | undefined>({
  name: 'ri-sort-desc',
})

const header = 'En-tête'
const headerAttrs = computed(() => ({
  class: 'ns-resize',
  onClick: ($event) => {
    $event.preventDefault()
    const iconName = icon.value?.name
    icon.value = iconName === 'ri-sort-desc'
      ? { name: 'ri-sort-asc' }
      : iconName === 'ri-sort-asc'
        ? undefined
        : { name: 'ri-sort-desc' }
  },
}))
</script>

<template>
  <DsfrTable
    title="Titre du tableau"
  >
    <template #header>
      <tr>
        <DsfrTableHeader
          class="flex  justify-between items-center"
          :header="header"
          :header-attrs="headerAttrs"
          :icon="icon"
        />
      </tr>
    </template>
    <tr>
      <td>
        Corps du tableau
      </td>
    </tr>
  </DsfrTable>
</template>

<style scoped>
.ns-resize {
  cursor: ns-resize;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
</style>
