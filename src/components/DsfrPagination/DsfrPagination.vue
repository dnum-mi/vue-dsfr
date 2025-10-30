<script lang="ts" setup>
import type { DsfrPaginationProps, Page } from './DsfrPagination.types'

import { computed } from 'vue'

export type { DsfrPaginationProps, Page }

const props = withDefaults(defineProps<DsfrPaginationProps>(), {
  truncLimit: 5,
  currentPage: 0,
  firstPageTitle: 'Première page',
  lastPageTitle: 'Dernière page',
  nextPageTitle: 'Page suivante',
  prevPageTitle: 'Page précédente',
  ariaLabel: 'Pagination',
})

const emit = defineEmits<{ (e: 'update:current-page', payload: number): void }>()

const startIndex = computed(() => {
  return Math.min(props.pages.length - 1 - props.truncLimit, Math.max(props.currentPage - (props.truncLimit - props.truncLimit % 2) / 2, 0))
})
const endIndex = computed(() => {
  return Math.min(props.pages.length - 1, startIndex.value + props.truncLimit)
})
const displayedPages = computed(() => {
  return props.pages.length > props.truncLimit ? props.pages.slice(startIndex.value, endIndex.value + 1) : props.pages
})

const updatePage = (index: number) => emit('update:current-page', index)
const toPage = (index: number) => updatePage(index)
const tofirstPage = () => toPage(0)
const toPreviousPage = () => toPage(Math.max(0, props.currentPage - 1))
const toNextPage = () => toPage(Math.min(props.pages.length - 1, props.currentPage + 1))
const toLastPage = () => toPage(props.pages.length - 1)
const isCurrentPage = (page: Page) => props.pages.indexOf(page) === props.currentPage
</script>

<template>
  <nav
    role="navigation"
    class="fr-pagination"
    :aria-label="ariaLabel"
  >
    <ul class="fr-pagination__list">
      <li>
        <a
          :href="pages[0]?.href"
          class="fr-pagination__link fr-pagination__link--first"
          :class="{ 'fr-pagination__link--disabled': currentPage === 0 }"
          :aria-disabled="currentPage === 0 ? true : undefined"
          @click.prevent="currentPage === 0 ? null : tofirstPage()"
        >
          <span class="fr-sr-only">{{ firstPageTitle }}</span>
        </a>
      </li>
      <li>
        <a
          :href="pages[Math.max(currentPage - 1, 0)]?.href"
          class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label"
          :class="{ 'fr-pagination__link--disabled': currentPage === 0 }"
          :aria-disabled="currentPage === 0 ? true : undefined"
          @click.prevent="currentPage === 0 ? null : toPreviousPage()"
        >{{ prevPageTitle }}</a>
      </li>
      <li
        v-for="(page, idx) in displayedPages"
        :key="idx"
      >
        <a
          :href="page?.href"
          class="fr-pagination__link fr-unhidden-lg"
          :aria-current="isCurrentPage(page) ? 'page' : undefined"
          @click.prevent="toPage(pages.indexOf(page))"
        >
          <span v-if="displayedPages.indexOf(page) === 0 && startIndex > 0 ">...</span>
          {{ page.label }}
          <span v-if="displayedPages.indexOf(page) === displayedPages.length - 1 && endIndex < pages.length - 1">...</span>
        </a>
      </li>
      <li>
        <a
          :href="pages[Math.min(currentPage + 1, pages.length - 1)]?.href"
          class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label"
          :class="{ 'fr-pagination__link--disabled': currentPage === pages.length - 1 }"
          :disabled="currentPage === pages.length - 1 ? true : undefined"
          :aria-disabled="currentPage === pages.length - 1 ? true : undefined"
          @click.prevent="currentPage === pages.length - 1 ? null : toNextPage()"
        >{{ nextPageTitle }}</a>
      </li>
      <li>
        <a
          :href="pages.at(-1)?.href"
          class="fr-pagination__link fr-pagination__link--last"
          :class="{ 'fr-pagination__link--disabled': currentPage === pages.length - 1 }"
          :disabled="currentPage === pages.length - 1 ? true : undefined"
          :aria-disabled="currentPage === pages.length - 1 ? true : undefined"
          @click.prevent="currentPage === pages.length - 1 ? null : toLastPage()"
        >
          <span class="fr-sr-only">{{ lastPageTitle }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.fr-pagination__link:hover {
  background-image: linear-gradient(
    deg, rgba(224,224,224,0.5), rgba(224,224,224,0.5));
}
.fr-pagination__link--disabled {
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
</style>
