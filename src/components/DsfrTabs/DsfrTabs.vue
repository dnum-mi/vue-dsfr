<script lang="ts" setup>
import { ref, onMounted, onUnmounted, reactive, type Ref } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import DsfrTabItem, { DsfrTabItemProps } from './DsfrTabItem.vue'
import DsfrTabContent from './DsfrTabContent.vue'

const props = withDefaults(defineProps<{
  tabListName: string
  tabTitles:(DsfrTabItemProps & { title: string })[]
  tabContents?: string[]
  initialSelectedIndex?: number
}>(), {
  tabContents: () => [],
  initialSelectedIndex: 0,
})

const emit = defineEmits<{(e: 'select-tab', payload: number): void}>()

const selectedIndex = ref(props.initialSelectedIndex || 0)
const generatedIds: Record<string, string> = reactive({})
const asc = ref(true)
const resizeObserver: Ref<ResizeObserver | null> = ref(null)
const $el: Ref<HTMLElement | null> = ref(null)
const tablist: Ref<HTMLUListElement | null> = ref(null)

onMounted(() => {
  /*
    * Need to use a resize-observer as tab-content height can
    * change according to its inner components.
    */
  if (window.ResizeObserver) {
    resizeObserver.value = new window.ResizeObserver(() => {
      renderTabs()
    })
  }

  $el.value?.querySelectorAll('.fr-tabs__panel').forEach((element) => {
    if (element) {
      resizeObserver.value?.observe(element)
    }
  })
})

onUnmounted(() => {
  $el.value?.querySelectorAll('.fr-tabs__panel').forEach((element) => {
    if (element) {
      resizeObserver.value?.unobserve(element)
    }
  })
})

const isSelected = (idx: number) => {
  return selectedIndex.value === idx
}

/*
 * Need to reimplement tab-height calc
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/component/tab/script/tab/tabs-group.js#L117
 */
const renderTabs = () => {
  if (selectedIndex.value < 0) {
    return
  }
  if (!tablist.value || !tablist.value.offsetHeight) {
    return
  }
  const tablistHeight = tablist.value.offsetHeight
  // Need to manually select tabs-content in case of manual slot filling
  const selectedTab = $el.value?.querySelectorAll('.fr-tabs__panel')[selectedIndex.value]
  if (!selectedTab || !(selectedTab as HTMLElement).offsetHeight) {
    return
  }
  const selectedTabHeight = (selectedTab as HTMLElement).offsetHeight

  $el.value?.style.setProperty('--tabs-height', (tablistHeight + selectedTabHeight) + 'px')
}

const getIdFromIndex = (idx: number) => {
  if (generatedIds[idx]) {
    return generatedIds[idx]
  }
  const id = getRandomId('tab')
  generatedIds[idx] = id
  return id
}

const selectIndex = async (idx: number) => {
  asc.value = idx > selectedIndex.value
  selectedIndex.value = idx
  emit('select-tab', idx)
}
const selectPrevious = async () => {
  const newIndex = selectedIndex.value === 0 ? props.tabTitles.length - 1 : selectedIndex.value - 1
  await selectIndex(newIndex)
}
const selectNext = async () => {
  const newIndex = selectedIndex.value === props.tabTitles.length - 1 ? 0 : selectedIndex.value + 1
  await selectIndex(newIndex)
}
const selectFirst = async () => {
  await selectIndex(0)
}
const selectLast = async () => {
  await selectIndex(props.tabTitles.length - 1)
}
</script>

<template>
  <div
    ref="$el"
    class="fr-tabs"
  >
    <ul
      ref="tablist"
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
      :panel-id="tabTitles?.[index]?.panelId || `${getIdFromIndex(index)}-panel`"
      :tab-id="tabTitles?.[index]?.tabId || getIdFromIndex(index)"
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
