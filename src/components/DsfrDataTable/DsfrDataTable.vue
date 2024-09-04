<script lang="ts" setup>
import { computed, ref } from 'vue'

import { getRandomId } from '@/utils/random-utils'
import DsfrPagination, { type Page } from '../DsfrPagination/DsfrPagination.vue'
import type { DsfrDataTableProps } from './DsfrDataTable.types'

const props = withDefaults(defineProps<DsfrDataTableProps>(), {
  id: () => getRandomId('table'),
  topActionsRow: () => [],
  bottomActionsRow: () => [],
  currentPage: 0,
  rowsPerPage: 10,
  rowKey: 0,
  paginationOptions: () => [
    5,
    10,
    20,
  ],
})

const emit = defineEmits<{
  'update:current-page': [page: number]
}>()

const selection = defineModel<string[]>('selection', { default: [] })
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

function selectAll (bool: boolean) {
  if (bool) {
    const keyIndex = props.headersRow.findIndex(header => (header as DsfrDataTableHeaderCellObject).key ?? header)
    selection.value = finalRows.value.map(row => row[keyIndex] as string)
  }
  selection.value!.length = 0
}
const wholeSelection = ref(false)
function checkSelection () {
  wholeSelection.value = selection.value.length === finalRows.value.length
}

function onPaginationOptionsChange () {
  emit('update:current-page', 0)
  wholeSelection.value = false
  selection.value.length = 0
}
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
                  <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <!-- @vue-expect-error TS2538 -->
                    <input
                      :id="`table-select--${id}-all`"
                      :checked="wholeSelection"
                      type="checkbox"
                      @input="selectAll($event.target.checked)"
                    >
                    <label
                      class="fr-label"
                      :for="`table-select--${id}-all`"
                    >
                      Sélectionner tout
                    </label>
                  </div>
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
                      :id="`row-select-${id}-${idx}`"
                      v-model="selection"
                      :value="rows[idx][rowKey] ?? `row-${idx}`"
                      type="checkbox"
                      @change="checkSelection()"
                    >
                    <label
                      class="fr-label"
                      :for="`row-select-${id}-${idx}`"
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
    <div
      :class="bottomActionBarClass"
    >
      <slot name="pagination">
        <template
          v-if="pagination && !$slots.pagination"
        >
          <div
            class="flex  justify-between  items-center"
            :class="paginationWrapperClass"
          >
            <div class="flex  gap-2  items-center">
              <label
                class="fr-label"
                for="pagination-options"
              >
                Résultats par page :
              </label>
              <select
                id="pagination-options"
                v-model="rowsPerPage"
                class="fr-select"
                @change="onPaginationOptionsChange()"
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
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
.gap-2 {
  gap: 0.5rem;
}
:deep(.fr-pagination__link) {
  margin-bottom: 0 !important;
}
</style>
