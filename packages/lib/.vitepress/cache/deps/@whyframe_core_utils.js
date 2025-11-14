// ../../node_modules/.pnpm/@whyframe+core@0.1.12_vite@6.1.0_@types+node@22.13.1_jiti@2.4.2_less@4.2.0_lightningcss_b60763f844801554aeca17b7b7d9adab/node_modules/@whyframe/core/src/utils.js
function createIframeRpc(iframe) {
  var _a;
  const nameToCallbacks = /* @__PURE__ */ new Map();
  const handler = (e) => {
    if (nameToCallbacks.has(e.data.name)) {
      const callbacks = nameToCallbacks.get(e.data.name);
      for (const callback of callbacks) {
        callback.apply(e.target, e.data.payload);
      }
    }
  };
  if (iframe) {
    (_a = iframe.contentWindow) == null ? void 0 : _a.addEventListener("message", handler);
  } else {
    window.addEventListener("message", handler);
  }
  return {
    send(name, payload) {
      var _a2;
      if (iframe) {
        (_a2 = iframe.contentWindow) == null ? void 0 : _a2.postMessage({ name, payload });
      } else {
        window.parent.postMessage({ name, payload });
      }
    },
    on(name, callback) {
      if (!nameToCallbacks.has(name)) {
        nameToCallbacks.set(name, []);
      }
      nameToCallbacks.get(name).push(callback);
    },
    off(name, callback) {
      if (!callback) {
        nameToCallbacks.delete(name);
      } else if (nameToCallbacks.has(name)) {
        const callbacks = nameToCallbacks.get(name);
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    },
    teardown() {
      var _a2;
      if (iframe) {
        (_a2 = iframe.contentWindow) == null ? void 0 : _a2.removeEventListener("message", handler);
      } else {
        window.removeEventListener("message", handler);
      }
    }
  };
}
function getWhyframeSource(iframe) {
  return iframe.dataset.whySource;
}
export {
  createIframeRpc,
  getWhyframeSource
};
//# sourceMappingURL=@whyframe_core_utils.js.map
