// ==UserScript==
// @name               MissAV净化增强
// @name:zh-TW         MissAV凈化增強
// @name:en            MissAVEnhance
// @namespace          https://github.com/GangPeter/pgscript
// @version            2.0.0
// @author             GangPeter
// @description        去除MissAV广告、拦截弹窗、拦截失焦暂停、修复布局、显示完整标题、支持PC端|移动端
// @description:zh-TW  去除MissAV廣告、攔截彈窗、攔截失焦暫停、修復布局、顯示完整標題、支持PC端|移動端
// @description:en     Remove MissAV ads
// @license            None
// @icon               data:image/png;base64,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
// @homepageURL        https://github.com/GangPeter/pgscript
// @supportURL         https://github.com/GangPeter/pgscript
// @downloadURL        https://update.greasyfork.org/scripts/519635/MissAVEnhance.user.js
// @updateURL          https://update.greasyfork.org/scripts/519635/MissAVEnhance.meta.js
// @match              *://*.missav.ws/*
// @require            https://registry.npmmirror.com/vue/3.5.13/files/dist/vue.global.prod.js
// @grant              GM_getValue
// @grant              GM_registerMenuCommand
// @grant              GM_setValue
// @grant              unsafeWindow
// @run-at             document-start
// ==/UserScript==

