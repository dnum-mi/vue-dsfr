<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import DsfrTableRow, { type DsfrTableRowProps } from './DsfrTableRow.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import { type DsfrTableHeadersProps } from './DsfrTableHeaders.vue'

const props = withDefaults(defineProps<{
  title: string
  headers?: DsfrTableHeadersProps
  rows?:(DsfrTableRowProps | string[])[]
  noCaption?: boolean
  pagination?: boolean
  defaultCurrentPage?: number
  defaultOptionSelected?: number
}>(), {
  headers: () => [],
  rows: () => [],
  defaultCurrentPage: 1,
  defaultOptionSelected: 10,
})

const getRowData = (row: (DsfrTableRowProps | string[])) => {
  return Array.isArray(row) ? row : row.rowData
}

const currentPage = ref(props.defaultCurrentPage)
const optionSelected = ref(props.defaultOptionSelected)
const pageCount = ref(props.rows.length > optionSelected.value ? Math.ceil(props.rows.length / optionSelected.value) : 1)
const paginationOptions = [5, 10, 25, 50, 100]
const returnLowestLimit = () => currentPage.value * optionSelected.value - optionSelected.value
const returnHighestLimit = () => currentPage.value * optionSelected.value

watch(() => optionSelected.value, (newVal, OldVal) => {
  pageCount.value = props.rows.length > optionSelected.value ? Math.ceil(props.rows.length / newVal) : 1
})

const truncatedResults = computed(() => {
    if(props.pagination) {
      return props.rows.slice(returnLowestLimit(), returnHighestLimit())
    }

    return props.rows;
})

const goFirstPage = () => { currentPage.value = 1 }
const goPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}
const goNextPage = () => {
  if (currentPage.value < pageCount.value) {
    currentPage.value += 1
  }
}
const goLastPage = () => { currentPage.value = pageCount.value }
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
            v-for="(row, i) of truncatedResults"
            :key="i"
            :row-data="getRowData(row)"
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
              <div class="flex  ml-1">
                <span class="self-center">Page {{ currentPage }} sur {{ pageCount }}</span>
              </div>
              <div class="flex   ml-1">
                <button
                  class="fr-icon-arrow-left-s-first-line"
                  @click="goFirstPage()"
                />
                <button
                  class="fr-icon-arrow-left-s-line-double"
                  @click="goPreviousPage()"
                />
                <button
                  class="fr-icon-arrow-right-s-line-double"
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
