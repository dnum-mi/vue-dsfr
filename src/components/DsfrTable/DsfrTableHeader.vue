<script>
export default {
  name: 'DsfrTableHeader',

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
}
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
