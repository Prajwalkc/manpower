var of = (e) => {
  throw TypeError(e);
};
var hl = (e, t, n) => t.has(e) || of("Cannot " + n);
var R = (e, t, n) => (
    hl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  te = (e, t, n) =>
    t.has(e)
      ? of("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  K = (e, t, n, r) => (
    hl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  _e = (e, t, n) => (hl(e, t, "access private method"), n);
var ti = (e, t, n, r) => ({
  set _(o) {
    K(e, t, o, n);
  },
  get _() {
    return R(e, t, r);
  },
});
function mx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ym = { exports: {} },
  Pa = {},
  xm = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = Symbol.for("react.element"),
  hx = Symbol.for("react.portal"),
  vx = Symbol.for("react.fragment"),
  gx = Symbol.for("react.strict_mode"),
  yx = Symbol.for("react.profiler"),
  xx = Symbol.for("react.provider"),
  wx = Symbol.for("react.context"),
  bx = Symbol.for("react.forward_ref"),
  Nx = Symbol.for("react.suspense"),
  Sx = Symbol.for("react.memo"),
  Cx = Symbol.for("react.lazy"),
  sf = Symbol.iterator;
function Ex(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sf && e[sf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bm = Object.assign,
  Nm = {};
function Co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nm),
    (this.updater = n || wm);
}
Co.prototype.isReactComponent = {};
Co.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Co.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sm() {}
Sm.prototype = Co.prototype;
function wc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nm),
    (this.updater = n || wm);
}
var bc = (wc.prototype = new Sm());
bc.constructor = wc;
bm(bc, Co.prototype);
bc.isPureReactComponent = !0;
var af = Array.isArray,
  Cm = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  Em = { key: !0, ref: !0, __self: !0, __source: !0 };
