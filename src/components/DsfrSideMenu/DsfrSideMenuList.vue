<script>
import { defineComponent } from 'vue'

import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuButton from './DsfrSideMenuButton.vue'
import { useCollapsable } from '@/composables'

export default defineComponent({
  name: 'DsfrSideMenuList',

  components: {
    DsfrSideMenuListItem,
    DsfrSideMenuButton,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    collapsable: Boolean,
    expanded: Boolean,
    menuItems: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['toggle-expand'],

  setup () {
    const {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    } = useCollapsable()

    return {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    }
  },

  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.doExpand(newValue)
      }
    },
  },

  mounted () {
    // Accordion can be expanded by default
    // We need to trigger the expand animation at mounted
    if (this.expanded) {
      this.doExpand(true)
    }
  },

  methods: {
    isExternalLink (to) {
      return typeof to === 'string' && to.startsWith('http')
    },
    is (to) {
      return this.isExternalLink(to) ? 'a' : 'RouterLink'
    },
    linkProps (to) {
      return { [this.isExternalLink(to) ? 'href' : 'to']: to }
    },
  },
})
</script>

<template>
  <div
    :id="id"
    ref="collapse"
    :class="{
      'fr-collapse': collapsable,
      'fr-collapsing': collapsing,
      'fr-collapse--expanded': cssExpanded
    }"
    @transitionend="onTransitionEnd(expanded)"
  >
    <ul
      class="fr-sidemenu__list"
    >
      <!-- @slot Slot par défaut pour le contenu d’une liste du menu latéral -->
      <slot />

      <DsfrSideMenuListItem
        v-for="(menuItem, i) of menuItems"
        :key="i"
        :active="menuItem.active"
      >
        <component
          :is="is(menuItem.to)"
          v-if="!menuItem.menuItems"
          class="fr-sidemenu__link"
          :aria-current="menuItem.active ? 'page' : undefined"
          v-bind="linkProps(menuItem.to)"
        >
          {{ menuItem.text }}
        </component>

        <template v-if="menuItem.menuItems">
          <DsfrSideMenuButton
            :active="!!menuItem.active"
            :expanded="!!menuItem.expanded"
            :control-id="menuItem.id"
            @toggle-expand="$emit('toggle-expand', $event)"
          >
            {{ menuItem.text }}
          </DsfrSideMenuButton>
          <DsfrSideMenuList
            v-if="menuItem.menuItems"
            :id="menuItem.id"
            collapsable
            :expanded="menuItem.expanded"
            :menu-items="menuItem.menuItems"
            @toggle-expand="$emit('toggle-expand', $event)"
          />
        </template>
      </DsfrSideMenuListItem>
    </ul>
  </div>
</template>

<style lang="css">
/* Missing in DSFR */
.fr-sidemenu .fr-accordion .fr-collapse {
  padding: 0 1rem 0 1rem;
}
.fr-sidemenu .fr-accordion .fr-collapse--expanded {
  padding-bottom: 0;
  padding-top: 0;
}
</style>
