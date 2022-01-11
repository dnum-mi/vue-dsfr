<script>
import { defineComponent } from 'vue'

import DsfrTableRow from './DsfrTableRow.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'

export default defineComponent({
  name: 'DsfrTable',

  components: {
    DsfrTableRow,
    DsfrTableHeaders,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },
    headers: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: [Array, Object],
      default: () => [],
    },
    noCaption: Boolean,
  },

  computed: {
    isWithContent () {
      return this.headers?.length || this.rows?.length
    },
  },
})
</script>

<template>
  <div
    class="fr-table"
    :class="{ 'fr-table--no-caption': noCaption }"
  >
    <table
      class="simple-table"
    >
      <caption class="caption">
        {{ title }}
      </caption>
      <thead>
        <!-- @slot Slot "header" pour les en-têtes du tableau. Sera dans `<thead>` -->
        <slot name="header" />
        <DsfrTableHeaders
          v-if="headers && headers.length"
          :headers="headers"
        />
      </thead>
      <tbody>
        <!-- @slot Slot par défaut pour le corps du tableau. Sera dans `<tbody>` -->
        <slot />
        <template v-if="rows && rows.length">
          <DsfrTableRow
            v-for="(row, i) of rows"
            :key="i"
            :row-data="row.rowData || row"
            :row-attrs="row.rowAttrs || {}"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>

<style src="./table.main.css" />

<style scoped>
.fr-table :deep(td) {
  color: var(--text-default-grey);
}
</style>
