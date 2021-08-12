<template>
  <div
    :id="panelId"
    class="fr-tabs__panel"
    :class="{
      'fr-tabs__panel--selected': selected,
    }"
    role="tabpanel"
    :aria-labelledby="tabId"
    :tabindex="selected ? 0 : -1"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    panelId: {
      type: String,
      required: true,
    },
    tabId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.fr-tabs__panel {
  --link-underline: 0 1px 0 0 currentColor;
  --link-blank-font: normal normal normal 1rem/1 dsfr-icons;
  --link-blank-content: "\00a0";
  --ul-type: "●\00a0\00a0";
  --ol-type: decimal;
  --ul-start: 1rem;
  --ol-start: 1.5rem;
  --xl-block: 0.5rem;
  --li-bottom: 0.25rem;
  --xl-base: 1em;
  --ol-content: counters(li-counter, ".") ".\00a0\00a0";
  display: block;
  position: relative;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-top: 2.5rem;
  margin-right: -100%;
  flex: 0 0 100%;
  transition: visibility 0.3s, transform 0.3s;
  transform: translateX(0);
  color: var(--g700);

  &:focus, &:focus-visible {
    outline-offset: calc(-1rem + 2px);
  }

  &:not(.fr-tabs__panel--selected) {
    visibility: hidden;
    display: none;
  }
}

.fr-tabs__panel--ltr {
  transform: translate(100%);
  transition: transform 0.3s;
}

.fr-tabs__panel--rtl {
  transform: translate(-100%);
  transition: transform 0.3s;
}

@media (min-width: 48em) {
  .fr-tabs__panel {
    padding: 2rem;
  }
  .fr-tabs__panel:focus, .fr-tabs__panel:focus-visible {
    outline-offset: calc(-2rem + 2px);
  }
}
</style>
