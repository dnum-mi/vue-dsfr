<script lang="ts" setup>
import { getRandomId } from '@/utils/random-utils'

import { computed, ref } from 'vue'
import DsfrPagination from '../DsfrPagination/DsfrPagination.vue'
import VIcon from '../VIcon/VIcon.vue'

export type Page = { href?: string, label: string, title: string }

export type DsfrDataTableRow = (string | number | boolean | bigint | symbol)[]
  | Record<string | symbol | number, unknown>

export type DsfrDataTableHeaderCellObject = { key: string, label: string, headerAttrs?: Record<string, unknown> }
export type DsfrDataTableHeaderCell = (string | DsfrDataTableHeaderCellObject)

export type DsfrDataTableProps = {
  id?: string
  title: string
  rowKey?: string | number
  headersRow: DsfrDataTableHeaderCell[]
  rows: DsfrDataTableRow[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  selectableRows?: boolean
  sortableRows?: boolean | string[]
  sorted: string
  sortFn?: (a: unknown, b: unknown) => number
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  pages?: Page[]
  pagination?: boolean
  paginationOptions?: number[]
  currentPage?: number
  rowsPerPage?: number
  bottomActionBarClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  paginationWrapperClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
}

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

function defaultSortFn (a: string | DsfrDataTableRow, b: string | DsfrDataTableRow) {
  const key = props.sorted as string
  // @ts-expect-error TS7015
  if (((a as DsfrDataTableRow)[key] ?? a) < ((b as DsfrDataTableRow)[key] ?? b)) {
    return -1
  }
  // @ts-expect-error TS7015
  if (((a as DsfrDataTableRow)[key] ?? a) > ((b as DsfrDataTableRow)[key] ?? b)) {
    return 1
  }
  return 0
}

const sortedBy = defineModel<string | undefined>('sortedBy', { default: undefined })
const sortedDesc = defineModel('sortedDesc', { default: false })
function sortBy (key: string) {
  if (!props.sortableRows || (Array.isArray(props.sortableRows) && !props.sortableRows.includes(key))) {
    return
  }
  if (sortedBy.value === key) {
    if (sortedDesc.value) {
      sortedBy.value = undefined
      sortedDesc.value = false
      return
    }
    sortedDesc.value = true
    return
  }
  sortedDesc.value = false
  sortedBy.value = key
}
const sortedRows = computed(() => {
  const _sortedRows = sortedBy.value ? props.rows.slice().sort(props.sortFn ?? defaultSortFn) : props.rows.slice()
  if (sortedDesc.value) {
    _sortedRows.reverse()
  }
  return _sortedRows
})
const finalRows = computed(() => {
  const rowKeys = props.headersRow.map((header) => {
    if (typeof header !== 'object') {
      return header
    }
    return header.key
  })

  const rows = sortedRows.value.map((row) => {
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

function copyToClipboard (text: string) {
  navigator.clipboard.writeText(text)
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
                  v-for="(header, idx) of headersRow"
                  :key="typeof header === 'object' ? header.key : header"
                  scope="col"
                  v-bind="typeof header === 'object' && header.headerAttrs"
                  :tabindex="sortableRows ? 0 : undefined"
                  @click="sortBy((header as DsfrDataTableHeaderCellObject).key ?? (Array.isArray(rows[0]) ? idx : header))"
                  @keydown.enter="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                  @keydown.space="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                >
                  <div
                    :class="{ 'sortable-header': sortableRows === true || (Array.isArray(sortableRows) && sortableRows.includes((header as DsfrDataTableHeaderCellObject).key ?? header)) }"
                  >
                    <slot
                      name="header"
                      v-bind="typeof header === 'object' ? header : { key: header, label: header }"
                    >
                      {{ typeof header === 'object' ? header.label : header }}
                    </slot>
                    <span v-if="sortedBy !== ((header as DsfrDataTableHeaderCellObject).key ?? header) && (sortableRows === true || (Array.isArray(sortableRows) && sortableRows.includes((header as DsfrDataTableHeaderCellObject).key ?? header)))">
                      <VIcon
                        name="ri-sort-asc"
                        color="var(--grey-625-425)"
                      />
                    </span>
                    <span v-else-if="sortedBy === ((header as DsfrDataTableHeaderCellObject).key ?? header)">
                      <VIcon :name="sortedDesc ? 'ri-sort-desc' : 'ri-sort-asc'" />
                    </span>
                  </div>
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
                  tabindex="0"
                  @keydown.ctrl.c="copyToClipboard(typeof cell === 'object' ? cell[rowKey] : cell)"
                  @keydown.meta.c="copyToClipboard(typeof cell === 'object' ? cell[rowKey] : cell)"
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
.sortable-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
