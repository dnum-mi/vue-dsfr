import {
  createFocusTrap
} from "./chunk-C7FBB3IR.js";
import {
  notNullish,
  toArray,
  tryOnScopeDispose,
  unrefElement
} from "./chunk-6PY2NTO4.js";
import {
  computed,
  ref,
  toValue,
  watch
} from "./chunk-IWYC5R2O.js";

// ../../node_modules/.pnpm/@vueuse+integrations@12.5.0_axios@1.7.9_focus-trap@7.6.4_typescript@5.9.3/node_modules/@vueuse/integrations/useFocusTrap.mjs
function useFocusTrap(target, options = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = options;
  const hasFocus = ref(false);
  const isPaused = ref(false);
  const activate = (opts) => trap && trap.activate(opts);
  const deactivate = (opts) => trap && trap.deactivate(opts);
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.value = true;
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.value = false;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return toArray(_targets).map((el) => {
      const _el = toValue(el);
      return typeof _el === "string" ? _el : unrefElement(_el);
    }).filter(notNullish);
  });
  watch(
    targets,
    (els) => {
      if (!els.length)
        return;
      trap = createFocusTrap(els, {
        ...focusTrapOptions,
        onActivate() {
          hasFocus.value = true;
          if (options.onActivate)
            options.onActivate();
        },
        onDeactivate() {
          hasFocus.value = false;
          if (options.onDeactivate)
            options.onDeactivate();
        }
      });
      if (immediate)
        activate();
    },
    { flush: "post" }
  );
  tryOnScopeDispose(() => deactivate());
  return {
    hasFocus,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause
  };
}
export {
  useFocusTrap
};
//# sourceMappingURL=vitepress___@vueuse_integrations_useFocusTrap.js.map
