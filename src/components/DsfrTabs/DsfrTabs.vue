<script>
import { defineComponent } from 'vue'

// import '@gouvfr/dsfr/dist/component/tab/tab.module.js'

import { getRandomId } from '../../utils/random-utils.js'

import DsfrTabItem from './DsfrTabItem.vue'
import DsfrTabContent from './DsfrTabContent.vue'

export default defineComponent({
  name: 'DsfrTabs',

  components: {
    DsfrTabContent,
    DsfrTabItem,
  },

  props: {
    tabListName: {
      type: String,
      required: true,
    },
    tabTitles: {
      type: Array,
      required: true,
    },
    tabContents: {
      type: Array,
      default: () => [],
    },
    initialSelectedIndex: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  emits: ['select-tab'],

  data () {
    return {
      getRandomId,
      selectedIndex: this.initialSelectedIndex || 0,
      generatedIds: {},
      asc: true,
    }
  },

  methods: {
    isSelected (idx) {
      return this.selectedIndex === idx
    },
    getIdFromIndex (idx) {
      if (this.generatedIds[idx]) {
        return this.generatedIds[idx]
      }
      const id = getRandomId('tab')
      this.generatedIds[idx] = id
      return id
    },
    async selectIndex (idx) {
      this.asc = idx > this.selectedIndex
      this.selectedIndex = idx
      this.$emit('select-tab', idx)
    },
    async selectPrevious () {
      const newIndex = this.selectedIndex === 0 ? this.tabTitles.length - 1 : this.selectedIndex - 1
      this.selectIndex(newIndex)
    },
    async selectNext () {
      const newIndex = this.selectedIndex === this.tabTitles.length - 1 ? 0 : this.selectedIndex + 1
      this.selectIndex(newIndex)
    },
    async selectFirst () {
      this.selectIndex(0)
    },
    async selectLast () {
      this.selectIndex(this.tabTitles.length - 1)
    },
  },
})
</script>

<template>
  <div class="fr-tabs">
    <ul
      class="fr-tabs__list"
      role="tablist"
      :aria-label="tabListName"
    >
      <!-- @slot Slot nommé `tab-items` pour y mettre des Titres d’onglets personnalisés. S’il est rempli, la props `tabTitles° n’aura aucun effet -->
      <slot name="tab-items">
        <DsfrTabItem
          v-for="(tabTitle, index) in tabTitles"
          :key="index"
          :icon="tabTitle.icon"
          :panel-id="tabTitle.panelId || `${getIdFromIndex(index)}-panel`"
          :tab-id="tabTitle.tabId || getIdFromIndex(index)"
          :selected="isSelected(index)"
          @click="selectIndex(index)"
          @next="selectNext()"
          @previous="selectPrevious()"
          @first="selectFirst()"
          @last="selectLast()"
        >
          {{ tabTitle.title }}
        </DsfrTabItem>
      </slot>
    </ul>

    <DsfrTabContent
      v-for="(tabContent, index) in tabContents"
      :key="index"
      :panel-id="tabTitles[index].panelId || `${getIdFromIndex(index)}-panel`"
      :tab-id="tabTitles[index].tabId || getIdFromIndex(index)"
      :selected="isSelected(index)"
      :asc="asc"
    >
      <p>
        {{ tabContent }}
      </p>
    </DsfrTabContent>

    <!-- @slot Slot par défaut pour le contenu des onglets -->
    <slot />
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/tab/tab.main.min.css" />
