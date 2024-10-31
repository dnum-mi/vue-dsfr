<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableRow, { type DsfrTableRowProps } from './DsfrTableRow.vue'
import type { DsfrTableProps } from './DsfrTable.types'

export type { DsfrTableProps }

const props = withDefaults(defineProps<DsfrTableProps>(), {
  headers: () => [],
  rows: () => [],
  rowKey: undefined,
  currentPage: 1,
  resultsDisplayed: 10,
})

// Permet aux utilisateurs d'utiliser une fonction afin de charger des résultats au changement de page
const emit = defineEmits<{ (event: 'update:currentPage'): void }>()

const getRowData = (row: DsfrTableProps['rows']) => {
  return Array.isArray(row) ? row : (row as unknown as DsfrTableRowProps).rowData
}

const currentPage = ref(props.currentPage)
const optionSelected = ref(props.resultsDisplayed)
const pageCount = ref(
  props.rows.length > optionSelected.value
    ? Math.ceil(props.rows.length / optionSelected.value)
    : 1,
)
const paginationOptions = [5, 10, 25, 50, 100]
const returnLowestLimit = () => currentPage.value * optionSelected.value - optionSelected.value
const returnHighestLimit = () => currentPage.value * optionSelected.value

watch(
  () => optionSelected.value,
  (newVal) => {
    pageCount.value =
      props.rows.length > optionSelected.value ? Math.ceil(props.rows.length / newVal) : 1
  },
)

const truncatedResults = computed(() => {
  if (props.pagination) {
    return props.rows.slice(returnLowestLimit(), returnHighestLimit())
  }

  return props.rows
})

const goFirstPage = () => {
  currentPage.value = 1
  emit('update:currentPage')
}
const goPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
    emit('update:currentPage')
  }
}
const goNextPage = () => {
  if (currentPage.value < pageCount.value) {
    currentPage.value += 1
    emit('update:currentPage')
  }
}
const goLastPage = () => {
  currentPage.value = pageCount.value
  emit('update:currentPage')
}
</script>

<template>
  <div
    class="fr-table"
    :class="{ 'fr-table--no-caption': noCaption }"
  >
    <table>
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
            v-for="(row, i) of truncatedResults"
            :key="
              rowKey && getRowData(row as string[][])
                ? typeof rowKey === 'string'
                  ? getRowData(row as string[][])![headers.indexOf(rowKey)].toString()
                  : rowKey(getRowData(row as string[][]))
                : i
            "
            :row-data="getRowData(row as string[][])"
            :row-attrs="'rowAttrs' in row ? row.rowAttrs : {}"
          />
        </template>
        <tr v-if="pagination">
          <td :colspan="headers.length">
            <div class="flex justify-right">
              <div class="self-center">
                <span>Résultats par page : </span>
                <select
                  v-model="optionSelected"
                  @change="emit('update:currentPage')"
                >
                  <option
                    v-for="(option, idx) in paginationOptions"
                    :key="idx"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="flex ml-1">
                <span class="self-center">Page {{ currentPage }} sur {{ pageCount }}</span>
              </div>
              <div class="flex ml-1">
                <button
                  class="fr-icon-arrow-left-s-first-line"
                  @click="goFirstPage()"
                />
                <button
                  class="fr-icon-arrow-left-s-line"
                  @click="goPreviousPage()"
                />
                <button
                  class="fr-icon-arrow-right-s-line"
                  @click="goNextPage()"
                />
                <button
                  class="fr-icon-arrow-right-s-last-line"
                  @click="goLastPage()"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.justify-right {
  justify-content: right;
}

.ml-1 {
  margin-left: 1rem;
}

.self-center {
  align-self: center;
}
</style>
