import {
  createFocusTrap
} from "./chunk-C7FBB3IR.js";
import {
  Comment,
  cloneVNode,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch
} from "./chunk-IWYC5R2O.js";

// ../../node_modules/.pnpm/focus-trap-vue@4.0.3_focus-trap@7.6.4_vue@3.5.13_typescript@5.7.3_/node_modules/focus-trap-vue/dist/focus-trap-vue.esm-browser.js
function defineFocusTrapProps(props) {
  return props;
}
var FocusTrapProps = defineFocusTrapProps({
  escapeDeactivates: {
    type: Boolean,
    default: true
  },
  returnFocusOnDeactivate: {
    type: Boolean,
    default: true
  },
  allowOutsideClick: {
    type: [Boolean, Function],
    default: true
  },
  clickOutsideDeactivates: [Boolean, Function],
  initialFocus: [String, Function, Boolean],
  fallbackFocus: [String, Function],
  checkCanFocusTrap: Function,
  checkCanReturnFocus: Function,
  delayInitialFocus: {
    type: Boolean,
    default: true
  },
  document: Object,
  preventScroll: Boolean,
  setReturnFocus: [Object, String, Boolean, Function],
  tabbableOptions: Object
});
var FocusTrap = defineComponent({
  props: Object.assign({
    active: {
      // TODO: could be options for activate but what about the options for deactivating?
      type: Boolean,
      default: true
    }
  }, FocusTrapProps),
  emits: [
    "update:active",
    "activate",
    "postActivate",
    "deactivate",
    "postDeactivate"
  ],
  render() {
    return this.renderImpl();
  },
  setup(props, { slots, emit }) {
    let trap;
    const wrapperEl = ref(null);
    const el = computed(() => {
      const innerElement = wrapperEl.value;
      return innerElement && (innerElement instanceof HTMLElement ? innerElement : innerElement.$el);
    });
    function ensureTrap() {
      if (trap) {
        return trap;
      }
      return trap = createFocusTrap(el.value, {
        escapeDeactivates: props.escapeDeactivates,
        allowOutsideClick: props.allowOutsideClick,
        returnFocusOnDeactivate: props.returnFocusOnDeactivate,
        clickOutsideDeactivates: props.clickOutsideDeactivates,
        onActivate: () => {
          emit("update:active", true);
          emit("activate");
        },
        onDeactivate: () => {
          emit("update:active", false);
          emit("deactivate");
        },
        onPostActivate: () => emit("postActivate"),
        onPostDeactivate: () => emit("postDeactivate"),
        initialFocus: props.initialFocus,
        fallbackFocus: props.fallbackFocus,
        tabbableOptions: props.tabbableOptions,
        delayInitialFocus: props.delayInitialFocus,
        preventScroll: props.preventScroll
      });
    }
    onMounted(() => {
      watch(() => props.active, (active) => {
        if (active && el.value) {
          ensureTrap().activate();
        } else if (trap) {
          trap.deactivate();
          if (!el.value || el.value.nodeType === Node.COMMENT_NODE) {
            trap = null;
          }
        }
      }, { immediate: true, flush: "post" });
    });
    onUnmounted(() => {
      if (trap)
        trap.deactivate();
      trap = null;
    });
    return {
      activate() {
        ensureTrap().activate();
      },
      deactivate() {
        trap && trap.deactivate();
      },
      renderImpl() {
        if (!slots.default)
          return null;
        const vNodes = slots.default().filter((vnode2) => vnode2.type !== Comment);
        if (!vNodes || !vNodes.length || vNodes.length > 1) {
          {
            console.error("[focus-trap-vue]: FocusTrap requires exactly one child.");
          }
          return vNodes;
        }
        const vnode = cloneVNode(vNodes[0], { ref: wrapperEl });
        return vnode;
      }
    };
  }
});
export {
  FocusTrap
};
/*! Bundled license information:

focus-trap-vue/dist/focus-trap-vue.esm-browser.js:
  (*!
    * focus-trap-vue v4.0.2
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    *)
*/
//# sourceMappingURL=focus-trap-vue.js.map
