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
  <ul
    :id="id"
    class="fr-sidemenu__list"
    :class="{
      'fr-collapse': collapsable,
      'fr-collapse--expanded': expanded
    }"
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
          :collapsable="true"
          :expanded="menuItem.expanded"
          :menu-items="menuItem.menuItems"
          @toggle-expand="$emit('toggle-expand', $event)"
        />
      </template>
    </DsfrSideMenuListItem>
  </ul>
</template>

<style src="@gouvfr/dsfr/dist/component/sidemenu/sidemenu.main.min.css" />

<style>
.fr-collapse--expanded {
  max-height: none;
}
</style>
