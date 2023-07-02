<script lang="ts" setup>
import DsfrTableRow, { type DsfrTableRowProps } from './DsfrTableRow.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import { type DsfrTableHeaderProps } from './DsfrTableHeader.vue'

withDefaults(defineProps<{
  title?: string
  headers?:(DsfrTableHeaderProps | string)[]
  rows?: (DsfrTableRowProps | string)[]
  noCaption?: boolean
}>(), {
  title: undefined,
  headers: () => [],
  rows: () => [],
})

const getRowData = (row: (DsfrTableRowProps | string | ({component: string} & Record<string, any>))) => {
  // @ts-ignore TODO: find a way to improve types here
  return row.rowData || row
}
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
        <slot name="header">
          <DsfrTableHeaders
            v-if="headers && headers.length"
            :headers="headers"
          />
        </slot>
      </thead>
      <tbody>
        <!-- @slot Slot par défaut pour le corps du tableau. Sera dans `<tbody>` -->
        <slot />
        <template v-if="rows && rows.length">
          <DsfrTableRow
            v-for="(row, i) of rows"
            :key="i"
            :row-data="getRowData(row)"
            :row-attrs="typeof row === 'string' ? {} : row.rowAttrs"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>
