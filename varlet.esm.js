import { reactive as Ne, ref as E, onMounted as Fe, onUnmounted as xn, onActivated as wi, onDeactivated as Si, getCurrentInstance as Aa, provide as Qo, computed as W, inject as xo, nextTick as Oe, createApp as Ns, onBeforeUnmount as Ci, h as _o, isVNode as ki, watch as ne, onBeforeMount as Ds, defineComponent as ae, createVNode as ee, Teleport as st, Transition as He, withDirectives as Ce, vShow as za, mergeProps as Ve, openBlock as w, createBlock as me, resolveDynamicComponent as ut, normalizeClass as m, normalizeStyle as K, resolveComponent as re, resolveDirective as je, withCtx as ce, createElementVNode as A, renderSlot as q, toDisplayString as J, createElementBlock as M, Fragment as Te, renderList as Ie, createCommentVNode as Z, onUpdated as $i, createTextVNode as he, pushScopeId as el, popScopeId as nl, withModifiers as Vn, normalizeProps as rl, guardReactiveProps as Bs, vModelText as As, toRefs as zs, withKeys as Gi, toRaw as qi, TransitionGroup as Fs, Comment as Ls } from "vue";
var al = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(al);
const on = Ne(al), _e = (e) => typeof e == "string", At = (e) => typeof e == "boolean", Qe = (e) => typeof e == "number", Ti = (e) => Object.prototype.toString.call(e) === "[object Object]", Rs = (e) => typeof e == "object" && e !== null, Se = (e) => Array.isArray(e), Us = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : _e(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : At(e) ? Number(e) : e, dt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Oi = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Pi = () => typeof window < "u", Ki = (e) => [...new Set(e)], Ys = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var Xi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Zi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Ws = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && dt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Ji = (e) => e, Qi = (e) => Math.pow(e, 3), tl = (e) => e < 0.5 ? Qi(e * 2) / 2 : 1 - Qi((1 - e) * 2) / 2, vt = (e, n) => e == null ? n : e, il = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, fr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function xi(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        xi(i, a, t, o, l, "next", s);
      }
      function l(s) {
        xi(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function js(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ft(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ei(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Gs(e) {
  return zt.apply(this, arguments);
}
function zt() {
  return zt = Hs(function* (e) {
    yield Mn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: i,
      innerHeight: o
    } = window, l = a <= i && t >= 0, s = n <= o && r >= 0;
    return l && s;
  }), zt.apply(this, arguments);
}
function Et(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Sa(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function qs(e) {
  for (var n = [], r = e; r !== window; )
    r = Sa(r), n.push(r);
  return n;
}
var ol = (e) => _e(e) && e.endsWith("rem"), Ks = (e) => _e(e) && e.endsWith("px") || Qe(e), Xs = (e) => _e(e) && e.endsWith("%"), ll = (e) => _e(e) && e.endsWith("vw"), sl = (e) => _e(e) && e.endsWith("vh"), Me = (e) => {
  if (Qe(e))
    return e;
  if (Ks(e))
    return +e.replace("px", "");
  if (ll(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (sl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (ol(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return _e(e) ? L(e) : 0;
}, Ee = (e) => {
  if (e != null)
    return Xs(e) || ll(e) || sl(e) || ol(e) ? e : Me(e) + "px";
}, We = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = Ee(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function kn(e) {
  var n = il();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Zs(e) {
  var n = il();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ct(e) {
  kn(() => {
    kn(e);
  });
}
function Mn() {
  return new Promise((e) => {
    kn(() => {
      kn(e);
    });
  });
}
function xa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = ft(e), s = Ei(e);
  return new Promise((u) => {
    var d = () => {
      var f = (Date.now() - o) / t;
      if (f < 1) {
        var v = l + (r - l) * i(f), c = s + (a - s) * i(f);
        e.scrollTo(c, v), kn(d);
      } else
        e.scrollTo(a, r), u();
    };
    kn(d);
  });
}
function ul(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + Ys(a);
    return n[i] = t, n;
  }, {});
}
function Js() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Qs = ["collect", "clear"];
function _i(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        _i(i, a, t, o, l, "next", s);
      }
      function l(s) {
        _i(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function xs(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _a.apply(this, arguments);
}
function Ze(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function _s(e) {
  var n = Ns(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Fa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => _o(e, _a({}, n, r));
    }
  }, {
    unmount: t
  } = _s(a);
  return {
    unmountInstance: t
  };
}
function eu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      ki(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Ne([]), r = Aa(), a = () => {
    var l = eu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    dt(n, l);
  };
  Qo(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function yn(e) {
  if (!dl(e))
    return {
      index: null
    };
  var n = xo(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Aa();
  Fe(() => {
    Oe().then(() => r(i));
  }), xn(() => {
    Oe().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function un(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    dt(n, i);
  }, t = (i) => {
    Qo(e, _a({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function dn(e) {
  if (!dl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = xo(e), {
    collect: r,
    clear: a
  } = n, t = xs(n, Qs), i = (o) => {
    Fe(() => r(o)), Ci(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function dl(e) {
  var n = Aa();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = eo(function* (i, o, l) {
      if (!Se(i) || !i.length)
        return !0;
      var s = yield Promise.all(i.map((u) => u(o, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(o, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = eo(function* (i, o, l, s, u) {
      i.includes(o) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(o, l, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function nu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), xn(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function vl() {
  var e = E(!1);
  return wi(() => {
    e.value = !1;
  }), Si(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var n = "var-" + e, r = (t) => t ? t.startsWith("--") ? "" + n + t : n + "__" + t : n, a = function() {
    for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
      i[o] = arguments[o];
    return i.map((l) => {
      if (Se(l)) {
        var [s, u, d = null] = l;
        return s ? u : d;
      }
      return l;
    });
  };
  return {
    n: r,
    classes: a
  };
}
function N(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
}
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, et.apply(this, arguments);
}
var {
  n: fl
} = _("ripple"), no = 250;
function ru(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function au(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, f = (i - o * 2) / 2, v = s - o, c = u - o;
  return {
    x: v,
    y: c,
    centerX: d,
    centerY: f,
    size: l
  };
}
function cl(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: i,
        centerY: o,
        size: l
      } = au(this, e), s = document.createElement("div");
      s.classList.add(fl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), ru(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Ft() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + fl());
    if (!!r.length) {
      var a = r[r.length - 1], t = no - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, no);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function ml() {
  var e = this._ripple;
  !Js() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function tu(e, n) {
  var r, a, t;
  e._ripple = et({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : on.touchmoveForbid,
    removeRipple: Ft.bind(e)
  }), e.addEventListener("touchstart", cl, {
    passive: !0
  }), e.addEventListener("touchmove", ml, {
    passive: !0
  }), e.addEventListener("dragstart", Ft, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function iu(e) {
  e.removeEventListener("touchstart", cl), e.removeEventListener("touchmove", ml), e.removeEventListener("dragstart", Ft), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function ou(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : on.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var f, v;
    e._ripple = et({
      tasker: u.disabled ? null : (f = e._ripple) == null ? void 0 : f.tasker,
      removeRipple: (v = e._ripple) == null ? void 0 : v.removeRipple
    }, u);
  }
}
var Le = {
  mounted: tu,
  unmounted: iu,
  updated: ou,
  install(e) {
    e.directive("ripple", this);
  }
};
function lu(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var La = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: lu
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  onRouteChange: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function pl() {
  var e = Object.keys(on.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ua(e) {
  on.locks[e] = 1, pl();
}
function Ya(e) {
  delete on.locks[e], pl();
}
function Vi(e, n) {
  var {
    uid: r
  } = Aa();
  n && ne(n, (a) => {
    a === !1 ? Ya(r) : a === !0 && e() === !0 && Ua(r);
  }), ne(e, (a) => {
    n && n() === !1 || (a === !0 ? Ua(r) : Ya(r));
  }), Ds(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  }), xn(() => {
    n && n() === !1 || e() === !0 && Ya(r);
  }), wi(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  }), Si(() => {
    n && n() === !1 || e() === !0 && Ya(r);
  });
}
function mt(e, n) {
  var r = E(on.zIndex);
  return ne(e, (a) => {
    a && (on.zIndex += n, r.value = on.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function su(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ki(e);
}
var {
  n: Wa,
  classes: Vt
} = _("popup");
const mn = ae({
  name: "VarPopup",
  inheritAttrs: !1,
  props: La,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = mt(() => e.show, 3), {
      disabled: i
    } = vl(), o = () => {
      var d, {
        closeOnClickOverlay: f,
        onClickOverlay: v
      } = e;
      v == null || v(), f && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    Vi(() => e.show, () => e.lockScroll), ne(() => e.show, (d) => {
      var {
        onOpen: f,
        onClose: v
      } = e;
      d ? f == null || f() : v == null || v();
    }), nu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: f
      } = e;
      return ee("div", {
        class: Vt(Wa("overlay"), d),
        style: Lt({
          zIndex: t.value - 1
        }, f),
        onClick: o
      }, null);
    }, s = () => ee("div", Ve({
      class: Vt(Wa("content"), "var-elevation--3", Wa("--" + e.position)),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: f,
        show: v,
        overlay: c,
        transition: p,
        position: b
      } = e;
      return ee(He, {
        name: "var-fade",
        onAfterEnter: d,
        onAfterLeave: f
      }, {
        default: () => [Ce(ee("div", {
          class: Vt("var--box", Wa()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ee(He, {
          name: p || "var-pop-" + b
        }, {
          default: () => [v && s()]
        })]), [[za, v]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var f;
        return ee(st, {
          to: d,
          disabled: i.value
        }, su(f = u()) ? f : {
          default: () => [f]
        });
      }
      return u();
    };
  }
});
mn.install = function(e) {
  e.component(mn.name, mn);
};
var hl = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  }
};
function ro(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ro(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ro(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: du,
  classes: vu
} = _("icon");
function fu(e, n) {
  return w(), me(
    ut(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: K({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
const $e = ae({
  render: fu,
  name: "VarIcon",
  props: hl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = uu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || L(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Oe(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, L(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return ne(() => e.name, a, {
      immediate: !0
    }), {
      n: du,
      classes: vu,
      nextName: n,
      shrinking: r,
      isURL: Us,
      toNumber: L,
      toSizeUnit: Ee
    };
  }
});
$e.install = function(e) {
  e.component($e.name, $e);
};
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
var cu = Rt({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
}, Ze(La, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
const gl = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
}, mu = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
function yl() {
  var e = {}, n = E({}), r = (i, o) => {
    o.lang = i, e[i] = o;
  }, a = (i) => {
    if (!e[i])
      return console.warn("The " + i + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[i];
  }, t = (i, o) => {
    if (!e[i]) {
      console.warn("The " + i + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[i] = Ut({}, e[i], o), a(i);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: pu,
  pack: Re,
  add: bl,
  use: wl,
  merge: hu
} = yl();
bl("zh-CN", gl);
wl("zh-CN");
const Yt = {
  zhCN: gl,
  enUS: mu,
  packs: pu,
  pack: Re,
  add: bl,
  use: wl,
  merge: hu,
  useLocale: yl
};
var {
  n: gu,
  classes: yu
} = _("action-sheet"), bu = ["onClick"];
function wu(e, n) {
  var r = re("var-icon"), a = re("var-popup"), t = je("ripple");
  return w(), me(
    a,
    Ve({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ce(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), "var--box")
        }, e.$attrs),
        [q(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          J(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), q(e.$slots, "actions", {}, () => [(w(!0), M(
          Te,
          null,
          Ie(e.actions, (i) => Ce((w(), M(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (w(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : Z("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              J(i.name),
              3
            )],
            14,
            bu
          )), [[t, {
            disabled: i.disabled
          }]])),
          128
        ))])],
        16
      )]),
      _: 3
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const rr = ae({
  render: wu,
  name: "VarActionSheet",
  directives: {
    Ripple: Le
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: cu,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        N(o, t), i && N(e["onUpdate:show"], !1);
      }
    }, a = (t) => N(e["onUpdate:show"], t);
    return ne(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: gu,
      classes: yu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Re,
      dt: vt,
      handleSelect: r
    };
  }
});
var Fn;
function cr(e) {
  return Pi() ? new Promise((n) => {
    cr.close();
    var r = Ne(e);
    r.teleport = "body", Fn = r;
    var {
      unmountInstance: a
    } = Fa(rr, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Fn === r && (Fn = null);
      },
      onRouteChange: () => {
        a(), Fn === r && (Fn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
cr.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
cr.close = () => {
  if (Fn != null) {
    var e = Fn;
    Fn = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
cr.install = function(e) {
  e.component(rr.name, rr);
};
function Su(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Cu = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: Su
  },
  elevation: {
    type: Boolean,
    default: !0
  }
}, {
  n: ku,
  classes: $u
} = _("app-bar");
function Tu(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--3"])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [A(
      "div",
      {
        class: m(e.n("left"))
      },
      [q(e.$slots, "left"), e.titlePosition === "left" ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        6
      )) : Z("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [q(e.$slots, "default", {}, () => [he(
        J(e.title),
        1
      )])],
      2
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        6
      )) : Z("v-if", !0), q(e.$slots, "right")],
      2
    )],
    6
  );
}
const Pr = ae({
  render: Tu,
  name: "VarAppBar",
  props: Cu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), $i(i), {
      n: ku,
      classes: $u,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
function Ou(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Pu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Yn = {
  type: {
    type: String,
    default: "circle",
    validator: Ou
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Pu
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Eu,
  classes: Vu
} = _("loading"), Mu = (e) => (el(""), e = e(), nl(), e), Iu = /* @__PURE__ */ Mu(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), Nu = [Iu];
function Du(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [q(e.$slots, "default"), e.loading ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.isShow ? (w(), M(
      "div",
      {
        key: 1,
        class: m(e.classes("var--box", e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Nu,
          6
        )],
        2
      )) : Z("v-if", !0), (w(!0), M(
        Te,
        null,
        Ie(e.loadingTypeDict, (r, a) => (w(), M(
          Te,
          {
            key: a
          },
          [e.type === a ? (w(), M(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(w(!0), M(
              Te,
              null,
              Ie(r, (t) => (w(), M(
                "div",
                {
                  key: t + a,
                  style: K({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
              ))),
              128
            ))],
            2
          )) : Z("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (w(), M(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [q(e.$slots, "description", {}, () => [he(
          J(e.description),
          1
        )])],
        6
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const Cn = ae({
  render: Du,
  name: "VarLoading",
  props: Yn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => N(r.default) ? e.loading : !0);
    return {
      n: Eu,
      classes: Vu,
      multiplySizeUnit: We,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function Bu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Au(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var zu = {
  type: {
    type: String,
    default: "default",
    validator: Bu
  },
  size: {
    type: String,
    default: "normal",
    validator: Au
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String],
    default: 12
  },
  loadingType: Ze(Yn, "type"),
  loadingSize: Ze(Yn, "size"),
  loadingColor: Wt({}, Ze(Yn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: Fu,
  classes: Lu
} = _("button"), Ru = ["disabled"];
function Uu(e, n) {
  var r = re("var-loading"), a = je("ripple");
  return Ce((w(), M(
    "button",
    {
      class: m(e.classes(e.n(), "var--box", e.n("--" + e.size), [e.block, "var--flex " + e.n("--block"), "var--inline-flex"], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " var-elevation--2"], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: K({
        color: e.textColor,
        background: e.color
      }),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (w(), me(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [q(e.$slots, "default")],
      2
    )],
    46,
    Ru
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const xe = ae({
  render: Uu,
  name: "VarButton",
  components: {
    VarLoading: Cn
  },
  directives: {
    Ripple: Le
  },
  props: zu,
  setup(e) {
    var n = E(!1), r = (i) => {
      e.autoLoading && (n.value = !0, Promise.resolve(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, a = (i) => {
      var {
        loading: o,
        disabled: l,
        onClick: s
      } = e;
      !s || o || l || n.value || r(s(i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(s(i));
    };
    return {
      n: Fu,
      classes: Lu,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
xe.install = function(e) {
  e.component(xe.name, xe);
};
var Yu = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  }
}, {
  n: Wu,
  classes: Hu
} = _("back-top");
function ju(e, n) {
  var r = re("var-icon"), a = re("var-button");
  return w(), me(
    st,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Vn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [q(e.$slots, "default", {}, () => [ee(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ce(() => [ee(r, {
          name: "chevron-up"
        })]),
        _: 1
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const Er = ae({
  render: ju,
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Yu,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Ei(t);
      xa(t, {
        left: d,
        duration: e.duration,
        animation: tl
      });
    }, o = () => {
      n.value = ft(t) >= Me(e.visibilityHeight);
    }, l = Oi(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (_e(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (Rs(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Sa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ci(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: Ee,
      n: Wu,
      classes: Hu,
      click: i
    };
  }
});
Er.install = function(e) {
  e.component(Er.name, Er);
};
function Gu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qu(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ku = {
  type: {
    type: String,
    default: "default",
    validator: Gu
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  dot: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: qu
  },
  icon: {
    type: String
  }
}, {
  n: Nn,
  classes: Xu
} = _("badge"), Zu = {
  key: 1
};
function Ju(e, n) {
  var r = re("var-icon");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [ee(He, {
      name: "var-badge-fade"
    }, {
      default: ce(() => [Ce(A(
        "span",
        Ve(e.$attrs, {
          class: e.classes(e.n("content"), ...e.contentClass),
          style: {
            background: e.color
          }
        }),
        [e.icon && !e.dot ? (w(), me(
          r,
          {
            key: 0,
            name: e.icon,
            size: "10px"
          },
          null,
          8,
          ["name"]
        )) : (w(), M(
          "span",
          Zu,
          J(e.values),
          1
        ))],
        16
      ), [[za, !e.hidden]])]),
      _: 1
    }), q(e.$slots, "default")],
    2
  );
}
const ar = ae({
  render: Ju,
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ku,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Nn("position") + " " + Nn("--" + l), f = s ? Nn("dot") : null, v = i(), c = u ? Nn("icon") : null;
      return [Nn("--" + o), d, f, v, c];
    }), t = W(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && L(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return Nn("dot--right");
      if (l && o.includes("left"))
        return Nn("dot--left");
    };
    return {
      n: Nn,
      classes: Xu,
      values: t,
      contentClass: a
    };
  }
});
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Qu = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  },
  onBeforeChange: {
    type: Function
  },
  onFabClick: {
    type: Function
  },
  fabProps: {
    type: Object
  }
}, Sl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Cl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function xu() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Sl), {
    length: r
  } = gn(Cl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
var {
  n: _u,
  classes: ed
} = _("bottom-navigation"), {
  n: pt
} = _("bottom-navigation-item"), ao = pt("--right-half-space"), to = pt("--left-half-space"), io = pt("--right-space"), nd = {
  type: "primary"
};
function rd(e, n) {
  var r = re("var-button");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [q(e.$slots, "default"), e.$slots.fab ? (w(), me(
      r,
      Ve({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ce(() => [q(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : Z("v-if", !0)],
    6
  );
}
const Vr = ae({
  render: rd,
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: Qu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = xu(), f = () => {
      s.value === 0 || v() || c() || p();
    }, v = () => u.find((k) => {
      var {
        name: D
      } = k;
      return t.value === D.value;
    }), c = () => u.find((k) => {
      var {
        index: D
      } = k;
      return t.value === D.value;
    }), p = () => {
      !Qe(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, b = (k) => {
      t.value !== k && (e.onBeforeChange ? y(k) : T(k));
    }, y = (k) => {
      Promise.resolve(N(e.onBeforeChange, k)).then((D) => D && T(k));
    }, T = (k) => {
      N(e["onUpdate:active"], k), N(e.onChange, k);
    }, C = () => {
      var k = I();
      k.forEach((D) => {
        D.classList.remove(ao, to, io);
      });
    }, g = (k) => {
      var D = I(), P = D.length, $ = k % 2 === 0;
      D.forEach((O, R) => {
        h($, O, R, P);
      });
    }, h = (k, D, P, $) => {
      var O = P === $ - 1;
      if (!k && O) {
        D.classList.add(io);
        return;
      }
      var R = P === $ / 2 - 1, Y = P === $ / 2;
      R ? D.classList.add(ao) : Y && D.classList.add(to);
    }, I = () => Array.from(a.value.querySelectorAll("." + pt())), S = () => {
      N(e.onFabClick);
    }, B = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: b
    };
    return d(B), ne(() => s.value, f), ne(() => e.fabProps, (k) => {
      l.value = Ht({}, nd, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || g(s.value);
    }), $i(() => {
      C(), r.fab && g(s.value);
    }), {
      n: _u,
      classes: ed,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: l
    };
  }
});
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var ad = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: {
    type: Function
  }
};
function td() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Sl), {
    index: r
  } = yn(Cl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: id,
  classes: od
} = _("bottom-navigation-item"), ld = {
  type: "danger",
  dot: !0
};
function sd(e, n) {
  var r = re("var-icon"), a = re("var-badge"), t = je("ripple");
  return Ce((w(), M(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (w(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : Z("v-if", !0), q(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (w(), me(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Z("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? Z("v-if", !0) : (w(), M(
        Te,
        {
          key: 0
        },
        [he(
          J(e.label),
          1
        )],
        2112
      )), q(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Mr = ae({
  render: sd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Le
  },
  props: ad,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = td(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, f = () => l.value === n.value || l.value === t.value ? s.value : u.value, v = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), ne(() => r.value, (c) => {
      a.value = c === !0 ? ld : r.value;
    }, {
      immediate: !0
    }), {
      n: id,
      classes: od,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: f,
      handleClick: v
    };
  }
});
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
function ud(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var dd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: ud,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  "onUpdate:floating": {
    type: Function
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
};
function oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: vd,
  classes: fd
} = _("card"), cd = 500, md = ["src", "alt"];
function pd(e, n) {
  var r = re("var-icon"), a = re("var-button"), t = je("ripple");
  return Ce((w(), M(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, "var-elevation--" + e.elevation, "var-elevation--1"])),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: m(e.classes(e.n("floater"))),
        style: K({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [q(e.$slots, "image", {}, () => [e.src ? (w(), M(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: K({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        md
      )) : Z("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [q(e.$slots, "title", {}, () => [e.title ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          J(e.title),
          3
        )) : Z("v-if", !0)]), q(e.$slots, "subtitle", {}, () => [e.subtitle ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          J(e.subtitle),
          3
        )) : Z("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          J(e.description),
          3
        )) : Z("v-if", !0)]), e.$slots.extra ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [q(e.$slots, "extra")],
          2
        )) : Z("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (w(), M(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: K({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [q(e.$slots, "floating-content")],
          6
        )) : Z("v-if", !0)],
        2
      ), e.showFloatingButtons ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), "var--box")),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [q(e.$slots, "close-button", {}, () => [ee(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), "var-elevation--6")),
            onClick: Vn(e.close, ["stop"])
          },
          {
            default: ce(() => [ee(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : Z("v-if", !0)],
      6
    ), A(
      "div",
      {
        class: m(e.n("holder")),
        style: K({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
    )],
    6
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
const Ir = ae({
  render: pd,
  name: "VarCard",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: dd,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), i = E("100%"), o = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), f = E("0px"), v = E("0"), c = W(() => e.layout === "row"), p = E(!1), b = E(!1), {
      zIndex: y
    } = mt(() => e.floating, 1);
    Vi(() => e.floating, () => !c.value);
    var T = "auto", C = "auto", g = null, h = E(null), I = /* @__PURE__ */ function() {
      var k = lo(function* () {
        clearTimeout(h.value), clearTimeout(g), h.value = null, h.value = setTimeout(/* @__PURE__ */ lo(function* () {
          var {
            width: D,
            height: P,
            left: $,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = Ee(D), t.value = Ee(P), i.value = a.value, o.value = t.value, l.value = Ee(O), s.value = Ee($), u.value = "fixed", T = l.value, C = s.value, p.value = !0, yield Mn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", f.value = "auto", v.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? cd : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(g), clearTimeout(h.value), h.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = C, f.value = "0px", v.value = "0", p.value = !1, g = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", C = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, B = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ne(() => e.floating, (k) => {
      c.value || Oe(() => {
        k ? I() : S();
      });
    }, {
      immediate: !0
    }), {
      n: vd,
      classes: fd,
      toSizeUnit: Ee,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: h,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: f,
      opacity: v,
      zIndex: y,
      isRow: c,
      close: B,
      showFloatingButtons: p,
      floated: b
    };
  }
});
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var hd = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  }
}, {
  n: gd,
  classes: yd
} = _("cell");
function bd(e, n) {
  var r = re("var-icon");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [q(e.$slots, "icon", {}, () => [ee(
        r,
        {
          class: "var--flex",
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [q(e.$slots, "description", {}, () => [he(
          J(e.description),
          1
        )])],
        2
      )) : Z("v-if", !0)],
      2
    ), e.$slots.extra ? (w(), M(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [q(e.$slots, "extra")],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const tr = ae({
  render: bd,
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: hd,
  setup() {
    return {
      n: gd,
      classes: yd
    };
  }
});
tr.install = function(e) {
  e.component(tr.name, tr);
};
var wd = {
  errorMessage: {
    type: String,
    default: ""
  },
  maxlengthText: {
    type: String,
    default: ""
  }
}, {
  n: Sd
} = _("form-details");
function Cd(e, n) {
  return w(), me(
    He,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.maxlengthText ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [A(
          "div",
          {
            class: m(e.n("message"))
          },
          J(e.errorMessage),
          3
        ), A(
          "div",
          {
            class: m(e.n("length"))
          },
          J(e.maxlengthText),
          3
        )],
        2
      )) : Z("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const Ye = ae({
  render: Cd,
  name: "VarFormDetails",
  props: wd,
  setup: () => ({
    n: Sd
  })
});
Ye.install = function(e) {
  e.component(Ye.name, Ye);
};
var kd = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, kl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), $l = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function $d() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(kl), {
    length: r
  } = gn($l);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Td() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(kl), {
    index: r
  } = yn($l);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Tl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Tl);
  return {
    bindForm: e,
    form: n
  };
}
function Od() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Tl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Pd,
  classes: Ed
} = _("checkbox");
function Vd(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [Ce((w(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ir = ae({
  render: Vd,
  name: "VarCheckbox",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarFormDetails: Ye
  },
  props: kd,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = E(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Td(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: f,
      resetValidation: v
    } = bn(), c = (S) => {
      Oe(() => {
        var {
          validateTrigger: B,
          rules: k,
          modelValue: D
        } = e;
        d(B, S, k, D);
      });
    }, p = (S) => {
      n.value = S;
      var {
        checkedValue: B,
        onChange: k
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(k, n.value), c("onChange"), S === B ? i == null || i.onChecked(B) : i == null || i.onUnchecked(B);
    }, b = (S) => {
      var {
        disabled: B,
        readonly: k,
        checkedValue: D,
        uncheckedValue: P,
        onClick: $
      } = e;
      if (!(l != null && l.disabled.value || B) && (N($, S), !(l != null && l.readonly.value || k))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? P : D);
      }
    }, y = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: k
      } = e;
      n.value = S.includes(B) ? B : k;
    }, T = () => {
      t.value = !1;
    }, C = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, g = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: k
      } = e, D = ![B, k].includes(S);
      D && (S = r.value ? k : B), p(S);
    }, h = () => f(e.rules, e.modelValue);
    ne(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: h,
      resetValidation: v,
      reset: C,
      resetWithAnimation: T
    };
    return N(o, I), N(s, I), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Pd,
      classes: Ed,
      handleClick: b,
      toggle: g,
      reset: C,
      validate: h,
      resetValidation: v
    };
  }
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
function Md(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Id = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Md
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Nd,
  classes: Dd
} = _("checkbox-group");
function Bd(e, n) {
  var r = re("var-form-details");
  return w(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Nr = ae({
  render: Bd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ye
  },
  props: Id,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = $d(), {
      bindForm: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), f = W(() => l.value), v = (B) => {
      Oe(() => {
        var {
          validateTrigger: k,
          rules: D,
          modelValue: P
        } = e;
        s(k, B, D, P);
      });
    }, c = (B) => {
      N(e["onUpdate:modelValue"], B), N(e.onChange, B), v("onChange");
    }, p = (B) => {
      var {
        modelValue: k
      } = e;
      k.includes(B) || c([...k, B]);
    }, b = (B) => {
      var {
        modelValue: k
      } = e;
      !k.includes(B) || c(k.filter((D) => D !== B));
    }, y = () => t.forEach((B) => {
      var {
        sync: k
      } = B;
      return k(e.modelValue);
    }), T = () => {
      t.forEach((B) => B.resetWithAnimation());
    }, C = () => {
      var B = t.map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), k = Ki(B);
      return T(), N(e["onUpdate:modelValue"], k), k;
    }, g = () => {
      var B = t.filter((D) => {
        var {
          checked: P
        } = D;
        return !P.value;
      }).map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), k = Ki(B);
      return T(), N(e["onUpdate:modelValue"], k), k;
    }, h = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ne(() => e.modelValue, y, {
      deep: !0
    }), ne(() => a.value, y);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: b,
      validate: I,
      resetValidation: d,
      reset: h,
      errorMessage: f
    };
    return i(S), N(o, S), {
      errorMessage: l,
      n: Nd,
      classes: Dd,
      checkAll: C,
      inverseAll: g,
      reset: h,
      validate: I,
      resetValidation: d
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
function Ad(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function zd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Fd = {
  type: {
    type: String,
    default: "default",
    validator: Ad
  },
  size: {
    type: String,
    default: "normal",
    validator: zd
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ze(hl, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: {
    type: Function
  }
}, {
  n: br,
  classes: Ld
} = _("chip");
function Rd(e, n) {
  var r = re("var-icon");
  return w(), me(He, {
    name: "var-fade"
  }, {
    default: ce(() => [A(
      "span",
      Ve({
        class: e.classes(e.n(), "var--box", ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [q(e.$slots, "left"), A(
        "span",
        {
          class: m(e.n("text-" + e.size))
        },
        [q(e.$slots, "default")],
        2
      ), q(e.$slots, "right"), e.closable ? (w(), M(
        "span",
        {
          key: 0,
          class: m(e.n("--close")),
          onClick: n[0] || (n[0] = function() {
            return e.onClose && e.onClose(...arguments);
          })
        },
        [ee(
          r,
          {
            name: "" + (e.iconName ? e.iconName : "close-circle")
          },
          null,
          8,
          ["name"]
        )],
        2
      )) : Z("v-if", !0)],
      16
    )]),
    _: 3
  });
}
const or = ae({
  render: Rd,
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Fd,
  setup(e) {
    var n = W(() => {
      var {
        plain: a,
        textColor: t,
        color: i
      } = e;
      return a ? {
        color: t || i,
        borderColor: i
      } : {
        color: t,
        background: i
      };
    }), r = W(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = t ? "var--flex" : "var--inline-flex", u = o ? br("plain") + " " + br("plain-" + i) : br("--" + i), d = l ? br("--round") : null;
      return [br("--" + a), s, u, d];
    });
    return {
      n: br,
      classes: Ld,
      chipStyles: n,
      contentClass: r
    };
  }
});
or.install = function(e) {
  e.component(or.name, or);
};
function Ud(e) {
  return ["row", "column"].includes(e);
}
var Yd = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: Ud
  },
  onClick: {
    type: Function
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  }
}, Ol = Symbol("ROW_BIND_COL_KEY"), Pl = Symbol("ROW_COUNT_COL_KEY");
function Wd() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ol), {
    length: r
  } = gn(Pl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Hd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ol), {
    index: r
  } = yn(Pl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Ha,
  classes: jd
} = _("col");
function Gd(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Dr = ae({
  render: Gd,
  name: "VarCol",
  props: Yd,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = W(() => L(e.span)), a = W(() => L(e.offset)), {
      row: t,
      bindRow: i
    } = Hd(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ti(u)) {
        var {
          offset: f,
          span: v
        } = u;
        Number(v) >= 0 && d.push(Ha("--span-" + s + "-" + v)), f && d.push(Ha("--offset-" + s + "-" + f));
      } else
        Number(u) >= 0 && d.push(Ha("--span-" + s + "-" + u));
      return d;
    };
    return ne([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: Ha,
      classes: jd,
      padding: n,
      toNumber: L,
      toSizeUnit: Ee,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var El = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Vl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function qd() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(El), {
    length: r
  } = gn(Vl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Kd = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Xd
} = _("collapse");
function Zd(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Br = ae({
  render: Zd,
  name: "VarCollapse",
  props: Kd,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = qd(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((b) => b !== c) : null, s = (c, p) => {
      var b = l(c, p);
      N(e["onUpdate:modelValue"], b), N(e.onChange, b);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: b
          } = p;
          return e.modelValue === b.value;
        });
      var c = r.filter((p) => {
        var {
          name: b
        } = p;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), f = () => {
      if (!!o()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var b = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, b);
        });
      }
    }, v = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(v), ne(() => n.value, () => Oe().then(f)), ne(() => e.modelValue, () => Oe().then(f)), {
      n: Xd
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
function Jd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(El), {
    index: r
  } = yn(Vl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Qd = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: xd,
  classes: _d
} = _("collapse-item");
function ev(e, n) {
  var r = re("var-icon");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [q(e.$slots, "title", {}, () => [he(
          J(e.title),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [q(e.$slots, "icon", {}, () => [ee(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
      )],
      2
    ), Ce(A(
      "div",
      {
        class: m(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [q(e.$slots, "default")],
        2
      )],
      34
    ), [[za, e.show]])],
    2
  );
}
const Ar = ae({
  render: ev,
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Qd,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Jd(), t = !0, i = E(null), o = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, f = W(() => e.name), v = (g, h) => {
      s.value === void 0 || g && Se(s.value) || h === l.value || (l.value = h, c(!0));
    }, c = (g) => {
      e.disabled || g || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Oe(() => {
        var {
          offsetHeight: g
        } = i.value;
        i.value.style.height = 0 + "px", kn(() => {
          i.value.style.height = g + "px", t && ct(() => {
            t && T();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, y = () => {
      if (!!i.value) {
        var {
          offsetHeight: g
        } = i.value;
        i.value.style.height = g + "px", kn(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, C = {
      index: n,
      name: f,
      init: v
    };
    return a(C), ne(l, (g) => {
      g ? p() : y();
    }), {
      n: xd,
      start: b,
      classes: _d,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var nv = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
}, {
  n: rv
} = _("countdown"), jt = 1e3, Gt = 60 * jt, qt = 60 * Gt, so = 24 * qt;
function av(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default", rl(Bs(e.timeData)), () => [he(
      J(e.showTime),
      1
    )])],
    2
  );
}
const zr = ae({
  render: av,
  name: "VarCountdown",
  props: nv,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), i = E(0), o = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var b = Object.values(p), y = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (y.forEach((g, h) => {
        c.includes(g) ? c = c.replace(g, fr("" + b[h], 2, "0")) : b[h + 1] += b[h] * T[h];
      }), c.includes("S")) {
        var C = fr("" + b[b.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", C) : c.includes("SS") ? c = c.replace("SS", C.slice(0, 2)) : c = c.replace("S", C.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / so), b = Math.floor(c % so / qt), y = Math.floor(c % qt / Gt), T = Math.floor(c % Gt / jt), C = Math.floor(c % jt), g = {
        days: p,
        hours: b,
        minutes: y,
        seconds: T,
        milliseconds: C
      };
      o.value = g, N(e.onChange, o.value), a.value = l(e.format, g);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: b
      } = e, y = Date.now();
      n.value || (n.value = y + L(c));
      var T = n.value - y;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        N(p);
        return;
      }
      (b || r.value) && (t.value = kn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || L(e.time)), u());
    }, f = () => {
      r.value = !1;
    }, v = () => {
      n.value = 0, r.value = !1, Zs(t.value), u();
    };
    return ne(() => e.time, () => v(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: rv,
      start: d,
      pause: f,
      reset: v
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Sr = 9e15, _n = 1e9, Kt = "0123456789abcdef", nt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", rt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Xt = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Sr,
  maxE: Sr,
  crypto: !1
}, Ml, On, de = !0, ht = "[DecimalError] ", Zn = ht + "Invalid argument: ", Il = ht + "Precision limit exceeded", Nl = ht + "crypto unavailable", Dl = "[object Decimal]", Ge = Math.floor, ze = Math.pow, tv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, iv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ov = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Bl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, pn = 1e7, ue = 7, lv = 9007199254740991, sv = nt.length - 1, Zt = rt.length - 1, j = { toStringTag: Dl };
j.absoluteValue = j.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), le(e);
};
j.ceil = function() {
  return le(new this.constructor(this), this.e + 1, 2);
};
j.clampedTo = j.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Zn + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
j.comparedTo = j.cmp = function(e) {
  var n, r, a, t, i = this, o = i.d, l = (e = new i.constructor(e)).d, s = i.s, u = e.s;
  if (!o || !l)
    return !s || !u ? NaN : s !== u ? s : o === l ? 0 : !o ^ s < 0 ? 1 : -1;
  if (!o[0] || !l[0])
    return o[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (i.e !== e.e)
    return i.e > e.e ^ s < 0 ? 1 : -1;
  for (a = o.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (o[n] !== l[n])
      return o[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
j.cosine = j.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = uv(a, Rl(a, r)), a.precision = e, a.rounding = n, le(On == 2 || On == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
j.cubeRoot = j.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, f = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new f(d);
  for (de = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = Ue(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = Ge((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new f(r), a.s = d.s) : a = new f(i.toString()), o = (e = f.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = ke(u.plus(d).times(l), u.plus(s), o + 2, 1), Ue(l.d).slice(0, o) === (r = Ue(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (le(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (le(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return de = !0, le(a, e, f.rounding, n);
};
j.decimalPlaces = j.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ge(this.e / ue)) * ue, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
j.dividedBy = j.div = function(e) {
  return ke(this, new this.constructor(e));
};
j.dividedToIntegerBy = j.divToInt = function(e) {
  var n = this, r = n.constructor;
  return le(ke(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
j.equals = j.eq = function(e) {
  return this.cmp(e) === 0;
};
j.floor = function() {
  return le(new this.constructor(this), this.e + 1, 3);
};
j.greaterThan = j.gt = function(e) {
  return this.cmp(e) > 0;
};
j.greaterThanOrEqualTo = j.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
j.hyperbolicCosine = j.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / yt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = pa(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return le(i, o.precision = r, o.rounding = a, !0);
};
j.hyperbolicSine = j.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = pa(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / yt(5, e)), t = pa(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, le(t, n, r, !0);
};
j.hyperbolicTangent = j.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, ke(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
j.inverseCosine = j.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? cn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? cn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = cn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
j.inverseHyperbolicCosine = j.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, de = !1, r = r.times(r).minus(1).sqrt().plus(r), de = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
j.inverseHyperbolicSine = j.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, de = !1, r = r.times(r).plus(1).sqrt().plus(r), de = !0, a.precision = e, a.rounding = n, r.ln());
};
j.inverseHyperbolicTangent = j.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? le(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = ke(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
j.inverseSine = j.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = cn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
j.inverseTangent = j.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, f = d.precision, v = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && f + 4 <= Zt)
      return o = cn(d, f + 4, v).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (f + 4 <= Zt)
      return o = cn(d, f + 4, v).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = f + 10, d.rounding = 1, r = Math.min(28, l / ue + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (de = !1, n = Math.ceil(l / ue), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), de = !0, le(o, d.precision = f, d.rounding = v, !0);
};
j.isFinite = function() {
  return !!this.d;
};
j.isInteger = j.isInt = function() {
  return !!this.d && Ge(this.e / ue) > this.d.length - 2;
};
j.isNaN = function() {
  return !this.s;
};
j.isNegative = j.isNeg = function() {
  return this.s < 0;
};
j.isPositive = j.isPos = function() {
  return this.s > 0;
};
j.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
j.lessThan = j.lt = function(e) {
  return this.cmp(e) < 0;
};
j.lessThanOrEqualTo = j.lte = function(e) {
  return this.cmp(e) < 1;
};
j.logarithm = j.log = function(e) {
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, f = d.precision, v = d.rounding, c = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      i = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      i = t !== 1;
    }
  if (de = !1, l = f + c, o = Wn(u, l), a = n ? at(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), Ma(s.d, t = f, v))
    do
      if (l += 10, o = Wn(u, l), a = n ? at(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), !i) {
        +Ue(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = le(s, f + 1, 0));
        break;
      }
    while (Ma(s.d, t += 10, v));
  return de = !0, le(s, f, v);
};
j.minus = j.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f, v, c = this, p = c.constructor;
  if (e = new p(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new p(NaN) : c.d ? e.s = -e.s : e = new p(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, v = e.d, l = p.precision, s = p.rounding, !u[0] || !v[0]) {
    if (v[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(c);
    else
      return new p(s === 3 ? -0 : 0);
    return de ? le(e, l, s) : e;
  }
  if (r = Ge(e.e / ue), d = Ge(c.e / ue), u = u.slice(), i = d - r, i) {
    for (f = i < 0, f ? (n = u, i = -i, o = v.length) : (n = v, r = d, o = u.length), a = Math.max(Math.ceil(l / ue), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = v.length, f = a < o, f && (o = a), a = 0; a < o; a++)
      if (u[a] != v[a]) {
        f = u[a] < v[a];
        break;
      }
    i = 0;
  }
  for (f && (n = u, u = v, v = n, e.s = -e.s), o = u.length, a = v.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = v.length; a > i; ) {
    if (u[--a] < v[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = pn - 1;
      --u[t], u[a] += pn;
    }
    u[a] -= v[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = gt(u, r), de ? le(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
j.modulo = j.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? le(new a(r), a.precision, a.rounding) : (de = !1, a.modulo == 9 ? (n = ke(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = ke(r, e, 0, a.modulo, 1), n = n.times(e), de = !0, r.minus(n));
};
j.naturalExponential = j.exp = function() {
  return Jt(this);
};
j.naturalLogarithm = j.ln = function() {
  return Wn(this);
};
j.negated = j.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, le(e);
};
j.plus = j.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f = this, v = f.constructor;
  if (e = new v(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new v(NaN) : f.d || (e = new v(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (u = f.d, d = e.d, l = v.precision, s = v.rounding, !u[0] || !d[0])
    return d[0] || (e = new v(f)), de ? le(e, l, s) : e;
  if (i = Ge(f.e / ue), a = Ge(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / pn | 0, u[t] %= pn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = gt(u, a), de ? le(e, l, s) : e;
};
j.precision = j.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Zn + e);
  return r.d ? (n = Al(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
j.round = function() {
  var e = this, n = e.constructor;
  return le(new n(e), e.e + 1, n.rounding);
};
j.sine = j.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = vv(a, Rl(a, r)), a.precision = e, a.rounding = n, le(On > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
j.squareRoot = j.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (de = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = Ue(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ge((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(ke(o, i, r + 2, 1)).times(0.5), Ue(i.d).slice(0, r) === (n = Ue(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (le(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (le(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return de = !0, le(a, s, d.rounding, e);
};
j.tangent = j.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = ke(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, le(On == 2 || On == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
j.times = j.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, f = d.constructor, v = d.d, c = (e = new f(e)).d;
  if (e.s *= d.s, !v || !v[0] || !c || !c[0])
    return new f(!e.s || v && !v[0] && !c || c && !c[0] && !v ? NaN : !v || !c ? e.s / 0 : e.s * 0);
  for (r = Ge(d.e / ue) + Ge(e.e / ue), s = v.length, u = c.length, s < u && (i = v, v = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * v[t - a - 1] + n, i[t--] = l % pn | 0, n = l / pn | 0;
    i[t] = (i[t] + n) % pn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = gt(i, r), de ? le(e, f.precision, f.rounding) : e;
};
j.toBinary = function(e, n) {
  return Mi(this, 2, e, n);
};
j.toDecimalPlaces = j.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (en(e, 0, _n), n === void 0 ? n = a.rounding : en(n, 0, 8), le(r, e + r.e + 1, n));
};
j.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, !0) : (en(e, 0, _n), n === void 0 ? n = t.rounding : en(n, 0, 8), a = le(new t(a), e + 1, n), r = $n(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
j.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = $n(t) : (en(e, 0, _n), n === void 0 ? n = i.rounding : en(n, 0, 8), a = le(new i(t), e + t.e + 1, n), r = $n(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
j.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f, v, c = this, p = c.d, b = c.constructor;
  if (!p)
    return new b(c);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), i = n.e = Al(p) - c.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(Zn + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (de = !1, l = new b(Ue(p)), d = b.precision, b.precision = i = p.length * ue * 2; f = ke(l, n, 0, 1, 1), t = r.plus(f.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(f.times(t)), s = t, t = n, n = l.minus(f.times(t)), l = t;
  return t = ke(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, v = ke(u, a, i, 1).minus(c).abs().cmp(ke(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], b.precision = d, de = !0, v;
};
j.toHexadecimal = j.toHex = function(e, n) {
  return Mi(this, 16, e, n);
};
j.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : en(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (de = !1, r = ke(r, e, 0, n, 1).times(e), de = !0, le(r)) : (e.s = r.s, r = e), r;
};
j.toNumber = function() {
  return +this;
};
j.toOctal = function(e, n) {
  return Mi(this, 8, e, n);
};
j.toPower = j.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return le(l, a, i);
  if (n = Ge(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= lv)
    return t = zl(s, l, r, a), e.s < 0 ? new s(1).div(t) : le(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Ge(u * (Math.log("0." + Ue(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (de = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Jt(e.times(Wn(l, a + r)), a), t.d && (t = le(t, a + 5, 1), Ma(t.d, a, i) && (n = a + 10, t = le(Jt(e.times(Wn(l, n + r)), n), n + 5, 1), +Ue(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = le(t, a + 1, 0)))), t.s = o, de = !0, s.rounding = i, le(t, a, i));
};
j.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (en(e, 1, _n), n === void 0 ? n = t.rounding : en(n, 0, 8), a = le(new t(a), e, n), r = $n(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
j.toSignificantDigits = j.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (en(e, 1, _n), n === void 0 ? n = a.rounding : en(n, 0, 8)), le(new a(r), e, n);
};
j.toString = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
j.truncated = j.trunc = function() {
  return le(new this.constructor(this), this.e + 1, 1);
};
j.valueOf = j.toJSON = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ue(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Bn(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Bn(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function en(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Zn + e);
}
function Ma(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function Xa(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += Kt.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function uv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / yt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = pa(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var ke = function() {
  function e(a, t, i) {
    var o, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      o = a[s] * t + l, a[s] = o % i | 0, l = o / i | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, i, o) {
    for (var l = 0; i--; )
      a[i] -= l, l = a[i] < t[i] ? 1 : 0, a[i] = l * o + a[i] - t[i];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, i, o, l, s) {
    var u, d, f, v, c, p, b, y, T, C, g, h, I, S, B, k, D, P, $, O, R = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, V = t.d;
    if (!G || !G[0] || !V || !V[0])
      return new R(
        !a.s || !t.s || (G ? V && G[0] == V[0] : !V) ? NaN : G && G[0] == 0 || !V ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = pn, c = ue, d = Ge(a.e / c) - Ge(t.e / c)), $ = V.length, D = G.length, T = new R(Y), C = T.d = [], f = 0; V[f] == (G[f] || 0); f++)
      ;
    if (V[f] > (G[f] || 0) && d--, i == null ? (S = i = R.precision, o = R.rounding) : l ? S = i + (a.e - t.e) + 1 : S = i, S < 0)
      C.push(1), p = !0;
    else {
      if (S = S / c + 2 | 0, f = 0, $ == 1) {
        for (v = 0, V = V[0], S++; (f < D || v) && S--; f++)
          B = v * s + (G[f] || 0), C[f] = B / V | 0, v = B % V | 0;
        p = v || f < D;
      } else {
        for (v = s / (V[0] + 1) | 0, v > 1 && (V = e(V, v, s), G = e(G, v, s), $ = V.length, D = G.length), k = $, g = G.slice(0, $), h = g.length; h < $; )
          g[h++] = 0;
        O = V.slice(), O.unshift(0), P = V[0], V[1] >= s / 2 && ++P;
        do
          v = 0, u = n(V, g, $, h), u < 0 ? (I = g[0], $ != h && (I = I * s + (g[1] || 0)), v = I / P | 0, v > 1 ? (v >= s && (v = s - 1), b = e(V, v, s), y = b.length, h = g.length, u = n(b, g, y, h), u == 1 && (v--, r(b, $ < y ? O : V, y, s))) : (v == 0 && (u = v = 1), b = V.slice()), y = b.length, y < h && b.unshift(0), r(g, b, h, s), u == -1 && (h = g.length, u = n(V, g, $, h), u < 1 && (v++, r(g, $ < h ? O : V, h, s))), h = g.length) : u === 0 && (v++, g = [0]), C[f++] = v, u && g[0] ? g[h++] = G[k] || 0 : (g = [G[k]], h = 1);
        while ((k++ < D || g[0] !== void 0) && S--);
        p = g[0] !== void 0;
      }
      C[0] || C.shift();
    }
    if (c == 1)
      T.e = d, Ml = p;
    else {
      for (f = 1, v = C[0]; v >= 10; v /= 10)
        f++;
      T.e = f + d * c - 1, le(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function le(e, n, r, a) {
  var t, i, o, l, s, u, d, f, v, c = e.constructor;
  e:
    if (n != null) {
      if (f = e.d, !f)
        return e;
      for (t = 1, l = f[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += ue, o = n, d = f[v = 0], s = d / ze(10, t - o - 1) % 10 | 0;
      else if (v = Math.ceil((i + 1) / ue), l = f.length, v >= l)
        if (a) {
          for (; l++ <= v; )
            f.push(0);
          d = s = 0, t = 1, i %= ue, o = i - ue + 1;
        } else
          break e;
      else {
        for (d = l = f[v], t = 1; l >= 10; l /= 10)
          t++;
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || f[v + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : f[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !f[0])
        return f.length = 0, u ? (n -= e.e + 1, f[0] = ze(10, (ue - n % ue) % ue), e.e = -n || 0) : f[0] = e.e = 0, e;
      if (i == 0 ? (f.length = v, l = 1, v--) : (f.length = v + 1, l = ze(10, ue - i), f[v] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (v == 0) {
            for (i = 1, o = f[0]; o >= 10; o /= 10)
              i++;
            for (o = f[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, f[0] == pn && (f[0] = 1));
            break;
          } else {
            if (f[v] += l, f[v] != pn)
              break;
            f[v--] = 0, l = 1;
          }
      for (i = f.length; f[--i] === 0; )
        f.pop();
    }
  return de && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function $n(e, n, r) {
  if (!e.isFinite())
    return Ll(e);
  var a, t = e.e, i = Ue(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Bn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Bn(-t - 1) + i, r && (a = r - o) > 0 && (i += Bn(a))) : t >= o ? (i += Bn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Bn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Bn(a))), i;
}
function gt(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function at(e, n, r) {
  if (n > sv)
    throw de = !0, r && (e.precision = r), Error(Il);
  return le(new e(nt), n, 1, !0);
}
function cn(e, n, r) {
  if (n > Zt)
    throw Error(Il);
  return le(new e(rt), n, r, !0);
}
function Al(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Bn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function zl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (de = !1; ; ) {
    if (r % 2 && (i = i.times(n), vo(i.d, o) && (t = !0)), r = Ge(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), vo(n.d, o);
  }
  return de = !0, i;
}
function uo(e) {
  return e.d[e.d.length - 1] & 1;
}
function Fl(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Jt(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, f = 0, v = e.constructor, c = v.rounding, p = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (de = !1, s = p) : s = n, l = new v(0.03125); e.e > -2; )
    e = e.times(l), f += 5;
  for (a = Math.log(ze(2, f)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new v(1), v.precision = s; ; ) {
    if (i = le(i.times(e), s, 1), r = r.times(++d), l = o.plus(ke(i, r, s, 1)), Ue(l.d).slice(0, s) === Ue(o.d).slice(0, s)) {
      for (t = f; t--; )
        o = le(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Ma(o.d, s - a, c, u))
          v.precision = s += 10, r = i = l = new v(1), d = 0, u++;
        else
          return le(o, v.precision = p, c, de = !0);
      else
        return v.precision = p, o;
    }
    o = l;
  }
}
function Wn(e, n) {
  var r, a, t, i, o, l, s, u, d, f, v, c = 1, p = 10, b = e, y = b.d, T = b.constructor, C = T.rounding, g = T.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new T(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (n == null ? (de = !1, d = g) : d = n, T.precision = d += p, r = Ue(y), a = r.charAt(0), Math.abs(i = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Ue(b.d), a = r.charAt(0), c++;
    i = b.e, a > 1 ? (b = new T("0." + r), i++) : b = new T(a + "." + r.slice(1));
  } else
    return u = at(T, d + 2, g).times(i + ""), b = Wn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = g, n == null ? le(b, g, C, de = !0) : b;
  for (f = b, s = o = b = ke(b.minus(1), b.plus(1), d, 1), v = le(b.times(b), d, 1), t = 3; ; ) {
    if (o = le(o.times(v), d, 1), u = s.plus(ke(o, new T(t), d, 1)), Ue(u.d).slice(0, d) === Ue(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(at(T, d + 2, g).times(i + ""))), s = ke(s, new T(c), d, 1), n == null)
        if (Ma(s.d, d - p, C, l))
          T.precision = d += p, u = o = b = ke(f.minus(1), f.plus(1), d, 1), v = le(b.times(b), d, 1), t = l = 1;
        else
          return le(s, T.precision = g, C, de = !0);
      else
        return T.precision = g, s;
    s = u, t += 2;
  }
}
function Ll(e) {
  return String(e.s * e.s / 0);
}
function Qt(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ue, r < 0 && (a += ue), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ue; a < t; )
        e.d.push(+n.slice(a, a += ue));
      n = n.slice(a), a = ue - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), de && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function dv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Bl.test(n))
      return Qt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (iv.test(n))
    r = 16, n = n.toLowerCase();
  else if (tv.test(n))
    r = 2;
  else if (ov.test(n))
    r = 8;
  else
    throw Error(Zn + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = zl(a, new a(r), i, i * 2)), u = Xa(n, r, pn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = gt(u, d), e.d = u, de = !1, o && (e = ke(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : Hn.pow(2, s))), de = !0, e);
}
function vv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : pa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / yt(5, r)), n = pa(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function pa(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / ue);
  for (de = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = ke(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = ke(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return de = !0, o.d.length = d + 1, o;
}
function yt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Rl(e, n) {
  var r, a = n.s < 0, t = cn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return On = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    On = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return On = uo(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    On = uo(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Mi(e, n, r, a) {
  var t, i, o, l, s, u, d, f, v, c = e.constructor, p = r !== void 0;
  if (p ? (en(r, 1, _n), a === void 0 ? a = c.rounding : en(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Ll(e);
  else {
    for (d = $n(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), v = new c(1), v.e = d.length - o, v.d = Xa($n(v), 10, t), v.e = v.d.length), f = Xa(d, 10, t), i = s = f.length; f[--s] == 0; )
      f.pop();
    if (!f[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = f, e.e = i, e = ke(e, v, r, a, 0, t), f = e.d, i = e.e, u = Ml), o = f[r], l = t / 2, u = u || f[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && f[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), f.length = r, u)
        for (; ++f[--r] > t - 1; )
          f[r] = 0, r || (++i, f.unshift(1));
      for (s = f.length; !f[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += Kt.charAt(f[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (f = Xa(d, t, n), s = f.length; !f[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += Kt.charAt(f[o]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; )
          d = "0" + d;
        d = "0." + d;
      } else if (++i > s)
        for (i -= s; i--; )
          d += "0";
      else
        i < s && (d = d.slice(0, i) + "." + d.slice(i));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function vo(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function fv(e) {
  return new this(e).abs();
}
function cv(e) {
  return new this(e).acos();
}
function mv(e) {
  return new this(e).acosh();
}
function pv(e, n) {
  return new this(e).plus(n);
}
function hv(e) {
  return new this(e).asin();
}
function gv(e) {
  return new this(e).asinh();
}
function yv(e) {
  return new this(e).atan();
}
function bv(e) {
  return new this(e).atanh();
}
function wv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = cn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? cn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = cn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(ke(e, n, i, 1)), n = cn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(ke(e, n, i, 1)), r;
}
function Sv(e) {
  return new this(e).cbrt();
}
function Cv(e) {
  return le(e = new this(e), e.e + 1, 2);
}
function kv(e, n, r) {
  return new this(e).clamp(n, r);
}
function $v(e) {
  if (!e || typeof e != "object")
    throw Error(ht + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    _n,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Sr,
    0,
    "toExpPos",
    0,
    Sr,
    "maxE",
    0,
    Sr,
    "minE",
    -Sr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = Xt[r]), (a = e[r]) !== void 0)
      if (Ge(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(Zn + r + ": " + a);
  if (r = "crypto", t && (this[r] = Xt[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Nl);
      else
        this[r] = !1;
    else
      throw Error(Zn + r + ": " + a);
  return this;
}
function Tv(e) {
  return new this(e).cos();
}
function Ov(e) {
  return new this(e).cosh();
}
function Ul(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, fo(i)) {
      u.s = i.s, de ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (s = typeof i, s === "number") {
      if (i === 0) {
        u.s = 1 / i < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, u.s = -1) : u.s = 1, i === ~~i && i < 1e7) {
        for (o = 0, l = i; l >= 10; l /= 10)
          o++;
        de ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Qt(u, i.toString());
    } else if (s !== "string")
      throw Error(Zn + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Bl.test(i) ? Qt(u, i) : dv(u, i);
  }
  if (t.prototype = j, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = $v, t.clone = Ul, t.isDecimal = fo, t.abs = fv, t.acos = cv, t.acosh = mv, t.add = pv, t.asin = hv, t.asinh = gv, t.atan = yv, t.atanh = bv, t.atan2 = wv, t.cbrt = Sv, t.ceil = Cv, t.clamp = kv, t.cos = Tv, t.cosh = Ov, t.div = Pv, t.exp = Ev, t.floor = Vv, t.hypot = Mv, t.ln = Iv, t.log = Nv, t.log10 = Bv, t.log2 = Dv, t.max = Av, t.min = zv, t.mod = Fv, t.mul = Lv, t.pow = Rv, t.random = Uv, t.round = Yv, t.sign = Wv, t.sin = Hv, t.sinh = jv, t.sqrt = Gv, t.sub = qv, t.sum = Kv, t.tan = Xv, t.tanh = Zv, t.trunc = Jv, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Pv(e, n) {
  return new this(e).div(n);
}
function Ev(e) {
  return new this(e).exp();
}
function Vv(e) {
  return le(e = new this(e), e.e + 1, 3);
}
function Mv() {
  var e, n, r = new this(0);
  for (de = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return de = !0, new this(1 / 0);
      r = n;
    }
  return de = !0, r.sqrt();
}
function fo(e) {
  return e instanceof Hn || e && e.toStringTag === Dl || !1;
}
function Iv(e) {
  return new this(e).ln();
}
function Nv(e, n) {
  return new this(e).log(n);
}
function Dv(e) {
  return new this(e).log(2);
}
function Bv(e) {
  return new this(e).log(10);
}
function Av() {
  return Fl(this, arguments, "lt");
}
function zv() {
  return Fl(this, arguments, "gt");
}
function Fv(e, n) {
  return new this(e).mod(n);
}
function Lv(e, n) {
  return new this(e).mul(n);
}
function Rv(e, n) {
  return new this(e).pow(n);
}
function Uv(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : en(e, 1, _n), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Nl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= ue, a && e && (t = ze(10, ue - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ue)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ue && (r -= ue - a);
  }
  return o.e = r, o.d = l, o;
}
function Yv(e) {
  return le(e = new this(e), e.e + 1, this.rounding);
}
function Wv(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Hv(e) {
  return new this(e).sin();
}
function jv(e) {
  return new this(e).sinh();
}
function Gv(e) {
  return new this(e).sqrt();
}
function qv(e, n) {
  return new this(e).sub(n);
}
function Kv() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (de = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return de = !0, le(r, this.precision, this.rounding);
}
function Xv(e) {
  return new this(e).tan();
}
function Zv(e) {
  return new this(e).tanh();
}
function Jv(e) {
  return le(e = new this(e), e.e + 1, 1);
}
j[Symbol.for("nodejs.util.inspect.custom")] = j.toString;
j[Symbol.toStringTag] = "Decimal";
var Hn = j.constructor = Ul(Xt);
nt = new Hn(nt);
rt = new Hn(rt);
var Qv = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: xv,
  classes: _v
} = _("counter"), co = 100, mo = 600, ef = ["inputmode", "readonly", "disabled"];
function nf(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n("controller"), "var-elevation--2", [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Ce(ee(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")])),
          style: K({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Ce(A(
        "input",
        {
          class: m(e.n("input")),
          style: K({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        ef
      ), [[As, e.inputValue]]), Ce(ee(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")])),
          style: K({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Fr = ae({
  render: nf,
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: Ye
  },
  directives: {
    Ripple: Le
  },
  inheritAttrs: !1,
  props: Qv,
  setup(e) {
    var n = E(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: f
    } = bn(), {
      readonly: v,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), b = (V) => {
      Oe(() => {
        var {
          validateTrigger: z,
          rules: X,
          modelValue: se
        } = e;
        u(z, V, X, se);
      });
    }, y = () => {
      var {
        min: V
      } = e;
      N(e["onUpdate:modelValue"], V != null ? L(V) : 0), f();
    }, T = {
      reset: y,
      validate: p,
      resetValidation: f
    }, C = W(() => {
      var {
        max: V,
        modelValue: z
      } = e;
      return V != null && L(z) >= L(V);
    }), g = W(() => {
      var {
        min: V,
        modelValue: z
      } = e;
      return V != null && L(z) <= L(V);
    }), h = (V) => {
      var {
        decimalLength: z,
        max: X,
        min: se
      } = e, F = L(V);
      return X != null && F > L(X) && (F = L(X)), se != null && F < L(se) && (F = L(se)), V = String(F), z != null && (V = F.toFixed(L(z))), V;
    }, I = (V) => {
      var {
        lazyChange: z,
        onBeforeChange: X
      } = e, {
        value: se
      } = V.target, F = h(se);
      z ? N(X, L(F), G) : Y(F), b("onInputChange");
    }, S = () => {
      var {
        disabled: V,
        readonly: z,
        disableDecrement: X,
        decrementButton: se,
        lazyChange: F,
        step: U,
        modelValue: H,
        onDecrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || v != null && v.value || V || z || X || !se) && !g.value) {
        var oe = new Hn(L(H)).minus(new Hn(L(U))).toString(), ve = h(oe), be = L(ve);
        N(Q, be), F ? N(ie, be, G) : (Y(ve), b("onDecrement"));
      }
    }, B = () => {
      var {
        disabled: V,
        readonly: z,
        disableIncrement: X,
        incrementButton: se,
        lazyChange: F,
        step: U,
        modelValue: H,
        onIncrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || v != null && v.value || V || z || X || !se) && !C.value) {
        var oe = new Hn(L(H)).plus(new Hn(L(U))).toString(), ve = h(oe), be = L(ve);
        N(Q, be), F ? N(ie, be, G) : (Y(ve), b("onIncrement"));
      }
    }, k = () => {
      var {
        press: V,
        lazyChange: z
      } = e;
      !V || z || (i = window.setTimeout(() => {
        R();
      }, mo));
    }, D = () => {
      var {
        press: V,
        lazyChange: z
      } = e;
      !V || z || (t = window.setTimeout(() => {
        O();
      }, mo));
    }, P = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, $ = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        B(), O();
      }, co);
    }, R = () => {
      a = window.setTimeout(() => {
        S(), R();
      }, co);
    }, Y = (V) => {
      n.value = V;
      var z = L(V);
      N(e["onUpdate:modelValue"], z);
    }, G = (V) => {
      Y(h(String(V))), b("onLazyChange");
    };
    return N(o, T), ne(() => e.modelValue, (V) => {
      Y(h(String(V))), N(e.onChange, L(V));
    }), Y(h(String(e.modelValue))), {
      n: xv,
      classes: _v,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: v,
      isMax: C,
      isMin: g,
      validate: p,
      reset: y,
      resetValidation: f,
      handleChange: I,
      decrement: S,
      increment: B,
      pressDecrement: k,
      pressIncrement: D,
      releaseDecrement: P,
      releaseIncrement: $,
      toSizeUnit: Ee,
      toNumber: L
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Yl = 60, Wl = Yl * 60, Hl = Wl * 24, rf = Hl * 7, ha = 1e3, Mt = Yl * ha, po = Wl * ha, af = Hl * ha, tf = rf * ha, Ii = "millisecond", Cr = "second", kr = "minute", $r = "hour", An = "day", Za = "week", fn = "month", jl = "quarter", zn = "year", Tr = "date", of = "YYYY-MM-DDTHH:mm:ssZ", ho = "Invalid Date", lf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, sf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const uf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var xt = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, df = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + xt(t, 2, "0") + ":" + xt(i, 2, "0");
}, vf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, fn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), fn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, ff = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, cf = function(n) {
  var r = {
    M: fn,
    y: zn,
    w: Za,
    d: An,
    D: Tr,
    h: $r,
    m: kr,
    s: Cr,
    ms: Ii,
    Q: jl
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, mf = function(n) {
  return n === void 0;
};
const pf = {
  s: xt,
  z: df,
  m: vf,
  a: ff,
  p: cf,
  u: mf
};
var Pa = "en", lr = {};
lr[Pa] = uf;
var Ni = function(n) {
  return n instanceof bt;
}, tt = function e(n, r, a) {
  var t;
  if (!n)
    return Pa;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    lr[i] && (t = i), r && (lr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    lr[l] = n, t = l;
  }
  return !a && t && (Pa = t), t || !a && Pa;
}, x = function(n, r) {
  if (Ni(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new bt(a);
}, hf = function(n, r) {
  return x(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, we = pf;
we.l = tt;
we.i = Ni;
we.w = hf;
var gf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (we.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(lf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, bt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = tt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = gf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return we;
  }, n.isValid = function() {
    return this.$d.toString() !== ho;
  }, n.isSame = function(a, t) {
    var i = x(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return x(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < x(a);
  }, n.$g = function(a, t, i) {
    return we.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = we.u(t) ? !0 : t, l = we.p(a), s = function(T, C) {
      var g = we.w(i.$u ? Date.UTC(i.$y, C, T) : new Date(i.$y, C, T), i);
      return o ? g : g.endOf(An);
    }, u = function(T, C) {
      var g = [0, 0, 0, 0], h = [23, 59, 59, 999];
      return we.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? g : h).slice(C)
      ), i);
    }, d = this.$W, f = this.$M, v = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case zn:
        return o ? s(1, 0) : s(31, 11);
      case fn:
        return o ? s(1, f) : s(0, f + 1);
      case Za: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(o ? v - b : v + (6 - b), f);
      }
      case An:
      case Tr:
        return u(c + "Hours", 0);
      case $r:
        return u(c + "Minutes", 1);
      case kr:
        return u(c + "Seconds", 2);
      case Cr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = we.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[An] = l + "Date", i[Tr] = l + "Date", i[fn] = l + "Month", i[zn] = l + "FullYear", i[$r] = l + "Hours", i[kr] = l + "Minutes", i[Cr] = l + "Seconds", i[Ii] = l + "Milliseconds", i)[o], u = o === An ? this.$D + (t - this.$W) : t;
    if (o === fn || o === zn) {
      var d = this.clone().set(Tr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Tr, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[we.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = we.p(t), s = function(v) {
      var c = x(i);
      return we.w(c.date(c.date() + Math.round(v * a)), i);
    };
    if (l === fn)
      return this.set(fn, this.$M + a);
    if (l === zn)
      return this.set(zn, this.$y + a);
    if (l === An)
      return s(1);
    if (l === Za)
      return s(7);
    var u = (o = {}, o[kr] = Mt, o[$r] = po, o[Cr] = ha, o)[l] || 1, d = this.$d.getTime() + a * u;
    return we.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || ho;
    var o = a || of, l = we.z(this), s = this.$H, u = this.$m, d = this.$M, f = i.weekdays, v = i.months, c = i.meridiem, p = function(g, h, I, S) {
      return g && (g[h] || g(t, o)) || I[h].slice(0, S);
    }, b = function(g) {
      return we.s(s % 12 || 12, g, "0");
    }, y = c || function(C, g, h) {
      var I = C < 12 ? "AM" : "PM";
      return h ? I.toLowerCase() : I;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: we.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, v, 3),
      MMMM: p(v, d),
      D: this.$D,
      DD: we.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, f, 2),
      ddd: p(i.weekdaysShort, this.$W, f, 3),
      dddd: f[this.$W],
      H: String(s),
      HH: we.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: we.s(u, 2, "0"),
      s: String(this.$s),
      ss: we.s(this.$s, 2, "0"),
      SSS: we.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(sf, function(C, g) {
      return g || T[C] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = we.p(t), s = x(a), u = (s.utcOffset() - this.utcOffset()) * Mt, d = this - s, f = we.m(this, s);
    return f = (o = {}, o[zn] = f / 12, o[fn] = f, o[jl] = f / 3, o[Za] = (d - u) / tf, o[An] = (d - u) / af, o[$r] = d / po, o[kr] = d / Mt, o[Cr] = d / ha, o)[l] || d, i ? f : we.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(fn).$D;
  }, n.$locale = function() {
    return lr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = tt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return we.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Gl = bt.prototype;
x.prototype = Gl;
[["$ms", Ii], ["$s", Cr], ["$m", kr], ["$H", $r], ["$W", An], ["$M", fn], ["$y", zn], ["$D", Tr]].forEach(function(e) {
  Gl[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
x.extend = function(e, n) {
  return e.$i || (e(n, bt, x), e.$i = !0), x;
};
x.locale = tt;
x.isDayjs = Ni;
x.unix = function(e) {
  return x(e * 1e3);
};
x.en = lr[Pa];
x.Ls = lr;
x.p = {};
const ql = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Kl = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function yf(e) {
  return ["date", "month"].includes(e);
}
var Ja = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], Oa = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], bf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: yf
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: wf
} = _("picker-header");
function Sf(e, n) {
  var r = re("var-icon"), a = re("var-button");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [ee(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ce(() => [ee(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), A(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ee(
        He,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), M(
            "div",
            {
              key: e.showDate
            },
            J(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), ee(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ce(() => [ee(r, {
          name: "chevron-right"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const Xl = ae({
  render: Sf,
  name: "PanelHeader",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = E(!1), t = E(0), i = W(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: f
      } = s;
      if (u === "month")
        return L(f) + t.value;
      var v = (l = Re.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Re.value.lang === "zh-CN" ? f + " " + v : v + " " + f;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ne(() => e.date, () => {
      t.value = 0;
    }), {
      n: wf,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
x.extend(ql);
x.extend(Kl);
var {
  n: ja,
  classes: Cf
} = _("month-picker"), {
  n: Ga
} = _("date-picker");
function kf(e, n) {
  var r = re("panel-header"), a = re("var-button");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ee(
        He,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), M("ul", {
            key: e.panelKey
          }, [(w(!0), M(
            Te,
            null,
            Ie(e.MONTH_LIST, (t) => (w(), M("li", {
              key: t.index
            }, [ee(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, _t({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [he(
                  J(e.getMonthAbbr(t.index)),
                  1
                )]),
                _: 2
              },
              1040,
              ["onClick"]
            )]))),
            128
          ))]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const $f = ae({
  render: kf,
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Xl
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), i = E(!1), o = E(0), l = E(null), s = Ne({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), f = (C) => {
      var g, h;
      return (g = (h = Re.value.datePickerMonthDict) == null ? void 0 : h[C].abbr) != null ? g : "";
    }, v = (C) => {
      var {
        preview: {
          previewYear: g
        },
        componentProps: {
          min: h,
          max: I
        }
      } = e, S = !0, B = !0, k = g + "-" + C;
      return I && (S = x(k).isSameOrBefore(x(I), "month")), h && (B = x(k).isSameOrAfter(x(h), "month")), S && B;
    }, c = (C) => {
      var {
        choose: {
          chooseMonths: g,
          chooseDays: h,
          chooseRangeMonth: I
        },
        componentProps: {
          type: S,
          range: B
        }
      } = e;
      if (B) {
        if (!I.length)
          return !1;
        var k = x(C).isSameOrBefore(x(I[1]), "month"), D = x(C).isSameOrAfter(x(I[0]), "month");
        return k && D;
      }
      return S === "month" ? g.includes(C) : h.some((P) => P.includes(C));
    }, p = (C) => {
      var {
        choose: {
          chooseMonth: g
        },
        preview: {
          previewYear: h
        },
        componentProps: {
          allowedDates: I,
          color: S,
          multiple: B,
          range: k
        }
      } = e, D = h + "-" + C, P = () => k || B ? c(D) : (g == null ? void 0 : g.index) === C && u.value, $ = () => v(C) ? I ? !I(D) : !1 : !0, O = $(), R = () => O ? !0 : k || B ? !c(D) : !u.value || (g == null ? void 0 : g.index) !== C, Y = () => d.value && t === C && e.componentProps.showCurrent ? (k || B || u.value) && O ? !0 : k || B ? !c(D) : u.value ? (g == null ? void 0 : g.index) !== t : !0 : !1, G = () => O ? "" : Y() ? S != null ? S : "" : P() ? "" : Ga() + "-color-cover", V = G().startsWith(Ga());
      return {
        outline: Y(),
        text: R(),
        color: R() ? "" : S,
        textColor: V ? "" : G(),
        [Ga() + "-color-cover"]: V,
        class: Cf(ja("button"), [O, ja("button--disabled")])
      };
    }, b = (C, g) => {
      var h = g.currentTarget;
      h.classList.contains(ja("button--disabled")) || r("choose-month", C);
    }, y = (C) => {
      i.value = C === "prev", o.value += C === "prev" ? -1 : 1, r("check-preview", "year", C);
    }, T = (C) => {
      l.value.checkDate(C);
    };
    return ne(() => e.preview.previewYear, (C) => {
      var {
        componentProps: {
          min: g,
          max: h
        }
      } = e;
      h && (s.right = !x("" + (L(C) + 1)).isSameOrBefore(x(h), "year")), g && (s.left = !x("" + (L(C) - 1)).isSameOrAfter(x(g), "year"));
    }, {
      immediate: !0
    }), {
      n: ja,
      nDate: Ga,
      pack: Re,
      MONTH_LIST: Ja,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: f,
      chooseMonth: b,
      checkDate: y
    };
  }
});
var {
  n: go,
  classes: Tf
} = _("year-picker"), Of = ["onClick"];
function Pf(e, n) {
  return w(), M(
    "ul",
    {
      class: m(e.n())
    },
    [(w(!0), M(
      Te,
      null,
      Ie(e.yearList, (r) => (w(), M(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        J(r),
        15,
        Of
      ))),
      128
    ))],
    2
  );
}
const Ef = ae({
  render: Pf,
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = W(() => {
      var i = [], {
        preview: o,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!o)
        return i;
      var u = [L(o) + 100, L(o) - 100];
      if (l) {
        var d = x(l).format("YYYY-MM-D"), f = L(d.split("-")[0]);
        if (f < u[0] && f > u[1] && (u = [f, u[1]]), f <= u[1])
          return [f];
      }
      if (s) {
        var v = x(s).format("YYYY-MM-D"), c = L(v.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Fe(() => {
      var i = document.querySelector("." + go("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: go,
      classes: Tf,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
x.extend(ql);
x.extend(Kl);
var {
  n: wr,
  classes: Vf
} = _("day-picker"), {
  n: qa
} = _("date-picker");
function Mf(e, n) {
  var r = re("panel-header"), a = re("var-button");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ee(
        He,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(w(), M("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(w(!0), M(
              Te,
              null,
              Ie(e.sortWeekList, (t) => (w(), M(
                "li",
                {
                  key: t.index
                },
                J(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), A(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(w(!0), M(
              Te,
              null,
              Ie(e.days, (t, i) => (w(), M("li", {
                key: i
              }, [ee(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, ei({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [he(
                    J(e.filterDay(t)),
                    1
                  )]),
                  _: 2
                },
                1040,
                ["onClick"]
              )]))),
              128
            ))],
            2
          )]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const If = ae({
  render: Mf,
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Xl
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, i] = e.current.split("-"), o = E([]), l = E(!1), s = E(0), u = E(null), d = Ne({
      left: !1,
      right: !1
    }), f = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), v = W(() => {
      var k;
      return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var k = Oa.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? Oa : Oa.slice(k).concat(Oa.slice(0, k));
    }), p = (k) => {
      var D, P;
      return (D = (P = Re.value.datePickerWeekDict) == null ? void 0 : P[k].abbr) != null ? D : "";
    }, b = (k) => k > 0 ? k : "", y = () => {
      var {
        preview: {
          previewMonth: k,
          previewYear: D
        }
      } = e, P = x(D + "-" + k.index).daysInMonth(), $ = x(D + "-" + k.index + "-01").day(), O = c.value.findIndex((R) => R.index === "" + $);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(P + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: k,
          previewMonth: D
        },
        componentProps: {
          max: P,
          min: $
        }
      } = e;
      if (P) {
        var O = k + "-" + (L(D.index) + 1);
        d.right = !x(O).isSameOrBefore(x(P), "month");
      }
      if ($) {
        var R = k + "-" + (L(D.index) - 1);
        d.left = !x(R).isSameOrAfter(x($), "month");
      }
    }, C = (k) => {
      var {
        preview: {
          previewYear: D,
          previewMonth: P
        },
        componentProps: {
          min: $,
          max: O
        }
      } = e, R = !0, Y = !0, G = D + "-" + P.index + "-" + k;
      return O && (R = x(G).isSameOrBefore(x(O), "day")), $ && (Y = x(G).isSameOrAfter(x($), "day")), R && Y;
    }, g = (k) => {
      var {
        choose: {
          chooseDays: D,
          chooseRangeDay: P
        },
        componentProps: {
          range: $
        }
      } = e;
      if ($) {
        if (!P.length)
          return !1;
        var O = x(k).isSameOrBefore(x(P[1]), "day"), R = x(k).isSameOrAfter(x(P[0]), "day");
        return O && R;
      }
      return D.includes(k);
    }, h = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: wr("button")
        };
      var {
        choose: {
          chooseDay: D
        },
        preview: {
          previewYear: P,
          previewMonth: $
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: Y,
          range: G
        }
      } = e, V = P + "-" + $.index + "-" + k, z = () => G || Y ? g(V) : L(D) === k && v.value, X = () => C(k) ? O ? !O(V) : !1 : !0, se = X(), F = () => se ? !0 : G || Y ? !g(V) : !v.value || L(D) !== k, U = () => f.value && L(i) === k && e.componentProps.showCurrent ? (G || Y || v.value) && se ? !0 : G || Y ? !g(V) : v.value ? D !== i : !0 : !1, H = () => se ? "" : U() ? R != null ? R : "" : z() ? "" : qa() + "-color-cover", Q = H().startsWith(qa());
      return {
        text: F(),
        outline: U(),
        textColor: Q ? "" : H(),
        [qa() + "-color-cover"]: Q,
        class: Vf(wr("button"), wr("button--usable"), [se, wr("button--disabled")])
      };
    }, I = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, S = (k, D) => {
      var P = D.currentTarget;
      P.classList.contains(wr("button--disabled")) || r("choose-day", k);
    }, B = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      y(), T();
    }), ne(() => e.preview, () => {
      y(), T();
    }), {
      n: wr,
      nDate: qa,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: B,
      filterDay: b,
      getDayAbbr: p,
      checkDate: I,
      chooseDay: S,
      buttonProps: h
    };
  }
});
var {
  n: Nf,
  classes: Df
} = _("date-picker");
function Bf(e, n) {
  var r = re("year-picker-panel"), a = re("month-picker-panel"), t = re("day-picker-panel");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [q(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          J(e.chooseYear),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ee(
          He,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (w(), M("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                J(e.getMonthTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                J(e.getMonthTitle),
                1
              )]) : q(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                J(e.getMonthTitle),
                1
              )])])) : (w(), M("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                J(e.getDateTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                J(e.getDateTitle),
                1
              )]) : q(e.$slots, "date", rl(Ve({
                key: 2
              }, e.slotProps)), () => [he(
                J(e.getDateTitle),
                1
              )])]))];
            }),
            _: 3
          },
          8,
          ["name"]
        )],
        2
      )],
      6
    ), A(
      "div",
      {
        class: m(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [ee(
        He,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (w(), me(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (w(), me(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (w(), me(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : Z("v-if", !0)]),
          _: 1
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Lr = ae({
  render: Bf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: $f,
    YearPickerPanel: Ef,
    DayPickerPanel: If
  },
  props: bf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = x().format("YYYY-MM-D"), [o, l] = i.split("-"), s = Ja.find((te) => te.index === l), u = E(!1), d = E(!1), f = E(!0), v = E(), c = E(), p = E(), b = E(s), y = E(o), T = E(!1), C = E([]), g = E([]), h = E([]), I = E([]), S = E(null), B = E(null), k = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), D = W(() => ({
      chooseMonth: v.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: C.value,
      chooseDays: g.value,
      chooseRangeMonth: h.value,
      chooseRangeDay: I.value
    })), P = W(() => ({
      previewMonth: b.value,
      previewYear: y.value
    })), $ = W(() => {
      var {
        multiple: te,
        range: pe
      } = e;
      if (pe)
        return h.value.length ? h.value[0] + " ~ " + h.value[1] : "";
      var fe = "";
      if (v.value) {
        var ge, ye;
        fe = (ge = (ye = Re.value.datePickerMonthDict) == null ? void 0 : ye[v.value.index].name) != null ? ge : "";
      }
      return te ? "" + C.value.length + Re.value.datePickerSelected : fe;
    }), O = W(() => {
      var te, pe, fe, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var qe = I.value.map((Pt) => x(Pt).format("YYYY-MM-DD"));
        return qe.length ? qe[0] + " ~ " + qe[1] : "";
      }
      if (ye)
        return "" + g.value.length + Re.value.datePickerSelected;
      if (!c.value || !v.value || !p.value)
        return "";
      var an = x(c.value + "-" + v.value.index + "-" + p.value).day(), yr = Oa.find((Pt) => Pt.index === "" + an), ji = (te = (pe = Re.value.datePickerWeekDict) == null ? void 0 : pe[yr.index].name) != null ? te : "", Ms = (fe = (ge = Re.value.datePickerMonthDict) == null ? void 0 : ge[v.value.index].name) != null ? fe : "", Is = fr(p.value, 2, "0");
      return Re.value.lang === "zh-CN" ? v.value.index + "-" + Is + " " + ji.slice(0, 3) : ji.slice(0, 3) + ", " + Ms.slice(0, 3) + " " + p.value;
    }), R = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(R.value)), G = W(() => {
      var te, pe, fe, ge, ye = x(c.value + "-" + ((te = v.value) == null ? void 0 : te.index) + "-" + p.value).day(), Be = p.value ? fr(p.value, 2, "0") : "";
      return {
        week: "" + ye,
        year: (pe = c.value) != null ? pe : "",
        month: (fe = (ge = v.value) == null ? void 0 : ge.index) != null ? fe : "",
        date: Be
      };
    }), V = W(() => D.value.chooseRangeDay.map((te) => x(te).format("YYYY-MM-DD"))), z = W(() => c.value === y.value), X = W(() => {
      var te;
      return ((te = v.value) == null ? void 0 : te.index) === b.value.index;
    }), se = (te) => {
      te === "year" ? u.value = !0 : te === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, F = (te) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = te.touches[0];
        n = pe, r = fe;
      }
    }, U = (te, pe) => te >= pe && te > 20 ? "x" : "y", H = (te) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = te.touches[0], ge = pe - n, ye = fe - r;
        t = U(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(Y.value || t !== "x")) {
        var te = R.value === "month" ? S : B;
        ct(() => {
          te.value.forwardRef(a), Hi();
        });
      }
    }, ie = (te, pe) => {
      var fe = pe === "month" ? h : I;
      if (fe.value = f.value ? [te, te] : [fe.value[0], te], f.value = !f.value, f.value) {
        var ge = x(fe.value[0]).isAfter(fe.value[1]), ye = ge ? [fe.value[1], fe.value[0]] : [...fe.value];
        N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
      }
    }, oe = (te, pe) => {
      var fe = pe === "month" ? C : g, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = fe.value.map((qe) => x(qe).format(ge)), Be = ye.findIndex((qe) => qe === te);
      Be === -1 ? ye.push(te) : ye.splice(Be, 1), N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
    }, ve = (te, pe) => !c.value || !v.value ? !1 : z.value ? te === "month" ? pe.index < v.value.index : X.value ? pe < L(p.value) : v.value.index > b.value.index : c.value > y.value, be = (te) => {
      var {
        readonly: pe,
        range: fe,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(te < 0 || pe)) {
        T.value = ve("day", te);
        var qe = y.value + "-" + b.value.index + "-" + te, an = x(qe).format("YYYY-MM-DD");
        fe ? ie(an, "day") : ge ? oe(an, "day") : (N(Be, an), N(ye, an));
      }
    }, nn = (te) => {
      var {
        type: pe,
        readonly: fe,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: qe,
        "onUpdate:modelValue": an
      } = e;
      if (T.value = ve("month", te), pe === "month" && !fe) {
        var yr = y.value + "-" + te.index;
        ge ? ie(yr, "month") : ye ? oe(yr, "month") : (N(an, yr), N(Be, yr));
      } else
        b.value = te, N(qe, L(y.value), L(b.value.index));
      d.value = !1;
    }, rn = (te) => {
      y.value = "" + te, u.value = !1, d.value = !0, N(e.onPreview, L(y.value), L(b.value.index));
    }, De = (te, pe) => {
      var fe = pe === "prev" ? -1 : 1;
      if (te === "year")
        y.value = "" + (L(y.value) + fe);
      else {
        var ge = L(b.value.index) + fe;
        ge < 1 && (y.value = "" + (L(y.value) - 1), ge = 12), ge > 12 && (y.value = "" + (L(y.value) + 1), ge = 1), b.value = Ja.find((ye) => L(ye.index) === ge);
      }
      N(e.onPreview, L(y.value), L(b.value.index));
    }, Sn = () => (e.multiple || e.range) && !Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ot = (te) => Se(te) ? !1 : te === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ps = (te, pe) => {
      var fe = pe === "month" ? h : I, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = te.map((an) => x(an).format(ge)).slice(0, 2), Be = fe.value.some((an) => Ot(an));
      if (!Be) {
        fe.value = ye;
        var qe = x(fe.value[0]).isAfter(fe.value[1]);
        fe.value.length === 2 && qe && (fe.value = [fe.value[1], fe.value[0]]);
      }
    }, Es = (te, pe) => {
      var fe = pe === "month" ? C : g, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(te.map((Be) => x(Be).format(ge))));
      fe.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Vs = (te) => {
      var pe = x(te).format("YYYY-MM-D");
      if (!Ot(pe)) {
        var [fe, ge, ye] = pe.split("-"), Be = Ja.find((qe) => qe.index === ge);
        v.value = Be, c.value = fe, p.value = ye, b.value = Be, y.value = fe;
      }
    }, Hi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ne(() => e.modelValue, (te) => {
      if (!(!Sn() || Ot(te) || !te))
        if (e.range) {
          if (!Se(te))
            return;
          f.value = te.length !== 1, Ps(te, e.type);
        } else if (e.multiple) {
          if (!Se(te))
            return;
          Es(te, e.type);
        } else
          Vs(te);
    }, {
      immediate: !0
    }), ne(R, Hi), {
      n: Nf,
      classes: Df,
      monthPanelEl: S,
      dayPanelEl: B,
      reverse: T,
      currentDate: i,
      chooseMonth: v,
      chooseYear: c,
      chooseDay: p,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: $,
      getDateTitle: O,
      getPanelType: R,
      getChoose: D,
      getPreview: P,
      componentProps: k,
      slotProps: G,
      formatRange: V,
      clickEl: se,
      handleTouchstart: F,
      handleTouchmove: H,
      handleTouchend: Q,
      getChooseDay: be,
      getChooseMonth: nn,
      getChooseYear: rn,
      checkPreview: De
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
function Af(e) {
  return ["left", "center", "right"].includes(e);
}
var zf = ni({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: Af
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, Ze(La, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
var {
  n: Ff,
  classes: Lf
} = _("dialog");
function Rf(e, n) {
  var r = re("var-button"), a = re("var-popup");
  return w(), me(
    a,
    {
      class: m(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ce(() => [A(
        "div",
        Ve({
          class: e.classes("var--box", e.n(), e.dialogClass),
          style: ri({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
          },
          [q(e.$slots, "title", {}, () => [he(
            J(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), A(
          "div",
          {
            class: m(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [q(e.$slots, "default", {}, () => [he(
            J(e.message),
            1
          )])],
          6
        ), A(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (w(), me(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [he(
                J(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Z("v-if", !0), e.confirmButton ? (w(), me(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [he(
                J(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Z("v-if", !0)],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
const sr = ae({
  render: Rf,
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: zf,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (N(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        N(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (N(s), l != null) {
        l("confirm", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (N(s), l != null) {
        l("cancel", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), ne(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Ff,
      classes: Lf,
      pack: Re,
      dt: vt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: Ee
    };
  }
});
var Ln;
function mr(e) {
  return Pi() ? new Promise((n) => {
    mr.close();
    var r = _e(e) || Qe(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Ln = a;
    var {
      unmountInstance: t
    } = Fa(sr, a, {
      onConfirm: () => {
        a.onConfirm == null || a.onConfirm(), n("confirm");
      },
      onCancel: () => {
        a.onCancel == null || a.onCancel(), n("cancel");
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n("close");
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Ln === a && (Ln = null);
      },
      onRouteChange: () => {
        t(), Ln === a && (Ln = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
sr.install = function(e) {
  e.component(sr.name, sr);
};
mr.install = function(e) {
  e.component(sr.name, sr);
};
mr.close = () => {
  if (Ln != null) {
    var e = Ln;
    Ln = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
mr.Component = sr;
var Uf = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Or.apply(this, arguments);
}
var {
  n: Yf,
  classes: Wf
} = _("divider");
function Hf(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [q(e.$slots, "default", {}, () => [e.description ? (w(), M(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      J(e.description),
      3
    )) : Z("v-if", !0)])],
    6
  );
}
const Rr = ae({
  render: Hf,
  name: "VarDivider",
  props: Uf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = W(() => At(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (At(l) || l === 0)
        return Or({}, d);
      var f = L(l), v = Math.abs(f) + (l + "").replace(f + "", "");
      return s ? Or({}, d, {
        height: "calc(80% - " + Ee(v) + ")"
      }) : Or({}, d, {
        width: "calc(100% - " + Ee(v) + ")",
        left: f > 0 ? Ee(v) : Ee(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), $i(() => {
      o();
    }), Or({
      n: Yf,
      classes: Wf
    }, zs(a), {
      style: i,
      isInset: t
    });
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var jf = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  }
};
function yo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        yo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        yo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: qf
} = _("form");
function Kf(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Ur = ae({
  render: Kf,
  name: "VarForm",
  props: jf,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Od(), i = /* @__PURE__ */ function() {
      var u = Gf(function* () {
        var d = yield Promise.all(a.map((f) => {
          var {
            validate: v
          } = f;
          return v();
        }));
        return d.every((f) => f === !0);
      });
      return function() {
        return u.apply(this, arguments);
      };
    }(), o = () => a.forEach((u) => {
      var {
        reset: d
      } = u;
      return d();
    }), l = () => a.forEach((u) => {
      var {
        resetValidation: d
      } = u;
      return d();
    }), s = {
      disabled: n,
      readonly: r
    };
    return t(s), {
      n: qf,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
function bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var Xf = "background-image", Zf = "lazy-loading", Jf = "lazy-error", wo = "lazy-attempt", Qf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ti = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ga = [], it = [], Zl = Ws(100), Ae = {
  loading: ti,
  error: ti,
  attempt: 3,
  throttleWait: 300,
  events: Qf
}, Di = Oi(Ra, Ae.throttleWait);
function St(e, n) {
  e._lazy.arg === Xf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function xf(e) {
  e._lazy.loading && St(e, e._lazy.loading), Ra();
}
function _f(e) {
  e._lazy.error && St(e, e._lazy.error), e._lazy.state = "error", Ai(e), Ra();
}
function Jl(e, n) {
  St(e, n), e._lazy.state = "success", Ai(e), Ra();
}
function ec(e) {
  var n;
  it.includes(e) || (it.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Di, {
      passive: !0
    });
  }));
}
function nc() {
  it.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Di);
    });
  }), it.length = 0;
}
function rc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Zf)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(Jf)) != null ? a : Ae.error,
    attempt: e.getAttribute(wo) ? Number(e.getAttribute(wo)) : Ae.attempt
  };
  e._lazy = ai({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), St(e, ti), N(Ae.filter, e._lazy);
}
function ac(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Zl.add(n), Jl(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? _f(e) : Ql(e);
  });
}
function Ql(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Zl.has(n)) {
      Jl(e, n), e._lazy.attemptLock = !1;
      return;
    }
    xf(e), ac(e, n);
  }
}
function Bi(e) {
  return ii.apply(this, arguments);
}
function ii() {
  return ii = wt(function* (e) {
    (yield Gs(e)) && Ql(e);
  }), ii.apply(this, arguments);
}
function Ra() {
  ga.forEach((e) => Bi(e));
}
function tc(e) {
  return oi.apply(this, arguments);
}
function oi() {
  return oi = wt(function* (e) {
    !ga.includes(e) && ga.push(e), qs(e).forEach(ec), yield Bi(e);
  }), oi.apply(this, arguments);
}
function Ai(e) {
  dt(ga, e), ga.length === 0 && nc();
}
function ic(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function xl(e, n) {
  return li.apply(this, arguments);
}
function li() {
  return li = wt(function* (e, n) {
    rc(e, n), yield tc(e);
  }), li.apply(this, arguments);
}
function oc(e, n) {
  return si.apply(this, arguments);
}
function si() {
  return si = wt(function* (e, n) {
    if (!ic(e, n)) {
      ga.includes(e) && (yield Bi(e));
      return;
    }
    yield xl(e, n);
  }), si.apply(this, arguments);
}
function lc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Ae.events = n != null ? n : Ae.events, Ae.loading = r != null ? r : Ae.loading, Ae.error = a != null ? a : Ae.error, Ae.attempt = t != null ? t : Ae.attempt, Ae.throttleWait = i != null ? i : Ae.throttleWait, Ae.filter = o;
}
var ot = {
  mounted: xl,
  unmounted: Ai,
  updated: oc,
  install(e, n) {
    lc(n), Di = Oi(Ra, Ae.throttleWait), e.directive("lazy", this);
  }
};
function sc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var uc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: sc,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
}, {
  n: dc,
  classes: vc
} = _("image"), fc = ["alt", "title", "lazy-error", "lazy-loading"], cc = ["alt", "title", "src"];
function mc(e, n) {
  var r = je("lazy"), a = je("ripple");
  return Ce((w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [!e.block, "var--inline-block"])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Ce((w(), M(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: K({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      fc
    )), [[r, e.src]]) : (w(), M(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: K({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      cc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Yr = ae({
  render: mc,
  name: "VarImage",
  directives: {
    Lazy: ot,
    Ripple: Le
  },
  props: uc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && N(o, a), t._lazy.state === "error" && N(l, a)) : N(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && N(i, a);
    };
    return {
      n: dc,
      classes: vc,
      toSizeUnit: Ee,
      handleLoad: n,
      handleError: r
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var _l = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), es = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function pc() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(_l), {
    length: r
  } = gn(es);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ns = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: {
    type: Function
  }
};
function So(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        So(i, a, t, o, l, "next", s);
      }
      function l(s) {
        So(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var gc = 250, yc = 20, {
  n: bc,
  classes: wc
} = _("swipe"), Sc = ["onClick"];
function Cc(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: K({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [q(e.$slots, "default")],
      38
    ), q(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(w(!0), M(
        Te,
        null,
        Ie(e.length, (r, a) => (w(), M(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: K({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Sc
        ))),
        128
      ))],
      2
    )) : Z("v-if", !0)])],
    2
  );
}
const jn = ae({
  render: Cc,
  name: "VarSwipe",
  props: ns,
  setup(e) {
    var n = E(null), r = E(0), a = W(() => e.vertical), t = E(0), i = E(0), o = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = pc(), f = !1, v = -1, c, p, b, y, T, C = (F) => s.find((U) => {
      var {
        index: H
      } = U;
      return H.value === F;
    }), g = () => {
      !e.loop || (i.value >= 0 && C(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && C(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (C(d.value - 1).setTranslate(0), C(0).setTranslate(0)));
    }, h = (F) => {
      var U = Qe(F) ? F : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return U <= -1 ? H ? -1 : 0 : U >= d.value ? H ? d.value : d.value - 1 : U;
    }, I = (F) => {
      var {
        loop: U
      } = e;
      return F === -1 ? U ? d.value - 1 : 0 : F === d.value ? U ? 0 : d.value - 1 : F;
    }, S = (F) => {
      var {
        loop: U
      } = e;
      return F < 0 ? U ? d.value - 1 : 0 : F > d.value - 1 ? U ? 0 : d.value - 1 : F;
    }, B = (F) => {
      var U = i.value >= r.value, H = i.value <= -t.value, Q = 0, ie = -(t.value - r.value);
      o.value = !0, (U || H) && (o.value = !0, i.value = H ? Q : ie, C(0).setTranslate(0), C(d.value - 1).setTranslate(0)), ct(() => {
        o.value = !1, N(F);
      });
    }, k = () => {
      l.value = S(L(e.initialIndex));
    }, D = () => {
      var {
        autoplay: F
      } = e;
      !F || d.value <= 1 || (P(), v = window.setTimeout(() => {
        V(), D();
      }, L(F)));
    }, P = () => {
      v && clearTimeout(v);
    }, $ = (F, U) => {
      if (F > U && F > 10)
        return "horizontal";
      if (U > F && U > 10)
        return "vertical";
    }, O = (F) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: U,
          clientY: H
        } = F.touches[0];
        c = U, p = H, b = performance.now(), f = !0, P(), B(() => {
          o.value = !0;
        });
      }
    }, R = (F) => {
      var {
        touchable: U,
        vertical: H
      } = e;
      if (!(!f || !U)) {
        var {
          clientX: Q,
          clientY: ie
        } = F.touches[0], oe = Math.abs(Q - c), ve = Math.abs(ie - p), be = $(oe, ve), nn = H ? "vertical" : "horizontal";
        if (be === nn) {
          F.preventDefault();
          var rn = y !== void 0 ? Q - y : 0, De = T !== void 0 ? ie - T : 0;
          y = Q, T = ie, i.value += H ? De : rn, g();
        }
      }
    }, Y = () => {
      if (!!f) {
        var {
          vertical: F,
          onChange: U
        } = e, H = F ? T < p : y < c, Q = Math.abs(F ? p - T : c - y), ie = performance.now() - b <= gc && Q >= yc, oe = ie ? h(H ? l.value + 1 : l.value - 1) : h();
        f = !1, o.value = !1, y = void 0, T = void 0, i.value = oe * -r.value;
        var ve = l.value;
        l.value = I(oe), D(), ve !== l.value && N(U, l.value);
      }
    }, G = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((F) => {
        F.setTranslate(0);
      }), D(), setTimeout(() => {
        o.value = !1;
      });
    }, V = () => {
      if (!(d.value <= 1)) {
        var {
          loop: F,
          onChange: U
        } = e, H = l.value;
        l.value = S(H + 1), N(U, l.value), B(() => {
          if (H === d.value - 1 && F) {
            C(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          H !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: F,
          onChange: U
        } = e, H = l.value;
        l.value = S(H - 1), N(U, l.value), B(() => {
          if (H === 0 && F) {
            C(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          H !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, X = (F) => {
      if (!(d.value <= 1 || F === l.value)) {
        F = F < 0 ? 0 : F, F = F >= d.value ? d.value : F;
        var U = F > l.value ? V : z;
        Array.from({
          length: Math.abs(F - l.value)
        }).forEach(U);
      }
    }, se = {
      size: r,
      vertical: a
    };
    return u(se), ne(() => d.value, /* @__PURE__ */ hc(function* () {
      yield Mn(), k(), G();
    })), Fe(() => {
      window.addEventListener("resize", G);
    }), xn(() => {
      window.removeEventListener("resize", G), P();
    }), {
      n: bc,
      classes: wc,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: Y,
      next: V,
      prev: z,
      to: X,
      resize: G,
      toNumber: L
    };
  }
});
jn.install = function(e) {
  e.component(jn.name, jn);
};
function kc() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(_l), {
    index: r
  } = yn(es);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: $c
} = _("swipe-item");
function Tc(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Gn = ae({
  render: Tc,
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = kc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: $c,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var Oc = ui({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": {
    type: Function
  }
}, Ze(ns, ["loop", "indicator", "onChange"]), Ze(La, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Pc,
  classes: Ec
} = _("image-preview"), Co = 12, ko = 200, Vc = 350, $o = 200, Mc = ["src", "alt"];
function Ic(e, n) {
  var r = re("var-swipe-item"), a = re("var-swipe"), t = re("var-icon"), i = re("var-popup");
  return w(), me(
    i,
    {
      class: m(e.n("popup")),
      "var-image-preview-cover": "",
      transition: "var-fade",
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ce(() => [ee(
        a,
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ce(() => [(w(!0), M(
            Te,
            null,
            Ie(e.images, (o) => (w(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [A(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: K({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [A(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    Mc
                  )],
                  38
                )]),
                _: 2
              },
              1032,
              ["class"]
            ))),
            128
          ))]),
          indicator: ce((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [q(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (w(), M(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              J(l + 1) + " / " + J(s),
              3
            )) : Z("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), q(e.$slots, "close-icon", {}, () => [e.closeable ? (w(), me(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : Z("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
        },
        [q(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const ur = ae({
  render: Ic,
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Gn,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Oc,
  setup(e) {
    var n = E(!1), r = W(() => {
      var {
        images: P,
        current: $
      } = e, O = P.findIndex((R) => R === $);
      return O >= 0 ? O : 0;
    }), a = E(1), t = E(0), i = E(0), o = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, f = null, v = (P, $) => {
      var {
        clientX: O,
        clientY: R
      } = P, {
        clientX: Y,
        clientY: G
      } = $;
      return Math.abs(Math.sqrt(Math.pow(Y - O, 2) + Math.pow(G - R, 2)));
    }, c = (P, $) => ({
      clientX: P.clientX,
      clientY: P.clientY,
      timestamp: Date.now(),
      target: $
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, $o);
    }, b = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, y = (P) => d ? v(d, P) <= Co && P.timestamp - d.timestamp <= ko && d.target === P.target : !1, T = (P) => !P || !u || !d ? !1 : v(u, d) <= Co && Date.now() - d.timestamp < Vc && (P === u.target || P.parentNode === u.target), C = (P) => {
      f = window.setTimeout(() => {
        T(P.target) && D(), u = null;
      }, ko);
    }, g = (P) => {
      f && window.clearTimeout(f);
      var {
        touches: $
      } = P, O = c($[0], P.currentTarget);
      if (u = O, y(O)) {
        a.value > 1 ? b() : p();
        return;
      }
      d = O;
    }, h = (P) => {
      var {
        offsetWidth: $,
        offsetHeight: O
      } = P, {
        naturalWidth: R,
        naturalHeight: Y
      } = P.querySelector(".var-image-preview__image");
      return {
        width: $,
        height: O,
        imageRadio: Y / R,
        rootRadio: O / $,
        zoom: L(e.zoom)
      };
    }, I = (P) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: G
      } = h(P);
      if (!O)
        return 0;
      var V = O > R ? G / O : Y;
      return Math.max(0, ($ * V - Y) / 2) / $;
    }, S = (P) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: G
      } = h(P);
      if (!O)
        return 0;
      var V = O > R ? G : Y * O;
      return Math.max(0, ($ * V - G) / 2) / $;
    }, B = (P, $, O) => P + $ >= O ? O : P + $ <= -O ? -O : P + $, k = (P) => {
      if (!!d) {
        var $ = P.currentTarget, {
          touches: O
        } = P, R = c(O[0], $);
        if (a.value > 1) {
          var Y = R.clientX - d.clientX, G = R.clientY - d.clientY, V = I($), z = S($);
          t.value = B(t.value, Y, V), i.value = B(i.value, G, z);
        }
        d = R;
      }
    }, D = () => {
      if (a.value > 1) {
        b(), setTimeout(() => N(e["onUpdate:show"], !1), $o);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, (P) => {
      n.value = P;
    }, {
      immediate: !0
    }), {
      n: Pc,
      classes: Ec,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: g,
      handleTouchmove: k,
      handleTouchend: C,
      close: D
    };
  }
});
var Rn;
function Jn(e) {
  if (!!Pi()) {
    Jn.close();
    var n = _e(e) ? {
      images: [e]
    } : Se(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", Rn = r;
    var {
      unmountInstance: a
    } = Fa(ur, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Rn === r && (Rn = null);
      },
      onRouteChange: () => {
        a(), Rn === r && (Rn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Jn.close = () => {
  if (Rn != null) {
    var e = Rn;
    Rn = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
ur.install = function(e) {
  e.component(ur.name, ur);
};
Jn.install = function(e) {
  e.component(ur.name, ur);
};
Jn.Component = ur;
var rs = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: {
    type: Function
  }
};
function To(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        To(i, a, t, o, l, "next", s);
      }
      function l(s) {
        To(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Dc,
  classes: Bc
} = _("sticky");
function Ac(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [A(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: K({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [q(e.$slots, "default")],
      6
    )],
    6
  );
}
const qn = ae({
  render: Ac,
  name: "VarSticky",
  props: rs,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), i = E("0px"), o = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = W(() => !e.disabled && e.cssMode), f = W(() => !e.disabled && a.value), v = W(() => Me(e.offsetTop)), c, p = () => {
      var {
        onScroll: T,
        cssMode: C,
        disabled: g
      } = e;
      if (!g) {
        var h = 0;
        if (c !== window) {
          var {
            top: I
          } = c.getBoundingClientRect();
          h = I;
        }
        var S = r.value, B = n.value, {
          top: k,
          left: D
        } = B.getBoundingClientRect(), P = k - h;
        P <= v.value ? (C || (o.value = B.offsetWidth + "px", l.value = B.offsetHeight + "px", t.value = h + v.value + "px", i.value = D + "px", s.value = S.offsetWidth + "px", u.value = S.offsetHeight + "px", a.value = !0), N(T, v.value, !0)) : (a.value = !1, N(T, P, !1));
      }
    }, b = /* @__PURE__ */ function() {
      var T = Nc(function* () {
        yield Mn(), c = Sa(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), y = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ne(() => e.disabled, p), wi(b), Si(y), Fe(b), xn(y), {
      n: Dc,
      classes: Bc,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: v,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: f,
      toNumber: L
    };
  }
});
qn.install = function(e) {
  e.component(qn.name, qn);
};
var as = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ts = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function zc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(as), {
    length: r
  } = gn(ts);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Fc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(as), {
    index: r
  } = yn(ts);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Lc = {
  index: {
    type: [Number, String]
  }
}, {
  n: Rc,
  classes: Uc
} = _("index-anchor");
function Yc(e, n) {
  return w(), me(
    ut(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [he(
          J(e.name),
          1
        )])],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
const Wr = ae({
  render: Yc,
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Lc,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Fc(), t = E(0), i = E(!1), o = W(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (y) => {
      i.value = y;
    }, b = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(b), {
      n: Rc,
      classes: Uc,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: v,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: f,
      Transition: He
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Wc = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
function Oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function It(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Hc,
  classes: jc
} = _("index-bar"), Gc = ["onClick"];
function qc(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [q(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(w(!0), M(
        Te,
        null,
        Ie(e.anchorNameList, (r) => (w(), M(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          J(r),
          15,
          Gc
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Hr = ae({
  render: qc,
  name: "VarIndexBar",
  props: Wc,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = zc(), t = E(""), i = E(null), o = E(null), l = E([]), s = E(), u = W(() => e.sticky), d = W(() => e.cssMode), f = W(() => Me(e.stickyOffsetTop)), v = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    };
    a(c);
    var p = (C) => {
      var g = Ti(C) ? C.name.value : C;
      g === s.value || g === void 0 || (s.value = g, N(e.onChange, g));
    }, b = () => {
      var C = ft(i.value), g = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: h
      } = o.value;
      r.forEach((I, S) => {
        var B = I.ownTop.value, k = C - B + f.value - h, D = S === r.length - 1 ? g : r[S + 1].ownTop.value - I.ownTop.value;
        k >= 0 && k < D && !t.value && (S && !e.cssMode && r[S - 1].setDisabled(!0), I.setDisabled(!1), p(I));
      });
    }, y = /* @__PURE__ */ function() {
      var C = It(function* (g, h) {
        var {
          offsetTop: I
        } = o.value;
        if (h && N(e.onClick, g), g !== s.value) {
          var S = r.find((D) => {
            var {
              name: P
            } = D;
            return g === P.value;
          });
          if (!!S) {
            var B = S.ownTop.value - f.value + I, k = Ei(i.value);
            t.value = g, p(g), yield xa(i.value, {
              left: k,
              top: B,
              animation: tl,
              duration: L(e.duration)
            }), ct(() => {
              t.value = "";
            });
          }
        }
      });
      return function(h, I) {
        return C.apply(this, arguments);
      };
    }(), T = (C) => {
      kn(() => y(C));
    };
    return ne(() => n.value, /* @__PURE__ */ It(function* () {
      yield Mn(), r.forEach((C) => {
        var {
          name: g,
          setOwnTop: h
        } = C;
        g.value && l.value.push(g.value), h();
      });
    })), Fe(/* @__PURE__ */ It(function* () {
      yield Mn(), i.value = Sa(o.value), i.value.addEventListener("scroll", b);
    })), Ci(() => {
      N(i.value.removeEventListener, "scroll", b);
    }), {
      n: Hc,
      classes: jc,
      barEl: o,
      active: s,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: T,
      anchorClick: y
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
function Kc(e) {
  return ["text", "password", "number"].includes(e);
}
var Xc = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Kc
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Nt,
  classes: Zc
} = _("input"), Jc = ["id", "disabled", "type", "value", "maxlength", "rows"], Qc = ["id", "disabled", "type", "value", "maxlength"], xc = ["for"];
function _c(e, n) {
  var r = re("var-icon"), a = re("var-form-details");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (w(), M(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : Z("v-if", !0), e.textarea ? (w(), M(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: K({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          `
        `,
          46,
          Jc
        )) : (w(), M(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: K({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          Qc
        )), A(
          "label",
          {
            class: m(e.classes("var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          J(e.placeholder),
          15,
          xc
        )],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (w(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Z("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Z("v-if", !0), ee(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    )],
    2
  );
}
const dr = ae({
  render: _c,
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: Ye
  },
  props: Xc,
  setup(e) {
    var n = E("var-input-" + Aa().uid), r = E(null), a = E(!1), t = W(() => {
      var {
        maxlength: P,
        modelValue: $
      } = e;
      return P ? Un($) ? "0 / " + P : String($).length + "/" + P : "";
    }), {
      bindForm: i,
      form: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), f = (P) => {
      Oe(() => {
        var {
          validateTrigger: $,
          rules: O,
          modelValue: R
        } = e;
        s($, P, O, R);
      });
    }, v = () => {
      var {
        hint: P,
        modelValue: $
      } = e;
      if (!P && !Un($))
        return Nt("--placeholder-hidden");
      if (P && (!Un($) || a.value))
        return Nt("--placeholder-hint");
    }, c = (P) => {
      a.value = !0, N(e.onFocus, P), f("onFocus");
    }, p = (P) => {
      a.value = !1, N(e.onBlur, P), f("onBlur");
    }, b = (P) => {
      var {
        value: $
      } = P.target;
      $ = g($), N(e["onUpdate:modelValue"], $), N(e.onInput, $, P), f("onInput");
    }, y = (P) => {
      var {
        value: $
      } = P.target;
      N(e.onChange, g($), P), f("onChange");
    }, T = () => {
      var {
        disabled: P,
        readonly: $,
        clearable: O,
        onClear: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || P || $ || !O || (N(e["onUpdate:modelValue"], ""), N(R, ""), f("onClear"));
    }, C = (P) => {
      var {
        disabled: $,
        onClick: O
      } = e;
      o != null && o.disabled.value || $ || (N(O, P), f("onClick"));
    }, g = (P) => e.modelModifiers.trim ? P.trim() : P, h = (P) => {
      var {
        disabled: $,
        readonly: O
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || O || P.stopPropagation();
    }, I = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, S = () => u(e.rules, e.modelValue), B = () => {
      var P;
      (P = r.value) == null || P.focus();
    }, k = () => {
      r.value.blur();
    }, D = {
      reset: I,
      validate: S,
      resetValidation: d
    };
    return N(i, D), Fe(() => {
      e.autofocus && B();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Nt,
      classes: Zc,
      isEmpty: Un,
      computePlaceholderState: v,
      handleFocus: c,
      handleBlur: p,
      handleInput: b,
      handleChange: y,
      handleClear: T,
      handleClick: C,
      handleTouchstart: h,
      validate: S,
      resetValidation: d,
      reset: I,
      focus: B,
      blur: k
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var em = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: {
    type: Function
  },
  "onUpdate:loading": {
    type: Function
  },
  "onUpdate:error": {
    type: Function
  }
};
function Po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function nm(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Po(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Po(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: rm,
  classes: am
} = _("list");
function tm(e, n) {
  var r = re("var-loading"), a = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      ref: "listEl"
    },
    [q(e.$slots, "default"), e.loading ? q(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: m(e.n("loading"))
      },
      [A(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        J(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ee(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : Z("v-if", !0), e.finished ? q(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      J(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Z("v-if", !0), e.error ? q(e.$slots, "error", {
      key: 2
    }, () => [Ce((w(), M(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        J(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const jr = ae({
  render: tm,
  name: "VarList",
  directives: {
    Ripple: Le
  },
  components: {
    VarLoading: Cn
  },
  props: em,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Me(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = nm(function* () {
        yield Oe();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && i() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return Fe(() => {
      a = Sa(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), xn(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Re,
      listEl: n,
      detectorEl: r,
      dt: vt,
      isNumber: Qe,
      load: t,
      check: o,
      n: rm,
      classes: am
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var im = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return im[n];
  });
}
var Pn = "top", Qn = "bottom", pr = "right", Kn = "left", Ct = "auto", kt = [Pn, Qn, pr, Kn], $t = "start", Ia = "end", om = "clippingParents", is = "viewport", Ca = "popper", lm = "reference", Eo = /* @__PURE__ */ kt.reduce(function(e, n) {
  return e.concat([n + "-" + $t, n + "-" + Ia]);
}, []), os = /* @__PURE__ */ [].concat(kt, [Ct]).reduce(function(e, n) {
  return e.concat([n, n + "-" + $t, n + "-" + Ia]);
}, []), sm = "beforeRead", um = "read", dm = "afterRead", vm = "beforeMain", fm = "main", cm = "afterMain", mm = "beforeWrite", pm = "write", hm = "afterWrite", di = [sm, um, dm, vm, fm, cm, mm, pm, hm];
function En(e) {
  return e.split("-")[0];
}
var gm = {
  start: "end",
  end: "start"
};
function Vo(e) {
  return e.replace(/start|end/g, function(n) {
    return gm[n];
  });
}
function vn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function hr(e) {
  var n = vn(e).Element;
  return e instanceof n || e instanceof Element;
}
function ln(e) {
  var n = vn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function zi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = vn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function er(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Ea = Math.max, Mo = Math.min, ya = Math.round;
function vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ls() {
  return !/^((?!chrome|android).)*safari/i.test(vi());
}
function ba(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && ln(e) && (t = e.offsetWidth > 0 && ya(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ya(a.height) / e.offsetHeight || 1);
  var o = hr(e) ? vn(e) : window, l = o.visualViewport, s = !ls() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, f = a.width / t, v = a.height / i;
  return {
    width: f,
    height: v,
    top: d,
    right: u + f,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function Fi(e) {
  var n = vn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Li(e) {
  return ba(er(e)).left + Fi(e).scrollLeft;
}
function ym(e, n) {
  var r = vn(e), a = er(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = ls();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Li(e),
    y: s
  };
}
function hn(e) {
  return vn(e).getComputedStyle(e);
}
function bm(e) {
  var n, r = er(e), a = Fi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Ea(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Ea(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Li(e), s = -a.scrollTop;
  return hn(t || r).direction === "rtl" && (l += Ea(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Tn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  return Tn(e) === "html" ? e : e.assignedSlot || e.parentNode || (zi(e) ? e.host : null) || er(e);
}
function Ri(e) {
  var n = hn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(Tn(e)) >= 0 ? e.ownerDocument.body : ln(e) && Ri(e) ? e : ss(Tt(e));
}
function Va(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = ss(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = vn(a), o = t ? [i].concat(i.visualViewport || [], Ri(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Va(Tt(o)));
}
function wm(e) {
  return ["table", "td", "th"].indexOf(Tn(e)) >= 0;
}
function Io(e) {
  return !ln(e) || hn(e).position === "fixed" ? null : e.offsetParent;
}
function Sm(e) {
  var n = /firefox/i.test(vi()), r = /Trident/i.test(vi());
  if (r && ln(e)) {
    var a = hn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Tt(e);
  for (zi(t) && (t = t.host); ln(t) && ["html", "body"].indexOf(Tn(t)) < 0; ) {
    var i = hn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ui(e) {
  for (var n = vn(e), r = Io(e); r && wm(r) && hn(r).position === "static"; )
    r = Io(r);
  return r && (Tn(r) === "html" || Tn(r) === "body" && hn(r).position === "static") ? n : r || Sm(e) || n;
}
function Cm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && zi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function fi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function km(e, n) {
  var r = ba(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function No(e, n, r) {
  return n === is ? fi(ym(e, r)) : hr(n) ? km(n, r) : fi(bm(er(e)));
}
function $m(e) {
  var n = Va(Tt(e)), r = ["absolute", "fixed"].indexOf(hn(e).position) >= 0, a = r && ln(e) ? Ui(e) : e;
  return hr(a) ? n.filter(function(t) {
    return hr(t) && Cm(t, a) && Tn(t) !== "body";
  }) : [];
}
function Tm(e, n, r, a) {
  var t = n === "clippingParents" ? $m(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = No(e, u, a);
    return s.top = Ea(d.top, s.top), s.right = Mo(d.right, s.right), s.bottom = Mo(d.bottom, s.bottom), s.left = Ea(d.left, s.left), s;
  }, No(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Na(e) {
  return e.split("-")[1];
}
function Om(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function us(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? En(a) : null, i = a ? Na(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Pn:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case Qn:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case pr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Kn:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? Om(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case $t:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ia:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Pm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Em(e) {
  return Object.assign({}, Pm(), e);
}
function Vm(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function ds(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? om : l, u = r.rootBoundary, d = u === void 0 ? is : u, f = r.elementContext, v = f === void 0 ? Ca : f, c = r.altBoundary, p = c === void 0 ? !1 : c, b = r.padding, y = b === void 0 ? 0 : b, T = Em(typeof y != "number" ? y : Vm(y, kt)), C = v === Ca ? lm : Ca, g = e.rects.popper, h = e.elements[p ? C : v], I = Tm(hr(h) ? h : h.contextElement || er(e.elements.popper), s, d, o), S = ba(e.elements.reference), B = us({
    reference: S,
    element: g,
    strategy: "absolute",
    placement: t
  }), k = fi(Object.assign({}, g, B)), D = v === Ca ? k : S, P = {
    top: I.top - D.top + T.top,
    bottom: D.bottom - I.bottom + T.bottom,
    left: I.left - D.left + T.left,
    right: D.right - I.right + T.right
  }, $ = e.modifiersData.offset;
  if (v === Ca && $) {
    var O = $[t];
    Object.keys(P).forEach(function(R) {
      var Y = [pr, Qn].indexOf(R) >= 0 ? 1 : -1, G = [Pn, Qn].indexOf(R) >= 0 ? "y" : "x";
      P[R] += O[G] * Y;
    });
  }
  return P;
}
function Mm(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? os : s, d = Na(a), f = d ? l ? Eo : Eo.filter(function(p) {
    return Na(p) === d;
  }) : kt, v = f.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = v.reduce(function(p, b) {
    return p[b] = ds(e, {
      placement: b,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[En(b)], p;
  }, {});
  return Object.keys(c).sort(function(p, b) {
    return c[p] - c[b];
  });
}
function Im(e) {
  if (En(e) === Ct)
    return [];
  var n = Qa(e);
  return [Vo(e), n, Vo(n)];
}
function Nm(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, v = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, b = r.allowedAutoPlacements, y = n.options.placement, T = En(y), C = T === y, g = s || (C || !p ? [Qa(y)] : Im(y)), h = [y].concat(g).reduce(function(ie, oe) {
      return ie.concat(En(oe) === Ct ? Mm(n, {
        placement: oe,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : oe);
    }, []), I = n.rects.reference, S = n.rects.popper, B = /* @__PURE__ */ new Map(), k = !0, D = h[0], P = 0; P < h.length; P++) {
      var $ = h[P], O = En($), R = Na($) === $t, Y = [Pn, Qn].indexOf(O) >= 0, G = Y ? "width" : "height", V = ds(n, {
        placement: $,
        boundary: d,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), z = Y ? R ? pr : Kn : R ? Qn : Pn;
      I[G] > S[G] && (z = Qa(z));
      var X = Qa(z), se = [];
      if (i && se.push(V[O] <= 0), l && se.push(V[z] <= 0, V[X] <= 0), se.every(function(ie) {
        return ie;
      })) {
        D = $, k = !1;
        break;
      }
      B.set($, se);
    }
    if (k)
      for (var F = p ? 3 : 1, U = function(oe) {
        var ve = h.find(function(be) {
          var nn = B.get(be);
          if (nn)
            return nn.slice(0, oe).every(function(rn) {
              return rn;
            });
        });
        if (ve)
          return D = ve, "break";
      }, H = F; H > 0; H--) {
        var Q = U(H);
        if (Q === "break")
          break;
      }
    n.placement !== D && (n.modifiersData[a]._skip = !0, n.placement = D, n.reset = !0);
  }
}
const Dm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bm(e, n, r) {
  var a = En(e), t = [Kn, Pn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [Kn, pr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Am(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = os.reduce(function(d, f) {
    return d[f] = Bm(f, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const zm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Am
};
function Fm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Lm(e) {
  return e === vn(e) || !ln(e) ? Fi(e) : Fm(e);
}
function Rm(e) {
  var n = e.getBoundingClientRect(), r = ya(n.width) / e.offsetWidth || 1, a = ya(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Um(e, n, r) {
  r === void 0 && (r = !1);
  var a = ln(n), t = ln(n) && Rm(n), i = er(n), o = ba(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Tn(n) !== "body" || Ri(i)) && (l = Lm(n)), ln(n) ? (s = ba(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Li(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Ym(e) {
  var n = ba(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Wm(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    n.set(i.name, i);
  });
  function t(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || t(i);
  }), a;
}
function Hm(e) {
  var n = Wm(e);
  return di.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function jm(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Dn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var nr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Gm = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Do = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function qm(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Do).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Dn(nr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Dn(nr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          di.indexOf(n.phase) < 0 && console.error(Dn(nr, n.name, '"phase"', "either " + di.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Dn(nr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Dn(nr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Dn(nr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Dn(nr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Do.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Dn(Gm, String(n.name), a, a));
      });
    });
  });
}
function Km(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Xm(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var Bo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Zm = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ao = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Jm(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Ao : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ao, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], v = !1, c = {
      state: d,
      setOptions: function(T) {
        var C = typeof T == "function" ? T(d.options) : T;
        b(), d.options = Object.assign({}, i, d.options, C), d.scrollParents = {
          reference: hr(l) ? Va(l) : l.contextElement ? Va(l.contextElement) : [],
          popper: Va(s)
        };
        var g = Hm(Xm([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = g.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var h = Km([].concat(g, d.options.modifiers), function($) {
            var O = $.name;
            return O;
          });
          if (qm(h), En(d.options.placement) === Ct) {
            var I = d.orderedModifiers.find(function($) {
              var O = $.name;
              return O === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = hn(s), B = S.marginTop, k = S.marginRight, D = S.marginBottom, P = S.marginLeft;
          [B, k, D, P].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!v) {
          var T = d.elements, C = T.reference, g = T.popper;
          if (!zo(C, g)) {
            process.env.NODE_ENV !== "production" && console.error(Bo);
            return;
          }
          d.rects = {
            reference: Um(C, Ui(g), d.options.strategy === "fixed"),
            popper: Ym(g)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
            return d.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var h = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (h += 1, h > 100)) {
              console.error(Zm);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var S = d.orderedModifiers[I], B = S.fn, k = S.options, D = k === void 0 ? {} : k, P = S.name;
            typeof B == "function" && (d = B({
              state: d,
              options: D,
              name: P,
              instance: c
            }) || d);
          }
        }
      },
      update: jm(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!zo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Bo), c;
    c.setOptions(u).then(function(y) {
      !v && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function p() {
      d.orderedModifiers.forEach(function(y) {
        var T = y.name, C = y.options, g = C === void 0 ? {} : C, h = y.effect;
        if (typeof h == "function") {
          var I = h({
            state: d,
            name: T,
            instance: c,
            options: g
          }), S = function() {
          };
          f.push(I || S);
        }
      });
    }
    function b() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return c;
  };
}
var Ka = {
  passive: !0
};
function Qm(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = vn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ka);
  }), l && s.addEventListener("resize", r.update, Ka), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ka);
    }), l && s.removeEventListener("resize", r.update, Ka);
  };
}
const xm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Qm,
  data: {}
};
function _m(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = us({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ep = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _m,
  data: {}
};
var np = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rp(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: ya(n * t) / t || 0,
    y: ya(r * t) / t || 0
  };
}
function Fo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = o.x, c = v === void 0 ? 0 : v, p = o.y, b = p === void 0 ? 0 : p, y = typeof d == "function" ? d({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = y.x, b = y.y;
  var T = o.hasOwnProperty("x"), C = o.hasOwnProperty("y"), g = Kn, h = Pn, I = window;
  if (u) {
    var S = Ui(r), B = "clientHeight", k = "clientWidth";
    if (S === vn(r) && (S = er(r), hn(S).position !== "static" && l === "absolute" && (B = "scrollHeight", k = "scrollWidth")), S = S, t === Pn || (t === Kn || t === pr) && i === Ia) {
      h = Qn;
      var D = f && S === I && I.visualViewport ? I.visualViewport.height : S[B];
      b -= D - a.height, b *= s ? 1 : -1;
    }
    if (t === Kn || (t === Pn || t === Qn) && i === Ia) {
      g = pr;
      var P = f && S === I && I.visualViewport ? I.visualViewport.width : S[k];
      c -= P - a.width, c *= s ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && np), O = d === !0 ? rp({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = O.x, b = O.y, s) {
    var R;
    return Object.assign({}, $, (R = {}, R[h] = C ? "0" : "", R[g] = T ? "0" : "", R.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", R));
  }
  return Object.assign({}, $, (n = {}, n[h] = C ? b + "px" : "", n[g] = T ? c + "px" : "", n.transform = "", n));
}
function ap(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = hn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: En(n.placement),
    variation: Na(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Fo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Fo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const tp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ap,
  data: {}
};
function ip(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !ln(i) || !Tn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function op(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], i = n.attributes[a] || {}, o = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = o.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !ln(t) || !Tn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const lp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ip,
  effect: op,
  requires: ["computeStyles"]
};
var sp = [xm, ep, tp, lp], up = /* @__PURE__ */ Jm({
  defaultModifiers: sp
});
function dp(e) {
  return ["click", "hover"].includes(e);
}
function vp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var fp = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: dp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: vp
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function Lo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ro(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Lo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Lo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: cp,
  classes: mp
} = _("menu");
function pp(e, n) {
  return w(), M(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleMouseenter && e.handleMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleMouseleave && e.handleMouseleave(...arguments);
      })
    },
    [q(e.$slots, "default"), (w(), me(
      st,
      {
        to: e.teleport
      },
      [ee(
        He,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ce(() => [Ce(A(
            "div",
            {
              ref: "menu",
              style: K({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " var-elevation--3"])),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [q(e.$slots, "menu")],
            38
          ), [[za, e.show]])]),
          _: 3
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
  );
}
const Xn = ae({
  render: pp,
  name: "VarMenu",
  props: fp,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), {
      zIndex: t
    } = mt(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: S,
        height: B
      } = getComputedStyle(n.value);
      u = {
        width: Me(S),
        height: Me(B)
      };
    }, f = () => {
      e.trigger === "hover" && (s = !0, h());
    }, v = /* @__PURE__ */ function() {
      var S = Ro(function* () {
        e.trigger === "hover" && (s = !1, yield Mn(), !l && I());
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var S = Ro(function* () {
        e.trigger === "hover" && (l = !1, yield Mn(), !s && I());
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), b = () => {
      h(), o = !0;
    }, y = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var S = {
        x: Me(e.offsetX),
        y: Me(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: S.y,
            distance: S.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: S.y,
            distance: -S.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: S.y,
            distance: -S.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: S.x,
            distance: -S.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: S.x,
            distance: S.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: S.y,
            distance: S.x
          };
      }
    }, C = () => {
      var {
        placement: S,
        skidding: B,
        distance: k
      } = T();
      return {
        placement: S,
        modifiers: [lt({}, Dm, {
          enabled: a.value
        }), lt({}, zm, {
          options: {
            offset: [B, k]
          }
        })]
      };
    }, g = () => {
      i.setOptions(C());
    }, h = () => {
      var {
        disabled: S
      } = e;
      S || (a.value = !0, N(e["onUpdate:show"], !0));
    }, I = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ne(() => e.show, (S) => {
      a.value = S != null ? S : !1;
    }, {
      immediate: !0
    }), ne(() => e.offsetX, g), ne(() => e.offsetY, g), ne(() => e.placement, g), ne(() => a.value, (S) => {
      S ? (g(), N(e.onOpen)) : N(e.onClose);
    }), ne(() => e.trigger, (S) => {
      S === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
    }), ne(() => e.disabled, I), Fe(() => {
      i = up(n.value, r.value, C()), e.trigger === "click" && document.addEventListener("click", y);
    }), xn(() => {
      document.removeEventListener("click", y), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: cp,
      classes: mp,
      handleClick: b,
      handleMenuClose: y,
      handleMouseenter: f,
      handleMouseleave: v,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: g,
      open: h,
      close: I
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var vs = Symbol("SELECT_BIND_OPTION_KEY"), fs = Symbol("SELECT_COUNT_OPTION_KEY");
function hp() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(vs), {
    length: r
  } = gn(fs);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function gp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(vs), {
    index: r
  } = yn(fs);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var yp = {
  label: {},
  value: {}
}, {
  n: bp,
  classes: wp
} = _("option");
function Sp(e, n) {
  var r = re("var-checkbox"), a = je("ripple");
  return Ce((w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.optionSelected, e.n("--selected-color")])),
      style: K({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (w(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Vn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : Z("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), "var--ellipsis"))
      },
      [q(e.$slots, "default", {}, () => [he(
        J(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const Gr = ae({
  render: Sp,
  name: "VarOption",
  directives: {
    Ripple: Le
  },
  components: {
    VarCheckbox: ir
  },
  props: yp,
  setup(e) {
    var n = E(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = gp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, f = () => {
      n.value = !n.value, d(p);
    }, v = () => d(p), c = (b) => {
      n.value = b;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return ne([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: bp,
      classes: wp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: v
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var Cp = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:current": {
    type: Function
  },
  "onUpdate:size": {
    type: Function
  }
}, {
  n: kp,
  classes: $p
} = _("pagination"), Tp = ["item-mode", "onClick"];
function Op(e, n) {
  var r = re("var-icon"), a = re("var-input"), t = re("var-cell"), i = re("var-menu"), o = je("ripple");
  return w(), M(
    "ul",
    {
      class: m(e.n())
    },
    [Ce((w(), M(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), "var-elevation--2"])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [q(e.$slots, "prev", {}, () => [ee(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (w(), M(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = Gi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [he(
        " / " + J(e.pageCount) + " ",
        1
      ), A(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (w(!0), M(
      Te,
      {
        key: 1
      },
      Ie(e.pageList, (l, s) => Ce((w(), M(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), "var-elevation--2", [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          J(l),
          1
        )],
        10,
        Tp
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), Ce((w(), M(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), "var-elevation--2"])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [q(e.$slots, "next", {}, () => [ee(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (w(), M(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ce(() => [(w(!0), M(
            Te,
            null,
            Ie(e.sizeOption, (l, s) => Ce((w(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [he(
                  J(l) + J(e.pack.paginationItem) + " / " + J(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ce(() => [A(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
              "span",
              null,
              J(e.size) + J(e.pack.paginationItem) + " / " + J(e.pack.paginationPage),
              1
            ), ee(
              r,
              {
                class: m(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : Z("v-if", !0), e.showQuickJumper && !e.simple ? (w(), M(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        J(e.pack.paginationJump) + " ",
        1
      ), ee(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = Gi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : Z("v-if", !0), e.totalText ? (w(), M(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      J(e.totalText),
      3
    )) : Z("v-if", !0)],
    2
  );
}
const qr = ae({
  render: Op,
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: dr
  },
  directives: {
    Ripple: Le
  },
  props: Cp,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), i = E(!1), o = E(L(e.current) || 1), l = E(L(e.size) || 10), s = E([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(L(e.total) / L(l.value))), f = W(() => {
      var h = l.value * (o.value - 1) + 1, I = Math.min(l.value * o.value, L(e.total));
      return [h, I];
    }), v = W(() => e.showTotal ? e.showTotal(L(e.total), f.value) : ""), c = (h, I) => Qe(h) ? !1 : I === 1 ? t.value : i.value, p = (h, I) => Qe(h) ? "basic" : I === 1 ? "head" : "tail", b = (h, I) => {
      h === o.value || e.disabled || (Qe(h) ? o.value = h : h === "prev" ? o.value > 1 && (o.value -= 1) : h === "next" ? o.value < d.value && (o.value += 1) : h === "..." && (I === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, T = (h) => {
      l.value = h, n.value = !1;
    }, C = (h) => {
      var I = /^[1-9][0-9]*$/;
      return I.test(h);
    }, g = (h, I, S) => {
      if (S.target.blur(), C(I)) {
        var B = L(I);
        B > d.value && (B = d.value, a.value = "" + B), B !== o.value && (o.value = B);
      }
      h === "quick" && (r.value = ""), h === "simple" && !C(I) && (a.value = "" + o.value);
    };
    return ne([() => e.current, () => e.size], (h) => {
      var [I, S] = h;
      o.value = L(I) || 1, l.value = L(S || 10);
    }), ne([o, l], (h, I) => {
      var S, B, [k, D] = h, [P, $] = I;
      if (k > d.value) {
        o.value = d.value;
        return;
      }
      var O = [], {
        maxPagerCount: R,
        total: Y,
        onChange: G
      } = e, V = Math.ceil(L(Y) / L($)), z = d.value - (R - u.value) - 1;
      if (a.value = "" + k, d.value - 2 > R) {
        if (P === void 0 || d.value !== V)
          for (var X = 2; X < R + 2; X++)
            O.push(X);
        if (k <= R && k < z) {
          O = [];
          for (var se = 1; se < R + 1; se++)
            O.push(se + 1);
          t.value = !0, i.value = !1;
        }
        if (k > R && k < z) {
          O = [];
          for (var F = 1; F < R + 1; F++)
            O.push(k + F - u.value);
          t.value = k === 2 && R === 1, i.value = !1;
        }
        if (k >= z) {
          O = [];
          for (var U = 1; U < R + 1; U++)
            O.push(d.value - (R - U) - 1);
          t.value = !1, i.value = !0;
        }
        O = [1, "...", ...O, "...", d.value];
      } else
        for (var H = 1; H <= d.value; H++)
          O.push(H);
      s.value = O, P !== void 0 && d.value > 0 && (G == null || G(k, D)), (S = e["onUpdate:current"]) == null || S.call(e, k), (B = e["onUpdate:size"]) == null || B.call(e, D);
    }, {
      immediate: !0
    }), {
      n: kp,
      classes: $p,
      pack: Re,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: v,
      getMode: p,
      isHideEllipsis: c,
      clickItem: b,
      showMenu: y,
      clickSize: T,
      setPage: g,
      toNumber: L
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
var Pp = ci({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  dynamic: {
    type: Boolean,
    default: !1
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  }
}, Ze(La, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Ep,
  classes: Vp
} = _("picker"), Uo = 300, Mp = 15, Yo = 0, Ip = ["onTouchstart", "onTouchmove", "onTouchend"], Np = ["onTransitionend"];
function Dp(e, n) {
  var r = re("var-button");
  return w(), me(
    ut(e.dynamic ? "var-popup" : e.Transition),
    Ve(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ce(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [q(e.$slots, "cancel", {}, () => [ee(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [he(
                J(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), q(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: m(e.n("title"))
            },
            J(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), q(e.$slots, "confirm", {}, () => [ee(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [he(
                J(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), A(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(w(!0), M(
            Te,
            null,
            Ie(e.scrollColumns, (a) => (w(), M(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: K({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(w(!0), M(
                  Te,
                  null,
                  Ie(a.column.texts, (t) => (w(), M(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      J(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                Np
              )],
              42,
              Ip
            ))),
            128
          )), A(
            "div",
            {
              class: m(e.n("picked")),
              style: K({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.n("mask")),
              style: K({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
          )],
          6
        )],
        16
      )]),
      _: 3
    },
    16
  );
}
const vr = ae({
  render: Dp,
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: Pp,
  setup(e) {
    var n = E([]), r = W(() => Me(e.optionHeight)), a = W(() => Me(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = ($, O) => {
      O.scrollEl = $;
    }, s = ($) => {
      N(e["onUpdate:show"], $);
    }, u = ($) => {
      var O = r.value + t.value, R = t.value - $.column.texts.length * r.value;
      $.translate >= O && ($.translate = O), $.translate <= R && ($.translate = R);
    }, d = ($, O) => {
      var {
        length: R
      } = $.column.texts;
      return O = O >= R ? R - 1 : O, O = O <= 0 ? 0 : O, O;
    }, f = ($) => {
      var O = Math.round((t.value - $.translate) / r.value);
      return d($, O);
    }, v = () => {
      var $ = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: $,
        indexes: O
      };
    }, c = function($, O, R, Y) {
      Y === void 0 && (Y = !1);
      var G = t.value - d($, O) * r.value;
      G === $.translate && ($.scrolling = !1, !Y && B($)), $.translate = G, $.duration = R;
    }, p = ($, O, R) => {
      $.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, b = ($, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = Et(O.scrollEl);
    }, y = ($, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = $.touches[0], Y = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += Y, u(O);
        var G = performance.now();
        G - O.momentumTime > Uo && (O.momentumTime = G, O.momentumPrevY = O.translate);
      }
    }, T = ($, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, Y = performance.now() - O.momentumTime, G = Math.abs(R) >= Mp && Y <= Uo;
      G && p(O, R, Y), O.index = f(O), c(O, O.index, G ? 1e3 : 200);
    }, C = ($) => {
      $.scrolling = !1, B($);
    }, g = ($) => $.map((O, R) => {
      var Y, G = Se(O) ? {
        texts: O
      } : O, V = {
        id: Yo++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = G.initialIndex) != null ? Y : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: G,
        scrollEl: null,
        scrolling: !1
      };
      return c(V, V.index, 0, !0), V;
    }), h = ($) => {
      var O = [];
      return I(O, $, 0, !0), O;
    }, I = function($, O, R, Y) {
      if (Y === void 0 && (Y = !1), Se(O) && O.length) {
        var G, V = Y && (G = e.cascadeInitialIndexes[$.length]) != null ? G : 0, z = {
          id: Yo++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: V,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((X) => X[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        $.push(z), c(z, z.index, 0, !0), I($, z.columns[z.index].children, R + 1, Y);
      }
    }, S = ($) => {
      n.value.splice(n.value.indexOf($) + 1), I(n.value, $.columns[$.index].children, $.columnIndex + 1);
    }, B = ($) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && S($);
      var Y = n.value.some((X) => X.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: V
        } = v(), z = V.every((X, se) => X === o[se]);
        z || (o = [...V], N(R, G, V));
      }
    }, k = () => {
      if (e.cascade) {
        var $ = n.value.find((O) => O.scrolling);
        $ && ($.translate = Et($.scrollEl), $.index = f($), c($, $.index, 0, !0), $.scrolling = !1, S($));
      } else
        n.value.forEach((O) => {
          O.translate = Et(O.scrollEl), O.index = f(O), c(O, O.index, 0);
        });
    }, D = () => {
      k();
      var {
        texts: $,
        indexes: O
      } = v();
      o = [...O], N(e.onConfirm, $, O);
    }, P = () => {
      k();
      var {
        texts: $,
        indexes: O
      } = v();
      o = [...O], N(e.onCancel, $, O);
    };
    return ne(() => e.columns, ($) => {
      n.value = e.cascade ? h(qi($)) : g(qi($));
      var {
        indexes: O
      } = v();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Ep,
      classes: Vp,
      pack: Re,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: He,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: y,
      handleTouchend: T,
      handleTransitionend: C,
      confirm: D,
      cancel: P,
      dt: vt
    };
  }
});
var Xe;
function gr(e) {
  return new Promise((n) => {
    gr.close();
    var r = Se(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", Xe = a;
    var {
      unmountInstance: t
    } = Fa(vr, a, {
      onConfirm: (i, o) => {
        a.onConfirm == null || a.onConfirm(i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, Xe === a && (Xe = null);
      },
      onCancel: (i, o) => {
        a.onCancel == null || a.onCancel(i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, Xe === a && (Xe = null);
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n({
          state: "close"
        }), Xe === a && (Xe = null);
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Xe === a && (Xe = null);
      },
      onRouteChange: () => {
        t(), Xe === a && (Xe = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
vr.install = function(e) {
  e.component(vr.name, vr);
};
gr.Component = vr;
gr.install = function(e) {
  e.component(vr.name, vr);
};
gr.close = () => {
  if (Xe != null) {
    var e = Xe;
    Xe = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
function Bp(e) {
  return ["linear", "circle"].includes(e);
}
var Ap = {
  mode: {
    type: String,
    default: "linear",
    validator: Bp
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: zp,
  classes: Fp
} = _("progress"), Lp = ["viewBox"], Rp = ["cx", "cy", "r", "stroke-width"], Up = ["cx", "cy", "r", "stroke-width"];
function Yp(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [A(
        "div",
        {
          class: m(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: K({
              background: e.trackColor
            })
          },
          null,
          6
        )) : Z("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: K({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        6
      ), e.label ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.linearProps.roundValue),
          1
        )])],
        2
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.mode === "circle" ? (w(), M(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(w(), M(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (w(), M(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Rp
        )) : Z("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          Up
        )],
        14,
        Lp
      )), e.label ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.circleProps.roundValue),
          1
        )])],
        2
      )) : Z("v-if", !0)],
      6
    )) : Z("v-if", !0)],
    2
  );
}
const Kr = ae({
  render: Yp,
  name: "VarProgress",
  props: Ap,
  setup(e) {
    var n = W(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = W(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + Me(a) + " " + Me(a), l = L(i) > 100 ? 100 : Math.round(L(i)), s = (Me(a) - Me(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: zp,
      classes: Fp,
      toSizeUnit: Ee,
      multiplySizeUnit: We,
      linearProps: n,
      circleProps: r
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var Wp = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Wo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hp(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Wo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Wo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: jp,
  classes: Gp
} = _("pull-refresh"), ka = 100, $a = -50, Ho = 150;
function qp(e, n) {
  var r = re("var-icon");
  return w(), M(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.touchMove && e.touchMove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("control"), "var-elevation--2", [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [ee(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
    ), q(e.$slots, "default")],
    34
  );
}
const Xr = ae({
  render: qp,
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Wp,
  setup(e) {
    var n, r, a = E(null), t = E(0), i = E($a), o = E("arrow-down"), l = E("default"), s = E(!1), u = E(!0), d = W(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = W(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: v.value ? e.successBgColor : e.bgColor,
      color: v.value ? e.successColor : e.color
    })), v = W(() => l.value === "success"), c = () => new Promise((C) => {
      window.setTimeout(() => {
        u.value = !0, C();
      }, Ho);
    }), p = (C) => {
      !d.value || (l.value = "pulling", t.value = C.touches[0].clientY);
    }, b = (C) => {
      var g = ft(n);
      if (!(g > 0 || !d.value)) {
        g === 0 && i.value > $a && C.cancelable && C.preventDefault();
        var h = (C.touches[0].clientY - t.value) / 2 + $a;
        i.value = h >= ka ? ka : h, i.value >= ka * 0.2 ? (u.value = !1, o.value = "refresh", r = c()) : o.value = "arrow-down";
      }
    }, y = /* @__PURE__ */ function() {
      var C = Hp(function* () {
        if (!!d.value)
          if (s.value = !0, i.value >= ka * 0.2) {
            var g;
            yield r, l.value = "loading", i.value = ka * 0.3, (g = e["onUpdate:modelValue"]) == null || g.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            l.value = "loosing", o.value = "arrow-down", i.value = $a, setTimeout(() => {
              s.value = !1;
            }, L(e.animationDuration));
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), T = () => {
      setTimeout(() => {
        l.value = "default", o.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return ne(() => e.modelValue, (C) => {
      C === !1 && (s.value = !0, l.value = "success", o.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = $a, T();
      }, L(e.successDuration)));
    }), Fe(() => {
      n = Sa(a.value);
    }), {
      n: jp,
      classes: Gp,
      iconHasChanged: u,
      ICON_TRANSITION: Ho,
      refreshStatus: l,
      freshNode: a,
      touchStart: p,
      touchMove: b,
      touchEnd: y,
      iconName: o,
      controlStyle: f,
      isSuccess: v
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var Kp = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, cs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), ms = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Xp() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(cs), {
    length: r
  } = gn(ms);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Zp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(cs), {
    index: r
  } = yn(ms);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Jp,
  classes: Qp
} = _("radio");
function xp(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Ce((w(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      16
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Zr = ae({
  render: xp,
  name: "VarRadio",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarFormDetails: Ye
  },
  inheritAttrs: !1,
  props: Kp,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Zp(), {
      form: o,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: f
    } = bn(), v = (h) => {
      Oe(() => {
        var {
          validateTrigger: I,
          rules: S,
          modelValue: B
        } = e;
        u(I, h, S, B);
      });
    }, c = (h) => {
      var {
        checkedValue: I,
        onChange: S
      } = e;
      t && n.value === I || (n.value = h, N(e["onUpdate:modelValue"], n.value), N(S, n.value), t == null || t.onToggle(I), v("onChange"));
    }, p = (h) => {
      var {
        disabled: I,
        readonly: S,
        uncheckedValue: B,
        checkedValue: k,
        onClick: D
      } = e;
      o != null && o.disabled.value || I || (N(D, h), !(o != null && o.readonly.value || S) && (a.value = !0, c(r.value ? B : k)));
    }, b = (h) => {
      var {
        checkedValue: I,
        uncheckedValue: S
      } = e;
      n.value = h === I ? I : S;
    }, y = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, T = () => d(e.rules, e.modelValue), C = (h) => {
      var {
        uncheckedValue: I,
        checkedValue: S
      } = e, B = ![I, S].includes(h);
      B && (h = r.value ? I : S), c(h);
    };
    ne(() => e.modelValue, (h) => {
      n.value = h;
    }, {
      immediate: !0
    });
    var g = {
      sync: b,
      validate: T,
      resetValidation: f,
      reset: y
    };
    return N(i, g), N(l, g), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Jp,
      classes: Qp,
      handleClick: p,
      toggle: C,
      reset: y,
      validate: T,
      resetValidation: f
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function _p(e) {
  return ["horizontal", "vertical"].includes(e);
}
var eh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: _p
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: nh,
  classes: rh
} = _("radio-group");
function ah(e, n) {
  var r = re("var-form-details");
  return w(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ee(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Jr = ae({
  render: ah,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ye
  },
  props: eh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Xp(), {
      bindForm: t
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = bn(), u = W(() => i.value), d = (y) => {
      Oe(() => {
        var {
          validateTrigger: T,
          rules: C,
          modelValue: g
        } = e;
        o(T, y, C, g);
      });
    }, f = () => r.forEach((y) => {
      var {
        sync: T
      } = y;
      return T(e.modelValue);
    }), v = (y) => {
      N(e["onUpdate:modelValue"], y), N(e.onChange, y), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ne(() => e.modelValue, f), ne(() => n.value, f);
    var b = {
      onToggle: v,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, b), a(b), {
      errorMessage: i,
      n: nh,
      classes: rh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var th = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Ta
} = _("rate"), ih = ["onClick"];
function oh(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(w(!0), M(
        Te,
        null,
        Ie(e.toNumber(e.count), (i) => Ce((w(), M(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: m(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ee(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          ih
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Qr = ae({
  render: oh,
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: Ye
  },
  directives: {
    Ripple: Le
  },
  props: th,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = (y) => {
      var {
        count: T,
        gap: C
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== L(T) ? Ee(C) : 0
      };
    }, s = (y) => {
      var {
        name: T,
        color: C
      } = u(y);
      return {
        [Ta("content")]: !0,
        [Ta("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ta("--error")]: a.value,
        [Ta("--primary")]: T !== e.emptyIcon && !C
      };
    }, u = (y) => {
      var {
        modelValue: T,
        disabled: C,
        disabledColor: g,
        color: h,
        half: I,
        emptyColor: S,
        icon: B,
        halfIcon: k,
        emptyIcon: D
      } = e, P = h;
      return (C || n != null && n.disabled.value) && (P = g), y <= L(T) ? {
        color: P,
        name: B
      } : I && y <= L(T) + 0.5 ? {
        color: P,
        name: k
      } : {
        color: C || n != null && n.disabled.value ? g : S,
        name: D
      };
    }, d = (y, T) => {
      if (e.half) {
        var {
          offsetWidth: C
        } = T.target;
        T.offsetX <= Math.floor(C / 2) && (y -= 0.5);
      }
      N(e["onUpdate:modelValue"], y);
    }, f = () => i(e.rules, L(e.modelValue)), v = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, T) => {
      var {
        readonly: C,
        disabled: g,
        onChange: h
      } = e;
      C || g || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, T), N(h, y), v());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, b = {
      reset: p,
      validate: f,
      resetValidation: o
    };
    return N(r, b), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: p,
      validate: f,
      resetValidation: o,
      toSizeUnit: Ee,
      toNumber: L,
      n: Ta
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
function lh(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function sh(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var uh = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: lh
  },
  align: {
    type: String,
    default: "flex-start",
    validator: sh
  },
  onClick: {
    type: Function
  }
}, {
  n: dh,
  classes: vh
} = _("row");
function fh(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      style: K({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const xr = ae({
  render: fh,
  name: "VarRow",
  props: uh,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Wd(), t = W(() => {
      var l = Me(e.gutter);
      return l / 2;
    }), i = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, o = {
      computePadding: i
    };
    return ne(() => a.value, i), ne(() => e.gutter, i), r(o), {
      n: dh,
      classes: vh,
      average: t
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function ch(e) {
  return ["left", "right", "center"].includes(e);
}
var mh = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: ch
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Dt,
  classes: ph
} = _("select"), hh = {
  key: 0
}, gh = {
  key: 1
};
function yh(e, n) {
  var r = re("var-chip"), a = re("var-icon"), t = re("var-menu"), i = re("var-form-details");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ee(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: ce(() => [A(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), "var-elevation--3"))
              },
              [q(e.$slots, "default")],
              2
            )]),
            default: ce(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (w(), M("div", hh, [e.chip ? (w(), M(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(w(!0), M(
                  Te,
                  null,
                  Ie(e.labels, (o) => (w(), me(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Vn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [he(
                        J(o),
                        1
                      )]),
                      _: 2
                    },
                    1032,
                    ["class", "type", "onClose"]
                  ))),
                  128
                ))],
                2
              )) : (w(), M(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                J(e.labels.join(e.separator)),
                3
              ))])) : (w(), M(
                "span",
                gh,
                J(e.label),
                1
              )), ee(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )],
              6
            ), A(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), "var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              J(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable ? (w(), me(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : Z("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Z("v-if", !0), ee(
      i,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const _r = ae({
  render: yh,
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Xn,
    VarChip: or,
    VarFormDetails: Ye
  },
  props: mh,
  setup(e) {
    var n = E(null), r = E(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = E(""), o = E([]), l = E("0px"), s = E(0), {
      bindForm: u,
      form: d
    } = wn(), {
      length: f,
      options: v,
      bindOptions: c
    } = hp(), {
      errorMessage: p,
      validateWithTrigger: b,
      validate: y,
      resetValidation: T
    } = bn(), C = E(null), g = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var Q = H;
        o.value = Q.map(S);
      }
      !U && !Un(H) && (i.value = S(H)), !U && Un(H) && (i.value = "");
    }, h = (U) => {
      Oe(() => {
        var {
          validateTrigger: H,
          rules: Q,
          modelValue: ie
        } = e;
        b(H, U, Q, ie);
      });
    }, I = (U) => {
      var {
        value: H,
        label: Q
      } = U;
      return H.value != null ? H.value : Q.value;
    }, S = (U) => {
      var H, Q, ie = v.find((oe) => {
        var {
          value: ve
        } = oe;
        return ve.value === U;
      });
      return ie || (ie = v.find((oe) => {
        var {
          label: ve
        } = oe;
        return ve.value === U;
      })), (H = (Q = ie) == null ? void 0 : Q.label.value) != null ? H : "";
    }, B = () => {
      var {
        hint: U,
        modelValue: H
      } = e;
      if (!U && !Un(H))
        return Dt("--placeholder-hidden");
      if (U && (!Un(H) || r.value))
        return Dt("--placeholder-hint");
    }, k = () => n.value && window.getComputedStyle(n.value).width || "0px", D = () => {
      var {
        disabled: U,
        readonly: H,
        onFocus: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (l.value = k(), s.value = Me(e.offsetY), r.value = !0, N(Q), h("onFocus"));
    }, P = () => {
      var {
        disabled: U,
        readonly: H,
        onBlur: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (N(Q), h("onBlur"));
    }, $ = (U) => {
      var {
        disabled: H,
        readonly: Q,
        multiple: ie,
        onChange: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || Q)) {
        var ve = ie ? v.filter((be) => {
          var {
            selected: nn
          } = be;
          return nn.value;
        }).map(I) : I(U);
        N(e["onUpdate:modelValue"], ve), N(oe, ve), h("onChange"), !ie && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: U,
        readonly: H,
        multiple: Q,
        clearable: ie,
        onClear: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || H || !ie)) {
        var ve = Q ? [] : void 0;
        N(e["onUpdate:modelValue"], ve), N(oe, ve), h("onClear");
      }
    }, R = (U) => {
      var {
        disabled: H,
        onClick: Q
      } = e;
      d != null && d.disabled.value || H || (N(Q, U), h("onClick"));
    }, Y = (U) => {
      var {
        disabled: H,
        readonly: Q,
        modelValue: ie,
        onClose: oe
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || Q)) {
        var ve = ie, be = v.find((rn) => {
          var {
            label: De
          } = rn;
          return De.value === U;
        }), nn = ve.filter((rn) => {
          var De;
          return rn !== ((De = be.value.value) != null ? De : be.label.value);
        });
        N(e["onUpdate:modelValue"], nn), N(oe, nn), h("onClose");
      }
    }, G = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var Q = H;
        v.forEach((ie) => ie.sync(Q.includes(I(ie))));
      } else
        v.forEach((ie) => ie.sync(H === I(ie)));
      g();
    }, V = () => {
      l.value = k(), s.value = Me(e.offsetY), r.value = !0;
    }, z = () => {
      r.value = !1;
    }, X = () => y(e.rules, e.modelValue), se = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    ne(() => e.multiple, () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U && !Se(H))
        throw Error("The modelValue must be an array when multiple is true");
    }), ne(() => e.modelValue, G, {
      deep: !0
    }), ne(() => f.value, G);
    var F = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: $,
      reset: se,
      validate: X,
      resetValidation: T
    };
    return c(F), N(u, F), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: C,
      n: Dt,
      classes: ph,
      computePlaceholderState: B,
      handleFocus: D,
      handleBlur: P,
      handleClear: O,
      handleClick: R,
      handleClose: Y,
      reset: se,
      validate: X,
      resetValidation: T,
      focus: V,
      blur: z
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var bh = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: wh,
  classes: Sh
} = _("skeleton");
function Ch(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes("var--box", e.n()))
    },
    [e.loading ? Z("v-if", !0) : (w(), M(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [q(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (w(), M(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : Z("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (w(), M(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (w(), M(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : Z("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (w(), M(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (w(), M(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : Z("v-if", !0), (w(!0), M(
            Te,
            null,
            Ie(e.toNumber(e.rows), (r, a) => (w(), M(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("--animation"))
                },
                null,
                2
              )],
              6
            ))),
            128
          ))],
          2
        )) : Z("v-if", !0)],
        2
      )) : Z("v-if", !0)],
      2
    )) : Z("v-if", !0), e.loading && e.fullscreen ? (w(), M(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : Z("v-if", !0)],
    2
  );
}
const ea = ae({
  render: Ch,
  name: "VarSkeleton",
  props: bh,
  setup() {
    return {
      n: wh,
      classes: Sh,
      toSizeUnit: Ee,
      toNumber: L
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
function kh(e) {
  return ["always", "normal", "never"].includes(e);
}
var $h = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: kh
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
var {
  n: Th,
  classes: Oh
} = _("slider"), Pe;
(function(e) {
  e.First = "1", e.Second = "2";
})(Pe || (Pe = {}));
var Ph = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Eh(e, n) {
  var r = re("var-form-details");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        style: K({
          height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 3),
          margin: e.thumbSize === void 0 ? e.thumbSize : "0 " + e.multiplySizeUnit(e.thumbSize, 0.5)
        }),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("track"))
        },
        [A(
          "div",
          {
            class: m(e.n("track-background")),
            style: K({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
        ), A(
          "div",
          {
            class: m(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (w(!0), M(
        Te,
        null,
        Ie(e.thumbList, (a) => (w(), M(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [q(e.$slots, "button", {
            currentValue: a.value
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
                background: e.thumbColor,
                height: e.multiplySizeUnit(e.thumbSize),
                width: e.multiplySizeUnit(e.thumbSize)
              })
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K(mi({
                background: e.thumbColor
              }, e.getRippleSize(a)))
            },
            null,
            6
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: K({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              J(a.value),
              1
            )],
            6
          )])],
          46,
          Ph
        ))),
        128
      ))],
      6
    ), ee(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
  );
}
const na = ae({
  render: Eh,
  name: "VarSlider",
  components: {
    VarFormDetails: Ye
  },
  props: $h,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), f = E(0), v = E(!1), c = Ne({
      [Pe.First]: s(),
      [Pe.Second]: s()
    }), p = W(() => f.value / 100 * L(e.step)), b = W(() => {
      var V = [{
        value: e.modelValue,
        enumValue: Pe.First
      }];
      return e.range && Se(e.modelValue) && (V = [{
        value: e.modelValue[0],
        enumValue: Pe.First
      }, {
        value: e.modelValue[1],
        enumValue: Pe.Second
      }]), V;
    }), y = (V) => {
      var z;
      return e.thumbSize !== void 0 && (z = c[V.enumValue].active ? We(e.thumbSize, 3) : "0px"), {
        height: z,
        width: z
      };
    }, T = (V) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[V].active, C = W(() => {
      var {
        activeColor: V,
        range: z,
        modelValue: X
      } = e, se = z && Se(X) ? Math.abs(X[0] - X[1]) : X, F = z && Se(X) ? Math.min(X[0], X[1]) : 0;
      return {
        width: se + "%",
        left: F + "%",
        background: V
      };
    }), g = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), h = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), I = (V, z) => {
      var X = [], {
        step: se,
        range: F,
        modelValue: U,
        onChange: H
      } = e, Q = L(se), ie = Math.round(V / p.value), oe = ie * Q, ve = c[z].percentValue;
      if (c[z].percentValue = oe / Q, F && Se(U) && (X = z === Pe.First ? [oe, U[1]] : [U[0], oe]), ve !== oe) {
        var be = F ? X : oe;
        N(H, be), N(e["onUpdate:modelValue"], be), u();
      }
    }, S = (V) => {
      if (!e.range)
        return Pe.First;
      var z = c[Pe.First].percentValue * p.value, X = c[Pe.Second].percentValue * p.value, se = Math.abs(V - z), F = Math.abs(V - X);
      return se <= F ? Pe.First : Pe.Second;
    }, B = (V, z) => {
      f.value || (f.value = d.value.offsetWidth), !(g.value || h.value) && (N(e.onStart), v.value = !0, c[z].startPosition = V.touches[0].clientX);
    }, k = (V, z) => {
      if (!(g.value || h.value || !v.value)) {
        var X = V.touches[0].clientX - c[z].startPosition + c[z].currentLeft;
        c[z].active = !0, X <= 0 ? X = 0 : X >= f.value && (X = f.value), I(X, z);
      }
    }, D = (V) => {
      var {
        range: z,
        modelValue: X,
        onEnd: se
      } = e;
      if (!(g.value || h.value)) {
        var F = [];
        c[V].currentLeft = c[V].percentValue * p.value, c[V].active = !1;
        var U = c[V].percentValue;
        z && Se(X) && (F = V === Pe.First ? [U, X[1]] : [X[0], U]), N(se, z ? F : U), v.value = !1;
      }
    }, P = (V) => {
      if (!(g.value || h.value) && !V.target.closest(".var-slider__thumb")) {
        var z = V.clientX - js(V.currentTarget), X = S(z);
        I(z, X), D(X);
      }
    }, $ = () => {
      var V = L(e.step);
      return isNaN(V) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : V < 1 || V > 100 ? (console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'), !1) : parseInt("" + e.step, 10) !== V ? (console.warn('[Varlet] Slider: "step" should be an Integer'), !1) : !0;
    }, O = () => {
      var {
        range: V,
        modelValue: z
      } = e;
      return V && !Se(z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !V && Se(z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : V && Se(z) && z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, R = function(V, z) {
      V === void 0 && (V = e.modelValue), z === void 0 && (z = L(e.step)), e.range && Se(V) ? (c[Pe.First].percentValue = V[0] / z, c[Pe.First].currentLeft = c[Pe.First].percentValue * p.value, c[Pe.Second].percentValue = V[1] / z, c[Pe.Second].currentLeft = c[Pe.Second].percentValue * p.value) : Qe(V) && (c[Pe.First].currentLeft = V / z * p.value);
    };
    ne([() => e.modelValue, () => e.step], (V) => {
      var [z, X] = V;
      !$() || !O() || v.value || R(z, L(X));
    }), ne(f, () => R()), Fe(() => {
      !$() || !O() || (f.value = d.value.offsetWidth);
    });
    var Y = () => {
      var V = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], V), o();
    }, G = {
      reset: Y,
      validate: l,
      resetValidation: o
    };
    return N(n, G), {
      n: Th,
      classes: Oh,
      Thumbs: Pe,
      sliderEl: d,
      getFillStyle: C,
      isDisabled: g,
      errorMessage: a,
      thumbsProps: c,
      thumbList: b,
      multiplySizeUnit: We,
      toNumber: L,
      getRippleSize: y,
      showLabel: T,
      start: B,
      move: k,
      end: D,
      click: P
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
function Vh(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Mh(e) {
  return Yi.includes(e);
}
var ps = {
  type: {
    type: String,
    validator: Mh
  },
  position: {
    type: String,
    default: "top",
    validator: Vh
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: Ze(Yn, "type"),
  loadingSize: Ze(Yn, "size"),
  loadingRadius: Ze(Yn, "radius"),
  loadingColor: pi({}, Ze(Yn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: {
    type: Function,
    default: () => {
    }
  },
  onOpened: {
    type: Function,
    default: () => {
    }
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  onClosed: {
    type: Function,
    default: () => {
    }
  },
  "onUpdate:show": {
    type: Function
  },
  _update: {
    type: String
  }
}, {
  n: Ih,
  classes: Nh
} = _("snackbar"), Dh = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Bh(e, n) {
  var r = re("var-icon"), a = re("var-loading");
  return Ce((w(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), "var-elevation--4", [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [q(e.$slots, "default", {}, () => [he(
          J(e.content),
          1
        )])],
        2
      ), A(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (w(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : Z("v-if", !0), e.type === "loading" ? (w(), me(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : Z("v-if", !0), q(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[za, e.show]]);
}
const hs = ae({
  render: Bh,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Cn,
    VarIcon: $e
  },
  props: ps,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = mt(() => e.show, 1);
    Vi(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Dh[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return ne(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), ne(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Fe(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Yi,
      n: Ih,
      classes: Nh,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Ah
} = _("snackbar");
function zh(e, n) {
  var r = re("var-snackbar-core");
  return w(), me(
    st,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ee(
      He,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ce(() => [ee(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [q(e.$slots, "action")]),
            default: ce(() => [q(e.$slots, "default", {}, () => [he(
              J(e.content),
              1
            )])]),
            _: 3
          },
          16,
          ["class"]
        )]),
        _: 3
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
const ra = ae({
  render: zh,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: hs
  },
  props: ps,
  setup() {
    var {
      disabled: e
    } = vl();
    return {
      n: Ah,
      disabled: e
    };
  }
});
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Da.apply(this, arguments);
}
function Fh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ki(e);
}
var Yi = ["loading", "success", "warning", "info", "error"], jo = 0, hi = !1, gi, wa = !1, sn = Ne([]), Lh = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, Rh = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Uh = {
  setup() {
    return () => {
      var e = sn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), wa && (t.position = "top");
        var l = wa ? "relative" : "absolute", s = Da({
          position: l
        }, Gh(t.position));
        return ee(hs, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = on.zIndex;
      return ee(Fs, Ve(Rh, {
        style: {
          zIndex: n
        },
        onAfterEnter: Yh,
        onAfterLeave: Wh
      }), Fh(e) ? e : {
        default: () => [e]
      });
    };
  }
}, In = function(e) {
  var n = _e(e) || Qe(e) ? {
    content: String(e)
  } : e, r = Ne(Da({}, Lh, n));
  r.show = !0, hi || (hi = !0, gi = Fa(Uh).unmountInstance);
  var {
    length: a
  } = sn, t = {
    id: jo++,
    reactiveSnackOptions: r
  };
  if (a === 0 || wa)
    Hh(t);
  else {
    var i = "update-" + jo;
    jh(r, i);
  }
  return {
    clear() {
      !wa && sn.length ? sn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Yi.forEach((e) => {
  In[e] = (n) => (Ti(n) ? n.type = e : n = {
    content: n,
    type: e
  }, In(n));
});
In.install = function(e) {
  e.component(ra.name, ra);
};
In.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== wa && (sn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), wa = e);
};
In.clear = function() {
  sn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
In.Component = ra;
function Yh(e) {
  var n = e.getAttribute("data-id"), r = sn.find((a) => a.id === L(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function Wh(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = sn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = sn.every((t) => t.animationEnd);
  a && (gi == null || gi(), sn = Ne([]), hi = !1);
}
function Hh(e) {
  sn.push(e);
}
function jh(e, n) {
  var [r] = sn;
  r.reactiveSnackOptions = Da({}, r.reactiveSnackOptions, e), r._update = n;
}
function Gh(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ra.install = function(e) {
  e.component(ra.name, ra);
};
var gs = (e) => ["mini", "small", "normal", "large"].includes(e), qh = (e) => gs(e) || Se(e) || Qe(e) || _e(e), Kh = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), Xh = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: qh
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "start",
    validator: Kh
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, {
  n: Go,
  classes: Zh
} = _("space"), Jh = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
const aa = ae({
  name: "VarSpace",
  props: Xh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? Jh[i] : Se(i) ? i.map(Me) : [Me(i), Me(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: f
      } = e, v = (i = N(r.default)) != null ? i : [], c = gs(f), [p, b] = a(f, c), y = (g) => {
        var h = [];
        return g.forEach((I) => {
          if (I.type !== Ls) {
            if (I.type === Te && Se(I.children)) {
              I.children.forEach((S) => {
                h.push(S);
              });
              return;
            }
            h.push(I);
          }
        }), h;
      };
      v = y(v);
      var T = v.length - 1, C = v.map((g, h) => {
        var I = d === "row" ? void 0 : "100%", S = "0";
        return d === "row" && (l === "start" || l === "center" || l === "end" ? h !== T ? S = p / 2 + "px " + b + "px " + p / 2 + "px 0" : S = p / 2 + "px 0" : l === "space-around" ? S = p / 2 + "px " + b / 2 + "px" : l === "space-between" && (h === 0 ? S = p / 2 + "px " + b / 2 + "px " + p / 2 + "px 0" : h === T ? S = p / 2 + "px 0 " + p / 2 + "px " + b / 2 + "px" : S = p / 2 + "px " + b / 2 + "px")), d === "column" && h !== T && (S = "0 0 " + p + "px 0"), ee("div", {
          style: {
            margin: S,
            width: I
          }
        }, [g]);
      });
      return ee("div", {
        class: Zh(Go(), "var--box", [o, Go("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "-" + p / 2 + "px 0" : void 0
        }
      }, [C]);
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
var Qh = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, ys = Symbol("STEPS_BIND_STEP_KEY"), bs = Symbol("STEPS_COUNT_STEP_KEY");
function xh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ys), {
    length: r
  } = gn(bs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function _h() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ys), {
    index: r
  } = yn(bs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: eg,
  classes: ng
} = _("step"), rg = {
  key: 3
};
function ag(e, n) {
  var r = re("var-icon");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: K({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (w(), me(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (w(), me(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (w(), me(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (w(), M(
            "span",
            rg,
            J(e.index + 1),
            1
          ))],
          6
        ), A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [q(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Z("v-if", !0) : (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: K({
            margin: e.lineMargin
          })
        },
        null,
        6
      ))],
      2
    )],
    2
  );
}
const ta = ae({
  render: ag,
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Qh,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = _h(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: f
    } = t, v = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, b = () => f(a.value), y = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), ne(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var C = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + C + "px";
      }
    }), {
      n: eg,
      classes: ng,
      main: e,
      index: a,
      isActive: c,
      isCurrent: v,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: b,
      getRef: y
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function tg(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ig = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: tg
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
}, {
  n: og
} = _("steps");
function lg(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const ia = ae({
  render: lg,
  name: "VarSteps",
  props: ig,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = xh(), l = (u) => {
      N(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: og
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var {
  n: sg
} = _("style-provider");
const oa = ae({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => _o(e.tag, {
      class: sg(),
      style: ul(e.styleVars)
    }, N(r.default));
  }
});
var Bt = [];
function Ba(e) {
  Bt.forEach((r) => document.documentElement.style.removeProperty(r)), Bt.length = 0;
  var n = ul(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Bt.push(a);
  });
}
Ba.Component = oa;
oa.install = function(e) {
  e.component(oa.name, oa);
};
Ba.install = function(e) {
  e.component(oa.name, oa);
};
var ug = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: dg,
  classes: vg
} = _("switch");
function fg(e, n) {
  var r = re("var-loading"), a = re("var-form-details"), t = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disable")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), Ce((w(), M(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), "var-elevation--2", [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (w(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : Z("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), ee(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const la = ae({
  render: fg,
  name: "VarSwitch",
  components: {
    VarLoading: Cn,
    VarFormDetails: Ye
  },
  directives: {
    Ripple: Le
  },
  props: ug,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = bn(), l = () => i(e.rules, e.modelValue), s = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: b,
        color: y,
        closeColor: T,
        loadingColor: C,
        activeValue: g
      } = e;
      return {
        handle: {
          width: We(p),
          height: We(p),
          backgroundColor: b === g ? y : T,
          color: C
        },
        ripple: {
          left: b === g ? We(p, 0.5) : "-" + We(p, 0.5),
          color: b === g ? y : T || "#999",
          width: We(p, 2),
          height: We(p, 2)
        },
        track: {
          height: We(p, 0.72),
          width: We(p, 1.9),
          borderRadius: We(p, 2 / 3),
          filter: b === g || a != null && a.value ? "opacity(.6)" : "brightness(.6)",
          backgroundColor: b === g ? y : T
        },
        switch: {
          height: We(p, 1.2),
          width: We(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return We(p, 0.4);
    }), f = (p) => {
      var {
        onClick: b,
        onChange: y,
        disabled: T,
        loading: C,
        readonly: g,
        modelValue: h,
        activeValue: I,
        inactiveValue: S,
        "onUpdate:modelValue": B
      } = e;
      if (N(b, p), !(T || C || g || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = h === I ? S : I;
        N(y, k), N(B, k), s();
      }
    }, v = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: v,
      validate: l,
      resetValidation: o
    };
    return N(n, c), {
      n: dg,
      classes: vg,
      switchActive: f,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var cg = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
}, ws = Symbol("TABS_BIND_TAB_KEY"), Ss = Symbol("TABS_COUNT_TAB_KEY");
function mg() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ws), {
    length: r
  } = gn(Ss);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function pg() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ws), {
    index: r
  } = yn(Ss);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: hg,
  classes: gg
} = _("tab");
function yg(e, n) {
  var r = je("ripple");
  return Ce((w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const sa = ae({
  render: yg,
  name: "VarTab",
  directives: {
    Ripple: Le
  },
  props: cg,
  setup(e) {
    var n = E(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = pg(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: f,
      disabledColor: v,
      itemDirection: c,
      resize: p
    } = o, b = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(b);
    var y = () => {
      var {
        disabled: g,
        name: h
      } = e;
      return g ? v.value : u.value === h || u.value === (i == null ? void 0 : i.value) ? d.value : f.value;
    }, T = () => {
      var {
        disabled: g,
        name: h
      } = e;
      return g ? "var-tab--disabled" : u.value === h || u.value === (i == null ? void 0 : i.value) ? "var-tab--active" : "var-tab--inactive";
    }, C = (g) => {
      var {
        disabled: h,
        name: I,
        onClick: S
      } = e;
      h || (S == null || S(I != null ? I : i.value, g), s(b));
    };
    return ne(() => e.name, p), ne(() => e.disabled, p), {
      n: hg,
      classes: gg,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: f,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: T,
      handleClick: C
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Cs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), ks = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function bg() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Cs), {
    length: r
  } = gn(ks);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function wg() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Cs), {
    index: r
  } = yn(ks);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Sg = {
  name: {
    type: [String, Number]
  }
}, {
  n: Cg,
  classes: kg
} = _("tab-item");
function $g(e, n) {
  var r = re("var-swipe-item");
  return w(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ce(() => [e.initSlot ? q(e.$slots, "default", {
        key: 0
      }) : Z("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const ua = ae({
  render: $g,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: Sg,
  setup(e) {
    var n = E(!1), r = E(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = wg(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Cg,
      classes: kg,
      current: n,
      initSlot: r
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
var {
  n: Tg,
  classes: Og
} = _("table");
function Pg(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var-elevation--1 var--box"))
    },
    [A(
      "div",
      {
        class: m(e.n("main"))
      },
      [A(
        "table",
        {
          class: m(e.n("table")),
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [q(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [q(e.$slots, "footer")],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const da = ae({
  render: Pg,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: Ee,
      n: Tg,
      classes: Og
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function qo(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Eg = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: qo
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: qo
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  offsetTop: Ze(rs, "offsetTop"),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  }
};
function Ko(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ko(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ko(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Mg,
  classes: Ig
} = _("tabs");
function Ng(e, n) {
  return w(), me(
    ut(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: ce(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), "var--box", e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, "var-elevation--4"], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [q(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: K({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
          )],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top"]
  );
}
const va = ae({
  render: Ng,
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Eg,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), i = E(!1), o = E(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), f = W(() => e.itemDirection), {
      tabList: v,
      bindTabList: c,
      length: p
    } = mg(), b = (k) => {
      var D, P = (D = k.name.value) != null ? D : k.index.value, {
        active: $,
        onChange: O,
        onClick: R
      } = e;
      N(e["onUpdate:active"], P), N(R, P), P !== $ && N(O, P);
    }, y = () => v.find((k) => {
      var {
        name: D
      } = k;
      return e.active === D.value;
    }), T = (k) => v.find((D) => {
      var {
        index: P
      } = D;
      return (k != null ? k : e.active) === P.value;
    }), C = () => {
      if (p.value !== 0) {
        var {
          active: k
        } = e;
        if (Qe(k)) {
          var D = k > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], D), T(D);
        }
      }
    }, g = () => {
      i.value = v.length >= 5;
    }, h = (k) => {
      var {
        element: D
      } = k, P = D.value;
      e.layoutDirection === "horizontal" ? (n.value = (P == null ? void 0 : P.offsetWidth) + "px", a.value = (P == null ? void 0 : P.offsetLeft) + "px") : (r.value = (P == null ? void 0 : P.offsetHeight) + "px", t.value = (P == null ? void 0 : P.offsetTop) + "px");
    }, I = (k) => {
      var {
        element: D
      } = k;
      if (!!i.value) {
        var P = o.value, $ = D.value;
        if (e.layoutDirection === "horizontal") {
          var O = $.offsetLeft + $.offsetWidth / 2 - P.offsetWidth / 2;
          xa(P, {
            left: O,
            animation: Ji
          });
        } else {
          var R = $.offsetTop + $.offsetHeight / 2 - P.offsetHeight / 2;
          xa(P, {
            top: R,
            animation: Ji
          });
        }
      }
    }, S = () => {
      var k = y() || T() || C();
      !k || k.disabled.value || (g(), h(k), I(k));
    }, B = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: f,
      resize: S,
      onTabClick: b
    };
    return c(B), ne(() => p.value, /* @__PURE__ */ Vg(function* () {
      yield Mn(), S();
    })), ne(() => e.active, S), Fe(() => window.addEventListener("resize", S)), xn(() => window.removeEventListener("resize", S)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: He,
      toSizeUnit: Ee,
      n: Mg,
      classes: Ig,
      resize: S
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var Dg = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": {
    type: Function
  }
}, {
  n: Bg
} = _("tabs-items");
function Ag(e, n) {
  var r = re("var-swipe");
  return w(), me(
    r,
    {
      class: m(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const fa = ae({
  render: Ag,
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: Dg,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = bg(), i = (v) => r.find((c) => {
      var {
        name: p
      } = c;
      return v === p.value;
    }), o = (v) => r.find((c) => {
      var {
        index: p
      } = c;
      return v === p.value;
    }), l = (v) => i(v) || o(v), s = (v) => {
      var c, p = l(v);
      !p || (r.forEach((b) => {
        var {
          setCurrent: y
        } = b;
        return y(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (v) => {
      var c, p = r.find((y) => {
        var {
          index: T
        } = y;
        return T.value === v;
      }), b = (c = p.name.value) != null ? c : p.index.value;
      N(e["onUpdate:active"], b);
    }, d = () => n.value, f = {};
    return a(f), ne(() => e.active, s), ne(() => t.value, () => s(e.active)), {
      swipe: n,
      n: Bg,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
const zg = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Fg = {
  "--badge-default-color": "#555"
}, Lg = {
  "--button-default-color": "#303030"
}, Rg = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Ug = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Yg = {
  "--checkbox-unchecked-color": "#fff"
}, Wg = {
  "--chip-default-color": "#555"
}, Hg = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, jg = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Gg = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, qg = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Kg = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Xg = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Zg = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Jg = {
  "--popup-content-background-color": "#1e1e1e"
}, Qg = {
  "--pull-refresh-background": "#303030"
}, xg = {
  "--radio-unchecked-color": "#fff"
}, _g = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, ey = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, ny = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, ry = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, ay = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, ty = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, iy = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, oy = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, ly = {
  "--tabs-background": "#1e1e1e"
}, sy = {
  "--app-bar-color": "#272727"
}, uy = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, dy = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, vy = {
  "--menu-background-color": "#272727"
};
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
const fy = yi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Lg, Ug, Rg, iy, jg, ey, ly, ay, Jg, Gg, zg, Wg, Fg, oy, Hg, Qg, ry, ny, Xg, ty, Kg, _g, xg, Yg, qg, Zg, sy, uy, dy, vy);
var bi = {
  dark: fy
}, tn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Ke = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Xo = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function cy(e) {
  return ["ampm", "24hr"].includes(e);
}
var my = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: cy
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": {
    type: Function
  },
  onChange: {
    type: Function
  }
}, $s = (e, n) => e === "24hr" || n === "am", Wi = (e, n, r) => {
  var a = tn.findIndex((i) => L(i) === L(r)), t = $s(e, n) ? r : Ke[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, Je = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, Ts = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: f
  } = Wi(t, i, o), v = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: b
    } = Je(l);
    v = p === f && a > b;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: T
    } = Je(s);
    v = y === f && a < T;
  }
  if (l && s) {
    var {
      hour: C,
      minute: g
    } = Je(l), {
      hour: h,
      minute: I
    } = Je(s);
    v = h === f && a < I || C === f && a > g;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), v || c;
}, Os = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: f,
    hourNum: v
  } = Wi(t, i, o), c = !1, p = !1;
  if (d.includes(f))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: y,
      second: T
    } = Je(s);
    c = b === v && y < l || y === l && a > T;
  }
  if (!s && u) {
    var {
      hour: C,
      minute: g,
      second: h
    } = Je(u);
    c = C === v && g > l || g === l && a > h;
  }
  if (s && u) {
    var {
      hour: I,
      minute: S,
      second: B
    } = Je(s), {
      hour: k,
      minute: D,
      second: P
    } = Je(u);
    c = I === v && S < l || k === v && D > l || I === v && S === l && a > B || k === v && D === l && a < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: py,
  classes: hy
} = _("time-picker");
function gy(e, n) {
  return w(), M(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (w(!0), M(
      Te,
      null,
      Ie(e.timeScales, (r, a) => (w(), M(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        J(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (w(), M(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(w(!0), M(
        Te,
        null,
        Ie(e.hours24, (r, a) => (w(), M(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          J(r),
          7
        ))),
        128
      ))],
      2
    )) : Z("v-if", !0)],
    2
  );
}
const yy = ae({
  render: gy,
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = E(null), t = E([]), i = E([]), o = W(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = W(() => e.type === "hour" ? tn : Xo), u = (y, T) => {
      var C;
      y = (C = y) != null ? C : e.type === "minute" ? e.time.minute : e.time.second;
      var g = e.type === "minute" ? Ts : Os, h = {
        time: L(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(h, "minute"), g(h);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var y = e.isInner ? Ke[l.value] : s.value[l.value];
      return s.value === Xo ? u() ? "#bdbdbd" : e.color : v(y) ? "#bdbdbd" : e.color;
    }, f = (y, T) => T ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), v = (y) => {
      if (e.type === "hour") {
        if ($s(e.format, e.ampm))
          return t.value.includes(y);
        var T = tn.findIndex((C) => C === y);
        return i.value.includes(T);
      }
      return u(y, !0);
    }, c = (y, T, C) => {
      var g = 2 * Math.PI / 12 * y - Math.PI / 2, h = 50 * (1 + Math.cos(g)), I = 50 * (1 + Math.sin(g)), S = () => f(y, C) ? v(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: B,
        color: k
      } = S();
      return {
        left: h + "%",
        top: I + "%",
        backgroundColor: B,
        color: k
      };
    }, p = () => {
      var {
        width: y,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: T
      };
    }, b = () => {
      if (l.value !== void 0) {
        var y = e.ampm === "am" ? tn : Ke;
        return fr(y[l.value], 2, "0");
      }
    };
    return ne([l, () => e.isInner], (y, T) => {
      var [C, g] = y, [h, I] = T, S = C === h && g === I;
      if (!(S || e.type !== "hour" || l.value === void 0)) {
        var B = g ? Ke[l.value] : b(), k = e.useSeconds ? ":" + e.time.second : "", D = B + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", D), r("change-prevent-update");
      }
    }), ne(() => e.rad, (y, T) => {
      if (!(e.type === "hour" || y === void 0 || T === void 0)) {
        var C = y / 6 >= 0 ? y / 6 : y / 6 + 60, g = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (C !== g) {
          var h, {
            hourStr: I
          } = Wi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = x().minute(C).format("mm"), B = e.useSeconds ? ":" + e.time.second : "";
            h = I + ":" + S + B;
          }
          if (e.type === "second") {
            var k = x().second(C).format("ss"), D = e.useSeconds ? ":" + k : "";
            h = I + ":" + e.time.minute + D;
          }
          r("update", h);
        }
      }
    }), ne([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [T, C, g] = y;
      if (t.value = [], T && !C) {
        var {
          hour: h
        } = Je(T), I = tn.filter((z) => L(z) > h), S = Ke.filter((z) => L(z) > h);
        t.value = [...I, ...S];
      }
      if (!T && C) {
        var {
          hour: B
        } = Je(C), k = tn.filter((z) => L(z) < B), D = Ke.filter((z) => L(z) < B);
        t.value = [...k, ...D];
      }
      if (T && C) {
        var {
          hour: P
        } = Je(T), {
          hour: $
        } = Je(C), O = tn.filter((z) => L(z) < $ || L(z) > P), R = Ke.filter((z) => L(z) < $ || L(z) > P);
        t.value = [...O, ...R];
      }
      if (g != null && g.hours) {
        var {
          hours: Y
        } = g, G = tn.filter((z) => !Y(L(z))), V = Ke.filter((z) => !Y(L(z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...V])];
      }
      i.value = t.value.map((z) => Ke.findIndex((X) => z === X)).filter((z) => z >= 0);
    }, {
      immediate: !0
    }), {
      n: py,
      classes: hy,
      hours24: Ke,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: f,
      isDisable: v,
      getSize: p,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
var {
  n: by,
  classes: wy
} = _("time-picker"), Sy = (e) => (el(""), e = e(), nl(), e), Cy = /* @__PURE__ */ Sy(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
)), ky = {
  key: 0
};
function $y(e, n) {
  var r = re("clock");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          J(e.time.hour),
          3
        ), Cy, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          J(e.time.minute),
          3
        ), e.useSeconds ? (w(), M("span", ky, ":")) : Z("v-if", !0), e.useSeconds ? (w(), M(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          J(e.time.second),
          3
        )) : Z("v-if", !0)],
        2
      ), e.format === "ampm" ? (w(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : Z("v-if", !0)],
      6
    ), A(
      "div",
      {
        class: m(e.n("body"))
      },
      [A(
        "div",
        {
          class: m(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [ee(
          He,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(w(), me(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
          },
          8,
          ["name"]
        )],
        34
      )],
      2
    )],
    2
  );
}
const ca = ae({
  render: $y,
  name: "VarTimePicker",
  components: {
    Clock: yy
  },
  props: my,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), i = E(!1), o = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), f = E(0), v = E("hour"), c = E("am"), p = E(!1), b = E(!1), y = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), C = Ne({
      x: [],
      y: []
    }), g = W(() => v.value === "hour" ? u.value : v.value === "minute" ? d.value : f.value), h = (F) => {
      N(e["onUpdate:modelValue"], F), N(e.onChange, F);
    }, I = (F) => F * 57.29577951308232, S = (F) => {
      l.value = !1, b.value = !1, v.value = F;
    }, B = (F) => {
      var {
        disableHour: U
      } = a.value, H = tn.findIndex((oe) => L(oe) === L(y.value.hour)), Q = F === "am" ? tn : Ke, ie = [...Q.slice(H), ...Q.slice(0, H)];
      return ie.find((oe, ve) => (i.value = ve !== 0, !U.includes(oe)));
    }, k = (F) => {
      if (!e.readonly) {
        c.value = F;
        var U = B(F);
        if (!!U) {
          var H = e.useSeconds ? ":" + y.value.second : "", Q = fr(U, 2, "0") + ":" + y.value.minute + H;
          h(Q);
        }
      }
    }, D = (F, U) => {
      var H = F >= C.x[0] && F <= C.x[1], Q = U >= C.y[0] && U <= C.y[1];
      return H && Q;
    }, P = (F) => {
      var U = e.format === "24hr" ? "HH" : "hh", {
        hour: H,
        minute: Q,
        second: ie
      } = Je(F);
      return {
        hour: x().hour(H).format(U),
        minute: x().minute(Q).format("mm"),
        second: x().second(ie).format("ss")
      };
    }, $ = (F) => {
      var U = F / 30;
      return U >= 0 ? U : U + 12;
    }, O = () => {
      var {
        width: F,
        height: U
      } = a.value.getSize(), H = T.x - F / 2 - 8, Q = T.x + F / 2 + 8, ie = T.y - U / 2 - 8, oe = T.y + U / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: Q,
        rangeYMin: ie,
        rangeYMax: oe
      };
    }, R = (F, U, H) => {
      var {
        disableHour: Q
      } = a.value;
      o.value = D(F, U);
      var ie = Math.round(H / 30) * 30 + 90, oe = $(ie), ve = t.value ? tn[oe] : Ke[oe];
      if (Q.includes(ve) || (t.value = e.format === "24hr" ? D(F, U) : !1), t.value === o.value) {
        var be = t.value || c.value === "pm" ? Ke[oe] : tn[oe];
        p.value = Q.includes(be), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (F) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(F / 6) * 6 + 90, Q = H / 6 >= 0 ? H / 6 : H / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      b.value = Ts(ie), !b.value && (d.value = H, s.value = !0);
    }, G = (F) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(F / 6) * 6 + 90, Q = H / 6 >= 0 ? H / 6 : H / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        minute: L(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      Os(ie) || (f.value = H);
    }, V = () => {
      var {
        left: F,
        top: U,
        width: H,
        height: Q
      } = n.value.getBoundingClientRect();
      if (T.x = F + H / 2, T.y = U + Q / 2, v.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: oe,
          rangeYMin: ve,
          rangeYMax: be
        } = O();
        C.x = [ie, oe], C.y = [ve, be];
      }
    }, z = (F) => {
      if (F.preventDefault(), !e.readonly) {
        V();
        var {
          clientX: U,
          clientY: H
        } = F.touches[0], Q = U - T.x, ie = H - T.y, oe = Math.round(I(Math.atan2(ie, Q)));
        v.value === "hour" ? R(U, H, oe) : v.value === "minute" ? Y(oe) : G(oe);
      }
    }, X = () => {
      if (!e.readonly) {
        if (v.value === "hour" && l.value) {
          v.value = "minute";
          return;
        }
        v.value === "minute" && e.useSeconds && s.value && (v.value = "second");
      }
    }, se = () => {
      i.value = !1;
    };
    return ne(() => e.modelValue, (F) => {
      if (F) {
        var {
          hour: U,
          minute: H,
          second: Q
        } = Je(F), ie = x().hour(U).format("hh"), oe = x().hour(U).format("HH"), ve = x().minute(H).format("mm"), be = x().second(Q).format("ss");
        u.value = (ie === "12" ? 0 : L(ie)) * 30, d.value = L(ve) * 6, f.value = L(be) * 6, y.value = P(F), e.format !== "24hr" && (c.value = fr("" + U, 2, "0") === oe && Ke.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && Ke.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: by,
      classes: wy,
      getRad: g,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: v,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: z,
      checkPanel: S,
      checkAmpm: k,
      end: X,
      update: h,
      changePreventUpdate: se
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Ty = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Zo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Zo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Zo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Oy,
  classes: Py
} = _("uploader"), Ey = 0, Vy = ["onClick"], My = ["onClick"], Iy = ["src", "alt"], Ny = ["multiple", "accept", "capture", "disabled"], Dy = ["src"];
function By(e, n) {
  var r = re("var-icon"), a = re("var-form-details"), t = re("var-popup"), i = je("ripple");
  return w(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(w(!0), M(
        Te,
        null,
        Ie(e.files, (o) => Ce((w(), M(
          "div",
          {
            class: m(e.classes(e.n("file"), "var-elevation--2", [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            J(o.name || o.url),
            3
          ), e.removable ? (w(), M(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((l) => e.handleRemove(o), ["stop"])
            },
            [ee(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            My
          )) : Z("v-if", !0), o.cover ? (w(), M(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: K({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            Iy
          )) : Z("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          Vy
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Ce((w(), M(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " var-elevation--2"], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            class: m(e.n("action-input")),
            type: "file",
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          Ny
        ), q(e.$slots, "default", {}, () => [ee(
          r,
          {
            class: m(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : Z("v-if", !0)],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    ), ee(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: ce(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (w(), M(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            Dy
          )) : Z("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const ma = ae({
  render: By,
  name: "VarUploader",
  directives: {
    Ripple: Le
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: Ye
  },
  props: Ty,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return Qe(Y) ? G + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = bn(), f = W(() => {
      var {
        modelValue: Y,
        hideList: G
      } = e;
      return G ? [] : Y;
    }), v = () => {
      n.value.click();
    }, c = (Y) => {
      var {
        disabled: G,
        readonly: V,
        previewed: z
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || G || V || !z)) {
        var {
          url: X
        } = Y;
        if (_e(X) && Xi(X)) {
          Jn(X);
          return;
        }
        _e(X) && Zi(X) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: Ey++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), b = (Y) => {
      var G = Y.target, {
        files: V
      } = G;
      return Array.from(V);
    }, y = (Y) => new Promise((G) => {
      var V = new FileReader();
      V.onload = () => {
        var z = V.result;
        Y.file.type.startsWith("image") && (Y.cover = z), Y.url = z, G(Y);
      }, V.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(y), C = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((V) => new Promise((z) => {
        var X = G ? G(Ne(V)) : !0;
        Promise.resolve(X).then((se) => z({
          valid: se,
          varFile: V
        }));
      }));
    }, g = /* @__PURE__ */ function() {
      var Y = Jo(function* (G) {
        var {
          maxsize: V,
          maxlength: z,
          modelValue: X,
          onOversize: se,
          onAfterRead: F,
          readonly: U,
          disabled: H
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || H || U)) {
          var Q = (De) => De.filter((Sn) => Sn.file.size > L(V) ? (N(se, Ne(Sn)), !1) : !0), ie = (De) => {
            var Sn = Math.min(De.length, L(z) - X.length);
            return De.slice(0, Sn);
          }, oe = b(G), ve = oe.map(p);
          ve = V != null ? Q(ve) : ve, ve = z != null ? ie(ve) : ve;
          var be = yield Promise.all(T(ve)), nn = yield Promise.all(C(be)), rn = nn.filter((De) => {
            var {
              valid: Sn
            } = De;
            return Sn;
          }).map((De) => {
            var {
              varFile: Sn
            } = De;
            return Sn;
          });
          N(e["onUpdate:modelValue"], [...X, ...rn]), G.target.value = "", rn.forEach((De) => N(F, Ne(De)));
        }
      });
      return function(V) {
        return Y.apply(this, arguments);
      };
    }(), h = /* @__PURE__ */ function() {
      var Y = Jo(function* (G) {
        var {
          disabled: V,
          readonly: z,
          modelValue: X,
          onBeforeRemove: se,
          onRemove: F
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || V || z) && !(se && !(yield se(G)))) {
          var U = X.filter((H) => H !== G);
          N(F, G), D("onRemove"), N(e["onUpdate:modelValue"], U);
        }
      });
      return function(V) {
        return Y.apply(this, arguments);
      };
    }(), I = () => e.modelValue.filter((Y) => Y.state === "success"), S = () => e.modelValue.filter((Y) => Y.state === "error"), B = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: I,
      getError: S,
      getLoading: B
    }, D = (Y) => {
      Oe(() => {
        var {
          validateTrigger: G,
          rules: V,
          modelValue: z
        } = e;
        s(G, Y, V, z, k);
      });
    }, P = !1, $ = () => u(e.rules, e.modelValue, k), O = () => {
      P = !0, N(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: $,
      resetValidation: d,
      reset: O
    };
    return N(o, R), ne(() => e.modelValue, () => {
      !P && D("onChange"), P = !1;
    }, {
      deep: !0
    }), {
      n: Oy,
      classes: Py,
      input: n,
      files: f,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Zi,
      isHTMLSupportImage: Xi,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: v,
      handleChange: g,
      handleRemove: h,
      getSuccess: I,
      getError: S,
      getLoading: B,
      validate: $,
      resetValidation: d,
      reset: O
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
function Ay(e) {
  cr.install && e.use(cr), Pr.install && e.use(Pr), Er.install && e.use(Er), ar.install && e.use(ar), Vr.install && e.use(Vr), Mr.install && e.use(Mr), xe.install && e.use(xe), Ir.install && e.use(Ir), tr.install && e.use(tr), ir.install && e.use(ir), Nr.install && e.use(Nr), or.install && e.use(or), Dr.install && e.use(Dr), Br.install && e.use(Br), Ar.install && e.use(Ar), on.install && e.use(on), zr.install && e.use(zr), Fr.install && e.use(Fr), Lr.install && e.use(Lr), mr.install && e.use(mr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Ye.install && e.use(Ye), $e.install && e.use($e), Yr.install && e.use(Yr), Jn.install && e.use(Jn), Wr.install && e.use(Wr), Hr.install && e.use(Hr), dr.install && e.use(dr), ot.install && e.use(ot), jr.install && e.use(jr), Cn.install && e.use(Cn), Yt.install && e.use(Yt), Xn.install && e.use(Xn), Gr.install && e.use(Gr), qr.install && e.use(qr), gr.install && e.use(gr), mn.install && e.use(mn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), Le.install && e.use(Le), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), In.install && e.use(In), aa.install && e.use(aa), ta.install && e.use(ta), ia.install && e.use(ia), qn.install && e.use(qn), Ba.install && e.use(Ba), jn.install && e.use(jn), Gn.install && e.use(Gn), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), bi.install && e.use(bi), ca.install && e.use(ca), ma.install && e.use(ma);
}
const Fy = {
  install: Ay,
  ActionSheet: cr,
  AppBar: Pr,
  BackTop: Er,
  Badge: ar,
  BottomNavigation: Vr,
  BottomNavigationItem: Mr,
  Button: xe,
  Card: Ir,
  Cell: tr,
  Checkbox: ir,
  CheckboxGroup: Nr,
  Chip: or,
  Col: Dr,
  Collapse: Br,
  CollapseItem: Ar,
  Context: on,
  Countdown: zr,
  Counter: Fr,
  DatePicker: Lr,
  Dialog: mr,
  Divider: Rr,
  Form: Ur,
  FormDetails: Ye,
  Icon: $e,
  Image: Yr,
  ImagePreview: Jn,
  IndexAnchor: Wr,
  IndexBar: Hr,
  Input: dr,
  Lazy: ot,
  List: jr,
  Loading: Cn,
  Locale: Yt,
  Menu: Xn,
  Option: Gr,
  Pagination: qr,
  Picker: gr,
  Popup: mn,
  Progress: Kr,
  PullRefresh: Xr,
  Radio: Zr,
  RadioGroup: Jr,
  Rate: Qr,
  Ripple: Le,
  Row: xr,
  Select: _r,
  Skeleton: ea,
  Slider: na,
  Snackbar: In,
  Space: aa,
  Step: ta,
  Steps: ia,
  Sticky: qn,
  StyleProvider: Ba,
  Swipe: jn,
  SwipeItem: Gn,
  Switch: la,
  Tab: sa,
  TabItem: ua,
  Table: da,
  Tabs: va,
  TabsItems: fa,
  Themes: bi,
  TimePicker: ca,
  Uploader: ma
};
export {
  cr as ActionSheet,
  Pr as AppBar,
  Er as BackTop,
  ar as Badge,
  Vr as BottomNavigation,
  Mr as BottomNavigationItem,
  xe as Button,
  Ir as Card,
  tr as Cell,
  ir as Checkbox,
  Nr as CheckboxGroup,
  or as Chip,
  Dr as Col,
  Br as Collapse,
  Ar as CollapseItem,
  on as Context,
  zr as Countdown,
  Fr as Counter,
  Lr as DatePicker,
  mr as Dialog,
  Rr as Divider,
  Ur as Form,
  Ye as FormDetails,
  $e as Icon,
  Yr as Image,
  Jn as ImagePreview,
  Wr as IndexAnchor,
  Hr as IndexBar,
  dr as Input,
  ot as Lazy,
  jr as List,
  Cn as Loading,
  Yt as Locale,
  Xn as Menu,
  Gr as Option,
  qr as Pagination,
  gr as Picker,
  mn as Popup,
  Kr as Progress,
  Xr as PullRefresh,
  Zr as Radio,
  Jr as RadioGroup,
  Qr as Rate,
  Le as Ripple,
  xr as Row,
  _r as Select,
  ea as Skeleton,
  na as Slider,
  In as Snackbar,
  aa as Space,
  ta as Step,
  ia as Steps,
  qn as Sticky,
  Ba as StyleProvider,
  jn as Swipe,
  Gn as SwipeItem,
  la as Switch,
  sa as Tab,
  ua as TabItem,
  da as Table,
  va as Tabs,
  fa as TabsItems,
  bi as Themes,
  ca as TimePicker,
  ma as Uploader,
  Fy as default,
  Ay as install
};
