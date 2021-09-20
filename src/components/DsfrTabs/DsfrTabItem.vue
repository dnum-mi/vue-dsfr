<template>
  <li
    role="presentation"
    class="fr-tabs__item"
  >
    <button
      :id="tabId"
      :data-testid="`test-${tabId}`"
      class="fr-tabs__tab"
      :tabindex="selected ? 0 : -1"
      role="tab"
      :aria-selected="selected"
      :aria-controls="panelId"
      @click="$emit('click', $event)"
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

  emits: ['click'],

}
</script>

<style scoped>
.fr-tabs__item {
  display: block;
  flex: 0 0 auto;
  margin: 0 0.5rem;
  &:not(:first-child) {
    margin-left: 0;
  }

  &:not(:first-child)::before {
    content: "";
    display: block;
    position: sticky;
    top: 100%;
    width: 0.5rem;
    height: 1px;
    margin-left: -0.5rem;
  }

  &:last-child {
    padding-right: 1rem;
  }

  &:last-child::after {
    content: "";
    display: block;
    min-width: 1rem;
    margin-left: 100%;
    flex: 1 1 auto;
    position: sticky;
    top: 100%;
    width: auto;
    height: 1px;
    margin-top: -1px;
  }

  &:first-child::before {
    content: "";
    display: block;
    position: sticky;
    top: 100%;
    width: 100%;
    height: 1px;
    position: sticky;
    margin-left: -100%;
  }

  &:not(:first-child)::before {
    box-shadow: 0 1px 0 0 var(--g300);
  }

  &:last-child::after {
    box-shadow: 0 1px 0 0 var(--g300);
  }

  &:first-child::before {
    box-shadow: 0 1px 0 0 var(--g300);
  }
}

.fr-tabs__tab {
  --link-underline: none;
  --link-blank-font: none;
  --link-blank-content: none;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  font-size: 1rem;
  min-height: 2.5rem;
  padding: 0.5rem 1rem;
  position: relative;
  overflow: visible;
  font-weight: bold;
  z-index: 1;

  &[aria-selected=true] {
    cursor: default;
    background: transparent;
  }

  &[aria-selected=true]::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 1px;
    bottom: 0;
    left: 1px;
    width: auto;
    height: calc(100% - 1px);
    z-index: 1;
  }

  &:not([aria-selected=true]) {
    background-color: var(--bf100-g750);
    color: var(--g700);
    box-shadow: 0 1px 0 0 var(--g300);
  }

  &:not([aria-selected=true])[disabled],
  &:not([aria-selected=true]):disabled {
    color: var(--g600-g400);
    background-color: var(--g200);
  }

  &[aria-selected=true] {
    box-shadow: inset 0 0.125rem 0 0 var(--bf500);
    background-color: var(--t-plain);
    color: var(--bf500);
  }

  &[aria-selected=true]:hover:not([disabled]),
  &[aria-selected=true]:hover:not(:disabled),
  &[aria-selected=true]:active:not([disabled]),
  &[aria-selected=true]:active:not(:disabled) {
    background-image: none;
  }

  &[aria-selected=true]::after {
    box-shadow: -1px 0 0 0 var(--g300), 1px 0 0 0 var(--g300);
  }
}

:root:not([data-fr-theme="dark"]) .fr-tabs__tab:not([aria-selected=true]) {
  --color-hover: rgba(182, 182, 255, 0.5);
  --color-active: rgba(119, 119, 255, 0.5);
}

:root:not([data-fr-theme="dark"]) [class*="fr-scheme-light"] .fr-tabs__tab:not([aria-selected=true]),
:root:not([data-fr-theme="dark"]) [class*="--scheme-light-"] .fr-tabs__tab:not([aria-selected=true]) {
  --color-hover: rgba(182, 182, 255, 0.5);
  --color-active: rgba(119, 119, 255, 0.5);
}

:root:not([data-fr-theme="dark"]) [class*="fr-scheme-dark"] .fr-tabs__tab:not([aria-selected=true]),
:root:not([data-fr-theme="dark"]) [class*="--scheme-dark-"] .fr-tabs__tab:not([aria-selected=true]) {
  --color-hover: rgba(79, 79, 79, 0.5);
  --color-active: rgba(115, 115, 115, 0.5);
}

:root[data-fr-theme="dark"] .fr-tabs__tab:not([aria-selected=true]) {
  --color-hover: rgba(79, 79, 79, 0.5);
  --color-active: rgba(115, 115, 115, 0.5);
}

@media (hover: hover) and (pointer: fine) {
  .fr-tabs__tab:not([aria-selected=true]):not(a):not(:disabled):hover,
  a.fr-tabs__tab:not([aria-selected=true])[href]:hover {
    background-image: linear-gradient(0deg, var(--color-hover), var(--color-hover));
  }

  .fr-tabs__tab:not([aria-selected=true]):not(a):not(:disabled):active,
  a.fr-tabs__tab:not([aria-selected=true])[href]:active {
    background-image: linear-gradient(0deg, var(--color-active), var(--color-active));
  }
}
</style>
