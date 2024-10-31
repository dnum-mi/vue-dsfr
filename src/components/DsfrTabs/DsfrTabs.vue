<script lang="ts" setup>
import { computed, onMounted, onUnmounted, provide, reactive, ref, type Ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabItem from './DsfrTabItem.vue'
import { registerTabKey } from './injection-key'
import type { DsfrTabsProps } from './DsfrTabs.types'

export type { DsfrTabsProps }

const props = withDefaults(defineProps<DsfrTabsProps>(), {
  tabContents: () => [],
  tabTitles: () => [],
  modelValue: 0,
})

const emit = defineEmits<{
  'update:modelValue': [tabIndex: number]
}>()

const asc = ref(false)
const activeTab = computed({
  get: () => props.modelValue,
  set (tabIndex: number) {
    emit('update:modelValue', tabIndex)
  },
})
const tabs = ref(new Map<number, string>())
const currentIndex = ref(0)
provide(registerTabKey, (tabId: Ref<string>) => {
  const asc = ref(true)
  watch(activeTab, (newIndex, lastIndex) => {
    asc.value = newIndex > lastIndex
  })

  if ([...tabs.value.values()].includes(tabId.value)) {
    return { isVisible: computed(() => tabs.value.get(activeTab.value) === tabId.value), asc }
  }
  const myIndex = currentIndex.value++
  tabs.value.set(myIndex, tabId.value)

  const isVisible = computed(() => myIndex === activeTab.value)

  watch(tabId, () => {
    tabs.value.set(myIndex, tabId.value)
  })

  onUnmounted(() => {
    tabs.value.delete(myIndex)
  })

  return { isVisible }
})

const $el = ref<HTMLElement | null>(null)
const tablist = ref<HTMLUListElement | null>(null)

const generatedIds: Record<string, string> = reactive({})
const getIdFromIndex = (idx: number) => {
  if (generatedIds[idx]) {
    return generatedIds[idx]
  }
  const id = getRandomId('tab')
  generatedIds[idx] = id
  return id
}

const selectPrevious = async () => {
  const newIndex = activeTab.value === 0 ? props.tabTitles.length - 1 : activeTab.value - 1
  asc.value = false
  activeTab.value = newIndex
}
const selectNext = async () => {
  const newIndex = activeTab.value === props.tabTitles.length - 1 ? 0 : activeTab.value + 1
  asc.value = true
  activeTab.value = newIndex
}
const selectFirst = async () => {
  activeTab.value = 0
}
const selectLast = async () => {
  activeTab.value = props.tabTitles.length - 1
}

const tabsStyle = ref({ '--tabs-height': '100px' })

/*
* Need to reimplement tab-height calc
* @see https://github.com/GouvernementFR/dsfr/blob/main/src/component/tab/script/tab/tabs-group.js#L117
*/
const renderTabs = () => {
  if (activeTab.value < 0) {
    return
  }
  if (!tablist.value || !tablist.value.offsetHeight) {
    return
  }
  const tablistHeight = tablist.value.offsetHeight
  // Need to manually select tabs-content in case of manual slot filling
  const selectedTab = $el.value?.querySelectorAll('.fr-tabs__panel')[activeTab.value]
  if (!selectedTab || !(selectedTab as HTMLElement).offsetHeight) {
    return
  }
  const selectedTabHeight = (selectedTab as HTMLElement).offsetHeight
  tabsStyle.value['--tabs-height'] = `${tablistHeight + selectedTabHeight}px`
}

const resizeObserver = ref<ResizeObserver | null>(null)
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

defineExpose({
  renderTabs,
  selectFirst,
  selectLast,
})
</script>

<template>
  <div
    ref="$el"
    class="fr-tabs"
    :style="tabsStyle"
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
          @click="activeTab = index"
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
    >
      {{ tabContent }}
    </DsfrTabContent>

    <!-- @slot Slot par défaut pour le contenu des onglets -->
    <slot />
  </div>
</template>
