<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

export default defineComponent({
  name: 'DsfrTableHeader',

  components: {
    VIcon,
  },

  props: {
    header: {
      type: String,
      default: '',
    },
    headerAttrs: {
      type: Object,
      default: () => ({}),
    },
    icon: {
      type: Object,
      default: undefined,
    },
  },
})
</script>

<template>
  <th
    v-bind="headerAttrs"
  >
    {{ header }}
    <VIcon
      v-if="icon && icon.name"
      v-bind="icon"
    />
  </th>
</template>
