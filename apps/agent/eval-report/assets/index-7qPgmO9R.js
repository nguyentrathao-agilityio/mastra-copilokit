const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/eval._name-Bgd0fcsl.js',
      'assets/utils-Co0f6_4R.js',
      'assets/eval._name.result._resultIndex-OH78vbsQ.js',
    ])
) => i.map((i) => d[i]);
function Dx(n, a) {
  for (var i = 0; i < a.length; i++) {
    const s = a[i];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const o in s)
        if (o !== 'default' && !(o in n)) {
          const c = Object.getOwnPropertyDescriptor(s, o);
          c && Object.defineProperty(n, o, c.get ? c : { enumerable: !0, get: () => s[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = i(o);
    fetch(o.href, c);
  }
})();
var QO =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Jy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Tf = { exports: {} },
  Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv;
function Nx() {
  if (Vv) return Ns;
  Vv = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function i(s, o, c) {
    var d = null;
    if ((c !== void 0 && (d = '' + c), o.key !== void 0 && (d = '' + o.key), 'key' in o)) {
      c = {};
      for (var h in o) h !== 'key' && (c[h] = o[h]);
    } else c = o;
    return ((o = c.ref), { $$typeof: n, type: s, key: d, ref: o !== void 0 ? o : null, props: c });
  }
  return ((Ns.Fragment = a), (Ns.jsx = i), (Ns.jsxs = i), Ns);
}
var Zv;
function kx() {
  return (Zv || ((Zv = 1), (Tf.exports = Nx())), Tf.exports);
}
var C = kx(),
  Cf = { exports: {} },
  Te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gv;
function zx() {
  if (Gv) return Te;
  Gv = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    c = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    g = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != 'object'
      ? null
      : ((T = (g && T[g]) || T['@@iterator']), typeof T == 'function' ? T : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    x = {};
  function D(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = x), (this.updater = se || w));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (T, V) {
      if (typeof T != 'object' && typeof T != 'function' && T != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, T, V, 'setState');
    }),
    (D.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, 'forceUpdate');
    }));
  function O() {}
  O.prototype = D.prototype;
  function L(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = x), (this.updater = se || w));
  }
  var H = (L.prototype = new O());
  ((H.constructor = L), R(H, D.prototype), (H.isPureReactComponent = !0));
  var Y = Array.isArray,
    q = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function G(T, V, se, I, $, fe) {
    return (
      (se = fe.ref),
      { $$typeof: n, type: T, key: V, ref: se !== void 0 ? se : null, props: fe }
    );
  }
  function M(T, V) {
    return G(T.type, V, void 0, void 0, void 0, T.props);
  }
  function A(T) {
    return typeof T == 'object' && T !== null && T.$$typeof === n;
  }
  function X(T) {
    var V = { '=': '=0', ':': '=2' };
    return (
      '$' +
      T.replace(/[=:]/g, function (se) {
        return V[se];
      })
    );
  }
  var ae = /\/+/g;
  function te(T, V) {
    return typeof T == 'object' && T !== null && T.key != null ? X('' + T.key) : V.toString(36);
  }
  function ne() {}
  function ce(T) {
    switch (T.status) {
      case 'fulfilled':
        return T.value;
      case 'rejected':
        throw T.reason;
      default:
        switch (
          (typeof T.status == 'string'
            ? T.then(ne, ne)
            : ((T.status = 'pending'),
              T.then(
                function (V) {
                  T.status === 'pending' && ((T.status = 'fulfilled'), (T.value = V));
                },
                function (V) {
                  T.status === 'pending' && ((T.status = 'rejected'), (T.reason = V));
                }
              )),
          T.status)
        ) {
          case 'fulfilled':
            return T.value;
          case 'rejected':
            throw T.reason;
        }
    }
    throw T;
  }
  function ie(T, V, se, I, $) {
    var fe = typeof T;
    (fe === 'undefined' || fe === 'boolean') && (T = null);
    var oe = !1;
    if (T === null) oe = !0;
    else
      switch (fe) {
        case 'bigint':
        case 'string':
        case 'number':
          oe = !0;
          break;
        case 'object':
          switch (T.$$typeof) {
            case n:
            case a:
              oe = !0;
              break;
            case v:
              return ((oe = T._init), ie(oe(T._payload), V, se, I, $));
          }
      }
    if (oe)
      return (
        ($ = $(T)),
        (oe = I === '' ? '.' + te(T, 0) : I),
        Y($)
          ? ((se = ''),
            oe != null && (se = oe.replace(ae, '$&/') + '/'),
            ie($, V, se, '', function (Se) {
              return Se;
            }))
          : $ != null &&
            (A($) &&
              ($ = M(
                $,
                se +
                  ($.key == null || (T && T.key === $.key)
                    ? ''
                    : ('' + $.key).replace(ae, '$&/') + '/') +
                  oe
              )),
            V.push($)),
        1
      );
    oe = 0;
    var ve = I === '' ? '.' : I + ':';
    if (Y(T))
      for (var ue = 0; ue < T.length; ue++)
        ((I = T[ue]), (fe = ve + te(I, ue)), (oe += ie(I, V, se, fe, $)));
    else if (((ue = S(T)), typeof ue == 'function'))
      for (T = ue.call(T), ue = 0; !(I = T.next()).done; )
        ((I = I.value), (fe = ve + te(I, ue++)), (oe += ie(I, V, se, fe, $)));
    else if (fe === 'object') {
      if (typeof T.then == 'function') return ie(ce(T), V, se, I, $);
      throw (
        (V = String(T)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (V === '[object Object]' ? 'object with keys {' + Object.keys(T).join(', ') + '}' : V) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return oe;
  }
  function P(T, V, se) {
    if (T == null) return T;
    var I = [],
      $ = 0;
    return (
      ie(T, I, '', '', function (fe) {
        return V.call(se, fe, $++);
      }),
      I
    );
  }
  function J(T) {
    if (T._status === -1) {
      var V = T._result;
      ((V = V()),
        V.then(
          function (se) {
            (T._status === 0 || T._status === -1) && ((T._status = 1), (T._result = se));
          },
          function (se) {
            (T._status === 0 || T._status === -1) && ((T._status = 2), (T._result = se));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = V)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var B =
    typeof reportError == 'function'
      ? reportError
      : function (T) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var V = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == 'object' && T !== null && typeof T.message == 'string'
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(V)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', T);
            return;
          }
          console.error(T);
        };
  function pe() {}
  return (
    (Te.Children = {
      map: P,
      forEach: function (T, V, se) {
        P(
          T,
          function () {
            V.apply(this, arguments);
          },
          se
        );
      },
      count: function (T) {
        var V = 0;
        return (
          P(T, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (T) {
        return (
          P(T, function (V) {
            return V;
          }) || []
        );
      },
      only: function (T) {
        if (!A(T))
          throw Error('React.Children.only expected to receive a single React element child.');
        return T;
      },
    }),
    (Te.Component = D),
    (Te.Fragment = i),
    (Te.Profiler = o),
    (Te.PureComponent = L),
    (Te.StrictMode = s),
    (Te.Suspense = p),
    (Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q),
    (Te.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (Te.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Te.cloneElement = function (T, V, se) {
      if (T == null) throw Error('The argument must be a React element, but you passed ' + T + '.');
      var I = R({}, T.props),
        $ = T.key,
        fe = void 0;
      if (V != null)
        for (oe in (V.ref !== void 0 && (fe = void 0), V.key !== void 0 && ($ = '' + V.key), V))
          !Z.call(V, oe) ||
            oe === 'key' ||
            oe === '__self' ||
            oe === '__source' ||
            (oe === 'ref' && V.ref === void 0) ||
            (I[oe] = V[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) I.children = se;
      else if (1 < oe) {
        for (var ve = Array(oe), ue = 0; ue < oe; ue++) ve[ue] = arguments[ue + 2];
        I.children = ve;
      }
      return G(T.type, $, void 0, void 0, fe, I);
    }),
    (Te.createContext = function (T) {
      return (
        (T = {
          $$typeof: d,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: c, _context: T }),
        T
      );
    }),
    (Te.createElement = function (T, V, se) {
      var I,
        $ = {},
        fe = null;
      if (V != null)
        for (I in (V.key !== void 0 && (fe = '' + V.key), V))
          Z.call(V, I) && I !== 'key' && I !== '__self' && I !== '__source' && ($[I] = V[I]);
      var oe = arguments.length - 2;
      if (oe === 1) $.children = se;
      else if (1 < oe) {
        for (var ve = Array(oe), ue = 0; ue < oe; ue++) ve[ue] = arguments[ue + 2];
        $.children = ve;
      }
      if (T && T.defaultProps)
        for (I in ((oe = T.defaultProps), oe)) $[I] === void 0 && ($[I] = oe[I]);
      return G(T, fe, void 0, void 0, null, $);
    }),
    (Te.createRef = function () {
      return { current: null };
    }),
    (Te.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (Te.isValidElement = A),
    (Te.lazy = function (T) {
      return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: J };
    }),
    (Te.memo = function (T, V) {
      return { $$typeof: m, type: T, compare: V === void 0 ? null : V };
    }),
    (Te.startTransition = function (T) {
      var V = q.T,
        se = {};
      q.T = se;
      try {
        var I = T(),
          $ = q.S;
        ($ !== null && $(se, I),
          typeof I == 'object' && I !== null && typeof I.then == 'function' && I.then(pe, B));
      } catch (fe) {
        B(fe);
      } finally {
        q.T = V;
      }
    }),
    (Te.unstable_useCacheRefresh = function () {
      return q.H.useCacheRefresh();
    }),
    (Te.use = function (T) {
      return q.H.use(T);
    }),
    (Te.useActionState = function (T, V, se) {
      return q.H.useActionState(T, V, se);
    }),
    (Te.useCallback = function (T, V) {
      return q.H.useCallback(T, V);
    }),
    (Te.useContext = function (T) {
      return q.H.useContext(T);
    }),
    (Te.useDebugValue = function () {}),
    (Te.useDeferredValue = function (T, V) {
      return q.H.useDeferredValue(T, V);
    }),
    (Te.useEffect = function (T, V) {
      return q.H.useEffect(T, V);
    }),
    (Te.useId = function () {
      return q.H.useId();
    }),
    (Te.useImperativeHandle = function (T, V, se) {
      return q.H.useImperativeHandle(T, V, se);
    }),
    (Te.useInsertionEffect = function (T, V) {
      return q.H.useInsertionEffect(T, V);
    }),
    (Te.useLayoutEffect = function (T, V) {
      return q.H.useLayoutEffect(T, V);
    }),
    (Te.useMemo = function (T, V) {
      return q.H.useMemo(T, V);
    }),
    (Te.useOptimistic = function (T, V) {
      return q.H.useOptimistic(T, V);
    }),
    (Te.useReducer = function (T, V, se) {
      return q.H.useReducer(T, V, se);
    }),
    (Te.useRef = function (T) {
      return q.H.useRef(T);
    }),
    (Te.useState = function (T) {
      return q.H.useState(T);
    }),
    (Te.useSyncExternalStore = function (T, V, se) {
      return q.H.useSyncExternalStore(T, V, se);
    }),
    (Te.useTransition = function () {
      return q.H.useTransition();
    }),
    (Te.version = '19.0.0'),
    Te
  );
}
var Qv;
function rl() {
  return (Qv || ((Qv = 1), (Cf.exports = zx())), Cf.exports);
}
var _ = rl();
const Po = Jy(_),
  jx = Dx({ __proto__: null, default: Po }, [_]);
var Of = { exports: {} },
  ks = {},
  Af = { exports: {} },
  Mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yv;
function Lx() {
  return (
    Yv ||
      ((Yv = 1),
      (function (n) {
        function a(P, J) {
          var B = P.length;
          P.push(J);
          e: for (; 0 < B; ) {
            var pe = (B - 1) >>> 1,
              T = P[pe];
            if (0 < o(T, J)) ((P[pe] = J), (P[B] = T), (B = pe));
            else break e;
          }
        }
        function i(P) {
          return P.length === 0 ? null : P[0];
        }
        function s(P) {
          if (P.length === 0) return null;
          var J = P[0],
            B = P.pop();
          if (B !== J) {
            P[0] = B;
            e: for (var pe = 0, T = P.length, V = T >>> 1; pe < V; ) {
              var se = 2 * (pe + 1) - 1,
                I = P[se],
                $ = se + 1,
                fe = P[$];
              if (0 > o(I, B))
                $ < T && 0 > o(fe, I)
                  ? ((P[pe] = fe), (P[$] = B), (pe = $))
                  : ((P[pe] = I), (P[se] = B), (pe = se));
              else if ($ < T && 0 > o(fe, B)) ((P[pe] = fe), (P[$] = B), (pe = $));
              else break e;
            }
          }
          return J;
        }
        function o(P, J) {
          var B = P.sortIndex - J.sortIndex;
          return B !== 0 ? B : P.id - J.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          m = [],
          v = 1,
          g = null,
          S = 3,
          w = !1,
          R = !1,
          x = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        function H(P) {
          for (var J = i(m); J !== null; ) {
            if (J.callback === null) s(m);
            else if (J.startTime <= P) (s(m), (J.sortIndex = J.expirationTime), a(p, J));
            else break;
            J = i(m);
          }
        }
        function Y(P) {
          if (((x = !1), H(P), !R))
            if (i(p) !== null) ((R = !0), ce());
            else {
              var J = i(m);
              J !== null && ie(Y, J.startTime - P);
            }
        }
        var q = !1,
          Z = -1,
          G = 5,
          M = -1;
        function A() {
          return !(n.unstable_now() - M < G);
        }
        function X() {
          if (q) {
            var P = n.unstable_now();
            M = P;
            var J = !0;
            try {
              e: {
                ((R = !1), x && ((x = !1), O(Z), (Z = -1)), (w = !0));
                var B = S;
                try {
                  t: {
                    for (H(P), g = i(p); g !== null && !(g.expirationTime > P && A()); ) {
                      var pe = g.callback;
                      if (typeof pe == 'function') {
                        ((g.callback = null), (S = g.priorityLevel));
                        var T = pe(g.expirationTime <= P);
                        if (((P = n.unstable_now()), typeof T == 'function')) {
                          ((g.callback = T), H(P), (J = !0));
                          break t;
                        }
                        (g === i(p) && s(p), H(P));
                      } else s(p);
                      g = i(p);
                    }
                    if (g !== null) J = !0;
                    else {
                      var V = i(m);
                      (V !== null && ie(Y, V.startTime - P), (J = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (S = B), (w = !1));
                }
                J = void 0;
              }
            } finally {
              J ? ae() : (q = !1);
            }
          }
        }
        var ae;
        if (typeof L == 'function')
          ae = function () {
            L(X);
          };
        else if (typeof MessageChannel < 'u') {
          var te = new MessageChannel(),
            ne = te.port2;
          ((te.port1.onmessage = X),
            (ae = function () {
              ne.postMessage(null);
            }));
        } else
          ae = function () {
            D(X, 0);
          };
        function ce() {
          q || ((q = !0), ae());
        }
        function ie(P, J) {
          Z = D(function () {
            P(n.unstable_now());
          }, J);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (P) {
            P.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            R || w || ((R = !0), ce());
          }),
          (n.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (G = 0 < P ? Math.floor(1e3 / P) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return i(p);
          }),
          (n.unstable_next = function (P) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = S;
            }
            var B = S;
            S = J;
            try {
              return P();
            } finally {
              S = B;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (P, J) {
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
            var B = S;
            S = P;
            try {
              return J();
            } finally {
              S = B;
            }
          }),
          (n.unstable_scheduleCallback = function (P, J, B) {
            var pe = n.unstable_now();
            switch (
              (typeof B == 'object' && B !== null
                ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? pe + B : pe))
                : (B = pe),
              P)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = B + T),
              (P = {
                id: v++,
                callback: J,
                priorityLevel: P,
                startTime: B,
                expirationTime: T,
                sortIndex: -1,
              }),
              B > pe
                ? ((P.sortIndex = B),
                  a(m, P),
                  i(p) === null && P === i(m) && (x ? (O(Z), (Z = -1)) : (x = !0), ie(Y, B - pe)))
                : ((P.sortIndex = T), a(p, P), R || w || ((R = !0), ce())),
              P
            );
          }),
          (n.unstable_shouldYield = A),
          (n.unstable_wrapCallback = function (P) {
            var J = S;
            return function () {
              var B = S;
              S = J;
              try {
                return P.apply(this, arguments);
              } finally {
                S = B;
              }
            };
          }));
      })(Mf)),
    Mf
  );
}
var Fv;
function Ux() {
  return (Fv || ((Fv = 1), (Af.exports = Lx())), Af.exports);
}
var Df = { exports: {} },
  xt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xv;
function Bx() {
  if (Xv) return xt;
  Xv = 1;
  var n = rl();
  function a(p) {
    var m = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) m += '&args[]=' + encodeURIComponent(arguments[v]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(a(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function c(p, m, v) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: g == null ? null : '' + g,
      children: p,
      containerInfo: m,
      implementation: v,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (xt.createPortal = function (p, m) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(a(299));
      return c(p, m, null, v);
    }),
    (xt.flushSync = function (p) {
      var m = d.T,
        v = s.p;
      try {
        if (((d.T = null), (s.p = 2), p)) return p();
      } finally {
        ((d.T = m), (s.p = v), s.d.f());
      }
    }),
    (xt.preconnect = function (p, m) {
      typeof p == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        s.d.C(p, m));
    }),
    (xt.prefetchDNS = function (p) {
      typeof p == 'string' && s.d.D(p);
    }),
    (xt.preinit = function (p, m) {
      if (typeof p == 'string' && m && typeof m.as == 'string') {
        var v = m.as,
          g = h(v, m.crossOrigin),
          S = typeof m.integrity == 'string' ? m.integrity : void 0,
          w = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        v === 'style'
          ? s.d.S(p, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: w,
            })
          : v === 'script' &&
            s.d.X(p, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: w,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (xt.preinitModule = function (p, m) {
      if (typeof p == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var v = h(m.as, m.crossOrigin);
            s.d.M(p, {
              crossOrigin: v,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(p);
    }),
    (xt.preload = function (p, m) {
      if (typeof p == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var v = m.as,
          g = h(v, m.crossOrigin);
        s.d.L(p, v, {
          crossOrigin: g,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        });
      }
    }),
    (xt.preloadModule = function (p, m) {
      if (typeof p == 'string')
        if (m) {
          var v = h(m.as, m.crossOrigin);
          s.d.m(p, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else s.d.m(p);
    }),
    (xt.requestFormReset = function (p) {
      s.d.r(p);
    }),
    (xt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (xt.useFormState = function (p, m, v) {
      return d.H.useFormState(p, m, v);
    }),
    (xt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (xt.version = '19.0.0'),
    xt
  );
}
var Kv;
function Iy() {
  if (Kv) return Df.exports;
  Kv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return (n(), (Df.exports = Bx()), Df.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $v;
function Hx() {
  if ($v) return ks;
  $v = 1;
  var n = Ux(),
    a = rl(),
    i = Iy();
  function s(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += '&args[]=' + encodeURIComponent(arguments[r]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var c = Symbol.for('react.element'),
    d = Symbol.for('react.transitional.element'),
    h = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    m = Symbol.for('react.strict_mode'),
    v = Symbol.for('react.profiler'),
    g = Symbol.for('react.provider'),
    S = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    R = Symbol.for('react.forward_ref'),
    x = Symbol.for('react.suspense'),
    D = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    L = Symbol.for('react.lazy'),
    H = Symbol.for('react.offscreen'),
    Y = Symbol.for('react.memo_cache_sentinel'),
    q = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (q && e[q]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var G = Symbol.for('react.client.reference');
  function M(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === G ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case h:
        return 'Portal';
      case v:
        return 'Profiler';
      case m:
        return 'StrictMode';
      case x:
        return 'Suspense';
      case D:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case w:
          return (e.displayName || 'Context') + '.Provider';
        case S:
          return (e._context.displayName || 'Context') + '.Consumer';
        case R:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case O:
          return ((t = e.displayName || null), t !== null ? t : M(e.type) || 'Memo');
        case L:
          ((t = e._payload), (e = e._init));
          try {
            return M(e(t));
          } catch {}
      }
    return null;
  }
  var A = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = Object.assign,
    ae,
    te;
  function ne(e) {
    if (ae === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        ((ae = (t && t[1]) || ''),
          (te =
            -1 <
            r.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < r.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      ae +
      e +
      te
    );
  }
  var ce = !1;
  function ie(e, t) {
    if (!e || ce) return '';
    ce = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var W = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(W.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(W, []);
                } catch (Q) {
                  var U = Q;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (Q) {
                  U = Q;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                U = Q;
              }
              (W = e()) && typeof W.catch == 'function' && W.catch(function () {});
            }
          } catch (Q) {
            if (Q && U && typeof Q.stack == 'string') return [Q.stack, U.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var f = l.DetermineComponentFrameRoot(),
        y = f[0],
        b = f[1];
      if (y && b) {
        var E = y.split(`
`),
          k = b.split(`
`);
        for (u = l = 0; l < E.length && !E[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; u < k.length && !k[u].includes('DetermineComponentFrameRoot'); ) u++;
        if (l === E.length || u === k.length)
          for (l = E.length - 1, u = k.length - 1; 1 <= l && 0 <= u && E[l] !== k[u]; ) u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (E[l] !== k[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || E[l] !== k[u])) {
                  var F =
                    `
` + E[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      F.includes('<anonymous>') &&
                      (F = F.replace('<anonymous>', e.displayName)),
                    F
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((ce = !1), (Error.prepareStackTrace = r));
    }
    return (r = e ? e.displayName || e.name : '') ? ne(r) : '';
  }
  function P(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ne(e.type);
      case 16:
        return ne('Lazy');
      case 13:
        return ne('Suspense');
      case 19:
        return ne('SuspenseList');
      case 0:
      case 15:
        return ((e = ie(e.type, !1)), e);
      case 11:
        return ((e = ie(e.type.render, !1)), e);
      case 1:
        return ((e = ie(e.type, !0)), e);
      default:
        return '';
    }
  }
  function J(e) {
    try {
      var t = '';
      do ((t += P(e)), (e = e.return));
      while (e);
      return t;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function B(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function pe(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (B(e) !== e) throw Error(s(188));
  }
  function V(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = B(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((l = u.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return (T(u), e);
          if (f === l) return (T(u), t);
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== l.return) ((r = u), (l = f));
      else {
        for (var y = !1, b = u.child; b; ) {
          if (b === r) {
            ((y = !0), (r = u), (l = f));
            break;
          }
          if (b === l) {
            ((y = !0), (l = u), (r = f));
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = f.child; b; ) {
            if (b === r) {
              ((y = !0), (r = f), (l = u));
              break;
            }
            if (b === l) {
              ((y = !0), (l = f), (r = u));
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (r.alternate !== l) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function se(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = se(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var I = Array.isArray,
    $ = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    fe = { pending: !1, data: null, method: null, action: null },
    oe = [],
    ve = -1;
  function ue(e) {
    return { current: e };
  }
  function Se(e) {
    0 > ve || ((e.current = oe[ve]), (oe[ve] = null), ve--);
  }
  function Oe(e, t) {
    (ve++, (oe[ve] = e.current), (e.current = t));
  }
  var Ze = ue(null),
    at = ue(null),
    rt = ue(null),
    Et = ue(null);
  function Fe(e, t) {
    switch ((Oe(rt, t), Oe(at, e), Oe(Ze, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? yv(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI)))
          ((e = yv(e)), (t = gv(e, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Se(Ze), Oe(Ze, t));
  }
  function et() {
    (Se(Ze), Se(at), Se(rt));
  }
  function tt(e) {
    e.memoizedState !== null && Oe(Et, e);
    var t = Ze.current,
      r = gv(t, e.type);
    t !== r && (Oe(at, e), Oe(Ze, r));
  }
  function sn(e) {
    (at.current === e && (Se(Ze), Se(at)), Et.current === e && (Se(Et), (Cs._currentValue = fe)));
  }
  var ia = Object.prototype.hasOwnProperty,
    sa = n.unstable_scheduleCallback,
    Le = n.unstable_cancelCallback,
    Ye = n.unstable_shouldYield,
    kn = n.unstable_requestPaint,
    kt = n.unstable_now,
    bu = n.unstable_getCurrentPriorityLevel,
    cl = n.unstable_ImmediatePriority,
    lh = n.unstable_UserBlockingPriority,
    fl = n.unstable_NormalPriority,
    db = n.unstable_LowPriority,
    oh = n.unstable_IdlePriority,
    hb = n.log,
    mb = n.unstable_setDisableYieldValue,
    Li = null,
    zt = null;
  function pb(e) {
    if (zt && typeof zt.onCommitFiberRoot == 'function')
      try {
        zt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function la(e) {
    if ((typeof hb == 'function' && mb(e), zt && typeof zt.setStrictMode == 'function'))
      try {
        zt.setStrictMode(Li, e);
      } catch {}
  }
  var jt = Math.clz32 ? Math.clz32 : gb,
    vb = Math.log,
    yb = Math.LN2;
  function gb(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((vb(e) / yb) | 0)) | 0);
  }
  var dl = 128,
    hl = 4194304;
  function Qa(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ml(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      y = e.warmLanes;
    e = e.finishedLanes !== 0;
    var b = r & 134217727;
    return (
      b !== 0
        ? ((r = b & ~u),
          r !== 0
            ? (l = Qa(r))
            : ((f &= b), f !== 0 ? (l = Qa(f)) : e || ((y = b & ~y), y !== 0 && (l = Qa(y)))))
        : ((b = r & ~u),
          b !== 0
            ? (l = Qa(b))
            : f !== 0
              ? (l = Qa(f))
              : e || ((y = r & ~y), y !== 0 && (l = Qa(y)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & u) === 0 &&
            ((u = l & -l), (y = t & -t), u >= y || (u === 32 && (y & 4194176) !== 0))
          ? t
          : l
    );
  }
  function Ui(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bb(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uh() {
    var e = dl;
    return ((dl <<= 1), (dl & 4194176) === 0 && (dl = 128), e);
  }
  function ch() {
    var e = hl;
    return ((hl <<= 1), (hl & 62914560) === 0 && (hl = 4194304), e);
  }
  function Su(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Sb(e, t, r, l, u, f) {
    var y = e.pendingLanes;
    ((e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0));
    var b = e.entanglements,
      E = e.expirationTimes,
      k = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var F = 31 - jt(r),
        W = 1 << F;
      ((b[F] = 0), (E[F] = -1));
      var U = k[F];
      if (U !== null)
        for (k[F] = null, F = 0; F < U.length; F++) {
          var Q = U[F];
          Q !== null && (Q.lane &= -536870913);
        }
      r &= ~W;
    }
    (l !== 0 && fh(e, l, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t)));
  }
  function fh(e, t, r) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - jt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (r & 4194218)));
  }
  function dh(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - jt(r),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (r &= ~u));
    }
  }
  function hh(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function mh() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Lv(e.type));
  }
  function xb(e, t) {
    var r = $.p;
    try {
      return (($.p = e), t());
    } finally {
      $.p = r;
    }
  }
  var oa = Math.random().toString(36).slice(2),
    bt = '__reactFiber$' + oa,
    Ot = '__reactProps$' + oa,
    Rr = '__reactContainer$' + oa,
    xu = '__reactEvents$' + oa,
    _b = '__reactListeners$' + oa,
    wb = '__reactHandles$' + oa,
    ph = '__reactResources$' + oa,
    Hi = '__reactMarker$' + oa;
  function _u(e) {
    (delete e[bt], delete e[Ot], delete e[xu], delete e[_b], delete e[wb]);
  }
  function Ya(e) {
    var t = e[bt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Rr] || r[bt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = xv(e); e !== null; ) {
            if ((r = e[bt])) return r;
            e = xv(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Tr(e) {
    if ((e = e[bt] || e[Rr])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Pi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Cr(e) {
    var t = e[ph];
    return (t || (t = e[ph] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function dt(e) {
    e[Hi] = !0;
  }
  var vh = new Set(),
    yh = {};
  function Fa(e, t) {
    (Or(e, t), Or(e + 'Capture', t));
  }
  function Or(e, t) {
    for (yh[e] = t, e = 0; e < t.length; e++) vh.add(t[e]);
  }
  var zn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Eb = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    gh = {},
    bh = {};
  function Rb(e) {
    return ia.call(bh, e)
      ? !0
      : ia.call(gh, e)
        ? !1
        : Eb.test(e)
          ? (bh[e] = !0)
          : ((gh[e] = !0), !1);
  }
  function pl(e, t, r) {
    if (Rb(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + r);
      }
  }
  function vl(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + r);
    }
  }
  function jn(e, t, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, '' + l);
    }
  }
  function Gt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Sh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Tb(e) {
    var t = Sh(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var u = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            ((l = '' + y), f.call(this, y));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function yl(e) {
    e._valueTracker || (e._valueTracker = Tb(e));
  }
  function xh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = '';
    return (
      e && (l = Sh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function gl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cb = /[\n"\\]/g;
  function Qt(e) {
    return e.replace(Cb, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function wu(e, t, r, l, u, f, y, b) {
    ((e.name = ''),
      y != null && typeof y != 'function' && typeof y != 'symbol' && typeof y != 'boolean'
        ? (e.type = y)
        : e.removeAttribute('type'),
      t != null
        ? y === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Gt(t))
          : e.value !== '' + Gt(t) && (e.value = '' + Gt(t))
        : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Eu(e, y, Gt(t))
        : r != null
          ? Eu(e, y, Gt(r))
          : l != null && e.removeAttribute('value'),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null && (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      b != null && typeof b != 'function' && typeof b != 'symbol' && typeof b != 'boolean'
        ? (e.name = '' + Gt(b))
        : e.removeAttribute('name'));
  }
  function _h(e, t, r, l, u, f, y, b) {
    if (
      (f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.type = f),
      t != null || r != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) return;
      ((r = r != null ? '' + Gt(r) : ''),
        (t = t != null ? '' + Gt(t) : r),
        b || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? u),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = b ? e.checked : !!l),
      (e.defaultChecked = !!l),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (e.name = y));
  }
  function Eu(e, t, r) {
    (t === 'number' && gl(e.ownerDocument) === e) ||
      e.defaultValue === '' + r ||
      (e.defaultValue = '' + r);
  }
  function Ar(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t['$' + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        ((u = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && l && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + Gt(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wh(e, t, r) {
    if (t != null && ((t = '' + Gt(t)), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? '' + Gt(r) : '';
  }
  function Eh(e, t, r, l) {
    if (t == null) {
      if (l != null) {
        if (r != null) throw Error(s(92));
        if (I(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        r = l;
      }
      (r == null && (r = ''), (t = r));
    }
    ((r = Gt(t)),
      (e.defaultValue = r),
      (l = e.textContent),
      l === r && l !== '' && l !== null && (e.value = l));
  }
  function Mr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ob = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Rh(e, t, r) {
    var l = t.indexOf('--') === 0;
    r == null || typeof r == 'boolean' || r === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, r)
        : typeof r != 'number' || r === 0 || Ob.has(t)
          ? t === 'float'
            ? (e.cssFloat = r)
            : (e[t] = ('' + r).trim())
          : (e[t] = r + 'px');
  }
  function Th(e, t, r) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var l in r)
        !r.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var u in t) ((l = t[u]), t.hasOwnProperty(u) && r[u] !== l && Rh(e, u, l));
    } else for (var f in t) t.hasOwnProperty(f) && Rh(e, f, t[f]);
  }
  function Ru(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Ab = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Mb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bl(e) {
    return Mb.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Tu = null;
  function Cu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Dr = null,
    Nr = null;
  function Ch(e) {
    var t = Tr(e);
    if (t && (e = t.stateNode)) {
      var r = e[Ot] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (wu(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (t = r.name),
            r.type === 'radio' && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name="' + Qt('' + t) + '"][type="radio"]'), t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var u = l[Ot] || null;
                if (!u) throw Error(s(90));
                wu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < r.length; t++) ((l = r[t]), l.form === e.form && xh(l));
          }
          break e;
        case 'textarea':
          wh(e, r.value, r.defaultValue);
          break e;
        case 'select':
          ((t = r.value), t != null && Ar(e, !!r.multiple, t, !1));
      }
    }
  }
  var Ou = !1;
  function Oh(e, t, r) {
    if (Ou) return e(t, r);
    Ou = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Ou = !1),
        (Dr !== null || Nr !== null) &&
          (no(), Dr && ((t = Dr), (e = Nr), (Nr = Dr = null), Ch(t), e)))
      )
        for (t = 0; t < e.length; t++) Ch(e[t]);
    }
  }
  function qi(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[Ot] || null;
    if (l === null) return null;
    r = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(s(231, t, typeof r));
    return r;
  }
  var Au = !1;
  if (zn)
    try {
      var Vi = {};
      (Object.defineProperty(Vi, 'passive', {
        get: function () {
          Au = !0;
        },
      }),
        window.addEventListener('test', Vi, Vi),
        window.removeEventListener('test', Vi, Vi));
    } catch {
      Au = !1;
    }
  var ua = null,
    Mu = null,
    Sl = null;
  function Ah() {
    if (Sl) return Sl;
    var e,
      t = Mu,
      r = t.length,
      l,
      u = 'value' in ua ? ua.value : ua.textContent,
      f = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var y = r - e;
    for (l = 1; l <= y && t[r - l] === u[f - l]; l++);
    return (Sl = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function xl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _l() {
    return !0;
  }
  function Mh() {
    return !1;
  }
  function At(e) {
    function t(r, l, u, f, y) {
      ((this._reactName = r),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null));
      for (var b in e) e.hasOwnProperty(b) && ((r = e[b]), (this[b] = r ? r(f) : f[b]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? _l
          : Mh),
        (this.isPropagationStopped = Mh),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = _l));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = _l));
        },
        persist: function () {},
        isPersistent: _l,
      }),
      t
    );
  }
  var Xa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wl = At(Xa),
    Zi = X({}, Xa, { view: 0, detail: 0 }),
    Db = At(Zi),
    Du,
    Nu,
    Gi,
    El = X({}, Zi, {
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
      getModifierState: zu,
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
        return 'movementX' in e
          ? e.movementX
          : (e !== Gi &&
              (Gi && e.type === 'mousemove'
                ? ((Du = e.screenX - Gi.screenX), (Nu = e.screenY - Gi.screenY))
                : (Nu = Du = 0),
              (Gi = e)),
            Du);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Nu;
      },
    }),
    Dh = At(El),
    Nb = X({}, El, { dataTransfer: 0 }),
    kb = At(Nb),
    zb = X({}, Zi, { relatedTarget: 0 }),
    ku = At(zb),
    jb = X({}, Xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lb = At(jb),
    Ub = X({}, Xa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bb = At(Ub),
    Hb = X({}, Xa, { data: 0 }),
    Nh = At(Hb),
    Pb = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    qb = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Vb = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Zb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vb[e]) ? !!t[e] : !1;
  }
  function zu() {
    return Zb;
  }
  var Gb = X({}, Zi, {
      key: function (e) {
        if (e.key) {
          var t = Pb[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = xl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? qb[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zu,
      charCode: function (e) {
        return e.type === 'keypress' ? xl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? xl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Qb = At(Gb),
    Yb = X({}, El, {
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
    kh = At(Yb),
    Fb = X({}, Zi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zu,
    }),
    Xb = At(Fb),
    Kb = X({}, Xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $b = At(Kb),
    Wb = X({}, El, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Jb = At(Wb),
    Ib = X({}, Xa, { newState: 0, oldState: 0 }),
    eS = At(Ib),
    tS = [9, 13, 27, 32],
    ju = zn && 'CompositionEvent' in window,
    Qi = null;
  zn && 'documentMode' in document && (Qi = document.documentMode);
  var nS = zn && 'TextEvent' in window && !Qi,
    zh = zn && (!ju || (Qi && 8 < Qi && 11 >= Qi)),
    jh = ' ',
    Lh = !1;
  function Uh(e, t) {
    switch (e) {
      case 'keyup':
        return tS.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Bh(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var kr = !1;
  function aS(e, t) {
    switch (e) {
      case 'compositionend':
        return Bh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Lh = !0), jh);
      case 'textInput':
        return ((e = t.data), e === jh && Lh ? null : e);
      default:
        return null;
    }
  }
  function rS(e, t) {
    if (kr)
      return e === 'compositionend' || (!ju && Uh(e, t))
        ? ((e = Ah()), (Sl = Mu = ua = null), (kr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return zh && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var iS = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function Hh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!iS[e.type] : t === 'textarea';
  }
  function Ph(e, t, r, l) {
    (Dr ? (Nr ? Nr.push(l) : (Nr = [l])) : (Dr = l),
      (t = lo(t, 'onChange')),
      0 < t.length &&
        ((r = new wl('onChange', 'change', null, r, l)), e.push({ event: r, listeners: t })));
  }
  var Yi = null,
    Fi = null;
  function sS(e) {
    dv(e, 0);
  }
  function Rl(e) {
    var t = Pi(e);
    if (xh(t)) return e;
  }
  function qh(e, t) {
    if (e === 'change') return t;
  }
  var Vh = !1;
  if (zn) {
    var Lu;
    if (zn) {
      var Uu = 'oninput' in document;
      if (!Uu) {
        var Zh = document.createElement('div');
        (Zh.setAttribute('oninput', 'return;'), (Uu = typeof Zh.oninput == 'function'));
      }
      Lu = Uu;
    } else Lu = !1;
    Vh = Lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Gh() {
    Yi && (Yi.detachEvent('onpropertychange', Qh), (Fi = Yi = null));
  }
  function Qh(e) {
    if (e.propertyName === 'value' && Rl(Fi)) {
      var t = [];
      (Ph(t, Fi, e, Cu(e)), Oh(sS, t));
    }
  }
  function lS(e, t, r) {
    e === 'focusin'
      ? (Gh(), (Yi = t), (Fi = r), Yi.attachEvent('onpropertychange', Qh))
      : e === 'focusout' && Gh();
  }
  function oS(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Rl(Fi);
  }
  function uS(e, t) {
    if (e === 'click') return Rl(t);
  }
  function cS(e, t) {
    if (e === 'input' || e === 'change') return Rl(t);
  }
  function fS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Lt = typeof Object.is == 'function' ? Object.is : fS;
  function Xi(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!ia.call(t, u) || !Lt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Yh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fh(e, t) {
    var r = Yh(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t)) return { node: r, offset: t - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Yh(r);
    }
  }
  function Xh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Xh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Kh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = gl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = gl(e.document);
    }
    return t;
  }
  function Bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function dS(e, t) {
    var r = Kh(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (r !== t && t && t.ownerDocument && Xh(t.ownerDocument.documentElement, t)) {
      if (l !== null && Bu(t)) {
        if (((e = l.start), (r = l.end), r === void 0 && (r = e), 'selectionStart' in t))
          ((t.selectionStart = e), (t.selectionEnd = Math.min(r, t.value.length)));
        else if (
          ((r = ((e = t.ownerDocument || document) && e.defaultView) || window), r.getSelection)
        ) {
          r = r.getSelection();
          var u = t.textContent.length,
            f = Math.min(l.start, u);
          ((l = l.end === void 0 ? f : Math.min(l.end, u)),
            !r.extend && f > l && ((u = l), (l = f), (f = u)),
            (u = Fh(t, f)));
          var y = Fh(t, l);
          u &&
            y &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== u.node ||
              r.anchorOffset !== u.offset ||
              r.focusNode !== y.node ||
              r.focusOffset !== y.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            r.removeAllRanges(),
            f > l
              ? (r.addRange(e), r.extend(y.node, y.offset))
              : (e.setEnd(y.node, y.offset), r.addRange(e)));
        }
      }
      for (e = [], r = t; (r = r.parentNode); )
        r.nodeType === 1 && e.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
        ((r = e[t]), (r.element.scrollLeft = r.left), (r.element.scrollTop = r.top));
    }
  }
  var hS = zn && 'documentMode' in document && 11 >= document.documentMode,
    zr = null,
    Hu = null,
    Ki = null,
    Pu = !1;
  function $h(e, t, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pu ||
      zr == null ||
      zr !== gl(l) ||
      ((l = zr),
      'selectionStart' in l && Bu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ki && Xi(Ki, l)) ||
        ((Ki = l),
        (l = lo(Hu, 'onSelect')),
        0 < l.length &&
          ((t = new wl('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = zr))));
  }
  function Ka(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var jr = {
      animationend: Ka('Animation', 'AnimationEnd'),
      animationiteration: Ka('Animation', 'AnimationIteration'),
      animationstart: Ka('Animation', 'AnimationStart'),
      transitionrun: Ka('Transition', 'TransitionRun'),
      transitionstart: Ka('Transition', 'TransitionStart'),
      transitioncancel: Ka('Transition', 'TransitionCancel'),
      transitionend: Ka('Transition', 'TransitionEnd'),
    },
    qu = {},
    Wh = {};
  zn &&
    ((Wh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete jr.animationend.animation,
      delete jr.animationiteration.animation,
      delete jr.animationstart.animation),
    'TransitionEvent' in window || delete jr.transitionend.transition);
  function $a(e) {
    if (qu[e]) return qu[e];
    if (!jr[e]) return e;
    var t = jr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Wh) return (qu[e] = t[r]);
    return e;
  }
  var Jh = $a('animationend'),
    Ih = $a('animationiteration'),
    em = $a('animationstart'),
    mS = $a('transitionrun'),
    pS = $a('transitionstart'),
    vS = $a('transitioncancel'),
    tm = $a('transitionend'),
    nm = new Map(),
    am =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function ln(e, t) {
    (nm.set(e, t), Fa(t, [e]));
  }
  var Yt = [],
    Lr = 0,
    Vu = 0;
  function Tl() {
    for (var e = Lr, t = (Vu = Lr = 0); t < e; ) {
      var r = Yt[t];
      Yt[t++] = null;
      var l = Yt[t];
      Yt[t++] = null;
      var u = Yt[t];
      Yt[t++] = null;
      var f = Yt[t];
      if (((Yt[t++] = null), l !== null && u !== null)) {
        var y = l.pending;
        (y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)), (l.pending = u));
      }
      f !== 0 && rm(r, u, f);
    }
  }
  function Cl(e, t, r, l) {
    ((Yt[Lr++] = e),
      (Yt[Lr++] = t),
      (Yt[Lr++] = r),
      (Yt[Lr++] = l),
      (Vu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Zu(e, t, r, l) {
    return (Cl(e, t, r, l), Ol(e));
  }
  function ca(e, t) {
    return (Cl(e, null, null, t), Ol(e));
  }
  function rm(e, t, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, f = e.return; f !== null; )
      ((f.childLanes |= r),
        (l = f.alternate),
        l !== null && (l.childLanes |= r),
        f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return));
    u &&
      t !== null &&
      e.tag === 3 &&
      ((f = e.stateNode),
      (u = 31 - jt(r)),
      (f = f.hiddenUpdates),
      (e = f[u]),
      e === null ? (f[u] = [t]) : e.push(t),
      (t.lane = r | 536870912));
  }
  function Ol(e) {
    if (50 < Ss) throw ((Ss = 0), (Kc = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ur = {},
    im = new WeakMap();
  function Ft(e, t) {
    if (typeof e == 'object' && e !== null) {
      var r = im.get(e);
      return r !== void 0 ? r : ((t = { value: e, source: t, stack: J(t) }), im.set(e, t), t);
    }
    return { value: e, source: t, stack: J(t) };
  }
  var Br = [],
    Hr = 0,
    Al = null,
    Ml = 0,
    Xt = [],
    Kt = 0,
    Wa = null,
    Ln = 1,
    Un = '';
  function Ja(e, t) {
    ((Br[Hr++] = Ml), (Br[Hr++] = Al), (Al = e), (Ml = t));
  }
  function sm(e, t, r) {
    ((Xt[Kt++] = Ln), (Xt[Kt++] = Un), (Xt[Kt++] = Wa), (Wa = e));
    var l = Ln;
    e = Un;
    var u = 32 - jt(l) - 1;
    ((l &= ~(1 << u)), (r += 1));
    var f = 32 - jt(t) + u;
    if (30 < f) {
      var y = u - (u % 5);
      ((f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (u -= y),
        (Ln = (1 << (32 - jt(t) + u)) | (r << u) | l),
        (Un = f + e));
    } else ((Ln = (1 << f) | (r << u) | l), (Un = e));
  }
  function Gu(e) {
    e.return !== null && (Ja(e, 1), sm(e, 1, 0));
  }
  function Qu(e) {
    for (; e === Al; ) ((Al = Br[--Hr]), (Br[Hr] = null), (Ml = Br[--Hr]), (Br[Hr] = null));
    for (; e === Wa; )
      ((Wa = Xt[--Kt]),
        (Xt[Kt] = null),
        (Un = Xt[--Kt]),
        (Xt[Kt] = null),
        (Ln = Xt[--Kt]),
        (Xt[Kt] = null));
  }
  var Rt = null,
    vt = null,
    Ue = !1,
    on = null,
    Sn = !1,
    Yu = Error(s(519));
  function Ia(e) {
    var t = Error(s(418, ''));
    throw (Ji(Ft(t, e)), Yu);
  }
  function lm(e) {
    var t = e.stateNode,
      r = e.type,
      l = e.memoizedProps;
    switch (((t[bt] = e), (t[Ot] = l), r)) {
      case 'dialog':
        (ke('cancel', t), ke('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ke('load', t);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < _s.length; r++) ke(_s[r], t);
        break;
      case 'source':
        ke('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (ke('error', t), ke('load', t));
        break;
      case 'details':
        ke('toggle', t);
        break;
      case 'input':
        (ke('invalid', t),
          _h(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          yl(t));
        break;
      case 'select':
        ke('invalid', t);
        break;
      case 'textarea':
        (ke('invalid', t), Eh(t, l.value, l.defaultValue, l.children), yl(t));
    }
    ((r = l.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      t.textContent === '' + r ||
      l.suppressHydrationWarning === !0 ||
      vv(t.textContent, r)
        ? (l.popover != null && (ke('beforetoggle', t), ke('toggle', t)),
          l.onScroll != null && ke('scroll', t),
          l.onScrollEnd != null && ke('scrollend', t),
          l.onClick != null && (t.onclick = oo),
          (t = !0))
        : (t = !1),
      t || Ia(e));
  }
  function om(e) {
    for (Rt = e.return; Rt; )
      switch (Rt.tag) {
        case 3:
        case 27:
          Sn = !0;
          return;
        case 5:
        case 13:
          Sn = !1;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function $i(e) {
    if (e !== Rt) return !1;
    if (!Ue) return (om(e), (Ue = !0), !1);
    var t = !1,
      r;
    if (
      ((r = e.tag !== 3 && e.tag !== 27) &&
        ((r = e.tag === 5) &&
          ((r = e.type), (r = !(r !== 'form' && r !== 'button') || hf(e.type, e.memoizedProps))),
        (r = !r)),
      r && (t = !0),
      t && vt && Ia(e),
      om(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === '/$')) {
              if (t === 0) {
                vt = cn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          e = e.nextSibling;
        }
        vt = null;
      }
    } else vt = Rt ? cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    ((vt = Rt = null), (Ue = !1));
  }
  function Ji(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  var Ii = Error(s(460)),
    um = Error(s(474)),
    Fu = { then: function () {} };
  function cm(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Dl() {}
  function fm(e, t, r) {
    switch (
      ((r = e[r]), r === void 0 ? e.push(t) : r !== t && (t.then(Dl, Dl), (t = r)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === Ii ? Error(s(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(Dl, Dl);
        else {
          if (((e = Ge), e !== null && 100 < e.shellSuspendCounter)) throw Error(s(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var u = t;
                  ((u.status = 'fulfilled'), (u.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var u = t;
                  ((u.status = 'rejected'), (u.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), e === Ii ? Error(s(483)) : e);
        }
        throw ((es = t), Ii);
    }
  }
  var es = null;
  function dm() {
    if (es === null) throw Error(s(459));
    var e = es;
    return ((es = null), e);
  }
  var Pr = null,
    ts = 0;
  function Nl(e) {
    var t = ts;
    return ((ts += 1), Pr === null && (Pr = []), fm(Pr, e, t));
  }
  function ns(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function kl(e, t) {
    throw t.$$typeof === c
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function hm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function mm(e) {
    function t(z, N) {
      if (e) {
        var j = z.deletions;
        j === null ? ((z.deletions = [N]), (z.flags |= 16)) : j.push(N);
      }
    }
    function r(z, N) {
      if (!e) return null;
      for (; N !== null; ) (t(z, N), (N = N.sibling));
      return null;
    }
    function l(z) {
      for (var N = new Map(); z !== null; )
        (z.key !== null ? N.set(z.key, z) : N.set(z.index, z), (z = z.sibling));
      return N;
    }
    function u(z, N) {
      return ((z = _a(z, N)), (z.index = 0), (z.sibling = null), z);
    }
    function f(z, N, j) {
      return (
        (z.index = j),
        e
          ? ((j = z.alternate),
            j !== null
              ? ((j = j.index), j < N ? ((z.flags |= 33554434), N) : j)
              : ((z.flags |= 33554434), N))
          : ((z.flags |= 1048576), N)
      );
    }
    function y(z) {
      return (e && z.alternate === null && (z.flags |= 33554434), z);
    }
    function b(z, N, j, K) {
      return N === null || N.tag !== 6
        ? ((N = qc(j, z.mode, K)), (N.return = z), N)
        : ((N = u(N, j)), (N.return = z), N);
    }
    function E(z, N, j, K) {
      var de = j.type;
      return de === p
        ? F(z, N, j.props.children, K, j.key)
        : N !== null &&
            (N.elementType === de ||
              (typeof de == 'object' && de !== null && de.$$typeof === L && hm(de) === N.type))
          ? ((N = u(N, j.props)), ns(N, j), (N.return = z), N)
          : ((N = Wl(j.type, j.key, j.props, null, z.mode, K)), ns(N, j), (N.return = z), N);
    }
    function k(z, N, j, K) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== j.containerInfo ||
        N.stateNode.implementation !== j.implementation
        ? ((N = Vc(j, z.mode, K)), (N.return = z), N)
        : ((N = u(N, j.children || [])), (N.return = z), N);
    }
    function F(z, N, j, K, de) {
      return N === null || N.tag !== 7
        ? ((N = ur(j, z.mode, K, de)), (N.return = z), N)
        : ((N = u(N, j)), (N.return = z), N);
    }
    function W(z, N, j) {
      if ((typeof N == 'string' && N !== '') || typeof N == 'number' || typeof N == 'bigint')
        return ((N = qc('' + N, z.mode, j)), (N.return = z), N);
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case d:
            return ((j = Wl(N.type, N.key, N.props, null, z.mode, j)), ns(j, N), (j.return = z), j);
          case h:
            return ((N = Vc(N, z.mode, j)), (N.return = z), N);
          case L:
            var K = N._init;
            return ((N = K(N._payload)), W(z, N, j));
        }
        if (I(N) || Z(N)) return ((N = ur(N, z.mode, j, null)), (N.return = z), N);
        if (typeof N.then == 'function') return W(z, Nl(N), j);
        if (N.$$typeof === w) return W(z, Xl(z, N), j);
        kl(z, N);
      }
      return null;
    }
    function U(z, N, j, K) {
      var de = N !== null ? N.key : null;
      if ((typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint')
        return de !== null ? null : b(z, N, '' + j, K);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case d:
            return j.key === de ? E(z, N, j, K) : null;
          case h:
            return j.key === de ? k(z, N, j, K) : null;
          case L:
            return ((de = j._init), (j = de(j._payload)), U(z, N, j, K));
        }
        if (I(j) || Z(j)) return de !== null ? null : F(z, N, j, K, null);
        if (typeof j.then == 'function') return U(z, N, Nl(j), K);
        if (j.$$typeof === w) return U(z, N, Xl(z, j), K);
        kl(z, j);
      }
      return null;
    }
    function Q(z, N, j, K, de) {
      if ((typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint')
        return ((z = z.get(j) || null), b(N, z, '' + K, de));
      if (typeof K == 'object' && K !== null) {
        switch (K.$$typeof) {
          case d:
            return ((z = z.get(K.key === null ? j : K.key) || null), E(N, z, K, de));
          case h:
            return ((z = z.get(K.key === null ? j : K.key) || null), k(N, z, K, de));
          case L:
            var De = K._init;
            return ((K = De(K._payload)), Q(z, N, j, K, de));
        }
        if (I(K) || Z(K)) return ((z = z.get(j) || null), F(N, z, K, de, null));
        if (typeof K.then == 'function') return Q(z, N, j, Nl(K), de);
        if (K.$$typeof === w) return Q(z, N, j, Xl(N, K), de);
        kl(N, K);
      }
      return null;
    }
    function ge(z, N, j, K) {
      for (
        var de = null, De = null, be = N, xe = (N = 0), pt = null;
        be !== null && xe < j.length;
        xe++
      ) {
        be.index > xe ? ((pt = be), (be = null)) : (pt = be.sibling);
        var Be = U(z, be, j[xe], K);
        if (Be === null) {
          be === null && (be = pt);
          break;
        }
        (e && be && Be.alternate === null && t(z, be),
          (N = f(Be, N, xe)),
          De === null ? (de = Be) : (De.sibling = Be),
          (De = Be),
          (be = pt));
      }
      if (xe === j.length) return (r(z, be), Ue && Ja(z, xe), de);
      if (be === null) {
        for (; xe < j.length; xe++)
          ((be = W(z, j[xe], K)),
            be !== null &&
              ((N = f(be, N, xe)), De === null ? (de = be) : (De.sibling = be), (De = be)));
        return (Ue && Ja(z, xe), de);
      }
      for (be = l(be); xe < j.length; xe++)
        ((pt = Q(be, z, xe, j[xe], K)),
          pt !== null &&
            (e && pt.alternate !== null && be.delete(pt.key === null ? xe : pt.key),
            (N = f(pt, N, xe)),
            De === null ? (de = pt) : (De.sibling = pt),
            (De = pt)));
      return (
        e &&
          be.forEach(function (Aa) {
            return t(z, Aa);
          }),
        Ue && Ja(z, xe),
        de
      );
    }
    function Ee(z, N, j, K) {
      if (j == null) throw Error(s(151));
      for (
        var de = null, De = null, be = N, xe = (N = 0), pt = null, Be = j.next();
        be !== null && !Be.done;
        xe++, Be = j.next()
      ) {
        be.index > xe ? ((pt = be), (be = null)) : (pt = be.sibling);
        var Aa = U(z, be, Be.value, K);
        if (Aa === null) {
          be === null && (be = pt);
          break;
        }
        (e && be && Aa.alternate === null && t(z, be),
          (N = f(Aa, N, xe)),
          De === null ? (de = Aa) : (De.sibling = Aa),
          (De = Aa),
          (be = pt));
      }
      if (Be.done) return (r(z, be), Ue && Ja(z, xe), de);
      if (be === null) {
        for (; !Be.done; xe++, Be = j.next())
          ((Be = W(z, Be.value, K)),
            Be !== null &&
              ((N = f(Be, N, xe)), De === null ? (de = Be) : (De.sibling = Be), (De = Be)));
        return (Ue && Ja(z, xe), de);
      }
      for (be = l(be); !Be.done; xe++, Be = j.next())
        ((Be = Q(be, z, xe, Be.value, K)),
          Be !== null &&
            (e && Be.alternate !== null && be.delete(Be.key === null ? xe : Be.key),
            (N = f(Be, N, xe)),
            De === null ? (de = Be) : (De.sibling = Be),
            (De = Be)));
      return (
        e &&
          be.forEach(function (Mx) {
            return t(z, Mx);
          }),
        Ue && Ja(z, xe),
        de
      );
    }
    function Ie(z, N, j, K) {
      if (
        (typeof j == 'object' &&
          j !== null &&
          j.type === p &&
          j.key === null &&
          (j = j.props.children),
        typeof j == 'object' && j !== null)
      ) {
        switch (j.$$typeof) {
          case d:
            e: {
              for (var de = j.key; N !== null; ) {
                if (N.key === de) {
                  if (((de = j.type), de === p)) {
                    if (N.tag === 7) {
                      (r(z, N.sibling), (K = u(N, j.props.children)), (K.return = z), (z = K));
                      break e;
                    }
                  } else if (
                    N.elementType === de ||
                    (typeof de == 'object' && de !== null && de.$$typeof === L && hm(de) === N.type)
                  ) {
                    (r(z, N.sibling), (K = u(N, j.props)), ns(K, j), (K.return = z), (z = K));
                    break e;
                  }
                  r(z, N);
                  break;
                } else t(z, N);
                N = N.sibling;
              }
              j.type === p
                ? ((K = ur(j.props.children, z.mode, K, j.key)), (K.return = z), (z = K))
                : ((K = Wl(j.type, j.key, j.props, null, z.mode, K)),
                  ns(K, j),
                  (K.return = z),
                  (z = K));
            }
            return y(z);
          case h:
            e: {
              for (de = j.key; N !== null; ) {
                if (N.key === de)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === j.containerInfo &&
                    N.stateNode.implementation === j.implementation
                  ) {
                    (r(z, N.sibling), (K = u(N, j.children || [])), (K.return = z), (z = K));
                    break e;
                  } else {
                    r(z, N);
                    break;
                  }
                else t(z, N);
                N = N.sibling;
              }
              ((K = Vc(j, z.mode, K)), (K.return = z), (z = K));
            }
            return y(z);
          case L:
            return ((de = j._init), (j = de(j._payload)), Ie(z, N, j, K));
        }
        if (I(j)) return ge(z, N, j, K);
        if (Z(j)) {
          if (((de = Z(j)), typeof de != 'function')) throw Error(s(150));
          return ((j = de.call(j)), Ee(z, N, j, K));
        }
        if (typeof j.then == 'function') return Ie(z, N, Nl(j), K);
        if (j.$$typeof === w) return Ie(z, N, Xl(z, j), K);
        kl(z, j);
      }
      return (typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint'
        ? ((j = '' + j),
          N !== null && N.tag === 6
            ? (r(z, N.sibling), (K = u(N, j)), (K.return = z), (z = K))
            : (r(z, N), (K = qc(j, z.mode, K)), (K.return = z), (z = K)),
          y(z))
        : r(z, N);
    }
    return function (z, N, j, K) {
      try {
        ts = 0;
        var de = Ie(z, N, j, K);
        return ((Pr = null), de);
      } catch (be) {
        if (be === Ii) throw be;
        var De = It(29, be, null, z.mode);
        return ((De.lanes = K), (De.return = z), De);
      } finally {
      }
    };
  }
  var er = mm(!0),
    pm = mm(!1),
    qr = ue(null),
    zl = ue(0);
  function vm(e, t) {
    ((e = Xn), Oe(zl, e), Oe(qr, t), (Xn = e | t.baseLanes));
  }
  function Xu() {
    (Oe(zl, Xn), Oe(qr, qr.current));
  }
  function Ku() {
    ((Xn = zl.current), Se(qr), Se(zl));
  }
  var $t = ue(null),
    xn = null;
  function fa(e) {
    var t = e.alternate;
    (Oe(ot, ot.current & 1),
      Oe($t, e),
      xn === null && (t === null || qr.current !== null || t.memoizedState !== null) && (xn = e));
  }
  function ym(e) {
    if (e.tag === 22) {
      if ((Oe(ot, ot.current), Oe($t, e), xn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (xn = e);
      }
    } else da();
  }
  function da() {
    (Oe(ot, ot.current), Oe($t, $t.current));
  }
  function Bn(e) {
    (Se($t), xn === e && (xn = null), Se(ot));
  }
  var ot = ue(0);
  function jl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var yS =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (r) {
                  return r();
                }));
            };
          },
    gS = n.unstable_scheduleCallback,
    bS = n.unstable_NormalPriority,
    ut = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function $u() {
    return { controller: new yS(), data: new Map(), refCount: 0 };
  }
  function as(e) {
    (e.refCount--,
      e.refCount === 0 &&
        gS(bS, function () {
          e.controller.abort();
        }));
  }
  var rs = null,
    Wu = 0,
    Vr = 0,
    Zr = null;
  function SS(e, t) {
    if (rs === null) {
      var r = (rs = []);
      ((Wu = 0),
        (Vr = af()),
        (Zr = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            r.push(l);
          },
        }));
    }
    return (Wu++, t.then(gm, gm), t);
  }
  function gm() {
    if (--Wu === 0 && rs !== null) {
      Zr !== null && (Zr.status = 'fulfilled');
      var e = rs;
      ((rs = null), (Vr = 0), (Zr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xS(e, t) {
    var r = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          r.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var u = 0; u < r.length; u++) (0, r[u])(t);
        },
        function (u) {
          for (l.status = 'rejected', l.reason = u, u = 0; u < r.length; u++) (0, r[u])(void 0);
        }
      ),
      l
    );
  }
  var bm = A.S;
  A.S = function (e, t) {
    (typeof t == 'object' && t !== null && typeof t.then == 'function' && SS(e, t),
      bm !== null && bm(e, t));
  };
  var tr = ue(null);
  function Ju() {
    var e = tr.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Ll(e, t) {
    t === null ? Oe(tr, tr.current) : Oe(tr, t.pool);
  }
  function Sm() {
    var e = Ju();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var ha = 0,
    Ae = null,
    He = null,
    it = null,
    Ul = !1,
    Gr = !1,
    nr = !1,
    Bl = 0,
    is = 0,
    Qr = null,
    _S = 0;
  function nt() {
    throw Error(s(321));
  }
  function Iu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Lt(e[r], t[r])) return !1;
    return !0;
  }
  function ec(e, t, r, l, u, f) {
    return (
      (ha = f),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? ar : ma),
      (nr = !1),
      (f = r(l, u)),
      (nr = !1),
      Gr && (f = _m(t, r, l, u)),
      xm(e),
      f
    );
  }
  function xm(e) {
    A.H = _n;
    var t = He !== null && He.next !== null;
    if (((ha = 0), (it = He = Ae = null), (Ul = !1), (is = 0), (Qr = null), t)) throw Error(s(300));
    e === null || ht || ((e = e.dependencies), e !== null && Fl(e) && (ht = !0));
  }
  function _m(e, t, r, l) {
    Ae = e;
    var u = 0;
    do {
      if ((Gr && (Qr = null), (is = 0), (Gr = !1), 25 <= u)) throw Error(s(301));
      if (((u += 1), (it = He = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((A.H = rr), (f = t(r, l)));
    } while (Gr);
    return f;
  }
  function wS() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ss(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (Ae.flags |= 1024),
      t
    );
  }
  function tc() {
    var e = Bl !== 0;
    return ((Bl = 0), e);
  }
  function nc(e, t, r) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r));
  }
  function ac(e) {
    if (Ul) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Ul = !1;
    }
    ((ha = 0), (it = He = Ae = null), (Gr = !1), (is = Bl = 0), (Qr = null));
  }
  function Mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (it === null ? (Ae.memoizedState = it = e) : (it = it.next = e), it);
  }
  function st() {
    if (He === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = it === null ? Ae.memoizedState : it.next;
    if (t !== null) ((it = t), (He = e));
    else {
      if (e === null) throw Ae.alternate === null ? Error(s(467)) : Error(s(310));
      ((He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        it === null ? (Ae.memoizedState = it = e) : (it = it.next = e));
    }
    return it;
  }
  var Hl;
  Hl = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function ss(e) {
    var t = is;
    return (
      (is += 1),
      Qr === null && (Qr = []),
      (e = fm(Qr, e, t)),
      (t = Ae),
      (it === null ? t.memoizedState : it.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? ar : ma)),
      e
    );
  }
  function Pl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ss(e);
      if (e.$$typeof === w) return St(e);
    }
    throw Error(s(438, String(e)));
  }
  function rc(e) {
    var t = null,
      r = Ae.updateQueue;
    if ((r !== null && (t = r.memoCache), t == null)) {
      var l = Ae.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = Hl()), (Ae.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), l = 0; l < e; l++) r[l] = Y;
    return (t.index++, r);
  }
  function Hn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ql(e) {
    var t = st();
    return ic(t, He, e);
  }
  function ic(e, t, r) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = r;
    var u = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        ((u.next = f.next), (f.next = y));
      }
      ((t.baseQueue = u = f), (l.pending = null));
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f;
    else {
      t = u.next;
      var b = (y = null),
        E = null,
        k = t,
        F = !1;
      do {
        var W = k.lane & -536870913;
        if (W !== k.lane ? (ze & W) === W : (ha & W) === W) {
          var U = k.revertLane;
          if (U === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              W === Vr && (F = !0));
          else if ((ha & U) === U) {
            ((k = k.next), U === Vr && (F = !0));
            continue;
          } else
            ((W = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              E === null ? ((b = E = W), (y = f)) : (E = E.next = W),
              (Ae.lanes |= U),
              (wa |= U));
          ((W = k.action), nr && r(f, W), (f = k.hasEagerState ? k.eagerState : r(f, W)));
        } else
          ((U = {
            lane: W,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            E === null ? ((b = E = U), (y = f)) : (E = E.next = U),
            (Ae.lanes |= W),
            (wa |= W));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (E === null ? (y = f) : (E.next = b),
        !Lt(f, e.memoizedState) && ((ht = !0), F && ((r = Zr), r !== null)))
      )
        throw r;
      ((e.memoizedState = f), (e.baseState = y), (e.baseQueue = E), (l.lastRenderedState = f));
    }
    return (u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function sc(e) {
    var t = st(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      u = r.pending,
      f = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var y = (u = u.next);
      do ((f = e(f, y.action)), (y = y.next));
      while (y !== u);
      (Lt(f, t.memoizedState) || (ht = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f));
    }
    return [f, l];
  }
  function wm(e, t, r) {
    var l = Ae,
      u = st(),
      f = Ue;
    if (f) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var y = !Lt((He || u).memoizedState, r);
    if (
      (y && ((u.memoizedState = r), (ht = !0)),
      (u = u.queue),
      uc(Tm.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || y || (it !== null && it.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Yr(9, Rm.bind(null, l, u, r, t), { destroy: void 0 }, null),
        Ge === null)
      )
        throw Error(s(349));
      f || (ha & 60) !== 0 || Em(l, t, r);
    }
    return r;
  }
  function Em(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = Hl()), (Ae.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Rm(e, t, r, l) {
    ((t.value = r), (t.getSnapshot = l), Cm(t) && Om(e));
  }
  function Tm(e, t, r) {
    return r(function () {
      Cm(t) && Om(e);
    });
  }
  function Cm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Lt(e, r);
    } catch {
      return !0;
    }
  }
  function Om(e) {
    var t = ca(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function lc(e) {
    var t = Mt();
    if (typeof e == 'function') {
      var r = e;
      if (((e = r()), nr)) {
        la(!0);
        try {
          r();
        } finally {
          la(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Am(e, t, r, l) {
    return ((e.baseState = r), ic(e, He, typeof l == 'function' ? l : Hn));
  }
  function ES(e, t, r, l, u) {
    if (Gl(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      (A.T !== null ? r(!0) : (f.isTransition = !1),
        l(f),
        (r = t.pending),
        r === null
          ? ((f.next = t.pending = f), Mm(t, f))
          : ((f.next = r.next), (t.pending = r.next = f)));
    }
  }
  function Mm(e, t) {
    var r = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var f = A.T,
        y = {};
      A.T = y;
      try {
        var b = r(u, l),
          E = A.S;
        (E !== null && E(y, b), Dm(e, t, b));
      } catch (k) {
        oc(e, t, k);
      } finally {
        A.T = f;
      }
    } else
      try {
        ((f = r(u, l)), Dm(e, t, f));
      } catch (k) {
        oc(e, t, k);
      }
  }
  function Dm(e, t, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (l) {
            Nm(e, t, l);
          },
          function (l) {
            return oc(e, t, l);
          }
        )
      : Nm(e, t, r);
  }
  function Nm(e, t, r) {
    ((t.status = 'fulfilled'),
      (t.value = r),
      km(t),
      (e.state = r),
      (t = e.pending),
      t !== null &&
        ((r = t.next), r === t ? (e.pending = null) : ((r = r.next), (t.next = r), Mm(e, r))));
  }
  function oc(e, t, r) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = r), km(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function km(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function zm(e, t) {
    return t;
  }
  function jm(e, t) {
    if (Ue) {
      var r = Ge.formState;
      if (r !== null) {
        e: {
          var l = Ae;
          if (Ue) {
            if (vt) {
              t: {
                for (var u = vt, f = Sn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = cn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((f = u.data), (u = f === 'F!' || f === 'F' ? u : null));
              }
              if (u) {
                ((vt = cn(u.nextSibling)), (l = u.data === 'F!'));
                break e;
              }
            }
            Ia(l);
          }
          l = !1;
        }
        l && (t = r[0]);
      }
    }
    return (
      (r = Mt()),
      (r.memoizedState = r.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zm,
        lastRenderedState: t,
      }),
      (r.queue = l),
      (r = Im.bind(null, Ae, l)),
      (l.dispatch = r),
      (l = lc(!1)),
      (f = mc.bind(null, Ae, !1, l.queue)),
      (l = Mt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (r = ES.bind(null, Ae, u, f, r)),
      (u.dispatch = r),
      (l.memoizedState = e),
      [t, r, !1]
    );
  }
  function Lm(e) {
    var t = st();
    return Um(t, He, e);
  }
  function Um(e, t, r) {
    ((t = ic(e, t, zm)[0]),
      (e = ql(Hn)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? ss(t) : t));
    var l = st(),
      u = l.queue,
      f = u.dispatch;
    return (
      r !== l.memoizedState &&
        ((Ae.flags |= 2048), Yr(9, RS.bind(null, u, r), { destroy: void 0 }, null)),
      [t, f, e]
    );
  }
  function RS(e, t) {
    e.action = t;
  }
  function Bm(e) {
    var t = st(),
      r = He;
    if (r !== null) return Um(t, r, e);
    (st(), (t = t.memoizedState), (r = st()));
    var l = r.queue.dispatch;
    return ((r.memoizedState = e), [t, l, !1]);
  }
  function Yr(e, t, r, l) {
    return (
      (e = { tag: e, create: t, inst: r, deps: l, next: null }),
      (t = Ae.updateQueue),
      t === null && ((t = Hl()), (Ae.updateQueue = t)),
      (r = t.lastEffect),
      r === null
        ? (t.lastEffect = e.next = e)
        : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Hm() {
    return st().memoizedState;
  }
  function Vl(e, t, r, l) {
    var u = Mt();
    ((Ae.flags |= e),
      (u.memoizedState = Yr(1 | t, r, { destroy: void 0 }, l === void 0 ? null : l)));
  }
  function Zl(e, t, r, l) {
    var u = st();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    He !== null && l !== null && Iu(l, He.memoizedState.deps)
      ? (u.memoizedState = Yr(t, r, f, l))
      : ((Ae.flags |= e), (u.memoizedState = Yr(1 | t, r, f, l)));
  }
  function Pm(e, t) {
    Vl(8390656, 8, e, t);
  }
  function uc(e, t) {
    Zl(2048, 8, e, t);
  }
  function qm(e, t) {
    return Zl(4, 2, e, t);
  }
  function Vm(e, t) {
    return Zl(4, 4, e, t);
  }
  function Zm(e, t) {
    if (typeof t == 'function') {
      e = e();
      var r = t(e);
      return function () {
        typeof r == 'function' ? r() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Gm(e, t, r) {
    ((r = r != null ? r.concat([e]) : null), Zl(4, 4, Zm.bind(null, t, e), r));
  }
  function cc() {}
  function Qm(e, t) {
    var r = st();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return t !== null && Iu(t, l[1]) ? l[0] : ((r.memoizedState = [e, t]), e);
  }
  function Ym(e, t) {
    var r = st();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    if (t !== null && Iu(t, l[1])) return l[0];
    if (((l = e()), nr)) {
      la(!0);
      try {
        e();
      } finally {
        la(!1);
      }
    }
    return ((r.memoizedState = [l, t]), l);
  }
  function fc(e, t, r) {
    return r === void 0 || (ha & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = Xp()), (Ae.lanes |= e), (wa |= e), r);
  }
  function Fm(e, t, r, l) {
    return Lt(r, t)
      ? r
      : qr.current !== null
        ? ((e = fc(e, r, l)), Lt(e, t) || (ht = !0), e)
        : (ha & 42) === 0
          ? ((ht = !0), (e.memoizedState = r))
          : ((e = Xp()), (Ae.lanes |= e), (wa |= e), t);
  }
  function Xm(e, t, r, l, u) {
    var f = $.p;
    $.p = f !== 0 && 8 > f ? f : 8;
    var y = A.T,
      b = {};
    ((A.T = b), mc(e, !1, t, r));
    try {
      var E = u(),
        k = A.S;
      if (
        (k !== null && k(b, E), E !== null && typeof E == 'object' && typeof E.then == 'function')
      ) {
        var F = xS(E, l);
        ls(e, t, F, Pt(e));
      } else ls(e, t, l, Pt(e));
    } catch (W) {
      ls(e, t, { then: function () {}, status: 'rejected', reason: W }, Pt());
    } finally {
      (($.p = f), (A.T = y));
    }
  }
  function TS() {}
  function dc(e, t, r, l) {
    if (e.tag !== 5) throw Error(s(476));
    var u = Km(e).queue;
    Xm(
      e,
      u,
      t,
      fe,
      r === null
        ? TS
        : function () {
            return ($m(e), r(l));
          }
    );
  }
  function Km(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: fe,
      baseState: fe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hn,
        lastRenderedState: fe,
      },
      next: null,
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Hn,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function $m(e) {
    var t = Km(e).next.queue;
    ls(e, t, {}, Pt());
  }
  function hc() {
    return St(Cs);
  }
  function Wm() {
    return st().memoizedState;
  }
  function Jm() {
    return st().memoizedState;
  }
  function CS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = Pt();
          e = ya(r);
          var l = ga(t, e, r);
          (l !== null && (Tt(l, t, r), cs(l, t, r)), (t = { cache: $u() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function OS(e, t, r) {
    var l = Pt();
    ((r = { lane: l, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null }),
      Gl(e) ? ep(t, r) : ((r = Zu(e, t, r, l)), r !== null && (Tt(r, e, l), tp(r, t, l))));
  }
  function Im(e, t, r) {
    var l = Pt();
    ls(e, t, r, l);
  }
  function ls(e, t, r, l) {
    var u = { lane: l, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Gl(e)) ep(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            b = f(y, r);
          if (((u.hasEagerState = !0), (u.eagerState = b), Lt(b, y)))
            return (Cl(e, t, u, 0), Ge === null && Tl(), !1);
        } catch {
        } finally {
        }
      if (((r = Zu(e, t, u, l)), r !== null)) return (Tt(r, e, l), tp(r, t, l), !0);
    }
    return !1;
  }
  function mc(e, t, r, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: af(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gl(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = Zu(e, r, l, 2)), t !== null && Tt(t, e, 2));
  }
  function Gl(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function ep(e, t) {
    Gr = Ul = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function tp(e, t, r) {
    if ((r & 4194176) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (r |= l), (t.lanes = r), dh(e, r));
    }
  }
  var _n = {
    readContext: St,
    use: Pl,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useLayoutEffect: nt,
    useInsertionEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useSyncExternalStore: nt,
    useId: nt,
  };
  ((_n.useCacheRefresh = nt),
    (_n.useMemoCache = nt),
    (_n.useHostTransitionStatus = nt),
    (_n.useFormState = nt),
    (_n.useActionState = nt),
    (_n.useOptimistic = nt));
  var ar = {
    readContext: St,
    use: Pl,
    useCallback: function (e, t) {
      return ((Mt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: St,
    useEffect: Pm,
    useImperativeHandle: function (e, t, r) {
      ((r = r != null ? r.concat([e]) : null), Vl(4194308, 4, Zm.bind(null, t, e), r));
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Mt();
      t = t === void 0 ? null : t;
      var l = e();
      if (nr) {
        la(!0);
        try {
          e();
        } finally {
          la(!1);
        }
      }
      return ((r.memoizedState = [l, t]), l);
    },
    useReducer: function (e, t, r) {
      var l = Mt();
      if (r !== void 0) {
        var u = r(t);
        if (nr) {
          la(!0);
          try {
            r(t);
          } finally {
            la(!1);
          }
        }
      } else u = t;
      return (
        (l.memoizedState = l.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (l.queue = e),
        (e = e.dispatch = OS.bind(null, Ae, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: function (e) {
      e = lc(e);
      var t = e.queue,
        r = Im.bind(null, Ae, t);
      return ((t.dispatch = r), [e.memoizedState, r]);
    },
    useDebugValue: cc,
    useDeferredValue: function (e, t) {
      var r = Mt();
      return fc(r, e, t);
    },
    useTransition: function () {
      var e = lc(!1);
      return ((e = Xm.bind(null, Ae, e.queue, !0, !1)), (Mt().memoizedState = e), [!1, e]);
    },
    useSyncExternalStore: function (e, t, r) {
      var l = Ae,
        u = Mt();
      if (Ue) {
        if (r === void 0) throw Error(s(407));
        r = r();
      } else {
        if (((r = t()), Ge === null)) throw Error(s(349));
        (ze & 60) !== 0 || Em(l, t, r);
      }
      u.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return (
        (u.queue = f),
        Pm(Tm.bind(null, l, f, e), [e]),
        (l.flags |= 2048),
        Yr(9, Rm.bind(null, l, f, r, t), { destroy: void 0 }, null),
        r
      );
    },
    useId: function () {
      var e = Mt(),
        t = Ge.identifierPrefix;
      if (Ue) {
        var r = Un,
          l = Ln;
        ((r = (l & ~(1 << (32 - jt(l) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Bl++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':'));
      } else ((r = _S++), (t = ':' + t + 'r' + r.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Mt().memoizedState = CS.bind(null, Ae));
    },
  };
  ((ar.useMemoCache = rc),
    (ar.useHostTransitionStatus = hc),
    (ar.useFormState = jm),
    (ar.useActionState = jm),
    (ar.useOptimistic = function (e) {
      var t = Mt();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return ((t.queue = r), (t = mc.bind(null, Ae, !0, r)), (r.dispatch = t), [e, t]);
    }));
  var ma = {
    readContext: St,
    use: Pl,
    useCallback: Qm,
    useContext: St,
    useEffect: uc,
    useImperativeHandle: Gm,
    useInsertionEffect: qm,
    useLayoutEffect: Vm,
    useMemo: Ym,
    useReducer: ql,
    useRef: Hm,
    useState: function () {
      return ql(Hn);
    },
    useDebugValue: cc,
    useDeferredValue: function (e, t) {
      var r = st();
      return Fm(r, He.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ql(Hn)[0],
        t = st().memoizedState;
      return [typeof e == 'boolean' ? e : ss(e), t];
    },
    useSyncExternalStore: wm,
    useId: Wm,
  };
  ((ma.useCacheRefresh = Jm),
    (ma.useMemoCache = rc),
    (ma.useHostTransitionStatus = hc),
    (ma.useFormState = Lm),
    (ma.useActionState = Lm),
    (ma.useOptimistic = function (e, t) {
      var r = st();
      return Am(r, He, e, t);
    }));
  var rr = {
    readContext: St,
    use: Pl,
    useCallback: Qm,
    useContext: St,
    useEffect: uc,
    useImperativeHandle: Gm,
    useInsertionEffect: qm,
    useLayoutEffect: Vm,
    useMemo: Ym,
    useReducer: sc,
    useRef: Hm,
    useState: function () {
      return sc(Hn);
    },
    useDebugValue: cc,
    useDeferredValue: function (e, t) {
      var r = st();
      return He === null ? fc(r, e, t) : Fm(r, He.memoizedState, e, t);
    },
    useTransition: function () {
      var e = sc(Hn)[0],
        t = st().memoizedState;
      return [typeof e == 'boolean' ? e : ss(e), t];
    },
    useSyncExternalStore: wm,
    useId: Wm,
  };
  ((rr.useCacheRefresh = Jm),
    (rr.useMemoCache = rc),
    (rr.useHostTransitionStatus = hc),
    (rr.useFormState = Bm),
    (rr.useActionState = Bm),
    (rr.useOptimistic = function (e, t) {
      var r = st();
      return He !== null ? Am(r, He, e, t) : ((r.baseState = e), [e, r.queue.dispatch]);
    }));
  function pc(e, t, r, l) {
    ((t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : X({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var vc = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? B(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = Pt(),
        u = ya(l);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = ga(e, u, l)),
        t !== null && (Tt(t, e, l), cs(t, e, l)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = Pt(),
        u = ya(l);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = ga(e, u, l)),
        t !== null && (Tt(t, e, l), cs(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Pt(),
        l = ya(r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ga(e, l, r)),
        t !== null && (Tt(t, e, r), cs(t, e, r)));
    },
  };
  function np(e, t, r, l, u, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xi(r, l) || !Xi(u, f)
          : !0
    );
  }
  function ap(e, t, r, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && vc.enqueueReplaceState(t, t.state, null));
  }
  function ir(e, t) {
    var r = t;
    if ('ref' in t) {
      r = {};
      for (var l in t) l !== 'ref' && (r[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = X({}, r));
      for (var u in e) r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  var Ql =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function rp(e) {
    Ql(e);
  }
  function ip(e) {
    console.error(e);
  }
  function sp(e) {
    Ql(e);
  }
  function Yl(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function lp(e, t, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, { componentStack: r.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function yc(e, t, r) {
    return (
      (r = ya(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Yl(e, t);
      }),
      r
    );
  }
  function op(e) {
    return ((e = ya(e)), (e.tag = 3), e);
  }
  function up(e, t, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var f = l.value;
      ((e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          lp(t, r, l);
        }));
    }
    var y = r.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        (lp(t, r, l),
          typeof u != 'function' && (Ea === null ? (Ea = new Set([this])) : Ea.add(this)));
        var b = l.stack;
        this.componentDidCatch(l.value, { componentStack: b !== null ? b : '' });
      });
  }
  function AS(e, t, r, l, u) {
    if (((r.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = r.alternate), t !== null && us(t, r, u, !0), (r = $t.current), r !== null)) {
        switch (r.tag) {
          case 13:
            return (
              xn === null ? Jc() : r.alternate === null && Je === 0 && (Je = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = u),
              l === Fu
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null ? (r.updateQueue = new Set([l])) : t.add(l),
                  ef(e, l, u)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              l === Fu
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue), r === null ? (t.retryQueue = new Set([l])) : r.add(l)),
                  ef(e, l, u)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return (ef(e, l, u), Jc(), !1);
    }
    if (Ue)
      return (
        (t = $t.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== Yu && ((e = Error(s(422), { cause: l })), Ji(Ft(e, r))))
          : (l !== Yu && ((t = Error(s(423), { cause: l })), Ji(Ft(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = Ft(l, r)),
            (u = yc(e.stateNode, l, u)),
            Nc(e, u),
            Je !== 4 && (Je = 2)),
        !1
      );
    var f = Error(s(520), { cause: l });
    if (((f = Ft(f, r)), gs === null ? (gs = [f]) : gs.push(f), Je !== 4 && (Je = 2), t === null))
      return !0;
    ((l = Ft(l, r)), (r = t));
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = u & -u),
            (r.lanes |= e),
            (e = yc(r.stateNode, l, e)),
            Nc(r, e),
            !1
          );
        case 1:
          if (
            ((t = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (f !== null &&
                  typeof f.componentDidCatch == 'function' &&
                  (Ea === null || !Ea.has(f)))))
          )
            return (
              (r.flags |= 65536),
              (u &= -u),
              (r.lanes |= u),
              (u = op(u)),
              up(u, e, r, l),
              Nc(r, u),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var cp = Error(s(461)),
    ht = !1;
  function yt(e, t, r, l) {
    t.child = e === null ? pm(t, null, r, l) : er(t, e.child, r, l);
  }
  function fp(e, t, r, l, u) {
    r = r.render;
    var f = t.ref;
    if ('ref' in l) {
      var y = {};
      for (var b in l) b !== 'ref' && (y[b] = l[b]);
    } else y = l;
    return (
      lr(t),
      (l = ec(e, t, r, y, f, u)),
      (b = tc()),
      e !== null && !ht
        ? (nc(e, t, u), Pn(e, t, u))
        : (Ue && b && Gu(t), (t.flags |= 1), yt(e, t, l, u), t.child)
    );
  }
  function dp(e, t, r, l, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' && !Pc(f) && f.defaultProps === void 0 && r.compare === null
        ? ((t.tag = 15), (t.type = f), hp(e, t, f, l, u))
        : ((e = Wl(r.type, null, l, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), !Tc(e, u))) {
      var y = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Xi), r(y, l) && e.ref === t.ref))
        return Pn(e, t, u);
    }
    return ((t.flags |= 1), (e = _a(f, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function hp(e, t, r, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Xi(f, l) && e.ref === t.ref)
        if (((ht = !1), (t.pendingProps = l = f), Tc(e, u))) (e.flags & 131072) !== 0 && (ht = !0);
        else return ((t.lanes = e.lanes), Pn(e, t, u));
    }
    return gc(e, t, r, l, u);
  }
  function mp(e, t, r) {
    var l = t.pendingProps,
      u = l.children,
      f = (t.stateNode._pendingVisibility & 2) !== 0,
      y = e !== null ? e.memoizedState : null;
    if ((os(e, t), l.mode === 'hidden' || f)) {
      if ((t.flags & 128) !== 0) {
        if (((l = y !== null ? y.baseLanes | r : r), e !== null)) {
          for (u = t.child = e.child, f = 0; u !== null; )
            ((f = f | u.lanes | u.childLanes), (u = u.sibling));
          t.childLanes = f & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return pp(e, t, l, r);
      }
      if ((r & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ll(t, y !== null ? y.cachePool : null),
          y !== null ? vm(t, y) : Xu(),
          ym(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          pp(e, t, y !== null ? y.baseLanes | r : r, r)
        );
    } else
      y !== null
        ? (Ll(t, y.cachePool), vm(t, y), da(), (t.memoizedState = null))
        : (e !== null && Ll(t, null), Xu(), da());
    return (yt(e, t, u, r), t.child);
  }
  function pp(e, t, r, l) {
    var u = Ju();
    return (
      (u = u === null ? null : { parent: ut._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: r, cachePool: u }),
      e !== null && Ll(t, null),
      Xu(),
      ym(t),
      e !== null && us(e, t, l, !0),
      null
    );
  }
  function os(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof r != 'function' && typeof r != 'object') throw Error(s(284));
      (e === null || e.ref !== r) && (t.flags |= 2097664);
    }
  }
  function gc(e, t, r, l, u) {
    return (
      lr(t),
      (r = ec(e, t, r, l, void 0, u)),
      (l = tc()),
      e !== null && !ht
        ? (nc(e, t, u), Pn(e, t, u))
        : (Ue && l && Gu(t), (t.flags |= 1), yt(e, t, r, u), t.child)
    );
  }
  function vp(e, t, r, l, u, f) {
    return (
      lr(t),
      (t.updateQueue = null),
      (r = _m(t, l, r, u)),
      xm(e),
      (l = tc()),
      e !== null && !ht
        ? (nc(e, t, f), Pn(e, t, f))
        : (Ue && l && Gu(t), (t.flags |= 1), yt(e, t, r, f), t.child)
    );
  }
  function yp(e, t, r, l, u) {
    if ((lr(t), t.stateNode === null)) {
      var f = Ur,
        y = r.contextType;
      (typeof y == 'object' && y !== null && (f = St(y)),
        (f = new r(l, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = vc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = l),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Mc(t),
        (y = r.contextType),
        (f.context = typeof y == 'object' && y !== null ? St(y) : Ur),
        (f.state = t.memoizedState),
        (y = r.getDerivedStateFromProps),
        typeof y == 'function' && (pc(t, r, y, l), (f.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' &&
            typeof f.componentWillMount != 'function') ||
          ((y = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount(),
          y !== f.state && vc.enqueueReplaceState(f, f.state, null),
          ds(t, l, f, u),
          fs(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      f = t.stateNode;
      var b = t.memoizedProps,
        E = ir(r, b);
      f.props = E;
      var k = f.context,
        F = r.contextType;
      ((y = Ur), typeof F == 'object' && F !== null && (y = St(F)));
      var W = r.getDerivedStateFromProps;
      ((F = typeof W == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'),
        (b = t.pendingProps !== b),
        F ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((b || k !== y) && ap(t, f, l, y)),
        (va = !1));
      var U = t.memoizedState;
      ((f.state = U),
        ds(t, l, f, u),
        fs(),
        (k = t.memoizedState),
        b || U !== k || va
          ? (typeof W == 'function' && (pc(t, r, W, l), (k = t.memoizedState)),
            (E = va || np(t, r, E, l, U, k, y))
              ? (F ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = k)),
            (f.props = l),
            (f.state = k),
            (f.context = y),
            (l = E))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1)));
    } else {
      ((f = t.stateNode),
        Dc(e, t),
        (y = t.memoizedProps),
        (F = ir(r, y)),
        (f.props = F),
        (W = t.pendingProps),
        (U = f.context),
        (k = r.contextType),
        (E = Ur),
        typeof k == 'object' && k !== null && (E = St(k)),
        (b = r.getDerivedStateFromProps),
        (k = typeof b == 'function' || typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((y !== W || U !== E) && ap(t, f, l, E)),
        (va = !1),
        (U = t.memoizedState),
        (f.state = U),
        ds(t, l, f, u),
        fs());
      var Q = t.memoizedState;
      y !== W || U !== Q || va || (e !== null && e.dependencies !== null && Fl(e.dependencies))
        ? (typeof b == 'function' && (pc(t, r, b, l), (Q = t.memoizedState)),
          (F =
            va ||
            np(t, r, F, l, U, Q, E) ||
            (e !== null && e.dependencies !== null && Fl(e.dependencies)))
            ? (k ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' && f.componentWillUpdate(l, Q, E),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(l, Q, E)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Q)),
          (f.props = l),
          (f.state = Q),
          (f.context = E),
          (l = F))
        : (typeof f.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      os(e, t),
      (l = (t.flags & 128) !== 0),
      f || l
        ? ((f = t.stateNode),
          (r = l && typeof r.getDerivedStateFromError != 'function' ? null : f.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = er(t, e.child, null, u)), (t.child = er(t, null, r, u)))
            : yt(e, t, r, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Pn(e, t, u)),
      e
    );
  }
  function gp(e, t, r, l) {
    return (Wi(), (t.flags |= 256), yt(e, t, r, l), t.child);
  }
  var bc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Sc(e) {
    return { baseLanes: e, cachePool: Sm() };
  }
  function xc(e, t, r) {
    return ((e = e !== null ? e.childLanes & ~r : 0), t && (e |= en), e);
  }
  function bp(e, t, r) {
    var l = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      y;
    if (
      ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (ot.current & 2) !== 0),
      y && ((u = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ue) {
        if ((u ? fa(t) : da(), Ue)) {
          var b = vt,
            E;
          if ((E = b)) {
            e: {
              for (E = b, b = Sn; E.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((E = cn(E.nextSibling)), E === null)) {
                  b = null;
                  break e;
                }
              }
              b = E;
            }
            b !== null
              ? ((t.memoizedState = {
                  dehydrated: b,
                  treeContext: Wa !== null ? { id: Ln, overflow: Un } : null,
                  retryLane: 536870912,
                }),
                (E = It(18, null, null, 0)),
                (E.stateNode = b),
                (E.return = t),
                (t.child = E),
                (Rt = t),
                (vt = null),
                (E = !0))
              : (E = !1);
          }
          E || Ia(t);
        }
        if (((b = t.memoizedState), b !== null && ((b = b.dehydrated), b !== null)))
          return (b.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null);
        Bn(t);
      }
      return (
        (b = l.children),
        (l = l.fallback),
        u
          ? (da(),
            (u = t.mode),
            (b = wc({ mode: 'hidden', children: b }, u)),
            (l = ur(l, u, r, null)),
            (b.return = t),
            (l.return = t),
            (b.sibling = l),
            (t.child = b),
            (u = t.child),
            (u.memoizedState = Sc(r)),
            (u.childLanes = xc(e, y, r)),
            (t.memoizedState = bc),
            l)
          : (fa(t), _c(t, b))
      );
    }
    if (((E = e.memoizedState), E !== null && ((b = E.dehydrated), b !== null))) {
      if (f)
        t.flags & 256
          ? (fa(t), (t.flags &= -257), (t = Ec(e, t, r)))
          : t.memoizedState !== null
            ? (da(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (da(),
              (u = l.fallback),
              (b = t.mode),
              (l = wc({ mode: 'visible', children: l.children }, b)),
              (u = ur(u, b, r, null)),
              (u.flags |= 2),
              (l.return = t),
              (u.return = t),
              (l.sibling = u),
              (t.child = l),
              er(t, e.child, null, r),
              (l = t.child),
              (l.memoizedState = Sc(r)),
              (l.childLanes = xc(e, y, r)),
              (t.memoizedState = bc),
              (t = u));
      else if ((fa(t), b.data === '$!')) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var k = y.dgst;
        ((y = k),
          (l = Error(s(419))),
          (l.stack = ''),
          (l.digest = y),
          Ji({ value: l, source: null, stack: null }),
          (t = Ec(e, t, r)));
      } else if ((ht || us(e, t, r, !1), (y = (r & e.childLanes) !== 0), ht || y)) {
        if (((y = Ge), y !== null)) {
          if (((l = r & -r), (l & 42) !== 0)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
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
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (((l = (l & (y.suspendedLanes | r)) !== 0 ? 0 : l), l !== 0 && l !== E.retryLane))
            throw ((E.retryLane = l), ca(e, l), Tt(y, e, l), cp);
        }
        (b.data === '$?' || Jc(), (t = Ec(e, t, r)));
      } else
        b.data === '$?'
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = GS.bind(null, e)),
            (b._reactRetry = t),
            (t = null))
          : ((e = E.treeContext),
            (vt = cn(b.nextSibling)),
            (Rt = t),
            (Ue = !0),
            (on = null),
            (Sn = !1),
            e !== null &&
              ((Xt[Kt++] = Ln),
              (Xt[Kt++] = Un),
              (Xt[Kt++] = Wa),
              (Ln = e.id),
              (Un = e.overflow),
              (Wa = t)),
            (t = _c(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (da(),
        (u = l.fallback),
        (b = t.mode),
        (E = e.child),
        (k = E.sibling),
        (l = _a(E, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 31457280),
        k !== null ? (u = _a(k, u)) : ((u = ur(u, b, r, null)), (u.flags |= 2)),
        (u.return = t),
        (l.return = t),
        (l.sibling = u),
        (t.child = l),
        (l = u),
        (u = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = Sc(r))
          : ((E = b.cachePool),
            E !== null
              ? ((k = ut._currentValue), (E = E.parent !== k ? { parent: k, pool: k } : E))
              : (E = Sm()),
            (b = { baseLanes: b.baseLanes | r, cachePool: E })),
        (u.memoizedState = b),
        (u.childLanes = xc(e, y, r)),
        (t.memoizedState = bc),
        l)
      : (fa(t),
        (r = e.child),
        (e = r.sibling),
        (r = _a(r, { mode: 'visible', children: l.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((y = t.deletions), y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r);
  }
  function _c(e, t) {
    return ((t = wc({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function wc(e, t) {
    return Qp(e, t, 0, null);
  }
  function Ec(e, t, r) {
    return (
      er(t, e.child, null, r),
      (e = _c(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Sp(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Oc(e.return, t, r));
  }
  function Rc(e, t, r, l, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = r),
        (f.tailMode = u));
  }
  function xp(e, t, r) {
    var l = t.pendingProps,
      u = l.revealOrder,
      f = l.tail;
    if ((yt(e, t, l.children, r), (l = ot.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Sp(e, r, t);
          else if (e.tag === 19) Sp(e, r, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((Oe(ot, l), u)) {
      case 'forwards':
        for (r = t.child, u = null; r !== null; )
          ((e = r.alternate), e !== null && jl(e) === null && (u = r), (r = r.sibling));
        ((r = u),
          r === null ? ((u = t.child), (t.child = null)) : ((u = r.sibling), (r.sibling = null)),
          Rc(t, !1, u, r, f));
        break;
      case 'backwards':
        for (r = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && jl(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = r), (r = u), (u = e));
        }
        Rc(t, !0, r, null, f);
        break;
      case 'together':
        Rc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (wa |= t.lanes), (r & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((us(e, t, r, !1), (r & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = _a(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = _a(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Tc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Fl(e)));
  }
  function MS(e, t, r) {
    switch (t.tag) {
      case 3:
        (Fe(t, t.stateNode.containerInfo), pa(t, ut, e.memoizedState.cache), Wi());
        break;
      case 27:
      case 5:
        tt(t);
        break;
      case 4:
        Fe(t, t.stateNode.containerInfo);
        break;
      case 10:
        pa(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (fa(t), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? bp(e, t, r)
              : (fa(t), (e = Pn(e, t, r)), e !== null ? e.sibling : null);
        fa(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (r & t.childLanes) !== 0),
          l || (us(e, t, r, !1), (l = (r & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return xp(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Oe(ot, ot.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), mp(e, t, r));
      case 24:
        pa(t, ut, e.memoizedState.cache);
    }
    return Pn(e, t, r);
  }
  function _p(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ht = !0;
      else {
        if (!Tc(e, r) && (t.flags & 128) === 0) return ((ht = !1), MS(e, t, r));
        ht = (e.flags & 131072) !== 0;
      }
    else ((ht = !1), Ue && (t.flags & 1048576) !== 0 && sm(t, Ml, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            u = l._init;
          if (((l = u(l._payload)), (t.type = l), typeof l == 'function'))
            Pc(l)
              ? ((e = ir(l, e)), (t.tag = 1), (t = yp(null, t, l, e, r)))
              : ((t.tag = 0), (t = gc(null, t, l, e, r)));
          else {
            if (l != null) {
              if (((u = l.$$typeof), u === R)) {
                ((t.tag = 11), (t = fp(null, t, l, e, r)));
                break e;
              } else if (u === O) {
                ((t.tag = 14), (t = dp(null, t, l, e, r)));
                break e;
              }
            }
            throw ((t = M(l) || l), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return gc(e, t, t.type, t.pendingProps, r);
      case 1:
        return ((l = t.type), (u = ir(l, t.pendingProps)), yp(e, t, l, u, r));
      case 3:
        e: {
          if ((Fe(t, t.stateNode.containerInfo), e === null)) throw Error(s(387));
          var f = t.pendingProps;
          ((u = t.memoizedState), (l = u.element), Dc(e, t), ds(t, f, null, r));
          var y = t.memoizedState;
          if (
            ((f = y.cache),
            pa(t, ut, f),
            f !== u.cache && Ac(t, [ut], r, !0),
            fs(),
            (f = y.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: f, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = gp(e, t, f, r);
              break e;
            } else if (f !== l) {
              ((l = Ft(Error(s(424)), t)), Ji(l), (t = gp(e, t, f, r)));
              break e;
            } else
              for (
                vt = cn(t.stateNode.containerInfo.firstChild),
                  Rt = t,
                  Ue = !0,
                  on = null,
                  Sn = !0,
                  r = pm(t, null, f, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Wi(), f === l)) {
              t = Pn(e, t, r);
              break e;
            }
            yt(e, t, f, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          os(e, t),
          e === null
            ? (r = Rv(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : Ue ||
                ((r = t.type),
                (e = t.pendingProps),
                (l = uo(rt.current).createElement(r)),
                (l[bt] = t),
                (l[Ot] = e),
                gt(l, r, e),
                dt(l),
                (t.stateNode = l))
            : (t.memoizedState = Rv(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          tt(t),
          e === null &&
            Ue &&
            ((l = t.stateNode = _v(t.type, t.pendingProps, rt.current)),
            (Rt = t),
            (Sn = !0),
            (vt = cn(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || Ue ? yt(e, t, l, r) : (t.child = er(t, null, l, r)),
          os(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ue &&
            ((u = l = vt) &&
              ((l = sx(l, t.type, t.pendingProps, Sn)),
              l !== null
                ? ((t.stateNode = l), (Rt = t), (vt = cn(l.firstChild)), (Sn = !1), (u = !0))
                : (u = !1)),
            u || Ia(t)),
          tt(t),
          (u = t.type),
          (f = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (l = f.children),
          hf(u, f) ? (l = null) : y !== null && hf(u, y) && (t.flags |= 32),
          t.memoizedState !== null && ((u = ec(e, t, wS, null, null, r)), (Cs._currentValue = u)),
          os(e, t),
          yt(e, t, l, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ue &&
            ((e = r = vt) &&
              ((r = lx(r, t.pendingProps, Sn)),
              r !== null ? ((t.stateNode = r), (Rt = t), (vt = null), (e = !0)) : (e = !1)),
            e || Ia(t)),
          null
        );
      case 13:
        return bp(e, t, r);
      case 4:
        return (
          Fe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = er(t, null, l, r)) : yt(e, t, l, r),
          t.child
        );
      case 11:
        return fp(e, t, t.type, t.pendingProps, r);
      case 7:
        return (yt(e, t, t.pendingProps, r), t.child);
      case 8:
        return (yt(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (yt(e, t, t.pendingProps.children, r), t.child);
      case 10:
        return ((l = t.pendingProps), pa(t, t.type, l.value), yt(e, t, l.children, r), t.child);
      case 9:
        return (
          (u = t.type._context),
          (l = t.pendingProps.children),
          lr(t),
          (u = St(u)),
          (l = l(u)),
          (t.flags |= 1),
          yt(e, t, l, r),
          t.child
        );
      case 14:
        return dp(e, t, t.type, t.pendingProps, r);
      case 15:
        return hp(e, t, t.type, t.pendingProps, r);
      case 19:
        return xp(e, t, r);
      case 22:
        return mp(e, t, r);
      case 24:
        return (
          lr(t),
          (l = St(ut)),
          e === null
            ? ((u = Ju()),
              u === null &&
                ((u = Ge),
                (f = $u()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= r),
                (u = f)),
              (t.memoizedState = { parent: l, cache: u }),
              Mc(t),
              pa(t, ut, u))
            : ((e.lanes & r) !== 0 && (Dc(e, t), ds(t, null, null, r), fs()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  pa(t, ut, l))
                : ((l = f.cache), pa(t, ut, l), l !== u.cache && Ac(t, [ut], r, !0))),
          yt(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var Cc = ue(null),
    sr = null,
    qn = null;
  function pa(e, t, r) {
    (Oe(Cc, t._currentValue), (t._currentValue = r));
  }
  function Vn(e) {
    ((e._currentValue = Cc.current), Se(Cc));
  }
  function Oc(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Ac(e, t, r, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var y = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var b = f;
          f = u;
          for (var E = 0; E < t.length; E++)
            if (b.context === t[E]) {
              ((f.lanes |= r),
                (b = f.alternate),
                b !== null && (b.lanes |= r),
                Oc(f.return, r, e),
                l || (y = null));
              break e;
            }
          f = b.next;
        }
      } else if (u.tag === 18) {
        if (((y = u.return), y === null)) throw Error(s(341));
        ((y.lanes |= r), (f = y.alternate), f !== null && (f.lanes |= r), Oc(y, r, e), (y = null));
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((u = y.sibling), u !== null)) {
            ((u.return = y.return), (y = u));
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function us(e, t, r, l) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = u.type;
          Lt(u.pendingProps.value, y.value) || (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (u === Et.current) {
        if (((y = u.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Cs) : (e = [Cs]));
      }
      u = u.return;
    }
    (e !== null && Ac(t, e, r, l), (t.flags |= 262144));
  }
  function Fl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Lt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function lr(e) {
    ((sr = e), (qn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function St(e) {
    return wp(sr, e);
  }
  function Xl(e, t) {
    return (sr === null && lr(e), wp(e, t));
  }
  function wp(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), qn === null)) {
      if (e === null) throw Error(s(308));
      ((qn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else qn = qn.next = t;
    return r;
  }
  var va = !1;
  function Mc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Dc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ya(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ke & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Ol(e)),
        rm(e, null, r),
        t
      );
    }
    return (Cl(e, l, t, r), Ol(e));
  }
  function cs(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194176) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (r |= l), (t.lanes = r), dh(e, r));
    }
  }
  function Nc(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var u = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = { lane: r.lane, tag: r.tag, payload: r.payload, callback: null, next: null };
          (f === null ? (u = f = y) : (f = f.next = y), (r = r.next));
        } while (r !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      ((r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  var kc = !1;
  function fs() {
    if (kc) {
      var e = Zr;
      if (e !== null) throw e;
    }
  }
  function ds(e, t, r, l) {
    kc = !1;
    var u = e.updateQueue;
    va = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var E = b,
        k = E.next;
      ((E.next = null), y === null ? (f = k) : (y.next = k), (y = E));
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (b = F.lastBaseUpdate),
        b !== y && (b === null ? (F.firstBaseUpdate = k) : (b.next = k), (F.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var W = u.baseState;
      ((y = 0), (F = k = E = null), (b = f));
      do {
        var U = b.lane & -536870913,
          Q = U !== b.lane;
        if (Q ? (ze & U) === U : (l & U) === U) {
          (U !== 0 && U === Vr && (kc = !0),
            F !== null &&
              (F = F.next =
                { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null }));
          e: {
            var ge = e,
              Ee = b;
            U = t;
            var Ie = r;
            switch (Ee.tag) {
              case 1:
                if (((ge = Ee.payload), typeof ge == 'function')) {
                  W = ge.call(Ie, W, U);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = (ge.flags & -65537) | 128;
              case 0:
                if (
                  ((ge = Ee.payload),
                  (U = typeof ge == 'function' ? ge.call(Ie, W, U) : ge),
                  U == null)
                )
                  break e;
                W = X({}, W, U);
                break e;
              case 2:
                va = !0;
            }
          }
          ((U = b.callback),
            U !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = u.callbacks),
              Q === null ? (u.callbacks = [U]) : Q.push(U)));
        } else
          ((Q = { lane: U, tag: b.tag, payload: b.payload, callback: b.callback, next: null }),
            F === null ? ((k = F = Q), (E = W)) : (F = F.next = Q),
            (y |= U));
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          ((Q = b),
            (b = Q.next),
            (Q.next = null),
            (u.lastBaseUpdate = Q),
            (u.shared.pending = null));
        }
      } while (!0);
      (F === null && (E = W),
        (u.baseState = E),
        (u.firstBaseUpdate = k),
        (u.lastBaseUpdate = F),
        f === null && (u.shared.lanes = 0),
        (wa |= y),
        (e.lanes = y),
        (e.memoizedState = W));
    }
  }
  function Ep(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Rp(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Ep(r[e], t);
  }
  function hs(e, t) {
    try {
      var r = t.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var f = r.create,
              y = r.inst;
            ((l = f()), (y.destroy = l));
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (b) {
      qe(t, t.return, b);
    }
  }
  function ba(e, t, r) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst,
              b = y.destroy;
            if (b !== void 0) {
              ((y.destroy = void 0), (u = t));
              var E = r;
              try {
                b();
              } catch (k) {
                qe(u, E, k);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (k) {
      qe(t, t.return, k);
    }
  }
  function Tp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Rp(t, r);
      } catch (l) {
        qe(e, e.return, l);
      }
    }
  }
  function Cp(e, t, r) {
    ((r.props = ir(e.type, e.memoizedProps)), (r.state = e.memoizedState));
    try {
      r.componentWillUnmount();
    } catch (l) {
      qe(e, t, l);
    }
  }
  function or(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = l;
            break;
          default:
            u = l;
        }
        typeof r == 'function' ? (e.refCleanup = r(u)) : (r.current = u);
      }
    } catch (f) {
      qe(e, t, f);
    }
  }
  function Ut(e, t) {
    var r = e.ref,
      l = e.refCleanup;
    if (r !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (u) {
          qe(e, t, u);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof r == 'function')
        try {
          r(null);
        } catch (u) {
          qe(e, t, u);
        }
      else r.current = null;
  }
  function Op(e) {
    var t = e.type,
      r = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          r.autoFocus && l.focus();
          break e;
        case 'img':
          r.src ? (l.src = r.src) : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (u) {
      qe(e, e.return, u);
    }
  }
  function Ap(e, t, r) {
    try {
      var l = e.stateNode;
      (tx(l, e.type, r, t), (l[Ot] = t));
    } catch (u) {
      qe(e, e.return, u);
    }
  }
  function Mp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function zc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function jc(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = oo)));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (jc(e, t, r), e = e.sibling; e !== null; ) (jc(e, t, r), (e = e.sibling));
  }
  function Kl(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Kl(e, t, r), e = e.sibling; e !== null; ) (Kl(e, t, r), (e = e.sibling));
  }
  var Zn = !1,
    We = !1,
    Lc = !1,
    Dp = typeof WeakSet == 'function' ? WeakSet : Set,
    mt = null,
    Np = !1;
  function DS(e, t) {
    if (((e = e.containerInfo), (ff = vo), (e = Kh(e)), Bu(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var u = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              (r.nodeType, f.nodeType);
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              b = -1,
              E = -1,
              k = 0,
              F = 0,
              W = e,
              U = null;
            t: for (;;) {
              for (
                var Q;
                W !== r || (u !== 0 && W.nodeType !== 3) || (b = y + u),
                  W !== f || (l !== 0 && W.nodeType !== 3) || (E = y + l),
                  W.nodeType === 3 && (y += W.nodeValue.length),
                  (Q = W.firstChild) !== null;
              )
                ((U = W), (W = Q));
              for (;;) {
                if (W === e) break t;
                if (
                  (U === r && ++k === u && (b = y),
                  U === f && ++F === l && (E = y),
                  (Q = W.nextSibling) !== null)
                )
                  break;
                ((W = U), (U = W.parentNode));
              }
              W = Q;
            }
            r = b === -1 || E === -1 ? null : { start: b, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (df = { focusedElem: e, selectionRange: r }, vo = !1, mt = t; mt !== null; )
      if (((t = mt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (mt = e));
      else
        for (; mt !== null; ) {
          switch (((t = mt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (r = t),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = r.stateNode));
                try {
                  var ge = ir(r.type, u, r.elementType === r.type);
                  ((e = l.getSnapshotBeforeUpdate(ge, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ee) {
                  qe(r, r.return, Ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)) vf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      vf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (mt = e));
            break;
          }
          mt = t.return;
        }
    return ((ge = Np), (Np = !1), ge);
  }
  function kp(e, t, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (Qn(e, r), l & 4 && hs(5, r));
        break;
      case 1:
        if ((Qn(e, r), l & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (b) {
              qe(r, r.return, b);
            }
          else {
            var u = ir(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              qe(r, r.return, b);
            }
          }
        (l & 64 && Tp(r), l & 512 && or(r, r.return));
        break;
      case 3:
        if ((Qn(e, r), l & 64 && ((l = r.updateQueue), l !== null))) {
          if (((e = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                e = r.child.stateNode;
                break;
              case 1:
                e = r.child.stateNode;
            }
          try {
            Rp(l, e);
          } catch (b) {
            qe(r, r.return, b);
          }
        }
        break;
      case 26:
        (Qn(e, r), l & 512 && or(r, r.return));
        break;
      case 27:
      case 5:
        (Qn(e, r), t === null && l & 4 && Op(r), l & 512 && or(r, r.return));
        break;
      case 12:
        Qn(e, r);
        break;
      case 13:
        (Qn(e, r), l & 4 && Lp(e, r));
        break;
      case 22:
        if (((u = r.memoizedState !== null || Zn), !u)) {
          t = (t !== null && t.memoizedState !== null) || We;
          var f = Zn,
            y = We;
          ((Zn = u),
            (We = t) && !y ? Sa(e, r, (r.subtreeFlags & 8772) !== 0) : Qn(e, r),
            (Zn = f),
            (We = y));
        }
        l & 512 && (r.memoizedProps.mode === 'manual' ? or(r, r.return) : Ut(r, r.return));
        break;
      default:
        Qn(e, r);
    }
  }
  function zp(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), zp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && _u(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var lt = null,
    Bt = !1;
  function Gn(e, t, r) {
    for (r = r.child; r !== null; ) (jp(e, t, r), (r = r.sibling));
  }
  function jp(e, t, r) {
    if (zt && typeof zt.onCommitFiberUnmount == 'function')
      try {
        zt.onCommitFiberUnmount(Li, r);
      } catch {}
    switch (r.tag) {
      case 26:
        (We || Ut(r, t),
          Gn(e, t, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r)));
        break;
      case 27:
        We || Ut(r, t);
        var l = lt,
          u = Bt;
        for (lt = r.stateNode, Gn(e, t, r), r = r.stateNode, t = r.attributes; t.length; )
          r.removeAttributeNode(t[0]);
        (_u(r), (lt = l), (Bt = u));
        break;
      case 5:
        We || Ut(r, t);
      case 6:
        u = lt;
        var f = Bt;
        if (((lt = null), Gn(e, t, r), (lt = u), (Bt = f), lt !== null))
          if (Bt)
            try {
              ((e = lt),
                (l = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(l) : e.removeChild(l));
            } catch (y) {
              qe(r, t, y);
            }
          else
            try {
              lt.removeChild(r.stateNode);
            } catch (y) {
              qe(r, t, y);
            }
        break;
      case 18:
        lt !== null &&
          (Bt
            ? ((t = lt),
              (r = r.stateNode),
              t.nodeType === 8 ? pf(t.parentNode, r) : t.nodeType === 1 && pf(t, r),
              Ds(t))
            : pf(lt, r.stateNode));
        break;
      case 4:
        ((l = lt),
          (u = Bt),
          (lt = r.stateNode.containerInfo),
          (Bt = !0),
          Gn(e, t, r),
          (lt = l),
          (Bt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (We || ba(2, r, t), We || ba(4, r, t), Gn(e, t, r));
        break;
      case 1:
        (We ||
          (Ut(r, t), (l = r.stateNode), typeof l.componentWillUnmount == 'function' && Cp(r, t, l)),
          Gn(e, t, r));
        break;
      case 21:
        Gn(e, t, r);
        break;
      case 22:
        (We || Ut(r, t), (We = (l = We) || r.memoizedState !== null), Gn(e, t, r), (We = l));
        break;
      default:
        Gn(e, t, r);
    }
  }
  function Lp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ds(e);
      } catch (r) {
        qe(t, t.return, r);
      }
  }
  function NS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Dp()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Dp()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Uc(e, t) {
    var r = NS(e);
    t.forEach(function (l) {
      var u = QS.bind(null, e, l);
      r.has(l) || (r.add(l), l.then(u, u));
    });
  }
  function Wt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l],
          f = e,
          y = t,
          b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
            case 5:
              ((lt = b.stateNode), (Bt = !1));
              break e;
            case 3:
              ((lt = b.stateNode.containerInfo), (Bt = !0));
              break e;
            case 4:
              ((lt = b.stateNode.containerInfo), (Bt = !0));
              break e;
          }
          b = b.return;
        }
        if (lt === null) throw Error(s(160));
        (jp(f, y, u),
          (lt = null),
          (Bt = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (Up(t, e), (t = t.sibling));
  }
  var un = null;
  function Up(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Wt(t, e), Jt(e), l & 4 && (ba(3, e, e.return), hs(3, e), ba(5, e, e.return)));
        break;
      case 1:
        (Wt(t, e),
          Jt(e),
          l & 512 && (We || r === null || Ut(r, r.return)),
          l & 64 &&
            Zn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? l : r.concat(l))))));
        break;
      case 26:
        var u = un;
        if ((Wt(t, e), Jt(e), l & 512 && (We || r === null || Ut(r, r.return)), l & 4)) {
          var f = r !== null ? r.memoizedState : null;
          if (((l = e.memoizedState), r === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type), (r = e.memoizedProps), (u = u.ownerDocument || u));
                  t: switch (l) {
                    case 'title':
                      ((f = u.getElementsByTagName('title')[0]),
                        (!f ||
                          f[Hi] ||
                          f[bt] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = u.createElement(l)),
                          u.head.insertBefore(f, u.querySelector('head > title'))),
                        gt(f, l, r),
                        (f[bt] = e),
                        dt(f),
                        (l = f));
                      break e;
                    case 'link':
                      var y = Ov('link', 'href', u).get(l + (r.href || ''));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((f = y[b]),
                            f.getAttribute('href') === (r.href == null ? null : r.href) &&
                              f.getAttribute('rel') === (r.rel == null ? null : r.rel) &&
                              f.getAttribute('title') === (r.title == null ? null : r.title) &&
                              f.getAttribute('crossorigin') ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(l)), gt(f, l, r), u.head.appendChild(f));
                      break;
                    case 'meta':
                      if ((y = Ov('meta', 'content', u).get(l + (r.content || '')))) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((f = y[b]),
                            f.getAttribute('content') ===
                              (r.content == null ? null : '' + r.content) &&
                              f.getAttribute('name') === (r.name == null ? null : r.name) &&
                              f.getAttribute('property') ===
                                (r.property == null ? null : r.property) &&
                              f.getAttribute('http-equiv') ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute('charset') === (r.charSet == null ? null : r.charSet))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(l)), gt(f, l, r), u.head.appendChild(f));
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  ((f[bt] = e), dt(f), (l = f));
                }
                e.stateNode = l;
              } else Av(u, e.type, e.stateNode);
            else e.stateNode = Cv(u, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? r.stateNode !== null && ((r = r.stateNode), r.parentNode.removeChild(r))
                  : f.count--,
                l === null ? Av(u, e.type, e.stateNode) : Cv(u, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Ap(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          ((u = e.stateNode), (f = e.memoizedProps));
          try {
            for (var E = u.firstChild; E; ) {
              var k = E.nextSibling,
                F = E.nodeName;
              (E[Hi] ||
                F === 'HEAD' ||
                F === 'BODY' ||
                F === 'SCRIPT' ||
                F === 'STYLE' ||
                (F === 'LINK' && E.rel.toLowerCase() === 'stylesheet') ||
                u.removeChild(E),
                (E = k));
            }
            for (var W = e.type, U = u.attributes; U.length; ) u.removeAttributeNode(U[0]);
            (gt(u, W, f), (u[bt] = e), (u[Ot] = f));
          } catch (ge) {
            qe(e, e.return, ge);
          }
        }
      case 5:
        if ((Wt(t, e), Jt(e), l & 512 && (We || r === null || Ut(r, r.return)), e.flags & 32)) {
          u = e.stateNode;
          try {
            Mr(u, '');
          } catch (ge) {
            qe(e, e.return, ge);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Ap(e, u, r !== null ? r.memoizedProps : u)),
          l & 1024 && (Lc = !0));
        break;
      case 6:
        if ((Wt(t, e), Jt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.memoizedProps), (r = e.stateNode));
          try {
            r.nodeValue = l;
          } catch (ge) {
            qe(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (
          ((ho = null),
          (u = un),
          (un = co(t.containerInfo)),
          Wt(t, e),
          (un = u),
          Jt(e),
          l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Ds(t.containerInfo);
          } catch (ge) {
            qe(e, e.return, ge);
          }
        Lc && ((Lc = !1), Bp(e));
        break;
      case 4:
        ((l = un), (un = co(e.stateNode.containerInfo)), Wt(t, e), Jt(e), (un = l));
        break;
      case 12:
        (Wt(t, e), Jt(e));
        break;
      case 13:
        (Wt(t, e),
          Jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) &&
            (Yc = kt()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Uc(e, l))));
        break;
      case 22:
        if (
          (l & 512 && (We || r === null || Ut(r, r.return)),
          (E = e.memoizedState !== null),
          (k = r !== null && r.memoizedState !== null),
          (F = Zn),
          (W = We),
          (Zn = F || E),
          (We = W || k),
          Wt(t, e),
          (We = W),
          (Zn = F),
          Jt(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = E ? t._visibility & -2 : t._visibility | 1),
            E && ((t = Zn || We), r === null || k || t || Fr(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (r === null) {
                k = r = t;
                try {
                  if (((u = k.stateNode), E))
                    ((f = u.style),
                      typeof f.setProperty == 'function'
                        ? f.setProperty('display', 'none', 'important')
                        : (f.display = 'none'));
                  else {
                    ((y = k.stateNode), (b = k.memoizedProps.style));
                    var Q = b != null && b.hasOwnProperty('display') ? b.display : null;
                    y.style.display = Q == null || typeof Q == 'boolean' ? '' : ('' + Q).trim();
                  }
                } catch (ge) {
                  qe(k, k.return, ge);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = E ? '' : k.memoizedProps;
                } catch (ge) {
                  qe(k, k.return, ge);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (r === t && (r = null), (t = t.return));
            }
            (r === t && (r = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((r = l.retryQueue), r !== null && ((l.retryQueue = null), Uc(e, r))));
        break;
      case 19:
        (Wt(t, e),
          Jt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Uc(e, l))));
        break;
      case 21:
        break;
      default:
        (Wt(t, e), Jt(e));
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var r = e.return; r !== null; ) {
              if (Mp(r)) {
                var l = r;
                break e;
              }
              r = r.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var u = l.stateNode,
                f = zc(e);
              Kl(e, f, u);
              break;
            case 5:
              var y = l.stateNode;
              l.flags & 32 && (Mr(y, ''), (l.flags &= -33));
              var b = zc(e);
              Kl(e, b, y);
              break;
            case 3:
            case 4:
              var E = l.stateNode.containerInfo,
                k = zc(e);
              jc(e, k, E);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (F) {
        qe(e, e.return, F);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Bp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (kp(e, t.alternate, t), (t = t.sibling));
  }
  function Fr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ba(4, t, t.return), Fr(t));
          break;
        case 1:
          Ut(t, t.return);
          var r = t.stateNode;
          (typeof r.componentWillUnmount == 'function' && Cp(t, t.return, r), Fr(t));
          break;
        case 26:
        case 27:
        case 5:
          (Ut(t, t.return), Fr(t));
          break;
        case 22:
          (Ut(t, t.return), t.memoizedState === null && Fr(t));
          break;
        default:
          Fr(t);
      }
      e = e.sibling;
    }
  }
  function Sa(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        u = e,
        f = t,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Sa(u, f, r), hs(4, f));
          break;
        case 1:
          if ((Sa(u, f, r), (l = f), (u = l.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount();
            } catch (k) {
              qe(l, l.return, k);
            }
          if (((l = f), (u = l.updateQueue), u !== null)) {
            var b = l.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++) Ep(E[u], b);
            } catch (k) {
              qe(l, l.return, k);
            }
          }
          (r && y & 64 && Tp(f), or(f, f.return));
          break;
        case 26:
        case 27:
        case 5:
          (Sa(u, f, r), r && l === null && y & 4 && Op(f), or(f, f.return));
          break;
        case 12:
          Sa(u, f, r);
          break;
        case 13:
          (Sa(u, f, r), r && y & 4 && Lp(u, f));
          break;
        case 22:
          (f.memoizedState === null && Sa(u, f, r), or(f, f.return));
          break;
        default:
          Sa(u, f, r);
      }
      t = t.sibling;
    }
  }
  function Bc(e, t) {
    var r = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && as(r)));
  }
  function Hc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && as(e)));
  }
  function xa(e, t, r, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Hp(e, t, r, l), (t = t.sibling));
  }
  function Hp(e, t, r, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xa(e, t, r, l), u & 2048 && hs(9, t));
        break;
      case 3:
        (xa(e, t, r, l),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && as(e))));
        break;
      case 12:
        if (u & 2048) {
          (xa(e, t, r, l), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              y = f.id,
              b = f.onPostCommit;
            typeof b == 'function' &&
              b(y, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (E) {
            qe(t, t.return, E);
          }
        } else xa(e, t, r, l);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          t.memoizedState !== null
            ? f._visibility & 4
              ? xa(e, t, r, l)
              : ms(e, t)
            : f._visibility & 4
              ? xa(e, t, r, l)
              : ((f._visibility |= 4), Xr(e, t, r, l, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Bc(t.alternate, t));
        break;
      case 24:
        (xa(e, t, r, l), u & 2048 && Hc(t.alternate, t));
        break;
      default:
        xa(e, t, r, l);
    }
  }
  function Xr(e, t, r, l, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        y = t,
        b = r,
        E = l,
        k = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Xr(f, y, b, E, u), hs(8, y));
          break;
        case 23:
          break;
        case 22:
          var F = y.stateNode;
          (y.memoizedState !== null
            ? F._visibility & 4
              ? Xr(f, y, b, E, u)
              : ms(f, y)
            : ((F._visibility |= 4), Xr(f, y, b, E, u)),
            u && k & 2048 && Bc(y.alternate, y));
          break;
        case 24:
          (Xr(f, y, b, E, u), u && k & 2048 && Hc(y.alternate, y));
          break;
        default:
          Xr(f, y, b, E, u);
      }
      t = t.sibling;
    }
  }
  function ms(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (ms(r, l), u & 2048 && Bc(l.alternate, l));
            break;
          case 24:
            (ms(r, l), u & 2048 && Hc(l.alternate, l));
            break;
          default:
            ms(r, l);
        }
        t = t.sibling;
      }
  }
  var ps = 8192;
  function Kr(e) {
    if (e.subtreeFlags & ps) for (e = e.child; e !== null; ) (Pp(e), (e = e.sibling));
  }
  function Pp(e) {
    switch (e.tag) {
      case 26:
        (Kr(e),
          e.flags & ps && e.memoizedState !== null && Sx(un, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Kr(e);
        break;
      case 3:
      case 4:
        var t = un;
        ((un = co(e.stateNode.containerInfo)), Kr(e), (un = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ps), (ps = 16777216), Kr(e), (ps = t))
            : Kr(e));
        break;
      default:
        Kr(e);
    }
  }
  function qp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function vs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          ((mt = l), Zp(l, e));
        }
      qp(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Vp(e), (e = e.sibling));
  }
  function Vp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (vs(e), e.flags & 2048 && ba(9, e, e.return));
        break;
      case 3:
        vs(e);
        break;
      case 12:
        vs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), $l(e))
          : vs(e);
        break;
      default:
        vs(e);
    }
  }
  function $l(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          ((mt = l), Zp(l, e));
        }
      qp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ba(8, t, t.return), $l(t));
          break;
        case 22:
          ((r = t.stateNode), r._visibility & 4 && ((r._visibility &= -5), $l(t)));
          break;
        default:
          $l(t);
      }
      e = e.sibling;
    }
  }
  function Zp(e, t) {
    for (; mt !== null; ) {
      var r = mt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          as(r.memoizedState.cache);
      }
      if (((l = r.child), l !== null)) ((l.return = r), (mt = l));
      else
        e: for (r = e; mt !== null; ) {
          l = mt;
          var u = l.sibling,
            f = l.return;
          if ((zp(l), l === r)) {
            mt = null;
            break e;
          }
          if (u !== null) {
            ((u.return = f), (mt = u));
            break e;
          }
          mt = f;
        }
    }
  }
  function kS(e, t, r, l) {
    ((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function It(e, t, r, l) {
    return new kS(e, t, r, l);
  }
  function Pc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function _a(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = It(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 31457280),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function Gp(e, t) {
    e.flags &= 31457282;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (t = r.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wl(e, t, r, l, u, f) {
    var y = 0;
    if (((l = e), typeof e == 'function')) Pc(e) && (y = 1);
    else if (typeof e == 'string')
      y = gx(e, r, Ze.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case p:
          return ur(r.children, u, f, t);
        case m:
          ((y = 8), (u |= 24));
          break;
        case v:
          return ((e = It(12, r, t, u | 2)), (e.elementType = v), (e.lanes = f), e);
        case x:
          return ((e = It(13, r, t, u)), (e.elementType = x), (e.lanes = f), e);
        case D:
          return ((e = It(19, r, t, u)), (e.elementType = D), (e.lanes = f), e);
        case H:
          return Qp(r, u, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case g:
              case w:
                y = 10;
                break e;
              case S:
                y = 9;
                break e;
              case R:
                y = 11;
                break e;
              case O:
                y = 14;
                break e;
              case L:
                ((y = 16), (l = null));
                break e;
            }
          ((y = 29), (r = Error(s(130, e === null ? 'null' : typeof e, ''))), (l = null));
      }
    return ((t = It(y, r, t, u)), (t.elementType = e), (t.type = l), (t.lanes = f), t);
  }
  function ur(e, t, r, l) {
    return ((e = It(7, e, l, t)), (e.lanes = r), e);
  }
  function Qp(e, t, r, l) {
    ((e = It(22, e, l, t)), (e.elementType = H), (e.lanes = r));
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var f = u._current;
        if (f === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) === 0) {
          var y = ca(f, 2);
          y !== null && ((u._pendingVisibility |= 2), Tt(y, f, 2));
        }
      },
      attach: function () {
        var f = u._current;
        if (f === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var y = ca(f, 2);
          y !== null && ((u._pendingVisibility &= -3), Tt(y, f, 2));
        }
      },
    };
    return ((e.stateNode = u), e);
  }
  function qc(e, t, r) {
    return ((e = It(6, e, null, t)), (e.lanes = r), e);
  }
  function Vc(e, t, r) {
    return (
      (t = It(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Yn(e) {
    e.flags |= 4;
  }
  function Yp(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Mv(t))) {
      if (
        ((t = $t.current),
        t !== null &&
          ((ze & 4194176) === ze
            ? xn !== null
            : ((ze & 62914560) !== ze && (ze & 536870912) === 0) || t !== xn))
      )
        throw ((es = Fu), um);
      e.flags |= 8192;
    }
  }
  function Jl(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? ch() : 536870912), (e.lanes |= t), (Wr |= t)));
  }
  function ys(e, t) {
    if (!Ue)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var l = null; r !== null; ) (r.alternate !== null && (l = r), (r = r.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((r |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 31457280),
          (l |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((r |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = r), t);
  }
  function zS(e, t, r) {
    var l = t.pendingProps;
    switch ((Qu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Xe(t), null);
      case 1:
        return (Xe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Vn(ut),
          et(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            ($i(t)
              ? Yn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), on !== null && ($c(on), (on = null)))),
          Xe(t),
          null
        );
      case 26:
        return (
          (r = t.memoizedState),
          e === null
            ? (Yn(t), r !== null ? (Xe(t), Yp(t, r)) : (Xe(t), (t.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (Yn(t), Xe(t), Yp(t, r))
                : (Xe(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Yn(t), Xe(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (sn(t), (r = rt.current));
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Yn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (Xe(t), null);
          }
          ((e = Ze.current), $i(t) ? lm(t) : ((e = _v(u, l, r)), (t.stateNode = e), Yn(t)));
        }
        return (Xe(t), null);
      case 5:
        if ((sn(t), (r = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Yn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (Xe(t), null);
          }
          if (((e = Ze.current), $i(t))) lm(t);
          else {
            switch (((u = uo(rt.current)), e)) {
              case 1:
                e = u.createElementNS('http://www.w3.org/2000/svg', r);
                break;
              case 2:
                e = u.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                break;
              default:
                switch (r) {
                  case 'svg':
                    e = u.createElementNS('http://www.w3.org/2000/svg', r);
                    break;
                  case 'math':
                    e = u.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                    break;
                  case 'script':
                    ((e = u.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      typeof l.is == 'string'
                        ? u.createElement('select', { is: l.is })
                        : u.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? u.createElement(r, { is: l.is })
                        : u.createElement(r);
                }
            }
            ((e[bt] = t), (e[Ot] = l));
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            t.stateNode = e;
            e: switch ((gt(e, r, l), r)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Yn(t);
          }
        }
        return (Xe(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Yn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(s(166));
          if (((e = rt.current), $i(t))) {
            if (((e = t.stateNode), (r = t.memoizedProps), (l = null), (u = Rt), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((e[bt] = t),
              (e = !!(
                e.nodeValue === r ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                vv(e.nodeValue, r)
              )),
              e || Ia(t));
          } else ((e = uo(e).createTextNode(l)), (e[bt] = t), (t.stateNode = e));
        }
        return (Xe(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = $i(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[bt] = t;
            } else (Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Xe(t), (u = !1));
          } else (on !== null && ($c(on), (on = null)), (u = !0));
          if (!u) return t.flags & 256 ? (Bn(t), t) : (Bn(t), null);
        }
        if ((Bn(t), (t.flags & 128) !== 0)) return ((t.lanes = r), t);
        if (((r = l !== null), (e = e !== null && e.memoizedState !== null), r)) {
          ((l = t.child),
            (u = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (u = l.alternate.memoizedState.cachePool.pool));
          var f = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (f = l.memoizedState.cachePool.pool),
            f !== u && (l.flags |= 2048));
        }
        return (r !== e && r && (t.child.flags |= 8192), Jl(t, t.updateQueue), Xe(t), null);
      case 4:
        return (et(), e === null && of(t.stateNode.containerInfo), Xe(t), null);
      case 10:
        return (Vn(t.type), Xe(t), null);
      case 19:
        if ((Se(ot), (u = t.memoizedState), u === null)) return (Xe(t), null);
        if (((l = (t.flags & 128) !== 0), (f = u.rendering), f === null))
          if (l) ys(u, !1);
          else {
            if (Je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = jl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      ys(u, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Jl(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;
                  )
                    (Gp(r, e), (r = r.sibling));
                  return (Oe(ot, (ot.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              kt() > Il &&
              ((t.flags |= 128), (l = !0), ys(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = jl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Jl(t, e),
                ys(u, !0),
                u.tail === null && u.tailMode === 'hidden' && !f.alternate && !Ue)
              )
                return (Xe(t), null);
            } else
              2 * kt() - u.renderingStartTime > Il &&
                r !== 536870912 &&
                ((t.flags |= 128), (l = !0), ys(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = u.last), e !== null ? (e.sibling = f) : (t.child = f), (u.last = f));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = kt()),
            (t.sibling = null),
            (e = ot.current),
            Oe(ot, l ? (e & 1) | 2 : e & 1),
            t)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          Bn(t),
          Ku(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (r & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          (r = t.updateQueue),
          r !== null && Jl(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== r && (t.flags |= 2048),
          e !== null && Se(tr),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          Vn(ut),
          Xe(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function jS(e, t) {
    switch ((Qu(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Vn(ut),
          et(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (sn(t), null);
      case 13:
        if ((Bn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Wi();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Se(ot), null);
      case 4:
        return (et(), null);
      case 10:
        return (Vn(t.type), null);
      case 22:
      case 23:
        return (
          Bn(t),
          Ku(),
          e !== null && Se(tr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Vn(ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fp(e, t) {
    switch ((Qu(t), t.tag)) {
      case 3:
        (Vn(ut), et());
        break;
      case 26:
      case 27:
      case 5:
        sn(t);
        break;
      case 4:
        et();
        break;
      case 13:
        Bn(t);
        break;
      case 19:
        Se(ot);
        break;
      case 10:
        Vn(t.type);
        break;
      case 22:
      case 23:
        (Bn(t), Ku(), e !== null && Se(tr));
        break;
      case 24:
        Vn(ut);
    }
  }
  var LS = {
      getCacheForType: function (e) {
        var t = St(ut),
          r = t.data.get(e);
        return (r === void 0 && ((r = e()), t.data.set(e, r)), r);
      },
    },
    US = typeof WeakMap == 'function' ? WeakMap : Map,
    Ke = 0,
    Ge = null,
    Ne = null,
    ze = 0,
    Qe = 0,
    Ht = null,
    Fn = !1,
    $r = !1,
    Zc = !1,
    Xn = 0,
    Je = 0,
    wa = 0,
    cr = 0,
    Gc = 0,
    en = 0,
    Wr = 0,
    gs = null,
    wn = null,
    Qc = !1,
    Yc = 0,
    Il = 1 / 0,
    eo = null,
    Ea = null,
    to = !1,
    fr = null,
    bs = 0,
    Fc = 0,
    Xc = null,
    Ss = 0,
    Kc = null;
  function Pt() {
    if ((Ke & 2) !== 0 && ze !== 0) return ze & -ze;
    if (A.T !== null) {
      var e = Vr;
      return e !== 0 ? e : af();
    }
    return mh();
  }
  function Xp() {
    en === 0 && (en = (ze & 536870912) === 0 || Ue ? uh() : 536870912);
    var e = $t.current;
    return (e !== null && (e.flags |= 32), en);
  }
  function Tt(e, t, r) {
    (((e === Ge && Qe === 2) || e.cancelPendingCommit !== null) && (Jr(e, 0), Kn(e, ze, en, !1)),
      Bi(e, r),
      ((Ke & 2) === 0 || e !== Ge) &&
        (e === Ge && ((Ke & 2) === 0 && (cr |= r), Je === 4 && Kn(e, ze, en, !1)), En(e)));
  }
  function Kp(e, t, r) {
    if ((Ke & 6) !== 0) throw Error(s(327));
    var l = (!r && (t & 60) === 0 && (t & e.expiredLanes) === 0) || Ui(e, t),
      u = l ? PS(e, t) : Ic(e, t, !0),
      f = l;
    do {
      if (u === 0) {
        $r && !l && Kn(e, t, 0, !1);
        break;
      } else if (u === 6) Kn(e, t, 0, !Fn);
      else {
        if (((r = e.current.alternate), f && !BS(r))) {
          ((u = Ic(e, t, !1)), (f = !1));
          continue;
        }
        if (u === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var y = 0;
          else
            ((y = e.pendingLanes & -536870913), (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            t = y;
            e: {
              var b = e;
              u = gs;
              var E = b.current.memoizedState.isDehydrated;
              if ((E && (Jr(b, y).flags |= 256), (y = Ic(b, y, !1)), y !== 2)) {
                if (Zc && !E) {
                  ((b.errorRecoveryDisabledLanes |= f), (cr |= f), (u = 4));
                  break e;
                }
                ((f = wn), (wn = u), f !== null && $c(f));
              }
              u = y;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Jr(e, 0), Kn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                Kn(l, t, en, !Fn);
                break e;
              }
              break;
            case 2:
              wn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((l.finishedWork = r),
            (l.finishedLanes = t),
            (t & 62914560) === t && ((f = Yc + 300 - kt()), 10 < f))
          ) {
            if ((Kn(l, t, en, !Fn), ml(l, 0) !== 0)) break e;
            l.timeoutHandle = bv($p.bind(null, l, r, wn, eo, Qc, t, en, cr, Wr, Fn, 2, -0, 0), f);
            break e;
          }
          $p(l, r, wn, eo, Qc, t, en, cr, Wr, Fn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    En(e);
  }
  function $c(e) {
    wn === null ? (wn = e) : wn.push.apply(wn, e);
  }
  function $p(e, t, r, l, u, f, y, b, E, k, F, W, U) {
    var Q = t.subtreeFlags;
    if (
      (Q & 8192 || (Q & 16785408) === 16785408) &&
      ((Ts = { stylesheets: null, count: 0, unsuspend: bx }), Pp(t), (t = xx()), t !== null)
    ) {
      ((e.cancelPendingCommit = t(av.bind(null, e, r, l, u, y, b, E, 1, W, U))), Kn(e, f, y, !k));
      return;
    }
    av(e, r, l, u, y, b, E, F, W, U);
  }
  function BS(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var l = 0; l < r.length; l++) {
          var u = r[l],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!Lt(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) ((r.return = t), (t = r));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Kn(e, t, r, l) {
    ((t &= ~Gc),
      (t &= ~cr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var f = 31 - jt(u),
        y = 1 << f;
      ((l[f] = -1), (u &= ~y));
    }
    r !== 0 && fh(e, r, t);
  }
  function no() {
    return (Ke & 6) === 0 ? (xs(0), !1) : !0;
  }
  function Wc() {
    if (Ne !== null) {
      if (Qe === 0) var e = Ne.return;
      else ((e = Ne), (qn = sr = null), ac(e), (Pr = null), (ts = 0), (e = Ne));
      for (; e !== null; ) (Fp(e.alternate, e), (e = e.return));
      Ne = null;
    }
  }
  function Jr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    (r !== -1 && ((e.timeoutHandle = -1), ax(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      Wc(),
      (Ge = e),
      (Ne = r = _a(e.current, null)),
      (ze = t),
      (Qe = 0),
      (Ht = null),
      (Fn = !1),
      ($r = Ui(e, t)),
      (Zc = !1),
      (Wr = en = Gc = cr = wa = Je = 0),
      (wn = gs = null),
      (Qc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - jt(l),
          f = 1 << u;
        ((t |= e[u]), (l &= ~f));
      }
    return ((Xn = t), Tl(), r);
  }
  function Wp(e, t) {
    ((Ae = null),
      (A.H = _n),
      t === Ii
        ? ((t = dm()), (Qe = 3))
        : t === um
          ? ((t = dm()), (Qe = 4))
          : (Qe =
              t === cp
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Ht = t),
      Ne === null && ((Je = 1), Yl(e, Ft(t, e.current))));
  }
  function Jp() {
    var e = A.H;
    return ((A.H = _n), e === null ? _n : e);
  }
  function Ip() {
    var e = A.A;
    return ((A.A = LS), e);
  }
  function Jc() {
    ((Je = 4),
      Fn || ((ze & 4194176) !== ze && $t.current !== null) || ($r = !0),
      ((wa & 134217727) === 0 && (cr & 134217727) === 0) || Ge === null || Kn(Ge, ze, en, !1));
  }
  function Ic(e, t, r) {
    var l = Ke;
    Ke |= 2;
    var u = Jp(),
      f = Ip();
    ((Ge !== e || ze !== t) && ((eo = null), Jr(e, t)), (t = !1));
    var y = Je;
    e: do
      try {
        if (Qe !== 0 && Ne !== null) {
          var b = Ne,
            E = Ht;
          switch (Qe) {
            case 8:
              (Wc(), (y = 6));
              break e;
            case 3:
            case 2:
            case 6:
              $t.current === null && (t = !0);
              var k = Qe;
              if (((Qe = 0), (Ht = null), Ir(e, b, E, k), r && $r)) {
                y = 0;
                break e;
              }
              break;
            default:
              ((k = Qe), (Qe = 0), (Ht = null), Ir(e, b, E, k));
          }
        }
        (HS(), (y = Je));
        break;
      } catch (F) {
        Wp(e, F);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (qn = sr = null),
      (Ke = l),
      (A.H = u),
      (A.A = f),
      Ne === null && ((Ge = null), (ze = 0), Tl()),
      y
    );
  }
  function HS() {
    for (; Ne !== null; ) ev(Ne);
  }
  function PS(e, t) {
    var r = Ke;
    Ke |= 2;
    var l = Jp(),
      u = Ip();
    Ge !== e || ze !== t ? ((eo = null), (Il = kt() + 500), Jr(e, t)) : ($r = Ui(e, t));
    e: do
      try {
        if (Qe !== 0 && Ne !== null) {
          t = Ne;
          var f = Ht;
          t: switch (Qe) {
            case 1:
              ((Qe = 0), (Ht = null), Ir(e, t, f, 1));
              break;
            case 2:
              if (cm(f)) {
                ((Qe = 0), (Ht = null), tv(t));
                break;
              }
              ((t = function () {
                (Qe === 2 && Ge === e && (Qe = 7), En(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              cm(f) ? ((Qe = 0), (Ht = null), tv(t)) : ((Qe = 0), (Ht = null), Ir(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Ne.tag) {
                case 26:
                  y = Ne.memoizedState;
                case 5:
                case 27:
                  var b = Ne;
                  if (!y || Mv(y)) {
                    ((Qe = 0), (Ht = null));
                    var E = b.sibling;
                    if (E !== null) Ne = E;
                    else {
                      var k = b.return;
                      k !== null ? ((Ne = k), ao(k)) : (Ne = null);
                    }
                    break t;
                  }
              }
              ((Qe = 0), (Ht = null), Ir(e, t, f, 5));
              break;
            case 6:
              ((Qe = 0), (Ht = null), Ir(e, t, f, 6));
              break;
            case 8:
              (Wc(), (Je = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        qS();
        break;
      } catch (F) {
        Wp(e, F);
      }
    while (!0);
    return (
      (qn = sr = null),
      (A.H = l),
      (A.A = u),
      (Ke = r),
      Ne !== null ? 0 : ((Ge = null), (ze = 0), Tl(), Je)
    );
  }
  function qS() {
    for (; Ne !== null && !Ye(); ) ev(Ne);
  }
  function ev(e) {
    var t = _p(e.alternate, e, Xn);
    ((e.memoizedProps = e.pendingProps), t === null ? ao(e) : (Ne = t));
  }
  function tv(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vp(r, t, t.pendingProps, t.type, void 0, ze);
        break;
      case 11:
        t = vp(r, t, t.pendingProps, t.type.render, t.ref, ze);
        break;
      case 5:
        ac(t);
      default:
        (Fp(r, t), (t = Ne = Gp(t, Xn)), (t = _p(r, t, Xn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ao(e) : (Ne = t));
  }
  function Ir(e, t, r, l) {
    ((qn = sr = null), ac(t), (Pr = null), (ts = 0));
    var u = t.return;
    try {
      if (AS(e, u, t, r, ze)) {
        ((Je = 1), Yl(e, Ft(r, e.current)), (Ne = null));
        return;
      }
    } catch (f) {
      if (u !== null) throw ((Ne = u), f);
      ((Je = 1), Yl(e, Ft(r, e.current)), (Ne = null));
      return;
    }
    t.flags & 32768
      ? (Ue || l === 1
          ? (e = !0)
          : $r || (ze & 536870912) !== 0
            ? (e = !1)
            : ((Fn = e = !0),
              (l === 2 || l === 3 || l === 6) &&
                ((l = $t.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        nv(t, e))
      : ao(t);
  }
  function ao(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(t, Fn);
        return;
      }
      e = t.return;
      var r = zS(t.alternate, t, Xn);
      if (r !== null) {
        Ne = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function nv(e, t) {
    do {
      var r = jS(e.alternate, e);
      if (r !== null) {
        ((r.flags &= 32767), (Ne = r));
        return;
      }
      if (
        ((r = e.return),
        r !== null && ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = r;
    } while (e !== null);
    ((Je = 6), (Ne = null));
  }
  function av(e, t, r, l, u, f, y, b, E, k) {
    var F = A.T,
      W = $.p;
    try {
      (($.p = 2), (A.T = null), VS(e, t, r, l, W, u, f, y, b, E, k));
    } finally {
      ((A.T = F), ($.p = W));
    }
  }
  function VS(e, t, r, l, u, f, y, b) {
    do ei();
    while (fr !== null);
    if ((Ke & 6) !== 0) throw Error(s(327));
    var E = e.finishedWork;
    if (((l = e.finishedLanes), E === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), E === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null));
    var k = E.lanes | E.childLanes;
    if (
      ((k |= Vu),
      Sb(e, l, k, f, y, b),
      e === Ge && ((Ne = Ge = null), (ze = 0)),
      ((E.subtreeFlags & 10256) === 0 && (E.flags & 10256) === 0) ||
        to ||
        ((to = !0),
        (Fc = k),
        (Xc = r),
        YS(fl, function () {
          return (ei(), null);
        })),
      (r = (E.flags & 15990) !== 0),
      (E.subtreeFlags & 15990) !== 0 || r
        ? ((r = A.T),
          (A.T = null),
          (f = $.p),
          ($.p = 2),
          (y = Ke),
          (Ke |= 4),
          DS(e, E),
          Up(E, e),
          dS(df, e.containerInfo),
          (vo = !!ff),
          (df = ff = null),
          (e.current = E),
          kp(e, E.alternate, E),
          kn(),
          (Ke = y),
          ($.p = f),
          (A.T = r))
        : (e.current = E),
      to ? ((to = !1), (fr = e), (bs = l)) : rv(e, k),
      (k = e.pendingLanes),
      k === 0 && (Ea = null),
      pb(E.stateNode),
      En(e),
      t !== null)
    )
      for (u = e.onRecoverableError, E = 0; E < t.length; E++)
        ((k = t[E]), u(k.value, { componentStack: k.stack }));
    return (
      (bs & 3) !== 0 && ei(),
      (k = e.pendingLanes),
      (l & 4194218) !== 0 && (k & 42) !== 0 ? (e === Kc ? Ss++ : ((Ss = 0), (Kc = e))) : (Ss = 0),
      xs(0),
      null
    );
  }
  function rv(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), as(t)));
  }
  function ei() {
    if (fr !== null) {
      var e = fr,
        t = Fc;
      Fc = 0;
      var r = hh(bs),
        l = A.T,
        u = $.p;
      try {
        if ((($.p = 32 > r ? 32 : r), (A.T = null), fr === null)) var f = !1;
        else {
          ((r = Xc), (Xc = null));
          var y = fr,
            b = bs;
          if (((fr = null), (bs = 0), (Ke & 6) !== 0)) throw Error(s(331));
          var E = Ke;
          if (
            ((Ke |= 4),
            Vp(y.current),
            Hp(y, y.current, b, r),
            (Ke = E),
            xs(0, !1),
            zt && typeof zt.onPostCommitFiberRoot == 'function')
          )
            try {
              zt.onPostCommitFiberRoot(Li, y);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (($.p = u), (A.T = l), rv(e, t));
      }
    }
    return !1;
  }
  function iv(e, t, r) {
    ((t = Ft(r, t)),
      (t = yc(e.stateNode, t, 2)),
      (e = ga(e, t, 2)),
      e !== null && (Bi(e, 2), En(e)));
  }
  function qe(e, t, r) {
    if (e.tag === 3) iv(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          iv(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Ea === null || !Ea.has(l)))
          ) {
            ((e = Ft(r, e)),
              (r = op(2)),
              (l = ga(t, r, 2)),
              l !== null && (up(r, l, t, e), Bi(l, 2), En(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ef(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new US();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(r) || ((Zc = !0), u.add(r), (e = ZS.bind(null, e, t, r)), t.then(e, e));
  }
  function ZS(e, t, r) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      Ge === e &&
        (ze & r) === r &&
        (Je === 4 || (Je === 3 && (ze & 62914560) === ze && 300 > kt() - Yc)
          ? (Ke & 2) === 0 && Jr(e, 0)
          : (Gc |= r),
        Wr === ze && (Wr = 0)),
      En(e));
  }
  function sv(e, t) {
    (t === 0 && (t = ch()), (e = ca(e, t)), e !== null && (Bi(e, t), En(e)));
  }
  function GS(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), sv(e, r));
  }
  function QS(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(t), sv(e, r));
  }
  function YS(e, t) {
    return sa(e, t);
  }
  var ro = null,
    ti = null,
    tf = !1,
    io = !1,
    nf = !1,
    dr = 0;
  function En(e) {
    (e !== ti && e.next === null && (ti === null ? (ro = ti = e) : (ti = ti.next = e)),
      (io = !0),
      tf || ((tf = !0), XS(FS)));
  }
  function xs(e, t) {
    if (!nf && io) {
      nf = !0;
      do
        for (var r = !1, l = ro; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var y = l.suspendedLanes,
                b = l.pingedLanes;
              ((f = (1 << (31 - jt(42 | e) + 1)) - 1),
                (f &= u & ~(y & ~b)),
                (f = f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((r = !0), uv(l, f));
          } else
            ((f = ze),
              (f = ml(l, l === Ge ? f : 0)),
              (f & 3) === 0 || Ui(l, f) || ((r = !0), uv(l, f)));
          l = l.next;
        }
      while (r);
      nf = !1;
    }
  }
  function FS() {
    io = tf = !1;
    var e = 0;
    dr !== 0 && (nx() && (e = dr), (dr = 0));
    for (var t = kt(), r = null, l = ro; l !== null; ) {
      var u = l.next,
        f = lv(l, t);
      (f === 0
        ? ((l.next = null), r === null ? (ro = u) : (r.next = u), u === null && (ti = r))
        : ((r = l), (e !== 0 || (f & 3) !== 0) && (io = !0)),
        (l = u));
    }
    xs(e);
  }
  function lv(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var y = 31 - jt(f),
        b = 1 << y,
        E = u[y];
      (E === -1
        ? ((b & r) === 0 || (b & l) !== 0) && (u[y] = bb(b, t))
        : E <= t && (e.expiredLanes |= b),
        (f &= ~b));
    }
    if (
      ((t = Ge),
      (r = ze),
      (r = ml(e, e === t ? r : 0)),
      (l = e.callbackNode),
      r === 0 || (e === t && Qe === 2) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Le(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((r & 3) === 0 || Ui(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((l !== null && Le(l), hh(r))) {
        case 2:
        case 8:
          r = lh;
          break;
        case 32:
          r = fl;
          break;
        case 268435456:
          r = oh;
          break;
        default:
          r = fl;
      }
      return (
        (l = ov.bind(null, e)),
        (r = sa(r, l)),
        (e.callbackPriority = t),
        (e.callbackNode = r),
        t
      );
    }
    return (
      l !== null && l !== null && Le(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function ov(e, t) {
    var r = e.callbackNode;
    if (ei() && e.callbackNode !== r) return null;
    var l = ze;
    return (
      (l = ml(e, e === Ge ? l : 0)),
      l === 0
        ? null
        : (Kp(e, l, t),
          lv(e, kt()),
          e.callbackNode != null && e.callbackNode === r ? ov.bind(null, e) : null)
    );
  }
  function uv(e, t) {
    if (ei()) return null;
    Kp(e, t, !0);
  }
  function XS(e) {
    rx(function () {
      (Ke & 6) !== 0 ? sa(cl, e) : e();
    });
  }
  function af() {
    return (dr === 0 && (dr = uh()), dr);
  }
  function cv(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : bl('' + e);
  }
  function fv(e, t) {
    var r = t.ownerDocument.createElement('input');
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute('form', e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function KS(e, t, r, l, u) {
    if (t === 'submit' && r && r.stateNode === u) {
      var f = cv((u[Ot] || null).action),
        y = l.submitter;
      y &&
        ((t = (t = y[Ot] || null) ? cv(t.formAction) : y.getAttribute('formAction')),
        t !== null && ((f = t), (y = null)));
      var b = new wl('action', 'action', null, l, u);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (dr !== 0) {
                  var E = y ? fv(u, y) : new FormData(u);
                  dc(r, { pending: !0, data: E, method: u.method, action: f }, null, E);
                }
              } else
                typeof f == 'function' &&
                  (b.preventDefault(),
                  (E = y ? fv(u, y) : new FormData(u)),
                  dc(r, { pending: !0, data: E, method: u.method, action: f }, f, E));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var rf = 0; rf < am.length; rf++) {
    var sf = am[rf],
      $S = sf.toLowerCase(),
      WS = sf[0].toUpperCase() + sf.slice(1);
    ln($S, 'on' + WS);
  }
  (ln(Jh, 'onAnimationEnd'),
    ln(Ih, 'onAnimationIteration'),
    ln(em, 'onAnimationStart'),
    ln('dblclick', 'onDoubleClick'),
    ln('focusin', 'onFocus'),
    ln('focusout', 'onBlur'),
    ln(mS, 'onTransitionRun'),
    ln(pS, 'onTransitionStart'),
    ln(vS, 'onTransitionCancel'),
    ln(tm, 'onTransitionEnd'),
    Or('onMouseEnter', ['mouseout', 'mouseover']),
    Or('onMouseLeave', ['mouseout', 'mouseover']),
    Or('onPointerEnter', ['pointerout', 'pointerover']),
    Or('onPointerLeave', ['pointerout', 'pointerover']),
    Fa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Fa(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Fa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Fa(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Fa(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var _s =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    JS = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(_s)
    );
  function dv(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var b = l[y],
              E = b.instance,
              k = b.currentTarget;
            if (((b = b.listener), E !== f && u.isPropagationStopped())) break e;
            ((f = b), (u.currentTarget = k));
            try {
              f(u);
            } catch (F) {
              Ql(F);
            }
            ((u.currentTarget = null), (f = E));
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((b = l[y]),
              (E = b.instance),
              (k = b.currentTarget),
              (b = b.listener),
              E !== f && u.isPropagationStopped())
            )
              break e;
            ((f = b), (u.currentTarget = k));
            try {
              f(u);
            } catch (F) {
              Ql(F);
            }
            ((u.currentTarget = null), (f = E));
          }
      }
    }
  }
  function ke(e, t) {
    var r = t[xu];
    r === void 0 && (r = t[xu] = new Set());
    var l = e + '__bubble';
    r.has(l) || (hv(t, e, 2, !1), r.add(l));
  }
  function lf(e, t, r) {
    var l = 0;
    (t && (l |= 4), hv(r, e, l, t));
  }
  var so = '_reactListening' + Math.random().toString(36).slice(2);
  function of(e) {
    if (!e[so]) {
      ((e[so] = !0),
        vh.forEach(function (r) {
          r !== 'selectionchange' && (JS.has(r) || lf(r, !1, e), lf(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[so] || ((t[so] = !0), lf('selectionchange', !1, t));
    }
  }
  function hv(e, t, r, l) {
    switch (Lv(t)) {
      case 2:
        var u = Ex;
        break;
      case 8:
        u = Rx;
        break;
      default:
        u = xf;
    }
    ((r = u.bind(null, t, r, e)),
      (u = void 0),
      !Au || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
          ? e.addEventListener(t, r, { passive: u })
          : e.addEventListener(t, r, !1));
  }
  function uf(e, t, r, l, u) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var b = l.stateNode.containerInfo;
          if (b === u || (b.nodeType === 8 && b.parentNode === u)) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var E = y.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = y.stateNode.containerInfo),
                E === u || (E.nodeType === 8 && E.parentNode === u))
              )
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = Ya(b)), y === null)) return;
            if (((E = y.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = f = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    Oh(function () {
      var k = f,
        F = Cu(r),
        W = [];
      e: {
        var U = nm.get(e);
        if (U !== void 0) {
          var Q = wl,
            ge = e;
          switch (e) {
            case 'keypress':
              if (xl(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              Q = Qb;
              break;
            case 'focusin':
              ((ge = 'focus'), (Q = ku));
              break;
            case 'focusout':
              ((ge = 'blur'), (Q = ku));
              break;
            case 'beforeblur':
            case 'afterblur':
              Q = ku;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Q = Dh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Q = kb;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Q = Xb;
              break;
            case Jh:
            case Ih:
            case em:
              Q = Lb;
              break;
            case tm:
              Q = $b;
              break;
            case 'scroll':
            case 'scrollend':
              Q = Db;
              break;
            case 'wheel':
              Q = Jb;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Q = Bb;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Q = kh;
              break;
            case 'toggle':
            case 'beforetoggle':
              Q = eS;
          }
          var Ee = (t & 4) !== 0,
            Ie = !Ee && (e === 'scroll' || e === 'scrollend'),
            z = Ee ? (U !== null ? U + 'Capture' : null) : U;
          Ee = [];
          for (var N = k, j; N !== null; ) {
            var K = N;
            if (
              ((j = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                j === null ||
                z === null ||
                ((K = qi(N, z)), K != null && Ee.push(ws(N, K, j))),
              Ie)
            )
              break;
            N = N.return;
          }
          0 < Ee.length && ((U = new Q(U, ge, null, r, F)), W.push({ event: U, listeners: Ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === 'mouseover' || e === 'pointerover'),
            (Q = e === 'mouseout' || e === 'pointerout'),
            U && r !== Tu && (ge = r.relatedTarget || r.fromElement) && (Ya(ge) || ge[Rr]))
          )
            break e;
          if (
            (Q || U) &&
            ((U =
              F.window === F
                ? F
                : (U = F.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            Q
              ? ((ge = r.relatedTarget || r.toElement),
                (Q = k),
                (ge = ge ? Ya(ge) : null),
                ge !== null &&
                  ((Ie = B(ge)), (Ee = ge.tag), ge !== Ie || (Ee !== 5 && Ee !== 27 && Ee !== 6)) &&
                  (ge = null))
              : ((Q = null), (ge = k)),
            Q !== ge)
          ) {
            if (
              ((Ee = Dh),
              (K = 'onMouseLeave'),
              (z = 'onMouseEnter'),
              (N = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Ee = kh), (K = 'onPointerLeave'), (z = 'onPointerEnter'), (N = 'pointer')),
              (Ie = Q == null ? U : Pi(Q)),
              (j = ge == null ? U : Pi(ge)),
              (U = new Ee(K, N + 'leave', Q, r, F)),
              (U.target = Ie),
              (U.relatedTarget = j),
              (K = null),
              Ya(F) === k &&
                ((Ee = new Ee(z, N + 'enter', ge, r, F)),
                (Ee.target = j),
                (Ee.relatedTarget = Ie),
                (K = Ee)),
              (Ie = K),
              Q && ge)
            )
              t: {
                for (Ee = Q, z = ge, N = 0, j = Ee; j; j = ni(j)) N++;
                for (j = 0, K = z; K; K = ni(K)) j++;
                for (; 0 < N - j; ) ((Ee = ni(Ee)), N--);
                for (; 0 < j - N; ) ((z = ni(z)), j--);
                for (; N--; ) {
                  if (Ee === z || (z !== null && Ee === z.alternate)) break t;
                  ((Ee = ni(Ee)), (z = ni(z)));
                }
                Ee = null;
              }
            else Ee = null;
            (Q !== null && mv(W, U, Q, Ee, !1),
              ge !== null && Ie !== null && mv(W, Ie, ge, Ee, !0));
          }
        }
        e: {
          if (
            ((U = k ? Pi(k) : window),
            (Q = U.nodeName && U.nodeName.toLowerCase()),
            Q === 'select' || (Q === 'input' && U.type === 'file'))
          )
            var de = qh;
          else if (Hh(U))
            if (Vh) de = cS;
            else {
              de = oS;
              var De = lS;
            }
          else
            ((Q = U.nodeName),
              !Q || Q.toLowerCase() !== 'input' || (U.type !== 'checkbox' && U.type !== 'radio')
                ? k && Ru(k.elementType) && (de = qh)
                : (de = uS));
          if (de && (de = de(e, k))) {
            Ph(W, de, r, F);
            break e;
          }
          (De && De(e, U, k),
            e === 'focusout' &&
              k &&
              U.type === 'number' &&
              k.memoizedProps.value != null &&
              Eu(U, 'number', U.value));
        }
        switch (((De = k ? Pi(k) : window), e)) {
          case 'focusin':
            (Hh(De) || De.contentEditable === 'true') && ((zr = De), (Hu = k), (Ki = null));
            break;
          case 'focusout':
            Ki = Hu = zr = null;
            break;
          case 'mousedown':
            Pu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Pu = !1), $h(W, r, F));
            break;
          case 'selectionchange':
            if (hS) break;
          case 'keydown':
          case 'keyup':
            $h(W, r, F);
        }
        var be;
        if (ju)
          e: {
            switch (e) {
              case 'compositionstart':
                var xe = 'onCompositionStart';
                break e;
              case 'compositionend':
                xe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                xe = 'onCompositionUpdate';
                break e;
            }
            xe = void 0;
          }
        else
          kr
            ? Uh(e, r) && (xe = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (xe = 'onCompositionStart');
        (xe &&
          (zh &&
            r.locale !== 'ko' &&
            (kr || xe !== 'onCompositionStart'
              ? xe === 'onCompositionEnd' && kr && (be = Ah())
              : ((ua = F), (Mu = 'value' in ua ? ua.value : ua.textContent), (kr = !0))),
          (De = lo(k, xe)),
          0 < De.length &&
            ((xe = new Nh(xe, e, null, r, F)),
            W.push({ event: xe, listeners: De }),
            be ? (xe.data = be) : ((be = Bh(r)), be !== null && (xe.data = be)))),
          (be = nS ? aS(e, r) : rS(e, r)) &&
            ((xe = lo(k, 'onBeforeInput')),
            0 < xe.length &&
              ((De = new Nh('onBeforeInput', 'beforeinput', null, r, F)),
              W.push({ event: De, listeners: xe }),
              (De.data = be))),
          KS(W, e, k, r, F));
      }
      dv(W, t);
    });
  }
  function ws(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function lo(e, t) {
    for (var r = t + 'Capture', l = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = qi(e, r)),
          u != null && l.unshift(ws(e, u, f)),
          (u = qi(e, t)),
          u != null && l.push(ws(e, u, f))),
        (e = e.return));
    }
    return l;
  }
  function ni(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function mv(e, t, r, l, u) {
    for (var f = t._reactName, y = []; r !== null && r !== l; ) {
      var b = r,
        E = b.alternate,
        k = b.stateNode;
      if (((b = b.tag), E !== null && E === l)) break;
      ((b !== 5 && b !== 26 && b !== 27) ||
        k === null ||
        ((E = k),
        u
          ? ((k = qi(r, f)), k != null && y.unshift(ws(r, k, E)))
          : u || ((k = qi(r, f)), k != null && y.push(ws(r, k, E)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var IS = /\r\n?/g,
    ex = /\u0000|\uFFFD/g;
  function pv(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        IS,
        `
`
      )
      .replace(ex, '');
  }
  function vv(e, t) {
    return ((t = pv(t)), pv(e) === t);
  }
  function oo() {}
  function Pe(e, t, r, l, u, f) {
    switch (r) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Mr(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && Mr(e, '' + l);
        break;
      case 'className':
        vl(e, 'class', l);
        break;
      case 'tabIndex':
        vl(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        vl(e, r, l);
        break;
      case 'style':
        Th(e, l, f);
        break;
      case 'data':
        if (t !== 'object') {
          vl(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || r !== 'href')) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        ((l = bl('' + l)), e.setAttribute(r, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == 'function' &&
            (r === 'formAction'
              ? (t !== 'input' && Pe(e, t, 'name', u.name, u, null),
                Pe(e, t, 'formEncType', u.formEncType, u, null),
                Pe(e, t, 'formMethod', u.formMethod, u, null),
                Pe(e, t, 'formTarget', u.formTarget, u, null))
              : (Pe(e, t, 'encType', u.encType, u, null),
                Pe(e, t, 'method', u.method, u, null),
                Pe(e, t, 'target', u.target, u, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        ((l = bl('' + l)), e.setAttribute(r, l));
        break;
      case 'onClick':
        l != null && (e.onclick = oo);
        break;
      case 'onScroll':
        l != null && ke('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && ke('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((r = bl('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(r, '' + l)
          : e.removeAttribute(r);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(r, '')
          : e.removeAttribute(r);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(r, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(r, l)
            : e.removeAttribute(r);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(r, l)
          : e.removeAttribute(r);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(r)
          : e.setAttribute(r, l);
        break;
      case 'popover':
        (ke('beforetoggle', e), ke('toggle', e), pl(e, 'popover', l));
        break;
      case 'xlinkActuate':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        pl(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = Ab.get(r) || r), pl(e, r, l));
    }
  }
  function cf(e, t, r, l, u, f) {
    switch (r) {
      case 'style':
        Th(e, l, f);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Mr(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Mr(e, '' + l);
        break;
      case 'onScroll':
        l != null && ke('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && ke('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = oo);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!yh.hasOwnProperty(r))
          e: {
            if (
              r[0] === 'o' &&
              r[1] === 'n' &&
              ((u = r.endsWith('Capture')),
              (t = r.slice(2, u ? r.length - 7 : void 0)),
              (f = e[Ot] || null),
              (f = f != null ? f[r] : null),
              typeof f == 'function' && e.removeEventListener(t, f, u),
              typeof l == 'function')
            ) {
              (typeof f != 'function' &&
                f !== null &&
                (r in e ? (e[r] = null) : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, l, u));
              break e;
            }
            r in e ? (e[r] = l) : l === !0 ? e.setAttribute(r, '') : pl(e, r, l);
          }
    }
  }
  function gt(e, t, r) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (ke('error', e), ke('load', e));
        var l = !1,
          u = !1,
          f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var y = r[f];
            if (y != null)
              switch (f) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  Pe(e, t, f, y, r, null);
              }
          }
        (u && Pe(e, t, 'srcSet', r.srcSet, r, null), l && Pe(e, t, 'src', r.src, r, null));
        return;
      case 'input':
        ke('invalid', e);
        var b = (f = y = u = null),
          E = null,
          k = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var F = r[l];
            if (F != null)
              switch (l) {
                case 'name':
                  u = F;
                  break;
                case 'type':
                  y = F;
                  break;
                case 'checked':
                  E = F;
                  break;
                case 'defaultChecked':
                  k = F;
                  break;
                case 'value':
                  f = F;
                  break;
                case 'defaultValue':
                  b = F;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (F != null) throw Error(s(137, t));
                  break;
                default:
                  Pe(e, t, l, F, r, null);
              }
          }
        (_h(e, f, b, E, k, y, u, !1), yl(e));
        return;
      case 'select':
        (ke('invalid', e), (l = y = f = null));
        for (u in r)
          if (r.hasOwnProperty(u) && ((b = r[u]), b != null))
            switch (u) {
              case 'value':
                f = b;
                break;
              case 'defaultValue':
                y = b;
                break;
              case 'multiple':
                l = b;
              default:
                Pe(e, t, u, b, r, null);
            }
        ((t = f),
          (r = y),
          (e.multiple = !!l),
          t != null ? Ar(e, !!l, t, !1) : r != null && Ar(e, !!l, r, !0));
        return;
      case 'textarea':
        (ke('invalid', e), (f = u = l = null));
        for (y in r)
          if (r.hasOwnProperty(y) && ((b = r[y]), b != null))
            switch (y) {
              case 'value':
                l = b;
                break;
              case 'defaultValue':
                u = b;
                break;
              case 'children':
                f = b;
                break;
              case 'dangerouslySetInnerHTML':
                if (b != null) throw Error(s(91));
                break;
              default:
                Pe(e, t, y, b, r, null);
            }
        (Eh(e, l, u, f), yl(e));
        return;
      case 'option':
        for (E in r)
          if (r.hasOwnProperty(E) && ((l = r[E]), l != null))
            switch (E) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Pe(e, t, E, l, r, null);
            }
        return;
      case 'dialog':
        (ke('cancel', e), ke('close', e));
        break;
      case 'iframe':
      case 'object':
        ke('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < _s.length; l++) ke(_s[l], e);
        break;
      case 'image':
        (ke('error', e), ke('load', e));
        break;
      case 'details':
        ke('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (ke('error', e), ke('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (k in r)
          if (r.hasOwnProperty(k) && ((l = r[k]), l != null))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                Pe(e, t, k, l, r, null);
            }
        return;
      default:
        if (Ru(t)) {
          for (F in r)
            r.hasOwnProperty(F) && ((l = r[F]), l !== void 0 && cf(e, t, F, l, r, void 0));
          return;
        }
    }
    for (b in r) r.hasOwnProperty(b) && ((l = r[b]), l != null && Pe(e, t, b, l, r, null));
  }
  function tx(e, t, r, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          f = null,
          y = null,
          b = null,
          E = null,
          k = null,
          F = null;
        for (Q in r) {
          var W = r[Q];
          if (r.hasOwnProperty(Q) && W != null)
            switch (Q) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                E = W;
              default:
                l.hasOwnProperty(Q) || Pe(e, t, Q, null, l, W);
            }
        }
        for (var U in l) {
          var Q = l[U];
          if (((W = r[U]), l.hasOwnProperty(U) && (Q != null || W != null)))
            switch (U) {
              case 'type':
                f = Q;
                break;
              case 'name':
                u = Q;
                break;
              case 'checked':
                k = Q;
                break;
              case 'defaultChecked':
                F = Q;
                break;
              case 'value':
                y = Q;
                break;
              case 'defaultValue':
                b = Q;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Q != null) throw Error(s(137, t));
                break;
              default:
                Q !== W && Pe(e, t, U, Q, l, W);
            }
        }
        wu(e, y, b, E, k, F, f, u);
        return;
      case 'select':
        Q = y = b = U = null;
        for (f in r)
          if (((E = r[f]), r.hasOwnProperty(f) && E != null))
            switch (f) {
              case 'value':
                break;
              case 'multiple':
                Q = E;
              default:
                l.hasOwnProperty(f) || Pe(e, t, f, null, l, E);
            }
        for (u in l)
          if (((f = l[u]), (E = r[u]), l.hasOwnProperty(u) && (f != null || E != null)))
            switch (u) {
              case 'value':
                U = f;
                break;
              case 'defaultValue':
                b = f;
                break;
              case 'multiple':
                y = f;
              default:
                f !== E && Pe(e, t, u, f, l, E);
            }
        ((t = b),
          (r = y),
          (l = Q),
          U != null
            ? Ar(e, !!r, U, !1)
            : !!l != !!r && (t != null ? Ar(e, !!r, t, !0) : Ar(e, !!r, r ? [] : '', !1)));
        return;
      case 'textarea':
        Q = U = null;
        for (b in r)
          if (((u = r[b]), r.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b)))
            switch (b) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Pe(e, t, b, null, l, u);
            }
        for (y in l)
          if (((u = l[y]), (f = r[y]), l.hasOwnProperty(y) && (u != null || f != null)))
            switch (y) {
              case 'value':
                U = u;
                break;
              case 'defaultValue':
                Q = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== f && Pe(e, t, y, u, l, f);
            }
        wh(e, U, Q);
        return;
      case 'option':
        for (var ge in r)
          if (((U = r[ge]), r.hasOwnProperty(ge) && U != null && !l.hasOwnProperty(ge)))
            switch (ge) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Pe(e, t, ge, null, l, U);
            }
        for (E in l)
          if (((U = l[E]), (Q = r[E]), l.hasOwnProperty(E) && U !== Q && (U != null || Q != null)))
            switch (E) {
              case 'selected':
                e.selected = U && typeof U != 'function' && typeof U != 'symbol';
                break;
              default:
                Pe(e, t, E, U, l, Q);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Ee in r)
          ((U = r[Ee]),
            r.hasOwnProperty(Ee) && U != null && !l.hasOwnProperty(Ee) && Pe(e, t, Ee, null, l, U));
        for (k in l)
          if (((U = l[k]), (Q = r[k]), l.hasOwnProperty(k) && U !== Q && (U != null || Q != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(s(137, t));
                break;
              default:
                Pe(e, t, k, U, l, Q);
            }
        return;
      default:
        if (Ru(t)) {
          for (var Ie in r)
            ((U = r[Ie]),
              r.hasOwnProperty(Ie) &&
                U !== void 0 &&
                !l.hasOwnProperty(Ie) &&
                cf(e, t, Ie, void 0, l, U));
          for (F in l)
            ((U = l[F]),
              (Q = r[F]),
              !l.hasOwnProperty(F) ||
                U === Q ||
                (U === void 0 && Q === void 0) ||
                cf(e, t, F, U, l, Q));
          return;
        }
    }
    for (var z in r)
      ((U = r[z]),
        r.hasOwnProperty(z) && U != null && !l.hasOwnProperty(z) && Pe(e, t, z, null, l, U));
    for (W in l)
      ((U = l[W]),
        (Q = r[W]),
        !l.hasOwnProperty(W) || U === Q || (U == null && Q == null) || Pe(e, t, W, U, l, Q));
  }
  var ff = null,
    df = null;
  function uo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function yv(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function gv(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function hf(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var mf = null;
  function nx() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === mf ? !1 : ((mf = e), !0)) : ((mf = null), !1);
  }
  var bv = typeof setTimeout == 'function' ? setTimeout : void 0,
    ax = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Sv = typeof Promise == 'function' ? Promise : void 0,
    rx =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Sv < 'u'
          ? function (e) {
              return Sv.resolve(null).then(e).catch(ix);
            }
          : bv;
  function ix(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function pf(e, t) {
    var r = t,
      l = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === '/$')) {
          if (l === 0) {
            (e.removeChild(u), Ds(t));
            return;
          }
          l--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || l++;
      r = u;
    } while (r);
    Ds(t);
  }
  function vf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (vf(r), _u(r));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (r.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(r);
    }
  }
  function sx(e, t, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Hi])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((f = e.getAttribute('rel')),
                f === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                f !== u.rel ||
                e.getAttribute('href') !== (u.href == null ? null : u.href) ||
                e.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((f = e.getAttribute('src')),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var f = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === f) return e;
      } else return e;
      if (((e = cn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function lx(e, t, r) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !r) ||
        ((e = cn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function cn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function xv(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function _v(e, t, r) {
    switch (((t = uo(r)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var tn = new Map(),
    wv = new Set();
  function co(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var $n = $.d;
  $.d = { f: ox, r: ux, D: cx, C: fx, L: dx, m: hx, X: px, S: mx, M: vx };
  function ox() {
    var e = $n.f(),
      t = no();
    return e || t;
  }
  function ux(e) {
    var t = Tr(e);
    t !== null && t.tag === 5 && t.type === 'form' ? $m(t) : $n.r(e);
  }
  var ai = typeof document > 'u' ? null : document;
  function Ev(e, t, r) {
    var l = ai;
    if (l && typeof t == 'string' && t) {
      var u = Qt(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof r == 'string' && (u += '[crossorigin="' + r + '"]'),
        wv.has(u) ||
          (wv.add(u),
          (e = { rel: e, crossOrigin: r, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement('link')), gt(t, 'link', e), dt(t), l.head.appendChild(t))));
    }
  }
  function cx(e) {
    ($n.D(e), Ev('dns-prefetch', e, null));
  }
  function fx(e, t) {
    ($n.C(e, t), Ev('preconnect', e, t));
  }
  function dx(e, t, r) {
    $n.L(e, t, r);
    var l = ai;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === 'image' && r && r.imageSrcSet
        ? ((u += '[imagesrcset="' + Qt(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' && (u += '[imagesizes="' + Qt(r.imageSizes) + '"]'))
        : (u += '[href="' + Qt(e) + '"]');
      var f = u;
      switch (t) {
        case 'style':
          f = ri(e);
          break;
        case 'script':
          f = ii(e);
      }
      tn.has(f) ||
        ((e = X(
          { rel: 'preload', href: t === 'image' && r && r.imageSrcSet ? void 0 : e, as: t },
          r
        )),
        tn.set(f, e),
        l.querySelector(u) !== null ||
          (t === 'style' && l.querySelector(Es(f))) ||
          (t === 'script' && l.querySelector(Rs(f))) ||
          ((t = l.createElement('link')), gt(t, 'link', e), dt(t), l.head.appendChild(t)));
    }
  }
  function hx(e, t) {
    $n.m(e, t);
    var r = ai;
    if (r && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        u = 'link[rel="modulepreload"][as="' + Qt(l) + '"][href="' + Qt(e) + '"]',
        f = u;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = ii(e);
      }
      if (
        !tn.has(f) &&
        ((e = X({ rel: 'modulepreload', href: e }, t)), tn.set(f, e), r.querySelector(u) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector(Rs(f))) return;
        }
        ((l = r.createElement('link')), gt(l, 'link', e), dt(l), r.head.appendChild(l));
      }
    }
  }
  function mx(e, t, r) {
    $n.S(e, t, r);
    var l = ai;
    if (l && e) {
      var u = Cr(l).hoistableStyles,
        f = ri(e);
      t = t || 'default';
      var y = u.get(f);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = l.querySelector(Es(f)))) b.loading = 5;
        else {
          ((e = X({ rel: 'stylesheet', href: e, 'data-precedence': t }, r)),
            (r = tn.get(f)) && yf(e, r));
          var E = (y = l.createElement('link'));
          (dt(E),
            gt(E, 'link', e),
            (E._p = new Promise(function (k, F) {
              ((E.onload = k), (E.onerror = F));
            })),
            E.addEventListener('load', function () {
              b.loading |= 1;
            }),
            E.addEventListener('error', function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            fo(y, t, l));
        }
        ((y = { type: 'stylesheet', instance: y, count: 1, state: b }), u.set(f, y));
      }
    }
  }
  function px(e, t) {
    $n.X(e, t);
    var r = ai;
    if (r && e) {
      var l = Cr(r).hoistableScripts,
        u = ii(e),
        f = l.get(u);
      f ||
        ((f = r.querySelector(Rs(u))),
        f ||
          ((e = X({ src: e, async: !0 }, t)),
          (t = tn.get(u)) && gf(e, t),
          (f = r.createElement('script')),
          dt(f),
          gt(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function vx(e, t) {
    $n.M(e, t);
    var r = ai;
    if (r && e) {
      var l = Cr(r).hoistableScripts,
        u = ii(e),
        f = l.get(u);
      f ||
        ((f = r.querySelector(Rs(u))),
        f ||
          ((e = X({ src: e, async: !0, type: 'module' }, t)),
          (t = tn.get(u)) && gf(e, t),
          (f = r.createElement('script')),
          dt(f),
          gt(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function Rv(e, t, r, l) {
    var u = (u = rt.current) ? co(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((t = ri(r.href)),
            (r = Cr(u).hoistableStyles),
            (l = r.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), r.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          r.rel === 'stylesheet' &&
          typeof r.href == 'string' &&
          typeof r.precedence == 'string'
        ) {
          e = ri(r.href);
          var f = Cr(u).hoistableStyles,
            y = f.get(e);
          if (
            (y ||
              ((u = u.ownerDocument || u),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, y),
              (f = u.querySelector(Es(e))) && !f._p && ((y.instance = f), (y.state.loading = 5)),
              tn.has(e) ||
                ((r = {
                  rel: 'preload',
                  as: 'style',
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                tn.set(e, r),
                f || yx(u, e, r, y.state))),
            t && l === null)
          )
            throw Error(s(528, ''));
          return y;
        }
        if (t && l !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = r.async),
          (r = r.src),
          typeof r == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = ii(r)),
              (r = Cr(u).hoistableScripts),
              (l = r.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), r.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function ri(e) {
    return 'href="' + Qt(e) + '"';
  }
  function Es(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Tv(e) {
    return X({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function yx(e, t, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        gt(t, 'link', r),
        dt(t),
        e.head.appendChild(t));
  }
  function ii(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function Rs(e) {
    return 'script[async]' + e;
  }
  function Cv(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Qt(r.href) + '"]');
          if (l) return ((t.instance = l), dt(l), l);
          var u = X({}, r, {
            'data-href': r.href,
            'data-precedence': r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            dt(l),
            gt(l, 'style', u),
            fo(l, r.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          u = ri(r.href);
          var f = e.querySelector(Es(u));
          if (f) return ((t.state.loading |= 4), (t.instance = f), dt(f), f);
          ((l = Tv(r)),
            (u = tn.get(u)) && yf(l, u),
            (f = (e.ownerDocument || e).createElement('link')),
            dt(f));
          var y = f;
          return (
            (y._p = new Promise(function (b, E) {
              ((y.onload = b), (y.onerror = E));
            })),
            gt(f, 'link', l),
            (t.state.loading |= 4),
            fo(f, r.precedence, e),
            (t.instance = f)
          );
        case 'script':
          return (
            (f = ii(r.src)),
            (u = e.querySelector(Rs(f)))
              ? ((t.instance = u), dt(u), u)
              : ((l = r),
                (u = tn.get(f)) && ((l = X({}, r)), gf(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                dt(u),
                gt(u, 'link', l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), fo(l, r.precedence, e));
    return t.instance;
  }
  function fo(e, t, r) {
    for (
      var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = l.length ? l[l.length - 1] : null,
        f = u,
        y = 0;
      y < l.length;
      y++
    ) {
      var b = l[y];
      if (b.dataset.precedence === t) f = b;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function yf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function gf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ho = null;
  function Ov(e, t, r) {
    if (ho === null) {
      var l = new Map(),
        u = (ho = new Map());
      u.set(r, l);
    } else ((u = ho), (l = u.get(r)), l || ((l = new Map()), u.set(r, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var f = r[u];
      if (
        !(f[Hi] || f[bt] || (e === 'link' && f.getAttribute('rel') === 'stylesheet')) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = f.getAttribute(t) || '';
        y = e + y;
        var b = l.get(y);
        b ? b.push(f) : l.set(y, [f]);
      }
    }
    return l;
  }
  function Av(e, t, r) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(r, t === 'title' ? e.querySelector('head > title') : null));
  }
  function gx(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Mv(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function bx() {}
  function Sx(e, t, r) {
    if (Ts === null) throw Error(s(475));
    var l = Ts;
    if (
      t.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = ri(r.href),
          f = e.querySelector(Es(u));
        if (f) {
          ((e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = mo.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = f),
            dt(f));
          return;
        }
        ((f = e.ownerDocument || e),
          (r = Tv(r)),
          (u = tn.get(u)) && yf(r, u),
          (f = f.createElement('link')),
          dt(f));
        var y = f;
        ((y._p = new Promise(function (b, E) {
          ((y.onload = b), (y.onerror = E));
        })),
          gt(f, 'link', r),
          (t.instance = f));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = mo.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function xx() {
    if (Ts === null) throw Error(s(475));
    var e = Ts;
    return (
      e.stylesheets && e.count === 0 && bf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && bf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function mo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) bf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var po = null;
  function bf(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (po = new Map()), t.forEach(_x, e), (po = null), mo.call(e)));
  }
  function _x(e, t) {
    if (!(t.state.loading & 4)) {
      var r = po.get(e);
      if (r) var l = r.get(null);
      else {
        ((r = new Map()), po.set(e, r));
        for (
          var u = e.querySelectorAll('link[data-precedence],style[data-precedence]'), f = 0;
          f < u.length;
          f++
        ) {
          var y = u[f];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (r.set(y.dataset.precedence, y), (l = y));
        }
        l && r.set(null, l);
      }
      ((u = t.instance),
        (y = u.getAttribute('data-precedence')),
        (f = r.get(y) || l),
        f === l && r.set(null, u),
        r.set(y, u),
        this.count++,
        (l = mo.bind(this)),
        u.addEventListener('load', l),
        u.addEventListener('error', l),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Cs = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0,
  };
  function wx(e, t, r, l, u, f, y, b) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Su(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Su(0)),
      (this.hiddenUpdates = Su(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map()));
  }
  function Dv(e, t, r, l, u, f, y, b, E, k, F, W) {
    return (
      (e = new wx(e, t, r, y, b, E, k, W)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = It(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = $u()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: l, isDehydrated: r, cache: t }),
      Mc(f),
      e
    );
  }
  function Nv(e) {
    return e ? ((e = Ur), e) : Ur;
  }
  function kv(e, t, r, l, u, f) {
    ((u = Nv(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = ya(t)),
      (l.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (r = ga(e, l, t)),
      r !== null && (Tt(r, e, t), cs(r, e, t)));
  }
  function zv(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Sf(e, t) {
    (zv(e, t), (e = e.alternate) && zv(e, t));
  }
  function jv(e) {
    if (e.tag === 13) {
      var t = ca(e, 67108864);
      (t !== null && Tt(t, e, 67108864), Sf(e, 67108864));
    }
  }
  var vo = !0;
  function Ex(e, t, r, l) {
    var u = A.T;
    A.T = null;
    var f = $.p;
    try {
      (($.p = 2), xf(e, t, r, l));
    } finally {
      (($.p = f), (A.T = u));
    }
  }
  function Rx(e, t, r, l) {
    var u = A.T;
    A.T = null;
    var f = $.p;
    try {
      (($.p = 8), xf(e, t, r, l));
    } finally {
      (($.p = f), (A.T = u));
    }
  }
  function xf(e, t, r, l) {
    if (vo) {
      var u = _f(l);
      if (u === null) (uf(e, t, l, yo, r), Uv(e, l));
      else if (Cx(u, e, t, r, l)) l.stopPropagation();
      else if ((Uv(e, l), t & 4 && -1 < Tx.indexOf(e))) {
        for (; u !== null; ) {
          var f = Tr(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Qa(f.pendingLanes);
                  if (y !== 0) {
                    var b = f;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var E = 1 << (31 - jt(y));
                      ((b.entanglements[1] |= E), (y &= ~E));
                    }
                    (En(f), (Ke & 6) === 0 && ((Il = kt() + 500), xs(0)));
                  }
                }
                break;
              case 13:
                ((b = ca(f, 2)), b !== null && Tt(b, f, 2), no(), Sf(f, 2));
            }
          if (((f = _f(l)), f === null && uf(e, t, l, yo, r), f === u)) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else uf(e, t, l, null, r);
    }
  }
  function _f(e) {
    return ((e = Cu(e)), wf(e));
  }
  var yo = null;
  function wf(e) {
    if (((yo = null), (e = Ya(e)), e !== null)) {
      var t = B(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (((e = pe(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((yo = e), null);
  }
  function Lv(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (bu()) {
          case cl:
            return 2;
          case lh:
            return 8;
          case fl:
          case db:
            return 32;
          case oh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ef = !1,
    Ra = null,
    Ta = null,
    Ca = null,
    Os = new Map(),
    As = new Map(),
    Oa = [],
    Tx =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Uv(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ra = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ta = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ca = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Os.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        As.delete(t.pointerId);
    }
  }
  function Ms(e, t, r, l, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = Tr(t)), t !== null && jv(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Cx(e, t, r, l, u) {
    switch (t) {
      case 'focusin':
        return ((Ra = Ms(Ra, e, t, r, l, u)), !0);
      case 'dragenter':
        return ((Ta = Ms(Ta, e, t, r, l, u)), !0);
      case 'mouseover':
        return ((Ca = Ms(Ca, e, t, r, l, u)), !0);
      case 'pointerover':
        var f = u.pointerId;
        return (Os.set(f, Ms(Os.get(f) || null, e, t, r, l, u)), !0);
      case 'gotpointercapture':
        return ((f = u.pointerId), As.set(f, Ms(As.get(f) || null, e, t, r, l, u)), !0);
    }
    return !1;
  }
  function Bv(e) {
    var t = Ya(e.target);
    if (t !== null) {
      var r = B(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = pe(r)), t !== null)) {
            ((e.blockedOn = t),
              xb(e.priority, function () {
                if (r.tag === 13) {
                  var l = Pt(),
                    u = ca(r, l);
                  (u !== null && Tt(u, r, l), Sf(r, l));
                }
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = _f(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        ((Tu = l), r.target.dispatchEvent(l), (Tu = null));
      } else return ((t = Tr(r)), t !== null && jv(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Hv(e, t, r) {
    go(e) && r.delete(t);
  }
  function Ox() {
    ((Ef = !1),
      Ra !== null && go(Ra) && (Ra = null),
      Ta !== null && go(Ta) && (Ta = null),
      Ca !== null && go(Ca) && (Ca = null),
      Os.forEach(Hv),
      As.forEach(Hv));
  }
  function bo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ef || ((Ef = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, Ox)));
  }
  var So = null;
  function Pv(e) {
    So !== e &&
      ((So = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        So === e && (So = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != 'function') {
            if (wf(l || r) === null) continue;
            break;
          }
          var f = Tr(r);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            dc(f, { pending: !0, data: u, method: r.method, action: l }, l, u));
        }
      }));
  }
  function Ds(e) {
    function t(E) {
      return bo(E, e);
    }
    (Ra !== null && bo(Ra, e),
      Ta !== null && bo(Ta, e),
      Ca !== null && bo(Ca, e),
      Os.forEach(t),
      As.forEach(t));
    for (var r = 0; r < Oa.length; r++) {
      var l = Oa[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Oa.length && ((r = Oa[0]), r.blockedOn === null); )
      (Bv(r), r.blockedOn === null && Oa.shift());
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (l = 0; l < r.length; l += 3) {
        var u = r[l],
          f = r[l + 1],
          y = u[Ot] || null;
        if (typeof f == 'function') y || Pv(r);
        else if (y) {
          var b = null;
          if (f && f.hasAttribute('formAction')) {
            if (((u = f), (y = f[Ot] || null))) b = y.formAction;
            else if (wf(u) !== null) continue;
          } else b = y.action;
          (typeof b == 'function' ? (r[l + 1] = b) : (r.splice(l, 3), (l -= 3)), Pv(r));
        }
      }
  }
  function Rf(e) {
    this._internalRoot = e;
  }
  ((xo.prototype.render = Rf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        l = Pt();
      kv(r, l, e, t, null, null);
    }),
    (xo.prototype.unmount = Rf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (e.tag === 0 && ei(), kv(e.current, 2, null, e, null, null), no(), (t[Rr] = null));
        }
      }));
  function xo(e) {
    this._internalRoot = e;
  }
  xo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = mh();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Oa.length && t !== 0 && t < Oa[r].priority; r++);
      (Oa.splice(r, 0, e), r === 0 && Bv(e));
    }
  };
  var qv = a.version;
  if (qv !== '19.0.0') throw Error(s(527, qv, '19.0.0'));
  $.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return ((e = V(t)), (e = e !== null ? se(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var Ax = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    findFiberByHostInstance: Ya,
    reconcilerVersion: '19.0.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber)
      try {
        ((Li = _o.inject(Ax)), (zt = _o));
      } catch {}
  }
  return (
    (ks.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var r = !1,
        l = '',
        u = rp,
        f = ip,
        y = sp,
        b = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        (t = Dv(e, 1, !1, null, null, r, l, u, f, y, b, null)),
        (e[Rr] = t.current),
        of(e.nodeType === 8 ? e.parentNode : e),
        new Rf(t)
      );
    }),
    (ks.hydrateRoot = function (e, t, r) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        u = '',
        f = rp,
        y = ip,
        b = sp,
        E = null,
        k = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (y = r.onCaughtError),
          r.onRecoverableError !== void 0 && (b = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && (E = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (k = r.formState)),
        (t = Dv(e, 1, !0, t, r ?? null, l, u, f, y, b, E, k)),
        (t.context = Nv(null)),
        (r = t.current),
        (l = Pt()),
        (u = ya(l)),
        (u.callback = null),
        ga(r, u, l),
        (t.current.lanes = l),
        Bi(t, l),
        En(t),
        (e[Rr] = t.current),
        of(e),
        new xo(t)
      );
    }),
    (ks.version = '19.0.0'),
    ks
  );
}
var Wv;
function Px() {
  if (Wv) return Of.exports;
  Wv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return (n(), (Of.exports = Hx()), Of.exports);
}
var qx = Px(),
  Vx = 'Invariant failed';
function ea(n, a) {
  if (!n) throw new Error(Vx);
}
const pi = new WeakMap(),
  jo = new WeakMap(),
  qo = { current: [] };
let Nf = !1,
  Hs = 0;
const js = new Set(),
  wo = new Map();
function eg(n) {
  const a = Array.from(n).sort((i, s) =>
    i instanceof vi && i.options.deps.includes(s)
      ? 1
      : s instanceof vi && s.options.deps.includes(i)
        ? -1
        : 0
  );
  for (const i of a) {
    if (qo.current.includes(i)) continue;
    (qo.current.push(i), i.recompute());
    const s = jo.get(i);
    if (s)
      for (const o of s) {
        const c = pi.get(o);
        c && eg(c);
      }
  }
}
function Zx(n) {
  n.listeners.forEach((a) => a({ prevVal: n.prevState, currentVal: n.state }));
}
function Gx(n) {
  n.listeners.forEach((a) => a({ prevVal: n.prevState, currentVal: n.state }));
}
function tg(n) {
  if ((Hs > 0 && !wo.has(n) && wo.set(n, n.prevState), js.add(n), !(Hs > 0) && !Nf))
    try {
      for (Nf = !0; js.size > 0; ) {
        const a = Array.from(js);
        js.clear();
        for (const i of a) {
          const s = wo.get(i) ?? i.prevState;
          ((i.prevState = s), Zx(i));
        }
        for (const i of a) {
          const s = pi.get(i);
          s && (qo.current.push(i), eg(s));
        }
        for (const i of a) {
          const s = pi.get(i);
          if (s) for (const o of s) Gx(o);
        }
      }
    } finally {
      ((Nf = !1), (qo.current = []), wo.clear());
    }
}
function kf(n) {
  Hs++;
  try {
    n();
  } finally {
    if ((Hs--, Hs === 0)) {
      const a = Array.from(js)[0];
      a && tg(a);
    }
  }
}
class sd {
  constructor(a, i) {
    ((this.listeners = new Set()),
      (this.subscribe = (s) => {
        var o, c;
        this.listeners.add(s);
        const d =
          (c = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : c.call(o, s, this);
        return () => {
          (this.listeners.delete(s), d?.());
        };
      }),
      (this.setState = (s) => {
        var o, c, d;
        ((this.prevState = this.state),
          (this.state =
            (o = this.options) != null && o.updateFn
              ? this.options.updateFn(this.prevState)(s)
              : s(this.prevState)),
          (d = (c = this.options) == null ? void 0 : c.onUpdate) == null || d.call(c),
          tg(this));
      }),
      (this.prevState = a),
      (this.state = a),
      (this.options = i));
  }
}
class vi {
  constructor(a) {
    ((this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const i = [],
          s = [];
        for (const o of this.options.deps) (i.push(o.prevState), s.push(o.state));
        return (
          (this.lastSeenDepValues = s),
          { prevDepVals: i, currDepVals: s, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var i, s;
        this.prevState = this.state;
        const { prevDepVals: o, currDepVals: c, prevVal: d } = this.getDepVals();
        ((this.state = this.options.fn({ prevDepVals: o, currDepVals: c, prevVal: d })),
          (s = (i = this.options).onUpdate) == null || s.call(i));
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const c of this.options.deps) c instanceof vi && c.checkIfRecalculationNeededDeeply();
        let i = !1;
        const s = this.lastSeenDepValues,
          { currDepVals: o } = this.getDepVals();
        for (let c = 0; c < o.length; c++)
          if (o[c] !== s[c]) {
            i = !0;
            break;
          }
        i && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const i of this._subscriptions) i();
        }
      )),
      (this.subscribe = (i) => {
        var s, o;
        this.listeners.add(i);
        const c = (o = (s = this.options).onSubscribe) == null ? void 0 : o.call(s, i, this);
        return () => {
          (this.listeners.delete(i), c?.());
        };
      }),
      (this.options = a),
      (this.state = a.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      })));
  }
  registerOnGraph(a = this.options.deps) {
    for (const i of a)
      if (i instanceof vi) (i.registerOnGraph(), this.registerOnGraph(i.options.deps));
      else if (i instanceof sd) {
        let s = pi.get(i);
        (s || ((s = new Set()), pi.set(i, s)), s.add(this));
        let o = jo.get(this);
        (o || ((o = new Set()), jo.set(this, o)), o.add(i));
      }
  }
  unregisterFromGraph(a = this.options.deps) {
    for (const i of a)
      if (i instanceof vi) this.unregisterFromGraph(i.options.deps);
      else if (i instanceof sd) {
        const s = pi.get(i);
        s && s.delete(this);
        const o = jo.get(this);
        o && o.delete(i);
      }
  }
}
const Na = '__TSR_index',
  Jv = 'popstate',
  Iv = 'beforeunload';
function ng(n) {
  let a = n.getLocation();
  const i = new Set(),
    s = (d) => {
      ((a = n.getLocation()), i.forEach((h) => h({ location: a, action: d })));
    },
    o = (d) => {
      (n.notifyOnIndexChange ?? !0) ? s(d) : (a = n.getLocation());
    },
    c = async ({ task: d, navigateOpts: h, ...p }) => {
      var m, v;
      if (h?.ignoreBlocker ?? !1) {
        d();
        return;
      }
      const S = ((m = n.getBlockers) == null ? void 0 : m.call(n)) ?? [],
        w = p.type === 'PUSH' || p.type === 'REPLACE';
      if (typeof document < 'u' && S.length && w)
        for (const R of S) {
          const x = Ps(p.path, p.state);
          if (await R.blockerFn({ currentLocation: a, nextLocation: x, action: p.type })) {
            (v = n.onBlocked) == null || v.call(n);
            return;
          }
        }
      d();
    };
  return {
    get location() {
      return a;
    },
    get length() {
      return n.getLength();
    },
    subscribers: i,
    subscribe: (d) => (
      i.add(d),
      () => {
        i.delete(d);
      }
    ),
    push: (d, h, p) => {
      const m = a.state[Na];
      ((h = ld(m + 1, h)),
        c({
          task: () => {
            (n.pushState(d, h), s({ type: 'PUSH' }));
          },
          navigateOpts: p,
          type: 'PUSH',
          path: d,
          state: h,
        }));
    },
    replace: (d, h, p) => {
      const m = a.state[Na];
      ((h = ld(m, h)),
        c({
          task: () => {
            (n.replaceState(d, h), s({ type: 'REPLACE' }));
          },
          navigateOpts: p,
          type: 'REPLACE',
          path: d,
          state: h,
        }));
    },
    go: (d, h) => {
      c({
        task: () => {
          (n.go(d), o({ type: 'GO', index: d }));
        },
        navigateOpts: h,
        type: 'GO',
      });
    },
    back: (d) => {
      c({
        task: () => {
          (n.back(d?.ignoreBlocker ?? !1), o({ type: 'BACK' }));
        },
        navigateOpts: d,
        type: 'BACK',
      });
    },
    forward: (d) => {
      c({
        task: () => {
          (n.forward(d?.ignoreBlocker ?? !1), o({ type: 'FORWARD' }));
        },
        navigateOpts: d,
        type: 'FORWARD',
      });
    },
    canGoBack: () => a.state[Na] !== 0,
    createHref: (d) => n.createHref(d),
    block: (d) => {
      var h;
      if (!n.setBlockers) return () => {};
      const p = ((h = n.getBlockers) == null ? void 0 : h.call(n)) ?? [];
      return (
        n.setBlockers([...p, d]),
        () => {
          var m, v;
          const g = ((m = n.getBlockers) == null ? void 0 : m.call(n)) ?? [];
          (v = n.setBlockers) == null ||
            v.call(
              n,
              g.filter((S) => S !== d)
            );
        }
      );
    },
    flush: () => {
      var d;
      return (d = n.flush) == null ? void 0 : d.call(n);
    },
    destroy: () => {
      var d;
      return (d = n.destroy) == null ? void 0 : d.call(n);
    },
    notify: s,
  };
}
function ld(n, a) {
  return (a || (a = {}), { ...a, key: Md(), [Na]: n });
}
function Qx(n) {
  var a;
  const i = typeof document < 'u' ? window : void 0,
    s = i.history.pushState,
    o = i.history.replaceState;
  let c = [];
  const d = () => c,
    h = (A) => (c = A),
    p = (A) => A,
    m = () => Ps(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state);
  ((a = i.history.state) != null && a.key) || i.history.replaceState({ [Na]: 0, key: Md() }, '');
  let v = m(),
    g,
    S = !1,
    w = !1,
    R = !1,
    x = !1;
  const D = () => v;
  let O, L;
  const H = () => {
      O &&
        ((M._ignoreSubscribers = !0),
        (O.isPush ? i.history.pushState : i.history.replaceState)(O.state, '', O.href),
        (M._ignoreSubscribers = !1),
        (O = void 0),
        (L = void 0),
        (g = void 0));
    },
    Y = (A, X, ae) => {
      const te = p(X);
      (L || (g = v),
        (v = Ps(X, ae)),
        (O = { href: te, state: ae, isPush: O?.isPush || A === 'push' }),
        L || (L = Promise.resolve().then(() => H())));
    },
    q = (A) => {
      ((v = m()), M.notify({ type: A }));
    },
    Z = async () => {
      if (w) {
        w = !1;
        return;
      }
      const A = m(),
        X = A.state[Na] - v.state[Na],
        ae = X === 1,
        te = X === -1,
        ne = (!ae && !te) || S;
      S = !1;
      const ce = ne ? 'GO' : te ? 'BACK' : 'FORWARD',
        ie = ne ? { type: 'GO', index: X } : { type: te ? 'BACK' : 'FORWARD' };
      if (R) R = !1;
      else {
        const P = d();
        if (typeof document < 'u' && P.length) {
          for (const J of P)
            if (await J.blockerFn({ currentLocation: v, nextLocation: A, action: ce })) {
              ((w = !0), i.history.go(1), M.notify(ie));
              return;
            }
        }
      }
      ((v = m()), M.notify(ie));
    },
    G = (A) => {
      if (x) {
        x = !1;
        return;
      }
      let X = !1;
      const ae = d();
      if (typeof document < 'u' && ae.length)
        for (const te of ae) {
          const ne = te.enableBeforeUnload ?? !0;
          if (ne === !0) {
            X = !0;
            break;
          }
          if (typeof ne == 'function' && ne() === !0) {
            X = !0;
            break;
          }
        }
      if (X) return (A.preventDefault(), (A.returnValue = ''));
    },
    M = ng({
      getLocation: D,
      getLength: () => i.history.length,
      pushState: (A, X) => Y('push', A, X),
      replaceState: (A, X) => Y('replace', A, X),
      back: (A) => (A && (R = !0), (x = !0), i.history.back()),
      forward: (A) => {
        (A && (R = !0), (x = !0), i.history.forward());
      },
      go: (A) => {
        ((S = !0), i.history.go(A));
      },
      createHref: (A) => p(A),
      flush: H,
      destroy: () => {
        ((i.history.pushState = s),
          (i.history.replaceState = o),
          i.removeEventListener(Iv, G, { capture: !0 }),
          i.removeEventListener(Jv, Z));
      },
      onBlocked: () => {
        g && v !== g && (v = g);
      },
      getBlockers: d,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(Iv, G, { capture: !0 }),
    i.addEventListener(Jv, Z),
    (i.history.pushState = function (...A) {
      const X = s.apply(i.history, A);
      return (M._ignoreSubscribers || q('PUSH'), X);
    }),
    (i.history.replaceState = function (...A) {
      const X = o.apply(i.history, A);
      return (M._ignoreSubscribers || q('REPLACE'), X);
    }),
    M
  );
}
function Yx(n = { initialEntries: ['/'] }) {
  const a = n.initialEntries;
  let i = n.initialIndex ? Math.min(Math.max(n.initialIndex, 0), a.length - 1) : a.length - 1;
  const s = a.map((c, d) => ld(d, void 0));
  return ng({
    getLocation: () => Ps(a[i], s[i]),
    getLength: () => a.length,
    pushState: (c, d) => {
      (i < a.length - 1 && (a.splice(i + 1), s.splice(i + 1)),
        s.push(d),
        a.push(c),
        (i = Math.max(a.length - 1, 0)));
    },
    replaceState: (c, d) => {
      ((s[i] = d), (a[i] = c));
    },
    back: () => {
      i = Math.max(i - 1, 0);
    },
    forward: () => {
      i = Math.min(i + 1, a.length - 1);
    },
    go: (c) => {
      i = Math.min(Math.max(i + c, 0), a.length - 1);
    },
    createHref: (c) => c,
  });
}
function Ps(n, a) {
  const i = n.indexOf('#'),
    s = n.indexOf('?');
  return {
    href: n,
    pathname: n.substring(0, i > 0 ? (s > 0 ? Math.min(i, s) : i) : s > 0 ? s : n.length),
    hash: i > -1 ? n.substring(i) : '',
    search: s > -1 ? n.slice(s, i === -1 ? void 0 : i) : '',
    state: a || { [Na]: 0, key: Md() },
  };
}
function Md() {
  return (Math.random() + 1).toString(36).substring(7);
}
function di(n) {
  return n[n.length - 1];
}
function Fx(n) {
  return typeof n == 'function';
}
function pr(n, a) {
  return Fx(n) ? n(a) : n;
}
function od(n, a) {
  return a.reduce((i, s) => ((i[s] = n[s]), i), {});
}
function nn(n, a) {
  if (n === a) return n;
  const i = a,
    s = ty(n) && ty(i);
  if (s || (Vo(n) && Vo(i))) {
    const o = s ? n : Object.keys(n),
      c = o.length,
      d = s ? i : Object.keys(i),
      h = d.length,
      p = s ? [] : {};
    let m = 0;
    for (let v = 0; v < h; v++) {
      const g = s ? v : d[v];
      ((!s && o.includes(g)) || s) && n[g] === void 0 && i[g] === void 0
        ? ((p[g] = void 0), m++)
        : ((p[g] = nn(n[g], i[g])), p[g] === n[g] && n[g] !== void 0 && m++);
    }
    return c === h && m === c ? n : p;
  }
  return i;
}
function Vo(n) {
  if (!ey(n)) return !1;
  const a = n.constructor;
  if (typeof a > 'u') return !0;
  const i = a.prototype;
  return !(!ey(i) || !i.hasOwnProperty('isPrototypeOf'));
}
function ey(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function ty(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function ny(n, a) {
  let i = Object.keys(n);
  return (a && (i = i.filter((s) => n[s] !== void 0)), i);
}
function yi(n, a, i) {
  if (n === a) return !0;
  if (typeof n != typeof a) return !1;
  if (Vo(n) && Vo(a)) {
    const s = i?.ignoreUndefined ?? !0,
      o = ny(n, s),
      c = ny(a, s);
    return !i?.partial && o.length !== c.length ? !1 : c.every((d) => yi(n[d], a[d], i));
  }
  return Array.isArray(n) && Array.isArray(a)
    ? n.length !== a.length
      ? !1
      : !n.some((s, o) => !yi(s, a[o], i))
    : !1;
}
function ci(n) {
  let a, i;
  const s = new Promise((o, c) => {
    ((a = o), (i = c));
  });
  return (
    (s.status = 'pending'),
    (s.resolve = (o) => {
      ((s.status = 'resolved'), (s.value = o), a(o), n?.(o));
    }),
    (s.reject = (o) => {
      ((s.status = 'rejected'), i(o));
    }),
    s
  );
}
function Xx(n) {
  return /%[0-9A-Fa-f]{2}/.test(n);
}
function ta(n) {
  return ou(n.filter((a) => a !== void 0).join('/'));
}
function ou(n) {
  return n.replace(/\/{2,}/g, '/');
}
function Dd(n) {
  return n === '/' ? n : n.replace(/^\/{1,}/, '');
}
function vr(n) {
  return n === '/' ? n : n.replace(/\/{1,}$/, '');
}
function Kx(n) {
  return vr(Dd(n));
}
function Zo(n, a) {
  return n?.endsWith('/') && n !== '/' && n !== `${a}/` ? n.slice(0, -1) : n;
}
function $x(n, a, i) {
  return Zo(n, i) === Zo(a, i);
}
function Wx({ basepath: n, base: a, to: i, trailingSlash: s = 'never', caseSensitive: o }) {
  var c, d;
  ((a = Go(n, a, o)), (i = Go(n, i, o)));
  let h = _i(a);
  const p = _i(i);
  (h.length > 1 && ((c = di(h)) == null ? void 0 : c.value) === '/' && h.pop(),
    p.forEach((v, g) => {
      v.value === '/'
        ? g
          ? g === p.length - 1 && h.push(v)
          : (h = [v])
        : v.value === '..'
          ? h.pop()
          : v.value === '.' || h.push(v);
    }),
    h.length > 1 &&
      (((d = di(h)) == null ? void 0 : d.value) === '/'
        ? s === 'never' && h.pop()
        : s === 'always' && h.push({ type: 'pathname', value: '/' })));
  const m = ta([n, ...h.map((v) => v.value)]);
  return ou(m);
}
function _i(n) {
  if (!n) return [];
  n = ou(n);
  const a = [];
  if (
    (n.slice(0, 1) === '/' && ((n = n.substring(1)), a.push({ type: 'pathname', value: '/' })), !n)
  )
    return a;
  const i = n.split('/').filter(Boolean);
  return (
    a.push(
      ...i.map((s) =>
        s === '$' || s === '*'
          ? { type: 'wildcard', value: s }
          : s.charAt(0) === '$'
            ? { type: 'param', value: s }
            : {
                type: 'pathname',
                value: s.includes('%25')
                  ? s
                      .split('%25')
                      .map((o) => decodeURI(o))
                      .join('%25')
                  : decodeURI(s),
              }
      )
    ),
    n.slice(-1) === '/' && ((n = n.substring(1)), a.push({ type: 'pathname', value: '/' })),
    a
  );
}
function Eo({ path: n, params: a, leaveWildcards: i, leaveParams: s, decodeCharMap: o }) {
  const c = _i(n);
  function d(m) {
    const v = a[m],
      g = typeof v == 'string';
    return ['*', '_splat'].includes(m) ? (g ? encodeURI(v) : v) : g ? Jx(v, o) : v;
  }
  const h = {},
    p = ta(
      c.map((m) => {
        if (m.type === 'wildcard') {
          h._splat = a._splat;
          const v = d('_splat');
          return i ? `${m.value}${v ?? ''}` : v;
        }
        if (m.type === 'param') {
          const v = m.value.substring(1);
          if (((h[v] = a[v]), s)) {
            const g = d(m.value);
            return `${m.value}${g ?? ''}`;
          }
          return d(v) ?? 'undefined';
        }
        return m.value;
      })
    );
  return { usedParams: h, interpolatedPath: p };
}
function Jx(n, a) {
  let i = encodeURIComponent(n);
  if (a) for (const [s, o] of a) i = i.replaceAll(s, o);
  return i;
}
function Ro(n, a, i) {
  const s = Ix(n, a, i);
  if (!(i.to && !s)) return s ?? {};
}
function Go(n, a, i = !1) {
  const s = i ? n : n.toLowerCase(),
    o = i ? a : a.toLowerCase();
  switch (!0) {
    case s === '/':
      return a;
    case o === s:
      return '';
    case a.length < n.length:
      return a;
    case o[s.length] !== '/':
      return a;
    case o.startsWith(s):
      return a.slice(n.length);
    default:
      return a;
  }
}
function Ix(n, a, i) {
  if (n !== '/' && !a.startsWith(n)) return;
  a = Go(n, a, i.caseSensitive);
  const s = Go(n, `${i.to ?? '$'}`, i.caseSensitive),
    o = _i(a),
    c = _i(s);
  (a.startsWith('/') || o.unshift({ type: 'pathname', value: '/' }),
    s.startsWith('/') || c.unshift({ type: 'pathname', value: '/' }));
  const d = {};
  return (() => {
    for (let p = 0; p < Math.max(o.length, c.length); p++) {
      const m = o[p],
        v = c[p],
        g = p >= o.length - 1,
        S = p >= c.length - 1;
      if (v) {
        if (v.type === 'wildcard') {
          const w = decodeURI(ta(o.slice(p).map((R) => R.value)));
          return ((d['*'] = w), (d._splat = w), !0);
        }
        if (v.type === 'pathname') {
          if (v.value === '/' && !m?.value) return !0;
          if (m) {
            if (i.caseSensitive) {
              if (v.value !== m.value) return !1;
            } else if (v.value.toLowerCase() !== m.value.toLowerCase()) return !1;
          }
        }
        if (!m) return !1;
        if (v.type === 'param') {
          if (m.value === '/') return !1;
          m.value.charAt(0) !== '$' && (d[v.value.substring(1)] = decodeURIComponent(m.value));
        }
      }
      if (!g && S)
        return ((d['**'] = ta(o.slice(p + 1).map((w) => w.value))), !!i.fuzzy && v?.value !== '/');
    }
    return !0;
  })()
    ? d
    : void 0;
}
function e_(n = {}) {
  if (((n.isNotFound = !0), n.throw)) throw n;
  return n;
}
function an(n) {
  return !!n?.isNotFound;
}
const Qo = 'tsr-scroll-restoration-v1_3';
let ag = !1;
try {
  ag = typeof window < 'u' && typeof window.sessionStorage == 'object';
} catch {}
const t_ = (n, a) => {
    let i;
    return (...s) => {
      i ||
        (i = setTimeout(() => {
          (n(...s), (i = null));
        }, a));
    };
  },
  hi = ag
    ? {
        state: JSON.parse(window.sessionStorage.getItem(Qo) || 'null') || {},
        set: (a) => (
          (hi.state = pr(a, hi.state) || hi.state),
          window.sessionStorage.setItem(Qo, JSON.stringify(hi.state))
        ),
      }
    : void 0,
  ud = (n) => n.state.key || n.href;
function n_(n) {
  const a = [];
  let i;
  for (; (i = n.parentNode); )
    (a.unshift(`${n.tagName}:nth-child(${[].indexOf.call(i.children, n) + 1})`), (n = i));
  return `${a.join(' > ')}`.toLowerCase();
}
let Yo = !1;
function rg(n, a, i, s, o) {
  var c;
  let d;
  try {
    d = JSON.parse(sessionStorage.getItem(n) || '{}');
  } catch (m) {
    console.error(m);
    return;
  }
  const h = a || ((c = window.history.state) == null ? void 0 : c.key),
    p = d[h];
  ((Yo = !0),
    (() => {
      if (s && p) {
        for (const v in p) {
          const g = p[v];
          if (v === 'window') window.scrollTo({ top: g.scrollY, left: g.scrollX, behavior: i });
          else if (v) {
            const S = document.querySelector(v);
            S && ((S.scrollLeft = g.scrollX), (S.scrollTop = g.scrollY));
          }
        }
        return;
      }
      const m = window.location.hash.split('#')[1];
      if (m) {
        const v = (window.history.state || {}).__hashScrollIntoViewOptions ?? !0;
        if (v) {
          const g = document.getElementById(m);
          g && g.scrollIntoView(v);
        }
        return;
      }
      ['window', ...(o?.filter((v) => v !== 'window') ?? [])].forEach((v) => {
        const g = v === 'window' ? window : document.querySelector(v);
        g && g.scrollTo({ top: 0, left: 0, behavior: i });
      });
    })(),
    (Yo = !1));
}
function a_(n, a) {
  if (
    ((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
    typeof document > 'u' || n.isScrollRestorationSetup)
  )
    return;
  ((n.isScrollRestorationSetup = !0), (Yo = !1));
  const s = n.options.getScrollRestorationKey || ud;
  window.history.scrollRestoration = 'manual';
  const o = (c) => {
    if (Yo || !n.isScrollRestoring) return;
    let d = '';
    if (c.target === document || c.target === window) d = 'window';
    else {
      const p = c.target.getAttribute('data-scroll-restoration-id');
      p ? (d = `[data-scroll-restoration-id="${p}"]`) : (d = n_(c.target));
    }
    const h = s(n.state.location);
    hi.set((p) => {
      const m = (p[h] = p[h] || {}),
        v = (m[d] = m[d] || {});
      if (d === 'window') ((v.scrollX = window.scrollX || 0), (v.scrollY = window.scrollY || 0));
      else if (d) {
        const g = document.querySelector(d);
        g && ((v.scrollX = g.scrollLeft || 0), (v.scrollY = g.scrollTop || 0));
      }
      return p;
    });
  };
  (typeof document < 'u' && document.addEventListener('scroll', t_(o, 100), !0),
    n.subscribe('onRendered', (c) => {
      const d = s(c.toLocation);
      if (!n.resetNextScroll) {
        n.resetNextScroll = !0;
        return;
      }
      (rg(
        Qo,
        d,
        n.options.scrollRestorationBehavior || void 0,
        n.isScrollRestoring || void 0,
        n.options.scrollToTopSelectors || void 0
      ),
        n.isScrollRestoring && hi.set((h) => ((h[d] = h[d] || {}), h)));
    }));
}
function r_(n) {
  if (typeof document < 'u' && document.querySelector) {
    const a = n.state.location.state.__hashScrollIntoViewOptions ?? !0;
    if (a && n.state.location.hash !== '') {
      const i = document.getElementById(n.state.location.hash);
      i && i.scrollIntoView(a);
    }
  }
}
function i_(n, a) {
  const i = Object.entries(n).flatMap(([o, c]) =>
    Array.isArray(c) ? c.map((d) => [o, String(d)]) : [[o, String(c)]]
  );
  return '' + new URLSearchParams(i).toString();
}
function zf(n) {
  if (!n) return '';
  const a = Xx(n) ? decodeURIComponent(n) : decodeURIComponent(encodeURIComponent(n));
  return a === 'false' ? !1 : a === 'true' ? !0 : +a * 0 === 0 && +a + '' === a ? +a : a;
}
function s_(n, a) {
  const i = n;
  return [...new URLSearchParams(i).entries()].reduce((c, [d, h]) => {
    const p = c[d];
    return (p == null ? (c[d] = zf(h)) : (c[d] = Array.isArray(p) ? [...p, zf(h)] : [p, zf(h)]), c);
  }, {});
}
const l_ = u_(JSON.parse),
  o_ = c_(JSON.stringify, JSON.parse);
function u_(n) {
  return (a) => {
    a.substring(0, 1) === '?' && (a = a.substring(1));
    const i = s_(a);
    for (const s in i) {
      const o = i[s];
      if (typeof o == 'string')
        try {
          i[s] = n(o);
        } catch {}
    }
    return i;
  };
}
function c_(n, a) {
  function i(s) {
    if (typeof s == 'object' && s !== null)
      try {
        return n(s);
      } catch {}
    else if (typeof s == 'string' && typeof a == 'function')
      try {
        return (a(s), n(s));
      } catch {}
    return s;
  }
  return (s) => {
    ((s = { ...s }),
      Object.keys(s).forEach((c) => {
        const d = s[c];
        typeof d > 'u' || d === void 0 ? delete s[c] : (s[c] = i(d));
      }));
    const o = i_(s).toString();
    return o ? `?${o}` : '';
  };
}
const fn = '__root__';
function f_(n) {
  if (
    ((n.isRedirect = !0),
    (n.statusCode = n.statusCode || n.code || 307),
    (n.headers = n.headers || {}),
    !n.reloadDocument)
  ) {
    n.reloadDocument = !1;
    try {
      (new URL(`${n.href}`), (n.reloadDocument = !0));
    } catch {}
  }
  if (n.throw) throw n;
  return n;
}
function mr(n) {
  return !!n?.isRedirect;
}
function jf(n) {
  return !!n?.isRedirect && n.href;
}
function yr(n) {
  const a = n.resolvedLocation,
    i = n.location,
    s = a?.pathname !== i.pathname,
    o = a?.href !== i.href,
    c = a?.hash !== i.hash;
  return { fromLocation: a, toLocation: i, pathChanged: s, hrefChanged: o, hashChanged: c };
}
class d_ {
  constructor(a) {
    ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (i) => i()),
      (this.update = (i) => {
        var s;
        i.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.'
          );
        const o = this.options;
        ((this.options = { ...this.options, ...i }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((c) => [encodeURIComponent(c), c])
              )
            : void 0),
          (!this.basepath || (i.basepath && i.basepath !== o.basepath)) &&
            (i.basepath === void 0 || i.basepath === '' || i.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${Kx(i.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? Yx({ initialEntries: [this.basepath || '/'] }) : Qx())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            ((this.__store = new sd(m_(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (c) => !['redirected'].includes(c.status)
                  ),
                };
              },
            })),
            a_(this)),
          typeof window < 'u' &&
            'CSS' in window &&
            typeof ((s = window.CSS) == null ? void 0 : s.supports) == 'function' &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              'selector(:active-view-transition-type(a)'
            )));
      }),
      (this.buildRouteTree = () => {
        ((this.routesById = {}), (this.routesByPath = {}));
        const i = this.options.notFoundRoute;
        i &&
          (i.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }),
          (this.routesById[i.id] = i));
        const s = (d) => {
          d.forEach((h, p) => {
            h.init({ originalIndex: p, defaultSsr: this.options.defaultSsr });
            const m = this.routesById[h.id];
            if (
              (ea(!m, `Duplicate routes found with id: ${String(h.id)}`),
              (this.routesById[h.id] = h),
              !h.isRoot && h.path)
            ) {
              const g = vr(h.fullPath);
              (!this.routesByPath[g] || h.fullPath.endsWith('/')) && (this.routesByPath[g] = h);
            }
            const v = h.children;
            v?.length && s(v);
          });
        };
        s([this.routeTree]);
        const o = [];
        (Object.values(this.routesById).forEach((d, h) => {
          var p;
          if (d.isRoot || !d.path) return;
          const m = Dd(d.fullPath),
            v = _i(m);
          for (; v.length > 1 && ((p = v[0]) == null ? void 0 : p.value) === '/'; ) v.shift();
          const g = v.map((S) =>
            S.value === '/' ? 0.75 : S.type === 'param' ? 0.5 : S.type === 'wildcard' ? 0.25 : 1
          );
          o.push({ child: d, trimmed: m, parsed: v, index: h, scores: g });
        }),
          (this.flatRoutes = o
            .sort((d, h) => {
              const p = Math.min(d.scores.length, h.scores.length);
              for (let m = 0; m < p; m++)
                if (d.scores[m] !== h.scores[m]) return h.scores[m] - d.scores[m];
              if (d.scores.length !== h.scores.length) return h.scores.length - d.scores.length;
              for (let m = 0; m < p; m++)
                if (d.parsed[m].value !== h.parsed[m].value)
                  return d.parsed[m].value > h.parsed[m].value ? 1 : -1;
              return d.index - h.index;
            })
            .map((d, h) => ((d.child.rank = h), d.child))));
      }),
      (this.subscribe = (i, s) => {
        const o = { eventType: i, fn: s };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (i) => {
        this.subscribers.forEach((s) => {
          s.eventType === i.type && s.fn(i);
        });
      }),
      (this.parseLocation = (i, s) => {
        const o = ({ pathname: p, search: m, hash: v, state: g }) => {
            const S = this.options.parseSearch(m),
              w = this.options.stringifySearch(S);
            return {
              pathname: p,
              searchStr: w,
              search: nn(i?.search, S),
              hash: v.split('#').reverse()[0] ?? '',
              href: `${p}${w}${v}`,
              state: nn(i?.state, g),
            };
          },
          c = o(s ?? this.history.location),
          { __tempLocation: d, __tempKey: h } = c.state;
        if (d && (!h || h === this.tempLocationKey)) {
          const p = o(d);
          return (
            (p.state.key = c.state.key),
            delete p.state.__tempLocation,
            { ...p, maskedLocation: c }
          );
        }
        return c;
      }),
      (this.resolvePathWithBase = (i, s) =>
        Wx({
          basepath: this.basepath,
          base: i,
          to: ou(s),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.matchRoutes = (i, s, o) =>
        typeof i == 'string'
          ? this.matchRoutesInternal({ pathname: i, search: s }, o)
          : this.matchRoutesInternal(i, s)),
      (this.getMatchedRoutes = (i, s) => {
        let o = {};
        const c = vr(i.pathname),
          d = (v) =>
            Ro(this.basepath, c, {
              to: v.fullPath,
              caseSensitive: v.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let h = s?.to !== void 0 ? this.routesByPath[s.to] : void 0;
        h
          ? (o = d(h))
          : (h = this.flatRoutes.find((v) => {
              const g = d(v);
              return g ? ((o = g), !0) : !1;
            }));
        let p = h || this.routesById[fn];
        const m = [p];
        for (; p.parentRoute; ) ((p = p.parentRoute), m.unshift(p));
        return { matchedRoutes: m, routeParams: o, foundRoute: h };
      }),
      (this.cancelMatch = (i) => {
        const s = this.getMatch(i);
        s && (s.abortController.abort(), clearTimeout(s.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var i;
        (i = this.state.pendingMatches) == null ||
          i.forEach((s) => {
            this.cancelMatch(s.id);
          });
      }),
      (this.buildLocation = (i) => {
        const s = (c = {}, d) => {
            var h, p, m, v, g, S, w;
            const R = c._fromLocation
                ? this.matchRoutes(c._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              x =
                c.from != null
                  ? R.find((te) =>
                      Ro(this.basepath, vr(te.pathname), {
                        to: c.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                    )
                  : void 0,
              D = x?.pathname || this.latestLocation.pathname;
            ea(c.from == null || x != null, 'Could not find match for from: ' + c.from);
            const O =
                (h = this.state.pendingMatches) != null && h.length
                  ? (p = di(this.state.pendingMatches)) == null
                    ? void 0
                    : p.search
                  : ((m = di(R)) == null ? void 0 : m.search) || this.latestLocation.search,
              L = d?.matchedRoutes.filter((te) => R.find((ne) => ne.routeId === te.id));
            let H;
            if (c.to) {
              const te =
                x?.fullPath ||
                ((v = di(R)) == null ? void 0 : v.fullPath) ||
                this.latestLocation.pathname;
              H = this.resolvePathWithBase(te, `${c.to}`);
            } else {
              const te =
                this.routesById[
                  (g = L?.find((ne) => {
                    const ce = Eo({
                      path: ne.fullPath,
                      params: d?.routeParams ?? {},
                      decodeCharMap: this.pathParamsDecodeCharMap,
                    }).interpolatedPath;
                    return ta([this.basepath, ce]) === D;
                  })) == null
                    ? void 0
                    : g.id
                ];
              H = this.resolvePathWithBase(D, te?.to ?? D);
            }
            const Y = { ...((S = di(R)) == null ? void 0 : S.params) };
            let q = (c.params ?? !0) === !0 ? Y : { ...Y, ...pr(c.params, Y) };
            (Object.keys(q).length > 0 &&
              d?.matchedRoutes
                .map((te) => {
                  var ne;
                  return (
                    ((ne = te.options.params) == null ? void 0 : ne.stringify) ??
                    te.options.stringifyParams
                  );
                })
                .filter(Boolean)
                .forEach((te) => {
                  q = { ...q, ...te(q) };
                }),
              (H = Eo({
                path: H,
                params: q ?? {},
                leaveWildcards: !1,
                leaveParams: i.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }).interpolatedPath));
            let Z = O;
            if (i._includeValidateSearch && (w = this.options.search) != null && w.strict) {
              let te = {};
              (d?.matchedRoutes.forEach((ne) => {
                try {
                  ne.options.validateSearch &&
                    (te = { ...te, ...(Lf(ne.options.validateSearch, { ...te, ...Z }) ?? {}) });
                } catch {}
              }),
                (Z = te));
            }
            ((Z = ((te) => {
              const ne =
                  d?.matchedRoutes.reduce((P, J) => {
                    var B;
                    const pe = [];
                    if ('search' in J.options)
                      (B = J.options.search) != null &&
                        B.middlewares &&
                        pe.push(...J.options.search.middlewares);
                    else if (J.options.preSearchFilters || J.options.postSearchFilters) {
                      const T = ({ search: V, next: se }) => {
                        let I = V;
                        'preSearchFilters' in J.options &&
                          J.options.preSearchFilters &&
                          (I = J.options.preSearchFilters.reduce((fe, oe) => oe(fe), V));
                        const $ = se(I);
                        return 'postSearchFilters' in J.options && J.options.postSearchFilters
                          ? J.options.postSearchFilters.reduce((fe, oe) => oe(fe), $)
                          : $;
                      };
                      pe.push(T);
                    }
                    if (i._includeValidateSearch && J.options.validateSearch) {
                      const T = ({ search: V, next: se }) => {
                        const I = se(V);
                        try {
                          return { ...I, ...(Lf(J.options.validateSearch, I) ?? {}) };
                        } catch {
                          return I;
                        }
                      };
                      pe.push(T);
                    }
                    return P.concat(pe);
                  }, []) ?? [],
                ce = ({ search: P }) => (c.search ? (c.search === !0 ? P : pr(c.search, P)) : {});
              ne.push(ce);
              const ie = (P, J) => {
                if (P >= ne.length) return J;
                const B = ne[P];
                return B({ search: J, next: (T) => ie(P + 1, T) });
              };
              return ie(0, te);
            })(Z)),
              (Z = nn(O, Z)));
            const M = this.options.stringifySearch(Z),
              A =
                c.hash === !0
                  ? this.latestLocation.hash
                  : c.hash
                    ? pr(c.hash, this.latestLocation.hash)
                    : void 0,
              X = A ? `#${A}` : '';
            let ae =
              c.state === !0
                ? this.latestLocation.state
                : c.state
                  ? pr(c.state, this.latestLocation.state)
                  : {};
            return (
              (ae = nn(this.latestLocation.state, ae)),
              {
                pathname: H,
                search: Z,
                searchStr: M,
                state: ae,
                hash: A ?? '',
                href: `${H}${M}${X}`,
                unmaskOnReload: c.unmaskOnReload,
              }
            );
          },
          o = (c = {}, d) => {
            var h;
            const p = s(c);
            let m = d ? s(d) : void 0;
            if (!m) {
              let S = {};
              const w =
                (h = this.options.routeMasks) == null
                  ? void 0
                  : h.find((R) => {
                      const x = Ro(this.basepath, p.pathname, {
                        to: R.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return x ? ((S = x), !0) : !1;
                    });
              if (w) {
                const { from: R, ...x } = w;
                ((d = { ...od(i, ['from']), ...x, params: S }), (m = s(d)));
              }
            }
            const v = this.getMatchedRoutes(p, c),
              g = s(c, v);
            if (m) {
              const S = this.getMatchedRoutes(m, d),
                w = s(d, S);
              g.maskedLocation = w;
            }
            return g;
          };
        return i.mask ? o(i, { ...od(i, ['from']), ...i.mask }) : o(i);
      }),
      (this.commitLocation = ({ viewTransition: i, ignoreBlocker: s, ...o }) => {
        const c = () => {
            const p = ['key', '__TSR_index', '__hashScrollIntoViewOptions'];
            p.forEach((v) => {
              o.state[v] = this.latestLocation.state[v];
            });
            const m = yi(o.state, this.latestLocation.state);
            return (
              p.forEach((v) => {
                delete o.state[v];
              }),
              m
            );
          },
          d = this.latestLocation.href === o.href,
          h = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = ci(() => {
            h?.resolve();
          })),
          d && c())
        )
          this.load();
        else {
          let { maskedLocation: p, hashScrollIntoView: m, ...v } = o;
          (p &&
            ((v = {
              ...p,
              state: {
                ...p.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...v,
                  search: v.searchStr,
                  state: { ...v.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (v.state.__tempKey = this.tempLocationKey)),
            (v.state.__hashScrollIntoViewOptions =
              m ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = i),
            this.history[o.replace ? 'replace' : 'push'](v.href, v.state, { ignoreBlocker: s }));
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: i,
        resetScroll: s,
        hashScrollIntoView: o,
        viewTransition: c,
        ignoreBlocker: d,
        href: h,
        ...p
      } = {}) => {
        if (h) {
          const v = this.history.location.state.__TSR_index,
            g = Ps(h, { __TSR_index: i ? v : v + 1 });
          ((p.to = g.pathname),
            (p.search = this.options.parseSearch(g.search)),
            (p.hash = g.hash.slice(1)));
        }
        const m = this.buildLocation({ ...p, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...m,
          viewTransition: c,
          replace: i,
          resetScroll: s,
          hashScrollIntoView: o,
          ignoreBlocker: d,
        });
      }),
      (this.navigate = ({ to: i, reloadDocument: s, href: o, ...c }) => {
        if (s) {
          if (!o) {
            const d = this.buildLocation({ to: i, ...c });
            o = this.history.createHref(d.href);
          }
          c.replace ? window.location.replace(o) : (window.location.href = o);
          return;
        }
        return this.buildAndCommitLocation({ ...c, href: o, to: i });
      }),
      (this.load = async (i) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let s, o, c;
        for (
          c = new Promise((d) => {
            this.startTransition(async () => {
              var h;
              try {
                const p = this.latestLocation,
                  m = this.state.resolvedLocation;
                this.cancelMatches();
                let v;
                (kf(() => {
                  ((v = this.matchRoutes(p)),
                    this.__store.setState((g) => ({
                      ...g,
                      status: 'pending',
                      isLoading: !0,
                      location: p,
                      pendingMatches: v,
                      cachedMatches: g.cachedMatches.filter((S) => !v.find((w) => w.id === S.id)),
                    })));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: 'onBeforeNavigate',
                      ...yr({ resolvedLocation: m, location: p }),
                    }),
                  this.emit({ type: 'onBeforeLoad', ...yr({ resolvedLocation: m, location: p }) }),
                  await this.loadMatches({
                    sync: i?.sync,
                    matches: v,
                    location: p,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let g, S, w;
                        (kf(() => {
                          (this.__store.setState((R) => {
                            const x = R.matches,
                              D = R.pendingMatches || R.matches;
                            return (
                              (g = x.filter((O) => !D.find((L) => L.id === O.id))),
                              (S = D.filter((O) => !x.find((L) => L.id === O.id))),
                              (w = x.filter((O) => D.find((L) => L.id === O.id))),
                              {
                                ...R,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: D,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...R.cachedMatches,
                                  ...g.filter((O) => O.status !== 'error'),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache());
                        }),
                          [
                            [g, 'onLeave'],
                            [S, 'onEnter'],
                            [w, 'onStay'],
                          ].forEach(([R, x]) => {
                            R.forEach((D) => {
                              var O, L;
                              (L = (O = this.looseRoutesById[D.routeId].options)[x]) == null ||
                                L.call(O, D);
                            });
                          }));
                      });
                    },
                  }));
              } catch (p) {
                (jf(p)
                  ? ((s = p),
                    this.isServer || this.navigate({ ...s, replace: !0, ignoreBlocker: !0 }))
                  : an(p) && (o = p),
                  this.__store.setState((m) => ({
                    ...m,
                    statusCode: s
                      ? s.statusCode
                      : o
                        ? 404
                        : m.matches.some((v) => v.status === 'error')
                          ? 500
                          : 200,
                    redirect: s,
                  })));
              }
              (this.latestLoadPromise === c &&
                ((h = this.commitLocationPromise) == null || h.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                d());
            });
          }),
            this.latestLoadPromise = c,
            await c;
          this.latestLoadPromise && c !== this.latestLoadPromise;
        )
          await this.latestLoadPromise;
        this.hasNotFoundMatch() && this.__store.setState((d) => ({ ...d, statusCode: 404 }));
      }),
      (this.startViewTransition = (i) => {
        const s = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          s &&
            typeof document < 'u' &&
            'startViewTransition' in document &&
            typeof document.startViewTransition == 'function')
        ) {
          let o;
          if (typeof s == 'object' && this.isViewTransitionTypesSupported) {
            const c = this.latestLocation,
              d = this.state.resolvedLocation,
              h =
                typeof s.types == 'function'
                  ? s.types(yr({ resolvedLocation: d, location: c }))
                  : s.types;
            o = { update: i, types: h };
          } else o = i;
          document.startViewTransition(o);
        } else i();
      }),
      (this.updateMatch = (i, s) => {
        var o;
        let c;
        const d = (o = this.state.pendingMatches) == null ? void 0 : o.find((v) => v.id === i),
          h = this.state.matches.find((v) => v.id === i),
          p = this.state.cachedMatches.find((v) => v.id === i),
          m = d ? 'pendingMatches' : h ? 'matches' : p ? 'cachedMatches' : '';
        return (
          m &&
            this.__store.setState((v) => {
              var g;
              return {
                ...v,
                [m]: (g = v[m]) == null ? void 0 : g.map((S) => (S.id === i ? (c = s(S)) : S)),
              };
            }),
          c
        );
      }),
      (this.getMatch = (i) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((s) => s.id === i)),
      (this.loadMatches = async ({
        location: i,
        matches: s,
        preload: o,
        onReady: c,
        updateMatch: d = this.updateMatch,
        sync: h,
      }) => {
        let p,
          m = !1;
        const v = async () => {
            m || ((m = !0), await c?.());
          },
          g = (w) => !!(o && !this.state.matches.find((R) => R.id === w));
        !this.isServer && !this.state.matches.length && v();
        const S = (w, R) => {
          var x, D, O, L;
          if (jf(R) && !R.reloadDocument) throw R;
          if (mr(R) || an(R)) {
            if (
              (d(w.id, (H) => ({
                ...H,
                status: mr(R) ? 'redirected' : an(R) ? 'notFound' : 'error',
                isFetching: !1,
                error: R,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              R.routeId || (R.routeId = w.routeId),
              (x = w.beforeLoadPromise) == null || x.resolve(),
              (D = w.loaderPromise) == null || D.resolve(),
              (O = w.loadPromise) == null || O.resolve(),
              mr(R))
            )
              throw ((m = !0), (R = this.resolveRedirect({ ...R, _fromLocation: i })), R);
            if (an(R))
              throw (
                this._handleNotFound(s, R, { updateMatch: d }),
                (L = this.serverSsr) == null ||
                  L.onMatchSettled({ router: this, match: this.getMatch(w.id) }),
                R
              );
          }
        };
        try {
          (await new Promise((w, R) => {
            (async () => {
              var x, D, O, L;
              try {
                const H = (Z, G, M) => {
                  var A, X;
                  const { id: ae, routeId: te } = s[Z],
                    ne = this.looseRoutesById[te];
                  if (G instanceof Promise) throw G;
                  ((G.routerCode = M), (p = p ?? Z), S(this.getMatch(ae), G));
                  try {
                    (X = (A = ne.options).onError) == null || X.call(A, G);
                  } catch (ce) {
                    ((G = ce), S(this.getMatch(ae), G));
                  }
                  d(ae, (ce) => {
                    var ie, P;
                    return (
                      (ie = ce.beforeLoadPromise) == null || ie.resolve(),
                      (P = ce.loadPromise) == null || P.resolve(),
                      {
                        ...ce,
                        error: G,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [Z, { id: G, routeId: M }] of s.entries()) {
                  const A = this.getMatch(G),
                    X = (x = s[Z - 1]) == null ? void 0 : x.id,
                    ae = this.looseRoutesById[M],
                    te = ae.options.pendingMs ?? this.options.defaultPendingMs,
                    ne = !!(
                      c &&
                      !this.isServer &&
                      !g(G) &&
                      (ae.options.loader || ae.options.beforeLoad) &&
                      typeof te == 'number' &&
                      te !== 1 / 0 &&
                      (ae.options.pendingComponent ??
                        ((D = this.options) == null ? void 0 : D.defaultPendingComponent))
                    );
                  let ce = !0;
                  if (
                    ((A.beforeLoadPromise || A.loaderPromise) &&
                      (ne &&
                        setTimeout(() => {
                          try {
                            v();
                          } catch {}
                        }, te),
                      await A.beforeLoadPromise,
                      (ce = this.getMatch(G).status !== 'success')),
                    ce)
                  ) {
                    try {
                      d(G, (ve) => {
                        const ue = ve.loadPromise;
                        return {
                          ...ve,
                          loadPromise: ci(() => {
                            ue?.resolve();
                          }),
                          beforeLoadPromise: ci(),
                        };
                      });
                      const ie = new AbortController();
                      let P;
                      ne &&
                        (P = setTimeout(() => {
                          try {
                            v();
                          } catch {}
                        }, te));
                      const { paramsError: J, searchError: B } = this.getMatch(G);
                      (J && H(Z, J, 'PARSE_PARAMS'), B && H(Z, B, 'VALIDATE_SEARCH'));
                      const pe = () =>
                        X ? this.getMatch(X).context : (this.options.context ?? {});
                      d(G, (ve) => ({
                        ...ve,
                        isFetching: 'beforeLoad',
                        fetchCount: ve.fetchCount + 1,
                        abortController: ie,
                        pendingTimeout: P,
                        context: { ...pe(), ...ve.__routeContext },
                      }));
                      const { search: T, params: V, context: se, cause: I } = this.getMatch(G),
                        $ = g(G),
                        fe = {
                          search: T,
                          abortController: ie,
                          params: V,
                          preload: $,
                          context: se,
                          location: i,
                          navigate: (ve) => this.navigate({ ...ve, _fromLocation: i }),
                          buildLocation: this.buildLocation,
                          cause: $ ? 'preload' : I,
                          matches: s,
                        },
                        oe =
                          (await ((L = (O = ae.options).beforeLoad) == null
                            ? void 0
                            : L.call(O, fe))) ?? {};
                      ((mr(oe) || an(oe)) && H(Z, oe, 'BEFORE_LOAD'),
                        d(G, (ve) => ({
                          ...ve,
                          __beforeLoadContext: oe,
                          context: { ...pe(), ...ve.__routeContext, ...oe },
                          abortController: ie,
                        })));
                    } catch (ie) {
                      H(Z, ie, 'BEFORE_LOAD');
                    }
                    d(G, (ie) => {
                      var P;
                      return (
                        (P = ie.beforeLoadPromise) == null || P.resolve(),
                        { ...ie, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const Y = s.slice(0, p),
                  q = [];
                (Y.forEach(({ id: Z, routeId: G }, M) => {
                  q.push(
                    (async () => {
                      const { loaderPromise: A } = this.getMatch(Z);
                      let X = !1,
                        ae = !1;
                      if (A) {
                        await A;
                        const te = this.getMatch(Z);
                        te.error && S(te, te.error);
                      } else {
                        const te = q[M - 1],
                          ne = this.looseRoutesById[G],
                          ce = () => {
                            const {
                                params: I,
                                loaderDeps: $,
                                abortController: fe,
                                context: oe,
                                cause: ve,
                              } = this.getMatch(Z),
                              ue = g(Z);
                            return {
                              params: I,
                              deps: $,
                              preload: !!ue,
                              parentMatchPromise: te,
                              abortController: fe,
                              context: oe,
                              location: i,
                              navigate: (Se) => this.navigate({ ...Se, _fromLocation: i }),
                              cause: ue ? 'preload' : ve,
                              route: ne,
                            };
                          },
                          ie = Date.now() - this.getMatch(Z).updatedAt,
                          P = g(Z),
                          J = P
                            ? (ne.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (ne.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          B = ne.options.shouldReload,
                          pe = typeof B == 'function' ? B(ce()) : B;
                        d(Z, (I) => ({
                          ...I,
                          loaderPromise: ci(),
                          preload: !!P && !this.state.matches.find(($) => $.id === Z),
                        }));
                        const T = async () => {
                            var I, $, fe, oe, ve, ue, Se, Oe, Ze, at, rt;
                            try {
                              const Et = async () => {
                                const Fe = this.getMatch(Z);
                                Fe.minPendingPromise && (await Fe.minPendingPromise);
                              };
                              try {
                                (this.loadRouteChunk(ne),
                                  d(Z, (kn) => ({ ...kn, isFetching: 'loader' })));
                                const Fe = await (($ = (I = ne.options).loader) == null
                                  ? void 0
                                  : $.call(I, ce()));
                                (S(this.getMatch(Z), Fe), await ne._lazyPromise, await Et());
                                const et = {
                                    matches: s,
                                    match: this.getMatch(Z),
                                    params: this.getMatch(Z).params,
                                    loaderData: Fe,
                                  },
                                  tt =
                                    (oe = (fe = ne.options).head) == null
                                      ? void 0
                                      : oe.call(fe, et),
                                  sn = tt?.meta,
                                  ia = tt?.links,
                                  sa = tt?.scripts,
                                  Le =
                                    (ue = (ve = ne.options).scripts) == null
                                      ? void 0
                                      : ue.call(ve, et),
                                  Ye =
                                    (Oe = (Se = ne.options).headers) == null
                                      ? void 0
                                      : Oe.call(Se, { loaderData: Fe });
                                d(Z, (kn) => ({
                                  ...kn,
                                  error: void 0,
                                  status: 'success',
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Fe,
                                  meta: sn,
                                  links: ia,
                                  headScripts: sa,
                                  headers: Ye,
                                  scripts: Le,
                                }));
                              } catch (Fe) {
                                let et = Fe;
                                (await Et(), S(this.getMatch(Z), Fe));
                                try {
                                  (at = (Ze = ne.options).onError) == null || at.call(Ze, Fe);
                                } catch (tt) {
                                  ((et = tt), S(this.getMatch(Z), tt));
                                }
                                d(Z, (tt) => ({
                                  ...tt,
                                  error: et,
                                  status: 'error',
                                  isFetching: !1,
                                }));
                              }
                              ((rt = this.serverSsr) == null ||
                                rt.onMatchSettled({ router: this, match: this.getMatch(Z) }),
                                await ne._componentsPromise);
                            } catch (Et) {
                              (d(Z, (Fe) => ({ ...Fe, loaderPromise: void 0 })),
                                S(this.getMatch(Z), Et));
                            }
                          },
                          { status: V, invalid: se } = this.getMatch(Z);
                        ((X = V === 'success' && (se || (pe ?? ie > J))),
                          (P && ne.options.preload === !1) ||
                            (X && !h
                              ? ((ae = !0),
                                (async () => {
                                  try {
                                    await T();
                                    const { loaderPromise: I, loadPromise: $ } = this.getMatch(Z);
                                    (I?.resolve(),
                                      $?.resolve(),
                                      d(Z, (fe) => ({ ...fe, loaderPromise: void 0 })));
                                  } catch (I) {
                                    jf(I) && (await this.navigate(I));
                                  }
                                })())
                              : (V !== 'success' || (X && h)) && (await T())));
                      }
                      if (!ae) {
                        const { loaderPromise: te, loadPromise: ne } = this.getMatch(Z);
                        (te?.resolve(), ne?.resolve());
                      }
                      return (
                        d(Z, (te) => ({
                          ...te,
                          isFetching: ae ? te.isFetching : !1,
                          loaderPromise: ae ? te.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(Z)
                      );
                    })()
                  );
                }),
                  await Promise.all(q),
                  w());
              } catch (H) {
                R(H);
              }
            })();
          }),
            await v());
        } catch (w) {
          if (mr(w) || an(w)) throw (an(w) && !o && (await v()), w);
        }
        return s;
      }),
      (this.invalidate = (i) => {
        const s = (o) => {
          var c;
          return (((c = i?.filter) == null ? void 0 : c.call(i, o)) ?? !0)
            ? {
                ...o,
                invalid: !0,
                ...(o.status === 'error' ? { status: 'pending', error: void 0 } : {}),
              }
            : o;
        };
        return (
          this.__store.setState((o) => {
            var c;
            return {
              ...o,
              matches: o.matches.map(s),
              cachedMatches: o.cachedMatches.map(s),
              pendingMatches: (c = o.pendingMatches) == null ? void 0 : c.map(s),
            };
          }),
          this.load({ sync: i?.sync })
        );
      }),
      (this.resolveRedirect = (i) => {
        const s = i;
        return (s.href || (s.href = this.buildLocation(s).href), s);
      }),
      (this.clearCache = (i) => {
        const s = i?.filter;
        s !== void 0
          ? this.__store.setState((o) => ({
              ...o,
              cachedMatches: o.cachedMatches.filter((c) => !s(c)),
            }))
          : this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const i = (s) => {
          const o = this.looseRoutesById[s.routeId];
          if (!o.options.loader) return !0;
          const c =
            (s.preload
              ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
          return !(s.status !== 'error' && Date.now() - s.updatedAt < c);
        };
        this.clearCache({ filter: i });
      }),
      (this.loadRouteChunk = (i) => (
        i._lazyPromise === void 0 &&
          (i.lazyFn
            ? (i._lazyPromise = i.lazyFn().then((s) => {
                const { id: o, ...c } = s.options;
                Object.assign(i.options, c);
              }))
            : (i._lazyPromise = Promise.resolve())),
        i._componentsPromise === void 0 &&
          (i._componentsPromise = i._lazyPromise.then(() =>
            Promise.all(
              ig.map(async (s) => {
                const o = i.options[s];
                o?.preload && (await o.preload());
              })
            )
          )),
        i._componentsPromise
      )),
      (this.preloadRoute = async (i) => {
        const s = this.buildLocation(i);
        let o = this.matchRoutes(s, { throwOnError: !0, preload: !0, dest: i });
        const c = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((h) => h.id)
          ),
          d = new Set([...c, ...this.state.cachedMatches.map((h) => h.id)]);
        kf(() => {
          o.forEach((h) => {
            d.has(h.id) ||
              this.__store.setState((p) => ({ ...p, cachedMatches: [...p.cachedMatches, h] }));
          });
        });
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: s,
              preload: !0,
              updateMatch: (h, p) => {
                c.has(h) ? (o = o.map((m) => (m.id === h ? p(m) : m))) : this.updateMatch(h, p);
              },
            })),
            o
          );
        } catch (h) {
          if (mr(h))
            return h.reloadDocument ? void 0 : await this.preloadRoute({ ...h, _fromLocation: s });
          an(h) || console.error(h);
          return;
        }
      }),
      (this.matchRoute = (i, s) => {
        const o = {
            ...i,
            to: i.to ? this.resolvePathWithBase(i.from || '', i.to) : void 0,
            params: i.params || {},
            leaveParams: !0,
          },
          c = this.buildLocation(o);
        if (s?.pending && this.state.status !== 'pending') return !1;
        const h = (s?.pending === void 0 ? !this.state.isLoading : s.pending)
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          p = Ro(this.basepath, h.pathname, { ...s, to: c.pathname });
        return !p || (i.params && !yi(p, i.params, { partial: !0 }))
          ? !1
          : p && (s?.includeSearch ?? !0)
            ? yi(h.search, c.search, { partial: !0 })
              ? p
              : !1
            : p;
      }),
      (this._handleNotFound = (i, s, { updateMatch: o = this.updateMatch } = {}) => {
        var c;
        const d = this.routesById[s.routeId ?? ''] ?? this.routeTree,
          h = {};
        for (const m of i) h[m.routeId] = m;
        (!d.options.notFoundComponent &&
          (c = this.options) != null &&
          c.defaultNotFoundComponent &&
          (d.options.notFoundComponent = this.options.defaultNotFoundComponent),
          ea(d.options.notFoundComponent));
        const p = h[d.id];
        (ea(p, 'Could not find match for route: ' + d.id),
          o(p.id, (m) => ({ ...m, status: 'notFound', error: s, isFetching: !1 })),
          s.routerCode === 'BEFORE_LOAD' &&
            d.parentRoute &&
            ((s.routeId = d.parentRoute.id), this._handleNotFound(i, s, { updateMatch: o })));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((i) => i.status === 'notFound' || i.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...a,
        caseSensitive: a.caseSensitive ?? !1,
        notFoundMode: a.notFoundMode ?? 'fuzzy',
        stringifySearch: a.stringifySearch ?? o_,
        parseSearch: a.parseSearch ?? l_,
      }),
      typeof document < 'u' && (window.__TSR_ROUTER__ = this));
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(a, i) {
    const { foundRoute: s, matchedRoutes: o, routeParams: c } = this.getMatchedRoutes(a, i?.dest);
    let d = !1;
    (s ? s.path !== '/' && c['**'] : vr(a.pathname)) &&
      (this.options.notFoundRoute ? o.push(this.options.notFoundRoute) : (d = !0));
    const h = (() => {
        if (d) {
          if (this.options.notFoundMode !== 'root')
            for (let g = o.length - 1; g >= 0; g--) {
              const S = o[g];
              if (S.children) return S.id;
            }
          return fn;
        }
      })(),
      p = o.map((g) => {
        var S;
        let w;
        const R = ((S = g.options.params) == null ? void 0 : S.parse) ?? g.options.parseParams;
        if (R)
          try {
            const x = R(c);
            Object.assign(c, x);
          } catch (x) {
            if (((w = new h_(x.message, { cause: x })), i?.throwOnError)) throw w;
            return w;
          }
      }),
      m = [],
      v = (g) => (g?.id ? (g.context ?? this.options.context ?? {}) : (this.options.context ?? {}));
    return (
      o.forEach((g, S) => {
        var w, R;
        const x = m[S - 1],
          [D, O, L] = (() => {
            const ne = x?.search ?? a.search,
              ce = x?._strictSearch ?? {};
            try {
              const ie = Lf(g.options.validateSearch, { ...ne }) ?? {};
              return [{ ...ne, ...ie }, { ...ce, ...ie }, void 0];
            } catch (ie) {
              let P = ie;
              if ((ie instanceof Fo || (P = new Fo(ie.message, { cause: ie })), i?.throwOnError))
                throw P;
              return [ne, {}, P];
            }
          })(),
          H = ((R = (w = g.options).loaderDeps) == null ? void 0 : R.call(w, { search: D })) ?? '',
          Y = H ? JSON.stringify(H) : '',
          { usedParams: q, interpolatedPath: Z } = Eo({
            path: g.fullPath,
            params: c,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          G =
            Eo({
              path: g.id,
              params: c,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }).interpolatedPath + Y,
          M = this.getMatch(G),
          A = this.state.matches.find((ne) => ne.routeId === g.id),
          X = A ? 'stay' : 'enter';
        let ae;
        if (M)
          ae = {
            ...M,
            cause: X,
            params: A ? nn(A.params, c) : c,
            _strictParams: q,
            search: nn(A ? A.search : M.search, D),
            _strictSearch: O,
          };
        else {
          const ne =
            g.options.loader || g.options.beforeLoad || g.lazyFn || p_(g) ? 'pending' : 'success';
          ae = {
            id: G,
            index: S,
            routeId: g.id,
            params: A ? nn(A.params, c) : c,
            _strictParams: q,
            pathname: ta([this.basepath, Z]),
            updatedAt: Date.now(),
            search: A ? nn(A.search, D) : D,
            _strictSearch: O,
            searchError: void 0,
            status: ne,
            isFetching: !1,
            error: void 0,
            paramsError: p[S],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: X,
            loaderDeps: A ? nn(A.loaderDeps, H) : H,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: g.options.staticData || {},
            loadPromise: ci(),
            fullPath: g.fullPath,
          };
        }
        (i?.preload || (ae.globalNotFound = h === g.id), (ae.searchError = L));
        const te = v(x);
        ((ae.context = { ...te, ...ae.__routeContext, ...ae.__beforeLoadContext }), m.push(ae));
      }),
      m.forEach((g, S) => {
        var w, R, x, D, O, L, H, Y;
        const q = this.looseRoutesById[g.routeId];
        if (!this.getMatch(g.id) && i?._buildLocation !== !0) {
          const G = m[S - 1],
            M = v(G),
            A = {
              deps: g.loaderDeps,
              params: g.params,
              context: M,
              location: a,
              navigate: (X) => this.navigate({ ...X, _fromLocation: a }),
              buildLocation: this.buildLocation,
              cause: g.cause,
              abortController: g.abortController,
              preload: !!g.preload,
              matches: m,
            };
          ((g.__routeContext =
            ((R = (w = q.options).context) == null ? void 0 : R.call(w, A)) ?? {}),
            (g.context = { ...M, ...g.__routeContext, ...g.__beforeLoadContext }));
        }
        if (g.status === 'success') {
          g.headers =
            (D = (x = q.options).headers) == null
              ? void 0
              : D.call(x, { loaderData: g.loaderData });
          const G = { matches: m, match: g, params: g.params, loaderData: g.loaderData },
            M = (L = (O = q.options).head) == null ? void 0 : L.call(O, G);
          ((g.links = M?.links),
            (g.headScripts = M?.scripts),
            (g.meta = M?.meta),
            (g.scripts = (Y = (H = q.options).scripts) == null ? void 0 : Y.call(H, G)));
        }
      }),
      m
    );
  }
}
class Fo extends Error {}
class h_ extends Error {}
function m_(n) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: void 0,
    location: n,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function Lf(n, a) {
  if (n == null) return {};
  if ('~standard' in n) {
    const i = n['~standard'].validate(a);
    if (i instanceof Promise) throw new Fo('Async validation not supported');
    if (i.issues) throw new Fo(JSON.stringify(i.issues, void 0, 2), { cause: i });
    return i.value;
  }
  return 'parse' in n ? n.parse(a) : typeof n == 'function' ? n(a) : {};
}
const ig = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent'];
function p_(n) {
  var a;
  for (const i of ig) if ((a = n.options[i]) != null && a.preload) return !0;
  return !1;
}
const v_ = 'Error preloading route! ☝️';
class sg {
  constructor(a) {
    if (
      ((this.init = (i) => {
        var s, o;
        this.originalIndex = i.originalIndex;
        const c = this.options,
          d = !c?.path && !c?.id;
        if (
          ((this.parentRoute =
            (o = (s = this.options).getParentRoute) == null ? void 0 : o.call(s)),
          d)
        )
          this._path = fn;
        else if (!this.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance."
          );
        let h = d ? fn : c?.path;
        h && h !== '/' && (h = Dd(h));
        const p = c?.id || h;
        let m = d ? fn : ta([this.parentRoute.id === fn ? '' : this.parentRoute.id, p]);
        (h === fn && (h = '/'), m !== fn && (m = ta(['/', m])));
        const v = m === fn ? '/' : ta([this.parentRoute.fullPath, h]);
        ((this._path = h),
          (this._id = m),
          (this._fullPath = v),
          (this._to = v),
          (this._ssr = c?.ssr ?? i.defaultSsr ?? !0));
      }),
      (this.addChildren = (i) => this._addFileChildren(i)),
      (this._addFileChildren = (i) => (
        Array.isArray(i) && (this.children = i),
        typeof i == 'object' && i !== null && (this.children = Object.values(i)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (i) => (Object.assign(this.options, i), this)),
      (this.update = (i) => (Object.assign(this.options, i), this)),
      (this.lazy = (i) => ((this.lazyFn = i), this)),
      (this.options = a || {}),
      (this.isRoot = !a?.getParentRoute),
      a?.id && a?.path)
    )
      throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
}
class y_ extends sg {
  constructor(a) {
    super(a);
  }
}
function Nd(n) {
  const a = n.errorComponent ?? uu;
  return C.jsx(g_, {
    getResetKey: n.getResetKey,
    onCatch: n.onCatch,
    children: ({ error: i, reset: s }) =>
      i ? _.createElement(a, { error: i, reset: s }) : n.children,
  });
}
class g_ extends _.Component {
  constructor() {
    (super(...arguments), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(a) {
    return { resetKey: a.getResetKey() };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(a, i) {
    i.error && i.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(a, i) {
    this.props.onCatch && this.props.onCatch(a, i);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function uu({ error: n }) {
  const [a, i] = _.useState(!1);
  return C.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      C.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          C.jsx('strong', { style: { fontSize: '1rem' }, children: 'Something went wrong!' }),
          C.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => i((s) => !s),
            children: a ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      C.jsx('div', { style: { height: '.25rem' } }),
      a
        ? C.jsx('div', {
            children: C.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: n.message ? C.jsx('code', { children: n.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function b_({ children: n, fallback: a = null }) {
  return S_() ? C.jsx(Po.Fragment, { children: n }) : C.jsx(Po.Fragment, { children: a });
}
function S_() {
  return Po.useSyncExternalStore(
    x_,
    () => !0,
    () => !1
  );
}
function x_() {
  return () => {};
}
var Uf = { exports: {} },
  Bf = {},
  Hf = { exports: {} },
  Pf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ay;
function __() {
  if (ay) return Pf;
  ay = 1;
  var n = rl();
  function a(g, S) {
    return (g === S && (g !== 0 || 1 / g === 1 / S)) || (g !== g && S !== S);
  }
  var i = typeof Object.is == 'function' ? Object.is : a,
    s = n.useState,
    o = n.useEffect,
    c = n.useLayoutEffect,
    d = n.useDebugValue;
  function h(g, S) {
    var w = S(),
      R = s({ inst: { value: w, getSnapshot: S } }),
      x = R[0].inst,
      D = R[1];
    return (
      c(
        function () {
          ((x.value = w), (x.getSnapshot = S), p(x) && D({ inst: x }));
        },
        [g, w, S]
      ),
      o(
        function () {
          return (
            p(x) && D({ inst: x }),
            g(function () {
              p(x) && D({ inst: x });
            })
          );
        },
        [g]
      ),
      d(w),
      w
    );
  }
  function p(g) {
    var S = g.getSnapshot;
    g = g.value;
    try {
      var w = S();
      return !i(g, w);
    } catch {
      return !0;
    }
  }
  function m(g, S) {
    return S();
  }
  var v =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? m
      : h;
  return (
    (Pf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v),
    Pf
  );
}
var ry;
function w_() {
  return (ry || ((ry = 1), (Hf.exports = __())), Hf.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iy;
function E_() {
  if (iy) return Bf;
  iy = 1;
  var n = rl(),
    a = w_();
  function i(m, v) {
    return (m === v && (m !== 0 || 1 / m === 1 / v)) || (m !== m && v !== v);
  }
  var s = typeof Object.is == 'function' ? Object.is : i,
    o = a.useSyncExternalStore,
    c = n.useRef,
    d = n.useEffect,
    h = n.useMemo,
    p = n.useDebugValue;
  return (
    (Bf.useSyncExternalStoreWithSelector = function (m, v, g, S, w) {
      var R = c(null);
      if (R.current === null) {
        var x = { hasValue: !1, value: null };
        R.current = x;
      } else x = R.current;
      R = h(
        function () {
          function O(Z) {
            if (!L) {
              if (((L = !0), (H = Z), (Z = S(Z)), w !== void 0 && x.hasValue)) {
                var G = x.value;
                if (w(G, Z)) return (Y = G);
              }
              return (Y = Z);
            }
            if (((G = Y), s(H, Z))) return G;
            var M = S(Z);
            return w !== void 0 && w(G, M) ? ((H = Z), G) : ((H = Z), (Y = M));
          }
          var L = !1,
            H,
            Y,
            q = g === void 0 ? null : g;
          return [
            function () {
              return O(v());
            },
            q === null
              ? void 0
              : function () {
                  return O(q());
                },
          ];
        },
        [v, g, S, w]
      );
      var D = o(m, R[0], R[1]);
      return (
        d(
          function () {
            ((x.hasValue = !0), (x.value = D));
          },
          [D]
        ),
        p(D),
        D
      );
    }),
    Bf
  );
}
var sy;
function R_() {
  return (sy || ((sy = 1), (Uf.exports = E_())), Uf.exports);
}
var T_ = R_();
function C_(n, a = (i) => i) {
  return T_.useSyncExternalStoreWithSelector(
    n.subscribe,
    () => n.state,
    () => n.state,
    a,
    O_
  );
}
function O_(n, a) {
  if (Object.is(n, a)) return !0;
  if (typeof n != 'object' || n === null || typeof a != 'object' || a === null) return !1;
  if (n instanceof Map && a instanceof Map) {
    if (n.size !== a.size) return !1;
    for (const [s, o] of n) if (!a.has(s) || !Object.is(o, a.get(s))) return !1;
    return !0;
  }
  if (n instanceof Set && a instanceof Set) {
    if (n.size !== a.size) return !1;
    for (const s of n) if (!a.has(s)) return !1;
    return !0;
  }
  const i = Object.keys(n);
  if (i.length !== Object.keys(a).length) return !1;
  for (let s = 0; s < i.length; s++)
    if (!Object.prototype.hasOwnProperty.call(a, i[s]) || !Object.is(n[i[s]], a[i[s]])) return !1;
  return !0;
}
const qf = _.createContext(null);
function lg() {
  return typeof document > 'u'
    ? qf
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = qf), qf);
}
function Dn(n) {
  const a = _.useContext(lg());
  return (n?.warn, a);
}
function _t(n) {
  const a = Dn({ warn: n?.router === void 0 }),
    i = n?.router || a,
    s = _.useRef(void 0);
  return C_(i.__store, (o) => {
    if (n?.select) {
      if (n.structuralSharing ?? i.options.defaultStructuralSharing) {
        const c = nn(s.current, n.select(o));
        return ((s.current = c), c);
      }
      return n.select(o);
    }
    return o;
  });
}
const cu = _.createContext(void 0),
  A_ = _.createContext(void 0);
function ka(n) {
  const a = _.useContext(n.from ? A_ : cu);
  return _t({
    select: (s) => {
      const o = s.matches.find((c) => (n.from ? n.from === c.routeId : c.id === a));
      if (
        (ea(
          !((n.shouldThrow ?? !0) && !o),
          `Could not find ${n.from ? `an active match from "${n.from}"` : 'a nearest match!'}`
        ),
        o !== void 0)
      )
        return n.select ? n.select(o) : o;
    },
    structuralSharing: n.structuralSharing,
  });
}
function og(n) {
  return ka({
    from: n.from,
    strict: n.strict,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.loaderData) : a.loaderData),
  });
}
function ug(n) {
  const { select: a, ...i } = n;
  return ka({ ...i, select: (s) => (a ? a(s.loaderDeps) : s.loaderDeps) });
}
function cg(n) {
  return ka({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.params) : a.params),
  });
}
function fg(n) {
  return ka({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (a) => (n.select ? n.select(a.search) : a.search),
  });
}
function dg(n) {
  const { navigate: a } = Dn();
  return _.useCallback((i) => a({ from: n?.from, ...i }), [n?.from, a]);
}
let M_ = class extends sg {
  constructor(a) {
    (super(a),
      (this.useMatch = (i) =>
        ka({ select: i?.select, from: this.id, structuralSharing: i?.structuralSharing })),
      (this.useRouteContext = (i) =>
        ka({ ...i, from: this.id, select: (s) => (i?.select ? i.select(s.context) : s.context) })),
      (this.useSearch = (i) =>
        fg({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useParams = (i) =>
        cg({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (i) => ug({ ...i, from: this.id })),
      (this.useLoaderData = (i) => og({ ...i, from: this.id })),
      (this.useNavigate = () => dg({ from: this.fullPath })),
      (this.$$typeof = Symbol.for('react.memo')));
  }
};
function D_(n) {
  return new M_(n);
}
function N_() {
  return (n) => z_(n);
}
class k_ extends y_ {
  constructor(a) {
    (super(a),
      (this.useMatch = (i) =>
        ka({ select: i?.select, from: this.id, structuralSharing: i?.structuralSharing })),
      (this.useRouteContext = (i) =>
        ka({ ...i, from: this.id, select: (s) => (i?.select ? i.select(s.context) : s.context) })),
      (this.useSearch = (i) =>
        fg({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useParams = (i) =>
        cg({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (i) => ug({ ...i, from: this.id })),
      (this.useLoaderData = (i) => og({ ...i, from: this.id })),
      (this.useNavigate = () => dg({ from: this.fullPath })),
      (this.$$typeof = Symbol.for('react.memo')));
  }
}
function z_(n) {
  return new k_(n);
}
function kd(n) {
  return new j_(n, { silent: !0 }).createRoute;
}
class j_ {
  constructor(a, i) {
    ((this.path = a),
      (this.createRoute = (s) => {
        this.silent;
        const o = D_(s);
        return ((o.isRoot = !1), o);
      }),
      (this.silent = i?.silent));
  }
}
function L_(n) {
  const a = _t({ select: (i) => `not-found-${i.location.pathname}-${i.status}` });
  return C.jsx(Nd, {
    getResetKey: () => a,
    onCatch: (i, s) => {
      var o;
      if (an(i)) (o = n.onCatch) == null || o.call(n, i, s);
      else throw i;
    },
    errorComponent: ({ error: i }) => {
      var s;
      if (an(i)) return (s = n.fallback) == null ? void 0 : s.call(n, i);
      throw i;
    },
    children: n.children,
  });
}
function U_() {
  return C.jsx('p', { children: 'Not Found' });
}
function Lo(n) {
  return C.jsx(C.Fragment, { children: n.children });
}
function hg(n, a, i) {
  return a.options.notFoundComponent
    ? C.jsx(a.options.notFoundComponent, { data: i })
    : n.options.defaultNotFoundComponent
      ? C.jsx(n.options.defaultNotFoundComponent, { data: i })
      : C.jsx(U_, {});
}
var Vf, ly;
function B_() {
  if (ly) return Vf;
  ly = 1;
  const n = {},
    a = n.hasOwnProperty,
    i = (M, A) => {
      for (const X in M) a.call(M, X) && A(X, M[X]);
    },
    s = (M, A) => (
      A &&
        i(A, (X, ae) => {
          M[X] = ae;
        }),
      M
    ),
    o = (M, A) => {
      const X = M.length;
      let ae = -1;
      for (; ++ae < X; ) A(M[ae]);
    },
    c = (M) => '\\u' + ('0000' + M).slice(-4),
    d = (M, A) => {
      let X = M.toString(16);
      return A ? X : X.toUpperCase();
    },
    h = n.toString,
    p = Array.isArray,
    m = (M) => typeof Buffer == 'function' && Buffer.isBuffer(M),
    v = (M) => h.call(M) == '[object Object]',
    g = (M) => typeof M == 'string' || h.call(M) == '[object String]',
    S = (M) => typeof M == 'number' || h.call(M) == '[object Number]',
    w = (M) => typeof M == 'bigint',
    R = (M) => typeof M == 'function',
    x = (M) => h.call(M) == '[object Map]',
    D = (M) => h.call(M) == '[object Set]',
    O = { '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '	': '\\t' },
    L = /[\\\b\f\n\r\t]/,
    H = /[0-9]/,
    Y = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    q = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    Z = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    G = (M, A) => {
      const X = () => {
          ((J = P), ++A.indentLevel, (P = A.indent.repeat(A.indentLevel)));
        },
        ae = {
          escapeEverything: !1,
          minimal: !1,
          isScriptContext: !1,
          quotes: 'single',
          wrap: !1,
          es6: !1,
          json: !1,
          compact: !0,
          lowercaseHex: !1,
          numbers: 'decimal',
          indent: '	',
          indentLevel: 0,
          __inline1__: !1,
          __inline2__: !1,
        },
        te = A && A.json;
      (te && ((ae.quotes = 'double'), (ae.wrap = !0)),
        (A = s(ae, A)),
        A.quotes != 'single' &&
          A.quotes != 'double' &&
          A.quotes != 'backtick' &&
          (A.quotes = 'single'));
      const ne = A.quotes == 'double' ? '"' : A.quotes == 'backtick' ? '`' : "'",
        ce = A.compact,
        ie = A.lowercaseHex;
      let P = A.indent.repeat(A.indentLevel),
        J = '';
      const B = A.__inline1__,
        pe = A.__inline2__,
        T = ce
          ? ''
          : `
`;
      let V,
        se = !0;
      const I = A.numbers == 'binary',
        $ = A.numbers == 'octal',
        fe = A.numbers == 'decimal',
        oe = A.numbers == 'hexadecimal';
      if ((te && M && R(M.toJSON) && (M = M.toJSON()), !g(M))) {
        if (x(M))
          return M.size == 0
            ? 'new Map()'
            : (ce || ((A.__inline1__ = !0), (A.__inline2__ = !1)),
              'new Map(' + G(Array.from(M), A) + ')');
        if (D(M)) return M.size == 0 ? 'new Set()' : 'new Set(' + G(Array.from(M), A) + ')';
        if (m(M))
          return M.length == 0 ? 'Buffer.from([])' : 'Buffer.from(' + G(Array.from(M), A) + ')';
        if (p(M))
          return (
            (V = []),
            (A.wrap = !0),
            B && ((A.__inline1__ = !1), (A.__inline2__ = !0)),
            pe || X(),
            o(M, (ue) => {
              ((se = !1), pe && (A.__inline2__ = !1), V.push((ce || pe ? '' : P) + G(ue, A)));
            }),
            se
              ? '[]'
              : pe
                ? '[' + V.join(', ') + ']'
                : '[' + T + V.join(',' + T) + T + (ce ? '' : J) + ']'
          );
        if (S(M) || w(M)) {
          if (te) return JSON.stringify(Number(M));
          let ue;
          if (fe) ue = String(M);
          else if (oe) {
            let Se = M.toString(16);
            (ie || (Se = Se.toUpperCase()), (ue = '0x' + Se));
          } else I ? (ue = '0b' + M.toString(2)) : $ && (ue = '0o' + M.toString(8));
          return w(M) ? ue + 'n' : ue;
        } else
          return w(M)
            ? te
              ? JSON.stringify(Number(M))
              : M + 'n'
            : v(M)
              ? ((V = []),
                (A.wrap = !0),
                X(),
                i(M, (ue, Se) => {
                  ((se = !1), V.push((ce ? '' : P) + G(ue, A) + ':' + (ce ? '' : ' ') + G(Se, A)));
                }),
                se ? '{}' : '{' + T + V.join(',' + T) + T + (ce ? '' : J) + '}')
              : te
                ? JSON.stringify(M) || 'null'
                : String(M);
      }
      const ve = A.escapeEverything ? q : Z;
      return (
        (V = M.replace(ve, (ue, Se, Oe, Ze, at, rt) => {
          if (Se) {
            if (A.minimal) return Se;
            const Fe = Se.charCodeAt(0),
              et = Se.charCodeAt(1);
            if (A.es6) {
              const tt = (Fe - 55296) * 1024 + et - 56320 + 65536;
              return '\\u{' + d(tt, ie) + '}';
            }
            return c(d(Fe, ie)) + c(d(et, ie));
          }
          if (Oe) return c(d(Oe.charCodeAt(0), ie));
          if (ue == '\0' && !te && !H.test(rt.charAt(at + 1))) return '\\0';
          if (Ze) return Ze == ne || A.escapeEverything ? '\\' + Ze : Ze;
          if (L.test(ue)) return O[ue];
          if (A.minimal && !Y.test(ue)) return ue;
          const Et = d(ue.charCodeAt(0), ie);
          return te || Et.length > 2 ? c(Et) : '\\x' + ('00' + Et).slice(-2);
        })),
        ne == '`' && (V = V.replace(/\$\{/g, '\\${')),
        A.isScriptContext &&
          (V = V.replace(/<\/(script|style)/gi, '<\\/$1').replace(
            /<!--/g,
            te ? '\\u003C!--' : '\\x3C!--'
          )),
        A.wrap && (V = ne + V + ne),
        V
      );
    };
  return ((G.version = '3.0.2'), (Vf = G), Vf);
}
B_();
function H_({ children: n, log: a }) {
  return typeof document < 'u'
    ? null
    : C.jsx('script', {
        className: 'tsr-once',
        dangerouslySetInnerHTML: {
          __html: [
            n,
            '',
            'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()',
          ].filter(Boolean).join(`
`),
        },
      });
}
function P_() {
  const n = Dn(),
    i = (n.options.getScrollRestorationKey || ud)(n.latestLocation),
    s = i !== ud(n.latestLocation) ? i : null;
  return !n.isScrollRestoring || !n.isServer
    ? null
    : C.jsx(H_, {
        children: `(${rg.toString()})(${JSON.stringify(Qo)},${JSON.stringify(s)}, undefined, true)`,
        log: !1,
      });
}
const mg = _.memo(function ({ matchId: a }) {
  var i, s;
  const o = Dn(),
    c = _t({
      select: (O) => {
        var L;
        return (L = O.matches.find((H) => H.id === a)) == null ? void 0 : L.routeId;
      },
    });
  ea(c);
  const d = o.routesById[c],
    h = d.options.pendingComponent ?? o.options.defaultPendingComponent,
    p = h ? C.jsx(h, {}) : null,
    m = d.options.errorComponent ?? o.options.defaultErrorComponent,
    v = d.options.onCatch ?? o.options.defaultOnCatch,
    g = d.isRoot
      ? (d.options.notFoundComponent ??
        ((i = o.options.notFoundRoute) == null ? void 0 : i.options.component))
      : d.options.notFoundComponent,
    S =
      (!d.isRoot || d.options.wrapInSuspense) &&
      (d.options.wrapInSuspense ??
        h ??
        ((s = d.options.errorComponent) == null ? void 0 : s.preload))
        ? _.Suspense
        : Lo,
    w = m ? Nd : Lo,
    R = g ? L_ : Lo,
    x = _t({ select: (O) => O.loadedAt }),
    D = _t({
      select: (O) => {
        var L;
        const H = O.matches.findIndex((Y) => Y.id === a);
        return (L = O.matches[H - 1]) == null ? void 0 : L.routeId;
      },
    });
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(cu.Provider, {
        value: a,
        children: C.jsx(S, {
          fallback: p,
          children: C.jsx(w, {
            getResetKey: () => x,
            errorComponent: m || uu,
            onCatch: (O, L) => {
              if (an(O)) throw O;
              v?.(O, L);
            },
            children: C.jsx(R, {
              fallback: (O) => {
                if (!g || (O.routeId && O.routeId !== c) || (!O.routeId && !d.isRoot)) throw O;
                return _.createElement(g, O);
              },
              children: C.jsx(V_, { matchId: a }),
            }),
          }),
        }),
      }),
      D === fn && o.options.scrollRestoration
        ? C.jsxs(C.Fragment, { children: [C.jsx(q_, {}), C.jsx(P_, {})] })
        : null,
    ],
  });
});
function q_() {
  const n = Dn(),
    a = _.useRef(void 0);
  return C.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      ref: (i) => {
        i &&
          (a.current === void 0 || a.current.href !== n.latestLocation.href) &&
          (n.emit({ type: 'onRendered', ...yr(n.state) }), (a.current = n.latestLocation));
      },
    },
    n.latestLocation.state.key
  );
}
const V_ = _.memo(function ({ matchId: a }) {
    var i, s, o;
    const c = Dn(),
      {
        match: d,
        key: h,
        routeId: p,
      } = _t({
        select: (S) => {
          const w = S.matches.findIndex((H) => H.id === a),
            R = S.matches[w],
            x = R.routeId,
            D = c.routesById[x].options.remountDeps ?? c.options.defaultRemountDeps,
            O = D?.({
              routeId: x,
              loaderDeps: R.loaderDeps,
              params: R._strictParams,
              search: R._strictSearch,
            });
          return {
            key: O ? JSON.stringify(O) : void 0,
            routeId: x,
            match: od(R, ['id', 'status', 'error']),
          };
        },
        structuralSharing: !0,
      }),
      m = c.routesById[p],
      v = _.useMemo(() => {
        const S = m.options.component ?? c.options.defaultComponent;
        return S ? C.jsx(S, {}, h) : C.jsx(zd, {});
      }, [h, m.options.component, c.options.defaultComponent]),
      g = (m.options.errorComponent ?? c.options.defaultErrorComponent) || uu;
    if (d.status === 'notFound') return (ea(an(d.error)), hg(c, m, d.error));
    if (d.status === 'redirected')
      throw (ea(mr(d.error)), (i = c.getMatch(d.id)) == null ? void 0 : i.loadPromise);
    if (d.status === 'error') {
      if (c.isServer)
        return C.jsx(g, { error: d.error, reset: void 0, info: { componentStack: '' } });
      throw d.error;
    }
    if (d.status === 'pending') {
      const S = m.options.pendingMinMs ?? c.options.defaultPendingMinMs;
      if (S && !((s = c.getMatch(d.id)) != null && s.minPendingPromise) && !c.isServer) {
        const w = ci();
        (Promise.resolve().then(() => {
          c.updateMatch(d.id, (R) => ({ ...R, minPendingPromise: w }));
        }),
          setTimeout(() => {
            (w.resolve(), c.updateMatch(d.id, (R) => ({ ...R, minPendingPromise: void 0 })));
          }, S));
      }
      throw (o = c.getMatch(d.id)) == null ? void 0 : o.loadPromise;
    }
    return v;
  }),
  zd = _.memo(function () {
    const a = Dn(),
      i = _.useContext(cu),
      s = _t({
        select: (m) => {
          var v;
          return (v = m.matches.find((g) => g.id === i)) == null ? void 0 : v.routeId;
        },
      }),
      o = a.routesById[s],
      c = _t({
        select: (m) => {
          const g = m.matches.find((S) => S.id === i);
          return (ea(g), g.globalNotFound);
        },
      }),
      d = _t({
        select: (m) => {
          var v;
          const g = m.matches,
            S = g.findIndex((w) => w.id === i);
          return (v = g[S + 1]) == null ? void 0 : v.id;
        },
      });
    if (c) return hg(a, o, void 0);
    if (!d) return null;
    const h = C.jsx(mg, { matchId: d }),
      p = a.options.defaultPendingComponent ? C.jsx(a.options.defaultPendingComponent, {}) : null;
    return i === fn ? C.jsx(_.Suspense, { fallback: p, children: h }) : h;
  });
function Z_(n) {
  return typeof n?.message != 'string'
    ? !1
    : n.message.startsWith('Failed to fetch dynamically imported module') ||
        n.message.startsWith('error loading dynamically imported module') ||
        n.message.startsWith('Importing a module script failed');
}
function jd(n, a, i) {
  let s, o, c, d;
  const h = () =>
      typeof document > 'u' && i?.() === !1
        ? ((o = () => null), Promise.resolve())
        : (s ||
            (s = n()
              .then((m) => {
                ((s = void 0), (o = m[a]));
              })
              .catch((m) => {
                if (
                  ((c = m),
                  Z_(c) && c instanceof Error && typeof window < 'u' && typeof sessionStorage < 'u')
                ) {
                  const v = `tanstack_router_reload:${c.message}`;
                  sessionStorage.getItem(v) || (sessionStorage.setItem(v, '1'), (d = !0));
                }
              })),
          s),
    p = function (v) {
      if (d) throw (window.location.reload(), new Promise(() => {}));
      if (c) throw c;
      if (!o) throw h();
      return i?.() === !1
        ? C.jsx(b_, { fallback: C.jsx(zd, {}), children: _.createElement(o, v) })
        : _.createElement(o, v);
    };
  return ((p.preload = h), p);
}
var fu = Iy();
const G_ = Jy(fu),
  Ls = typeof window < 'u' ? _.useLayoutEffect : _.useEffect;
function Zf(n) {
  const a = _.useRef({ value: n, prev: null }),
    i = a.current.value;
  return (n !== i && (a.current = { value: n, prev: i }), a.current.prev);
}
function Q_(n, a, i = {}, s = {}) {
  const o = _.useRef(typeof IntersectionObserver == 'function'),
    c = _.useRef(null);
  return (
    _.useEffect(() => {
      if (!(!n.current || !o.current || s.disabled))
        return (
          (c.current = new IntersectionObserver(([d]) => {
            a(d);
          }, i)),
          c.current.observe(n.current),
          () => {
            var d;
            (d = c.current) == null || d.disconnect();
          }
        );
    }, [a, i, s.disabled, n]),
    c.current
  );
}
function Y_(n) {
  const a = _.useRef(null);
  return (_.useImperativeHandle(n, () => a.current, []), a);
}
function F_() {
  const n = Dn(),
    a = _.useRef({ router: n, mounted: !1 }),
    i = _t({ select: ({ isLoading: g }) => g }),
    [s, o] = _.useState(!1),
    c = _t({ select: (g) => g.matches.some((S) => S.status === 'pending'), structuralSharing: !0 }),
    d = Zf(i),
    h = i || s || c,
    p = Zf(h),
    m = i || c,
    v = Zf(m);
  return (
    n.isServer ||
      (n.startTransition = (g) => {
        (o(!0),
          _.startTransition(() => {
            (g(), o(!1));
          }));
      }),
    _.useEffect(() => {
      const g = n.history.subscribe(n.load),
        S = n.buildLocation({
          to: n.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        vr(n.latestLocation.href) !== vr(S.href) && n.commitLocation({ ...S, replace: !0 }),
        () => {
          g();
        }
      );
    }, [n, n.history]),
    Ls(() => {
      if ((typeof window < 'u' && n.clientSsr) || (a.current.router === n && a.current.mounted))
        return;
      ((a.current = { router: n, mounted: !0 }),
        (async () => {
          try {
            await n.load();
          } catch (S) {
            console.error(S);
          }
        })());
    }, [n]),
    Ls(() => {
      d && !i && n.emit({ type: 'onLoad', ...yr(n.state) });
    }, [d, n, i]),
    Ls(() => {
      v && !m && n.emit({ type: 'onBeforeRouteMount', ...yr(n.state) });
    }, [m, v, n]),
    Ls(() => {
      p &&
        !h &&
        (n.emit({ type: 'onResolved', ...yr(n.state) }),
        n.__store.setState((g) => ({ ...g, status: 'idle', resolvedLocation: g.location })),
        r_(n));
    }, [h, p, n]),
    null
  );
}
function X_() {
  const n = Dn(),
    a = n.options.defaultPendingComponent ? C.jsx(n.options.defaultPendingComponent, {}) : null,
    i = n.isServer || (typeof document < 'u' && n.clientSsr) ? Lo : _.Suspense,
    s = C.jsxs(i, { fallback: a, children: [C.jsx(F_, {}), C.jsx(K_, {})] });
  return n.options.InnerWrap ? C.jsx(n.options.InnerWrap, { children: s }) : s;
}
function K_() {
  const n = _t({
      select: (i) => {
        var s;
        return (s = i.matches[0]) == null ? void 0 : s.id;
      },
    }),
    a = _t({ select: (i) => i.loadedAt });
  return C.jsx(cu.Provider, {
    value: n,
    children: C.jsx(Nd, {
      getResetKey: () => a,
      errorComponent: uu,
      onCatch: (i) => {
        i.message || i.toString();
      },
      children: n ? C.jsx(mg, { matchId: n }) : null,
    }),
  });
}
function $_(n) {
  return _t({
    select: (a) => {
      const i = a.matches;
      return n?.select ? n.select(i) : i;
    },
    structuralSharing: n?.structuralSharing,
  });
}
function W_(n, a) {
  const i = Dn(),
    [s, o] = _.useState(!1),
    c = _.useRef(!1),
    d = Y_(a),
    {
      activeProps: h = () => ({ className: 'active' }),
      inactiveProps: p = () => ({}),
      activeOptions: m,
      to: v,
      preload: g,
      preloadDelay: S,
      hashScrollIntoView: w,
      replace: R,
      startTransition: x,
      resetScroll: D,
      viewTransition: O,
      children: L,
      target: H,
      disabled: Y,
      style: q,
      className: Z,
      onClick: G,
      onFocus: M,
      onMouseEnter: A,
      onMouseLeave: X,
      onTouchStart: ae,
      ignoreBlocker: te,
      ...ne
    } = n,
    { params: ce, search: ie, hash: P, state: J, mask: B, reloadDocument: pe, ...T } = ne,
    V = _.useMemo(() => {
      try {
        return (new URL(`${v}`), 'external');
      } catch {}
      return 'internal';
    }, [v]),
    se = _t({ select: (Le) => Le.location.search, structuralSharing: !0 }),
    I = $_({
      select: (Le) => {
        var Ye;
        return n.from ?? ((Ye = Le[Le.length - 1]) == null ? void 0 : Ye.fullPath);
      },
    }),
    $ = _.useMemo(() => ({ ...n, from: I }), [n, I]),
    fe = _.useMemo(() => i.buildLocation($), [i, $, se]),
    oe = _.useMemo(
      () => ($.reloadDocument ? !1 : (g ?? i.options.defaultPreload)),
      [i.options.defaultPreload, g, $.reloadDocument]
    ),
    ve = S ?? i.options.defaultPreloadDelay ?? 0,
    ue = _t({
      select: (Le) => {
        if (m?.exact) {
          if (!$x(Le.location.pathname, fe.pathname, i.basepath)) return !1;
        } else {
          const Ye = Zo(Le.location.pathname, i.basepath).split('/');
          if (
            !Zo(fe.pathname, i.basepath)
              .split('/')
              .every((bu, cl) => bu === Ye[cl])
          )
            return !1;
        }
        return (m?.includeSearch ?? !0) &&
          !yi(Le.location.search, fe.search, {
            partial: !m?.exact,
            ignoreUndefined: !m?.explicitUndefined,
          })
          ? !1
          : m?.includeHash
            ? Le.location.hash === fe.hash
            : !0;
      },
    }),
    Se = _.useCallback(() => {
      i.preloadRoute($).catch((Le) => {
        (console.warn(Le), console.warn(v_));
      });
    }, [$, i]),
    Oe = _.useCallback(
      (Le) => {
        Le?.isIntersecting && Se();
      },
      [Se]
    );
  if (
    (Q_(d, Oe, { rootMargin: '100px' }, { disabled: !!Y || oe !== 'viewport' }),
    Ls(() => {
      c.current || (!Y && oe === 'render' && (Se(), (c.current = !0)));
    }, [Y, Se, oe]),
    V === 'external')
  )
    return {
      ...T,
      ref: d,
      type: V,
      href: v,
      ...(L && { children: L }),
      ...(H && { target: H }),
      ...(Y && { disabled: Y }),
      ...(q && { style: q }),
      ...(Z && { className: Z }),
      ...(G && { onClick: G }),
      ...(M && { onFocus: M }),
      ...(A && { onMouseEnter: A }),
      ...(X && { onMouseLeave: X }),
      ...(ae && { onTouchStart: ae }),
    };
  const Ze = (Le) => {
      if (!Y && !I_(Le) && !Le.defaultPrevented && (!H || H === '_self') && Le.button === 0) {
        (Le.preventDefault(),
          fu.flushSync(() => {
            o(!0);
          }));
        const Ye = i.subscribe('onResolved', () => {
          (Ye(), o(!1));
        });
        return i.navigate({
          ...$,
          replace: R,
          resetScroll: D,
          hashScrollIntoView: w,
          startTransition: x,
          viewTransition: O,
          ignoreBlocker: te,
        });
      }
    },
    at = (Le) => {
      Y || (oe && Se());
    },
    rt = at,
    Et = (Le) => {
      if (Y) return;
      const Ye = Le.target || {};
      if (oe) {
        if (Ye.preloadTimeout) return;
        Ye.preloadTimeout = setTimeout(() => {
          ((Ye.preloadTimeout = null), Se());
        }, ve);
      }
    },
    Fe = (Le) => {
      if (Y) return;
      const Ye = Le.target || {};
      Ye.preloadTimeout && (clearTimeout(Ye.preloadTimeout), (Ye.preloadTimeout = null));
    },
    et = (Le) => (Ye) => {
      var kn;
      ((kn = Ye.persist) == null || kn.call(Ye),
        Le.filter(Boolean).forEach((kt) => {
          Ye.defaultPrevented || kt(Ye);
        }));
    },
    tt = ue ? (pr(h, {}) ?? {}) : {},
    sn = ue ? {} : pr(p, {}),
    ia = [Z, tt.className, sn.className].filter(Boolean).join(' '),
    sa = { ...q, ...tt.style, ...sn.style };
  return {
    ...T,
    ...tt,
    ...sn,
    href: Y
      ? void 0
      : fe.maskedLocation
        ? i.history.createHref(fe.maskedLocation.href)
        : i.history.createHref(fe.href),
    ref: d,
    onClick: et([G, Ze]),
    onFocus: et([M, at]),
    onMouseEnter: et([A, Et]),
    onMouseLeave: et([X, Fe]),
    onTouchStart: et([ae, rt]),
    disabled: !!Y,
    target: H,
    ...(Object.keys(sa).length && { style: sa }),
    ...(ia && { className: ia }),
    ...(Y && { role: 'link', 'aria-disabled': !0 }),
    ...(ue && { 'data-status': 'active', 'aria-current': 'page' }),
    ...(s && { 'data-transitioning': 'transitioning' }),
  };
}
const J_ = _.forwardRef((n, a) => {
  const { _asChild: i, ...s } = n,
    { type: o, ref: c, ...d } = W_(s, a),
    h =
      typeof s.children == 'function'
        ? s.children({ isActive: d['data-status'] === 'active' })
        : s.children;
  return (typeof i > 'u' && delete d.disabled, _.createElement(i || 'a', { ...d, ref: c }, h));
});
function I_(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
const e1 = (n) => new t1(n);
class t1 extends d_ {
  constructor(a) {
    super(a);
  }
}
function n1({ router: n, children: a, ...i }) {
  n.update({ ...n.options, ...i, context: { ...n.options.context, ...i.context } });
  const s = lg(),
    o = C.jsx(s.Provider, { value: n, children: a });
  return n.options.Wrap ? C.jsx(n.options.Wrap, { children: o }) : o;
}
function a1({ router: n, ...a }) {
  return C.jsx(n1, { router: n, ...a, children: C.jsx(X_, {}) });
}
var Ai = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(n), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  wi = typeof window > 'u' || 'Deno' in globalThis;
function rn() {}
function r1(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function cd(n) {
  return typeof n == 'number' && n >= 0 && n !== 1 / 0;
}
function pg(n, a) {
  return Math.max(n + (a || 0) - Date.now(), 0);
}
function gi(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function dn(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function oy(n, a) {
  const { type: i = 'all', exact: s, fetchStatus: o, predicate: c, queryKey: d, stale: h } = n;
  if (d) {
    if (s) {
      if (a.queryHash !== Ld(d, a.options)) return !1;
    } else if (!Vs(a.queryKey, d)) return !1;
  }
  if (i !== 'all') {
    const p = a.isActive();
    if ((i === 'active' && !p) || (i === 'inactive' && p)) return !1;
  }
  return !(
    (typeof h == 'boolean' && a.isStale() !== h) ||
    (o && o !== a.state.fetchStatus) ||
    (c && !c(a))
  );
}
function uy(n, a) {
  const { exact: i, status: s, predicate: o, mutationKey: c } = n;
  if (c) {
    if (!a.options.mutationKey) return !1;
    if (i) {
      if (qs(a.options.mutationKey) !== qs(c)) return !1;
    } else if (!Vs(a.options.mutationKey, c)) return !1;
  }
  return !((s && a.state.status !== s) || (o && !o(a)));
}
function Ld(n, a) {
  return (a?.queryKeyHashFn || qs)(n);
}
function qs(n) {
  return JSON.stringify(n, (a, i) =>
    dd(i)
      ? Object.keys(i)
          .sort()
          .reduce((s, o) => ((s[o] = i[o]), s), {})
      : i
  );
}
function Vs(n, a) {
  return n === a
    ? !0
    : typeof n != typeof a
      ? !1
      : n && a && typeof n == 'object' && typeof a == 'object'
        ? Object.keys(a).every((i) => Vs(n[i], a[i]))
        : !1;
}
function Ud(n, a) {
  if (n === a) return n;
  const i = cy(n) && cy(a);
  if (i || (dd(n) && dd(a))) {
    const s = i ? n : Object.keys(n),
      o = s.length,
      c = i ? a : Object.keys(a),
      d = c.length,
      h = i ? [] : {};
    let p = 0;
    for (let m = 0; m < d; m++) {
      const v = i ? m : c[m];
      ((!i && s.includes(v)) || i) && n[v] === void 0 && a[v] === void 0
        ? ((h[v] = void 0), p++)
        : ((h[v] = Ud(n[v], a[v])), h[v] === n[v] && n[v] !== void 0 && p++);
    }
    return o === d && p === o ? n : h;
  }
  return a;
}
function fd(n, a) {
  if (!a || Object.keys(n).length !== Object.keys(a).length) return !1;
  for (const i in n) if (n[i] !== a[i]) return !1;
  return !0;
}
function cy(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function dd(n) {
  if (!fy(n)) return !1;
  const a = n.constructor;
  if (a === void 0) return !0;
  const i = a.prototype;
  return !(
    !fy(i) ||
    !i.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function fy(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function i1(n) {
  return new Promise((a) => {
    setTimeout(a, n);
  });
}
function hd(n, a, i) {
  return typeof i.structuralSharing == 'function'
    ? i.structuralSharing(n, a)
    : i.structuralSharing !== !1
      ? Ud(n, a)
      : a;
}
function s1(n, a, i = 0) {
  const s = [...n, a];
  return i && s.length > i ? s.slice(1) : s;
}
function l1(n, a, i = 0) {
  const s = [a, ...n];
  return i && s.length > i ? s.slice(0, -1) : s;
}
var Bd = Symbol();
function vg(n, a) {
  return !n.queryFn && a?.initialPromise
    ? () => a.initialPromise
    : !n.queryFn || n.queryFn === Bd
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
var o1 = class extends Ai {
    #t;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (!wi && window.addEventListener) {
            const a = () => n();
            return (
              window.addEventListener('visibilitychange', a, !1),
              () => {
                window.removeEventListener('visibilitychange', a);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(n) {
      ((this.#n = n),
        this.#e?.(),
        (this.#e = n((a) => {
          typeof a == 'boolean' ? this.setFocused(a) : this.onFocus();
        })));
    }
    setFocused(n) {
      this.#t !== n && ((this.#t = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((a) => {
        a(n);
      });
    }
    isFocused() {
      return typeof this.#t == 'boolean'
        ? this.#t
        : globalThis.document?.visibilityState !== 'hidden';
    }
  },
  Hd = new o1(),
  u1 = class extends Ai {
    #t = !0;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (!wi && window.addEventListener) {
            const a = () => n(!0),
              i = () => n(!1);
            return (
              window.addEventListener('online', a, !1),
              window.addEventListener('offline', i, !1),
              () => {
                (window.removeEventListener('online', a), window.removeEventListener('offline', i));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(n) {
      ((this.#n = n), this.#e?.(), (this.#e = n(this.setOnline.bind(this))));
    }
    setOnline(n) {
      this.#t !== n &&
        ((this.#t = n),
        this.listeners.forEach((i) => {
          i(n);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  Xo = new u1();
function md() {
  let n, a;
  const i = new Promise((o, c) => {
    ((n = o), (a = c));
  });
  ((i.status = 'pending'), i.catch(() => {}));
  function s(o) {
    (Object.assign(i, o), delete i.resolve, delete i.reject);
  }
  return (
    (i.resolve = (o) => {
      (s({ status: 'fulfilled', value: o }), n(o));
    }),
    (i.reject = (o) => {
      (s({ status: 'rejected', reason: o }), a(o));
    }),
    i
  );
}
function c1(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function yg(n) {
  return (n ?? 'online') === 'online' ? Xo.isOnline() : !0;
}
var gg = class extends Error {
  constructor(n) {
    (super('CancelledError'), (this.revert = n?.revert), (this.silent = n?.silent));
  }
};
function Gf(n) {
  return n instanceof gg;
}
function bg(n) {
  let a = !1,
    i = 0,
    s = !1,
    o;
  const c = md(),
    d = (x) => {
      s || (S(new gg(x)), n.abort?.());
    },
    h = () => {
      a = !0;
    },
    p = () => {
      a = !1;
    },
    m = () => Hd.isFocused() && (n.networkMode === 'always' || Xo.isOnline()) && n.canRun(),
    v = () => yg(n.networkMode) && n.canRun(),
    g = (x) => {
      s || ((s = !0), n.onSuccess?.(x), o?.(), c.resolve(x));
    },
    S = (x) => {
      s || ((s = !0), n.onError?.(x), o?.(), c.reject(x));
    },
    w = () =>
      new Promise((x) => {
        ((o = (D) => {
          (s || m()) && x(D);
        }),
          n.onPause?.());
      }).then(() => {
        ((o = void 0), s || n.onContinue?.());
      }),
    R = () => {
      if (s) return;
      let x;
      const D = i === 0 ? n.initialPromise : void 0;
      try {
        x = D ?? n.fn();
      } catch (O) {
        x = Promise.reject(O);
      }
      Promise.resolve(x)
        .then(g)
        .catch((O) => {
          if (s) return;
          const L = n.retry ?? (wi ? 0 : 3),
            H = n.retryDelay ?? c1,
            Y = typeof H == 'function' ? H(i, O) : H,
            q = L === !0 || (typeof L == 'number' && i < L) || (typeof L == 'function' && L(i, O));
          if (a || !q) {
            S(O);
            return;
          }
          (i++,
            n.onFail?.(i, O),
            i1(Y)
              .then(() => (m() ? void 0 : w()))
              .then(() => {
                a ? S(O) : R();
              }));
        });
    };
  return {
    promise: c,
    cancel: d,
    continue: () => (o?.(), c),
    cancelRetry: h,
    continueRetry: p,
    canStart: v,
    start: () => (v() ? R() : w().then(R), c),
  };
}
var f1 = (n) => setTimeout(n, 0);
function d1() {
  let n = [],
    a = 0,
    i = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    o = f1;
  const c = (h) => {
      a
        ? n.push(h)
        : o(() => {
            i(h);
          });
    },
    d = () => {
      const h = n;
      ((n = []),
        h.length &&
          o(() => {
            s(() => {
              h.forEach((p) => {
                i(p);
              });
            });
          }));
    };
  return {
    batch: (h) => {
      let p;
      a++;
      try {
        p = h();
      } finally {
        (a--, a || d());
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        c(() => {
          h(...p);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      i = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: (h) => {
      o = h;
    },
  };
}
var ft = d1(),
  Sg = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        cd(this.gcTime) &&
          (this.#t = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(this.gcTime || 0, n ?? (wi ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  h1 = class extends Sg {
    #t;
    #e;
    #n;
    #a;
    #r;
    #s;
    #l;
    constructor(n) {
      (super(),
        (this.#l = !1),
        (this.#s = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#a = n.client),
        (this.#n = this.#a.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#t = m1(this.options)),
        (this.state = n.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      ((this.options = { ...this.#s, ...n }), this.updateGcTime(this.options.gcTime));
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === 'idle' && this.#n.remove(this);
    }
    setData(n, a) {
      const i = hd(this.state.data, n, this.options);
      return (
        this.#i({ data: i, type: 'success', dataUpdatedAt: a?.updatedAt, manual: a?.manual }),
        i
      );
    }
    setState(n, a) {
      this.#i({ type: 'setState', state: n, setStateOptions: a });
    }
    cancel(n) {
      const a = this.#r?.promise;
      return (this.#r?.cancel(n), a ? a.then(rn).catch(rn) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#t));
    }
    isActive() {
      return this.observers.some((n) => dn(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Bd ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
          ? this.observers.some((n) => n.getCurrentResult().isStale)
          : this.state.data === void 0;
    }
    isStaleByTime(n = 0) {
      return (
        this.state.isInvalidated || this.state.data === void 0 || !pg(this.state.dataUpdatedAt, n)
      );
    }
    onFocus() {
      (this.observers.find((a) => a.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    onOnline() {
      (this.observers.find((a) => a.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: 'observerAdded', query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((a) => a !== n)),
        this.observers.length ||
          (this.#r && (this.#l ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: 'observerRemoved', query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: 'invalidate' });
    }
    fetch(n, a) {
      if (this.state.fetchStatus !== 'idle') {
        if (this.state.data !== void 0 && a?.cancelRefetch) this.cancel({ silent: !0 });
        else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const h = this.observers.find((p) => p.options.queryFn);
        h && this.setOptions(h.options);
      }
      const i = new AbortController(),
        s = (h) => {
          Object.defineProperty(h, 'signal', {
            enumerable: !0,
            get: () => ((this.#l = !0), i.signal),
          });
        },
        o = () => {
          const h = vg(this.options, a),
            p = { client: this.#a, queryKey: this.queryKey, meta: this.meta };
          return (
            s(p),
            (this.#l = !1),
            this.options.persister ? this.options.persister(h, p, this) : h(p)
          );
        },
        c = {
          fetchOptions: a,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#a,
          state: this.state,
          fetchFn: o,
        };
      (s(c),
        this.options.behavior?.onFetch(c, this),
        (this.#e = this.state),
        (this.state.fetchStatus === 'idle' || this.state.fetchMeta !== c.fetchOptions?.meta) &&
          this.#i({ type: 'fetch', meta: c.fetchOptions?.meta }));
      const d = (h) => {
        ((Gf(h) && h.silent) || this.#i({ type: 'error', error: h }),
          Gf(h) ||
            (this.#n.config.onError?.(h, this),
            this.#n.config.onSettled?.(this.state.data, h, this)),
          this.scheduleGc());
      };
      return (
        (this.#r = bg({
          initialPromise: a?.initialPromise,
          fn: c.fetchFn,
          abort: i.abort.bind(i),
          onSuccess: (h) => {
            if (h === void 0) {
              d(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(h);
            } catch (p) {
              d(p);
              return;
            }
            (this.#n.config.onSuccess?.(h, this),
              this.#n.config.onSettled?.(h, this.state.error, this),
              this.scheduleGc());
          },
          onError: d,
          onFail: (h, p) => {
            this.#i({ type: 'failed', failureCount: h, error: p });
          },
          onPause: () => {
            this.#i({ type: 'pause' });
          },
          onContinue: () => {
            this.#i({ type: 'continue' });
          },
          retry: c.options.retry,
          retryDelay: c.options.retryDelay,
          networkMode: c.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #i(n) {
      const a = (i) => {
        switch (n.type) {
          case 'failed':
            return { ...i, fetchFailureCount: n.failureCount, fetchFailureReason: n.error };
          case 'pause':
            return { ...i, fetchStatus: 'paused' };
          case 'continue':
            return { ...i, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...i, ...xg(i.data, this.options), fetchMeta: n.meta ?? null };
          case 'success':
            return {
              ...i,
              data: n.data,
              dataUpdateCount: i.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!n.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const s = n.error;
            return Gf(s) && s.revert && this.#e
              ? { ...this.#e, fetchStatus: 'idle' }
              : {
                  ...i,
                  error: s,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...i, isInvalidated: !0 };
          case 'setState':
            return { ...i, ...n.state };
        }
      };
      ((this.state = a(this.state)),
        ft.batch(() => {
          (this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: 'updated', action: n }));
        }));
    }
  };
function xg(n, a) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yg(a.networkMode) ? 'fetching' : 'paused',
    ...(n === void 0 && { error: null, status: 'pending' }),
  };
}
function m1(n) {
  const a = typeof n.initialData == 'function' ? n.initialData() : n.initialData,
    i = a !== void 0,
    s = i
      ? typeof n.initialDataUpdatedAt == 'function'
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: a,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? (s ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var p1 = class extends Ai {
    constructor(n = {}) {
      (super(), (this.config = n), (this.#t = new Map()));
    }
    #t;
    build(n, a, i) {
      const s = a.queryKey,
        o = a.queryHash ?? Ld(s, a);
      let c = this.get(o);
      return (
        c ||
          ((c = new h1({
            client: n,
            queryKey: s,
            queryHash: o,
            options: n.defaultQueryOptions(a),
            state: i,
            defaultOptions: n.getQueryDefaults(s),
          })),
          this.add(c)),
        c
      );
    }
    add(n) {
      this.#t.has(n.queryHash) ||
        (this.#t.set(n.queryHash, n), this.notify({ type: 'added', query: n }));
    }
    remove(n) {
      const a = this.#t.get(n.queryHash);
      a &&
        (n.destroy(),
        a === n && this.#t.delete(n.queryHash),
        this.notify({ type: 'removed', query: n }));
    }
    clear() {
      ft.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#t.get(n);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(n) {
      const a = { exact: !0, ...n };
      return this.getAll().find((i) => oy(a, i));
    }
    findAll(n = {}) {
      const a = this.getAll();
      return Object.keys(n).length > 0 ? a.filter((i) => oy(n, i)) : a;
    }
    notify(n) {
      ft.batch(() => {
        this.listeners.forEach((a) => {
          a(n);
        });
      });
    }
    onFocus() {
      ft.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      ft.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  v1 = class extends Sg {
    #t;
    #e;
    #n;
    constructor(n) {
      (super(),
        (this.mutationId = n.mutationId),
        (this.#e = n.mutationCache),
        (this.#t = []),
        (this.state = n.state || y1()),
        this.setOptions(n.options),
        this.scheduleGc());
    }
    setOptions(n) {
      ((this.options = n), this.updateGcTime(this.options.gcTime));
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(n) {
      this.#t.includes(n) ||
        (this.#t.push(n),
        this.clearGcTimeout(),
        this.#e.notify({ type: 'observerAdded', mutation: this, observer: n }));
    }
    removeObserver(n) {
      ((this.#t = this.#t.filter((a) => a !== n)),
        this.scheduleGc(),
        this.#e.notify({ type: 'observerRemoved', mutation: this, observer: n }));
    }
    optionalRemove() {
      this.#t.length ||
        (this.state.status === 'pending' ? this.scheduleGc() : this.#e.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(n) {
      const a = () => {
        this.#a({ type: 'continue' });
      };
      this.#n = bg({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(n)
            : Promise.reject(new Error('No mutationFn found')),
        onFail: (o, c) => {
          this.#a({ type: 'failed', failureCount: o, error: c });
        },
        onPause: () => {
          this.#a({ type: 'pause' });
        },
        onContinue: a,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#e.canRun(this),
      });
      const i = this.state.status === 'pending',
        s = !this.#n.canStart();
      try {
        if (i) a();
        else {
          (this.#a({ type: 'pending', variables: n, isPaused: s }),
            await this.#e.config.onMutate?.(n, this));
          const c = await this.options.onMutate?.(n);
          c !== this.state.context &&
            this.#a({ type: 'pending', context: c, variables: n, isPaused: s });
        }
        const o = await this.#n.start();
        return (
          await this.#e.config.onSuccess?.(o, n, this.state.context, this),
          await this.options.onSuccess?.(o, n, this.state.context),
          await this.#e.config.onSettled?.(o, null, this.state.variables, this.state.context, this),
          await this.options.onSettled?.(o, null, n, this.state.context),
          this.#a({ type: 'success', data: o }),
          o
        );
      } catch (o) {
        try {
          throw (
            await this.#e.config.onError?.(o, n, this.state.context, this),
            await this.options.onError?.(o, n, this.state.context),
            await this.#e.config.onSettled?.(
              void 0,
              o,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, o, n, this.state.context),
            o
          );
        } finally {
          this.#a({ type: 'error', error: o });
        }
      } finally {
        this.#e.runNext(this);
      }
    }
    #a(n) {
      const a = (i) => {
        switch (n.type) {
          case 'failed':
            return { ...i, failureCount: n.failureCount, failureReason: n.error };
          case 'pause':
            return { ...i, isPaused: !0 };
          case 'continue':
            return { ...i, isPaused: !1 };
          case 'pending':
            return {
              ...i,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: 'pending',
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...i,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...i,
              data: void 0,
              error: n.error,
              failureCount: i.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      ((this.state = a(this.state)),
        ft.batch(() => {
          (this.#t.forEach((i) => {
            i.onMutationUpdate(n);
          }),
            this.#e.notify({ mutation: this, type: 'updated', action: n }));
        }));
    }
  };
function y1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var g1 = class extends Ai {
  constructor(n = {}) {
    (super(), (this.config = n), (this.#t = new Set()), (this.#e = new Map()), (this.#n = 0));
  }
  #t;
  #e;
  #n;
  build(n, a, i) {
    const s = new v1({
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(a),
      state: i,
    });
    return (this.add(s), s);
  }
  add(n) {
    this.#t.add(n);
    const a = To(n);
    if (typeof a == 'string') {
      const i = this.#e.get(a);
      i ? i.push(n) : this.#e.set(a, [n]);
    }
    this.notify({ type: 'added', mutation: n });
  }
  remove(n) {
    if (this.#t.delete(n)) {
      const a = To(n);
      if (typeof a == 'string') {
        const i = this.#e.get(a);
        if (i)
          if (i.length > 1) {
            const s = i.indexOf(n);
            s !== -1 && i.splice(s, 1);
          } else i[0] === n && this.#e.delete(a);
      }
    }
    this.notify({ type: 'removed', mutation: n });
  }
  canRun(n) {
    const a = To(n);
    if (typeof a == 'string') {
      const s = this.#e.get(a)?.find((o) => o.state.status === 'pending');
      return !s || s === n;
    } else return !0;
  }
  runNext(n) {
    const a = To(n);
    return typeof a == 'string'
      ? (this.#e
          .get(a)
          ?.find((s) => s !== n && s.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    ft.batch(() => {
      (this.#t.forEach((n) => {
        this.notify({ type: 'removed', mutation: n });
      }),
        this.#t.clear(),
        this.#e.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(n) {
    const a = { exact: !0, ...n };
    return this.getAll().find((i) => uy(a, i));
  }
  findAll(n = {}) {
    return this.getAll().filter((a) => uy(n, a));
  }
  notify(n) {
    ft.batch(() => {
      this.listeners.forEach((a) => {
        a(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((a) => a.state.isPaused);
    return ft.batch(() => Promise.all(n.map((a) => a.continue().catch(rn))));
  }
};
function To(n) {
  return n.options.scope?.id;
}
function dy(n) {
  return {
    onFetch: (a, i) => {
      const s = a.options,
        o = a.fetchOptions?.meta?.fetchMore?.direction,
        c = a.state.data?.pages || [],
        d = a.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let v = !1;
        const g = (R) => {
            Object.defineProperty(R, 'signal', {
              enumerable: !0,
              get: () => (
                a.signal.aborted
                  ? (v = !0)
                  : a.signal.addEventListener('abort', () => {
                      v = !0;
                    }),
                a.signal
              ),
            });
          },
          S = vg(a.options, a.fetchOptions),
          w = async (R, x, D) => {
            if (v) return Promise.reject();
            if (x == null && R.pages.length) return Promise.resolve(R);
            const O = {
              client: a.client,
              queryKey: a.queryKey,
              pageParam: x,
              direction: D ? 'backward' : 'forward',
              meta: a.options.meta,
            };
            g(O);
            const L = await S(O),
              { maxPages: H } = a.options,
              Y = D ? l1 : s1;
            return { pages: Y(R.pages, L, H), pageParams: Y(R.pageParams, x, H) };
          };
        if (o && c.length) {
          const R = o === 'backward',
            x = R ? b1 : hy,
            D = { pages: c, pageParams: d },
            O = x(s, D);
          h = await w(D, O, R);
        } else {
          const R = n ?? c.length;
          do {
            const x = p === 0 ? (d[0] ?? s.initialPageParam) : hy(s, h);
            if (p > 0 && x == null) break;
            ((h = await w(h, x)), p++);
          } while (p < R);
        }
        return h;
      };
      a.options.persister
        ? (a.fetchFn = () =>
            a.options.persister?.(
              m,
              { client: a.client, queryKey: a.queryKey, meta: a.options.meta, signal: a.signal },
              i
            ))
        : (a.fetchFn = m);
    },
  };
}
function hy(n, { pages: a, pageParams: i }) {
  const s = a.length - 1;
  return a.length > 0 ? n.getNextPageParam(a[s], a, i[s], i) : void 0;
}
function b1(n, { pages: a, pageParams: i }) {
  return a.length > 0 ? n.getPreviousPageParam?.(a[0], a, i[0], i) : void 0;
}
var S1 = class {
    #t;
    #e;
    #n;
    #a;
    #r;
    #s;
    #l;
    #i;
    constructor(n = {}) {
      ((this.#t = n.queryCache || new p1()),
        (this.#e = n.mutationCache || new g1()),
        (this.#n = n.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#r = new Map()),
        (this.#s = 0));
    }
    mount() {
      (this.#s++,
        this.#s === 1 &&
          ((this.#l = Hd.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#i = Xo.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#s--,
        this.#s === 0 && (this.#l?.(), (this.#l = void 0), this.#i?.(), (this.#i = void 0)));
    }
    isFetching(n) {
      return this.#t.findAll({ ...n, fetchStatus: 'fetching' }).length;
    }
    isMutating(n) {
      return this.#e.findAll({ ...n, status: 'pending' }).length;
    }
    getQueryData(n) {
      const a = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(a.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const a = this.defaultQueryOptions(n),
        i = this.#t.build(this, a),
        s = i.state.data;
      return s === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale && i.isStaleByTime(gi(a.staleTime, i)) && this.prefetchQuery(a),
          Promise.resolve(s));
    }
    getQueriesData(n) {
      return this.#t.findAll(n).map(({ queryKey: a, state: i }) => {
        const s = i.data;
        return [a, s];
      });
    }
    setQueryData(n, a, i) {
      const s = this.defaultQueryOptions({ queryKey: n }),
        c = this.#t.get(s.queryHash)?.state.data,
        d = r1(a, c);
      if (d !== void 0) return this.#t.build(this, s).setData(d, { ...i, manual: !0 });
    }
    setQueriesData(n, a, i) {
      return ft.batch(() =>
        this.#t.findAll(n).map(({ queryKey: s }) => [s, this.setQueryData(s, a, i)])
      );
    }
    getQueryState(n) {
      const a = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(a.queryHash)?.state;
    }
    removeQueries(n) {
      const a = this.#t;
      ft.batch(() => {
        a.findAll(n).forEach((i) => {
          a.remove(i);
        });
      });
    }
    resetQueries(n, a) {
      const i = this.#t;
      return ft.batch(
        () => (
          i.findAll(n).forEach((s) => {
            s.reset();
          }),
          this.refetchQueries({ type: 'active', ...n }, a)
        )
      );
    }
    cancelQueries(n, a = {}) {
      const i = { revert: !0, ...a },
        s = ft.batch(() => this.#t.findAll(n).map((o) => o.cancel(i)));
      return Promise.all(s).then(rn).catch(rn);
    }
    invalidateQueries(n, a = {}) {
      return ft.batch(
        () => (
          this.#t.findAll(n).forEach((i) => {
            i.invalidate();
          }),
          n?.refetchType === 'none'
            ? Promise.resolve()
            : this.refetchQueries({ ...n, type: n?.refetchType ?? n?.type ?? 'active' }, a)
        )
      );
    }
    refetchQueries(n, a = {}) {
      const i = { ...a, cancelRefetch: a.cancelRefetch ?? !0 },
        s = ft.batch(() =>
          this.#t
            .findAll(n)
            .filter((o) => !o.isDisabled())
            .map((o) => {
              let c = o.fetch(void 0, i);
              return (
                i.throwOnError || (c = c.catch(rn)),
                o.state.fetchStatus === 'paused' ? Promise.resolve() : c
              );
            })
        );
      return Promise.all(s).then(rn);
    }
    fetchQuery(n) {
      const a = this.defaultQueryOptions(n);
      a.retry === void 0 && (a.retry = !1);
      const i = this.#t.build(this, a);
      return i.isStaleByTime(gi(a.staleTime, i)) ? i.fetch(a) : Promise.resolve(i.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(rn).catch(rn);
    }
    fetchInfiniteQuery(n) {
      return ((n.behavior = dy(n.pages)), this.fetchQuery(n));
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(rn).catch(rn);
    }
    ensureInfiniteQueryData(n) {
      return ((n.behavior = dy(n.pages)), this.ensureQueryData(n));
    }
    resumePausedMutations() {
      return Xo.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, a) {
      this.#a.set(qs(n), { queryKey: n, defaultOptions: a });
    }
    getQueryDefaults(n) {
      const a = [...this.#a.values()],
        i = {};
      return (
        a.forEach((s) => {
          Vs(n, s.queryKey) && Object.assign(i, s.defaultOptions);
        }),
        i
      );
    }
    setMutationDefaults(n, a) {
      this.#r.set(qs(n), { mutationKey: n, defaultOptions: a });
    }
    getMutationDefaults(n) {
      const a = [...this.#r.values()],
        i = {};
      return (
        a.forEach((s) => {
          Vs(n, s.mutationKey) && Object.assign(i, s.defaultOptions);
        }),
        i
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const a = { ...this.#n.queries, ...this.getQueryDefaults(n.queryKey), ...n, _defaulted: !0 };
      return (
        a.queryHash || (a.queryHash = Ld(a.queryKey, a)),
        a.refetchOnReconnect === void 0 && (a.refetchOnReconnect = a.networkMode !== 'always'),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = 'offlineFirst'),
        a.queryFn === Bd && (a.enabled = !1),
        a
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#e.clear());
    }
  },
  _g = class extends Ai {
    constructor(n, a) {
      (super(),
        (this.options = a),
        (this.#t = n),
        (this.#i = null),
        (this.#l = md()),
        this.options.experimental_prefetchInRender ||
          this.#l.reject(new Error('experimental_prefetchInRender feature flag is not enabled')),
        this.bindMethods(),
        this.setOptions(a));
    }
    #t;
    #e = void 0;
    #n = void 0;
    #a = void 0;
    #r;
    #s;
    #l;
    #i;
    #h;
    #f;
    #d;
    #u;
    #c;
    #o;
    #p = new Set();
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        (this.#e.addObserver(this),
        my(this.#e, this.options) ? this.#m() : this.updateResult(),
        this.#b());
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return pd(this.#e, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return pd(this.#e, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      ((this.listeners = new Set()), this.#S(), this.#x(), this.#e.removeObserver(this));
    }
    setOptions(n) {
      const a = this.options,
        i = this.#e;
      if (
        ((this.options = this.#t.defaultQueryOptions(n)),
        this.options.enabled !== void 0 &&
          typeof this.options.enabled != 'boolean' &&
          typeof this.options.enabled != 'function' &&
          typeof dn(this.options.enabled, this.#e) != 'boolean')
      )
        throw new Error('Expected enabled to be a boolean or a callback that returns a boolean');
      (this.#_(),
        this.#e.setOptions(this.options),
        a._defaulted &&
          !fd(this.options, a) &&
          this.#t
            .getQueryCache()
            .notify({ type: 'observerOptionsUpdated', query: this.#e, observer: this }));
      const s = this.hasListeners();
      (s && py(this.#e, i, this.options, a) && this.#m(),
        this.updateResult(),
        s &&
          (this.#e !== i ||
            dn(this.options.enabled, this.#e) !== dn(a.enabled, this.#e) ||
            gi(this.options.staleTime, this.#e) !== gi(a.staleTime, this.#e)) &&
          this.#v());
      const o = this.#y();
      s &&
        (this.#e !== i ||
          dn(this.options.enabled, this.#e) !== dn(a.enabled, this.#e) ||
          o !== this.#o) &&
        this.#g(o);
    }
    getOptimisticResult(n) {
      const a = this.#t.getQueryCache().build(this.#t, n),
        i = this.createResult(a, n);
      return (
        _1(this, i) && ((this.#a = i), (this.#s = this.options), (this.#r = this.#e.state)),
        i
      );
    }
    getCurrentResult() {
      return this.#a;
    }
    trackResult(n, a) {
      const i = {};
      return (
        Object.keys(n).forEach((s) => {
          Object.defineProperty(i, s, {
            configurable: !1,
            enumerable: !0,
            get: () => (this.trackProp(s), a?.(s), n[s]),
          });
        }),
        i
      );
    }
    trackProp(n) {
      this.#p.add(n);
    }
    getCurrentQuery() {
      return this.#e;
    }
    refetch({ ...n } = {}) {
      return this.fetch({ ...n });
    }
    fetchOptimistic(n) {
      const a = this.#t.defaultQueryOptions(n),
        i = this.#t.getQueryCache().build(this.#t, a);
      return i.fetch().then(() => this.createResult(i, a));
    }
    fetch(n) {
      return this.#m({ ...n, cancelRefetch: n.cancelRefetch ?? !0 }).then(
        () => (this.updateResult(), this.#a)
      );
    }
    #m(n) {
      this.#_();
      let a = this.#e.fetch(this.options, n);
      return (n?.throwOnError || (a = a.catch(rn)), a);
    }
    #v() {
      this.#S();
      const n = gi(this.options.staleTime, this.#e);
      if (wi || this.#a.isStale || !cd(n)) return;
      const i = pg(this.#a.dataUpdatedAt, n) + 1;
      this.#u = setTimeout(() => {
        this.#a.isStale || this.updateResult();
      }, i);
    }
    #y() {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(this.#e)
          : this.options.refetchInterval) ?? !1
      );
    }
    #g(n) {
      (this.#x(),
        (this.#o = n),
        !(wi || dn(this.options.enabled, this.#e) === !1 || !cd(this.#o) || this.#o === 0) &&
          (this.#c = setInterval(() => {
            (this.options.refetchIntervalInBackground || Hd.isFocused()) && this.#m();
          }, this.#o)));
    }
    #b() {
      (this.#v(), this.#g(this.#y()));
    }
    #S() {
      this.#u && (clearTimeout(this.#u), (this.#u = void 0));
    }
    #x() {
      this.#c && (clearInterval(this.#c), (this.#c = void 0));
    }
    createResult(n, a) {
      const i = this.#e,
        s = this.options,
        o = this.#a,
        c = this.#r,
        d = this.#s,
        p = n !== i ? n.state : this.#n,
        { state: m } = n;
      let v = { ...m },
        g = !1,
        S;
      if (a._optimisticResults) {
        const M = this.hasListeners(),
          A = !M && my(n, a),
          X = M && py(n, i, a, s);
        ((A || X) && (v = { ...v, ...xg(m.data, n.options) }),
          a._optimisticResults === 'isRestoring' && (v.fetchStatus = 'idle'));
      }
      let { error: w, errorUpdatedAt: R, status: x } = v;
      S = v.data;
      let D = !1;
      if (a.placeholderData !== void 0 && S === void 0 && x === 'pending') {
        let M;
        (o?.isPlaceholderData && a.placeholderData === d?.placeholderData
          ? ((M = o.data), (D = !0))
          : (M =
              typeof a.placeholderData == 'function'
                ? a.placeholderData(this.#d?.state.data, this.#d)
                : a.placeholderData),
          M !== void 0 && ((x = 'success'), (S = hd(o?.data, M, a)), (g = !0)));
      }
      if (a.select && S !== void 0 && !D)
        if (o && S === c?.data && a.select === this.#h) S = this.#f;
        else
          try {
            ((this.#h = a.select),
              (S = a.select(S)),
              (S = hd(o?.data, S, a)),
              (this.#f = S),
              (this.#i = null));
          } catch (M) {
            this.#i = M;
          }
      this.#i && ((w = this.#i), (S = this.#f), (R = Date.now()), (x = 'error'));
      const O = v.fetchStatus === 'fetching',
        L = x === 'pending',
        H = x === 'error',
        Y = L && O,
        q = S !== void 0,
        G = {
          status: x,
          fetchStatus: v.fetchStatus,
          isPending: L,
          isSuccess: x === 'success',
          isError: H,
          isInitialLoading: Y,
          isLoading: Y,
          data: S,
          dataUpdatedAt: v.dataUpdatedAt,
          error: w,
          errorUpdatedAt: R,
          failureCount: v.fetchFailureCount,
          failureReason: v.fetchFailureReason,
          errorUpdateCount: v.errorUpdateCount,
          isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
          isFetchedAfterMount:
            v.dataUpdateCount > p.dataUpdateCount || v.errorUpdateCount > p.errorUpdateCount,
          isFetching: O,
          isRefetching: O && !L,
          isLoadingError: H && !q,
          isPaused: v.fetchStatus === 'paused',
          isPlaceholderData: g,
          isRefetchError: H && q,
          isStale: Pd(n, a),
          refetch: this.refetch,
          promise: this.#l,
        };
      if (this.options.experimental_prefetchInRender) {
        const M = (ae) => {
            G.status === 'error' ? ae.reject(G.error) : G.data !== void 0 && ae.resolve(G.data);
          },
          A = () => {
            const ae = (this.#l = G.promise = md());
            M(ae);
          },
          X = this.#l;
        switch (X.status) {
          case 'pending':
            n.queryHash === i.queryHash && M(X);
            break;
          case 'fulfilled':
            (G.status === 'error' || G.data !== X.value) && A();
            break;
          case 'rejected':
            (G.status !== 'error' || G.error !== X.reason) && A();
            break;
        }
      }
      return G;
    }
    updateResult() {
      const n = this.#a,
        a = this.createResult(this.#e, this.options);
      if (
        ((this.#r = this.#e.state),
        (this.#s = this.options),
        this.#r.data !== void 0 && (this.#d = this.#e),
        fd(a, n))
      )
        return;
      this.#a = a;
      const i = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: s } = this.options,
          o = typeof s == 'function' ? s() : s;
        if (o === 'all' || (!o && !this.#p.size)) return !0;
        const c = new Set(o ?? this.#p);
        return (
          this.options.throwOnError && c.add('error'),
          Object.keys(this.#a).some((d) => {
            const h = d;
            return this.#a[h] !== n[h] && c.has(h);
          })
        );
      };
      this.#w({ listeners: i() });
    }
    #_() {
      const n = this.#t.getQueryCache().build(this.#t, this.options);
      if (n === this.#e) return;
      const a = this.#e;
      ((this.#e = n),
        (this.#n = n.state),
        this.hasListeners() && (a?.removeObserver(this), n.addObserver(this)));
    }
    onQueryUpdate() {
      (this.updateResult(), this.hasListeners() && this.#b());
    }
    #w(n) {
      ft.batch(() => {
        (n.listeners &&
          this.listeners.forEach((a) => {
            a(this.#a);
          }),
          this.#t.getQueryCache().notify({ query: this.#e, type: 'observerResultsUpdated' }));
      });
    }
  };
function x1(n, a) {
  return (
    dn(a.enabled, n) !== !1 &&
    n.state.data === void 0 &&
    !(n.state.status === 'error' && a.retryOnMount === !1)
  );
}
function my(n, a) {
  return x1(n, a) || (n.state.data !== void 0 && pd(n, a, a.refetchOnMount));
}
function pd(n, a, i) {
  if (dn(a.enabled, n) !== !1) {
    const s = typeof i == 'function' ? i(n) : i;
    return s === 'always' || (s !== !1 && Pd(n, a));
  }
  return !1;
}
function py(n, a, i, s) {
  return (
    (n !== a || dn(s.enabled, n) === !1) && (!i.suspense || n.state.status !== 'error') && Pd(n, i)
  );
}
function Pd(n, a) {
  return dn(a.enabled, n) !== !1 && n.isStaleByTime(gi(a.staleTime, n));
}
function _1(n, a) {
  return !fd(n.getCurrentResult(), a);
}
function vy(n, a) {
  return n.filter((i) => !a.includes(i));
}
function w1(n, a, i) {
  const s = n.slice(0);
  return ((s[a] = i), s);
}
var E1 = class extends Ai {
    #t;
    #e;
    #n;
    #a;
    #r;
    #s;
    #l;
    #i;
    #h = [];
    constructor(n, a, i) {
      (super(),
        (this.#t = n),
        (this.#a = i),
        (this.#n = []),
        (this.#r = []),
        (this.#e = []),
        this.setQueries(a));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#r.forEach((n) => {
          n.subscribe((a) => {
            this.#c(n, a);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#r.forEach((n) => {
          n.destroy();
        }));
    }
    setQueries(n, a) {
      ((this.#n = n),
        (this.#a = a),
        ft.batch(() => {
          const i = this.#r,
            s = this.#u(this.#n);
          ((this.#h = s), s.forEach((h) => h.observer.setOptions(h.defaultedQueryOptions)));
          const o = s.map((h) => h.observer),
            c = o.map((h) => h.getCurrentResult()),
            d = o.some((h, p) => h !== i[p]);
          (i.length === o.length && !d) ||
            ((this.#r = o),
            (this.#e = c),
            this.hasListeners() &&
              (vy(i, o).forEach((h) => {
                h.destroy();
              }),
              vy(o, i).forEach((h) => {
                h.subscribe((p) => {
                  this.#c(h, p);
                });
              }),
              this.#o()));
        }));
    }
    getCurrentResult() {
      return this.#e;
    }
    getQueries() {
      return this.#r.map((n) => n.getCurrentQuery());
    }
    getObservers() {
      return this.#r;
    }
    getOptimisticResult(n, a) {
      const i = this.#u(n),
        s = i.map((o) => o.observer.getOptimisticResult(o.defaultedQueryOptions));
      return [s, (o) => this.#d(o ?? s, a), () => this.#f(s, i)];
    }
    #f(n, a) {
      return a.map((i, s) => {
        const o = n[s];
        return i.defaultedQueryOptions.notifyOnChangeProps
          ? o
          : i.observer.trackResult(o, (c) => {
              a.forEach((d) => {
                d.observer.trackProp(c);
              });
            });
      });
    }
    #d(n, a) {
      return a
        ? ((!this.#s || this.#e !== this.#i || a !== this.#l) &&
            ((this.#l = a), (this.#i = this.#e), (this.#s = Ud(this.#s, a(n)))),
          this.#s)
        : n;
    }
    #u(n) {
      const a = new Map(this.#r.map((s) => [s.options.queryHash, s])),
        i = [];
      return (
        n.forEach((s) => {
          const o = this.#t.defaultQueryOptions(s),
            c = a.get(o.queryHash);
          c
            ? i.push({ defaultedQueryOptions: o, observer: c })
            : i.push({ defaultedQueryOptions: o, observer: new _g(this.#t, o) });
        }),
        i
      );
    }
    #c(n, a) {
      const i = this.#r.indexOf(n);
      i !== -1 && ((this.#e = w1(this.#e, i, a)), this.#o());
    }
    #o() {
      if (this.hasListeners()) {
        const n = this.#s,
          a = this.#f(this.#e, this.#h),
          i = this.#d(a, this.#a?.combine);
        n !== i &&
          ft.batch(() => {
            this.listeners.forEach((s) => {
              s(this.#e);
            });
          });
      }
    }
  },
  wg = _.createContext(void 0),
  Eg = (n) => {
    const a = _.useContext(wg);
    if (!a) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return a;
  },
  R1 = ({ client: n, children: a }) => (
    _.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    C.jsx(wg.Provider, { value: n, children: a })
  ),
  Rg = _.createContext(!1),
  T1 = () => _.useContext(Rg);
Rg.Provider;
function C1() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n,
  };
}
var O1 = _.createContext(C1()),
  A1 = () => _.useContext(O1);
function M1(n, a) {
  return typeof n == 'function' ? n(...a) : !!n;
}
function D1() {}
var N1 = (n, a) => {
    (n.suspense || n.throwOnError || n.experimental_prefetchInRender) &&
      (a.isReset() || (n.retryOnMount = !1));
  },
  k1 = (n) => {
    _.useEffect(() => {
      n.clearReset();
    }, [n]);
  },
  z1 = ({ result: n, errorResetBoundary: a, throwOnError: i, query: s, suspense: o }) =>
    n.isError &&
    !a.isReset() &&
    !n.isFetching &&
    s &&
    ((o && n.data === void 0) || M1(i, [n.error, s])),
  j1 = (n, a) => a.state.data === void 0,
  L1 = (n) => {
    const a = n.staleTime;
    n.suspense &&
      ((n.staleTime =
        typeof a == 'function' ? (...i) => Math.max(a(...i), 1e3) : Math.max(a ?? 1e3, 1e3)),
      typeof n.gcTime == 'number' && (n.gcTime = Math.max(n.gcTime, 1e3)));
  },
  U1 = (n, a) => n.isLoading && n.isFetching && !a,
  yy = (n, a) => n?.suspense && a.isPending,
  gy = (n, a, i) =>
    a.fetchOptimistic(n).catch(() => {
      i.clearReset();
    });
function B1({ queries: n, ...a }, i) {
  const s = Eg(),
    o = T1(),
    c = A1(),
    d = _.useMemo(
      () =>
        n.map((x) => {
          const D = s.defaultQueryOptions(x);
          return ((D._optimisticResults = o ? 'isRestoring' : 'optimistic'), D);
        }),
      [n, s, o]
    );
  (d.forEach((x) => {
    (L1(x), N1(x, c));
  }),
    k1(c));
  const [h] = _.useState(() => new E1(s, d, a)),
    [p, m, v] = h.getOptimisticResult(d, a.combine),
    g = !o && a.subscribed !== !1;
  (_.useSyncExternalStore(
    _.useCallback((x) => (g ? h.subscribe(ft.batchCalls(x)) : D1), [h, g]),
    () => h.getCurrentResult(),
    () => h.getCurrentResult()
  ),
    _.useEffect(() => {
      h.setQueries(d, a);
    }, [d, a, h]));
  const w = p.some((x, D) => yy(d[D], x))
    ? p.flatMap((x, D) => {
        const O = d[D];
        if (O) {
          const L = new _g(s, O);
          if (yy(O, x)) return gy(O, L, c);
          U1(x, o) && gy(O, L, c);
        }
        return [];
      })
    : [];
  if (w.length > 0) throw Promise.all(w);
  const R = p.find((x, D) => {
    const O = d[D];
    return (
      O &&
      z1({
        result: x,
        errorResetBoundary: c,
        throwOnError: O.throwOnError,
        query: s.getQueryCache().get(O.queryHash),
        suspense: O.suspense,
      })
    );
  });
  if (R?.error) throw R.error;
  return m(v());
}
function H1(n, a) {
  return B1({
    ...n,
    queries: n.queries.map((i) => ({
      ...i,
      suspense: !0,
      throwOnError: j1,
      enabled: !0,
      placeholderData: void 0,
    })),
  });
}
const P1 = 'modulepreload',
  q1 = function (n) {
    return '/' + n;
  },
  by = {},
  qd = function (a, i, s) {
    let o = Promise.resolve();
    if (i && i.length > 0) {
      let p = function (m) {
        return Promise.all(
          m.map((v) =>
            Promise.resolve(v).then(
              (g) => ({ status: 'fulfilled', value: g }),
              (g) => ({ status: 'rejected', reason: g })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        h = d?.nonce || d?.getAttribute('nonce');
      o = p(
        i.map((m) => {
          if (((m = q1(m)), m in by)) return;
          by[m] = !0;
          const v = m.endsWith('.css'),
            g = v ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = v ? 'stylesheet' : P1),
            v || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = m),
            h && S.setAttribute('nonce', h),
            document.head.appendChild(S),
            v)
          )
            return new Promise((w, R) => {
              (S.addEventListener('load', w),
                S.addEventListener('error', () => R(new Error(`Unable to preload CSS for ${m}`))));
            });
        })
      );
    }
    function c(d) {
      const h = new Event('vite:preloadError', { cancelable: !0 });
      if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented)) throw d;
    }
    return o.then((d) => {
      for (const h of d || []) h.status === 'rejected' && c(h.reason);
      return a().catch(c);
    });
  };
var V1 = function () {
  return null;
};
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Tg = (...n) =>
    n
      .filter((a, i, s) => !!a && a.trim() !== '' && s.indexOf(a) === i)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var G1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = _.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: a = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: o = '',
      children: c,
      iconNode: d,
      ...h
    },
    p
  ) =>
    _.createElement(
      'svg',
      {
        ref: p,
        ...G1,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: s ? (Number(i) * 24) / Number(a) : i,
        className: Tg('lucide', o),
        ...h,
      },
      [...d.map(([m, v]) => _.createElement(m, v)), ...(Array.isArray(c) ? c : [c])]
    )
);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Za = (n, a) => {
  const i = _.forwardRef(({ className: s, ...o }, c) =>
    _.createElement(Q1, { ref: c, iconNode: a, className: Tg(`lucide-${Z1(n)}`, s), ...o })
  );
  return ((i.displayName = `${n}`), i);
};
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = Za('CircleChevronDown', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm16 10-4 4-4-4', key: '894hmk' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = Za('CircleChevronRight', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm10 8 4 4-4 4', key: '1wy4r4' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = Za('CircleChevronUp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm8 14 4-4 4 4', key: 'fy2ptz' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = Za('CircleX', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
  ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = Za('FolderOpen', [
  [
    'path',
    {
      d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
      key: 'usdka0',
    },
  ],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = Za('LoaderCircle', [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = Za('PanelLeft', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
  ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = Za('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);
function Cg(n) {
  var a,
    i,
    s = '';
  if (typeof n == 'string' || typeof n == 'number') s += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var o = n.length;
      for (a = 0; a < o; a++) n[a] && (i = Cg(n[a])) && (s && (s += ' '), (s += i));
    } else for (i in n) n[i] && (s && (s += ' '), (s += i));
  return s;
}
function Og() {
  for (var n, a, i = 0, s = '', o = arguments.length; i < o; i++)
    (n = arguments[i]) && (a = Cg(n)) && (s && (s += ' '), (s += a));
  return s;
}
const Vd = '-',
  I1 = (n) => {
    const a = tw(n),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: s } = n;
    return {
      getClassGroupId: (d) => {
        const h = d.split(Vd);
        return (h[0] === '' && h.length !== 1 && h.shift(), Ag(h, a) || ew(d));
      },
      getConflictingClassGroupIds: (d, h) => {
        const p = i[d] || [];
        return h && s[d] ? [...p, ...s[d]] : p;
      },
    };
  },
  Ag = (n, a) => {
    if (n.length === 0) return a.classGroupId;
    const i = n[0],
      s = a.nextPart.get(i),
      o = s ? Ag(n.slice(1), s) : void 0;
    if (o) return o;
    if (a.validators.length === 0) return;
    const c = n.join(Vd);
    return a.validators.find(({ validator: d }) => d(c))?.classGroupId;
  },
  Sy = /^\[(.+)\]$/,
  ew = (n) => {
    if (Sy.test(n)) {
      const a = Sy.exec(n)[1],
        i = a?.substring(0, a.indexOf(':'));
      if (i) return 'arbitrary..' + i;
    }
  },
  tw = (n) => {
    const { theme: a, classGroups: i } = n,
      s = { nextPart: new Map(), validators: [] };
    for (const o in i) vd(i[o], s, o, a);
    return s;
  },
  vd = (n, a, i, s) => {
    n.forEach((o) => {
      if (typeof o == 'string') {
        const c = o === '' ? a : xy(a, o);
        c.classGroupId = i;
        return;
      }
      if (typeof o == 'function') {
        if (nw(o)) {
          vd(o(s), a, i, s);
          return;
        }
        a.validators.push({ validator: o, classGroupId: i });
        return;
      }
      Object.entries(o).forEach(([c, d]) => {
        vd(d, xy(a, c), i, s);
      });
    });
  },
  xy = (n, a) => {
    let i = n;
    return (
      a.split(Vd).forEach((s) => {
        (i.nextPart.has(s) || i.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(s)));
      }),
      i
    );
  },
  nw = (n) => n.isThemeGetter,
  aw = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      i = new Map(),
      s = new Map();
    const o = (c, d) => {
      (i.set(c, d), a++, a > n && ((a = 0), (s = i), (i = new Map())));
    };
    return {
      get(c) {
        let d = i.get(c);
        if (d !== void 0) return d;
        if ((d = s.get(c)) !== void 0) return (o(c, d), d);
      },
      set(c, d) {
        i.has(c) ? i.set(c, d) : o(c, d);
      },
    };
  },
  yd = '!',
  gd = ':',
  rw = gd.length,
  iw = (n) => {
    const { prefix: a, experimentalParseClassName: i } = n;
    let s = (o) => {
      const c = [];
      let d = 0,
        h = 0,
        p = 0,
        m;
      for (let R = 0; R < o.length; R++) {
        let x = o[R];
        if (d === 0 && h === 0) {
          if (x === gd) {
            (c.push(o.slice(p, R)), (p = R + rw));
            continue;
          }
          if (x === '/') {
            m = R;
            continue;
          }
        }
        x === '[' ? d++ : x === ']' ? d-- : x === '(' ? h++ : x === ')' && h--;
      }
      const v = c.length === 0 ? o : o.substring(p),
        g = sw(v),
        S = g !== v,
        w = m && m > p ? m - p : void 0;
      return {
        modifiers: c,
        hasImportantModifier: S,
        baseClassName: g,
        maybePostfixModifierPosition: w,
      };
    };
    if (a) {
      const o = a + gd,
        c = s;
      s = (d) =>
        d.startsWith(o)
          ? c(d.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (i) {
      const o = s;
      s = (c) => i({ className: c, parseClassName: o });
    }
    return s;
  },
  sw = (n) =>
    n.endsWith(yd) ? n.substring(0, n.length - 1) : n.startsWith(yd) ? n.substring(1) : n,
  lw = (n) => {
    const a = Object.fromEntries(n.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const o = [];
      let c = [];
      return (
        s.forEach((d) => {
          d[0] === '[' || a[d] ? (o.push(...c.sort(), d), (c = [])) : c.push(d);
        }),
        o.push(...c.sort()),
        o
      );
    };
  },
  ow = (n) => ({ cache: aw(n.cacheSize), parseClassName: iw(n), sortModifiers: lw(n), ...I1(n) }),
  uw = /\s+/,
  cw = (n, a) => {
    const {
        parseClassName: i,
        getClassGroupId: s,
        getConflictingClassGroupIds: o,
        sortModifiers: c,
      } = a,
      d = [],
      h = n.trim().split(uw);
    let p = '';
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const v = h[m],
        {
          isExternal: g,
          modifiers: S,
          hasImportantModifier: w,
          baseClassName: R,
          maybePostfixModifierPosition: x,
        } = i(v);
      if (g) {
        p = v + (p.length > 0 ? ' ' + p : p);
        continue;
      }
      let D = !!x,
        O = s(D ? R.substring(0, x) : R);
      if (!O) {
        if (!D) {
          p = v + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        if (((O = s(R)), !O)) {
          p = v + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        D = !1;
      }
      const L = c(S).join(':'),
        H = w ? L + yd : L,
        Y = H + O;
      if (d.includes(Y)) continue;
      d.push(Y);
      const q = o(O, D);
      for (let Z = 0; Z < q.length; ++Z) {
        const G = q[Z];
        d.push(H + G);
      }
      p = v + (p.length > 0 ? ' ' + p : p);
    }
    return p;
  };
function fw() {
  let n = 0,
    a,
    i,
    s = '';
  for (; n < arguments.length; ) (a = arguments[n++]) && (i = Mg(a)) && (s && (s += ' '), (s += i));
  return s;
}
const Mg = (n) => {
  if (typeof n == 'string') return n;
  let a,
    i = '';
  for (let s = 0; s < n.length; s++) n[s] && (a = Mg(n[s])) && (i && (i += ' '), (i += a));
  return i;
};
function dw(n, ...a) {
  let i,
    s,
    o,
    c = d;
  function d(p) {
    const m = a.reduce((v, g) => g(v), n());
    return ((i = ow(m)), (s = i.cache.get), (o = i.cache.set), (c = h), h(p));
  }
  function h(p) {
    const m = s(p);
    if (m) return m;
    const v = cw(p, i);
    return (o(p, v), v);
  }
  return function () {
    return c(fw.apply(null, arguments));
  };
}
const ct = (n) => {
    const a = (i) => i[n] || [];
    return ((a.isThemeGetter = !0), a);
  },
  Dg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ng = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  hw = /^\d+\/\d+$/,
  mw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  pw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  vw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  yw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  gw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  si = (n) => hw.test(n),
  Me = (n) => !!n && !Number.isNaN(Number(n)),
  Ma = (n) => !!n && Number.isInteger(Number(n)),
  Yf = (n) => n.endsWith('%') && Me(n.slice(0, -1)),
  Wn = (n) => mw.test(n),
  bw = () => !0,
  Sw = (n) => pw.test(n) && !vw.test(n),
  kg = () => !1,
  xw = (n) => yw.test(n),
  _w = (n) => gw.test(n),
  ww = (n) => !he(n) && !me(n),
  Ew = (n) => Mi(n, Lg, kg),
  he = (n) => Dg.test(n),
  hr = (n) => Mi(n, Ug, Sw),
  Ff = (n) => Mi(n, Aw, Me),
  _y = (n) => Mi(n, zg, kg),
  Rw = (n) => Mi(n, jg, _w),
  Co = (n) => Mi(n, Bg, xw),
  me = (n) => Ng.test(n),
  zs = (n) => Di(n, Ug),
  Tw = (n) => Di(n, Mw),
  wy = (n) => Di(n, zg),
  Cw = (n) => Di(n, Lg),
  Ow = (n) => Di(n, jg),
  Oo = (n) => Di(n, Bg, !0),
  Mi = (n, a, i) => {
    const s = Dg.exec(n);
    return s ? (s[1] ? a(s[1]) : i(s[2])) : !1;
  },
  Di = (n, a, i = !1) => {
    const s = Ng.exec(n);
    return s ? (s[1] ? a(s[1]) : i) : !1;
  },
  zg = (n) => n === 'position' || n === 'percentage',
  jg = (n) => n === 'image' || n === 'url',
  Lg = (n) => n === 'length' || n === 'size' || n === 'bg-size',
  Ug = (n) => n === 'length',
  Aw = (n) => n === 'number',
  Mw = (n) => n === 'family-name',
  Bg = (n) => n === 'shadow',
  Dw = () => {
    const n = ct('color'),
      a = ct('font'),
      i = ct('text'),
      s = ct('font-weight'),
      o = ct('tracking'),
      c = ct('leading'),
      d = ct('breakpoint'),
      h = ct('container'),
      p = ct('spacing'),
      m = ct('radius'),
      v = ct('shadow'),
      g = ct('inset-shadow'),
      S = ct('text-shadow'),
      w = ct('drop-shadow'),
      R = ct('blur'),
      x = ct('perspective'),
      D = ct('aspect'),
      O = ct('ease'),
      L = ct('animate'),
      H = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      Y = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      q = () => [...Y(), me, he],
      Z = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      G = () => ['auto', 'contain', 'none'],
      M = () => [me, he, p],
      A = () => [si, 'full', 'auto', ...M()],
      X = () => [Ma, 'none', 'subgrid', me, he],
      ae = () => ['auto', { span: ['full', Ma, me, he] }, Ma, me, he],
      te = () => [Ma, 'auto', me, he],
      ne = () => ['auto', 'min', 'max', 'fr', me, he],
      ce = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      ie = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      P = () => ['auto', ...M()],
      J = () => [
        si,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...M(),
      ],
      B = () => [n, me, he],
      pe = () => [...Y(), wy, _y, { position: [me, he] }],
      T = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      V = () => ['auto', 'cover', 'contain', Cw, Ew, { size: [me, he] }],
      se = () => [Yf, zs, hr],
      I = () => ['', 'none', 'full', m, me, he],
      $ = () => ['', Me, zs, hr],
      fe = () => ['solid', 'dashed', 'dotted', 'double'],
      oe = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      ve = () => [Me, Yf, wy, _y],
      ue = () => ['', 'none', R, me, he],
      Se = () => ['none', Me, me, he],
      Oe = () => ['none', Me, me, he],
      Ze = () => [Me, me, he],
      at = () => [si, 'full', ...M()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Wn],
        breakpoint: [Wn],
        color: [bw],
        container: [Wn],
        'drop-shadow': [Wn],
        ease: ['in', 'out', 'in-out'],
        font: [ww],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [Wn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [Wn],
        shadow: [Wn],
        spacing: ['px', Me],
        text: [Wn],
        'text-shadow': [Wn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', si, he, me, D] }],
        container: ['container'],
        columns: [{ columns: [Me, he, me, h] }],
        'break-after': [{ 'break-after': H() }],
        'break-before': [{ 'break-before': H() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: q() }],
        overflow: [{ overflow: Z() }],
        'overflow-x': [{ 'overflow-x': Z() }],
        'overflow-y': [{ 'overflow-y': Z() }],
        overscroll: [{ overscroll: G() }],
        'overscroll-x': [{ 'overscroll-x': G() }],
        'overscroll-y': [{ 'overscroll-y': G() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: A() }],
        'inset-x': [{ 'inset-x': A() }],
        'inset-y': [{ 'inset-y': A() }],
        start: [{ start: A() }],
        end: [{ end: A() }],
        top: [{ top: A() }],
        right: [{ right: A() }],
        bottom: [{ bottom: A() }],
        left: [{ left: A() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Ma, 'auto', me, he] }],
        basis: [{ basis: [si, 'full', 'auto', h, ...M()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [Me, si, 'auto', 'initial', 'none', he] }],
        grow: [{ grow: ['', Me, me, he] }],
        shrink: [{ shrink: ['', Me, me, he] }],
        order: [{ order: [Ma, 'first', 'last', 'none', me, he] }],
        'grid-cols': [{ 'grid-cols': X() }],
        'col-start-end': [{ col: ae() }],
        'col-start': [{ 'col-start': te() }],
        'col-end': [{ 'col-end': te() }],
        'grid-rows': [{ 'grid-rows': X() }],
        'row-start-end': [{ row: ae() }],
        'row-start': [{ 'row-start': te() }],
        'row-end': [{ 'row-end': te() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ne() }],
        'auto-rows': [{ 'auto-rows': ne() }],
        gap: [{ gap: M() }],
        'gap-x': [{ 'gap-x': M() }],
        'gap-y': [{ 'gap-y': M() }],
        'justify-content': [{ justify: [...ce(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...ie(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...ie()] }],
        'align-content': [{ content: ['normal', ...ce()] }],
        'align-items': [{ items: [...ie(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...ie(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': ce() }],
        'place-items': [{ 'place-items': [...ie(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...ie()] }],
        p: [{ p: M() }],
        px: [{ px: M() }],
        py: [{ py: M() }],
        ps: [{ ps: M() }],
        pe: [{ pe: M() }],
        pt: [{ pt: M() }],
        pr: [{ pr: M() }],
        pb: [{ pb: M() }],
        pl: [{ pl: M() }],
        m: [{ m: P() }],
        mx: [{ mx: P() }],
        my: [{ my: P() }],
        ms: [{ ms: P() }],
        me: [{ me: P() }],
        mt: [{ mt: P() }],
        mr: [{ mr: P() }],
        mb: [{ mb: P() }],
        ml: [{ ml: P() }],
        'space-x': [{ 'space-x': M() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': M() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: J() }],
        w: [{ w: [h, 'screen', ...J()] }],
        'min-w': [{ 'min-w': [h, 'screen', 'none', ...J()] }],
        'max-w': [{ 'max-w': [h, 'screen', 'none', 'prose', { screen: [d] }, ...J()] }],
        h: [{ h: ['screen', 'lh', ...J()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...J()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...J()] }],
        'font-size': [{ text: ['base', i, zs, hr] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [s, me, Ff] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Yf,
              he,
            ],
          },
        ],
        'font-family': [{ font: [Tw, he, a] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [o, me, he] }],
        'line-clamp': [{ 'line-clamp': [Me, 'none', me, Ff] }],
        leading: [{ leading: [c, ...M()] }],
        'list-image': [{ 'list-image': ['none', me, he] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', me, he] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: B() }],
        'text-color': [{ text: B() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...fe(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [Me, 'from-font', 'auto', me, hr] }],
        'text-decoration-color': [{ decoration: B() }],
        'underline-offset': [{ 'underline-offset': [Me, 'auto', me, he] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: M() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              me,
              he,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', me, he] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: pe() }],
        'bg-repeat': [{ bg: T() }],
        'bg-size': [{ bg: V() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Ma, me, he],
                radial: ['', me, he],
                conic: [Ma, me, he],
              },
              Ow,
              Rw,
            ],
          },
        ],
        'bg-color': [{ bg: B() }],
        'gradient-from-pos': [{ from: se() }],
        'gradient-via-pos': [{ via: se() }],
        'gradient-to-pos': [{ to: se() }],
        'gradient-from': [{ from: B() }],
        'gradient-via': [{ via: B() }],
        'gradient-to': [{ to: B() }],
        rounded: [{ rounded: I() }],
        'rounded-s': [{ 'rounded-s': I() }],
        'rounded-e': [{ 'rounded-e': I() }],
        'rounded-t': [{ 'rounded-t': I() }],
        'rounded-r': [{ 'rounded-r': I() }],
        'rounded-b': [{ 'rounded-b': I() }],
        'rounded-l': [{ 'rounded-l': I() }],
        'rounded-ss': [{ 'rounded-ss': I() }],
        'rounded-se': [{ 'rounded-se': I() }],
        'rounded-ee': [{ 'rounded-ee': I() }],
        'rounded-es': [{ 'rounded-es': I() }],
        'rounded-tl': [{ 'rounded-tl': I() }],
        'rounded-tr': [{ 'rounded-tr': I() }],
        'rounded-br': [{ 'rounded-br': I() }],
        'rounded-bl': [{ 'rounded-bl': I() }],
        'border-w': [{ border: $() }],
        'border-w-x': [{ 'border-x': $() }],
        'border-w-y': [{ 'border-y': $() }],
        'border-w-s': [{ 'border-s': $() }],
        'border-w-e': [{ 'border-e': $() }],
        'border-w-t': [{ 'border-t': $() }],
        'border-w-r': [{ 'border-r': $() }],
        'border-w-b': [{ 'border-b': $() }],
        'border-w-l': [{ 'border-l': $() }],
        'divide-x': [{ 'divide-x': $() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': $() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...fe(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...fe(), 'hidden', 'none'] }],
        'border-color': [{ border: B() }],
        'border-color-x': [{ 'border-x': B() }],
        'border-color-y': [{ 'border-y': B() }],
        'border-color-s': [{ 'border-s': B() }],
        'border-color-e': [{ 'border-e': B() }],
        'border-color-t': [{ 'border-t': B() }],
        'border-color-r': [{ 'border-r': B() }],
        'border-color-b': [{ 'border-b': B() }],
        'border-color-l': [{ 'border-l': B() }],
        'divide-color': [{ divide: B() }],
        'outline-style': [{ outline: [...fe(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [Me, me, he] }],
        'outline-w': [{ outline: ['', Me, zs, hr] }],
        'outline-color': [{ outline: B() }],
        shadow: [{ shadow: ['', 'none', v, Oo, Co] }],
        'shadow-color': [{ shadow: B() }],
        'inset-shadow': [{ 'inset-shadow': ['none', g, Oo, Co] }],
        'inset-shadow-color': [{ 'inset-shadow': B() }],
        'ring-w': [{ ring: $() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: B() }],
        'ring-offset-w': [{ 'ring-offset': [Me, hr] }],
        'ring-offset-color': [{ 'ring-offset': B() }],
        'inset-ring-w': [{ 'inset-ring': $() }],
        'inset-ring-color': [{ 'inset-ring': B() }],
        'text-shadow': [{ 'text-shadow': ['none', S, Oo, Co] }],
        'text-shadow-color': [{ 'text-shadow': B() }],
        opacity: [{ opacity: [Me, me, he] }],
        'mix-blend': [{ 'mix-blend': [...oe(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': oe() }],
        'mask-clip': [
          { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
          'mask-no-clip',
        ],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [Me] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': ve() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': ve() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': B() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': B() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': ve() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': ve() }],
        'mask-image-t-from-color': [{ 'mask-t-from': B() }],
        'mask-image-t-to-color': [{ 'mask-t-to': B() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': ve() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': ve() }],
        'mask-image-r-from-color': [{ 'mask-r-from': B() }],
        'mask-image-r-to-color': [{ 'mask-r-to': B() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': ve() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': ve() }],
        'mask-image-b-from-color': [{ 'mask-b-from': B() }],
        'mask-image-b-to-color': [{ 'mask-b-to': B() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': ve() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': ve() }],
        'mask-image-l-from-color': [{ 'mask-l-from': B() }],
        'mask-image-l-to-color': [{ 'mask-l-to': B() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': ve() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': ve() }],
        'mask-image-x-from-color': [{ 'mask-x-from': B() }],
        'mask-image-x-to-color': [{ 'mask-x-to': B() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': ve() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': ve() }],
        'mask-image-y-from-color': [{ 'mask-y-from': B() }],
        'mask-image-y-to-color': [{ 'mask-y-to': B() }],
        'mask-image-radial': [{ 'mask-radial': [me, he] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': ve() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': ve() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': B() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': B() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': Y() }],
        'mask-image-conic-pos': [{ 'mask-conic': [Me] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': ve() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': ve() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': B() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': B() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
        ],
        'mask-position': [{ mask: pe() }],
        'mask-repeat': [{ mask: T() }],
        'mask-size': [{ mask: V() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', me, he] }],
        filter: [{ filter: ['', 'none', me, he] }],
        blur: [{ blur: ue() }],
        brightness: [{ brightness: [Me, me, he] }],
        contrast: [{ contrast: [Me, me, he] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', w, Oo, Co] }],
        'drop-shadow-color': [{ 'drop-shadow': B() }],
        grayscale: [{ grayscale: ['', Me, me, he] }],
        'hue-rotate': [{ 'hue-rotate': [Me, me, he] }],
        invert: [{ invert: ['', Me, me, he] }],
        saturate: [{ saturate: [Me, me, he] }],
        sepia: [{ sepia: ['', Me, me, he] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', me, he] }],
        'backdrop-blur': [{ 'backdrop-blur': ue() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [Me, me, he] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [Me, me, he] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Me, me, he] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Me, me, he] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', Me, me, he] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [Me, me, he] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Me, me, he] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', Me, me, he] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': M() }],
        'border-spacing-x': [{ 'border-spacing-x': M() }],
        'border-spacing-y': [{ 'border-spacing-y': M() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', me, he] },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [Me, 'initial', me, he] }],
        ease: [{ ease: ['linear', 'initial', O, me, he] }],
        delay: [{ delay: [Me, me, he] }],
        animate: [{ animate: ['none', L, me, he] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [x, me, he] }],
        'perspective-origin': [{ 'perspective-origin': q() }],
        rotate: [{ rotate: Se() }],
        'rotate-x': [{ 'rotate-x': Se() }],
        'rotate-y': [{ 'rotate-y': Se() }],
        'rotate-z': [{ 'rotate-z': Se() }],
        scale: [{ scale: Oe() }],
        'scale-x': [{ 'scale-x': Oe() }],
        'scale-y': [{ 'scale-y': Oe() }],
        'scale-z': [{ 'scale-z': Oe() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: Ze() }],
        'skew-x': [{ 'skew-x': Ze() }],
        'skew-y': [{ 'skew-y': Ze() }],
        transform: [{ transform: [me, he, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: q() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: at() }],
        'translate-x': [{ 'translate-x': at() }],
        'translate-y': [{ 'translate-y': at() }],
        'translate-z': [{ 'translate-z': at() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: B() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: B() }],
        'color-scheme': [
          { scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              me,
              he,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': M() }],
        'scroll-mx': [{ 'scroll-mx': M() }],
        'scroll-my': [{ 'scroll-my': M() }],
        'scroll-ms': [{ 'scroll-ms': M() }],
        'scroll-me': [{ 'scroll-me': M() }],
        'scroll-mt': [{ 'scroll-mt': M() }],
        'scroll-mr': [{ 'scroll-mr': M() }],
        'scroll-mb': [{ 'scroll-mb': M() }],
        'scroll-ml': [{ 'scroll-ml': M() }],
        'scroll-p': [{ 'scroll-p': M() }],
        'scroll-px': [{ 'scroll-px': M() }],
        'scroll-py': [{ 'scroll-py': M() }],
        'scroll-ps': [{ 'scroll-ps': M() }],
        'scroll-pe': [{ 'scroll-pe': M() }],
        'scroll-pt': [{ 'scroll-pt': M() }],
        'scroll-pr': [{ 'scroll-pr': M() }],
        'scroll-pb': [{ 'scroll-pb': M() }],
        'scroll-pl': [{ 'scroll-pl': M() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', me, he] }],
        fill: [{ fill: ['none', ...B()] }],
        'stroke-w': [{ stroke: [Me, zs, hr, Ff] }],
        stroke: [{ stroke: ['none', ...B()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  Nw = dw(Dw);
function Ve(...n) {
  return Nw(Og(n));
}
function kw({ className: n, textClassName: a, containerClassName: i }) {
  return C.jsxs('div', {
    className: Ve('flex items-center gap-0.5', i),
    children: [
      C.jsx('svg', {
        className: Ve('w-[18px]', n),
        viewBox: '0 0 54 68',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        'aria-hidden': 'true',
        children: C.jsx('path', {
          fill: 'currentColor',
          d: 'M0 .002V29.1l7.481 4.681L0 38.447v28.977l53.82-33.697L0 .002Zm4.92 41.139 21.003-13.175L4.921 14.75V8.817l30.51 19.136-30.51 18.909V41.14Zm-.053 17.376v-5.828l.134-.08 35.031-21.776 4.6 2.88L4.868 58.517Zm0-32.111v-5.908l11.895 7.468-4.707 2.947-7.188-4.507Z',
        }),
      }),
      C.jsx('span', {
        className: Ve('truncate font-normal text-lg tracking-tight ml-2', a),
        children: 'Evalite',
      }),
    ],
  });
}
const Hg = (n) =>
    C.jsxs('span', {
      className: 'flex items-center space-x-2',
      children: [
        n.state === 'loading'
          ? C.jsx('span', { children: '---%' })
          : n.hasScores
            ? C.jsxs('span', {
                children: [Math.round((Number.isNaN(n.score) ? 0 : n.score) * 100), '%'],
              })
            : C.jsx('span', { className: 'text-muted-foreground', children: '-' }),
        (() => {
          switch (!0) {
            case n.state === 'loading':
              return C.jsx($1, {
                className: Ve('size-3 text-blue-500 animate-spin', n.iconClassName),
              });
            case n.state === 'failed':
              return C.jsx(X1, { className: Ve('size-3 text-red-500', n.iconClassName) });
            case !n.hasScores:
              return C.jsx(Qf, { className: Ve('size-3 text-blue-500', n.iconClassName) });
            case n.state === 'up':
              return C.jsx(F1, { className: Ve('size-3 text-green-600', n.iconClassName) });
            case n.state === 'down':
              return C.jsx(Y1, { className: Ve('size-3 text-red-600', n.iconClassName) });
            case n.state === 'same':
              return C.jsx(Qf, { className: Ve('size-3 text-blue-500', n.iconClassName) });
            case n.state === 'first':
              return C.jsx(Qf, { className: Ve('size-3 text-blue-500', n.iconClassName) });
            default:
              return null;
          }
        })(),
      ],
    }),
  Pg = (n) =>
    n.status === 'fail'
      ? 'failed'
      : n.status === 'running'
        ? 'loading'
        : typeof n.prevScore > 'u' || n.prevScore === null
          ? 'first'
          : n.score > n.prevScore
            ? 'up'
            : n.score < n.prevScore
              ? 'down'
              : 'same';
function zw(n, a) {
  typeof n == 'function' ? n(a) : n != null && (n.current = a);
}
function qg(...n) {
  return (a) => n.forEach((i) => zw(i, a));
}
function gn(...n) {
  return _.useCallback(qg(...n), n);
}
var il = _.forwardRef((n, a) => {
  const { children: i, ...s } = n,
    o = _.Children.toArray(i),
    c = o.find(jw);
  if (c) {
    const d = c.props.children,
      h = o.map((p) =>
        p === c
          ? _.Children.count(d) > 1
            ? _.Children.only(null)
            : _.isValidElement(d)
              ? d.props.children
              : null
          : p
      );
    return C.jsx(bd, {
      ...s,
      ref: a,
      children: _.isValidElement(d) ? _.cloneElement(d, void 0, h) : null,
    });
  }
  return C.jsx(bd, { ...s, ref: a, children: i });
});
il.displayName = 'Slot';
var bd = _.forwardRef((n, a) => {
  const { children: i, ...s } = n;
  if (_.isValidElement(i)) {
    const o = Uw(i);
    return _.cloneElement(i, { ...Lw(s, i.props), ref: a ? qg(a, o) : o });
  }
  return _.Children.count(i) > 1 ? _.Children.only(null) : null;
});
bd.displayName = 'SlotClone';
var Vg = ({ children: n }) => C.jsx(C.Fragment, { children: n });
function jw(n) {
  return _.isValidElement(n) && n.type === Vg;
}
function Lw(n, a) {
  const i = { ...a };
  for (const s in a) {
    const o = n[s],
      c = a[s];
    /^on[A-Z]/.test(s)
      ? o && c
        ? (i[s] = (...h) => {
            (c(...h), o(...h));
          })
        : o && (i[s] = o)
      : s === 'style'
        ? (i[s] = { ...o, ...c })
        : s === 'className' && (i[s] = [o, c].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function Uw(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = a && 'isReactWarning' in a && a.isReactWarning;
  return i
    ? n.ref
    : ((a = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = a && 'isReactWarning' in a && a.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
const Ey = (n) => (typeof n == 'boolean' ? `${n}` : n === 0 ? '0' : n),
  Ry = Og,
  Bw = (n, a) => (i) => {
    var s;
    if (a?.variants == null) return Ry(n, i?.class, i?.className);
    const { variants: o, defaultVariants: c } = a,
      d = Object.keys(o).map((m) => {
        const v = i?.[m],
          g = c?.[m];
        if (v === null) return null;
        const S = Ey(v) || Ey(g);
        return o[m][S];
      }),
      h =
        i &&
        Object.entries(i).reduce((m, v) => {
          let [g, S] = v;
          return (S === void 0 || (m[g] = S), m);
        }, {}),
      p =
        a == null || (s = a.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((m, v) => {
              let { class: g, className: S, ...w } = v;
              return Object.entries(w).every((R) => {
                let [x, D] = R;
                return Array.isArray(D) ? D.includes({ ...c, ...h }[x]) : { ...c, ...h }[x] === D;
              })
                ? [...m, g, S]
                : m;
            }, []);
    return Ry(n, d, p, i?.class, i?.className);
  },
  Xf = 768;
function Hw() {
  const [n, a] = _.useState(void 0);
  return (
    _.useEffect(() => {
      const i = window.matchMedia(`(max-width: ${Xf - 1}px)`),
        s = () => {
          a(window.innerWidth < Xf);
        };
      return (
        i.addEventListener('change', s),
        a(window.innerWidth < Xf),
        () => i.removeEventListener('change', s)
      );
    }, []),
    !!n
  );
}
const Pw = Bw(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
function qw({ className: n, variant: a, size: i, asChild: s = !1, ...o }) {
  const c = s ? il : 'button';
  return C.jsx(c, {
    'data-slot': 'button',
    className: Ve(Pw({ variant: a, size: i, className: n })),
    ...o,
  });
}
var Vw = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Nt = Vw.reduce((n, a) => {
    const i = _.forwardRef((s, o) => {
      const { asChild: c, ...d } = s,
        h = c ? il : a;
      return (
        typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
        C.jsx(h, { ...d, ref: o })
      );
    });
    return ((i.displayName = `Primitive.${a}`), { ...n, [a]: i });
  }, {});
function Zw(n, a) {
  n && fu.flushSync(() => n.dispatchEvent(a));
}
function Dt(n, a, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (o) {
    if ((n?.(o), i === !1 || !o.defaultPrevented)) return a?.(o);
  };
}
function Gw(n, a) {
  const i = _.createContext(a),
    s = (c) => {
      const { children: d, ...h } = c,
        p = _.useMemo(() => h, Object.values(h));
      return C.jsx(i.Provider, { value: p, children: d });
    };
  s.displayName = n + 'Provider';
  function o(c) {
    const d = _.useContext(i);
    if (d) return d;
    if (a !== void 0) return a;
    throw new Error(`\`${c}\` must be used within \`${n}\``);
  }
  return [s, o];
}
function Zg(n, a = []) {
  let i = [];
  function s(c, d) {
    const h = _.createContext(d),
      p = i.length;
    i = [...i, d];
    const m = (g) => {
      const { scope: S, children: w, ...R } = g,
        x = S?.[n]?.[p] || h,
        D = _.useMemo(() => R, Object.values(R));
      return C.jsx(x.Provider, { value: D, children: w });
    };
    m.displayName = c + 'Provider';
    function v(g, S) {
      const w = S?.[n]?.[p] || h,
        R = _.useContext(w);
      if (R) return R;
      if (d !== void 0) return d;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return [m, v];
  }
  const o = () => {
    const c = i.map((d) => _.createContext(d));
    return function (h) {
      const p = h?.[n] || c;
      return _.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: p } }), [h, p]);
    };
  };
  return ((o.scopeName = n), [s, Qw(o, ...a)]);
}
function Qw(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const i = () => {
    const s = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const d = s.reduce((h, { useScope: p, scopeName: m }) => {
        const g = p(c)[`__scope${m}`];
        return { ...h, ...g };
      }, {});
      return _.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return ((i.scopeName = a.scopeName), i);
}
var br = globalThis?.document ? _.useLayoutEffect : () => {},
  Yw = jx.useId || (() => {}),
  Fw = 0;
function Kf(n) {
  const [a, i] = _.useState(Yw());
  return (
    br(() => {
      i((s) => s ?? String(Fw++));
    }, [n]),
    n || (a ? `radix-${a}` : '')
  );
}
function za(n) {
  const a = _.useRef(n);
  return (
    _.useEffect(() => {
      a.current = n;
    }),
    _.useMemo(
      () =>
        (...i) =>
          a.current?.(...i),
      []
    )
  );
}
function Xw({ prop: n, defaultProp: a, onChange: i = () => {} }) {
  const [s, o] = Kw({ defaultProp: a, onChange: i }),
    c = n !== void 0,
    d = c ? n : s,
    h = za(i),
    p = _.useCallback(
      (m) => {
        if (c) {
          const g = typeof m == 'function' ? m(n) : m;
          g !== n && h(g);
        } else o(m);
      },
      [c, n, o, h]
    );
  return [d, p];
}
function Kw({ defaultProp: n, onChange: a }) {
  const i = _.useState(n),
    [s] = i,
    o = _.useRef(s),
    c = za(a);
  return (
    _.useEffect(() => {
      o.current !== s && (c(s), (o.current = s));
    }, [s, o, c]),
    i
  );
}
function $w(n, a = globalThis?.document) {
  const i = za(n);
  _.useEffect(() => {
    const s = (o) => {
      o.key === 'Escape' && i(o);
    };
    return (
      a.addEventListener('keydown', s, { capture: !0 }),
      () => a.removeEventListener('keydown', s, { capture: !0 })
    );
  }, [i, a]);
}
var Ww = 'DismissableLayer',
  Sd = 'dismissableLayer.update',
  Jw = 'dismissableLayer.pointerDownOutside',
  Iw = 'dismissableLayer.focusOutside',
  Ty,
  Gg = _.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Zd = _.forwardRef((n, a) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: c,
        onInteractOutside: d,
        onDismiss: h,
        ...p
      } = n,
      m = _.useContext(Gg),
      [v, g] = _.useState(null),
      S = v?.ownerDocument ?? globalThis?.document,
      [, w] = _.useState({}),
      R = gn(a, (G) => g(G)),
      x = Array.from(m.layers),
      [D] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      O = x.indexOf(D),
      L = v ? x.indexOf(v) : -1,
      H = m.layersWithOutsidePointerEventsDisabled.size > 0,
      Y = L >= O,
      q = nE((G) => {
        const M = G.target,
          A = [...m.branches].some((X) => X.contains(M));
        !Y || A || (o?.(G), d?.(G), G.defaultPrevented || h?.());
      }, S),
      Z = aE((G) => {
        const M = G.target;
        [...m.branches].some((X) => X.contains(M)) || (c?.(G), d?.(G), G.defaultPrevented || h?.());
      }, S);
    return (
      $w((G) => {
        L === m.layers.size - 1 && (s?.(G), !G.defaultPrevented && h && (G.preventDefault(), h()));
      }, S),
      _.useEffect(() => {
        if (v)
          return (
            i &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ty = S.body.style.pointerEvents), (S.body.style.pointerEvents = 'none')),
              m.layersWithOutsidePointerEventsDisabled.add(v)),
            m.layers.add(v),
            Cy(),
            () => {
              i &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (S.body.style.pointerEvents = Ty);
            }
          );
      }, [v, S, i, m]),
      _.useEffect(
        () => () => {
          v && (m.layers.delete(v), m.layersWithOutsidePointerEventsDisabled.delete(v), Cy());
        },
        [v, m]
      ),
      _.useEffect(() => {
        const G = () => w({});
        return (document.addEventListener(Sd, G), () => document.removeEventListener(Sd, G));
      }, []),
      C.jsx(Nt.div, {
        ...p,
        ref: R,
        style: { pointerEvents: H ? (Y ? 'auto' : 'none') : void 0, ...n.style },
        onFocusCapture: Dt(n.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Dt(n.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Dt(n.onPointerDownCapture, q.onPointerDownCapture),
      })
    );
  });
Zd.displayName = Ww;
var eE = 'DismissableLayerBranch',
  tE = _.forwardRef((n, a) => {
    const i = _.useContext(Gg),
      s = _.useRef(null),
      o = gn(a, s);
    return (
      _.useEffect(() => {
        const c = s.current;
        if (c)
          return (
            i.branches.add(c),
            () => {
              i.branches.delete(c);
            }
          );
      }, [i.branches]),
      C.jsx(Nt.div, { ...n, ref: o })
    );
  });
tE.displayName = eE;
function nE(n, a = globalThis?.document) {
  const i = za(n),
    s = _.useRef(!1),
    o = _.useRef(() => {});
  return (
    _.useEffect(() => {
      const c = (h) => {
          if (h.target && !s.current) {
            let p = function () {
              Qg(Jw, i, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === 'touch'
              ? (a.removeEventListener('click', o.current),
                (o.current = p),
                a.addEventListener('click', o.current, { once: !0 }))
              : p();
          } else a.removeEventListener('click', o.current);
          s.current = !1;
        },
        d = window.setTimeout(() => {
          a.addEventListener('pointerdown', c);
        }, 0);
      return () => {
        (window.clearTimeout(d),
          a.removeEventListener('pointerdown', c),
          a.removeEventListener('click', o.current));
      };
    }, [a, i]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function aE(n, a = globalThis?.document) {
  const i = za(n),
    s = _.useRef(!1);
  return (
    _.useEffect(() => {
      const o = (c) => {
        c.target && !s.current && Qg(Iw, i, { originalEvent: c }, { discrete: !1 });
      };
      return (a.addEventListener('focusin', o), () => a.removeEventListener('focusin', o));
    }, [a, i]),
    { onFocusCapture: () => (s.current = !0), onBlurCapture: () => (s.current = !1) }
  );
}
function Cy() {
  const n = new CustomEvent(Sd);
  document.dispatchEvent(n);
}
function Qg(n, a, i, { discrete: s }) {
  const o = i.originalEvent.target,
    c = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  (a && o.addEventListener(n, a, { once: !0 }), s ? Zw(o, c) : o.dispatchEvent(c));
}
var $f = 'focusScope.autoFocusOnMount',
  Wf = 'focusScope.autoFocusOnUnmount',
  Oy = { bubbles: !1, cancelable: !0 },
  rE = 'FocusScope',
  Yg = _.forwardRef((n, a) => {
    const { loop: i = !1, trapped: s = !1, onMountAutoFocus: o, onUnmountAutoFocus: c, ...d } = n,
      [h, p] = _.useState(null),
      m = za(o),
      v = za(c),
      g = _.useRef(null),
      S = gn(a, (x) => p(x)),
      w = _.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (_.useEffect(() => {
      if (s) {
        let x = function (H) {
            if (w.paused || !h) return;
            const Y = H.target;
            h.contains(Y) ? (g.current = Y) : Da(g.current, { select: !0 });
          },
          D = function (H) {
            if (w.paused || !h) return;
            const Y = H.relatedTarget;
            Y !== null && (h.contains(Y) || Da(g.current, { select: !0 }));
          },
          O = function (H) {
            if (document.activeElement === document.body)
              for (const q of H) q.removedNodes.length > 0 && Da(h);
          };
        (document.addEventListener('focusin', x), document.addEventListener('focusout', D));
        const L = new MutationObserver(O);
        return (
          h && L.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', x),
              document.removeEventListener('focusout', D),
              L.disconnect());
          }
        );
      }
    }, [s, h, w.paused]),
      _.useEffect(() => {
        if (h) {
          My.add(w);
          const x = document.activeElement;
          if (!h.contains(x)) {
            const O = new CustomEvent($f, Oy);
            (h.addEventListener($f, m),
              h.dispatchEvent(O),
              O.defaultPrevented ||
                (iE(cE(Fg(h)), { select: !0 }), document.activeElement === x && Da(h)));
          }
          return () => {
            (h.removeEventListener($f, m),
              setTimeout(() => {
                const O = new CustomEvent(Wf, Oy);
                (h.addEventListener(Wf, v),
                  h.dispatchEvent(O),
                  O.defaultPrevented || Da(x ?? document.body, { select: !0 }),
                  h.removeEventListener(Wf, v),
                  My.remove(w));
              }, 0));
          };
        }
      }, [h, m, v, w]));
    const R = _.useCallback(
      (x) => {
        if ((!i && !s) || w.paused) return;
        const D = x.key === 'Tab' && !x.altKey && !x.ctrlKey && !x.metaKey,
          O = document.activeElement;
        if (D && O) {
          const L = x.currentTarget,
            [H, Y] = sE(L);
          H && Y
            ? !x.shiftKey && O === Y
              ? (x.preventDefault(), i && Da(H, { select: !0 }))
              : x.shiftKey && O === H && (x.preventDefault(), i && Da(Y, { select: !0 }))
            : O === L && x.preventDefault();
        }
      },
      [i, s, w.paused]
    );
    return C.jsx(Nt.div, { tabIndex: -1, ...d, ref: S, onKeyDown: R });
  });
Yg.displayName = rE;
function iE(n, { select: a = !1 } = {}) {
  const i = document.activeElement;
  for (const s of n) if ((Da(s, { select: a }), document.activeElement !== i)) return;
}
function sE(n) {
  const a = Fg(n),
    i = Ay(a, n),
    s = Ay(a.reverse(), n);
  return [i, s];
}
function Fg(n) {
  const a = [],
    i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const o = s.tagName === 'INPUT' && s.type === 'hidden';
        return s.disabled || s.hidden || o
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) a.push(i.currentNode);
  return a;
}
function Ay(n, a) {
  for (const i of n) if (!lE(i, { upTo: a })) return i;
}
function lE(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === 'hidden') return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === 'none') return !0;
    n = n.parentElement;
  }
  return !1;
}
function oE(n) {
  return n instanceof HTMLInputElement && 'select' in n;
}
function Da(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const i = document.activeElement;
    (n.focus({ preventScroll: !0 }), n !== i && oE(n) && a && n.select());
  }
}
var My = uE();
function uE() {
  let n = [];
  return {
    add(a) {
      const i = n[0];
      (a !== i && i?.pause(), (n = Dy(n, a)), n.unshift(a));
    },
    remove(a) {
      ((n = Dy(n, a)), n[0]?.resume());
    },
  };
}
function Dy(n, a) {
  const i = [...n],
    s = i.indexOf(a);
  return (s !== -1 && i.splice(s, 1), i);
}
function cE(n) {
  return n.filter((a) => a.tagName !== 'A');
}
var fE = 'Portal',
  Xg = _.forwardRef((n, a) => {
    const { container: i, ...s } = n,
      [o, c] = _.useState(!1);
    br(() => c(!0), []);
    const d = i || (o && globalThis?.document?.body);
    return d ? G_.createPortal(C.jsx(Nt.div, { ...s, ref: a }), d) : null;
  });
Xg.displayName = fE;
function dE(n, a) {
  return _.useReducer((i, s) => a[i][s] ?? i, n);
}
var sl = (n) => {
  const { present: a, children: i } = n,
    s = hE(a),
    o = typeof i == 'function' ? i({ present: s.isPresent }) : _.Children.only(i),
    c = gn(s.ref, mE(o));
  return typeof i == 'function' || s.isPresent ? _.cloneElement(o, { ref: c }) : null;
};
sl.displayName = 'Presence';
function hE(n) {
  const [a, i] = _.useState(),
    s = _.useRef({}),
    o = _.useRef(n),
    c = _.useRef('none'),
    d = n ? 'mounted' : 'unmounted',
    [h, p] = dE(d, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    _.useEffect(() => {
      const m = Ao(s.current);
      c.current = h === 'mounted' ? m : 'none';
    }, [h]),
    br(() => {
      const m = s.current,
        v = o.current;
      if (v !== n) {
        const S = c.current,
          w = Ao(m);
        (n
          ? p('MOUNT')
          : w === 'none' || m?.display === 'none'
            ? p('UNMOUNT')
            : p(v && S !== w ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = n));
      }
    }, [n, p]),
    br(() => {
      if (a) {
        let m;
        const v = a.ownerDocument.defaultView ?? window,
          g = (w) => {
            const x = Ao(s.current).includes(w.animationName);
            if (w.target === a && x && (p('ANIMATION_END'), !o.current)) {
              const D = a.style.animationFillMode;
              ((a.style.animationFillMode = 'forwards'),
                (m = v.setTimeout(() => {
                  a.style.animationFillMode === 'forwards' && (a.style.animationFillMode = D);
                })));
            }
          },
          S = (w) => {
            w.target === a && (c.current = Ao(s.current));
          };
        return (
          a.addEventListener('animationstart', S),
          a.addEventListener('animationcancel', g),
          a.addEventListener('animationend', g),
          () => {
            (v.clearTimeout(m),
              a.removeEventListener('animationstart', S),
              a.removeEventListener('animationcancel', g),
              a.removeEventListener('animationend', g));
          }
        );
      } else p('ANIMATION_END');
    }, [a, p]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(h),
      ref: _.useCallback((m) => {
        (m && (s.current = getComputedStyle(m)), i(m));
      }, []),
    }
  );
}
function Ao(n) {
  return n?.animationName || 'none';
}
function mE(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = a && 'isReactWarning' in a && a.isReactWarning;
  return i
    ? n.ref
    : ((a = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = a && 'isReactWarning' in a && a.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var Jf = 0;
function pE() {
  _.useEffect(() => {
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', n[0] ?? Ny()),
      document.body.insertAdjacentElement('beforeend', n[1] ?? Ny()),
      Jf++,
      () => {
        (Jf === 1 &&
          document.querySelectorAll('[data-radix-focus-guard]').forEach((a) => a.remove()),
          Jf--);
      }
    );
  }, []);
}
function Ny() {
  const n = document.createElement('span');
  return (
    n.setAttribute('data-radix-focus-guard', ''),
    (n.tabIndex = 0),
    (n.style.outline = 'none'),
    (n.style.opacity = '0'),
    (n.style.position = 'fixed'),
    (n.style.pointerEvents = 'none'),
    n
  );
}
var Rn = function () {
  return (
    (Rn =
      Object.assign ||
      function (a) {
        for (var i, s = 1, o = arguments.length; s < o; s++) {
          i = arguments[s];
          for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
        }
        return a;
      }),
    Rn.apply(this, arguments)
  );
};
function Kg(n, a) {
  var i = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && a.indexOf(s) < 0 && (i[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, s = Object.getOwnPropertySymbols(n); o < s.length; o++)
      a.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[o]) &&
        (i[s[o]] = n[s[o]]);
  return i;
}
function vE(n, a, i) {
  if (i || arguments.length === 2)
    for (var s = 0, o = a.length, c; s < o; s++)
      (c || !(s in a)) && (c || (c = Array.prototype.slice.call(a, 0, s)), (c[s] = a[s]));
  return n.concat(c || Array.prototype.slice.call(a));
}
var Uo = 'right-scroll-bar-position',
  Bo = 'width-before-scroll-bar',
  yE = 'with-scroll-bars-hidden',
  gE = '--removed-body-scroll-bar-size';
function If(n, a) {
  return (typeof n == 'function' ? n(a) : n && (n.current = a), n);
}
function bE(n, a) {
  var i = _.useState(function () {
    return {
      value: n,
      callback: a,
      facade: {
        get current() {
          return i.value;
        },
        set current(s) {
          var o = i.value;
          o !== s && ((i.value = s), i.callback(s, o));
        },
      },
    };
  })[0];
  return ((i.callback = a), i.facade);
}
var SE = typeof window < 'u' ? _.useLayoutEffect : _.useEffect,
  ky = new WeakMap();
function xE(n, a) {
  var i = bE(null, function (s) {
    return n.forEach(function (o) {
      return If(o, s);
    });
  });
  return (
    SE(
      function () {
        var s = ky.get(i);
        if (s) {
          var o = new Set(s),
            c = new Set(n),
            d = i.current;
          (o.forEach(function (h) {
            c.has(h) || If(h, null);
          }),
            c.forEach(function (h) {
              o.has(h) || If(h, d);
            }));
        }
        ky.set(i, n);
      },
      [n]
    ),
    i
  );
}
function _E(n) {
  return n;
}
function wE(n, a) {
  a === void 0 && (a = _E);
  var i = [],
    s = !1,
    o = {
      read: function () {
        if (s)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return i.length ? i[i.length - 1] : n;
      },
      useMedium: function (c) {
        var d = a(c, s);
        return (
          i.push(d),
          function () {
            i = i.filter(function (h) {
              return h !== d;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (s = !0; i.length; ) {
          var d = i;
          ((i = []), d.forEach(c));
        }
        i = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return i;
          },
        };
      },
      assignMedium: function (c) {
        s = !0;
        var d = [];
        if (i.length) {
          var h = i;
          ((i = []), h.forEach(c), (d = i));
        }
        var p = function () {
            var v = d;
            ((d = []), v.forEach(c));
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        (m(),
          (i = {
            push: function (v) {
              (d.push(v), m());
            },
            filter: function (v) {
              return ((d = d.filter(v)), i);
            },
          }));
      },
    };
  return o;
}
function EE(n) {
  n === void 0 && (n = {});
  var a = wE(null);
  return ((a.options = Rn({ async: !0, ssr: !1 }, n)), a);
}
var $g = function (n) {
  var a = n.sideCar,
    i = Kg(n, ['sideCar']);
  if (!a) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var s = a.read();
  if (!s) throw new Error('Sidecar medium not found');
  return _.createElement(s, Rn({}, i));
};
$g.isSideCarExport = !0;
function RE(n, a) {
  return (n.useMedium(a), $g);
}
var Wg = EE(),
  ed = function () {},
  du = _.forwardRef(function (n, a) {
    var i = _.useRef(null),
      s = _.useState({ onScrollCapture: ed, onWheelCapture: ed, onTouchMoveCapture: ed }),
      o = s[0],
      c = s[1],
      d = n.forwardProps,
      h = n.children,
      p = n.className,
      m = n.removeScrollBar,
      v = n.enabled,
      g = n.shards,
      S = n.sideCar,
      w = n.noIsolation,
      R = n.inert,
      x = n.allowPinchZoom,
      D = n.as,
      O = D === void 0 ? 'div' : D,
      L = n.gapMode,
      H = Kg(n, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      Y = S,
      q = xE([i, a]),
      Z = Rn(Rn({}, H), o);
    return _.createElement(
      _.Fragment,
      null,
      v &&
        _.createElement(Y, {
          sideCar: Wg,
          removeScrollBar: m,
          shards: g,
          noIsolation: w,
          inert: R,
          setCallbacks: c,
          allowPinchZoom: !!x,
          lockRef: i,
          gapMode: L,
        }),
      d
        ? _.cloneElement(_.Children.only(h), Rn(Rn({}, Z), { ref: q }))
        : _.createElement(O, Rn({}, Z, { className: p, ref: q }), h)
    );
  });
du.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
du.classNames = { fullWidth: Bo, zeroRight: Uo };
var TE = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function CE() {
  if (!document) return null;
  var n = document.createElement('style');
  n.type = 'text/css';
  var a = TE();
  return (a && n.setAttribute('nonce', a), n);
}
function OE(n, a) {
  n.styleSheet ? (n.styleSheet.cssText = a) : n.appendChild(document.createTextNode(a));
}
function AE(n) {
  var a = document.head || document.getElementsByTagName('head')[0];
  a.appendChild(n);
}
var ME = function () {
    var n = 0,
      a = null;
    return {
      add: function (i) {
        (n == 0 && (a = CE()) && (OE(a, i), AE(a)), n++);
      },
      remove: function () {
        (n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), (a = null)));
      },
    };
  },
  DE = function () {
    var n = ME();
    return function (a, i) {
      _.useEffect(
        function () {
          return (
            n.add(a),
            function () {
              n.remove();
            }
          );
        },
        [a && i]
      );
    };
  },
  Jg = function () {
    var n = DE(),
      a = function (i) {
        var s = i.styles,
          o = i.dynamic;
        return (n(s, o), null);
      };
    return a;
  },
  NE = { left: 0, top: 0, right: 0, gap: 0 },
  td = function (n) {
    return parseInt(n || '', 10) || 0;
  },
  kE = function (n) {
    var a = window.getComputedStyle(document.body),
      i = a[n === 'padding' ? 'paddingLeft' : 'marginLeft'],
      s = a[n === 'padding' ? 'paddingTop' : 'marginTop'],
      o = a[n === 'padding' ? 'paddingRight' : 'marginRight'];
    return [td(i), td(s), td(o)];
  },
  zE = function (n) {
    if ((n === void 0 && (n = 'margin'), typeof window > 'u')) return NE;
    var a = kE(n),
      i = document.documentElement.clientWidth,
      s = window.innerWidth;
    return { left: a[0], top: a[1], right: a[2], gap: Math.max(0, s - i + a[2] - a[0]) };
  },
  jE = Jg(),
  bi = 'data-scroll-locked',
  LE = function (n, a, i, s) {
    var o = n.left,
      c = n.top,
      d = n.right,
      h = n.gap;
    return (
      i === void 0 && (i = 'margin'),
      `
  .`
        .concat(
          yE,
          ` {
   overflow: hidden `
        )
        .concat(
          s,
          `;
   padding-right: `
        )
        .concat(h, 'px ')
        .concat(
          s,
          `;
  }
  body[`
        )
        .concat(
          bi,
          `] {
    overflow: hidden `
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            a && 'position: relative '.concat(s, ';'),
            i === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(h, 'px ')
                .concat(
                  s,
                  `;
    `
                ),
            i === 'padding' && 'padding-right: '.concat(h, 'px ').concat(s, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          Uo,
          ` {
    right: `
        )
        .concat(h, 'px ')
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(
          Bo,
          ` {
    margin-right: `
        )
        .concat(h, 'px ')
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Uo, ' .')
        .concat(
          Uo,
          ` {
    right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Bo, ' .')
        .concat(
          Bo,
          ` {
    margin-right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  body[`
        )
        .concat(
          bi,
          `] {
    `
        )
        .concat(gE, ': ')
        .concat(
          h,
          `px;
  }
`
        )
    );
  },
  zy = function () {
    var n = parseInt(document.body.getAttribute(bi) || '0', 10);
    return isFinite(n) ? n : 0;
  },
  UE = function () {
    _.useEffect(function () {
      return (
        document.body.setAttribute(bi, (zy() + 1).toString()),
        function () {
          var n = zy() - 1;
          n <= 0 ? document.body.removeAttribute(bi) : document.body.setAttribute(bi, n.toString());
        }
      );
    }, []);
  },
  BE = function (n) {
    var a = n.noRelative,
      i = n.noImportant,
      s = n.gapMode,
      o = s === void 0 ? 'margin' : s;
    UE();
    var c = _.useMemo(
      function () {
        return zE(o);
      },
      [o]
    );
    return _.createElement(jE, { styles: LE(c, !a, o, i ? '' : '!important') });
  },
  xd = !1;
if (typeof window < 'u')
  try {
    var Mo = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((xd = !0), !0);
      },
    });
    (window.addEventListener('test', Mo, Mo), window.removeEventListener('test', Mo, Mo));
  } catch {
    xd = !1;
  }
var li = xd ? { passive: !1 } : !1,
  HE = function (n) {
    return n.tagName === 'TEXTAREA';
  },
  Ig = function (n, a) {
    if (!(n instanceof Element)) return !1;
    var i = window.getComputedStyle(n);
    return i[a] !== 'hidden' && !(i.overflowY === i.overflowX && !HE(n) && i[a] === 'visible');
  },
  PE = function (n) {
    return Ig(n, 'overflowY');
  },
  qE = function (n) {
    return Ig(n, 'overflowX');
  },
  jy = function (n, a) {
    var i = a.ownerDocument,
      s = a;
    do {
      typeof ShadowRoot < 'u' && s instanceof ShadowRoot && (s = s.host);
      var o = e0(n, s);
      if (o) {
        var c = t0(n, s),
          d = c[1],
          h = c[2];
        if (d > h) return !0;
      }
      s = s.parentNode;
    } while (s && s !== i.body);
    return !1;
  },
  VE = function (n) {
    var a = n.scrollTop,
      i = n.scrollHeight,
      s = n.clientHeight;
    return [a, i, s];
  },
  ZE = function (n) {
    var a = n.scrollLeft,
      i = n.scrollWidth,
      s = n.clientWidth;
    return [a, i, s];
  },
  e0 = function (n, a) {
    return n === 'v' ? PE(a) : qE(a);
  },
  t0 = function (n, a) {
    return n === 'v' ? VE(a) : ZE(a);
  },
  GE = function (n, a) {
    return n === 'h' && a === 'rtl' ? -1 : 1;
  },
  QE = function (n, a, i, s, o) {
    var c = GE(n, window.getComputedStyle(a).direction),
      d = c * s,
      h = i.target,
      p = a.contains(h),
      m = !1,
      v = d > 0,
      g = 0,
      S = 0;
    do {
      var w = t0(n, h),
        R = w[0],
        x = w[1],
        D = w[2],
        O = x - D - c * R;
      ((R || O) && e0(n, h) && ((g += O), (S += R)),
        h instanceof ShadowRoot ? (h = h.host) : (h = h.parentNode));
    } while ((!p && h !== document.body) || (p && (a.contains(h) || a === h)));
    return (((v && Math.abs(g) < 1) || (!v && Math.abs(S) < 1)) && (m = !0), m);
  },
  Do = function (n) {
    return 'changedTouches' in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  Ly = function (n) {
    return [n.deltaX, n.deltaY];
  },
  Uy = function (n) {
    return n && 'current' in n ? n.current : n;
  },
  YE = function (n, a) {
    return n[0] === a[0] && n[1] === a[1];
  },
  FE = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        n,
        ` {pointer-events: all;}
`
      );
  },
  XE = 0,
  oi = [];
function KE(n) {
  var a = _.useRef([]),
    i = _.useRef([0, 0]),
    s = _.useRef(),
    o = _.useState(XE++)[0],
    c = _.useState(Jg)[0],
    d = _.useRef(n);
  (_.useEffect(
    function () {
      d.current = n;
    },
    [n]
  ),
    _.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var x = vE([n.lockRef.current], (n.shards || []).map(Uy), !0).filter(Boolean);
          return (
            x.forEach(function (D) {
              return D.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(o)),
                x.forEach(function (D) {
                  return D.classList.remove('allow-interactivity-'.concat(o));
                }));
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards]
    ));
  var h = _.useCallback(function (x, D) {
      if (('touches' in x && x.touches.length === 2) || (x.type === 'wheel' && x.ctrlKey))
        return !d.current.allowPinchZoom;
      var O = Do(x),
        L = i.current,
        H = 'deltaX' in x ? x.deltaX : L[0] - O[0],
        Y = 'deltaY' in x ? x.deltaY : L[1] - O[1],
        q,
        Z = x.target,
        G = Math.abs(H) > Math.abs(Y) ? 'h' : 'v';
      if ('touches' in x && G === 'h' && Z.type === 'range') return !1;
      var M = jy(G, Z);
      if (!M) return !0;
      if ((M ? (q = G) : ((q = G === 'v' ? 'h' : 'v'), (M = jy(G, Z))), !M)) return !1;
      if ((!s.current && 'changedTouches' in x && (H || Y) && (s.current = q), !q)) return !0;
      var A = s.current || q;
      return QE(A, D, x, A === 'h' ? H : Y);
    }, []),
    p = _.useCallback(function (x) {
      var D = x;
      if (!(!oi.length || oi[oi.length - 1] !== c)) {
        var O = 'deltaY' in D ? Ly(D) : Do(D),
          L = a.current.filter(function (q) {
            return (
              q.name === D.type &&
              (q.target === D.target || D.target === q.shadowParent) &&
              YE(q.delta, O)
            );
          })[0];
        if (L && L.should) {
          D.cancelable && D.preventDefault();
          return;
        }
        if (!L) {
          var H = (d.current.shards || [])
              .map(Uy)
              .filter(Boolean)
              .filter(function (q) {
                return q.contains(D.target);
              }),
            Y = H.length > 0 ? h(D, H[0]) : !d.current.noIsolation;
          Y && D.cancelable && D.preventDefault();
        }
      }
    }, []),
    m = _.useCallback(function (x, D, O, L) {
      var H = { name: x, delta: D, target: O, should: L, shadowParent: $E(O) };
      (a.current.push(H),
        setTimeout(function () {
          a.current = a.current.filter(function (Y) {
            return Y !== H;
          });
        }, 1));
    }, []),
    v = _.useCallback(function (x) {
      ((i.current = Do(x)), (s.current = void 0));
    }, []),
    g = _.useCallback(function (x) {
      m(x.type, Ly(x), x.target, h(x, n.lockRef.current));
    }, []),
    S = _.useCallback(function (x) {
      m(x.type, Do(x), x.target, h(x, n.lockRef.current));
    }, []);
  _.useEffect(function () {
    return (
      oi.push(c),
      n.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: S }),
      document.addEventListener('wheel', p, li),
      document.addEventListener('touchmove', p, li),
      document.addEventListener('touchstart', v, li),
      function () {
        ((oi = oi.filter(function (x) {
          return x !== c;
        })),
          document.removeEventListener('wheel', p, li),
          document.removeEventListener('touchmove', p, li),
          document.removeEventListener('touchstart', v, li));
      }
    );
  }, []);
  var w = n.removeScrollBar,
    R = n.inert;
  return _.createElement(
    _.Fragment,
    null,
    R ? _.createElement(c, { styles: FE(o) }) : null,
    w ? _.createElement(BE, { gapMode: n.gapMode }) : null
  );
}
function $E(n) {
  for (var a = null; n !== null; )
    (n instanceof ShadowRoot && ((a = n.host), (n = n.host)), (n = n.parentNode));
  return a;
}
const WE = RE(Wg, KE);
var n0 = _.forwardRef(function (n, a) {
  return _.createElement(du, Rn({}, n, { ref: a, sideCar: WE }));
});
n0.classNames = du.classNames;
var JE = function (n) {
    if (typeof document > 'u') return null;
    var a = Array.isArray(n) ? n[0] : n;
    return a.ownerDocument.body;
  },
  ui = new WeakMap(),
  No = new WeakMap(),
  ko = {},
  nd = 0,
  a0 = function (n) {
    return n && (n.host || a0(n.parentNode));
  },
  IE = function (n, a) {
    return a
      .map(function (i) {
        if (n.contains(i)) return i;
        var s = a0(i);
        return s && n.contains(s)
          ? s
          : (console.error('aria-hidden', i, 'in not contained inside', n, '. Doing nothing'),
            null);
      })
      .filter(function (i) {
        return !!i;
      });
  },
  eR = function (n, a, i, s) {
    var o = IE(a, Array.isArray(n) ? n : [n]);
    ko[i] || (ko[i] = new WeakMap());
    var c = ko[i],
      d = [],
      h = new Set(),
      p = new Set(o),
      m = function (g) {
        !g || h.has(g) || (h.add(g), m(g.parentNode));
      };
    o.forEach(m);
    var v = function (g) {
      !g ||
        p.has(g) ||
        Array.prototype.forEach.call(g.children, function (S) {
          if (h.has(S)) v(S);
          else
            try {
              var w = S.getAttribute(s),
                R = w !== null && w !== 'false',
                x = (ui.get(S) || 0) + 1,
                D = (c.get(S) || 0) + 1;
              (ui.set(S, x),
                c.set(S, D),
                d.push(S),
                x === 1 && R && No.set(S, !0),
                D === 1 && S.setAttribute(i, 'true'),
                R || S.setAttribute(s, 'true'));
            } catch (O) {
              console.error('aria-hidden: cannot operate on ', S, O);
            }
        });
    };
    return (
      v(a),
      h.clear(),
      nd++,
      function () {
        (d.forEach(function (g) {
          var S = ui.get(g) - 1,
            w = c.get(g) - 1;
          (ui.set(g, S),
            c.set(g, w),
            S || (No.has(g) || g.removeAttribute(s), No.delete(g)),
            w || g.removeAttribute(i));
        }),
          nd--,
          nd || ((ui = new WeakMap()), (ui = new WeakMap()), (No = new WeakMap()), (ko = {})));
      }
    );
  },
  tR = function (n, a, i) {
    i === void 0 && (i = 'data-aria-hidden');
    var s = Array.from(Array.isArray(n) ? n : [n]),
      o = JE(n);
    return o
      ? (s.push.apply(s, Array.from(o.querySelectorAll('[aria-live]'))), eR(s, o, i, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  Gd = 'Dialog',
  [r0] = Zg(Gd),
  [nR, bn] = r0(Gd),
  i0 = (n) => {
    const {
        __scopeDialog: a,
        children: i,
        open: s,
        defaultOpen: o,
        onOpenChange: c,
        modal: d = !0,
      } = n,
      h = _.useRef(null),
      p = _.useRef(null),
      [m = !1, v] = Xw({ prop: s, defaultProp: o, onChange: c });
    return C.jsx(nR, {
      scope: a,
      triggerRef: h,
      contentRef: p,
      contentId: Kf(),
      titleId: Kf(),
      descriptionId: Kf(),
      open: m,
      onOpenChange: v,
      onOpenToggle: _.useCallback(() => v((g) => !g), [v]),
      modal: d,
      children: i,
    });
  };
i0.displayName = Gd;
var s0 = 'DialogTrigger',
  aR = _.forwardRef((n, a) => {
    const { __scopeDialog: i, ...s } = n,
      o = bn(s0, i),
      c = gn(a, o.triggerRef);
    return C.jsx(Nt.button, {
      type: 'button',
      'aria-haspopup': 'dialog',
      'aria-expanded': o.open,
      'aria-controls': o.contentId,
      'data-state': Fd(o.open),
      ...s,
      ref: c,
      onClick: Dt(n.onClick, o.onOpenToggle),
    });
  });
aR.displayName = s0;
var Qd = 'DialogPortal',
  [rR, l0] = r0(Qd, { forceMount: void 0 }),
  o0 = (n) => {
    const { __scopeDialog: a, forceMount: i, children: s, container: o } = n,
      c = bn(Qd, a);
    return C.jsx(rR, {
      scope: a,
      forceMount: i,
      children: _.Children.map(s, (d) =>
        C.jsx(sl, {
          present: i || c.open,
          children: C.jsx(Xg, { asChild: !0, container: o, children: d }),
        })
      ),
    });
  };
o0.displayName = Qd;
var Ko = 'DialogOverlay',
  u0 = _.forwardRef((n, a) => {
    const i = l0(Ko, n.__scopeDialog),
      { forceMount: s = i.forceMount, ...o } = n,
      c = bn(Ko, n.__scopeDialog);
    return c.modal
      ? C.jsx(sl, { present: s || c.open, children: C.jsx(iR, { ...o, ref: a }) })
      : null;
  });
u0.displayName = Ko;
var iR = _.forwardRef((n, a) => {
    const { __scopeDialog: i, ...s } = n,
      o = bn(Ko, i);
    return C.jsx(n0, {
      as: il,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: C.jsx(Nt.div, {
        'data-state': Fd(o.open),
        ...s,
        ref: a,
        style: { pointerEvents: 'auto', ...s.style },
      }),
    });
  }),
  Sr = 'DialogContent',
  c0 = _.forwardRef((n, a) => {
    const i = l0(Sr, n.__scopeDialog),
      { forceMount: s = i.forceMount, ...o } = n,
      c = bn(Sr, n.__scopeDialog);
    return C.jsx(sl, {
      present: s || c.open,
      children: c.modal ? C.jsx(sR, { ...o, ref: a }) : C.jsx(lR, { ...o, ref: a }),
    });
  });
c0.displayName = Sr;
var sR = _.forwardRef((n, a) => {
    const i = bn(Sr, n.__scopeDialog),
      s = _.useRef(null),
      o = gn(a, i.contentRef, s);
    return (
      _.useEffect(() => {
        const c = s.current;
        if (c) return tR(c);
      }, []),
      C.jsx(f0, {
        ...n,
        ref: o,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Dt(n.onCloseAutoFocus, (c) => {
          (c.preventDefault(), i.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Dt(n.onPointerDownOutside, (c) => {
          const d = c.detail.originalEvent,
            h = d.button === 0 && d.ctrlKey === !0;
          (d.button === 2 || h) && c.preventDefault();
        }),
        onFocusOutside: Dt(n.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  lR = _.forwardRef((n, a) => {
    const i = bn(Sr, n.__scopeDialog),
      s = _.useRef(!1),
      o = _.useRef(!1);
    return C.jsx(f0, {
      ...n,
      ref: a,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        (n.onCloseAutoFocus?.(c),
          c.defaultPrevented || (s.current || i.triggerRef.current?.focus(), c.preventDefault()),
          (s.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (c) => {
        (n.onInteractOutside?.(c),
          c.defaultPrevented ||
            ((s.current = !0), c.detail.originalEvent.type === 'pointerdown' && (o.current = !0)));
        const d = c.target;
        (i.triggerRef.current?.contains(d) && c.preventDefault(),
          c.detail.originalEvent.type === 'focusin' && o.current && c.preventDefault());
      },
    });
  }),
  f0 = _.forwardRef((n, a) => {
    const { __scopeDialog: i, trapFocus: s, onOpenAutoFocus: o, onCloseAutoFocus: c, ...d } = n,
      h = bn(Sr, i),
      p = _.useRef(null),
      m = gn(a, p);
    return (
      pE(),
      C.jsxs(C.Fragment, {
        children: [
          C.jsx(Yg, {
            asChild: !0,
            loop: !0,
            trapped: s,
            onMountAutoFocus: o,
            onUnmountAutoFocus: c,
            children: C.jsx(Zd, {
              role: 'dialog',
              id: h.contentId,
              'aria-describedby': h.descriptionId,
              'aria-labelledby': h.titleId,
              'data-state': Fd(h.open),
              ...d,
              ref: m,
              onDismiss: () => h.onOpenChange(!1),
            }),
          }),
          C.jsxs(C.Fragment, {
            children: [
              C.jsx(oR, { titleId: h.titleId }),
              C.jsx(cR, { contentRef: p, descriptionId: h.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Yd = 'DialogTitle',
  d0 = _.forwardRef((n, a) => {
    const { __scopeDialog: i, ...s } = n,
      o = bn(Yd, i);
    return C.jsx(Nt.h2, { id: o.titleId, ...s, ref: a });
  });
d0.displayName = Yd;
var h0 = 'DialogDescription',
  m0 = _.forwardRef((n, a) => {
    const { __scopeDialog: i, ...s } = n,
      o = bn(h0, i);
    return C.jsx(Nt.p, { id: o.descriptionId, ...s, ref: a });
  });
m0.displayName = h0;
var p0 = 'DialogClose',
  v0 = _.forwardRef((n, a) => {
    const { __scopeDialog: i, ...s } = n,
      o = bn(p0, i);
    return C.jsx(Nt.button, {
      type: 'button',
      ...s,
      ref: a,
      onClick: Dt(n.onClick, () => o.onOpenChange(!1)),
    });
  });
v0.displayName = p0;
function Fd(n) {
  return n ? 'open' : 'closed';
}
var y0 = 'DialogTitleWarning',
  [FO, g0] = Gw(y0, { contentName: Sr, titleName: Yd, docsSlug: 'dialog' }),
  oR = ({ titleId: n }) => {
    const a = g0(y0),
      i = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
    return (
      _.useEffect(() => {
        n && (document.getElementById(n) || console.error(i));
      }, [i, n]),
      null
    );
  },
  uR = 'DialogDescriptionWarning',
  cR = ({ contentRef: n, descriptionId: a }) => {
    const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${g0(uR).contentName}}.`;
    return (
      _.useEffect(() => {
        const o = n.current?.getAttribute('aria-describedby');
        a && o && (document.getElementById(a) || console.warn(s));
      }, [s, n, a]),
      null
    );
  },
  fR = i0,
  dR = o0,
  hR = u0,
  mR = c0,
  pR = d0,
  vR = m0,
  yR = v0;
function gR({ ...n }) {
  return C.jsx(fR, { 'data-slot': 'sheet', ...n });
}
function bR({ ...n }) {
  return C.jsx(dR, { 'data-slot': 'sheet-portal', ...n });
}
function SR({ className: n, ...a }) {
  return C.jsx(hR, {
    'data-slot': 'sheet-overlay',
    className: Ve(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
      n
    ),
    ...a,
  });
}
function xR({ className: n, children: a, side: i = 'right', ...s }) {
  return C.jsxs(bR, {
    children: [
      C.jsx(SR, {}),
      C.jsxs(mR, {
        'data-slot': 'sheet-content',
        className: Ve(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          i === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          i === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          i === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          i === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          n
        ),
        ...s,
        children: [
          a,
          C.jsxs(yR, {
            className:
              'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none',
            children: [
              C.jsx(J1, { className: 'size-4' }),
              C.jsx('span', { className: 'sr-only', children: 'Close' }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _R({ className: n, ...a }) {
  return C.jsx('div', {
    'data-slot': 'sheet-header',
    className: Ve('flex flex-col gap-1.5 p-4', n),
    ...a,
  });
}
function wR({ className: n, ...a }) {
  return C.jsx(pR, {
    'data-slot': 'sheet-title',
    className: Ve('text-foreground font-semibold', n),
    ...a,
  });
}
function ER({ className: n, ...a }) {
  return C.jsx(vR, {
    'data-slot': 'sheet-description',
    className: Ve('text-muted-foreground text-sm', n),
    ...a,
  });
}
const RR = ['top', 'right', 'bottom', 'left'],
  ja = Math.min,
  qt = Math.max,
  $o = Math.round,
  zo = Math.floor,
  Tn = (n) => ({ x: n, y: n }),
  TR = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  CR = { start: 'end', end: 'start' };
function _d(n, a, i) {
  return qt(n, ja(a, i));
}
function na(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function aa(n) {
  return n.split('-')[0];
}
function Ni(n) {
  return n.split('-')[1];
}
function Xd(n) {
  return n === 'x' ? 'y' : 'x';
}
function Kd(n) {
  return n === 'y' ? 'height' : 'width';
}
function La(n) {
  return ['top', 'bottom'].includes(aa(n)) ? 'y' : 'x';
}
function $d(n) {
  return Xd(La(n));
}
function OR(n, a, i) {
  i === void 0 && (i = !1);
  const s = Ni(n),
    o = $d(n),
    c = Kd(o);
  let d =
    o === 'x' ? (s === (i ? 'end' : 'start') ? 'right' : 'left') : s === 'start' ? 'bottom' : 'top';
  return (a.reference[c] > a.floating[c] && (d = Wo(d)), [d, Wo(d)]);
}
function AR(n) {
  const a = Wo(n);
  return [wd(n), a, wd(a)];
}
function wd(n) {
  return n.replace(/start|end/g, (a) => CR[a]);
}
function MR(n, a, i) {
  const s = ['left', 'right'],
    o = ['right', 'left'],
    c = ['top', 'bottom'],
    d = ['bottom', 'top'];
  switch (n) {
    case 'top':
    case 'bottom':
      return i ? (a ? o : s) : a ? s : o;
    case 'left':
    case 'right':
      return a ? c : d;
    default:
      return [];
  }
}
function DR(n, a, i, s) {
  const o = Ni(n);
  let c = MR(aa(n), i === 'start', s);
  return (o && ((c = c.map((d) => d + '-' + o)), a && (c = c.concat(c.map(wd)))), c);
}
function Wo(n) {
  return n.replace(/left|right|bottom|top/g, (a) => TR[a]);
}
function NR(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function b0(n) {
  return typeof n != 'number' ? NR(n) : { top: n, right: n, bottom: n, left: n };
}
function Jo(n) {
  const { x: a, y: i, width: s, height: o } = n;
  return { width: s, height: o, top: i, left: a, right: a + s, bottom: i + o, x: a, y: i };
}
function By(n, a, i) {
  let { reference: s, floating: o } = n;
  const c = La(a),
    d = $d(a),
    h = Kd(d),
    p = aa(a),
    m = c === 'y',
    v = s.x + s.width / 2 - o.width / 2,
    g = s.y + s.height / 2 - o.height / 2,
    S = s[h] / 2 - o[h] / 2;
  let w;
  switch (p) {
    case 'top':
      w = { x: v, y: s.y - o.height };
      break;
    case 'bottom':
      w = { x: v, y: s.y + s.height };
      break;
    case 'right':
      w = { x: s.x + s.width, y: g };
      break;
    case 'left':
      w = { x: s.x - o.width, y: g };
      break;
    default:
      w = { x: s.x, y: s.y };
  }
  switch (Ni(a)) {
    case 'start':
      w[d] -= S * (i && m ? -1 : 1);
      break;
    case 'end':
      w[d] += S * (i && m ? -1 : 1);
      break;
  }
  return w;
}
const kR = async (n, a, i) => {
  const { placement: s = 'bottom', strategy: o = 'absolute', middleware: c = [], platform: d } = i,
    h = c.filter(Boolean),
    p = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let m = await d.getElementRects({ reference: n, floating: a, strategy: o }),
    { x: v, y: g } = By(m, s, p),
    S = s,
    w = {},
    R = 0;
  for (let x = 0; x < h.length; x++) {
    const { name: D, fn: O } = h[x],
      {
        x: L,
        y: H,
        data: Y,
        reset: q,
      } = await O({
        x: v,
        y: g,
        initialPlacement: s,
        placement: S,
        strategy: o,
        middlewareData: w,
        rects: m,
        platform: d,
        elements: { reference: n, floating: a },
      });
    ((v = L ?? v),
      (g = H ?? g),
      (w = { ...w, [D]: { ...w[D], ...Y } }),
      q &&
        R <= 50 &&
        (R++,
        typeof q == 'object' &&
          (q.placement && (S = q.placement),
          q.rects &&
            (m =
              q.rects === !0
                ? await d.getElementRects({ reference: n, floating: a, strategy: o })
                : q.rects),
          ({ x: v, y: g } = By(m, S, p))),
        (x = -1)));
  }
  return { x: v, y: g, placement: S, strategy: o, middlewareData: w };
};
async function Zs(n, a) {
  var i;
  a === void 0 && (a = {});
  const { x: s, y: o, platform: c, rects: d, elements: h, strategy: p } = n,
    {
      boundary: m = 'clippingAncestors',
      rootBoundary: v = 'viewport',
      elementContext: g = 'floating',
      altBoundary: S = !1,
      padding: w = 0,
    } = na(a, n),
    R = b0(w),
    D = h[S ? (g === 'floating' ? 'reference' : 'floating') : g],
    O = Jo(
      await c.getClippingRect({
        element:
          (i = await (c.isElement == null ? void 0 : c.isElement(D))) == null || i
            ? D
            : D.contextElement ||
              (await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(h.floating))),
        boundary: m,
        rootBoundary: v,
        strategy: p,
      })
    ),
    L =
      g === 'floating'
        ? { x: s, y: o, width: d.floating.width, height: d.floating.height }
        : d.reference,
    H = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h.floating)),
    Y = (await (c.isElement == null ? void 0 : c.isElement(H)))
      ? (await (c.getScale == null ? void 0 : c.getScale(H))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    q = Jo(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: L,
            offsetParent: H,
            strategy: p,
          })
        : L
    );
  return {
    top: (O.top - q.top + R.top) / Y.y,
    bottom: (q.bottom - O.bottom + R.bottom) / Y.y,
    left: (O.left - q.left + R.left) / Y.x,
    right: (q.right - O.right + R.right) / Y.x,
  };
}
const zR = (n) => ({
    name: 'arrow',
    options: n,
    async fn(a) {
      const { x: i, y: s, placement: o, rects: c, platform: d, elements: h, middlewareData: p } = a,
        { element: m, padding: v = 0 } = na(n, a) || {};
      if (m == null) return {};
      const g = b0(v),
        S = { x: i, y: s },
        w = $d(o),
        R = Kd(w),
        x = await d.getDimensions(m),
        D = w === 'y',
        O = D ? 'top' : 'left',
        L = D ? 'bottom' : 'right',
        H = D ? 'clientHeight' : 'clientWidth',
        Y = c.reference[R] + c.reference[w] - S[w] - c.floating[R],
        q = S[w] - c.reference[w],
        Z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
      let G = Z ? Z[H] : 0;
      (!G || !(await (d.isElement == null ? void 0 : d.isElement(Z)))) &&
        (G = h.floating[H] || c.floating[R]);
      const M = Y / 2 - q / 2,
        A = G / 2 - x[R] / 2 - 1,
        X = ja(g[O], A),
        ae = ja(g[L], A),
        te = X,
        ne = G - x[R] - ae,
        ce = G / 2 - x[R] / 2 + M,
        ie = _d(te, ce, ne),
        P =
          !p.arrow &&
          Ni(o) != null &&
          ce !== ie &&
          c.reference[R] / 2 - (ce < te ? X : ae) - x[R] / 2 < 0,
        J = P ? (ce < te ? ce - te : ce - ne) : 0;
      return {
        [w]: S[w] + J,
        data: { [w]: ie, centerOffset: ce - ie - J, ...(P && { alignmentOffset: J }) },
        reset: P,
      };
    },
  }),
  jR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'flip',
        options: n,
        async fn(a) {
          var i, s;
          const {
              placement: o,
              middlewareData: c,
              rects: d,
              initialPlacement: h,
              platform: p,
              elements: m,
            } = a,
            {
              mainAxis: v = !0,
              crossAxis: g = !0,
              fallbackPlacements: S,
              fallbackStrategy: w = 'bestFit',
              fallbackAxisSideDirection: R = 'none',
              flipAlignment: x = !0,
              ...D
            } = na(n, a);
          if ((i = c.arrow) != null && i.alignmentOffset) return {};
          const O = aa(o),
            L = La(h),
            H = aa(h) === h,
            Y = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            q = S || (H || !x ? [Wo(h)] : AR(h)),
            Z = R !== 'none';
          !S && Z && q.push(...DR(h, x, R, Y));
          const G = [h, ...q],
            M = await Zs(a, D),
            A = [];
          let X = ((s = c.flip) == null ? void 0 : s.overflows) || [];
          if ((v && A.push(M[O]), g)) {
            const ce = OR(o, d, Y);
            A.push(M[ce[0]], M[ce[1]]);
          }
          if (((X = [...X, { placement: o, overflows: A }]), !A.every((ce) => ce <= 0))) {
            var ae, te;
            const ce = (((ae = c.flip) == null ? void 0 : ae.index) || 0) + 1,
              ie = G[ce];
            if (ie) return { data: { index: ce, overflows: X }, reset: { placement: ie } };
            let P =
              (te = X.filter((J) => J.overflows[0] <= 0).sort(
                (J, B) => J.overflows[1] - B.overflows[1]
              )[0]) == null
                ? void 0
                : te.placement;
            if (!P)
              switch (w) {
                case 'bestFit': {
                  var ne;
                  const J =
                    (ne = X.filter((B) => {
                      if (Z) {
                        const pe = La(B.placement);
                        return pe === L || pe === 'y';
                      }
                      return !0;
                    })
                      .map((B) => [
                        B.placement,
                        B.overflows.filter((pe) => pe > 0).reduce((pe, T) => pe + T, 0),
                      ])
                      .sort((B, pe) => B[1] - pe[1])[0]) == null
                      ? void 0
                      : ne[0];
                  J && (P = J);
                  break;
                }
                case 'initialPlacement':
                  P = h;
                  break;
              }
            if (o !== P) return { reset: { placement: P } };
          }
          return {};
        },
      }
    );
  };
function Hy(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width,
  };
}
function Py(n) {
  return RR.some((a) => n[a] >= 0);
}
const LR = function (n) {
  return (
    n === void 0 && (n = {}),
    {
      name: 'hide',
      options: n,
      async fn(a) {
        const { rects: i } = a,
          { strategy: s = 'referenceHidden', ...o } = na(n, a);
        switch (s) {
          case 'referenceHidden': {
            const c = await Zs(a, { ...o, elementContext: 'reference' }),
              d = Hy(c, i.reference);
            return { data: { referenceHiddenOffsets: d, referenceHidden: Py(d) } };
          }
          case 'escaped': {
            const c = await Zs(a, { ...o, altBoundary: !0 }),
              d = Hy(c, i.floating);
            return { data: { escapedOffsets: d, escaped: Py(d) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function UR(n, a) {
  const { placement: i, platform: s, elements: o } = n,
    c = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)),
    d = aa(i),
    h = Ni(i),
    p = La(i) === 'y',
    m = ['left', 'top'].includes(d) ? -1 : 1,
    v = c && p ? -1 : 1,
    g = na(a, n);
  let {
    mainAxis: S,
    crossAxis: w,
    alignmentAxis: R,
  } = typeof g == 'number'
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: g.mainAxis || 0, crossAxis: g.crossAxis || 0, alignmentAxis: g.alignmentAxis };
  return (
    h && typeof R == 'number' && (w = h === 'end' ? R * -1 : R),
    p ? { x: w * v, y: S * m } : { x: S * m, y: w * v }
  );
}
const BR = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: 'offset',
        options: n,
        async fn(a) {
          var i, s;
          const { x: o, y: c, placement: d, middlewareData: h } = a,
            p = await UR(a, n);
          return d === ((i = h.offset) == null ? void 0 : i.placement) &&
            (s = h.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: o + p.x, y: c + p.y, data: { ...p, placement: d } };
        },
      }
    );
  },
  HR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'shift',
        options: n,
        async fn(a) {
          const { x: i, y: s, placement: o } = a,
            {
              mainAxis: c = !0,
              crossAxis: d = !1,
              limiter: h = {
                fn: (D) => {
                  let { x: O, y: L } = D;
                  return { x: O, y: L };
                },
              },
              ...p
            } = na(n, a),
            m = { x: i, y: s },
            v = await Zs(a, p),
            g = La(aa(o)),
            S = Xd(g);
          let w = m[S],
            R = m[g];
          if (c) {
            const D = S === 'y' ? 'top' : 'left',
              O = S === 'y' ? 'bottom' : 'right',
              L = w + v[D],
              H = w - v[O];
            w = _d(L, w, H);
          }
          if (d) {
            const D = g === 'y' ? 'top' : 'left',
              O = g === 'y' ? 'bottom' : 'right',
              L = R + v[D],
              H = R - v[O];
            R = _d(L, R, H);
          }
          const x = h.fn({ ...a, [S]: w, [g]: R });
          return { ...x, data: { x: x.x - i, y: x.y - s, enabled: { [S]: c, [g]: d } } };
        },
      }
    );
  },
  PR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(a) {
          const { x: i, y: s, placement: o, rects: c, middlewareData: d } = a,
            { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = na(n, a),
            v = { x: i, y: s },
            g = La(o),
            S = Xd(g);
          let w = v[S],
            R = v[g];
          const x = na(h, a),
            D =
              typeof x == 'number'
                ? { mainAxis: x, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...x };
          if (p) {
            const H = S === 'y' ? 'height' : 'width',
              Y = c.reference[S] - c.floating[H] + D.mainAxis,
              q = c.reference[S] + c.reference[H] - D.mainAxis;
            w < Y ? (w = Y) : w > q && (w = q);
          }
          if (m) {
            var O, L;
            const H = S === 'y' ? 'width' : 'height',
              Y = ['top', 'left'].includes(aa(o)),
              q =
                c.reference[g] -
                c.floating[H] +
                ((Y && ((O = d.offset) == null ? void 0 : O[g])) || 0) +
                (Y ? 0 : D.crossAxis),
              Z =
                c.reference[g] +
                c.reference[H] +
                (Y ? 0 : ((L = d.offset) == null ? void 0 : L[g]) || 0) -
                (Y ? D.crossAxis : 0);
            R < q ? (R = q) : R > Z && (R = Z);
          }
          return { [S]: w, [g]: R };
        },
      }
    );
  },
  qR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'size',
        options: n,
        async fn(a) {
          var i, s;
          const { placement: o, rects: c, platform: d, elements: h } = a,
            { apply: p = () => {}, ...m } = na(n, a),
            v = await Zs(a, m),
            g = aa(o),
            S = Ni(o),
            w = La(o) === 'y',
            { width: R, height: x } = c.floating;
          let D, O;
          g === 'top' || g === 'bottom'
            ? ((D = g),
              (O =
                S === ((await (d.isRTL == null ? void 0 : d.isRTL(h.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((O = g), (D = S === 'end' ? 'top' : 'bottom'));
          const L = x - v.top - v.bottom,
            H = R - v.left - v.right,
            Y = ja(x - v[D], L),
            q = ja(R - v[O], H),
            Z = !a.middlewareData.shift;
          let G = Y,
            M = q;
          if (
            ((i = a.middlewareData.shift) != null && i.enabled.x && (M = H),
            (s = a.middlewareData.shift) != null && s.enabled.y && (G = L),
            Z && !S)
          ) {
            const X = qt(v.left, 0),
              ae = qt(v.right, 0),
              te = qt(v.top, 0),
              ne = qt(v.bottom, 0);
            w
              ? (M = R - 2 * (X !== 0 || ae !== 0 ? X + ae : qt(v.left, v.right)))
              : (G = x - 2 * (te !== 0 || ne !== 0 ? te + ne : qt(v.top, v.bottom)));
          }
          await p({ ...a, availableWidth: M, availableHeight: G });
          const A = await d.getDimensions(h.floating);
          return R !== A.width || x !== A.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function hu() {
  return typeof window < 'u';
}
function ki(n) {
  return S0(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Vt(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Nn(n) {
  var a;
  return (a = (S0(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : a.documentElement;
}
function S0(n) {
  return hu() ? n instanceof Node || n instanceof Vt(n).Node : !1;
}
function pn(n) {
  return hu() ? n instanceof Element || n instanceof Vt(n).Element : !1;
}
function On(n) {
  return hu() ? n instanceof HTMLElement || n instanceof Vt(n).HTMLElement : !1;
}
function qy(n) {
  return !hu() || typeof ShadowRoot > 'u'
    ? !1
    : n instanceof ShadowRoot || n instanceof Vt(n).ShadowRoot;
}
function ll(n) {
  const { overflow: a, overflowX: i, overflowY: s, display: o } = vn(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + s + i) && !['inline', 'contents'].includes(o);
}
function VR(n) {
  return ['table', 'td', 'th'].includes(ki(n));
}
function mu(n) {
  return [':popover-open', ':modal'].some((a) => {
    try {
      return n.matches(a);
    } catch {
      return !1;
    }
  });
}
function Wd(n) {
  const a = Jd(),
    i = pn(n) ? vn(n) : n;
  return (
    i.transform !== 'none' ||
    i.perspective !== 'none' ||
    (i.containerType ? i.containerType !== 'normal' : !1) ||
    (!a && (i.backdropFilter ? i.backdropFilter !== 'none' : !1)) ||
    (!a && (i.filter ? i.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((s) => (i.willChange || '').includes(s)) ||
    ['paint', 'layout', 'strict', 'content'].some((s) => (i.contain || '').includes(s))
  );
}
function ZR(n) {
  let a = Ua(n);
  for (; On(a) && !Ei(a); ) {
    if (Wd(a)) return a;
    if (mu(a)) return null;
    a = Ua(a);
  }
  return null;
}
function Jd() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Ei(n) {
  return ['html', 'body', '#document'].includes(ki(n));
}
function vn(n) {
  return Vt(n).getComputedStyle(n);
}
function pu(n) {
  return pn(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Ua(n) {
  if (ki(n) === 'html') return n;
  const a = n.assignedSlot || n.parentNode || (qy(n) && n.host) || Nn(n);
  return qy(a) ? a.host : a;
}
function x0(n) {
  const a = Ua(n);
  return Ei(a) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : On(a) && ll(a) ? a : x0(a);
}
function Gs(n, a, i) {
  var s;
  (a === void 0 && (a = []), i === void 0 && (i = !0));
  const o = x0(n),
    c = o === ((s = n.ownerDocument) == null ? void 0 : s.body),
    d = Vt(o);
  if (c) {
    const h = Ed(d);
    return a.concat(d, d.visualViewport || [], ll(o) ? o : [], h && i ? Gs(h) : []);
  }
  return a.concat(o, Gs(o, [], i));
}
function Ed(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function _0(n) {
  const a = vn(n);
  let i = parseFloat(a.width) || 0,
    s = parseFloat(a.height) || 0;
  const o = On(n),
    c = o ? n.offsetWidth : i,
    d = o ? n.offsetHeight : s,
    h = $o(i) !== c || $o(s) !== d;
  return (h && ((i = c), (s = d)), { width: i, height: s, $: h });
}
function Id(n) {
  return pn(n) ? n : n.contextElement;
}
function Si(n) {
  const a = Id(n);
  if (!On(a)) return Tn(1);
  const i = a.getBoundingClientRect(),
    { width: s, height: o, $: c } = _0(a);
  let d = (c ? $o(i.width) : i.width) / s,
    h = (c ? $o(i.height) : i.height) / o;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const GR = Tn(0);
function w0(n) {
  const a = Vt(n);
  return !Jd() || !a.visualViewport
    ? GR
    : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function QR(n, a, i) {
  return (a === void 0 && (a = !1), !i || (a && i !== Vt(n)) ? !1 : a);
}
function xr(n, a, i, s) {
  (a === void 0 && (a = !1), i === void 0 && (i = !1));
  const o = n.getBoundingClientRect(),
    c = Id(n);
  let d = Tn(1);
  a && (s ? pn(s) && (d = Si(s)) : (d = Si(n)));
  const h = QR(c, i, s) ? w0(c) : Tn(0);
  let p = (o.left + h.x) / d.x,
    m = (o.top + h.y) / d.y,
    v = o.width / d.x,
    g = o.height / d.y;
  if (c) {
    const S = Vt(c),
      w = s && pn(s) ? Vt(s) : s;
    let R = S,
      x = Ed(R);
    for (; x && s && w !== R; ) {
      const D = Si(x),
        O = x.getBoundingClientRect(),
        L = vn(x),
        H = O.left + (x.clientLeft + parseFloat(L.paddingLeft)) * D.x,
        Y = O.top + (x.clientTop + parseFloat(L.paddingTop)) * D.y;
      ((p *= D.x),
        (m *= D.y),
        (v *= D.x),
        (g *= D.y),
        (p += H),
        (m += Y),
        (R = Vt(x)),
        (x = Ed(R)));
    }
  }
  return Jo({ width: v, height: g, x: p, y: m });
}
function eh(n, a) {
  const i = pu(n).scrollLeft;
  return a ? a.left + i : xr(Nn(n)).left + i;
}
function E0(n, a, i) {
  i === void 0 && (i = !1);
  const s = n.getBoundingClientRect(),
    o = s.left + a.scrollLeft - (i ? 0 : eh(n, s)),
    c = s.top + a.scrollTop;
  return { x: o, y: c };
}
function YR(n) {
  let { elements: a, rect: i, offsetParent: s, strategy: o } = n;
  const c = o === 'fixed',
    d = Nn(s),
    h = a ? mu(a.floating) : !1;
  if (s === d || (h && c)) return i;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = Tn(1);
  const v = Tn(0),
    g = On(s);
  if ((g || (!g && !c)) && ((ki(s) !== 'body' || ll(d)) && (p = pu(s)), On(s))) {
    const w = xr(s);
    ((m = Si(s)), (v.x = w.x + s.clientLeft), (v.y = w.y + s.clientTop));
  }
  const S = d && !g && !c ? E0(d, p, !0) : Tn(0);
  return {
    width: i.width * m.x,
    height: i.height * m.y,
    x: i.x * m.x - p.scrollLeft * m.x + v.x + S.x,
    y: i.y * m.y - p.scrollTop * m.y + v.y + S.y,
  };
}
function FR(n) {
  return Array.from(n.getClientRects());
}
function XR(n) {
  const a = Nn(n),
    i = pu(n),
    s = n.ownerDocument.body,
    o = qt(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth),
    c = qt(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
  let d = -i.scrollLeft + eh(n);
  const h = -i.scrollTop;
  return (
    vn(s).direction === 'rtl' && (d += qt(a.clientWidth, s.clientWidth) - o),
    { width: o, height: c, x: d, y: h }
  );
}
function KR(n, a) {
  const i = Vt(n),
    s = Nn(n),
    o = i.visualViewport;
  let c = s.clientWidth,
    d = s.clientHeight,
    h = 0,
    p = 0;
  if (o) {
    ((c = o.width), (d = o.height));
    const m = Jd();
    (!m || (m && a === 'fixed')) && ((h = o.offsetLeft), (p = o.offsetTop));
  }
  return { width: c, height: d, x: h, y: p };
}
function $R(n, a) {
  const i = xr(n, !0, a === 'fixed'),
    s = i.top + n.clientTop,
    o = i.left + n.clientLeft,
    c = On(n) ? Si(n) : Tn(1),
    d = n.clientWidth * c.x,
    h = n.clientHeight * c.y,
    p = o * c.x,
    m = s * c.y;
  return { width: d, height: h, x: p, y: m };
}
function Vy(n, a, i) {
  let s;
  if (a === 'viewport') s = KR(n, i);
  else if (a === 'document') s = XR(Nn(n));
  else if (pn(a)) s = $R(a, i);
  else {
    const o = w0(n);
    s = { x: a.x - o.x, y: a.y - o.y, width: a.width, height: a.height };
  }
  return Jo(s);
}
function R0(n, a) {
  const i = Ua(n);
  return i === a || !pn(i) || Ei(i) ? !1 : vn(i).position === 'fixed' || R0(i, a);
}
function WR(n, a) {
  const i = a.get(n);
  if (i) return i;
  let s = Gs(n, [], !1).filter((h) => pn(h) && ki(h) !== 'body'),
    o = null;
  const c = vn(n).position === 'fixed';
  let d = c ? Ua(n) : n;
  for (; pn(d) && !Ei(d); ) {
    const h = vn(d),
      p = Wd(d);
    (!p && h.position === 'fixed' && (o = null),
      (
        c
          ? !p && !o
          : (!p && h.position === 'static' && !!o && ['absolute', 'fixed'].includes(o.position)) ||
            (ll(d) && !p && R0(n, d))
      )
        ? (s = s.filter((v) => v !== d))
        : (o = h),
      (d = Ua(d)));
  }
  return (a.set(n, s), s);
}
function JR(n) {
  let { element: a, boundary: i, rootBoundary: s, strategy: o } = n;
  const d = [...(i === 'clippingAncestors' ? (mu(a) ? [] : WR(a, this._c)) : [].concat(i)), s],
    h = d[0],
    p = d.reduce(
      (m, v) => {
        const g = Vy(a, v, o);
        return (
          (m.top = qt(g.top, m.top)),
          (m.right = ja(g.right, m.right)),
          (m.bottom = ja(g.bottom, m.bottom)),
          (m.left = qt(g.left, m.left)),
          m
        );
      },
      Vy(a, h, o)
    );
  return { width: p.right - p.left, height: p.bottom - p.top, x: p.left, y: p.top };
}
function IR(n) {
  const { width: a, height: i } = _0(n);
  return { width: a, height: i };
}
function eT(n, a, i) {
  const s = On(a),
    o = Nn(a),
    c = i === 'fixed',
    d = xr(n, !0, c, a);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const p = Tn(0);
  if (s || (!s && !c))
    if (((ki(a) !== 'body' || ll(o)) && (h = pu(a)), s)) {
      const S = xr(a, !0, c, a);
      ((p.x = S.x + a.clientLeft), (p.y = S.y + a.clientTop));
    } else o && (p.x = eh(o));
  const m = o && !s && !c ? E0(o, h) : Tn(0),
    v = d.left + h.scrollLeft - p.x - m.x,
    g = d.top + h.scrollTop - p.y - m.y;
  return { x: v, y: g, width: d.width, height: d.height };
}
function ad(n) {
  return vn(n).position === 'static';
}
function Zy(n, a) {
  if (!On(n) || vn(n).position === 'fixed') return null;
  if (a) return a(n);
  let i = n.offsetParent;
  return (Nn(n) === i && (i = i.ownerDocument.body), i);
}
function T0(n, a) {
  const i = Vt(n);
  if (mu(n)) return i;
  if (!On(n)) {
    let o = Ua(n);
    for (; o && !Ei(o); ) {
      if (pn(o) && !ad(o)) return o;
      o = Ua(o);
    }
    return i;
  }
  let s = Zy(n, a);
  for (; s && VR(s) && ad(s); ) s = Zy(s, a);
  return s && Ei(s) && ad(s) && !Wd(s) ? i : s || ZR(n) || i;
}
const tT = async function (n) {
  const a = this.getOffsetParent || T0,
    i = this.getDimensions,
    s = await i(n.floating);
  return {
    reference: eT(n.reference, await a(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function nT(n) {
  return vn(n).direction === 'rtl';
}
const aT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: YR,
  getDocumentElement: Nn,
  getClippingRect: JR,
  getOffsetParent: T0,
  getElementRects: tT,
  getClientRects: FR,
  getDimensions: IR,
  getScale: Si,
  isElement: pn,
  isRTL: nT,
};
function rT(n, a) {
  let i = null,
    s;
  const o = Nn(n);
  function c() {
    var h;
    (clearTimeout(s), (h = i) == null || h.disconnect(), (i = null));
  }
  function d(h, p) {
    (h === void 0 && (h = !1), p === void 0 && (p = 1), c());
    const { left: m, top: v, width: g, height: S } = n.getBoundingClientRect();
    if ((h || a(), !g || !S)) return;
    const w = zo(v),
      R = zo(o.clientWidth - (m + g)),
      x = zo(o.clientHeight - (v + S)),
      D = zo(m),
      L = {
        rootMargin: -w + 'px ' + -R + 'px ' + -x + 'px ' + -D + 'px',
        threshold: qt(0, ja(1, p)) || 1,
      };
    let H = !0;
    function Y(q) {
      const Z = q[0].intersectionRatio;
      if (Z !== p) {
        if (!H) return d();
        Z
          ? d(!1, Z)
          : (s = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      H = !1;
    }
    try {
      i = new IntersectionObserver(Y, { ...L, root: o.ownerDocument });
    } catch {
      i = new IntersectionObserver(Y, L);
    }
    i.observe(n);
  }
  return (d(!0), c);
}
function iT(n, a, i, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == 'function',
      layoutShift: h = typeof IntersectionObserver == 'function',
      animationFrame: p = !1,
    } = s,
    m = Id(n),
    v = o || c ? [...(m ? Gs(m) : []), ...Gs(a)] : [];
  v.forEach((O) => {
    (o && O.addEventListener('scroll', i, { passive: !0 }), c && O.addEventListener('resize', i));
  });
  const g = m && h ? rT(m, i) : null;
  let S = -1,
    w = null;
  d &&
    ((w = new ResizeObserver((O) => {
      let [L] = O;
      (L &&
        L.target === m &&
        w &&
        (w.unobserve(a),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var H;
          (H = w) == null || H.observe(a);
        }))),
        i());
    })),
    m && !p && w.observe(m),
    w.observe(a));
  let R,
    x = p ? xr(n) : null;
  p && D();
  function D() {
    const O = xr(n);
    (x && (O.x !== x.x || O.y !== x.y || O.width !== x.width || O.height !== x.height) && i(),
      (x = O),
      (R = requestAnimationFrame(D)));
  }
  return (
    i(),
    () => {
      var O;
      (v.forEach((L) => {
        (o && L.removeEventListener('scroll', i), c && L.removeEventListener('resize', i));
      }),
        g?.(),
        (O = w) == null || O.disconnect(),
        (w = null),
        p && cancelAnimationFrame(R));
    }
  );
}
const sT = BR,
  lT = HR,
  oT = jR,
  uT = qR,
  cT = LR,
  Gy = zR,
  fT = PR,
  dT = (n, a, i) => {
    const s = new Map(),
      o = { platform: aT, ...i },
      c = { ...o.platform, _c: s };
    return kR(n, a, { ...o, platform: c });
  };
var Ho = typeof document < 'u' ? _.useLayoutEffect : _.useEffect;
function Io(n, a) {
  if (n === a) return !0;
  if (typeof n != typeof a) return !1;
  if (typeof n == 'function' && n.toString() === a.toString()) return !0;
  let i, s, o;
  if (n && a && typeof n == 'object') {
    if (Array.isArray(n)) {
      if (((i = n.length), i !== a.length)) return !1;
      for (s = i; s-- !== 0; ) if (!Io(n[s], a[s])) return !1;
      return !0;
    }
    if (((o = Object.keys(n)), (i = o.length), i !== Object.keys(a).length)) return !1;
    for (s = i; s-- !== 0; ) if (!{}.hasOwnProperty.call(a, o[s])) return !1;
    for (s = i; s-- !== 0; ) {
      const c = o[s];
      if (!(c === '_owner' && n.$$typeof) && !Io(n[c], a[c])) return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function C0(n) {
  return typeof window > 'u' ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qy(n, a) {
  const i = C0(n);
  return Math.round(a * i) / i;
}
function rd(n) {
  const a = _.useRef(n);
  return (
    Ho(() => {
      a.current = n;
    }),
    a
  );
}
function hT(n) {
  n === void 0 && (n = {});
  const {
      placement: a = 'bottom',
      strategy: i = 'absolute',
      middleware: s = [],
      platform: o,
      elements: { reference: c, floating: d } = {},
      transform: h = !0,
      whileElementsMounted: p,
      open: m,
    } = n,
    [v, g] = _.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: a,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, w] = _.useState(s);
  Io(S, s) || w(s);
  const [R, x] = _.useState(null),
    [D, O] = _.useState(null),
    L = _.useCallback((B) => {
      B !== Z.current && ((Z.current = B), x(B));
    }, []),
    H = _.useCallback((B) => {
      B !== G.current && ((G.current = B), O(B));
    }, []),
    Y = c || R,
    q = d || D,
    Z = _.useRef(null),
    G = _.useRef(null),
    M = _.useRef(v),
    A = p != null,
    X = rd(p),
    ae = rd(o),
    te = rd(m),
    ne = _.useCallback(() => {
      if (!Z.current || !G.current) return;
      const B = { placement: a, strategy: i, middleware: S };
      (ae.current && (B.platform = ae.current),
        dT(Z.current, G.current, B).then((pe) => {
          const T = { ...pe, isPositioned: te.current !== !1 };
          ce.current &&
            !Io(M.current, T) &&
            ((M.current = T),
            fu.flushSync(() => {
              g(T);
            }));
        }));
    }, [S, a, i, ae, te]);
  Ho(() => {
    m === !1 &&
      M.current.isPositioned &&
      ((M.current.isPositioned = !1), g((B) => ({ ...B, isPositioned: !1 })));
  }, [m]);
  const ce = _.useRef(!1);
  (Ho(
    () => (
      (ce.current = !0),
      () => {
        ce.current = !1;
      }
    ),
    []
  ),
    Ho(() => {
      if ((Y && (Z.current = Y), q && (G.current = q), Y && q)) {
        if (X.current) return X.current(Y, q, ne);
        ne();
      }
    }, [Y, q, ne, X, A]));
  const ie = _.useMemo(
      () => ({ reference: Z, floating: G, setReference: L, setFloating: H }),
      [L, H]
    ),
    P = _.useMemo(() => ({ reference: Y, floating: q }), [Y, q]),
    J = _.useMemo(() => {
      const B = { position: i, left: 0, top: 0 };
      if (!P.floating) return B;
      const pe = Qy(P.floating, v.x),
        T = Qy(P.floating, v.y);
      return h
        ? {
            ...B,
            transform: 'translate(' + pe + 'px, ' + T + 'px)',
            ...(C0(P.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: i, left: pe, top: T };
    }, [i, h, P.floating, v.x, v.y]);
  return _.useMemo(
    () => ({ ...v, update: ne, refs: ie, elements: P, floatingStyles: J }),
    [v, ne, ie, P, J]
  );
}
const mT = (n) => {
    function a(i) {
      return {}.hasOwnProperty.call(i, 'current');
    }
    return {
      name: 'arrow',
      options: n,
      fn(i) {
        const { element: s, padding: o } = typeof n == 'function' ? n(i) : n;
        return s && a(s)
          ? s.current != null
            ? Gy({ element: s.current, padding: o }).fn(i)
            : {}
          : s
            ? Gy({ element: s, padding: o }).fn(i)
            : {};
      },
    };
  },
  pT = (n, a) => ({ ...sT(n), options: [n, a] }),
  vT = (n, a) => ({ ...lT(n), options: [n, a] }),
  yT = (n, a) => ({ ...fT(n), options: [n, a] }),
  gT = (n, a) => ({ ...oT(n), options: [n, a] }),
  bT = (n, a) => ({ ...uT(n), options: [n, a] }),
  ST = (n, a) => ({ ...cT(n), options: [n, a] }),
  xT = (n, a) => ({ ...mT(n), options: [n, a] });
var _T = 'Arrow',
  O0 = _.forwardRef((n, a) => {
    const { children: i, width: s = 10, height: o = 5, ...c } = n;
    return C.jsx(Nt.svg, {
      ...c,
      ref: a,
      width: s,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: n.asChild ? i : C.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
O0.displayName = _T;
var wT = O0;
function ET(n, a = []) {
  let i = [];
  function s(c, d) {
    const h = _.createContext(d),
      p = i.length;
    i = [...i, d];
    function m(g) {
      const { scope: S, children: w, ...R } = g,
        x = S?.[n][p] || h,
        D = _.useMemo(() => R, Object.values(R));
      return C.jsx(x.Provider, { value: D, children: w });
    }
    function v(g, S) {
      const w = S?.[n][p] || h,
        R = _.useContext(w);
      if (R) return R;
      if (d !== void 0) return d;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return ((m.displayName = c + 'Provider'), [m, v]);
  }
  const o = () => {
    const c = i.map((d) => _.createContext(d));
    return function (h) {
      const p = h?.[n] || c;
      return _.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: p } }), [h, p]);
    };
  };
  return ((o.scopeName = n), [s, RT(o, ...a)]);
}
function RT(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const i = () => {
    const s = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const d = s.reduce((h, { useScope: p, scopeName: m }) => {
        const g = p(c)[`__scope${m}`];
        return { ...h, ...g };
      }, {});
      return _.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return ((i.scopeName = a.scopeName), i);
}
function TT(n) {
  const [a, i] = _.useState(void 0);
  return (
    br(() => {
      if (n) {
        i({ width: n.offsetWidth, height: n.offsetHeight });
        const s = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const c = o[0];
          let d, h;
          if ('borderBoxSize' in c) {
            const p = c.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            ((d = m.inlineSize), (h = m.blockSize));
          } else ((d = n.offsetWidth), (h = n.offsetHeight));
          i({ width: d, height: h });
        });
        return (s.observe(n, { box: 'border-box' }), () => s.unobserve(n));
      } else i(void 0);
    }, [n]),
    a
  );
}
var A0 = 'Popper',
  [M0, D0] = ET(A0),
  [XO, N0] = M0(A0),
  k0 = 'PopperAnchor',
  z0 = _.forwardRef((n, a) => {
    const { __scopePopper: i, virtualRef: s, ...o } = n,
      c = N0(k0, i),
      d = _.useRef(null),
      h = gn(a, d);
    return (
      _.useEffect(() => {
        c.onAnchorChange(s?.current || d.current);
      }),
      s ? null : C.jsx(Nt.div, { ...o, ref: h })
    );
  });
z0.displayName = k0;
var th = 'PopperContent',
  [CT, OT] = M0(th),
  j0 = _.forwardRef((n, a) => {
    const {
        __scopePopper: i,
        side: s = 'bottom',
        sideOffset: o = 0,
        align: c = 'center',
        alignOffset: d = 0,
        arrowPadding: h = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: v = 0,
        sticky: g = 'partial',
        hideWhenDetached: S = !1,
        updatePositionStrategy: w = 'optimized',
        onPlaced: R,
        ...x
      } = n,
      D = N0(th, i),
      [O, L] = _.useState(null),
      H = gn(a, (ve) => L(ve)),
      [Y, q] = _.useState(null),
      Z = TT(Y),
      G = Z?.width ?? 0,
      M = Z?.height ?? 0,
      A = s + (c !== 'center' ? '-' + c : ''),
      X = typeof v == 'number' ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      ae = Array.isArray(m) ? m : [m],
      te = ae.length > 0,
      ne = { padding: X, boundary: ae.filter(MT), altBoundary: te },
      {
        refs: ce,
        floatingStyles: ie,
        placement: P,
        isPositioned: J,
        middlewareData: B,
      } = hT({
        strategy: 'fixed',
        placement: A,
        whileElementsMounted: (...ve) => iT(...ve, { animationFrame: w === 'always' }),
        elements: { reference: D.anchor },
        middleware: [
          pT({ mainAxis: o + M, alignmentAxis: d }),
          p && vT({ mainAxis: !0, crossAxis: !1, limiter: g === 'partial' ? yT() : void 0, ...ne }),
          p && gT({ ...ne }),
          bT({
            ...ne,
            apply: ({ elements: ve, rects: ue, availableWidth: Se, availableHeight: Oe }) => {
              const { width: Ze, height: at } = ue.reference,
                rt = ve.floating.style;
              (rt.setProperty('--radix-popper-available-width', `${Se}px`),
                rt.setProperty('--radix-popper-available-height', `${Oe}px`),
                rt.setProperty('--radix-popper-anchor-width', `${Ze}px`),
                rt.setProperty('--radix-popper-anchor-height', `${at}px`));
            },
          }),
          Y && xT({ element: Y, padding: h }),
          DT({ arrowWidth: G, arrowHeight: M }),
          S && ST({ strategy: 'referenceHidden', ...ne }),
        ],
      }),
      [pe, T] = B0(P),
      V = za(R);
    br(() => {
      J && V?.();
    }, [J, V]);
    const se = B.arrow?.x,
      I = B.arrow?.y,
      $ = B.arrow?.centerOffset !== 0,
      [fe, oe] = _.useState();
    return (
      br(() => {
        O && oe(window.getComputedStyle(O).zIndex);
      }, [O]),
      C.jsx('div', {
        ref: ce.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...ie,
          transform: J ? ie.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: fe,
          '--radix-popper-transform-origin': [B.transformOrigin?.x, B.transformOrigin?.y].join(' '),
          ...(B.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
        },
        dir: n.dir,
        children: C.jsx(CT, {
          scope: i,
          placedSide: pe,
          onArrowChange: q,
          arrowX: se,
          arrowY: I,
          shouldHideArrow: $,
          children: C.jsx(Nt.div, {
            'data-side': pe,
            'data-align': T,
            ...x,
            ref: H,
            style: { ...x.style, animation: J ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
j0.displayName = th;
var L0 = 'PopperArrow',
  AT = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  U0 = _.forwardRef(function (a, i) {
    const { __scopePopper: s, ...o } = a,
      c = OT(L0, s),
      d = AT[c.placedSide];
    return C.jsx('span', {
      ref: c.onArrowChange,
      style: {
        position: 'absolute',
        left: c.arrowX,
        top: c.arrowY,
        [d]: 0,
        transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
          c.placedSide
        ],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[c.placedSide],
        visibility: c.shouldHideArrow ? 'hidden' : void 0,
      },
      children: C.jsx(wT, { ...o, ref: i, style: { ...o.style, display: 'block' } }),
    });
  });
U0.displayName = L0;
function MT(n) {
  return n !== null;
}
var DT = (n) => ({
  name: 'transformOrigin',
  options: n,
  fn(a) {
    const { placement: i, rects: s, middlewareData: o } = a,
      d = o.arrow?.centerOffset !== 0,
      h = d ? 0 : n.arrowWidth,
      p = d ? 0 : n.arrowHeight,
      [m, v] = B0(i),
      g = { start: '0%', center: '50%', end: '100%' }[v],
      S = (o.arrow?.x ?? 0) + h / 2,
      w = (o.arrow?.y ?? 0) + p / 2;
    let R = '',
      x = '';
    return (
      m === 'bottom'
        ? ((R = d ? g : `${S}px`), (x = `${-p}px`))
        : m === 'top'
          ? ((R = d ? g : `${S}px`), (x = `${s.floating.height + p}px`))
          : m === 'right'
            ? ((R = `${-p}px`), (x = d ? g : `${w}px`))
            : m === 'left' && ((R = `${s.floating.width + p}px`), (x = d ? g : `${w}px`)),
      { data: { x: R, y: x } }
    );
  },
});
function B0(n) {
  const [a, i = 'center'] = n.split('-');
  return [a, i];
}
var NT = z0,
  kT = j0,
  zT = U0,
  jT = 'VisuallyHidden',
  H0 = _.forwardRef((n, a) =>
    C.jsx(Nt.span, {
      ...n,
      ref: a,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...n.style,
      },
    })
  );
H0.displayName = jT;
var LT = H0,
  [vu] = Zg('Tooltip', [D0]),
  nh = D0(),
  P0 = 'TooltipProvider',
  UT = 700,
  Yy = 'tooltip.open',
  [BT, q0] = vu(P0),
  V0 = (n) => {
    const {
        __scopeTooltip: a,
        delayDuration: i = UT,
        skipDelayDuration: s = 300,
        disableHoverableContent: o = !1,
        children: c,
      } = n,
      [d, h] = _.useState(!0),
      p = _.useRef(!1),
      m = _.useRef(0);
    return (
      _.useEffect(() => {
        const v = m.current;
        return () => window.clearTimeout(v);
      }, []),
      C.jsx(BT, {
        scope: a,
        isOpenDelayed: d,
        delayDuration: i,
        onOpen: _.useCallback(() => {
          (window.clearTimeout(m.current), h(!1));
        }, []),
        onClose: _.useCallback(() => {
          (window.clearTimeout(m.current), (m.current = window.setTimeout(() => h(!0), s)));
        }, [s]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: _.useCallback((v) => {
          p.current = v;
        }, []),
        disableHoverableContent: o,
        children: c,
      })
    );
  };
V0.displayName = P0;
var Z0 = 'Tooltip',
  [KO, yu] = vu(Z0),
  Rd = 'TooltipTrigger',
  HT = _.forwardRef((n, a) => {
    const { __scopeTooltip: i, ...s } = n,
      o = yu(Rd, i),
      c = q0(Rd, i),
      d = nh(i),
      h = _.useRef(null),
      p = gn(a, h, o.onTriggerChange),
      m = _.useRef(!1),
      v = _.useRef(!1),
      g = _.useCallback(() => (m.current = !1), []);
    return (
      _.useEffect(() => () => document.removeEventListener('pointerup', g), [g]),
      C.jsx(NT, {
        asChild: !0,
        ...d,
        children: C.jsx(Nt.button, {
          'aria-describedby': o.open ? o.contentId : void 0,
          'data-state': o.stateAttribute,
          ...s,
          ref: p,
          onPointerMove: Dt(n.onPointerMove, (S) => {
            S.pointerType !== 'touch' &&
              !v.current &&
              !c.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (v.current = !0));
          }),
          onPointerLeave: Dt(n.onPointerLeave, () => {
            (o.onTriggerLeave(), (v.current = !1));
          }),
          onPointerDown: Dt(n.onPointerDown, () => {
            ((m.current = !0), document.addEventListener('pointerup', g, { once: !0 }));
          }),
          onFocus: Dt(n.onFocus, () => {
            m.current || o.onOpen();
          }),
          onBlur: Dt(n.onBlur, o.onClose),
          onClick: Dt(n.onClick, o.onClose),
        }),
      })
    );
  });
HT.displayName = Rd;
var PT = 'TooltipPortal',
  [$O, qT] = vu(PT, { forceMount: void 0 }),
  Ri = 'TooltipContent',
  VT = _.forwardRef((n, a) => {
    const i = qT(Ri, n.__scopeTooltip),
      { forceMount: s = i.forceMount, side: o = 'top', ...c } = n,
      d = yu(Ri, n.__scopeTooltip);
    return C.jsx(sl, {
      present: s || d.open,
      children: d.disableHoverableContent
        ? C.jsx(G0, { side: o, ...c, ref: a })
        : C.jsx(ZT, { side: o, ...c, ref: a }),
    });
  }),
  ZT = _.forwardRef((n, a) => {
    const i = yu(Ri, n.__scopeTooltip),
      s = q0(Ri, n.__scopeTooltip),
      o = _.useRef(null),
      c = gn(a, o),
      [d, h] = _.useState(null),
      { trigger: p, onClose: m } = i,
      v = o.current,
      { onPointerInTransitChange: g } = s,
      S = _.useCallback(() => {
        (h(null), g(!1));
      }, [g]),
      w = _.useCallback(
        (R, x) => {
          const D = R.currentTarget,
            O = { x: R.clientX, y: R.clientY },
            L = FT(O, D.getBoundingClientRect()),
            H = XT(O, L),
            Y = KT(x.getBoundingClientRect()),
            q = WT([...H, ...Y]);
          (h(q), g(!0));
        },
        [g]
      );
    return (
      _.useEffect(() => () => S(), [S]),
      _.useEffect(() => {
        if (p && v) {
          const R = (D) => w(D, v),
            x = (D) => w(D, p);
          return (
            p.addEventListener('pointerleave', R),
            v.addEventListener('pointerleave', x),
            () => {
              (p.removeEventListener('pointerleave', R), v.removeEventListener('pointerleave', x));
            }
          );
        }
      }, [p, v, w, S]),
      _.useEffect(() => {
        if (d) {
          const R = (x) => {
            const D = x.target,
              O = { x: x.clientX, y: x.clientY },
              L = p?.contains(D) || v?.contains(D),
              H = !$T(O, d);
            L ? S() : H && (S(), m());
          };
          return (
            document.addEventListener('pointermove', R),
            () => document.removeEventListener('pointermove', R)
          );
        }
      }, [p, v, d, m, S]),
      C.jsx(G0, { ...n, ref: c })
    );
  }),
  [GT, QT] = vu(Z0, { isInside: !1 }),
  G0 = _.forwardRef((n, a) => {
    const {
        __scopeTooltip: i,
        children: s,
        'aria-label': o,
        onEscapeKeyDown: c,
        onPointerDownOutside: d,
        ...h
      } = n,
      p = yu(Ri, i),
      m = nh(i),
      { onClose: v } = p;
    return (
      _.useEffect(
        () => (document.addEventListener(Yy, v), () => document.removeEventListener(Yy, v)),
        [v]
      ),
      _.useEffect(() => {
        if (p.trigger) {
          const g = (S) => {
            S.target?.contains(p.trigger) && v();
          };
          return (
            window.addEventListener('scroll', g, { capture: !0 }),
            () => window.removeEventListener('scroll', g, { capture: !0 })
          );
        }
      }, [p.trigger, v]),
      C.jsx(Zd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: d,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: v,
        children: C.jsxs(kT, {
          'data-state': p.stateAttribute,
          ...m,
          ...h,
          ref: a,
          style: {
            ...h.style,
            '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
          },
          children: [
            C.jsx(Vg, { children: s }),
            C.jsx(GT, {
              scope: i,
              isInside: !0,
              children: C.jsx(LT, { id: p.contentId, role: 'tooltip', children: o || s }),
            }),
          ],
        }),
      })
    );
  });
VT.displayName = Ri;
var Q0 = 'TooltipArrow',
  YT = _.forwardRef((n, a) => {
    const { __scopeTooltip: i, ...s } = n,
      o = nh(i);
    return QT(Q0, i).isInside ? null : C.jsx(zT, { ...o, ...s, ref: a });
  });
YT.displayName = Q0;
function FT(n, a) {
  const i = Math.abs(a.top - n.y),
    s = Math.abs(a.bottom - n.y),
    o = Math.abs(a.right - n.x),
    c = Math.abs(a.left - n.x);
  switch (Math.min(i, s, o, c)) {
    case c:
      return 'left';
    case o:
      return 'right';
    case i:
      return 'top';
    case s:
      return 'bottom';
    default:
      throw new Error('unreachable');
  }
}
function XT(n, a, i = 5) {
  const s = [];
  switch (a) {
    case 'top':
      s.push({ x: n.x - i, y: n.y + i }, { x: n.x + i, y: n.y + i });
      break;
    case 'bottom':
      s.push({ x: n.x - i, y: n.y - i }, { x: n.x + i, y: n.y - i });
      break;
    case 'left':
      s.push({ x: n.x + i, y: n.y - i }, { x: n.x + i, y: n.y + i });
      break;
    case 'right':
      s.push({ x: n.x - i, y: n.y - i }, { x: n.x - i, y: n.y + i });
      break;
  }
  return s;
}
function KT(n) {
  const { top: a, right: i, bottom: s, left: o } = n;
  return [
    { x: o, y: a },
    { x: i, y: a },
    { x: i, y: s },
    { x: o, y: s },
  ];
}
function $T(n, a) {
  const { x: i, y: s } = n;
  let o = !1;
  for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
    const h = a[c].x,
      p = a[c].y,
      m = a[d].x,
      v = a[d].y;
    p > s != v > s && i < ((m - h) * (s - p)) / (v - p) + h && (o = !o);
  }
  return o;
}
function WT(n) {
  const a = n.slice();
  return (
    a.sort((i, s) => (i.x < s.x ? -1 : i.x > s.x ? 1 : i.y < s.y ? -1 : i.y > s.y ? 1 : 0)),
    JT(a)
  );
}
function JT(n) {
  if (n.length <= 1) return n.slice();
  const a = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    for (; a.length >= 2; ) {
      const c = a[a.length - 1],
        d = a[a.length - 2];
      if ((c.x - d.x) * (o.y - d.y) >= (c.y - d.y) * (o.x - d.x)) a.pop();
      else break;
    }
    a.push(o);
  }
  a.pop();
  const i = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const o = n[s];
    for (; i.length >= 2; ) {
      const c = i[i.length - 1],
        d = i[i.length - 2];
      if ((c.x - d.x) * (o.y - d.y) >= (c.y - d.y) * (o.x - d.x)) i.pop();
      else break;
    }
    i.push(o);
  }
  return (
    i.pop(),
    a.length === 1 && i.length === 1 && a[0].x === i[0].x && a[0].y === i[0].y ? a : a.concat(i)
  );
}
var IT = V0;
function eC({ delayDuration: n = 0, ...a }) {
  return C.jsx(IT, { 'data-slot': 'tooltip-provider', delayDuration: n, ...a });
}
const tC = 'sidebar_state',
  nC = 3600 * 24 * 7,
  aC = '16rem',
  rC = '18rem',
  iC = '3rem',
  sC = 'b',
  Y0 = _.createContext(null);
function F0() {
  const n = _.useContext(Y0);
  if (!n) throw new Error('useSidebar must be used within a SidebarProvider.');
  return n;
}
function lC({
  defaultOpen: n = !0,
  open: a,
  onOpenChange: i,
  className: s,
  style: o,
  children: c,
  ...d
}) {
  const h = Hw(),
    [p, m] = _.useState(!1),
    [v, g] = _.useState(n),
    S = a ?? v,
    w = _.useCallback(
      (O) => {
        const L = typeof O == 'function' ? O(S) : O;
        (i ? i(L) : g(L), (document.cookie = `${tC}=${L}; path=/; max-age=${nC}`));
      },
      [i, S]
    ),
    R = _.useCallback(() => (h ? m((O) => !O) : w((O) => !O)), [h, w, m]);
  _.useEffect(() => {
    const O = (L) => {
      L.key === sC && (L.metaKey || L.ctrlKey) && (L.preventDefault(), R());
    };
    return (window.addEventListener('keydown', O), () => window.removeEventListener('keydown', O));
  }, [R]);
  const x = S ? 'expanded' : 'collapsed',
    D = _.useMemo(
      () => ({
        state: x,
        open: S,
        setOpen: w,
        isMobile: h,
        openMobile: p,
        setOpenMobile: m,
        toggleSidebar: R,
      }),
      [x, S, w, h, p, m, R]
    );
  return C.jsx(Y0.Provider, {
    value: D,
    children: C.jsx(eC, {
      delayDuration: 0,
      children: C.jsx('div', {
        'data-slot': 'sidebar-wrapper',
        style: { '--sidebar-width': aC, '--sidebar-width-icon': iC, ...o },
        className: Ve(
          'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
          s
        ),
        ...d,
        children: c,
      }),
    }),
  });
}
function oC({
  side: n = 'left',
  variant: a = 'sidebar',
  collapsible: i = 'offcanvas',
  className: s,
  children: o,
  ...c
}) {
  const { isMobile: d, state: h, openMobile: p, setOpenMobile: m } = F0();
  return i === 'none'
    ? C.jsx('div', {
        'data-slot': 'sidebar',
        className: Ve(
          'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
          s
        ),
        ...c,
        children: o,
      })
    : d
      ? C.jsx(gR, {
          open: p,
          onOpenChange: m,
          ...c,
          children: C.jsxs(xR, {
            'data-sidebar': 'sidebar',
            'data-slot': 'sidebar',
            'data-mobile': 'true',
            className:
              'bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden',
            style: { '--sidebar-width': rC },
            side: n,
            children: [
              C.jsxs(_R, {
                className: 'sr-only',
                children: [
                  C.jsx(wR, { children: 'Sidebar' }),
                  C.jsx(ER, { children: 'Displays the mobile sidebar.' }),
                ],
              }),
              C.jsx('div', { className: 'flex h-full w-full flex-col', children: o }),
            ],
          }),
        })
      : C.jsxs('div', {
          className: 'group peer text-sidebar-foreground hidden md:block',
          'data-state': h,
          'data-collapsible': h === 'collapsed' ? i : '',
          'data-variant': a,
          'data-side': n,
          'data-slot': 'sidebar',
          children: [
            C.jsx('div', {
              'data-slot': 'sidebar-gap',
              className: Ve(
                'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
                'group-data-[collapsible=offcanvas]:w-0',
                'group-data-[side=right]:rotate-180',
                a === 'floating' || a === 'inset'
                  ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
                  : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
              ),
            }),
            C.jsx('div', {
              'data-slot': 'sidebar-container',
              className: Ve(
                'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
                n === 'left'
                  ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                  : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                a === 'floating' || a === 'inset'
                  ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                  : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
                s
              ),
              ...c,
              children: C.jsx('div', {
                'data-sidebar': 'sidebar',
                'data-slot': 'sidebar-inner',
                className:
                  'bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm',
                children: o,
              }),
            }),
          ],
        });
}
function WO({ className: n, onClick: a, ...i }) {
  const { toggleSidebar: s } = F0();
  return C.jsxs(qw, {
    'data-sidebar': 'trigger',
    'data-slot': 'sidebar-trigger',
    variant: 'ghost',
    size: 'icon',
    className: Ve('size-7', n),
    onClick: (o) => {
      (a?.(o), s());
    },
    ...i,
    children: [C.jsx(W1, {}), C.jsx('span', { className: 'sr-only', children: 'Toggle Sidebar' })],
  });
}
function uC({ className: n, ...a }) {
  return C.jsx('div', {
    'data-slot': 'sidebar-header',
    'data-sidebar': 'header',
    className: Ve('flex flex-col gap-2 p-2', n),
    ...a,
  });
}
function cC({ className: n, ...a }) {
  return C.jsx('div', {
    'data-slot': 'sidebar-content',
    'data-sidebar': 'content',
    className: Ve(
      'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
      n
    ),
    ...a,
  });
}
function Fy({ className: n, ...a }) {
  return C.jsx('div', {
    'data-slot': 'sidebar-group',
    'data-sidebar': 'group',
    className: Ve('relative flex w-full min-w-0 flex-col p-2', n),
    ...a,
  });
}
function fC({ className: n, asChild: a = !1, ...i }) {
  const s = a ? il : 'div';
  return C.jsx(s, {
    'data-slot': 'sidebar-group-label',
    'data-sidebar': 'group-label',
    className: Ve(
      'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      n
    ),
    ...i,
  });
}
function Xy({ className: n, ...a }) {
  return C.jsx('ul', {
    'data-slot': 'sidebar-menu',
    'data-sidebar': 'menu',
    className: Ve('flex w-full min-w-0 flex-col gap-1', n),
    ...a,
  });
}
function ah({ className: n, ...a }) {
  return C.jsx('li', {
    'data-slot': 'sidebar-menu-item',
    'data-sidebar': 'menu-item',
    className: Ve('group/menu-item relative', n),
    ...a,
  });
}
const X0 = 3006,
  zi = `http://localhost:${X0}`,
  Ga = () => typeof window < 'u' && window.__EVALITE_STATIC_DATA__?.staticMode,
  dC = () => (Ga() ? window.__EVALITE_STATIC_DATA__?.basePath || '/' : ''),
  ji = (n) => {
    const a = dC();
    return !a || a === '/' ? n : `${a}${n}`;
  },
  K0 = (n) => n.replace(/[^a-zA-Z0-9-_]/g, '_');
async function Ba(n, a) {
  const i = await fetch(n, a);
  if (!i.ok)
    throw i.status === 404 ? e_() : new Error(`API request failed: ${i.status} ${i.statusText}`);
  return await i.json();
}
const hC = async (n) =>
    Ga() ? Ba(ji('/data/server-state.json'), n) : Ba(`${zi}/api/server-state`, n),
  mC = async (n) => (Ga() ? Ba(ji('/data/menu-items.json'), n) : Ba(`${zi}/api/menu-items`, n)),
  pC = async (n, a, i) => {
    if (Ga()) {
      const o = K0(n);
      return Ba(ji(`/data/eval-${o}.json`), i);
    }
    const s = new URLSearchParams({ name: n, timestamp: a || '' });
    return Ba(`${zi}/api/eval?${s.toString()}`, i);
  },
  vC = async (n, a) => {
    if (Ga()) {
      const s = K0(n.evalName);
      return Ba(ji(`/data/result-${s}-${n.resultIndex}.json`), a);
    }
    const i = new URLSearchParams({
      name: n.evalName,
      index: n.resultIndex,
      timestamp: n.evalTimestamp || '',
    });
    return Ba(`${zi}/api/eval/result?${i.toString()}`, a);
  },
  JO = (n) => (Ga() ? ji(`/files/${n}`) : `${zi}/api/file?path=${n}`),
  IO = (n) => (Ga() ? ji(`/files/${n}`) : `${zi}/api/file?path=${n}&download=true`),
  rh = { queryKey: ['menu-items'], queryFn: mC },
  ol = { queryKey: ['server-state'], queryFn: hC },
  yC = (n, a) => ({ queryKey: ['eval-by-name', n, a], queryFn: () => pC(n, a) }),
  gC = (n) => ({ queryKey: ['result', n], queryFn: () => vC(n) }),
  bC = (n) => {
    _.useEffect(() => {
      if (Ga()) return;
      const a = new WebSocket(`ws://localhost:${X0}/api/socket`);
      return (
        (a.onmessage = async (i) => {
          const s = JSON.parse(i.data);
          (await n.invalidateQueries(), await n.setQueryData(ol.queryKey, s));
        }),
        () => {
          a.close();
        }
      );
    }, [n]);
  },
  SC = () => null,
  xC = {
    ...rh,
    select: (n) => {
      const { evals: a, prevScore: i, score: s, evalStatus: o } = n,
        c = a.map((m) => ({
          ...m,
          state: Pg({ status: m.evalStatus, score: m.score, prevScore: m.prevScore }),
        })),
        d = a.some((m) => m.hasScores),
        h = [],
        p = new Map();
      for (const m of c)
        if (m.variantGroup) {
          const v = p.get(m.variantGroup);
          v ? v.push(m) : p.set(m.variantGroup, [m]);
        } else h.push({ type: 'single', eval: m });
      for (const [m, v] of p)
        (v.sort((g, S) => S.score - g.score), h.push({ type: 'group', groupName: m, variants: v }));
      return { groupedEvals: h, score: s, prevScore: i, evalStatus: o, hasScores: d };
    },
  },
  ih = N_()({
    component: _C,
    loader: async ({ context: n }) => {
      await Promise.all([n.queryClient.ensureQueryData(rh), n.queryClient.ensureQueryData(ol)]);
    },
  });
function _C() {
  const [
      {
        data: { groupedEvals: n, score: a, prevScore: i, evalStatus: s, hasScores: o },
      },
      { data: c },
    ] = H1({ queries: [xC, ol] }),
    d = Eg();
  return (
    bC(d),
    C.jsxs(lC, {
      className: 'w-full',
      children: [
        C.jsxs(oC, {
          className: 'border-r-0',
          children: [
            C.jsx(uC, {
              children: C.jsx(Xy, {
                children: C.jsx(ah, {
                  className: 'border-b md:-mx-3 -mx-2 md:px-3 px-2 pb-1.5',
                  children: C.jsx('div', { className: 'px-2 py-1', children: C.jsx(kw, {}) }),
                }),
              }),
            }),
            C.jsxs(cC, {
              children: [
                C.jsx(Fy, {
                  children: C.jsxs('div', {
                    className: 'px-2',
                    children: [
                      C.jsx('p', {
                        className: 'text-xs font-medium text-sidebar-foreground/70 mb-2',
                        children: 'Summary',
                      }),
                      C.jsx('div', {
                        className: 'text-foreground/60 font-medium text-2xl',
                        children: C.jsx(Hg, {
                          score: a,
                          state: Pg({ score: a, prevScore: i, status: s }),
                          iconClassName: 'size-4',
                          hasScores: o,
                        }),
                      }),
                    ],
                  }),
                }),
                C.jsxs(Fy, {
                  children: [
                    C.jsx(fC, { children: 'Evals' }),
                    C.jsx(Xy, {
                      children: n.map((h, p) =>
                        h.type === 'single'
                          ? C.jsx(
                              $0,
                              {
                                name: h.eval.name,
                                score: h.eval.score,
                                state: h.eval.state,
                                evalStatus: h.eval.evalStatus,
                                hasScores: h.eval.hasScores,
                              },
                              `eval-${h.eval.name}`
                            )
                          : C.jsx(
                              wC,
                              { groupName: h.groupName, variants: h.variants },
                              `group-${h.groupName}`
                            )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        C.jsx(zd, {}),
        C.jsx(SC, {}),
        C.jsx(V1, {}),
      ],
    })
  );
}
const wC = (n) =>
    C.jsxs(C.Fragment, {
      children: [
        C.jsx(ah, {
          children: C.jsxs('div', {
            className: 'flex items-center gap-1.5 text-sm px-2 py-1 text-sidebar-foreground/70',
            children: [
              C.jsx(K1, { className: 'size-4' }),
              C.jsx('span', { children: n.groupName }),
            ],
          }),
        }),
        n.variants.map((a) =>
          C.jsx(
            $0,
            {
              name: a.name,
              variantName: a.variantName,
              score: a.score,
              state: a.state,
              evalStatus: a.evalStatus,
              isVariant: !0,
              hasScores: a.hasScores,
            },
            `variant-${a.name}`
          )
        ),
      ],
    }),
  $0 = (n) =>
    C.jsx(
      ah,
      {
        children: C.jsxs(J_, {
          preload: 'intent',
          to: '/eval/$name',
          params: { name: n.name },
          className: n.isVariant
            ? 'flex justify-between text-sm px-2 py-1 pl-7 rounded hover:bg-foreground/10 active:bg-foreground/20 transition-colors'
            : 'flex justify-between text-sm px-2 py-1 rounded hover:bg-foreground/10 active:bg-foreground/20 transition-colors',
          activeProps: { className: 'bg-foreground/20! text-foreground/80' },
          children: [
            C.jsx('span', { children: n.variantName || n.name }),
            C.jsx(Hg, { score: n.score, state: n.state, hasScores: n.hasScores }),
          ],
        }),
      },
      n.name
    ),
  EC = () => qd(() => import('./_-UgKSMNJ-.js'), []),
  W0 = kd('/$')({
    component: jd(EC, 'component', () => W0.ssr),
    loader: async ({ context: n }) => {
      const { queryClient: a } = n,
        { evals: i } = await a.ensureQueryData(rh),
        s = i[0]?.name;
      return s ? f_({ to: '/eval/$name', params: { name: s } }) : null;
    },
  });
var je;
(function (n) {
  n.assertEqual = (o) => o;
  function a(o) {}
  n.assertIs = a;
  function i(o) {
    throw new Error();
  }
  ((n.assertNever = i),
    (n.arrayToEnum = (o) => {
      const c = {};
      for (const d of o) c[d] = d;
      return c;
    }),
    (n.getValidEnumValues = (o) => {
      const c = n.objectKeys(o).filter((h) => typeof o[o[h]] != 'number'),
        d = {};
      for (const h of c) d[h] = o[h];
      return n.objectValues(d);
    }),
    (n.objectValues = (o) =>
      n.objectKeys(o).map(function (c) {
        return o[c];
      })),
    (n.objectKeys =
      typeof Object.keys == 'function'
        ? (o) => Object.keys(o)
        : (o) => {
            const c = [];
            for (const d in o) Object.prototype.hasOwnProperty.call(o, d) && c.push(d);
            return c;
          }),
    (n.find = (o, c) => {
      for (const d of o) if (c(d)) return d;
    }),
    (n.isInteger =
      typeof Number.isInteger == 'function'
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == 'number' && isFinite(o) && Math.floor(o) === o));
  function s(o, c = ' | ') {
    return o.map((d) => (typeof d == 'string' ? `'${d}'` : d)).join(c);
  }
  ((n.joinValues = s),
    (n.jsonStringifyReplacer = (o, c) => (typeof c == 'bigint' ? c.toString() : c)));
})(je || (je = {}));
var Td;
(function (n) {
  n.mergeShapes = (a, i) => ({ ...a, ...i });
})(Td || (Td = {}));
const le = je.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  In = (n) => {
    switch (typeof n) {
      case 'undefined':
        return le.undefined;
      case 'string':
        return le.string;
      case 'number':
        return isNaN(n) ? le.nan : le.number;
      case 'boolean':
        return le.boolean;
      case 'function':
        return le.function;
      case 'bigint':
        return le.bigint;
      case 'symbol':
        return le.symbol;
      case 'object':
        return Array.isArray(n)
          ? le.array
          : n === null
            ? le.null
            : n.then && typeof n.then == 'function' && n.catch && typeof n.catch == 'function'
              ? le.promise
              : typeof Map < 'u' && n instanceof Map
                ? le.map
                : typeof Set < 'u' && n instanceof Set
                  ? le.set
                  : typeof Date < 'u' && n instanceof Date
                    ? le.date
                    : le.object;
      default:
        return le.unknown;
    }
  },
  ee = je.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  RC = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:');
class Zt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(a) {
    (super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      }));
    const i = new.target.prototype;
    (Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : (this.__proto__ = i),
      (this.name = 'ZodError'),
      (this.issues = a));
  }
  format(a) {
    const i =
        a ||
        function (c) {
          return c.message;
        },
      s = { _errors: [] },
      o = (c) => {
        for (const d of c.issues)
          if (d.code === 'invalid_union') d.unionErrors.map(o);
          else if (d.code === 'invalid_return_type') o(d.returnTypeError);
          else if (d.code === 'invalid_arguments') o(d.argumentsError);
          else if (d.path.length === 0) s._errors.push(i(d));
          else {
            let h = s,
              p = 0;
            for (; p < d.path.length; ) {
              const m = d.path[p];
              (p === d.path.length - 1
                ? ((h[m] = h[m] || { _errors: [] }), h[m]._errors.push(i(d)))
                : (h[m] = h[m] || { _errors: [] }),
                (h = h[m]),
                p++);
            }
          }
      };
    return (o(this), s);
  }
  static assert(a) {
    if (!(a instanceof Zt)) throw new Error(`Not a ZodError: ${a}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, je.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(a = (i) => i.message) {
    const i = {},
      s = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((i[o.path[0]] = i[o.path[0]] || []), i[o.path[0]].push(a(o)))
        : s.push(a(o));
    return { formErrors: s, fieldErrors: i };
  }
  get formErrors() {
    return this.flatten();
  }
}
Zt.create = (n) => new Zt(n);
const Ti = (n, a) => {
  let i;
  switch (n.code) {
    case ee.invalid_type:
      n.received === le.undefined
        ? (i = 'Required')
        : (i = `Expected ${n.expected}, received ${n.received}`);
      break;
    case ee.invalid_literal:
      i = `Invalid literal value, expected ${JSON.stringify(n.expected, je.jsonStringifyReplacer)}`;
      break;
    case ee.unrecognized_keys:
      i = `Unrecognized key(s) in object: ${je.joinValues(n.keys, ', ')}`;
      break;
    case ee.invalid_union:
      i = 'Invalid input';
      break;
    case ee.invalid_union_discriminator:
      i = `Invalid discriminator value. Expected ${je.joinValues(n.options)}`;
      break;
    case ee.invalid_enum_value:
      i = `Invalid enum value. Expected ${je.joinValues(n.options)}, received '${n.received}'`;
      break;
    case ee.invalid_arguments:
      i = 'Invalid function arguments';
      break;
    case ee.invalid_return_type:
      i = 'Invalid function return type';
      break;
    case ee.invalid_date:
      i = 'Invalid date';
      break;
    case ee.invalid_string:
      typeof n.validation == 'object'
        ? 'includes' in n.validation
          ? ((i = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == 'number' &&
              (i = `${i} at one or more positions greater than or equal to ${n.validation.position}`))
          : 'startsWith' in n.validation
            ? (i = `Invalid input: must start with "${n.validation.startsWith}"`)
            : 'endsWith' in n.validation
              ? (i = `Invalid input: must end with "${n.validation.endsWith}"`)
              : je.assertNever(n.validation)
        : n.validation !== 'regex'
          ? (i = `Invalid ${n.validation}`)
          : (i = 'Invalid');
      break;
    case ee.too_small:
      n.type === 'array'
        ? (i = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'more than'} ${n.minimum} element(s)`)
        : n.type === 'string'
          ? (i = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'over'} ${n.minimum} character(s)`)
          : n.type === 'number'
            ? (i = `Number must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${n.minimum}`)
            : n.type === 'date'
              ? (i = `Date must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(n.minimum))}`)
              : (i = 'Invalid input');
      break;
    case ee.too_big:
      n.type === 'array'
        ? (i = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'less than'} ${n.maximum} element(s)`)
        : n.type === 'string'
          ? (i = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'under'} ${n.maximum} character(s)`)
          : n.type === 'number'
            ? (i = `Number must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
            : n.type === 'bigint'
              ? (i = `BigInt must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
              : n.type === 'date'
                ? (i = `Date must be ${n.exact ? 'exactly' : n.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(n.maximum))}`)
                : (i = 'Invalid input');
      break;
    case ee.custom:
      i = 'Invalid input';
      break;
    case ee.invalid_intersection_types:
      i = 'Intersection results could not be merged';
      break;
    case ee.not_multiple_of:
      i = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case ee.not_finite:
      i = 'Number must be finite';
      break;
    default:
      ((i = a.defaultError), je.assertNever(n));
  }
  return { message: i };
};
let J0 = Ti;
function TC(n) {
  J0 = n;
}
function eu() {
  return J0;
}
const tu = (n) => {
    const { data: a, path: i, errorMaps: s, issueData: o } = n,
      c = [...i, ...(o.path || [])],
      d = { ...o, path: c };
    if (o.message !== void 0) return { ...o, path: c, message: o.message };
    let h = '';
    const p = s
      .filter((m) => !!m)
      .slice()
      .reverse();
    for (const m of p) h = m(d, { data: a, defaultError: h }).message;
    return { ...o, path: c, message: h };
  },
  CC = [];
function re(n, a) {
  const i = eu(),
    s = tu({
      issueData: a,
      data: n.data,
      path: n.path,
      errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, i, i === Ti ? void 0 : Ti].filter(
        (o) => !!o
      ),
    });
  n.common.issues.push(s);
}
class wt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(a, i) {
    const s = [];
    for (const o of i) {
      if (o.status === 'aborted') return we;
      (o.status === 'dirty' && a.dirty(), s.push(o.value));
    }
    return { status: a.value, value: s };
  }
  static async mergeObjectAsync(a, i) {
    const s = [];
    for (const o of i) {
      const c = await o.key,
        d = await o.value;
      s.push({ key: c, value: d });
    }
    return wt.mergeObjectSync(a, s);
  }
  static mergeObjectSync(a, i) {
    const s = {};
    for (const o of i) {
      const { key: c, value: d } = o;
      if (c.status === 'aborted' || d.status === 'aborted') return we;
      (c.status === 'dirty' && a.dirty(),
        d.status === 'dirty' && a.dirty(),
        c.value !== '__proto__' && (typeof d.value < 'u' || o.alwaysSet) && (s[c.value] = d.value));
    }
    return { status: a.value, value: s };
  }
}
const we = Object.freeze({ status: 'aborted' }),
  mi = (n) => ({ status: 'dirty', value: n }),
  Ct = (n) => ({ status: 'valid', value: n }),
  Cd = (n) => n.status === 'aborted',
  Od = (n) => n.status === 'dirty',
  _r = (n) => n.status === 'valid',
  Qs = (n) => typeof Promise < 'u' && n instanceof Promise;
function nu(n, a, i, s) {
  if (typeof a == 'function' ? n !== a || !0 : !a.has(n))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return a.get(n);
}
function I0(n, a, i, s, o) {
  if (typeof a == 'function' ? n !== a || !0 : !a.has(n))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return (a.set(n, i), i);
}
var ye;
(function (n) {
  ((n.errToObj = (a) => (typeof a == 'string' ? { message: a } : a || {})),
    (n.toString = (a) => (typeof a == 'string' ? a : a?.message)));
})(ye || (ye = {}));
var Us, Bs;
class An {
  constructor(a, i, s, o) {
    ((this._cachedPath = []),
      (this.parent = a),
      (this.data = i),
      (this._path = s),
      (this._key = o));
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Ky = (n, a) => {
  if (_r(a)) return { success: !0, data: a.value };
  if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const i = new Zt(n.common.issues);
      return ((this._error = i), this._error);
    },
  };
};
function Re(n) {
  if (!n) return {};
  const { errorMap: a, invalid_type_error: i, required_error: s, description: o } = n;
  if (a && (i || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return a
    ? { errorMap: a, description: o }
    : {
        errorMap: (d, h) => {
          var p, m;
          const { message: v } = n;
          return d.code === 'invalid_enum_value'
            ? { message: v ?? h.defaultError }
            : typeof h.data > 'u'
              ? { message: (p = v ?? s) !== null && p !== void 0 ? p : h.defaultError }
              : d.code !== 'invalid_type'
                ? { message: h.defaultError }
                : { message: (m = v ?? i) !== null && m !== void 0 ? m : h.defaultError };
        },
        description: o,
      };
}
class Ce {
  get description() {
    return this._def.description;
  }
  _getType(a) {
    return In(a.data);
  }
  _getOrReturnCtx(a, i) {
    return (
      i || {
        common: a.parent.common,
        data: a.data,
        parsedType: In(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      }
    );
  }
  _processInputParams(a) {
    return {
      status: new wt(),
      ctx: {
        common: a.parent.common,
        data: a.data,
        parsedType: In(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      },
    };
  }
  _parseSync(a) {
    const i = this._parse(a);
    if (Qs(i)) throw new Error('Synchronous parse encountered promise.');
    return i;
  }
  _parseAsync(a) {
    const i = this._parse(a);
    return Promise.resolve(i);
  }
  parse(a, i) {
    const s = this.safeParse(a, i);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(a, i) {
    var s;
    const o = {
        common: {
          issues: [],
          async: (s = i?.async) !== null && s !== void 0 ? s : !1,
          contextualErrorMap: i?.errorMap,
        },
        path: i?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: In(a),
      },
      c = this._parseSync({ data: a, path: o.path, parent: o });
    return Ky(o, c);
  }
  '~validate'(a) {
    var i, s;
    const o = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: a,
      parsedType: In(a),
    };
    if (!this['~standard'].async)
      try {
        const c = this._parseSync({ data: a, path: [], parent: o });
        return _r(c) ? { value: c.value } : { issues: o.common.issues };
      } catch (c) {
        (!(
          (s = (i = c?.message) === null || i === void 0 ? void 0 : i.toLowerCase()) === null ||
          s === void 0
        ) &&
          s.includes('encountered') &&
          (this['~standard'].async = !0),
          (o.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: a, path: [], parent: o }).then((c) =>
      _r(c) ? { value: c.value } : { issues: o.common.issues }
    );
  }
  async parseAsync(a, i) {
    const s = await this.safeParseAsync(a, i);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(a, i) {
    const s = {
        common: { issues: [], contextualErrorMap: i?.errorMap, async: !0 },
        path: i?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: In(a),
      },
      o = this._parse({ data: a, path: s.path, parent: s }),
      c = await (Qs(o) ? o : Promise.resolve(o));
    return Ky(s, c);
  }
  refine(a, i) {
    const s = (o) =>
      typeof i == 'string' || typeof i > 'u' ? { message: i } : typeof i == 'function' ? i(o) : i;
    return this._refinement((o, c) => {
      const d = a(o),
        h = () => c.addIssue({ code: ee.custom, ...s(o) });
      return typeof Promise < 'u' && d instanceof Promise
        ? d.then((p) => (p ? !0 : (h(), !1)))
        : d
          ? !0
          : (h(), !1);
    });
  }
  refinement(a, i) {
    return this._refinement((s, o) =>
      a(s) ? !0 : (o.addIssue(typeof i == 'function' ? i(s, o) : i), !1)
    );
  }
  _refinement(a) {
    return new yn({
      schema: this,
      typeName: _e.ZodEffects,
      effect: { type: 'refinement', refinement: a },
    });
  }
  superRefine(a) {
    return this._refinement(a);
  }
  constructor(a) {
    ((this.spa = this.safeParseAsync),
      (this._def = a),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this['~standard'] = { version: 1, vendor: 'zod', validate: (i) => this['~validate'](i) }));
  }
  optional() {
    return Cn.create(this, this._def);
  }
  nullable() {
    return Va.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return mn.create(this);
  }
  promise() {
    return Oi.create(this, this._def);
  }
  or(a) {
    return Ks.create([this, a], this._def);
  }
  and(a) {
    return $s.create(this, a, this._def);
  }
  transform(a) {
    return new yn({
      ...Re(this._def),
      schema: this,
      typeName: _e.ZodEffects,
      effect: { type: 'transform', transform: a },
    });
  }
  default(a) {
    const i = typeof a == 'function' ? a : () => a;
    return new tl({ ...Re(this._def), innerType: this, defaultValue: i, typeName: _e.ZodDefault });
  }
  brand() {
    return new sh({ typeName: _e.ZodBranded, type: this, ...Re(this._def) });
  }
  catch(a) {
    const i = typeof a == 'function' ? a : () => a;
    return new nl({ ...Re(this._def), innerType: this, catchValue: i, typeName: _e.ZodCatch });
  }
  describe(a) {
    const i = this.constructor;
    return new i({ ...this._def, description: a });
  }
  pipe(a) {
    return ul.create(this, a);
  }
  readonly() {
    return al.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const OC = /^c[^\s-]{8,}$/i,
  AC = /^[0-9a-z]+$/,
  MC = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  DC = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  NC = /^[a-z0-9_-]{21}$/i,
  kC = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  zC =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  jC = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  LC = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let id;
const UC =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  BC =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  HC =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  PC =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  qC = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  VC = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  eb =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  ZC = new RegExp(`^${eb}$`);
function tb(n) {
  let a = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    n.precision
      ? (a = `${a}\\.\\d{${n.precision}}`)
      : n.precision == null && (a = `${a}(\\.\\d+)?`),
    a
  );
}
function GC(n) {
  return new RegExp(`^${tb(n)}$`);
}
function nb(n) {
  let a = `${eb}T${tb(n)}`;
  const i = [];
  return (
    i.push(n.local ? 'Z?' : 'Z'),
    n.offset && i.push('([+-]\\d{2}:?\\d{2})'),
    (a = `${a}(${i.join('|')})`),
    new RegExp(`^${a}$`)
  );
}
function QC(n, a) {
  return !!(((a === 'v4' || !a) && UC.test(n)) || ((a === 'v6' || !a) && HC.test(n)));
}
function YC(n, a) {
  if (!kC.test(n)) return !1;
  try {
    const [i] = n.split('.'),
      s = i
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(i.length + ((4 - (i.length % 4)) % 4), '='),
      o = JSON.parse(atob(s));
    return !(typeof o != 'object' || o === null || !o.typ || !o.alg || (a && o.alg !== a));
  } catch {
    return !1;
  }
}
function FC(n, a) {
  return !!(((a === 'v4' || !a) && BC.test(n)) || ((a === 'v6' || !a) && PC.test(n)));
}
class hn extends Ce {
  _parse(a) {
    if ((this._def.coerce && (a.data = String(a.data)), this._getType(a) !== le.string)) {
      const c = this._getOrReturnCtx(a);
      return (re(c, { code: ee.invalid_type, expected: le.string, received: c.parsedType }), we);
    }
    const s = new wt();
    let o;
    for (const c of this._def.checks)
      if (c.kind === 'min')
        a.data.length < c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          re(o, {
            code: ee.too_small,
            minimum: c.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === 'max')
        a.data.length > c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          re(o, {
            code: ee.too_big,
            maximum: c.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === 'length') {
        const d = a.data.length > c.value,
          h = a.data.length < c.value;
        (d || h) &&
          ((o = this._getOrReturnCtx(a, o)),
          d
            ? re(o, {
                code: ee.too_big,
                maximum: c.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: c.message,
              })
            : h &&
              re(o, {
                code: ee.too_small,
                minimum: c.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: c.message,
              }),
          s.dirty());
      } else if (c.kind === 'email')
        jC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'email', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'emoji')
        (id || (id = new RegExp(LC, 'u')),
          id.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            re(o, { validation: 'emoji', code: ee.invalid_string, message: c.message }),
            s.dirty()));
      else if (c.kind === 'uuid')
        DC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'uuid', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'nanoid')
        NC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'nanoid', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'cuid')
        OC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'cuid', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'cuid2')
        AC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'cuid2', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'ulid')
        MC.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          re(o, { validation: 'ulid', code: ee.invalid_string, message: c.message }),
          s.dirty());
      else if (c.kind === 'url')
        try {
          new URL(a.data);
        } catch {
          ((o = this._getOrReturnCtx(a, o)),
            re(o, { validation: 'url', code: ee.invalid_string, message: c.message }),
            s.dirty());
        }
      else
        c.kind === 'regex'
          ? ((c.regex.lastIndex = 0),
            c.regex.test(a.data) ||
              ((o = this._getOrReturnCtx(a, o)),
              re(o, { validation: 'regex', code: ee.invalid_string, message: c.message }),
              s.dirty()))
          : c.kind === 'trim'
            ? (a.data = a.data.trim())
            : c.kind === 'includes'
              ? a.data.includes(c.value, c.position) ||
                ((o = this._getOrReturnCtx(a, o)),
                re(o, {
                  code: ee.invalid_string,
                  validation: { includes: c.value, position: c.position },
                  message: c.message,
                }),
                s.dirty())
              : c.kind === 'toLowerCase'
                ? (a.data = a.data.toLowerCase())
                : c.kind === 'toUpperCase'
                  ? (a.data = a.data.toUpperCase())
                  : c.kind === 'startsWith'
                    ? a.data.startsWith(c.value) ||
                      ((o = this._getOrReturnCtx(a, o)),
                      re(o, {
                        code: ee.invalid_string,
                        validation: { startsWith: c.value },
                        message: c.message,
                      }),
                      s.dirty())
                    : c.kind === 'endsWith'
                      ? a.data.endsWith(c.value) ||
                        ((o = this._getOrReturnCtx(a, o)),
                        re(o, {
                          code: ee.invalid_string,
                          validation: { endsWith: c.value },
                          message: c.message,
                        }),
                        s.dirty())
                      : c.kind === 'datetime'
                        ? nb(c).test(a.data) ||
                          ((o = this._getOrReturnCtx(a, o)),
                          re(o, {
                            code: ee.invalid_string,
                            validation: 'datetime',
                            message: c.message,
                          }),
                          s.dirty())
                        : c.kind === 'date'
                          ? ZC.test(a.data) ||
                            ((o = this._getOrReturnCtx(a, o)),
                            re(o, {
                              code: ee.invalid_string,
                              validation: 'date',
                              message: c.message,
                            }),
                            s.dirty())
                          : c.kind === 'time'
                            ? GC(c).test(a.data) ||
                              ((o = this._getOrReturnCtx(a, o)),
                              re(o, {
                                code: ee.invalid_string,
                                validation: 'time',
                                message: c.message,
                              }),
                              s.dirty())
                            : c.kind === 'duration'
                              ? zC.test(a.data) ||
                                ((o = this._getOrReturnCtx(a, o)),
                                re(o, {
                                  validation: 'duration',
                                  code: ee.invalid_string,
                                  message: c.message,
                                }),
                                s.dirty())
                              : c.kind === 'ip'
                                ? QC(a.data, c.version) ||
                                  ((o = this._getOrReturnCtx(a, o)),
                                  re(o, {
                                    validation: 'ip',
                                    code: ee.invalid_string,
                                    message: c.message,
                                  }),
                                  s.dirty())
                                : c.kind === 'jwt'
                                  ? YC(a.data, c.alg) ||
                                    ((o = this._getOrReturnCtx(a, o)),
                                    re(o, {
                                      validation: 'jwt',
                                      code: ee.invalid_string,
                                      message: c.message,
                                    }),
                                    s.dirty())
                                  : c.kind === 'cidr'
                                    ? FC(a.data, c.version) ||
                                      ((o = this._getOrReturnCtx(a, o)),
                                      re(o, {
                                        validation: 'cidr',
                                        code: ee.invalid_string,
                                        message: c.message,
                                      }),
                                      s.dirty())
                                    : c.kind === 'base64'
                                      ? qC.test(a.data) ||
                                        ((o = this._getOrReturnCtx(a, o)),
                                        re(o, {
                                          validation: 'base64',
                                          code: ee.invalid_string,
                                          message: c.message,
                                        }),
                                        s.dirty())
                                      : c.kind === 'base64url'
                                        ? VC.test(a.data) ||
                                          ((o = this._getOrReturnCtx(a, o)),
                                          re(o, {
                                            validation: 'base64url',
                                            code: ee.invalid_string,
                                            message: c.message,
                                          }),
                                          s.dirty())
                                        : je.assertNever(c);
    return { status: s.value, value: a.data };
  }
  _regex(a, i, s) {
    return this.refinement((o) => a.test(o), {
      validation: i,
      code: ee.invalid_string,
      ...ye.errToObj(s),
    });
  }
  _addCheck(a) {
    return new hn({ ...this._def, checks: [...this._def.checks, a] });
  }
  email(a) {
    return this._addCheck({ kind: 'email', ...ye.errToObj(a) });
  }
  url(a) {
    return this._addCheck({ kind: 'url', ...ye.errToObj(a) });
  }
  emoji(a) {
    return this._addCheck({ kind: 'emoji', ...ye.errToObj(a) });
  }
  uuid(a) {
    return this._addCheck({ kind: 'uuid', ...ye.errToObj(a) });
  }
  nanoid(a) {
    return this._addCheck({ kind: 'nanoid', ...ye.errToObj(a) });
  }
  cuid(a) {
    return this._addCheck({ kind: 'cuid', ...ye.errToObj(a) });
  }
  cuid2(a) {
    return this._addCheck({ kind: 'cuid2', ...ye.errToObj(a) });
  }
  ulid(a) {
    return this._addCheck({ kind: 'ulid', ...ye.errToObj(a) });
  }
  base64(a) {
    return this._addCheck({ kind: 'base64', ...ye.errToObj(a) });
  }
  base64url(a) {
    return this._addCheck({ kind: 'base64url', ...ye.errToObj(a) });
  }
  jwt(a) {
    return this._addCheck({ kind: 'jwt', ...ye.errToObj(a) });
  }
  ip(a) {
    return this._addCheck({ kind: 'ip', ...ye.errToObj(a) });
  }
  cidr(a) {
    return this._addCheck({ kind: 'cidr', ...ye.errToObj(a) });
  }
  datetime(a) {
    var i, s;
    return typeof a == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: a })
      : this._addCheck({
          kind: 'datetime',
          precision: typeof a?.precision > 'u' ? null : a?.precision,
          offset: (i = a?.offset) !== null && i !== void 0 ? i : !1,
          local: (s = a?.local) !== null && s !== void 0 ? s : !1,
          ...ye.errToObj(a?.message),
        });
  }
  date(a) {
    return this._addCheck({ kind: 'date', message: a });
  }
  time(a) {
    return typeof a == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: a })
      : this._addCheck({
          kind: 'time',
          precision: typeof a?.precision > 'u' ? null : a?.precision,
          ...ye.errToObj(a?.message),
        });
  }
  duration(a) {
    return this._addCheck({ kind: 'duration', ...ye.errToObj(a) });
  }
  regex(a, i) {
    return this._addCheck({ kind: 'regex', regex: a, ...ye.errToObj(i) });
  }
  includes(a, i) {
    return this._addCheck({
      kind: 'includes',
      value: a,
      position: i?.position,
      ...ye.errToObj(i?.message),
    });
  }
  startsWith(a, i) {
    return this._addCheck({ kind: 'startsWith', value: a, ...ye.errToObj(i) });
  }
  endsWith(a, i) {
    return this._addCheck({ kind: 'endsWith', value: a, ...ye.errToObj(i) });
  }
  min(a, i) {
    return this._addCheck({ kind: 'min', value: a, ...ye.errToObj(i) });
  }
  max(a, i) {
    return this._addCheck({ kind: 'max', value: a, ...ye.errToObj(i) });
  }
  length(a, i) {
    return this._addCheck({ kind: 'length', value: a, ...ye.errToObj(i) });
  }
  nonempty(a) {
    return this.min(1, ye.errToObj(a));
  }
  trim() {
    return new hn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new hn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new hn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((a) => a.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((a) => a.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((a) => a.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((a) => a.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((a) => a.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((a) => a.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((a) => a.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((a) => a.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((a) => a.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((a) => a.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((a) => a.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((a) => a.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((a) => a.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((a) => a.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((a) => a.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((a) => a.kind === 'base64url');
  }
  get minLength() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxLength() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
}
hn.create = (n) => {
  var a;
  return new hn({
    checks: [],
    typeName: _e.ZodString,
    coerce: (a = n?.coerce) !== null && a !== void 0 ? a : !1,
    ...Re(n),
  });
};
function XC(n, a) {
  const i = (n.toString().split('.')[1] || '').length,
    s = (a.toString().split('.')[1] || '').length,
    o = i > s ? i : s,
    c = parseInt(n.toFixed(o).replace('.', '')),
    d = parseInt(a.toFixed(o).replace('.', ''));
  return (c % d) / Math.pow(10, o);
}
class Ha extends Ce {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(a) {
    if ((this._def.coerce && (a.data = Number(a.data)), this._getType(a) !== le.number)) {
      const c = this._getOrReturnCtx(a);
      return (re(c, { code: ee.invalid_type, expected: le.number, received: c.parsedType }), we);
    }
    let s;
    const o = new wt();
    for (const c of this._def.checks)
      c.kind === 'int'
        ? je.isInteger(a.data) ||
          ((s = this._getOrReturnCtx(a, s)),
          re(s, {
            code: ee.invalid_type,
            expected: 'integer',
            received: 'float',
            message: c.message,
          }),
          o.dirty())
        : c.kind === 'min'
          ? (c.inclusive ? a.data < c.value : a.data <= c.value) &&
            ((s = this._getOrReturnCtx(a, s)),
            re(s, {
              code: ee.too_small,
              minimum: c.value,
              type: 'number',
              inclusive: c.inclusive,
              exact: !1,
              message: c.message,
            }),
            o.dirty())
          : c.kind === 'max'
            ? (c.inclusive ? a.data > c.value : a.data >= c.value) &&
              ((s = this._getOrReturnCtx(a, s)),
              re(s, {
                code: ee.too_big,
                maximum: c.value,
                type: 'number',
                inclusive: c.inclusive,
                exact: !1,
                message: c.message,
              }),
              o.dirty())
            : c.kind === 'multipleOf'
              ? XC(a.data, c.value) !== 0 &&
                ((s = this._getOrReturnCtx(a, s)),
                re(s, { code: ee.not_multiple_of, multipleOf: c.value, message: c.message }),
                o.dirty())
              : c.kind === 'finite'
                ? Number.isFinite(a.data) ||
                  ((s = this._getOrReturnCtx(a, s)),
                  re(s, { code: ee.not_finite, message: c.message }),
                  o.dirty())
                : je.assertNever(c);
    return { status: o.value, value: a.data };
  }
  gte(a, i) {
    return this.setLimit('min', a, !0, ye.toString(i));
  }
  gt(a, i) {
    return this.setLimit('min', a, !1, ye.toString(i));
  }
  lte(a, i) {
    return this.setLimit('max', a, !0, ye.toString(i));
  }
  lt(a, i) {
    return this.setLimit('max', a, !1, ye.toString(i));
  }
  setLimit(a, i, s, o) {
    return new Ha({
      ...this._def,
      checks: [...this._def.checks, { kind: a, value: i, inclusive: s, message: ye.toString(o) }],
    });
  }
  _addCheck(a) {
    return new Ha({ ...this._def, checks: [...this._def.checks, a] });
  }
  int(a) {
    return this._addCheck({ kind: 'int', message: ye.toString(a) });
  }
  positive(a) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: ye.toString(a) });
  }
  negative(a) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: ye.toString(a) });
  }
  nonpositive(a) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: ye.toString(a) });
  }
  nonnegative(a) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: ye.toString(a) });
  }
  multipleOf(a, i) {
    return this._addCheck({ kind: 'multipleOf', value: a, message: ye.toString(i) });
  }
  finite(a) {
    return this._addCheck({ kind: 'finite', message: ye.toString(a) });
  }
  safe(a) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ye.toString(a),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ye.toString(a),
    });
  }
  get minValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
  get isInt() {
    return !!this._def.checks.find(
      (a) => a.kind === 'int' || (a.kind === 'multipleOf' && je.isInteger(a.value))
    );
  }
  get isFinite() {
    let a = null,
      i = null;
    for (const s of this._def.checks) {
      if (s.kind === 'finite' || s.kind === 'int' || s.kind === 'multipleOf') return !0;
      s.kind === 'min'
        ? (i === null || s.value > i) && (i = s.value)
        : s.kind === 'max' && (a === null || s.value < a) && (a = s.value);
    }
    return Number.isFinite(i) && Number.isFinite(a);
  }
}
Ha.create = (n) =>
  new Ha({ checks: [], typeName: _e.ZodNumber, coerce: n?.coerce || !1, ...Re(n) });
class Pa extends Ce {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(a) {
    if (this._def.coerce)
      try {
        a.data = BigInt(a.data);
      } catch {
        return this._getInvalidInput(a);
      }
    if (this._getType(a) !== le.bigint) return this._getInvalidInput(a);
    let s;
    const o = new wt();
    for (const c of this._def.checks)
      c.kind === 'min'
        ? (c.inclusive ? a.data < c.value : a.data <= c.value) &&
          ((s = this._getOrReturnCtx(a, s)),
          re(s, {
            code: ee.too_small,
            type: 'bigint',
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          o.dirty())
        : c.kind === 'max'
          ? (c.inclusive ? a.data > c.value : a.data >= c.value) &&
            ((s = this._getOrReturnCtx(a, s)),
            re(s, {
              code: ee.too_big,
              type: 'bigint',
              maximum: c.value,
              inclusive: c.inclusive,
              message: c.message,
            }),
            o.dirty())
          : c.kind === 'multipleOf'
            ? a.data % c.value !== BigInt(0) &&
              ((s = this._getOrReturnCtx(a, s)),
              re(s, { code: ee.not_multiple_of, multipleOf: c.value, message: c.message }),
              o.dirty())
            : je.assertNever(c);
    return { status: o.value, value: a.data };
  }
  _getInvalidInput(a) {
    const i = this._getOrReturnCtx(a);
    return (re(i, { code: ee.invalid_type, expected: le.bigint, received: i.parsedType }), we);
  }
  gte(a, i) {
    return this.setLimit('min', a, !0, ye.toString(i));
  }
  gt(a, i) {
    return this.setLimit('min', a, !1, ye.toString(i));
  }
  lte(a, i) {
    return this.setLimit('max', a, !0, ye.toString(i));
  }
  lt(a, i) {
    return this.setLimit('max', a, !1, ye.toString(i));
  }
  setLimit(a, i, s, o) {
    return new Pa({
      ...this._def,
      checks: [...this._def.checks, { kind: a, value: i, inclusive: s, message: ye.toString(o) }],
    });
  }
  _addCheck(a) {
    return new Pa({ ...this._def, checks: [...this._def.checks, a] });
  }
  positive(a) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(a),
    });
  }
  negative(a) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(a),
    });
  }
  nonpositive(a) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(a),
    });
  }
  nonnegative(a) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(a),
    });
  }
  multipleOf(a, i) {
    return this._addCheck({ kind: 'multipleOf', value: a, message: ye.toString(i) });
  }
  get minValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a;
  }
}
Pa.create = (n) => {
  var a;
  return new Pa({
    checks: [],
    typeName: _e.ZodBigInt,
    coerce: (a = n?.coerce) !== null && a !== void 0 ? a : !1,
    ...Re(n),
  });
};
class Ys extends Ce {
  _parse(a) {
    if ((this._def.coerce && (a.data = !!a.data), this._getType(a) !== le.boolean)) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.boolean, received: s.parsedType }), we);
    }
    return Ct(a.data);
  }
}
Ys.create = (n) => new Ys({ typeName: _e.ZodBoolean, coerce: n?.coerce || !1, ...Re(n) });
class wr extends Ce {
  _parse(a) {
    if ((this._def.coerce && (a.data = new Date(a.data)), this._getType(a) !== le.date)) {
      const c = this._getOrReturnCtx(a);
      return (re(c, { code: ee.invalid_type, expected: le.date, received: c.parsedType }), we);
    }
    if (isNaN(a.data.getTime())) {
      const c = this._getOrReturnCtx(a);
      return (re(c, { code: ee.invalid_date }), we);
    }
    const s = new wt();
    let o;
    for (const c of this._def.checks)
      c.kind === 'min'
        ? a.data.getTime() < c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          re(o, {
            code: ee.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: 'date',
          }),
          s.dirty())
        : c.kind === 'max'
          ? a.data.getTime() > c.value &&
            ((o = this._getOrReturnCtx(a, o)),
            re(o, {
              code: ee.too_big,
              message: c.message,
              inclusive: !0,
              exact: !1,
              maximum: c.value,
              type: 'date',
            }),
            s.dirty())
          : je.assertNever(c);
    return { status: s.value, value: new Date(a.data.getTime()) };
  }
  _addCheck(a) {
    return new wr({ ...this._def, checks: [...this._def.checks, a] });
  }
  min(a, i) {
    return this._addCheck({ kind: 'min', value: a.getTime(), message: ye.toString(i) });
  }
  max(a, i) {
    return this._addCheck({ kind: 'max', value: a.getTime(), message: ye.toString(i) });
  }
  get minDate() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'min' && (a === null || i.value > a) && (a = i.value);
    return a != null ? new Date(a) : null;
  }
  get maxDate() {
    let a = null;
    for (const i of this._def.checks)
      i.kind === 'max' && (a === null || i.value < a) && (a = i.value);
    return a != null ? new Date(a) : null;
  }
}
wr.create = (n) => new wr({ checks: [], coerce: n?.coerce || !1, typeName: _e.ZodDate, ...Re(n) });
class au extends Ce {
  _parse(a) {
    if (this._getType(a) !== le.symbol) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.symbol, received: s.parsedType }), we);
    }
    return Ct(a.data);
  }
}
au.create = (n) => new au({ typeName: _e.ZodSymbol, ...Re(n) });
class Fs extends Ce {
  _parse(a) {
    if (this._getType(a) !== le.undefined) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.undefined, received: s.parsedType }), we);
    }
    return Ct(a.data);
  }
}
Fs.create = (n) => new Fs({ typeName: _e.ZodUndefined, ...Re(n) });
class Xs extends Ce {
  _parse(a) {
    if (this._getType(a) !== le.null) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.null, received: s.parsedType }), we);
    }
    return Ct(a.data);
  }
}
Xs.create = (n) => new Xs({ typeName: _e.ZodNull, ...Re(n) });
class Ci extends Ce {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(a) {
    return Ct(a.data);
  }
}
Ci.create = (n) => new Ci({ typeName: _e.ZodAny, ...Re(n) });
class gr extends Ce {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(a) {
    return Ct(a.data);
  }
}
gr.create = (n) => new gr({ typeName: _e.ZodUnknown, ...Re(n) });
class ra extends Ce {
  _parse(a) {
    const i = this._getOrReturnCtx(a);
    return (re(i, { code: ee.invalid_type, expected: le.never, received: i.parsedType }), we);
  }
}
ra.create = (n) => new ra({ typeName: _e.ZodNever, ...Re(n) });
class ru extends Ce {
  _parse(a) {
    if (this._getType(a) !== le.undefined) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.void, received: s.parsedType }), we);
    }
    return Ct(a.data);
  }
}
ru.create = (n) => new ru({ typeName: _e.ZodVoid, ...Re(n) });
class mn extends Ce {
  _parse(a) {
    const { ctx: i, status: s } = this._processInputParams(a),
      o = this._def;
    if (i.parsedType !== le.array)
      return (re(i, { code: ee.invalid_type, expected: le.array, received: i.parsedType }), we);
    if (o.exactLength !== null) {
      const d = i.data.length > o.exactLength.value,
        h = i.data.length < o.exactLength.value;
      (d || h) &&
        (re(i, {
          code: d ? ee.too_big : ee.too_small,
          minimum: h ? o.exactLength.value : void 0,
          maximum: d ? o.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (o.minLength !== null &&
        i.data.length < o.minLength.value &&
        (re(i, {
          code: ee.too_small,
          minimum: o.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        s.dirty()),
      o.maxLength !== null &&
        i.data.length > o.maxLength.value &&
        (re(i, {
          code: ee.too_big,
          maximum: o.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        s.dirty()),
      i.common.async)
    )
      return Promise.all(
        [...i.data].map((d, h) => o.type._parseAsync(new An(i, d, i.path, h)))
      ).then((d) => wt.mergeArray(s, d));
    const c = [...i.data].map((d, h) => o.type._parseSync(new An(i, d, i.path, h)));
    return wt.mergeArray(s, c);
  }
  get element() {
    return this._def.type;
  }
  min(a, i) {
    return new mn({ ...this._def, minLength: { value: a, message: ye.toString(i) } });
  }
  max(a, i) {
    return new mn({ ...this._def, maxLength: { value: a, message: ye.toString(i) } });
  }
  length(a, i) {
    return new mn({ ...this._def, exactLength: { value: a, message: ye.toString(i) } });
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
mn.create = (n, a) =>
  new mn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: _e.ZodArray,
    ...Re(a),
  });
function fi(n) {
  if (n instanceof $e) {
    const a = {};
    for (const i in n.shape) {
      const s = n.shape[i];
      a[i] = Cn.create(fi(s));
    }
    return new $e({ ...n._def, shape: () => a });
  } else
    return n instanceof mn
      ? new mn({ ...n._def, type: fi(n.element) })
      : n instanceof Cn
        ? Cn.create(fi(n.unwrap()))
        : n instanceof Va
          ? Va.create(fi(n.unwrap()))
          : n instanceof Mn
            ? Mn.create(n.items.map((a) => fi(a)))
            : n;
}
class $e extends Ce {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const a = this._def.shape(),
      i = je.objectKeys(a);
    return (this._cached = { shape: a, keys: i });
  }
  _parse(a) {
    if (this._getType(a) !== le.object) {
      const m = this._getOrReturnCtx(a);
      return (re(m, { code: ee.invalid_type, expected: le.object, received: m.parsedType }), we);
    }
    const { status: s, ctx: o } = this._processInputParams(a),
      { shape: c, keys: d } = this._getCached(),
      h = [];
    if (!(this._def.catchall instanceof ra && this._def.unknownKeys === 'strip'))
      for (const m in o.data) d.includes(m) || h.push(m);
    const p = [];
    for (const m of d) {
      const v = c[m],
        g = o.data[m];
      p.push({
        key: { status: 'valid', value: m },
        value: v._parse(new An(o, g, o.path, m)),
        alwaysSet: m in o.data,
      });
    }
    if (this._def.catchall instanceof ra) {
      const m = this._def.unknownKeys;
      if (m === 'passthrough')
        for (const v of h)
          p.push({
            key: { status: 'valid', value: v },
            value: { status: 'valid', value: o.data[v] },
          });
      else if (m === 'strict')
        h.length > 0 && (re(o, { code: ee.unrecognized_keys, keys: h }), s.dirty());
      else if (m !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const m = this._def.catchall;
      for (const v of h) {
        const g = o.data[v];
        p.push({
          key: { status: 'valid', value: v },
          value: m._parse(new An(o, g, o.path, v)),
          alwaysSet: v in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const m = [];
            for (const v of p) {
              const g = await v.key,
                S = await v.value;
              m.push({ key: g, value: S, alwaysSet: v.alwaysSet });
            }
            return m;
          })
          .then((m) => wt.mergeObjectSync(s, m))
      : wt.mergeObjectSync(s, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(a) {
    return (
      ye.errToObj,
      new $e({
        ...this._def,
        unknownKeys: 'strict',
        ...(a !== void 0
          ? {
              errorMap: (i, s) => {
                var o, c, d, h;
                const p =
                  (d =
                    (c = (o = this._def).errorMap) === null || c === void 0
                      ? void 0
                      : c.call(o, i, s).message) !== null && d !== void 0
                    ? d
                    : s.defaultError;
                return i.code === 'unrecognized_keys'
                  ? { message: (h = ye.errToObj(a).message) !== null && h !== void 0 ? h : p }
                  : { message: p };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new $e({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new $e({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(a) {
    return new $e({ ...this._def, shape: () => ({ ...this._def.shape(), ...a }) });
  }
  merge(a) {
    return new $e({
      unknownKeys: a._def.unknownKeys,
      catchall: a._def.catchall,
      shape: () => ({ ...this._def.shape(), ...a._def.shape() }),
      typeName: _e.ZodObject,
    });
  }
  setKey(a, i) {
    return this.augment({ [a]: i });
  }
  catchall(a) {
    return new $e({ ...this._def, catchall: a });
  }
  pick(a) {
    const i = {};
    return (
      je.objectKeys(a).forEach((s) => {
        a[s] && this.shape[s] && (i[s] = this.shape[s]);
      }),
      new $e({ ...this._def, shape: () => i })
    );
  }
  omit(a) {
    const i = {};
    return (
      je.objectKeys(this.shape).forEach((s) => {
        a[s] || (i[s] = this.shape[s]);
      }),
      new $e({ ...this._def, shape: () => i })
    );
  }
  deepPartial() {
    return fi(this);
  }
  partial(a) {
    const i = {};
    return (
      je.objectKeys(this.shape).forEach((s) => {
        const o = this.shape[s];
        a && !a[s] ? (i[s] = o) : (i[s] = o.optional());
      }),
      new $e({ ...this._def, shape: () => i })
    );
  }
  required(a) {
    const i = {};
    return (
      je.objectKeys(this.shape).forEach((s) => {
        if (a && !a[s]) i[s] = this.shape[s];
        else {
          let c = this.shape[s];
          for (; c instanceof Cn; ) c = c._def.innerType;
          i[s] = c;
        }
      }),
      new $e({ ...this._def, shape: () => i })
    );
  }
  keyof() {
    return ab(je.objectKeys(this.shape));
  }
}
$e.create = (n, a) =>
  new $e({
    shape: () => n,
    unknownKeys: 'strip',
    catchall: ra.create(),
    typeName: _e.ZodObject,
    ...Re(a),
  });
$e.strictCreate = (n, a) =>
  new $e({
    shape: () => n,
    unknownKeys: 'strict',
    catchall: ra.create(),
    typeName: _e.ZodObject,
    ...Re(a),
  });
$e.lazycreate = (n, a) =>
  new $e({
    shape: n,
    unknownKeys: 'strip',
    catchall: ra.create(),
    typeName: _e.ZodObject,
    ...Re(a),
  });
class Ks extends Ce {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = this._def.options;
    function o(c) {
      for (const h of c) if (h.result.status === 'valid') return h.result;
      for (const h of c)
        if (h.result.status === 'dirty')
          return (i.common.issues.push(...h.ctx.common.issues), h.result);
      const d = c.map((h) => new Zt(h.ctx.common.issues));
      return (re(i, { code: ee.invalid_union, unionErrors: d }), we);
    }
    if (i.common.async)
      return Promise.all(
        s.map(async (c) => {
          const d = { ...i, common: { ...i.common, issues: [] }, parent: null };
          return { result: await c._parseAsync({ data: i.data, path: i.path, parent: d }), ctx: d };
        })
      ).then(o);
    {
      let c;
      const d = [];
      for (const p of s) {
        const m = { ...i, common: { ...i.common, issues: [] }, parent: null },
          v = p._parseSync({ data: i.data, path: i.path, parent: m });
        if (v.status === 'valid') return v;
        (v.status === 'dirty' && !c && (c = { result: v, ctx: m }),
          m.common.issues.length && d.push(m.common.issues));
      }
      if (c) return (i.common.issues.push(...c.ctx.common.issues), c.result);
      const h = d.map((p) => new Zt(p));
      return (re(i, { code: ee.invalid_union, unionErrors: h }), we);
    }
  }
  get options() {
    return this._def.options;
  }
}
Ks.create = (n, a) => new Ks({ options: n, typeName: _e.ZodUnion, ...Re(a) });
const Jn = (n) =>
  n instanceof Js
    ? Jn(n.schema)
    : n instanceof yn
      ? Jn(n.innerType())
      : n instanceof Is
        ? [n.value]
        : n instanceof qa
          ? n.options
          : n instanceof el
            ? je.objectValues(n.enum)
            : n instanceof tl
              ? Jn(n._def.innerType)
              : n instanceof Fs
                ? [void 0]
                : n instanceof Xs
                  ? [null]
                  : n instanceof Cn
                    ? [void 0, ...Jn(n.unwrap())]
                    : n instanceof Va
                      ? [null, ...Jn(n.unwrap())]
                      : n instanceof sh || n instanceof al
                        ? Jn(n.unwrap())
                        : n instanceof nl
                          ? Jn(n._def.innerType)
                          : [];
class gu extends Ce {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== le.object)
      return (re(i, { code: ee.invalid_type, expected: le.object, received: i.parsedType }), we);
    const s = this.discriminator,
      o = i.data[s],
      c = this.optionsMap.get(o);
    return c
      ? i.common.async
        ? c._parseAsync({ data: i.data, path: i.path, parent: i })
        : c._parseSync({ data: i.data, path: i.path, parent: i })
      : (re(i, {
          code: ee.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [s],
        }),
        we);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(a, i, s) {
    const o = new Map();
    for (const c of i) {
      const d = Jn(c.shape[a]);
      if (!d.length)
        throw new Error(
          `A discriminator value for key \`${a}\` could not be extracted from all schema options`
        );
      for (const h of d) {
        if (o.has(h))
          throw new Error(`Discriminator property ${String(a)} has duplicate value ${String(h)}`);
        o.set(h, c);
      }
    }
    return new gu({
      typeName: _e.ZodDiscriminatedUnion,
      discriminator: a,
      options: i,
      optionsMap: o,
      ...Re(s),
    });
  }
}
function Ad(n, a) {
  const i = In(n),
    s = In(a);
  if (n === a) return { valid: !0, data: n };
  if (i === le.object && s === le.object) {
    const o = je.objectKeys(a),
      c = je.objectKeys(n).filter((h) => o.indexOf(h) !== -1),
      d = { ...n, ...a };
    for (const h of c) {
      const p = Ad(n[h], a[h]);
      if (!p.valid) return { valid: !1 };
      d[h] = p.data;
    }
    return { valid: !0, data: d };
  } else if (i === le.array && s === le.array) {
    if (n.length !== a.length) return { valid: !1 };
    const o = [];
    for (let c = 0; c < n.length; c++) {
      const d = n[c],
        h = a[c],
        p = Ad(d, h);
      if (!p.valid) return { valid: !1 };
      o.push(p.data);
    }
    return { valid: !0, data: o };
  } else return i === le.date && s === le.date && +n == +a ? { valid: !0, data: n } : { valid: !1 };
}
class $s extends Ce {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a),
      o = (c, d) => {
        if (Cd(c) || Cd(d)) return we;
        const h = Ad(c.value, d.value);
        return h.valid
          ? ((Od(c) || Od(d)) && i.dirty(), { status: i.value, value: h.data })
          : (re(s, { code: ee.invalid_intersection_types }), we);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({ data: s.data, path: s.path, parent: s }),
        ]).then(([c, d]) => o(c, d))
      : o(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
        );
  }
}
$s.create = (n, a, i) => new $s({ left: n, right: a, typeName: _e.ZodIntersection, ...Re(i) });
class Mn extends Ce {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== le.array)
      return (re(s, { code: ee.invalid_type, expected: le.array, received: s.parsedType }), we);
    if (s.data.length < this._def.items.length)
      return (
        re(s, {
          code: ee.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        we
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (re(s, {
        code: ee.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      i.dirty());
    const c = [...s.data]
      .map((d, h) => {
        const p = this._def.items[h] || this._def.rest;
        return p ? p._parse(new An(s, d, s.path, h)) : null;
      })
      .filter((d) => !!d);
    return s.common.async ? Promise.all(c).then((d) => wt.mergeArray(i, d)) : wt.mergeArray(i, c);
  }
  get items() {
    return this._def.items;
  }
  rest(a) {
    return new Mn({ ...this._def, rest: a });
  }
}
Mn.create = (n, a) => {
  if (!Array.isArray(n)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new Mn({ items: n, typeName: _e.ZodTuple, rest: null, ...Re(a) });
};
class Ws extends Ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== le.object)
      return (re(s, { code: ee.invalid_type, expected: le.object, received: s.parsedType }), we);
    const o = [],
      c = this._def.keyType,
      d = this._def.valueType;
    for (const h in s.data)
      o.push({
        key: c._parse(new An(s, h, s.path, h)),
        value: d._parse(new An(s, s.data[h], s.path, h)),
        alwaysSet: h in s.data,
      });
    return s.common.async ? wt.mergeObjectAsync(i, o) : wt.mergeObjectSync(i, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(a, i, s) {
    return i instanceof Ce
      ? new Ws({ keyType: a, valueType: i, typeName: _e.ZodRecord, ...Re(s) })
      : new Ws({ keyType: hn.create(), valueType: a, typeName: _e.ZodRecord, ...Re(i) });
  }
}
class iu extends Ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== le.map)
      return (re(s, { code: ee.invalid_type, expected: le.map, received: s.parsedType }), we);
    const o = this._def.keyType,
      c = this._def.valueType,
      d = [...s.data.entries()].map(([h, p], m) => ({
        key: o._parse(new An(s, h, s.path, [m, 'key'])),
        value: c._parse(new An(s, p, s.path, [m, 'value'])),
      }));
    if (s.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const p of d) {
          const m = await p.key,
            v = await p.value;
          if (m.status === 'aborted' || v.status === 'aborted') return we;
          ((m.status === 'dirty' || v.status === 'dirty') && i.dirty(), h.set(m.value, v.value));
        }
        return { status: i.value, value: h };
      });
    } else {
      const h = new Map();
      for (const p of d) {
        const m = p.key,
          v = p.value;
        if (m.status === 'aborted' || v.status === 'aborted') return we;
        ((m.status === 'dirty' || v.status === 'dirty') && i.dirty(), h.set(m.value, v.value));
      }
      return { status: i.value, value: h };
    }
  }
}
iu.create = (n, a, i) => new iu({ valueType: a, keyType: n, typeName: _e.ZodMap, ...Re(i) });
class Er extends Ce {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.parsedType !== le.set)
      return (re(s, { code: ee.invalid_type, expected: le.set, received: s.parsedType }), we);
    const o = this._def;
    (o.minSize !== null &&
      s.data.size < o.minSize.value &&
      (re(s, {
        code: ee.too_small,
        minimum: o.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      i.dirty()),
      o.maxSize !== null &&
        s.data.size > o.maxSize.value &&
        (re(s, {
          code: ee.too_big,
          maximum: o.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        i.dirty()));
    const c = this._def.valueType;
    function d(p) {
      const m = new Set();
      for (const v of p) {
        if (v.status === 'aborted') return we;
        (v.status === 'dirty' && i.dirty(), m.add(v.value));
      }
      return { status: i.value, value: m };
    }
    const h = [...s.data.values()].map((p, m) => c._parse(new An(s, p, s.path, m)));
    return s.common.async ? Promise.all(h).then((p) => d(p)) : d(h);
  }
  min(a, i) {
    return new Er({ ...this._def, minSize: { value: a, message: ye.toString(i) } });
  }
  max(a, i) {
    return new Er({ ...this._def, maxSize: { value: a, message: ye.toString(i) } });
  }
  size(a, i) {
    return this.min(a, i).max(a, i);
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
Er.create = (n, a) =>
  new Er({ valueType: n, minSize: null, maxSize: null, typeName: _e.ZodSet, ...Re(a) });
class xi extends Ce {
  constructor() {
    (super(...arguments), (this.validate = this.implement));
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== le.function)
      return (re(i, { code: ee.invalid_type, expected: le.function, received: i.parsedType }), we);
    function s(h, p) {
      return tu({
        data: h,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, eu(), Ti].filter((m) => !!m),
        issueData: { code: ee.invalid_arguments, argumentsError: p },
      });
    }
    function o(h, p) {
      return tu({
        data: h,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, eu(), Ti].filter((m) => !!m),
        issueData: { code: ee.invalid_return_type, returnTypeError: p },
      });
    }
    const c = { errorMap: i.common.contextualErrorMap },
      d = i.data;
    if (this._def.returns instanceof Oi) {
      const h = this;
      return Ct(async function (...p) {
        const m = new Zt([]),
          v = await h._def.args.parseAsync(p, c).catch((w) => {
            throw (m.addIssue(s(p, w)), m);
          }),
          g = await Reflect.apply(d, this, v);
        return await h._def.returns._def.type.parseAsync(g, c).catch((w) => {
          throw (m.addIssue(o(g, w)), m);
        });
      });
    } else {
      const h = this;
      return Ct(function (...p) {
        const m = h._def.args.safeParse(p, c);
        if (!m.success) throw new Zt([s(p, m.error)]);
        const v = Reflect.apply(d, this, m.data),
          g = h._def.returns.safeParse(v, c);
        if (!g.success) throw new Zt([o(v, g.error)]);
        return g.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...a) {
    return new xi({ ...this._def, args: Mn.create(a).rest(gr.create()) });
  }
  returns(a) {
    return new xi({ ...this._def, returns: a });
  }
  implement(a) {
    return this.parse(a);
  }
  strictImplement(a) {
    return this.parse(a);
  }
  static create(a, i, s) {
    return new xi({
      args: a || Mn.create([]).rest(gr.create()),
      returns: i || gr.create(),
      typeName: _e.ZodFunction,
      ...Re(s),
    });
  }
}
class Js extends Ce {
  get schema() {
    return this._def.getter();
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
  }
}
Js.create = (n, a) => new Js({ getter: n, typeName: _e.ZodLazy, ...Re(a) });
class Is extends Ce {
  _parse(a) {
    if (a.data !== this._def.value) {
      const i = this._getOrReturnCtx(a);
      return (re(i, { received: i.data, code: ee.invalid_literal, expected: this._def.value }), we);
    }
    return { status: 'valid', value: a.data };
  }
  get value() {
    return this._def.value;
  }
}
Is.create = (n, a) => new Is({ value: n, typeName: _e.ZodLiteral, ...Re(a) });
function ab(n, a) {
  return new qa({ values: n, typeName: _e.ZodEnum, ...Re(a) });
}
class qa extends Ce {
  constructor() {
    (super(...arguments), Us.set(this, void 0));
  }
  _parse(a) {
    if (typeof a.data != 'string') {
      const i = this._getOrReturnCtx(a),
        s = this._def.values;
      return (
        re(i, { expected: je.joinValues(s), received: i.parsedType, code: ee.invalid_type }),
        we
      );
    }
    if ((nu(this, Us) || I0(this, Us, new Set(this._def.values)), !nu(this, Us).has(a.data))) {
      const i = this._getOrReturnCtx(a),
        s = this._def.values;
      return (re(i, { received: i.data, code: ee.invalid_enum_value, options: s }), we);
    }
    return Ct(a.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  get Values() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  get Enum() {
    const a = {};
    for (const i of this._def.values) a[i] = i;
    return a;
  }
  extract(a, i = this._def) {
    return qa.create(a, { ...this._def, ...i });
  }
  exclude(a, i = this._def) {
    return qa.create(
      this.options.filter((s) => !a.includes(s)),
      { ...this._def, ...i }
    );
  }
}
Us = new WeakMap();
qa.create = ab;
class el extends Ce {
  constructor() {
    (super(...arguments), Bs.set(this, void 0));
  }
  _parse(a) {
    const i = je.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(a);
    if (s.parsedType !== le.string && s.parsedType !== le.number) {
      const o = je.objectValues(i);
      return (
        re(s, { expected: je.joinValues(o), received: s.parsedType, code: ee.invalid_type }),
        we
      );
    }
    if (
      (nu(this, Bs) || I0(this, Bs, new Set(je.getValidEnumValues(this._def.values))),
      !nu(this, Bs).has(a.data))
    ) {
      const o = je.objectValues(i);
      return (re(s, { received: s.data, code: ee.invalid_enum_value, options: o }), we);
    }
    return Ct(a.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bs = new WeakMap();
el.create = (n, a) => new el({ values: n, typeName: _e.ZodNativeEnum, ...Re(a) });
class Oi extends Ce {
  unwrap() {
    return this._def.type;
  }
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    if (i.parsedType !== le.promise && i.common.async === !1)
      return (re(i, { code: ee.invalid_type, expected: le.promise, received: i.parsedType }), we);
    const s = i.parsedType === le.promise ? i.data : Promise.resolve(i.data);
    return Ct(
      s.then((o) =>
        this._def.type.parseAsync(o, { path: i.path, errorMap: i.common.contextualErrorMap })
      )
    );
  }
}
Oi.create = (n, a) => new Oi({ type: n, typeName: _e.ZodPromise, ...Re(a) });
class yn extends Ce {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === _e.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a),
      o = this._def.effect || null,
      c = {
        addIssue: (d) => {
          (re(s, d), d.fatal ? i.abort() : i.dirty());
        },
        get path() {
          return s.path;
        },
      };
    if (((c.addIssue = c.addIssue.bind(c)), o.type === 'preprocess')) {
      const d = o.transform(s.data, c);
      if (s.common.async)
        return Promise.resolve(d).then(async (h) => {
          if (i.value === 'aborted') return we;
          const p = await this._def.schema._parseAsync({ data: h, path: s.path, parent: s });
          return p.status === 'aborted'
            ? we
            : p.status === 'dirty' || i.value === 'dirty'
              ? mi(p.value)
              : p;
        });
      {
        if (i.value === 'aborted') return we;
        const h = this._def.schema._parseSync({ data: d, path: s.path, parent: s });
        return h.status === 'aborted'
          ? we
          : h.status === 'dirty' || i.value === 'dirty'
            ? mi(h.value)
            : h;
      }
    }
    if (o.type === 'refinement') {
      const d = (h) => {
        const p = o.refinement(h, c);
        if (s.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return h;
      };
      if (s.common.async === !1) {
        const h = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return h.status === 'aborted'
          ? we
          : (h.status === 'dirty' && i.dirty(), d(h.value), { status: i.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((h) =>
            h.status === 'aborted'
              ? we
              : (h.status === 'dirty' && i.dirty(),
                d(h.value).then(() => ({ status: i.value, value: h.value })))
          );
    }
    if (o.type === 'transform')
      if (s.common.async === !1) {
        const d = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        if (!_r(d)) return d;
        const h = o.transform(d.value, c);
        if (h instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: i.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((d) =>
            _r(d)
              ? Promise.resolve(o.transform(d.value, c)).then((h) => ({
                  status: i.value,
                  value: h,
                }))
              : d
          );
    je.assertNever(o);
  }
}
yn.create = (n, a, i) => new yn({ schema: n, typeName: _e.ZodEffects, effect: a, ...Re(i) });
yn.createWithPreprocess = (n, a, i) =>
  new yn({
    schema: a,
    effect: { type: 'preprocess', transform: n },
    typeName: _e.ZodEffects,
    ...Re(i),
  });
class Cn extends Ce {
  _parse(a) {
    return this._getType(a) === le.undefined ? Ct(void 0) : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Cn.create = (n, a) => new Cn({ innerType: n, typeName: _e.ZodOptional, ...Re(a) });
class Va extends Ce {
  _parse(a) {
    return this._getType(a) === le.null ? Ct(null) : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Va.create = (n, a) => new Va({ innerType: n, typeName: _e.ZodNullable, ...Re(a) });
class tl extends Ce {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a);
    let s = i.data;
    return (
      i.parsedType === le.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: i.path, parent: i })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
tl.create = (n, a) =>
  new tl({
    innerType: n,
    typeName: _e.ZodDefault,
    defaultValue: typeof a.default == 'function' ? a.default : () => a.default,
    ...Re(a),
  });
class nl extends Ce {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = { ...i, common: { ...i.common, issues: [] } },
      o = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return Qs(o)
      ? o.then((c) => ({
          status: 'valid',
          value:
            c.status === 'valid'
              ? c.value
              : this._def.catchValue({
                  get error() {
                    return new Zt(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Zt(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
nl.create = (n, a) =>
  new nl({
    innerType: n,
    typeName: _e.ZodCatch,
    catchValue: typeof a.catch == 'function' ? a.catch : () => a.catch,
    ...Re(a),
  });
class su extends Ce {
  _parse(a) {
    if (this._getType(a) !== le.nan) {
      const s = this._getOrReturnCtx(a);
      return (re(s, { code: ee.invalid_type, expected: le.nan, received: s.parsedType }), we);
    }
    return { status: 'valid', value: a.data };
  }
}
su.create = (n) => new su({ typeName: _e.ZodNaN, ...Re(n) });
const KC = Symbol('zod_brand');
class sh extends Ce {
  _parse(a) {
    const { ctx: i } = this._processInputParams(a),
      s = i.data;
    return this._def.type._parse({ data: s, path: i.path, parent: i });
  }
  unwrap() {
    return this._def.type;
  }
}
class ul extends Ce {
  _parse(a) {
    const { status: i, ctx: s } = this._processInputParams(a);
    if (s.common.async)
      return (async () => {
        const c = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
        return c.status === 'aborted'
          ? we
          : c.status === 'dirty'
            ? (i.dirty(), mi(c.value))
            : this._def.out._parseAsync({ data: c.value, path: s.path, parent: s });
      })();
    {
      const o = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return o.status === 'aborted'
        ? we
        : o.status === 'dirty'
          ? (i.dirty(), { status: 'dirty', value: o.value })
          : this._def.out._parseSync({ data: o.value, path: s.path, parent: s });
    }
  }
  static create(a, i) {
    return new ul({ in: a, out: i, typeName: _e.ZodPipeline });
  }
}
class al extends Ce {
  _parse(a) {
    const i = this._def.innerType._parse(a),
      s = (o) => (_r(o) && (o.value = Object.freeze(o.value)), o);
    return Qs(i) ? i.then((o) => s(o)) : s(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
al.create = (n, a) => new al({ innerType: n, typeName: _e.ZodReadonly, ...Re(a) });
function rb(n, a = {}, i) {
  return n
    ? Ci.create().superRefine((s, o) => {
        var c, d;
        if (!n(s)) {
          const h = typeof a == 'function' ? a(s) : typeof a == 'string' ? { message: a } : a,
            p =
              (d = (c = h.fatal) !== null && c !== void 0 ? c : i) !== null && d !== void 0
                ? d
                : !0,
            m = typeof h == 'string' ? { message: h } : h;
          o.addIssue({ code: 'custom', ...m, fatal: p });
        }
      })
    : Ci.create();
}
const $C = { object: $e.lazycreate };
var _e;
(function (n) {
  ((n.ZodString = 'ZodString'),
    (n.ZodNumber = 'ZodNumber'),
    (n.ZodNaN = 'ZodNaN'),
    (n.ZodBigInt = 'ZodBigInt'),
    (n.ZodBoolean = 'ZodBoolean'),
    (n.ZodDate = 'ZodDate'),
    (n.ZodSymbol = 'ZodSymbol'),
    (n.ZodUndefined = 'ZodUndefined'),
    (n.ZodNull = 'ZodNull'),
    (n.ZodAny = 'ZodAny'),
    (n.ZodUnknown = 'ZodUnknown'),
    (n.ZodNever = 'ZodNever'),
    (n.ZodVoid = 'ZodVoid'),
    (n.ZodArray = 'ZodArray'),
    (n.ZodObject = 'ZodObject'),
    (n.ZodUnion = 'ZodUnion'),
    (n.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (n.ZodIntersection = 'ZodIntersection'),
    (n.ZodTuple = 'ZodTuple'),
    (n.ZodRecord = 'ZodRecord'),
    (n.ZodMap = 'ZodMap'),
    (n.ZodSet = 'ZodSet'),
    (n.ZodFunction = 'ZodFunction'),
    (n.ZodLazy = 'ZodLazy'),
    (n.ZodLiteral = 'ZodLiteral'),
    (n.ZodEnum = 'ZodEnum'),
    (n.ZodEffects = 'ZodEffects'),
    (n.ZodNativeEnum = 'ZodNativeEnum'),
    (n.ZodOptional = 'ZodOptional'),
    (n.ZodNullable = 'ZodNullable'),
    (n.ZodDefault = 'ZodDefault'),
    (n.ZodCatch = 'ZodCatch'),
    (n.ZodPromise = 'ZodPromise'),
    (n.ZodBranded = 'ZodBranded'),
    (n.ZodPipeline = 'ZodPipeline'),
    (n.ZodReadonly = 'ZodReadonly'));
})(_e || (_e = {}));
const WC = (n, a = { message: `Input not instance of ${n.name}` }) => rb((i) => i instanceof n, a),
  ib = hn.create,
  sb = Ha.create,
  JC = su.create,
  IC = Pa.create,
  lb = Ys.create,
  eO = wr.create,
  tO = au.create,
  nO = Fs.create,
  aO = Xs.create,
  rO = Ci.create,
  iO = gr.create,
  sO = ra.create,
  lO = ru.create,
  oO = mn.create,
  uO = $e.create,
  cO = $e.strictCreate,
  fO = Ks.create,
  dO = gu.create,
  hO = $s.create,
  mO = Mn.create,
  pO = Ws.create,
  vO = iu.create,
  yO = Er.create,
  gO = xi.create,
  bO = Js.create,
  SO = Is.create,
  xO = qa.create,
  _O = el.create,
  wO = Oi.create,
  $y = yn.create,
  EO = Cn.create,
  RO = Va.create,
  TO = yn.createWithPreprocess,
  CO = ul.create,
  OO = () => ib().optional(),
  AO = () => sb().optional(),
  MO = () => lb().optional(),
  DO = {
    string: (n) => hn.create({ ...n, coerce: !0 }),
    number: (n) => Ha.create({ ...n, coerce: !0 }),
    boolean: (n) => Ys.create({ ...n, coerce: !0 }),
    bigint: (n) => Pa.create({ ...n, coerce: !0 }),
    date: (n) => wr.create({ ...n, coerce: !0 }),
  },
  NO = we;
var lu = Object.freeze({
  __proto__: null,
  defaultErrorMap: Ti,
  setErrorMap: TC,
  getErrorMap: eu,
  makeIssue: tu,
  EMPTY_PATH: CC,
  addIssueToContext: re,
  ParseStatus: wt,
  INVALID: we,
  DIRTY: mi,
  OK: Ct,
  isAborted: Cd,
  isDirty: Od,
  isValid: _r,
  isAsync: Qs,
  get util() {
    return je;
  },
  get objectUtil() {
    return Td;
  },
  ZodParsedType: le,
  getParsedType: In,
  ZodType: Ce,
  datetimeRegex: nb,
  ZodString: hn,
  ZodNumber: Ha,
  ZodBigInt: Pa,
  ZodBoolean: Ys,
  ZodDate: wr,
  ZodSymbol: au,
  ZodUndefined: Fs,
  ZodNull: Xs,
  ZodAny: Ci,
  ZodUnknown: gr,
  ZodNever: ra,
  ZodVoid: ru,
  ZodArray: mn,
  ZodObject: $e,
  ZodUnion: Ks,
  ZodDiscriminatedUnion: gu,
  ZodIntersection: $s,
  ZodTuple: Mn,
  ZodRecord: Ws,
  ZodMap: iu,
  ZodSet: Er,
  ZodFunction: xi,
  ZodLazy: Js,
  ZodLiteral: Is,
  ZodEnum: qa,
  ZodNativeEnum: el,
  ZodPromise: Oi,
  ZodEffects: yn,
  ZodTransformer: yn,
  ZodOptional: Cn,
  ZodNullable: Va,
  ZodDefault: tl,
  ZodCatch: nl,
  ZodNaN: su,
  BRAND: KC,
  ZodBranded: sh,
  ZodPipeline: ul,
  ZodReadonly: al,
  custom: rb,
  Schema: Ce,
  ZodSchema: Ce,
  late: $C,
  get ZodFirstPartyTypeKind() {
    return _e;
  },
  coerce: DO,
  any: rO,
  array: oO,
  bigint: IC,
  boolean: lb,
  date: eO,
  discriminatedUnion: dO,
  effect: $y,
  enum: xO,
  function: gO,
  instanceof: WC,
  intersection: hO,
  lazy: bO,
  literal: SO,
  map: vO,
  nan: JC,
  nativeEnum: _O,
  never: sO,
  null: aO,
  nullable: RO,
  number: sb,
  object: uO,
  oboolean: MO,
  onumber: AO,
  optional: EO,
  ostring: OO,
  pipeline: CO,
  preprocess: TO,
  promise: wO,
  record: pO,
  set: yO,
  strictObject: cO,
  string: ib,
  symbol: tO,
  transformer: $y,
  tuple: mO,
  undefined: nO,
  union: fO,
  unknown: iO,
  void: lO,
  NEVER: NO,
  ZodIssueCode: ee,
  quotelessJson: RC,
  ZodError: Zt,
});
const ob = (n) => {
    const a = 'input' in n ? n.input : 'input',
      i = 'output' in n ? n.output : 'output',
      s = 'schema' in n ? n.schema._input : n._input,
      o = 'schema' in n ? n.schema._output : n._output;
    return {
      types: { input: a === 'output' ? o : s, output: i === 'input' ? s : o },
      parse: (c) => ('schema' in n ? n.schema.parse(c) : n.parse(c)),
    };
  },
  kO = () => qd(() => import('./eval._name-Bgd0fcsl.js'), __vite__mapDeps([0, 1])),
  zO = lu.object({ timestamp: lu.string().optional() }),
  ub = kd('/eval/$name')({
    validateSearch: ob(zO),
    loaderDeps: ({ search: { timestamp: n } }) => ({ timestamp: n }),
    loader: async ({ context: n, params: a, deps: i }) => {
      const { queryClient: s } = n;
      await Promise.all([s.ensureQueryData(yC(a.name, i.timestamp)), s.ensureQueryData(ol)]);
    },
    component: jd(kO, 'component', () => ub.ssr),
  }),
  jO = () =>
    qd(() => import('./eval._name.result._resultIndex-OH78vbsQ.js'), __vite__mapDeps([2, 1])),
  LO = lu.object({ trace: lu.number().optional() }),
  cb = kd('/eval/$name/result/$resultIndex')({
    validateSearch: ob(LO),
    loaderDeps: ({ search: n }) => ({ timestamp: n.timestamp }),
    loader: async ({ params: n, deps: a, context: i }) => {
      const { queryClient: s } = i;
      await Promise.all([
        s.ensureQueryData(
          gC({ evalName: n.name, resultIndex: n.resultIndex, evalTimestamp: a.timestamp ?? null })
        ),
        s.ensureQueryData(ol),
      ]);
    },
    component: jd(jO, 'component', () => cb.ssr),
  }),
  UO = W0.update({ id: '/$', path: '/$', getParentRoute: () => ih }),
  fb = ub.update({ id: '/eval/$name', path: '/eval/$name', getParentRoute: () => ih }),
  BO = cb.update({
    id: '/result/$resultIndex',
    path: '/result/$resultIndex',
    getParentRoute: () => fb,
  }),
  HO = { EvalNameResultResultIndexRoute: BO },
  PO = fb._addFileChildren(HO),
  qO = { SplatRoute: UO, EvalNameRoute: PO },
  VO = ih._addFileChildren(qO)._addFileTypes(),
  ZO = () => {
    const n = new S1({ defaultOptions: { queries: { staleTime: 1 / 0 } } }),
      a = window.__EVALITE_STATIC_DATA__?.basePath ?? void 0;
    return e1({
      routeTree: VO,
      scrollRestoration: !0,
      context: { queryClient: n },
      defaultPreloadStaleTime: 0,
      basepath: a,
      Wrap: ({ children: s }) => C.jsx(R1, { client: n, children: s }),
      defaultNotFoundComponent: () =>
        C.jsxs('div', {
          className: 'flex flex-col h-full w-full items-center justify-center mt-12',
          children: [
            C.jsx('h1', {
              className: 'text-3xl font-bold text-foreground/80 mb-3',
              children: '404: Eval Not Found',
            }),
            C.jsx('p', {
              className: 'text-lg text-foreground/60 text-center max-w-xs',
              children: "The page you're looking for has already achieved AGI.",
            }),
          ],
        }),
    });
  },
  GO = ZO(),
  Wy = document.getElementById('root');
Wy.innerHTML ||
  qx.createRoot(Wy).render(C.jsx(_.StrictMode, { children: C.jsx(a1, { router: GO }) }));
export {
  qw as B,
  X1 as C,
  J_ as L,
  zd as O,
  Nt as P,
  Po as R,
  WO as S,
  Og as a,
  Ve as b,
  QO as c,
  ub as d,
  yC as e,
  ol as f,
  Jy as g,
  $_ as h,
  ea as i,
  C as j,
  Hg as k,
  Pg as l,
  Za as m,
  cb as n,
  gC as o,
  IO as p,
  il as q,
  _ as r,
  JO as s,
  H1 as u,
};
