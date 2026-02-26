<script lang="ts" setup>
import type { DsfrDataTableColumn, DsfrDataTableHeaderCell, DsfrDataTableHeaderCellObject, DsfrDataTableProps, DsfrDataTableRow } from './DsfrDataTable.types'
import type { Page } from '../DsfrPagination/DsfrPagination.types'

import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'
import DsfrPagination from '../DsfrPagination/DsfrPagination.vue'
import DsfrSelect from '../DsfrSelect/DsfrSelect.vue'

import { useRandomId } from '@/utils/random-utils'

export type { DsfrDataTableColumn, DsfrDataTableHeaderCell, DsfrDataTableHeaderCellObject, DsfrDataTableProps, DsfrDataTableRow, Page }

const props = withDefaults(defineProps<DsfrDataTableProps>(), {
  id: () => useRandomId('table'),
  headersRow: () => [],
  rows: () => [],
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
  paginationSelectLabel: 'Nombre de lignes par page',
})

const emit = defineEmits<{
  'update:current-page': [page: number]
}>()

defineSlots<{
  /** Slot pour le contenu de l'en-tête du tableau (au-dessus de la table dans div.fr-table div.fr-table__header) */
  tableTopBar: () => any
  /** Slot pour le détail dans l'en-tête du tableau (potentiellement premier élément de div.fr-table__header) */
  tableTopBarDetail: () => any
  /** Slot pour la barre de recherche dans l'en-tête du tableau (potentiellement second élément de div.fr-table__header) */
  tableTopBarSearch: () => any
  /** Slot pour les boutons dans l'en-tête du tableau (potentiellement troisième élément de div.fr-table__header) */
  tableTopBarButtons: () => any
  /** Slot pour les boutons segmentés dans l'en-tête du tableau destinés aux actions de groupe (selection) (potentiellement quatrième élément de div.fr-table__header) */
  tableTopBarSegmented: () => any
  /** Slot pour la description dans la légende du tableau (dans caption div.fr-table__caption__desc)*/
  captionDescription: () => any
  /** Slot pour le contenu de l'en-tête du tableau (`<thead>`) */
  thead: () => any
  /** Slot pour le contenu des cellules d'en-tête (<th>). Reçoit les props `key` et `label` */
  header: { key: string | number, label: string }
  /** Slot pour le contenu du corps du tableau (`<tbody>`) */
  tbody: () => any
  /** Slot pour le contenu personnalisé des cellules. Reçoit les props `colKey` et `cell` */
  cell: { colKey: string | number, cell: string | DsfrDataTableRow }
  /** Slot pour le contenu du pied de page du tableau (en dessous de la table div.fr-table__footer) */
  tableBottomBar: () => any
  /** Slot pour la pagination dans le pied de page du tableau (dans div.fr-table__footer */
  tableBottomBarPagination: () => any
  /** Slot pour les actions dans le pied de page du tableau destinés aux actions globales (ensemble du tableau) */
  tableBottomBarActions: () => any
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
const computedHeadersRow = computed(() => {
  if (props.columns && props.columns.length > 0) {
    return props.columns.map((column) => {
      return {
        key: column.key ?? column.label as string,
        label: column.label,
        headerAttrs: column.attrs,
      }
    })
  }
  return props.headersRow.map((header) => {
    if (typeof header === 'object') {
      return header
    }
    return {
      key: header,
      label: header,
    }
  })
})
const rowKeys = computed(() => computedHeadersRow.value.map((header) => {
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
    selection.value = finalRows.value.map(row => row[rowKeyIndex.value] as string)
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
      v-if="$slots.tableTopBar || $slots.tableTopBarDetail || $slots.tableTopBarSearch || $slots.tableTopBarButtons || $slots.tableTopBarSegmented || topBarDetail || topBarButtons"
      class="fr-table__header"
    >
      <slot
        name="tableTopBar"
      >
        <slot
          name="tableTopBarDetail"
          class="fr-table__detail"
        >
          <p
            v-if="topBarDetail"
            class="fr-table__detail"
          >
            {{ topBarDetail }}
          </p>
        </slot>
        <slot name="tableTopBarSearch" />
        <slot
          name="tableTopBarButtons"
        >
          <DsfrButtonGroup
            v-if="topBarButtons"
            :buttons="topBarButtons"
            :size="topBarButtonsSize"
          />
        </slot>
        <slot name="tableTopBarSegmented" />
      </slot>
    </div>
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
                v-if="captionDetail || $slots.captionDescription"
                class="fr-table__caption__desc"
              >
                <slot name="captionDescription">
                  {{ captionDetail }}
                </slot>
              </div>
            </caption>
            <thead>
              <slot name="thead">
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
                    v-for="(header, idx) of computedHeadersRow"
                    :key="header.key"
                    scope="col"
                    :role="columns?.[idx]?.isHeader ? 'columnheader' : undefined"
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
                        class="fr-btn--sort fr-btn fr-btn-sm"
                        :class="{ 'fr-btn--sort-asc': getAriaSort(header, idx) === 'ascending', 'fr-btn--sort-desc': getAriaSort(header, idx) === 'descending' }"
                        @click="sortBy((header as DsfrDataTableHeaderCellObject).key ?? (Array.isArray(rows[0]) ? idx : header))"
                        @keydown.enter="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                        @keydown.space="sortBy((header as DsfrDataTableHeaderCellObject).key ?? header)"
                      >
                        Trier
                      </button>
                    </div>
                  </th>
                </tr>
              </slot>
            </thead>
            <tbody>
              <slot name="tbody">
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
                  <template
                    v-for="(cell, cellIdx) of row"
                    :key="cell[rowKeyIndex]"
                  >
                    <component
                      :is="columns?.[cellIdx]?.isHeader ? 'th' : 'td'"
                      :scope="columns?.[cellIdx]?.isHeader ? 'row' : undefined"
                      tabindex="0"
                      @keydown.ctrl.c="copyToClipboard(typeof cell === 'object' ? cell[rowKeyIndex] : cell)"
                      @keydown.meta.c="copyToClipboard(typeof cell === 'object' ? cell[rowKeyIndex] : cell)"
                    >
                      <slot
                        name="cell"
                        v-bind="{
                          colKey: computedHeadersRow[cellIdx]?.key,
                          cell,
                        }"
                      >
                        <!-- @vue-expect-error TS2538 -->
                        {{ typeof cell === 'object' ? cell[rowKeyIndex] : cell }}
                      </slot>
                    </component>
                  </template>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      v-if="bottomActionBarClass || $slots.tableBottomBarPagination || $slots.tableBottomBar || $slots.tableBottomBarActions || bottomBarButtons || pagination || bottomBarDetail"
      class="fr-table__footer"
      :class="bottomActionBarClass"
    >
      <slot
        name="tableBottomBar"
      >
        <slot name="tableBottomBarPagination">
          <template
            v-if="pagination && !$slots.tableBottomBarPagination"
          >
            <div class="fr-table__footer--start">
              <p
                v-if="bottomBarDetail"
                class="fr-table__detail"
              >
                {{ bottomBarDetail }}
              </p>
              <div
                class=""
                :class="paginationWrapperClass"
              >
                <DsfrSelect
                  v-if="paginationOptions && paginationOptions.length > 0"
                  v-model="rowsPerPage"
                  :options="paginationOptions"
                  :label="paginationSelectLabel"
                  :hide-label="true"
                  :default-unselected-text="paginationSelectLabel"

                  @update:model-value="onPaginationOptionsChange()"
                />
              </div>
              <div class="fr-table__footer--middle">
                <DsfrPagination
                  v-model:current-page="currentPage"
                  :pages="pages"
                  :aria-label="paginationAriaLabel"
                  @update:current-page="selection.length = 0"
                />
              </div>
              <div
                v-if="bottomBarButtons || $slots.tableBottomBarActions"
                class="fr-table__footer--end"
              >
                <slot name="tableBottomBarActions">
                  <DsfrButtonGroup
                    v-if="bottomBarButtons"
                    :buttons="bottomBarButtons"
                    :size="bottomBarButtonsSize"
                  />
                </slot>
              </div>
            </div>
          </template>
        </slot>
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
.fr-table__wrapper {
position: relative;
}

.fr-table caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
