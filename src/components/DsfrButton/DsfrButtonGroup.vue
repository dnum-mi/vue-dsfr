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
    /**
     * @deprecated Use inlineLayoutWhen instead
     */
    inline: {
      type: Boolean,
      default: false,
      deprecated: 'Use "inlineLayoutWhen" prop instead',
    },
    inlineLayoutWhen: {
      type: String,
      validator: (val) => ['always', 'never', 'sm', 'small', 'lg', 'large', 'md', 'medium', '', undefined, true, false].includes(val),
      default: 'never',
    },
    size: {
      type: String,
      validator: (val) => ['sm', 'small', 'lg', 'large', 'md', 'medium', '', undefined].includes(val),
      default: undefined,
    },
    reverse: Boolean,
    iconRight: Boolean,
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
    inlineAlways () {
      return this.inline || ['always', true].includes(this.inlineLayoutWhen)
    },
    inlineSm () {
      return ['sm', 'small'].includes(this.inlineLayoutWhen)
    },
    inlineMd () {
      return ['md', 'medium'].includes(this.inlineLayoutWhen)
    },
    inlineLg () {
      return ['lg', 'large'].includes(this.inlineLayoutWhen)
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
      'fr-btns-group--inline': inlineAlways,
      'fr-btns-group--sm': sm,
      'fr-btns-group--md': md,
      'fr-btns-group--lg': lg,
      'fr-btns-group--inline-sm': inlineSm,
      'fr-btns-group--inline-md': inlineMd,
      'fr-btns-group--inline-lg': inlineLg,
      'fr-btns-group--center': center,
      'fr-btns-group--right': right,
      'fr-btns-group--icon-right': iconRight,
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

<style src="@gouvfr/dsfr/dist/component/button/button.main.min.css"  />
