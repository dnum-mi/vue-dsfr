<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import DsfrPagination from '../DsfrPagination/DsfrPagination.vue'

import { useRandomId } from '@/utils/random-utils'

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
  sorted?: string
  sortFn?: (a: unknown, b: unknown) => number
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  captionDetail?: string
  noScroll?: boolean
  multilineTable?: boolean
  size?: 'sm' | 'md' | 'lg'
  pages?: Page[]
  pagination?: boolean
  paginationOptions?: number[]
  paginationAriaLabel?: string
  currentPage?: number
  rowsPerPage?: number
  bottomActionBarClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  paginationWrapperClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
}

const props = withDefaults(defineProps<DsfrDataTableProps>(), {
  id: () => useRandomId('table'),
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
  paginationAriaLabel: 'Pagination',
})

const emit = defineEmits<{
  'update:current-page': [page: number]
}>()

const selection = defineModel<string[]>('selection', { default: [] })
const rowsPerPage = defineModel<number>('rowsPerPage', { default: 10 })
const currentPage = defineModel<number>('currentPage', { default: 0 })
const pageCount = computed(() => Math.ceil(props.rows.length / rowsPerPage.value))
const pages = computed<Page[]>(() => props.pages ?? Array.from({ length: pageCount.value }).map((x, i) => ({ label: `${i + 1}`, title: `Page ${i + 1}`, href: `#${i + 1}` })))

const lowestLimit = computed(() => currentPage.value * rowsPerPage.value)
const highestLimit = computed(() => (currentPage.value + 1) * rowsPerPage.value)

const sortedBy = defineModel<string | undefined>('sortedBy', { default: undefined })
const sortedDesc = defineModel('sortedDesc', { default: false })
function defaultSortFn (a: string | DsfrDataTableRow, b: string | DsfrDataTableRow) {
  const key = sortedBy.value ?? props.sorted
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
function getAriaSort (header: DsfrDataTableHeaderCell, idx: number): 'ascending' | 'descending' | 'none' | undefined {
  const headerKey = (header as DsfrDataTableHeaderCellObject).key ?? (props.rows[0] && Array.isArray(props.rows[0]) ? idx : header)
  const isSortable = props.sortableRows === true || (Array.isArray(props.sortableRows) && props.sortableRows.includes(String(headerKey)))

  if (!isSortable) {
    return undefined
  }

  if (sortedBy.value === headerKey) {
    return sortedDesc.value ? 'descending' : 'ascending'
  }

  return 'none'
}
const sortedRows = computed(() => {
  const _sortedRows = sortedBy.value ? props.rows.slice().sort(props.sortFn ?? defaultSortFn) : props.rows.slice()
  if (sortedDesc.value) {
    _sortedRows.reverse()
  }
  return _sortedRows
})
const rowKeys = computed(() => props.headersRow.map((header) => {
  if (typeof header !== 'object') {
    return header
  }
  return header.key
}))
const rowKeyIndex = computed(() => rowKeys.value.findIndex(key => key === props.rowKey))

const finalRows = computed(() => {
  const rows = sortedRows.value.map((row) => {
    if (Array.isArray(row)) {
      return row
    }
    return rowKeys.value.map(key => typeof row !== 'object' ? row : row[key] ?? row)
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
  } else {
    selection.value.length = 0
  }
}

const wholeSelection = computed(() => selection.value.length === finalRows.value.length)

function onPaginationOptionsChange () {
  emit('update:current-page', 0)
  selection.value.length = 0
}

function copyToClipboard (text: string) {
  navigator.clipboard.writeText(text)
}

// rendu tenant compte du JS table DSFR
const captionRef = ref<HTMLTableCaptionElement | null>(null)
const containerStyle = ref({})

let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()

  if (!captionRef.value) {
    return
  }

  const height = captionRef.value.offsetHeight

  containerStyle.value = {
    '--table-offset': `calc(${height}px + 1rem)`,
  }

  resizeObserver = new ResizeObserver(() => {
    if (!captionRef.value) {
      return
    }
    const newHeight = captionRef.value.offsetHeight
    containerStyle.value = {
      '--table-offset': `calc(${newHeight}px + 1rem)`,
    }
  })

  if (captionRef.value) {
    resizeObserver.observe(captionRef.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div
    class="fr-table"
    :class="{ 'fr-table--sm': size === 'sm', 'fr-table--lg': size === 'lg', 'fr-table--no-caption': noCaption, 'fr-table--bordered': verticalBorders, 'fr-table--no-scroll': noScroll, 'fr-table--multiline': multilineTable, 'fr-table--caption-bottom': bottomCaption && !noCaption }"
  >
    <div
      class="fr-table__wrapper"
      :style="containerStyle"
    >
      <div class="fr-table__container">
        <div class="fr-table__content">
          <table :id="id">
            <caption
              ref="captionRef"
            >
              {{ title }}
              <div
                v-if="captionDetail || $slots['caption-description']"
                class="fr-table__caption__desc"
              >
                <slot name="caption-description">
                  {{ captionDetail }}
                </slot>
              </div>
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
                  :aria-sort="getAriaSort(header, idx)"
                >
                  <div
                    class="fr-cell-sort"
                    :class="{ 'sortable-header': sortableRows === true || (Array.isArray(sortableRows) && sortableRows.includes((header as DsfrDataTableHeaderCellObject).key ?? header)) }"
                  >
                    <slot
                      name="header"
                      v-bind="typeof header === 'object' ? header : { key: header, label: header }"
                    >
                      {{ typeof header === 'object' ? header.label : header }}
                    </slot>
                    <button
                      v-if="sortableRows === true || (Array.isArray(sortableRows) && sortableRows.includes((header as DsfrDataTableHeaderCellObject).key ?? header))"
                      type="button"
                      :aria-sort="getAriaSort(header, idx)"
                      class="fr-btn--sort fr-btn fr-btn-sm"
                      @click="sortBy((header as DsfrDataTableHeaderCellObject).key ?? (Array.isArray(rows[0]) ? idx : header))"
                      @keydown.enter="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                      @keydown.space="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                    >
                      Trier
                    </button>
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
                    <input
                      :id="`row-select-${id}-${idx}`"
                      v-model="selection"
                      :value="row[rowKeyIndex] ?? `row-${idx}`"
                      type="checkbox"
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
                :for="`${id}-pagination-options`"
              >
                Résultats par page :
              </label>
              <select
                :id="`${id}-pagination-options`"
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
              :aria-label="paginationAriaLabel"
              @update:current-page="selection.length = 0"
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
.fr-table {
  position: relative;
  height: 100%;
}

.fr-table caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