(function (e$1) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const e$1__namespace = /*#__PURE__*/_interopNamespaceDefault(e$1);

  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var isVue2 = false;
  /*!
   * pinia v2.3.0
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = e$1.effectScope(true);
    const state = scope.run(() => e$1.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = e$1.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia;
  }
  const noop$1 = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && e$1.getCurrentScope()) {
      e$1.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  const ACTION_MARKER = Symbol();
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    } else if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !e$1.isRef(subPatch) && !e$1.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(e$1.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && true) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = e$1.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = e$1.markRaw(e$1.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    const $subscribeOptions = { deep: true };
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      {
        pinia.state.value[$id] = {};
      }
    }
    e$1.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      e$1.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      noop$1
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    const action = (fn, name = "") => {
      if (ACTION_MARKER in fn) {
        fn[ACTION_NAME] = name;
        return fn;
      }
      const wrappedAction = function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: wrappedAction[ACTION_NAME],
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = fn.apply(this && this.$id === $id ? this : store, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
      wrappedAction[ACTION_MARKER] = true;
      wrappedAction[ACTION_NAME] = name;
      return wrappedAction;
    };
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => e$1.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = e$1.reactive(partialStore);
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = e$1.effectScope()).run(() => setup({ action }))));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (e$1.isRef(prop) && !isComputed(prop) || e$1.isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (e$1.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
      } else if (typeof prop === "function") {
        const actionValue = action(prop, key);
        {
          setupStore[key] = actionValue;
        }
        optionsForPlugin.actions[key] = prop;
      } else ;
    }
    {
      assign(store, setupStore);
      assign(e$1.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => pinia.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    pinia._p.forEach((extender) => {
      {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const hasContext = e$1.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? e$1.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
      }
      const store = pinia._s.get(id);
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  function d$2(u2, e2, r2) {
    let i2 = e$1.ref(r2 == null ? void 0 : r2.value), f2 = e$1.computed(() => u2.value !== void 0);
    return [e$1.computed(() => f2.value ? u2.value : i2.value), function(t2) {
      return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
    }];
  }
  var r$2;
  let n$3 = Symbol("headlessui.useid"), o$4 = 0;
  const i$4 = (r$2 = e$1__namespace.useId) != null ? r$2 : function() {
    return e$1__namespace.inject(n$3, () => `${++o$4}`)();
  };
  function o$3(e2) {
    var l2;
    if (e2 == null || e2.value == null) return null;
    let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
    return n2 instanceof Node ? n2 : null;
  }
  function u$5(r2, n2, ...a2) {
    if (r2 in n2) {
      let e2 = n2[r2];
      return typeof e2 == "function" ? e2(...a2) : e2;
    }
    let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
  }
  var i$3 = Object.defineProperty;
  var d$1 = (t2, e2, r2) => e2 in t2 ? i$3(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
  var n$2 = (t2, e2, r2) => (d$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
  let s$1 = class s {
    constructor() {
      n$2(this, "current", this.detect());
      n$2(this, "currentId", 0);
    }
    set(e2) {
      this.current !== e2 && (this.currentId = 0, this.current = e2);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
  };
  let c$2 = new s$1();
  function i$2(r2) {
    if (c$2.isServer) return null;
    if (r2 instanceof Node) return r2.ownerDocument;
    if (r2 != null && r2.hasOwnProperty("value")) {
      let n2 = o$3(r2);
      if (n2) return n2.ownerDocument;
    }
    return document;
  }
  let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
  var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
  var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
  function w$3(e2, r2 = 0) {
    var t2;
    return e2 === ((t2 = i$2(e2)) == null ? void 0 : t2.body) ? false : u$5(r2, { [0]() {
      return e2.matches(c$1);
    }, [1]() {
      let l2 = e2;
      for (; l2 !== null; ) {
        if (l2.matches(c$1)) return true;
        l2 = l2.parentElement;
      }
      return false;
    } });
  }
  var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
    e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e2) => {
    e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  function O$1(e2, r2 = (t2) => t2) {
    return e2.slice().sort((t2, l2) => {
      let o2 = r2(t2), i2 = r2(l2);
      if (o2 === null || i2 === null) return 0;
      let n2 = o2.compareDocumentPosition(i2);
      return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }
  function t$1() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i$1() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n$1() {
    return t$1() || i$1();
  }
  function u$4(e2, t2, n2) {
    c$2.isServer || e$1.watchEffect((o2) => {
      document.addEventListener(e2, t2, n2), o2(() => document.removeEventListener(e2, t2, n2));
    });
  }
  function w$2(e2, n2, t2) {
    c$2.isServer || e$1.watchEffect((o2) => {
      window.addEventListener(e2, n2, t2), o2(() => window.removeEventListener(e2, n2, t2));
    });
  }
  function w$1(f2, m, l2 = e$1.computed(() => true)) {
    function a2(e2, r2) {
      if (!l2.value || e2.defaultPrevented) return;
      let t2 = r2(e2);
      if (t2 === null || !t2.getRootNode().contains(t2)) return;
      let c2 = function o2(n2) {
        return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
      }(f2);
      for (let o2 of c2) {
        if (o2 === null) continue;
        let n2 = o2 instanceof HTMLElement ? o2 : o$3(o2);
        if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
      }
      return !w$3(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m(e2, t2);
    }
    let u2 = e$1.ref(null);
    u$4("pointerdown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$4("mousedown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$4("click", (e2) => {
      n$1() || u2.value && (a2(e2, () => u2.value), u2.value = null);
    }, true), u$4("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$2("blur", (e2) => a2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
  }
  function r$1(t2, e2) {
    if (t2) return t2;
    let n2 = e2 != null ? e2 : "button";
    if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
  }
  function s2(t2, e2) {
    let n2 = e$1.ref(r$1(t2.value.type, t2.value.as));
    return e$1.onMounted(() => {
      n2.value = r$1(t2.value.type, t2.value.as);
    }), e$1.watchEffect(() => {
      var u2;
      n2.value || o$3(e2) && o$3(e2) instanceof HTMLButtonElement && !((u2 = o$3(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
    }), n2;
  }
  function r(e2) {
    return [e2.screenX, e2.screenY];
  }
  function u$3() {
    let e2 = e$1.ref([-1, -1]);
    return { wasMoved(n2) {
      let t2 = r(n2);
      return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
    }, update(n2) {
      e2.value = r(n2);
    } };
  }
  var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
  function A$1({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
    var a2;
    let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
    if (r2 || t2 & 2 && n2.static) return y(l2);
    if (t2 & 1) {
      let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
      return u$5(d2, { [0]() {
        return null;
      }, [1]() {
        return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
      } });
    }
    return y(l2);
  }
  function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
    var m, h2;
    let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
    if (o2) {
      let u2 = false, c2 = [];
      for (let [p2, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
      u2 && (d2["data-headlessui-state"] = c2.join(" "));
    }
    if (n2 === "template") {
      if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
        let [u2, ...c2] = a2 != null ? a2 : [];
        if (!v(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R) => R.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
        let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = e$1.cloneVNode(u2, p2, true);
        for (let s3 in p2) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
        return f2;
      }
      return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
    }
    return e$1.h(n2, Object.assign({}, l2, d2), { default: () => a2 });
  }
  function b(r2) {
    return r2.flatMap((t2) => t2.type === e$1.Fragment ? b(t2.children) : [t2]);
  }
  function j(...r2) {
    if (r2.length === 0) return {};
    if (r2.length === 1) return r2[0];
    let t2 = {}, e2 = {};
    for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
    if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
    for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented) return;
        d2(n2, ...l2);
      }
    } });
    return t2;
  }
  function E$1(r2) {
    let t2 = Object.assign({}, r2);
    for (let e2 in t2) t2[e2] === void 0 && delete t2[e2];
    return t2;
  }
  function T$1(r2, t2 = []) {
    let e2 = Object.assign({}, r2);
    for (let o2 of t2) o2 in e2 && delete e2[o2];
    return e2;
  }
  function v(r2) {
    return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
  }
  var u$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$2 || {});
  let f$2 = e$1.defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
    return () => {
      var r2;
      let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
      return A$1({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
    };
  } });
  let n = Symbol("Context");
  var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
  function l() {
    return e$1.inject(n, null);
  }
  function t(o2) {
    e$1.provide(n, o2);
  }
  var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
  function u$1(l2) {
    throw new Error("Unexpected object: " + l2);
  }
  var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
  function f$1(l2, n2) {
    let t2 = n2.resolveItems();
    if (t2.length <= 0) return null;
    let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
    switch (l2.focus) {
      case 0: {
        for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 1: {
        s3 === -1 && (s3 = t2.length);
        for (let e2 = s3 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 2: {
        for (let e2 = s3 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 3: {
        for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 4: {
        for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
        return r2;
      }
      case 5:
        return null;
      default:
        u$1(l2);
    }
  }
  function e(i2 = {}, s3 = null, t2 = []) {
    for (let [r2, n2] of Object.entries(i2)) o$1(t2, f(s3, r2), n2);
    return t2;
  }
  function f(i2, s3) {
    return i2 ? i2 + "[" + s3 + "]" : s3;
  }
  function o$1(i2, s3, t2) {
    if (Array.isArray(t2)) for (let [r2, n2] of t2.entries()) o$1(i2, f(s3, r2.toString()), n2);
    else t2 instanceof Date ? i2.push([s3, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s3, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s3, t2]) : typeof t2 == "number" ? i2.push([s3, `${t2}`]) : t2 == null ? i2.push([s3, ""]) : e(t2, s3, i2);
  }
  function p$1(i2) {
    var t2, r2;
    let s3 = (t2 = i2 == null ? void 0 : i2.form) != null ? t2 : i2.closest("form");
    if (s3) {
      for (let n2 of s3.elements) if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
        n2.click();
        return;
      }
      (r2 = s3.requestSubmit) == null || r2.call(s3);
    }
  }
  let u = Symbol("DescriptionContext");
  function w() {
    let t2 = e$1.inject(u, null);
    if (t2 === null) throw new Error("Missing parent");
    return t2;
  }
  function k$1({ slot: t2 = e$1.ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
    let e2 = e$1.ref([]);
    function r2(n2) {
      return e2.value.push(n2), () => {
        let i2 = e2.value.indexOf(n2);
        i2 !== -1 && e2.value.splice(i2, 1);
      };
    }
    return e$1.provide(u, { register: r2, slot: t2, name: o2, props: s3 }), e$1.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  e$1.defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
    var n2;
    let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$4()}`, r2 = w();
    return e$1.onMounted(() => e$1.onUnmounted(r2.register(e2))), () => {
      let { name: i2 = "Description", slot: l2 = e$1.ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m]) => Object.assign(a2, { [g2]: e$1.unref(m) }), {}), id: e2 };
      return A$1({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
    };
  } });
  var $$1 = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($$1 || {});
  let T = Symbol("DisclosureContext");
  function O(t2) {
    let r2 = e$1.inject(T, null);
    if (r2 === null) {
      let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
    }
    return r2;
  }
  let k = Symbol("DisclosurePanelContext");
  function U() {
    return e$1.inject(k, null);
  }
  let N = e$1.defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$12, { slots: r2, attrs: o2 }) {
    let s3 = e$1.ref(t$12.defaultOpen ? 0 : 1), e2 = e$1.ref(null), i$12 = e$1.ref(null), n2 = { buttonId: e$1.ref(`headlessui-disclosure-button-${i$4()}`), panelId: e$1.ref(`headlessui-disclosure-panel-${i$4()}`), disclosureState: s3, panel: e2, button: i$12, toggleDisclosure() {
      s3.value = u$5(s3.value, { [0]: 1, [1]: 0 });
    }, closeDisclosure() {
      s3.value !== 1 && (s3.value = 1);
    }, close(l2) {
      n2.closeDisclosure();
      let a2 = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o$3(l2) : o$3(n2.button) : o$3(n2.button))();
      a2 == null || a2.focus();
    } };
    return e$1.provide(T, n2), t(e$1.computed(() => u$5(s3.value, { [0]: i.Open, [1]: i.Closed }))), () => {
      let { defaultOpen: l2, ...a2 } = t$12, c2 = { open: s3.value === 0, close: n2.close };
      return A$1({ theirProps: a2, ourProps: {}, slot: c2, slots: r2, attrs: o2, name: "Disclosure" });
    };
  } }), Q = e$1.defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o2, expose: s$12 }) {
    let e2 = O("DisclosureButton"), i2 = U(), n2 = e$1.computed(() => i2 === null ? false : i2.value === e2.panelId.value);
    e$1.onMounted(() => {
      n2.value || t2.id !== null && (e2.buttonId.value = t2.id);
    }), e$1.onUnmounted(() => {
      n2.value || (e2.buttonId.value = null);
    });
    let l2 = e$1.ref(null);
    s$12({ el: l2, $el: l2 }), n2.value || e$1.watchEffect(() => {
      e2.button.value = l2.value;
    });
    let a2 = s2(e$1.computed(() => ({ as: t2.as, type: r2.type })), l2);
    function c2() {
      var u2;
      t2.disabled || (n2.value ? (e2.toggleDisclosure(), (u2 = o$3(e2.button)) == null || u2.focus()) : e2.toggleDisclosure());
    }
    function D(u2) {
      var S2;
      if (!t2.disabled) if (n2.value) switch (u2.key) {
        case o$2.Space:
        case o$2.Enter:
          u2.preventDefault(), u2.stopPropagation(), e2.toggleDisclosure(), (S2 = o$3(e2.button)) == null || S2.focus();
          break;
      }
      else switch (u2.key) {
        case o$2.Space:
        case o$2.Enter:
          u2.preventDefault(), u2.stopPropagation(), e2.toggleDisclosure();
          break;
      }
    }
    function v2(u2) {
      switch (u2.key) {
        case o$2.Space:
          u2.preventDefault();
          break;
      }
    }
    return () => {
      var C2;
      let u2 = { open: e2.disclosureState.value === 0 }, { id: S2, ...K2 } = t2, M = n2.value ? { ref: l2, type: a2.value, onClick: c2, onKeydown: D } : { id: (C2 = e2.buttonId.value) != null ? C2 : S2, ref: l2, type: a2.value, "aria-expanded": e2.disclosureState.value === 0, "aria-controls": e2.disclosureState.value === 0 || o$3(e2.panel) ? e2.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c2, onKeydown: D, onKeyup: v2 };
      return A$1({ ourProps: M, theirProps: K2, slot: u2, attrs: r2, slots: o2, name: "DisclosureButton" });
    };
  } }), V = e$1.defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o2, expose: s3 }) {
    let e2 = O("DisclosurePanel");
    e$1.onMounted(() => {
      t2.id !== null && (e2.panelId.value = t2.id);
    }), e$1.onUnmounted(() => {
      e2.panelId.value = null;
    }), s3({ el: e2.panel, $el: e2.panel }), e$1.provide(k, e2.panelId);
    let i$12 = l(), n2 = e$1.computed(() => i$12 !== null ? (i$12.value & i.Open) === i.Open : e2.disclosureState.value === 0);
    return () => {
      var v2;
      let l2 = { open: e2.disclosureState.value === 0, close: e2.close }, { id: a2, ...c2 } = t2, D = { id: (v2 = e2.panelId.value) != null ? v2 : a2, ref: e2.panel };
      return A$1({ ourProps: D, theirProps: c2, slot: l2, attrs: r2, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n2.value, name: "DisclosurePanel" });
    };
  } });
  let a$1 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
  function o(e2) {
    var r2, i2;
    let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
    if (!(t2 instanceof HTMLElement)) return n2;
    let u2 = false;
    for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
    let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
    return a$1.test(l2) && (l2 = l2.replace(a$1, "")), l2;
  }
  function g(e2) {
    let n2 = e2.getAttribute("aria-label");
    if (typeof n2 == "string") return n2.trim();
    let t2 = e2.getAttribute("aria-labelledby");
    if (t2) {
      let u2 = t2.split(" ").map((l2) => {
        let r2 = document.getElementById(l2);
        if (r2) {
          let i2 = r2.getAttribute("aria-label");
          return typeof i2 == "string" ? i2.trim() : o(r2).trim();
        }
        return null;
      }).filter(Boolean);
      if (u2.length > 0) return u2.join(", ");
    }
    return o(e2).trim();
  }
  function p(a2) {
    let t2 = e$1.ref(""), r2 = e$1.ref("");
    return () => {
      let e2 = o$3(a2);
      if (!e2) return "";
      let l2 = e2.innerText;
      if (t2.value === l2) return r2.value;
      let u2 = g(e2).trim().toLowerCase();
      return t2.value = l2, r2.value = u2, u2;
    };
  }
  function pe(o2, b2) {
    return o2 === b2;
  }
  var ce = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(ce || {}), ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(ve || {}), be = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(be || {});
  function me(o2) {
    requestAnimationFrame(() => requestAnimationFrame(o2));
  }
  let $ = Symbol("ListboxContext");
  function A(o2) {
    let b2 = e$1.inject($, null);
    if (b2 === null) {
      let r2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(r2, A), r2;
    }
    return b2;
  }
  let Ie = e$1.defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b2, attrs: r2, emit: w2 }) {
    let n2 = e$1.ref(1), e$12 = e$1.ref(null), f2 = e$1.ref(null), v2 = e$1.ref(null), s3 = e$1.ref([]), m = e$1.ref(""), p2 = e$1.ref(null), a2 = e$1.ref(1);
    function u2(t2 = (i2) => i2) {
      let i2 = p2.value !== null ? s3.value[p2.value] : null, l2 = O$1(t2(s3.value.slice()), (O2) => o$3(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
      return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
    }
    let D = e$1.computed(() => o2.multiple ? 1 : 0), [y2, L] = d$2(e$1.computed(() => o2.modelValue), (t2) => w2("update:modelValue", t2), e$1.computed(() => o2.defaultValue)), M = e$1.computed(() => y2.value === void 0 ? u$5(D.value, { [1]: [], [0]: void 0 }) : y2.value), k2 = { listboxState: n2, value: M, mode: D, compare(t2, i2) {
      if (typeof o2.by == "string") {
        let l2 = o2.by;
        return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
      }
      return o2.by(t2, i2);
    }, orientation: e$1.computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e$12, buttonRef: f2, optionsRef: v2, disabled: e$1.computed(() => o2.disabled), options: s3, searchQuery: m, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
      o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
    }, openListbox() {
      o2.disabled || n2.value !== 0 && (n2.value = 0);
    }, goToOption(t2, i2, l2) {
      if (o2.disabled || n2.value === 1) return;
      let d2 = u2(), O2 = f$1(t2 === c.Specific ? { focus: c.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
      m.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s3.value = d2.options;
    }, search(t2) {
      if (o2.disabled || n2.value === 1) return;
      let l2 = m.value !== "" ? 0 : 1;
      m.value += t2.toLowerCase();
      let O2 = (p2.value !== null ? s3.value.slice(p2.value + l2).concat(s3.value.slice(0, p2.value + l2)) : s3.value).find((I) => I.dataRef.textValue.startsWith(m.value) && !I.dataRef.disabled), h2 = O2 ? s3.value.indexOf(O2) : -1;
      h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
    }, clearSearch() {
      o2.disabled || n2.value !== 1 && m.value !== "" && (m.value = "");
    }, registerOption(t2, i2) {
      let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
      s3.value = l2.options, p2.value = l2.activeOptionIndex;
    }, unregisterOption(t2) {
      let i2 = u2((l2) => {
        let d2 = l2.findIndex((O2) => O2.id === t2);
        return d2 !== -1 && l2.splice(d2, 1), l2;
      });
      s3.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
    }, theirOnChange(t2) {
      o2.disabled || L(t2);
    }, select(t2) {
      o2.disabled || L(u$5(D.value, { [0]: () => t2, [1]: () => {
        let i2 = e$1.toRaw(k2.value.value).slice(), l2 = e$1.toRaw(t2), d2 = i2.findIndex((O2) => k2.compare(l2, e$1.toRaw(O2)));
        return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
      } }));
    } };
    w$1([f2, v2], (t2, i2) => {
      var l2;
      k2.closeListbox(), w$3(i2, h.Loose) || (t2.preventDefault(), (l2 = o$3(f2)) == null || l2.focus());
    }, e$1.computed(() => n2.value === 0)), e$1.provide($, k2), t(e$1.computed(() => u$5(n2.value, { [0]: i.Open, [1]: i.Closed })));
    let C2 = e$1.computed(() => {
      var t2;
      return (t2 = o$3(f2)) == null ? void 0 : t2.closest("form");
    });
    return e$1.onMounted(() => {
      e$1.watch([C2], () => {
        if (!C2.value || o2.defaultValue === void 0) return;
        function t2() {
          k2.theirOnChange(o2.defaultValue);
        }
        return C2.value.addEventListener("reset", t2), () => {
          var i2;
          (i2 = C2.value) == null || i2.removeEventListener("reset", t2);
        };
      }, { immediate: true });
    }), () => {
      let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n2.value === 0, disabled: l2, value: M.value };
      return e$1.h(e$1.Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I, Q2]) => e$1.h(f$2, E$1({ features: u$2.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I, value: Q2 }))) : [], A$1({ ourProps: {}, theirProps: { ...r2, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b2, attrs: r2, name: "Listbox" })]);
    };
  } });
  e$1.defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2 }) {
    var f2;
    let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${i$4()}`, n2 = A("ListboxLabel");
    function e2() {
      var v2;
      (v2 = o$3(n2.buttonRef)) == null || v2.focus({ preventScroll: true });
    }
    return () => {
      let v2 = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s3 } = o2, m = { id: w2, ref: n2.labelRef, onClick: e2 };
      return A$1({ ourProps: m, theirProps: s3, slot: v2, attrs: b2, slots: r2, name: "ListboxLabel" });
    };
  } });
  let je = e$1.defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
    var p2;
    let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${i$4()}`, e2 = A("ListboxButton");
    w2({ el: e2.buttonRef, $el: e2.buttonRef });
    function f2(a2) {
      switch (a2.key) {
        case o$2.Space:
        case o$2.Enter:
        case o$2.ArrowDown:
          a2.preventDefault(), e2.openListbox(), e$1.nextTick(() => {
            var u2;
            (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
          });
          break;
        case o$2.ArrowUp:
          a2.preventDefault(), e2.openListbox(), e$1.nextTick(() => {
            var u2;
            (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
          });
          break;
      }
    }
    function v2(a2) {
      switch (a2.key) {
        case o$2.Space:
          a2.preventDefault();
          break;
      }
    }
    function s$12(a2) {
      e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), e$1.nextTick(() => {
        var u2;
        return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
      })) : (a2.preventDefault(), e2.openListbox(), me(() => {
        var u2;
        return (u2 = o$3(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
      })));
    }
    let m = s2(e$1.computed(() => ({ as: o2.as, type: b2.type })), e2.buttonRef);
    return () => {
      var y2, L;
      let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$3(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o$3(e2.labelRef)) == null ? void 0 : L.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v2, onClick: s$12 };
      return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, name: "ListboxButton" });
    };
  } }), Ae = e$1.defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
    var p2;
    let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${i$4()}`, e2 = A("ListboxOptions"), f2 = e$1.ref(null);
    w2({ el: e2.optionsRef, $el: e2.optionsRef });
    function v2(a2) {
      switch (f2.value && clearTimeout(f2.value), a2.key) {
        case o$2.Space:
          if (e2.searchQuery.value !== "") return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
        case o$2.Enter:
          if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
            let u2 = e2.options.value[e2.activeOptionIndex.value];
            e2.select(u2.dataRef.value);
          }
          e2.mode.value === 0 && (e2.closeListbox(), e$1.nextTick(() => {
            var u2;
            return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
          }));
          break;
        case u$5(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
          return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Next);
        case u$5(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
          return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Previous);
        case o$2.Home:
        case o$2.PageUp:
          return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.First);
        case o$2.End:
        case o$2.PageDown:
          return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Last);
        case o$2.Escape:
          a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), e$1.nextTick(() => {
            var u2;
            return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
          });
          break;
        case o$2.Tab:
          a2.preventDefault(), a2.stopPropagation();
          break;
        default:
          a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
          break;
      }
    }
    let s3 = l(), m = e$1.computed(() => s3 !== null ? (s3.value & i.Open) === i.Open : e2.listboxState.value === 0);
    return () => {
      var y2, L;
      let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L = o$3(e2.buttonRef)) == null ? void 0 : L.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
      return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, features: N$1.RenderStrategy | N$1.Static, visible: m.value, name: "ListboxOptions" });
    };
  } }), Fe = e$1.defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b2, attrs: r2, expose: w2 }) {
    var C2;
    let n2 = (C2 = o2.id) != null ? C2 : `headlessui-listbox-option-${i$4()}`, e2 = A("ListboxOption"), f2 = e$1.ref(null);
    w2({ el: f2, $el: f2 });
    let v2 = e$1.computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s3 = e$1.computed(() => u$5(e2.mode.value, { [0]: () => e2.compare(e$1.toRaw(e2.value.value), e$1.toRaw(o2.value)), [1]: () => e$1.toRaw(e2.value.value).some((t2) => e2.compare(e$1.toRaw(t2), e$1.toRaw(o2.value))) })), m = e$1.computed(() => u$5(e2.mode.value, { [1]: () => {
      var i2;
      let t2 = e$1.toRaw(e2.value.value);
      return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(e$1.toRaw(d2), e$1.toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
    }, [0]: () => s3.value })), p$12 = p(f2), a2 = e$1.computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
      return p$12();
    }, domRef: f2 }));
    e$1.onMounted(() => e2.registerOption(n2, a2)), e$1.onUnmounted(() => e2.unregisterOption(n2)), e$1.onMounted(() => {
      e$1.watch([e2.listboxState, s3], () => {
        e2.listboxState.value === 0 && s3.value && u$5(e2.mode.value, { [1]: () => {
          m.value && e2.goToOption(c.Specific, n2);
        }, [0]: () => {
          e2.goToOption(c.Specific, n2);
        } });
      }, { immediate: true });
    }), e$1.watchEffect(() => {
      e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && e$1.nextTick(() => {
        var t2, i2;
        return (i2 = (t2 = o$3(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
      });
    });
    function u2(t2) {
      if (o2.disabled) return t2.preventDefault();
      e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), e$1.nextTick(() => {
        var i2;
        return (i2 = o$3(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
      }));
    }
    function D() {
      if (o2.disabled) return e2.goToOption(c.Nothing);
      e2.goToOption(c.Specific, n2);
    }
    let y2 = u$3();
    function L(t2) {
      y2.update(t2);
    }
    function M(t2) {
      y2.wasMoved(t2) && (o2.disabled || v2.value || e2.goToOption(c.Specific, n2, 0));
    }
    function k2(t2) {
      y2.wasMoved(t2) && (o2.disabled || v2.value && e2.goToOption(c.Nothing));
    }
    return () => {
      let { disabled: t2 } = o2, i2 = { active: v2.value, selected: s3.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s3.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k2, onMouseleave: k2 };
      return A$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r2, slots: b2, name: "ListboxOption" });
    };
  } });
  let a = Symbol("LabelContext");
  function d() {
    let t2 = e$1.inject(a, null);
    if (t2 === null) {
      let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
    }
    return t2;
  }
  function E({ slot: t2 = {}, name: n2 = "Label", props: i2 = {} } = {}) {
    let e2 = e$1.ref([]);
    function o2(r2) {
      return e2.value.push(r2), () => {
        let l2 = e2.value.indexOf(r2);
        l2 !== -1 && e2.value.splice(l2, 1);
      };
    }
    return e$1.provide(a, { register: o2, slot: t2, name: n2, props: i2 }), e$1.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  let K = e$1.defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { slots: n2, attrs: i2 }) {
    var r2;
    let e2 = (r2 = t2.id) != null ? r2 : `headlessui-label-${i$4()}`, o2 = d();
    return e$1.onMounted(() => e$1.onUnmounted(o2.register(e2))), () => {
      let { name: l2 = "Label", slot: p2 = {}, props: c2 = {} } = o2, { passive: f2, ...s3 } = t2, u2 = { ...Object.entries(c2).reduce((b2, [g2, m]) => Object.assign(b2, { [g2]: e$1.unref(m) }), {}), id: e2 };
      return f2 && (delete u2.onClick, delete u2.htmlFor, delete s3.onClick), A$1({ ourProps: u2, theirProps: s3, slot: p2, attrs: i2, slots: n2, name: l2 });
    };
  } });
  let C = Symbol("GroupContext"), oe = e$1.defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: c2, attrs: i2 }) {
    let r2 = e$1.ref(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: e$1.computed(() => {
      var t2;
      return (t2 = r2.value) == null ? void 0 : t2.id;
    }), onClick(t2) {
      r2.value && (t2.currentTarget.tagName === "LABEL" && t2.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
    } } }), p2 = k$1({ name: "SwitchDescription" });
    return e$1.provide(C, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A$1({ theirProps: l2, ourProps: {}, slot: {}, slots: c2, attrs: i2, name: "SwitchGroup" });
  } }), ue = e$1.defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l2, { emit: c2, attrs: i2, slots: r2, expose: f2 }) {
    var h2;
    let p2 = (h2 = l2.id) != null ? h2 : `headlessui-switch-${i$4()}`, n2 = e$1.inject(C, null), [t2, s$12] = d$2(e$1.computed(() => l2.modelValue), (e2) => c2("update:modelValue", e2), e$1.computed(() => l2.defaultChecked));
    function m() {
      s$12(!t2.value);
    }
    let E2 = e$1.ref(null), o2 = n2 === null ? E2 : n2.switchRef, L = s2(e$1.computed(() => ({ as: l2.as, type: i2.type })), o2);
    f2({ el: o2, $el: o2 });
    function D(e2) {
      e2.preventDefault(), m();
    }
    function R(e2) {
      e2.key === o$2.Space ? (e2.preventDefault(), m()) : e2.key === o$2.Enter && p$1(e2.currentTarget);
    }
    function x(e2) {
      e2.preventDefault();
    }
    let d2 = e$1.computed(() => {
      var e2, a2;
      return (a2 = (e2 = o$3(o2)) == null ? void 0 : e2.closest) == null ? void 0 : a2.call(e2, "form");
    });
    return e$1.onMounted(() => {
      e$1.watch([d2], () => {
        if (!d2.value || l2.defaultChecked === void 0) return;
        function e2() {
          s$12(l2.defaultChecked);
        }
        return d2.value.addEventListener("reset", e2), () => {
          var a2;
          (a2 = d2.value) == null || a2.removeEventListener("reset", e2);
        };
      }, { immediate: true });
    }), () => {
      let { name: e2, value: a2, form: K2, tabIndex: y2, ...b2 } = l2, T2 = { checked: t2.value }, B = { id: p2, ref: o2, role: "switch", type: L.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t2.value, "aria-labelledby": n2 == null ? void 0 : n2.labelledby.value, "aria-describedby": n2 == null ? void 0 : n2.describedby.value, onClick: D, onKeyup: R, onKeypress: x };
      return e$1.h(e$1.Fragment, [e2 != null && t2.value != null ? e$1.h(f$2, E$1({ features: u$2.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t2.value, form: K2, disabled: b2.disabled, name: e2, value: a2 })) : null, A$1({ ourProps: B, theirProps: { ...i2, ...T$1(b2, ["modelValue", "defaultChecked"]) }, slot: T2, attrs: i2, slots: r2, name: "Switch" })]);
    };
  } }), de = K;
  function render$2(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon"
    }, [
      e$1.createElementVNode("path", {
        "fill-rule": "evenodd",
        d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
        "clip-rule": "evenodd"
      })
    ]);
  }
  function render$1(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon"
    }, [
      e$1.createElementVNode("path", {
        "fill-rule": "evenodd",
        d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
        "clip-rule": "evenodd"
      })
    ]);
  }
  function render(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      "data-slot": "icon"
    }, [
      e$1.createElementVNode("path", {
        "fill-rule": "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        "clip-rule": "evenodd"
      })
    ]);
  }
  const _hoisted_1$8 = { class: "mx-auto w-full bg-black p-1.5" };
  const _sfc_main$a = /* @__PURE__ */ e$1.defineComponent({
    __name: "DisclosureComp",
    props: {
      title: {},
      isFold: { type: Boolean },
      isSpecial: { type: Boolean }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return e$1.openBlock(), e$1.createElementBlock("div", _hoisted_1$8, [
          e$1.createVNode(e$1.unref(N), {
            "default-open": !_ctx.isFold
          }, {
            default: e$1.withCtx(({ open }) => [
              e$1.createVNode(e$1.unref(Q), {
                class: e$1.normalizeClass(["flex w-full justify-between rounded-lg px-4 py-1.5 text-left font-bold outline-none", {
                  "bg-[#1b1b1b] text-[#bbb] hover:bg-[#262626]": !_ctx.isSpecial,
                  "bg-[#1f1f1f] text-white hover:bg-[#292929]": _ctx.isSpecial
                }])
              }, {
                default: e$1.withCtx(() => [
                  e$1.createElementVNode("span", null, e$1.toDisplayString(_ctx.title || "Disclosure Title"), 1),
                  e$1.createVNode(e$1.unref(render), {
                    class: e$1.normalizeClass([{
                      "rotate-180": open,
                      "rotate-90": !open,
                      "text-[#c6c6c6]": !_ctx.isSpecial,
                      "text-[#c9c9c9]": _ctx.isSpecial
                    }, "h-6 w-6"])
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1032, ["class"]),
              e$1.createVNode(e$1.unref(V), {
                unmount: false,
                class: "pl-3 pr-2 pt-2 text-gray-500"
              }, {
                default: e$1.withCtx(() => [
                  e$1.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["default-open"])
        ]);
      };
    }
  });
  const startTime = performance.now();
  let lastTime = startTime;
  let currTime = startTime;
  const wrapper = (loggingFunc, isEnable) => {
    {
      return (...innerArgs) => {
        currTime = performance.now();
        const during = (currTime - lastTime).toFixed(1);
        loggingFunc(`[净化增强大师] ${during} / ${currTime.toFixed(0)} ms |`, ...innerArgs);
        lastTime = currTime;
      };
    }
  };
  const log = wrapper(console.log);
  const error = wrapper(console.error);
  const PGStorage = {
    get: (key, defaultValue) => {
      return _GM_getValue(`PGS_${key}`, defaultValue);
    },
    set: (key, value) => {
      _GM_setValue(`PGS_${key}`, value);
    }
  };
  const orderedUniq = (arr) => {
    return Array.from(new Set(arr));
  };
  function tryOnScopeDispose(fn) {
    if (e$1.getCurrentScope()) {
      e$1.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function toValue(r2) {
    return typeof r2 === "function" ? r2() : e$1.unref(r2);
  }
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
  const notNullish = (val) => val != null;
  const toString = Object.prototype.toString;
  const isObject = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  function createFilterWrapper(filter, fn) {
    function wrapper2(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper2;
  }
  const bypassFilter = (invoke2) => {
    return invoke2();
  };
  function throttleFilter(...args) {
    let lastExec = 0;
    let timer;
    let isLeading = true;
    let lastRejector = noop;
    let lastValue;
    let ms;
    let trailing;
    let leading;
    let rejectOnCancel;
    if (!e$1.isRef(args[0]) && typeof args[0] === "object")
      ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
    else
      [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
    const clear = () => {
      if (timer) {
        clearTimeout(timer);
        timer = void 0;
        lastRejector();
        lastRejector = noop;
      }
    };
    const filter = (_invoke) => {
      const duration = toValue(ms);
      const elapsed = Date.now() - lastExec;
      const invoke2 = () => {
        return lastValue = _invoke();
      };
      clear();
      if (duration <= 0) {
        lastExec = Date.now();
        return invoke2();
      }
      if (elapsed > duration && (leading || !isLeading)) {
        lastExec = Date.now();
        invoke2();
      } else if (trailing) {
        lastValue = new Promise((resolve, reject) => {
          lastRejector = rejectOnCancel ? reject : resolve;
          timer = setTimeout(() => {
            lastExec = Date.now();
            isLeading = true;
            resolve(invoke2());
            clear();
          }, Math.max(0, duration - elapsed));
        });
      }
      if (!leading && !timer)
        timer = setTimeout(() => isLeading = true, duration);
      isLeading = false;
      return lastValue;
    };
    return filter;
  }
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = e$1.ref(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: e$1.readonly(isActive), pause, resume, eventFilter };
  }
  function getLifeCycleTarget(target) {
    return e$1.getCurrentInstance();
  }
  function watchWithFilter(source, cb, options = {}) {
    const {
      eventFilter = bypassFilter,
      ...watchOptions
    } = options;
    return e$1.watch(
      source,
      createFilterWrapper(
        eventFilter,
        cb
      ),
      watchOptions
    );
  }
  function watchPausable(source, cb, options = {}) {
    const {
      eventFilter: filter,
      ...watchOptions
    } = options;
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(
      source,
      cb,
      {
        ...watchOptions,
        eventFilter
      }
    );
    return { stop, pause, resume, isActive };
  }
  function toRefs(objectRef, options = {}) {
    if (!e$1.isRef(objectRef))
      return e$1.toRefs(objectRef);
    const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
    for (const key in objectRef.value) {
      result[key] = e$1.customRef(() => ({
        get() {
          return objectRef.value[key];
        },
        set(v2) {
          var _a;
          const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
          if (replaceRef) {
            if (Array.isArray(objectRef.value)) {
              const copy = [...objectRef.value];
              copy[key] = v2;
              objectRef.value = copy;
            } else {
              const newObject = { ...objectRef.value, [key]: v2 };
              Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
              objectRef.value = newObject;
            }
          } else {
            objectRef.value[key] = v2;
          }
        }
      }));
    }
    return result;
  }
  function tryOnMounted(fn, sync = true, target) {
    const instance = getLifeCycleTarget();
    if (instance)
      e$1.onMounted(fn, target);
    else if (sync)
      fn();
    else
      e$1.nextTick(fn);
  }
  function watchThrottled(source, cb, options = {}) {
    const {
      throttle = 0,
      trailing = true,
      leading = true,
      ...watchOptions
    } = options;
    return watchWithFilter(
      source,
      cb,
      {
        ...watchOptions,
        eventFilter: throttleFilter(throttle, trailing, leading)
      }
    );
  }
  const defaultWindow = isClient ? window : void 0;
  function unrefElement(elRef) {
    var _a;
    const plain = toValue(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
  }
  function useEventListener(...args) {
    let target;
    let events2;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      [events2, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events2, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events2))
      events2 = [events2];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = e$1.watch(
      () => [unrefElement(target), toValue(options)],
      ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        const optionsClone = isObject(options2) ? { ...options2 } : options2;
        cleanups.push(
          ...events2.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, optionsClone));
          })
        );
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function useMounted() {
    const isMounted = e$1.ref(false);
    const instance = e$1.getCurrentInstance();
    if (instance) {
      e$1.onMounted(() => {
        isMounted.value = true;
      }, instance);
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return e$1.computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  function useMutationObserver(target, callback, options = {}) {
    const { window: window2 = defaultWindow, ...mutationOptions } = options;
    let observer;
    const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const targets = e$1.computed(() => {
      const value = toValue(target);
      const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
      return new Set(items);
    });
    const stopWatch = e$1.watch(
      () => targets.value,
      (targets2) => {
        cleanup();
        if (isSupported.value && targets2.size) {
          observer = new MutationObserver(callback);
          targets2.forEach((el) => observer.observe(el, mutationOptions));
        }
      },
      { immediate: true, flush: "post" }
    );
    const takeRecords = () => {
      return observer == null ? void 0 : observer.takeRecords();
    };
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop,
      takeRecords
    };
  }
  function useMediaQuery(query, options = {}) {
    const { window: window2 = defaultWindow } = options;
    const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
    let mediaQuery;
    const matches = e$1.ref(false);
    const handler = (event) => {
      matches.value = event.matches;
    };
    const cleanup = () => {
      if (!mediaQuery)
        return;
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", handler);
      else
        mediaQuery.removeListener(handler);
    };
    const stopWatch = e$1.watchEffect(() => {
      if (!isSupported.value)
        return;
      cleanup();
      mediaQuery = window2.matchMedia(toValue(query));
      if ("addEventListener" in mediaQuery)
        mediaQuery.addEventListener("change", handler);
      else
        mediaQuery.addListener(handler);
      matches.value = mediaQuery.matches;
    });
    tryOnScopeDispose(() => {
      stopWatch();
      cleanup();
      mediaQuery = void 0;
    });
    return matches;
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  const handlers = /* @__PURE__ */ getHandlers();
  function getHandlers() {
    if (!(globalKey in _global))
      _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
  }
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }
  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }
  const StorageSerializers = {
    boolean: {
      read: (v2) => v2 === "true",
      write: (v2) => String(v2)
    },
    object: {
      read: (v2) => JSON.parse(v2),
      write: (v2) => JSON.stringify(v2)
    },
    number: {
      read: (v2) => Number.parseFloat(v2),
      write: (v2) => String(v2)
    },
    any: {
      read: (v2) => v2,
      write: (v2) => String(v2)
    },
    string: {
      read: (v2) => v2,
      write: (v2) => String(v2)
    },
    map: {
      read: (v2) => new Map(JSON.parse(v2)),
      write: (v2) => JSON.stringify(Array.from(v2.entries()))
    },
    set: {
      read: (v2) => new Set(JSON.parse(v2)),
      write: (v2) => JSON.stringify(Array.from(v2))
    },
    date: {
      read: (v2) => new Date(v2),
      write: (v2) => v2.toISOString()
    }
  };
  const customStorageEventName = "vueuse-storage";
  function useStorage(key, defaults2, storage, options = {}) {
    var _a;
    const {
      flush = "pre",
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window: window2 = defaultWindow,
      eventFilter,
      onError = (e2) => {
        console.error(e2);
      },
      initOnMounted
    } = options;
    const data = (shallow ? e$1.shallowRef : e$1.ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
    if (!storage) {
      try {
        storage = getSSRHandler("getDefaultStorage", () => {
          var _a2;
          return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
      } catch (e2) {
        onError(e2);
      }
    }
    if (!storage)
      return data;
    const rawInit = toValue(defaults2);
    const type = guessSerializerType(rawInit);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
      data,
      () => write(data.value),
      { flush, deep, eventFilter }
    );
    if (window2 && listenToStorageChanges) {
      tryOnMounted(() => {
        if (storage instanceof Storage)
          useEventListener(window2, "storage", update);
        else
          useEventListener(window2, customStorageEventName, updateFromCustomEvent);
        if (initOnMounted)
          update();
      });
    }
    if (!initOnMounted)
      update();
    function dispatchWriteEvent(oldValue, newValue) {
      if (window2) {
        const payload = {
          key,
          oldValue,
          newValue,
          storageArea: storage
        };
        window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
          detail: payload
        }));
      }
    }
    function write(v2) {
      try {
        const oldValue = storage.getItem(key);
        if (v2 == null) {
          dispatchWriteEvent(oldValue, null);
          storage.removeItem(key);
        } else {
          const serialized = serializer.write(v2);
          if (oldValue !== serialized) {
            storage.setItem(key, serialized);
            dispatchWriteEvent(oldValue, serialized);
          }
        }
      } catch (e2) {
        onError(e2);
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit != null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return { ...rawInit, ...value };
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== key)
        return;
      pauseWatch();
      try {
        if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
          data.value = read(event);
      } catch (e2) {
        onError(e2);
      } finally {
        if (event)
          e$1.nextTick(resumeWatch);
        else
          resumeWatch();
      }
    }
    function updateFromCustomEvent(event) {
      update(event.detail);
    }
    return data;
  }
  function useDraggable(target, options = {}) {
    var _a, _b;
    const {
      pointerTypes,
      preventDefault: preventDefault2,
      stopPropagation,
      exact,
      onMove,
      onEnd,
      onStart,
      initialValue,
      axis = "both",
      draggingElement = defaultWindow,
      containerElement,
      handle: draggingHandle = target,
      buttons = [0]
    } = options;
    const position = e$1.ref(
      (_a = toValue(initialValue)) != null ? _a : { x: 0, y: 0 }
    );
    const pressedDelta = e$1.ref();
    const filterEvent = (e2) => {
      if (pointerTypes)
        return pointerTypes.includes(e2.pointerType);
      return true;
    };
    const handleEvent = (e2) => {
      if (toValue(preventDefault2))
        e2.preventDefault();
      if (toValue(stopPropagation))
        e2.stopPropagation();
    };
    const start = (e2) => {
      var _a2;
      if (!toValue(buttons).includes(e2.button))
        return;
      if (toValue(options.disabled) || !filterEvent(e2))
        return;
      if (toValue(exact) && e2.target !== toValue(target))
        return;
      const container = toValue(containerElement);
      const containerRect = (_a2 = container == null ? void 0 : container.getBoundingClientRect) == null ? void 0 : _a2.call(container);
      const targetRect = toValue(target).getBoundingClientRect();
      const pos = {
        x: e2.clientX - (container ? targetRect.left - containerRect.left + container.scrollLeft : targetRect.left),
        y: e2.clientY - (container ? targetRect.top - containerRect.top + container.scrollTop : targetRect.top)
      };
      if ((onStart == null ? void 0 : onStart(pos, e2)) === false)
        return;
      pressedDelta.value = pos;
      handleEvent(e2);
    };
    const move = (e2) => {
      if (toValue(options.disabled) || !filterEvent(e2))
        return;
      if (!pressedDelta.value)
        return;
      const container = toValue(containerElement);
      const targetRect = toValue(target).getBoundingClientRect();
      let { x, y: y2 } = position.value;
      if (axis === "x" || axis === "both") {
        x = e2.clientX - pressedDelta.value.x;
        if (container)
          x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
      }
      if (axis === "y" || axis === "both") {
        y2 = e2.clientY - pressedDelta.value.y;
        if (container)
          y2 = Math.min(Math.max(0, y2), container.scrollHeight - targetRect.height);
      }
      position.value = {
        x,
        y: y2
      };
      onMove == null ? void 0 : onMove(position.value, e2);
      handleEvent(e2);
    };
    const end = (e2) => {
      if (toValue(options.disabled) || !filterEvent(e2))
        return;
      if (!pressedDelta.value)
        return;
      pressedDelta.value = void 0;
      onEnd == null ? void 0 : onEnd(position.value, e2);
      handleEvent(e2);
    };
    if (isClient) {
      const config = { capture: (_b = options.capture) != null ? _b : true };
      useEventListener(draggingHandle, "pointerdown", start, config);
      useEventListener(draggingElement, "pointermove", move, config);
      useEventListener(draggingElement, "pointerup", end, config);
    }
    return {
      ...toRefs(position),
      position,
      isDragging: e$1.computed(() => !!pressedDelta.value),
      style: e$1.computed(
        () => `left:${position.value.x}px;top:${position.value.y}px;`
      )
    };
  }
  function useResizeObserver(target, callback, options = {}) {
    const { window: window2 = defaultWindow, ...observerOptions } = options;
    let observer;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const targets = e$1.computed(() => {
      const _targets = toValue(target);
      return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
    });
    const stopWatch = e$1.watch(
      targets,
      (els) => {
        cleanup();
        if (isSupported.value && window2) {
          observer = new ResizeObserver(callback);
          for (const _el of els) {
            if (_el)
              observer.observe(_el, observerOptions);
          }
        }
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  function useElementBounding(target, options = {}) {
    const {
      reset = true,
      windowResize = true,
      windowScroll = true,
      immediate = true,
      updateTiming = "sync"
    } = options;
    const height = e$1.ref(0);
    const bottom = e$1.ref(0);
    const left = e$1.ref(0);
    const right = e$1.ref(0);
    const top = e$1.ref(0);
    const width = e$1.ref(0);
    const x = e$1.ref(0);
    const y2 = e$1.ref(0);
    function recalculate() {
      const el = unrefElement(target);
      if (!el) {
        if (reset) {
          height.value = 0;
          bottom.value = 0;
          left.value = 0;
          right.value = 0;
          top.value = 0;
          width.value = 0;
          x.value = 0;
          y2.value = 0;
        }
        return;
      }
      const rect = el.getBoundingClientRect();
      height.value = rect.height;
      bottom.value = rect.bottom;
      left.value = rect.left;
      right.value = rect.right;
      top.value = rect.top;
      width.value = rect.width;
      x.value = rect.x;
      y2.value = rect.y;
    }
    function update() {
      if (updateTiming === "sync")
        recalculate();
      else if (updateTiming === "next-frame")
        requestAnimationFrame(() => recalculate());
    }
    useResizeObserver(target, update);
    e$1.watch(() => unrefElement(target), (ele) => !ele && update());
    useMutationObserver(target, update, {
      attributeFilter: ["style", "class"]
    });
    if (windowScroll)
      useEventListener("scroll", update, { capture: true, passive: true });
    if (windowResize)
      useEventListener("resize", update, { passive: true });
    tryOnMounted(() => {
      if (immediate)
        update();
    });
    return {
      height,
      bottom,
      left,
      right,
      top,
      width,
      x,
      y: y2,
      update
    };
  }
  function useWindowSize(options = {}) {
    const {
      window: window2 = defaultWindow,
      initialWidth = Number.POSITIVE_INFINITY,
      initialHeight = Number.POSITIVE_INFINITY,
      listenOrientation = true,
      includeScrollbar = true,
      type = "inner"
    } = options;
    const width = e$1.ref(initialWidth);
    const height = e$1.ref(initialHeight);
    const update = () => {
      if (window2) {
        if (type === "outer") {
          width.value = window2.outerWidth;
          height.value = window2.outerHeight;
        } else if (includeScrollbar) {
          width.value = window2.innerWidth;
          height.value = window2.innerHeight;
        } else {
          width.value = window2.document.documentElement.clientWidth;
          height.value = window2.document.documentElement.clientHeight;
        }
      }
    };
    update();
    tryOnMounted(update);
    useEventListener("resize", update, { passive: true });
    if (listenOrientation) {
      const matches = useMediaQuery("(orientation: portrait)");
      e$1.watch(matches, () => update());
    }
    return { width, height };
  }
  const _hoisted_1$7 = { class: "font-serif text-xl text-white" };
  const _hoisted_2$5 = { class: "mb-2 text-xl font-semibold" };
  const _hoisted_3$3 = { class: "text-white" };
  const _hoisted_4$2 = { class: "rounded-md bg-[#FF9000] p-1 text-black" };
  const _hoisted_5$1 = { class: "no-scrollbar flex min-h-[calc(100%-2.5rem)] flex-1 flex-col p-2" };
  const _sfc_main$9 = /* @__PURE__ */ e$1.defineComponent({
    __name: "PanelComp",
    props: {
      app: {},
      title: {},
      widthPercent: {},
      heightPercent: {},
      minWidth: {},
      minHeight: {}
    },
    emits: ["close"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const props = __props;
      const panel = e$1.ref(null);
      const bar = e$1.ref(null);
      const windowSize = useWindowSize({ includeScrollbar: false });
      const { width, height } = useElementBounding(bar, { windowScroll: false });
      const maxPos = e$1.computed(() => {
        return {
          x: windowSize.width.value - width.value,
          y: windowSize.height.value - height.value
        };
      });
      let rAF = 0;
      const { style } = useDraggable(panel, {
        initialValue: {
          x: windowSize.width.value / 2 - Math.max(windowSize.width.value * props.widthPercent / 100, props.minWidth) / 2,
          y: windowSize.height.value / 2 - Math.max(windowSize.height.value * props.heightPercent / 100, props.minHeight) / 2
        },
        handle: e$1.computed(() => bar.value),
        preventDefault: true,
        // 限制拖拽范围
        onMove: (pos) => {
          cancelAnimationFrame(rAF);
          rAF = requestAnimationFrame(() => {
            if (pos.x < 0) {
              pos.x = 0;
            }
            if (pos.y < 0) {
              pos.y = 0;
            }
            if (pos.x > maxPos.value.x) {
              pos.x = maxPos.value.x;
            }
            if (pos.y > maxPos.value.y) {
              pos.y = maxPos.value.y;
            }
          });
        }
      });
      const panelStyle = e$1.computed(() => {
        return {
          width: props.widthPercent + "vw",
          height: props.heightPercent + "vh",
          minWidth: props.minWidth + "px",
          minHeight: props.minHeight + "px"
        };
      });
      return (_ctx, _cache) => {
        return e$1.openBlock(), e$1.createElementBlock("div", {
          ref_key: "panel",
          ref: panel,
          style: e$1.normalizeStyle([panelStyle.value, e$1.unref(style)]),
          class: "no-scrollbar fixed z-[10000000] select-none overflow-auto overscroll-none rounded-xl bg-black shadow-lg will-change-[top,left]"
        }, [
          e$1.createElementVNode("div", {
            ref_key: "bar",
            ref: bar,
            class: "sticky top-0 z-10 w-full cursor-move bg-[#0e0e0e] py-1.5 text-center"
          }, [
            e$1.createElementVNode("div", _hoisted_1$7, [
              e$1.createElementVNode("h3", _hoisted_2$5, [
                e$1.createElementVNode("span", _hoisted_3$3, e$1.toDisplayString(_ctx.app), 1),
                e$1.createElementVNode("span", _hoisted_4$2, e$1.toDisplayString(_ctx.title), 1)
              ])
            ]),
            e$1.createElementVNode("i", {
              class: "absolute right-0 top-0 m-1 cursor-pointer text-[#c6c6c6] hover:bg-opacity-40 hover:text-white",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
            }, _cache[1] || (_cache[1] = [
              e$1.createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "2.5",
                stroke: "currentColor",
                class: "size-8"
              }, [
                e$1.createElementVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ]))
          ], 512),
          e$1.createElementVNode("div", _hoisted_5$1, [
            e$1.renderSlot(_ctx.$slots, "default")
          ])
        ], 4);
      };
    }
  });
  const _hoisted_1$6 = {
    key: 0,
    class: "mb-1.5"
  };
  const _hoisted_2$4 = { class: "text-sm leading-6 text-[#969696]" };
  const _sfc_main$8 = /* @__PURE__ */ e$1.defineComponent({
    __name: "DescriptionComp",
    props: {
      description: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        var _a;
        return ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createElementBlock("div", _hoisted_1$6, [
          e$1.createElementVNode("div", _hoisted_2$4, [
            (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(_ctx.description, (line, index) => {
              return e$1.openBlock(), e$1.createElementBlock("div", { key: index }, [
                e$1.createElementVNode("p", null, [
                  _cache[0] || (_cache[0] = e$1.createElementVNode("span", { class: "mr-1" }, "•", -1)),
                  e$1.createTextVNode(e$1.toDisplayString(line), 1)
                ])
              ]);
            }), 128))
          ])
        ])) : e$1.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$5 = { class: "flex w-full py-1 hover:bg-[#2f2f2f] hover:bg-opacity-50" };
  const _hoisted_2$3 = { class: "ml-2 self-center text-[#c6c6c6]" };
  const _hoisted_3$2 = { class: "mx-2 mb-2 flex flex-1 flex-col p-1 text-[#c6c6c6]" };
  const _hoisted_4$1 = { class: "mt-4 flex justify-around" };
  const _sfc_main$7 = /* @__PURE__ */ e$1.defineComponent({
    __name: "EditorComp",
    props: {
      type: {},
      id: {},
      name: {},
      description: {},
      editorTitle: {},
      editorDescription: {},
      saveFn: { type: Function }
    },
    setup(__props) {
      const item = __props;
      const panel = e$1.ref(null);
      const isEditorShow = e$1.ref(false);
      const saveSuccess = e$1.ref(false);
      const editorData = e$1.ref("");
      const updateData = () => {
        const val = PGStorage.get(item.id, []).join("\n");
        editorData.value = val ? val + "\n" : val;
      };
      const saveData = () => {
        try {
          const data = editorData.value.split("\n").filter((v2) => v2.trim() !== "");
          PGStorage.set(item.id, orderedUniq(data));
          saveSuccess.value = true;
          item.saveFn();
          setTimeout(() => {
            saveSuccess.value = false;
          }, 1500);
        } catch (err) {
          error(`EditorComp ${item.id} saveData error`, err);
        }
      };
      return (_ctx, _cache) => {
        var _a;
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createElementVNode("label", _hoisted_1$5, [
            e$1.createElementVNode("button", {
              type: "button",
              class: "inline-flex justify-center rounded-md border border-transparent bg-black px-2 py-1 text-sm text-[#c6c6c6] outline-none ring-1 ring-gray-700 hover:text-[#ff9000] hover:ring-[#ff9000] focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 focus-visible:ring-offset-1",
              onClick: _cache[0] || (_cache[0] = () => {
                isEditorShow.value = true;
                updateData();
              })
            }, " 编辑 "),
            e$1.createElementVNode("span", _hoisted_2$3, e$1.toDisplayString(_ctx.name), 1)
          ]),
          ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
            key: 0,
            class: "pl-9",
            description: _ctx.description
          }, null, 8, ["description"])) : e$1.createCommentVNode("", true),
          isEditorShow.value ? (e$1.openBlock(), e$1.createBlock(_sfc_main$9, e$1.mergeProps({
            key: 1,
            ref_key: "panel",
            ref: panel
          }, {
            app: "",
            title: _ctx.editorTitle,
            widthPercent: 28,
            heightPercent: 85,
            minWidth: 360,
            minHeight: 600
          }, {
            onClose: _cache[4] || (_cache[4] = ($event) => isEditorShow.value = false)
          }), {
            default: e$1.withCtx(() => {
              var _a2;
              return [
                e$1.createElementVNode("div", _hoisted_3$2, [
                  ((_a2 = _ctx.editorDescription) == null ? void 0 : _a2.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
                    key: 0,
                    class: "mb-3",
                    description: _ctx.editorDescription
                  }, null, 8, ["description"])) : e$1.createCommentVNode("", true),
                  e$1.withDirectives(e$1.createElementVNode("textarea", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editorData.value = $event),
                    onKeydown: _cache[2] || (_cache[2] = e$1.withModifiers(() => {
                    }, ["stop"])),
                    class: "flex-1 resize-none overscroll-none rounded-md border-2 border-[#252525] bg-[#252525] p-2 text-[15px] outline-none focus:border-[#2f2f2f]",
                    style: { "scrollbar-width": "thin", "scrollbar-color": "#999 #00000000" },
                    spellcheck: "false",
                    placeholder: "请输入内容..."
                  }, null, 544), [
                    [e$1.vModelText, editorData.value]
                  ]),
                  e$1.createElementVNode("div", _hoisted_4$1, [
                    e$1.createElementVNode("button", {
                      class: e$1.normalizeClass([
                        "w-24 self-center rounded-md border-2 border-white bg-[#1b1b1b] py-0.5 text-center text-lg hover:border-[#ff9000] hover:bg-[#262626] hover:text-[#ff9000]",
                        saveSuccess.value ? "border-green-600 bg-green-950 hover:border-green-600 hover:bg-green-950" : ""
                      ]),
                      onClick: saveData
                    }, " 保存 ", 2),
                    e$1.createElementVNode("button", {
                      class: "w-24 self-center rounded-md border-2 border-white bg-[#1b1b1b] py-0.5 text-center text-lg hover:border-[#ff9000] hover:bg-[#262626] hover:text-[#ff9000]",
                      onClick: _cache[3] || (_cache[3] = ($event) => isEditorShow.value = false)
                    }, " 关闭 ")
                  ])
                ])
              ];
            }),
            _: 1
          }, 16)) : e$1.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _hoisted_1$4 = { class: "flex items-center justify-between py-1" };
  const _hoisted_2$2 = { class: "text-[#c6c6c6]" };
  const _hoisted_3$1 = { class: "relative w-2/5" };
  const _hoisted_4 = { class: "block truncate text-gray-200" };
  const _hoisted_5 = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" };
  const _hoisted_6 = {
    key: 0,
    class: "absolute inset-y-0 left-0 flex items-center pl-3 text-[#ff9000]"
  };
  const _sfc_main$6 = /* @__PURE__ */ e$1.defineComponent({
    __name: "ListComp",
    props: {
      type: {},
      id: {},
      name: {},
      description: {},
      defaultValue: {},
      disableValue: {},
      options: {}
    },
    setup(__props) {
      const item = __props;
      const options = item.options;
      const currValue = PGStorage.get(item.id, item.defaultValue);
      const currOption = options.find((v2) => v2.id === currValue);
      const selectedOption = e$1.ref(currOption ?? options[0]);
      e$1.watch(selectedOption, (newSelected) => {
        try {
          for (const option of options) {
            if (option.id === newSelected.id && newSelected.id !== item.disableValue) {
              document.documentElement.setAttribute(option.id, "");
            } else {
              document.documentElement.removeAttribute(option.id);
            }
          }
          PGStorage.set(item.id, newSelected.id);
        } catch (err) {
          error(`ListComp ${item.id} error`, err);
        }
      });
      return (_ctx, _cache) => {
        var _a;
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createElementVNode("div", _hoisted_1$4, [
            e$1.createElementVNode("div", _hoisted_2$2, e$1.toDisplayString(_ctx.name), 1),
            e$1.createVNode(e$1.unref(Ie), {
              modelValue: selectedOption.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedOption.value = $event)
            }, {
              default: e$1.withCtx(() => [
                e$1.createElementVNode("div", _hoisted_3$1, [
                  e$1.createVNode(e$1.unref(je), { class: "relative w-full cursor-pointer rounded-lg bg-black px-3 py-1.5 text-left ring-1 ring-gray-700 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-black/75 focus-visible:ring-gray-500 sm:text-sm" }, {
                    default: e$1.withCtx(() => [
                      e$1.createElementVNode("span", _hoisted_4, e$1.toDisplayString(selectedOption.value.name), 1),
                      e$1.createElementVNode("span", _hoisted_5, [
                        e$1.createVNode(e$1.unref(render$1), {
                          class: "h-5 w-5 text-gray-600",
                          "aria-hidden": "true"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  e$1.createVNode(e$1.Transition, {
                    "leave-active-class": "transition duration-100 ease-in",
                    "leave-from-class": "opacity-100",
                    "leave-to-class": "opacity-0"
                  }, {
                    default: e$1.withCtx(() => [
                      e$1.createVNode(e$1.unref(Ae), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-black py-1 shadow-lg ring-1 ring-white/5 focus:outline-none sm:text-sm" }, {
                        default: e$1.withCtx(() => [
                          (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(e$1.unref(options), (option, index) => {
                            return e$1.openBlock(), e$1.createBlock(e$1.unref(Fe), {
                              key: index,
                              value: option,
                              as: "template"
                            }, {
                              default: e$1.withCtx(({ active, selected }) => [
                                e$1.createElementVNode("li", {
                                  class: e$1.normalizeClass([
                                    active ? "bg-[#1b1b1b] text-white" : "text-gray-100",
                                    "relative cursor-default py-2 pl-10 pr-4 transition-colors duration-200"
                                  ])
                                }, [
                                  e$1.createElementVNode("span", {
                                    class: e$1.normalizeClass([selected ? "font-medium" : "font-normal", "block truncate"])
                                  }, e$1.toDisplayString(option.name), 3),
                                  selected ? (e$1.openBlock(), e$1.createElementBlock("span", _hoisted_6, [
                                    e$1.createVNode(e$1.unref(render$2), {
                                      class: "h-5 w-5",
                                      "aria-hidden": "true"
                                    })
                                  ])) : e$1.createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
            key: 0,
            class: "pl-1",
            description: _ctx.description
          }, null, 8, ["description"])) : e$1.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _hoisted_1$3 = { class: "my-1 flex items-center py-1 text-[#c6c6c6]" };
  const _hoisted_2$1 = ["step"];
  const _hoisted_3 = {
    key: 0,
    class: "ml-2"
  };
  const _sfc_main$5 = /* @__PURE__ */ e$1.defineComponent({
    __name: "NumberComp",
    props: {
      type: {},
      id: {},
      name: {},
      description: {},
      minValue: {},
      maxValue: {},
      step: {},
      defaultValue: {},
      disableValue: {},
      addonText: {},
      noStyle: { type: Boolean },
      attrName: {},
      fn: { type: Function }
    },
    setup(__props) {
      const item = __props;
      const currValue = e$1.ref(PGStorage.get(item.id, item.defaultValue));
      watchThrottled(
        currValue,
        (newValue, oldValue) => {
          var _a;
          try {
            if (newValue > item.maxValue) {
              currValue.value = item.maxValue;
            }
            if (newValue < item.minValue) {
              currValue.value = item.minValue;
            }
            if (oldValue === item.disableValue) {
              if (!item.noStyle) {
                document.documentElement.setAttribute(item.attrName ?? item.id, "");
              }
            }
            if (newValue === item.disableValue) {
              if (!item.noStyle) {
                document.documentElement.removeAttribute(item.attrName ?? item.id);
              }
            } else if (currValue.value !== oldValue) {
              (_a = item.fn(currValue.value)) == null ? void 0 : _a.then().catch((err) => {
                throw err;
              });
            }
            PGStorage.set(item.id, currValue.value);
          } catch (err) {
            error(`NumberComp ${item.id} error`, err);
          }
        },
        { throttle: 50 }
      );
      return (_ctx, _cache) => {
        var _a;
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createElementVNode("div", _hoisted_1$3, [
            e$1.createElementVNode("div", null, e$1.toDisplayString(_ctx.name), 1),
            e$1.withDirectives(e$1.createElementVNode("input", {
              type: "number",
              step: _ctx.step,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currValue.value = $event),
              onKeydown: _cache[1] || (_cache[1] = e$1.withModifiers(() => {
              }, ["stop"])),
              class: "ml-auto block w-1/5 rounded-lg border border-gray-700 bg-black px-2.5 py-1.5 text-sm outline-none invalid:border-red-500 focus:border-gray-500 focus:invalid:border-red-500"
            }, null, 40, _hoisted_2$1), [
              [e$1.vModelText, currValue.value]
            ]),
            _ctx.addonText ? (e$1.openBlock(), e$1.createElementBlock("div", _hoisted_3, e$1.toDisplayString(_ctx.addonText), 1)) : e$1.createCommentVNode("", true)
          ]),
          ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
            key: 0,
            class: "pl-1",
            description: _ctx.description
          }, null, 8, ["description"])) : e$1.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _hoisted_1$2 = { class: "mb-0.5 mt-1 flex items-center py-1 text-white" };
  const _sfc_main$4 = /* @__PURE__ */ e$1.defineComponent({
    __name: "StringComp",
    props: {
      type: {},
      id: {},
      name: {},
      description: {},
      defaultValue: {},
      disableValue: {},
      noStyle: { type: Boolean },
      attrName: {},
      fn: { type: Function }
    },
    setup(__props) {
      const item = __props;
      const currValue = e$1.ref(PGStorage.get(item.id, item.defaultValue));
      watchThrottled(
        currValue,
        (newValue, oldValue) => {
          var _a;
          try {
            if (oldValue === item.disableValue) {
              if (!item.noStyle) {
                document.documentElement.setAttribute(item.attrName ?? item.id, "");
              }
            }
            if (newValue === item.disableValue) {
              if (!item.noStyle) {
                document.documentElement.removeAttribute(item.attrName ?? item.id);
              }
            } else if (currValue.value !== oldValue) {
              (_a = item.fn(currValue.value)) == null ? void 0 : _a.then().catch((err) => {
                throw err;
              });
            }
            PGStorage.set(item.id, currValue.value);
          } catch (err) {
            error(`StringComp ${item.id} error`, err);
          }
        },
        { throttle: 50 }
      );
      return (_ctx, _cache) => {
        var _a;
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createElementVNode("div", _hoisted_1$2, [
            e$1.createElementVNode("div", null, e$1.toDisplayString(_ctx.name), 1),
            e$1.withDirectives(e$1.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currValue.value = $event),
              onKeydown: _cache[1] || (_cache[1] = e$1.withModifiers(() => {
              }, ["stop"])),
              class: "ml-4 block flex-1 rounded-md border border-gray-700 bg-black p-1.5 text-sm outline-none invalid:border-red-500 focus:border-gray-500 focus:invalid:border-red-500"
            }, null, 544), [
              [e$1.vModelText, currValue.value]
            ])
          ]),
          ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
            key: 0,
            description: _ctx.description
          }, null, 8, ["description"])) : e$1.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _hoisted_1$1 = { class: "flex items-center" };
  const _hoisted_2 = { class: "ml-2 flex-1" };
  const _sfc_main$3 = /* @__PURE__ */ e$1.defineComponent({
    __name: "SwitchComp",
    props: {
      type: {},
      id: {},
      name: {},
      description: {},
      defaultEnable: { type: Boolean },
      noStyle: { type: Boolean },
      attrName: {},
      enableFn: { type: Function },
      disableFn: { type: Function },
      enableFnRunAt: {}
    },
    setup(__props) {
      const item = __props;
      const enabled = e$1.ref(PGStorage.get(item.id, item.defaultEnable));
      e$1.watch(enabled, () => {
        var _a, _b;
        try {
          if (enabled.value) {
            if (!item.noStyle) {
              document.documentElement.setAttribute(item.attrName ?? item.id, "");
            }
            if (item.enableFn) {
              (_a = item.enableFn()) == null ? void 0 : _a.then().catch();
            }
            PGStorage.set(item.id, true);
          } else {
            if (!item.noStyle) {
              document.documentElement.removeAttribute(item.attrName ?? item.id);
            }
            if (item.disableFn) {
              (_b = item.disableFn()) == null ? void 0 : _b.then().catch((err) => {
                throw err;
              });
            }
            PGStorage.set(item.id, false);
          }
        } catch (err) {
          error(`SwitchComp ${item.id} error`, err);
        }
      });
      return (_ctx, _cache) => {
        var _a;
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createVNode(e$1.unref(oe), { class: "m-0.5 h-fit w-full rounded-lg py-1 hover:bg-[#2f2f2f] hover:bg-opacity-50" }, {
            default: e$1.withCtx(() => [
              e$1.createElementVNode("div", _hoisted_1$1, [
                e$1.createVNode(e$1.unref(de), { class: "flex flex-1 flex-row text-[#c6c6c6]" }, {
                  default: e$1.withCtx(() => [
                    e$1.createVNode(e$1.unref(ue), {
                      modelValue: enabled.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => enabled.value = $event),
                      class: e$1.normalizeClass([enabled.value ? "bg-[#ff9000]" : "bg-[#2f2f2f]", "relative inline-flex h-6 w-11 items-center rounded-full outline-none transition-colors"])
                    }, {
                      default: e$1.withCtx(() => [
                        e$1.createElementVNode("span", {
                          class: e$1.normalizeClass([enabled.value ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])
                        }, null, 2)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"]),
                    e$1.createElementVNode("p", _hoisted_2, e$1.toDisplayString(_ctx.name), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          ((_a = _ctx.description) == null ? void 0 : _a.length) ? (e$1.openBlock(), e$1.createBlock(_sfc_main$8, {
            key: 0,
            class: "pl-9",
            description: _ctx.description
          }, null, 8, ["description"])) : e$1.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const useRulePanelStore = /* @__PURE__ */ defineStore("RulePanel", () => {
    const isShow = e$1.ref(false);
    const show = () => {
      isShow.value = true;
    };
    const hide = () => {
      isShow.value = false;
    };
    return { isShow, show, hide };
  });
  const useSideBtnStore = /* @__PURE__ */ defineStore("SideBtn", () => {
    const isShow = useStorage("pg-side-btn-show", true, localStorage);
    const show = () => {
      isShow.value = true;
    };
    const hide = () => {
      isShow.value = false;
    };
    return { isShow, show, hide };
  });
  const _sfc_main$2 = /* @__PURE__ */ e$1.defineComponent({
    __name: "RulePanelView",
    props: {
      rules: {},
      title: {},
      app: {}
    },
    setup(__props) {
      const props = __props;
      const store = useRulePanelStore();
      const currRules = [];
      for (const rule of props.rules) {
        if (rule.checkFn()) {
          currRules.push(rule);
        }
      }
      return (_ctx, _cache) => {
        return e$1.withDirectives((e$1.openBlock(), e$1.createBlock(_sfc_main$9, e$1.mergeProps({ app: _ctx.app, title: _ctx.title, widthPercent: 28, heightPercent: 85, minWidth: 360, minHeight: 600 }, {
          onClose: e$1.unref(store).hide
        }), {
          default: e$1.withCtx(() => [
            (e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(currRules, (rule, i2) => {
              return e$1.createElementVNode("div", { key: i2 }, [
                (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(rule.groups, (group, j2) => {
                  return e$1.openBlock(), e$1.createElementBlock("div", { key: j2 }, [
                    e$1.createVNode(_sfc_main$a, e$1.mergeProps({ ref_for: true }, { title: group.name, isFold: group.fold, isSpecial: rule.isSpecial }), {
                      default: e$1.withCtx(() => [
                        (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(group.items, (item, innerIndex) => {
                          return e$1.openBlock(), e$1.createElementBlock("div", { key: innerIndex }, [
                            item.type === "switch" ? (e$1.openBlock(), e$1.createBlock(_sfc_main$3, e$1.mergeProps({
                              key: 0,
                              ref_for: true
                            }, item), null, 16)) : item.type === "number" ? (e$1.openBlock(), e$1.createBlock(_sfc_main$5, e$1.mergeProps({
                              key: 1,
                              ref_for: true
                            }, item), null, 16)) : item.type === "string" ? (e$1.openBlock(), e$1.createBlock(_sfc_main$4, e$1.mergeProps({
                              key: 2,
                              ref_for: true
                            }, item), null, 16)) : item.type === "editor" ? (e$1.openBlock(), e$1.createBlock(_sfc_main$7, e$1.mergeProps({
                              key: 3,
                              ref_for: true
                            }, item), null, 16)) : item.type === "list" ? (e$1.openBlock(), e$1.createBlock(_sfc_main$6, e$1.mergeProps({
                              key: 4,
                              ref_for: true
                            }, item), null, 16)) : e$1.createCommentVNode("", true)
                          ]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1040)
                  ]);
                }), 128))
              ]);
            }), 64))
          ]),
          _: 1
        }, 16, ["onClose"])), [
          [e$1.vShow, e$1.unref(store).isShow]
        ]);
      };
    }
  });
  const _sfc_main$1 = /* @__PURE__ */ e$1.defineComponent({
    __name: "SideBtnView",
    setup(__props) {
      const ruleStore = useRulePanelStore();
      const sideBtnStore = useSideBtnStore();
      const target = e$1.ref(null);
      const { width, height } = useElementBounding(target, { windowScroll: false });
      const btnPos = useStorage("pg-side-btn-pos", { right: 10, bottom: 180 }, localStorage);
      const isDragging = e$1.ref(false);
      const windowSize = useWindowSize({ includeScrollbar: false });
      const maxPos = e$1.computed(() => {
        return {
          x: windowSize.width.value - width.value,
          y: windowSize.height.value - height.value
        };
      });
      let rAF = 0;
      useDraggable(target, {
        initialValue: {
          x: windowSize.width.value - btnPos.value.right,
          y: windowSize.height.value - btnPos.value.bottom
        },
        preventDefault: true,
        handle: e$1.computed(() => target.value),
        onMove: (pos) => {
          isDragging.value = true;
          btnPos.value.right = maxPos.value.x - pos.x;
          btnPos.value.bottom = maxPos.value.y - pos.y;
          cancelAnimationFrame(rAF);
          rAF = requestAnimationFrame(() => {
            if (btnPos.value.right < 0) {
              btnPos.value.right = 0;
            }
            if (btnPos.value.bottom < 0) {
              btnPos.value.bottom = 0;
            }
            if (btnPos.value.bottom > maxPos.value.y) {
              btnPos.value.bottom = maxPos.value.y;
            }
            if (btnPos.value.right > maxPos.value.x) {
              btnPos.value.right = maxPos.value.x;
            }
          });
        },
        onEnd: () => {
          setTimeout(() => {
            isDragging.value = false;
          }, 50);
        }
      });
      return (_ctx, _cache) => {
        return e$1.unref(sideBtnStore).isShow ? (e$1.openBlock(), e$1.createElementBlock("div", {
          key: 0,
          style: e$1.normalizeStyle({ right: e$1.unref(btnPos).right + "px", bottom: e$1.unref(btnPos).bottom + "px" }),
          class: "group fixed z-[100] flex flex-col justify-end text-white text-opacity-50 will-change-[right,bottom] hover:text-opacity-100"
        }, [
          e$1.createElementVNode("div", {
            ref_key: "target",
            ref: target,
            class: "mt-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-black font-medium transition-colors hover:border-none hover:bg-[#FF9000] hover:text-black",
            onClick: _cache[0] || (_cache[0] = ($event) => !isDragging.value && (e$1.unref(ruleStore).isShow ? e$1.unref(ruleStore).hide() : e$1.unref(ruleStore).show()))
          }, _cache[1] || (_cache[1] = [
            e$1.createElementVNode("div", null, [
              e$1.createElementVNode("p", { class: "select-none text-center text-[13px] leading-4" }, "净化"),
              e$1.createElementVNode("p", { class: "select-none text-center text-[13px] leading-4" }, "大师")
            ], -1)
          ]), 512)
        ], 4)) : e$1.createCommentVNode("", true);
      };
    }
  });
  const pathname = location.pathname;
  const searchRegexps = [
    `\\/search\\/`,
    `\\/(chinese|english)-subtitle(\\?|)$`,
    `\\/new(\\?|)$`,
    `\\/release(\\?|)$`,
    `\\/uncensored-leak(\\?|)$`,
    `\\/genres\\/.*`,
    `\\/makers\\/.*`,
    `\\/today-hot(\\?|)$`,
    `\\/weekly-hot(\\?|)$`,
    `\\/monthly-hot(\\?|)$`,
    `\\/siro(\\?|)$`,
    `\\/luxu(\\?|)$`,
    `\\/gana(\\?|)$`,
    `\\/maan(\\?|)$`,
    `\\/scute(\\?|)$`,
    `\\/ara(\\?|)$`,
    `\\/uncensored-leak(\\?|)$`,
    `\\/fc2(\\?|)$`,
    `\\/heyzo(\\?|)$`,
    `\\/tokyohot(\\?|)$`,
    `\\/1pondo(\\?|)$`,
    `\\/caribbeancom(\\?|)$`,
    `\\/caribbeancompr(\\?|)$`,
    `\\/10musume(\\?|)$`,
    `\\/pacopacomama(\\?|)$`,
    `\\/gachinco(\\?|)$`,
    `\\/xxxav(\\?|)$`,
    `\\/marriedslash(\\?|)$`,
    `\\/naughty4610(\\?|)$`,
    `\\/naughty0930(\\?|)$`,
    `\\/madou(\\?|)$`,
    `\\/twav(\\?|)$`,
    `\\/furuke(\\?|)$`
  ];
  const currPage = () => {
    if (/\/dm[0-9]{1,}\/[a-z]{2,3}$/.test(pathname) || pathname === "") {
      log("pgae: homepage");
      return "homepage";
    }
    for (let i2 = 0; i2 < searchRegexps.length; i2++) {
      if (new RegExp(searchRegexps[i2]).test(pathname)) {
        log("page: search");
        return "search";
      }
    }
    if (new RegExp(`\\/[A-z].*[0-9](|-uncensored-leak|-(chinese|english)-subtitle)$`).test(pathname)) {
      log("page: video");
      return "video";
    }
    return "";
  };
  const ans = currPage();
  const isPageHomepage = () => ans === "homepage";
  const isPageVideo = () => ans === "video";
  const isPageSearch = () => ans === "search";
  const commonBasicItems = [
    {
      type: "switch",
      id: "remove-ads",
      name: "移除 广告",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "hide-footer",
      name: "隐藏 页底footer",
      defaultEnable: true
    }
  ];
  const commonHeaderRightItems = [
    {
      type: "switch",
      id: "common-hide-nav-logo",
      name: "隐藏 LOGO"
    },
    {
      type: "switch",
      id: "common-hide-nav-live",
      name: "隐藏 色色主播",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "common-hide-nav-comic",
      name: "隐藏 无广告免费漫画",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "common-hide-nav-subtitle",
      name: "隐藏 中文字幕"
    },
    {
      type: "switch",
      id: "common-hide-nav-watch-jav",
      name: "隐藏 观看日本AV"
    },
    {
      type: "switch",
      id: "common-hide-nav-amateur",
      name: "隐藏 素人"
    },
    {
      type: "switch",
      id: "common-hide-nav-uncensored",
      name: "隐藏 无码影片"
    },
    {
      type: "switch",
      id: "common-hide-nav-madou",
      name: "隐藏 国产AV"
    },
    {
      type: "switch",
      id: "common-hide-nav-my-collection",
      name: "隐藏 我的收藏"
    },
    {
      type: "switch",
      id: "common-hide-nav-vip",
      name: "隐藏 升级VIP",
      description: ["PC端(宽屏)在我的收藏中", "移动端(窄屏)在选单中"],
      defaultEnable: true
    },
    {
      type: "switch",
      id: "common-hide-nav-more-sites",
      name: "隐藏 更多好站",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "common-hide-nav-tg",
      name: "隐藏 官方Telegram群",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "common-hide-nav-search",
      name: "隐藏 搜寻"
    },
    {
      type: "switch",
      id: "common-hide-nav-locale-switcher",
      name: "隐藏 切换语言"
    },
    {
      type: "switch",
      id: "common-hide-nav-site-live",
      name: "隐藏 地址发布",
      defaultEnable: true,
      description: ["仅在移动端(窄屏)选单中"]
    },
    {
      type: "switch",
      id: "common-hide-nav-mobile-more",
      name: "隐藏 选单",
      description: ["仅移动端(窄屏)显示选单按钮"]
    }
  ];
  const commonGroups = [
    {
      name: "全站通用 - 基本功能",
      fold: true,
      items: commonBasicItems
    },
    {
      name: "全站通用 - 顶栏",
      fold: true,
      items: commonHeaderRightItems
    }
  ];
  const homepageBasicItems = [
    {
      type: "switch",
      id: "homepage-bulr-video-img",
      name: "模糊 视频图片",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-bulr-video-title",
      name: "模糊 视频标题",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-search-title",
      name: "隐藏 搜索框上方文字",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "homepage-hide-search-box",
      name: "隐藏 搜索框"
    },
    {
      type: "switch",
      id: "homepage-hide-search-history",
      name: "隐藏 搜索历史"
    },
    {
      type: "switch",
      id: "homepage-hide-video-genres",
      name: "隐藏 视频类型",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-video-duration",
      name: "隐藏 视频时长",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-revert-full-title",
      name: "显示 完整标题",
      description: ["同步生效：首页、搜索页、视频页"],
      defaultEnable: true
    },
    {
      type: "switch",
      id: "homepage-open-video-load-more",
      name: "加载 更多视频",
      enableFn: async () => {
        let load_number = PGStorage.get("homepage-change-video-load-number");
        if (!load_number) return;
        load_number = load_number.replace("homepage-change-video-load-number-", "");
        if (load_number === "1") return;
        _unsafeWindow.recommendedQuantity = 4 * parseInt(load_number);
      },
      disableFn: async () => {
        _unsafeWindow.recommendedQuantity = 4;
      },
      enableFnRunAt: "document-end"
    },
    {
      type: "list",
      id: "homepage-change-video-load-number",
      name: "自定义 视频加载数量",
      defaultValue: "homepage-change-video-load-number-1",
      description: ["默认:[首次加载]4个,[更多加载]8个", "xN表示加载N倍的视频"],
      disableValue: "homepage-change-video-load-number-1",
      options: [
        {
          id: "homepage-change-video-load-number-1",
          name: "x1"
        },
        {
          id: "homepage-change-video-load-number-2",
          name: "x2"
        },
        {
          id: "homepage-change-video-load-number-3",
          name: "x3"
        },
        {
          id: "homepage-change-video-load-number-4",
          name: "x4"
        }
      ]
    }
  ];
  const homepageGroups = [
    {
      name: "主页-基本功能",
      items: homepageBasicItems
    }
  ];
  const searchBasicItems = [
    {
      type: "switch",
      id: "homepage-bulr-video-img",
      name: "模糊 视频图片",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-bulr-video-title",
      name: "模糊 视频标题",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-video-genres",
      name: "隐藏 视频类型",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-video-duration",
      name: "隐藏 视频时长",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-revert-full-title",
      name: "显示 完整标题",
      description: ["同步生效：首页、搜索页、视频页"],
      defaultEnable: true
    }
  ];
  const searchGroups = [
    {
      name: "搜索页-基本功能",
      items: searchBasicItems
    }
  ];
  const videoBasicItems = [
    {
      type: "switch",
      id: "homepage-bulr-video-img",
      name: "模糊 视频图片",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-bulr-video-title",
      name: "模糊 视频标题",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-video-genres",
      name: "隐藏 视频类型",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-hide-video-duration",
      name: "隐藏 视频时长",
      description: ["同步生效：首页、搜索页、视频页"]
    },
    {
      type: "switch",
      id: "homepage-revert-full-title",
      name: "显示 完整标题",
      description: ["同步生效：首页、搜索页、视频页"],
      defaultEnable: true
    },
    {
      type: "switch",
      id: "video-page-auto-open-uncensored",
      name: "自动 切换无码",
      description: ["仅在打开普通视频时生效", "查找并自动切换"],
      enableFnRunAt: "document-end",
      enableFn: async () => {
        const optionMenuItems = document.querySelectorAll("a[id^='option-menu-item'");
        optionMenuItems.forEach((optionMenuItem) => {
          const url = optionMenuItem.getAttribute("href");
          if (url == null ? void 0 : url.includes("uncensored")) {
            optionMenuItem.click();
          }
        });
      }
    }
  ];
  const videoPlayerItems = [
    {
      type: "switch",
      id: "video-page-auto-bpx-player-quality",
      name: "自动 最高画质",
      defaultEnable: true,
      enableFnRunAt: "document-end",
      enableFn: async () => {
        var _a, _b;
        const player = _unsafeWindow.player;
        if (!player) return;
        if (!((_b = (_a = player.config) == null ? void 0 : _a.quality) == null ? void 0 : _b.options)) return;
        const maxQuality = Math.max.apply(null, player.config.quality.options);
        player.quality = maxQuality;
        player.config.quality.default = maxQuality;
        player.config.quality.selected = maxQuality;
      }
    },
    {
      type: "number",
      id: "video-page-bpx-player-speed",
      name: "修改 播放速度(-1禁用)",
      description: ["上下方向键快速调整"],
      addonText: "倍",
      minValue: 0.5,
      maxValue: 10,
      step: 0.5,
      defaultValue: -1,
      disableValue: -1,
      fn: async (value) => {
        const player = _unsafeWindow.player;
        if (!player) return;
        player.speed = value;
      }
    },
    {
      type: "number",
      id: "video-page-bpx-player-volume",
      name: "修改 播放音量(-1禁用)",
      description: ["上下方向键快速调整"],
      addonText: "%",
      minValue: 0,
      maxValue: 100,
      step: 5,
      defaultValue: -1,
      disableValue: -1,
      fn: async (value) => {
        const player = _unsafeWindow.player;
        if (!player) return;
        player.volume = value / 100;
      }
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-state-wrap",
      name: "隐藏 视频暂停时大播放键"
    },
    {
      type: "switch",
      id: "video-page-cancel-bpx-player-focus-stop",
      name: "取消 失去焦点自动暂停",
      noStyle: true,
      enableFn: async () => {
        document.addEventListener("visibilitychange", () => {
          var _a;
          if (document.hasFocus()) {
            (_a = _unsafeWindow.player) == null ? void 0 : _a.pause();
          }
        });
      },
      enableFnRunAt: "document-end",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "video-page-hook-bpx-player-open",
      name: "拦截 播放时打开窗口",
      noStyle: true,
      enableFn: async () => {
        const player = document.querySelector(`div.order-first > div > div.relative > div`);
        if (player && player.hasAttribute("@click")) {
          player.removeAttribute("@click");
        }
        if (player && player.hasAttribute("@keyup.space.window")) {
          player.removeAttribute("@keyup.space.window");
        }
      },
      enableFnRunAt: "document-end",
      defaultEnable: true
    }
  ];
  const videoPlayerControlItems = [
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-prev",
      name: "隐藏 快退按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-play",
      name: "隐藏 播放/暂停按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-next",
      name: "隐藏 快进按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-progress",
      name: "隐藏 进度条"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-subtitle",
      name: "隐藏 字幕按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-volume",
      name: "隐藏 音量按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-setting",
      name: "隐藏 视频设置按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-pip",
      name: "隐藏 画中画按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-ctrl-full",
      name: "隐藏 全屏按钮"
    },
    {
      type: "switch",
      id: "video-page-hide-box-player-jump",
      name: "隐藏 快进控制栏",
      description: ["仅移动端(窄屏)显示"],
      defaultEnable: true
    },
    {
      type: "switch",
      id: "video-page-hide-bpx-player-loop",
      name: "隐藏 循环播放控制栏",
      defaultEnable: true
    }
  ];
  const videoToolbarItems = [
    {
      type: "switch",
      id: "video-page-hide-below-info-saved",
      name: "隐藏 收藏",
      defaultEnable: true
    },
    {
      type: "switch",
      id: "video-page-hide-below-info-playlist",
      name: "隐藏 片单"
    },
    {
      type: "switch",
      id: "video-page-hide-below-info-download",
      name: "隐藏 下载"
    },
    {
      type: "switch",
      id: "video-page-hide-below-info-share",
      name: "隐藏 分享"
    },
    {
      type: "switch",
      id: "video-page-show-below-info-m3u8",
      name: "获取 M3U8",
      description: ["截取并显示m3u8, 可使用其他播放器播放"],
      enableFnRunAt: "document-end",
      enableFn: async () => {
        var _a, _b;
        const button = `<div id="div-m3u8" class="mb-5 p-6 bg-gray-800 rounded-lg space-y-3">
    <div class="flex rounded-md shadow-sm">
        <div class="relative flex items-stretch grow focus-within:z-10">
            <input
                value="${((_a = _unsafeWindow.hls) == null ? void 0 : _a.url) || "获取失败,请点击刷新按钮"}"
                type="text"
                id="m3u8-url"
                class="bg-gray-900 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-none rounded-l-md text-nord4 text-sm border-gray-700"/>
        </div>
        <button
            id="reget-m3u8"
            class="relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-700 text-nord6 text-sm font-medium bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500">
            <span class="whitespace-nowrap">刷新</span>
        </button>
        <button
            id="copy-m3u8"
            class="relative inline-flex items-center space-x-2 px-4 py-2 border rounded-r-md border-gray-700 text-nord6 text-sm font-medium bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500">
            <span class="whitespace-nowrap">复制</span>
        </button>
    </div>
</div>
`;
        (_b = document.querySelector("div.flex-1.order-first div.mt-4:has(h1)")) == null ? void 0 : _b.insertAdjacentHTML("afterend", button);
        document.getElementById("copy-m3u8").addEventListener("click", () => {
          const m3u8Url = document.getElementById("m3u8-url").getAttribute("value");
          if (m3u8Url) navigator.clipboard.writeText(m3u8Url).then().catch();
        });
        document.getElementById("reget-m3u8").addEventListener("click", () => {
          var _a2;
          const m3u8Url = document.getElementById("m3u8-url");
          if (m3u8Url) m3u8Url.setAttribute("value", ((_a2 = _unsafeWindow.hls) == null ? void 0 : _a2.url) || "未发现");
        });
      },
      disableFn: async () => {
        var _a;
        (_a = document.getElementById("div-m3u8")) == null ? void 0 : _a.remove();
      }
    },
    {
      type: "switch",
      id: "video-page-unfold-below-info-show-more",
      name: "展开 显示更多",
      description: ["自动隐藏 [展开/收起] 按钮"]
    }
  ];
  const videoGroups = [
    {
      name: "播放页-基本功能",
      fold: true,
      items: videoBasicItems
    },
    {
      name: "播放页-播放器",
      fold: true,
      items: videoPlayerItems
    },
    {
      name: "播放页-播放控制栏",
      fold: true,
      items: videoPlayerControlItems
    },
    {
      name: "播放页-视频下方信息",
      fold: true,
      items: videoToolbarItems
    }
  ];
  const commonStyle = `@charset "UTF-8";html[remove-ads] #html-ads,html[remove-ads] #ts_ad_video_aes67,html[remove-ads] div.pt-16.pb-4.px-4:has(div.hidden),html[remove-ads] div[class|=root]:has(div[class|=rootContent]),html[remove-ads] div.space-y-6.mb-6:has(div.hidden),html[remove-ads] div[x-show^="currentTab === 'video_details'"] div ul,html[remove-ads] div.-m-5.mb-2:has(iframe),html[remove-ads] html iframe[id|=container],html[remove-ads] html iframe[class|=container],html[remove-ads] body div.fixed:has(>a[href^="https://bit.ly"][target=_blank]),html[remove-ads] body>div[class|=pl]:has(link),html[remove-ads] div.flex-1.order-first div.under_player{display:none!important}html[hide-footer] footer[aria-labelledby=footerHeading],html[hide-footer] #footerHeading,html[hide-footer] div.space-y-5.mb-5{display:none!important}html[common-hide-nav-logo] div a[href^="https://missav.com"] span.font-serif:has(span),html[common-hide-nav-logo] div a[href^="https://missav.ws"] span.font-serif:has(span){visibility:hidden!important}html[common-hide-nav-live] a[href*=myavlive],html[common-hide-nav-site-live] a[href^="https://missav.live"],html[common-hide-nav-vip] div a[href$="/vip"],html[common-hide-nav-comic] a[href*=mycomic],html[common-hide-nav-subtitle] a[href$=-subtitle]{display:none!important}html[common-hide-nav-watch-jav] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'jav'"]),html[common-hide-nav-watch-jav] div a[href="#"]:has(svg[x-show$="'jav'"]){display:none!important}html[common-hide-nav-amateur] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'amateur'"]),html[common-hide-nav-amateur] div a[href="#"]:has(svg[x-show$="'amateur'"]){display:none!important}html[common-hide-nav-uncensored] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'uncensored'"]),html[common-hide-nav-uncensored] div a[href="#"]:has(svg[x-show$="'uncensored'"]){display:none!important}html[common-hide-nav-madou] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'madou'"]),html[common-hide-nav-madou] div a[href="#"]:has(svg[x-show$="'madou'"]){display:none!important}html[common-hide-nav-my-collection] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'saved'"]),html[common-hide-nav-my-collection] div a[href="#"]:has(svg[x-show$="'saved'"]){display:none!important}html[common-hide-nav-tg] div.relative>div>div>div>a[href*="https://bit.ly/3uTvrRM"]{display:none!important}html[common-hide-nav-more-sites] nav div.relative:has(>a[href="#"]):has(>div[x-show$="'partners'"]),html[common-hide-nav-more-sites] div a[href="#"]:has(svg[x-show$="'partners'"]){display:none!important}html[common-hide-nav-search] a[alt=検索],html[common-hide-nav-search] a[alt=수색],html[common-hide-nav-search] a[alt=Cari],html[common-hide-nav-search] a[alt=搜寻],html[common-hide-nav-search] a[alt=Search]{display:none!important}html[common-hide-nav-locale-switcher] div.relative:has(>a[href="#"]):has(>div[x-show$=showLocaleSwitcher]){display:none!important}html[common-hide-nav-mobile-more] div div.relative:has(>a[href="#"]):has(>div[x-show$="'mobile'"]){display:none!important}`;
  const homepageStyle = 'html[homepage-hide-search-title] div.is-home.content-without-search div div h1:has(span.text-primary){display:none!important}html[homepage-hide-search-box] div.is-home.content-without-search div.flex.flex-col.justify-center.content-center.text-center,html[homepage-hide-search-history] div[x-show="searchHistory.length"],html[homepage-hide-video-genres] div a[x-show^="item.dvd_id &&"] span,html[homepage-hide-video-duration] div a[x-show="item.dvd_id"] span{display:none!important}html[homepage-revert-full-title] div.thumbnail.group div.truncate:has(a[x-text="item.full_title"]){white-space:normal!important}html[homepage-revert-full-title] div.flex-1 div div.max-h-14:has(a[x-text="item.full_title"]){max-height:none!important}html[homepage-bulr-video-img] div.relative.rounded.overflow-hidden.shadow-lg,html[homepage-bulr-video-title] div.text-sm a[x-text="item.full_title"]{filter:blur(5px)}';
  const searchStyle = 'html[homepage-hide-search-title] div.is-home.content-without-search div div h1:has(span.text-primary){display:none!important}html[homepage-hide-video-genres] div.relative.rounded.overflow-hidden.shadow-lg a span.left-1,html[homepage-hide-video-genres] div a[x-show^="item.dvd_id &&"] span,html[homepage-hide-video-duration] div.relative.rounded.overflow-hidden.shadow-lg a span.right-1,html[homepage-hide-video-duration] div a[x-show="item.dvd_id"] span{display:none!important}html[homepage-revert-full-title] div.thumbnail.group div.truncate:has(a[x-text="item.full_title"]),html[homepage-revert-full-title] div.thumbnail.group div.my-2.text-sm.text-nord4.truncate:has(a){white-space:normal!important}html[homepage-revert-full-title] div.flex-1 div div.max-h-14:has(a[x-text="item.full_title"]){max-height:none!important}html[homepage-bulr-video-img] div.relative.rounded.overflow-hidden.shadow-lg,html[homepage-bulr-video-title] div.thumbnail.group div.my-2.text-sm.text-nord4.truncate a,html[homepage-bulr-video-title] div.text-sm a[x-text="item.full_title"]{filter:blur(5px)}';
  const videoStyle = 'html[homepage-hide-video-genres] div a[x-show^="item.dvd_id &&"] span,html[homepage-hide-video-duration] div a[x-show="item.dvd_id"] span{display:none!important}html[homepage-revert-full-title] div.thumbnail.group div.truncate:has(a[x-text="item.full_title"]){white-space:normal!important}html[homepage-revert-full-title] div.flex-1 div div.max-h-14:has(a[x-text="item.full_title"]){max-height:none!important}html[homepage-bulr-video-img] div.relative.rounded.overflow-hidden.shadow-lg,html[homepage-bulr-video-title] div.text-sm a[x-text="item.full_title"]{filter:blur(5px)}html[video-page-hide-bpx-player-state-wrap] div.plyr button.plyr__control--overlaid[data-plyr=play]:has(span.plyr__sr-only){display:none!important}html[video-page-hide-bpx-player-ctrl-prev] div.plyr__controls button.plyr__controls__item[data-plyr=rewind],html[video-page-hide-bpx-player-ctrl-play] div.plyr__controls button.plyr__controls__item[data-plyr=play],html[video-page-hide-bpx-player-ctrl-next] div.plyr__controls button.plyr__controls__item[data-plyr=fast-forward],html[video-page-hide-bpx-player-ctrl-next] div.plyr__controls div.plyr__controls__item.plyr__progress__container,html[video-page-hide-bpx-player-ctrl-subtitle] div.plyr__controls button.plyr__controls__item[data-plyr=captions]{display:none!important}html[video-page-hide-bpx-player-ctrl-volume] div.plyr__controls div.plyr__controls__item.plyr__volume:has(button[data-plyr=mute]){display:none!important}html[video-page-hide-bpx-player-ctrl-setting] div.plyr__controls div.plyr__controls__item.plyr__menu:has(button[data-plyr=settings]){display:none!important}html[video-page-hide-bpx-player-ctrl-pip] div.plyr__controls button.plyr__controls__item[data-plyr=pip],html[video-page-hide-bpx-player-ctrl-full] div.plyr__controls button.plyr__controls__item[data-plyr=fullscreen]{display:none!important}html[video-page-hide-bpx-player-loop] div.-mx-4.px-3.py-2.bg-black.rounded-b-0:has(div.flex.items-center.flex-nowrap.leading-5){display:none!important}html[video-page-hide-below-info-saved] div button:has(svg[x-show$=saved]){display:none!important}html[video-page-hide-below-info-playlist] div button.shadow-sm:has(svg[stroke-width]){display:none!important}html[video-page-hide-below-info-download] div a[href^="https://rapidgator.net"]:has(svg){display:none!important}html[video-page-hide-below-info-share] div button.shadow-sm:has(svg[aria-hidden]){display:none!important}html[video-page-unfold-below-info-show-more] div[x-show^=currentTab] div div[x-data*=showMore] div.text-secondary.break-all{overflow:visible!important;display:block!important;-webkit-box-orient:horizontal!important;-webkit-line-clamp:none!important}html[video-page-unfold-below-info-show-more] div[x-show^=currentTab] div div[x-data*=showMore] div:has(a[href="#"]){display:none!important}';
  const rules = [
    {
      name: "homepage",
      groups: homepageGroups,
      style: homepageStyle,
      checkFn: () => isPageHomepage()
    },
    {
      name: "video",
      groups: videoGroups,
      style: videoStyle,
      checkFn: () => isPageVideo()
    },
    {
      name: "search",
      groups: searchGroups,
      style: searchStyle,
      checkFn: () => isPageSearch()
    },
    {
      name: "common",
      groups: commonGroups,
      style: commonStyle,
      isSpecial: true,
      checkFn: () => true
    }
  ];
  const _hoisted_1 = { class: "text-base" };
  const _sfc_main = /* @__PURE__ */ e$1.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return e$1.openBlock(), e$1.createElementBlock("div", _hoisted_1, [
          e$1.createVNode(_sfc_main$2, e$1.normalizeProps(e$1.guardReactiveProps({ rules: e$1.unref(rules), app: "MISSAV", title: "净化增强" })), null, 16),
          e$1.createVNode(_sfc_main$1)
        ]);
      };
    }
  });
  const waitForHead = () => {
    return new Promise((resolve) => {
      if (document.head) {
        resolve();
      }
      const observer = new MutationObserver(() => {
        if (document.head) {
          observer.disconnect();
          resolve();
        }
      });
      observer.observe(document, { childList: true, subtree: true });
    });
  };
  const waitForBody = () => {
    return new Promise((resolve) => {
      if (document.body) {
        resolve();
      }
      const observer = new MutationObserver(() => {
        if (document.body) {
          observer.disconnect();
          resolve();
        }
      });
      observer.observe(document, { childList: true, subtree: true });
    });
  };
  const loadRules = (rules2) => {
    for (const rule of rules2) {
      if (!rule.checkFn()) continue;
      for (const group of rule.groups) {
        for (const item of group.items) {
          try {
            switch (item.type) {
              case "switch":
                loadSwitchItem(item);
                break;
              case "number":
                loadNumberItem(item);
                break;
              case "list":
                loadListItem(item);
                break;
              case "string":
                loadStringItem(item);
                break;
            }
          } catch (err) {
            error(`loadRules load item failed, id=${item.id}, name=${item.name}, type=${item.type}`, err);
          }
        }
      }
    }
  };
  const loadStyles = (rules2) => {
    var _a;
    for (const rule of rules2) {
      if (!rule.checkFn() || !rule.style) continue;
      try {
        const style = document.createElement("style");
        style.className = `pg-css ${rule.name}`;
        style.textContent = rule.style;
        (_a = document.documentElement) == null ? void 0 : _a.appendChild(style);
      } catch (err) {
        error(`loadStyles error, name=${rule.name}`, err);
      }
    }
  };
  const loadSwitchItem = (item) => {
    var _a;
    const enable = PGStorage.get(item.id, item.defaultEnable);
    if (!enable) return;
    if (!item.noStyle) {
      document.documentElement.setAttribute(item.attrName ?? item.id, "");
    }
    if (item.enableFn) {
      if (item.enableFnRunAt === "document-end" && document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
          var _a2;
          (_a2 = item.enableFn()) == null ? void 0 : _a2.then().catch();
        });
      } else {
        (_a = item.enableFn()) == null ? void 0 : _a.then().catch();
      }
    }
  };
  const loadNumberItem = (item) => {
    var _a;
    const value = PGStorage.get(item.id, item.defaultValue);
    if (value === item.disableValue) return;
    if (!item.noStyle) {
      document.documentElement.setAttribute(item.attrName ?? item.id, "");
    }
    (_a = item.fn(value)) == null ? void 0 : _a.then().catch();
  };
  const loadStringItem = (item) => {
    var _a;
    const value = PGStorage.get(item.id, item.defaultValue);
    if (value === item.disableValue) return;
    if (!item.noStyle) {
      document.documentElement.setAttribute(item.attrName ?? item.id, "");
    }
    (_a = item.fn(value)) == null ? void 0 : _a.then().catch();
  };
  const loadListItem = (item) => {
    const value = PGStorage.get(item.id, item.defaultValue);
    if (value === item.disableValue) return;
    document.documentElement.setAttribute(value, "");
  };
  const loadModules = () => {
    waitForHead().then(() => {
      loadStyles(rules);
      log("loadStyles done");
    });
    loadRules(rules);
    log("loadRules done");
  };
  const css = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}:host{font-family:Arial,Helvetica,sans-serif,Microsoft YaHei!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-y-0{top:0;bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.z-10{z-index:10}.z-\\[10000000\\]{z-index:10000000}.z-\\[100\\]{z-index:100}.order-first{order:-9999}.m-0\\.5{margin:2px}.m-1{margin:4px}.mx-2{margin-left:8px;margin-right:8px}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:4px;margin-bottom:4px}.mb-0\\.5{margin-bottom:2px}.mb-1\\.5{margin-bottom:6px}.mb-2{margin-bottom:8px}.mb-3{margin-bottom:12px}.mb-5{margin-bottom:20px}.ml-2{margin-left:8px}.ml-4{margin-left:16px}.ml-auto{margin-left:auto}.mr-1{margin-right:4px}.mt-1{margin-top:4px}.mt-4{margin-top:16px}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.size-8{width:32px;height:32px}.h-10{height:40px}.h-4{height:16px}.h-5{height:20px}.h-6{height:24px}.h-fit{height:-moz-fit-content;height:fit-content}.max-h-60{max-height:240px}.min-h-\\[calc\\(100\\%-2\\.5rem\\)\\]{min-height:calc(100% - 40px)}.w-1\\/5{width:20%}.w-10{width:40px}.w-11{width:44px}.w-2\\/5{width:40%}.w-24{width:96px}.w-4{width:16px}.w-5{width:20px}.w-6{width:24px}.w-full{width:100%}.flex-1{flex:1 1 0%}.grow{flex-grow:1}.translate-x-1{--tw-translate-x: 4px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-6{--tw-translate-x: 24px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(8px * var(--tw-space-x-reverse));margin-left:calc(8px * calc(1 - var(--tw-space-x-reverse)))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(12px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(12px * var(--tw-space-y-reverse))}.self-center{align-self:center}.overflow-auto{overflow:auto}.overscroll-none{overscroll-behavior:none}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-md{border-radius:6px}.rounded-none{border-radius:0}.rounded-xl{border-radius:12px}.rounded-l-md{border-top-left-radius:6px;border-bottom-left-radius:6px}.rounded-r-md{border-top-right-radius:6px;border-bottom-right-radius:6px}.border{border-width:1px}.border-2{border-width:2px}.border-\\[\\#252525\\]{--tw-border-opacity: 1;border-color:rgb(37 37 37 / var(--tw-border-opacity, 1))}.border-gray-700{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.border-gray-800{--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))}.border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.bg-\\[\\#0e0e0e\\]{--tw-bg-opacity: 1;background-color:rgb(14 14 14 / var(--tw-bg-opacity, 1))}.bg-\\[\\#1b1b1b\\]{--tw-bg-opacity: 1;background-color:rgb(27 27 27 / var(--tw-bg-opacity, 1))}.bg-\\[\\#1f1f1f\\]{--tw-bg-opacity: 1;background-color:rgb(31 31 31 / var(--tw-bg-opacity, 1))}.bg-\\[\\#252525\\]{--tw-bg-opacity: 1;background-color:rgb(37 37 37 / var(--tw-bg-opacity, 1))}.bg-\\[\\#2f2f2f\\]{--tw-bg-opacity: 1;background-color:rgb(47 47 47 / var(--tw-bg-opacity, 1))}.bg-\\[\\#FF9000\\],.bg-\\[\\#ff9000\\]{--tw-bg-opacity: 1;background-color:rgb(255 144 0 / var(--tw-bg-opacity, 1))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-950{--tw-bg-opacity: 1;background-color:rgb(5 46 22 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.p-1{padding:4px}.p-1\\.5{padding:6px}.p-2{padding:8px}.p-6{padding:24px}.px-2{padding-left:8px;padding-right:8px}.px-2\\.5{padding-left:10px;padding-right:10px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.py-0\\.5{padding-top:2px;padding-bottom:2px}.py-1{padding-top:4px;padding-bottom:4px}.py-1\\.5{padding-top:6px;padding-bottom:6px}.py-2{padding-top:8px;padding-bottom:8px}.pl-1{padding-left:4px}.pl-10{padding-left:40px}.pl-3{padding-left:12px}.pl-9{padding-left:36px}.pr-2{padding-right:8px}.pr-4{padding-right:16px}.pt-2{padding-top:8px}.text-left{text-align:left}.text-center{text-align:center}.font-serif{font-family:ui-serif,Georgia,Cambria,Times New Roman,Times,serif}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.text-base{font-size:16px;line-height:24px}.text-lg{font-size:18px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-4{line-height:16px}.leading-6{line-height:24px}.text-\\[\\#969696\\]{--tw-text-opacity: 1;color:rgb(150 150 150 / var(--tw-text-opacity, 1))}.text-\\[\\#bbb\\]{--tw-text-opacity: 1;color:rgb(187 187 187 / var(--tw-text-opacity, 1))}.text-\\[\\#c6c6c6\\]{--tw-text-opacity: 1;color:rgb(198 198 198 / var(--tw-text-opacity, 1))}.text-\\[\\#c9c9c9\\]{--tw-text-opacity: 1;color:rgb(201 201 201 / var(--tw-text-opacity, 1))}.text-\\[\\#ff9000\\]{--tw-text-opacity: 1;color:rgb(255 144 0 / var(--tw-text-opacity, 1))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-gray-100{--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity, 1))}.text-gray-200{--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-opacity-50{--tw-text-opacity: .5}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-gray-700{--tw-ring-opacity: 1;--tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity, 1))}.ring-white\\/5{--tw-ring-color: rgb(255 255 255 / .05)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-200{transition-duration:.2s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.will-change-\\[right\\,bottom\\]{will-change:right,bottom}.will-change-\\[top\\,left\\]{will-change:top,left}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.invalid\\:border-red-500:invalid{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.focus-within\\:z-10:focus-within{z-index:10}.hover\\:border-none:hover{border-style:none}.hover\\:border-\\[\\#ff9000\\]:hover{--tw-border-opacity: 1;border-color:rgb(255 144 0 / var(--tw-border-opacity, 1))}.hover\\:border-green-600:hover{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity, 1))}.hover\\:bg-\\[\\#262626\\]:hover{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.hover\\:bg-\\[\\#292929\\]:hover{--tw-bg-opacity: 1;background-color:rgb(41 41 41 / var(--tw-bg-opacity, 1))}.hover\\:bg-\\[\\#2f2f2f\\]:hover{--tw-bg-opacity: 1;background-color:rgb(47 47 47 / var(--tw-bg-opacity, 1))}.hover\\:bg-\\[\\#FF9000\\]:hover{--tw-bg-opacity: 1;background-color:rgb(255 144 0 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-600:hover{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.hover\\:bg-green-950:hover{--tw-bg-opacity: 1;background-color:rgb(5 46 22 / var(--tw-bg-opacity, 1))}.hover\\:bg-opacity-40:hover{--tw-bg-opacity: .4}.hover\\:bg-opacity-50:hover{--tw-bg-opacity: .5}.hover\\:text-\\[\\#ff9000\\]:hover{--tw-text-opacity: 1;color:rgb(255 144 0 / var(--tw-text-opacity, 1))}.hover\\:text-black:hover{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.hover\\:text-opacity-100:hover{--tw-text-opacity: 1}.hover\\:ring-\\[\\#ff9000\\]:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(255 144 0 / var(--tw-ring-opacity, 1))}.focus\\:border-\\[\\#2f2f2f\\]:focus{--tw-border-opacity: 1;border-color:rgb(47 47 47 / var(--tw-border-opacity, 1))}.focus\\:border-gray-500:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-gray-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity, 1))}.focus\\:invalid\\:border-red-500:invalid:focus{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.focus-visible\\:border-indigo-500:focus-visible{--tw-border-opacity: 1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-black\\/75:focus-visible{--tw-ring-color: rgb(0 0 0 / .75)}.focus-visible\\:ring-gray-500:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-offset-1:focus-visible{--tw-ring-offset-width: 1px}@media (min-width: 640px){.sm\\:text-sm{font-size:14px;line-height:20px}}';
  const main = () => {
    const wrap = document.createElement("div");
    wrap.id = "pg";
    const root = wrap.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = css;
    root.appendChild(style);
    waitForBody().then(() => document.body.appendChild(wrap));
    const app = e$1.createApp(_sfc_main);
    app.config.errorHandler = (err, vm, info) => {
      error("Vue:", err);
      error("Component:", vm);
      error("Info:", info);
    };
    const pinia = createPinia();
    app.use(pinia);
    app.mount(
      (() => {
        const node = document.createElement("div");
        root.appendChild(node);
        return node;
      })()
    );
  };
  const menu = () => {
    const ruleStore = useRulePanelStore();
    const sideBtnStore = useSideBtnStore();
    _GM_registerMenuCommand("🚥 净化增强大师", () => {
      ruleStore.isShow ? ruleStore.hide() : ruleStore.show();
    });
    _GM_registerMenuCommand("📌 快捷按钮开关", () => {
      sideBtnStore.isShow ? sideBtnStore.hide() : sideBtnStore.show();
    });
  };
  try {
    log(`script start, url: ${location.href}`);
    loadModules();
    main();
    menu();
    log(`script end`);
  } catch (err) {
    error("main.ts error", err);
  }

})(Vue);