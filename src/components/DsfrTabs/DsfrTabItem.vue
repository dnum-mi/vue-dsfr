<template>
  <li
    role="presentation"
    class="fr-tabs__item"
  >
    <button
      :id="tabId"
      ref="button"
      :data-testid="`test-${tabId}`"
      class="fr-tabs__tab"
      :tabindex="selected ? 0 : -1"
      role="tab"
      :aria-selected="selected"
      :aria-controls="panelId"
      @click="$emit('click', $event)"
      @keydown.right="$emit('next')"
      @keydown.left="$emit('previous')"
    >
      <span
        v-if="icon"
        style="margin-left: -0.25rem; margin-right: 0.5rem; font-size: 0.95rem;"
      >
        <v-icon
          :name="icon"
        />
      </span>
      <slot />
    </button>
  </li>
</template>

<script>
export default {
  name: 'DsfrTabItem',

  props: {
    selected: Boolean,
    panelId: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: undefined,
    },
    tabId: {
      type: String,
      required: true,
    },
  },

  emits: ['click', 'next', 'previous'],

  watch: {
    selected (newValue, oldValue) {
      if (newValue) {
        this.$refs.button.focus()
      }
    },
  },
}
</script>
