<script>
import { defineComponent } from 'vue'

import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuButton from './DsfrSideMenuButton.vue'

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

  data () {
    return {
      collapsing: false,
    }
  },

  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === true) {
          // unbound
          // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L33
          this.$refs.collapse.style.setProperty('--collapse-max-height', 'none')
        }
        this.collapsing = true
        this.adjust()
      }
    },
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
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
     */
    adjust () {
      this.$refs.collapse.style.setProperty('--collapser', 'none')
      const height = this.$refs.collapse.offsetHeight
      this.$refs.collapse.style.setProperty('--collapse', -height + 'px')
      this.$refs.collapse.style.setProperty('--collapser', '')
    },
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L25
     */
    onTransitionEnd () {
      this.collapsing = false
      if (this.expanded === false) {
        this.$refs.collapse.style.removeProperty('--collapse-max-height')
      }
    },
  },
})
</script>

<template>
  <div
    ref="collapse"
    :class="{
      'fr-collapse': collapsable,
      'fr-collapsing': collapsing,
      'fr-collapse--expanded': expanded
    }"
    @transitionend="onTransitionEnd"
  >
    <ul
      :id="id"
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
