<script lang="ts" setup>
import type { DsfrDataTableProps } from './DsfrDataTable.types'

withDefaults(defineProps<DsfrDataTableProps>(), {
  selectableRows: () => [],
  topActionsRow: () => [],
  bottomActionsRow: () => [],
  currentPage: 1,
  resultsPerPage: 10,
})
</script>

<template>
  <div
    id="table-sm-component"
    class="fr-table--sm fr-table fr-table"
  >
    <div class="fr-table__wrapper">
      <div class="fr-table__container">
        <div class="fr-table__content">
          <table id="table-sm">
            <caption>
              Titre du tableau (caption)
            </caption>
            <thead>
              <tr>
                <th
                  v-for="header of headersRow"
                  :key="typeof header === 'object' ? header.key : header"
                  scope="col"
                >
                  <slot
                    name="header"
                    :content="typeof header === 'object' ? header : { key: header, label: header }"
                  >
                    {{ typeof header === 'object' ? header.label : header }}
                  </slot>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, idx) of rows"
                id="table-sm-row-key-1"
                :key="`row-${idx}`"
                :data-row-key="idx + 1"
              >
                <td
                  v-for="(cell, cellIdx) of row"
                  :key="typeof cell === 'object' ? cell.id : cell"
                >
                  <slot
                    name="cell"
                    :content="{ colKey: typeof headersRow[cellIdx] === 'object' ? headersRow[cellIdx].key : headersRow[cellIdx], cell }"
                  >
                    {{ typeof cell === 'object' ? cell.id : cell }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
