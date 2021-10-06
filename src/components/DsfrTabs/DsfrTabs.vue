<template>
  <div class="fr-tabs">
    <ul
      class="fr-tabs__list"
      role="tablist"
      :aria-label="tabListName"
    >
      <DsfrTabItem
        v-for="(tabTitle, index) in tabTitles"
        :key="index"
        :icon="tabTitle.icon"
        :panel-id="`${getIdFromIndex(index)}-panel`"
        :tab-id="tabTitle.id || getIdFromIndex(index)"
        :selected="isSelected(index)"
        @click="selectIndex(index)"
      >
        {{ tabTitle.title }}
      </DsfrTabItem>
    </ul>
    <DsfrTabContent
      v-for="(tabContent, index) in tabContents"
      :key="index"
      :panel-id="`${getIdFromIndex(index)}-panel`"
      :tab-id="getIdFromIndex(index)"
      :selected="isSelected(index)"
      :asc="asc"
    >
      <!-- données de test -->
      <p>
        {{ tabContent }}
      </p>
    </DsfrTabContent>
    <slot />
  </div>
</template>

<script>
import { getRandomId } from '../../utils/random-utils.js'

import DsfrTabItem from './DsfrTabItem.vue'
import DsfrTabContent from './DsfrTabContent.vue'
export default {
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
  },

  emits: ['select-tab'],

  data () {
    return {
      getRandomId,
      selectedIndex: 0,
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
      const id = getRandomId('tabpanel')
      this.generatedIds[idx] = id
      return id
    },
    async selectIndex (idx) {
      this.asc = idx > this.selectedIndex
      this.selectedIndex = idx
      this.$emit('select-tab', idx)
    },
  },
}
</script>

<style src="./tabs.css" />
