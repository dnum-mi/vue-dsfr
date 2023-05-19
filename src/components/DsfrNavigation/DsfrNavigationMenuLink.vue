<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { getRandomId } from '../../utils/random-utils'

export default defineComponent({
  name: 'DsfrNavigationMenuLink',

  components: {
    VIcon,
  },

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu-link'),
    },
    to: {
      type: [String, Object],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
  },

  emits: ['toggle-id'],

  computed: {
    isExternal () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
})
</script>

<template>
  <a
    v-if="isExternal"
    class="fr-nav__link"
    data-testid="nav-external-link"
    :href="to"
    @click="$emit('toggle-id', id)"
  >
    {{ text }}
  </a>
  <RouterLink
    v-else
    class="fr-nav__link"
    data-testid="nav-router-link"
    :to="to"
    @click="$emit('toggle-id', id)"
  >
    <VIcon
      v-if="icon"
      :name="icon"
    />
    {{ text }}
  </RouterLink>
</template>
