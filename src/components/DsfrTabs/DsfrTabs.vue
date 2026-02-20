<script lang="ts" setup>
import type { DsfrTabsProps } from './DsfrTabs.types'
import type { Ref } from 'vue'

import { computed, onMounted, onUnmounted, provide, reactive, ref, watch } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabItem from './DsfrTabItem.vue'
import { registerTabKey } from './injection-key'

export type { DsfrTabsProps }

const props = withDefaults(defineProps<DsfrTabsProps>(), {
  tabContents: () => [],
  tabTitles: () => [],
  modelValue: 0,
})

const emit = defineEmits<{
  /**
   * Émis lorsque l'onglet actif change, avec en argument l'index de l'onglet sélectionné
   */
  'update:modelValue': [tabIndex: number]
}>()

defineSlots<{
  /**
   * Slot nommé `tab-items` pour y mettre des Titres d'onglets personnalisés. S'il est rempli, la props `tabTitles` n'aura aucun effet
   */
  'tab-items'?: () => any
  /**
   * Slot par défaut pour le contenu des onglets
   */
  default?: () => any
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

const SCROLL_OFFSET = 16
const isScrolling = ref(false)
const shadowLeft = ref(false)
const shadowRight = ref(false)

const updateShadow = () => {
  const el = tablist.value
  if (!el) { return }
  const scrollLeft = Math.abs(el.scrollLeft)
  const isRtl = getComputedStyle(el).direction === 'rtl'
  const isMin = scrollLeft <= SCROLL_OFFSET
  const max = el.scrollWidth - el.clientWidth - SCROLL_OFFSET
  const isMax = scrollLeft >= max

  if (isRtl) {
    shadowRight.value = !isMin
    shadowLeft.value = !isMax
  } else {
    shadowLeft.value = !isMin
    shadowRight.value = !isMax
  }
}

const updateIsScrolling = () => {
  const el = tablist.value
  if (!el) { return }
  isScrolling.value = el.scrollWidth > el.clientWidth + SCROLL_OFFSET
  if (isScrolling.value) {
    updateShadow()
  } else {
    shadowLeft.value = false
    shadowRight.value = false
  }
}

const generatedIds: Record<string, string> = reactive({})
const getIdFromIndex = (idx: number) => {
  if (generatedIds[idx]) {
    return generatedIds[idx]
  }
  const id = useRandomId('tab')
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
      updateIsScrolling()
    })
  }

  $el.value?.querySelectorAll('.fr-tabs__panel').forEach((element) => {
    if (element) {
      resizeObserver.value?.observe(element)
    }
  })

  if (tablist.value) {
    resizeObserver.value?.observe(tablist.value)
  }
})

onUnmounted(() => {
  resizeObserver.value?.disconnect()
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
      :class="{
        'fr-tabs__shadow': isScrolling,
        'fr-tabs__shadow--left': shadowLeft,
        'fr-tabs__shadow--right': shadowRight,
      }"
      role="tablist"
      :aria-label="tabListName"
      @scroll="updateShadow"
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
