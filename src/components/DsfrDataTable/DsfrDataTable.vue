<script lang="ts" setup>
import { computed } from 'vue'

import { getRandomId } from '@/utils/random-utils'
import DsfrPagination, { type Page } from '../DsfrPagination/DsfrPagination.vue'
import type { DsfrDataTableProps } from './DsfrDataTable.types'

const props = withDefaults(defineProps<DsfrDataTableProps>(), {
  id: () => getRandomId('table'),
  topActionsRow: () => [],
  bottomActionsRow: () => [],
  currentPage: 0,
  rowsPerPage: 10,
  paginationOptions: () => [
    5,
    10,
    20,
  ],
})

const emit = defineEmits<{
  'update:current-page': [page: number]
}>()

const selection = defineModel<string[]>('selection')
const rowsPerPage = defineModel<number>('rowsPerPage', { default: 10 })
const currentPage = defineModel<number>('currentPage', { default: 1 })
const pageCount = computed(() => Math.ceil(props.rows.length / rowsPerPage.value))
const pages = computed<Page[]>(() => props.pages ?? Array.from({ length: pageCount.value }).map((x, i) => ({ label: `${i + 1}`, title: `Page ${i + 1}`, href: `#${i + 1}` })))

const lowestLimit = computed(() => currentPage.value * rowsPerPage.value)
const highestLimit = computed(() => (currentPage.value + 1) * rowsPerPage.value)

const finalRows = computed(() => {
  const rowKeys = props.headersRow.map((header) => {
    if (typeof header !== 'object') {
      return header
    }
    return header.key
  })

  const rows = props.rows.map((row) => {
    if (Array.isArray(row)) {
      return row
    }
    return rowKeys.map(key => typeof row !== 'object' ? row : row[key] ?? row)
  })

  if (props.pagination) {
    return rows.slice(lowestLimit.value, highestLimit.value)
  }

  return rows
})
</script>

<template>
  <div
    class="fr-table"
  >
    <div class="fr-table__wrapper">
      <div class="fr-table__container">
        <div class="fr-table__content">
          <table :id="id">
            <caption>
              {{ title }}
            </caption>
            <thead>
              <tr>
                <th
                  v-if="selectableRows"
                  class="fr-cell--fixed"
                  role="columnheader"
                >
                  <span class="fr-sr-only">Sélectionner</span>
                </th>
                <th
                  v-for="header of headersRow"
                  :key="typeof header === 'object' ? header.key : header"
                  scope="col"
                  v-bind="typeof header === 'object' && header.headerAttrs"
                >
                  <slot
                    name="header"
                    v-bind="typeof header === 'object' ? header : { key: header, label: header }"
                  >
                    {{ typeof header === 'object' ? header.label : header }}
                  </slot>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, idx) of finalRows"
                :key="`row-${idx}`"
                :data-row-key="idx + 1"
              >
                <th
                  v-if="selectableRows"
                  class="fr-cell--fixed"
                  role="columnheader"
                >
                  <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <!-- @vue-expect-error TS2538 -->
                    <input
                      id="table-select-checkbox-7748--0"
                      v-model="selection"
                      :value="row[rowKey] ?? `row-${idx}`"
                      type="checkbox"
                    >
                    <label
                      class="fr-label"
                      for="table-select-checkbox-7748--0"
                    >
                      Sélectionner la ligne {{ idx + 1 }}
                    </label>
                  </div>
                </th>

                <!-- @vue-expect-error TS2538 -->
                <td
                  v-for="(cell, cellIdx) of row"
                  :key="typeof cell === 'object' ? cell[rowKey] : cell"
                >
                  <slot
                    name="cell"
                    v-bind="{
                      colKey: typeof headersRow[cellIdx] === 'object'
                        ? headersRow[cellIdx].key
                        : headersRow[cellIdx],
                      cell,
                    }"
                  >
                    <!-- @vue-expect-error TS2538 -->
                    {{ typeof cell === 'object' ? cell[rowKey] : cell }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <slot name="pagination">
      <template
        v-if="pagination"
      >
        <div class="flex">
          <div class="fr-select-group flex">
            <label class="fr-label">Résultats par page : </label>
            <select
              v-model="rowsPerPage"
              class="fr-select"
              @change="emit('update:current-page', 0)"
            >
              <option
                value=""
                :selected="!paginationOptions.includes(rowsPerPage)"
                disabled="true"
                hidden="hidden"
              >
                Sélectionner une option
              </option>
              <option
                v-for="(option, idx) in paginationOptions"
                :key="idx"
                :value="option"
                :selected="+option === rowsPerPage"
              >
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex ml-1">
            <span class="self-center">Page {{ currentPage + 1 }} sur {{ pageCount }}</span>
          </div>
          <DsfrPagination
            v-model:current-page="currentPage"
            :pages="pages"
          />
        </div>
      </template>
    </slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
