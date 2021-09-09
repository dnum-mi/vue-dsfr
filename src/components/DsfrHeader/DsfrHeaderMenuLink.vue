<template>
  <component
    :is="is"
    class="fr-link"
    :to="to"
    :href="href"
    :class="{
      'flex': true,
      'reverse': iconRight,
    }"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconRight,
      }"
    />
    <span>{{ label }}</span>
  </component>
</template>

<script>
export default {
  name: 'DsfrHeaderMenuLink',
  props: {
    path: {
      type: String,
      default: '',
    },
    iconRight: Boolean,
    icon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    is () {
      return this.path.startsWith('http') ? 'a' : 'router-link'
    },
    to () {
      return this.path.startsWith('http') ? undefined : this.path
    },
    href () {
      return this.path.startsWith('http') ? this.path : undefined
    },
  },
}
</script>

<style scoped>

.icon-left {
  margin-right: 0.5rem
}
.icon-right {
  margin-left: 0.5rem
}

.flex {
  display: flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