function jm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Cm.call(t, r) && !Em.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ls,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Nc.current,
  };
}
function jx(e, t) {
  return {
    $$typeof: Ls,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ls;
}
function kx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lf = /\/+/g;
function vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kx("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ls:
          case hx:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + vl(i, 0) : r),
      af(o)
        ? ((n = ""),
          e != null && (n = e.replace(lf, "$&/") + "/"),
          Ri(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Sc(o) &&
            (o = jx(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(lf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), af(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = r + vl(s, l);
      i += Ri(s, t, n, u, o);
    }
  else if (((u = Ex(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + vl(s, l++)), (i += Ri(s, t, n, u, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ni(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ri(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Px(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  Ti = { transition: null },
  Rx = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: Nc,
  };
function km() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: ni,
  forEach: function (e, t, n) {
    ni(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = Co;
Z.Fragment = vx;
Z.Profiler = yx;
Z.PureComponent = wc;
Z.StrictMode = gx;
Z.Suspense = Nx;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rx;
Z.act = km;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bm({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Nc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Cm.call(t, u) &&
        !Em.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Ls, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: wx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xx, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = jm;
Z.createFactory = function (e) {
  var t = jm.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: bx, render: e };
};
Z.isValidElement = Sc;
Z.lazy = function (e) {
  return { $$typeof: Cx, _payload: { _status: -1, _result: e }, _init: Px };
};
Z.memo = function (e, t) {
  return { $$typeof: Sx, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = Ti.transition;
  Ti.transition = {};
  try {
    e();
  } finally {
    Ti.transition = t;
  }
};
Z.unstable_act = km;
Z.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Be.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
Z.useId = function () {
  return Be.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Be.current.useRef(e);
};
Z.useState = function (e) {
  return Be.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Be.current.useTransition();
};
Z.version = "18.3.1";
xm.exports = Z;
var p = xm.exports;
const A = gm(p),
  Pm = mx({ __proto__: null, default: A }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tx = p,
  Mx = Symbol.for("react.element"),
  _x = Symbol.for("react.fragment"),
  Ax = Object.prototype.hasOwnProperty,
  Ox = Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ix = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ax.call(t, r) && !Ix.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Mx,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Ox.current,
  };
}
Pa.Fragment = _x;
Pa.jsx = Rm;
Pa.jsxs = Rm;
ym.exports = Pa;
var a = ym.exports,
  Tm = { exports: {} },
  ot = {},
  Mm = { exports: {} },
  _m = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, j) {
    var O = P.length;
    P.push(j);
    e: for (; 0 < O; ) {
      var B = (O - 1) >>> 1,
        z = P[B];
      if (0 < o(z, j)) (P[B] = j), (P[O] = z), (O = B);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var j = P[0],
      O = P.pop();
    if (O !== j) {
      P[0] = O;
      e: for (var B = 0, z = P.length, G = z >>> 1; B < G; ) {
        var Y = 2 * (B + 1) - 1,
          ce = P[Y],
          ve = Y + 1,
          X = P[ve];
        if (0 > o(ce, O))
          ve < z && 0 > o(X, ce)
            ? ((P[B] = X), (P[ve] = O), (B = ve))
            : ((P[B] = ce), (P[Y] = O), (B = Y));
        else if (ve < z && 0 > o(X, O)) (P[B] = X), (P[ve] = O), (B = ve);
        else break e;
      }
    }
    return j;
  }
  function o(P, j) {
    var O = P.sortIndex - j.sortIndex;
    return O !== 0 ? O : P.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    m = !1,
    w = !1,
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= P)
        r(c), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(c);
    }
  }
  function N(P) {
    if (((g = !1), x(P), !w))
      if (n(u) !== null) (w = !0), U(S);
      else {
        var j = n(c);
        j !== null && W(N, j.startTime - P);
      }
  }
  function S(P, j) {
    (w = !1), g && ((g = !1), v(k), (k = -1)), (m = !0);
    var O = h;
    try {
      for (
        x(j), f = n(u);
        f !== null && (!(f.expirationTime > j) || (P && !$()));

      ) {
        var B = f.callback;
        if (typeof B == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var z = B(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(u) && r(u),
            x(j);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var G = !0;
      else {
        var Y = n(c);
        Y !== null && W(N, Y.startTime - j), (G = !1);
      }
      return G;
    } finally {
      (f = null), (h = O), (m = !1);
    }
  }
  var C = !1,
    E = null,
    k = -1,
    T = 5,
    _ = -1;
  function $() {
    return !(e.unstable_now() - _ < T);
  }
  function D() {
    if (E !== null) {
      var P = e.unstable_now();
      _ = P;
      var j = !0;
      try {
        j = E(!0, P);
      } finally {
        j ? V() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var V;
  if (typeof y == "function")
    V = function () {
      y(D);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      q = I.port2;
    (I.port1.onmessage = D),
      (V = function () {
        q.postMessage(null);
      });
  } else
    V = function () {
      b(D, 0);
    };
  function U(P) {
    (E = P), C || ((C = !0), V());
  }
  function W(P, j) {
    k = b(function () {
      P(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || m || ((w = !0), U(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = h;
      }
      var O = h;
      h = j;
      try {
        return P();
      } finally {
        h = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, j) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var O = h;
      h = P;
      try {
        return j();
      } finally {
        h = O;
      }
    }),
    (e.unstable_scheduleCallback = function (P, j, O) {
      var B = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? B + O : B))
          : (O = B),
        P)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = O + z),
        (P = {
          id: d++,
          callback: j,
          priorityLevel: P,
          startTime: O,
          expirationTime: z,
          sortIndex: -1,
        }),
        O > B
          ? ((P.sortIndex = O),
            t(c, P),
            n(u) === null &&
              P === n(c) &&
              (g ? (v(k), (k = -1)) : (g = !0), W(N, O - B)))
          : ((P.sortIndex = z), t(u, P), w || m || ((w = !0), U(S))),
        P
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (P) {
      var j = h;
      return function () {
        var O = h;
        h = j;
        try {
          return P.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    });
})(_m);
Mm.exports = _m;
var Dx = Mm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lx = p,
  rt = Dx;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Am = new Set(),
  as = {};
function xr(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (as[e] = t, e = 0; e < t.length; e++) Am.add(t[e]);
}
var nn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ou = Object.prototype.hasOwnProperty,
  Fx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uf = {},
  cf = {};
function zx(e) {
  return ou.call(cf, e)
    ? !0
    : ou.call(uf, e)
    ? !1
    : Fx.test(e)
    ? (cf[e] = !0)
    : ((uf[e] = !0), !1);
}
function $x(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ux(e, t, n, r) {
  if (t === null || typeof t > "u" || $x(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ve(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cc = /[\-:]([a-z])/g;
function Ec(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cc, Ec);
    Me[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cc, Ec);
    Me[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cc, Ec);
  Me[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jc(e, t, n, r) {
  var o = Me.hasOwnProperty(t) ? Me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ux(t, n, o, r) && (n = null),
    r || o === null
      ? zx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ri = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Lr = Symbol.for("react.fragment"),
  kc = Symbol.for("react.strict_mode"),
  su = Symbol.for("react.profiler"),
  Om = Symbol.for("react.provider"),
  Im = Symbol.for("react.context"),
  Pc = Symbol.for("react.forward_ref"),
  iu = Symbol.for("react.suspense"),
  au = Symbol.for("react.suspense_list"),
  Rc = Symbol.for("react.memo"),
  wn = Symbol.for("react.lazy"),
  Dm = Symbol.for("react.offscreen"),
  df = Symbol.iterator;
function Oo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (df && e[df]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  gl;
function Wo(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var yl = !1;
function xl(e, t) {
  if (!e || yl) return "";
  yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wo(e) : "";
}
function Bx(e) {
  switch (e.tag) {
    case 5:
      return Wo(e.type);
    case 16:
      return Wo("Lazy");
    case 13:
      return Wo("Suspense");
    case 19:
      return Wo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return "";
  }
}
function lu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Dr:
      return "Portal";
    case su:
      return "Profiler";
    case kc:
      return "StrictMode";
    case iu:
      return "Suspense";
    case au:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Im:
        return (e.displayName || "Context") + ".Consumer";
      case Om:
        return (e._context.displayName || "Context") + ".Provider";
      case Pc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rc:
        return (
          (t = e.displayName || null), t !== null ? t : lu(e.type) || "Memo"
        );
      case wn:
        (t = e._payload), (e = e._init);
        try {
          return lu(e(t));
        } catch {}
    }
  return null;
}
function Vx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return lu(t);
    case 8:
      return t === kc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Lm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wx(e) {
  var t = Lm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oi(e) {
  e._valueTracker || (e._valueTracker = Wx(e));
}
function Fm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uu(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ff(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zm(e, t) {
  (t = t.checked), t != null && jc(e, "checked", t, !1);
}
function cu(e, t) {
  zm(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? du(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && du(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function du(e, t, n) {
  (t !== "number" || Gi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ho = Array.isArray;
function Qr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function fu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Ho(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function $m(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function hf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Um(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Um(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  Bm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ls(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hx = ["Webkit", "ms", "Moz", "O"];
Object.keys(qo).forEach(function (e) {
  Hx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qo[t] = qo[e]);
  });
});
function Vm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qo.hasOwnProperty(e) && qo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Vm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Kx = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mu(e, t) {
  if (t) {
    if (Kx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function hu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vu = null;
function Tc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gu = null,
  Yr = null,
  qr = null;
function vf(e) {
  if ((e = $s(e))) {
    if (typeof gu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Aa(t)), gu(e.stateNode, e.type, t));
  }
}
function Hm(e) {
  Yr ? (qr ? qr.push(e) : (qr = [e])) : (Yr = e);
}
function Km() {
  if (Yr) {
    var e = Yr,
      t = qr;
    if (((qr = Yr = null), vf(e), t)) for (e = 0; e < t.length; e++) vf(t[e]);
  }
}
function Gm(e, t) {
  return e(t);
}
function Qm() {}
var wl = !1;
function Ym(e, t, n) {
  if (wl) return e(t, n);
  wl = !0;
  try {
    return Gm(e, t, n);
  } finally {
    (wl = !1), (Yr !== null || qr !== null) && (Qm(), Km());
  }
}
function us(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Aa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var yu = !1;
if (nn)
  try {
    var Io = {};
    Object.defineProperty(Io, "passive", {
      get: function () {
        yu = !0;
      },
    }),
      window.addEventListener("test", Io, Io),
      window.removeEventListener("test", Io, Io);
  } catch {
    yu = !1;
  }
function Gx(e, t, n, r, o, s, i, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Xo = !1,
  Qi = null,
  Yi = !1,
  xu = null,
  Qx = {
    onError: function (e) {
      (Xo = !0), (Qi = e);
    },
  };
function Yx(e, t, n, r, o, s, i, l, u) {
  (Xo = !1), (Qi = null), Gx.apply(Qx, arguments);
}
function qx(e, t, n, r, o, s, i, l, u) {
  if ((Yx.apply(this, arguments), Xo)) {
    if (Xo) {
      var c = Qi;
      (Xo = !1), (Qi = null);
    } else throw Error(M(198));
    Yi || ((Yi = !0), (xu = c));
  }
}
function wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gf(e) {
  if (wr(e) !== e) throw Error(M(188));
}
function Xx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return gf(o), e;
        if (s === r) return gf(o), t;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Xm(e) {
  return (e = Xx(e)), e !== null ? Zm(e) : null;
}
function Zm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jm = rt.unstable_scheduleCallback,
  yf = rt.unstable_cancelCallback,
  Zx = rt.unstable_shouldYield,
  Jx = rt.unstable_requestPaint,
  Ne = rt.unstable_now,
  ew = rt.unstable_getCurrentPriorityLevel,
  Mc = rt.unstable_ImmediatePriority,
  eh = rt.unstable_UserBlockingPriority,
  qi = rt.unstable_NormalPriority,
  tw = rt.unstable_LowPriority,
  th = rt.unstable_IdlePriority,
  Ra = null,
  Bt = null;
function nw(e) {
  if (Bt && typeof Bt.onCommitFiberRoot == "function")
    try {
      Bt.onCommitFiberRoot(Ra, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : sw,
  rw = Math.log,
  ow = Math.LN2;
function sw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rw(e) / ow) | 0)) | 0;
}
var ii = 64,
  ai = 4194304;
function Ko(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Ko(l)) : ((s &= i), s !== 0 && (r = Ko(s)));
  } else (i = n & ~o), i !== 0 ? (r = Ko(i)) : s !== 0 && (r = Ko(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function iw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function aw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - kt(s),
      l = 1 << i,
      u = o[i];
    u === -1
      ? (!(l & n) || l & r) && (o[i] = iw(l, t))
      : u <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function wu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nh() {
  var e = ii;
  return (ii <<= 1), !(ii & 4194240) && (ii = 64), e;
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function lw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - kt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function _c(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function rh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var oh,
  Ac,
  sh,
  ih,
  ah,
  bu = !1,
  li = [],
  _n = null,
  An = null,
  On = null,
  cs = new Map(),
  ds = new Map(),
  Nn = [],
  uw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _n = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      On = null;
      break;
    case "pointerover":
    case "pointerout":
      cs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ds.delete(t.pointerId);
  }
}
function Do(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = $s(t)), t !== null && Ac(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function cw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (_n = Do(_n, e, t, n, r, o)), !0;
    case "dragenter":
      return (An = Do(An, e, t, n, r, o)), !0;
    case "mouseover":
      return (On = Do(On, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return cs.set(s, Do(cs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), ds.set(s, Do(ds.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function lh(e) {
  var t = rr(e.target);
  if (t !== null) {
    var n = wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qm(n)), t !== null)) {
          (e.blockedOn = t),
            ah(e.priority, function () {
              sh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vu = r), n.target.dispatchEvent(r), (vu = null);
    } else return (t = $s(n)), t !== null && Ac(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function wf(e, t, n) {
  Mi(e) && n.delete(t);
}
function dw() {
  (bu = !1),
    _n !== null && Mi(_n) && (_n = null),
    An !== null && Mi(An) && (An = null),
    On !== null && Mi(On) && (On = null),
    cs.forEach(wf),
    ds.forEach(wf);
}
function Lo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bu ||
      ((bu = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, dw)));
}
function fs(e) {
  function t(o) {
    return Lo(o, e);
  }
  if (0 < li.length) {
    Lo(li[0], e);
    for (var n = 1; n < li.length; n++) {
      var r = li[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _n !== null && Lo(_n, e),
      An !== null && Lo(An, e),
      On !== null && Lo(On, e),
      cs.forEach(t),
      ds.forEach(t),
      n = 0;
    n < Nn.length;
    n++
  )
    (r = Nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
    lh(n), n.blockedOn === null && Nn.shift();
}
var Xr = un.ReactCurrentBatchConfig,
  Zi = !0;
function fw(e, t, n, r) {
  var o = ne,
    s = Xr.transition;
  Xr.transition = null;
  try {
    (ne = 1), Oc(e, t, n, r);
  } finally {
    (ne = o), (Xr.transition = s);
  }
}
function pw(e, t, n, r) {
  var o = ne,
    s = Xr.transition;
  Xr.transition = null;
  try {
    (ne = 4), Oc(e, t, n, r);
  } finally {
    (ne = o), (Xr.transition = s);
  }
}
function Oc(e, t, n, r) {
  if (Zi) {
    var o = Nu(e, t, n, r);
    if (o === null) Ml(e, t, r, Ji, n), xf(e, r);
    else if (cw(o, e, t, n, r)) r.stopPropagation();
    else if ((xf(e, r), t & 4 && -1 < uw.indexOf(e))) {
      for (; o !== null; ) {
        var s = $s(o);
        if (
          (s !== null && oh(s),
          (s = Nu(e, t, n, r)),
          s === null && Ml(e, t, r, Ji, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Ji = null;
function Nu(e, t, n, r) {
  if (((Ji = null), (e = Tc(r)), (e = rr(e)), e !== null))
    if (((t = wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ji = e), null;
}
function uh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ew()) {
        case Mc:
          return 1;
        case eh:
          return 4;
        case qi:
        case tw:
          return 16;
        case th:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null,
  Ic = null,
  _i = null;
function ch() {
  if (_i) return _i;
  var e,
    t = Ic,
    n = t.length,
    r,
    o = "value" in Rn ? Rn.value : Rn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (_i = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ui() {
  return !0;
}
function bf() {
  return !1;
}
function st(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ui
        : bf),
      (this.isPropagationStopped = bf),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ui));
      },
      persist: function () {},
      isPersistent: ui,
    }),
    t
  );
}
var Eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dc = st(Eo),
  zs = pe({}, Eo, { view: 0, detail: 0 }),
  mw = st(zs),
  Nl,
  Sl,
  Fo,
  Ta = pe({}, zs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fo &&
            (Fo && e.type === "mousemove"
              ? ((Nl = e.screenX - Fo.screenX), (Sl = e.screenY - Fo.screenY))
              : (Sl = Nl = 0),
            (Fo = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  Nf = st(Ta),
  hw = pe({}, Ta, { dataTransfer: 0 }),
  vw = st(hw),
  gw = pe({}, zs, { relatedTarget: 0 }),
  Cl = st(gw),
  yw = pe({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xw = st(yw),
  ww = pe({}, Eo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bw = st(ww),
  Nw = pe({}, Eo, { data: 0 }),
  Sf = st(Nw),
  Sw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Cw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ew = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ew[e]) ? !!t[e] : !1;
}
function Lc() {
  return jw;
}
var kw = pe({}, zs, {
    key: function (e) {
      if (e.key) {
        var t = Sw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lc,
    charCode: function (e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Pw = st(kw),
  Rw = pe({}, Ta, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cf = st(Rw),
  Tw = pe({}, zs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lc,
  }),
  Mw = st(Tw),
  _w = pe({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Aw = st(_w),
  Ow = pe({}, Ta, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Iw = st(Ow),
  Dw = [9, 13, 27, 32],
  Fc = nn && "CompositionEvent" in window,
  Zo = null;
nn && "documentMode" in document && (Zo = document.documentMode);
var Lw = nn && "TextEvent" in window && !Zo,
  dh = nn && (!Fc || (Zo && 8 < Zo && 11 >= Zo)),
  Ef = " ",
  jf = !1;
function fh(e, t) {
  switch (e) {
    case "keyup":
      return Dw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ph(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Fw(e, t) {
  switch (e) {
    case "compositionend":
      return ph(t);
    case "keypress":
      return t.which !== 32 ? null : ((jf = !0), Ef);
    case "textInput":
      return (e = t.data), e === Ef && jf ? null : e;
    default:
      return null;
  }
}
function zw(e, t) {
  if (Fr)
    return e === "compositionend" || (!Fc && fh(e, t))
      ? ((e = ch()), (_i = Ic = Rn = null), (Fr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $w = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$w[e.type] : t === "textarea";
}
function mh(e, t, n, r) {
  Hm(r),
    (t = ea(t, "onChange")),
    0 < t.length &&
      ((n = new Dc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jo = null,
  ps = null;
function Uw(e) {
  Eh(e, 0);
}
function Ma(e) {
  var t = Ur(e);
  if (Fm(t)) return e;
}
function Bw(e, t) {
  if (e === "change") return t;
}
var hh = !1;
if (nn) {
  var El;
  if (nn) {
    var jl = "oninput" in document;
    if (!jl) {
      var Pf = document.createElement("div");
      Pf.setAttribute("oninput", "return;"),
        (jl = typeof Pf.oninput == "function");
    }
    El = jl;
  } else El = !1;
  hh = El && (!document.documentMode || 9 < document.documentMode);
}
function Rf() {
  Jo && (Jo.detachEvent("onpropertychange", vh), (ps = Jo = null));
}
function vh(e) {
  if (e.propertyName === "value" && Ma(ps)) {
    var t = [];
    mh(t, ps, e, Tc(e)), Ym(Uw, t);
  }
}
function Vw(e, t, n) {
  e === "focusin"
    ? (Rf(), (Jo = t), (ps = n), Jo.attachEvent("onpropertychange", vh))
    : e === "focusout" && Rf();
}
function Ww(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ma(ps);
}
function Hw(e, t) {
  if (e === "click") return Ma(t);
}
function Kw(e, t) {
  if (e === "input" || e === "change") return Ma(t);
}
function Gw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : Gw;
function ms(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ou.call(t, o) || !Rt(e[o], t[o])) return !1;
  }
  return !0;
}
function Tf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mf(e, t) {
  var n = Tf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tf(n);
  }
}
function gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yh() {
  for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gi(e.document);
  }
  return t;
}
function zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qw(e) {
  var t = yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Mf(n, s));
        var i = Mf(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Yw = nn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  Su = null,
  es = null,
  Cu = !1;
function _f(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cu ||
    zr == null ||
    zr !== Gi(r) ||
    ((r = zr),
    "selectionStart" in r && zc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (es && ms(es, r)) ||
      ((es = r),
      (r = ea(Su, "onSelect")),
      0 < r.length &&
        ((t = new Dc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: ci("Animation", "AnimationEnd"),
    animationiteration: ci("Animation", "AnimationIteration"),
    animationstart: ci("Animation", "AnimationStart"),
    transitionend: ci("Transition", "TransitionEnd"),
  },
  kl = {},
  xh = {};
nn &&
  ((xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function _a(e) {
  if (kl[e]) return kl[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xh) return (kl[e] = t[n]);
  return e;
}
var wh = _a("animationend"),
  bh = _a("animationiteration"),
  Nh = _a("animationstart"),
  Sh = _a("transitionend"),
  Ch = new Map(),
  Af =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gn(e, t) {
  Ch.set(e, t), xr(t, [e]);
}
for (var Pl = 0; Pl < Af.length; Pl++) {
  var Rl = Af[Pl],
    qw = Rl.toLowerCase(),
    Xw = Rl[0].toUpperCase() + Rl.slice(1);
  Gn(qw, "on" + Xw);
}
Gn(wh, "onAnimationEnd");
Gn(bh, "onAnimationIteration");
Gn(Nh, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(Sh, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
xr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));
function Of(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qx(r, t, void 0, e), (e.currentTarget = null);
}
function Eh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== s && o.isPropagationStopped())) break e;
          Of(o, l, c), (s = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== s && o.isPropagationStopped())
          )
            break e;
          Of(o, l, c), (s = u);
        }
    }
  }
  if (Yi) throw ((e = xu), (Yi = !1), (xu = null), e);
}
function ie(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jh(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), jh(n, e, r, t);
}
var di = "_reactListening" + Math.random().toString(36).slice(2);
function hs(e) {
  if (!e[di]) {
    (e[di] = !0),
      Am.forEach(function (n) {
        n !== "selectionchange" && (Zw.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[di] || ((t[di] = !0), Tl("selectionchange", !1, t));
  }
}
function jh(e, t, n, r) {
  switch (uh(t)) {
    case 1:
      var o = fw;
      break;
    case 4:
      o = pw;
      break;
    default:
      o = Oc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !yu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = rr(l)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ym(function () {
    var c = s,
      d = Tc(n),
      f = [];
    e: {
      var h = Ch.get(e);
      if (h !== void 0) {
        var m = Dc,
          w = e;
        switch (e) {
          case "keypress":
            if (Ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Pw;
            break;
          case "focusin":
            (w = "focus"), (m = Cl);
            break;
          case "focusout":
            (w = "blur"), (m = Cl);
            break;
          case "beforeblur":
          case "afterblur":
            m = Cl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = vw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Mw;
            break;
          case wh:
          case bh:
          case Nh:
            m = xw;
            break;
          case Sh:
            m = Aw;
            break;
          case "scroll":
            m = mw;
            break;
          case "wheel":
            m = Iw;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = bw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Cf;
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          v = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var y = c, x; y !== null; ) {
          x = y;
          var N = x.stateNode;
          if (
            (x.tag === 5 &&
              N !== null &&
              ((x = N),
              v !== null && ((N = us(y, v)), N != null && g.push(vs(y, N, x)))),
            b)
          )
            break;
          y = y.return;
        }
        0 < g.length &&
          ((h = new m(h, w, null, n, d)), f.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          h &&
            n !== vu &&
            (w = n.relatedTarget || n.fromElement) &&
            (rr(w) || w[rn]))
        )
          break e;
        if (
          (m || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          m
            ? ((w = n.relatedTarget || n.toElement),
              (m = c),
              (w = w ? rr(w) : null),
              w !== null &&
                ((b = wr(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((m = null), (w = c)),
          m !== w)
        ) {
          if (
            ((g = Nf),
            (N = "onMouseLeave"),
            (v = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Cf),
              (N = "onPointerLeave"),
              (v = "onPointerEnter"),
              (y = "pointer")),
            (b = m == null ? h : Ur(m)),
            (x = w == null ? h : Ur(w)),
            (h = new g(N, y + "leave", m, n, d)),
            (h.target = b),
            (h.relatedTarget = x),
            (N = null),
            rr(d) === c &&
              ((g = new g(v, y + "enter", w, n, d)),
              (g.target = x),
              (g.relatedTarget = b),
              (N = g)),
            (b = N),
            m && w)
          )
            t: {
              for (g = m, v = w, y = 0, x = g; x; x = Tr(x)) y++;
              for (x = 0, N = v; N; N = Tr(N)) x++;
              for (; 0 < y - x; ) (g = Tr(g)), y--;
              for (; 0 < x - y; ) (v = Tr(v)), x--;
              for (; y--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = Tr(g)), (v = Tr(v));
              }
              g = null;
            }
          else g = null;
          m !== null && If(f, h, m, g, !1),
            w !== null && b !== null && If(f, b, w, g, !0);
        }
      }
      e: {
        if (
          ((h = c ? Ur(c) : window),
          (m = h.nodeName && h.nodeName.toLowerCase()),
          m === "select" || (m === "input" && h.type === "file"))
        )
          var S = Bw;
        else if (kf(h))
          if (hh) S = Kw;
          else {
            S = Ww;
            var C = Vw;
          }
        else
          (m = h.nodeName) &&
            m.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Hw);
        if (S && (S = S(e, c))) {
          mh(f, S, n, d);
          break e;
        }
        C && C(e, h, c),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            du(h, "number", h.value);
      }
      switch (((C = c ? Ur(c) : window), e)) {
        case "focusin":
          (kf(C) || C.contentEditable === "true") &&
            ((zr = C), (Su = c), (es = null));
          break;
        case "focusout":
          es = Su = zr = null;
          break;
        case "mousedown":
          Cu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Cu = !1), _f(f, n, d);
          break;
        case "selectionchange":
          if (Yw) break;
        case "keydown":
        case "keyup":
          _f(f, n, d);
      }
      var E;
      if (Fc)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Fr
          ? fh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (dh &&
          n.locale !== "ko" &&
          (Fr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Fr && (E = ch())
            : ((Rn = d),
              (Ic = "value" in Rn ? Rn.value : Rn.textContent),
              (Fr = !0))),
        (C = ea(c, k)),
        0 < C.length &&
          ((k = new Sf(k, e, null, n, d)),
          f.push({ event: k, listeners: C }),
          E ? (k.data = E) : ((E = ph(n)), E !== null && (k.data = E)))),
        (E = Lw ? Fw(e, n) : zw(e, n)) &&
          ((c = ea(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Sf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = E)));
    }
    Eh(f, t);
  });
}
function vs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ea(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = us(e, n)),
      s != null && r.unshift(vs(e, s, o)),
      (s = us(e, t)),
      s != null && r.push(vs(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function If(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((u = us(n, s)), u != null && i.unshift(vs(n, u, l)))
        : o || ((u = us(n, s)), u != null && i.push(vs(n, u, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Jw = /\r\n?/g,
  e1 = /\u0000|\uFFFD/g;
function Df(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jw,
      `
`
    )
    .replace(e1, "");
}
function fi(e, t, n) {
  if (((t = Df(t)), Df(e) !== t && n)) throw Error(M(425));
}
function ta() {}
var Eu = null,
  ju = null;
function ku(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pu = typeof setTimeout == "function" ? setTimeout : void 0,
  t1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lf = typeof Promise == "function" ? Promise : void 0,
  n1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lf < "u"
      ? function (e) {
          return Lf.resolve(null).then(e).catch(r1);
        }
      : Pu;
function r1(e) {
  setTimeout(function () {
    throw e;
  });
}
function _l(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), fs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  fs(t);
}
function In(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ff(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jo = Math.random().toString(36).slice(2),
  $t = "__reactFiber$" + jo,
  gs = "__reactProps$" + jo,
  rn = "__reactContainer$" + jo,
  Ru = "__reactEvents$" + jo,
  o1 = "__reactListeners$" + jo,
  s1 = "__reactHandles$" + jo;
function rr(e) {
  var t = e[$t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rn] || n[$t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ff(e); e !== null; ) {
          if ((n = e[$t])) return n;
          e = Ff(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $s(e) {
  return (
    (e = e[$t] || e[rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Aa(e) {
  return e[gs] || null;
}
var Tu = [],
  Br = -1;
function Qn(e) {
  return { current: e };
}
function ae(e) {
  0 > Br || ((e.current = Tu[Br]), (Tu[Br] = null), Br--);
}
function oe(e, t) {
  Br++, (Tu[Br] = e.current), (e.current = t);
}
var Bn = {},
  Le = Qn(Bn),
  Ye = Qn(!1),
  pr = Bn;
function mo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function na() {
  ae(Ye), ae(Le);
}
function zf(e, t, n) {
  if (Le.current !== Bn) throw Error(M(168));
  oe(Le, t), oe(Ye, n);
}
function kh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, Vx(e) || "Unknown", o));
  return pe({}, n, r);
}
function ra(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bn),
    (pr = Le.current),
    oe(Le, e),
    oe(Ye, Ye.current),
    !0
  );
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = kh(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ye),
      ae(Le),
      oe(Le, e))
    : ae(Ye),
    oe(Ye, n);
}
var Xt = null,
  Oa = !1,
  Al = !1;
function Ph(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function i1(e) {
  (Oa = !0), Ph(e);
}
function Yn() {
  if (!Al && Xt !== null) {
    Al = !0;
    var e = 0,
      t = ne;
    try {
      var n = Xt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xt = null), (Oa = !1);
    } catch (o) {
      throw (Xt !== null && (Xt = Xt.slice(e + 1)), Jm(Mc, Yn), o);
    } finally {
      (ne = t), (Al = !1);
    }
  }
  return null;
}
var Vr = [],
  Wr = 0,
  oa = null,
  sa = 0,
  lt = [],
  ut = 0,
  mr = null,
  Jt = 1,
  en = "";
function er(e, t) {
  (Vr[Wr++] = sa), (Vr[Wr++] = oa), (oa = e), (sa = t);
}
function Rh(e, t, n) {
  (lt[ut++] = Jt), (lt[ut++] = en), (lt[ut++] = mr), (mr = e);
  var r = Jt;
  e = en;
  var o = 32 - kt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - kt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Jt = (1 << (32 - kt(t) + o)) | (n << o) | r),
      (en = s + e);
  } else (Jt = (1 << s) | (n << o) | r), (en = e);
}
function $c(e) {
  e.return !== null && (er(e, 1), Rh(e, 1, 0));
}
function Uc(e) {
  for (; e === oa; )
    (oa = Vr[--Wr]), (Vr[Wr] = null), (sa = Vr[--Wr]), (Vr[Wr] = null);
  for (; e === mr; )
    (mr = lt[--ut]),
      (lt[ut] = null),
      (en = lt[--ut]),
      (lt[ut] = null),
      (Jt = lt[--ut]),
      (lt[ut] = null);
}
var tt = null,
  et = null,
  ue = !1,
  jt = null;
function Th(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = In(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mr !== null ? { id: Jt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (ue) {
    var t = et;
    if (t) {
      var n = t;
      if (!Uf(e, t)) {
        if (Mu(e)) throw Error(M(418));
        t = In(n.nextSibling);
        var r = tt;
        t && Uf(e, t)
          ? Th(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (tt = e));
      }
    } else {
      if (Mu(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (tt = e);
    }
  }
}
function Bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function pi(e) {
  if (e !== tt) return !1;
  if (!ue) return Bf(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (Mu(e)) throw (Mh(), Error(M(418)));
    for (; t; ) Th(e, t), (t = In(t.nextSibling));
  }
  if ((Bf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = In(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? In(e.stateNode.nextSibling) : null;
  return !0;
}
function Mh() {
  for (var e = et; e; ) e = In(e.nextSibling);
}
function ho() {
  (et = tt = null), (ue = !1);
}
function Bc(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var a1 = un.ReactCurrentBatchConfig;
function zo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vf(e) {
  var t = e._init;
  return t(e._payload);
}
function _h(e) {
  function t(v, y) {
    if (e) {
      var x = v.deletions;
      x === null ? ((v.deletions = [y]), (v.flags |= 16)) : x.push(y);
    }
  }
  function n(v, y) {
    if (!e) return null;
    for (; y !== null; ) t(v, y), (y = y.sibling);
    return null;
  }
  function r(v, y) {
    for (v = new Map(); y !== null; )
      y.key !== null ? v.set(y.key, y) : v.set(y.index, y), (y = y.sibling);
    return v;
  }
  function o(v, y) {
    return (v = zn(v, y)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, y, x) {
    return (
      (v.index = x),
      e
        ? ((x = v.alternate),
          x !== null
            ? ((x = x.index), x < y ? ((v.flags |= 2), y) : x)
            : ((v.flags |= 2), y))
        : ((v.flags |= 1048576), y)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, y, x, N) {
    return y === null || y.tag !== 6
      ? ((y = $l(x, v.mode, N)), (y.return = v), y)
      : ((y = o(y, x)), (y.return = v), y);
  }
  function u(v, y, x, N) {
    var S = x.type;
    return S === Lr
      ? d(v, y, x.props.children, N, x.key)
      : y !== null &&
        (y.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === wn &&
            Vf(S) === y.type))
      ? ((N = o(y, x.props)), (N.ref = zo(v, y, x)), (N.return = v), N)
      : ((N = $i(x.type, x.key, x.props, null, v.mode, N)),
        (N.ref = zo(v, y, x)),
        (N.return = v),
        N);
  }
  function c(v, y, x, N) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== x.containerInfo ||
      y.stateNode.implementation !== x.implementation
      ? ((y = Ul(x, v.mode, N)), (y.return = v), y)
      : ((y = o(y, x.children || [])), (y.return = v), y);
  }
  function d(v, y, x, N, S) {
    return y === null || y.tag !== 7
      ? ((y = fr(x, v.mode, N, S)), (y.return = v), y)
      : ((y = o(y, x)), (y.return = v), y);
  }
  function f(v, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = $l("" + y, v.mode, x)), (y.return = v), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ri:
          return (
            (x = $i(y.type, y.key, y.props, null, v.mode, x)),
            (x.ref = zo(v, null, y)),
            (x.return = v),
            x
          );
        case Dr:
          return (y = Ul(y, v.mode, x)), (y.return = v), y;
        case wn:
          var N = y._init;
          return f(v, N(y._payload), x);
      }
      if (Ho(y) || Oo(y))
        return (y = fr(y, v.mode, x, null)), (y.return = v), y;
      mi(v, y);
    }
    return null;
  }
  function h(v, y, x, N) {
    var S = y !== null ? y.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return S !== null ? null : l(v, y, "" + x, N);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ri:
          return x.key === S ? u(v, y, x, N) : null;
        case Dr:
          return x.key === S ? c(v, y, x, N) : null;
        case wn:
          return (S = x._init), h(v, y, S(x._payload), N);
      }
      if (Ho(x) || Oo(x)) return S !== null ? null : d(v, y, x, N, null);
      mi(v, x);
    }
    return null;
  }
  function m(v, y, x, N, S) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return (v = v.get(x) || null), l(y, v, "" + N, S);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case ri:
          return (v = v.get(N.key === null ? x : N.key) || null), u(y, v, N, S);
        case Dr:
          return (v = v.get(N.key === null ? x : N.key) || null), c(y, v, N, S);
        case wn:
          var C = N._init;
          return m(v, y, x, C(N._payload), S);
      }
      if (Ho(N) || Oo(N)) return (v = v.get(x) || null), d(y, v, N, S, null);
      mi(y, N);
    }
    return null;
  }
  function w(v, y, x, N) {
    for (
      var S = null, C = null, E = y, k = (y = 0), T = null;
      E !== null && k < x.length;
      k++
    ) {
      E.index > k ? ((T = E), (E = null)) : (T = E.sibling);
      var _ = h(v, E, x[k], N);
      if (_ === null) {
        E === null && (E = T);
        break;
      }
      e && E && _.alternate === null && t(v, E),
        (y = s(_, y, k)),
        C === null ? (S = _) : (C.sibling = _),
        (C = _),
        (E = T);
    }
    if (k === x.length) return n(v, E), ue && er(v, k), S;
    if (E === null) {
      for (; k < x.length; k++)
        (E = f(v, x[k], N)),
          E !== null &&
            ((y = s(E, y, k)), C === null ? (S = E) : (C.sibling = E), (C = E));
      return ue && er(v, k), S;
    }
    for (E = r(v, E); k < x.length; k++)
      (T = m(E, v, k, x[k], N)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? k : T.key),
          (y = s(T, y, k)),
          C === null ? (S = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        E.forEach(function ($) {
          return t(v, $);
        }),
      ue && er(v, k),
      S
    );
  }
  function g(v, y, x, N) {
    var S = Oo(x);
    if (typeof S != "function") throw Error(M(150));
    if (((x = S.call(x)), x == null)) throw Error(M(151));
    for (
      var C = (S = null), E = y, k = (y = 0), T = null, _ = x.next();
      E !== null && !_.done;
      k++, _ = x.next()
    ) {
      E.index > k ? ((T = E), (E = null)) : (T = E.sibling);
      var $ = h(v, E, _.value, N);
      if ($ === null) {
        E === null && (E = T);
        break;
      }
      e && E && $.alternate === null && t(v, E),
        (y = s($, y, k)),
        C === null ? (S = $) : (C.sibling = $),
        (C = $),
        (E = T);
    }
    if (_.done) return n(v, E), ue && er(v, k), S;
    if (E === null) {
      for (; !_.done; k++, _ = x.next())
        (_ = f(v, _.value, N)),
          _ !== null &&
            ((y = s(_, y, k)), C === null ? (S = _) : (C.sibling = _), (C = _));
      return ue && er(v, k), S;
    }
    for (E = r(v, E); !_.done; k++, _ = x.next())
      (_ = m(E, v, k, _.value, N)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? k : _.key),
          (y = s(_, y, k)),
          C === null ? (S = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        E.forEach(function (D) {
          return t(v, D);
        }),
      ue && er(v, k),
      S
    );
  }
  function b(v, y, x, N) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Lr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ri:
          e: {
            for (var S = x.key, C = y; C !== null; ) {
              if (C.key === S) {
                if (((S = x.type), S === Lr)) {
                  if (C.tag === 7) {
                    n(v, C.sibling),
                      (y = o(C, x.props.children)),
                      (y.return = v),
                      (v = y);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === wn &&
                    Vf(S) === C.type)
                ) {
                  n(v, C.sibling),
                    (y = o(C, x.props)),
                    (y.ref = zo(v, C, x)),
                    (y.return = v),
                    (v = y);
                  break e;
                }
                n(v, C);
                break;
              } else t(v, C);
              C = C.sibling;
            }
            x.type === Lr
              ? ((y = fr(x.props.children, v.mode, N, x.key)),
                (y.return = v),
                (v = y))
              : ((N = $i(x.type, x.key, x.props, null, v.mode, N)),
                (N.ref = zo(v, y, x)),
                (N.return = v),
                (v = N));
          }
          return i(v);
        case Dr:
          e: {
            for (C = x.key; y !== null; ) {
              if (y.key === C)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === x.containerInfo &&
                  y.stateNode.implementation === x.implementation
                ) {
                  n(v, y.sibling),
                    (y = o(y, x.children || [])),
                    (y.return = v),
                    (v = y);
                  break e;
                } else {
                  n(v, y);
                  break;
                }
              else t(v, y);
              y = y.sibling;
            }
            (y = Ul(x, v.mode, N)), (y.return = v), (v = y);
          }
          return i(v);
        case wn:
          return (C = x._init), b(v, y, C(x._payload), N);
      }
      if (Ho(x)) return w(v, y, x, N);
      if (Oo(x)) return g(v, y, x, N);
      mi(v, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        y !== null && y.tag === 6
          ? (n(v, y.sibling), (y = o(y, x)), (y.return = v), (v = y))
          : (n(v, y), (y = $l(x, v.mode, N)), (y.return = v), (v = y)),
        i(v))
      : n(v, y);
  }
  return b;
}
var vo = _h(!0),
  Ah = _h(!1),
  ia = Qn(null),
  aa = null,
  Hr = null,
  Vc = null;
function Wc() {
  Vc = Hr = aa = null;
}
function Hc(e) {
  var t = ia.current;
  ae(ia), (e._currentValue = t);
}
function Au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zr(e, t) {
  (aa = e),
    (Vc = Hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function pt(e) {
  var t = e._currentValue;
  if (Vc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
      if (aa === null) throw Error(M(308));
      (Hr = e), (aa.dependencies = { lanes: 0, firstContext: e });
    } else Hr = Hr.next = e;
  return t;
}
var or = null;
function Kc(e) {
  or === null ? (or = [e]) : or.push(e);
}
function Oh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Kc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    on(e, r)
  );
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var bn = !1;
function Gc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ih(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      on(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Kc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    on(e, n)
  );
}
function Oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _c(e, n);
  }
}
function Wf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function la(e, t, n, r) {
  var o = e.updateQueue;
  bn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), i === null ? (s = c) : (i.next = c), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = o.baseState;
    (i = 0), (d = c = u = null), (l = s);
    do {
      var h = l.lane,
        m = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            g = l;
          switch (((h = t), (m = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                f = w.call(m, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (h = typeof w == "function" ? w.call(m, f, h) : w),
                h == null)
              )
                break e;
              f = pe({}, f, h);
              break e;
            case 2:
              bn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (m = {
          eventTime: m,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = m), (u = f)) : (d = d.next = m),
          (i |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (vr |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Hf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var Us = {},
  Vt = Qn(Us),
  ys = Qn(Us),
  xs = Qn(Us);
function sr(e) {
  if (e === Us) throw Error(M(174));
  return e;
}
function Qc(e, t) {
  switch ((oe(xs, t), oe(ys, e), oe(Vt, Us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pu(t, e));
  }
  ae(Vt), oe(Vt, t);
}
function go() {
  ae(Vt), ae(ys), ae(xs);
}
function Dh(e) {
  sr(xs.current);
  var t = sr(Vt.current),
    n = pu(t, e.type);
  t !== n && (oe(ys, e), oe(Vt, n));
}
function Yc(e) {
  ys.current === e && (ae(Vt), ae(ys));
}
var de = Qn(0);
function ua(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ol = [];
function qc() {
  for (var e = 0; e < Ol.length; e++)
    Ol[e]._workInProgressVersionPrimary = null;
  Ol.length = 0;
}
var Ii = un.ReactCurrentDispatcher,
  Il = un.ReactCurrentBatchConfig,
  hr = 0,
  fe = null,
  Ce = null,
  ke = null,
  ca = !1,
  ts = !1,
  ws = 0,
  l1 = 0;
function Ae() {
  throw Error(M(321));
}
function Xc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function Zc(e, t, n, r, o, s) {
  if (
    ((hr = s),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ii.current = e === null || e.memoizedState === null ? f1 : p1),
    (e = n(r, o)),
    ts)
  ) {
    s = 0;
    do {
      if (((ts = !1), (ws = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (ke = Ce = null),
        (t.updateQueue = null),
        (Ii.current = m1),
        (e = n(r, o));
    } while (ts);
  }
  if (
    ((Ii.current = da),
    (t = Ce !== null && Ce.next !== null),
    (hr = 0),
    (ke = Ce = fe = null),
    (ca = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Jc() {
  var e = ws !== 0;
  return (ws = 0), e;
}
function Dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function mt() {
  if (Ce === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = ke === null ? fe.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ce = e);
  else {
    if (e === null) throw Error(M(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      u = null,
      c = s;
    do {
      var d = c.lane;
      if ((hr & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = f), (i = r)) : (u = u.next = f),
          (fe.lanes |= d),
          (vr |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (i = r) : (u.next = l),
      Rt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (fe.lanes |= s), (vr |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    Rt(s, t.memoizedState) || (Qe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Lh() {}
function Fh(e, t) {
  var n = fe,
    r = mt(),
    o = t(),
    s = !Rt(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Qe = !0)),
    (r = r.queue),
    ed(Uh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ns(9, $h.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(M(349));
    hr & 30 || zh(n, t, o);
  }
  return o;
}
function zh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $h(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bh(t) && Vh(e);
}
function Uh(e, t, n) {
  return n(function () {
    Bh(t) && Vh(e);
  });
}
function Bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function Vh(e) {
  var t = on(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function Kf(e) {
  var t = Dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = d1.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Ns(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wh() {
  return mt().memoizedState;
}
function Di(e, t, n, r) {
  var o = Dt();
  (fe.flags |= e),
    (o.memoizedState = Ns(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ia(e, t, n, r) {
  var o = mt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ce !== null) {
    var i = Ce.memoizedState;
    if (((s = i.destroy), r !== null && Xc(r, i.deps))) {
      o.memoizedState = Ns(t, n, s, r);
      return;
    }
  }
  (fe.flags |= e), (o.memoizedState = Ns(1 | t, n, s, r));
}
function Gf(e, t) {
  return Di(8390656, 8, e, t);
}
function ed(e, t) {
  return Ia(2048, 8, e, t);
}
function Hh(e, t) {
  return Ia(4, 2, e, t);
}
function Kh(e, t) {
  return Ia(4, 4, e, t);
}
function Gh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ia(4, 4, Gh.bind(null, t, e), n)
  );
}
function td() {}
function Yh(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qh(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xh(e, t, n) {
  return hr & 21
    ? (Rt(n, t) || ((n = nh()), (fe.lanes |= n), (vr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function u1(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Il.transition;
  Il.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Il.transition = r);
  }
}
function Zh() {
  return mt().memoizedState;
}
function c1(e, t, n) {
  var r = Fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jh(e))
  )
    ev(t, n);
  else if (((n = Oh(e, t, n, r)), n !== null)) {
    var o = Ue();
    Pt(n, e, r, o), tv(n, t, r);
  }
}
function d1(e, t, n) {
  var r = Fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jh(e)) ev(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Rt(l, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Kc(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Oh(e, t, o, r)),
      n !== null && ((o = Ue()), Pt(n, e, r, o), tv(n, t, r));
  }
}
function Jh(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function ev(e, t) {
  ts = ca = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _c(e, n);
  }
}
var da = {
    readContext: pt,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  f1 = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pt,
    useEffect: Gf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Di(4194308, 4, Gh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Di(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Di(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = c1.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kf,
    useDebugValue: td,
    useDeferredValue: function (e) {
      return (Dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kf(!1),
        t = e[0];
      return (e = u1.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        o = Dt();
      if (ue) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(M(349));
        hr & 30 || zh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        Gf(Uh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ns(9, $h.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dt(),
        t = Pe.identifierPrefix;
      if (ue) {
        var n = en,
          r = Jt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ws++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = l1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  p1 = {
    readContext: pt,
    useCallback: Yh,
    useContext: pt,
    useEffect: ed,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: qh,
    useReducer: Dl,
    useRef: Wh,
    useState: function () {
      return Dl(bs);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = mt();
      return Xh(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(bs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lh,
    useSyncExternalStore: Fh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  },
  m1 = {
    readContext: pt,
    useCallback: Yh,
    useContext: pt,
    useEffect: ed,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: qh,
    useReducer: Ll,
    useRef: Wh,
    useState: function () {
      return Ll(bs);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = mt();
      return Ce === null ? (t.memoizedState = e) : Xh(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(bs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lh,
    useSyncExternalStore: Fh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  };
function bt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ou(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Da = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      o = Fn(e),
      s = tn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Dn(e, s, o)),
      t !== null && (Pt(t, e, o, r), Oi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      o = Fn(e),
      s = tn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Dn(e, s, o)),
      t !== null && (Pt(t, e, o, r), Oi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = Fn(e),
      o = tn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Dn(e, o, r)),
      t !== null && (Pt(t, e, r, n), Oi(t, e, r));
  },
};
function Qf(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ms(n, r) || !ms(o, s)
      : !0
  );
}
function nv(e, t, n) {
  var r = !1,
    o = Bn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = pt(s))
      : ((o = qe(t) ? pr : Le.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? mo(e, o) : Bn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Da),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Yf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Da.enqueueReplaceState(t, t.state, null);
}
function Iu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Gc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = pt(s))
    : ((s = qe(t) ? pr : Le.current), (o.context = mo(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ou(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Da.enqueueReplaceState(o, o.state, null),
      la(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bx(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var h1 = typeof WeakMap == "function" ? WeakMap : Map;
function rv(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pa || ((pa = !0), (Ku = r)), Du(e, t);
    }),
    n
  );
}
function ov(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Du(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Du(e, t),
          typeof r != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function qf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new h1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = R1.bind(null, e, t, n)), t.then(e, e));
}
function Xf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tn(-1, 1)), (t.tag = 2), Dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var v1 = un.ReactCurrentOwner,
  Qe = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : vo(t, e.child, n, r);
}
function Jf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Zr(t, o),
    (r = Zc(e, t, n, r, s, o)),
    (n = Jc()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        sn(e, t, o))
      : (ue && n && $c(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function ep(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ud(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), sv(e, t, s, r, o))
      : ((e = $i(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ms), n(i, r) && e.ref === t.ref)
    )
      return sn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = zn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ms(s, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), sn(e, t, o);
  }
  return Lu(e, t, n, r, o);
}
function iv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Gr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Gr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        oe(Gr, Ze),
        (Ze |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Gr, Ze),
      (Ze |= r);
  return ze(e, t, o, n), t.child;
}
function av(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Lu(e, t, n, r, o) {
  var s = qe(n) ? pr : Le.current;
  return (
    (s = mo(t, s)),
    Zr(t, o),
    (n = Zc(e, t, n, r, s, o)),
    (r = Jc()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        sn(e, t, o))
      : (ue && r && $c(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function tp(e, t, n, r, o) {
  if (qe(n)) {
    var s = !0;
    ra(t);
  } else s = !1;
  if ((Zr(t, o), t.stateNode === null))
    Li(e, t), nv(t, n, r), Iu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = pt(c))
      : ((c = qe(n) ? pr : Le.current), (c = mo(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && Yf(t, i, r, c)),
      (bn = !1);
    var h = t.memoizedState;
    (i.state = h),
      la(t, r, i, o),
      (u = t.memoizedState),
      l !== r || h !== u || Ye.current || bn
        ? (typeof d == "function" && (Ou(t, n, d, r), (u = t.memoizedState)),
          (l = bn || Qf(t, n, l, r, h, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ih(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : bt(t.type, l)),
      (i.props = c),
      (f = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((u = qe(n) ? pr : Le.current), (u = mo(t, u)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || h !== u) && Yf(t, i, r, u)),
      (bn = !1),
      (h = t.memoizedState),
      (i.state = h),
      la(t, r, i, o);
    var w = t.memoizedState;
    l !== f || h !== w || Ye.current || bn
      ? (typeof m == "function" && (Ou(t, n, m, r), (w = t.memoizedState)),
        (c = bn || Qf(t, n, c, r, h, w, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fu(e, t, n, r, s, o);
}
function Fu(e, t, n, r, o, s) {
  av(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && $f(t, n, !1), sn(e, t, s);
  (r = t.stateNode), (v1.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = vo(t, e.child, null, s)), (t.child = vo(t, null, l, s)))
      : ze(e, t, l, s),
    (t.memoizedState = r.state),
    o && $f(t, n, !0),
    t.child
  );
}
function lv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zf(e, t.context, !1),
    Qc(e, t.containerInfo);
}
function np(e, t, n, r, o) {
  return ho(), Bc(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function $u(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uv(e, t, n) {
  var r = t.pendingProps,
    o = de.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(de, o & 1),
    e === null)
  )
    return (
      _u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = za(i, r, 0, null)),
              (e = fr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = $u(n)),
              (t.memoizedState = zu),
              e)
            : nd(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return g1(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = zn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = zn(l, s)) : ((s = fr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? $u(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = zu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = zn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nd(e, t) {
  return (
    (t = za({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hi(e, t, n, r) {
  return (
    r !== null && Bc(r),
    vo(t, e.child, null, n),
    (e = nd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function g1(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fl(Error(M(422)))), hi(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = za({ mode: "visible", children: r.children }, o, 0, null)),
        (s = fr(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && vo(t, e.child, null, i),
        (t.child.memoizedState = $u(i)),
        (t.memoizedState = zu),
        s);
  if (!(t.mode & 1)) return hi(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(M(419))), (r = Fl(s, r, void 0)), hi(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), Qe || l)) {
    if (((r = Pe), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), on(e, o), Pt(r, e, o, -1));
    }
    return ld(), (r = Fl(Error(M(421)))), hi(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = T1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (et = In(o.nextSibling)),
      (tt = t),
      (ue = !0),
      (jt = null),
      e !== null &&
        ((lt[ut++] = Jt),
        (lt[ut++] = en),
        (lt[ut++] = mr),
        (Jt = e.id),
        (en = e.overflow),
        (mr = t)),
      (t = nd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Au(e.return, t, n);
}
function zl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function cv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((ze(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rp(e, n, t);
        else if (e.tag === 19) rp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ua(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          zl(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ua(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        zl(t, !0, n, null, s);
        break;
      case "together":
        zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function y1(e, t, n) {
  switch (t.tag) {
    case 3:
      lv(t), ho();
      break;
    case 5:
      Dh(t);
      break;
    case 1:
      qe(t.type) && ra(t);
      break;
    case 4:
      Qc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(ia, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? uv(e, t, n)
          : (oe(de, de.current & 1),
            (e = sn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), iv(e, t, n);
  }
  return sn(e, t, n);
}
var dv, Uu, fv, pv;
dv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uu = function () {};
fv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), sr(Vt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = uu(e, o)), (r = uu(e, r)), (s = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = fu(e, o)), (r = fu(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ta);
    }
    mu(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (as.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                l[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (as.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && ie("scroll", e),
                  s || l === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
pv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $o(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function x1(e, t, n) {
  var r = t.pendingProps;
  switch ((Uc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return qe(t.type) && na(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        go(),
        ae(Ye),
        ae(Le),
        qc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Yu(jt), (jt = null)))),
        Uu(e, t),
        Oe(t),
        null
      );
    case 5:
      Yc(t);
      var o = sr(xs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Oe(t), null;
        }
        if (((e = sr(Vt.current)), pi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[$t] = t), (r[gs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Go.length; o++) ie(Go[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              ff(r, s), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              mf(r, s), ie("invalid", r);
          }
          mu(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      fi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      fi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : as.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              oi(r), pf(r, s, !0);
              break;
            case "textarea":
              oi(r), hf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ta);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Um(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[$t] = t),
            (e[gs] = r),
            dv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = hu(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Go.length; o++) ie(Go[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (o = r);
                break;
              case "details":
                ie("toggle", e), (o = r);
                break;
              case "input":
                ff(e, r), (o = uu(e, r)), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                mf(e, r), (o = fu(e, r)), ie("invalid", e);
                break;
              default:
                o = r;
            }
            mu(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var u = l[s];
                s === "style"
                  ? Wm(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Bm(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ls(e, u)
                    : typeof u == "number" && ls(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (as.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && ie("scroll", e)
                      : u != null && jc(e, s, u, i));
              }
            switch (n) {
              case "input":
                oi(e), pf(e, r, !1);
                break;
              case "textarea":
                oi(e), hf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Qr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Qr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ta);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) pv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = sr(xs.current)), sr(Vt.current), pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$t] = t),
            (s = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                fi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$t] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && et !== null && t.mode & 1 && !(t.flags & 128))
          Mh(), ho(), (t.flags |= 98560), (s = !1);
        else if (((s = pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[$t] = t;
          } else
            ho(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (s = !1);
        } else jt !== null && (Yu(jt), (jt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Ee === 0 && (Ee = 3) : ld())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        go(), Uu(e, t), e === null && hs(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return Hc(t.type._context), Oe(t), null;
    case 17:
      return qe(t.type) && na(), Oe(t), null;
    case 19:
      if ((ae(de), (s = t.memoizedState), s === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) $o(s, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ua(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    $o(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ne() > xo &&
            ((t.flags |= 128), (r = !0), $o(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ua(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $o(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !ue)
            )
              return Oe(t), null;
          } else
            2 * Ne() - s.renderingStartTime > xo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $o(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = de.current),
          oe(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        ad(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function w1(e, t) {
  switch ((Uc(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && na(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        go(),
        ae(Ye),
        ae(Le),
        qc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yc(t), null;
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        ho();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(de), null;
    case 4:
      return go(), null;
    case 10:
      return Hc(t.type._context), null;
    case 22:
    case 23:
      return ad(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vi = !1,
  De = !1,
  b1 = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Kr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Bu(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var op = !1;
function N1(e, t) {
  if (((Eu = Zi), (e = yh()), zc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (h = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === o && (l = i),
                h === s && ++d === r && (u = i),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ju = { focusedElem: e, selectionRange: n }, Zi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    b = w.memoizedState,
                    v = t.stateNode,
                    y = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : bt(t.type, g),
                      b
                    );
                  v.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (N) {
          ye(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (w = op), (op = !1), w;
}
function ns(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Bu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function La(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$t], delete t[gs], delete t[Ru], delete t[o1], delete t[s1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ta));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wu(e, t, n), e = e.sibling; e !== null; ) Wu(e, t, n), (e = e.sibling);
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), (e = e.sibling);
}
var Re = null,
  Et = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) vv(e, t, n), (n = n.sibling);
}
function vv(e, t, n) {
  if (Bt && typeof Bt.onCommitFiberUnmount == "function")
    try {
      Bt.onCommitFiberUnmount(Ra, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || Kr(n, t);
    case 6:
      var r = Re,
        o = Et;
      (Re = null),
        hn(e, t, n),
        (Re = r),
        (Et = o),
        Re !== null &&
          (Et
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (Et
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            fs(e))
          : _l(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (o = Et),
        (Re = n.stateNode.containerInfo),
        (Et = !0),
        hn(e, t, n),
        (Re = r),
        (Et = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Bu(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (Kr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ye(n, t, l);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), hn(e, t, n), (De = r))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function ip(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new b1()),
      t.forEach(function (r) {
        var o = M1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Re = l.stateNode), (Et = !1);
              break e;
            case 3:
              (Re = l.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Re = l.stateNode.containerInfo), (Et = !0);
              break e;
          }
          l = l.return;
        }
        if (Re === null) throw Error(M(160));
        vv(s, i, o), (Re = null), (Et = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (c) {
        ye(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gv(t, e), (t = t.sibling);
}
function gv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xt(t, e), It(e), r & 4)) {
        try {
          ns(3, e, e.return), La(3, e);
        } catch (g) {
          ye(e, e.return, g);
        }
        try {
          ns(5, e, e.return);
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 1:
      xt(t, e), It(e), r & 512 && n !== null && Kr(n, n.return);
      break;
    case 5:
      if (
        (xt(t, e),
        It(e),
        r & 512 && n !== null && Kr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ls(o, "");
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && zm(o, s),
              hu(l, i);
            var c = hu(l, s);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                f = u[i + 1];
              d === "style"
                ? Wm(o, f)
                : d === "dangerouslySetInnerHTML"
                ? Bm(o, f)
                : d === "children"
                ? ls(o, f)
                : jc(o, d, f, c);
            }
            switch (l) {
              case "input":
                cu(o, s);
                break;
              case "textarea":
                $m(o, s);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Qr(o, !!s.multiple, m, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Qr(o, !!s.multiple, s.defaultValue, !0)
                      : Qr(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[gs] = s;
          } catch (g) {
            ye(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((xt(t, e), It(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (xt(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fs(t.containerInfo);
        } catch (g) {
          ye(e, e.return, g);
        }
      break;
    case 4:
      xt(t, e), It(e);
      break;
    case 13:
      xt(t, e),
        It(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sd = Ne())),
        r & 4 && ip(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (c = De) || d), xt(t, e), (De = c)) : xt(t, e),
        It(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (f = L = d; L !== null; ) {
              switch (((h = L), (m = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, h, h.return);
                  break;
                case 1:
                  Kr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      ye(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Kr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    lp(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = h), (L = m)) : lp(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Vm("display", i)));
              } catch (g) {
                ye(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                ye(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      xt(t, e), It(e), r & 4 && ip(e);
      break;
    case 21:
      break;
    default:
      xt(t, e), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ls(o, ""), (r.flags &= -33));
          var s = sp(e);
          Hu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = sp(e);
          Wu(e, l, i);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      ye(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function S1(e, t, n) {
  (L = e), yv(e);
}
function yv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || vi;
      if (!i) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || De;
        l = vi;
        var c = De;
        if (((vi = i), (De = u) && !c))
          for (L = o; L !== null; )
            (i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? up(o)
                : u !== null
                ? ((u.return = i), (L = u))
                : up(o);
        for (; s !== null; ) (L = s), yv(s), (s = s.sibling);
        (L = o), (vi = l), (De = c);
      }
      ap(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (L = s)) : ap(e);
  }
}
function ap(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || La(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Hf(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hf(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && fs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        De || (t.flags & 512 && Vu(t));
      } catch (h) {
        ye(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function lp(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function up(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            La(4, t);
          } catch (u) {
            ye(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ye(t, o, u);
            }
          }
          var s = t.return;
          try {
            Vu(t);
          } catch (u) {
            ye(t, s, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Vu(t);
          } catch (u) {
            ye(t, i, u);
          }
      }
    } catch (u) {
      ye(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var C1 = Math.ceil,
  fa = un.ReactCurrentDispatcher,
  rd = un.ReactCurrentOwner,
  dt = un.ReactCurrentBatchConfig,
  ee = 0,
  Pe = null,
  Se = null,
  Te = 0,
  Ze = 0,
  Gr = Qn(0),
  Ee = 0,
  Ss = null,
  vr = 0,
  Fa = 0,
  od = 0,
  rs = null,
  Ge = null,
  sd = 0,
  xo = 1 / 0,
  qt = null,
  pa = !1,
  Ku = null,
  Ln = null,
  gi = !1,
  Tn = null,
  ma = 0,
  os = 0,
  Gu = null,
  Fi = -1,
  zi = 0;
function Ue() {
  return ee & 6 ? Ne() : Fi !== -1 ? Fi : (Fi = Ne());
}
function Fn(e) {
  return e.mode & 1
    ? ee & 2 && Te !== 0
      ? Te & -Te
      : a1.transition !== null
      ? (zi === 0 && (zi = nh()), zi)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uh(e.type))),
        e)
    : 1;
}
function Pt(e, t, n, r) {
  if (50 < os) throw ((os = 0), (Gu = null), Error(M(185)));
  Fs(e, n, r),
    (!(ee & 2) || e !== Pe) &&
      (e === Pe && (!(ee & 2) && (Fa |= n), Ee === 4 && Sn(e, Te)),
      Xe(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((xo = Ne() + 500), Oa && Yn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  aw(e, t);
  var r = Xi(e, e === Pe ? Te : 0);
  if (r === 0)
    n !== null && yf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yf(n), t === 1))
      e.tag === 0 ? i1(cp.bind(null, e)) : Ph(cp.bind(null, e)),
        n1(function () {
          !(ee & 6) && Yn();
        }),
        (n = null);
    else {
      switch (rh(r)) {
        case 1:
          n = Mc;
          break;
        case 4:
          n = eh;
          break;
        case 16:
          n = qi;
          break;
        case 536870912:
          n = th;
          break;
        default:
          n = qi;
      }
      n = jv(n, xv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xv(e, t) {
  if (((Fi = -1), (zi = 0), ee & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Jr() && e.callbackNode !== n) return null;
  var r = Xi(e, e === Pe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ha(e, r);
  else {
    t = r;
    var o = ee;
    ee |= 2;
    var s = bv();
    (Pe !== e || Te !== t) && ((qt = null), (xo = Ne() + 500), dr(e, t));
    do
      try {
        k1();
        break;
      } catch (l) {
        wv(e, l);
      }
    while (!0);
    Wc(),
      (fa.current = s),
      (ee = o),
      Se !== null ? (t = 0) : ((Pe = null), (Te = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = wu(e)), o !== 0 && ((r = o), (t = Qu(e, o)))), t === 1)
    )
      throw ((n = Ss), dr(e, 0), Sn(e, r), Xe(e, Ne()), n);
    if (t === 6) Sn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !E1(o) &&
          ((t = ha(e, r)),
          t === 2 && ((s = wu(e)), s !== 0 && ((r = s), (t = Qu(e, s)))),
          t === 1))
      )
        throw ((n = Ss), dr(e, 0), Sn(e, r), Xe(e, Ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          tr(e, Ge, qt);
          break;
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = sd + 500 - Ne()), 10 < t))
          ) {
            if (Xi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Pu(tr.bind(null, e, Ge, qt), t);
            break;
          }
          tr(e, Ge, qt);
          break;
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - kt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * C1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pu(tr.bind(null, e, Ge, qt), r);
            break;
          }
          tr(e, Ge, qt);
          break;
        case 5:
          tr(e, Ge, qt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Xe(e, Ne()), e.callbackNode === n ? xv.bind(null, e) : null;
}
function Qu(e, t) {
  var n = rs;
  return (
    e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256),
    (e = ha(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && Yu(t)),
    e
  );
}
function Yu(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function E1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Sn(e, t) {
  for (
    t &= ~od,
      t &= ~Fa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cp(e) {
  if (ee & 6) throw Error(M(327));
  Jr();
  var t = Xi(e, 0);
  if (!(t & 1)) return Xe(e, Ne()), null;
  var n = ha(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wu(e);
    r !== 0 && ((t = r), (n = Qu(e, r)));
  }
  if (n === 1) throw ((n = Ss), dr(e, 0), Sn(e, t), Xe(e, Ne()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, Ge, qt),
    Xe(e, Ne()),
    null
  );
}
function id(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((xo = Ne() + 500), Oa && Yn());
  }
}
function gr(e) {
  Tn !== null && Tn.tag === 0 && !(ee & 6) && Jr();
  var t = ee;
  ee |= 1;
  var n = dt.transition,
    r = ne;
  try {
    if (((dt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (dt.transition = n), (ee = t), !(ee & 6) && Yn();
  }
}
function ad() {
  (Ze = Gr.current), ae(Gr);
}
function dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), t1(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n;
      switch ((Uc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && na();
          break;
        case 3:
          go(), ae(Ye), ae(Le), qc();
          break;
        case 5:
          Yc(r);
          break;
        case 4:
          go();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          Hc(r.type._context);
          break;
        case 22:
        case 23:
          ad();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Se = e = zn(e.current, null)),
    (Te = Ze = t),
    (Ee = 0),
    (Ss = null),
    (od = Fa = vr = 0),
    (Ge = rs = null),
    or !== null)
  ) {
    for (t = 0; t < or.length; t++)
      if (((n = or[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    or = null;
  }
  return e;
}
function wv(e, t) {
  do {
    var n = Se;
    try {
      if ((Wc(), (Ii.current = da), ca)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ca = !1;
      }
      if (
        ((hr = 0),
        (ke = Ce = fe = null),
        (ts = !1),
        (ws = 0),
        (rd.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (Ss = t), (Se = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          u = t;
        if (
          ((t = Te),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = Xf(i);
          if (m !== null) {
            (m.flags &= -257),
              Zf(m, i, l, s, t),
              m.mode & 1 && qf(s, c, t),
              (t = m),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              qf(s, c, t), ld();
              break e;
            }
            u = Error(M(426));
          }
        } else if (ue && l.mode & 1) {
          var b = Xf(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Zf(b, i, l, s, t),
              Bc(yo(u, l));
            break e;
          }
        }
        (s = u = yo(u, l)),
          Ee !== 4 && (Ee = 2),
          rs === null ? (rs = [s]) : rs.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = rv(s, u, t);
              Wf(s, v);
              break e;
            case 1:
              l = u;
              var y = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(x))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var N = ov(s, l, t);
                Wf(s, N);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Sv(n);
    } catch (S) {
      (t = S), Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bv() {
  var e = fa.current;
  return (fa.current = da), e === null ? da : e;
}
function ld() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Pe === null || (!(vr & 268435455) && !(Fa & 268435455)) || Sn(Pe, Te);
}
function ha(e, t) {
  var n = ee;
  ee |= 2;
  var r = bv();
  (Pe !== e || Te !== t) && ((qt = null), dr(e, t));
  do
    try {
      j1();
      break;
    } catch (o) {
      wv(e, o);
    }
  while (!0);
  if ((Wc(), (ee = n), (fa.current = r), Se !== null)) throw Error(M(261));
  return (Pe = null), (Te = 0), Ee;
}
function j1() {
  for (; Se !== null; ) Nv(Se);
}
function k1() {
  for (; Se !== null && !Zx(); ) Nv(Se);
}
function Nv(e) {
  var t = Ev(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sv(e) : (Se = t),
    (rd.current = null);
}
function Sv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = w1(n, t)), n !== null)) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (Se = null);
        return;
      }
    } else if (((n = x1(n, t, Ze)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function tr(e, t, n) {
  var r = ne,
    o = dt.transition;
  try {
    (dt.transition = null), (ne = 1), P1(e, t, n, r);
  } finally {
    (dt.transition = o), (ne = r);
  }
  return null;
}
function P1(e, t, n, r) {
  do Jr();
  while (Tn !== null);
  if (ee & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (lw(e, s),
    e === Pe && ((Se = Pe = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gi ||
      ((gi = !0),
      jv(qi, function () {
        return Jr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var i = ne;
    ne = 1;
    var l = ee;
    (ee |= 4),
      (rd.current = null),
      N1(e, n),
      gv(n, e),
      Qw(ju),
      (Zi = !!Eu),
      (ju = Eu = null),
      (e.current = n),
      S1(n),
      Jx(),
      (ee = l),
      (ne = i),
      (dt.transition = s);
  } else e.current = n;
  if (
    (gi && ((gi = !1), (Tn = e), (ma = o)),
    (s = e.pendingLanes),
    s === 0 && (Ln = null),
    nw(n.stateNode),
    Xe(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (pa) throw ((pa = !1), (e = Ku), (Ku = null), e);
  return (
    ma & 1 && e.tag !== 0 && Jr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Gu ? os++ : ((os = 0), (Gu = e))) : (os = 0),
    Yn(),
    null
  );
}
function Jr() {
  if (Tn !== null) {
    var e = rh(ma),
      t = dt.transition,
      n = ne;
    try {
      if (((dt.transition = null), (ne = 16 > e ? 16 : e), Tn === null))
        var r = !1;
      else {
        if (((e = Tn), (Tn = null), (ma = 0), ee & 6)) throw Error(M(331));
        var o = ee;
        for (ee |= 4, L = e.current; L !== null; ) {
          var s = L,
            i = s.child;
          if (L.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (L = c; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        m = d.return;
                      if ((mv(d), d === c)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = m), (L = h);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (L = i);
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ns(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (L = v);
                break e;
              }
              L = s.return;
            }
        }
        var y = e.current;
        for (L = y; L !== null; ) {
          i = L;
          var x = i.child;
          if (i.subtreeFlags & 2064 && x !== null) (x.return = i), (L = x);
          else
            e: for (i = y; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      La(9, l);
                  }
                } catch (S) {
                  ye(l, l.return, S);
                }
              if (l === i) {
                L = null;
                break e;
              }
              var N = l.sibling;
              if (N !== null) {
                (N.return = l.return), (L = N);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((ee = o), Yn(), Bt && typeof Bt.onPostCommitFiberRoot == "function")
        )
          try {
            Bt.onPostCommitFiberRoot(Ra, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (dt.transition = t);
    }
  }
  return !1;
}
function dp(e, t, n) {
  (t = yo(n, t)),
    (t = rv(e, t, 1)),
    (e = Dn(e, t, 1)),
    (t = Ue()),
    e !== null && (Fs(e, 1, t), Xe(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) dp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(r)))
        ) {
          (e = yo(n, e)),
            (e = ov(t, e, 1)),
            (t = Dn(t, e, 1)),
            (e = Ue()),
            t !== null && (Fs(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function R1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Te & n) === n &&
      (Ee === 4 || (Ee === 3 && (Te & 130023424) === Te && 500 > Ne() - sd)
        ? dr(e, 0)
        : (od |= n)),
    Xe(e, t);
}
function Cv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = Ue();
  (e = on(e, t)), e !== null && (Fs(e, t, n), Xe(e, n));
}
function T1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cv(e, n);
}
function M1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Cv(e, n);
}
var Ev;
Ev = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), y1(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), ue && t.flags & 1048576 && Rh(t, sa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Li(e, t), (e = t.pendingProps);
      var o = mo(t, Le.current);
      Zr(t, n), (o = Zc(null, t, r, e, o, n));
      var s = Jc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((s = !0), ra(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gc(t),
            (o.updater = Da),
            (t.stateNode = o),
            (o._reactInternals = t),
            Iu(t, r, e, n),
            (t = Fu(null, t, r, !0, s, n)))
          : ((t.tag = 0), ue && s && $c(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Li(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = A1(r)),
          (e = bt(r, e)),
          o)
        ) {
          case 0:
            t = Lu(null, t, r, e, n);
            break e;
          case 1:
            t = tp(null, t, r, e, n);
            break e;
          case 11:
            t = Jf(null, t, r, e, n);
            break e;
          case 14:
            t = ep(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Lu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        tp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((lv(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Ih(e, t),
          la(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = yo(Error(M(423)), t)), (t = np(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = yo(Error(M(424)), t)), (t = np(e, t, r, n, o));
            break e;
          } else
            for (
              et = In(t.stateNode.containerInfo.firstChild),
                tt = t,
                ue = !0,
                jt = null,
                n = Ah(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ho(), r === o)) {
            t = sn(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dh(t),
        e === null && _u(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ku(r, o) ? (i = null) : s !== null && ku(r, s) && (t.flags |= 32),
        av(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && _u(t), null;
    case 13:
      return uv(e, t, n);
    case 4:
      return (
        Qc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vo(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Jf(e, t, r, o, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          oe(ia, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Rt(s.value, i)) {
            if (s.children === o.children && !Ye.current) {
              t = sn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = tn(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Au(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(M(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Au(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zr(t, n),
        (o = pt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = bt(r, t.pendingProps)),
        (o = bt(r.type, o)),
        ep(e, t, r, o, n)
      );
    case 15:
      return sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Li(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), ra(t)) : (e = !1),
        Zr(t, n),
        nv(t, r, o),
        Iu(t, r, o, n),
        Fu(null, t, r, !0, e, n)
      );
    case 19:
      return cv(e, t, n);
    case 22:
      return iv(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function jv(e, t) {
  return Jm(e, t);
}
function _1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new _1(e, t, n, r);
}
function ud(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function A1(e) {
  if (typeof e == "function") return ud(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pc)) return 11;
    if (e === Rc) return 14;
  }
  return 2;
}
function zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $i(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) ud(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Lr:
        return fr(n.children, o, s, t);
      case kc:
        (i = 8), (o |= 8);
        break;
      case su:
        return (
          (e = ct(12, n, t, o | 2)), (e.elementType = su), (e.lanes = s), e
        );
      case iu:
        return (e = ct(13, n, t, o)), (e.elementType = iu), (e.lanes = s), e;
      case au:
        return (e = ct(19, n, t, o)), (e.elementType = au), (e.lanes = s), e;
      case Dm:
        return za(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Om:
              i = 10;
              break e;
            case Im:
              i = 9;
              break e;
            case Pc:
              i = 11;
              break e;
            case Rc:
              i = 14;
              break e;
            case wn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function fr(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function za(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = Dm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $l(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function Ul(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function cd(e, t, n, r, o, s, i, l, u) {
  return (
    (e = new O1(e, t, n, l, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gc(s),
    e
  );
}
function I1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kv(e) {
  if (!e) return Bn;
  e = e._reactInternals;
  e: {
    if (wr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return kh(e, n, t);
  }
  return t;
}
function Pv(e, t, n, r, o, s, i, l, u) {
  return (
    (e = cd(n, r, !0, e, o, s, i, l, u)),
    (e.context = kv(null)),
    (n = e.current),
    (r = Ue()),
    (o = Fn(n)),
    (s = tn(r, o)),
    (s.callback = t ?? null),
    Dn(n, s, o),
    (e.current.lanes = o),
    Fs(e, o, r),
    Xe(e, r),
    e
  );
}
function $a(e, t, n, r) {
  var o = t.current,
    s = Ue(),
    i = Fn(o);
  return (
    (n = kv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dn(o, t, i)),
    e !== null && (Pt(e, o, i, s), Oi(e, o, i)),
    i
  );
}
function va(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dd(e, t) {
  fp(e, t), (e = e.alternate) && fp(e, t);
}
function D1() {
  return null;
}
var Rv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fd(e) {
  this._internalRoot = e;
}
Ua.prototype.render = fd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  $a(e, t, null, null);
};
Ua.prototype.unmount = fd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gr(function () {
      $a(null, e, null, null);
    }),
      (t[rn] = null);
  }
};
function Ua(e) {
  this._internalRoot = e;
}
Ua.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ih();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++);
    Nn.splice(n, 0, e), n === 0 && lh(e);
  }
};
function pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ba(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pp() {}
function L1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = va(i);
        s.call(c);
      };
    }
    var i = Pv(t, r, e, 0, null, !1, !1, "", pp);
    return (
      (e._reactRootContainer = i),
      (e[rn] = i.current),
      hs(e.nodeType === 8 ? e.parentNode : e),
      gr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = va(u);
      l.call(c);
    };
  }
  var u = cd(e, 0, !1, null, null, !1, !1, "", pp);
  return (
    (e._reactRootContainer = u),
    (e[rn] = u.current),
    hs(e.nodeType === 8 ? e.parentNode : e),
    gr(function () {
      $a(t, u, n, r);
    }),
    u
  );
}
function Va(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var u = va(i);
        l.call(u);
      };
    }
    $a(t, i, e, o);
  } else i = L1(n, t, e, o, r);
  return va(i);
}
oh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ko(t.pendingLanes);
        n !== 0 &&
          (_c(t, n | 1), Xe(t, Ne()), !(ee & 6) && ((xo = Ne() + 500), Yn()));
      }
      break;
    case 13:
      gr(function () {
        var r = on(e, 1);
        if (r !== null) {
          var o = Ue();
          Pt(r, e, 1, o);
        }
      }),
        dd(e, 1);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = Ue();
      Pt(t, e, 134217728, n);
    }
    dd(e, 134217728);
  }
};
sh = function (e) {
  if (e.tag === 13) {
    var t = Fn(e),
      n = on(e, t);
    if (n !== null) {
      var r = Ue();
      Pt(n, e, t, r);
    }
    dd(e, t);
  }
};
ih = function () {
  return ne;
};
ah = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
gu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Aa(r);
            if (!o) throw Error(M(90));
            Fm(r), cu(r, o);
          }
        }
      }
      break;
    case "textarea":
      $m(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qr(e, !!n.multiple, t, !1);
  }
};
Gm = id;
Qm = gr;
var F1 = { usingClientEntryPoint: !1, Events: [$s, Ur, Aa, Hm, Km, id] },
  Uo = {
    findFiberByHostInstance: rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  z1 = {
    bundleType: Uo.bundleType,
    version: Uo.version,
    rendererPackageName: Uo.rendererPackageName,
    rendererConfig: Uo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Uo.findFiberByHostInstance || D1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yi.isDisabled && yi.supportsFiber)
    try {
      (Ra = yi.inject(z1)), (Bt = yi);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F1;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pd(t)) throw Error(M(200));
  return I1(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!pd(e)) throw Error(M(299));
  var n = !1,
    r = "",
    o = Rv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cd(e, 1, !1, null, null, n, !1, r, o)),
    (e[rn] = t.current),
    hs(e.nodeType === 8 ? e.parentNode : e),
    new fd(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Xm(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return gr(e);
};
ot.hydrate = function (e, t, n) {
  if (!Ba(t)) throw Error(M(200));
  return Va(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!pd(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Rv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Pv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[rn] = t.current),
    hs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ua(t);
};
ot.render = function (e, t, n) {
  if (!Ba(t)) throw Error(M(200));
  return Va(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!Ba(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (gr(function () {
        Va(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rn] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = id;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ba(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Va(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function Tv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv);
    } catch (e) {
      console.error(e);
    }
}
Tv(), (Tm.exports = ot);
var Bs = Tm.exports;
const md = gm(Bs);
var Mv,
  mp = Bs;
(Mv = mp.createRoot), mp.hydrateRoot;
const $1 = 1,
  U1 = 1e6;
let Bl = 0;
function B1() {
  return (Bl = (Bl + 1) % Number.MAX_SAFE_INTEGER), Bl.toString();
}
const Vl = new Map(),
  hp = (e) => {
    if (Vl.has(e)) return;
    const t = setTimeout(() => {
      Vl.delete(e), ss({ type: "REMOVE_TOAST", toastId: e });
    }, U1);
    Vl.set(e, t);
  },
  V1 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, $1) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? hp(n)
            : e.toasts.forEach((r) => {
                hp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ui = [];
let Bi = { toasts: [] };
function ss(e) {
  (Bi = V1(Bi, e)),
    Ui.forEach((t) => {
      t(Bi);
    });
}
function W1({ ...e }) {
  const t = B1(),
    n = (o) => ss({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => ss({ type: "DISMISS_TOAST", toastId: t });
  return (
    ss({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function H1() {
  const [e, t] = p.useState(Bi);
  return (
    p.useEffect(
      () => (
        Ui.push(t),
        () => {
          const n = Ui.indexOf(t);
          n > -1 && Ui.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: W1,
      dismiss: (n) => ss({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function vp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Vs(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = vp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : vp(e[o], null);
        }
      };
  };
}
function me(...e) {
  return p.useCallback(Vs(...e), e);
}
function qn(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = p.createContext(i),
      u = n.length;
    n = [...n, i];
    const c = (f) => {
      var v;
      const { scope: h, children: m, ...w } = f,
        g = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[u]) || l,
        b = p.useMemo(() => w, Object.values(w));
      return a.jsx(g.Provider, { value: b, children: m });
    };
    c.displayName = s + "Provider";
    function d(f, h) {
      var g;
      const m = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[u]) || l,
        w = p.useContext(m);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = n.map((i) => p.createContext(i));
    return function (l) {
      const u = (l == null ? void 0 : l[e]) || s;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: u } }), [l, u]);
    };
  };
  return (o.scopeName = e), [r, K1(o, ...t)];
}
function K1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: u, scopeName: c }) => {
        const f = u(s)[`__scope${c}`];
        return { ...l, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Cs = p.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = p.Children.toArray(n),
    s = o.find(G1);
  if (s) {
    const i = s.props.children,
      l = o.map((u) =>
        u === s
          ? p.Children.count(i) > 1
            ? p.Children.only(null)
            : p.isValidElement(i)
            ? i.props.children
            : null
          : u
      );
    return a.jsx(qu, {
      ...r,
      ref: t,
      children: p.isValidElement(i) ? p.cloneElement(i, void 0, l) : null,
    });
  }
  return a.jsx(qu, { ...r, ref: t, children: n });
});
Cs.displayName = "Slot";
var qu = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (p.isValidElement(n)) {
    const o = Y1(n),
      s = Q1(r, n.props);
    return (
      n.type !== p.Fragment && (s.ref = t ? Vs(t, o) : o), p.cloneElement(n, s)
    );
  }
  return p.Children.count(n) > 1 ? p.Children.only(null) : null;
});
qu.displayName = "SlotClone";
var _v = ({ children: e }) => a.jsx(a.Fragment, { children: e });
function G1(e) {
  return p.isValidElement(e) && e.type === _v;
}
function Q1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            s(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Y1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ws(e) {
  const t = e + "CollectionProvider",
    [n, r] = qn(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (m) => {
      const { scope: w, children: g } = m,
        b = A.useRef(null),
        v = A.useRef(new Map()).current;
      return a.jsx(o, { scope: w, itemMap: v, collectionRef: b, children: g });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    u = A.forwardRef((m, w) => {
      const { scope: g, children: b } = m,
        v = s(l, g),
        y = me(w, v.collectionRef);
      return a.jsx(Cs, { ref: y, children: b });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = A.forwardRef((m, w) => {
      const { scope: g, children: b, ...v } = m,
        y = A.useRef(null),
        x = me(w, y),
        N = s(c, g);
      return (
        A.useEffect(
          () => (
            N.itemMap.set(y, { ref: y, ...v }), () => void N.itemMap.delete(y)
          )
        ),
        a.jsx(Cs, { [d]: "", ref: x, children: b })
      );
    });
  f.displayName = c;
  function h(m) {
    const w = s(e + "CollectionConsumer", m);
    return A.useCallback(() => {
      const b = w.collectionRef.current;
      if (!b) return [];
      const v = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (N, S) => v.indexOf(N.ref.current) - v.indexOf(S.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: f }, h, r];
}
var q1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  J = q1.reduce((e, t) => {
    const n = p.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        l = s ? Cs : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(l, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Es(e, t) {
  e && Bs.flushSync(() => e.dispatchEvent(t));
}
function xe(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    p.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function X1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Z1 = "DismissableLayer",
  Xu = "dismissableLayer.update",
  J1 = "dismissableLayer.pointerDownOutside",
  eb = "dismissableLayer.focusOutside",
  gp,
  Av = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Hs = p.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...u
      } = e,
      c = p.useContext(Av),
      [d, f] = p.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = p.useState({}),
      w = me(t, (E) => f(E)),
      g = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = g.indexOf(b),
      y = d ? g.indexOf(d) : -1,
      x = c.layersWithOutsidePointerEventsDisabled.size > 0,
      N = y >= v,
      S = nb((E) => {
        const k = E.target,
          T = [...c.branches].some((_) => _.contains(k));
        !N ||
          T ||
          (o == null || o(E),
          i == null || i(E),
          E.defaultPrevented || l == null || l());
      }, h),
      C = rb((E) => {
        const k = E.target;
        [...c.branches].some((_) => _.contains(k)) ||
          (s == null || s(E),
          i == null || i(E),
          E.defaultPrevented || l == null || l());
      }, h);
    return (
      X1((E) => {
        y === c.layers.size - 1 &&
          (r == null || r(E),
          !E.defaultPrevented && l && (E.preventDefault(), l()));
      }, h),
      p.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((gp = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            yp(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = gp);
            }
          );
      }, [d, h, n, c]),
      p.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            yp());
        },
        [d, c]
      ),
      p.useEffect(() => {
        const E = () => m({});
        return (
          document.addEventListener(Xu, E),
          () => document.removeEventListener(Xu, E)
        );
      }, []),
      a.jsx(J.div, {
        ...u,
        ref: w,
        style: {
          pointerEvents: x ? (N ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: F(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: F(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Hs.displayName = Z1;
var tb = "DismissableLayerBranch",
  Ov = p.forwardRef((e, t) => {
    const n = p.useContext(Av),
      r = p.useRef(null),
      o = me(t, r);
    return (
      p.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      a.jsx(J.div, { ...e, ref: o })
    );
  });
Ov.displayName = tb;
function nb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e),
    r = p.useRef(!1),
    o = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let u = function () {
              Iv(J1, n, c, { discrete: !0 });
            };
            const c = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function rb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e),
    r = p.useRef(!1);
  return (
    p.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Iv(eb, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function yp() {
  const e = new CustomEvent(Xu);
  document.dispatchEvent(e);
}
function Iv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Es(o, s) : o.dispatchEvent(s);
}
var ob = Hs,
  sb = Ov,
  Tt = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {},
  ib = "Portal",
  hd = p.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = p.useState(!1);
    Tt(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? md.createPortal(a.jsx(J.div, { ...r, ref: t }), i) : null;
  });
hd.displayName = ib;
function ab(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var At = (e) => {
  const { present: t, children: n } = e,
    r = lb(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n),
    s = me(r.ref, ub(o));
  return typeof n == "function" || r.isPresent
    ? p.cloneElement(o, { ref: s })
    : null;
};
At.displayName = "Presence";
function lb(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    o = p.useRef(e),
    s = p.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, u] = ab(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    p.useEffect(() => {
      const c = xi(r.current);
      s.current = l === "mounted" ? c : "none";
    }, [l]),
    Tt(() => {
      const c = r.current,
        d = o.current;
      if (d !== e) {
        const h = s.current,
          m = xi(c);
        e
          ? u("MOUNT")
          : m === "none" || (c == null ? void 0 : c.display) === "none"
          ? u("UNMOUNT")
          : u(d && h !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    Tt(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          f = (m) => {
            const g = xi(r.current).includes(m.animationName);
            if (m.target === t && g && (u("ANIMATION_END"), !o.current)) {
              const b = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                }));
            }
          },
          h = (m) => {
            m.target === t && (s.current = xi(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(c),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: p.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function xi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ub(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ks({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = cb({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    l = xe(n),
    u = p.useCallback(
      (c) => {
        if (s) {
          const f = typeof c == "function" ? c(e) : c;
          f !== e && l(f);
        } else o(c);
      },
      [s, e, o, l]
    );
  return [i, u];
}
function cb({ defaultProp: e, onChange: t }) {
  const n = p.useState(e),
    [r] = n,
    o = p.useRef(r),
    s = xe(t);
  return (
    p.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
var db = "VisuallyHidden",
  Wa = p.forwardRef((e, t) =>
    a.jsx(J.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Wa.displayName = db;
var Dv = Wa,
  vd = "ToastProvider",
  [gd, fb, pb] = Ws("Toast"),
  [Lv, sP] = qn("Toast", [pb]),
  [mb, Ha] = Lv(vd),
  Fv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [l, u] = p.useState(null),
      [c, d] = p.useState(0),
      f = p.useRef(!1),
      h = p.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${vd}\`. Expected non-empty \`string\`.`
        ),
      a.jsx(gd.Provider, {
        scope: t,
        children: a.jsx(mb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: c,
          viewport: l,
          onViewportChange: u,
          onToastAdd: p.useCallback(() => d((m) => m + 1), []),
          onToastRemove: p.useCallback(() => d((m) => m - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: i,
        }),
      })
    );
  };
Fv.displayName = vd;
var zv = "ToastViewport",
  hb = ["F8"],
  Zu = "toast.viewportPause",
  Ju = "toast.viewportResume",
  $v = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = hb,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = Ha(zv, n),
      l = fb(n),
      u = p.useRef(null),
      c = p.useRef(null),
      d = p.useRef(null),
      f = p.useRef(null),
      h = me(t, f, i.onViewportChange),
      m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = i.toastCount > 0;
    p.useEffect(() => {
      const b = (v) => {
        var x;
        r.length !== 0 &&
          r.every((N) => v[N] || v.code === N) &&
          ((x = f.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      p.useEffect(() => {
        const b = u.current,
          v = f.current;
        if (w && b && v) {
          const y = () => {
              if (!i.isClosePausedRef.current) {
                const C = new CustomEvent(Zu);
                v.dispatchEvent(C), (i.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (i.isClosePausedRef.current) {
                const C = new CustomEvent(Ju);
                v.dispatchEvent(C), (i.isClosePausedRef.current = !1);
              }
            },
            N = (C) => {
              !b.contains(C.relatedTarget) && x();
            },
            S = () => {
              b.contains(document.activeElement) || x();
            };
          return (
            b.addEventListener("focusin", y),
            b.addEventListener("focusout", N),
            b.addEventListener("pointermove", y),
            b.addEventListener("pointerleave", S),
            window.addEventListener("blur", y),
            window.addEventListener("focus", x),
            () => {
              b.removeEventListener("focusin", y),
                b.removeEventListener("focusout", N),
                b.removeEventListener("pointermove", y),
                b.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", y),
                window.removeEventListener("focus", x);
            }
          );
        }
      }, [w, i.isClosePausedRef]);
    const g = p.useCallback(
      ({ tabbingDirection: b }) => {
        const y = l().map((x) => {
          const N = x.ref.current,
            S = [N, ...Pb(N)];
          return b === "forwards" ? S : S.reverse();
        });
        return (b === "forwards" ? y.reverse() : y).flat();
      },
      [l]
    );
    return (
      p.useEffect(() => {
        const b = f.current;
        if (b) {
          const v = (y) => {
            var S, C, E;
            const x = y.altKey || y.ctrlKey || y.metaKey;
            if (y.key === "Tab" && !x) {
              const k = document.activeElement,
                T = y.shiftKey;
              if (y.target === b && T) {
                (S = c.current) == null || S.focus();
                return;
              }
              const D = g({ tabbingDirection: T ? "backwards" : "forwards" }),
                V = D.findIndex((I) => I === k);
              Wl(D.slice(V + 1))
                ? y.preventDefault()
                : T
                ? (C = c.current) == null || C.focus()
                : (E = d.current) == null || E.focus();
            }
          };
          return (
            b.addEventListener("keydown", v),
            () => b.removeEventListener("keydown", v)
          );
        }
      }, [l, g]),
      a.jsxs(sb, {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            a.jsx(ec, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = g({ tabbingDirection: "forwards" });
                Wl(b);
              },
            }),
          a.jsx(gd.Slot, {
            scope: n,
            children: a.jsx(J.ol, { tabIndex: -1, ...s, ref: h }),
          }),
          w &&
            a.jsx(ec, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = g({ tabbingDirection: "backwards" });
                Wl(b);
              },
            }),
        ],
      })
    );
  });
$v.displayName = zv;
var Uv = "ToastFocusProxy",
  ec = p.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Ha(Uv, n);
    return a.jsx(Wa, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var c;
        const l = i.relatedTarget;
        !((c = s.viewport) != null && c.contains(l)) && r();
      },
    });
  });
ec.displayName = Uv;
var Ka = "Toast",
  vb = "toast.swipeStart",
  gb = "toast.swipeMove",
  yb = "toast.swipeCancel",
  xb = "toast.swipeEnd",
  Bv = p.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l = !0, u] = Ks({ prop: r, defaultProp: o, onChange: s });
    return a.jsx(At, {
      present: n || l,
      children: a.jsx(Nb, {
        open: l,
        ...i,
        ref: t,
        onClose: () => u(!1),
        onPause: xe(e.onPause),
        onResume: xe(e.onResume),
        onSwipeStart: F(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: F(e.onSwipeMove, (c) => {
          const { x: d, y: f } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: F(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: F(e.onSwipeEnd, (c) => {
          const { x: d, y: f } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            u(!1);
        }),
      }),
    });
  });
Bv.displayName = Ka;
var [wb, bb] = Lv(Ka, { onClose() {} }),
  Nb = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: l,
        onPause: u,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: m,
        ...w
      } = e,
      g = Ha(Ka, n),
      [b, v] = p.useState(null),
      y = me(t, (I) => v(I)),
      x = p.useRef(null),
      N = p.useRef(null),
      S = o || g.duration,
      C = p.useRef(0),
      E = p.useRef(S),
      k = p.useRef(0),
      { onToastAdd: T, onToastRemove: _ } = g,
      $ = xe(() => {
        var q;
        (b == null ? void 0 : b.contains(document.activeElement)) &&
          ((q = g.viewport) == null || q.focus()),
          i();
      }),
      D = p.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(k.current),
            (C.current = new Date().getTime()),
            (k.current = window.setTimeout($, I)));
        },
        [$]
      );
    p.useEffect(() => {
      const I = g.viewport;
      if (I) {
        const q = () => {
            D(E.current), c == null || c();
          },
          U = () => {
            const W = new Date().getTime() - C.current;
            (E.current = E.current - W),
              window.clearTimeout(k.current),
              u == null || u();
          };
        return (
          I.addEventListener(Zu, U),
          I.addEventListener(Ju, q),
          () => {
            I.removeEventListener(Zu, U), I.removeEventListener(Ju, q);
          }
        );
      }
    }, [g.viewport, S, u, c, D]),
      p.useEffect(() => {
        s && !g.isClosePausedRef.current && D(S);
      }, [s, S, g.isClosePausedRef, D]),
      p.useEffect(() => (T(), () => _()), [T, _]);
    const V = p.useMemo(() => (b ? Yv(b) : null), [b]);
    return g.viewport
      ? a.jsxs(a.Fragment, {
          children: [
            V &&
              a.jsx(Sb, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            a.jsx(wb, {
              scope: n,
              onClose: $,
              children: Bs.createPortal(
                a.jsx(gd.ItemSlot, {
                  scope: n,
                  children: a.jsx(ob, {
                    asChild: !0,
                    onEscapeKeyDown: F(l, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || $(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: a.jsx(J.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...w,
                      ref: y,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: F(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (l == null || l(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: F(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (x.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: F(e.onPointerMove, (I) => {
                        if (!x.current) return;
                        const q = I.clientX - x.current.x,
                          U = I.clientY - x.current.y,
                          W = !!N.current,
                          P = ["left", "right"].includes(g.swipeDirection),
                          j = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          O = P ? j(0, q) : 0,
                          B = P ? 0 : j(0, U),
                          z = I.pointerType === "touch" ? 10 : 2,
                          G = { x: O, y: B },
                          Y = { originalEvent: I, delta: G };
                        W
                          ? ((N.current = G), wi(gb, f, Y, { discrete: !1 }))
                          : xp(G, g.swipeDirection, z)
                          ? ((N.current = G),
                            wi(vb, d, Y, { discrete: !1 }),
                            I.target.setPointerCapture(I.pointerId))
                          : (Math.abs(q) > z || Math.abs(U) > z) &&
                            (x.current = null);
                      }),
                      onPointerUp: F(e.onPointerUp, (I) => {
                        const q = N.current,
                          U = I.target;
                        if (
                          (U.hasPointerCapture(I.pointerId) &&
                            U.releasePointerCapture(I.pointerId),
                          (N.current = null),
                          (x.current = null),
                          q)
                        ) {
                          const W = I.currentTarget,
                            P = { originalEvent: I, delta: q };
                          xp(q, g.swipeDirection, g.swipeThreshold)
                            ? wi(xb, m, P, { discrete: !0 })
                            : wi(yb, h, P, { discrete: !0 }),
                            W.addEventListener(
                              "click",
                              (j) => j.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Sb = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ha(Ka, t),
      [s, i] = p.useState(!1),
      [l, u] = p.useState(!1);
    return (
      jb(() => i(!0)),
      p.useEffect(() => {
        const c = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      l
        ? null
        : a.jsx(hd, {
            asChild: !0,
            children: a.jsx(Wa, {
              ...r,
              children:
                s && a.jsxs(a.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Cb = "ToastTitle",
  Vv = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(J.div, { ...r, ref: t });
  });
Vv.displayName = Cb;
var Eb = "ToastDescription",
  Wv = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(J.div, { ...r, ref: t });
  });
Wv.displayName = Eb;
var Hv = "ToastAction",
  Kv = p.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? a.jsx(Qv, {
          altText: n,
          asChild: !0,
          children: a.jsx(yd, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Hv}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Kv.displayName = Hv;
var Gv = "ToastClose",
  yd = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = bb(Gv, n);
    return a.jsx(Qv, {
      asChild: !0,
      children: a.jsx(J.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onClose),
      }),
    });
  });
yd.displayName = Gv;
var Qv = p.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return a.jsx(J.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Yv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        kb(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...Yv(r));
      }
    }),
    t
  );
}
function wi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Es(o, s) : o.dispatchEvent(s);
}
var xp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function jb(e = () => {}) {
  const t = xe(e);
  Tt(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function kb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Pb(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var Rb = Fv,
  qv = $v,
  Xv = Bv,
  Zv = Vv,
  Jv = Wv,
  eg = Kv,
  tg = yd;
function ng(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ng(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function rg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ng(e)) && (r && (r += " "), (r += t));
  return r;
}
const wp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  bp = rg,
  og = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return bp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((c) => {
        const d = n == null ? void 0 : n[c],
          f = s == null ? void 0 : s[c];
        if (d === null) return null;
        const h = wp(d) || wp(f);
        return o[c][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [f, h] = d;
          return h === void 0 || (c[f] = h), c;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: f, className: h, ...m } = d;
              return Object.entries(m).every((w) => {
                let [g, b] = w;
                return Array.isArray(b)
                  ? b.includes({ ...s, ...l }[g])
                  : { ...s, ...l }[g] === b;
              })
                ? [...c, f, h]
                : c;
            }, []);
    return bp(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  sg = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Mb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _b = p.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    u
  ) =>
    p.createElement(
      "svg",
      {
        ref: u,
        ...Mb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: sg("lucide", o),
        ...l,
      },
      [
        ...i.map(([c, d]) => p.createElement(c, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = (e, t) => {
  const n = p.forwardRef(({ className: r, ...o }, s) =>
    p.createElement(_b, {
      ref: s,
      iconNode: t,
      className: sg(`lucide-${Tb(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nr = be("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = be("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = be("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ga = be("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qo = be("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = be("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = be("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ab = be("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ob = be("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = be("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = be("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ga = be("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = be("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = be("Medal", [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza",
    },
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Db = be("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bd = be("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = be("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tc = be("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fb = be("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = be("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = be("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = be("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Cd = "-",
  zb = (e) => {
    const t = Ub(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(Cd);
        return l[0] === "" && l.length !== 1 && l.shift(), dg(l, t) || $b(i);
      },
      getConflictingClassGroupIds: (i, l) => {
        const u = n[i] || [];
        return l && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  dg = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? dg(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Cd);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  Np = /^\[(.+)\]$/,
  $b = (e) => {
    if (Np.test(e)) {
      const t = Np.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ub = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Vb(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        nc(i, r, s, t);
      }),
      r
    );
  },
  nc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Sp(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Bb(o)) {
          nc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        nc(i, Sp(t, s), n, r);
      });
    });
  },
  Sp = (e, t) => {
    let n = e;
    return (
      t.split(Cd).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Bb = (e) => e.isThemeGetter,
  Vb = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(([i, l]) => [t + i, l])
                )
              : s
          );
          return [n, o];
        })
      : e,
  Wb = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  fg = "!",
  Hb = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const u = [];
        let c = 0,
          d = 0,
          f;
        for (let b = 0; b < l.length; b++) {
          let v = l[b];
          if (c === 0) {
            if (v === o && (r || l.slice(b, b + s) === t)) {
              u.push(l.slice(d, b)), (d = b + s);
              continue;
            }
            if (v === "/") {
              f = b;
              continue;
            }
          }
          v === "[" ? c++ : v === "]" && c--;
        }
        const h = u.length === 0 ? l : l.substring(d),
          m = h.startsWith(fg),
          w = m ? h.substring(1) : h,
          g = f && f > d ? f - d : void 0;
        return {
          modifiers: u,
          hasImportantModifier: m,
          baseClassName: w,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  Kb = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Gb = (e) => ({ cache: Wb(e.cacheSize), parseClassName: Hb(e), ...zb(e) }),
  Qb = /\s+/,
  Yb = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(Qb);
    let l = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const c = i[u],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: m,
        } = n(c);
      let w = !!m,
        g = r(w ? h.substring(0, m) : h);
      if (!g) {
        if (!w) {
          l = c + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((g = r(h)), !g)) {
          l = c + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = !1;
      }
      const b = Kb(d).join(":"),
        v = f ? b + fg : b,
        y = v + g;
      if (s.includes(y)) continue;
      s.push(y);
      const x = o(g, w);
      for (let N = 0; N < x.length; ++N) {
        const S = x[N];
        s.push(v + S);
      }
      l = c + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function qb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pg(t)) && (r && (r += " "), (r += n));
  return r;
}
const pg = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pg(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Xb(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(u) {
    const c = t.reduce((d, f) => f(d), e());
    return (n = Gb(c)), (r = n.cache.get), (o = n.cache.set), (s = l), l(u);
  }
  function l(u) {
    const c = r(u);
    if (c) return c;
    const d = Yb(u, n);
    return o(u, d), d;
  }
  return function () {
    return s(qb.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  mg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Zb = /^\d+\/\d+$/,
  Jb = new Set(["px", "full", "screen"]),
  eN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  tN =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  nN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  rN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  oN =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Qt = (e) => eo(e) || Jb.has(e) || Zb.test(e),
  vn = (e) => ko(e, "length", fN),
  eo = (e) => !!e && !Number.isNaN(Number(e)),
  Hl = (e) => ko(e, "number", eo),
  Bo = (e) => !!e && Number.isInteger(Number(e)),
  sN = (e) => e.endsWith("%") && eo(e.slice(0, -1)),
  Q = (e) => mg.test(e),
  gn = (e) => eN.test(e),
  iN = new Set(["length", "size", "percentage"]),
  aN = (e) => ko(e, iN, hg),
  lN = (e) => ko(e, "position", hg),
  uN = new Set(["image", "url"]),
  cN = (e) => ko(e, uN, mN),
  dN = (e) => ko(e, "", pN),
  Vo = () => !0,
  ko = (e, t, n) => {
    const r = mg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  fN = (e) => tN.test(e) && !nN.test(e),
  hg = () => !1,
  pN = (e) => rN.test(e),
  mN = (e) => oN.test(e),
  hN = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      o = se("borderColor"),
      s = se("borderRadius"),
      i = se("borderSpacing"),
      l = se("borderWidth"),
      u = se("contrast"),
      c = se("grayscale"),
      d = se("hueRotate"),
      f = se("invert"),
      h = se("gap"),
      m = se("gradientColorStops"),
      w = se("gradientColorStopPositions"),
      g = se("inset"),
      b = se("margin"),
      v = se("opacity"),
      y = se("padding"),
      x = se("saturate"),
      N = se("scale"),
      S = se("sepia"),
      C = se("skew"),
      E = se("space"),
      k = se("translate"),
      T = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", Q, t],
      D = () => [Q, t],
      V = () => ["", Qt, vn],
      I = () => ["auto", eo, Q],
      q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", Q],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      B = () => [eo, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Vo],
        spacing: [Qt, vn],
        blur: ["none", "", gn, Q],
        brightness: B(),
        borderColor: [e],
        borderRadius: ["none", "", "full", gn, Q],
        borderSpacing: D(),
        borderWidth: V(),
        contrast: B(),
        grayscale: j(),
        hueRotate: B(),
        invert: j(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [sN, vn],
        inset: $(),
        margin: $(),
        opacity: B(),
        padding: D(),
        saturate: B(),
        scale: B(),
        sepia: j(),
        skew: B(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [gn] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...q(), Q] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: T() }],
        "overscroll-x": [{ "overscroll-x": T() }],
        "overscroll-y": [{ "overscroll-y": T() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Bo, Q] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: j() }],
        shrink: [{ shrink: j() }],
        order: [{ order: ["first", "last", "none", Bo, Q] }],
        "grid-cols": [{ "grid-cols": [Vo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Bo, Q] }, Q] }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": [Vo] }],
        "row-start-end": [{ row: ["auto", { span: [Bo, Q] }, Q] }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [y] }],
        px: [{ px: [y] }],
        py: [{ py: [y] }],
        ps: [{ ps: [y] }],
        pe: [{ pe: [y] }],
        pt: [{ pt: [y] }],
        pr: [{ pr: [y] }],
        pb: [{ pb: [y] }],
        pl: [{ pl: [y] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [gn] },
              gn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", gn, vn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Hl,
            ],
          },
        ],
        "font-family": [{ font: [Vo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", eo, Hl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Qt,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [v] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [v] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Qt, vn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Qt, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [v] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...q(), lN] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", aN] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              cN,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [v] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [v] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [Qt, Q] }],
        "outline-w": [{ outline: [Qt, vn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [v] }],
        "ring-offset-w": [{ "ring-offset": [Qt, vn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", gn, dN] }],
        "shadow-color": [{ shadow: [Vo] }],
        opacity: [{ opacity: [v] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": W() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", gn, Q] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [v] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: B() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: B() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [N] }],
        "scale-x": [{ "scale-x": [N] }],
        "scale-y": [{ "scale-y": [N] }],
        rotate: [{ rotate: [Bo, Q] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Qt, vn, Hl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  vN = Xb(hN);
function he(...e) {
  return vN(rg(e));
}
const gN = Rb,
  vg = p.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(qv, {
      ref: n,
      className: he(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
vg.displayName = qv.displayName;
const yN = og(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  gg = p.forwardRef(({ className: e, variant: t, ...n }, r) =>
    a.jsx(Xv, { ref: r, className: he(yN({ variant: t }), e), ...n })
  );
gg.displayName = Xv.displayName;
const xN = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(eg, {
    ref: n,
    className: he(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
xN.displayName = eg.displayName;
const yg = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(tg, {
    ref: n,
    className: he(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: a.jsx(cg, { className: "h-4 w-4" }),
  })
);
yg.displayName = tg.displayName;
const xg = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Zv, { ref: n, className: he("text-sm font-semibold", e), ...t })
);
xg.displayName = Zv.displayName;
const wg = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Jv, { ref: n, className: he("text-sm opacity-90", e), ...t })
);
wg.displayName = Jv.displayName;
function wN() {
  const { toasts: e } = H1();
  return a.jsxs(gN, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return a.jsxs(
          gg,
          {
            ...s,
            children: [
              a.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && a.jsx(xg, { children: n }),
                  r && a.jsx(wg, { children: r }),
                ],
              }),
              o,
              a.jsx(yg, {}),
            ],
          },
          t
        );
      }),
      a.jsx(vg, {}),
    ],
  });
}
var Cp = ["light", "dark"],
  bN = "(prefers-color-scheme: dark)",
  NN = p.createContext(void 0),
  SN = { setTheme: (e) => {}, themes: [] },
  CN = () => {
    var e;
    return (e = p.useContext(NN)) != null ? e : SN;
  };
p.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: u,
  }) => {
    let c = s === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((w) => `'${w}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Cp.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (w, g = !1, b = !0) => {
        let v = i ? i[w] : w,
          y = g ? w + "|| ''" : `'${v}'`,
          x = "";
        return (
          o &&
            b &&
            !g &&
            Cp.includes(w) &&
            (x += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? g || v
              ? (x += `c.add(${y})`)
              : (x += "null")
            : v && (x += `d[s](n,${y})`),
          x
        );
      },
      m = e
        ? `!function(){${d}${h(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${bN}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h(
            "dark"
          )}}else{${h("light")}}}else if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${h(i ? "x[e]" : "e", !0)}}${
            c ? "" : "else{" + h(s, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${h(i ? "x[e]" : "e", !0)}}else{${h(
            s,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return p.createElement("script", {
      nonce: u,
      dangerouslySetInnerHTML: { __html: m },
    });
  }
);
var EN = (e) => {
    switch (e) {
      case "success":
        return PN;
      case "info":
        return TN;
      case "warning":
        return RN;
      case "error":
        return MN;
      default:
        return null;
    }
  },
  jN = Array(12).fill(0),
  kN = ({ visible: e, className: t }) =>
    A.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      A.createElement(
        "div",
        { className: "sonner-spinner" },
        jN.map((n, r) =>
          A.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  PN = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  RN = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  TN = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  MN = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  _N = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  AN = () => {
    let [e, t] = A.useState(document.hidden);
    return (
      A.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  rc = 1,
  ON = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : rc++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (u) => {
                if (((s = ["resolve", u]), A.isValidElement(u)))
                  (o = !1), this.create({ id: n, type: "default", message: u });
                else if (DN(u) && !u.ok) {
                  o = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${u.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${u.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(u)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(u)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: d,
                  });
                }
              })
              .catch(async (u) => {
                if (((s = ["reject", u]), t.error !== void 0)) {
                  o = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(u) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(u)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var u;
                o && (this.dismiss(n), (n = void 0)),
                  (u = t.finally) == null || u.call(t);
              }),
            l = () =>
              new Promise((u, c) =>
                i.then(() => (s[0] === "reject" ? c(s[1]) : u(s[1]))).catch(c)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || rc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ke = new ON(),
  IN = (e, t) => {
    let n = (t == null ? void 0 : t.id) || rc++;
    return Ke.addToast({ title: e, ...t, id: n }), n;
  },
  DN = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  LN = IN,
  FN = () => Ke.toasts,
  zN = () => Ke.getActiveToasts(),
  $N = Object.assign(
    LN,
    {
      success: Ke.success,
      info: Ke.info,
      warning: Ke.warning,
      error: Ke.error,
      custom: Ke.custom,
      message: Ke.message,
      promise: Ke.promise,
      dismiss: Ke.dismiss,
      loading: Ke.loading,
    },
    { getHistory: FN, getToasts: zN }
  );
function UN(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
UN(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function bi(e) {
  return e.label !== void 0;
}
var BN = 3,
  VN = "32px",
  WN = "16px",
  Ep = 4e3,
  HN = 356,
  KN = 14,
  GN = 20,
  QN = 200;
function wt(...e) {
  return e.filter(Boolean).join(" ");
}
function YN(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var qN = (e) => {
  var t, n, r, o, s, i, l, u, c, d, f;
  let {
      invert: h,
      toast: m,
      unstyled: w,
      interacting: g,
      setHeights: b,
      visibleToasts: v,
      heights: y,
      index: x,
      toasts: N,
      expanded: S,
      removeToast: C,
      defaultRichColors: E,
      closeButton: k,
      style: T,
      cancelButtonStyle: _,
      actionButtonStyle: $,
      className: D = "",
      descriptionClassName: V = "",
      duration: I,
      position: q,
      gap: U,
      loadingIcon: W,
      expandByDefault: P,
      classNames: j,
      icons: O,
      closeButtonAriaLabel: B = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [G, Y] = A.useState(null),
    [ce, ve] = A.useState(null),
    [X, Gt] = A.useState(!1),
    [je, Ot] = A.useState(!1),
    [cn, Er] = A.useState(!1),
    [dn, Zs] = A.useState(!1),
    [dl, Js] = A.useState(!1),
    [fl, _o] = A.useState(0),
    [jr, Zd] = A.useState(0),
    Ao = A.useRef(m.duration || I || Ep),
    Jd = A.useRef(null),
    Zn = A.useRef(null),
    sx = x === 0,
    ix = x + 1 <= v,
    it = m.type,
    kr = m.dismissible !== !1,
    ax = m.className || "",
    lx = m.descriptionClassName || "",
    ei = A.useMemo(
      () => y.findIndex((H) => H.toastId === m.id) || 0,
      [y, m.id]
    ),
    ux = A.useMemo(() => {
      var H;
      return (H = m.closeButton) != null ? H : k;
    }, [m.closeButton, k]),
    ef = A.useMemo(() => m.duration || I || Ep, [m.duration, I]),
    pl = A.useRef(0),
    Pr = A.useRef(0),
    tf = A.useRef(0),
    Rr = A.useRef(null),
    [cx, dx] = q.split("-"),
    nf = A.useMemo(
      () => y.reduce((H, re, le) => (le >= ei ? H : H + re.height), 0),
      [y, ei]
    ),
    rf = AN(),
    fx = m.invert || h,
    ml = it === "loading";
  (Pr.current = A.useMemo(() => ei * U + nf, [ei, nf])),
    A.useEffect(() => {
      Ao.current = ef;
    }, [ef]),
    A.useEffect(() => {
      Gt(!0);
    }, []),
    A.useEffect(() => {
      let H = Zn.current;
      if (H) {
        let re = H.getBoundingClientRect().height;
        return (
          Zd(re),
          b((le) => [
            { toastId: m.id, height: re, position: m.position },
            ...le,
          ]),
          () => b((le) => le.filter((vt) => vt.toastId !== m.id))
        );
      }
    }, [b, m.id]),
    A.useLayoutEffect(() => {
      if (!X) return;
      let H = Zn.current,
        re = H.style.height;
      H.style.height = "auto";
      let le = H.getBoundingClientRect().height;
      (H.style.height = re),
        Zd(le),
        b((vt) =>
          vt.find((gt) => gt.toastId === m.id)
            ? vt.map((gt) => (gt.toastId === m.id ? { ...gt, height: le } : gt))
            : [{ toastId: m.id, height: le, position: m.position }, ...vt]
        );
    }, [X, m.title, m.description, b, m.id]);
  let fn = A.useCallback(() => {
    Ot(!0),
      _o(Pr.current),
      b((H) => H.filter((re) => re.toastId !== m.id)),
      setTimeout(() => {
        C(m);
      }, QN);
  }, [m, C, b, Pr]);
  A.useEffect(() => {
    if (
      (m.promise && it === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let H;
    return (
      S || g || (z && rf)
        ? (() => {
            if (tf.current < pl.current) {
              let re = new Date().getTime() - pl.current;
              Ao.current = Ao.current - re;
            }
            tf.current = new Date().getTime();
          })()
        : Ao.current !== 1 / 0 &&
          ((pl.current = new Date().getTime()),
          (H = setTimeout(() => {
            var re;
            (re = m.onAutoClose) == null || re.call(m, m), fn();
          }, Ao.current))),
      () => clearTimeout(H)
    );
  }, [S, g, m, it, z, rf, fn]),
    A.useEffect(() => {
      m.delete && fn();
    }, [fn, m.delete]);
  function px() {
    var H, re, le;
    return O != null && O.loading
      ? A.createElement(
          "div",
          {
            className: wt(
              j == null ? void 0 : j.loader,
              (H = m == null ? void 0 : m.classNames) == null
                ? void 0
                : H.loader,
              "sonner-loader"
            ),
            "data-visible": it === "loading",
          },
          O.loading
        )
      : W
      ? A.createElement(
          "div",
          {
            className: wt(
              j == null ? void 0 : j.loader,
              (re = m == null ? void 0 : m.classNames) == null
                ? void 0
                : re.loader,
              "sonner-loader"
            ),
            "data-visible": it === "loading",
          },
          W
        )
      : A.createElement(kN, {
          className: wt(
            j == null ? void 0 : j.loader,
            (le = m == null ? void 0 : m.classNames) == null
              ? void 0
              : le.loader
          ),
          visible: it === "loading",
        });
  }
  return A.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Zn,
      className: wt(
        D,
        ax,
        j == null ? void 0 : j.toast,
        (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[it],
        (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[it]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = m.richColors) != null ? r : E,
      "data-styled": !(m.jsx || m.unstyled || w),
      "data-mounted": X,
      "data-promise": !!m.promise,
      "data-swiped": dl,
      "data-removed": je,
      "data-visible": ix,
      "data-y-position": cx,
      "data-x-position": dx,
      "data-index": x,
      "data-front": sx,
      "data-swiping": cn,
      "data-dismissible": kr,
      "data-type": it,
      "data-invert": fx,
      "data-swipe-out": dn,
      "data-swipe-direction": ce,
      "data-expanded": !!(S || (P && X)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": N.length - x,
        "--offset": `${je ? fl : Pr.current}px`,
        "--initial-height": P ? "auto" : `${jr}px`,
        ...T,
        ...m.style,
      },
      onDragEnd: () => {
        Er(!1), Y(null), (Rr.current = null);
      },
      onPointerDown: (H) => {
        ml ||
          !kr ||
          ((Jd.current = new Date()),
          _o(Pr.current),
          H.target.setPointerCapture(H.pointerId),
          H.target.tagName !== "BUTTON" &&
            (Er(!0), (Rr.current = { x: H.clientX, y: H.clientY })));
      },
      onPointerUp: () => {
        var H, re, le, vt;
        if (dn || !kr) return;
        Rr.current = null;
        let gt = Number(
            ((H = Zn.current) == null
              ? void 0
              : H.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          pn = Number(
            ((re = Zn.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Jn =
            new Date().getTime() -
            ((le = Jd.current) == null ? void 0 : le.getTime()),
          yt = G === "x" ? gt : pn,
          mn = Math.abs(yt) / Jn;
        if (Math.abs(yt) >= GN || mn > 0.11) {
          _o(Pr.current),
            (vt = m.onDismiss) == null || vt.call(m, m),
            ve(
              G === "x" ? (gt > 0 ? "right" : "left") : pn > 0 ? "down" : "up"
            ),
            fn(),
            Zs(!0),
            Js(!1);
          return;
        }
        Er(!1), Y(null);
      },
      onPointerMove: (H) => {
        var re, le, vt, gt;
        if (
          !Rr.current ||
          !kr ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let pn = H.clientY - Rr.current.y,
          Jn = H.clientX - Rr.current.x,
          yt = (le = e.swipeDirections) != null ? le : YN(q);
        !G &&
          (Math.abs(Jn) > 1 || Math.abs(pn) > 1) &&
          Y(Math.abs(Jn) > Math.abs(pn) ? "x" : "y");
        let mn = { x: 0, y: 0 };
        G === "y"
          ? (yt.includes("top") || yt.includes("bottom")) &&
            ((yt.includes("top") && pn < 0) ||
              (yt.includes("bottom") && pn > 0)) &&
            (mn.y = pn)
          : G === "x" &&
            (yt.includes("left") || yt.includes("right")) &&
            ((yt.includes("left") && Jn < 0) ||
              (yt.includes("right") && Jn > 0)) &&
            (mn.x = Jn),
          (Math.abs(mn.x) > 0 || Math.abs(mn.y) > 0) && Js(!0),
          (vt = Zn.current) == null ||
            vt.style.setProperty("--swipe-amount-x", `${mn.x}px`),
          (gt = Zn.current) == null ||
            gt.style.setProperty("--swipe-amount-y", `${mn.y}px`);
      },
    },
    ux && !m.jsx
      ? A.createElement(
          "button",
          {
            "aria-label": B,
            "data-disabled": ml,
            "data-close-button": !0,
            onClick:
              ml || !kr
                ? () => {}
                : () => {
                    var H;
                    fn(), (H = m.onDismiss) == null || H.call(m, m);
                  },
            className: wt(
              j == null ? void 0 : j.closeButton,
              (o = m == null ? void 0 : m.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (s = O == null ? void 0 : O.close) != null ? s : _N
        )
      : null,
    m.jsx || p.isValidElement(m.title)
      ? m.jsx
        ? m.jsx
        : typeof m.title == "function"
        ? m.title()
        : m.title
      : A.createElement(
          A.Fragment,
          null,
          it || m.icon || m.promise
            ? A.createElement(
                "div",
                {
                  "data-icon": "",
                  className: wt(
                    j == null ? void 0 : j.icon,
                    (i = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                m.promise || (m.type === "loading" && !m.icon)
                  ? m.icon || px()
                  : null,
                m.type !== "loading"
                  ? m.icon || (O == null ? void 0 : O[it]) || EN(it)
                  : null
              )
            : null,
          A.createElement(
            "div",
            {
              "data-content": "",
              className: wt(
                j == null ? void 0 : j.content,
                (l = m == null ? void 0 : m.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            A.createElement(
              "div",
              {
                "data-title": "",
                className: wt(
                  j == null ? void 0 : j.title,
                  (u = m == null ? void 0 : m.classNames) == null
                    ? void 0
                    : u.title
                ),
              },
              typeof m.title == "function" ? m.title() : m.title
            ),
            m.description
              ? A.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: wt(
                      V,
                      lx,
                      j == null ? void 0 : j.description,
                      (c = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : c.description
                    ),
                  },
                  typeof m.description == "function"
                    ? m.description()
                    : m.description
                )
              : null
          ),
          p.isValidElement(m.cancel)
            ? m.cancel
            : m.cancel && bi(m.cancel)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: m.cancelButtonStyle || _,
                  onClick: (H) => {
                    var re, le;
                    bi(m.cancel) &&
                      kr &&
                      ((le = (re = m.cancel).onClick) == null || le.call(re, H),
                      fn());
                  },
                  className: wt(
                    j == null ? void 0 : j.cancelButton,
                    (d = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                m.cancel.label
              )
            : null,
          p.isValidElement(m.action)
            ? m.action
            : m.action && bi(m.action)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: m.actionButtonStyle || $,
                  onClick: (H) => {
                    var re, le;
                    bi(m.action) &&
                      ((le = (re = m.action).onClick) == null || le.call(re, H),
                      !H.defaultPrevented && fn());
                  },
                  className: wt(
                    j == null ? void 0 : j.actionButton,
                    (f = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                m.action.label
              )
            : null
        )
  );
};
function jp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function XN(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        l = s ? WN : VN;
      function u(c) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${i}-${d}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? u(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((c) => {
            r[c] === void 0
              ? (n[`${i}-${c}`] = l)
              : (n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]);
          })
        : u(l);
    }),
    n
  );
}
var ZN = p.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: l,
      offset: u,
      mobileOffset: c,
      theme: d = "light",
      richColors: f,
      duration: h,
      style: m,
      visibleToasts: w = BN,
      toastOptions: g,
      dir: b = jp(),
      gap: v = KN,
      loadingIcon: y,
      icons: x,
      containerAriaLabel: N = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [C, E] = A.useState([]),
    k = A.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(C.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [C, r]
    ),
    [T, _] = A.useState([]),
    [$, D] = A.useState(!1),
    [V, I] = A.useState(!1),
    [q, U] = A.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    W = A.useRef(null),
    P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    j = A.useRef(null),
    O = A.useRef(!1),
    B = A.useCallback((z) => {
      E((G) => {
        var Y;
        return (
          ((Y = G.find((ce) => ce.id === z.id)) != null && Y.delete) ||
            Ke.dismiss(z.id),
          G.filter(({ id: ce }) => ce !== z.id)
        );
      });
    }, []);
  return (
    A.useEffect(
      () =>
        Ke.subscribe((z) => {
          if (z.dismiss) {
            E((G) => G.map((Y) => (Y.id === z.id ? { ...Y, delete: !0 } : Y)));
            return;
          }
          setTimeout(() => {
            md.flushSync(() => {
              E((G) => {
                let Y = G.findIndex((ce) => ce.id === z.id);
                return Y !== -1
                  ? [...G.slice(0, Y), { ...G[Y], ...z }, ...G.slice(Y + 1)]
                  : [z, ...G];
              });
            });
          });
        }),
      []
    ),
    A.useEffect(() => {
      if (d !== "system") {
        U(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? U("dark")
            : U("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: G }) => {
          U(G ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: Y }) => {
          try {
            U(Y ? "dark" : "light");
          } catch (ce) {
            console.error(ce);
          }
        });
      }
    }, [d]),
    A.useEffect(() => {
      C.length <= 1 && D(!1);
    }, [C]),
    A.useEffect(() => {
      let z = (G) => {
        var Y, ce;
        o.every((ve) => G[ve] || G.code === ve) &&
          (D(!0), (Y = W.current) == null || Y.focus()),
          G.code === "Escape" &&
            (document.activeElement === W.current ||
              ((ce = W.current) != null &&
                ce.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [o]),
    A.useEffect(() => {
      if (W.current)
        return () => {
          j.current &&
            (j.current.focus({ preventScroll: !0 }),
            (j.current = null),
            (O.current = !1));
        };
    }, [W.current]),
    A.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${N} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      k.map((z, G) => {
        var Y;
        let [ce, ve] = z.split("-");
        return C.length
          ? A.createElement(
              "ol",
              {
                key: z,
                dir: b === "auto" ? jp() : b,
                tabIndex: -1,
                ref: W,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": q,
                "data-y-position": ce,
                "data-lifted": $ && C.length > 1 && !s,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((Y = T[0]) == null ? void 0 : Y.height) || 0
                  }px`,
                  "--width": `${HN}px`,
                  "--gap": `${v}px`,
                  ...m,
                  ...XN(u, c),
                },
                onBlur: (X) => {
                  O.current &&
                    !X.currentTarget.contains(X.relatedTarget) &&
                    ((O.current = !1),
                    j.current &&
                      (j.current.focus({ preventScroll: !0 }),
                      (j.current = null)));
                },
                onFocus: (X) => {
                  (X.target instanceof HTMLElement &&
                    X.target.dataset.dismissible === "false") ||
                    O.current ||
                    ((O.current = !0), (j.current = X.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  V || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (X) => {
                  (X.target instanceof HTMLElement &&
                    X.target.dataset.dismissible === "false") ||
                    I(!0);
                },
                onPointerUp: () => I(!1),
              },
              C.filter((X) => (!X.position && G === 0) || X.position === z).map(
                (X, Gt) => {
                  var je, Ot;
                  return A.createElement(qN, {
                    key: X.id,
                    icons: x,
                    index: Gt,
                    toast: X,
                    defaultRichColors: f,
                    duration:
                      (je = g == null ? void 0 : g.duration) != null ? je : h,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: w,
                    closeButton:
                      (Ot = g == null ? void 0 : g.closeButton) != null
                        ? Ot
                        : i,
                    interacting: V,
                    position: z,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: B,
                    toasts: C.filter((cn) => cn.position == X.position),
                    heights: T.filter((cn) => cn.position == X.position),
                    setHeights: _,
                    expandByDefault: s,
                    gap: v,
                    loadingIcon: y,
                    expanded: $,
                    pauseWhenPageIsHidden: S,
                    swipeDirections: e.swipeDirections,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const JN = ({ ...e }) => {
  const { theme: t = "system" } = CN();
  return a.jsx(ZN, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var eS = Pm.useId || (() => {}),
  tS = 0;
function js(e) {
  const [t, n] = p.useState(eS());
  return (
    Tt(() => {
      n((r) => r ?? String(tS++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const nS = ["top", "right", "bottom", "left"],
  Vn = Math.min,
  Je = Math.max,
  ya = Math.round,
  Ni = Math.floor,
  Wt = (e) => ({ x: e, y: e }),
  rS = { left: "right", right: "left", bottom: "top", top: "bottom" },
  oS = { start: "end", end: "start" };
function oc(e, t, n) {
  return Je(e, Vn(t, n));
}
function an(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ln(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function Ed(e) {
  return e === "x" ? "y" : "x";
}
function jd(e) {
  return e === "y" ? "height" : "width";
}
function Wn(e) {
  return ["top", "bottom"].includes(ln(e)) ? "y" : "x";
}
function kd(e) {
  return Ed(Wn(e));
}
function sS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e),
    o = kd(e),
    s = jd(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = xa(i)), [i, xa(i)];
}
function iS(e) {
  const t = xa(e);
  return [sc(e), t, sc(t)];
}
function sc(e) {
  return e.replace(/start|end/g, (t) => oS[t]);
}
function aS(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function lS(e, t, n, r) {
  const o = Po(e);
  let s = aS(ln(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(sc)))), s
  );
}
function xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rS[t]);
}
function uS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function bg(e) {
  return typeof e != "number"
    ? uS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function wa(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function kp(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Wn(t),
    i = kd(t),
    l = jd(i),
    u = ln(t),
    c = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let m;
  switch (u) {
    case "top":
      m = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: d, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: f };
      break;
    case "left":
      m = { x: r.x - o.width, y: f };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (Po(t)) {
    case "start":
      m[i] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += h * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const cS = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = kp(c, r, u),
    h = r,
    m = {},
    w = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: b, fn: v } = l[g],
      {
        x: y,
        y: x,
        data: N,
        reset: S,
      } = await v({
        x: d,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: m,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = y ?? d),
      (f = x ?? f),
      (m = { ...m, [b]: { ...m[b], ...N } }),
      S &&
        w <= 50 &&
        (w++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: d, y: f } = kp(c, h, u))),
        (g = -1));
  }
  return { x: d, y: f, placement: h, strategy: o, middlewareData: m };
};
async function ks(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: u } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: m = 0,
    } = an(t, e),
    w = bg(m),
    b = l[h ? (f === "floating" ? "reference" : "floating") : f],
    v = wa(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: u,
      })
    ),
    y =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    N = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = wa(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: x,
            strategy: u,
          })
        : y
    );
  return {
    top: (v.top - S.top + w.top) / N.y,
    bottom: (S.bottom - v.bottom + w.bottom) / N.y,
    left: (v.left - S.left + w.left) / N.x,
    right: (S.right - v.right + w.right) / N.x,
  };
}
const dS = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: u,
        } = t,
        { element: c, padding: d = 0 } = an(e, t) || {};
      if (c == null) return {};
      const f = bg(d),
        h = { x: n, y: r },
        m = kd(o),
        w = jd(m),
        g = await i.getDimensions(c),
        b = m === "y",
        v = b ? "top" : "left",
        y = b ? "bottom" : "right",
        x = b ? "clientHeight" : "clientWidth",
        N = s.reference[w] + s.reference[m] - h[m] - s.floating[w],
        S = h[m] - s.reference[m],
        C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let E = C ? C[x] : 0;
      (!E || !(await (i.isElement == null ? void 0 : i.isElement(C)))) &&
        (E = l.floating[x] || s.floating[w]);
      const k = N / 2 - S / 2,
        T = E / 2 - g[w] / 2 - 1,
        _ = Vn(f[v], T),
        $ = Vn(f[y], T),
        D = _,
        V = E - g[w] - $,
        I = E / 2 - g[w] / 2 + k,
        q = oc(D, I, V),
        U =
          !u.arrow &&
          Po(o) != null &&
          I !== q &&
          s.reference[w] / 2 - (I < D ? _ : $) - g[w] / 2 < 0,
        W = U ? (I < D ? I - D : I - V) : 0;
      return {
        [m]: h[m] + W,
        data: {
          [m]: q,
          centerOffset: I - q - W,
          ...(U && { alignmentOffset: W }),
        },
        reset: U,
      };
    },
  }),
  fS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: u,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: g = !0,
              ...b
            } = an(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = ln(o),
            y = Wn(l),
            x = ln(l) === l,
            N = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
            S = h || (x || !g ? [xa(l)] : iS(l)),
            C = w !== "none";
          !h && C && S.push(...lS(l, g, w, N));
          const E = [l, ...S],
            k = await ks(t, b),
            T = [];
          let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && T.push(k[v]), f)) {
            const I = sS(o, i, N);
            T.push(k[I[0]], k[I[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: T }]),
            !T.every((I) => I <= 0))
          ) {
            var $, D;
            const I = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1,
              q = E[I];
            if (q)
              return {
                data: { index: I, overflows: _ },
                reset: { placement: q },
              };
            let U =
              (D = _.filter((W) => W.overflows[0] <= 0).sort(
                (W, P) => W.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : D.placement;
            if (!U)
              switch (m) {
                case "bestFit": {
                  var V;
                  const W =
                    (V = _.filter((P) => {
                      if (C) {
                        const j = Wn(P.placement);
                        return j === y || j === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((j) => j > 0)
                          .reduce((j, O) => j + O, 0),
                      ])
                      .sort((P, j) => P[1] - j[1])[0]) == null
                      ? void 0
                      : V[0];
                  W && (U = W);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Pp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Rp(e) {
  return nS.some((t) => e[t] >= 0);
}
const pS = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = an(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await ks(t, { ...o, elementContext: "reference" }),
              i = Pp(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Rp(i) },
            };
          }
          case "escaped": {
            const s = await ks(t, { ...o, altBoundary: !0 }),
              i = Pp(s, n.floating);
            return { data: { escapedOffsets: i, escaped: Rp(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function mS(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = ln(n),
    l = Po(n),
    u = Wn(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    d = s && u ? -1 : 1,
    f = an(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof w == "number" && (m = l === "end" ? w * -1 : w),
    u ? { x: m * d, y: h * c } : { x: h * c, y: m * d }
  );
}
const hS = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            u = await mS(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + u.x, y: s + u.y, data: { ...u, placement: i } };
        },
      }
    );
  },
  vS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (b) => {
                  let { x: v, y } = b;
                  return { x: v, y };
                },
              },
              ...u
            } = an(e, t),
            c = { x: n, y: r },
            d = await ks(t, u),
            f = Wn(ln(o)),
            h = Ed(f);
          let m = c[h],
            w = c[f];
          if (s) {
            const b = h === "y" ? "top" : "left",
              v = h === "y" ? "bottom" : "right",
              y = m + d[b],
              x = m - d[v];
            m = oc(y, m, x);
          }
          if (i) {
            const b = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              y = w + d[b],
              x = w - d[v];
            w = oc(y, w, x);
          }
          const g = l.fn({ ...t, [h]: m, [f]: w });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [h]: s, [f]: i } },
          };
        },
      }
    );
  },
  gS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: u = !0, crossAxis: c = !0 } = an(e, t),
            d = { x: n, y: r },
            f = Wn(o),
            h = Ed(f);
          let m = d[h],
            w = d[f];
          const g = an(l, t),
            b =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (u) {
            const x = h === "y" ? "height" : "width",
              N = s.reference[h] - s.floating[x] + b.mainAxis,
              S = s.reference[h] + s.reference[x] - b.mainAxis;
            m < N ? (m = N) : m > S && (m = S);
          }
          if (c) {
            var v, y;
            const x = h === "y" ? "width" : "height",
              N = ["top", "left"].includes(ln(o)),
              S =
                s.reference[f] -
                s.floating[x] +
                ((N && ((v = i.offset) == null ? void 0 : v[f])) || 0) +
                (N ? 0 : b.crossAxis),
              C =
                s.reference[f] +
                s.reference[x] +
                (N ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) -
                (N ? b.crossAxis : 0);
            w < S ? (w = S) : w > C && (w = C);
          }
          return { [h]: m, [f]: w };
        },
      }
    );
  },
  yS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: u = () => {}, ...c } = an(e, t),
            d = await ks(t, c),
            f = ln(o),
            h = Po(o),
            m = Wn(o) === "y",
            { width: w, height: g } = s.floating;
          let b, v;
          f === "top" || f === "bottom"
            ? ((b = f),
              (v =
                h ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = f), (b = h === "end" ? "top" : "bottom"));
          const y = g - d.top - d.bottom,
            x = w - d.left - d.right,
            N = Vn(g - d[b], y),
            S = Vn(w - d[v], x),
            C = !t.middlewareData.shift;
          let E = N,
            k = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = y),
            C && !h)
          ) {
            const _ = Je(d.left, 0),
              $ = Je(d.right, 0),
              D = Je(d.top, 0),
              V = Je(d.bottom, 0);
            m
              ? (k = w - 2 * (_ !== 0 || $ !== 0 ? _ + $ : Je(d.left, d.right)))
              : (E =
                  g - 2 * (D !== 0 || V !== 0 ? D + V : Je(d.top, d.bottom)));
          }
          await u({ ...t, availableWidth: k, availableHeight: E });
          const T = await i.getDimensions(l.floating);
          return w !== T.width || g !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Qa() {
  return typeof window < "u";
}
function Ro(e) {
  return Ng(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Kt(e) {
  var t;
  return (t = (Ng(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ng(e) {
  return Qa() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function Mt(e) {
  return Qa() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function Ht(e) {
  return Qa() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function Tp(e) {
  return !Qa() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
function Qs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = _t(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function xS(e) {
  return ["table", "td", "th"].includes(Ro(e));
}
function Ya(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pd(e) {
  const t = Rd(),
    n = Mt(e) ? _t(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function wS(e) {
  let t = Hn(e);
  for (; Ht(t) && !wo(t); ) {
    if (Pd(t)) return t;
    if (Ya(t)) return null;
    t = Hn(t);
  }
  return null;
}
function Rd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function wo(e) {
  return ["html", "body", "#document"].includes(Ro(e));
}
function _t(e) {
  return nt(e).getComputedStyle(e);
}
function qa(e) {
  return Mt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
  if (Ro(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Tp(e) && e.host) || Kt(e);
  return Tp(t) ? t.host : t;
}
function Sg(e) {
  const t = Hn(e);
  return wo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ht(t) && Qs(t)
    ? t
    : Sg(t);
}
function Ps(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sg(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = nt(o);
  if (s) {
    const l = ic(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Qs(o) ? o : [],
      l && n ? Ps(l) : []
    );
  }
  return t.concat(o, Ps(o, [], n));
}
function ic(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cg(e) {
  const t = _t(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ht(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = ya(n) !== s || ya(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function Td(e) {
  return Mt(e) ? e : e.contextElement;
}
function to(e) {
  const t = Td(e);
  if (!Ht(t)) return Wt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Cg(t);
  let i = (s ? ya(n.width) : n.width) / r,
    l = (s ? ya(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const bS = Wt(0);
function Eg(e) {
  const t = nt(e);
  return !Rd() || !t.visualViewport
    ? bS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function NS(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== nt(e)) ? !1 : t;
}
function yr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Td(e);
  let i = Wt(1);
  t && (r ? Mt(r) && (i = to(r)) : (i = to(e)));
  const l = NS(s, n, r) ? Eg(s) : Wt(0);
  let u = (o.left + l.x) / i.x,
    c = (o.top + l.y) / i.y,
    d = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const h = nt(s),
      m = r && Mt(r) ? nt(r) : r;
    let w = h,
      g = ic(w);
    for (; g && r && m !== w; ) {
      const b = to(g),
        v = g.getBoundingClientRect(),
        y = _t(g),
        x = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x,
        N = v.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      (u *= b.x),
        (c *= b.y),
        (d *= b.x),
        (f *= b.y),
        (u += x),
        (c += N),
        (w = nt(g)),
        (g = ic(w));
    }
  }
  return wa({ width: d, height: f, x: u, y: c });
}
function Md(e, t) {
  const n = qa(e).scrollLeft;
  return t ? t.left + n : yr(Kt(e)).left + n;
}
function jg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Md(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function SS(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Kt(r),
    l = t ? Ya(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    c = Wt(1);
  const d = Wt(0),
    f = Ht(r);
  if (
    (f || (!f && !s)) &&
    ((Ro(r) !== "body" || Qs(i)) && (u = qa(r)), Ht(r))
  ) {
    const m = yr(r);
    (c = to(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop);
  }
  const h = i && !f && !s ? jg(i, u, !0) : Wt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - u.scrollTop * c.y + d.y + h.y,
  };
}
function CS(e) {
  return Array.from(e.getClientRects());
}
function ES(e) {
  const t = Kt(e),
    n = qa(e),
    r = e.ownerDocument.body,
    o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Md(e);
  const l = -n.scrollTop;
  return (
    _t(r).direction === "rtl" && (i += Je(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function jS(e, t) {
  const n = nt(e),
    r = Kt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Rd();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: u };
}
function kS(e, t) {
  const n = yr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Ht(e) ? to(e) : Wt(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    u = o * s.x,
    c = r * s.y;
  return { width: i, height: l, x: u, y: c };
}
function Mp(e, t, n) {
  let r;
  if (t === "viewport") r = jS(e, n);
  else if (t === "document") r = ES(Kt(e));
  else if (Mt(t)) r = kS(t, n);
  else {
    const o = Eg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return wa(r);
}
function kg(e, t) {
  const n = Hn(e);
  return n === t || !Mt(n) || wo(n)
    ? !1
    : _t(n).position === "fixed" || kg(n, t);
}
function PS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ps(e, [], !1).filter((l) => Mt(l) && Ro(l) !== "body"),
    o = null;
  const s = _t(e).position === "fixed";
  let i = s ? Hn(e) : e;
  for (; Mt(i) && !wo(i); ) {
    const l = _t(i),
      u = Pd(i);
    !u && l.position === "fixed" && (o = null),
      (
        s
          ? !u && !o
          : (!u &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Qs(i) && !u && kg(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = l),
      (i = Hn(i));
  }
  return t.set(e, r), r;
}
function RS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Ya(t)
          ? []
          : PS(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    u = i.reduce((c, d) => {
      const f = Mp(t, d, o);
      return (
        (c.top = Je(f.top, c.top)),
        (c.right = Vn(f.right, c.right)),
        (c.bottom = Vn(f.bottom, c.bottom)),
        (c.left = Je(f.left, c.left)),
        c
      );
    }, Mp(t, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function TS(e) {
  const { width: t, height: n } = Cg(e);
  return { width: t, height: n };
}
function MS(e, t, n) {
  const r = Ht(t),
    o = Kt(t),
    s = n === "fixed",
    i = yr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const u = Wt(0);
  if (r || (!r && !s))
    if (((Ro(t) !== "body" || Qs(o)) && (l = qa(t)), r)) {
      const h = yr(t, !0, s, t);
      (u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop);
    } else o && (u.x = Md(o));
  const c = o && !r && !s ? jg(o, l) : Wt(0),
    d = i.left + l.scrollLeft - u.x - c.x,
    f = i.top + l.scrollTop - u.y - c.y;
  return { x: d, y: f, width: i.width, height: i.height };
}
function Kl(e) {
  return _t(e).position === "static";
}
function _p(e, t) {
  if (!Ht(e) || _t(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Kt(e) === n && (n = n.ownerDocument.body), n;
}
function Pg(e, t) {
  const n = nt(e);
  if (Ya(e)) return n;
  if (!Ht(e)) {
    let o = Hn(e);
    for (; o && !wo(o); ) {
      if (Mt(o) && !Kl(o)) return o;
      o = Hn(o);
    }
    return n;
  }
  let r = _p(e, t);
  for (; r && xS(r) && Kl(r); ) r = _p(r, t);
  return r && wo(r) && Kl(r) && !Pd(r) ? n : r || wS(e) || n;
}
const _S = async function (e) {
  const t = this.getOffsetParent || Pg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: MS(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function AS(e) {
  return _t(e).direction === "rtl";
}
const OS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: SS,
  getDocumentElement: Kt,
  getClippingRect: RS,
  getOffsetParent: Pg,
  getElementRects: _S,
  getClientRects: CS,
  getDimensions: TS,
  getScale: to,
  isElement: Mt,
  isRTL: AS,
};
function Rg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function IS(e, t) {
  let n = null,
    r;
  const o = Kt(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), s();
    const c = e.getBoundingClientRect(),
      { left: d, top: f, width: h, height: m } = c;
    if ((l || t(), !h || !m)) return;
    const w = Ni(f),
      g = Ni(o.clientWidth - (d + h)),
      b = Ni(o.clientHeight - (f + m)),
      v = Ni(d),
      x = {
        rootMargin: -w + "px " + -g + "px " + -b + "px " + -v + "px",
        threshold: Je(0, Vn(1, u)) || 1,
      };
    let N = !0;
    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== u) {
        if (!N) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      E === 1 && !Rg(c, e.getBoundingClientRect()) && i(), (N = !1);
    }
    try {
      n = new IntersectionObserver(S, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, x);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function DS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    c = Td(e),
    d = o || s ? [...(c ? Ps(c) : []), ...Ps(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const f = c && l ? IS(c, n) : null;
  let h = -1,
    m = null;
  i &&
    ((m = new ResizeObserver((v) => {
      let [y] = v;
      y &&
        y.target === c &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = m) == null || x.observe(t);
        }))),
        n();
    })),
    c && !u && m.observe(c),
    m.observe(t));
  let w,
    g = u ? yr(e) : null;
  u && b();
  function b() {
    const v = yr(e);
    g && !Rg(g, v) && n(), (g = v), (w = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var v;
      d.forEach((y) => {
        o && y.removeEventListener("scroll", n),
          s && y.removeEventListener("resize", n);
      }),
        f == null || f(),
        (v = m) == null || v.disconnect(),
        (m = null),
        u && cancelAnimationFrame(w);
    }
  );
}
const LS = hS,
  FS = vS,
  zS = fS,
  $S = yS,
  US = pS,
  Ap = dS,
  BS = gS,
  VS = (e, t, n) => {
    const r = new Map(),
      o = { platform: OS, ...n },
      s = { ...o.platform, _c: r };
    return cS(e, t, { ...o, platform: s });
  };
var Vi = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function ba(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ba(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !ba(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Tg(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Op(e, t) {
  const n = Tg(e);
  return Math.round(t * n) / n;
}
function Gl(e) {
  const t = p.useRef(e);
  return (
    Vi(() => {
      t.current = e;
    }),
    t
  );
}
function WS(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: u,
      open: c,
    } = e,
    [d, f] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, m] = p.useState(r);
  ba(h, r) || m(r);
  const [w, g] = p.useState(null),
    [b, v] = p.useState(null),
    y = p.useCallback((P) => {
      P !== C.current && ((C.current = P), g(P));
    }, []),
    x = p.useCallback((P) => {
      P !== E.current && ((E.current = P), v(P));
    }, []),
    N = s || w,
    S = i || b,
    C = p.useRef(null),
    E = p.useRef(null),
    k = p.useRef(d),
    T = u != null,
    _ = Gl(u),
    $ = Gl(o),
    D = Gl(c),
    V = p.useCallback(() => {
      if (!C.current || !E.current) return;
      const P = { placement: t, strategy: n, middleware: h };
      $.current && (P.platform = $.current),
        VS(C.current, E.current, P).then((j) => {
          const O = { ...j, isPositioned: D.current !== !1 };
          I.current &&
            !ba(k.current, O) &&
            ((k.current = O),
            Bs.flushSync(() => {
              f(O);
            }));
        });
    }, [h, t, n, $, D]);
  Vi(() => {
    c === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), f((P) => ({ ...P, isPositioned: !1 })));
  }, [c]);
  const I = p.useRef(!1);
  Vi(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    Vi(() => {
      if ((N && (C.current = N), S && (E.current = S), N && S)) {
        if (_.current) return _.current(N, S, V);
        V();
      }
    }, [N, S, V, _, T]);
  const q = p.useMemo(
      () => ({ reference: C, floating: E, setReference: y, setFloating: x }),
      [y, x]
    ),
    U = p.useMemo(() => ({ reference: N, floating: S }), [N, S]),
    W = p.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!U.floating) return P;
      const j = Op(U.floating, d.x),
        O = Op(U.floating, d.y);
      return l
        ? {
            ...P,
            transform: "translate(" + j + "px, " + O + "px)",
            ...(Tg(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: j, top: O };
    }, [n, l, U.floating, d.x, d.y]);
  return p.useMemo(
    () => ({ ...d, update: V, refs: q, elements: U, floatingStyles: W }),
    [d, V, q, U, W]
  );
}
const HS = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Ap({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Ap({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  KS = (e, t) => ({ ...LS(e), options: [e, t] }),
  GS = (e, t) => ({ ...FS(e), options: [e, t] }),
  QS = (e, t) => ({ ...BS(e), options: [e, t] }),
  YS = (e, t) => ({ ...zS(e), options: [e, t] }),
  qS = (e, t) => ({ ...$S(e), options: [e, t] }),
  XS = (e, t) => ({ ...US(e), options: [e, t] }),
  ZS = (e, t) => ({ ...HS(e), options: [e, t] });
var JS = "Arrow",
  Mg = p.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return a.jsx(J.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : a.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Mg.displayName = JS;
var eC = Mg;
function tC(e) {
  const [t, n] = p.useState(void 0);
  return (
    Tt(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const u = s.borderBoxSize,
              c = Array.isArray(u) ? u[0] : u;
            (i = c.inlineSize), (l = c.blockSize);
          } else (i = e.offsetWidth), (l = e.offsetHeight);
          n({ width: i, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var _d = "Popper",
  [_g, Xa] = qn(_d),
  [nC, Ag] = _g(_d),
  Og = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = p.useState(null);
    return a.jsx(nC, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Og.displayName = _d;
var Ig = "PopperAnchor",
  Dg = p.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Ag(Ig, n),
      i = p.useRef(null),
      l = me(t, i);
    return (
      p.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : a.jsx(J.div, { ...o, ref: l })
    );
  });
Dg.displayName = Ig;
var Ad = "PopperContent",
  [rC, oC] = _g(Ad),
  Lg = p.forwardRef((e, t) => {
    var X, Gt, je, Ot, cn, Er;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: l = 0,
        avoidCollisions: u = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: w,
        ...g
      } = e,
      b = Ag(Ad, n),
      [v, y] = p.useState(null),
      x = me(t, (dn) => y(dn)),
      [N, S] = p.useState(null),
      C = tC(N),
      E = (C == null ? void 0 : C.width) ?? 0,
      k = (C == null ? void 0 : C.height) ?? 0,
      T = r + (s !== "center" ? "-" + s : ""),
      _ =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(c) ? c : [c],
      D = $.length > 0,
      V = { padding: _, boundary: $.filter(iC), altBoundary: D },
      {
        refs: I,
        floatingStyles: q,
        placement: U,
        isPositioned: W,
        middlewareData: P,
      } = WS({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...dn) =>
          DS(...dn, { animationFrame: m === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          KS({ mainAxis: o + k, alignmentAxis: i }),
          u &&
            GS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? QS() : void 0,
              ...V,
            }),
          u && YS({ ...V }),
          qS({
            ...V,
            apply: ({
              elements: dn,
              rects: Zs,
              availableWidth: dl,
              availableHeight: Js,
            }) => {
              const { width: fl, height: _o } = Zs.reference,
                jr = dn.floating.style;
              jr.setProperty("--radix-popper-available-width", `${dl}px`),
                jr.setProperty("--radix-popper-available-height", `${Js}px`),
                jr.setProperty("--radix-popper-anchor-width", `${fl}px`),
                jr.setProperty("--radix-popper-anchor-height", `${_o}px`);
            },
          }),
          N && ZS({ element: N, padding: l }),
          aC({ arrowWidth: E, arrowHeight: k }),
          h && XS({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [j, O] = $g(U),
      B = xe(w);
    Tt(() => {
      W && (B == null || B());
    }, [W, B]);
    const z = (X = P.arrow) == null ? void 0 : X.x,
      G = (Gt = P.arrow) == null ? void 0 : Gt.y,
      Y = ((je = P.arrow) == null ? void 0 : je.centerOffset) !== 0,
      [ce, ve] = p.useState();
    return (
      Tt(() => {
        v && ve(window.getComputedStyle(v).zIndex);
      }, [v]),
      a.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: W ? q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (Ot = P.transformOrigin) == null ? void 0 : Ot.x,
            (cn = P.transformOrigin) == null ? void 0 : cn.y,
          ].join(" "),
          ...(((Er = P.hide) == null ? void 0 : Er.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: a.jsx(rC, {
          scope: n,
          placedSide: j,
          onArrowChange: S,
          arrowX: z,
          arrowY: G,
          shouldHideArrow: Y,
          children: a.jsx(J.div, {
            "data-side": j,
            "data-align": O,
            ...g,
            ref: x,
            style: { ...g.style, animation: W ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Lg.displayName = Ad;
var Fg = "PopperArrow",
  sC = { top: "bottom", right: "left", bottom: "top", left: "right" },
  zg = p.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = oC(Fg, r),
      i = sC[s.placedSide];
    return a.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: a.jsx(eC, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
zg.displayName = Fg;
function iC(e) {
  return e !== null;
}
var aC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, v, y;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      u = i ? 0 : e.arrowHeight,
      [c, d] = $g(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + l / 2,
      m = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let w = "",
      g = "";
    return (
      c === "bottom"
        ? ((w = i ? f : `${h}px`), (g = `${-u}px`))
        : c === "top"
        ? ((w = i ? f : `${h}px`), (g = `${r.floating.height + u}px`))
        : c === "right"
        ? ((w = `${-u}px`), (g = i ? f : `${m}px`))
        : c === "left" &&
          ((w = `${r.floating.width + u}px`), (g = i ? f : `${m}px`)),
      { data: { x: w, y: g } }
    );
  },
});
function $g(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var lC = Og,
  Ug = Dg,
  Bg = Lg,
  Vg = zg,
  [Za, iP] = qn("Tooltip", [Xa]),
  Od = Xa(),
  Wg = "TooltipProvider",
  uC = 700,
  Ip = "tooltip.open",
  [cC, Hg] = Za(Wg),
  Kg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = uC,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      [i, l] = p.useState(!0),
      u = p.useRef(!1),
      c = p.useRef(0);
    return (
      p.useEffect(() => {
        const d = c.current;
        return () => window.clearTimeout(d);
      }, []),
      a.jsx(cC, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: p.useCallback(() => {
          window.clearTimeout(c.current), l(!1);
        }, []),
        onClose: p.useCallback(() => {
          window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => l(!0), r));
        }, [r]),
        isPointerInTransitRef: u,
        onPointerInTransitChange: p.useCallback((d) => {
          u.current = d;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
Kg.displayName = Wg;
var Gg = "Tooltip",
  [aP, Ja] = Za(Gg),
  ac = "TooltipTrigger",
  dC = p.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ja(ac, n),
      s = Hg(ac, n),
      i = Od(n),
      l = p.useRef(null),
      u = me(t, l, o.onTriggerChange),
      c = p.useRef(!1),
      d = p.useRef(!1),
      f = p.useCallback(() => (c.current = !1), []);
    return (
      p.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      a.jsx(Ug, {
        asChild: !0,
        ...i,
        children: a.jsx(J.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: u,
          onPointerMove: F(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: F(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: F(e.onPointerDown, () => {
            (c.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: F(e.onFocus, () => {
            c.current || o.onOpen();
          }),
          onBlur: F(e.onBlur, o.onClose),
          onClick: F(e.onClick, o.onClose),
        }),
      })
    );
  });
dC.displayName = ac;
var fC = "TooltipPortal",
  [lP, pC] = Za(fC, { forceMount: void 0 }),
  bo = "TooltipContent",
  Qg = p.forwardRef((e, t) => {
    const n = pC(bo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = Ja(bo, e.__scopeTooltip);
    return a.jsx(At, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? a.jsx(Yg, { side: o, ...s, ref: t })
        : a.jsx(mC, { side: o, ...s, ref: t }),
    });
  }),
  mC = p.forwardRef((e, t) => {
    const n = Ja(bo, e.__scopeTooltip),
      r = Hg(bo, e.__scopeTooltip),
      o = p.useRef(null),
      s = me(t, o),
      [i, l] = p.useState(null),
      { trigger: u, onClose: c } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      h = p.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      m = p.useCallback(
        (w, g) => {
          const b = w.currentTarget,
            v = { x: w.clientX, y: w.clientY },
            y = yC(v, b.getBoundingClientRect()),
            x = xC(v, y),
            N = wC(g.getBoundingClientRect()),
            S = NC([...x, ...N]);
          l(S), f(!0);
        },
        [f]
      );
    return (
      p.useEffect(() => () => h(), [h]),
      p.useEffect(() => {
        if (u && d) {
          const w = (b) => m(b, d),
            g = (b) => m(b, u);
          return (
            u.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", g),
            () => {
              u.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [u, d, m, h]),
      p.useEffect(() => {
        if (i) {
          const w = (g) => {
            const b = g.target,
              v = { x: g.clientX, y: g.clientY },
              y =
                (u == null ? void 0 : u.contains(b)) ||
                (d == null ? void 0 : d.contains(b)),
              x = !bC(v, i);
            y ? h() : x && (h(), c());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [u, d, i, c, h]),
      a.jsx(Yg, { ...e, ref: s })
    );
  }),
  [hC, vC] = Za(Gg, { isInside: !1 }),
  Yg = p.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...l
      } = e,
      u = Ja(bo, n),
      c = Od(n),
      { onClose: d } = u;
    return (
      p.useEffect(
        () => (
          document.addEventListener(Ip, d),
          () => document.removeEventListener(Ip, d)
        ),
        [d]
      ),
      p.useEffect(() => {
        if (u.trigger) {
          const f = (h) => {
            const m = h.target;
            m != null && m.contains(u.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [u.trigger, d]),
      a.jsx(Hs, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: a.jsxs(Bg, {
          "data-state": u.stateAttribute,
          ...c,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            a.jsx(_v, { children: r }),
            a.jsx(hC, {
              scope: n,
              isInside: !0,
              children: a.jsx(Dv, {
                id: u.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Qg.displayName = bo;
var qg = "TooltipArrow",
  gC = p.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Od(n);
    return vC(qg, n).isInside ? null : a.jsx(Vg, { ...o, ...r, ref: t });
  });
gC.displayName = qg;
function yC(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function xC(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function wC(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function bC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s].x,
      u = t[s].y,
      c = t[i].x,
      d = t[i].y;
    u > r != d > r && n < ((c - l) * (r - u)) / (d - u) + l && (o = !o);
  }
  return o;
}
function NC(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    SC(t)
  );
}
function SC(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var CC = Kg,
  Xg = Qg;
const EC = CC,
  jC = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    a.jsx(Xg, {
      ref: r,
      sideOffset: t,
      className: he(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
jC.displayName = Xg.displayName;
var el = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  tl = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function kC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function PC(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function RC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Dp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function TC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== Id(i, t.options)) return !1;
    } else if (!Ts(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const u = t.isActive();
    if ((n === "active" && !u) || (n === "inactive" && u)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Fp(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Rs(t.options.mutationKey) !== Rs(s)) return !1;
    } else if (!Ts(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Id(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Rs)(e);
}
function Rs(e) {
  return JSON.stringify(e, (t, n) =>
    lc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Ts(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Ts(e[n], t[n]))
    : !1;
}
function Zg(e, t) {
  if (e === t) return e;
  const n = zp(e) && zp(t);
  if (n || (lc(e) && lc(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      i = s.length,
      l = n ? [] : {};
    let u = 0;
    for (let c = 0; c < i; c++) {
      const d = n ? c : s[c];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), u++)
        : ((l[d] = Zg(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === i && u === o ? e : l;
  }
  return t;
}
function zp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function lc(e) {
  if (!$p(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !$p(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function $p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function MC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function _C(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Zg(e, t)
    : t;
}
function AC(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function OC(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Dd = Symbol();
function Jg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Dd
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var ir,
  Cn,
  ro,
  um,
  IC =
    ((um = class extends el {
      constructor() {
        super();
        te(this, ir);
        te(this, Cn);
        te(this, ro);
        K(this, ro, (t) => {
          if (!tl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Cn) || this.setEventListener(R(this, ro));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, Cn)) == null || t.call(this), K(this, Cn, void 0));
      }
      setEventListener(t) {
        var n;
        K(this, ro, t),
          (n = R(this, Cn)) == null || n.call(this),
          K(
            this,
            Cn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        R(this, ir) !== t && (K(this, ir, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, ir) == "boolean"
          ? R(this, ir)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (ir = new WeakMap()),
    (Cn = new WeakMap()),
    (ro = new WeakMap()),
    um),
  ey = new IC(),
  oo,
  En,
  so,
  cm,
  DC =
    ((cm = class extends el {
      constructor() {
        super();
        te(this, oo, !0);
        te(this, En);
        te(this, so);
        K(this, so, (t) => {
          if (!tl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, En) || this.setEventListener(R(this, so));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, En)) == null || t.call(this), K(this, En, void 0));
      }
      setEventListener(t) {
        var n;
        K(this, so, t),
          (n = R(this, En)) == null || n.call(this),
          K(this, En, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        R(this, oo) !== t &&
          (K(this, oo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, oo);
      }
    }),
    (oo = new WeakMap()),
    (En = new WeakMap()),
    (so = new WeakMap()),
    cm),
  Na = new DC();
function LC() {
  let e, t;
  const n = new Promise((o, s) => {
    (e = o), (t = s);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function FC(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ty(e) {
  return (e ?? "online") === "online" ? Na.isOnline() : !0;
}
var ny = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ql(e) {
  return e instanceof ny;
}
function ry(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = LC(),
    i = (g) => {
      var b;
      r || (h(new ny(g)), (b = e.abort) == null || b.call(e));
    },
    l = () => {
      t = !0;
    },
    u = () => {
      t = !1;
    },
    c = () =>
      ey.isFocused() &&
      (e.networkMode === "always" || Na.isOnline()) &&
      e.canRun(),
    d = () => ty(e.networkMode) && e.canRun(),
    f = (g) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, g),
        o == null || o(),
        s.resolve(g));
    },
    h = (g) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, g),
        o == null || o(),
        s.reject(g));
    },
    m = () =>
      new Promise((g) => {
        var b;
        (o = (v) => {
          (r || c()) && g(v);
        }),
          (b = e.onPause) == null || b.call(e);
      }).then(() => {
        var g;
        (o = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    w = () => {
      if (r) return;
      let g;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        g = b ?? e.fn();
      } catch (v) {
        g = Promise.reject(v);
      }
      Promise.resolve(g)
        .then(f)
        .catch((v) => {
          var C;
          if (r) return;
          const y = e.retry ?? (tl ? 0 : 3),
            x = e.retryDelay ?? FC,
            N = typeof x == "function" ? x(n, v) : x,
            S =
              y === !0 ||
              (typeof y == "number" && n < y) ||
              (typeof y == "function" && y(n, v));
          if (t || !S) {
            h(v);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, v),
            MC(N)
              .then(() => (c() ? void 0 : m()))
              .then(() => {
                t ? h(v) : w();
              });
        });
    };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: l,
    continueRetry: u,
    canStart: d,
    start: () => (d() ? w() : m().then(w), s),
  };
}
function zC() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const s = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    i = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((u) => {
                n(u);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let u;
      t++;
      try {
        u = l();
      } finally {
        t--, t || i();
      }
      return u;
    },
    batchCalls:
      (l) =>
      (...u) => {
        s(() => {
          l(...u);
        });
      },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var $e = zC(),
  ar,
  dm,
  oy =
    ((dm = class {
      constructor() {
        te(this, ar);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          PC(this.gcTime) &&
            K(
              this,
              ar,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (tl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        R(this, ar) && (clearTimeout(R(this, ar)), K(this, ar, void 0));
      }
    }),
    (ar = new WeakMap()),
    dm),
  io,
  ao,
  at,
  lr,
  Ie,
  Is,
  ur,
  St,
  Yt,
  fm,
  $C =
    ((fm = class extends oy {
      constructor(t) {
        super();
        te(this, St);
        te(this, io);
        te(this, ao);
        te(this, at);
        te(this, lr);
        te(this, Ie);
        te(this, Is);
        te(this, ur);
        K(this, ur, !1),
          K(this, Is, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          K(this, lr, t.client),
          K(this, at, R(this, lr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          K(this, io, BC(this.options)),
          (this.state = t.state ?? R(this, io)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = R(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...R(this, Is), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, at).remove(this);
      }
      setData(t, n) {
        const r = _C(this.state.data, t, this.options);
        return (
          _e(this, St, Yt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        _e(this, St, Yt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = R(this, Ie)) == null ? void 0 : r.promise;
        return (
          (o = R(this, Ie)) == null || o.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, io));
      }
      isActive() {
        return this.observers.some((t) => TC(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Dd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !RC(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, at).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Ie) &&
              (R(this, ur)
                ? R(this, Ie).cancel({ revert: !0 })
                : R(this, Ie).cancelRetry()),
            this.scheduleGc()),
          R(this, at).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          _e(this, St, Yt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Ie))
            return R(this, Ie).continueRetry(), R(this, Ie).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (K(this, ur, !0), r.signal),
            });
          },
          s = () => {
            const f = Jg(this.options, n),
              h = {
                client: R(this, lr),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(h),
              K(this, ur, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: R(this, lr),
            state: this.state,
            fetchFn: s,
          };
        o(i),
          (u = this.options.behavior) == null || u.onFetch(i, this),
          K(this, ao, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = i.fetchOptions) == null ? void 0 : c.meta)) &&
            _e(this, St, Yt).call(this, {
              type: "fetch",
              meta: (d = i.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, m, w, g;
          (Ql(f) && f.silent) ||
            _e(this, St, Yt).call(this, { type: "error", error: f }),
            Ql(f) ||
              ((m = (h = R(this, at).config).onError) == null ||
                m.call(h, f, this),
              (g = (w = R(this, at).config).onSettled) == null ||
                g.call(w, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          K(
            this,
            Ie,
            ry({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: i.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, m, w, g;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (b) {
                  l(b);
                  return;
                }
                (m = (h = R(this, at).config).onSuccess) == null ||
                  m.call(h, f, this),
                  (g = (w = R(this, at).config).onSettled) == null ||
                    g.call(w, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                _e(this, St, Yt).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                _e(this, St, Yt).call(this, { type: "pause" });
              },
              onContinue: () => {
                _e(this, St, Yt).call(this, { type: "continue" });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            })
          ),
          R(this, Ie).start()
        );
      }
    }),
    (io = new WeakMap()),
    (ao = new WeakMap()),
    (at = new WeakMap()),
    (lr = new WeakMap()),
    (Ie = new WeakMap()),
    (Is = new WeakMap()),
    (ur = new WeakMap()),
    (St = new WeakSet()),
    (Yt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...UC(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Ql(o) && o.revert && R(this, ao)
              ? { ...R(this, ao), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, at).notify({ query: this, type: "updated", action: t });
        });
    }),
    fm);
function UC(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ty(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function BC(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Lt,
  pm,
  VC =
    ((pm = class extends el {
      constructor(t = {}) {
        super();
        te(this, Lt);
        (this.config = t), K(this, Lt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? Id(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new $C({
              client: t,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        R(this, Lt).has(t.queryHash) ||
          (R(this, Lt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Lt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Lt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Lt).get(t);
      }
      getAll() {
        return [...R(this, Lt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Lp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Lp(t, r)) : n;
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Lt = new WeakMap()),
    pm),
  Ft,
  Fe,
  cr,
  zt,
  yn,
  mm,
  WC =
    ((mm = class extends oy {
      constructor(t) {
        super();
        te(this, zt);
        te(this, Ft);
        te(this, Fe);
        te(this, cr);
        (this.mutationId = t.mutationId),
          K(this, Fe, t.mutationCache),
          K(this, Ft, []),
          (this.state = t.state || HC()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Ft).includes(t) ||
          (R(this, Ft).push(t),
          this.clearGcTimeout(),
          R(this, Fe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        K(
          this,
          Ft,
          R(this, Ft).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          R(this, Fe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        R(this, Ft).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, Fe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, cr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, i, l, u, c, d, f, h, m, w, g, b, v, y, x, N, S, C, E;
        K(
          this,
          cr,
          ry({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (k, T) => {
              _e(this, zt, yn).call(this, {
                type: "failed",
                failureCount: k,
                error: T,
              });
            },
            onPause: () => {
              _e(this, zt, yn).call(this, { type: "pause" });
            },
            onContinue: () => {
              _e(this, zt, yn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, Fe).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !R(this, cr).canStart();
        try {
          if (!n) {
            _e(this, zt, yn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((s = (o = R(this, Fe).config).onMutate) == null
                ? void 0
                : s.call(o, t, this));
            const T = await ((l = (i = this.options).onMutate) == null
              ? void 0
              : l.call(i, t));
            T !== this.state.context &&
              _e(this, zt, yn).call(this, {
                type: "pending",
                context: T,
                variables: t,
                isPaused: r,
              });
          }
          const k = await R(this, cr).start();
          return (
            await ((c = (u = R(this, Fe).config).onSuccess) == null
              ? void 0
              : c.call(u, k, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, k, t, this.state.context)),
            await ((m = (h = R(this, Fe).config).onSettled) == null
              ? void 0
              : m.call(
                  h,
                  k,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((g = (w = this.options).onSettled) == null
              ? void 0
              : g.call(w, k, null, t, this.state.context)),
            _e(this, zt, yn).call(this, { type: "success", data: k }),
            k
          );
        } catch (k) {
          try {
            throw (
              (await ((v = (b = R(this, Fe).config).onError) == null
                ? void 0
                : v.call(b, k, t, this.state.context, this)),
              await ((x = (y = this.options).onError) == null
                ? void 0
                : x.call(y, k, t, this.state.context)),
              await ((S = (N = R(this, Fe).config).onSettled) == null
                ? void 0
                : S.call(
                    N,
                    void 0,
                    k,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((E = (C = this.options).onSettled) == null
                ? void 0
                : E.call(C, void 0, k, t, this.state.context)),
              k)
            );
          } finally {
            _e(this, zt, yn).call(this, { type: "error", error: k });
          }
        } finally {
          R(this, Fe).runNext(this);
        }
      }
    }),
    (Ft = new WeakMap()),
    (Fe = new WeakMap()),
    (cr = new WeakMap()),
    (zt = new WeakSet()),
    (yn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          R(this, Ft).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, Fe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    mm);
function HC() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Zt,
  Ct,
  Ds,
  hm,
  KC =
    ((hm = class extends el {
      constructor(t = {}) {
        super();
        te(this, Zt);
        te(this, Ct);
        te(this, Ds);
        (this.config = t),
          K(this, Zt, new Set()),
          K(this, Ct, new Map()),
          K(this, Ds, 0);
      }
      build(t, n, r) {
        const o = new WC({
          mutationCache: this,
          mutationId: ++ti(this, Ds)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        R(this, Zt).add(t);
        const n = Si(t);
        if (typeof n == "string") {
          const r = R(this, Ct).get(n);
          r ? r.push(t) : R(this, Ct).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (R(this, Zt).delete(t)) {
          const n = Si(t);
          if (typeof n == "string") {
            const r = R(this, Ct).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && R(this, Ct).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Si(t);
        if (typeof n == "string") {
          const r = R(this, Ct).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Si(t);
        if (typeof n == "string") {
          const o =
            (r = R(this, Ct).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        $e.batch(() => {
          R(this, Zt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            R(this, Zt).clear(),
            R(this, Ct).clear();
        });
      }
      getAll() {
        return Array.from(R(this, Zt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Fp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Fp(t, n));
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return $e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt)))
        );
      }
    }),
    (Zt = new WeakMap()),
    (Ct = new WeakMap()),
    (Ds = new WeakMap()),
    hm);
function Si(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Up(e) {
  return {
    onFetch: (t, n) => {
      var d, f, h, m, w;
      const r = t.options,
        o =
          (h =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        s = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        u = 0;
      const c = async () => {
        let g = !1;
        const b = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          v = Jg(t.options, t.fetchOptions),
          y = async (x, N, S) => {
            if (g) return Promise.reject();
            if (N == null && x.pages.length) return Promise.resolve(x);
            const C = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: N,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            b(C);
            const E = await v(C),
              { maxPages: k } = t.options,
              T = S ? OC : AC;
            return {
              pages: T(x.pages, E, k),
              pageParams: T(x.pageParams, N, k),
            };
          };
        if (o && s.length) {
          const x = o === "backward",
            N = x ? GC : Bp,
            S = { pages: s, pageParams: i },
            C = N(r, S);
          l = await y(S, C, x);
        } else {
          const x = e ?? s.length;
          do {
            const N = u === 0 ? i[0] ?? r.initialPageParam : Bp(r, l);
            if (u > 0 && N == null) break;
            (l = await y(l, N)), u++;
          } while (u < x);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, b;
            return (b = (g = t.options).persister) == null
              ? void 0
              : b.call(
                  g,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function Bp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function GC(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ge,
  jn,
  kn,
  lo,
  uo,
  Pn,
  co,
  fo,
  vm,
  QC =
    ((vm = class {
      constructor(e = {}) {
        te(this, ge);
        te(this, jn);
        te(this, kn);
        te(this, lo);
        te(this, uo);
        te(this, Pn);
        te(this, co);
        te(this, fo);
        K(this, ge, e.queryCache || new VC()),
          K(this, jn, e.mutationCache || new KC()),
          K(this, kn, e.defaultOptions || {}),
          K(this, lo, new Map()),
          K(this, uo, new Map()),
          K(this, Pn, 0);
      }
      mount() {
        ti(this, Pn)._++,
          R(this, Pn) === 1 &&
            (K(
              this,
              co,
              ey.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onFocus());
              })
            ),
            K(
              this,
              fo,
              Na.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ti(this, Pn)._--,
          R(this, Pn) === 0 &&
            ((e = R(this, co)) == null || e.call(this),
            K(this, co, void 0),
            (t = R(this, fo)) == null || t.call(this),
            K(this, fo, void 0));
      }
      isFetching(e) {
        return R(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, jn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = R(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Dp(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return R(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = R(this, ge).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = kC(t, s);
        if (i !== void 0)
          return R(this, ge)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return $e.batch(() =>
          R(this, ge)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, ge);
        $e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, ge);
        return $e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return $e.batch(
          () => (
            R(this, ge)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(Nt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(Dp(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Up(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Up(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Na.isOnline()
          ? R(this, jn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, ge);
      }
      getMutationCache() {
        return R(this, jn);
      }
      getDefaultOptions() {
        return R(this, kn);
      }
      setDefaultOptions(e) {
        K(this, kn, e);
      }
      setQueryDefaults(e, t) {
        R(this, lo).set(Rs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, lo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ts(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, uo).set(Rs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, uo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ts(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, kn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Id(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Dd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, kn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, ge).clear(), R(this, jn).clear();
      }
    }),
    (ge = new WeakMap()),
    (jn = new WeakMap()),
    (kn = new WeakMap()),
    (lo = new WeakMap()),
    (uo = new WeakMap()),
    (Pn = new WeakMap()),
    (co = new WeakMap()),
    (fo = new WeakMap()),
    vm),
  YC = p.createContext(void 0),
  qC = ({ client: e, children: t }) => (
    p.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    a.jsx(YC.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
var Mn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mn || (Mn = {}));
const Vp = "popstate";
function XC(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return uc(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Sa(o);
  }
  return JC(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sy(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ZC() {
  return Math.random().toString(36).substr(2, 8);
}
function Wp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ms(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? To(t) : t,
      { state: n, key: (t && t.key) || r || ZC() }
    )
  );
}
function Sa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function To(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function JC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Mn.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), i.replaceState(Ms({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    l = Mn.Pop;
    let b = d(),
      v = b == null ? null : b - c;
    (c = b), u && u({ action: l, location: g.location, delta: v });
  }
  function h(b, v) {
    l = Mn.Push;
    let y = uc(g.location, b, v);
    c = d() + 1;
    let x = Wp(y, c),
      N = g.createHref(y);
    try {
      i.pushState(x, "", N);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(N);
    }
    s && u && u({ action: l, location: g.location, delta: 1 });
  }
  function m(b, v) {
    l = Mn.Replace;
    let y = uc(g.location, b, v);
    c = d();
    let x = Wp(y, c),
      N = g.createHref(y);
    i.replaceState(x, "", N),
      s && u && u({ action: l, location: g.location, delta: 0 });
  }
  function w(b) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      y = typeof b == "string" ? b : Sa(b);
    return (
      (y = y.replace(/ $/, "%20")),
      we(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, v)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(b) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Vp, f),
        (u = b),
        () => {
          o.removeEventListener(Vp, f), (u = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: w,
    encodeLocation(b) {
      let v = w(b);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: h,
    replace: m,
    go(b) {
      return i.go(b);
    },
  };
  return g;
}
var Hp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Hp || (Hp = {}));
function eE(e, t, n) {
  return n === void 0 && (n = "/"), tE(e, t, n);
}
function tE(e, t, n, r) {
  let o = typeof t == "string" ? To(t) : t,
    s = No(o.pathname || "/", n);
  if (s == null) return null;
  let i = iy(e);
  nE(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) {
    let c = pE(s);
    l = dE(i[u], c);
  }
  return l;
}
function iy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let u = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (we(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = $n([r, u.relativePath]),
      d = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (we(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      iy(s.children, t, d, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: uE(c, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let u of ay(s.path)) o(s, i, u);
    }),
    t
  );
}
function ay(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = ay(r.join("/")),
    l = [];
  return (
    l.push(...i.map((u) => (u === "" ? s : [s, u].join("/")))),
    o && l.push(...i),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function nE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const rE = /^:[\w-]+$/,
  oE = 3,
  sE = 2,
  iE = 1,
  aE = 10,
  lE = -2,
  Kp = (e) => e === "*";
function uE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Kp) && (r += lE),
    t && (r += sE),
    n
      .filter((o) => !Kp(o))
      .reduce((o, s) => o + (rE.test(s) ? oE : s === "" ? iE : aE), r)
  );
}
function cE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function dE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let u = r[l],
      c = l === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = cc(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      h = u.route;
    if (!f) return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: $n([s, f.pathname]),
        pathnameBase: gE($n([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = $n([s, f.pathnameBase]));
  }
  return i;
}
function cc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: m } = d;
      if (h === "*") {
        let g = l[f] || "";
        i = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = l[f];
      return (
        m && !w ? (c[h] = void 0) : (c[h] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function fE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sy(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function pE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      sy(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function No(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function mE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? To(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : hE(n, t)) : t,
    search: yE(r),
    hash: xE(o),
  };
}
function hE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ly(e, t) {
  let n = vE(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function uy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = To(e))
    : ((o = Ms({}, e)),
      we(
        !o.pathname || !o.pathname.includes("?"),
        Yl("?", "pathname", "search", o)
      ),
      we(
        !o.pathname || !o.pathname.includes("#"),
        Yl("#", "pathname", "hash", o)
      ),
      we(!o.search || !o.search.includes("#"), Yl("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    l;
  if (i == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = mE(o, l),
    c = i && i !== "/" && i.endsWith("/"),
    d = (s || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const $n = (e) => e.join("/").replace(/\/\/+/g, "/"),
  gE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  yE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  xE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function wE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const cy = ["post", "put", "patch", "delete"];
new Set(cy);
const bE = ["get", ...cy];
new Set(bE);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
const nl = p.createContext(null),
  dy = p.createContext(null),
  Xn = p.createContext(null),
  rl = p.createContext(null),
  br = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fy = p.createContext(null);
function NE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ys() || we(!1);
  let { basename: r, navigator: o } = p.useContext(Xn),
    { hash: s, pathname: i, search: l } = ol(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : $n([r, i])),
    o.createHref({ pathname: u, search: l, hash: s })
  );
}
function Ys() {
  return p.useContext(rl) != null;
}
function Nr() {
  return Ys() || we(!1), p.useContext(rl).location;
}
function py(e) {
  p.useContext(Xn).static || p.useLayoutEffect(e);
}
function SE() {
  let { isDataRoute: e } = p.useContext(br);
  return e ? DE() : CE();
}
function CE() {
  Ys() || we(!1);
  let e = p.useContext(nl),
    { basename: t, future: n, navigator: r } = p.useContext(Xn),
    { matches: o } = p.useContext(br),
    { pathname: s } = Nr(),
    i = JSON.stringify(ly(o, n.v7_relativeSplatPath)),
    l = p.useRef(!1);
  return (
    py(() => {
      l.current = !0;
    }),
    p.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = uy(c, JSON.parse(i), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : $n([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, s, e]
    )
  );
}
function ol(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(Xn),
    { matches: o } = p.useContext(br),
    { pathname: s } = Nr(),
    i = JSON.stringify(ly(o, r.v7_relativeSplatPath));
  return p.useMemo(() => uy(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function EE(e, t) {
  return jE(e, t);
}
function jE(e, t, n, r) {
  Ys() || we(!1);
  let { navigator: o, static: s } = p.useContext(Xn),
    { matches: i } = p.useContext(br),
    l = i[i.length - 1],
    u = l ? l.params : {};
  l && l.pathname;
  let c = l ? l.pathnameBase : "/";
  l && l.route;
  let d = Nr(),
    f;
  if (t) {
    var h;
    let v = typeof t == "string" ? To(t) : t;
    c === "/" || ((h = v.pathname) != null && h.startsWith(c)) || we(!1),
      (f = v);
  } else f = d;
  let m = f.pathname || "/",
    w = m;
  if (c !== "/") {
    let v = c.replace(/^\//, "").split("/");
    w = "/" + m.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let g = eE(e, { pathname: w }),
    b = ME(
      g &&
        g.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, u, v.params),
            pathname: $n([
              c,
              o.encodeLocation
                ? o.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? c
                : $n([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && b
    ? p.createElement(
        rl.Provider,
        {
          value: {
            location: _s(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: Mn.Pop,
          },
        },
        b
      )
    : b;
}
function kE() {
  let e = IE(),
    t = wE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? p.createElement("pre", { style: o }, n) : null,
    null
  );
}
const PE = p.createElement(kE, null);
class RE extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          br.Provider,
          { value: this.props.routeContext },
          p.createElement(fy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function TE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.useContext(nl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(br.Provider, { value: t }, r)
  );
}
function ME(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = i.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || we(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: m } = n,
          w =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, h) => {
    let m,
      w = !1,
      g = null,
      b = null;
    n &&
      ((m = l && f.route.id ? l[f.route.id] : void 0),
      (g = f.route.errorElement || PE),
      u &&
        (c < 0 && h === 0
          ? (LE("route-fallback"), (w = !0), (b = null))
          : c === h &&
            ((w = !0), (b = f.route.hydrateFallbackElement || null))));
    let v = t.concat(i.slice(0, h + 1)),
      y = () => {
        let x;
        return (
          m
            ? (x = g)
            : w
            ? (x = b)
            : f.route.Component
            ? (x = p.createElement(f.route.Component, null))
            : f.route.element
            ? (x = f.route.element)
            : (x = d),
          p.createElement(TE, {
            match: f,
            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? p.createElement(RE, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: m,
          children: y(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var my = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(my || {}),
  hy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(hy || {});
function _E(e) {
  let t = p.useContext(nl);
  return t || we(!1), t;
}
function AE(e) {
  let t = p.useContext(dy);
  return t || we(!1), t;
}
function OE(e) {
  let t = p.useContext(br);
  return t || we(!1), t;
}
function vy(e) {
  let t = OE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function IE() {
  var e;
  let t = p.useContext(fy),
    n = AE(),
    r = vy();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function DE() {
  let { router: e } = _E(my.UseNavigateStable),
    t = vy(hy.UseNavigateStable),
    n = p.useRef(!1);
  return (
    py(() => {
      n.current = !0;
    }),
    p.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, _s({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Gp = {};
function LE(e, t, n) {
  Gp[e] || (Gp[e] = !0);
}
function FE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Or(e) {
  we(!1);
}
function zE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Mn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  Ys() && we(!1);
  let u = t.replace(/^\/*/, "/"),
    c = p.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: i,
        future: _s({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, s, i]
    );
  typeof r == "string" && (r = To(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: m = null,
      key: w = "default",
    } = r,
    g = p.useMemo(() => {
      let b = No(d, u);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: h, state: m, key: w },
            navigationType: o,
          };
    }, [u, d, f, h, m, w, o]);
  return g == null
    ? null
    : p.createElement(
        Xn.Provider,
        { value: c },
        p.createElement(rl.Provider, { children: n, value: g })
      );
}
function $E(e) {
  let { children: t, location: n } = e;
  return EE(dc(t), n);
}
new Promise(() => {});
function dc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.Children.forEach(e, (r, o) => {
      if (!p.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === p.Fragment) {
        n.push.apply(n, dc(r.props.children, s));
        return;
      }
      r.type !== Or && we(!1), !r.props.index || !r.props.children || we(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = dc(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ca() {
  return (
    (Ca = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ca.apply(this, arguments)
  );
}
function gy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function UE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function BE(e, t) {
  return e.button === 0 && (!t || t === "_self") && !UE(e);
}
const VE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  WE = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  HE = "6";
try {
  window.__reactRouterVersion = HE;
} catch {}
const KE = p.createContext({ isTransitioning: !1 }),
  GE = "startTransition",
  Qp = Pm[GE];
function QE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = p.useRef();
  s.current == null && (s.current = XC({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, u] = p.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    d = p.useCallback(
      (f) => {
        c && Qp ? Qp(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    p.useLayoutEffect(() => i.listen(d), [i, d]),
    p.useEffect(() => FE(r), [r]),
    p.createElement(zE, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const YE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  qE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kn = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: l,
        target: u,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = gy(t, VE),
      { basename: m } = p.useContext(Xn),
      w,
      g = !1;
    if (typeof c == "string" && qE.test(c) && ((w = c), YE))
      try {
        let x = new URL(window.location.href),
          N = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
          S = No(N.pathname, m);
        N.origin === x.origin && S != null
          ? (c = S + N.search + N.hash)
          : (g = !0);
      } catch {}
    let b = NE(c, { relative: o }),
      v = ZE(c, {
        replace: i,
        state: l,
        target: u,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      });
    function y(x) {
      r && r(x), x.defaultPrevented || v(x);
    }
    return p.createElement(
      "a",
      Ca({}, h, { href: w || b, onClick: g || s ? r : y, ref: n, target: u })
    );
  }),
  He = p.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: s = "",
        end: i = !1,
        style: l,
        to: u,
        viewTransition: c,
        children: d,
      } = t,
      f = gy(t, WE),
      h = ol(u, { relative: f.relative }),
      m = Nr(),
      w = p.useContext(dy),
      { navigator: g, basename: b } = p.useContext(Xn),
      v = w != null && JE(h) && c === !0,
      y = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
      x = m.pathname,
      N =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    o ||
      ((x = x.toLowerCase()),
      (N = N ? N.toLowerCase() : null),
      (y = y.toLowerCase())),
      N && b && (N = No(N, b) || N);
    const S = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
    let C = x === y || (!i && x.startsWith(y) && x.charAt(S) === "/"),
      E =
        N != null &&
        (N === y || (!i && N.startsWith(y) && N.charAt(y.length) === "/")),
      k = { isActive: C, isPending: E, isTransitioning: v },
      T = C ? r : void 0,
      _;
    typeof s == "function"
      ? (_ = s(k))
      : (_ = [
          s,
          C ? "active" : null,
          E ? "pending" : null,
          v ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let $ = typeof l == "function" ? l(k) : l;
    return p.createElement(
      Kn,
      Ca({}, f, {
        "aria-current": T,
        className: _,
        ref: n,
        style: $,
        to: u,
        viewTransition: c,
      }),
      typeof d == "function" ? d(k) : d
    );
  });
var fc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fc || (fc = {}));
var Yp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yp || (Yp = {}));
function XE(e) {
  let t = p.useContext(nl);
  return t || we(!1), t;
}
function ZE(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    u = SE(),
    c = Nr(),
    d = ol(e, { relative: i });
  return p.useCallback(
    (f) => {
      if (BE(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Sa(c) === Sa(d);
        u(e, {
          replace: h,
          state: o,
          preventScrollReset: s,
          relative: i,
          viewTransition: l,
        });
      }
    },
    [c, u, d, r, o, n, e, s, i, l]
  );
}
function JE(e, t) {
  t === void 0 && (t = {});
  let n = p.useContext(KE);
  n == null && we(!1);
  let { basename: r } = XE(fc.useViewTransitionState),
    o = ol(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = No(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = No(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return cc(o.pathname, i) != null || cc(o.pathname, s) != null;
}
const ej = () =>
    a.jsxs("section", {
      className:
        "relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-ips-neutral to-ips-neutral-100",
      children: [
        a.jsx("div", {
          className:
            "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10",
        }),
        a.jsxs("div", {
          className: "section-container relative z-10",
          children: [
            a.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                a.jsxs("div", {
                  className: "flex flex-col animate-fade-up",
                  children: [
                    a.jsx("span", {
                      className:
                        "inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-6",
                      children: "Over 20 Years of Excellence",
                    }),
                    a.jsxs("h1", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6",
                      children: [
                        "Connecting ",
                        a.jsx("span", {
                          className: "text-ips-blue",
                          children: "Talent",
                        }),
                        " with ",
                        a.jsx("span", {
                          className: "text-ips-blue",
                          children: "Opportunity",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      className:
                        "text-lg md:text-xl text-ips-neutral-800/80 mb-8 max-w-2xl",
                      children:
                        "IPS Manpower is one of Nepal's premier manpower agencies, formed through the merger of 5 leading agencies to provide unparalleled recruitment services worldwide.",
                    }),
                    a.jsxs("div", {
                      className: "flex flex-col sm:flex-row gap-4",
                      children: [
                        a.jsxs(Kn, {
                          to: "/contact",
                          className:
                            "btn-primary flex items-center justify-center",
                          children: [
                            "Get in Touch",
                            a.jsx(nr, { size: 16, className: "ml-2" }),
                          ],
                        }),
                        a.jsx(Kn, {
                          to: "/services",
                          className:
                            "btn-secondary flex items-center justify-center",
                          children: "Our Services",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "hidden lg:block",
                  children: a.jsx("div", {
                    className: "relative",
                    children: a.jsxs("div", {
                      className:
                        "glass-card rounded-2xl p-8 shadow-elegant-lg animate-fade-in",
                      children: [
                        a.jsx("img", {
                          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                          alt: "Professional meeting",
                          className: "rounded-lg w-full h-auto object-cover",
                        }),
                        a.jsx("div", {
                          className:
                            "absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-elegant",
                          children: a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              a.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full",
                              }),
                              a.jsx("span", {
                                className: "text-ips-neutral-900 font-medium",
                                children: "20+ Years Experience",
                              }),
                            ],
                          }),
                        }),
                        a.jsx("div", {
                          className:
                            "absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-elegant",
                          children: a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              a.jsx("div", {
                                className: "w-3 h-3 bg-ips-blue rounded-full",
                              }),
                              a.jsx("span", {
                                className: "text-ips-neutral-900 font-medium",
                                children: "Top Rated Agency",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            a.jsx("div", {
              className: "mt-20 pt-10 border-t border-ips-neutral-200",
              children: a.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center",
                    children: [
                      a.jsx("h3", {
                        className:
                          "text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900",
                        children: "20+",
                      }),
                      a.jsx("p", {
                        className: "text-ips-neutral-800/80",
                        children: "Years Experience",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "text-center",
                    children: [
                      a.jsx("h3", {
                        className:
                          "text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900",
                        children: "5000+",
                      }),
                      a.jsx("p", {
                        className: "text-ips-neutral-800/80",
                        children: "Professionals Placed",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "text-center",
                    children: [
                      a.jsx("h3", {
                        className:
                          "text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900",
                        children: "25+",
                      }),
                      a.jsx("p", {
                        className: "text-ips-neutral-800/80",
                        children: "Countries Served",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "text-center",
                    children: [
                      a.jsx("h3", {
                        className:
                          "text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900",
                        children: "100+",
                      }),
                      a.jsx("p", {
                        className: "text-ips-neutral-800/80",
                        children: "Corporate Clients",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  tj = () =>
    a.jsx("section", {
      className: "py-20 bg-ips-neutral",
      children: a.jsxs("div", {
        className: "section-container",
        children: [
          a.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              a.jsx("h2", {
                className: "section-title",
                children: "About IPS Manpower",
              }),
              a.jsx("p", {
                className: "section-subtitle",
                children:
                  "A merger of 5 leading agencies creating Nepal's premier manpower solution.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [
              a.jsxs("div", {
                className: "relative",
                children: [
                  a.jsx("div", {
                    className: "relative z-10",
                    children: a.jsx("img", {
                      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                      alt: "IPS Manpower team",
                      className:
                        "rounded-lg shadow-elegant object-cover w-full h-auto",
                    }),
                  }),
                  a.jsx("div", {
                    className:
                      "absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-ips-blue/10 rounded-lg -z-10",
                  }),
                  a.jsx("div", {
                    className:
                      "absolute top-0 left-0 transform -translate-y-1/4 -translate-x-1/4 w-1/2 h-1/2 bg-ips-blue-light/20 rounded-lg -z-10",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "space-y-8",
                children: [
                  a.jsx("h3", {
                    className:
                      "text-2xl md:text-3xl font-display font-medium text-ips-neutral-900",
                    children:
                      "More than two decades of excellence in manpower solutions",
                  }),
                  a.jsx("p", {
                    className: "text-ips-neutral-800/80",
                    children:
                      "Established over 20 years ago, IPS Manpower has grown to become one of Nepal's most trusted and respected manpower agencies. Our unique strength comes from the merger of 5 leading agencies, combining their expertise, networks, and resources to provide unparalleled service.",
                  }),
                  a.jsx("p", {
                    className: "text-ips-neutral-800/80",
                    children:
                      "We specialize in connecting skilled Nepalese professionals with employers around the globe, ensuring the perfect match between talent and opportunity.",
                  }),
                  a.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          a.jsx("div", {
                            className:
                              "flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5",
                            children: a.jsx(Qo, {
                              size: 16,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800",
                            children:
                              "Formed through the merger of 5 leading manpower agencies",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          a.jsx("div", {
                            className:
                              "flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5",
                            children: a.jsx(Qo, {
                              size: 16,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800",
                            children: "Over 20 years of industry experience",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          a.jsx("div", {
                            className:
                              "flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5",
                            children: a.jsx(Qo, {
                              size: 16,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800",
                            children:
                              "Extensive global network of employers and partners",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          a.jsx("div", {
                            className:
                              "flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5",
                            children: a.jsx(Qo, {
                              size: 16,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800",
                            children: "Rigorous selection and training process",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "pt-4",
                    children: a.jsx(Kn, {
                      to: "/about",
                      className: "btn-primary inline-block",
                      children: "Learn More About Us",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  nj = () => {
    const e = [
      {
        icon: a.jsx(Nd, { size: 32, className: "text-white" }),
        title: "Recruitment & Selection",
        description:
          "We identify and select the best candidates through our rigorous screening process.",
      },
      {
        icon: a.jsx(Gs, { size: 32, className: "text-white" }),
        title: "International Placement",
        description:
          "We connect Nepalese talent with employment opportunities worldwide.",
      },
      {
        icon: a.jsx(ug, { size: 32, className: "text-white" }),
        title: "Documentation Support",
        description:
          "Complete assistance with visa processing and legal documentation.",
      },
      {
        icon: a.jsx(Ga, { size: 32, className: "text-white" }),
        title: "Corporate Staffing",
        description:
          "Customized staffing solutions for businesses of all sizes.",
      },
      {
        icon: a.jsx(ig, { size: 32, className: "text-white" }),
        title: "Skills Training",
        description:
          "Pre-departure training to prepare candidates for international work environments.",
      },
      {
        icon: a.jsx(tc, { size: 32, className: "text-white" }),
        title: "Ethical Recruitment",
        description:
          "We adhere to the highest ethical standards in all our recruitment practices.",
      },
    ];
    return a.jsx("section", {
      id: "services",
      className: "py-24 bg-gradient-to-b from-ips-neutral to-white",
      children: a.jsxs("div", {
        className: "section-container",
        children: [
          a.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              a.jsx("span", {
                className:
                  "inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-3",
                children: "Our Expertise",
              }),
              a.jsx("h2", {
                className: "section-title",
                children: "Our Services",
              }),
              a.jsx("p", {
                className: "section-subtitle",
                children:
                  "Comprehensive manpower solutions tailored to meet the needs of both job seekers and employers.",
              }),
            ],
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: e.map((t, n) =>
              a.jsxs(
                "div",
                {
                  className:
                    "relative overflow-hidden rounded-xl transition-all duration-300 group hover:shadow-2xl",
                  children: [
                    a.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-r from-ips-blue to-ips-blue-dark rounded-xl transform transition-transform duration-500 group-hover:scale-105 -z-10",
                    }),
                    a.jsxs("div", {
                      className:
                        "glass-card backdrop-blur-lg bg-white/10 border border-white/30 p-8 rounded-xl h-full flex flex-col relative z-10",
                      children: [
                        a.jsx("div", {
                          className:
                            "h-16 w-16 rounded-xl bg-ips-blue flex items-center justify-center mb-6 shadow-lg",
                          children: t.icon,
                        }),
                        a.jsx("h3", {
                          className:
                            "text-xl font-display font-semibold text-ips-neutral-900 mb-3",
                          children: t.title,
                        }),
                        a.jsx("p", {
                          className: "text-ips-neutral-800 mb-4 flex-grow",
                          children: t.description,
                        }),
                      ],
                    }),
                  ],
                },
                n
              )
            ),
          }),
          a.jsx("div", {
            className: "text-center mt-16",
            children: a.jsx(Kn, {
              to: "/services",
              className:
                "btn-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all",
              children: "View All Services",
            }),
          }),
        ],
      }),
    });
  },
  yy = () => {
    const [e, t] = p.useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }),
      [n, r] = p.useState(!1),
      o = (i) => {
        const { name: l, value: u } = i.target;
        t((c) => ({ ...c, [l]: u }));
      },
      s = async (i) => {
        i.preventDefault(),
          r(!0),
          setTimeout(() => {
            console.log("Form submitted:", e),
              $N.success(
                "Message sent successfully! We'll get back to you soon."
              ),
              t({ name: "", email: "", phone: "", subject: "", message: "" }),
              r(!1);
          }, 1500);
      };
    return a.jsxs("form", {
      onSubmit: s,
      className: "space-y-4",
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("label", {
                  htmlFor: "name",
                  className:
                    "block text-sm font-medium text-ips-neutral-800 mb-1",
                  children: "Your Name",
                }),
                a.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: e.name,
                  onChange: o,
                  required: !0,
                  className:
                    "w-full px-4 py-2 border border-ips-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ips-blue/50",
                  placeholder: "John Doe",
                }),
              ],
            }),
            a.jsxs("div", {
              children: [
                a.jsx("label", {
                  htmlFor: "email",
                  className:
                    "block text-sm font-medium text-ips-neutral-800 mb-1",
                  children: "Email Address",
                }),
                a.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: e.email,
                  onChange: o,
                  required: !0,
                  className:
                    "w-full px-4 py-2 border border-ips-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ips-blue/50",
                  placeholder: "example@email.com",
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("label", {
                  htmlFor: "phone",
                  className:
                    "block text-sm font-medium text-ips-neutral-800 mb-1",
                  children: "Phone Number",
                }),
                a.jsx("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: e.phone,
                  onChange: o,
                  className:
                    "w-full px-4 py-2 border border-ips-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ips-blue/50",
                  placeholder: "+1 (123) 456-7890",
                }),
              ],
            }),
            a.jsxs("div", {
              children: [
                a.jsx("label", {
                  htmlFor: "subject",
                  className:
                    "block text-sm font-medium text-ips-neutral-800 mb-1",
                  children: "Subject",
                }),
                a.jsxs("select", {
                  id: "subject",
                  name: "subject",
                  value: e.subject,
                  onChange: o,
                  required: !0,
                  className:
                    "w-full px-4 py-2 border border-ips-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ips-blue/50 bg-white",
                  children: [
                    a.jsx("option", {
                      value: "",
                      disabled: !0,
                      children: "Select a subject",
                    }),
                    a.jsx("option", {
                      value: "General Inquiry",
                      children: "General Inquiry",
                    }),
                    a.jsx("option", {
                      value: "Job Seeker",
                      children: "Job Seeker",
                    }),
                    a.jsx("option", {
                      value: "Employer",
                      children: "Employer",
                    }),
                    a.jsx("option", {
                      value: "Partnership",
                      children: "Partnership",
                    }),
                    a.jsx("option", { value: "Other", children: "Other" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("label", {
              htmlFor: "message",
              className: "block text-sm font-medium text-ips-neutral-800 mb-1",
              children: "Your Message",
            }),
            a.jsx("textarea", {
              id: "message",
              name: "message",
              value: e.message,
              onChange: o,
              required: !0,
              rows: 5,
              className:
                "w-full px-4 py-2 border border-ips-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ips-blue/50 resize-none",
              placeholder: "How can we help you?",
            }),
          ],
        }),
        a.jsx("div", {
          className: "flex justify-end",
          children: a.jsx("button", {
            type: "submit",
            disabled: n,
            className: `btn-primary min-w-[150px] flex items-center justify-center ${
              n ? "opacity-70 cursor-not-allowed" : ""
            }`,
            children: n
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsxs("svg", {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        a.jsx("circle", {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4",
                        }),
                        a.jsx("path", {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        }),
                      ],
                    }),
                    "Sending...",
                  ],
                })
              : "Send Message",
          }),
        }),
      ],
    });
  },
  rj = () =>
    a.jsx("section", {
      className: "py-20 bg-ips-neutral",
      children: a.jsxs("div", {
        className: "section-container",
        children: [
          a.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              a.jsx("h2", {
                className: "section-title",
                children: "Get in Touch",
              }),
              a.jsx("p", {
                className: "section-subtitle",
                children:
                  "Have questions or ready to explore opportunities? Reach out to our team today.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
            children: [
              a.jsxs("div", {
                className: "space-y-8",
                children: [
                  a.jsx("div", {
                    className: "glass-card p-8 rounded-lg",
                    children: a.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-start",
                          children: [
                            a.jsx("div", {
                              className:
                                "flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                              children: a.jsx(bd, {
                                className: "text-ips-blue",
                              }),
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-ips-neutral-900 mb-1",
                                  children: "Phone",
                                }),
                                a.jsx("a", {
                                  href: "tel:+977981885955",
                                  className:
                                    "text-ips-neutral-800 hover:text-ips-blue transition-colors",
                                  children: "+977 9849300184",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex items-start",
                          children: [
                            a.jsx("div", {
                              className:
                                "flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                              children: a.jsx(ga, {
                                className: "text-ips-blue",
                              }),
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-ips-neutral-900 mb-1",
                                  children: "Email",
                                }),
                                a.jsx("a", {
                                  href: "mailto:ipservices424@gmail.com",
                                  className:
                                    "text-ips-neutral-800 hover:text-ips-blue transition-colors",
                                  children: "ipservices424@gmail.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex items-start",
                          children: [
                            a.jsx("div", {
                              className:
                                "flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                              children: a.jsx(wd, {
                                className: "text-ips-blue",
                              }),
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-ips-neutral-900 mb-1",
                                  children: "Location",
                                }),
                                a.jsx("address", {
                                  className: "text-ips-neutral-800 not-italic",
                                  children: "Kathmandu, Nepal",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsxs("div", {
                    className: "glass-card p-8 rounded-lg",
                    children: [
                      a.jsx("h3", {
                        className:
                          "text-xl font-medium text-ips-neutral-900 mb-4",
                        children: "Business Hours",
                      }),
                      a.jsxs("ul", {
                        className: "space-y-2",
                        children: [
                          a.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              a.jsx("span", {
                                className: "text-ips-neutral-800",
                                children: "Monday - Friday",
                              }),
                              a.jsx("span", {
                                className: "font-medium",
                                children: "9:00 AM - 6:00 PM",
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              a.jsx("span", {
                                className: "text-ips-neutral-800",
                                children: "Saturday",
                              }),
                              a.jsx("span", {
                                className: "font-medium",
                                children: "9:00 AM - 2:00 PM",
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              a.jsx("span", {
                                className: "text-ips-neutral-800",
                                children: "Sunday",
                              }),
                              a.jsx("span", {
                                className: "font-medium",
                                children: "Closed",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "glass-card p-8 rounded-lg",
                children: [
                  a.jsx("h3", {
                    className: "text-2xl font-medium text-ips-neutral-900 mb-6",
                    children: "Send Us a Message",
                  }),
                  a.jsx(yy, {}),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "mt-16 text-center",
            children: [
              a.jsx("p", {
                className: "text-ips-neutral-800 mb-4",
                children:
                  "Looking for comprehensive details about our services?",
              }),
              a.jsx(Kn, {
                to: "/contact",
                className: "btn-primary",
                children: "Visit Our Contact Page",
              }),
            ],
          }),
        ],
      }),
    });
function is(e, t = {}) {
  const [n, r] = p.useState(!1),
    {
      threshold: o = 0,
      rootMargin: s = "0px",
      once: i = !1,
      reappear: l = !1,
    } = t;
  return (
    p.useEffect(() => {
      const u = e.current;
      if (!u) return;
      const c = new IntersectionObserver(
        ([d]) => {
          d.isIntersecting
            ? (r(!0), i && !l && c.unobserve(u))
            : (!i || l) && r(!1);
        },
        { threshold: o, rootMargin: s }
      );
      return (
        c.observe(u),
        () => {
          u && c.unobserve(u);
        }
      );
    }, [e, o, s, i, l]),
    n
  );
}
var oj = p.createContext(void 0);
function Ld(e) {
  const t = p.useContext(oj);
  return e || t || "ltr";
}
function sj(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Mo = "NavigationMenu",
  [Fd, xy, ij] = Ws(Mo),
  [pc, aj, lj] = Ws(Mo),
  [zd, uP] = qn(Mo, [ij, lj]),
  [uj, ht] = zd(Mo),
  [cj, dj] = zd(Mo),
  wy = p.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: s,
        delayDuration: i = 200,
        skipDelayDuration: l = 300,
        orientation: u = "horizontal",
        dir: c,
        ...d
      } = e,
      [f, h] = p.useState(null),
      m = me(t, (T) => h(T)),
      w = Ld(c),
      g = p.useRef(0),
      b = p.useRef(0),
      v = p.useRef(0),
      [y, x] = p.useState(!0),
      [N = "", S] = Ks({
        prop: r,
        onChange: (T) => {
          const _ = T !== "",
            $ = l > 0;
          _
            ? (window.clearTimeout(v.current), $ && x(!1))
            : (window.clearTimeout(v.current),
              (v.current = window.setTimeout(() => x(!0), l))),
            o == null || o(T);
        },
        defaultProp: s,
      }),
      C = p.useCallback(() => {
        window.clearTimeout(b.current),
          (b.current = window.setTimeout(() => S(""), 150));
      }, [S]),
      E = p.useCallback(
        (T) => {
          window.clearTimeout(b.current), S(T);
        },
        [S]
      ),
      k = p.useCallback(
        (T) => {
          N === T
            ? window.clearTimeout(b.current)
            : (g.current = window.setTimeout(() => {
                window.clearTimeout(b.current), S(T);
              }, i));
        },
        [N, S, i]
      );
    return (
      p.useEffect(
        () => () => {
          window.clearTimeout(g.current),
            window.clearTimeout(b.current),
            window.clearTimeout(v.current);
        },
        []
      ),
      a.jsx(Ny, {
        scope: n,
        isRootMenu: !0,
        value: N,
        dir: w,
        orientation: u,
        rootNavigationMenu: f,
        onTriggerEnter: (T) => {
          window.clearTimeout(g.current), y ? k(T) : E(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), C();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: C,
        onItemSelect: (T) => {
          S((_) => (_ === T ? "" : T));
        },
        onItemDismiss: () => S(""),
        children: a.jsx(J.nav, {
          "aria-label": "Main",
          "data-orientation": u,
          dir: w,
          ...d,
          ref: m,
        }),
      })
    );
  });
wy.displayName = Mo;
var by = "NavigationMenuSub",
  fj = p.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: s,
        orientation: i = "horizontal",
        ...l
      } = e,
      u = ht(by, n),
      [c = "", d] = Ks({ prop: r, onChange: o, defaultProp: s });
    return a.jsx(Ny, {
      scope: n,
      isRootMenu: !1,
      value: c,
      dir: u.dir,
      orientation: i,
      rootNavigationMenu: u.rootNavigationMenu,
      onTriggerEnter: (f) => d(f),
      onItemSelect: (f) => d(f),
      onItemDismiss: () => d(""),
      children: a.jsx(J.div, { "data-orientation": i, ...l, ref: t }),
    });
  });
fj.displayName = by;
var Ny = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: o,
        orientation: s,
        children: i,
        value: l,
        onItemSelect: u,
        onItemDismiss: c,
        onTriggerEnter: d,
        onTriggerLeave: f,
        onContentEnter: h,
        onContentLeave: m,
      } = e,
      [w, g] = p.useState(null),
      [b, v] = p.useState(new Map()),
      [y, x] = p.useState(null);
    return a.jsx(uj, {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: sj(l),
      baseId: js(),
      dir: o,
      orientation: s,
      viewport: w,
      onViewportChange: g,
      indicatorTrack: y,
      onIndicatorTrackChange: x,
      onTriggerEnter: xe(d),
      onTriggerLeave: xe(f),
      onContentEnter: xe(h),
      onContentLeave: xe(m),
      onItemSelect: xe(u),
      onItemDismiss: xe(c),
      onViewportContentChange: p.useCallback((N, S) => {
        v((C) => (C.set(N, S), new Map(C)));
      }, []),
      onViewportContentRemove: p.useCallback((N) => {
        v((S) => (S.has(N) ? (S.delete(N), new Map(S)) : S));
      }, []),
      children: a.jsx(Fd.Provider, {
        scope: t,
        children: a.jsx(cj, { scope: t, items: b, children: i }),
      }),
    });
  },
  Sy = "NavigationMenuList",
  Cy = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ht(Sy, n),
      s = a.jsx(J.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return a.jsx(J.div, {
      style: { position: "relative" },
      ref: o.onIndicatorTrackChange,
      children: a.jsx(Fd.Slot, {
        scope: n,
        children: o.isRootMenu ? a.jsx(Ay, { asChild: !0, children: s }) : s,
      }),
    });
  });
Cy.displayName = Sy;
var Ey = "NavigationMenuItem",
  [pj, jy] = zd(Ey),
  ky = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e,
      s = js(),
      i = r || s || "LEGACY_REACT_AUTO_VALUE",
      l = p.useRef(null),
      u = p.useRef(null),
      c = p.useRef(null),
      d = p.useRef(() => {}),
      f = p.useRef(!1),
      h = p.useCallback((w = "start") => {
        if (l.current) {
          d.current();
          const g = hc(l.current);
          g.length && Bd(w === "start" ? g : g.reverse());
        }
      }, []),
      m = p.useCallback(() => {
        if (l.current) {
          const w = hc(l.current);
          w.length && (d.current = bj(w));
        }
      }, []);
    return a.jsx(pj, {
      scope: n,
      value: i,
      triggerRef: u,
      contentRef: l,
      focusProxyRef: c,
      wasEscapeCloseRef: f,
      onEntryKeyDown: h,
      onFocusProxyEnter: h,
      onRootContentClose: m,
      onContentFocusOutside: m,
      children: a.jsx(J.li, { ...o, ref: t }),
    });
  });
ky.displayName = Ey;
var mc = "NavigationMenuTrigger",
  Py = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...o } = e,
      s = ht(mc, e.__scopeNavigationMenu),
      i = jy(mc, e.__scopeNavigationMenu),
      l = p.useRef(null),
      u = me(l, i.triggerRef, t),
      c = Iy(s.baseId, i.value),
      d = Dy(s.baseId, i.value),
      f = p.useRef(!1),
      h = p.useRef(!1),
      m = i.value === s.value;
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(Fd.ItemSlot, {
          scope: n,
          value: i.value,
          children: a.jsx(Oy, {
            asChild: !0,
            children: a.jsx(J.button, {
              id: c,
              disabled: r,
              "data-disabled": r ? "" : void 0,
              "data-state": Vd(m),
              "aria-expanded": m,
              "aria-controls": d,
              ...o,
              ref: u,
              onPointerEnter: F(e.onPointerEnter, () => {
                (h.current = !1), (i.wasEscapeCloseRef.current = !1);
              }),
              onPointerMove: F(
                e.onPointerMove,
                Ea(() => {
                  r ||
                    h.current ||
                    i.wasEscapeCloseRef.current ||
                    f.current ||
                    (s.onTriggerEnter(i.value), (f.current = !0));
                })
              ),
              onPointerLeave: F(
                e.onPointerLeave,
                Ea(() => {
                  r || (s.onTriggerLeave(), (f.current = !1));
                })
              ),
              onClick: F(e.onClick, () => {
                s.onItemSelect(i.value), (h.current = m);
              }),
              onKeyDown: F(e.onKeyDown, (w) => {
                const b = {
                  horizontal: "ArrowDown",
                  vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight",
                }[s.orientation];
                m && w.key === b && (i.onEntryKeyDown(), w.preventDefault());
              }),
            }),
          }),
        }),
        m &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsx(Dv, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: i.focusProxyRef,
                onFocus: (w) => {
                  const g = i.contentRef.current,
                    b = w.relatedTarget,
                    v = b === l.current,
                    y = g == null ? void 0 : g.contains(b);
                  (v || !y) && i.onFocusProxyEnter(v ? "start" : "end");
                },
              }),
              s.viewport && a.jsx("span", { "aria-owns": d }),
            ],
          }),
      ],
    });
  });
Py.displayName = mc;
var mj = "NavigationMenuLink",
  qp = "navigationMenu.linkSelect",
  hj = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...s } = e;
    return a.jsx(Oy, {
      asChild: !0,
      children: a.jsx(J.a, {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...s,
        ref: t,
        onClick: F(
          e.onClick,
          (i) => {
            const l = i.target,
              u = new CustomEvent(qp, { bubbles: !0, cancelable: !0 });
            if (
              (l.addEventListener(qp, (c) => (o == null ? void 0 : o(c)), {
                once: !0,
              }),
              Es(l, u),
              !u.defaultPrevented && !i.metaKey)
            ) {
              const c = new CustomEvent(Wi, { bubbles: !0, cancelable: !0 });
              Es(l, c);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
hj.displayName = mj;
var $d = "NavigationMenuIndicator",
  Ry = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ht($d, e.__scopeNavigationMenu),
      s = !!o.value;
    return o.indicatorTrack
      ? md.createPortal(
          a.jsx(At, { present: n || s, children: a.jsx(vj, { ...r, ref: t }) }),
          o.indicatorTrack
        )
      : null;
  });
Ry.displayName = $d;
var vj = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ht($d, n),
      s = xy(n),
      [i, l] = p.useState(null),
      [u, c] = p.useState(null),
      d = o.orientation === "horizontal",
      f = !!o.value;
    p.useEffect(() => {
      var g;
      const w =
        (g = s().find((b) => b.value === o.value)) == null
          ? void 0
          : g.ref.current;
      w && l(w);
    }, [s, o.value]);
    const h = () => {
      i &&
        c({
          size: d ? i.offsetWidth : i.offsetHeight,
          offset: d ? i.offsetLeft : i.offsetTop,
        });
    };
    return (
      vc(i, h),
      vc(o.indicatorTrack, h),
      u
        ? a.jsx(J.div, {
            "aria-hidden": !0,
            "data-state": f ? "visible" : "hidden",
            "data-orientation": o.orientation,
            ...r,
            ref: t,
            style: {
              position: "absolute",
              ...(d
                ? {
                    left: 0,
                    width: u.size + "px",
                    transform: `translateX(${u.offset}px)`,
                  }
                : {
                    top: 0,
                    height: u.size + "px",
                    transform: `translateY(${u.offset}px)`,
                  }),
              ...r.style,
            },
          })
        : null
    );
  }),
  So = "NavigationMenuContent",
  Ty = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = ht(So, e.__scopeNavigationMenu),
      s = jy(So, e.__scopeNavigationMenu),
      i = me(s.contentRef, t),
      l = s.value === o.value,
      u = {
        value: s.value,
        triggerRef: s.triggerRef,
        focusProxyRef: s.focusProxyRef,
        wasEscapeCloseRef: s.wasEscapeCloseRef,
        onContentFocusOutside: s.onContentFocusOutside,
        onRootContentClose: s.onRootContentClose,
        ...r,
      };
    return o.viewport
      ? a.jsx(gj, { forceMount: n, ...u, ref: i })
      : a.jsx(At, {
          present: n || l,
          children: a.jsx(My, {
            "data-state": Vd(l),
            ...u,
            ref: i,
            onPointerEnter: F(e.onPointerEnter, o.onContentEnter),
            onPointerLeave: F(e.onPointerLeave, Ea(o.onContentLeave)),
            style: {
              pointerEvents: !l && o.isRootMenu ? "none" : void 0,
              ...u.style,
            },
          }),
        });
  });
Ty.displayName = So;
var gj = p.forwardRef((e, t) => {
    const n = ht(So, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: o } = n;
    return (
      Tt(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      Tt(() => () => o(e.value), [e.value, o]),
      null
    );
  }),
  Wi = "navigationMenu.rootContentDismiss",
  My = p.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: o,
        focusProxyRef: s,
        wasEscapeCloseRef: i,
        onRootContentClose: l,
        onContentFocusOutside: u,
        ...c
      } = e,
      d = ht(So, n),
      f = p.useRef(null),
      h = me(f, t),
      m = Iy(d.baseId, r),
      w = Dy(d.baseId, r),
      g = xy(n),
      b = p.useRef(null),
      { onItemDismiss: v } = d;
    p.useEffect(() => {
      const x = f.current;
      if (d.isRootMenu && x) {
        const N = () => {
          var S;
          v(),
            l(),
            x.contains(document.activeElement) &&
              ((S = o.current) == null || S.focus());
        };
        return x.addEventListener(Wi, N), () => x.removeEventListener(Wi, N);
      }
    }, [d.isRootMenu, e.value, o, v, l]);
    const y = p.useMemo(() => {
      const N = g().map((_) => _.value);
      d.dir === "rtl" && N.reverse();
      const S = N.indexOf(d.value),
        C = N.indexOf(d.previousValue),
        E = r === d.value,
        k = C === N.indexOf(r);
      if (!E && !k) return b.current;
      const T = (() => {
        if (S !== C) {
          if (E && C !== -1) return S > C ? "from-end" : "from-start";
          if (k && S !== -1) return S > C ? "to-start" : "to-end";
        }
        return null;
      })();
      return (b.current = T), T;
    }, [d.previousValue, d.value, d.dir, g, r]);
    return a.jsx(Ay, {
      asChild: !0,
      children: a.jsx(Hs, {
        id: w,
        "aria-labelledby": m,
        "data-motion": y,
        "data-orientation": d.orientation,
        ...c,
        ref: h,
        disableOutsidePointerEvents: !1,
        onDismiss: () => {
          var N;
          const x = new Event(Wi, { bubbles: !0, cancelable: !0 });
          (N = f.current) == null || N.dispatchEvent(x);
        },
        onFocusOutside: F(e.onFocusOutside, (x) => {
          var S;
          u();
          const N = x.target;
          (S = d.rootNavigationMenu) != null &&
            S.contains(N) &&
            x.preventDefault();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (x) => {
          var E;
          const N = x.target,
            S = g().some((k) => {
              var T;
              return (T = k.ref.current) == null ? void 0 : T.contains(N);
            }),
            C =
              d.isRootMenu &&
              ((E = d.viewport) == null ? void 0 : E.contains(N));
          (S || C || !d.isRootMenu) && x.preventDefault();
        }),
        onKeyDown: F(e.onKeyDown, (x) => {
          var C;
          const N = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !N) {
            const E = hc(x.currentTarget),
              k = document.activeElement,
              T = E.findIndex((D) => D === k),
              $ = x.shiftKey
                ? E.slice(0, T).reverse()
                : E.slice(T + 1, E.length);
            Bd($) ? x.preventDefault() : (C = s.current) == null || C.focus();
          }
        }),
        onEscapeKeyDown: F(e.onEscapeKeyDown, (x) => {
          i.current = !0;
        }),
      }),
    });
  }),
  Ud = "NavigationMenuViewport",
  _y = p.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      s = !!ht(Ud, e.__scopeNavigationMenu).value;
    return a.jsx(At, {
      present: n || s,
      children: a.jsx(yj, { ...r, ref: t }),
    });
  });
_y.displayName = Ud;
var yj = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...o } = e,
      s = ht(Ud, n),
      i = me(t, s.onViewportChange),
      l = dj(So, e.__scopeNavigationMenu),
      [u, c] = p.useState(null),
      [d, f] = p.useState(null),
      h = u ? (u == null ? void 0 : u.width) + "px" : void 0,
      m = u ? (u == null ? void 0 : u.height) + "px" : void 0,
      w = !!s.value,
      g = w ? s.value : s.previousValue;
    return (
      vc(d, () => {
        d && c({ width: d.offsetWidth, height: d.offsetHeight });
      }),
      a.jsx(J.div, {
        "data-state": Vd(w),
        "data-orientation": s.orientation,
        ...o,
        ref: i,
        style: {
          pointerEvents: !w && s.isRootMenu ? "none" : void 0,
          "--radix-navigation-menu-viewport-width": h,
          "--radix-navigation-menu-viewport-height": m,
          ...o.style,
        },
        onPointerEnter: F(e.onPointerEnter, s.onContentEnter),
        onPointerLeave: F(e.onPointerLeave, Ea(s.onContentLeave)),
        children: Array.from(l.items).map(
          ([v, { ref: y, forceMount: x, ...N }]) => {
            const S = g === v;
            return a.jsx(
              At,
              {
                present: x || S,
                children: a.jsx(My, {
                  ...N,
                  ref: Vs(y, (C) => {
                    S && C && f(C);
                  }),
                }),
              },
              v
            );
          }
        ),
      })
    );
  }),
  xj = "FocusGroup",
  Ay = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = ht(xj, n);
    return a.jsx(pc.Provider, {
      scope: n,
      children: a.jsx(pc.Slot, {
        scope: n,
        children: a.jsx(J.div, { dir: o.dir, ...r, ref: t }),
      }),
    });
  }),
  Xp = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  wj = "FocusGroupItem",
  Oy = p.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = aj(n),
      s = ht(wj, n);
    return a.jsx(pc.ItemSlot, {
      scope: n,
      children: a.jsx(J.button, {
        ...r,
        ref: t,
        onKeyDown: F(e.onKeyDown, (i) => {
          if (["Home", "End", ...Xp].includes(i.key)) {
            let u = o().map((f) => f.ref.current);
            if (
              ([
                s.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
                "ArrowUp",
                "End",
              ].includes(i.key) && u.reverse(),
              Xp.includes(i.key))
            ) {
              const f = u.indexOf(i.currentTarget);
              u = u.slice(f + 1);
            }
            setTimeout(() => Bd(u)), i.preventDefault();
          }
        }),
      }),
    });
  });
function hc(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bd(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
function bj(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""),
        t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function vc(e, t) {
  const n = xe(t);
  Tt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function Vd(e) {
  return e ? "open" : "closed";
}
function Iy(e, t) {
  return `${e}-trigger-${t}`;
}
function Dy(e, t) {
  return `${e}-content-${t}`;
}
function Ea(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Ly = wy,
  Fy = Cy,
  Nj = ky,
  zy = Py,
  $y = Ry,
  Uy = Ty,
  By = _y;
const Vy = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.jsxs(Ly, {
    ref: r,
    className: he(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [t, a.jsx(Gy, {})],
  })
);
Vy.displayName = Ly.displayName;
const Wy = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Fy, {
    ref: n,
    className: he(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t,
  })
);
Wy.displayName = Fy.displayName;
const Ci = Nj,
  Sj = og(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  ),
  Hy = p.forwardRef(({ className: e, children: t, ...n }, r) =>
    a.jsxs(zy, {
      ref: r,
      className: he(Sj(), "group", e),
      ...n,
      children: [
        t,
        " ",
        a.jsx(ag, {
          className:
            "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true",
        }),
      ],
    })
  );
Hy.displayName = zy.displayName;
const Ky = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Uy, {
    ref: n,
    className: he(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t,
  })
);
Ky.displayName = Uy.displayName;
const Gy = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", {
    className: he("absolute left-0 top-full flex justify-center"),
    children: a.jsx(By, {
      className: he(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ref: n,
      ...t,
    }),
  })
);
Gy.displayName = By.displayName;
const Cj = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx($y, {
    ref: n,
    className: he(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: a.jsx("div", {
      className:
        "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
    }),
  })
);
Cj.displayName = $y.displayName;
var ql = 0;
function Ej() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Zp()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Zp()),
      ql++,
      () => {
        ql === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ql--;
      }
    );
  }, []);
}
function Zp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Xl = "focusScope.autoFocusOnMount",
  Zl = "focusScope.autoFocusOnUnmount",
  Jp = { bubbles: !1, cancelable: !0 },
  jj = "FocusScope",
  Qy = p.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [l, u] = p.useState(null),
      c = xe(o),
      d = xe(s),
      f = p.useRef(null),
      h = me(t, (g) => u(g)),
      m = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    p.useEffect(() => {
      if (r) {
        let g = function (x) {
            if (m.paused || !l) return;
            const N = x.target;
            l.contains(N) ? (f.current = N) : xn(f.current, { select: !0 });
          },
          b = function (x) {
            if (m.paused || !l) return;
            const N = x.relatedTarget;
            N !== null && (l.contains(N) || xn(f.current, { select: !0 }));
          },
          v = function (x) {
            if (document.activeElement === document.body)
              for (const S of x) S.removedNodes.length > 0 && xn(l);
          };
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", b);
        const y = new MutationObserver(v);
        return (
          l && y.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", b),
              y.disconnect();
          }
        );
      }
    }, [r, l, m.paused]),
      p.useEffect(() => {
        if (l) {
          tm.add(m);
          const g = document.activeElement;
          if (!l.contains(g)) {
            const v = new CustomEvent(Xl, Jp);
            l.addEventListener(Xl, c),
              l.dispatchEvent(v),
              v.defaultPrevented ||
                (kj(_j(Yy(l)), { select: !0 }),
                document.activeElement === g && xn(l));
          }
          return () => {
            l.removeEventListener(Xl, c),
              setTimeout(() => {
                const v = new CustomEvent(Zl, Jp);
                l.addEventListener(Zl, d),
                  l.dispatchEvent(v),
                  v.defaultPrevented || xn(g ?? document.body, { select: !0 }),
                  l.removeEventListener(Zl, d),
                  tm.remove(m);
              }, 0);
          };
        }
      }, [l, c, d, m]);
    const w = p.useCallback(
      (g) => {
        if ((!n && !r) || m.paused) return;
        const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          v = document.activeElement;
        if (b && v) {
          const y = g.currentTarget,
            [x, N] = Pj(y);
          x && N
            ? !g.shiftKey && v === N
              ? (g.preventDefault(), n && xn(x, { select: !0 }))
              : g.shiftKey &&
                v === x &&
                (g.preventDefault(), n && xn(N, { select: !0 }))
            : v === y && g.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return a.jsx(J.div, { tabIndex: -1, ...i, ref: h, onKeyDown: w });
  });
Qy.displayName = jj;
function kj(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((xn(r, { select: t }), document.activeElement !== n)) return;
}
function Pj(e) {
  const t = Yy(e),
    n = em(t, e),
    r = em(t.reverse(), e);
  return [n, r];
}
function Yy(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function em(e, t) {
  for (const n of e) if (!Rj(n, { upTo: t })) return n;
}
function Rj(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Tj(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Tj(e) && t && e.select();
  }
}
var tm = Mj();
function Mj() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = nm(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = nm(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function nm(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function _j(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Jl = "rovingFocusGroup.onEntryFocus",
  Aj = { bubbles: !1, cancelable: !0 },
  sl = "RovingFocusGroup",
  [gc, qy, Oj] = Ws(sl),
  [Ij, Xy] = qn(sl, [Oj]),
  [Dj, Lj] = Ij(sl),
  Zy = p.forwardRef((e, t) =>
    a.jsx(gc.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: a.jsx(gc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: a.jsx(Fj, { ...e, ref: t }),
      }),
    })
  );
Zy.displayName = sl;
var Fj = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: l,
        onCurrentTabStopIdChange: u,
        onEntryFocus: c,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      h = p.useRef(null),
      m = me(t, h),
      w = Ld(s),
      [g = null, b] = Ks({ prop: i, defaultProp: l, onChange: u }),
      [v, y] = p.useState(!1),
      x = xe(c),
      N = qy(n),
      S = p.useRef(!1),
      [C, E] = p.useState(0);
    return (
      p.useEffect(() => {
        const k = h.current;
        if (k)
          return k.addEventListener(Jl, x), () => k.removeEventListener(Jl, x);
      }, [x]),
      a.jsx(Dj, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: g,
        onItemFocus: p.useCallback((k) => b(k), [b]),
        onItemShiftTab: p.useCallback(() => y(!0), []),
        onFocusableItemAdd: p.useCallback(() => E((k) => k + 1), []),
        onFocusableItemRemove: p.useCallback(() => E((k) => k - 1), []),
        children: a.jsx(J.div, {
          tabIndex: v || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: F(e.onFocus, (k) => {
            const T = !S.current;
            if (k.target === k.currentTarget && T && !v) {
              const _ = new CustomEvent(Jl, Aj);
              if ((k.currentTarget.dispatchEvent(_), !_.defaultPrevented)) {
                const $ = N().filter((U) => U.focusable),
                  D = $.find((U) => U.active),
                  V = $.find((U) => U.id === g),
                  q = [D, V, ...$].filter(Boolean).map((U) => U.ref.current);
                t0(q, d);
              }
            }
            S.current = !1;
          }),
          onBlur: F(e.onBlur, () => y(!1)),
        }),
      })
    );
  }),
  Jy = "RovingFocusGroupItem",
  e0 = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        ...i
      } = e,
      l = js(),
      u = s || l,
      c = Lj(Jy, n),
      d = c.currentTabStopId === u,
      f = qy(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: m } = c;
    return (
      p.useEffect(() => {
        if (r) return h(), () => m();
      }, [r, h, m]),
      a.jsx(gc.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: a.jsx(J.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": c.orientation,
          ...i,
          ref: t,
          onMouseDown: F(e.onMouseDown, (w) => {
            r ? c.onItemFocus(u) : w.preventDefault();
          }),
          onFocus: F(e.onFocus, () => c.onItemFocus(u)),
          onKeyDown: F(e.onKeyDown, (w) => {
            if (w.key === "Tab" && w.shiftKey) {
              c.onItemShiftTab();
              return;
            }
            if (w.target !== w.currentTarget) return;
            const g = Uj(w, c.orientation, c.dir);
            if (g !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
              w.preventDefault();
              let v = f()
                .filter((y) => y.focusable)
                .map((y) => y.ref.current);
              if (g === "last") v.reverse();
              else if (g === "prev" || g === "next") {
                g === "prev" && v.reverse();
                const y = v.indexOf(w.currentTarget);
                v = c.loop ? Bj(v, y + 1) : v.slice(y + 1);
              }
              setTimeout(() => t0(v));
            }
          }),
        }),
      })
    );
  });
e0.displayName = Jy;
var zj = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function $j(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function Uj(e, t, n) {
  const r = $j(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return zj[r];
}
function t0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function Bj(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vj = Zy,
  Wj = e0,
  Hj = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Mr = new WeakMap(),
  Ei = new WeakMap(),
  ji = {},
  eu = 0,
  n0 = function (e) {
    return e && (e.host || n0(e.parentNode));
  },
  Kj = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = n0(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Gj = function (e, t, n, r) {
    var o = Kj(t, Array.isArray(e) ? e : [e]);
    ji[n] || (ji[n] = new WeakMap());
    var s = ji[n],
      i = [],
      l = new Set(),
      u = new Set(o),
      c = function (f) {
        !f || l.has(f) || (l.add(f), c(f.parentNode));
      };
    o.forEach(c);
    var d = function (f) {
      !f ||
        u.has(f) ||
        Array.prototype.forEach.call(f.children, function (h) {
          if (l.has(h)) d(h);
          else
            try {
              var m = h.getAttribute(r),
                w = m !== null && m !== "false",
                g = (Mr.get(h) || 0) + 1,
                b = (s.get(h) || 0) + 1;
              Mr.set(h, g),
                s.set(h, b),
                i.push(h),
                g === 1 && w && Ei.set(h, !0),
                b === 1 && h.setAttribute(n, "true"),
                w || h.setAttribute(r, "true");
            } catch (v) {
              console.error("aria-hidden: cannot operate on ", h, v);
            }
        });
    };
    return (
      d(t),
      l.clear(),
      eu++,
      function () {
        i.forEach(function (f) {
          var h = Mr.get(f) - 1,
            m = s.get(f) - 1;
          Mr.set(f, h),
            s.set(f, m),
            h || (Ei.has(f) || f.removeAttribute(r), Ei.delete(f)),
            m || f.removeAttribute(n);
        }),
          eu--,
          eu ||
            ((Mr = new WeakMap()),
            (Mr = new WeakMap()),
            (Ei = new WeakMap()),
            (ji = {}));
      }
    );
  },
  Qj = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Hj(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Gj(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ut = function () {
    return (
      (Ut =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      Ut.apply(this, arguments)
    );
  };
function r0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Yj(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Hi = "right-scroll-bar-position",
  Ki = "width-before-scroll-bar",
  qj = "with-scroll-bars-hidden",
  Xj = "--removed-body-scroll-bar-size";
function tu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zj(e, t) {
  var n = p.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Jj = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
  rm = new WeakMap();
function e2(e, t) {
  var n = Zj(null, function (r) {
    return e.forEach(function (o) {
      return tu(o, r);
    });
  });
  return (
    Jj(
      function () {
        var r = rm.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || tu(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || tu(l, i);
            });
        }
        rm.set(n, e);
      },
      [e]
    ),
    n
  );
}
function t2(e) {
  return e;
}
function n2(e, t) {
  t === void 0 && (t = t2);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (l) {
              return l !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(s), (i = n);
        }
        var u = function () {
            var d = i;
            (i = []), d.forEach(s);
          },
          c = function () {
            return Promise.resolve().then(u);
          };
        c(),
          (n = {
            push: function (d) {
              i.push(d), c();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function r2(e) {
  e === void 0 && (e = {});
  var t = n2(null);
  return (t.options = Ut({ async: !0, ssr: !1 }, e)), t;
}
var o0 = function (e) {
  var t = e.sideCar,
    n = r0(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return p.createElement(r, Ut({}, n));
};
o0.isSideCarExport = !0;
function o2(e, t) {
  return e.useMedium(t), o0;
}
var s0 = r2(),
  nu = function () {},
  il = p.forwardRef(function (e, t) {
    var n = p.useRef(null),
      r = p.useState({
        onScrollCapture: nu,
        onWheelCapture: nu,
        onTouchMoveCapture: nu,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      l = e.children,
      u = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      h = e.sideCar,
      m = e.noIsolation,
      w = e.inert,
      g = e.allowPinchZoom,
      b = e.as,
      v = b === void 0 ? "div" : b,
      y = e.gapMode,
      x = r0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      N = h,
      S = e2([n, t]),
      C = Ut(Ut({}, x), o);
    return p.createElement(
      p.Fragment,
      null,
      d &&
        p.createElement(N, {
          sideCar: s0,
          removeScrollBar: c,
          shards: f,
          noIsolation: m,
          inert: w,
          setCallbacks: s,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: y,
        }),
      i
        ? p.cloneElement(p.Children.only(l), Ut(Ut({}, C), { ref: S }))
        : p.createElement(v, Ut({}, C, { className: u, ref: S }), l)
    );
  });
il.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
il.classNames = { fullWidth: Ki, zeroRight: Hi };
var s2 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function i2() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = s2();
  return t && e.setAttribute("nonce", t), e;
}
function a2(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function l2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var u2 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = i2()) && (a2(t, n), l2(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  c2 = function () {
    var e = u2();
    return function (t, n) {
      p.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  i0 = function () {
    var e = c2(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  d2 = { left: 0, top: 0, right: 0, gap: 0 },
  ru = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  f2 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ru(n), ru(r), ru(o)];
  },
  p2 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return d2;
    var t = f2(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  m2 = i0(),
  no = "data-scroll-locked",
  h2 = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          qj,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          no,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Hi,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ki,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Hi, " .")
        .concat(
          Hi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ki, " .")
        .concat(
          Ki,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          no,
          `] {
    `
        )
        .concat(Xj, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  om = function () {
    var e = parseInt(document.body.getAttribute(no) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  v2 = function () {
    p.useEffect(function () {
      return (
        document.body.setAttribute(no, (om() + 1).toString()),
        function () {
          var e = om() - 1;
          e <= 0
            ? document.body.removeAttribute(no)
            : document.body.setAttribute(no, e.toString());
        }
      );
    }, []);
  },
  g2 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    v2();
    var s = p.useMemo(
      function () {
        return p2(o);
      },
      [o]
    );
    return p.createElement(m2, { styles: h2(s, !t, o, n ? "" : "!important") });
  },
  yc = !1;
if (typeof window < "u")
  try {
    var ki = Object.defineProperty({}, "passive", {
      get: function () {
        return (yc = !0), !0;
      },
    });
    window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki);
  } catch {
    yc = !1;
  }
var _r = yc ? { passive: !1 } : !1,
  y2 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  a0 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !y2(e) && n[t] === "visible")
    );
  },
  x2 = function (e) {
    return a0(e, "overflowY");
  },
  w2 = function (e) {
    return a0(e, "overflowX");
  },
  sm = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = l0(e, r);
      if (o) {
        var s = u0(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  b2 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  N2 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  l0 = function (e, t) {
    return e === "v" ? x2(t) : w2(t);
  },
  u0 = function (e, t) {
    return e === "v" ? b2(t) : N2(t);
  },
  S2 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  C2 = function (e, t, n, r, o) {
    var s = S2(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      u = t.contains(l),
      c = !1,
      d = i > 0,
      f = 0,
      h = 0;
    do {
      var m = u0(e, l),
        w = m[0],
        g = m[1],
        b = m[2],
        v = g - b - s * w;
      (w || v) && l0(e, l) && ((f += v), (h += w)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!u && l !== document.body) || (u && (t.contains(l) || t === l)));
    return ((d && Math.abs(f) < 1) || (!d && Math.abs(h) < 1)) && (c = !0), c;
  },
  Pi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  im = function (e) {
    return [e.deltaX, e.deltaY];
  },
  am = function (e) {
    return e && "current" in e ? e.current : e;
  },
  E2 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  j2 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  k2 = 0,
  Ar = [];
function P2(e) {
  var t = p.useRef([]),
    n = p.useRef([0, 0]),
    r = p.useRef(),
    o = p.useState(k2++)[0],
    s = p.useState(i0)[0],
    i = p.useRef(e);
  p.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    p.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = Yj([e.lockRef.current], (e.shards || []).map(am), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = p.useCallback(function (g, b) {
      if (
        ("touches" in g && g.touches.length === 2) ||
        (g.type === "wheel" && g.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var v = Pi(g),
        y = n.current,
        x = "deltaX" in g ? g.deltaX : y[0] - v[0],
        N = "deltaY" in g ? g.deltaY : y[1] - v[1],
        S,
        C = g.target,
        E = Math.abs(x) > Math.abs(N) ? "h" : "v";
      if ("touches" in g && E === "h" && C.type === "range") return !1;
      var k = sm(E, C);
      if (!k) return !0;
      if ((k ? (S = E) : ((S = E === "v" ? "h" : "v"), (k = sm(E, C))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (x || N) && (r.current = S), !S)
      )
        return !0;
      var T = r.current || S;
      return C2(T, b, g, T === "h" ? x : N);
    }, []),
    u = p.useCallback(function (g) {
      var b = g;
      if (!(!Ar.length || Ar[Ar.length - 1] !== s)) {
        var v = "deltaY" in b ? im(b) : Pi(b),
          y = t.current.filter(function (S) {
            return (
              S.name === b.type &&
              (S.target === b.target || b.target === S.shadowParent) &&
              E2(S.delta, v)
            );
          })[0];
        if (y && y.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!y) {
          var x = (i.current.shards || [])
              .map(am)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(b.target);
              }),
            N = x.length > 0 ? l(b, x[0]) : !i.current.noIsolation;
          N && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = p.useCallback(function (g, b, v, y) {
      var x = { name: g, delta: b, target: v, should: y, shadowParent: R2(v) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (N) {
            return N !== x;
          });
        }, 1);
    }, []),
    d = p.useCallback(function (g) {
      (n.current = Pi(g)), (r.current = void 0);
    }, []),
    f = p.useCallback(function (g) {
      c(g.type, im(g), g.target, l(g, e.lockRef.current));
    }, []),
    h = p.useCallback(function (g) {
      c(g.type, Pi(g), g.target, l(g, e.lockRef.current));
    }, []);
  p.useEffect(function () {
    return (
      Ar.push(s),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", u, _r),
      document.addEventListener("touchmove", u, _r),
      document.addEventListener("touchstart", d, _r),
      function () {
        (Ar = Ar.filter(function (g) {
          return g !== s;
        })),
          document.removeEventListener("wheel", u, _r),
          document.removeEventListener("touchmove", u, _r),
          document.removeEventListener("touchstart", d, _r);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    w = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    w ? p.createElement(s, { styles: j2(o) }) : null,
    m ? p.createElement(g2, { gapMode: e.gapMode }) : null
  );
}
function R2(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const T2 = o2(s0, P2);
var c0 = p.forwardRef(function (e, t) {
  return p.createElement(il, Ut({}, e, { ref: t, sideCar: T2 }));
});
c0.classNames = il.classNames;
var xc = ["Enter", " "],
  M2 = ["ArrowDown", "PageUp", "Home"],
  d0 = ["ArrowUp", "PageDown", "End"],
  _2 = [...M2, ...d0],
  A2 = { ltr: [...xc, "ArrowRight"], rtl: [...xc, "ArrowLeft"] },
  O2 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  qs = "Menu",
  [As, I2, D2] = Ws(qs),
  [Sr, f0] = qn(qs, [D2, Xa, Xy]),
  al = Xa(),
  p0 = Xy(),
  [L2, Cr] = Sr(qs),
  [F2, Xs] = Sr(qs),
  m0 = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      l = al(t),
      [u, c] = p.useState(null),
      d = p.useRef(!1),
      f = xe(s),
      h = Ld(o);
    return (
      p.useEffect(() => {
        const m = () => {
            (d.current = !0),
              document.addEventListener("pointerdown", w, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", w, {
                capture: !0,
                once: !0,
              });
          },
          w = () => (d.current = !1);
        return (
          document.addEventListener("keydown", m, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", m, { capture: !0 }),
              document.removeEventListener("pointerdown", w, { capture: !0 }),
              document.removeEventListener("pointermove", w, { capture: !0 });
          }
        );
      }, []),
      a.jsx(lC, {
        ...l,
        children: a.jsx(L2, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: u,
          onContentChange: c,
          children: a.jsx(F2, {
            scope: t,
            onClose: p.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: h,
            modal: i,
            children: r,
          }),
        }),
      })
    );
  };
m0.displayName = qs;
var z2 = "MenuAnchor",
  Wd = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = al(n);
    return a.jsx(Ug, { ...o, ...r, ref: t });
  });
Wd.displayName = z2;
var Hd = "MenuPortal",
  [$2, h0] = Sr(Hd, { forceMount: void 0 }),
  v0 = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      s = Cr(Hd, t);
    return a.jsx($2, {
      scope: t,
      forceMount: n,
      children: a.jsx(At, {
        present: n || s.open,
        children: a.jsx(hd, { asChild: !0, container: o, children: r }),
      }),
    });
  };
v0.displayName = Hd;
var ft = "MenuContent",
  [U2, Kd] = Sr(ft),
  g0 = p.forwardRef((e, t) => {
    const n = h0(ft, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Cr(ft, e.__scopeMenu),
      i = Xs(ft, e.__scopeMenu);
    return a.jsx(As.Provider, {
      scope: e.__scopeMenu,
      children: a.jsx(At, {
        present: r || s.open,
        children: a.jsx(As.Slot, {
          scope: e.__scopeMenu,
          children: i.modal
            ? a.jsx(B2, { ...o, ref: t })
            : a.jsx(V2, { ...o, ref: t }),
        }),
      }),
    });
  }),
  B2 = p.forwardRef((e, t) => {
    const n = Cr(ft, e.__scopeMenu),
      r = p.useRef(null),
      o = me(t, r);
    return (
      p.useEffect(() => {
        const s = r.current;
        if (s) return Qj(s);
      }, []),
      a.jsx(Gd, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: F(e.onFocusOutside, (s) => s.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  V2 = p.forwardRef((e, t) => {
    const n = Cr(ft, e.__scopeMenu);
    return a.jsx(Gd, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Gd = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: l,
        onEntryFocus: u,
        onEscapeKeyDown: c,
        onPointerDownOutside: d,
        onFocusOutside: f,
        onInteractOutside: h,
        onDismiss: m,
        disableOutsideScroll: w,
        ...g
      } = e,
      b = Cr(ft, n),
      v = Xs(ft, n),
      y = al(n),
      x = p0(n),
      N = I2(n),
      [S, C] = p.useState(null),
      E = p.useRef(null),
      k = me(t, E, b.onContentChange),
      T = p.useRef(0),
      _ = p.useRef(""),
      $ = p.useRef(0),
      D = p.useRef(null),
      V = p.useRef("right"),
      I = p.useRef(0),
      q = w ? c0 : p.Fragment,
      U = w ? { as: Cs, allowPinchZoom: !0 } : void 0,
      W = (j) => {
        var X, Gt;
        const O = _.current + j,
          B = N().filter((je) => !je.disabled),
          z = document.activeElement,
          G =
            (X = B.find((je) => je.ref.current === z)) == null
              ? void 0
              : X.textValue,
          Y = B.map((je) => je.textValue),
          ce = tk(Y, O, G),
          ve =
            (Gt = B.find((je) => je.textValue === ce)) == null
              ? void 0
              : Gt.ref.current;
        (function je(Ot) {
          (_.current = Ot),
            window.clearTimeout(T.current),
            Ot !== "" && (T.current = window.setTimeout(() => je(""), 1e3));
        })(O),
          ve && setTimeout(() => ve.focus());
      };
    p.useEffect(() => () => window.clearTimeout(T.current), []), Ej();
    const P = p.useCallback((j) => {
      var B, z;
      return (
        V.current === ((B = D.current) == null ? void 0 : B.side) &&
        rk(j, (z = D.current) == null ? void 0 : z.area)
      );
    }, []);
    return a.jsx(U2, {
      scope: n,
      searchRef: _,
      onItemEnter: p.useCallback(
        (j) => {
          P(j) && j.preventDefault();
        },
        [P]
      ),
      onItemLeave: p.useCallback(
        (j) => {
          var O;
          P(j) || ((O = E.current) == null || O.focus(), C(null));
        },
        [P]
      ),
      onTriggerLeave: p.useCallback(
        (j) => {
          P(j) && j.preventDefault();
        },
        [P]
      ),
      pointerGraceTimerRef: $,
      onPointerGraceIntentChange: p.useCallback((j) => {
        D.current = j;
      }, []),
      children: a.jsx(q, {
        ...U,
        children: a.jsx(Qy, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: F(s, (j) => {
            var O;
            j.preventDefault(),
              (O = E.current) == null || O.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: i,
          children: a.jsx(Hs, {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onEscapeKeyDown: c,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: h,
            onDismiss: m,
            children: a.jsx(Vj, {
              asChild: !0,
              ...x,
              dir: v.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: S,
              onCurrentTabStopIdChange: C,
              onEntryFocus: F(u, (j) => {
                v.isUsingKeyboardRef.current || j.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: a.jsx(Bg, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": A0(b.open),
                "data-radix-menu-content": "",
                dir: v.dir,
                ...y,
                ...g,
                ref: k,
                style: { outline: "none", ...g.style },
                onKeyDown: F(g.onKeyDown, (j) => {
                  const B =
                      j.target.closest("[data-radix-menu-content]") ===
                      j.currentTarget,
                    z = j.ctrlKey || j.altKey || j.metaKey,
                    G = j.key.length === 1;
                  B &&
                    (j.key === "Tab" && j.preventDefault(),
                    !z && G && W(j.key));
                  const Y = E.current;
                  if (j.target !== Y || !_2.includes(j.key)) return;
                  j.preventDefault();
                  const ve = N()
                    .filter((X) => !X.disabled)
                    .map((X) => X.ref.current);
                  d0.includes(j.key) && ve.reverse(), J2(ve);
                }),
                onBlur: F(e.onBlur, (j) => {
                  j.currentTarget.contains(j.target) ||
                    (window.clearTimeout(T.current), (_.current = ""));
                }),
                onPointerMove: F(
                  e.onPointerMove,
                  Os((j) => {
                    const O = j.target,
                      B = I.current !== j.clientX;
                    if (j.currentTarget.contains(O) && B) {
                      const z = j.clientX > I.current ? "right" : "left";
                      (V.current = z), (I.current = j.clientX);
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
g0.displayName = ft;
var W2 = "MenuGroup",
  Qd = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return a.jsx(J.div, { role: "group", ...r, ref: t });
  });
Qd.displayName = W2;
var H2 = "MenuLabel",
  y0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return a.jsx(J.div, { ...r, ref: t });
  });
y0.displayName = H2;
var ja = "MenuItem",
  lm = "menu.itemSelect",
  ll = p.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      s = p.useRef(null),
      i = Xs(ja, e.__scopeMenu),
      l = Kd(ja, e.__scopeMenu),
      u = me(t, s),
      c = p.useRef(!1),
      d = () => {
        const f = s.current;
        if (!n && f) {
          const h = new CustomEvent(lm, { bubbles: !0, cancelable: !0 });
          f.addEventListener(lm, (m) => (r == null ? void 0 : r(m)), {
            once: !0,
          }),
            Es(f, h),
            h.defaultPrevented ? (c.current = !1) : i.onClose();
        }
      };
    return a.jsx(x0, {
      ...o,
      ref: u,
      disabled: n,
      onClick: F(e.onClick, d),
      onPointerDown: (f) => {
        var h;
        (h = e.onPointerDown) == null || h.call(e, f), (c.current = !0);
      },
      onPointerUp: F(e.onPointerUp, (f) => {
        var h;
        c.current || (h = f.currentTarget) == null || h.click();
      }),
      onKeyDown: F(e.onKeyDown, (f) => {
        const h = l.searchRef.current !== "";
        n ||
          (h && f.key === " ") ||
          (xc.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
ll.displayName = ja;
var x0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e,
      i = Kd(ja, n),
      l = p0(n),
      u = p.useRef(null),
      c = me(t, u),
      [d, f] = p.useState(!1),
      [h, m] = p.useState("");
    return (
      p.useEffect(() => {
        const w = u.current;
        w && m((w.textContent ?? "").trim());
      }, [s.children]),
      a.jsx(As.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: a.jsx(Wj, {
          asChild: !0,
          ...l,
          focusable: !r,
          children: a.jsx(J.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: F(
              e.onPointerMove,
              Os((w) => {
                r
                  ? i.onItemLeave(w)
                  : (i.onItemEnter(w),
                    w.defaultPrevented ||
                      w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              Os((w) => i.onItemLeave(w))
            ),
            onFocus: F(e.onFocus, () => f(!0)),
            onBlur: F(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  K2 = "MenuCheckboxItem",
  w0 = p.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return a.jsx(E0, {
      scope: e.__scopeMenu,
      checked: n,
      children: a.jsx(ll, {
        role: "menuitemcheckbox",
        "aria-checked": ka(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": qd(n),
        onSelect: F(
          o.onSelect,
          () => (r == null ? void 0 : r(ka(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
w0.displayName = K2;
var b0 = "MenuRadioGroup",
  [G2, Q2] = Sr(b0, { value: void 0, onValueChange: () => {} }),
  N0 = p.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      s = xe(r);
    return a.jsx(G2, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: s,
      children: a.jsx(Qd, { ...o, ref: t }),
    });
  });
N0.displayName = b0;
var S0 = "MenuRadioItem",
  C0 = p.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = Q2(S0, e.__scopeMenu),
      s = n === o.value;
    return a.jsx(E0, {
      scope: e.__scopeMenu,
      checked: s,
      children: a.jsx(ll, {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": qd(s),
        onSelect: F(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
C0.displayName = S0;
var Yd = "MenuItemIndicator",
  [E0, Y2] = Sr(Yd, { checked: !1 }),
  j0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      s = Y2(Yd, n);
    return a.jsx(At, {
      present: r || ka(s.checked) || s.checked === !0,
      children: a.jsx(J.span, { ...o, ref: t, "data-state": qd(s.checked) }),
    });
  });
j0.displayName = Yd;
var q2 = "MenuSeparator",
  k0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return a.jsx(J.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
k0.displayName = q2;
var X2 = "MenuArrow",
  P0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = al(n);
    return a.jsx(Vg, { ...o, ...r, ref: t });
  });
P0.displayName = X2;
var Z2 = "MenuSub",
  [cP, R0] = Sr(Z2),
  Yo = "MenuSubTrigger",
  T0 = p.forwardRef((e, t) => {
    const n = Cr(Yo, e.__scopeMenu),
      r = Xs(Yo, e.__scopeMenu),
      o = R0(Yo, e.__scopeMenu),
      s = Kd(Yo, e.__scopeMenu),
      i = p.useRef(null),
      { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = s,
      c = { __scopeMenu: e.__scopeMenu },
      d = p.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      p.useEffect(() => d, [d]),
      p.useEffect(() => {
        const f = l.current;
        return () => {
          window.clearTimeout(f), u(null);
        };
      }, [l, u]),
      a.jsx(Wd, {
        asChild: !0,
        ...c,
        children: a.jsx(x0, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": A0(n.open),
          ...e,
          ref: Vs(t, o.onTriggerChange),
          onClick: (f) => {
            var h;
            (h = e.onClick) == null || h.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: F(
            e.onPointerMove,
            Os((f) => {
              s.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !i.current &&
                  (s.onPointerGraceIntentChange(null),
                  (i.current = window.setTimeout(() => {
                    n.onOpenChange(!0), d();
                  }, 100)));
            })
          ),
          onPointerLeave: F(
            e.onPointerLeave,
            Os((f) => {
              var m, w;
              d();
              const h =
                (m = n.content) == null ? void 0 : m.getBoundingClientRect();
              if (h) {
                const g = (w = n.content) == null ? void 0 : w.dataset.side,
                  b = g === "right",
                  v = b ? -5 : 5,
                  y = h[b ? "left" : "right"],
                  x = h[b ? "right" : "left"];
                s.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + v, y: f.clientY },
                    { x: y, y: h.top },
                    { x, y: h.top },
                    { x, y: h.bottom },
                    { x: y, y: h.bottom },
                  ],
                  side: g,
                }),
                  window.clearTimeout(l.current),
                  (l.current = window.setTimeout(
                    () => s.onPointerGraceIntentChange(null),
                    300
                  ));
              } else {
                if ((s.onTriggerLeave(f), f.defaultPrevented)) return;
                s.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: F(e.onKeyDown, (f) => {
            var m;
            const h = s.searchRef.current !== "";
            e.disabled ||
              (h && f.key === " ") ||
              (A2[r.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (m = n.content) == null || m.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
T0.displayName = Yo;
var M0 = "MenuSubContent",
  _0 = p.forwardRef((e, t) => {
    const n = h0(ft, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Cr(ft, e.__scopeMenu),
      i = Xs(ft, e.__scopeMenu),
      l = R0(M0, e.__scopeMenu),
      u = p.useRef(null),
      c = me(t, u);
    return a.jsx(As.Provider, {
      scope: e.__scopeMenu,
      children: a.jsx(At, {
        present: r || s.open,
        children: a.jsx(As.Slot, {
          scope: e.__scopeMenu,
          children: a.jsx(Gd, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...o,
            ref: c,
            align: "start",
            side: i.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              var f;
              i.isUsingKeyboardRef.current &&
                ((f = u.current) == null || f.focus()),
                d.preventDefault();
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: F(e.onFocusOutside, (d) => {
              d.target !== l.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: F(e.onEscapeKeyDown, (d) => {
              i.onClose(), d.preventDefault();
            }),
            onKeyDown: F(e.onKeyDown, (d) => {
              var m;
              const f = d.currentTarget.contains(d.target),
                h = O2[i.dir].includes(d.key);
              f &&
                h &&
                (s.onOpenChange(!1),
                (m = l.trigger) == null || m.focus(),
                d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
_0.displayName = M0;
function A0(e) {
  return e ? "open" : "closed";
}
function ka(e) {
  return e === "indeterminate";
}
function qd(e) {
  return ka(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function J2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ek(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function tk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = ek(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const u = i.find((c) => c.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function nk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s].x,
      u = t[s].y,
      c = t[i].x,
      d = t[i].y;
    u > r != d > r && n < ((c - l) * (r - u)) / (d - u) + l && (o = !o);
  }
  return o;
}
function rk(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return nk(n, t);
}
function Os(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var ok = m0,
  sk = Wd,
  ik = v0,
  ak = g0,
  lk = Qd,
  uk = y0,
  ck = ll,
  dk = w0,
  fk = N0,
  pk = C0,
  mk = j0,
  hk = k0,
  vk = P0,
  gk = T0,
  yk = _0,
  Xd = "DropdownMenu",
  [xk, dP] = qn(Xd, [f0]),
  We = f0(),
  [wk, O0] = xk(Xd),
  I0 = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: s,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      u = We(t),
      c = p.useRef(null),
      [d = !1, f] = Ks({ prop: o, defaultProp: s, onChange: i });
    return a.jsx(wk, {
      scope: t,
      triggerId: js(),
      triggerRef: c,
      contentId: js(),
      open: d,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((h) => !h), [f]),
      modal: l,
      children: a.jsx(ok, {
        ...u,
        open: d,
        onOpenChange: f,
        dir: r,
        modal: l,
        children: n,
      }),
    });
  };
I0.displayName = Xd;
var D0 = "DropdownMenuTrigger",
  L0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      s = O0(D0, n),
      i = We(n);
    return a.jsx(sk, {
      asChild: !0,
      ...i,
      children: a.jsx(J.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Vs(t, s.triggerRef),
        onPointerDown: F(e.onPointerDown, (l) => {
          !r &&
            l.button === 0 &&
            l.ctrlKey === !1 &&
            (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: F(e.onKeyDown, (l) => {
          r ||
            (["Enter", " "].includes(l.key) && s.onOpenToggle(),
            l.key === "ArrowDown" && s.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        }),
      }),
    });
  });
L0.displayName = D0;
var bk = "DropdownMenuPortal",
  F0 = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = We(t);
    return a.jsx(ik, { ...r, ...n });
  };
F0.displayName = bk;
var z0 = "DropdownMenuContent",
  $0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = O0(z0, n),
      s = We(n),
      i = p.useRef(!1);
    return a.jsx(ak, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...s,
      ...r,
      ref: t,
      onCloseAutoFocus: F(e.onCloseAutoFocus, (l) => {
        var u;
        i.current || (u = o.triggerRef.current) == null || u.focus(),
          (i.current = !1),
          l.preventDefault();
      }),
      onInteractOutside: F(e.onInteractOutside, (l) => {
        const u = l.detail.originalEvent,
          c = u.button === 0 && u.ctrlKey === !0,
          d = u.button === 2 || c;
        (!o.modal || d) && (i.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
$0.displayName = z0;
var Nk = "DropdownMenuGroup",
  Sk = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(lk, { ...o, ...r, ref: t });
  });
Sk.displayName = Nk;
var Ck = "DropdownMenuLabel",
  U0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(uk, { ...o, ...r, ref: t });
  });
U0.displayName = Ck;
var Ek = "DropdownMenuItem",
  B0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(ck, { ...o, ...r, ref: t });
  });
B0.displayName = Ek;
var jk = "DropdownMenuCheckboxItem",
  V0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(dk, { ...o, ...r, ref: t });
  });
V0.displayName = jk;
var kk = "DropdownMenuRadioGroup",
  Pk = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(fk, { ...o, ...r, ref: t });
  });
Pk.displayName = kk;
var Rk = "DropdownMenuRadioItem",
  W0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(pk, { ...o, ...r, ref: t });
  });
W0.displayName = Rk;
var Tk = "DropdownMenuItemIndicator",
  H0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(mk, { ...o, ...r, ref: t });
  });
H0.displayName = Tk;
var Mk = "DropdownMenuSeparator",
  K0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(hk, { ...o, ...r, ref: t });
  });
K0.displayName = Mk;
var _k = "DropdownMenuArrow",
  Ak = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(vk, { ...o, ...r, ref: t });
  });
Ak.displayName = _k;
var Ok = "DropdownMenuSubTrigger",
  G0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(gk, { ...o, ...r, ref: t });
  });
G0.displayName = Ok;
var Ik = "DropdownMenuSubContent",
  Q0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = We(n);
    return a.jsx(yk, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Q0.displayName = Ik;
var Dk = I0,
  Lk = L0,
  Fk = F0,
  Y0 = $0,
  q0 = U0,
  X0 = B0,
  Z0 = V0,
  J0 = W0,
  ex = H0,
  tx = K0,
  nx = G0,
  rx = Q0;
const zk = Dk,
  $k = Lk,
  Uk = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    a.jsxs(nx, {
      ref: o,
      className: he(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, a.jsx(lg, { className: "ml-auto h-4 w-4" })],
    })
  );
Uk.displayName = nx.displayName;
const Bk = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(rx, {
    ref: n,
    className: he(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
Bk.displayName = rx.displayName;
const ox = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  a.jsx(Fk, {
    children: a.jsx(Y0, {
      ref: r,
      sideOffset: t,
      className: he(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    }),
  })
);
ox.displayName = Y0.displayName;
const Ir = p.forwardRef(({ className: e, inset: t, ...n }, r) =>
  a.jsx(X0, {
    ref: r,
    className: he(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
Ir.displayName = X0.displayName;
const Vk = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  a.jsxs(Z0, {
    ref: o,
    className: he(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      a.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(ex, { children: a.jsx(Qo, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
Vk.displayName = Z0.displayName;
const Wk = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.jsxs(J0, {
    ref: r,
    className: he(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      a.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(ex, {
          children: a.jsx(Ab, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
Wk.displayName = J0.displayName;
const Hk = p.forwardRef(({ className: e, inset: t, ...n }, r) =>
  a.jsx(q0, {
    ref: r,
    className: he("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  })
);
Hk.displayName = q0.displayName;
const Kk = p.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(tx, { ref: n, className: he("-mx-1 my-1 h-px bg-muted", e), ...t })
);
Kk.displayName = tx.displayName;
const ul = () => {
    const [e, t] = p.useState(!1),
      [n, r] = p.useState(!1),
      o = Nr(),
      s = p.useRef(null),
      i = is(s, { threshold: 0.1 });
    p.useEffect(() => {
      const u = () => {
        window.scrollY > 10 ? t(!0) : t(!1);
      };
      return (
        window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
      );
    }, []),
      p.useEffect(() => {
        r(!1);
      }, [o.pathname]);
    const l = ({ to: u, children: c }) =>
      a.jsx(He, {
        to: u,
        className: ({ isActive: d }) =>
          `nav-link transition-all duration-300 py-2 px-3 rounded-md hover:bg-ips-neutral-100 ${
            d ? "text-ips-blue font-semibold" : "text-ips-neutral-800"
          }`,
        children: c,
      });
    return a.jsx("header", {
      ref: s,
      className: he(
        "fixed w-full z-50 transition-all duration-500",
        e ? "glass-nav py-3 shadow-md backdrop-blur-md" : "bg-transparent py-5",
        !i && "translate-y-0"
      ),
      children: a.jsxs("div", {
        className: "container mx-auto px-4 flex justify-between items-center",
        children: [
          a.jsx(He, {
            to: "/",
            className: "flex items-center",
            children: a.jsxs("h1", {
              className:
                "text-xl md:text-2xl font-bold text-ips-neutral-900 transition-all",
              children: [
                "IPS ",
                a.jsx("span", {
                  className: "text-ips-blue",
                  children: "Manpower",
                }),
              ],
            }),
          }),
          a.jsxs("div", {
            className: "hidden md:flex items-center space-x-6",
            children: [
              a.jsx(Vy, {
                className: "hidden md:flex",
                children: a.jsxs(Wy, {
                  className: "flex gap-1",
                  children: [
                    a.jsx(Ci, {
                      children: a.jsx(l, { to: "/", children: "Home" }),
                    }),
                    a.jsxs(Ci, {
                      children: [
                        a.jsx(Hy, {
                          className: "bg-transparent hover:bg-ips-neutral-100",
                          children: a.jsx("span", {
                            className:
                              "text-ips-neutral-800 hover:text-ips-blue",
                            children: "Services",
                          }),
                        }),
                        a.jsx(Ky, {
                          children: a.jsxs("div", {
                            className:
                              "w-[400px] p-4 md:grid gap-3 grid-cols-2",
                            children: [
                              a.jsx(He, {
                                to: "/services",
                                className: "nav-menu-item group",
                                children: a.jsxs("div", {
                                  className:
                                    "p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors",
                                  children: [
                                    a.jsx("h4", {
                                      className:
                                        "font-medium text-ips-neutral-900 mb-1",
                                      children: "Recruitment",
                                    }),
                                    a.jsx("p", {
                                      className: "text-sm text-ips-neutral-600",
                                      children:
                                        "Professional recruitment services",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(He, {
                                to: "/services",
                                className: "nav-menu-item group",
                                children: a.jsxs("div", {
                                  className:
                                    "p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors",
                                  children: [
                                    a.jsx("h4", {
                                      className:
                                        "font-medium text-ips-neutral-900 mb-1",
                                      children: "Staffing",
                                    }),
                                    a.jsx("p", {
                                      className: "text-sm text-ips-neutral-600",
                                      children:
                                        "Temporary and permanent staffing",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(He, {
                                to: "/services",
                                className: "nav-menu-item group",
                                children: a.jsxs("div", {
                                  className:
                                    "p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors",
                                  children: [
                                    a.jsx("h4", {
                                      className:
                                        "font-medium text-ips-neutral-900 mb-1",
                                      children: "Training",
                                    }),
                                    a.jsx("p", {
                                      className: "text-sm text-ips-neutral-600",
                                      children:
                                        "Professional skill development",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(He, {
                                to: "/services",
                                className: "nav-menu-item group",
                                children: a.jsxs("div", {
                                  className:
                                    "p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors",
                                  children: [
                                    a.jsx("h4", {
                                      className:
                                        "font-medium text-ips-neutral-900 mb-1",
                                      children: "Consulting",
                                    }),
                                    a.jsx("p", {
                                      className: "text-sm text-ips-neutral-600",
                                      children: "HR and workforce consulting",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a.jsx(Ci, {
                      children: a.jsx(l, { to: "/about", children: "About" }),
                    }),
                    a.jsx(Ci, {
                      children: a.jsx(l, {
                        to: "/contact",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
              }),
              a.jsx("a", {
                href: "tel:+977981885955",
                className:
                  "btn-primary animate-fade-in text-sm px-5 py-2 flex items-center",
                children: "Call Now",
              }),
            ],
          }),
          a.jsxs(zk, {
            open: n,
            onOpenChange: r,
            children: [
              a.jsx($k, {
                asChild: !0,
                children: a.jsx("button", {
                  className:
                    "md:hidden text-ips-neutral-900 focus:outline-none",
                  "aria-label": "Toggle menu",
                  children: n
                    ? a.jsx(cg, { size: 24 })
                    : a.jsx(Db, { size: 24 }),
                }),
              }),
              a.jsx(ox, {
                align: "end",
                className:
                  "w-[90vw] mr-2 mt-2 rounded-xl bg-white/95 backdrop-blur-md border border-ips-neutral-200 shadow-elegant-lg py-4",
                children: a.jsxs("div", {
                  className: "flex flex-col space-y-1 px-1",
                  children: [
                    a.jsx(Ir, {
                      asChild: !0,
                      children: a.jsx(He, {
                        to: "/",
                        className:
                          "flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100",
                        children: "Home",
                      }),
                    }),
                    a.jsx(Ir, {
                      asChild: !0,
                      children: a.jsx(He, {
                        to: "/about",
                        className:
                          "flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100",
                        children: "About",
                      }),
                    }),
                    a.jsx(Ir, {
                      asChild: !0,
                      children: a.jsxs(He, {
                        to: "/services",
                        className:
                          "flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100",
                        children: [
                          a.jsx("span", { children: "Services" }),
                          a.jsx(ag, { size: 16, className: "ml-1" }),
                        ],
                      }),
                    }),
                    a.jsx(Ir, {
                      asChild: !0,
                      children: a.jsx(He, {
                        to: "/contact",
                        className:
                          "flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100",
                        children: "Contact",
                      }),
                    }),
                    a.jsx(Ir, {
                      asChild: !0,
                      children: a.jsx("a", {
                        href: "tel:+977981885955",
                        className: "btn-primary w-full text-center my-3 py-3",
                        children: "Call Now",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  cl = () => {
    const e = new Date().getFullYear();
    return a.jsx("footer", {
      className: "bg-ips-neutral-900 text-white py-12 md:py-16",
      children: a.jsxs("div", {
        className: "section-container",
        children: [
          a.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12",
            children: [
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsxs("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: [
                      "IPS ",
                      a.jsx("span", {
                        className: "text-ips-blue",
                        children: "Manpower",
                      }),
                    ],
                  }),
                  a.jsx("p", {
                    className: "text-ips-neutral-200 text-base leading-relaxed",
                    children:
                      "One of the leading manpower agencies in Nepal with over 20 years of experience in connecting skilled professionals with global opportunities.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Quick Links",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      a.jsx("li", {
                        children: a.jsx(He, {
                          to: "/",
                          className:
                            "text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300",
                          children: "Home",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(He, {
                          to: "/about",
                          className:
                            "text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300",
                          children: "About Us",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(He, {
                          to: "/services",
                          className:
                            "text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300",
                          children: "Our Services",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(He, {
                          to: "/contact",
                          className:
                            "text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300",
                          children: "Contact Us",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Contact Information",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-4",
                    children: [
                      a.jsxs("li", {
                        className: "flex items-start space-x-3",
                        children: [
                          a.jsx(bd, {
                            size: 20,
                            className: "text-ips-blue flex-shrink-0 mt-1",
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("p", {
                                className: "text-ips-neutral-200 text-sm",
                                children: "Phone",
                              }),
                              a.jsx("a", {
                                href: "tel:+977981885955",
                                className:
                                  "text-white hover:text-ips-blue transition-colors duration-300",
                                children: "+977 9849300184",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start space-x-3",
                        children: [
                          a.jsx(ga, {
                            size: 20,
                            className: "text-ips-blue flex-shrink-0 mt-1",
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("p", {
                                className: "text-ips-neutral-200 text-sm",
                                children: "Email",
                              }),
                              a.jsx("a", {
                                href: "mailto:ipservices424@gmail.com",
                                className:
                                  "text-white hover:text-ips-blue transition-colors duration-300",
                                children: "ipservices424@gmail.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start space-x-3",
                        children: [
                          a.jsx(wd, {
                            size: 20,
                            className: "text-ips-blue flex-shrink-0 mt-1",
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("p", {
                                className: "text-ips-neutral-200 text-sm",
                                children: "Address",
                              }),
                              a.jsx("address", {
                                className: "text-white not-italic",
                                children: "Kathmandu, Nepal",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Business Hours",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      a.jsxs("li", {
                        className: "text-ips-neutral-200",
                        children: [
                          a.jsx("span", {
                            className: "text-white font-medium",
                            children: "Mon - Fri:",
                          }),
                          " 9:00 AM - 6:00 PM",
                        ],
                      }),
                      a.jsxs("li", {
                        className: "text-ips-neutral-200",
                        children: [
                          a.jsx("span", {
                            className: "text-white font-medium",
                            children: "Saturday:",
                          }),
                          " 9:00 AM - 2:00 PM",
                        ],
                      }),
                      a.jsxs("li", {
                        className: "text-ips-neutral-200",
                        children: [
                          a.jsx("span", {
                            className: "text-white font-medium",
                            children: "Sunday:",
                          }),
                          " Closed",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className: "border-t border-ips-neutral-800 mt-12 pt-6",
            children: a.jsx("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center",
              children: a.jsxs("p", {
                className: "text-ips-neutral-200 text-sm mb-4 md:mb-0",
                children: ["© ", e, " IPS Manpower. All rights reserved."],
              }),
            }),
          }),
        ],
      }),
    });
  },
  Gk = () => {
    const e = [
      {
        name: "Rajesh Kumar",
        position: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
        content:
          "IPS Manpower helped me secure a position in Dubai with a competitive salary. Their support throughout the visa process was excellent.",
        rating: 5,
      },
      {
        name: "Sunita Sharma",
        position: "Nurse",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
        content:
          "The team at IPS was professional and supportive throughout my application process. I'm now working in Australia and couldn't be happier.",
        rating: 5,
      },
      {
        name: "Anup Thapa",
        position: "Hotel Manager",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
        content:
          "From documentation to interview preparation, IPS Manpower provided exceptional guidance. I highly recommend their services.",
        rating: 5,
      },
    ];
    return a.jsx("section", {
      className: "py-24 bg-gradient-to-b from-white to-ips-neutral",
      children: a.jsxs("div", {
        className: "section-container",
        children: [
          a.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              a.jsx("span", {
                className:
                  "inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-3",
                children: "Testimonials",
              }),
              a.jsx("h2", {
                className: "section-title",
                children: "What Our Clients Say",
              }),
              a.jsx("p", {
                className: "section-subtitle",
                children:
                  "Hear from candidates who have successfully found employment through our services.",
              }),
            ],
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: e.map((t, n) =>
              a.jsxs(
                "div",
                {
                  className: "bg-white p-8 rounded-xl shadow-elegant relative",
                  children: [
                    a.jsx("div", {
                      className:
                        "absolute top-6 right-6 text-ips-blue opacity-20",
                      children: a.jsx(Lb, { size: 48 }),
                    }),
                    a.jsxs("div", {
                      className: "flex items-center mb-6",
                      children: [
                        a.jsx("img", {
                          src: t.image,
                          alt: t.name,
                          className:
                            "w-14 h-14 rounded-full object-cover mr-4 border-2 border-ips-blue-light",
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("h3", {
                              className:
                                "text-lg font-display font-medium text-ips-neutral-900",
                              children: t.name,
                            }),
                            a.jsx("p", {
                              className: "text-sm text-ips-neutral-800/80",
                              children: t.position,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      className: "text-ips-neutral-800 mb-6 relative z-10",
                      children: t.content,
                    }),
                    a.jsx("div", {
                      className: "flex",
                      children: [...Array(t.rating)].map((r, o) =>
                        a.jsx(
                          Fb,
                          {
                            size: 16,
                            className: "text-yellow-400 fill-yellow-400",
                          },
                          o
                        )
                      ),
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  Qk = () => {
    const e = p.useRef(null),
      t = is(e, { threshold: 0.2, once: !0 }),
      n = [
        {
          icon: a.jsx(xd, { className: "w-10 h-10 text-ips-blue" }),
          value: 20,
          suffix: "+",
          label: "Years Experience",
          delay: "delay-100",
        },
        {
          icon: a.jsx(Sd, { className: "w-10 h-10 text-ips-blue" }),
          value: 5e3,
          suffix: "+",
          label: "Professionals Placed",
          delay: "delay-200",
        },
        {
          icon: a.jsx(Gs, { className: "w-10 h-10 text-ips-blue" }),
          value: 25,
          suffix: "+",
          label: "Countries Served",
          delay: "delay-300",
        },
        {
          icon: a.jsx(Ga, { className: "w-10 h-10 text-ips-blue" }),
          value: 100,
          suffix: "+",
          label: "Corporate Clients",
          delay: "delay-400",
        },
      ];
    return a.jsx("section", {
      ref: e,
      className: "py-16 bg-ips-neutral-100",
      children: a.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: a.jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8",
          children: n.map((r, o) =>
            a.jsx(
              Yk,
              {
                icon: r.icon,
                value: r.value,
                suffix: r.suffix,
                label: r.label,
                delay: r.delay,
                isVisible: t,
              },
              o
            )
          ),
        }),
      }),
    });
  },
  Yk = ({
    icon: e,
    value: t,
    suffix: n = "",
    label: r,
    delay: o,
    isVisible: s,
  }) => {
    const [i, l] = p.useState(0);
    return (
      p.useEffect(() => {
        if (s) {
          const f = t / 125;
          let h = 0,
            m;
          return (
            (m = setInterval(() => {
              (h += f), h > t && ((h = t), clearInterval(m)), l(Math.floor(h));
            }, 16)),
            () => clearInterval(m)
          );
        }
      }, [s, t]),
      a.jsxs("div", {
        className: `flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-elegant transform transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant-lg ${
          s ? `animate-scale-up ${o}` : "opacity-0"
        }`,
        children: [
          a.jsx("div", {
            className:
              "mb-4 bg-ips-blue/10 p-3 rounded-full transform transition-all duration-300 hover:rotate-12",
            children: e,
          }),
          a.jsxs("h3", {
            className:
              "text-3xl md:text-4xl font-display font-bold text-ips-neutral-900",
            children: [i, n],
          }),
          a.jsx("p", {
            className: "text-ips-neutral-800/80 text-center mt-1",
            children: r,
          }),
        ],
      })
    );
  },
  qk = () =>
    a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(ul, {}),
        a.jsxs("main", {
          className: "flex-grow",
          children: [
            a.jsx(ej, {}),
            a.jsx(Qk, {}),
            a.jsx(tj, {}),
            a.jsx(nj, {}),
            a.jsx(Gk, {}),
            a.jsx(rj, {}),
          ],
        }),
        a.jsx(cl, {}),
      ],
    }),
  Xk = () =>
    a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(ul, {}),
        a.jsxs("main", {
          className: "flex-grow pt-20",
          children: [
            a.jsx("section", {
              className:
                "py-20 bg-gradient-to-r from-ips-neutral to-ips-neutral-100",
              children: a.jsx("div", {
                className: "section-container",
                children: a.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "animate-fade-up",
                      children: [
                        a.jsxs("h1", {
                          className:
                            "text-4xl md:text-5xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6",
                          children: [
                            "About ",
                            a.jsx("span", {
                              className: "text-ips-blue",
                              children: "IPS Manpower",
                            }),
                          ],
                        }),
                        a.jsx("p", {
                          className:
                            "text-lg text-ips-neutral-800/80 mb-8 max-w-2xl",
                          children:
                            "Learn about our journey, our values, and what makes us one of Nepal's leading manpower agencies with over 20 years of excellence.",
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "relative",
                      children: a.jsx("img", {
                        src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                        alt: "Professional team",
                        className: "rounded-lg shadow-elegant animate-fade-in",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-white",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Our Story",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "From humble beginnings to becoming one of Nepal's premier manpower agencies",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                      a.jsx("div", {
                        className: "order-2 lg:order-1",
                        children: a.jsx("img", {
                          src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                          alt: "Office building",
                          className: "rounded-lg shadow-elegant h-auto",
                        }),
                      }),
                      a.jsxs("div", {
                        className: "order-1 lg:order-2 space-y-6",
                        children: [
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "IPS Manpower was formed through the strategic merger of 5 leading manpower agencies in Nepal, bringing together decades of combined experience and expertise in the recruitment industry.",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "This unique collaboration has allowed us to pool our resources, networks, and knowledge to create a powerhouse in the manpower sector, capable of providing unparalleled services to both job seekers and employers.",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Over the past 20+ years, we have evolved and grown, adapting to the changing dynamics of the global labor market while maintaining our commitment to ethical recruitment practices and excellence in service delivery.",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Today, IPS Manpower stands as a testament to what can be achieved through collaboration, dedication, and a steadfast focus on connecting the right talent with the right opportunities.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-ips-neutral",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Our Values",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "The principles that guide our operations and define our approach",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(Sd, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Integrity",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We conduct our business with honesty, transparency, and ethical practices at every step of the recruitment process.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(xd, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Excellence",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We strive for excellence in all our services, maintaining the highest standards of quality and professionalism.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(Nd, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Respect",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We treat all individuals—candidates, clients, and colleagues—with dignity, fairness, and respect.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(Gs, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Global Perspective",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We embrace a global mindset, understanding diverse cultures and market needs across different regions.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(Ib, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Quality",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We are committed to providing high-quality service and maintaining rigorous standards in our selection process.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("div", {
                            className:
                              "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                            children: a.jsx(Ga, {
                              size: 32,
                              className: "text-ips-blue",
                            }),
                          }),
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Innovation",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "We continuously evolve our practices and adopt new technologies to enhance our service delivery.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-white",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Why Choose Us",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "What sets IPS Manpower apart from other agencies",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-16",
                    children: [
                      a.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Combined Experience",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "Our unique formation through the merger of 5 leading agencies gives us unparalleled combined experience and expertise.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Extensive Network",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "We have established connections with employers in over 25 countries, opening up global opportunities for job seekers.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Comprehensive Services",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "We offer end-to-end recruitment solutions, from initial selection to pre-departure preparation and ongoing support.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Legal Compliance",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "We ensure strict adherence to all legal requirements and regulations in both Nepal and destination countries.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Personalized Approach",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "We take the time to understand the unique needs of both job seekers and employers to ensure perfect matches.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              a.jsx("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                children: a.jsx(nr, {
                                  size: 20,
                                  className: "text-ips-blue",
                                }),
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-ips-neutral-900 mb-2",
                                    children: "Post-Placement Support",
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80",
                                    children:
                                      "Our commitment doesn't end with placement; we provide ongoing assistance to ensure long-term success.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsx(cl, {}),
      ],
    }),
  Zk = () => {
    const e = [
      {
        id: "recruitment",
        title: "Recruitment & Selection",
        icon: a.jsx(Nd, { size: 32, className: "text-ips-blue" }),
        description:
          "Our comprehensive recruitment and selection services ensure that employers find the best talent while job seekers secure positions that match their skills and career goals.",
        services: [
          "Resume screening and shortlisting",
          "Skill assessment and testing",
          "Background verification",
          "Candidate interviews",
          "Reference checks",
          "Final selection and placement",
        ],
      },
      {
        id: "international",
        title: "International Placement",
        icon: a.jsx(Gs, { size: 32, className: "text-ips-blue" }),
        description:
          "We connect skilled Nepalese professionals with employment opportunities worldwide, facilitating placements in over 25 countries across various industries.",
        services: [
          "Global job market analysis",
          "Country-specific recruitment",
          "Cultural orientation and preparation",
          "Foreign employer liaison",
          "International employment contracts",
          "Pre-departure briefings",
        ],
      },
      {
        id: "documentation",
        title: "Documentation Support",
        icon: a.jsx(ug, { size: 32, className: "text-ips-blue" }),
        description:
          "Our documentation support services ensure smooth processing of all necessary paperwork for both job seekers and employers, minimizing delays and complications.",
        services: [
          "Visa application assistance",
          "Work permit processing",
          "Medical examination coordination",
          "Travel document verification",
          "Employment contract preparation",
          "Legal attestation services",
        ],
      },
      {
        id: "corporate",
        title: "Corporate Staffing",
        icon: a.jsx(Ga, { size: 32, className: "text-ips-blue" }),
        description:
          "We provide tailored staffing solutions for businesses of all sizes, helping them build skilled teams that drive growth and success.",
        services: [
          "Workforce planning and analysis",
          "Job description development",
          "Bulk recruitment campaigns",
          "Executive search",
          "Project-based staffing",
          "Temporary and permanent placements",
        ],
      },
      {
        id: "training",
        title: "Skills Training",
        icon: a.jsx(ig, { size: 32, className: "text-ips-blue" }),
        description:
          "Our skills training programs prepare candidates for international work environments, enhancing their employability and ensuring they meet the requirements of prospective employers.",
        services: [
          "Technical skills development",
          "Language proficiency training",
          "Cross-cultural communication",
          "Professional etiquette",
          "Industry-specific training",
          "Soft skills enhancement",
        ],
      },
      {
        id: "ethical",
        title: "Ethical Recruitment",
        icon: a.jsx(tc, { size: 32, className: "text-ips-blue" }),
        description:
          "We adhere to the highest ethical standards in all our recruitment practices, ensuring transparency, fairness, and respect for the rights and dignity of all job seekers.",
        services: [
          "No-fee recruitment policy",
          "Transparent process explanation",
          "Clear contract terms",
          "Anti-discrimination practices",
          "Fair treatment assurance",
          "Grievance redressal mechanism",
        ],
      },
    ];
    return a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(ul, {}),
        a.jsxs("main", {
          className: "flex-grow pt-20",
          children: [
            a.jsx("section", {
              className:
                "py-20 bg-gradient-to-r from-ips-neutral to-ips-neutral-100",
              children: a.jsx("div", {
                className: "section-container",
                children: a.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "animate-fade-up",
                      children: [
                        a.jsxs("h1", {
                          className:
                            "text-4xl md:text-5xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6",
                          children: [
                            "Our ",
                            a.jsx("span", {
                              className: "text-ips-blue",
                              children: "Services",
                            }),
                          ],
                        }),
                        a.jsx("p", {
                          className:
                            "text-lg text-ips-neutral-800/80 mb-8 max-w-2xl",
                          children:
                            "Comprehensive manpower solutions tailored to meet the needs of both job seekers and employers across various industries and regions.",
                        }),
                        a.jsx(Kn, {
                          to: "/contact",
                          className: "btn-primary",
                          children: "Get Started Today",
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "relative",
                      children: a.jsx("img", {
                        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                        alt: "Professional meeting",
                        className: "rounded-lg shadow-elegant animate-fade-in",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-white",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Comprehensive Solutions",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "Explore our range of specialized services designed to meet the diverse needs of our clients",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "space-y-20",
                    children: e.map((t, n) =>
                      a.jsxs(
                        "div",
                        {
                          className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                            n % 2 !== 0 ? "lg:grid-flow-dense" : ""
                          }`,
                          children: [
                            a.jsx("div", {
                              className: n % 2 !== 0 ? "lg:col-start-2" : "",
                              children: a.jsxs("div", {
                                className:
                                  "glass-card p-8 rounded-lg shadow-elegant",
                                children: [
                                  a.jsx("div", {
                                    className:
                                      "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6",
                                    children: t.icon,
                                  }),
                                  a.jsx("h3", {
                                    className:
                                      "text-2xl font-display font-medium text-ips-neutral-900 mb-4",
                                    children: t.title,
                                  }),
                                  a.jsx("p", {
                                    className: "text-ips-neutral-800/80 mb-6",
                                    children: t.description,
                                  }),
                                  a.jsxs("div", {
                                    className: "space-y-3",
                                    children: [
                                      a.jsx("h4", {
                                        className:
                                          "text-lg font-medium text-ips-neutral-900 mb-2",
                                        children: "Key Services:",
                                      }),
                                      a.jsx("ul", {
                                        className: "space-y-2",
                                        children: t.services.map((r, o) =>
                                          a.jsxs(
                                            "li",
                                            {
                                              className: "flex items-start",
                                              children: [
                                                a.jsx(lg, {
                                                  size: 18,
                                                  className:
                                                    "text-ips-blue mr-2 mt-1 flex-shrink-0",
                                                }),
                                                a.jsx("span", {
                                                  className:
                                                    "text-ips-neutral-800",
                                                  children: r,
                                                }),
                                              ],
                                            },
                                            o
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            a.jsx("div", {
                              className: n % 2 !== 0 ? "lg:col-start-1" : "",
                              children: a.jsx("img", {
                                src: `https://images.unsplash.com/photo-15${
                                  550 + n * 10
                                }-${1e3 + n * 100}-${
                                  n * 1e3
                                }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
                                alt: t.title,
                                className: "rounded-lg shadow-elegant h-auto",
                              }),
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-ips-neutral",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Industries We Serve",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "Our expertise spans across multiple sectors, providing specialized manpower solutions for diverse industry needs",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Healthcare & Medical",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Nurses, doctors, lab technicians, medical assistants, and other healthcare professionals.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Construction & Engineering",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Civil engineers, architects, electricians, welders, carpenters, and construction workers.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Hospitality & Tourism",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Chefs, hotel staff, waiters, housekeeping personnel, and tourism professionals.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "IT & Technology",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Software developers, network engineers, cybersecurity experts, and IT support staff.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Manufacturing & Production",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Machine operators, quality control inspectors, production supervisors, and technicians.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Oil & Gas",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Engineers, technicians, operators, and support staff for the petroleum industry.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Security Services",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Security guards, officers, and personnel for various security requirements.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Retail & Sales",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Retail staff, sales executives, store managers, and customer service representatives.",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg",
                        children: [
                          a.jsx("h3", {
                            className:
                              "text-xl font-display font-medium text-ips-neutral-900 mb-3",
                            children: "Agriculture & Farming",
                          }),
                          a.jsx("p", {
                            className: "text-ips-neutral-800/80",
                            children:
                              "Farm workers, agricultural engineers, and specialists in various farming operations.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-white",
              children: a.jsx("div", {
                className: "section-container",
                children: a.jsx("div", {
                  className:
                    "glass-card p-12 rounded-lg bg-gradient-to-r from-ips-blue-light/30 to-white",
                  children: a.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("h2", {
                            className:
                              "text-3xl font-display font-medium text-ips-neutral-900 mb-4",
                            children: "Ready to Get Started?",
                          }),
                          a.jsx("p", {
                            className: "text-lg text-ips-neutral-800/80 mb-6",
                            children:
                              "Whether you're a job seeker looking for opportunities or an employer seeking qualified professionals, we're here to help.",
                          }),
                          a.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [
                              a.jsx(Kn, {
                                to: "/contact",
                                className: "btn-primary",
                                children: "Contact Us Today",
                              }),
                              a.jsx("a", {
                                href: "tel:+977981885955",
                                className: "btn-secondary",
                                children: "Call Us Directly",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "relative",
                        children: [
                          a.jsx("div", {
                            className:
                              "glass-card p-6 rounded-lg animate-fade-in",
                            children: a.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                  children: a.jsx(Sd, {
                                    size: 28,
                                    className: "text-ips-blue",
                                  }),
                                }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("h3", {
                                      className:
                                        "text-xl font-medium text-ips-neutral-900",
                                      children: "Personalized Service",
                                    }),
                                    a.jsx("p", {
                                      className: "text-ips-neutral-800/80",
                                      children:
                                        "Tailored to your specific needs",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          a.jsx("div", {
                            className:
                              "glass-card p-6 rounded-lg mt-6 ml-8 animate-fade-in",
                            style: { animationDelay: "0.2s" },
                            children: a.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                  children: a.jsx(xd, {
                                    size: 28,
                                    className: "text-ips-blue",
                                  }),
                                }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("h3", {
                                      className:
                                        "text-xl font-medium text-ips-neutral-900",
                                      children: "Quality Assured",
                                    }),
                                    a.jsx("p", {
                                      className: "text-ips-neutral-800/80",
                                      children: "Highest standards maintained",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          a.jsx("div", {
                            className:
                              "glass-card p-6 rounded-lg mt-6 animate-fade-in",
                            style: { animationDelay: "0.4s" },
                            children: a.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4",
                                  children: a.jsx(tc, {
                                    size: 28,
                                    className: "text-ips-blue",
                                  }),
                                }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("h3", {
                                      className:
                                        "text-xl font-medium text-ips-neutral-900",
                                      children: "Ethical Process",
                                    }),
                                    a.jsx("p", {
                                      className: "text-ips-neutral-800/80",
                                      children:
                                        "Transparent and fair practices",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
        a.jsx(cl, {}),
      ],
    });
  },
  Jk = ({
    icon: e,
    title: t,
    description: n,
    content: r,
    delayClass: o = "",
    isVisible: s = !0,
  }) =>
    a.jsxs("div", {
      className: `glass-card p-8 rounded-lg transition-all duration-500 hover:shadow-elegant-lg transform hover:-translate-y-2 ${
        s ? `animate-fade-in-up ${o}` : "opacity-0"
      }`,
      children: [
        a.jsx("div", {
          className:
            "h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6 transform transition-all duration-300 hover:rotate-3 hover:scale-110",
          children: e,
        }),
        a.jsx("h3", {
          className:
            "text-xl font-display font-medium text-ips-neutral-900 mb-3",
          children: t,
        }),
        n &&
          a.jsx("p", {
            className: "text-ips-neutral-800/80 mb-4",
            children: n,
          }),
        r,
      ],
    }),
  eP = () => {
    const e = p.useRef(null),
      t = p.useRef(null),
      n = p.useRef(null),
      r = is(e, { threshold: 0.1, once: !0 }),
      o = is(t, { threshold: 0.1, once: !0 }),
      s = is(n, { threshold: 0.1, once: !0 });
    return a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(ul, {}),
        a.jsxs("main", {
          className: "flex-grow pt-20",
          children: [
            a.jsx("section", {
              ref: e,
              className: `py-20 bg-gradient-to-r from-ips-neutral to-ips-neutral-100 transition-all duration-700 ease-out ${
                r ? "opacity-100" : "opacity-0 translate-y-10"
              }`,
              children: a.jsx("div", {
                className: "section-container",
                children: a.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "animate-fade-up",
                      children: [
                        a.jsxs("h1", {
                          className:
                            "text-4xl md:text-5xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6",
                          children: [
                            "Contact ",
                            a.jsx("span", {
                              className: "text-ips-blue",
                              children: "Us",
                            }),
                          ],
                        }),
                        a.jsx("p", {
                          className:
                            "text-lg text-ips-neutral-800/80 mb-8 max-w-2xl",
                          children:
                            "Have questions or ready to explore opportunities? Reach out to our team today and let us help you take the next step in your journey.",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "relative overflow-hidden rounded-lg",
                      children: [
                        a.jsx("img", {
                          src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                          alt: "Contact us",
                          className:
                            "rounded-lg shadow-elegant transform transition-all duration-700 hover:scale-105",
                        }),
                        a.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-ips-blue/20 to-transparent rounded-lg",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              ref: t,
              className: "py-20 bg-white",
              children: a.jsxs("div", {
                className: "section-container",
                children: [
                  a.jsxs("div", {
                    className: `max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
                      o ? "opacity-100" : "opacity-0 translate-y-10"
                    }`,
                    children: [
                      a.jsx("h2", {
                        className: "section-title",
                        children: "Get in Touch",
                      }),
                      a.jsx("p", {
                        className: "section-subtitle",
                        children:
                          "We're here to answer any questions you might have about our services",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [
                      {
                        icon: a.jsx(bd, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Phone",
                        description:
                          "Feel free to call us directly with any questions or inquiries",
                        content: a.jsx("a", {
                          href: "tel:+977981885955",
                          className:
                            "text-ips-blue hover:text-ips-blue-dark font-medium transition-colors",
                          children: "+977 9849300184",
                        }),
                        delay: "delay-100",
                      },
                      {
                        icon: a.jsx(ga, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Email",
                        description:
                          "Send us an email and we'll get back to you as soon as possible",
                        content: a.jsx("a", {
                          href: "mailto:ipservices424@gmail.com",
                          className:
                            "text-ips-blue hover:text-ips-blue-dark font-medium transition-colors",
                          children: "ipservices424@gmail.com",
                        }),
                        delay: "delay-200",
                      },
                      {
                        icon: a.jsx(wd, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Location",
                        description:
                          "Visit our office for in-person discussions and consultations",
                        content: a.jsx("address", {
                          className: "text-ips-neutral-800 not-italic",
                          children: "Kathmandu, Nepal",
                        }),
                        delay: "delay-300",
                      },
                      {
                        icon: a.jsx(Ob, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Business Hours",
                        content: a.jsxs("ul", {
                          className: "space-y-2 text-ips-neutral-800/80",
                          children: [
                            a.jsxs("li", {
                              className: "flex justify-between",
                              children: [
                                a.jsx("span", { children: "Monday - Friday:" }),
                                a.jsx("span", {
                                  className: "font-medium",
                                  children: "9:00 AM - 6:00 PM",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              className: "flex justify-between",
                              children: [
                                a.jsx("span", { children: "Saturday:" }),
                                a.jsx("span", {
                                  className: "font-medium",
                                  children: "9:00 AM - 2:00 PM",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              className: "flex justify-between",
                              children: [
                                a.jsx("span", { children: "Sunday:" }),
                                a.jsx("span", {
                                  className: "font-medium",
                                  children: "Closed",
                                }),
                              ],
                            }),
                          ],
                        }),
                        delay: "delay-400",
                      },
                      {
                        icon: a.jsx(Gs, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Global Reach",
                        description:
                          "Operating internationally with placements in over 25 countries worldwide, including:",
                        content: a.jsxs("ul", {
                          className:
                            "mt-4 grid grid-cols-2 gap-2 text-ips-neutral-800",
                          children: [
                            a.jsx("li", { children: "UAE" }),
                            a.jsx("li", { children: "Qatar" }),
                            a.jsx("li", { children: "Saudi Arabia" }),
                            a.jsx("li", { children: "Malaysia" }),
                            a.jsx("li", { children: "Japan" }),
                            a.jsx("li", { children: "South Korea" }),
                          ],
                        }),
                        delay: "delay-500",
                      },
                      {
                        icon: a.jsx(ga, {
                          size: 32,
                          className: "text-ips-blue",
                        }),
                        title: "Quick Response",
                        description:
                          "We aim to respond to all inquiries within 24 hours during business days",
                        content: a.jsx("p", {
                          className: "text-ips-neutral-800/80",
                          children:
                            "For urgent matters, please call us directly for immediate assistance",
                        }),
                        delay: "delay-500",
                      },
                    ].map((i, l) =>
                      a.jsx(
                        Jk,
                        {
                          icon: i.icon,
                          title: i.title,
                          description: i.description,
                          content: i.content,
                          delayClass: i.delay,
                          isVisible: o,
                        },
                        l
                      )
                    ),
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              ref: n,
              className: `py-20 bg-ips-neutral transition-all duration-700 ease-out ${
                s ? "opacity-100" : "opacity-0 translate-y-10"
              }`,
              children: a.jsx("div", {
                className: "section-container",
                children: a.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    a.jsxs("div", {
                      children: [
                        a.jsx("h2", {
                          className:
                            "text-3xl md:text-4xl font-display font-medium text-ips-neutral-900 mb-6",
                          children: "Send Us a Message",
                        }),
                        a.jsx("p", {
                          className: "text-ips-neutral-800/80 mb-8",
                          children:
                            "Whether you're a job seeker looking for opportunities, an employer seeking qualified professionals, or simply have questions about our services, we'd love to hear from you.",
                        }),
                        a.jsx("div", {
                          className: "glass-card p-8 rounded-lg hover-lift",
                          children: a.jsx(yy, {}),
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      children: a.jsxs("div", {
                        className: "sticky top-24",
                        children: [
                          a.jsx("h2", {
                            className:
                              "text-3xl md:text-4xl font-display font-medium text-ips-neutral-900 mb-6",
                            children: "Frequently Asked Questions",
                          }),
                          a.jsx("div", {
                            className: "space-y-6",
                            children: [
                              {
                                question:
                                  "What services does IPS Manpower offer?",
                                answer:
                                  "We provide a comprehensive range of manpower solutions including recruitment, international placement, documentation support, corporate staffing, skills training, and ethical recruitment services.",
                              },
                              {
                                question:
                                  "Which countries do you place workers in?",
                                answer:
                                  "We have established connections with employers in over 25 countries including the UAE, Qatar, Saudi Arabia, Malaysia, Japan, South Korea, and many others.",
                              },
                              {
                                question:
                                  "How long does the recruitment process take?",
                                answer:
                                  "The timeline varies depending on the position and destination country. Typically, the process can take anywhere from 2 to 6 months from initial application to deployment.",
                              },
                              {
                                question:
                                  "What makes IPS Manpower different from other agencies?",
                                answer:
                                  "Our unique formation through the merger of 5 leading agencies gives us unparalleled combined experience and expertise. We also maintain the highest ethical standards and provide comprehensive support throughout the entire process.",
                              },
                            ].map((i, l) =>
                              a.jsxs(
                                "div",
                                {
                                  className: `glass-card p-6 rounded-lg transition-all duration-500 hover:shadow-elegant-lg transform hover:-translate-y-1 ${
                                    s
                                      ? "animate-fade-in-up delay-" +
                                        (l + 1) +
                                        "00"
                                      : "opacity-0"
                                  }`,
                                  children: [
                                    a.jsx("h3", {
                                      className:
                                        "text-lg font-medium text-ips-neutral-900 mb-2",
                                      children: i.question,
                                    }),
                                    a.jsx("p", {
                                      className: "text-ips-neutral-800/80",
                                      children: i.answer,
                                    }),
                                  ],
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsx(cl, {}),
      ],
    });
  },
  tP = () => {
    const e = Nr();
    return (
      p.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      a.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            a.jsx("p", {
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            a.jsx("a", {
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  nP = new QC(),
  rP = () =>
    a.jsx(qC, {
      client: nP,
      children: a.jsxs(EC, {
        children: [
          a.jsx(wN, {}),
          a.jsx(JN, {}),
          a.jsx(QE, {
            children: a.jsxs($E, {
              children: [
                a.jsx(Or, { path: "/", element: a.jsx(qk, {}) }),
                a.jsx(Or, { path: "/about", element: a.jsx(Xk, {}) }),
                a.jsx(Or, { path: "/services", element: a.jsx(Zk, {}) }),
                a.jsx(Or, { path: "/contact", element: a.jsx(eP, {}) }),
                a.jsx(Or, { path: "*", element: a.jsx(tP, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Mv(document.getElementById("root")).render(a.jsx(rP, {}));
