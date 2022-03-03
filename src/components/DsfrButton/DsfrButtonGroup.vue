<script>
import { defineComponent } from 'vue'
import DsfrButton from './DsfrButton.vue'

export default defineComponent({
  name: 'DsfrButtonGroup',
  components: {
    DsfrButton,
  },

  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
    inline: Boolean,
    size: {
      type: String,
      validator: (val) => ['sm', 'small', 'lg', 'large', 'md', 'medium', '', undefined].includes(val),
      default: undefined,
    },
    reverse: Boolean,
    align: {
      type: String,
      validator: (val) => ['right', 'center', '', undefined].includes(val),
      default: undefined,
    },
  },

  computed: {
    sm () {
      return ['sm', 'small'].includes(this.size)
    },
    md () {
      return ['md', 'medium'].includes(this.size)
    },
    lg () {
      return ['lg', 'large'].includes(this.size)
    },
    center () {
      return this.align === 'center'
    },
    right () {
      return this.align === 'right'
    },
  },
})
</script>

<template>
  <ul
    class="fr-btns-group"
    :class="{
      'fr-btns-group--inline': inline,
      'fr-btns-group--inline-sm': sm,
      'fr-btns-group--inline-md': md,
      'fr-btns-group--inline-lg': lg,
      'fr-btns-group--center': center,
      'fr-btns-group--right': right,
      'fr-btns-group--inline-reverse': reverse,
    }"
    data-testid="fr-btns"
  >
    <li
      v-for="({ onClick, ...button }, i) in buttons"
      :key="i"
    >
      <DsfrButton
        v-bind="button"
        @click="onClick"
      />
    </li>
  </ul>
</template>

<style src="@gouvfr/dsfr/dist/component/button/button.main.css"  />
