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
    >
      <!-- données de test -->
      <p>
        {{ tabContent }}
      </p>
    </DsfrTabContent>
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
      required: true,
    },
  },

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
    },
  },
}
</script>

<style scoped>
.fr-tabs {
  --ul-type: none;
  --ol-type: none;
  --ul-start: 0;
  --ol-start: 0;
  --xl-block: 0;
  --li-bottom: 0;
  --ol-content: none;
  --link-underline: none;
  --link-blank-font: none;
  --link-blank-content: none;
  position: relative;
  overflow: hidden;
  margin-top: -4px;
  padding-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: height 0.3s;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 3.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    box-shadow: inset 1px -1px 0 0 var(--g300), inset -1px 0 0 var(--g300);
  }
}

.fr-tabs__list {
  display: flex;
  align-items: flex-end;
  overflow-x: auto;
  width: 100%;
  height: 3rem;
  position: absolute;
  margin: -4px 0;
  padding: 4px 0.5rem;

  &::after {
    content: "";
    display: block;
    flex: 1 1 auto;
    height: 1px;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
}

.fr-tabs__list::after {
  box-shadow: 0 1px 0 0 var(--g300);
}

@media (min-width: 48em) {
  .fr-tabs {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
