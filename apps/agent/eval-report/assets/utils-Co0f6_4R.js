import {
  m as It,
  r as X,
  j as R,
  P as lo,
  b as at,
  g as vn,
  R as B,
  B as cn,
  s as Lt,
  p as so,
  q as uo,
} from './index-7qPgmO9R.js';
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const co = It('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fo = It('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ho = It('CircleAlert', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const po = It('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
var mo = 'Separator',
  Kn = 'horizontal',
  bo = ['horizontal', 'vertical'],
  wi = X.forwardRef((e, t) => {
    const { decorative: n, orientation: r = Kn, ...i } = e,
      o = go(r) ? r : Kn,
      l = n
        ? { role: 'none' }
        : { 'aria-orientation': o === 'vertical' ? o : void 0, role: 'separator' };
    return R.jsx(lo.div, { 'data-orientation': o, ...l, ...i, ref: t });
  });
wi.displayName = mo;
function go(e) {
  return bo.includes(e);
}
var yo = wi;
function xb({ className: e, orientation: t = 'horizontal', decorative: n = !0, ...r }) {
  return R.jsx(yo, {
    'data-slot': 'separator',
    decorative: n,
    orientation: t,
    className: at(
      'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
      e
    ),
    ...r,
  });
}
const kb = (e) =>
    X.useMemo(() => {
      const t = e.type === 'running' ? new Set(e.filepaths) : new Set();
      return {
        isRunningFilepath: (i) => t.has(i) && e.type === 'running',
        isRunningEvalName: (i) => e.type === 'running' && e.evalNamesRunning.includes(i),
      };
    }, [e]),
  xo = (e, t) => e.reduce((n, r) => n + (t(r) || 0), 0),
  wb = (e, t) => xo(e, t) / e.length,
  ko = (e) => typeof e == 'object' && e !== null && '__EvaliteFile' in e && e.__EvaliteFile === !0,
  wo = { fromPath: (e) => ({ __EvaliteFile: !0, path: e }), isEvaliteFile: ko };
var Rt = { exports: {} },
  Ot,
  Qn;
function vi() {
  return (
    Qn ||
      ((Qn = 1),
      (Ot = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      })),
    Ot
  );
}
var Mt = { exports: {} },
  Nt,
  Zn;
function vo() {
  return (
    Zn ||
      ((Zn = 1),
      (Nt = function (t) {
        return !t || typeof t == 'string'
          ? !1
          : t instanceof Array ||
              Array.isArray(t) ||
              (t.length >= 0 &&
                (t.splice instanceof Function ||
                  (Object.getOwnPropertyDescriptor(t, t.length - 1) &&
                    t.constructor.name !== 'String')));
      })),
    Nt
  );
}
var er;
function Co() {
  if (er) return Mt.exports;
  er = 1;
  var e = vo(),
    t = Array.prototype.concat,
    n = Array.prototype.slice,
    r = (Mt.exports = function (o) {
      for (var a = [], l = 0, s = o.length; l < s; l++) {
        var u = o[l];
        e(u) ? (a = t.call(a, n.call(u))) : a.push(u);
      }
      return a;
    });
  return (
    (r.wrap = function (i) {
      return function () {
        return i(r(arguments));
      };
    }),
    Mt.exports
  );
}
var tr;
function So() {
  if (tr) return Rt.exports;
  tr = 1;
  var e = vi(),
    t = Co(),
    n = Object.hasOwnProperty,
    r = Object.create(null);
  for (var i in e) n.call(e, i) && (r[e[i]] = i);
  var o = (Rt.exports = { to: {}, get: {} });
  ((o.get = function (s) {
    var u = s.substring(0, 3).toLowerCase(),
      f,
      c;
    switch (u) {
      case 'hsl':
        ((f = o.get.hsl(s)), (c = 'hsl'));
        break;
      case 'hwb':
        ((f = o.get.hwb(s)), (c = 'hwb'));
        break;
      default:
        ((f = o.get.rgb(s)), (c = 'rgb'));
        break;
    }
    return f ? { model: c, value: f } : null;
  }),
    (o.get.rgb = function (s) {
      if (!s) return null;
      var u = /^#([a-f0-9]{3,4})$/i,
        f = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
        c =
          /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        h =
          /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        p = /^(\w+)$/,
        d = [0, 0, 0, 1],
        m,
        y,
        x;
      if ((m = s.match(f))) {
        for (x = m[2], m = m[1], y = 0; y < 3; y++) {
          var k = y * 2;
          d[y] = parseInt(m.slice(k, k + 2), 16);
        }
        x && (d[3] = parseInt(x, 16) / 255);
      } else if ((m = s.match(u))) {
        for (m = m[1], x = m[3], y = 0; y < 3; y++) d[y] = parseInt(m[y] + m[y], 16);
        x && (d[3] = parseInt(x + x, 16) / 255);
      } else if ((m = s.match(c))) {
        for (y = 0; y < 3; y++) d[y] = parseInt(m[y + 1], 0);
        m[4] && (m[5] ? (d[3] = parseFloat(m[4]) * 0.01) : (d[3] = parseFloat(m[4])));
      } else if ((m = s.match(h))) {
        for (y = 0; y < 3; y++) d[y] = Math.round(parseFloat(m[y + 1]) * 2.55);
        m[4] && (m[5] ? (d[3] = parseFloat(m[4]) * 0.01) : (d[3] = parseFloat(m[4])));
      } else
        return (m = s.match(p))
          ? m[1] === 'transparent'
            ? [0, 0, 0, 0]
            : n.call(e, m[1])
              ? ((d = e[m[1]]), (d[3] = 1), d)
              : null
          : null;
      for (y = 0; y < 3; y++) d[y] = a(d[y], 0, 255);
      return ((d[3] = a(d[3], 0, 1)), d);
    }),
    (o.get.hsl = function (s) {
      if (!s) return null;
      var u =
          /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        f = s.match(u);
      if (f) {
        var c = parseFloat(f[4]),
          h = ((parseFloat(f[1]) % 360) + 360) % 360,
          p = a(parseFloat(f[2]), 0, 100),
          d = a(parseFloat(f[3]), 0, 100),
          m = a(isNaN(c) ? 1 : c, 0, 1);
        return [h, p, d, m];
      }
      return null;
    }),
    (o.get.hwb = function (s) {
      if (!s) return null;
      var u =
          /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        f = s.match(u);
      if (f) {
        var c = parseFloat(f[4]),
          h = ((parseFloat(f[1]) % 360) + 360) % 360,
          p = a(parseFloat(f[2]), 0, 100),
          d = a(parseFloat(f[3]), 0, 100),
          m = a(isNaN(c) ? 1 : c, 0, 1);
        return [h, p, d, m];
      }
      return null;
    }),
    (o.to.hex = function () {
      var s = t(arguments);
      return '#' + l(s[0]) + l(s[1]) + l(s[2]) + (s[3] < 1 ? l(Math.round(s[3] * 255)) : '');
    }),
    (o.to.rgb = function () {
      var s = t(arguments);
      return s.length < 4 || s[3] === 1
        ? 'rgb(' + Math.round(s[0]) + ', ' + Math.round(s[1]) + ', ' + Math.round(s[2]) + ')'
        : 'rgba(' +
            Math.round(s[0]) +
            ', ' +
            Math.round(s[1]) +
            ', ' +
            Math.round(s[2]) +
            ', ' +
            s[3] +
            ')';
    }),
    (o.to.rgb.percent = function () {
      var s = t(arguments),
        u = Math.round((s[0] / 255) * 100),
        f = Math.round((s[1] / 255) * 100),
        c = Math.round((s[2] / 255) * 100);
      return s.length < 4 || s[3] === 1
        ? 'rgb(' + u + '%, ' + f + '%, ' + c + '%)'
        : 'rgba(' + u + '%, ' + f + '%, ' + c + '%, ' + s[3] + ')';
    }),
    (o.to.hsl = function () {
      var s = t(arguments);
      return s.length < 4 || s[3] === 1
        ? 'hsl(' + s[0] + ', ' + s[1] + '%, ' + s[2] + '%)'
        : 'hsla(' + s[0] + ', ' + s[1] + '%, ' + s[2] + '%, ' + s[3] + ')';
    }),
    (o.to.hwb = function () {
      var s = t(arguments),
        u = '';
      return (
        s.length >= 4 && s[3] !== 1 && (u = ', ' + s[3]),
        'hwb(' + s[0] + ', ' + s[1] + '%, ' + s[2] + '%' + u + ')'
      );
    }),
    (o.to.keyword = function (s) {
      return r[s.slice(0, 3)];
    }));
  function a(s, u, f) {
    return Math.min(Math.max(u, s), f);
  }
  function l(s) {
    var u = Math.round(s).toString(16).toUpperCase();
    return u.length < 2 ? '0' + u : u;
  }
  return Rt.exports;
}
var zt, nr;
function Ci() {
  if (nr) return zt;
  nr = 1;
  const e = vi(),
    t = {};
  for (const i of Object.keys(e)) t[e[i]] = i;
  const n = {
    rgb: { channels: 3, labels: 'rgb' },
    hsl: { channels: 3, labels: 'hsl' },
    hsv: { channels: 3, labels: 'hsv' },
    hwb: { channels: 3, labels: 'hwb' },
    cmyk: { channels: 4, labels: 'cmyk' },
    xyz: { channels: 3, labels: 'xyz' },
    lab: { channels: 3, labels: 'lab' },
    lch: { channels: 3, labels: 'lch' },
    hex: { channels: 1, labels: ['hex'] },
    keyword: { channels: 1, labels: ['keyword'] },
    ansi16: { channels: 1, labels: ['ansi16'] },
    ansi256: { channels: 1, labels: ['ansi256'] },
    hcg: { channels: 3, labels: ['h', 'c', 'g'] },
    apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
    gray: { channels: 1, labels: ['gray'] },
  };
  zt = n;
  for (const i of Object.keys(n)) {
    if (!('channels' in n[i])) throw new Error('missing channels property: ' + i);
    if (!('labels' in n[i])) throw new Error('missing channel labels property: ' + i);
    if (n[i].labels.length !== n[i].channels)
      throw new Error('channel and label counts mismatch: ' + i);
    const { channels: o, labels: a } = n[i];
    (delete n[i].channels,
      delete n[i].labels,
      Object.defineProperty(n[i], 'channels', { value: o }),
      Object.defineProperty(n[i], 'labels', { value: a }));
  }
  ((n.rgb.hsl = function (i) {
    const o = i[0] / 255,
      a = i[1] / 255,
      l = i[2] / 255,
      s = Math.min(o, a, l),
      u = Math.max(o, a, l),
      f = u - s;
    let c, h;
    (u === s
      ? (c = 0)
      : o === u
        ? (c = (a - l) / f)
        : a === u
          ? (c = 2 + (l - o) / f)
          : l === u && (c = 4 + (o - a) / f),
      (c = Math.min(c * 60, 360)),
      c < 0 && (c += 360));
    const p = (s + u) / 2;
    return (
      u === s ? (h = 0) : p <= 0.5 ? (h = f / (u + s)) : (h = f / (2 - u - s)),
      [c, h * 100, p * 100]
    );
  }),
    (n.rgb.hsv = function (i) {
      let o, a, l, s, u;
      const f = i[0] / 255,
        c = i[1] / 255,
        h = i[2] / 255,
        p = Math.max(f, c, h),
        d = p - Math.min(f, c, h),
        m = function (y) {
          return (p - y) / 6 / d + 1 / 2;
        };
      return (
        d === 0
          ? ((s = 0), (u = 0))
          : ((u = d / p),
            (o = m(f)),
            (a = m(c)),
            (l = m(h)),
            f === p ? (s = l - a) : c === p ? (s = 1 / 3 + o - l) : h === p && (s = 2 / 3 + a - o),
            s < 0 ? (s += 1) : s > 1 && (s -= 1)),
        [s * 360, u * 100, p * 100]
      );
    }),
    (n.rgb.hwb = function (i) {
      const o = i[0],
        a = i[1];
      let l = i[2];
      const s = n.rgb.hsl(i)[0],
        u = (1 / 255) * Math.min(o, Math.min(a, l));
      return ((l = 1 - (1 / 255) * Math.max(o, Math.max(a, l))), [s, u * 100, l * 100]);
    }),
    (n.rgb.cmyk = function (i) {
      const o = i[0] / 255,
        a = i[1] / 255,
        l = i[2] / 255,
        s = Math.min(1 - o, 1 - a, 1 - l),
        u = (1 - o - s) / (1 - s) || 0,
        f = (1 - a - s) / (1 - s) || 0,
        c = (1 - l - s) / (1 - s) || 0;
      return [u * 100, f * 100, c * 100, s * 100];
    }));
  function r(i, o) {
    return (i[0] - o[0]) ** 2 + (i[1] - o[1]) ** 2 + (i[2] - o[2]) ** 2;
  }
  return (
    (n.rgb.keyword = function (i) {
      const o = t[i];
      if (o) return o;
      let a = 1 / 0,
        l;
      for (const s of Object.keys(e)) {
        const u = e[s],
          f = r(i, u);
        f < a && ((a = f), (l = s));
      }
      return l;
    }),
    (n.keyword.rgb = function (i) {
      return e[i];
    }),
    (n.rgb.xyz = function (i) {
      let o = i[0] / 255,
        a = i[1] / 255,
        l = i[2] / 255;
      ((o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92),
        (a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92),
        (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92));
      const s = o * 0.4124 + a * 0.3576 + l * 0.1805,
        u = o * 0.2126 + a * 0.7152 + l * 0.0722,
        f = o * 0.0193 + a * 0.1192 + l * 0.9505;
      return [s * 100, u * 100, f * 100];
    }),
    (n.rgb.lab = function (i) {
      const o = n.rgb.xyz(i);
      let a = o[0],
        l = o[1],
        s = o[2];
      ((a /= 95.047),
        (l /= 100),
        (s /= 108.883),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
        (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
        (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116));
      const u = 116 * l - 16,
        f = 500 * (a - l),
        c = 200 * (l - s);
      return [u, f, c];
    }),
    (n.hsl.rgb = function (i) {
      const o = i[0] / 360,
        a = i[1] / 100,
        l = i[2] / 100;
      let s, u, f;
      if (a === 0) return ((f = l * 255), [f, f, f]);
      l < 0.5 ? (s = l * (1 + a)) : (s = l + a - l * a);
      const c = 2 * l - s,
        h = [0, 0, 0];
      for (let p = 0; p < 3; p++)
        ((u = o + (1 / 3) * -(p - 1)),
          u < 0 && u++,
          u > 1 && u--,
          6 * u < 1
            ? (f = c + (s - c) * 6 * u)
            : 2 * u < 1
              ? (f = s)
              : 3 * u < 2
                ? (f = c + (s - c) * (2 / 3 - u) * 6)
                : (f = c),
          (h[p] = f * 255));
      return h;
    }),
    (n.hsl.hsv = function (i) {
      const o = i[0];
      let a = i[1] / 100,
        l = i[2] / 100,
        s = a;
      const u = Math.max(l, 0.01);
      ((l *= 2), (a *= l <= 1 ? l : 2 - l), (s *= u <= 1 ? u : 2 - u));
      const f = (l + a) / 2,
        c = l === 0 ? (2 * s) / (u + s) : (2 * a) / (l + a);
      return [o, c * 100, f * 100];
    }),
    (n.hsv.rgb = function (i) {
      const o = i[0] / 60,
        a = i[1] / 100;
      let l = i[2] / 100;
      const s = Math.floor(o) % 6,
        u = o - Math.floor(o),
        f = 255 * l * (1 - a),
        c = 255 * l * (1 - a * u),
        h = 255 * l * (1 - a * (1 - u));
      switch (((l *= 255), s)) {
        case 0:
          return [l, h, f];
        case 1:
          return [c, l, f];
        case 2:
          return [f, l, h];
        case 3:
          return [f, c, l];
        case 4:
          return [h, f, l];
        case 5:
          return [l, f, c];
      }
    }),
    (n.hsv.hsl = function (i) {
      const o = i[0],
        a = i[1] / 100,
        l = i[2] / 100,
        s = Math.max(l, 0.01);
      let u, f;
      f = (2 - a) * l;
      const c = (2 - a) * s;
      return (
        (u = a * s),
        (u /= c <= 1 ? c : 2 - c),
        (u = u || 0),
        (f /= 2),
        [o, u * 100, f * 100]
      );
    }),
    (n.hwb.rgb = function (i) {
      const o = i[0] / 360;
      let a = i[1] / 100,
        l = i[2] / 100;
      const s = a + l;
      let u;
      s > 1 && ((a /= s), (l /= s));
      const f = Math.floor(6 * o),
        c = 1 - l;
      ((u = 6 * o - f), (f & 1) !== 0 && (u = 1 - u));
      const h = a + u * (c - a);
      let p, d, m;
      switch (f) {
        default:
        case 6:
        case 0:
          ((p = c), (d = h), (m = a));
          break;
        case 1:
          ((p = h), (d = c), (m = a));
          break;
        case 2:
          ((p = a), (d = c), (m = h));
          break;
        case 3:
          ((p = a), (d = h), (m = c));
          break;
        case 4:
          ((p = h), (d = a), (m = c));
          break;
        case 5:
          ((p = c), (d = a), (m = h));
          break;
      }
      return [p * 255, d * 255, m * 255];
    }),
    (n.cmyk.rgb = function (i) {
      const o = i[0] / 100,
        a = i[1] / 100,
        l = i[2] / 100,
        s = i[3] / 100,
        u = 1 - Math.min(1, o * (1 - s) + s),
        f = 1 - Math.min(1, a * (1 - s) + s),
        c = 1 - Math.min(1, l * (1 - s) + s);
      return [u * 255, f * 255, c * 255];
    }),
    (n.xyz.rgb = function (i) {
      const o = i[0] / 100,
        a = i[1] / 100,
        l = i[2] / 100;
      let s, u, f;
      return (
        (s = o * 3.2406 + a * -1.5372 + l * -0.4986),
        (u = o * -0.9689 + a * 1.8758 + l * 0.0415),
        (f = o * 0.0557 + a * -0.204 + l * 1.057),
        (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92),
        (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
        (f = f > 0.0031308 ? 1.055 * f ** (1 / 2.4) - 0.055 : f * 12.92),
        (s = Math.min(Math.max(0, s), 1)),
        (u = Math.min(Math.max(0, u), 1)),
        (f = Math.min(Math.max(0, f), 1)),
        [s * 255, u * 255, f * 255]
      );
    }),
    (n.xyz.lab = function (i) {
      let o = i[0],
        a = i[1],
        l = i[2];
      ((o /= 95.047),
        (a /= 100),
        (l /= 108.883),
        (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
        (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116));
      const s = 116 * a - 16,
        u = 500 * (o - a),
        f = 200 * (a - l);
      return [s, u, f];
    }),
    (n.lab.xyz = function (i) {
      const o = i[0],
        a = i[1],
        l = i[2];
      let s, u, f;
      ((u = (o + 16) / 116), (s = a / 500 + u), (f = u - l / 200));
      const c = u ** 3,
        h = s ** 3,
        p = f ** 3;
      return (
        (u = c > 0.008856 ? c : (u - 16 / 116) / 7.787),
        (s = h > 0.008856 ? h : (s - 16 / 116) / 7.787),
        (f = p > 0.008856 ? p : (f - 16 / 116) / 7.787),
        (s *= 95.047),
        (u *= 100),
        (f *= 108.883),
        [s, u, f]
      );
    }),
    (n.lab.lch = function (i) {
      const o = i[0],
        a = i[1],
        l = i[2];
      let s;
      ((s = (Math.atan2(l, a) * 360) / 2 / Math.PI), s < 0 && (s += 360));
      const f = Math.sqrt(a * a + l * l);
      return [o, f, s];
    }),
    (n.lch.lab = function (i) {
      const o = i[0],
        a = i[1],
        s = (i[2] / 360) * 2 * Math.PI,
        u = a * Math.cos(s),
        f = a * Math.sin(s);
      return [o, u, f];
    }),
    (n.rgb.ansi16 = function (i, o = null) {
      const [a, l, s] = i;
      let u = o === null ? n.rgb.hsv(i)[2] : o;
      if (((u = Math.round(u / 50)), u === 0)) return 30;
      let f = 30 + ((Math.round(s / 255) << 2) | (Math.round(l / 255) << 1) | Math.round(a / 255));
      return (u === 2 && (f += 60), f);
    }),
    (n.hsv.ansi16 = function (i) {
      return n.rgb.ansi16(n.hsv.rgb(i), i[2]);
    }),
    (n.rgb.ansi256 = function (i) {
      const o = i[0],
        a = i[1],
        l = i[2];
      return o === a && a === l
        ? o < 8
          ? 16
          : o > 248
            ? 231
            : Math.round(((o - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((o / 255) * 5) +
            6 * Math.round((a / 255) * 5) +
            Math.round((l / 255) * 5);
    }),
    (n.ansi16.rgb = function (i) {
      let o = i % 10;
      if (o === 0 || o === 7) return (i > 50 && (o += 3.5), (o = (o / 10.5) * 255), [o, o, o]);
      const a = (~~(i > 50) + 1) * 0.5,
        l = (o & 1) * a * 255,
        s = ((o >> 1) & 1) * a * 255,
        u = ((o >> 2) & 1) * a * 255;
      return [l, s, u];
    }),
    (n.ansi256.rgb = function (i) {
      if (i >= 232) {
        const u = (i - 232) * 10 + 8;
        return [u, u, u];
      }
      i -= 16;
      let o;
      const a = (Math.floor(i / 36) / 5) * 255,
        l = (Math.floor((o = i % 36) / 6) / 5) * 255,
        s = ((o % 6) / 5) * 255;
      return [a, l, s];
    }),
    (n.rgb.hex = function (i) {
      const a = (
        ((Math.round(i[0]) & 255) << 16) +
        ((Math.round(i[1]) & 255) << 8) +
        (Math.round(i[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return '000000'.substring(a.length) + a;
    }),
    (n.hex.rgb = function (i) {
      const o = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!o) return [0, 0, 0];
      let a = o[0];
      o[0].length === 3 &&
        (a = a
          .split('')
          .map((c) => c + c)
          .join(''));
      const l = parseInt(a, 16),
        s = (l >> 16) & 255,
        u = (l >> 8) & 255,
        f = l & 255;
      return [s, u, f];
    }),
    (n.rgb.hcg = function (i) {
      const o = i[0] / 255,
        a = i[1] / 255,
        l = i[2] / 255,
        s = Math.max(Math.max(o, a), l),
        u = Math.min(Math.min(o, a), l),
        f = s - u;
      let c, h;
      return (
        f < 1 ? (c = u / (1 - f)) : (c = 0),
        f <= 0
          ? (h = 0)
          : s === o
            ? (h = ((a - l) / f) % 6)
            : s === a
              ? (h = 2 + (l - o) / f)
              : (h = 4 + (o - a) / f),
        (h /= 6),
        (h %= 1),
        [h * 360, f * 100, c * 100]
      );
    }),
    (n.hsl.hcg = function (i) {
      const o = i[1] / 100,
        a = i[2] / 100,
        l = a < 0.5 ? 2 * o * a : 2 * o * (1 - a);
      let s = 0;
      return (l < 1 && (s = (a - 0.5 * l) / (1 - l)), [i[0], l * 100, s * 100]);
    }),
    (n.hsv.hcg = function (i) {
      const o = i[1] / 100,
        a = i[2] / 100,
        l = o * a;
      let s = 0;
      return (l < 1 && (s = (a - l) / (1 - l)), [i[0], l * 100, s * 100]);
    }),
    (n.hcg.rgb = function (i) {
      const o = i[0] / 360,
        a = i[1] / 100,
        l = i[2] / 100;
      if (a === 0) return [l * 255, l * 255, l * 255];
      const s = [0, 0, 0],
        u = (o % 1) * 6,
        f = u % 1,
        c = 1 - f;
      let h = 0;
      switch (Math.floor(u)) {
        case 0:
          ((s[0] = 1), (s[1] = f), (s[2] = 0));
          break;
        case 1:
          ((s[0] = c), (s[1] = 1), (s[2] = 0));
          break;
        case 2:
          ((s[0] = 0), (s[1] = 1), (s[2] = f));
          break;
        case 3:
          ((s[0] = 0), (s[1] = c), (s[2] = 1));
          break;
        case 4:
          ((s[0] = f), (s[1] = 0), (s[2] = 1));
          break;
        default:
          ((s[0] = 1), (s[1] = 0), (s[2] = c));
      }
      return (
        (h = (1 - a) * l),
        [(a * s[0] + h) * 255, (a * s[1] + h) * 255, (a * s[2] + h) * 255]
      );
    }),
    (n.hcg.hsv = function (i) {
      const o = i[1] / 100,
        a = i[2] / 100,
        l = o + a * (1 - o);
      let s = 0;
      return (l > 0 && (s = o / l), [i[0], s * 100, l * 100]);
    }),
    (n.hcg.hsl = function (i) {
      const o = i[1] / 100,
        l = (i[2] / 100) * (1 - o) + 0.5 * o;
      let s = 0;
      return (
        l > 0 && l < 0.5 ? (s = o / (2 * l)) : l >= 0.5 && l < 1 && (s = o / (2 * (1 - l))),
        [i[0], s * 100, l * 100]
      );
    }),
    (n.hcg.hwb = function (i) {
      const o = i[1] / 100,
        a = i[2] / 100,
        l = o + a * (1 - o);
      return [i[0], (l - o) * 100, (1 - l) * 100];
    }),
    (n.hwb.hcg = function (i) {
      const o = i[1] / 100,
        l = 1 - i[2] / 100,
        s = l - o;
      let u = 0;
      return (s < 1 && (u = (l - s) / (1 - s)), [i[0], s * 100, u * 100]);
    }),
    (n.apple.rgb = function (i) {
      return [(i[0] / 65535) * 255, (i[1] / 65535) * 255, (i[2] / 65535) * 255];
    }),
    (n.rgb.apple = function (i) {
      return [(i[0] / 255) * 65535, (i[1] / 255) * 65535, (i[2] / 255) * 65535];
    }),
    (n.gray.rgb = function (i) {
      return [(i[0] / 100) * 255, (i[0] / 100) * 255, (i[0] / 100) * 255];
    }),
    (n.gray.hsl = function (i) {
      return [0, 0, i[0]];
    }),
    (n.gray.hsv = n.gray.hsl),
    (n.gray.hwb = function (i) {
      return [0, 100, i[0]];
    }),
    (n.gray.cmyk = function (i) {
      return [0, 0, 0, i[0]];
    }),
    (n.gray.lab = function (i) {
      return [i[0], 0, 0];
    }),
    (n.gray.hex = function (i) {
      const o = Math.round((i[0] / 100) * 255) & 255,
        l = ((o << 16) + (o << 8) + o).toString(16).toUpperCase();
      return '000000'.substring(l.length) + l;
    }),
    (n.rgb.gray = function (i) {
      return [((i[0] + i[1] + i[2]) / 3 / 255) * 100];
    }),
    zt
  );
}
var Bt, rr;
function Eo() {
  if (rr) return Bt;
  rr = 1;
  const e = Ci();
  function t() {
    const o = {},
      a = Object.keys(e);
    for (let l = a.length, s = 0; s < l; s++) o[a[s]] = { distance: -1, parent: null };
    return o;
  }
  function n(o) {
    const a = t(),
      l = [o];
    for (a[o].distance = 0; l.length; ) {
      const s = l.pop(),
        u = Object.keys(e[s]);
      for (let f = u.length, c = 0; c < f; c++) {
        const h = u[c],
          p = a[h];
        p.distance === -1 && ((p.distance = a[s].distance + 1), (p.parent = s), l.unshift(h));
      }
    }
    return a;
  }
  function r(o, a) {
    return function (l) {
      return a(o(l));
    };
  }
  function i(o, a) {
    const l = [a[o].parent, o];
    let s = e[a[o].parent][o],
      u = a[o].parent;
    for (; a[u].parent; )
      (l.unshift(a[u].parent), (s = r(e[a[u].parent][u], s)), (u = a[u].parent));
    return ((s.conversion = l), s);
  }
  return (
    (Bt = function (o) {
      const a = n(o),
        l = {},
        s = Object.keys(a);
      for (let u = s.length, f = 0; f < u; f++) {
        const c = s[f];
        a[c].parent !== null && (l[c] = i(c, a));
      }
      return l;
    }),
    Bt
  );
}
var jt, ir;
function Ao() {
  if (ir) return jt;
  ir = 1;
  const e = Ci(),
    t = Eo(),
    n = {},
    r = Object.keys(e);
  function i(a) {
    const l = function (...s) {
      const u = s[0];
      return u == null ? u : (u.length > 1 && (s = u), a(s));
    };
    return ('conversion' in a && (l.conversion = a.conversion), l);
  }
  function o(a) {
    const l = function (...s) {
      const u = s[0];
      if (u == null) return u;
      u.length > 1 && (s = u);
      const f = a(s);
      if (typeof f == 'object') for (let c = f.length, h = 0; h < c; h++) f[h] = Math.round(f[h]);
      return f;
    };
    return ('conversion' in a && (l.conversion = a.conversion), l);
  }
  return (
    r.forEach((a) => {
      ((n[a] = {}),
        Object.defineProperty(n[a], 'channels', { value: e[a].channels }),
        Object.defineProperty(n[a], 'labels', { value: e[a].labels }));
      const l = t(a);
      Object.keys(l).forEach((u) => {
        const f = l[u];
        ((n[a][u] = o(f)), (n[a][u].raw = i(f)));
      });
    }),
    (jt = n),
    jt
  );
}
var $t, ar;
function Io() {
  if (ar) return $t;
  ar = 1;
  const e = So(),
    t = Ao(),
    n = ['keyword', 'gray', 'hex'],
    r = {};
  for (const h of Object.keys(t)) r[[...t[h].labels].sort().join('')] = h;
  const i = {};
  function o(h, p) {
    if (!(this instanceof o)) return new o(h, p);
    if ((p && p in n && (p = null), p && !(p in t))) throw new Error('Unknown model: ' + p);
    let d, m;
    if (h == null) ((this.model = 'rgb'), (this.color = [0, 0, 0]), (this.valpha = 1));
    else if (h instanceof o)
      ((this.model = h.model), (this.color = [...h.color]), (this.valpha = h.valpha));
    else if (typeof h == 'string') {
      const y = e.get(h);
      if (y === null) throw new Error('Unable to parse color from string: ' + h);
      ((this.model = y.model),
        (m = t[this.model].channels),
        (this.color = y.value.slice(0, m)),
        (this.valpha = typeof y.value[m] == 'number' ? y.value[m] : 1));
    } else if (h.length > 0) {
      ((this.model = p || 'rgb'), (m = t[this.model].channels));
      const y = Array.prototype.slice.call(h, 0, m);
      ((this.color = c(y, m)), (this.valpha = typeof h[m] == 'number' ? h[m] : 1));
    } else if (typeof h == 'number')
      ((this.model = 'rgb'),
        (this.color = [(h >> 16) & 255, (h >> 8) & 255, h & 255]),
        (this.valpha = 1));
    else {
      this.valpha = 1;
      const y = Object.keys(h);
      'alpha' in h &&
        (y.splice(y.indexOf('alpha'), 1), (this.valpha = typeof h.alpha == 'number' ? h.alpha : 0));
      const x = y.sort().join('');
      if (!(x in r)) throw new Error('Unable to parse color from object: ' + JSON.stringify(h));
      this.model = r[x];
      const { labels: k } = t[this.model],
        S = [];
      for (d = 0; d < k.length; d++) S.push(h[k[d]]);
      this.color = c(S);
    }
    if (i[this.model])
      for (m = t[this.model].channels, d = 0; d < m; d++) {
        const y = i[this.model][d];
        y && (this.color[d] = y(this.color[d]));
      }
    ((this.valpha = Math.max(0, Math.min(1, this.valpha))), Object.freeze && Object.freeze(this));
  }
  o.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(h) {
      let p = this.model in e.to ? this : this.rgb();
      p = p.round(typeof h == 'number' ? h : 1);
      const d = p.valpha === 1 ? p.color : [...p.color, this.valpha];
      return e.to[p.model](d);
    },
    percentString(h) {
      const p = this.rgb().round(typeof h == 'number' ? h : 1),
        d = p.valpha === 1 ? p.color : [...p.color, this.valpha];
      return e.to.rgb.percent(d);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const h = {},
        { channels: p } = t[this.model],
        { labels: d } = t[this.model];
      for (let m = 0; m < p; m++) h[d[m]] = this.color[m];
      return (this.valpha !== 1 && (h.alpha = this.valpha), h);
    },
    unitArray() {
      const h = this.rgb().color;
      return (
        (h[0] /= 255),
        (h[1] /= 255),
        (h[2] /= 255),
        this.valpha !== 1 && h.push(this.valpha),
        h
      );
    },
    unitObject() {
      const h = this.rgb().object();
      return (
        (h.r /= 255),
        (h.g /= 255),
        (h.b /= 255),
        this.valpha !== 1 && (h.alpha = this.valpha),
        h
      );
    },
    round(h) {
      return ((h = Math.max(h || 0, 0)), new o([...this.color.map(l(h)), this.valpha], this.model));
    },
    alpha(h) {
      return h !== void 0
        ? new o([...this.color, Math.max(0, Math.min(1, h))], this.model)
        : this.valpha;
    },
    red: s('rgb', 0, u(255)),
    green: s('rgb', 1, u(255)),
    blue: s('rgb', 2, u(255)),
    hue: s(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, (h) => ((h % 360) + 360) % 360),
    saturationl: s('hsl', 1, u(100)),
    lightness: s('hsl', 2, u(100)),
    saturationv: s('hsv', 1, u(100)),
    value: s('hsv', 2, u(100)),
    chroma: s('hcg', 1, u(100)),
    gray: s('hcg', 2, u(100)),
    white: s('hwb', 1, u(100)),
    wblack: s('hwb', 2, u(100)),
    cyan: s('cmyk', 0, u(100)),
    magenta: s('cmyk', 1, u(100)),
    yellow: s('cmyk', 2, u(100)),
    black: s('cmyk', 3, u(100)),
    x: s('xyz', 0, u(95.047)),
    y: s('xyz', 1, u(100)),
    z: s('xyz', 2, u(108.833)),
    l: s('lab', 0, u(100)),
    a: s('lab', 1),
    b: s('lab', 2),
    keyword(h) {
      return h !== void 0 ? new o(h) : t[this.model].keyword(this.color);
    },
    hex(h) {
      return h !== void 0 ? new o(h) : e.to.hex(this.rgb().round().color);
    },
    hexa(h) {
      if (h !== void 0) return new o(h);
      const p = this.rgb().round().color;
      let d = Math.round(this.valpha * 255)
        .toString(16)
        .toUpperCase();
      return (d.length === 1 && (d = '0' + d), e.to.hex(p) + d);
    },
    rgbNumber() {
      const h = this.rgb().color;
      return ((h[0] & 255) << 16) | ((h[1] & 255) << 8) | (h[2] & 255);
    },
    luminosity() {
      const h = this.rgb().color,
        p = [];
      for (const [d, m] of h.entries()) {
        const y = m / 255;
        p[d] = y <= 0.04045 ? y / 12.92 : ((y + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2];
    },
    contrast(h) {
      const p = this.luminosity(),
        d = h.luminosity();
      return p > d ? (p + 0.05) / (d + 0.05) : (d + 0.05) / (p + 0.05);
    },
    level(h) {
      const p = this.contrast(h);
      return p >= 7 ? 'AAA' : p >= 4.5 ? 'AA' : '';
    },
    isDark() {
      const h = this.rgb().color;
      return (h[0] * 2126 + h[1] * 7152 + h[2] * 722) / 1e4 < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      const h = this.rgb();
      for (let p = 0; p < 3; p++) h.color[p] = 255 - h.color[p];
      return h;
    },
    lighten(h) {
      const p = this.hsl();
      return ((p.color[2] += p.color[2] * h), p);
    },
    darken(h) {
      const p = this.hsl();
      return ((p.color[2] -= p.color[2] * h), p);
    },
    saturate(h) {
      const p = this.hsl();
      return ((p.color[1] += p.color[1] * h), p);
    },
    desaturate(h) {
      const p = this.hsl();
      return ((p.color[1] -= p.color[1] * h), p);
    },
    whiten(h) {
      const p = this.hwb();
      return ((p.color[1] += p.color[1] * h), p);
    },
    blacken(h) {
      const p = this.hwb();
      return ((p.color[2] += p.color[2] * h), p);
    },
    grayscale() {
      const h = this.rgb().color,
        p = h[0] * 0.3 + h[1] * 0.59 + h[2] * 0.11;
      return o.rgb(p, p, p);
    },
    fade(h) {
      return this.alpha(this.valpha - this.valpha * h);
    },
    opaquer(h) {
      return this.alpha(this.valpha + this.valpha * h);
    },
    rotate(h) {
      const p = this.hsl();
      let d = p.color[0];
      return ((d = (d + h) % 360), (d = d < 0 ? 360 + d : d), (p.color[0] = d), p);
    },
    mix(h, p) {
      if (!h || !h.rgb)
        throw new Error(
          'Argument to "mix" was not a Color instance, but rather an instance of ' + typeof h
        );
      const d = h.rgb(),
        m = this.rgb(),
        y = p === void 0 ? 0.5 : p,
        x = 2 * y - 1,
        k = d.alpha() - m.alpha(),
        S = ((x * k === -1 ? x : (x + k) / (1 + x * k)) + 1) / 2,
        F = 1 - S;
      return o.rgb(
        S * d.red() + F * m.red(),
        S * d.green() + F * m.green(),
        S * d.blue() + F * m.blue(),
        d.alpha() * y + m.alpha() * (1 - y)
      );
    },
  };
  for (const h of Object.keys(t)) {
    if (n.includes(h)) continue;
    const { channels: p } = t[h];
    ((o.prototype[h] = function (...d) {
      return this.model === h
        ? new o(this)
        : d.length > 0
          ? new o(d, h)
          : new o([...f(t[this.model][h].raw(this.color)), this.valpha], h);
    }),
      (o[h] = function (...d) {
        let m = d[0];
        return (typeof m == 'number' && (m = c(d, p)), new o(m, h));
      }));
  }
  function a(h, p) {
    return Number(h.toFixed(p));
  }
  function l(h) {
    return function (p) {
      return a(p, h);
    };
  }
  function s(h, p, d) {
    h = Array.isArray(h) ? h : [h];
    for (const m of h) (i[m] || (i[m] = []))[p] = d;
    return (
      (h = h[0]),
      function (m) {
        let y;
        return m !== void 0
          ? (d && (m = d(m)), (y = this[h]()), (y.color[p] = m), y)
          : ((y = this[h]().color[p]), d && (y = d(y)), y);
      }
    );
  }
  function u(h) {
    return function (p) {
      return Math.max(0, Math.min(h, p));
    };
  }
  function f(h) {
    return Array.isArray(h) ? h : [h];
  }
  function c(h, p) {
    for (let d = 0; d < p; d++) typeof h[d] != 'number' && (h[d] = 0);
    return h;
  }
  return (($t = o), $t);
}
var Fo = Io();
const or = vn(Fo);
var Do = typeof global == 'object' && global && global.Object === Object && global,
  _o = typeof self == 'object' && self && self.Object === Object && self,
  De = Do || _o || Function('return this')(),
  gt = De.Symbol,
  Si = Object.prototype,
  To = Si.hasOwnProperty,
  Po = Si.toString,
  Ye = gt ? gt.toStringTag : void 0;
function Lo(e) {
  var t = To.call(e, Ye),
    n = e[Ye];
  try {
    e[Ye] = void 0;
    var r = !0;
  } catch {}
  var i = Po.call(e);
  return (r && (t ? (e[Ye] = n) : delete e[Ye]), i);
}
var Ro = Object.prototype,
  Oo = Ro.toString;
function Mo(e) {
  return Oo.call(e);
}
var No = '[object Null]',
  zo = '[object Undefined]',
  lr = gt ? gt.toStringTag : void 0;
function Ei(e) {
  return e == null ? (e === void 0 ? zo : No) : lr && lr in Object(e) ? Lo(e) : Mo(e);
}
function Ai(e) {
  return e != null && typeof e == 'object';
}
var Bo = '[object Symbol]';
function jo(e) {
  return typeof e == 'symbol' || (Ai(e) && Ei(e) == Bo);
}
var $o = Array.isArray,
  Wo = /\s/;
function Uo(e) {
  for (var t = e.length; t-- && Wo.test(e.charAt(t)); );
  return t;
}
var Ho = /^\s+/;
function qo(e) {
  return e && e.slice(0, Uo(e) + 1).replace(Ho, '');
}
function Be(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var sr = NaN,
  Vo = /^[-+]0x[0-9a-f]+$/i,
  Go = /^0b[01]+$/i,
  Yo = /^0o[0-7]+$/i,
  Xo = parseInt;
function Jo(e) {
  if (typeof e == 'number') return e;
  if (jo(e)) return sr;
  if (Be(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = Be(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = qo(e);
  var n = Go.test(e);
  return n || Yo.test(e) ? Xo(e.slice(2), n ? 2 : 8) : Vo.test(e) ? sr : +e;
}
var ur = 1 / 0,
  Ko = 17976931348623157e292;
function Qo(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = Jo(e)), e === ur || e === -ur)) {
    var t = e < 0 ? -1 : 1;
    return t * Ko;
  }
  return e === e ? e : 0;
}
function cr(e) {
  var t = Qo(e),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
function Ii(e) {
  return e;
}
var Zo = '[object AsyncFunction]',
  el = '[object Function]',
  tl = '[object GeneratorFunction]',
  nl = '[object Proxy]';
function rl(e) {
  if (!Be(e)) return !1;
  var t = Ei(e);
  return t == el || t == tl || t == Zo || t == nl;
}
var Wt = De['__core-js_shared__'],
  fr = (function () {
    var e = /[^.]+$/.exec((Wt && Wt.keys && Wt.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function il(e) {
  return !!fr && fr in e;
}
var al = Function.prototype,
  ol = al.toString;
function ll(e) {
  if (e != null) {
    try {
      return ol.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var sl = /[\\^$.*+?()[\]{}|]/g,
  ul = /^\[object .+?Constructor\]$/,
  cl = Function.prototype,
  fl = Object.prototype,
  hl = cl.toString,
  pl = fl.hasOwnProperty,
  dl = RegExp(
    '^' +
      hl
        .call(pl)
        .replace(sl, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );
function ml(e) {
  if (!Be(e) || il(e)) return !1;
  var t = rl(e) ? dl : ul;
  return t.test(ll(e));
}
function bl(e, t) {
  return e?.[t];
}
function Fi(e, t) {
  var n = bl(e, t);
  return ml(n) ? n : void 0;
}
var hr = Fi(De, 'WeakMap'),
  yt = hr && new hr(),
  Di = yt
    ? function (e, t) {
        return (yt.set(e, t), e);
      }
    : Ii,
  pr = Object.create,
  Cn = (function () {
    function e() {}
    return function (t) {
      if (!Be(t)) return {};
      if (pr) return pr(t);
      e.prototype = t;
      var n = new e();
      return ((e.prototype = void 0), n);
    };
  })();
function nt(e) {
  return function () {
    var t = arguments;
    switch (t.length) {
      case 0:
        return new e();
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3]);
      case 5:
        return new e(t[0], t[1], t[2], t[3], t[4]);
      case 6:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
      case 7:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
    }
    var n = Cn(e.prototype),
      r = e.apply(n, t);
    return Be(r) ? r : n;
  };
}
var gl = 1;
function yl(e, t, n) {
  var r = t & gl,
    i = nt(e);
  function o() {
    var a = this && this !== De && this instanceof o ? i : e;
    return a.apply(r ? n : this, arguments);
  }
  return o;
}
function _i(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var xl = Math.max;
function Ti(e, t, n, r) {
  for (
    var i = -1,
      o = e.length,
      a = n.length,
      l = -1,
      s = t.length,
      u = xl(o - a, 0),
      f = Array(s + u),
      c = !r;
    ++l < s;
  )
    f[l] = t[l];
  for (; ++i < a; ) (c || i < o) && (f[n[i]] = e[i]);
  for (; u--; ) f[l++] = e[i++];
  return f;
}
var kl = Math.max;
function Pi(e, t, n, r) {
  for (
    var i = -1,
      o = e.length,
      a = -1,
      l = n.length,
      s = -1,
      u = t.length,
      f = kl(o - l, 0),
      c = Array(f + u),
      h = !r;
    ++i < f;
  )
    c[i] = e[i];
  for (var p = i; ++s < u; ) c[p + s] = t[s];
  for (; ++a < l; ) (h || i < o) && (c[p + n[a]] = e[i++]);
  return c;
}
function wl(e, t) {
  for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
  return r;
}
function Sn() {}
var vl = 4294967295;
function je(e) {
  ((this.__wrapped__ = e),
    (this.__actions__ = []),
    (this.__dir__ = 1),
    (this.__filtered__ = !1),
    (this.__iteratees__ = []),
    (this.__takeCount__ = vl),
    (this.__views__ = []));
}
je.prototype = Cn(Sn.prototype);
je.prototype.constructor = je;
function Cl() {}
var Li = yt
    ? function (e) {
        return yt.get(e);
      }
    : Cl,
  dr = {},
  Sl = Object.prototype,
  El = Sl.hasOwnProperty;
function Al(e) {
  for (var t = e.name + '', n = dr[t], r = El.call(dr, t) ? n.length : 0; r--; ) {
    var i = n[r],
      o = i.func;
    if (o == null || o == e) return i.name;
  }
  return t;
}
function $e(e, t) {
  ((this.__wrapped__ = e),
    (this.__actions__ = []),
    (this.__chain__ = !!t),
    (this.__index__ = 0),
    (this.__values__ = void 0));
}
$e.prototype = Cn(Sn.prototype);
$e.prototype.constructor = $e;
function Ri(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
function Il(e) {
  if (e instanceof je) return e.clone();
  var t = new $e(e.__wrapped__, e.__chain__);
  return (
    (t.__actions__ = Ri(e.__actions__)),
    (t.__index__ = e.__index__),
    (t.__values__ = e.__values__),
    t
  );
}
var Fl = Object.prototype,
  Dl = Fl.hasOwnProperty;
function xt(e) {
  if (Ai(e) && !$o(e) && !(e instanceof je)) {
    if (e instanceof $e) return e;
    if (Dl.call(e, '__wrapped__')) return Il(e);
  }
  return new $e(e);
}
xt.prototype = Sn.prototype;
xt.prototype.constructor = xt;
function _l(e) {
  var t = Al(e),
    n = xt[t];
  if (typeof n != 'function' || !(t in je.prototype)) return !1;
  if (e === n) return !0;
  var r = Li(n);
  return !!r && e === r[0];
}
var Tl = 800,
  Pl = 16,
  Ll = Date.now;
function Oi(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Ll(),
      i = Pl - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= Tl) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Mi = Oi(Di),
  Rl = /\{\n\/\* \[wrapped with (.+)\] \*/,
  Ol = /,? & /;
function Ml(e) {
  var t = e.match(Rl);
  return t ? t[1].split(Ol) : [];
}
var Nl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function zl(e, t) {
  var n = t.length;
  if (!n) return e;
  var r = n - 1;
  return (
    (t[r] = (n > 1 ? '& ' : '') + t[r]),
    (t = t.join(n > 2 ? ', ' : ' ')),
    e.replace(
      Nl,
      `{
/* [wrapped with ` +
        t +
        `] */
`
    )
  );
}
function Bl(e) {
  return function () {
    return e;
  };
}
var mr = (function () {
    try {
      var e = Fi(Object, 'defineProperty');
      return (e({}, '', {}), e);
    } catch {}
  })(),
  jl = mr
    ? function (e, t) {
        return mr(e, 'toString', { configurable: !0, enumerable: !1, value: Bl(t), writable: !0 });
      }
    : Ii,
  $l = Oi(jl);
function Wl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
  return e;
}
function Ul(e, t, n, r) {
  for (var i = e.length, o = n + -1; ++o < i; ) if (t(e[o], o, e)) return o;
  return -1;
}
function Hl(e) {
  return e !== e;
}
function ql(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
  return -1;
}
function Vl(e, t, n) {
  return t === t ? ql(e, t, n) : Ul(e, Hl, n);
}
function Gl(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Vl(e, t, 0) > -1;
}
var Yl = 1,
  Xl = 2,
  Jl = 8,
  Kl = 16,
  Ql = 32,
  Zl = 64,
  es = 128,
  ts = 256,
  ns = 512,
  rs = [
    ['ary', es],
    ['bind', Yl],
    ['bindKey', Xl],
    ['curry', Jl],
    ['curryRight', Kl],
    ['flip', ns],
    ['partial', Ql],
    ['partialRight', Zl],
    ['rearg', ts],
  ];
function is(e, t) {
  return (
    Wl(rs, function (n) {
      var r = '_.' + n[0];
      t & n[1] && !Gl(e, r) && e.push(r);
    }),
    e.sort()
  );
}
function Ni(e, t, n) {
  var r = t + '';
  return $l(e, zl(r, is(Ml(r), n)));
}
var as = 4,
  os = 8,
  br = 32,
  gr = 64;
function zi(e, t, n, r, i, o, a, l, s, u) {
  var f = t & os,
    c = f ? a : void 0,
    h = f ? void 0 : a,
    p = f ? o : void 0,
    d = f ? void 0 : o;
  ((t |= f ? br : gr), (t &= ~(f ? gr : br)), t & as || (t &= -4));
  var m = [e, t, i, p, c, d, h, l, s, u],
    y = n.apply(void 0, m);
  return (_l(e) && Mi(y, m), (y.placeholder = r), Ni(y, e, t));
}
function Bi(e) {
  var t = e;
  return t.placeholder;
}
var ls = 9007199254740991,
  ss = /^(?:0|[1-9]\d*)$/;
function us(e, t) {
  var n = typeof e;
  return (
    (t = t ?? ls),
    !!t && (n == 'number' || (n != 'symbol' && ss.test(e))) && e > -1 && e % 1 == 0 && e < t
  );
}
var cs = Math.min;
function fs(e, t) {
  for (var n = e.length, r = cs(t.length, n), i = Ri(e); r--; ) {
    var o = t[r];
    e[r] = us(o, n) ? i[o] : void 0;
  }
  return e;
}
var yr = '__lodash_placeholder__';
function kt(e, t) {
  for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
    var a = e[n];
    (a === t || a === yr) && ((e[n] = yr), (o[i++] = n));
  }
  return o;
}
var hs = 1,
  ps = 2,
  ds = 8,
  ms = 16,
  bs = 128,
  gs = 512;
function En(e, t, n, r, i, o, a, l, s, u) {
  var f = t & bs,
    c = t & hs,
    h = t & ps,
    p = t & (ds | ms),
    d = t & gs,
    m = h ? void 0 : nt(e);
  function y() {
    for (var x = arguments.length, k = Array(x), S = x; S--; ) k[S] = arguments[S];
    if (p)
      var F = Bi(y),
        D = wl(k, F);
    if ((r && (k = Ti(k, r, i, p)), o && (k = Pi(k, o, a, p)), (x -= D), p && x < u)) {
      var v = kt(k, F);
      return zi(e, t, En, y.placeholder, n, k, v, l, s, u - x);
    }
    var O = c ? n : this,
      U = h ? O[e] : e;
    return (
      (x = k.length),
      l ? (k = fs(k, l)) : d && x > 1 && k.reverse(),
      f && s < x && (k.length = s),
      this && this !== De && this instanceof y && (U = m || nt(U)),
      U.apply(O, k)
    );
  }
  return y;
}
function ys(e, t, n) {
  var r = nt(e);
  function i() {
    for (var o = arguments.length, a = Array(o), l = o, s = Bi(i); l--; ) a[l] = arguments[l];
    var u = o < 3 && a[0] !== s && a[o - 1] !== s ? [] : kt(a, s);
    if (((o -= u.length), o < n))
      return zi(e, t, En, i.placeholder, void 0, a, u, void 0, void 0, n - o);
    var f = this && this !== De && this instanceof i ? r : e;
    return _i(f, this, a);
  }
  return i;
}
var xs = 1;
function ks(e, t, n, r) {
  var i = t & xs,
    o = nt(e);
  function a() {
    for (
      var l = -1,
        s = arguments.length,
        u = -1,
        f = r.length,
        c = Array(f + s),
        h = this && this !== De && this instanceof a ? o : e;
      ++u < f;
    )
      c[u] = r[u];
    for (; s--; ) c[u++] = arguments[++l];
    return _i(h, i ? n : this, c);
  }
  return a;
}
var xr = '__lodash_placeholder__',
  Ut = 1,
  ws = 2,
  vs = 4,
  kr = 8,
  Xe = 128,
  wr = 256,
  Cs = Math.min;
function Ss(e, t) {
  var n = e[1],
    r = t[1],
    i = n | r,
    o = i < (Ut | ws | Xe),
    a =
      (r == Xe && n == kr) ||
      (r == Xe && n == wr && e[7].length <= t[8]) ||
      (r == (Xe | wr) && t[7].length <= t[8] && n == kr);
  if (!(o || a)) return e;
  r & Ut && ((e[2] = t[2]), (i |= n & Ut ? 0 : vs));
  var l = t[3];
  if (l) {
    var s = e[3];
    ((e[3] = s ? Ti(s, l, t[4]) : l), (e[4] = s ? kt(e[3], xr) : t[4]));
  }
  return (
    (l = t[5]),
    l && ((s = e[5]), (e[5] = s ? Pi(s, l, t[6]) : l), (e[6] = s ? kt(e[5], xr) : t[6])),
    (l = t[7]),
    l && (e[7] = l),
    r & Xe && (e[8] = e[8] == null ? t[8] : Cs(e[8], t[8])),
    e[9] == null && (e[9] = t[9]),
    (e[0] = t[0]),
    (e[1] = i),
    e
  );
}
var Es = 'Expected a function',
  vr = 1,
  As = 2,
  Cr = 8,
  Sr = 16,
  Er = 32,
  Is = 64,
  Ar = Math.max;
function Fs(e, t, n, r, i, o, a, l) {
  var s = t & As;
  if (!s && typeof e != 'function') throw new TypeError(Es);
  var u = r ? r.length : 0;
  if (
    (u || ((t &= -97), (r = i = void 0)),
    (a = a === void 0 ? a : Ar(cr(a), 0)),
    (l = l === void 0 ? l : cr(l)),
    (u -= i ? i.length : 0),
    t & Is)
  ) {
    var f = r,
      c = i;
    r = i = void 0;
  }
  var h = s ? void 0 : Li(e),
    p = [e, t, n, r, i, f, c, o, a, l];
  if (
    (h && Ss(p, h),
    (e = p[0]),
    (t = p[1]),
    (n = p[2]),
    (r = p[3]),
    (i = p[4]),
    (l = p[9] = p[9] === void 0 ? (s ? 0 : e.length) : Ar(p[9] - u, 0)),
    !l && t & (Cr | Sr) && (t &= -25),
    !t || t == vr)
  )
    var d = yl(e, t, n);
  else
    t == Cr || t == Sr
      ? (d = ys(e, t, l))
      : (t == Er || t == (vr | Er)) && !i.length
        ? (d = ks(e, t, n, r))
        : (d = En.apply(void 0, p));
  var m = h ? Di : Mi;
  return Ni(m(d, p), e, t);
}
var Ds = 8;
function wt(e, t, n) {
  t = n ? void 0 : t;
  var r = Fs(e, Ds, void 0, void 0, void 0, void 0, void 0, t);
  return ((r.placeholder = wt.placeholder), r);
}
wt.placeholder = {};
function _s(e) {
  const t = e[0],
    n = e[1],
    r = e[2];
  let i, o, a;
  return (
    (i = t * 1 + n * 0 + r * 1.13983),
    (o = t * 1 + n * -0.39465 + r * -0.5806),
    (a = t * 1 + n * 2.02311 + r * 0),
    (i = Math.min(Math.max(0, i), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (a = Math.min(Math.max(0, a), 1)),
    [i * 255, o * 255, a * 255]
  );
}
function Ts(e) {
  const t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i = t * 0.299 + n * 0.587 + r * 0.114,
    o = t * -0.14713 + n * -0.28886 + r * 0.436,
    a = t * 0.615 + n * -0.51499 + r * -0.10001;
  return [i, o, a];
}
const Ps = {
    scheme: 'threezerotwofour',
    author: 'jan t. sott (http://github.com/idleberg)',
    base00: '#090300',
    base01: '#3a3432',
    base02: '#4a4543',
    base03: '#5c5855',
    base04: '#807d7c',
    base05: '#a5a2a2',
    base06: '#d6d5d4',
    base07: '#f7f7f7',
    base08: '#db2d20',
    base09: '#e8bbd0',
    base0A: '#fded02',
    base0B: '#01a252',
    base0C: '#b5e4f4',
    base0D: '#01a0e4',
    base0E: '#a16a94',
    base0F: '#cdab53',
  },
  Ls = {
    scheme: 'apathy',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#031A16',
    base01: '#0B342D',
    base02: '#184E45',
    base03: '#2B685E',
    base04: '#5F9C92',
    base05: '#81B5AC',
    base06: '#A7CEC8',
    base07: '#D2E7E4',
    base08: '#3E9688',
    base09: '#3E7996',
    base0A: '#3E4C96',
    base0B: '#883E96',
    base0C: '#963E4C',
    base0D: '#96883E',
    base0E: '#4C963E',
    base0F: '#3E965B',
  },
  Rs = {
    scheme: 'ashes',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#1C2023',
    base01: '#393F45',
    base02: '#565E65',
    base03: '#747C84',
    base04: '#ADB3BA',
    base05: '#C7CCD1',
    base06: '#DFE2E5',
    base07: '#F3F4F5',
    base08: '#C7AE95',
    base09: '#C7C795',
    base0A: '#AEC795',
    base0B: '#95C7AE',
    base0C: '#95AEC7',
    base0D: '#AE95C7',
    base0E: '#C795AE',
    base0F: '#C79595',
  },
  Os = {
    scheme: 'atelier dune',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
    base00: '#20201d',
    base01: '#292824',
    base02: '#6e6b5e',
    base03: '#7d7a68',
    base04: '#999580',
    base05: '#a6a28c',
    base06: '#e8e4cf',
    base07: '#fefbec',
    base08: '#d73737',
    base09: '#b65611',
    base0A: '#cfb017',
    base0B: '#60ac39',
    base0C: '#1fad83',
    base0D: '#6684e1',
    base0E: '#b854d4',
    base0F: '#d43552',
  },
  Ms = {
    scheme: 'atelier forest',
    author:
      'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
    base00: '#1b1918',
    base01: '#2c2421',
    base02: '#68615e',
    base03: '#766e6b',
    base04: '#9c9491',
    base05: '#a8a19f',
    base06: '#e6e2e0',
    base07: '#f1efee',
    base08: '#f22c40',
    base09: '#df5320',
    base0A: '#d5911a',
    base0B: '#5ab738',
    base0C: '#00ad9c',
    base0D: '#407ee7',
    base0E: '#6666ea',
    base0F: '#c33ff3',
  },
  Ns = {
    scheme: 'atelier heath',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
    base00: '#1b181b',
    base01: '#292329',
    base02: '#695d69',
    base03: '#776977',
    base04: '#9e8f9e',
    base05: '#ab9bab',
    base06: '#d8cad8',
    base07: '#f7f3f7',
    base08: '#ca402b',
    base09: '#a65926',
    base0A: '#bb8a35',
    base0B: '#379a37',
    base0C: '#159393',
    base0D: '#516aec',
    base0E: '#7b59c0',
    base0F: '#cc33cc',
  },
  zs = {
    scheme: 'atelier lakeside',
    author:
      'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
    base00: '#161b1d',
    base01: '#1f292e',
    base02: '#516d7b',
    base03: '#5a7b8c',
    base04: '#7195a8',
    base05: '#7ea2b4',
    base06: '#c1e4f6',
    base07: '#ebf8ff',
    base08: '#d22d72',
    base09: '#935c25',
    base0A: '#8a8a0f',
    base0B: '#568c3b',
    base0C: '#2d8f6f',
    base0D: '#257fad',
    base0E: '#5d5db1',
    base0F: '#b72dd2',
  },
  Bs = {
    scheme: 'atelier seaside',
    author:
      'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
    base00: '#131513',
    base01: '#242924',
    base02: '#5e6e5e',
    base03: '#687d68',
    base04: '#809980',
    base05: '#8ca68c',
    base06: '#cfe8cf',
    base07: '#f0fff0',
    base08: '#e6193c',
    base09: '#87711d',
    base0A: '#c3c322',
    base0B: '#29a329',
    base0C: '#1999b3',
    base0D: '#3d62f5',
    base0E: '#ad2bee',
    base0F: '#e619c3',
  },
  js = {
    scheme: 'bespin',
    author: 'jan t. sott',
    base00: '#28211c',
    base01: '#36312e',
    base02: '#5e5d5c',
    base03: '#666666',
    base04: '#797977',
    base05: '#8a8986',
    base06: '#9d9b97',
    base07: '#baae9e',
    base08: '#cf6a4c',
    base09: '#cf7d34',
    base0A: '#f9ee98',
    base0B: '#54be0d',
    base0C: '#afc4db',
    base0D: '#5ea6ea',
    base0E: '#9b859d',
    base0F: '#937121',
  },
  $s = {
    scheme: 'brewer',
    author: 'timothée poisot (http://github.com/tpoisot)',
    base00: '#0c0d0e',
    base01: '#2e2f30',
    base02: '#515253',
    base03: '#737475',
    base04: '#959697',
    base05: '#b7b8b9',
    base06: '#dadbdc',
    base07: '#fcfdfe',
    base08: '#e31a1c',
    base09: '#e6550d',
    base0A: '#dca060',
    base0B: '#31a354',
    base0C: '#80b1d3',
    base0D: '#3182bd',
    base0E: '#756bb1',
    base0F: '#b15928',
  },
  Ws = {
    scheme: 'bright',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#000000',
    base01: '#303030',
    base02: '#505050',
    base03: '#b0b0b0',
    base04: '#d0d0d0',
    base05: '#e0e0e0',
    base06: '#f5f5f5',
    base07: '#ffffff',
    base08: '#fb0120',
    base09: '#fc6d24',
    base0A: '#fda331',
    base0B: '#a1c659',
    base0C: '#76c7b7',
    base0D: '#6fb3d2',
    base0E: '#d381c3',
    base0F: '#be643c',
  },
  Us = {
    scheme: 'chalk',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#151515',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#f5f5f5',
    base08: '#fb9fb1',
    base09: '#eda987',
    base0A: '#ddb26f',
    base0B: '#acc267',
    base0C: '#12cfc0',
    base0D: '#6fc2ef',
    base0E: '#e1a3ee',
    base0F: '#deaf8f',
  },
  Hs = {
    scheme: 'codeschool',
    author: 'brettof86',
    base00: '#232c31',
    base01: '#1c3657',
    base02: '#2a343a',
    base03: '#3f4944',
    base04: '#84898c',
    base05: '#9ea7a6',
    base06: '#a7cfa3',
    base07: '#b5d8f6',
    base08: '#2a5491',
    base09: '#43820d',
    base0A: '#a03b1e',
    base0B: '#237986',
    base0C: '#b02f30',
    base0D: '#484d79',
    base0E: '#c59820',
    base0F: '#c98344',
  },
  qs = {
    scheme: 'colors',
    author: 'mrmrs (http://clrs.cc)',
    base00: '#111111',
    base01: '#333333',
    base02: '#555555',
    base03: '#777777',
    base04: '#999999',
    base05: '#bbbbbb',
    base06: '#dddddd',
    base07: '#ffffff',
    base08: '#ff4136',
    base09: '#ff851b',
    base0A: '#ffdc00',
    base0B: '#2ecc40',
    base0C: '#7fdbff',
    base0D: '#0074d9',
    base0E: '#b10dc9',
    base0F: '#85144b',
  },
  Vs = {
    scheme: 'default',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#181818',
    base01: '#282828',
    base02: '#383838',
    base03: '#585858',
    base04: '#b8b8b8',
    base05: '#d8d8d8',
    base06: '#e8e8e8',
    base07: '#f8f8f8',
    base08: '#ab4642',
    base09: '#dc9656',
    base0A: '#f7ca88',
    base0B: '#a1b56c',
    base0C: '#86c1b9',
    base0D: '#7cafc2',
    base0E: '#ba8baf',
    base0F: '#a16946',
  },
  Gs = {
    scheme: 'eighties',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2d2d2d',
    base01: '#393939',
    base02: '#515151',
    base03: '#747369',
    base04: '#a09f93',
    base05: '#d3d0c8',
    base06: '#e8e6df',
    base07: '#f2f0ec',
    base08: '#f2777a',
    base09: '#f99157',
    base0A: '#ffcc66',
    base0B: '#99cc99',
    base0C: '#66cccc',
    base0D: '#6699cc',
    base0E: '#cc99cc',
    base0F: '#d27b53',
  },
  Ys = {
    scheme: 'embers',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#16130F',
    base01: '#2C2620',
    base02: '#433B32',
    base03: '#5A5047',
    base04: '#8A8075',
    base05: '#A39A90',
    base06: '#BEB6AE',
    base07: '#DBD6D1',
    base08: '#826D57',
    base09: '#828257',
    base0A: '#6D8257',
    base0B: '#57826D',
    base0C: '#576D82',
    base0D: '#6D5782',
    base0E: '#82576D',
    base0F: '#825757',
  },
  Xs = {
    scheme: 'flat',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2C3E50',
    base01: '#34495E',
    base02: '#7F8C8D',
    base03: '#95A5A6',
    base04: '#BDC3C7',
    base05: '#e0e0e0',
    base06: '#f5f5f5',
    base07: '#ECF0F1',
    base08: '#E74C3C',
    base09: '#E67E22',
    base0A: '#F1C40F',
    base0B: '#2ECC71',
    base0C: '#1ABC9C',
    base0D: '#3498DB',
    base0E: '#9B59B6',
    base0F: '#be643c',
  },
  Js = {
    scheme: 'google',
    author: 'seth wright (http://sethawright.com)',
    base00: '#1d1f21',
    base01: '#282a2e',
    base02: '#373b41',
    base03: '#969896',
    base04: '#b4b7b4',
    base05: '#c5c8c6',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#CC342B',
    base09: '#F96A38',
    base0A: '#FBA922',
    base0B: '#198844',
    base0C: '#3971ED',
    base0D: '#3971ED',
    base0E: '#A36AC7',
    base0F: '#3971ED',
  },
  Ks = {
    scheme: 'grayscale',
    author: 'alexandre gavioli (https://github.com/alexx2/)',
    base00: '#101010',
    base01: '#252525',
    base02: '#464646',
    base03: '#525252',
    base04: '#ababab',
    base05: '#b9b9b9',
    base06: '#e3e3e3',
    base07: '#f7f7f7',
    base08: '#7c7c7c',
    base09: '#999999',
    base0A: '#a0a0a0',
    base0B: '#8e8e8e',
    base0C: '#868686',
    base0D: '#686868',
    base0E: '#747474',
    base0F: '#5e5e5e',
  },
  Qs = {
    scheme: 'green screen',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#001100',
    base01: '#003300',
    base02: '#005500',
    base03: '#007700',
    base04: '#009900',
    base05: '#00bb00',
    base06: '#00dd00',
    base07: '#00ff00',
    base08: '#007700',
    base09: '#009900',
    base0A: '#007700',
    base0B: '#00bb00',
    base0C: '#005500',
    base0D: '#009900',
    base0E: '#00bb00',
    base0F: '#005500',
  },
  Zs = {
    scheme: 'harmonic16',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#0b1c2c',
    base01: '#223b54',
    base02: '#405c79',
    base03: '#627e99',
    base04: '#aabcce',
    base05: '#cbd6e2',
    base06: '#e5ebf1',
    base07: '#f7f9fb',
    base08: '#bf8b56',
    base09: '#bfbf56',
    base0A: '#8bbf56',
    base0B: '#56bf8b',
    base0C: '#568bbf',
    base0D: '#8b56bf',
    base0E: '#bf568b',
    base0F: '#bf5656',
  },
  eu = {
    scheme: 'hopscotch',
    author: 'jan t. sott',
    base00: '#322931',
    base01: '#433b42',
    base02: '#5c545b',
    base03: '#797379',
    base04: '#989498',
    base05: '#b9b5b8',
    base06: '#d5d3d5',
    base07: '#ffffff',
    base08: '#dd464c',
    base09: '#fd8b19',
    base0A: '#fdcc59',
    base0B: '#8fc13e',
    base0C: '#149b93',
    base0D: '#1290bf',
    base0E: '#c85e7c',
    base0F: '#b33508',
  },
  tu = {
    scheme: 'isotope',
    author: 'jan t. sott',
    base00: '#000000',
    base01: '#404040',
    base02: '#606060',
    base03: '#808080',
    base04: '#c0c0c0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#ff0000',
    base09: '#ff9900',
    base0A: '#ff0099',
    base0B: '#33ff00',
    base0C: '#00ffff',
    base0D: '#0066ff',
    base0E: '#cc00ff',
    base0F: '#3300ff',
  },
  nu = {
    scheme: 'marrakesh',
    author: 'alexandre gavioli (http://github.com/alexx2/)',
    base00: '#201602',
    base01: '#302e00',
    base02: '#5f5b17',
    base03: '#6c6823',
    base04: '#86813b',
    base05: '#948e48',
    base06: '#ccc37a',
    base07: '#faf0a5',
    base08: '#c35359',
    base09: '#b36144',
    base0A: '#a88339',
    base0B: '#18974e',
    base0C: '#75a738',
    base0D: '#477ca1',
    base0E: '#8868b3',
    base0F: '#b3588e',
  },
  ru = {
    scheme: 'mocha',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#3B3228',
    base01: '#534636',
    base02: '#645240',
    base03: '#7e705a',
    base04: '#b8afad',
    base05: '#d0c8c6',
    base06: '#e9e1dd',
    base07: '#f5eeeb',
    base08: '#cb6077',
    base09: '#d28b71',
    base0A: '#f4bc87',
    base0B: '#beb55b',
    base0C: '#7bbda4',
    base0D: '#8ab3b5',
    base0E: '#a89bb9',
    base0F: '#bb9584',
  },
  iu = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  },
  au = {
    scheme: 'nicinabox',
    author: 'nicinabox (http://github.com/nicinabox)',
    base00: '#2A2F3A',
    base01: '#3C444F',
    base02: '#4F5A65',
    base03: '#BEBEBE',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#FFFFFF',
    base07: '#f5f5f5',
    base08: '#fb9fb1',
    base09: '#FC6D24',
    base0A: '#ddb26f',
    base0B: '#A1C659',
    base0C: '#12cfc0',
    base0D: '#6FB3D2',
    base0E: '#D381C3',
    base0F: '#deaf8f',
  },
  ou = {
    scheme: 'ocean',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2b303b',
    base01: '#343d46',
    base02: '#4f5b66',
    base03: '#65737e',
    base04: '#a7adba',
    base05: '#c0c5ce',
    base06: '#dfe1e8',
    base07: '#eff1f5',
    base08: '#bf616a',
    base09: '#d08770',
    base0A: '#ebcb8b',
    base0B: '#a3be8c',
    base0C: '#96b5b4',
    base0D: '#8fa1b3',
    base0E: '#b48ead',
    base0F: '#ab7967',
  },
  lu = {
    scheme: 'paraiso',
    author: 'jan t. sott',
    base00: '#2f1e2e',
    base01: '#41323f',
    base02: '#4f424c',
    base03: '#776e71',
    base04: '#8d8687',
    base05: '#a39e9b',
    base06: '#b9b6b0',
    base07: '#e7e9db',
    base08: '#ef6155',
    base09: '#f99b15',
    base0A: '#fec418',
    base0B: '#48b685',
    base0C: '#5bc4bf',
    base0D: '#06b6ef',
    base0E: '#815ba4',
    base0F: '#e96ba8',
  },
  su = {
    scheme: 'pop',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#000000',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#eb008a',
    base09: '#f29333',
    base0A: '#f8ca12',
    base0B: '#37b349',
    base0C: '#00aabb',
    base0D: '#0e5a94',
    base0E: '#b31e8d',
    base0F: '#7a2d00',
  },
  uu = {
    scheme: 'railscasts',
    author: 'ryan bates (http://railscasts.com)',
    base00: '#2b2b2b',
    base01: '#272935',
    base02: '#3a4055',
    base03: '#5a647e',
    base04: '#d4cfc9',
    base05: '#e6e1dc',
    base06: '#f4f1ed',
    base07: '#f9f7f3',
    base08: '#da4939',
    base09: '#cc7833',
    base0A: '#ffc66d',
    base0B: '#a5c261',
    base0C: '#519f50',
    base0D: '#6d9cbe',
    base0E: '#b6b3eb',
    base0F: '#bc9458',
  },
  cu = {
    scheme: 'shapeshifter',
    author: 'tyler benziger (http://tybenz.com)',
    base00: '#000000',
    base01: '#040404',
    base02: '#102015',
    base03: '#343434',
    base04: '#555555',
    base05: '#ababab',
    base06: '#e0e0e0',
    base07: '#f9f9f9',
    base08: '#e92f2f',
    base09: '#e09448',
    base0A: '#dddd13',
    base0B: '#0ed839',
    base0C: '#23edda',
    base0D: '#3b48e3',
    base0E: '#f996e2',
    base0F: '#69542d',
  },
  fu = {
    scheme: 'solarized',
    author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
    base00: '#002b36',
    base01: '#073642',
    base02: '#586e75',
    base03: '#657b83',
    base04: '#839496',
    base05: '#93a1a1',
    base06: '#eee8d5',
    base07: '#fdf6e3',
    base08: '#dc322f',
    base09: '#cb4b16',
    base0A: '#b58900',
    base0B: '#859900',
    base0C: '#2aa198',
    base0D: '#268bd2',
    base0E: '#6c71c4',
    base0F: '#d33682',
  },
  hu = {
    scheme: 'summerfruit',
    author: 'christopher corley (http://cscorley.github.io/)',
    base00: '#151515',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#B0B0B0',
    base05: '#D0D0D0',
    base06: '#E0E0E0',
    base07: '#FFFFFF',
    base08: '#FF0086',
    base09: '#FD8900',
    base0A: '#ABA800',
    base0B: '#00C918',
    base0C: '#1faaaa',
    base0D: '#3777E6',
    base0E: '#AD00A1',
    base0F: '#cc6633',
  },
  pu = {
    scheme: 'tomorrow',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#1d1f21',
    base01: '#282a2e',
    base02: '#373b41',
    base03: '#969896',
    base04: '#b4b7b4',
    base05: '#c5c8c6',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#cc6666',
    base09: '#de935f',
    base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    base0D: '#81a2be',
    base0E: '#b294bb',
    base0F: '#a3685a',
  },
  du = {
    scheme: 'london tube',
    author: 'jan t. sott',
    base00: '#231f20',
    base01: '#1c3f95',
    base02: '#5a5758',
    base03: '#737171',
    base04: '#959ca1',
    base05: '#d9d8d8',
    base06: '#e7e7e8',
    base07: '#ffffff',
    base08: '#ee2e24',
    base09: '#f386a1',
    base0A: '#ffd204',
    base0B: '#00853e',
    base0C: '#85cebc',
    base0D: '#009ddc',
    base0E: '#98005d',
    base0F: '#b06110',
  },
  mu = {
    scheme: 'twilight',
    author: 'david hart (http://hart-dev.com)',
    base00: '#1e1e1e',
    base01: '#323537',
    base02: '#464b50',
    base03: '#5f5a60',
    base04: '#838184',
    base05: '#a7a7a7',
    base06: '#c3c3c3',
    base07: '#ffffff',
    base08: '#cf6a4c',
    base09: '#cda869',
    base0A: '#f9ee98',
    base0B: '#8f9d6a',
    base0C: '#afc4db',
    base0D: '#7587a6',
    base0E: '#9b859d',
    base0F: '#9b703f',
  },
  ji = {
    threezerotwofour: Ps,
    apathy: Ls,
    ashes: Rs,
    atelierDune: Os,
    atelierForest: Ms,
    atelierHeath: Ns,
    atelierLakeside: zs,
    atelierSeaside: Bs,
    bespin: js,
    brewer: $s,
    bright: Ws,
    chalk: Us,
    codeschool: Hs,
    colors: qs,
    default: Vs,
    eighties: Gs,
    embers: Ys,
    flat: Xs,
    google: Js,
    grayscale: Ks,
    greenscreen: Qs,
    harmonic: Zs,
    hopscotch: eu,
    isotope: tu,
    marrakesh: nu,
    mocha: ru,
    monokai: iu,
    nicinabox: au,
    ocean: ou,
    paraiso: lu,
    pop: su,
    railscasts: uu,
    shapeshifter: cu,
    solarized: fu,
    summerfruit: hu,
    tomorrow: pu,
    tube: du,
    twilight: mu,
  },
  $i = ji.default,
  Ir = Object.keys($i),
  bu = (e) => (e < 0.25 ? 1 : e < 0.5 ? 0.9 - e : 1.1 - e),
  gu = (e) => {
    const t = or(e),
      [n, r, i] = Ts(t.array()),
      o = [bu(n), r, i],
      a = _s(o);
    return or.rgb(a).hex();
  },
  Re = (e) => (t) => ({
    className: [t.className, e.className].filter(Boolean).join(' '),
    style: { ...(t.style || {}), ...(e.style || {}) },
  }),
  yu = (e, t) => {
    if (e === void 0) return t;
    if (t === void 0) return e;
    const n = typeof e,
      r = typeof t;
    switch (n) {
      case 'string':
        switch (r) {
          case 'string':
            return [t, e].filter(Boolean).join(' ');
          case 'object':
            return Re({ className: e, style: t });
          case 'function':
            return (i, ...o) => Re({ className: e })(t(i, ...o));
        }
        break;
      case 'object':
        switch (r) {
          case 'string':
            return Re({ className: t, style: e });
          case 'object':
            return { ...t, ...e };
          case 'function':
            return (i, ...o) => Re({ style: e })(t(i, ...o));
        }
        break;
      case 'function':
        switch (r) {
          case 'string':
            return (i, ...o) => e(Re(i)({ className: t }), ...o);
          case 'object':
            return (i, ...o) => e(Re(i)({ style: t }), ...o);
          case 'function':
            return (i, ...o) => e(t(i, ...o), ...o);
        }
    }
  },
  xu = (e, t) => {
    const n = Object.keys(t);
    for (const r in e) n.indexOf(r) === -1 && n.push(r);
    return n.reduce((r, i) => ((r[i] = yu(e[i], t[i])), r), {});
  },
  ku = (e, t, ...n) => {
    if (t === null) return e;
    Array.isArray(t) || (t = [t]);
    const i = t
      .map((o) => e[o])
      .filter(Boolean)
      .reduce(
        (o, a) => (
          typeof a == 'string'
            ? (o.className = [o.className, a].filter(Boolean).join(' '))
            : typeof a == 'object'
              ? (o.style = { ...o.style, ...a })
              : typeof a == 'function' && (o = { ...o, ...a(o, ...n) }),
          o
        ),
        { className: '', style: {} }
      );
    return (
      i.className || delete i.className,
      Object.keys(i.style).length === 0 && delete i.style,
      i
    );
  },
  fn = (e) =>
    Object.keys(e).reduce(
      (t, n) => (
        (t[n] = /^base/.test(n) ? gu(e[n]) : n === 'scheme' ? e[n] + ':inverted' : e[n]),
        t
      ),
      {}
    ),
  wu = wt((e, t = {}, n = {}, ...r) => {
    const { defaultBase16: i = $i, base16Themes: o = null } = t,
      a = vu(n, o);
    a && (n = { ...a, ...n });
    const l = Ir.reduce((c, h) => ((c[h] = n[h] || i[h]), c), {}),
      s = Object.keys(n).reduce((c, h) => (Ir.indexOf(h) === -1 && (c[h] = n[h]), c), {}),
      u = e(l),
      f = xu(s, u);
    return wt(ku, 2)(f, ...r);
  }, 3),
  Wi = (e) => !!e.extend,
  vu = (e, t) => {
    if ((e && Wi(e) && e.extend && (e = e.extend), typeof e == 'string')) {
      const [n, r] = e.split(':');
      (t ? (e = t[n]) : (e = ji[n]), r === 'inverted' && (e = fn(e)));
    }
    return e && Object.prototype.hasOwnProperty.call(e, 'base00') ? e : void 0;
  },
  Cu = (e) =>
    typeof e == 'string'
      ? `${e}:inverted`
      : e && Wi(e) && e.extend
        ? typeof e.extend == 'string'
          ? { ...e, extend: `${e.extend}:inverted` }
          : { ...e, extend: fn(e.extend) }
        : e && fn(e);
function Su(e) {
  const t = Object.prototype.toString.call(e).slice(8, -1);
  return t === 'Object' && typeof e[Symbol.iterator] == 'function'
    ? 'Iterable'
    : t === 'Custom' && e.constructor !== Object && e instanceof Object
      ? 'Object'
      : t;
}
function Ui({ styling: e, arrowStyle: t = 'single', expanded: n, nodeType: r, onClick: i }) {
  return B.createElement(
    'div',
    { ...e('arrowContainer', t), onClick: i },
    B.createElement(
      'div',
      { ...e(['arrow', 'arrowSign'], r, n, t) },
      '▶',
      t === 'double' && B.createElement('div', { ...e(['arrowSign', 'arrowSignInner']) }, '▶')
    )
  );
}
function Eu(e, t) {
  return e === 'Object' ? Object.keys(t).length : e === 'Array' ? t.length : 1 / 0;
}
function Au(e) {
  return typeof e.set == 'function';
}
function Iu(e, t, n, r = 0, i = 1 / 0) {
  let o;
  if (e === 'Object') {
    let a = Object.getOwnPropertyNames(t);
    (n && a.sort(n === !0 ? void 0 : n),
      (a = a.slice(r, i + 1)),
      (o = { entries: a.map((l) => ({ key: l, value: t[l] })) }));
  } else if (e === 'Array')
    o = { entries: t.slice(r, i + 1).map((a, l) => ({ key: l + r, value: a })) };
  else {
    let a = 0;
    const l = [];
    let s = !0;
    const u = Au(t);
    for (const f of t) {
      if (a > i) {
        s = !1;
        break;
      }
      (r <= a &&
        (u && Array.isArray(f)
          ? typeof f[0] == 'string' || typeof f[0] == 'number'
            ? l.push({ key: f[0], value: f[1] })
            : l.push({ key: `[entry ${a}]`, value: { '[key]': f[0], '[value]': f[1] } })
          : l.push({ key: a, value: f })),
        a++);
    }
    o = { hasMore: !s, entries: l };
  }
  return o;
}
function Ht(e, t, n) {
  const r = [];
  for (; t - e > n * n; ) n = n * n;
  for (let i = e; i <= t; i += n) r.push({ from: i, to: Math.min(t, i + n - 1) });
  return r;
}
function Fu(e, t, n, r, i = 0, o = 1 / 0) {
  const a = Iu.bind(null, e, t, n);
  if (!r) return a().entries;
  const l = o < 1 / 0,
    s = Math.min(o - i, Eu(e, t));
  if (e !== 'Iterable') {
    if (s <= r || r < 7) return a(i, o).entries;
  } else if (s <= r && !l) return a(i, o).entries;
  let u;
  if (e === 'Iterable') {
    const { hasMore: f, entries: c } = a(i, i + r - 1);
    u = f ? [...c, ...Ht(i + r, i + 2 * r - 1, r)] : c;
  } else
    u = l
      ? Ht(i, o, r)
      : [...a(0, r - 5).entries, ...Ht(r - 4, s - 5, r), ...a(s - 4, s - 1).entries];
  return u;
}
function Du(e) {
  const { styling: t, from: n, to: r, renderChildNodes: i, nodeType: o } = e,
    [a, l] = X.useState(!1),
    s = X.useCallback(() => {
      l(!a);
    }, [a]);
  return a
    ? B.createElement('div', { ...t('itemRange', a) }, i(e, n, r))
    : B.createElement(
        'div',
        { ...t('itemRange', a), onClick: s },
        B.createElement(Ui, {
          nodeType: o,
          styling: t,
          expanded: !1,
          onClick: s,
          arrowStyle: 'double',
        }),
        `${n} ... ${r}`
      );
}
function _u(e) {
  return e.to !== void 0;
}
function Hi(e, t, n) {
  const {
      nodeType: r,
      data: i,
      collectionLimit: o,
      circularCache: a,
      keyPath: l,
      postprocessValue: s,
      sortObjectKeys: u,
    } = e,
    f = [];
  return (
    Fu(r, i, u, o, t, n).forEach((c) => {
      if (_u(c))
        f.push(
          B.createElement(Du, {
            ...e,
            key: `ItemRange--${c.from}-${c.to}`,
            from: c.from,
            to: c.to,
            renderChildNodes: Hi,
          })
        );
      else {
        const { key: h, value: p } = c,
          d = a.indexOf(p) !== -1;
        f.push(
          B.createElement(qi, {
            ...e,
            postprocessValue: s,
            collectionLimit: o,
            key: `Node--${h}`,
            keyPath: [h, ...l],
            value: s(p),
            circularCache: [...a, p],
            isCircular: d,
            hideRoot: !1,
          })
        );
      }
    }),
    f
  );
}
function An(e) {
  const {
      circularCache: t = [],
      collectionLimit: n,
      createItemString: r,
      data: i,
      expandable: o,
      getItemString: a,
      hideRoot: l,
      isCircular: s,
      keyPath: u,
      labelRenderer: f,
      level: c = 0,
      nodeType: h,
      nodeTypeIndicator: p,
      shouldExpandNodeInitially: d,
      styling: m,
    } = e,
    [y, x] = X.useState(s ? !1 : d(u, i, c)),
    k = X.useCallback(() => {
      o && x(!y);
    }, [o, y]),
    S = y || (l && c === 0) ? Hi({ ...e, circularCache: t, level: c + 1 }) : null,
    F = B.createElement('span', { ...m('nestedNodeItemType', y) }, p),
    D = a(h, i, F, r(i, n), u),
    v = [u, h, y, o];
  return l
    ? B.createElement(
        'li',
        { ...m('rootNode', ...v) },
        B.createElement('ul', { ...m('rootNodeChildren', ...v) }, S)
      )
    : B.createElement(
        'li',
        { ...m('nestedNode', ...v) },
        o && B.createElement(Ui, { styling: m, nodeType: h, expanded: y, onClick: k }),
        B.createElement('label', { ...m(['label', 'nestedNodeLabel'], ...v), onClick: k }, f(...v)),
        B.createElement('span', { ...m('nestedNodeItemString', ...v), onClick: k }, D),
        B.createElement('ul', { ...m('nestedNodeChildren', ...v) }, S)
      );
}
function Tu(e) {
  const t = Object.getOwnPropertyNames(e).length;
  return `${t} ${t !== 1 ? 'keys' : 'key'}`;
}
function Pu({ data: e, ...t }) {
  return B.createElement(An, {
    ...t,
    data: e,
    nodeType: 'Object',
    nodeTypeIndicator: t.nodeType === 'Error' ? 'Error()' : '{}',
    createItemString: Tu,
    expandable: Object.getOwnPropertyNames(e).length > 0,
  });
}
function Lu(e) {
  return `${e.length} ${e.length !== 1 ? 'items' : 'item'}`;
}
function Ru({ data: e, ...t }) {
  return B.createElement(An, {
    ...t,
    data: e,
    nodeType: 'Array',
    nodeTypeIndicator: '[]',
    createItemString: Lu,
    expandable: e.length > 0,
  });
}
function Ou(e, t) {
  let n = 0,
    r = !1;
  if (Number.isSafeInteger(e.size)) n = e.size;
  else
    for (const i of e) {
      if (t && n + 1 > t) {
        r = !0;
        break;
      }
      n += 1;
    }
  return `${r ? '>' : ''}${n} ${n !== 1 ? 'entries' : 'entry'}`;
}
function Mu(e) {
  return B.createElement(An, {
    ...e,
    nodeType: 'Iterable',
    nodeTypeIndicator: '()',
    createItemString: Ou,
    expandable: !0,
  });
}
function xe({
  nodeType: e,
  styling: t,
  labelRenderer: n,
  keyPath: r,
  valueRenderer: i,
  value: o,
  valueGetter: a = (l) => l,
}) {
  return B.createElement(
    'li',
    { ...t('value', e, r) },
    B.createElement('label', { ...t(['label', 'valueLabel'], e, r) }, n(r, e, !1, !1)),
    B.createElement('span', { ...t('valueText', e, r) }, i(a(o), o, ...r))
  );
}
function qi({
  getItemString: e,
  keyPath: t,
  labelRenderer: n,
  styling: r,
  value: i,
  valueRenderer: o,
  isCustomNode: a,
  ...l
}) {
  const s = a(i) ? 'Custom' : Su(i),
    u = {
      getItemString: e,
      key: t[0],
      keyPath: t,
      labelRenderer: n,
      nodeType: s,
      styling: r,
      value: i,
      valueRenderer: o,
    },
    f = { ...l, ...u, data: i, isCustomNode: a };
  switch (s) {
    case 'Object':
    case 'Error':
    case 'WeakMap':
    case 'WeakSet':
      return B.createElement(Pu, { ...f });
    case 'Array':
      return B.createElement(Ru, { ...f });
    case 'Iterable':
    case 'Map':
    case 'Set':
      return B.createElement(Mu, { ...f });
    case 'String':
      return B.createElement(xe, { ...u, valueGetter: (c) => `"${c}"` });
    case 'Number':
      return B.createElement(xe, { ...u });
    case 'Boolean':
      return B.createElement(xe, { ...u, valueGetter: (c) => (c ? 'true' : 'false') });
    case 'Date':
      return B.createElement(xe, { ...u, valueGetter: (c) => c.toISOString() });
    case 'Null':
      return B.createElement(xe, { ...u, valueGetter: () => 'null' });
    case 'Undefined':
      return B.createElement(xe, { ...u, valueGetter: () => 'undefined' });
    case 'Function':
    case 'Symbol':
      return B.createElement(xe, { ...u, valueGetter: (c) => c.toString() });
    case 'Custom':
      return B.createElement(xe, { ...u });
    default:
      return B.createElement(xe, { ...u, valueGetter: () => `<${s}>` });
  }
}
const Nu = {
    scheme: 'solarized',
    author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
    base00: '#002b36',
    base01: '#073642',
    base02: '#586e75',
    base03: '#657b83',
    base04: '#839496',
    base05: '#93a1a1',
    base06: '#eee8d5',
    base07: '#fdf6e3',
    base08: '#dc322f',
    base09: '#cb4b16',
    base0A: '#b58900',
    base0B: '#859900',
    base0C: '#2aa198',
    base0D: '#268bd2',
    base0E: '#6c71c4',
    base0F: '#d33682',
  },
  zu = (e) => ({
    BACKGROUND_COLOR: e.base00,
    TEXT_COLOR: e.base07,
    STRING_COLOR: e.base0B,
    DATE_COLOR: e.base0B,
    NUMBER_COLOR: e.base09,
    BOOLEAN_COLOR: e.base09,
    NULL_COLOR: e.base08,
    UNDEFINED_COLOR: e.base08,
    FUNCTION_COLOR: e.base08,
    SYMBOL_COLOR: e.base08,
    LABEL_COLOR: e.base0D,
    ARROW_COLOR: e.base0D,
    ITEM_STRING_COLOR: e.base0B,
    ITEM_STRING_EXPANDED_COLOR: e.base03,
  }),
  Bu = (e) => ({
    String: e.STRING_COLOR,
    Date: e.DATE_COLOR,
    Number: e.NUMBER_COLOR,
    Boolean: e.BOOLEAN_COLOR,
    Null: e.NULL_COLOR,
    Undefined: e.UNDEFINED_COLOR,
    Function: e.FUNCTION_COLOR,
    Symbol: e.SYMBOL_COLOR,
  }),
  ju = (e) => {
    const t = zu(e);
    return {
      tree: {
        border: 0,
        padding: 0,
        marginTop: '0.5em',
        marginBottom: '0.5em',
        marginLeft: '0.125em',
        marginRight: 0,
        listStyle: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        backgroundColor: t.BACKGROUND_COLOR,
      },
      value: ({ style: n }, r, i) => ({
        style: {
          ...n,
          paddingTop: '0.25em',
          paddingRight: 0,
          marginLeft: '0.875em',
          WebkitUserSelect: 'text',
          MozUserSelect: 'text',
          wordWrap: 'break-word',
          paddingLeft: i.length > 1 ? '2.125em' : '1.25em',
          textIndent: '-0.5em',
          wordBreak: 'break-all',
        },
      }),
      label: { display: 'inline-block', color: t.LABEL_COLOR },
      valueLabel: { margin: '0 0.5em 0 0' },
      valueText: ({ style: n }, r) => ({ style: { ...n, color: Bu(t)[r] } }),
      itemRange: (n, r) => ({
        style: { paddingTop: r ? 0 : '0.25em', cursor: 'pointer', color: t.LABEL_COLOR },
      }),
      arrow: ({ style: n }, r, i) => ({
        style: {
          ...n,
          marginLeft: 0,
          transition: '150ms',
          WebkitTransition: '150ms',
          MozTransition: '150ms',
          WebkitTransform: i ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          MozTransform: i ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transform: i ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transformOrigin: '45% 50%',
          WebkitTransformOrigin: '45% 50%',
          MozTransformOrigin: '45% 50%',
          position: 'relative',
          lineHeight: '1.1em',
          fontSize: '0.75em',
        },
      }),
      arrowContainer: ({ style: n }, r) => ({
        style: {
          ...n,
          display: 'inline-block',
          paddingRight: '0.5em',
          paddingLeft: r === 'double' ? '1em' : 0,
          cursor: 'pointer',
        },
      }),
      arrowSign: { color: t.ARROW_COLOR },
      arrowSignInner: { position: 'absolute', top: 0, left: '-0.4em' },
      nestedNode: ({ style: n }, r, i, o, a) => ({
        style: {
          ...n,
          position: 'relative',
          paddingTop: '0.25em',
          marginLeft: r.length > 1 ? '0.875em' : 0,
          paddingLeft: a ? 0 : '1.125em',
        },
      }),
      rootNode: { padding: 0, margin: 0 },
      nestedNodeLabel: ({ style: n }, r, i, o, a) => ({
        style: {
          ...n,
          margin: 0,
          padding: 0,
          WebkitUserSelect: a ? 'inherit' : 'text',
          MozUserSelect: a ? 'inherit' : 'text',
          cursor: a ? 'pointer' : 'default',
        },
      }),
      nestedNodeItemString: ({ style: n }, r, i, o) => ({
        style: {
          ...n,
          paddingLeft: '0.5em',
          cursor: 'default',
          color: o ? t.ITEM_STRING_EXPANDED_COLOR : t.ITEM_STRING_COLOR,
        },
      }),
      nestedNodeItemType: { marginLeft: '0.3em', marginRight: '0.3em' },
      nestedNodeChildren: ({ style: n }, r, i) => ({
        style: { ...n, padding: 0, margin: 0, listStyle: 'none', display: i ? 'block' : 'none' },
      }),
      rootNodeChildren: { padding: 0, margin: 0, listStyle: 'none' },
    };
  },
  $u = wu(ju, { defaultBase16: Nu }),
  Fr = (e) => e,
  Wu = (e, t, n) => n === 0,
  Uu = (e, t, n, r) => B.createElement('span', null, n, ' ', r),
  Hu = ([e]) => B.createElement('span', null, e, ':'),
  qu = () => !1;
function Vu({
  data: e,
  theme: t,
  invertTheme: n,
  keyPath: r = ['root'],
  labelRenderer: i = Hu,
  valueRenderer: o = Fr,
  shouldExpandNodeInitially: a = Wu,
  hideRoot: l = !1,
  getItemString: s = Uu,
  postprocessValue: u = Fr,
  isCustomNode: f = qu,
  collectionLimit: c = 50,
  sortObjectKeys: h = !1,
}) {
  const p = X.useMemo(() => $u(n ? Cu(t) : t), [t, n]);
  return B.createElement(
    'ul',
    { ...p('tree') },
    B.createElement(qi, {
      keyPath: l ? [] : r,
      value: u(e),
      isCustomNode: f,
      styling: p,
      labelRenderer: i,
      valueRenderer: o,
      shouldExpandNodeInitially: a,
      hideRoot: l,
      getItemString: s,
      postprocessValue: u,
      collectionLimit: c,
      sortObjectKeys: h,
    })
  );
}
function Gu(e, t) {
  const n = {};
  return (e[e.length - 1] === '' ? [...e, ''] : e)
    .join((n.padRight ? ' ' : '') + ',' + (n.padLeft === !1 ? '' : ' '))
    .trim();
}
const Yu = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Xu = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ju = {};
function Dr(e, t) {
  return (Ju.jsx ? Xu : Yu).test(e);
}
const Ku = /[ \t\n\f\r]/g;
function Qu(e) {
  return typeof e == 'object' ? (e.type === 'text' ? _r(e.value) : !1) : _r(e);
}
function _r(e) {
  return e.replace(Ku, '') === '';
}
class ot {
  constructor(t, n, r) {
    ((this.property = t), (this.normal = n), r && (this.space = r));
  }
}
ot.prototype.property = {};
ot.prototype.normal = {};
ot.prototype.space = null;
function Vi(e, t) {
  const n = {},
    r = {};
  let i = -1;
  for (; ++i < e.length; ) (Object.assign(n, e[i].property), Object.assign(r, e[i].normal));
  return new ot(n, r, t);
}
function hn(e) {
  return e.toLowerCase();
}
class le {
  constructor(t, n) {
    ((this.property = t), (this.attribute = n));
  }
}
le.prototype.space = null;
le.prototype.boolean = !1;
le.prototype.booleanish = !1;
le.prototype.overloadedBoolean = !1;
le.prototype.number = !1;
le.prototype.commaSeparated = !1;
le.prototype.spaceSeparated = !1;
le.prototype.commaOrSpaceSeparated = !1;
le.prototype.mustUseProperty = !1;
le.prototype.defined = !1;
let Zu = 0;
const z = _e(),
  Y = _e(),
  Gi = _e(),
  E = _e(),
  G = _e(),
  ze = _e(),
  ie = _e();
function _e() {
  return 2 ** ++Zu;
}
const pn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: z,
        booleanish: Y,
        commaOrSpaceSeparated: ie,
        commaSeparated: ze,
        number: E,
        overloadedBoolean: Gi,
        spaceSeparated: G,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qt = Object.keys(pn);
class In extends le {
  constructor(t, n, r, i) {
    let o = -1;
    if ((super(t, n), Tr(this, 'space', i), typeof r == 'number'))
      for (; ++o < qt.length; ) {
        const a = qt[o];
        Tr(this, qt[o], (r & pn[a]) === pn[a]);
      }
  }
}
In.prototype.defined = !0;
function Tr(e, t, n) {
  n && (e[t] = n);
}
const ec = {}.hasOwnProperty;
function Ue(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (ec.call(e.properties, r)) {
      const i = e.properties[r],
        o = new In(r, e.transform(e.attributes || {}, r), i, e.space);
      (e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0),
        (t[r] = o),
        (n[hn(r)] = r),
        (n[hn(o.attribute)] = r));
    }
  return new ot(t, n, e.space);
}
const Yi = Ue({
    space: 'xlink',
    transform(e, t) {
      return 'xlink:' + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  Xi = Ue({
    space: 'xml',
    transform(e, t) {
      return 'xml:' + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function Ji(e, t) {
  return t in e ? e[t] : t;
}
function Ki(e, t) {
  return Ji(e, t.toLowerCase());
}
const Qi = Ue({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: Ki,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  Zi = Ue({
    transform(e, t) {
      return t === 'role' ? t : 'aria-' + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Y,
      ariaAutoComplete: null,
      ariaBusy: Y,
      ariaChecked: Y,
      ariaColCount: E,
      ariaColIndex: E,
      ariaColSpan: E,
      ariaControls: G,
      ariaCurrent: null,
      ariaDescribedBy: G,
      ariaDetails: null,
      ariaDisabled: Y,
      ariaDropEffect: G,
      ariaErrorMessage: null,
      ariaExpanded: Y,
      ariaFlowTo: G,
      ariaGrabbed: Y,
      ariaHasPopup: null,
      ariaHidden: Y,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: G,
      ariaLevel: E,
      ariaLive: null,
      ariaModal: Y,
      ariaMultiLine: Y,
      ariaMultiSelectable: Y,
      ariaOrientation: null,
      ariaOwns: G,
      ariaPlaceholder: null,
      ariaPosInSet: E,
      ariaPressed: Y,
      ariaReadOnly: Y,
      ariaRelevant: null,
      ariaRequired: Y,
      ariaRoleDescription: G,
      ariaRowCount: E,
      ariaRowIndex: E,
      ariaRowSpan: E,
      ariaSelected: Y,
      ariaSetSize: E,
      ariaSort: null,
      ariaValueMax: E,
      ariaValueMin: E,
      ariaValueNow: E,
      ariaValueText: null,
      role: null,
    },
  }),
  tc = Ue({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: Ki,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ze,
      acceptCharset: G,
      accessKey: G,
      action: null,
      allow: null,
      allowFullScreen: z,
      allowPaymentRequest: z,
      allowUserMedia: z,
      alt: null,
      as: null,
      async: z,
      autoCapitalize: null,
      autoComplete: G,
      autoFocus: z,
      autoPlay: z,
      blocking: G,
      capture: null,
      charSet: null,
      checked: z,
      cite: null,
      className: G,
      cols: E,
      colSpan: null,
      content: null,
      contentEditable: Y,
      controls: z,
      controlsList: G,
      coords: E | ze,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: z,
      defer: z,
      dir: null,
      dirName: null,
      disabled: z,
      download: Gi,
      draggable: Y,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: z,
      formTarget: null,
      headers: G,
      height: E,
      hidden: z,
      high: E,
      href: null,
      hrefLang: null,
      htmlFor: G,
      httpEquiv: G,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: z,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: z,
      itemId: null,
      itemProp: G,
      itemRef: G,
      itemScope: z,
      itemType: G,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: z,
      low: E,
      manifest: null,
      max: null,
      maxLength: E,
      media: null,
      method: null,
      min: null,
      minLength: E,
      multiple: z,
      muted: z,
      name: null,
      nonce: null,
      noModule: z,
      noValidate: z,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: z,
      optimum: E,
      pattern: null,
      ping: G,
      placeholder: null,
      playsInline: z,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: z,
      referrerPolicy: null,
      rel: G,
      required: z,
      reversed: z,
      rows: E,
      rowSpan: E,
      sandbox: G,
      scope: null,
      scoped: z,
      seamless: z,
      selected: z,
      shadowRootClonable: z,
      shadowRootDelegatesFocus: z,
      shadowRootMode: null,
      shape: null,
      size: E,
      sizes: null,
      slot: null,
      span: E,
      spellCheck: Y,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: E,
      step: null,
      style: null,
      tabIndex: E,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: z,
      useMap: null,
      value: Y,
      width: E,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: G,
      axis: null,
      background: null,
      bgColor: null,
      border: E,
      borderColor: null,
      bottomMargin: E,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: z,
      declare: z,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: E,
      leftMargin: E,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: E,
      marginWidth: E,
      noResize: z,
      noHref: z,
      noShade: z,
      noWrap: z,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: E,
      rules: null,
      scheme: null,
      scrolling: Y,
      standby: null,
      summary: null,
      text: null,
      topMargin: E,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: E,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: z,
      disableRemotePlayback: z,
      prefix: null,
      property: null,
      results: E,
      security: null,
      unselectable: null,
    },
  }),
  nc = Ue({
    space: 'svg',
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    transform: Ji,
    properties: {
      about: ie,
      accentHeight: E,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: E,
      amplitude: E,
      arabicForm: null,
      ascent: E,
      attributeName: null,
      attributeType: null,
      azimuth: E,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: E,
      by: null,
      calcMode: null,
      capHeight: E,
      className: G,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: E,
      diffuseConstant: E,
      direction: null,
      display: null,
      dur: null,
      divisor: E,
      dominantBaseline: null,
      download: z,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: E,
      enableBackground: null,
      end: null,
      event: null,
      exponent: E,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: E,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: ze,
      g2: ze,
      glyphName: ze,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: E,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: E,
      horizOriginX: E,
      horizOriginY: E,
      id: null,
      ideographic: E,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: E,
      k: E,
      k1: E,
      k2: E,
      k3: E,
      k4: E,
      kernelMatrix: ie,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: E,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: E,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: E,
      overlineThickness: E,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: E,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: G,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: E,
      pointsAtY: E,
      pointsAtZ: E,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ie,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ie,
      rev: ie,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ie,
      requiredFeatures: ie,
      requiredFonts: ie,
      requiredFormats: ie,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: E,
      specularExponent: E,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: E,
      strikethroughThickness: E,
      string: null,
      stroke: null,
      strokeDashArray: ie,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: E,
      strokeOpacity: E,
      strokeWidth: null,
      style: null,
      surfaceScale: E,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ie,
      tabIndex: E,
      tableValues: null,
      target: null,
      targetX: E,
      targetY: E,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ie,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: E,
      underlineThickness: E,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: E,
      values: null,
      vAlphabetic: E,
      vMathematical: E,
      vectorEffect: null,
      vHanging: E,
      vIdeographic: E,
      version: null,
      vertAdvY: E,
      vertOriginX: E,
      vertOriginY: E,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: E,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  rc = /^data[-\w.:]+$/i,
  Pr = /-[a-z]/g,
  ic = /[A-Z]/g;
function ac(e, t) {
  const n = hn(t);
  let r = t,
    i = le;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === 'data' && rc.test(t)) {
    if (t.charAt(4) === '-') {
      const o = t.slice(5).replace(Pr, lc);
      r = 'data' + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Pr.test(o)) {
        let a = o.replace(ic, oc);
        (a.charAt(0) !== '-' && (a = '-' + a), (t = 'data' + a));
      }
    }
    i = In;
  }
  return new i(r, t);
}
function oc(e) {
  return '-' + e.toLowerCase();
}
function lc(e) {
  return e.charAt(1).toUpperCase();
}
const sc = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  uc = Vi([Xi, Yi, Qi, Zi, tc], 'html'),
  Fn = Vi([Xi, Yi, Qi, Zi, nc], 'svg');
function cc(e) {
  return e.join(' ').trim();
}
var Oe = {},
  Vt,
  Lr;
function fc() {
  if (Lr) return Vt;
  Lr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t = /\n/g,
    n = /^\s*/,
    r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i = /^:\s*/,
    o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    a = /^[;\s]*/,
    l = /^\s+|\s+$/g,
    s = `
`,
    u = '/',
    f = '*',
    c = '',
    h = 'comment',
    p = 'declaration';
  Vt = function (m, y) {
    if (typeof m != 'string') throw new TypeError('First argument must be a string');
    if (!m) return [];
    y = y || {};
    var x = 1,
      k = 1;
    function S(P) {
      var I = P.match(t);
      I && (x += I.length);
      var M = P.lastIndexOf(s);
      k = ~M ? P.length - M : k + P.length;
    }
    function F() {
      var P = { line: x, column: k };
      return function (I) {
        return ((I.position = new D(P)), U(), I);
      };
    }
    function D(P) {
      ((this.start = P), (this.end = { line: x, column: k }), (this.source = y.source));
    }
    D.prototype.content = m;
    function v(P) {
      var I = new Error(y.source + ':' + x + ':' + k + ': ' + P);
      if (
        ((I.reason = P),
        (I.filename = y.source),
        (I.line = x),
        (I.column = k),
        (I.source = m),
        !y.silent)
      )
        throw I;
    }
    function O(P) {
      var I = P.exec(m);
      if (I) {
        var M = I[0];
        return (S(M), (m = m.slice(M.length)), I);
      }
    }
    function U() {
      O(n);
    }
    function H(P) {
      var I;
      for (P = P || []; (I = w()); ) I !== !1 && P.push(I);
      return P;
    }
    function w() {
      var P = F();
      if (!(u != m.charAt(0) || f != m.charAt(1))) {
        for (var I = 2; c != m.charAt(I) && (f != m.charAt(I) || u != m.charAt(I + 1)); ) ++I;
        if (((I += 2), c === m.charAt(I - 1))) return v('End of comment missing');
        var M = m.slice(2, I - 2);
        return ((k += 2), S(M), (m = m.slice(I)), (k += 2), P({ type: h, comment: M }));
      }
    }
    function _() {
      var P = F(),
        I = O(r);
      if (I) {
        if ((w(), !O(i))) return v("property missing ':'");
        var M = O(o),
          J = P({ type: p, property: d(I[0].replace(e, c)), value: M ? d(M[0].replace(e, c)) : c });
        return (O(a), J);
      }
    }
    function T() {
      var P = [];
      H(P);
      for (var I; (I = _()); ) I !== !1 && (P.push(I), H(P));
      return P;
    }
    return (U(), T());
  };
  function d(m) {
    return m ? m.replace(l, c) : c;
  }
  return Vt;
}
var Rr;
function hc() {
  if (Rr) return Oe;
  Rr = 1;
  var e =
    (Oe && Oe.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  (Object.defineProperty(Oe, '__esModule', { value: !0 }), (Oe.default = n));
  var t = e(fc());
  function n(r, i) {
    var o = null;
    if (!r || typeof r != 'string') return o;
    var a = (0, t.default)(r),
      l = typeof i == 'function';
    return (
      a.forEach(function (s) {
        if (s.type === 'declaration') {
          var u = s.property,
            f = s.value;
          l ? i(u, f, s) : f && ((o = o || {}), (o[u] = f));
        }
      }),
      o
    );
  }
  return Oe;
}
var pc = hc();
const Or = vn(pc),
  dc = Or.default || Or,
  ea = ta('end'),
  Dn = ta('start');
function ta(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (typeof r.line == 'number' && r.line > 0 && typeof r.column == 'number' && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == 'number' && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function mc(e) {
  const t = Dn(e),
    n = ea(e);
  if (t && n) return { start: t, end: n };
}
function et(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
      ? Mr(e.position)
      : 'start' in e || 'end' in e
        ? Mr(e)
        : 'line' in e || 'column' in e
          ? dn(e)
          : '';
}
function dn(e) {
  return Nr(e && e.line) + ':' + Nr(e && e.column);
}
function Mr(e) {
  return dn(e && e.start) + '-' + dn(e && e.end);
}
function Nr(e) {
  return e && typeof e == 'number' ? e : 1;
}
class ee extends Error {
  constructor(t, n, r) {
    (super(), typeof n == 'string' && ((r = n), (n = void 0)));
    let i = '',
      o = {},
      a = !1;
    if (
      (n &&
        ('line' in n && 'column' in n
          ? (o = { place: n })
          : 'start' in n && 'end' in n
            ? (o = { place: n })
            : 'type' in n
              ? (o = { ancestors: [n], place: n.position })
              : (o = { ...n })),
      typeof t == 'string' ? (i = t) : !o.cause && t && ((a = !0), (i = t.message), (o.cause = t)),
      !o.ruleId && !o.source && typeof r == 'string')
    ) {
      const s = r.indexOf(':');
      s === -1 ? (o.ruleId = r) : ((o.source = r.slice(0, s)), (o.ruleId = r.slice(s + 1)));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const l = o.place && 'start' in o.place ? o.place.start : o.place;
    ((this.ancestors = o.ancestors || void 0),
      (this.cause = o.cause || void 0),
      (this.column = l ? l.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = l ? l.line : void 0),
      (this.name = et(o.place) || '1:1'),
      (this.place = o.place || void 0),
      (this.reason = this.message),
      (this.ruleId = o.ruleId || void 0),
      (this.source = o.source || void 0),
      (this.stack = a && o.cause && typeof o.cause.stack == 'string' ? o.cause.stack : ''),
      this.actual,
      this.expected,
      this.note,
      this.url);
  }
}
ee.prototype.file = '';
ee.prototype.name = '';
ee.prototype.reason = '';
ee.prototype.message = '';
ee.prototype.stack = '';
ee.prototype.column = void 0;
ee.prototype.line = void 0;
ee.prototype.ancestors = void 0;
ee.prototype.cause = void 0;
ee.prototype.fatal = void 0;
ee.prototype.place = void 0;
ee.prototype.ruleId = void 0;
ee.prototype.source = void 0;
const _n = {}.hasOwnProperty,
  bc = new Map(),
  gc = /[A-Z]/g,
  yc = /-([a-z])/g,
  xc = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  kc = new Set(['td', 'th']),
  na = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function wc(e, t) {
  if (!t || t.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    r = Dc(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof t.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    r = Fc(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || 'react',
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === 'svg' ? Fn : uc,
      stylePropertyNameCase: t.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    o = ra(i, e, void 0);
  return o && typeof o != 'string' ? o : i.create(e, i.Fragment, { children: o || void 0 }, void 0);
}
function ra(e, t, n) {
  if (t.type === 'element') return vc(e, t, n);
  if (t.type === 'mdxFlowExpression' || t.type === 'mdxTextExpression') return Cc(e, t);
  if (t.type === 'mdxJsxFlowElement' || t.type === 'mdxJsxTextElement') return Ec(e, t, n);
  if (t.type === 'mdxjsEsm') return Sc(e, t);
  if (t.type === 'root') return Ac(e, t, n);
  if (t.type === 'text') return Ic(e, t);
}
function vc(e, t, n) {
  const r = e.schema;
  let i = r;
  (t.tagName.toLowerCase() === 'svg' && r.space === 'html' && ((i = Fn), (e.schema = i)),
    e.ancestors.push(t));
  const o = aa(e, t.tagName, !1),
    a = _c(e, t);
  let l = Pn(e, t);
  return (
    xc.has(t.tagName) &&
      (l = l.filter(function (s) {
        return typeof s == 'string' ? !Qu(s) : !0;
      })),
    ia(e, a, o, t),
    Tn(a, l),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, a, n)
  );
}
function Cc(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return (r.type, e.evaluater.evaluateExpression(r.expression));
  }
  rt(e, t.position);
}
function Sc(e, t) {
  if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
  rt(e, t.position);
}
function Ec(e, t, n) {
  const r = e.schema;
  let i = r;
  (t.name === 'svg' && r.space === 'html' && ((i = Fn), (e.schema = i)), e.ancestors.push(t));
  const o = t.name === null ? e.Fragment : aa(e, t.name, !0),
    a = Tc(e, t),
    l = Pn(e, t);
  return (ia(e, a, o, t), Tn(a, l), e.ancestors.pop(), (e.schema = r), e.create(t, o, a, n));
}
function Ac(e, t, n) {
  const r = {};
  return (Tn(r, Pn(e, t)), e.create(t, e.Fragment, r, n));
}
function Ic(e, t) {
  return t.value;
}
function ia(e, t, n, r) {
  typeof n != 'string' && n !== e.Fragment && e.passNode && (t.node = r);
}
function Tn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Fc(e, t, n) {
  return r;
  function r(i, o, a, l) {
    const u = Array.isArray(a.children) ? n : t;
    return l ? u(o, a, l) : u(o, a);
  }
}
function Dc(e, t) {
  return n;
  function n(r, i, o, a) {
    const l = Array.isArray(o.children),
      s = Dn(r);
    return t(
      i,
      o,
      a,
      l,
      { columnNumber: s ? s.column - 1 : void 0, fileName: e, lineNumber: s ? s.line : void 0 },
      void 0
    );
  }
}
function _c(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== 'children' && _n.call(t.properties, i)) {
      const o = Pc(e, i, t.properties[i]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle && a === 'align' && typeof l == 'string' && kc.has(t.tagName)
          ? (r = l)
          : (n[a] = l);
      }
    }
  if (r) {
    const o = n.style || (n.style = {});
    o[e.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = r;
  }
  return n;
}
function Tc(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === 'mdxJsxExpressionAttribute')
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const l = a.properties[0];
        (l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument)));
      } else rt(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == 'object')
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          (l.type, (o = e.evaluater.evaluateExpression(l.expression)));
        } else rt(e, t.position);
      else o = r.value === null ? !0 : r.value;
      n[i] = o;
    }
  return n;
}
function Pn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : bc;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const s =
        o.type === 'element'
          ? o.tagName
          : o.type === 'mdxJsxFlowElement' || o.type === 'mdxJsxTextElement'
            ? o.name
            : void 0;
      if (s) {
        const u = i.get(s) || 0;
        ((a = s + '-' + u), i.set(s, u + 1));
      }
    }
    const l = ra(e, o, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Pc(e, t, n) {
  const r = ac(e.schema, t);
  if (!(n == null || (typeof n == 'number' && Number.isNaN(n)))) {
    if ((Array.isArray(n) && (n = r.commaSeparated ? Gu(n) : cc(n)), r.property === 'style')) {
      let i = typeof n == 'object' ? n : Lc(e, String(n));
      return (e.stylePropertyNameCase === 'css' && (i = Rc(i)), ['style', i]);
    }
    return [
      e.elementAttributeNameCase === 'react' && r.space
        ? sc[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function Lc(e, t) {
  const n = {};
  try {
    dc(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = i,
        a = new ee('Cannot parse `style` attribute', {
          ancestors: e.ancestors,
          cause: o,
          ruleId: 'style',
          source: 'hast-util-to-jsx-runtime',
        });
      throw ((a.file = e.filePath || void 0), (a.url = na + '#cannot-parse-style-attribute'), a);
    }
  }
  return n;
  function r(i, o) {
    let a = i;
    (a.slice(0, 2) !== '--' &&
      (a.slice(0, 4) === '-ms-' && (a = 'ms-' + a.slice(4)), (a = a.replace(yc, Mc))),
      (n[a] = o));
  }
}
function aa(e, t, n) {
  let r;
  if (!n) r = { type: 'Literal', value: t };
  else if (t.includes('.')) {
    const i = t.split('.');
    let o = -1,
      a;
    for (; ++o < i.length; ) {
      const l = Dr(i[o]) ? { type: 'Identifier', name: i[o] } : { type: 'Literal', value: i[o] };
      a = a
        ? {
            type: 'MemberExpression',
            object: a,
            property: l,
            computed: !!(o && l.type === 'Literal'),
            optional: !1,
          }
        : l;
    }
    r = a;
  } else
    r =
      Dr(t) && !/^[a-z]/.test(t) ? { type: 'Identifier', name: t } : { type: 'Literal', value: t };
  if (r.type === 'Literal') {
    const i = r.value;
    return _n.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  rt(e);
}
function rt(e, t) {
  const n = new ee('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: e.ancestors,
    place: t,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (n.file = e.filePath || void 0),
    (n.url = na + '#cannot-handle-mdx-estrees-without-createevaluater'),
    n
  );
}
function Rc(e) {
  const t = {};
  let n;
  for (n in e) _n.call(e, n) && (t[Oc(n)] = e[n]);
  return t;
}
function Oc(e) {
  let t = e.replace(gc, Nc);
  return (t.slice(0, 3) === 'ms-' && (t = '-' + t), t);
}
function Mc(e, t) {
  return t.toUpperCase();
}
function Nc(e) {
  return '-' + e.toLowerCase();
}
const Gt = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  zc = {};
function Ln(e, t) {
  const n = zc,
    r = typeof n.includeImageAlt == 'boolean' ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == 'boolean' ? n.includeHtml : !0;
  return oa(e, r, i);
}
function oa(e, t, n) {
  if (Bc(e)) {
    if ('value' in e) return e.type === 'html' && !n ? '' : e.value;
    if (t && 'alt' in e && e.alt) return e.alt;
    if ('children' in e) return zr(e.children, t, n);
  }
  return Array.isArray(e) ? zr(e, t, n) : '';
}
function zr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = oa(e[i], t, n);
  return r.join('');
}
function Bc(e) {
  return !!(e && typeof e == 'object');
}
const Br = document.createElement('i');
function Rn(e) {
  const t = '&' + e + ';';
  Br.innerHTML = t;
  const n = Br.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== 'semi') || n === t ? !1 : n;
}
function ae(e, t, n, r) {
  const i = e.length;
  let o = 0,
    a;
  if ((t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t), (n = n > 0 ? n : 0), r.length < 1e4))
    ((a = Array.from(r)), a.unshift(t, n), e.splice(...a));
  else
    for (n && e.splice(t, n); o < r.length; )
      ((a = r.slice(o, o + 1e4)), a.unshift(t, 0), e.splice(...a), (o += 1e4), (t += 1e4));
}
function oe(e, t) {
  return e.length > 0 ? (ae(e, e.length, 0, t), e) : t;
}
const jr = {}.hasOwnProperty;
function la(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) jc(t, e[n]);
  return t;
}
function jc(e, t) {
  let n;
  for (n in t) {
    const i = (jr.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n];
    let a;
    if (o)
      for (a in o) {
        jr.call(i, a) || (i[a] = []);
        const l = o[a];
        $c(i[a], Array.isArray(l) ? l : l ? [l] : []);
      }
  }
}
function $c(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === 'after' ? e : r).push(t[n]);
  ae(e, 0, 0, r);
}
function sa(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? '�'
    : String.fromCodePoint(n);
}
function he(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const te = Se(/[A-Za-z]/),
  Z = Se(/[\dA-Za-z]/),
  Wc = Se(/[#-'*+\--9=?A-Z^-~]/);
function vt(e) {
  return e !== null && (e < 32 || e === 127);
}
const mn = Se(/\d/),
  Uc = Se(/[\dA-Fa-f]/),
  Hc = Se(/[!-/:-@[-`{-~]/);
function L(e) {
  return e !== null && e < -2;
}
function V(e) {
  return e !== null && (e < 0 || e === 32);
}
function j(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ft = Se(new RegExp('\\p{P}|\\p{S}', 'u')),
  Fe = Se(/\s/);
function Se(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function He(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = '';
    if (o === 37 && Z(e.charCodeAt(n + 1)) && Z(e.charCodeAt(n + 2))) i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const l = e.charCodeAt(n + 1);
      o < 56320 && l > 56319 && l < 57344 ? ((a = String.fromCharCode(o, l)), (i = 1)) : (a = '�');
    } else a = String.fromCharCode(o);
    (a && (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + i + 1), (a = '')),
      i && ((n += i), (i = 0)));
  }
  return t.join('') + e.slice(r);
}
function W(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(s) {
    return j(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return j(s) && o++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const qc = { tokenize: Vc };
function Vc(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (e.enter('lineEnding'), e.consume(l), e.exit('lineEnding'), W(e, t, 'linePrefix'));
  }
  function i(l) {
    return (e.enter('paragraph'), o(l));
  }
  function o(l) {
    const s = e.enter('chunkText', { contentType: 'text', previous: n });
    return (n && (n.next = s), (n = s), a(l));
  }
  function a(l) {
    if (l === null) {
      (e.exit('chunkText'), e.exit('paragraph'), e.consume(l));
      return;
    }
    return L(l) ? (e.consume(l), e.exit('chunkText'), o) : (e.consume(l), a);
  }
}
const Gc = { tokenize: Yc },
  $r = { tokenize: Xc };
function Yc(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    o,
    a;
  return l;
  function l(S) {
    if (r < n.length) {
      const F = n[r];
      return ((t.containerState = F[1]), e.attempt(F[0].continuation, s, u)(S));
    }
    return u(S);
  }
  function s(S) {
    if ((r++, t.containerState._closeFlow)) {
      ((t.containerState._closeFlow = void 0), i && k());
      const F = t.events.length;
      let D = F,
        v;
      for (; D--; )
        if (t.events[D][0] === 'exit' && t.events[D][1].type === 'chunkFlow') {
          v = t.events[D][1].end;
          break;
        }
      x(r);
      let O = F;
      for (; O < t.events.length; ) ((t.events[O][1].end = { ...v }), O++);
      return (ae(t.events, D + 1, 0, t.events.slice(F)), (t.events.length = O), u(S));
    }
    return l(S);
  }
  function u(S) {
    if (r === n.length) {
      if (!i) return h(S);
      if (i.currentConstruct && i.currentConstruct.concrete) return d(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return ((t.containerState = {}), e.check($r, f, c)(S));
  }
  function f(S) {
    return (i && k(), x(r), h(S));
  }
  function c(S) {
    return ((t.parser.lazy[t.now().line] = r !== n.length), (a = t.now().offset), d(S));
  }
  function h(S) {
    return ((t.containerState = {}), e.attempt($r, p, d)(S));
  }
  function p(S) {
    return (r++, n.push([t.currentConstruct, t.containerState]), h(S));
  }
  function d(S) {
    if (S === null) {
      (i && k(), x(0), e.consume(S));
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter('chunkFlow', { _tokenizer: i, contentType: 'flow', previous: o }),
      m(S)
    );
  }
  function m(S) {
    if (S === null) {
      (y(e.exit('chunkFlow'), !0), x(0), e.consume(S));
      return;
    }
    return L(S)
      ? (e.consume(S), y(e.exit('chunkFlow')), (r = 0), (t.interrupt = void 0), l)
      : (e.consume(S), m);
  }
  function y(S, F) {
    const D = t.sliceStream(S);
    if (
      (F && D.push(null),
      (S.previous = o),
      o && (o.next = S),
      (o = S),
      i.defineSkip(S.start),
      i.write(D),
      t.parser.lazy[S.start.line])
    ) {
      let v = i.events.length;
      for (; v--; )
        if (
          i.events[v][1].start.offset < a &&
          (!i.events[v][1].end || i.events[v][1].end.offset > a)
        )
          return;
      const O = t.events.length;
      let U = O,
        H,
        w;
      for (; U--; )
        if (t.events[U][0] === 'exit' && t.events[U][1].type === 'chunkFlow') {
          if (H) {
            w = t.events[U][1].end;
            break;
          }
          H = !0;
        }
      for (x(r), v = O; v < t.events.length; ) ((t.events[v][1].end = { ...w }), v++);
      (ae(t.events, U + 1, 0, t.events.slice(O)), (t.events.length = v));
    }
  }
  function x(S) {
    let F = n.length;
    for (; F-- > S; ) {
      const D = n[F];
      ((t.containerState = D[1]), D[0].exit.call(t, e));
    }
    n.length = S;
  }
  function k() {
    (i.write([null]), (o = void 0), (i = void 0), (t.containerState._closeFlow = void 0));
  }
}
function Xc(e, t, n) {
  return W(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  );
}
function We(e) {
  if (e === null || V(e) || Fe(e)) return 1;
  if (Ft(e)) return 2;
}
function Dt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && ((t = o(t, n)), r.push(o));
  }
  return t;
}
const bn = { name: 'attention', resolveAll: Jc, tokenize: Kc };
function Jc(e, t) {
  let n = -1,
    r,
    i,
    o,
    a,
    l,
    s,
    u,
    f;
  for (; ++n < e.length; )
    if (e[n][0] === 'enter' && e[n][1].type === 'attentionSequence' && e[n][1]._close) {
      for (r = n; r--; )
        if (
          e[r][0] === 'exit' &&
          e[r][1].type === 'attentionSequence' &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const c = { ...e[r][1].end },
            h = { ...e[n][1].start };
          (Wr(c, -s),
            Wr(h, s),
            (a = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: c,
              end: { ...e[r][1].end },
            }),
            (l = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...e[n][1].start },
              end: h,
            }),
            (o = {
              type: s > 1 ? 'strongText' : 'emphasisText',
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = { type: s > 1 ? 'strong' : 'emphasis', start: { ...a.start }, end: { ...l.end } }),
            (e[r][1].end = { ...a.start }),
            (e[n][1].start = { ...l.end }),
            (u = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (u = oe(u, [
                ['enter', e[r][1], t],
                ['exit', e[r][1], t],
              ])),
            (u = oe(u, [
              ['enter', i, t],
              ['enter', a, t],
              ['exit', a, t],
              ['enter', o, t],
            ])),
            (u = oe(u, Dt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t))),
            (u = oe(u, [
              ['exit', o, t],
              ['enter', l, t],
              ['exit', l, t],
              ['exit', i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((f = 2),
                (u = oe(u, [
                  ['enter', e[n][1], t],
                  ['exit', e[n][1], t],
                ])))
              : (f = 0),
            ae(e, r - 1, n - r + 3, u),
            (n = r + u.length - f - 2));
          break;
        }
    }
  for (n = -1; ++n < e.length; ) e[n][1].type === 'attentionSequence' && (e[n][1].type = 'data');
  return e;
}
function Kc(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = We(r);
  let o;
  return a;
  function a(s) {
    return ((o = s), e.enter('attentionSequence'), l(s));
  }
  function l(s) {
    if (s === o) return (e.consume(s), l);
    const u = e.exit('attentionSequence'),
      f = We(s),
      c = !f || (f === 2 && i) || n.includes(s),
      h = !i || (i === 2 && f) || n.includes(r);
    return (
      (u._open = !!(o === 42 ? c : c && (i || !h))),
      (u._close = !!(o === 42 ? h : h && (f || !c))),
      t(s)
    );
  }
}
function Wr(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
const Qc = { name: 'autolink', tokenize: Zc };
function Zc(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(p),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      o
    );
  }
  function o(p) {
    return te(p) ? (e.consume(p), a) : p === 64 ? n(p) : u(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Z(p) ? ((r = 1), l(p)) : u(p);
  }
  function l(p) {
    return p === 58
      ? (e.consume(p), (r = 0), s)
      : (p === 43 || p === 45 || p === 46 || Z(p)) && r++ < 32
        ? (e.consume(p), l)
        : ((r = 0), u(p));
  }
  function s(p) {
    return p === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(p),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        t)
      : p === null || p === 32 || p === 60 || vt(p)
        ? n(p)
        : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), f) : Wc(p) ? (e.consume(p), u) : n(p);
  }
  function f(p) {
    return Z(p) ? c(p) : n(p);
  }
  function c(p) {
    return p === 46
      ? (e.consume(p), (r = 0), f)
      : p === 62
        ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
          e.enter('autolinkMarker'),
          e.consume(p),
          e.exit('autolinkMarker'),
          e.exit('autolink'),
          t)
        : h(p);
  }
  function h(p) {
    if ((p === 45 || Z(p)) && r++ < 63) {
      const d = p === 45 ? h : c;
      return (e.consume(p), d);
    }
    return n(p);
  }
}
const lt = { partial: !0, tokenize: ef };
function ef(e, t, n) {
  return r;
  function r(o) {
    return j(o) ? W(e, i, 'linePrefix')(o) : i(o);
  }
  function i(o) {
    return o === null || L(o) ? t(o) : n(o);
  }
}
const ua = { continuation: { tokenize: nf }, exit: rf, name: 'blockQuote', tokenize: tf };
function tf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const l = r.containerState;
      return (
        l.open || (e.enter('blockQuote', { _container: !0 }), (l.open = !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(a),
        e.exit('blockQuoteMarker'),
        o
      );
    }
    return n(a);
  }
  function o(a) {
    return j(a)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(a),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        t)
      : (e.exit('blockQuotePrefix'), t(a));
  }
}
function nf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return j(a)
      ? W(
          e,
          o,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(a)
      : o(a);
  }
  function o(a) {
    return e.attempt(ua, t, n)(a);
  }
}
function rf(e) {
  e.exit('blockQuote');
}
const ca = { name: 'characterEscape', tokenize: af };
function af(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(o),
      e.exit('escapeMarker'),
      i
    );
  }
  function i(o) {
    return Hc(o)
      ? (e.enter('characterEscapeValue'),
        e.consume(o),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        t)
      : n(o);
  }
}
const fa = { name: 'characterReference', tokenize: of };
function of(e, t, n) {
  const r = this;
  let i = 0,
    o,
    a;
  return l;
  function l(c) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(c),
      e.exit('characterReferenceMarker'),
      s
    );
  }
  function s(c) {
    return c === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(c),
        e.exit('characterReferenceMarkerNumeric'),
        u)
      : (e.enter('characterReferenceValue'), (o = 31), (a = Z), f(c));
  }
  function u(c) {
    return c === 88 || c === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(c),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (o = 6),
        (a = Uc),
        f)
      : (e.enter('characterReferenceValue'), (o = 7), (a = mn), f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const h = e.exit('characterReferenceValue');
      return a === Z && !Rn(r.sliceSerialize(h))
        ? n(c)
        : (e.enter('characterReferenceMarker'),
          e.consume(c),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          t);
    }
    return a(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const Ur = { partial: !0, tokenize: sf },
  Hr = { concrete: !0, name: 'codeFenced', tokenize: lf };
function lf(e, t, n) {
  const r = this,
    i = { partial: !0, tokenize: D };
  let o = 0,
    a = 0,
    l;
  return s;
  function s(v) {
    return u(v);
  }
  function u(v) {
    const O = r.events[r.events.length - 1];
    return (
      (o = O && O[1].type === 'linePrefix' ? O[2].sliceSerialize(O[1], !0).length : 0),
      (l = v),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      f(v)
    );
  }
  function f(v) {
    return v === l
      ? (a++, e.consume(v), f)
      : a < 3
        ? n(v)
        : (e.exit('codeFencedFenceSequence'), j(v) ? W(e, c, 'whitespace')(v) : c(v));
  }
  function c(v) {
    return v === null || L(v)
      ? (e.exit('codeFencedFence'), r.interrupt ? t(v) : e.check(Ur, m, F)(v))
      : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), h(v));
  }
  function h(v) {
    return v === null || L(v)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), c(v))
      : j(v)
        ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), W(e, p, 'whitespace')(v))
        : v === 96 && v === l
          ? n(v)
          : (e.consume(v), h);
  }
  function p(v) {
    return v === null || L(v)
      ? c(v)
      : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), d(v));
  }
  function d(v) {
    return v === null || L(v)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), c(v))
      : v === 96 && v === l
        ? n(v)
        : (e.consume(v), d);
  }
  function m(v) {
    return e.attempt(i, F, y)(v);
  }
  function y(v) {
    return (e.enter('lineEnding'), e.consume(v), e.exit('lineEnding'), x);
  }
  function x(v) {
    return o > 0 && j(v) ? W(e, k, 'linePrefix', o + 1)(v) : k(v);
  }
  function k(v) {
    return v === null || L(v) ? e.check(Ur, m, F)(v) : (e.enter('codeFlowValue'), S(v));
  }
  function S(v) {
    return v === null || L(v) ? (e.exit('codeFlowValue'), k(v)) : (e.consume(v), S);
  }
  function F(v) {
    return (e.exit('codeFenced'), t(v));
  }
  function D(v, O, U) {
    let H = 0;
    return w;
    function w(M) {
      return (v.enter('lineEnding'), v.consume(M), v.exit('lineEnding'), _);
    }
    function _(M) {
      return (
        v.enter('codeFencedFence'),
        j(M)
          ? W(
              v,
              T,
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
            )(M)
          : T(M)
      );
    }
    function T(M) {
      return M === l ? (v.enter('codeFencedFenceSequence'), P(M)) : U(M);
    }
    function P(M) {
      return M === l
        ? (H++, v.consume(M), P)
        : H >= a
          ? (v.exit('codeFencedFenceSequence'), j(M) ? W(v, I, 'whitespace')(M) : I(M))
          : U(M);
    }
    function I(M) {
      return M === null || L(M) ? (v.exit('codeFencedFence'), O(M)) : U(M);
    }
  }
}
function sf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const Yt = { name: 'codeIndented', tokenize: cf },
  uf = { partial: !0, tokenize: ff };
function cf(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (e.enter('codeIndented'), W(e, o, 'linePrefix', 5)(u));
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === 'linePrefix' && f[2].sliceSerialize(f[1], !0).length >= 4
      ? a(u)
      : n(u);
  }
  function a(u) {
    return u === null ? s(u) : L(u) ? e.attempt(uf, a, s)(u) : (e.enter('codeFlowValue'), l(u));
  }
  function l(u) {
    return u === null || L(u) ? (e.exit('codeFlowValue'), a(u)) : (e.consume(u), l);
  }
  function s(u) {
    return (e.exit('codeIndented'), t(u));
  }
}
function ff(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line]
      ? n(a)
      : L(a)
        ? (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), i)
        : W(e, o, 'linePrefix', 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === 'linePrefix' && l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(a)
      : L(a)
        ? i(a)
        : n(a);
  }
}
const hf = { name: 'codeText', previous: df, resolve: pf, tokenize: mf };
function pf(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space') &&
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space')
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === 'codeTextData') {
        ((e[n][1].type = 'codeTextPadding'),
          (e[t][1].type = 'codeTextPadding'),
          (n += 2),
          (t -= 2));
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== 'lineEnding' && (i = r)
      : (r === t || e[r][1].type === 'lineEnding') &&
        ((e[i][1].type = 'codeTextData'),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function df(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function mf(e, t, n) {
  let r = 0,
    i,
    o;
  return a;
  function a(c) {
    return (e.enter('codeText'), e.enter('codeTextSequence'), l(c));
  }
  function l(c) {
    return c === 96 ? (e.consume(c), r++, l) : (e.exit('codeTextSequence'), s(c));
  }
  function s(c) {
    return c === null
      ? n(c)
      : c === 32
        ? (e.enter('space'), e.consume(c), e.exit('space'), s)
        : c === 96
          ? ((o = e.enter('codeTextSequence')), (i = 0), f(c))
          : L(c)
            ? (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), s)
            : (e.enter('codeTextData'), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || L(c)
      ? (e.exit('codeTextData'), s(c))
      : (e.consume(c), u);
  }
  function f(c) {
    return c === 96
      ? (e.consume(c), i++, f)
      : i === r
        ? (e.exit('codeTextSequence'), e.exit('codeText'), t(c))
        : ((o.type = 'codeTextData'), u(c));
  }
}
class bf {
  constructor(t) {
    ((this.left = t ? [...t] : []), (this.right = []));
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          t +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`'
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(t, r)
      : t > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - t + this.left.length
            )
            .reverse()
        : this.left
            .slice(t)
            .concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return (r && Je(this.left, r), o.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t));
  }
  pushMany(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), Je(this.left, t));
  }
  unshift(t) {
    (this.setCursor(0), this.right.push(t));
  }
  unshiftMany(t) {
    (this.setCursor(0), Je(this.right, t.reverse()));
  }
  setCursor(t) {
    if (
      !(
        t === this.left.length ||
        (t > this.left.length && this.right.length === 0) ||
        (t < 0 && this.left.length === 0)
      )
    )
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Je(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY
        );
        Je(this.left, n.reverse());
      }
  }
}
function Je(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
}
function ha(e) {
  const t = {};
  let n = -1,
    r,
    i,
    o,
    a,
    l,
    s,
    u;
  const f = new bf(e);
  for (; ++n < f.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = f.get(n)),
      n &&
        r[1].type === 'chunkFlow' &&
        f.get(n - 1)[1].type === 'listItemPrefix' &&
        ((s = r[1]._tokenizer.events),
        (o = 0),
        o < s.length && s[o][1].type === 'lineEndingBlank' && (o += 2),
        o < s.length && s[o][1].type === 'content'))
    )
      for (; ++o < s.length && s[o][1].type !== 'content'; )
        s[o][1].type === 'chunkText' && ((s[o][1]._isInFirstContentOfListItem = !0), o++);
    if (r[0] === 'enter') r[1].contentType && (Object.assign(t, gf(f, n)), (n = t[n]), (u = !0));
    else if (r[1]._container) {
      for (
        o = n, i = void 0;
        o-- && ((a = f.get(o)), a[1].type === 'lineEnding' || a[1].type === 'lineEndingBlank');
      )
        a[0] === 'enter' &&
          (i && (f.get(i)[1].type = 'lineEndingBlank'), (a[1].type = 'lineEnding'), (i = o));
      i &&
        ((r[1].end = { ...f.get(i)[1].start }),
        (l = f.slice(i, n)),
        l.unshift(r),
        f.splice(i, n - i + 1, l));
    }
  }
  return (ae(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !u);
}
function gf(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let i = t - 1;
  const o = [],
    a = n._tokenizer || r.parser[n.contentType](n.start),
    l = a.events,
    s = [],
    u = {};
  let f,
    c,
    h = -1,
    p = n,
    d = 0,
    m = 0;
  const y = [m];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    (o.push(i),
      p._tokenizer ||
        ((f = r.sliceStream(p)),
        p.next || f.push(null),
        c && a.defineSkip(p.start),
        p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(f),
        p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)),
      (c = p),
      (p = p.next));
  }
  for (p = n; ++h < l.length; )
    l[h][0] === 'exit' &&
      l[h - 1][0] === 'enter' &&
      l[h][1].type === l[h - 1][1].type &&
      l[h][1].start.line !== l[h][1].end.line &&
      ((m = h + 1), y.push(m), (p._tokenizer = void 0), (p.previous = void 0), (p = p.next));
  for (
    a.events = [], p ? ((p._tokenizer = void 0), (p.previous = void 0)) : y.pop(), h = y.length;
    h--;
  ) {
    const x = l.slice(y[h], y[h + 1]),
      k = o.pop();
    (s.push([k, k + x.length - 1]), e.splice(k, 2, x));
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    ((u[d + s[h][0]] = d + s[h][1]), (d += s[h][1] - s[h][0] - 1));
  return u;
}
const yf = { resolve: kf, tokenize: wf },
  xf = { partial: !0, tokenize: vf };
function kf(e) {
  return (ha(e), e);
}
function wf(e, t) {
  let n;
  return r;
  function r(l) {
    return (e.enter('content'), (n = e.enter('chunkContent', { contentType: 'content' })), i(l));
  }
  function i(l) {
    return l === null ? o(l) : L(l) ? e.check(xf, a, o)(l) : (e.consume(l), i);
  }
  function o(l) {
    return (e.exit('chunkContent'), e.exit('content'), t(l));
  }
  function a(l) {
    return (
      e.consume(l),
      e.exit('chunkContent'),
      (n.next = e.enter('chunkContent', { contentType: 'content', previous: n })),
      (n = n.next),
      i
    );
  }
}
function vf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(a),
      e.exit('lineEnding'),
      W(e, o, 'linePrefix')
    );
  }
  function o(a) {
    if (a === null || L(a)) return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes('codeIndented') &&
      l &&
      l[1].type === 'linePrefix' &&
      l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(a)
      : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function pa(e, t, n, r, i, o, a, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60
      ? (e.enter(r), e.enter(i), e.enter(o), e.consume(x), e.exit(o), h)
      : x === null || x === 32 || x === 41 || vt(x)
        ? n(x)
        : (e.enter(r),
          e.enter(a),
          e.enter(l),
          e.enter('chunkString', { contentType: 'string' }),
          m(x));
  }
  function h(x) {
    return x === 62
      ? (e.enter(o), e.consume(x), e.exit(o), e.exit(i), e.exit(r), t)
      : (e.enter(l), e.enter('chunkString', { contentType: 'string' }), p(x));
  }
  function p(x) {
    return x === 62
      ? (e.exit('chunkString'), e.exit(l), h(x))
      : x === null || x === 60 || L(x)
        ? n(x)
        : (e.consume(x), x === 92 ? d : p);
  }
  function d(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), p) : p(x);
  }
  function m(x) {
    return !f && (x === null || x === 41 || V(x))
      ? (e.exit('chunkString'), e.exit(l), e.exit(a), e.exit(r), t(x))
      : f < u && x === 40
        ? (e.consume(x), f++, m)
        : x === 41
          ? (e.consume(x), f--, m)
          : x === null || x === 32 || x === 40 || vt(x)
            ? n(x)
            : (e.consume(x), x === 92 ? y : m);
  }
  function y(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), m) : m(x);
  }
}
function da(e, t, n, r, i, o) {
  const a = this;
  let l = 0,
    s;
  return u;
  function u(p) {
    return (e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), f);
  }
  function f(p) {
    return l > 999 ||
      p === null ||
      p === 91 ||
      (p === 93 && !s) ||
      (p === 94 && !l && '_hiddenFootnoteSupport' in a.parser.constructs)
      ? n(p)
      : p === 93
        ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t)
        : L(p)
          ? (e.enter('lineEnding'), e.consume(p), e.exit('lineEnding'), f)
          : (e.enter('chunkString', { contentType: 'string' }), c(p));
  }
  function c(p) {
    return p === null || p === 91 || p === 93 || L(p) || l++ > 999
      ? (e.exit('chunkString'), f(p))
      : (e.consume(p), s || (s = !j(p)), p === 92 ? h : c);
  }
  function h(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, c) : c(p);
  }
}
function ma(e, t, n, r, i, o) {
  let a;
  return l;
  function l(h) {
    return h === 34 || h === 39 || h === 40
      ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), (a = h === 40 ? 41 : h), s)
      : n(h);
  }
  function s(h) {
    return h === a ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), u(h));
  }
  function u(h) {
    return h === a
      ? (e.exit(o), s(a))
      : h === null
        ? n(h)
        : L(h)
          ? (e.enter('lineEnding'), e.consume(h), e.exit('lineEnding'), W(e, u, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), f(h));
  }
  function f(h) {
    return h === a || h === null || L(h)
      ? (e.exit('chunkString'), u(h))
      : (e.consume(h), h === 92 ? c : f);
  }
  function c(h) {
    return h === a || h === 92 ? (e.consume(h), f) : f(h);
  }
}
function tt(e, t) {
  let n;
  return r;
  function r(i) {
    return L(i)
      ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), (n = !0), r)
      : j(i)
        ? W(e, r, n ? 'linePrefix' : 'lineSuffix')(i)
        : t(i);
  }
}
const Cf = { name: 'definition', tokenize: Ef },
  Sf = { partial: !0, tokenize: Af };
function Ef(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return (e.enter('definition'), a(p));
  }
  function a(p) {
    return da.call(
      r,
      e,
      l,
      n,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(p);
  }
  function l(p) {
    return (
      (i = he(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      p === 58 ? (e.enter('definitionMarker'), e.consume(p), e.exit('definitionMarker'), s) : n(p)
    );
  }
  function s(p) {
    return V(p) ? tt(e, u)(p) : u(p);
  }
  function u(p) {
    return pa(
      e,
      f,
      n,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(p);
  }
  function f(p) {
    return e.attempt(Sf, c, c)(p);
  }
  function c(p) {
    return j(p) ? W(e, h, 'whitespace')(p) : h(p);
  }
  function h(p) {
    return p === null || L(p) ? (e.exit('definition'), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function Af(e, t, n) {
  return r;
  function r(l) {
    return V(l) ? tt(e, i)(l) : n(l);
  }
  function i(l) {
    return ma(e, o, n, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(l);
  }
  function o(l) {
    return j(l) ? W(e, a, 'whitespace')(l) : a(l);
  }
  function a(l) {
    return l === null || L(l) ? t(l) : n(l);
  }
}
const If = { name: 'hardBreakEscape', tokenize: Ff };
function Ff(e, t, n) {
  return r;
  function r(o) {
    return (e.enter('hardBreakEscape'), e.consume(o), i);
  }
  function i(o) {
    return L(o) ? (e.exit('hardBreakEscape'), t(o)) : n(o);
  }
}
const Df = { name: 'headingAtx', resolve: _f, tokenize: Tf };
function _f(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    o;
  return (
    e[r][1].type === 'whitespace' && (r += 2),
    n - 2 > r && e[n][1].type === 'whitespace' && (n -= 2),
    e[n][1].type === 'atxHeadingSequence' &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === 'whitespace')) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: 'atxHeadingText', start: e[r][1].start, end: e[n][1].end }),
      (o = { type: 'chunkText', start: e[r][1].start, end: e[n][1].end, contentType: 'text' }),
      ae(e, r, n - r + 1, [
        ['enter', i, t],
        ['enter', o, t],
        ['exit', o, t],
        ['exit', i, t],
      ])),
    e
  );
}
function Tf(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return (e.enter('atxHeading'), o(f));
  }
  function o(f) {
    return (e.enter('atxHeadingSequence'), a(f));
  }
  function a(f) {
    return f === 35 && r++ < 6
      ? (e.consume(f), a)
      : f === null || V(f)
        ? (e.exit('atxHeadingSequence'), l(f))
        : n(f);
  }
  function l(f) {
    return f === 35
      ? (e.enter('atxHeadingSequence'), s(f))
      : f === null || L(f)
        ? (e.exit('atxHeading'), t(f))
        : j(f)
          ? W(e, l, 'whitespace')(f)
          : (e.enter('atxHeadingText'), u(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit('atxHeadingSequence'), l(f));
  }
  function u(f) {
    return f === null || f === 35 || V(f) ? (e.exit('atxHeadingText'), l(f)) : (e.consume(f), u);
  }
}
const Pf = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  qr = ['pre', 'script', 'style', 'textarea'],
  Lf = { concrete: !0, name: 'htmlFlow', resolveTo: Mf, tokenize: Nf },
  Rf = { partial: !0, tokenize: Bf },
  Of = { partial: !0, tokenize: zf };
function Mf(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === 'enter' && e[t][1].type === 'htmlFlow'); );
  return (
    t > 1 &&
      e[t - 2][1].type === 'linePrefix' &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function Nf(e, t, n) {
  const r = this;
  let i, o, a, l, s;
  return u;
  function u(g) {
    return f(g);
  }
  function f(g) {
    return (e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(g), c);
  }
  function c(g) {
    return g === 33
      ? (e.consume(g), h)
      : g === 47
        ? (e.consume(g), (o = !0), m)
        : g === 63
          ? (e.consume(g), (i = 3), r.interrupt ? t : b)
          : te(g)
            ? (e.consume(g), (a = String.fromCharCode(g)), y)
            : n(g);
  }
  function h(g) {
    return g === 45
      ? (e.consume(g), (i = 2), p)
      : g === 91
        ? (e.consume(g), (i = 5), (l = 0), d)
        : te(g)
          ? (e.consume(g), (i = 4), r.interrupt ? t : b)
          : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : b) : n(g);
  }
  function d(g) {
    const ce = 'CDATA[';
    return g === ce.charCodeAt(l++)
      ? (e.consume(g), l === ce.length ? (r.interrupt ? t : T) : d)
      : n(g);
  }
  function m(g) {
    return te(g) ? (e.consume(g), (a = String.fromCharCode(g)), y) : n(g);
  }
  function y(g) {
    if (g === null || g === 47 || g === 62 || V(g)) {
      const ce = g === 47,
        Ee = a.toLowerCase();
      return !ce && !o && qr.includes(Ee)
        ? ((i = 1), r.interrupt ? t(g) : T(g))
        : Pf.includes(a.toLowerCase())
          ? ((i = 6), ce ? (e.consume(g), x) : r.interrupt ? t(g) : T(g))
          : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : o ? k(g) : S(g));
    }
    return g === 45 || Z(g) ? (e.consume(g), (a += String.fromCharCode(g)), y) : n(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : T) : n(g);
  }
  function k(g) {
    return j(g) ? (e.consume(g), k) : w(g);
  }
  function S(g) {
    return g === 47
      ? (e.consume(g), w)
      : g === 58 || g === 95 || te(g)
        ? (e.consume(g), F)
        : j(g)
          ? (e.consume(g), S)
          : w(g);
  }
  function F(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Z(g) ? (e.consume(g), F) : D(g);
  }
  function D(g) {
    return g === 61 ? (e.consume(g), v) : j(g) ? (e.consume(g), D) : S(g);
  }
  function v(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96
      ? n(g)
      : g === 34 || g === 39
        ? (e.consume(g), (s = g), O)
        : j(g)
          ? (e.consume(g), v)
          : U(g);
  }
  function O(g) {
    return g === s ? (e.consume(g), (s = null), H) : g === null || L(g) ? n(g) : (e.consume(g), O);
  }
  function U(g) {
    return g === null ||
      g === 34 ||
      g === 39 ||
      g === 47 ||
      g === 60 ||
      g === 61 ||
      g === 62 ||
      g === 96 ||
      V(g)
      ? D(g)
      : (e.consume(g), U);
  }
  function H(g) {
    return g === 47 || g === 62 || j(g) ? S(g) : n(g);
  }
  function w(g) {
    return g === 62 ? (e.consume(g), _) : n(g);
  }
  function _(g) {
    return g === null || L(g) ? T(g) : j(g) ? (e.consume(g), _) : n(g);
  }
  function T(g) {
    return g === 45 && i === 2
      ? (e.consume(g), J)
      : g === 60 && i === 1
        ? (e.consume(g), K)
        : g === 62 && i === 4
          ? (e.consume(g), ue)
          : g === 63 && i === 3
            ? (e.consume(g), b)
            : g === 93 && i === 5
              ? (e.consume(g), me)
              : L(g) && (i === 6 || i === 7)
                ? (e.exit('htmlFlowData'), e.check(Rf, be, P)(g))
                : g === null || L(g)
                  ? (e.exit('htmlFlowData'), P(g))
                  : (e.consume(g), T);
  }
  function P(g) {
    return e.check(Of, I, be)(g);
  }
  function I(g) {
    return (e.enter('lineEnding'), e.consume(g), e.exit('lineEnding'), M);
  }
  function M(g) {
    return g === null || L(g) ? P(g) : (e.enter('htmlFlowData'), T(g));
  }
  function J(g) {
    return g === 45 ? (e.consume(g), b) : T(g);
  }
  function K(g) {
    return g === 47 ? (e.consume(g), (a = ''), se) : T(g);
  }
  function se(g) {
    if (g === 62) {
      const ce = a.toLowerCase();
      return qr.includes(ce) ? (e.consume(g), ue) : T(g);
    }
    return te(g) && a.length < 8 ? (e.consume(g), (a += String.fromCharCode(g)), se) : T(g);
  }
  function me(g) {
    return g === 93 ? (e.consume(g), b) : T(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), ue) : g === 45 && i === 2 ? (e.consume(g), b) : T(g);
  }
  function ue(g) {
    return g === null || L(g) ? (e.exit('htmlFlowData'), be(g)) : (e.consume(g), ue);
  }
  function be(g) {
    return (e.exit('htmlFlow'), t(g));
  }
}
function zf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return L(a) ? (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Bf(e, t, n) {
  return r;
  function r(i) {
    return (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), e.attempt(lt, t, n));
  }
}
const jf = { name: 'htmlText', tokenize: $f };
function $f(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(b) {
    return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(b), s);
  }
  function s(b) {
    return b === 33
      ? (e.consume(b), u)
      : b === 47
        ? (e.consume(b), D)
        : b === 63
          ? (e.consume(b), S)
          : te(b)
            ? (e.consume(b), U)
            : n(b);
  }
  function u(b) {
    return b === 45
      ? (e.consume(b), f)
      : b === 91
        ? (e.consume(b), (o = 0), d)
        : te(b)
          ? (e.consume(b), k)
          : n(b);
  }
  function f(b) {
    return b === 45 ? (e.consume(b), p) : n(b);
  }
  function c(b) {
    return b === null
      ? n(b)
      : b === 45
        ? (e.consume(b), h)
        : L(b)
          ? ((a = c), K(b))
          : (e.consume(b), c);
  }
  function h(b) {
    return b === 45 ? (e.consume(b), p) : c(b);
  }
  function p(b) {
    return b === 62 ? J(b) : b === 45 ? h(b) : c(b);
  }
  function d(b) {
    const ue = 'CDATA[';
    return b === ue.charCodeAt(o++) ? (e.consume(b), o === ue.length ? m : d) : n(b);
  }
  function m(b) {
    return b === null
      ? n(b)
      : b === 93
        ? (e.consume(b), y)
        : L(b)
          ? ((a = m), K(b))
          : (e.consume(b), m);
  }
  function y(b) {
    return b === 93 ? (e.consume(b), x) : m(b);
  }
  function x(b) {
    return b === 62 ? J(b) : b === 93 ? (e.consume(b), x) : m(b);
  }
  function k(b) {
    return b === null || b === 62 ? J(b) : L(b) ? ((a = k), K(b)) : (e.consume(b), k);
  }
  function S(b) {
    return b === null
      ? n(b)
      : b === 63
        ? (e.consume(b), F)
        : L(b)
          ? ((a = S), K(b))
          : (e.consume(b), S);
  }
  function F(b) {
    return b === 62 ? J(b) : S(b);
  }
  function D(b) {
    return te(b) ? (e.consume(b), v) : n(b);
  }
  function v(b) {
    return b === 45 || Z(b) ? (e.consume(b), v) : O(b);
  }
  function O(b) {
    return L(b) ? ((a = O), K(b)) : j(b) ? (e.consume(b), O) : J(b);
  }
  function U(b) {
    return b === 45 || Z(b) ? (e.consume(b), U) : b === 47 || b === 62 || V(b) ? H(b) : n(b);
  }
  function H(b) {
    return b === 47
      ? (e.consume(b), J)
      : b === 58 || b === 95 || te(b)
        ? (e.consume(b), w)
        : L(b)
          ? ((a = H), K(b))
          : j(b)
            ? (e.consume(b), H)
            : J(b);
  }
  function w(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Z(b) ? (e.consume(b), w) : _(b);
  }
  function _(b) {
    return b === 61 ? (e.consume(b), T) : L(b) ? ((a = _), K(b)) : j(b) ? (e.consume(b), _) : H(b);
  }
  function T(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96
      ? n(b)
      : b === 34 || b === 39
        ? (e.consume(b), (i = b), P)
        : L(b)
          ? ((a = T), K(b))
          : j(b)
            ? (e.consume(b), T)
            : (e.consume(b), I);
  }
  function P(b) {
    return b === i
      ? (e.consume(b), (i = void 0), M)
      : b === null
        ? n(b)
        : L(b)
          ? ((a = P), K(b))
          : (e.consume(b), P);
  }
  function I(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96
      ? n(b)
      : b === 47 || b === 62 || V(b)
        ? H(b)
        : (e.consume(b), I);
  }
  function M(b) {
    return b === 47 || b === 62 || V(b) ? H(b) : n(b);
  }
  function J(b) {
    return b === 62 ? (e.consume(b), e.exit('htmlTextData'), e.exit('htmlText'), t) : n(b);
  }
  function K(b) {
    return (e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(b), e.exit('lineEnding'), se);
  }
  function se(b) {
    return j(b)
      ? W(
          e,
          me,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(b)
      : me(b);
  }
  function me(b) {
    return (e.enter('htmlTextData'), a(b));
  }
}
const On = { name: 'labelEnd', resolveAll: qf, resolveTo: Vf, tokenize: Gf },
  Wf = { tokenize: Yf },
  Uf = { tokenize: Xf },
  Hf = { tokenize: Jf };
function qf(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (
      (n.push(e[t]), r.type === 'labelImage' || r.type === 'labelLink' || r.type === 'labelEnd')
    ) {
      const i = r.type === 'labelImage' ? 4 : 2;
      ((r.type = 'data'), (t += i));
    }
  }
  return (e.length !== n.length && ae(e, 0, e.length, n), e);
}
function Vf(e, t) {
  let n = e.length,
    r = 0,
    i,
    o,
    a,
    l;
  for (; n--; )
    if (((i = e[n][1]), o)) {
      if (i.type === 'link' || (i.type === 'labelLink' && i._inactive)) break;
      e[n][0] === 'enter' && i.type === 'labelLink' && (i._inactive = !0);
    } else if (a) {
      if (
        e[n][0] === 'enter' &&
        (i.type === 'labelImage' || i.type === 'labelLink') &&
        !i._balanced &&
        ((o = n), i.type !== 'labelLink')
      ) {
        r = 2;
        break;
      }
    } else i.type === 'labelEnd' && (a = n);
  const s = {
      type: e[o][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...e[o][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    u = { type: 'label', start: { ...e[o][1].start }, end: { ...e[a][1].end } },
    f = { type: 'labelText', start: { ...e[o + r + 2][1].end }, end: { ...e[a - 2][1].start } };
  return (
    (l = [
      ['enter', s, t],
      ['enter', u, t],
    ]),
    (l = oe(l, e.slice(o + 1, o + r + 3))),
    (l = oe(l, [['enter', f, t]])),
    (l = oe(l, Dt(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t))),
    (l = oe(l, [['exit', f, t], e[a - 2], e[a - 1], ['exit', u, t]])),
    (l = oe(l, e.slice(a + 1))),
    (l = oe(l, [['exit', s, t]])),
    ae(e, o, e.length, l),
    e
  );
}
function Gf(e, t, n) {
  const r = this;
  let i = r.events.length,
    o,
    a;
  for (; i--; )
    if (
      (r.events[i][1].type === 'labelImage' || r.events[i][1].type === 'labelLink') &&
      !r.events[i][1]._balanced
    ) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(h) {
    return o
      ? o._inactive
        ? c(h)
        : ((a = r.parser.defined.includes(he(r.sliceSerialize({ start: o.end, end: r.now() })))),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(h),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          s)
      : n(h);
  }
  function s(h) {
    return h === 40
      ? e.attempt(Wf, f, a ? f : c)(h)
      : h === 91
        ? e.attempt(Uf, f, a ? u : c)(h)
        : a
          ? f(h)
          : c(h);
  }
  function u(h) {
    return e.attempt(Hf, f, c)(h);
  }
  function f(h) {
    return t(h);
  }
  function c(h) {
    return ((o._balanced = !0), n(h));
  }
}
function Yf(e, t, n) {
  return r;
  function r(c) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(c),
      e.exit('resourceMarker'),
      i
    );
  }
  function i(c) {
    return V(c) ? tt(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41
      ? f(c)
      : pa(
          e,
          a,
          l,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(c);
  }
  function a(c) {
    return V(c) ? tt(e, s)(c) : f(c);
  }
  function l(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40
      ? ma(e, u, n, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(c)
      : f(c);
  }
  function u(c) {
    return V(c) ? tt(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41
      ? (e.enter('resourceMarker'), e.consume(c), e.exit('resourceMarker'), e.exit('resource'), t)
      : n(c);
  }
}
function Xf(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return da.call(r, e, o, a, 'reference', 'referenceMarker', 'referenceString')(l);
  }
  function o(l) {
    return r.parser.defined.includes(
      he(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(l)
      : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function Jf(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(o),
      e.exit('referenceMarker'),
      i
    );
  }
  function i(o) {
    return o === 93
      ? (e.enter('referenceMarker'),
        e.consume(o),
        e.exit('referenceMarker'),
        e.exit('reference'),
        t)
      : n(o);
  }
}
const Kf = { name: 'labelStartImage', resolveAll: On.resolveAll, tokenize: Qf };
function Qf(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(l),
      e.exit('labelImageMarker'),
      o
    );
  }
  function o(l) {
    return l === 91
      ? (e.enter('labelMarker'), e.consume(l), e.exit('labelMarker'), e.exit('labelImage'), a)
      : n(l);
  }
  function a(l) {
    return l === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? n(l) : t(l);
  }
}
const Zf = { name: 'labelStartLink', resolveAll: On.resolveAll, tokenize: eh };
function eh(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(a),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      o
    );
  }
  function o(a) {
    return a === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? n(a) : t(a);
  }
}
const Xt = { name: 'lineEnding', tokenize: th };
function th(e, t) {
  return n;
  function n(r) {
    return (e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), W(e, t, 'linePrefix'));
  }
}
const mt = { name: 'thematicBreak', tokenize: nh };
function nh(e, t, n) {
  let r = 0,
    i;
  return o;
  function o(u) {
    return (e.enter('thematicBreak'), a(u));
  }
  function a(u) {
    return ((i = u), l(u));
  }
  function l(u) {
    return u === i
      ? (e.enter('thematicBreakSequence'), s(u))
      : r >= 3 && (u === null || L(u))
        ? (e.exit('thematicBreak'), t(u))
        : n(u);
  }
  function s(u) {
    return u === i
      ? (e.consume(u), r++, s)
      : (e.exit('thematicBreakSequence'), j(u) ? W(e, l, 'whitespace')(u) : l(u));
  }
}
const ne = { continuation: { tokenize: oh }, exit: sh, name: 'list', tokenize: ah },
  rh = { partial: !0, tokenize: uh },
  ih = { partial: !0, tokenize: lh };
function ah(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let o = i && i[1].type === 'linePrefix' ? i[2].sliceSerialize(i[1], !0).length : 0,
    a = 0;
  return l;
  function l(p) {
    const d =
      r.containerState.type || (p === 42 || p === 43 || p === 45 ? 'listUnordered' : 'listOrdered');
    if (d === 'listUnordered' ? !r.containerState.marker || p === r.containerState.marker : mn(p)) {
      if (
        (r.containerState.type || ((r.containerState.type = d), e.enter(d, { _container: !0 })),
        d === 'listUnordered')
      )
        return (e.enter('listItemPrefix'), p === 42 || p === 45 ? e.check(mt, n, u)(p) : u(p));
      if (!r.interrupt || p === 49)
        return (e.enter('listItemPrefix'), e.enter('listItemValue'), s(p));
    }
    return n(p);
  }
  function s(p) {
    return mn(p) && ++a < 10
      ? (e.consume(p), s)
      : (!r.interrupt || a < 2) &&
          (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46)
        ? (e.exit('listItemValue'), u(p))
        : n(p);
  }
  function u(p) {
    return (
      e.enter('listItemMarker'),
      e.consume(p),
      e.exit('listItemMarker'),
      (r.containerState.marker = r.containerState.marker || p),
      e.check(lt, r.interrupt ? n : f, e.attempt(rh, h, c))
    );
  }
  function f(p) {
    return ((r.containerState.initialBlankLine = !0), o++, h(p));
  }
  function c(p) {
    return j(p)
      ? (e.enter('listItemPrefixWhitespace'), e.consume(p), e.exit('listItemPrefixWhitespace'), h)
      : n(p);
  }
  function h(p) {
    return (
      (r.containerState.size = o + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      t(p)
    );
  }
}
function oh(e, t, n) {
  const r = this;
  return ((r.containerState._closeFlow = void 0), e.check(lt, i, o));
  function i(l) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
      W(e, t, 'listItemIndent', r.containerState.size + 1)(l)
    );
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !j(l)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        a(l))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(ih, t, a)(l));
  }
  function a(l) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      W(
        e,
        e.attempt(ne, t, n),
        'linePrefix',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(l)
    );
  }
}
function lh(e, t, n) {
  const r = this;
  return W(e, i, 'listItemIndent', r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === 'listItemIndent' &&
      a[2].sliceSerialize(a[1], !0).length === r.containerState.size
      ? t(o)
      : n(o);
  }
}
function sh(e) {
  e.exit(this.containerState.type);
}
function uh(e, t, n) {
  const r = this;
  return W(
    e,
    i,
    'listItemPrefixWhitespace',
    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !j(o) && a && a[1].type === 'listItemPrefixWhitespace' ? t(o) : n(o);
  }
}
const Vr = { name: 'setextUnderline', resolveTo: ch, tokenize: fh };
function ch(e, t) {
  let n = e.length,
    r,
    i,
    o;
  for (; n--; )
    if (e[n][0] === 'enter') {
      if (e[n][1].type === 'content') {
        r = n;
        break;
      }
      e[n][1].type === 'paragraph' && (i = n);
    } else
      (e[n][1].type === 'content' && e.splice(n, 1),
        !o && e[n][1].type === 'definition' && (o = n));
  const a = {
    type: 'setextHeading',
    start: { ...e[i][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = 'setextHeadingText'),
    o
      ? (e.splice(i, 0, ['enter', a, t]),
        e.splice(o + 1, 0, ['exit', e[r][1], t]),
        (e[r][1].end = { ...e[o][1].end }))
      : (e[r][1] = a),
    e.push(['exit', a, t]),
    e
  );
}
function fh(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let f = r.events.length,
      c;
    for (; f--; )
      if (
        r.events[f][1].type !== 'lineEnding' &&
        r.events[f][1].type !== 'linePrefix' &&
        r.events[f][1].type !== 'content'
      ) {
        c = r.events[f][1].type === 'paragraph';
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c)
      ? (e.enter('setextHeadingLine'), (i = u), a(u))
      : n(u);
  }
  function a(u) {
    return (e.enter('setextHeadingLineSequence'), l(u));
  }
  function l(u) {
    return u === i
      ? (e.consume(u), l)
      : (e.exit('setextHeadingLineSequence'), j(u) ? W(e, s, 'lineSuffix')(u) : s(u));
  }
  function s(u) {
    return u === null || L(u) ? (e.exit('setextHeadingLine'), t(u)) : n(u);
  }
}
const hh = { tokenize: ph };
function ph(e) {
  const t = this,
    n = e.attempt(
      lt,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        W(e, e.attempt(this.parser.constructs.flow, i, e.attempt(yf, i)), 'linePrefix')
      )
    );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(o),
      e.exit('lineEndingBlank'),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(o),
      e.exit('lineEnding'),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const dh = { resolveAll: ga() },
  mh = ba('string'),
  bh = ba('text');
function ba(e) {
  return { resolveAll: ga(e === 'text' ? gh : void 0), tokenize: t };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      o = n.attempt(i, a, l);
    return a;
    function a(f) {
      return u(f) ? o(f) : l(f);
    }
    function l(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return (n.enter('data'), n.consume(f), s);
    }
    function s(f) {
      return u(f) ? (n.exit('data'), o(f)) : (n.consume(f), s);
    }
    function u(f) {
      if (f === null) return !0;
      const c = i[f];
      let h = -1;
      if (c)
        for (; ++h < c.length; ) {
          const p = c[h];
          if (!p.previous || p.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function ga(e) {
  return t;
  function t(n, r) {
    let i = -1,
      o;
    for (; ++i <= n.length; )
      o === void 0
        ? n[i] && n[i][1].type === 'data' && ((o = i), i++)
        : (!n[i] || n[i][1].type !== 'data') &&
          (i !== o + 2 &&
            ((n[o][1].end = n[i - 1][1].end), n.splice(o + 2, i - o - 2), (i = o + 2)),
          (o = void 0));
    return e ? e(n, r) : n;
  }
}
function gh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === 'lineEnding') && e[n - 1][1].type === 'data') {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let o = i.length,
        a = -1,
        l = 0,
        s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == 'string') {
          for (a = u.length; u.charCodeAt(a - 1) === 32; ) (l++, a--);
          if (a) break;
          a = -1;
        } else if (u === -2) ((s = !0), l++);
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (l) {
        const u = {
          type: n === e.length || s || l < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
          },
          end: { ...r.end },
        };
        ((r.end = { ...u.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, u)
            : (e.splice(n, 0, ['enter', u, t], ['exit', u, t]), (n += 2)));
      }
      n++;
    }
  return e;
}
const yh = {
    42: ne,
    43: ne,
    45: ne,
    48: ne,
    49: ne,
    50: ne,
    51: ne,
    52: ne,
    53: ne,
    54: ne,
    55: ne,
    56: ne,
    57: ne,
    62: ua,
  },
  xh = { 91: Cf },
  kh = { [-2]: Yt, [-1]: Yt, 32: Yt },
  wh = { 35: Df, 42: mt, 45: [Vr, mt], 60: Lf, 61: Vr, 95: mt, 96: Hr, 126: Hr },
  vh = { 38: fa, 92: ca },
  Ch = {
    [-5]: Xt,
    [-4]: Xt,
    [-3]: Xt,
    33: Kf,
    38: fa,
    42: bn,
    60: [Qc, jf],
    91: Zf,
    92: [If, ca],
    93: On,
    95: bn,
    96: hf,
  },
  Sh = { null: [bn, dh] },
  Eh = { null: [42, 95] },
  Ah = { null: [] },
  Ih = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: Eh,
        contentInitial: xh,
        disable: Ah,
        document: yh,
        flow: wh,
        flowInitial: kh,
        insideSpan: Sh,
        string: vh,
        text: Ch,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Fh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const i = {},
    o = [];
  let a = [],
    l = [];
  const s = {
      attempt: O(D),
      check: O(v),
      consume: k,
      enter: S,
      exit: F,
      interrupt: O(v, { interrupt: !0 }),
    },
    u = {
      code: null,
      containerState: {},
      defineSkip: m,
      events: [],
      now: d,
      parser: e,
      previous: null,
      sliceSerialize: h,
      sliceStream: p,
      write: c,
    };
  let f = t.tokenize.call(u, s);
  return (t.resolveAll && o.push(t), u);
  function c(_) {
    return (
      (a = oe(a, _)),
      y(),
      a[a.length - 1] !== null ? [] : (U(t, 0), (u.events = Dt(o, u.events, u)), u.events)
    );
  }
  function h(_, T) {
    return _h(p(_), T);
  }
  function p(_) {
    return Dh(a, _);
  }
  function d() {
    const { _bufferIndex: _, _index: T, line: P, column: I, offset: M } = r;
    return { _bufferIndex: _, _index: T, line: P, column: I, offset: M };
  }
  function m(_) {
    ((i[_.line] = _.column), w());
  }
  function y() {
    let _;
    for (; r._index < a.length; ) {
      const T = a[r._index];
      if (typeof T == 'string')
        for (
          _ = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === _ && r._bufferIndex < T.length;
        )
          x(T.charCodeAt(r._bufferIndex));
      else x(T);
    }
  }
  function x(_) {
    f = f(_);
  }
  function k(_) {
    (L(_)
      ? (r.line++, (r.column = 1), (r.offset += _ === -3 ? 2 : 1), w())
      : _ !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === a[r._index].length && ((r._bufferIndex = -1), r._index++)),
      (u.previous = _));
  }
  function S(_, T) {
    const P = T || {};
    return ((P.type = _), (P.start = d()), u.events.push(['enter', P, u]), l.push(P), P);
  }
  function F(_) {
    const T = l.pop();
    return ((T.end = d()), u.events.push(['exit', T, u]), T);
  }
  function D(_, T) {
    U(_, T.from);
  }
  function v(_, T) {
    T.restore();
  }
  function O(_, T) {
    return P;
    function P(I, M, J) {
      let K, se, me, b;
      return Array.isArray(I) ? be(I) : 'tokenize' in I ? be([I]) : ue(I);
      function ue(Q) {
        return qe;
        function qe(we) {
          const Te = we !== null && Q[we],
            Pe = we !== null && Q.null,
            ut = [
              ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
              ...(Array.isArray(Pe) ? Pe : Pe ? [Pe] : []),
            ];
          return be(ut)(we);
        }
      }
      function be(Q) {
        return ((K = Q), (se = 0), Q.length === 0 ? J : g(Q[se]));
      }
      function g(Q) {
        return qe;
        function qe(we) {
          return (
            (b = H()),
            (me = Q),
            Q.partial || (u.currentConstruct = Q),
            Q.name && u.parser.constructs.disable.null.includes(Q.name)
              ? Ee()
              : Q.tokenize.call(T ? Object.assign(Object.create(u), T) : u, s, ce, Ee)(we)
          );
        }
      }
      function ce(Q) {
        return (_(me, b), M);
      }
      function Ee(Q) {
        return (b.restore(), ++se < K.length ? g(K[se]) : J);
      }
    }
  }
  function U(_, T) {
    (_.resolveAll && !o.includes(_) && o.push(_),
      _.resolve && ae(u.events, T, u.events.length - T, _.resolve(u.events.slice(T), u)),
      _.resolveTo && (u.events = _.resolveTo(u.events, u)));
  }
  function H() {
    const _ = d(),
      T = u.previous,
      P = u.currentConstruct,
      I = u.events.length,
      M = Array.from(l);
    return { from: I, restore: J };
    function J() {
      ((r = _), (u.previous = T), (u.currentConstruct = P), (u.events.length = I), (l = M), w());
    }
  }
  function w() {
    r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function Dh(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    o = t.end._bufferIndex;
  let a;
  if (n === i) a = [e[n].slice(r, o)];
  else {
    if (((a = e.slice(n, i)), r > -1)) {
      const l = a[0];
      typeof l == 'string' ? (a[0] = l.slice(r)) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function _h(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == 'string') a = o;
    else
      switch (o) {
        case -5: {
          a = '\r';
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? ' ' : '	';
          break;
        }
        case -1: {
          if (!t && i) continue;
          a = ' ';
          break;
        }
        default:
          a = String.fromCharCode(o);
      }
    ((i = o === -2), r.push(a));
  }
  return r.join('');
}
function Th(e) {
  const r = {
    constructs: la([Ih, ...((e || {}).extensions || [])]),
    content: i(qc),
    defined: [],
    document: i(Gc),
    flow: i(hh),
    lazy: {},
    string: i(mh),
    text: i(bh),
  };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return Fh(r, o, l);
    }
  }
}
function Ph(e) {
  for (; !ha(e); );
  return e;
}
const Gr = /[\0\t\n\r]/g;
function Lh() {
  let e = 1,
    t = '',
    n = !0,
    r;
  return i;
  function i(o, a, l) {
    const s = [];
    let u, f, c, h, p;
    for (
      o = t + (typeof o == 'string' ? o.toString() : new TextDecoder(a || void 0).decode(o)),
        c = 0,
        t = '',
        n && (o.charCodeAt(0) === 65279 && c++, (n = void 0));
      c < o.length;
    ) {
      if (
        ((Gr.lastIndex = c),
        (u = Gr.exec(o)),
        (h = u && u.index !== void 0 ? u.index : o.length),
        (p = o.charCodeAt(h)),
        !u)
      ) {
        t = o.slice(c);
        break;
      }
      if (p === 10 && c === h && r) (s.push(-3), (r = void 0));
      else
        switch (
          (r && (s.push(-5), (r = void 0)), c < h && (s.push(o.slice(c, h)), (e += h - c)), p)
        ) {
          case 0: {
            (s.push(65533), e++);
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, s.push(-2); e++ < f; ) s.push(-1);
            break;
          }
          case 10: {
            (s.push(-4), (e = 1));
            break;
          }
          default:
            ((r = !0), (e = 1));
        }
      c = h + 1;
    }
    return (l && (r && s.push(-5), t && s.push(t), s.push(null)), s);
  }
}
const Rh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Oh(e) {
  return e.replace(Rh, Mh);
}
function Mh(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      o = i === 120 || i === 88;
    return sa(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Rn(n) || e;
}
const ya = {}.hasOwnProperty;
function Nh(e, t, n) {
  return (
    typeof t != 'string' && ((n = t), (t = void 0)),
    zh(n)(
      Ph(
        Th(n)
          .document()
          .write(Lh()(e, t, !0))
      )
    )
  );
}
function zh(e) {
  const t = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: o(Xn),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(Vn),
      blockQuote: o(Pe),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(ut),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(ut, a),
      codeText: o(Qa, a),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o(Za),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(eo),
      hardBreakEscape: o(Gn),
      hardBreakTrailing: o(Gn),
      htmlFlow: o(Yn, a),
      htmlFlowData: H,
      htmlText: o(Yn, a),
      htmlTextData: H,
      image: o(to),
      label: a,
      link: o(Xn),
      listItem: o(no),
      listItemValue: h,
      listOrdered: o(Jn, c),
      listUnordered: o(Jn),
      paragraph: o(ro),
      reference: g,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(Vn),
      strong: o(io),
      thematicBreak: o(oo),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: D,
      autolink: s(),
      autolinkEmail: Te,
      autolinkProtocol: we,
      blockQuote: s(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: Ee,
      characterReferenceMarkerNumeric: Ee,
      characterReferenceValue: Q,
      characterReference: qe,
      codeFenced: s(y),
      codeFencedFence: m,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: d,
      codeFlowValue: w,
      codeIndented: s(x),
      codeText: s(M),
      codeTextData: w,
      data: w,
      definition: s(),
      definitionDestinationString: F,
      definitionLabelString: k,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(T),
      hardBreakTrailing: s(T),
      htmlFlow: s(P),
      htmlFlowData: w,
      htmlText: s(I),
      htmlTextData: w,
      image: s(K),
      label: me,
      labelText: se,
      lineEnding: _,
      link: s(J),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ce,
      resourceDestinationString: b,
      resourceTitleString: ue,
      resource: be,
      setextHeading: s(U),
      setextHeadingLineSequence: O,
      setextHeadingText: v,
      strong: s(),
      thematicBreak: s(),
    },
  };
  xa(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let A = { type: 'root', children: [] };
    const N = {
        stack: [A],
        tokenStack: [],
        config: t,
        enter: l,
        exit: u,
        buffer: a,
        resume: f,
        data: n,
      },
      $ = [];
    let q = -1;
    for (; ++q < C.length; )
      if (C[q][1].type === 'listOrdered' || C[q][1].type === 'listUnordered')
        if (C[q][0] === 'enter') $.push(q);
        else {
          const fe = $.pop();
          q = i(C, fe, q);
        }
    for (q = -1; ++q < C.length; ) {
      const fe = t[C[q][0]];
      ya.call(fe, C[q][1].type) &&
        fe[C[q][1].type].call(
          Object.assign({ sliceSerialize: C[q][2].sliceSerialize }, N),
          C[q][1]
        );
    }
    if (N.tokenStack.length > 0) {
      const fe = N.tokenStack[N.tokenStack.length - 1];
      (fe[1] || Yr).call(N, void 0, fe[0]);
    }
    for (
      A.position = {
        start: ve(C.length > 0 ? C[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: ve(C.length > 0 ? C[C.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        q = -1;
      ++q < t.transforms.length;
    )
      A = t.transforms[q](A) || A;
    return A;
  }
  function i(C, A, N) {
    let $ = A - 1,
      q = -1,
      fe = !1,
      Ae,
      ge,
      Ve,
      Ge;
    for (; ++$ <= N; ) {
      const re = C[$];
      switch (re[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (re[0] === 'enter' ? q++ : q--, (Ge = void 0));
          break;
        }
        case 'lineEndingBlank': {
          re[0] === 'enter' && (Ae && !Ge && !q && !Ve && (Ve = $), (Ge = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          Ge = void 0;
      }
      if (
        (!q && re[0] === 'enter' && re[1].type === 'listItemPrefix') ||
        (q === -1 &&
          re[0] === 'exit' &&
          (re[1].type === 'listUnordered' || re[1].type === 'listOrdered'))
      ) {
        if (Ae) {
          let Le = $;
          for (ge = void 0; Le--; ) {
            const ye = C[Le];
            if (ye[1].type === 'lineEnding' || ye[1].type === 'lineEndingBlank') {
              if (ye[0] === 'exit') continue;
              (ge && ((C[ge][1].type = 'lineEndingBlank'), (fe = !0)),
                (ye[1].type = 'lineEnding'),
                (ge = Le));
            } else if (
              !(
                ye[1].type === 'linePrefix' ||
                ye[1].type === 'blockQuotePrefix' ||
                ye[1].type === 'blockQuotePrefixWhitespace' ||
                ye[1].type === 'blockQuoteMarker' ||
                ye[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Ve && (!ge || Ve < ge) && (Ae._spread = !0),
            (Ae.end = Object.assign({}, ge ? C[ge][1].start : re[1].end)),
            C.splice(ge || $, 0, ['exit', Ae, re[2]]),
            $++,
            N++);
        }
        if (re[1].type === 'listItemPrefix') {
          const Le = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, re[1].start),
            end: void 0,
          };
          ((Ae = Le), C.splice($, 0, ['enter', Le, re[2]]), $++, N++, (Ve = void 0), (Ge = !0));
        }
      }
    }
    return ((C[A][1]._spread = fe), N);
  }
  function o(C, A) {
    return N;
    function N($) {
      (l.call(this, C($), $), A && A.call(this, $));
    }
  }
  function a() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function l(C, A, N) {
    (this.stack[this.stack.length - 1].children.push(C),
      this.stack.push(C),
      this.tokenStack.push([A, N || void 0]),
      (C.position = { start: ve(A.start), end: void 0 }));
  }
  function s(C) {
    return A;
    function A(N) {
      (C && C.call(this, N), u.call(this, N));
    }
  }
  function u(C, A) {
    const N = this.stack.pop(),
      $ = this.tokenStack.pop();
    if ($) $[0].type !== C.type && (A ? A.call(this, C, $[0]) : ($[1] || Yr).call(this, C, $[0]));
    else
      throw new Error(
        'Cannot close `' + C.type + '` (' + et({ start: C.start, end: C.end }) + '): it’s not open'
      );
    N.position.end = ve(C.end);
  }
  function f() {
    return Ln(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(C) {
    if (this.data.expectingFirstListItemValue) {
      const A = this.stack[this.stack.length - 2];
      ((A.start = Number.parseInt(this.sliceSerialize(C), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function p() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.lang = C;
  }
  function d() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.meta = C;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function y() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    ((A.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function x() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = C.replace(/(\r?\n|\r)$/g, '');
  }
  function k(C) {
    const A = this.resume(),
      N = this.stack[this.stack.length - 1];
    ((N.label = A), (N.identifier = he(this.sliceSerialize(C)).toLowerCase()));
  }
  function S() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.title = C;
  }
  function F() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.url = C;
  }
  function D(C) {
    const A = this.stack[this.stack.length - 1];
    if (!A.depth) {
      const N = this.sliceSerialize(C).length;
      A.depth = N;
    }
  }
  function v() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function O(C) {
    const A = this.stack[this.stack.length - 1];
    A.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(C) {
    const N = this.stack[this.stack.length - 1].children;
    let $ = N[N.length - 1];
    ((!$ || $.type !== 'text') &&
      (($ = ao()), ($.position = { start: ve(C.start), end: void 0 }), N.push($)),
      this.stack.push($));
  }
  function w(C) {
    const A = this.stack.pop();
    ((A.value += this.sliceSerialize(C)), (A.position.end = ve(C.end)));
  }
  function _(C) {
    const A = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const N = A.children[A.children.length - 1];
      ((N.position.end = ve(C.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(A.type) &&
      (H.call(this, C), w.call(this, C));
  }
  function T() {
    this.data.atHardBreak = !0;
  }
  function P() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = C;
  }
  function I() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = C;
  }
  function M() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = C;
  }
  function J() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || 'shortcut';
      ((C.type += 'Reference'), (C.referenceType = A), delete C.url, delete C.title);
    } else (delete C.identifier, delete C.label);
    this.data.referenceType = void 0;
  }
  function K() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || 'shortcut';
      ((C.type += 'Reference'), (C.referenceType = A), delete C.url, delete C.title);
    } else (delete C.identifier, delete C.label);
    this.data.referenceType = void 0;
  }
  function se(C) {
    const A = this.sliceSerialize(C),
      N = this.stack[this.stack.length - 2];
    ((N.label = Oh(A)), (N.identifier = he(A).toLowerCase()));
  }
  function me() {
    const C = this.stack[this.stack.length - 1],
      A = this.resume(),
      N = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), N.type === 'link')) {
      const $ = C.children;
      N.children = $;
    } else N.alt = A;
  }
  function b() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.url = C;
  }
  function ue() {
    const C = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.title = C;
  }
  function be() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = 'collapsed';
  }
  function ce(C) {
    const A = this.resume(),
      N = this.stack[this.stack.length - 1];
    ((N.label = A),
      (N.identifier = he(this.sliceSerialize(C)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function Ee(C) {
    this.data.characterReferenceType = C.type;
  }
  function Q(C) {
    const A = this.sliceSerialize(C),
      N = this.data.characterReferenceType;
    let $;
    N
      ? (($ = sa(A, N === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : ($ = Rn(A));
    const q = this.stack[this.stack.length - 1];
    q.value += $;
  }
  function qe(C) {
    const A = this.stack.pop();
    A.position.end = ve(C.end);
  }
  function we(C) {
    w.call(this, C);
    const A = this.stack[this.stack.length - 1];
    A.url = this.sliceSerialize(C);
  }
  function Te(C) {
    w.call(this, C);
    const A = this.stack[this.stack.length - 1];
    A.url = 'mailto:' + this.sliceSerialize(C);
  }
  function Pe() {
    return { type: 'blockquote', children: [] };
  }
  function ut() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function Qa() {
    return { type: 'inlineCode', value: '' };
  }
  function Za() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function eo() {
    return { type: 'emphasis', children: [] };
  }
  function Vn() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function Gn() {
    return { type: 'break' };
  }
  function Yn() {
    return { type: 'html', value: '' };
  }
  function to() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function Xn() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function Jn(C) {
    return {
      type: 'list',
      ordered: C.type === 'listOrdered',
      start: null,
      spread: C._spread,
      children: [],
    };
  }
  function no(C) {
    return { type: 'listItem', spread: C._spread, checked: null, children: [] };
  }
  function ro() {
    return { type: 'paragraph', children: [] };
  }
  function io() {
    return { type: 'strong', children: [] };
  }
  function ao() {
    return { type: 'text', value: '' };
  }
  function oo() {
    return { type: 'thematicBreak' };
  }
}
function ve(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function xa(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? xa(e, r) : Bh(e, r);
  }
}
function Bh(e, t) {
  let n;
  for (n in t)
    if (ya.call(t, n))
      switch (n) {
        case 'canContainEols': {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case 'transforms': {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case 'enter':
        case 'exit': {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Yr(e, t) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          et({ start: e.start, end: e.end }) +
          '): a different token (`' +
          t.type +
          '`, ' +
          et({ start: t.start, end: t.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          t.type +
          '`, ' +
          et({ start: t.start, end: t.end }) +
          ') is still open'
      );
}
function jh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Nh(r, {
      ...t.data('settings'),
      ...e,
      extensions: t.data('micromarkExtensions') || [],
      mdastExtensions: t.data('fromMarkdownExtensions') || [],
    });
  }
}
function $h(e, t) {
  const n = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function Wh(e, t) {
  const n = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function Uh(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : '',
    r = {};
  t.lang && (r.className = ['language-' + t.lang]);
  let i = {
    type: 'element',
    tagName: 'code',
    properties: r,
    children: [{ type: 'text', value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: 'element', tagName: 'pre', properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function Hh(e, t) {
  const n = { type: 'element', tagName: 'del', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function qh(e, t) {
  const n = { type: 'element', tagName: 'em', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Vh(e, t) {
  const n = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    r = String(t.identifier).toUpperCase(),
    i = He(r.toLowerCase()),
    o = e.footnoteOrder.indexOf(r);
  let a,
    l = e.footnoteCounts.get(r);
  (l === void 0 ? ((l = 0), e.footnoteOrder.push(r), (a = e.footnoteOrder.length)) : (a = o + 1),
    (l += 1),
    e.footnoteCounts.set(r, l));
  const s = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + n + 'fn-' + i,
      id: n + 'fnref-' + i + (l > 1 ? '-' + l : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(a) }],
  };
  e.patch(t, s);
  const u = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
  return (e.patch(t, u), e.applyData(t, u));
}
function Gh(e, t) {
  const n = { type: 'element', tagName: 'h' + t.depth, properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Yh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: 'raw', value: t.value };
    return (e.patch(t, n), e.applyData(t, n));
  }
}
function ka(e, t) {
  const n = t.referenceType;
  let r = ']';
  if (
    (n === 'collapsed' ? (r += '[]') : n === 'full' && (r += '[' + (t.label || t.identifier) + ']'),
    t.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + t.alt + r }];
  const i = e.all(t),
    o = i[0];
  o && o.type === 'text' ? (o.value = '[' + o.value) : i.unshift({ type: 'text', value: '[' });
  const a = i[i.length - 1];
  return (a && a.type === 'text' ? (a.value += r) : i.push({ type: 'text', value: r }), i);
}
function Xh(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return ka(e, t);
  const i = { src: He(r.url || ''), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: 'element', tagName: 'img', properties: i, children: [] };
  return (e.patch(t, o), e.applyData(t, o));
}
function Jh(e, t) {
  const n = { src: He(t.url) };
  (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title));
  const r = { type: 'element', tagName: 'img', properties: n, children: [] };
  return (e.patch(t, r), e.applyData(t, r));
}
function Kh(e, t) {
  const n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
  e.patch(t, n);
  const r = { type: 'element', tagName: 'code', properties: {}, children: [n] };
  return (e.patch(t, r), e.applyData(t, r));
}
function Qh(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return ka(e, t);
  const i = { href: He(r.url || '') };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: 'element', tagName: 'a', properties: i, children: e.all(t) };
  return (e.patch(t, o), e.applyData(t, o));
}
function Zh(e, t) {
  const n = { href: He(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: 'element', tagName: 'a', properties: n, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function ep(e, t, n) {
  const r = e.all(t),
    i = n ? tp(n) : wa(t),
    o = {},
    a = [];
  if (typeof t.checked == 'boolean') {
    const f = r[0];
    let c;
    (f && f.type === 'element' && f.tagName === 'p'
      ? (c = f)
      : ((c = { type: 'element', tagName: 'p', properties: {}, children: [] }), r.unshift(c)),
      c.children.length > 0 && c.children.unshift({ type: 'text', value: ' ' }),
      c.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: t.checked, disabled: !0 },
        children: [],
      }),
      (o.className = ['task-list-item']));
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const f = r[l];
    ((i || l !== 0 || f.type !== 'element' || f.tagName !== 'p') &&
      a.push({
        type: 'text',
        value: `
`,
      }),
      f.type === 'element' && f.tagName === 'p' && !i ? a.push(...f.children) : a.push(f));
  }
  const s = r[r.length - 1];
  s &&
    (i || s.type !== 'element' || s.tagName !== 'p') &&
    a.push({
      type: 'text',
      value: `
`,
    });
  const u = { type: 'element', tagName: 'li', properties: o, children: a };
  return (e.patch(t, u), e.applyData(t, u));
}
function tp(e) {
  let t = !1;
  if (e.type === 'list') {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = wa(n[r]);
  }
  return t;
}
function wa(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function np(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (typeof t.start == 'number' && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (
      a.type === 'element' &&
      a.tagName === 'li' &&
      a.properties &&
      Array.isArray(a.properties.className) &&
      a.properties.className.includes('task-list-item')
    ) {
      n.className = ['contains-task-list'];
      break;
    }
  }
  const o = {
    type: 'element',
    tagName: t.ordered ? 'ol' : 'ul',
    properties: n,
    children: e.wrap(r, !0),
  };
  return (e.patch(t, o), e.applyData(t, o));
}
function rp(e, t) {
  const n = { type: 'element', tagName: 'p', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function ip(e, t) {
  const n = { type: 'root', children: e.wrap(e.all(t)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function ap(e, t) {
  const n = { type: 'element', tagName: 'strong', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function op(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const a = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([r], !0) };
    (e.patch(t.children[0], a), i.push(a));
  }
  if (n.length > 0) {
    const a = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(n, !0) },
      l = Dn(t.children[1]),
      s = ea(t.children[t.children.length - 1]);
    (l && s && (a.position = { start: l, end: s }), i.push(a));
  }
  const o = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(i, !0) };
  return (e.patch(t, o), e.applyData(t, o));
}
function lp(e, t, n) {
  const r = n ? n.children : void 0,
    o = (r ? r.indexOf(t) : 1) === 0 ? 'th' : 'td',
    a = n && n.type === 'table' ? n.align : void 0,
    l = a ? a.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const c = t.children[s],
      h = {},
      p = a ? a[s] : void 0;
    p && (h.align = p);
    let d = { type: 'element', tagName: o, properties: h, children: [] };
    (c && ((d.children = e.all(c)), e.patch(c, d), (d = e.applyData(c, d))), u.push(d));
  }
  const f = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(u, !0) };
  return (e.patch(t, f), e.applyData(t, f));
}
function sp(e, t) {
  const n = { type: 'element', tagName: 'td', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
const Xr = 9,
  Jr = 32;
function up(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const o = [];
  for (; r; )
    (o.push(Kr(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t)));
  return (o.push(Kr(t.slice(i), i > 0, !1)), o.join(''));
}
function Kr(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Xr || o === Jr; ) (r++, (o = e.codePointAt(r)));
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Xr || o === Jr; ) (i--, (o = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : '';
}
function cp(e, t) {
  const n = { type: 'text', value: up(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function fp(e, t) {
  const n = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
const hp = {
  blockquote: $h,
  break: Wh,
  code: Uh,
  delete: Hh,
  emphasis: qh,
  footnoteReference: Vh,
  heading: Gh,
  html: Yh,
  imageReference: Xh,
  image: Jh,
  inlineCode: Kh,
  linkReference: Qh,
  link: Zh,
  listItem: ep,
  list: np,
  paragraph: rp,
  root: ip,
  strong: ap,
  table: op,
  tableCell: sp,
  tableRow: lp,
  text: cp,
  thematicBreak: fp,
  toml: ct,
  yaml: ct,
  definition: ct,
  footnoteDefinition: ct,
};
function ct() {}
const va = -1,
  _t = 0,
  Ct = 1,
  St = 2,
  Mn = 3,
  Nn = 4,
  zn = 5,
  Bn = 6,
  Ca = 7,
  Sa = 8,
  Qr = typeof self == 'object' ? self : globalThis,
  pp = (e, t) => {
    const n = (i, o) => (e.set(o, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [o, a] = t[i];
        switch (o) {
          case _t:
          case va:
            return n(a, i);
          case Ct: {
            const l = n([], i);
            for (const s of a) l.push(r(s));
            return l;
          }
          case St: {
            const l = n({}, i);
            for (const [s, u] of a) l[r(s)] = r(u);
            return l;
          }
          case Mn:
            return n(new Date(a), i);
          case Nn: {
            const { source: l, flags: s } = a;
            return n(new RegExp(l, s), i);
          }
          case zn: {
            const l = n(new Map(), i);
            for (const [s, u] of a) l.set(r(s), r(u));
            return l;
          }
          case Bn: {
            const l = n(new Set(), i);
            for (const s of a) l.add(r(s));
            return l;
          }
          case Ca: {
            const { name: l, message: s } = a;
            return n(new Qr[l](s), i);
          }
          case Sa:
            return n(BigInt(a), i);
          case 'BigInt':
            return n(Object(BigInt(a)), i);
        }
        return n(new Qr[o](a), i);
      };
    return r;
  },
  Zr = (e) => pp(new Map(), e)(0),
  Me = '',
  { toString: dp } = {},
  { keys: mp } = Object,
  Ke = (e) => {
    const t = typeof e;
    if (t !== 'object' || !e) return [_t, t];
    const n = dp.call(e).slice(8, -1);
    switch (n) {
      case 'Array':
        return [Ct, Me];
      case 'Object':
        return [St, Me];
      case 'Date':
        return [Mn, Me];
      case 'RegExp':
        return [Nn, Me];
      case 'Map':
        return [zn, Me];
      case 'Set':
        return [Bn, Me];
    }
    return n.includes('Array') ? [Ct, n] : n.includes('Error') ? [Ca, n] : [St, n];
  },
  ft = ([e, t]) => e === _t && (t === 'function' || t === 'symbol'),
  bp = (e, t, n, r) => {
    const i = (a, l) => {
        const s = r.push(a) - 1;
        return (n.set(l, s), s);
      },
      o = (a) => {
        if (n.has(a)) return n.get(a);
        let [l, s] = Ke(a);
        switch (l) {
          case _t: {
            let f = a;
            switch (s) {
              case 'bigint':
                ((l = Sa), (f = a.toString()));
                break;
              case 'function':
              case 'symbol':
                if (e) throw new TypeError('unable to serialize ' + s);
                f = null;
                break;
              case 'undefined':
                return i([va], a);
            }
            return i([l, f], a);
          }
          case Ct: {
            if (s) return i([s, [...a]], a);
            const f = [],
              c = i([l, f], a);
            for (const h of a) f.push(o(h));
            return c;
          }
          case St: {
            if (s)
              switch (s) {
                case 'BigInt':
                  return i([s, a.toString()], a);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return i([s, a.valueOf()], a);
              }
            if (t && 'toJSON' in a) return o(a.toJSON());
            const f = [],
              c = i([l, f], a);
            for (const h of mp(a)) (e || !ft(Ke(a[h]))) && f.push([o(h), o(a[h])]);
            return c;
          }
          case Mn:
            return i([l, a.toISOString()], a);
          case Nn: {
            const { source: f, flags: c } = a;
            return i([l, { source: f, flags: c }], a);
          }
          case zn: {
            const f = [],
              c = i([l, f], a);
            for (const [h, p] of a) (e || !(ft(Ke(h)) || ft(Ke(p)))) && f.push([o(h), o(p)]);
            return c;
          }
          case Bn: {
            const f = [],
              c = i([l, f], a);
            for (const h of a) (e || !ft(Ke(h))) && f.push(o(h));
            return c;
          }
        }
        const { message: u } = a;
        return i([l, { name: s, message: u }], a);
      };
    return o;
  },
  ei = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return (bp(!(t || n), !!t, new Map(), r)(e), r);
  },
  Et =
    typeof structuredClone == 'function'
      ? (e, t) => (t && ('json' in t || 'lossy' in t) ? Zr(ei(e, t)) : structuredClone(e))
      : (e, t) => Zr(ei(e, t));
function gp(e, t) {
  const n = [{ type: 'text', value: '↩' }];
  return (
    t > 1 &&
      n.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(t) }],
      }),
    n
  );
}
function yp(e, t) {
  return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
}
function xp(e) {
  const t = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    n = e.options.footnoteBackContent || gp,
    r = e.options.footnoteBackLabel || yp,
    i = e.options.footnoteLabel || 'Footnotes',
    o = e.options.footnoteLabelTagName || 'h2',
    a = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(e.footnoteOrder[s]);
    if (!u) continue;
    const f = e.all(u),
      c = String(u.identifier).toUpperCase(),
      h = He(c.toLowerCase());
    let p = 0;
    const d = [],
      m = e.footnoteCounts.get(c);
    for (; m !== void 0 && ++p <= m; ) {
      d.length > 0 && d.push({ type: 'text', value: ' ' });
      let k = typeof n == 'string' ? n : n(s, p);
      (typeof k == 'string' && (k = { type: 'text', value: k }),
        d.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + t + 'fnref-' + h + (p > 1 ? '-' + p : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof r == 'string' ? r : r(s, p),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(k) ? k : [k],
        }));
    }
    const y = f[f.length - 1];
    if (y && y.type === 'element' && y.tagName === 'p') {
      const k = y.children[y.children.length - 1];
      (k && k.type === 'text' ? (k.value += ' ') : y.children.push({ type: 'text', value: ' ' }),
        y.children.push(...d));
    } else f.push(...d);
    const x = {
      type: 'element',
      tagName: 'li',
      properties: { id: t + 'fn-' + h },
      children: e.wrap(f, !0),
    };
    (e.patch(u, x), l.push(x));
  }
  if (l.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: o,
          properties: { ...Et(a), id: 'footnote-label' },
          children: [{ type: 'text', value: i }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(l, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const Tt = function (e) {
  if (e == null) return Cp;
  if (typeof e == 'function') return Pt(e);
  if (typeof e == 'object') return Array.isArray(e) ? kp(e) : wp(e);
  if (typeof e == 'string') return vp(e);
  throw new Error('Expected function, string, or object as test');
};
function kp(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = Tt(e[n]);
  return Pt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; ) if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function wp(e) {
  const t = e;
  return Pt(n);
  function n(r) {
    const i = r;
    let o;
    for (o in e) if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function vp(e) {
  return Pt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Pt(e) {
  return t;
  function t(n, r, i) {
    return !!(Sp(n) && e.call(this, n, typeof r == 'number' ? r : void 0, i || void 0));
  }
}
function Cp() {
  return !0;
}
function Sp(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
const Ea = [],
  Ep = !0,
  gn = !1,
  Ap = 'skip';
function Aa(e, t, n, r) {
  let i;
  typeof t == 'function' && typeof n != 'function' ? ((r = n), (n = t)) : (i = t);
  const o = Tt(i),
    a = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, f) {
    const c = s && typeof s == 'object' ? s : {};
    if (typeof c.type == 'string') {
      const p =
        typeof c.tagName == 'string' ? c.tagName : typeof c.name == 'string' ? c.name : void 0;
      Object.defineProperty(h, 'name', {
        value: 'node (' + (s.type + (p ? '<' + p + '>' : '')) + ')',
      });
    }
    return h;
    function h() {
      let p = Ea,
        d,
        m,
        y;
      if ((!t || o(s, u, f[f.length - 1] || void 0)) && ((p = Ip(n(s, f))), p[0] === gn)) return p;
      if ('children' in s && s.children) {
        const x = s;
        if (x.children && p[0] !== Ap)
          for (
            m = (r ? x.children.length : -1) + a, y = f.concat(x);
            m > -1 && m < x.children.length;
          ) {
            const k = x.children[m];
            if (((d = l(k, m, y)()), d[0] === gn)) return d;
            m = typeof d[1] == 'number' ? d[1] : m + a;
          }
      }
      return p;
    }
  }
}
function Ip(e) {
  return Array.isArray(e) ? e : typeof e == 'number' ? [Ep, e] : e == null ? Ea : [e];
}
function jn(e, t, n, r) {
  let i, o, a;
  (typeof t == 'function' && typeof n != 'function'
    ? ((o = void 0), (a = t), (i = n))
    : ((o = t), (a = n), (i = r)),
    Aa(e, o, l, i));
  function l(s, u) {
    const f = u[u.length - 1],
      c = f ? f.children.indexOf(s) : void 0;
    return a(s, c, f);
  }
}
const yn = {}.hasOwnProperty,
  Fp = {};
function Dp(e, t) {
  const n = t || Fp,
    r = new Map(),
    i = new Map(),
    o = new Map(),
    a = { ...hp, ...n.handlers },
    l = {
      all: u,
      applyData: Tp,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: a,
      one: s,
      options: n,
      patch: _p,
      wrap: Lp,
    };
  return (
    jn(e, function (f) {
      if (f.type === 'definition' || f.type === 'footnoteDefinition') {
        const c = f.type === 'definition' ? r : i,
          h = String(f.identifier).toUpperCase();
        c.has(h) || c.set(h, f);
      }
    }),
    l
  );
  function s(f, c) {
    const h = f.type,
      p = l.handlers[h];
    if (yn.call(l.handlers, h) && p) return p(l, f, c);
    if (l.options.passThrough && l.options.passThrough.includes(h)) {
      if ('children' in f) {
        const { children: m, ...y } = f,
          x = Et(y);
        return ((x.children = l.all(f)), x);
      }
      return Et(f);
    }
    return (l.options.unknownHandler || Pp)(l, f, c);
  }
  function u(f) {
    const c = [];
    if ('children' in f) {
      const h = f.children;
      let p = -1;
      for (; ++p < h.length; ) {
        const d = l.one(h[p], f);
        if (d) {
          if (
            p &&
            h[p - 1].type === 'break' &&
            (!Array.isArray(d) && d.type === 'text' && (d.value = ti(d.value)),
            !Array.isArray(d) && d.type === 'element')
          ) {
            const m = d.children[0];
            m && m.type === 'text' && (m.value = ti(m.value));
          }
          Array.isArray(d) ? c.push(...d) : c.push(d);
        }
      }
    }
    return c;
  }
}
function _p(e, t) {
  e.position && (t.position = mc(e));
}
function Tp(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      o = e.data.hProperties;
    if (typeof r == 'string')
      if (n.type === 'element') n.tagName = r;
      else {
        const a = 'children' in n ? n.children : [n];
        n = { type: 'element', tagName: r, properties: {}, children: a };
      }
    (n.type === 'element' && o && Object.assign(n.properties, Et(o)),
      'children' in n && n.children && i !== null && i !== void 0 && (n.children = i));
  }
  return n;
}
function Pp(e, t) {
  const n = t.data || {},
    r =
      'value' in t && !(yn.call(n, 'hProperties') || yn.call(n, 'hChildren'))
        ? { type: 'text', value: t.value }
        : { type: 'element', tagName: 'div', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function Lp(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: 'text',
      value: `
`,
    });
    ++r < e.length;
  )
    (r &&
      n.push({
        type: 'text',
        value: `
`,
      }),
      n.push(e[r]));
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: 'text',
        value: `
`,
      }),
    n
  );
}
function ti(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
function ni(e, t) {
  const n = Dp(e, t),
    r = n.one(e, void 0),
    i = xp(n),
    o = Array.isArray(r) ? { type: 'root', children: r } : r || { type: 'root', children: [] };
  return (
    i &&
      o.children.push(
        {
          type: 'text',
          value: `
`,
        },
        i
      ),
    o
  );
}
function Rp(e, t) {
  return e && 'run' in e
    ? async function (n, r) {
        const i = ni(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return ni(n, { file: r, ...(e || t) });
      };
}
function ri(e) {
  if (e) throw e;
}
var Jt, ii;
function Op() {
  if (ii) return Jt;
  ii = 1;
  var e = Object.prototype.hasOwnProperty,
    t = Object.prototype.toString,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = function (u) {
      return typeof Array.isArray == 'function' ? Array.isArray(u) : t.call(u) === '[object Array]';
    },
    o = function (u) {
      if (!u || t.call(u) !== '[object Object]') return !1;
      var f = e.call(u, 'constructor'),
        c =
          u.constructor &&
          u.constructor.prototype &&
          e.call(u.constructor.prototype, 'isPrototypeOf');
      if (u.constructor && !f && !c) return !1;
      var h;
      for (h in u);
      return typeof h > 'u' || e.call(u, h);
    },
    a = function (u, f) {
      n && f.name === '__proto__'
        ? n(u, f.name, { enumerable: !0, configurable: !0, value: f.newValue, writable: !0 })
        : (u[f.name] = f.newValue);
    },
    l = function (u, f) {
      if (f === '__proto__')
        if (e.call(u, f)) {
          if (r) return r(u, f).value;
        } else return;
      return u[f];
    };
  return (
    (Jt = function s() {
      var u,
        f,
        c,
        h,
        p,
        d,
        m = arguments[0],
        y = 1,
        x = arguments.length,
        k = !1;
      for (
        typeof m == 'boolean' && ((k = m), (m = arguments[1] || {}), (y = 2)),
          (m == null || (typeof m != 'object' && typeof m != 'function')) && (m = {});
        y < x;
        ++y
      )
        if (((u = arguments[y]), u != null))
          for (f in u)
            ((c = l(m, f)),
              (h = l(u, f)),
              m !== h &&
                (k && h && (o(h) || (p = i(h)))
                  ? (p ? ((p = !1), (d = c && i(c) ? c : [])) : (d = c && o(c) ? c : {}),
                    a(m, { name: f, newValue: s(k, d, h) }))
                  : typeof h < 'u' && a(m, { name: f, newValue: h })));
      return m;
    }),
    Jt
  );
}
var Mp = Op();
const Kt = vn(Mp);
function xn(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Np() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != 'function') throw new TypeError('Expected function as last argument, not ' + a);
    l(null, ...i);
    function l(s, ...u) {
      const f = e[++o];
      let c = -1;
      if (s) {
        a(s);
        return;
      }
      for (; ++c < i.length; ) (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      ((i = u), f ? zp(f, l)(...u) : a(null, ...u));
    }
  }
  function r(i) {
    if (typeof i != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + i);
    return (e.push(i), t);
  }
}
function zp(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let s;
    l && a.push(i);
    try {
      s = e.apply(this, a);
    } catch (u) {
      const f = u;
      if (l && n) throw f;
      return i(f);
    }
    l ||
      (s && s.then && typeof s.then == 'function'
        ? s.then(o, i)
        : s instanceof Error
          ? i(s)
          : o(s));
  }
  function i(a, ...l) {
    n || ((n = !0), t(a, ...l));
  }
  function o(a) {
    i(null, a);
  }
}
const pe = { basename: Bp, dirname: jp, extname: $p, join: Wp, sep: '/' };
function Bp(e, t) {
  if (t !== void 0 && typeof t != 'string') throw new TypeError('"ext" argument must be a string');
  st(e);
  let n = 0,
    r = -1,
    i = e.length,
    o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((o = !0), (r = i + 1));
    return r < 0 ? '' : e.slice(n, r);
  }
  if (t === e) return '';
  let a = -1,
    l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      (a < 0 && ((o = !0), (a = i + 1)),
        l > -1 &&
          (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : ((l = -1), (r = a))));
  return (n === r ? (r = a) : r < 0 && (r = e.length), e.slice(n, r));
}
function jp(e) {
  if ((st(e), e.length === 0)) return '.';
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : t === 1 && e.codePointAt(0) === 47
      ? '//'
      : e.slice(0, t);
}
function $p(e) {
  st(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    o = 0,
    a;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    (n < 0 && ((a = !0), (n = t + 1)),
      l === 46 ? (i < 0 ? (i = t) : o !== 1 && (o = 1)) : i > -1 && (o = -1));
  }
  return i < 0 || n < 0 || o === 0 || (o === 1 && i === n - 1 && i === r + 1) ? '' : e.slice(i, n);
}
function Wp(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; ) (st(e[t]), e[t] && (n = n === void 0 ? e[t] : n + '/' + e[t]));
  return n === void 0 ? '.' : Up(n);
}
function Up(e) {
  st(e);
  const t = e.codePointAt(0) === 47;
  let n = Hp(e, !t);
  return (
    n.length === 0 && !t && (n = '.'),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += '/'),
    t ? '/' + n : n
  );
}
function Hp(e, t) {
  let n = '',
    r = 0,
    i = -1,
    o = 0,
    a = -1,
    l,
    s;
  for (; ++a <= e.length; ) {
    if (a < e.length) l = e.codePointAt(a);
    else {
      if (l === 47) break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === a - 1 || o === 1))
        if (i !== a - 1 && o === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((s = n.lastIndexOf('/')), s !== n.length - 1)) {
                (s < 0
                  ? ((n = ''), (r = 0))
                  : ((n = n.slice(0, s)), (r = n.length - 1 - n.lastIndexOf('/'))),
                  (i = a),
                  (o = 0));
                continue;
              }
            } else if (n.length > 0) {
              ((n = ''), (r = 0), (i = a), (o = 0));
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + '/..' : '..'), (r = 2));
        } else
          (n.length > 0 ? (n += '/' + e.slice(i + 1, a)) : (n = e.slice(i + 1, a)),
            (r = a - i - 1));
      ((i = a), (o = 0));
    } else l === 46 && o > -1 ? o++ : (o = -1);
  }
  return n;
}
function st(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
const qp = { cwd: Vp };
function Vp() {
  return '/';
}
function kn(e) {
  return !!(
    e !== null &&
    typeof e == 'object' &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Gp(e) {
  if (typeof e == 'string') e = new URL(e);
  else if (!kn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + '`'
    );
    throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
  }
  if (e.protocol !== 'file:') {
    const t = new TypeError('The URL must be of scheme file');
    throw ((t.code = 'ERR_INVALID_URL_SCHEME'), t);
  }
  return Yp(e);
}
function Yp(e) {
  if (e.hostname !== '') {
    const r = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((r.code = 'ERR_INVALID_FILE_URL_HOST'), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError('File URL path must not include encoded / characters');
        throw ((i.code = 'ERR_INVALID_FILE_URL_PATH'), i);
      }
    }
  return decodeURIComponent(t);
}
const Qt = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Ia {
  constructor(t) {
    let n;
    (t
      ? kn(t)
        ? (n = { path: t })
        : typeof t == 'string' || Xp(t)
          ? (n = { value: t })
          : (n = t)
      : (n = {}),
      (this.cwd = 'cwd' in n ? '' : qp.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let r = -1;
    for (; ++r < Qt.length; ) {
      const o = Qt[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === 'history' ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n) Qt.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == 'string' ? pe.basename(this.path) : void 0;
  }
  set basename(t) {
    (en(t, 'basename'), Zt(t, 'basename'), (this.path = pe.join(this.dirname || '', t)));
  }
  get dirname() {
    return typeof this.path == 'string' ? pe.dirname(this.path) : void 0;
  }
  set dirname(t) {
    (ai(this.basename, 'dirname'), (this.path = pe.join(t || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? pe.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((Zt(t, 'extname'), ai(this.dirname, 'extname'), t)) {
      if (t.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (t.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = pe.join(this.dirname, this.stem + (t || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    (kn(t) && (t = Gp(t)), en(t, 'path'), this.path !== t && this.history.push(t));
  }
  get stem() {
    return typeof this.path == 'string' ? pe.basename(this.path, this.extname) : void 0;
  }
  set stem(t) {
    (en(t, 'stem'),
      Zt(t, 'stem'),
      (this.path = pe.join(this.dirname || '', t + (this.extname || ''))));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return ((i.fatal = void 0), i);
  }
  message(t, n, r) {
    const i = new ee(t, n, r);
    return (
      this.path && ((i.name = this.path + ':' + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Zt(e, t) {
  if (e && e.includes(pe.sep))
    throw new Error('`' + t + '` cannot be a path: did not expect `' + pe.sep + '`');
}
function en(e, t) {
  if (!e) throw new Error('`' + t + '` cannot be empty');
}
function ai(e, t) {
  if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too');
}
function Xp(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const Jp = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      o = function () {
        return i.apply(o, arguments);
      };
    return (Object.setPrototypeOf(o, r), o);
  },
  Kp = {}.hasOwnProperty;
class $n extends Jp {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = Np()));
  }
  copy() {
    const t = new $n();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return (t.data(Kt(!0, {}, this.namespace)), t);
  }
  data(t, n) {
    return typeof t == 'string'
      ? arguments.length === 2
        ? (rn('data', this.frozen), (this.namespace[t] = n), this)
        : (Kp.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
        ? (rn('data', this.frozen), (this.namespace = t), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == 'function' && this.transformers.use(i);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(t) {
    this.freeze();
    const n = ht(t),
      r = this.parser || this.Parser;
    return (tn('parse', r), r(String(n), n));
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      tn('process', this.parser || this.Parser),
      nn('process', this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(o, a) {
      const l = ht(t),
        s = r.parse(l);
      r.run(s, l, function (f, c, h) {
        if (f || !c || !h) return u(f);
        const p = c,
          d = r.stringify(p, h);
        (ed(d) ? (h.value = d) : (h.result = d), u(f, h));
      });
      function u(f, c) {
        f || !c ? a(f) : o ? o(c) : n(void 0, c);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      tn('processSync', this.parser || this.Parser),
      nn('processSync', this.compiler || this.Compiler),
      this.process(t, i),
      li('processSync', 'process', n),
      r
    );
    function i(o, a) {
      ((n = !0), ri(o), (r = a));
    }
  }
  run(t, n, r) {
    (oi(t), this.freeze());
    const i = this.transformers;
    return (
      !r && typeof n == 'function' && ((r = n), (n = void 0)),
      r ? o(void 0, r) : new Promise(o)
    );
    function o(a, l) {
      const s = ht(n);
      i.run(t, s, u);
      function u(f, c, h) {
        const p = c || t;
        f ? l(f) : a ? a(p) : r(void 0, p, h);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return (this.run(t, n, o), li('runSync', 'run', r), i);
    function o(a, l) {
      (ri(a), (i = l), (r = !0));
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = ht(n),
      i = this.compiler || this.Compiler;
    return (nn('stringify', i), oi(t), i(t, r));
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((rn('use', this.frozen), t != null))
      if (typeof t == 'function') s(t, n);
      else if (typeof t == 'object') Array.isArray(t) ? l(t) : a(t);
      else throw new TypeError('Expected usable value, not `' + t + '`');
    return this;
    function o(u) {
      if (typeof u == 'function') s(u, []);
      else if (typeof u == 'object')
        if (Array.isArray(u)) {
          const [f, ...c] = u;
          s(f, c);
        } else a(u);
      else throw new TypeError('Expected usable value, not `' + u + '`');
    }
    function a(u) {
      if (!('plugins' in u) && !('settings' in u))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        );
      (l(u.plugins), u.settings && (i.settings = Kt(!0, i.settings, u.settings)));
    }
    function l(u) {
      let f = -1;
      if (u != null)
        if (Array.isArray(u))
          for (; ++f < u.length; ) {
            const c = u[f];
            o(c);
          }
        else throw new TypeError('Expected a list of plugins, not `' + u + '`');
    }
    function s(u, f) {
      let c = -1,
        h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          h = c;
          break;
        }
      if (h === -1) r.push([u, ...f]);
      else if (f.length > 0) {
        let [p, ...d] = f;
        const m = r[h][1];
        (xn(m) && xn(p) && (p = Kt(!0, m, p)), (r[h] = [u, p, ...d]));
      }
    }
  }
}
const Qp = new $n().freeze();
function tn(e, t) {
  if (typeof t != 'function') throw new TypeError('Cannot `' + e + '` without `parser`');
}
function nn(e, t) {
  if (typeof t != 'function') throw new TypeError('Cannot `' + e + '` without `compiler`');
}
function rn(e, t) {
  if (t)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
}
function oi(e) {
  if (!xn(e) || typeof e.type != 'string') throw new TypeError('Expected node, got `' + e + '`');
}
function li(e, t, n) {
  if (!n) throw new Error('`' + e + '` finished async. Use `' + t + '` instead');
}
function ht(e) {
  return Zp(e) ? e : new Ia(e);
}
function Zp(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e);
}
function ed(e) {
  return typeof e == 'string' || td(e);
}
function td(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const nd = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  si = [],
  ui = { allowDangerousHtml: !0 },
  rd = /^(https?|ircs?|mailto|xmpp)$/i,
  id = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
    { from: 'linkTarget', id: 'remove-linktarget' },
    { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function ad(e) {
  const t = e.allowedElements,
    n = e.allowElement,
    r = e.children || '',
    i = e.className,
    o = e.components,
    a = e.disallowedElements,
    l = e.rehypePlugins || si,
    s = e.remarkPlugins || si,
    u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ui } : ui,
    f = e.skipHtml,
    c = e.unwrapDisallowed,
    h = e.urlTransform || od,
    p = Qp().use(jh).use(s).use(Rp, u).use(l),
    d = new Ia();
  typeof r == 'string' && (d.value = r);
  for (const k of id)
    Object.hasOwn(e, k.from) &&
      ('' + k.from + (k.to ? 'use `' + k.to + '` instead' : 'remove it') + nd + k.id, void 0);
  const m = p.parse(d);
  let y = p.runSync(m, d);
  return (
    i &&
      (y = {
        type: 'element',
        tagName: 'div',
        properties: { className: i },
        children: y.type === 'root' ? y.children : [y],
      }),
    jn(y, x),
    wc(y, {
      Fragment: R.Fragment,
      components: o,
      ignoreInvalidStyle: !0,
      jsx: R.jsx,
      jsxs: R.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function x(k, S, F) {
    if (k.type === 'raw' && F && typeof S == 'number')
      return (f ? F.children.splice(S, 1) : (F.children[S] = { type: 'text', value: k.value }), S);
    if (k.type === 'element') {
      let D;
      for (D in Gt)
        if (Object.hasOwn(Gt, D) && Object.hasOwn(k.properties, D)) {
          const v = k.properties[D],
            O = Gt[D];
          (O === null || O.includes(k.tagName)) && (k.properties[D] = h(String(v || ''), D, k));
        }
    }
    if (k.type === 'element') {
      let D = t ? !t.includes(k.tagName) : a ? a.includes(k.tagName) : !1;
      if ((!D && n && typeof S == 'number' && (D = !n(k, S, F)), D && F && typeof S == 'number'))
        return (
          c && k.children ? F.children.splice(S, 1, ...k.children) : F.children.splice(S, 1),
          S
        );
    }
  }
}
function od(e) {
  const t = e.indexOf(':'),
    n = e.indexOf('?'),
    r = e.indexOf('#'),
    i = e.indexOf('/');
  return t < 0 ||
    (i > -1 && t > i) ||
    (n > -1 && t > n) ||
    (r > -1 && t > r) ||
    rd.test(e.slice(0, t))
    ? e
    : '';
}
function ci(e, t) {
  const n = String(e);
  if (typeof t != 'string') throw new TypeError('Expected character');
  let r = 0,
    i = n.indexOf(t);
  for (; i !== -1; ) (r++, (i = n.indexOf(t, i + t.length)));
  return r;
}
function ld(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
function sd(e, t, n) {
  const i = Tt((n || {}).ignore || []),
    o = ud(t);
  let a = -1;
  for (; ++a < o.length; ) Aa(e, 'text', l);
  function l(u, f) {
    let c = -1,
      h;
    for (; ++c < f.length; ) {
      const p = f[c],
        d = h ? h.children : void 0;
      if (i(p, d ? d.indexOf(p) : void 0, h)) return;
      h = p;
    }
    if (h) return s(u, f);
  }
  function s(u, f) {
    const c = f[f.length - 1],
      h = o[a][0],
      p = o[a][1];
    let d = 0;
    const y = c.children.indexOf(u);
    let x = !1,
      k = [];
    h.lastIndex = 0;
    let S = h.exec(u.value);
    for (; S; ) {
      const F = S.index,
        D = { index: S.index, input: S.input, stack: [...f, u] };
      let v = p(...S, D);
      if (
        (typeof v == 'string' && (v = v.length > 0 ? { type: 'text', value: v } : void 0),
        v === !1
          ? (h.lastIndex = F + 1)
          : (d !== F && k.push({ type: 'text', value: u.value.slice(d, F) }),
            Array.isArray(v) ? k.push(...v) : v && k.push(v),
            (d = F + S[0].length),
            (x = !0)),
        !h.global)
      )
        break;
      S = h.exec(u.value);
    }
    return (
      x
        ? (d < u.value.length && k.push({ type: 'text', value: u.value.slice(d) }),
          c.children.splice(y, 1, ...k))
        : (k = [u]),
      y + k.length
    );
  }
}
function ud(e) {
  const t = [];
  if (!Array.isArray(e)) throw new TypeError('Expected find and replace tuple or list of tuples');
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([cd(i[0]), fd(i[1])]);
  }
  return t;
}
function cd(e) {
  return typeof e == 'string' ? new RegExp(ld(e), 'g') : e;
}
function fd(e) {
  return typeof e == 'function'
    ? e
    : function () {
        return e;
      };
}
const an = 'phrasing',
  on = ['autolink', 'link', 'image', 'label'];
function hd() {
  return {
    transforms: [xd],
    enter: {
      literalAutolink: dd,
      literalAutolinkEmail: ln,
      literalAutolinkHttp: ln,
      literalAutolinkWww: ln,
    },
    exit: {
      literalAutolink: yd,
      literalAutolinkEmail: gd,
      literalAutolinkHttp: md,
      literalAutolinkWww: bd,
    },
  };
}
function pd() {
  return {
    unsafe: [
      {
        character: '@',
        before: '[+\\-.\\w]',
        after: '[\\-.\\w]',
        inConstruct: an,
        notInConstruct: on,
      },
      { character: '.', before: '[Ww]', after: '[\\-.\\w]', inConstruct: an, notInConstruct: on },
      { character: ':', before: '[ps]', after: '\\/', inConstruct: an, notInConstruct: on },
    ],
  };
}
function dd(e) {
  this.enter({ type: 'link', title: null, url: '', children: [] }, e);
}
function ln(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function md(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function bd(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  (t.type, (t.url = 'http://' + this.sliceSerialize(e)));
}
function gd(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function yd(e) {
  this.exit(e);
}
function xd(e) {
  sd(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, kd],
      [new RegExp('(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)', 'gu'), wd],
    ],
    { ignore: ['link', 'linkReference'] }
  );
}
function kd(e, t, n, r, i) {
  let o = '';
  if (!Fa(i) || (/^w/i.test(t) && ((n = t + n), (t = ''), (o = 'http://')), !vd(n))) return !1;
  const a = Cd(n + r);
  if (!a[0]) return !1;
  const l = {
    type: 'link',
    title: null,
    url: o + t + a[0],
    children: [{ type: 'text', value: t + a[0] }],
  };
  return a[1] ? [l, { type: 'text', value: a[1] }] : l;
}
function wd(e, t, n, r) {
  return !Fa(r, !0) || /[-\d_]$/.test(n)
    ? !1
    : {
        type: 'link',
        title: null,
        url: 'mailto:' + t + '@' + n,
        children: [{ type: 'text', value: t + '@' + n }],
      };
}
function vd(e) {
  const t = e.split('.');
  return !(
    t.length < 2 ||
    (t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
    (t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
  );
}
function Cd(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t) return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0],
    r = n.indexOf(')');
  const i = ci(e, '(');
  let o = ci(e, ')');
  for (; r !== -1 && i > o; )
    ((e += n.slice(0, r + 1)), (n = n.slice(r + 1)), (r = n.indexOf(')')), o++);
  return [e, n];
}
function Fa(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Fe(n) || Ft(n)) && (!t || n !== 47);
}
Da.peek = Rd;
function Sd() {
  return {
    enter: {
      gfmFootnoteDefinition: Ad,
      gfmFootnoteDefinitionLabelString: Id,
      gfmFootnoteCall: _d,
      gfmFootnoteCallString: Td,
    },
    exit: {
      gfmFootnoteDefinition: Dd,
      gfmFootnoteDefinitionLabelString: Fd,
      gfmFootnoteCall: Ld,
      gfmFootnoteCallString: Pd,
    },
  };
}
function Ed() {
  return {
    unsafe: [{ character: '[', inConstruct: ['phrasing', 'label', 'reference'] }],
    handlers: { footnoteDefinition: Od, footnoteReference: Da },
  };
}
function Ad(e) {
  this.enter({ type: 'footnoteDefinition', identifier: '', label: '', children: [] }, e);
}
function Id() {
  this.buffer();
}
function Fd(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (n.type, (n.label = t), (n.identifier = he(this.sliceSerialize(e)).toLowerCase()));
}
function Dd(e) {
  this.exit(e);
}
function _d(e) {
  this.enter({ type: 'footnoteReference', identifier: '', label: '' }, e);
}
function Td() {
  this.buffer();
}
function Pd(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (n.type, (n.label = t), (n.identifier = he(this.sliceSerialize(e)).toLowerCase()));
}
function Ld(e) {
  this.exit(e);
}
function Da(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move('[^');
  const a = n.enter('footnoteReference'),
    l = n.enter('reference');
  return (
    (o += i.move(n.safe(n.associationId(e), { ...i.current(), before: o, after: ']' }))),
    l(),
    a(),
    (o += i.move(']')),
    o
  );
}
function Rd() {
  return '[';
}
function Od(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move('[^');
  const a = n.enter('footnoteDefinition'),
    l = n.enter('label');
  return (
    (o += i.move(n.safe(n.associationId(e), { ...i.current(), before: o, after: ']' }))),
    l(),
    (o += i.move(']:' + (e.children && e.children.length > 0 ? ' ' : ''))),
    i.shift(4),
    (o += i.move(n.indentLines(n.containerFlow(e, i.current()), Md))),
    a(),
    o
  );
}
function Md(e, t, n) {
  return t === 0 ? e : (n ? '' : '    ') + e;
}
const Nd = [
  'autolink',
  'destinationLiteral',
  'destinationRaw',
  'reference',
  'titleQuote',
  'titleApostrophe',
];
_a.peek = Wd;
function zd() {
  return { canContainEols: ['delete'], enter: { strikethrough: jd }, exit: { strikethrough: $d } };
}
function Bd() {
  return {
    unsafe: [{ character: '~', inConstruct: 'phrasing', notInConstruct: Nd }],
    handlers: { delete: _a },
  };
}
function jd(e) {
  this.enter({ type: 'delete', children: [] }, e);
}
function $d(e) {
  this.exit(e);
}
function _a(e, t, n, r) {
  const i = n.createTracker(r),
    o = n.enter('strikethrough');
  let a = i.move('~~');
  return (
    (a += n.containerPhrasing(e, { ...i.current(), before: a, after: '~' })),
    (a += i.move('~~')),
    o(),
    a
  );
}
function Wd() {
  return '~';
}
function Ud(e) {
  return e.length;
}
function Hd(e, t) {
  const n = t || {},
    r = (n.align || []).concat(),
    i = n.stringLength || Ud,
    o = [],
    a = [],
    l = [],
    s = [];
  let u = 0,
    f = -1;
  for (; ++f < e.length; ) {
    const m = [],
      y = [];
    let x = -1;
    for (e[f].length > u && (u = e[f].length); ++x < e[f].length; ) {
      const k = qd(e[f][x]);
      if (n.alignDelimiters !== !1) {
        const S = i(k);
        ((y[x] = S), (s[x] === void 0 || S > s[x]) && (s[x] = S));
      }
      m.push(k);
    }
    ((a[f] = m), (l[f] = y));
  }
  let c = -1;
  if (typeof r == 'object' && 'length' in r) for (; ++c < u; ) o[c] = fi(r[c]);
  else {
    const m = fi(r);
    for (; ++c < u; ) o[c] = m;
  }
  c = -1;
  const h = [],
    p = [];
  for (; ++c < u; ) {
    const m = o[c];
    let y = '',
      x = '';
    m === 99 ? ((y = ':'), (x = ':')) : m === 108 ? (y = ':') : m === 114 && (x = ':');
    let k = n.alignDelimiters === !1 ? 1 : Math.max(1, s[c] - y.length - x.length);
    const S = y + '-'.repeat(k) + x;
    (n.alignDelimiters !== !1 &&
      ((k = y.length + k + x.length), k > s[c] && (s[c] = k), (p[c] = k)),
      (h[c] = S));
  }
  (a.splice(1, 0, h), l.splice(1, 0, p), (f = -1));
  const d = [];
  for (; ++f < a.length; ) {
    const m = a[f],
      y = l[f];
    c = -1;
    const x = [];
    for (; ++c < u; ) {
      const k = m[c] || '';
      let S = '',
        F = '';
      if (n.alignDelimiters !== !1) {
        const D = s[c] - (y[c] || 0),
          v = o[c];
        v === 114
          ? (S = ' '.repeat(D))
          : v === 99
            ? D % 2
              ? ((S = ' '.repeat(D / 2 + 0.5)), (F = ' '.repeat(D / 2 - 0.5)))
              : ((S = ' '.repeat(D / 2)), (F = S))
            : (F = ' '.repeat(D));
      }
      (n.delimiterStart !== !1 && !c && x.push('|'),
        n.padding !== !1 &&
          !(n.alignDelimiters === !1 && k === '') &&
          (n.delimiterStart !== !1 || c) &&
          x.push(' '),
        n.alignDelimiters !== !1 && x.push(S),
        x.push(k),
        n.alignDelimiters !== !1 && x.push(F),
        n.padding !== !1 && x.push(' '),
        (n.delimiterEnd !== !1 || c !== u - 1) && x.push('|'));
    }
    d.push(n.delimiterEnd === !1 ? x.join('').replace(/ +$/, '') : x.join(''));
  }
  return d.join(`
`);
}
function qd(e) {
  return e == null ? '' : String(e);
}
function fi(e) {
  const t = typeof e == 'string' ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Vd(e, t, n, r) {
  const i = n.enter('blockquote'),
    o = n.createTracker(r);
  (o.move('> '), o.shift(2));
  const a = n.indentLines(n.containerFlow(e, o.current()), Gd);
  return (i(), a);
}
function Gd(e, t, n) {
  return '>' + (n ? '' : ' ') + e;
}
function Yd(e, t) {
  return hi(e, t.inConstruct, !0) && !hi(e, t.notInConstruct, !1);
}
function hi(e, t, n) {
  if ((typeof t == 'string' && (t = [t]), !t || t.length === 0)) return n;
  let r = -1;
  for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
  return !1;
}
function pi(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (
      n.unsafe[i].character ===
        `
` &&
      Yd(n.stack, n.unsafe[i])
    )
      return /[ \t]/.test(r.before) ? '' : ' ';
  return `\\
`;
}
function Xd(e, t) {
  const n = String(e);
  let r = n.indexOf(t),
    i = r,
    o = 0,
    a = 0;
  if (typeof t != 'string') throw new TypeError('Expected substring');
  for (; r !== -1; )
    (r === i ? ++o > a && (a = o) : (o = 1), (i = r + t.length), (r = n.indexOf(t, i)));
  return a;
}
function Jd(e, t) {
  return !!(
    t.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function Kd(e) {
  const t = e.options.fence || '`';
  if (t !== '`' && t !== '~')
    throw new Error(
      'Cannot serialize code with `' + t + '` for `options.fence`, expected `` ` `` or `~`'
    );
  return t;
}
function Qd(e, t, n, r) {
  const i = Kd(n),
    o = e.value || '',
    a = i === '`' ? 'GraveAccent' : 'Tilde';
  if (Jd(e, n)) {
    const c = n.enter('codeIndented'),
      h = n.indentLines(o, Zd);
    return (c(), h);
  }
  const l = n.createTracker(r),
    s = i.repeat(Math.max(Xd(o, i) + 1, 3)),
    u = n.enter('codeFenced');
  let f = l.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${a}`);
    ((f += l.move(n.safe(e.lang, { before: f, after: ' ', encode: ['`'], ...l.current() }))), c());
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${a}`);
    ((f += l.move(' ')),
      (f += l.move(
        n.safe(e.meta, {
          before: f,
          after: `
`,
          encode: ['`'],
          ...l.current(),
        })
      )),
      c());
  }
  return (
    (f += l.move(`
`)),
    o &&
      (f += l.move(
        o +
          `
`
      )),
    (f += l.move(s)),
    u(),
    f
  );
}
function Zd(e, t, n) {
  return (n ? '' : '    ') + e;
}
function Wn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      'Cannot serialize title with `' + t + '` for `options.quote`, expected `"`, or `\'`'
    );
  return t;
}
function e0(e, t, n, r) {
  const i = Wn(n),
    o = i === '"' ? 'Quote' : 'Apostrophe',
    a = n.enter('definition');
  let l = n.enter('label');
  const s = n.createTracker(r);
  let u = s.move('[');
  return (
    (u += s.move(n.safe(n.associationId(e), { before: u, after: ']', ...s.current() }))),
    (u += s.move(']: ')),
    l(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((l = n.enter('destinationLiteral')),
        (u += s.move('<')),
        (u += s.move(n.safe(e.url, { before: u, after: '>', ...s.current() }))),
        (u += s.move('>')))
      : ((l = n.enter('destinationRaw')),
        (u += s.move(
          n.safe(e.url, {
            before: u,
            after: e.title
              ? ' '
              : `
`,
            ...s.current(),
          })
        ))),
    l(),
    e.title &&
      ((l = n.enter(`title${o}`)),
      (u += s.move(' ' + i)),
      (u += s.move(n.safe(e.title, { before: u, after: i, ...s.current() }))),
      (u += s.move(i)),
      l()),
    a(),
    u
  );
}
function t0(e) {
  const t = e.options.emphasis || '*';
  if (t !== '*' && t !== '_')
    throw new Error(
      'Cannot serialize emphasis with `' + t + '` for `options.emphasis`, expected `*`, or `_`'
    );
  return t;
}
function it(e) {
  return '&#x' + e.toString(16).toUpperCase() + ';';
}
function At(e, t, n) {
  const r = We(e),
    i = We(t);
  return r === void 0
    ? i === void 0
      ? n === '_'
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : i === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : r === 1
      ? i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
Ta.peek = n0;
function Ta(e, t, n, r) {
  const i = t0(n),
    o = n.enter('emphasis'),
    a = n.createTracker(r),
    l = a.move(i);
  let s = a.move(n.containerPhrasing(e, { after: i, before: l, ...a.current() }));
  const u = s.charCodeAt(0),
    f = At(r.before.charCodeAt(r.before.length - 1), u, i);
  f.inside && (s = it(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1),
    h = At(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + it(c));
  const p = a.move(i);
  return (
    o(),
    (n.attentionEncodeSurroundingInfo = { after: h.outside, before: f.outside }),
    l + s + p
  );
}
function n0(e, t, n) {
  return n.options.emphasis || '*';
}
function r0(e, t) {
  let n = !1;
  return (
    jn(e, function (r) {
      if (('value' in r && /\r?\n|\r/.test(r.value)) || r.type === 'break') return ((n = !0), gn);
    }),
    !!((!e.depth || e.depth < 3) && Ln(e) && (t.options.setext || n))
  );
}
function i0(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1),
    o = n.createTracker(r);
  if (r0(e, n)) {
    const f = n.enter('headingSetext'),
      c = n.enter('phrasing'),
      h = n.containerPhrasing(e, {
        ...o.current(),
        before: `
`,
        after: `
`,
      });
    return (
      c(),
      f(),
      h +
        `
` +
        (i === 1 ? '=' : '-').repeat(
          h.length -
            (Math.max(
              h.lastIndexOf('\r'),
              h.lastIndexOf(`
`)
            ) +
              1)
        )
    );
  }
  const a = '#'.repeat(i),
    l = n.enter('headingAtx'),
    s = n.enter('phrasing');
  o.move(a + ' ');
  let u = n.containerPhrasing(e, {
    before: '# ',
    after: `
`,
    ...o.current(),
  });
  return (
    /^[\t ]/.test(u) && (u = it(u.charCodeAt(0)) + u.slice(1)),
    (u = u ? a + ' ' + u : a),
    n.options.closeAtx && (u += ' ' + a),
    s(),
    l(),
    u
  );
}
Pa.peek = a0;
function Pa(e) {
  return e.value || '';
}
function a0() {
  return '<';
}
La.peek = o0;
function La(e, t, n, r) {
  const i = Wn(n),
    o = i === '"' ? 'Quote' : 'Apostrophe',
    a = n.enter('image');
  let l = n.enter('label');
  const s = n.createTracker(r);
  let u = s.move('![');
  return (
    (u += s.move(n.safe(e.alt, { before: u, after: ']', ...s.current() }))),
    (u += s.move('](')),
    l(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((l = n.enter('destinationLiteral')),
        (u += s.move('<')),
        (u += s.move(n.safe(e.url, { before: u, after: '>', ...s.current() }))),
        (u += s.move('>')))
      : ((l = n.enter('destinationRaw')),
        (u += s.move(n.safe(e.url, { before: u, after: e.title ? ' ' : ')', ...s.current() })))),
    l(),
    e.title &&
      ((l = n.enter(`title${o}`)),
      (u += s.move(' ' + i)),
      (u += s.move(n.safe(e.title, { before: u, after: i, ...s.current() }))),
      (u += s.move(i)),
      l()),
    (u += s.move(')')),
    a(),
    u
  );
}
function o0() {
  return '!';
}
Ra.peek = l0;
function Ra(e, t, n, r) {
  const i = e.referenceType,
    o = n.enter('imageReference');
  let a = n.enter('label');
  const l = n.createTracker(r);
  let s = l.move('![');
  const u = n.safe(e.alt, { before: s, after: ']', ...l.current() });
  ((s += l.move(u + '][')), a());
  const f = n.stack;
  ((n.stack = []), (a = n.enter('reference')));
  const c = n.safe(n.associationId(e), { before: s, after: ']', ...l.current() });
  return (
    a(),
    (n.stack = f),
    o(),
    i === 'full' || !u || u !== c
      ? (s += l.move(c + ']'))
      : i === 'shortcut'
        ? (s = s.slice(0, -1))
        : (s += l.move(']')),
    s
  );
}
function l0() {
  return '!';
}
Oa.peek = s0;
function Oa(e, t, n) {
  let r = e.value || '',
    i = '`',
    o = -1;
  for (; new RegExp('(^|[^`])' + i + '([^`]|$)').test(r); ) i += '`';
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = ' ' + r + ' ');
    ++o < n.unsafe.length;
  ) {
    const a = n.unsafe[o],
      l = n.compilePattern(a);
    let s;
    if (a.atBreak)
      for (; (s = l.exec(r)); ) {
        let u = s.index;
        (r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--,
          (r = r.slice(0, u) + ' ' + r.slice(s.index + 1)));
      }
  }
  return i + r + i;
}
function s0() {
  return '`';
}
function Ma(e, t) {
  const n = Ln(e);
  return !!(
    !t.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === 'text' &&
    (n === e.url || 'mailto:' + n === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
Na.peek = u0;
function Na(e, t, n, r) {
  const i = Wn(n),
    o = i === '"' ? 'Quote' : 'Apostrophe',
    a = n.createTracker(r);
  let l, s;
  if (Ma(e, n)) {
    const f = n.stack;
    ((n.stack = []), (l = n.enter('autolink')));
    let c = a.move('<');
    return (
      (c += a.move(n.containerPhrasing(e, { before: c, after: '>', ...a.current() }))),
      (c += a.move('>')),
      l(),
      (n.stack = f),
      c
    );
  }
  ((l = n.enter('link')), (s = n.enter('label')));
  let u = a.move('[');
  return (
    (u += a.move(n.containerPhrasing(e, { before: u, after: '](', ...a.current() }))),
    (u += a.move('](')),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter('destinationLiteral')),
        (u += a.move('<')),
        (u += a.move(n.safe(e.url, { before: u, after: '>', ...a.current() }))),
        (u += a.move('>')))
      : ((s = n.enter('destinationRaw')),
        (u += a.move(n.safe(e.url, { before: u, after: e.title ? ' ' : ')', ...a.current() })))),
    s(),
    e.title &&
      ((s = n.enter(`title${o}`)),
      (u += a.move(' ' + i)),
      (u += a.move(n.safe(e.title, { before: u, after: i, ...a.current() }))),
      (u += a.move(i)),
      s()),
    (u += a.move(')')),
    l(),
    u
  );
}
function u0(e, t, n) {
  return Ma(e, n) ? '<' : '[';
}
za.peek = c0;
function za(e, t, n, r) {
  const i = e.referenceType,
    o = n.enter('linkReference');
  let a = n.enter('label');
  const l = n.createTracker(r);
  let s = l.move('[');
  const u = n.containerPhrasing(e, { before: s, after: ']', ...l.current() });
  ((s += l.move(u + '][')), a());
  const f = n.stack;
  ((n.stack = []), (a = n.enter('reference')));
  const c = n.safe(n.associationId(e), { before: s, after: ']', ...l.current() });
  return (
    a(),
    (n.stack = f),
    o(),
    i === 'full' || !u || u !== c
      ? (s += l.move(c + ']'))
      : i === 'shortcut'
        ? (s = s.slice(0, -1))
        : (s += l.move(']')),
    s
  );
}
function c0() {
  return '[';
}
function Un(e) {
  const t = e.options.bullet || '*';
  if (t !== '*' && t !== '+' && t !== '-')
    throw new Error(
      'Cannot serialize items with `' + t + '` for `options.bullet`, expected `*`, `+`, or `-`'
    );
  return t;
}
function f0(e) {
  const t = Un(e),
    n = e.options.bulletOther;
  if (!n) return t === '*' ? '-' : '*';
  if (n !== '*' && n !== '+' && n !== '-')
    throw new Error(
      'Cannot serialize items with `' + n + '` for `options.bulletOther`, expected `*`, `+`, or `-`'
    );
  if (n === t)
    throw new Error(
      'Expected `bullet` (`' + t + '`) and `bulletOther` (`' + n + '`) to be different'
    );
  return n;
}
function h0(e) {
  const t = e.options.bulletOrdered || '.';
  if (t !== '.' && t !== ')')
    throw new Error(
      'Cannot serialize items with `' + t + '` for `options.bulletOrdered`, expected `.` or `)`'
    );
  return t;
}
function Ba(e) {
  const t = e.options.rule || '*';
  if (t !== '*' && t !== '-' && t !== '_')
    throw new Error(
      'Cannot serialize rules with `' + t + '` for `options.rule`, expected `*`, `-`, or `_`'
    );
  return t;
}
function p0(e, t, n, r) {
  const i = n.enter('list'),
    o = n.bulletCurrent;
  let a = e.ordered ? h0(n) : Un(n);
  const l = e.ordered ? (a === '.' ? ')' : '.') : f0(n);
  let s = t && n.bulletLastUsed ? a === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      ((a === '*' || a === '-') &&
        f &&
        (!f.children || !f.children[0]) &&
        n.stack[n.stack.length - 1] === 'list' &&
        n.stack[n.stack.length - 2] === 'listItem' &&
        n.stack[n.stack.length - 3] === 'list' &&
        n.stack[n.stack.length - 4] === 'listItem' &&
        n.indexStack[n.indexStack.length - 1] === 0 &&
        n.indexStack[n.indexStack.length - 2] === 0 &&
        n.indexStack[n.indexStack.length - 3] === 0 &&
        (s = !0),
      Ba(n) === a && f)
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const h = e.children[c];
        if (
          h &&
          h.type === 'listItem' &&
          h.children &&
          h.children[0] &&
          h.children[0].type === 'thematicBreak'
        ) {
          s = !0;
          break;
        }
      }
    }
  }
  (s && (a = l), (n.bulletCurrent = a));
  const u = n.containerFlow(e, r);
  return ((n.bulletLastUsed = a), (n.bulletCurrent = o), i(), u);
}
function d0(e) {
  const t = e.options.listItemIndent || 'one';
  if (t !== 'tab' && t !== 'one' && t !== 'mixed')
    throw new Error(
      'Cannot serialize items with `' +
        t +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    );
  return t;
}
function m0(e, t, n, r) {
  const i = d0(n);
  let o = n.bulletCurrent || Un(n);
  t &&
    t.type === 'list' &&
    t.ordered &&
    (o =
      (typeof t.start == 'number' && t.start > -1 ? t.start : 1) +
      (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
      o);
  let a = o.length + 1;
  (i === 'tab' || (i === 'mixed' && ((t && t.type === 'list' && t.spread) || e.spread))) &&
    (a = Math.ceil(a / 4) * 4);
  const l = n.createTracker(r);
  (l.move(o + ' '.repeat(a - o.length)), l.shift(a));
  const s = n.enter('listItem'),
    u = n.indentLines(n.containerFlow(e, l.current()), f);
  return (s(), u);
  function f(c, h, p) {
    return h ? (p ? '' : ' '.repeat(a)) + c : (p ? o : o + ' '.repeat(a - o.length)) + c;
  }
}
function b0(e, t, n, r) {
  const i = n.enter('paragraph'),
    o = n.enter('phrasing'),
    a = n.containerPhrasing(e, r);
  return (o(), i(), a);
}
const g0 = Tt([
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'inlineMath',
  'link',
  'linkReference',
  'mdxJsxTextElement',
  'mdxTextExpression',
  'strong',
  'text',
  'textDirective',
]);
function y0(e, t, n, r) {
  return (
    e.children.some(function (a) {
      return g0(a);
    })
      ? n.containerPhrasing
      : n.containerFlow
  ).call(n, e, r);
}
function x0(e) {
  const t = e.options.strong || '*';
  if (t !== '*' && t !== '_')
    throw new Error(
      'Cannot serialize strong with `' + t + '` for `options.strong`, expected `*`, or `_`'
    );
  return t;
}
ja.peek = k0;
function ja(e, t, n, r) {
  const i = x0(n),
    o = n.enter('strong'),
    a = n.createTracker(r),
    l = a.move(i + i);
  let s = a.move(n.containerPhrasing(e, { after: i, before: l, ...a.current() }));
  const u = s.charCodeAt(0),
    f = At(r.before.charCodeAt(r.before.length - 1), u, i);
  f.inside && (s = it(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1),
    h = At(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + it(c));
  const p = a.move(i + i);
  return (
    o(),
    (n.attentionEncodeSurroundingInfo = { after: h.outside, before: f.outside }),
    l + s + p
  );
}
function k0(e, t, n) {
  return n.options.strong || '*';
}
function w0(e, t, n, r) {
  return n.safe(e.value, r);
}
function v0(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      'Cannot serialize rules with repetition `' +
        t +
        '` for `options.ruleRepetition`, expected `3` or more'
    );
  return t;
}
function C0(e, t, n) {
  const r = (Ba(n) + (n.options.ruleSpaces ? ' ' : '')).repeat(v0(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const $a = {
  blockquote: Vd,
  break: pi,
  code: Qd,
  definition: e0,
  emphasis: Ta,
  hardBreak: pi,
  heading: i0,
  html: Pa,
  image: La,
  imageReference: Ra,
  inlineCode: Oa,
  link: Na,
  linkReference: za,
  list: p0,
  listItem: m0,
  paragraph: b0,
  root: y0,
  strong: ja,
  text: w0,
  thematicBreak: C0,
};
function S0() {
  return {
    enter: { table: E0, tableData: di, tableHeader: di, tableRow: I0 },
    exit: { codeText: F0, table: A0, tableData: sn, tableHeader: sn, tableRow: sn },
  };
}
function E0(e) {
  const t = e._align;
  (this.enter(
    {
      type: 'table',
      align: t.map(function (n) {
        return n === 'none' ? null : n;
      }),
      children: [],
    },
    e
  ),
    (this.data.inTable = !0));
}
function A0(e) {
  (this.exit(e), (this.data.inTable = void 0));
}
function I0(e) {
  this.enter({ type: 'tableRow', children: [] }, e);
}
function sn(e) {
  this.exit(e);
}
function di(e) {
  this.enter({ type: 'tableCell', children: [] }, e);
}
function F0(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, D0));
  const n = this.stack[this.stack.length - 1];
  (n.type, (n.value = t), this.exit(e));
}
function D0(e, t) {
  return t === '|' ? t : e;
}
function _0(e) {
  const t = e || {},
    n = t.tableCellPadding,
    r = t.tablePipeAlign,
    i = t.stringLength,
    o = n ? ' ' : '|';
  return {
    unsafe: [
      { character: '\r', inConstruct: 'tableCell' },
      {
        character: `
`,
        inConstruct: 'tableCell',
      },
      { atBreak: !0, character: '|', after: '[	 :-]' },
      { character: '|', inConstruct: 'tableCell' },
      { atBreak: !0, character: ':', after: '-' },
      { atBreak: !0, character: '-', after: '[:|-]' },
    ],
    handlers: { inlineCode: h, table: a, tableCell: s, tableRow: l },
  };
  function a(p, d, m, y) {
    return u(f(p, m, y), p.align);
  }
  function l(p, d, m, y) {
    const x = c(p, m, y),
      k = u([x]);
    return k.slice(
      0,
      k.indexOf(`
`)
    );
  }
  function s(p, d, m, y) {
    const x = m.enter('tableCell'),
      k = m.enter('phrasing'),
      S = m.containerPhrasing(p, { ...y, before: o, after: o });
    return (k(), x(), S);
  }
  function u(p, d) {
    return Hd(p, { align: d, alignDelimiters: r, padding: n, stringLength: i });
  }
  function f(p, d, m) {
    const y = p.children;
    let x = -1;
    const k = [],
      S = d.enter('table');
    for (; ++x < y.length; ) k[x] = c(y[x], d, m);
    return (S(), k);
  }
  function c(p, d, m) {
    const y = p.children;
    let x = -1;
    const k = [],
      S = d.enter('tableRow');
    for (; ++x < y.length; ) k[x] = s(y[x], p, d, m);
    return (S(), k);
  }
  function h(p, d, m) {
    let y = $a.inlineCode(p, d, m);
    return (m.stack.includes('tableCell') && (y = y.replace(/\|/g, '\\$&')), y);
  }
}
function T0() {
  return {
    exit: { taskListCheckValueChecked: mi, taskListCheckValueUnchecked: mi, paragraph: L0 },
  };
}
function P0() {
  return { unsafe: [{ atBreak: !0, character: '-', after: '[:|-]' }], handlers: { listItem: R0 } };
}
function mi(e) {
  const t = this.stack[this.stack.length - 2];
  (t.type, (t.checked = e.type === 'taskListCheckValueChecked'));
}
function L0(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === 'listItem' && typeof t.checked == 'boolean') {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === 'text') {
      const i = t.children;
      let o = -1,
        a;
      for (; ++o < i.length; ) {
        const l = i[o];
        if (l.type === 'paragraph') {
          a = l;
          break;
        }
      }
      a === n &&
        ((r.value = r.value.slice(1)),
        r.value.length === 0
          ? n.children.shift()
          : n.position &&
            r.position &&
            typeof r.position.start.offset == 'number' &&
            (r.position.start.column++,
            r.position.start.offset++,
            (n.position.start = Object.assign({}, r.position.start))));
    }
  }
  this.exit(e);
}
function R0(e, t, n, r) {
  const i = e.children[0],
    o = typeof e.checked == 'boolean' && i && i.type === 'paragraph',
    a = '[' + (e.checked ? 'x' : ' ') + '] ',
    l = n.createTracker(r);
  o && l.move(a);
  let s = $a.listItem(e, t, n, { ...r, ...l.current() });
  return (o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s);
  function u(f) {
    return f + a;
  }
}
function O0() {
  return [hd(), Sd(), zd(), S0(), T0()];
}
function M0(e) {
  return { extensions: [pd(), Ed(), Bd(), _0(e), P0()] };
}
const N0 = { tokenize: U0, partial: !0 },
  Wa = { tokenize: H0, partial: !0 },
  Ua = { tokenize: q0, partial: !0 },
  Ha = { tokenize: V0, partial: !0 },
  z0 = { tokenize: G0, partial: !0 },
  qa = { name: 'wwwAutolink', tokenize: $0, previous: Ga },
  Va = { name: 'protocolAutolink', tokenize: W0, previous: Ya },
  ke = { name: 'emailAutolink', tokenize: j0, previous: Xa },
  de = {};
function B0() {
  return { text: de };
}
let Ie = 48;
for (; Ie < 123; ) ((de[Ie] = ke), Ie++, Ie === 58 ? (Ie = 65) : Ie === 91 && (Ie = 97));
de[43] = ke;
de[45] = ke;
de[46] = ke;
de[95] = ke;
de[72] = [ke, Va];
de[104] = [ke, Va];
de[87] = [ke, qa];
de[119] = [ke, qa];
function j0(e, t, n) {
  const r = this;
  let i, o;
  return a;
  function a(c) {
    return !wn(c) || !Xa.call(r, r.previous) || Hn(r.events)
      ? n(c)
      : (e.enter('literalAutolink'), e.enter('literalAutolinkEmail'), l(c));
  }
  function l(c) {
    return wn(c) ? (e.consume(c), l) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46
      ? e.check(z0, f, u)(c)
      : c === 45 || c === 95 || Z(c)
        ? ((o = !0), e.consume(c), s)
        : f(c);
  }
  function u(c) {
    return (e.consume(c), (i = !0), s);
  }
  function f(c) {
    return o && i && te(r.previous)
      ? (e.exit('literalAutolinkEmail'), e.exit('literalAutolink'), t(c))
      : n(c);
  }
}
function $0(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (a !== 87 && a !== 119) || !Ga.call(r, r.previous) || Hn(r.events)
      ? n(a)
      : (e.enter('literalAutolink'),
        e.enter('literalAutolinkWww'),
        e.check(N0, e.attempt(Wa, e.attempt(Ua, o), n), n)(a));
  }
  function o(a) {
    return (e.exit('literalAutolinkWww'), e.exit('literalAutolink'), t(a));
  }
}
function W0(e, t, n) {
  const r = this;
  let i = '',
    o = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && Ya.call(r, r.previous) && !Hn(r.events)
      ? (e.enter('literalAutolink'),
        e.enter('literalAutolinkHttp'),
        (i += String.fromCodePoint(c)),
        e.consume(c),
        l)
      : n(c);
  }
  function l(c) {
    if (te(c) && i.length < 5) return ((i += String.fromCodePoint(c)), e.consume(c), l);
    if (c === 58) {
      const h = i.toLowerCase();
      if (h === 'http' || h === 'https') return (e.consume(c), s);
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : ((o = !0), s)) : n(c);
  }
  function u(c) {
    return c === null || vt(c) || V(c) || Fe(c) || Ft(c)
      ? n(c)
      : e.attempt(Wa, e.attempt(Ua, f), n)(c);
  }
  function f(c) {
    return (e.exit('literalAutolinkHttp'), e.exit('literalAutolink'), t(c));
  }
}
function U0(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3
      ? (r++, e.consume(a), i)
      : a === 46 && r === 3
        ? (e.consume(a), o)
        : n(a);
  }
  function o(a) {
    return a === null ? n(a) : t(a);
  }
}
function H0(e, t, n) {
  let r, i, o;
  return a;
  function a(u) {
    return u === 46 || u === 95
      ? e.check(Ha, s, l)(u)
      : u === null || V(u) || Fe(u) || (u !== 45 && Ft(u))
        ? s(u)
        : ((o = !0), e.consume(u), a);
  }
  function l(u) {
    return (u === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(u), a);
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function q0(e, t) {
  let n = 0,
    r = 0;
  return i;
  function i(a) {
    return a === 40
      ? (n++, e.consume(a), i)
      : a === 41 && r < n
        ? o(a)
        : a === 33 ||
            a === 34 ||
            a === 38 ||
            a === 39 ||
            a === 41 ||
            a === 42 ||
            a === 44 ||
            a === 46 ||
            a === 58 ||
            a === 59 ||
            a === 60 ||
            a === 63 ||
            a === 93 ||
            a === 95 ||
            a === 126
          ? e.check(Ha, t, o)(a)
          : a === null || V(a) || Fe(a)
            ? t(a)
            : (e.consume(a), i);
  }
  function o(a) {
    return (a === 41 && r++, e.consume(a), i);
  }
}
function V0(e, t, n) {
  return r;
  function r(l) {
    return l === 33 ||
      l === 34 ||
      l === 39 ||
      l === 41 ||
      l === 42 ||
      l === 44 ||
      l === 46 ||
      l === 58 ||
      l === 59 ||
      l === 63 ||
      l === 95 ||
      l === 126
      ? (e.consume(l), r)
      : l === 38
        ? (e.consume(l), o)
        : l === 93
          ? (e.consume(l), i)
          : l === 60 || l === null || V(l) || Fe(l)
            ? t(l)
            : n(l);
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || V(l) || Fe(l) ? t(l) : r(l);
  }
  function o(l) {
    return te(l) ? a(l) : n(l);
  }
  function a(l) {
    return l === 59 ? (e.consume(l), r) : te(l) ? (e.consume(l), a) : n(l);
  }
}
function G0(e, t, n) {
  return r;
  function r(o) {
    return (e.consume(o), i);
  }
  function i(o) {
    return Z(o) ? n(o) : t(o);
  }
}
function Ga(e) {
  return (
    e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || V(e)
  );
}
function Ya(e) {
  return !te(e);
}
function Xa(e) {
  return !(e === 47 || wn(e));
}
function wn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Z(e);
}
function Hn(e) {
  let t = e.length,
    n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === 'labelLink' || r.type === 'labelImage') && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return (e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n);
}
const Y0 = { tokenize: nm, partial: !0 };
function X0() {
  return {
    document: {
      91: { name: 'gfmFootnoteDefinition', tokenize: Z0, continuation: { tokenize: em }, exit: tm },
    },
    text: {
      91: { name: 'gfmFootnoteCall', tokenize: Q0 },
      93: { name: 'gfmPotentialFootnoteCall', add: 'after', tokenize: J0, resolveTo: K0 },
    },
  };
}
function J0(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === 'labelImage') {
      a = s;
      break;
    }
    if (
      s.type === 'gfmFootnoteCall' ||
      s.type === 'labelLink' ||
      s.type === 'label' ||
      s.type === 'image' ||
      s.type === 'link'
    )
      break;
  }
  return l;
  function l(s) {
    if (!a || !a._balanced) return n(s);
    const u = he(r.sliceSerialize({ start: a.end, end: r.now() }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1))
      ? n(s)
      : (e.enter('gfmFootnoteCallLabelMarker'),
        e.consume(s),
        e.exit('gfmFootnoteCallLabelMarker'),
        t(s));
  }
}
function K0(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === 'labelImage' && e[n][0] === 'enter') {
      e[n][1];
      break;
    }
  ((e[n + 1][1].type = 'data'), (e[n + 3][1].type = 'gfmFootnoteCallLabelMarker'));
  const r = {
      type: 'gfmFootnoteCall',
      start: Object.assign({}, e[n + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    i = {
      type: 'gfmFootnoteCallMarker',
      start: Object.assign({}, e[n + 3][1].end),
      end: Object.assign({}, e[n + 3][1].end),
    };
  (i.end.column++, i.end.offset++, i.end._bufferIndex++);
  const o = {
      type: 'gfmFootnoteCallString',
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    a = {
      type: 'chunkString',
      contentType: 'string',
      start: Object.assign({}, o.start),
      end: Object.assign({}, o.end),
    },
    l = [
      e[n + 1],
      e[n + 2],
      ['enter', r, t],
      e[n + 3],
      e[n + 4],
      ['enter', i, t],
      ['exit', i, t],
      ['enter', o, t],
      ['enter', a, t],
      ['exit', a, t],
      ['exit', o, t],
      e[e.length - 2],
      e[e.length - 1],
      ['exit', r, t],
    ];
  return (e.splice(n, e.length - n + 1, ...l), e);
}
function Q0(e, t, n) {
  const r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0,
    a;
  return l;
  function l(c) {
    return (
      e.enter('gfmFootnoteCall'),
      e.enter('gfmFootnoteCallLabelMarker'),
      e.consume(c),
      e.exit('gfmFootnoteCallLabelMarker'),
      s
    );
  }
  function s(c) {
    return c !== 94
      ? n(c)
      : (e.enter('gfmFootnoteCallMarker'),
        e.consume(c),
        e.exit('gfmFootnoteCallMarker'),
        e.enter('gfmFootnoteCallString'),
        (e.enter('chunkString').contentType = 'string'),
        u);
  }
  function u(c) {
    if (o > 999 || (c === 93 && !a) || c === null || c === 91 || V(c)) return n(c);
    if (c === 93) {
      e.exit('chunkString');
      const h = e.exit('gfmFootnoteCallString');
      return i.includes(he(r.sliceSerialize(h)))
        ? (e.enter('gfmFootnoteCallLabelMarker'),
          e.consume(c),
          e.exit('gfmFootnoteCallLabelMarker'),
          e.exit('gfmFootnoteCall'),
          t)
        : n(c);
    }
    return (V(c) || (a = !0), o++, e.consume(c), c === 92 ? f : u);
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Z0(e, t, n) {
  const r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o,
    a = 0,
    l;
  return s;
  function s(d) {
    return (
      (e.enter('gfmFootnoteDefinition')._container = !0),
      e.enter('gfmFootnoteDefinitionLabel'),
      e.enter('gfmFootnoteDefinitionLabelMarker'),
      e.consume(d),
      e.exit('gfmFootnoteDefinitionLabelMarker'),
      u
    );
  }
  function u(d) {
    return d === 94
      ? (e.enter('gfmFootnoteDefinitionMarker'),
        e.consume(d),
        e.exit('gfmFootnoteDefinitionMarker'),
        e.enter('gfmFootnoteDefinitionLabelString'),
        (e.enter('chunkString').contentType = 'string'),
        f)
      : n(d);
  }
  function f(d) {
    if (a > 999 || (d === 93 && !l) || d === null || d === 91 || V(d)) return n(d);
    if (d === 93) {
      e.exit('chunkString');
      const m = e.exit('gfmFootnoteDefinitionLabelString');
      return (
        (o = he(r.sliceSerialize(m))),
        e.enter('gfmFootnoteDefinitionLabelMarker'),
        e.consume(d),
        e.exit('gfmFootnoteDefinitionLabelMarker'),
        e.exit('gfmFootnoteDefinitionLabel'),
        h
      );
    }
    return (V(d) || (l = !0), a++, e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, f) : f(d);
  }
  function h(d) {
    return d === 58
      ? (e.enter('definitionMarker'),
        e.consume(d),
        e.exit('definitionMarker'),
        i.includes(o) || i.push(o),
        W(e, p, 'gfmFootnoteDefinitionWhitespace'))
      : n(d);
  }
  function p(d) {
    return t(d);
  }
}
function em(e, t, n) {
  return e.check(lt, t, e.attempt(Y0, t, n));
}
function tm(e) {
  e.exit('gfmFootnoteDefinition');
}
function nm(e, t, n) {
  const r = this;
  return W(e, i, 'gfmFootnoteDefinitionIndent', 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === 'gfmFootnoteDefinitionIndent' &&
      a[2].sliceSerialize(a[1], !0).length === 4
      ? t(o)
      : n(o);
  }
}
function rm(e) {
  let n = (e || {}).singleTilde;
  const r = { name: 'strikethrough', tokenize: o, resolveAll: i };
  return (
    n == null && (n = !0),
    { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } }
  );
  function i(a, l) {
    let s = -1;
    for (; ++s < a.length; )
      if (
        a[s][0] === 'enter' &&
        a[s][1].type === 'strikethroughSequenceTemporary' &&
        a[s][1]._close
      ) {
        let u = s;
        for (; u--; )
          if (
            a[u][0] === 'exit' &&
            a[u][1].type === 'strikethroughSequenceTemporary' &&
            a[u][1]._open &&
            a[s][1].end.offset - a[s][1].start.offset === a[u][1].end.offset - a[u][1].start.offset
          ) {
            ((a[s][1].type = 'strikethroughSequence'), (a[u][1].type = 'strikethroughSequence'));
            const f = {
                type: 'strikethrough',
                start: Object.assign({}, a[u][1].start),
                end: Object.assign({}, a[s][1].end),
              },
              c = {
                type: 'strikethroughText',
                start: Object.assign({}, a[u][1].end),
                end: Object.assign({}, a[s][1].start),
              },
              h = [
                ['enter', f, l],
                ['enter', a[u][1], l],
                ['exit', a[u][1], l],
                ['enter', c, l],
              ],
              p = l.parser.constructs.insideSpan.null;
            (p && ae(h, h.length, 0, Dt(p, a.slice(u + 1, s), l)),
              ae(h, h.length, 0, [
                ['exit', c, l],
                ['enter', a[s][1], l],
                ['exit', a[s][1], l],
                ['exit', f, l],
              ]),
              ae(a, u - 1, s - u + 3, h),
              (s = u + h.length - 2));
            break;
          }
      }
    for (s = -1; ++s < a.length; )
      a[s][1].type === 'strikethroughSequenceTemporary' && (a[s][1].type = 'data');
    return a;
  }
  function o(a, l, s) {
    const u = this.previous,
      f = this.events;
    let c = 0;
    return h;
    function h(d) {
      return u === 126 && f[f.length - 1][1].type !== 'characterEscape'
        ? s(d)
        : (a.enter('strikethroughSequenceTemporary'), p(d));
    }
    function p(d) {
      const m = We(u);
      if (d === 126) return c > 1 ? s(d) : (a.consume(d), c++, p);
      if (c < 2 && !n) return s(d);
      const y = a.exit('strikethroughSequenceTemporary'),
        x = We(d);
      return ((y._open = !x || (x === 2 && !!m)), (y._close = !m || (m === 2 && !!x)), l(d));
    }
  }
}
class im {
  constructor() {
    this.map = [];
  }
  add(t, n, r) {
    am(this, t, n, r);
  }
  consume(t) {
    if (
      (this.map.sort(function (o, a) {
        return o[0] - a[0];
      }),
      this.map.length === 0)
    )
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      ((n -= 1),
        r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]),
        (t.length = this.map[n][0]));
    (r.push([...t]), (t.length = 0));
    let i = r.pop();
    for (; i; ) (t.push(...i), (i = r.pop()));
    this.map.length = 0;
  }
}
function am(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        ((e.map[i][1] += n), e.map[i][2].push(...r));
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function om(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === 'enter')
        i[1].type === 'tableContent' &&
          r.push(e[t + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
      else if (i[1].type === 'tableContent') {
        if (e[t - 1][1].type === 'tableDelimiterMarker') {
          const o = r.length - 1;
          r[o] = r[o] === 'left' ? 'center' : 'right';
        }
      } else if (i[1].type === 'tableDelimiterRow') break;
    } else i[0] === 'enter' && i[1].type === 'tableDelimiterRow' && (n = !0);
    t += 1;
  }
  return r;
}
function lm() {
  return { flow: { null: { name: 'table', tokenize: sm, resolveAll: um } } };
}
function sm(e, t, n) {
  const r = this;
  let i = 0,
    o = 0,
    a;
  return l;
  function l(w) {
    let _ = r.events.length - 1;
    for (; _ > -1; ) {
      const I = r.events[_][1].type;
      if (I === 'lineEnding' || I === 'linePrefix') _--;
      else break;
    }
    const T = _ > -1 ? r.events[_][1].type : null,
      P = T === 'tableHead' || T === 'tableRow' ? v : s;
    return P === v && r.parser.lazy[r.now().line] ? n(w) : P(w);
  }
  function s(w) {
    return (e.enter('tableHead'), e.enter('tableRow'), u(w));
  }
  function u(w) {
    return (w === 124 || ((a = !0), (o += 1)), f(w));
  }
  function f(w) {
    return w === null
      ? n(w)
      : L(w)
        ? o > 1
          ? ((o = 0),
            (r.interrupt = !0),
            e.exit('tableRow'),
            e.enter('lineEnding'),
            e.consume(w),
            e.exit('lineEnding'),
            p)
          : n(w)
        : j(w)
          ? W(e, f, 'whitespace')(w)
          : ((o += 1),
            a && ((a = !1), (i += 1)),
            w === 124
              ? (e.enter('tableCellDivider'), e.consume(w), e.exit('tableCellDivider'), (a = !0), f)
              : (e.enter('data'), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || V(w)
      ? (e.exit('data'), f(w))
      : (e.consume(w), w === 92 ? h : c);
  }
  function h(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function p(w) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? n(w)
        : (e.enter('tableDelimiterRow'),
          (a = !1),
          j(w)
            ? W(
                e,
                d,
                'linePrefix',
                r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
              )(w)
            : d(w))
    );
  }
  function d(w) {
    return w === 45 || w === 58
      ? y(w)
      : w === 124
        ? ((a = !0), e.enter('tableCellDivider'), e.consume(w), e.exit('tableCellDivider'), m)
        : D(w);
  }
  function m(w) {
    return j(w) ? W(e, y, 'whitespace')(w) : y(w);
  }
  function y(w) {
    return w === 58
      ? ((o += 1),
        (a = !0),
        e.enter('tableDelimiterMarker'),
        e.consume(w),
        e.exit('tableDelimiterMarker'),
        x)
      : w === 45
        ? ((o += 1), x(w))
        : w === null || L(w)
          ? F(w)
          : D(w);
  }
  function x(w) {
    return w === 45 ? (e.enter('tableDelimiterFiller'), k(w)) : D(w);
  }
  function k(w) {
    return w === 45
      ? (e.consume(w), k)
      : w === 58
        ? ((a = !0),
          e.exit('tableDelimiterFiller'),
          e.enter('tableDelimiterMarker'),
          e.consume(w),
          e.exit('tableDelimiterMarker'),
          S)
        : (e.exit('tableDelimiterFiller'), S(w));
  }
  function S(w) {
    return j(w) ? W(e, F, 'whitespace')(w) : F(w);
  }
  function F(w) {
    return w === 124
      ? d(w)
      : w === null || L(w)
        ? !a || i !== o
          ? D(w)
          : (e.exit('tableDelimiterRow'), e.exit('tableHead'), t(w))
        : D(w);
  }
  function D(w) {
    return n(w);
  }
  function v(w) {
    return (e.enter('tableRow'), O(w));
  }
  function O(w) {
    return w === 124
      ? (e.enter('tableCellDivider'), e.consume(w), e.exit('tableCellDivider'), O)
      : w === null || L(w)
        ? (e.exit('tableRow'), t(w))
        : j(w)
          ? W(e, O, 'whitespace')(w)
          : (e.enter('data'), U(w));
  }
  function U(w) {
    return w === null || w === 124 || V(w)
      ? (e.exit('data'), O(w))
      : (e.consume(w), w === 92 ? H : U);
  }
  function H(w) {
    return w === 92 || w === 124 ? (e.consume(w), U) : U(w);
  }
}
function um(e, t) {
  let n = -1,
    r = !0,
    i = 0,
    o = [0, 0, 0, 0],
    a = [0, 0, 0, 0],
    l = !1,
    s = 0,
    u,
    f,
    c;
  const h = new im();
  for (; ++n < e.length; ) {
    const p = e[n],
      d = p[1];
    p[0] === 'enter'
      ? d.type === 'tableHead'
        ? ((l = !1),
          s !== 0 && (bi(h, t, s, u, f), (f = void 0), (s = 0)),
          (u = { type: 'table', start: Object.assign({}, d.start), end: Object.assign({}, d.end) }),
          h.add(n, 0, [['enter', u, t]]))
        : d.type === 'tableRow' || d.type === 'tableDelimiterRow'
          ? ((r = !0),
            (c = void 0),
            (o = [0, 0, 0, 0]),
            (a = [0, n + 1, 0, 0]),
            l &&
              ((l = !1),
              (f = {
                type: 'tableBody',
                start: Object.assign({}, d.start),
                end: Object.assign({}, d.end),
              }),
              h.add(n, 0, [['enter', f, t]])),
            (i = d.type === 'tableDelimiterRow' ? 2 : f ? 3 : 1))
          : i &&
              (d.type === 'data' ||
                d.type === 'tableDelimiterMarker' ||
                d.type === 'tableDelimiterFiller')
            ? ((r = !1),
              a[2] === 0 &&
                (o[1] !== 0 && ((a[0] = a[1]), (c = pt(h, t, o, i, void 0, c)), (o = [0, 0, 0, 0])),
                (a[2] = n)))
            : d.type === 'tableCellDivider' &&
              (r
                ? (r = !1)
                : (o[1] !== 0 && ((a[0] = a[1]), (c = pt(h, t, o, i, void 0, c))),
                  (o = a),
                  (a = [o[1], n, 0, 0])))
      : d.type === 'tableHead'
        ? ((l = !0), (s = n))
        : d.type === 'tableRow' || d.type === 'tableDelimiterRow'
          ? ((s = n),
            o[1] !== 0
              ? ((a[0] = a[1]), (c = pt(h, t, o, i, n, c)))
              : a[1] !== 0 && (c = pt(h, t, a, i, n, c)),
            (i = 0))
          : i &&
            (d.type === 'data' ||
              d.type === 'tableDelimiterMarker' ||
              d.type === 'tableDelimiterFiller') &&
            (a[3] = n);
  }
  for (s !== 0 && bi(h, t, s, u, f), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === 'enter' && p[1].type === 'table' && (p[1]._align = om(t.events, n));
  }
  return e;
}
function pt(e, t, n, r, i, o) {
  const a = r === 1 ? 'tableHeader' : r === 2 ? 'tableDelimiter' : 'tableData',
    l = 'tableContent';
  n[0] !== 0 && ((o.end = Object.assign({}, Ne(t.events, n[0]))), e.add(n[0], 0, [['exit', o, t]]));
  const s = Ne(t.events, n[1]);
  if (
    ((o = { type: a, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(n[1], 0, [['enter', o, t]]),
    n[2] !== 0)
  ) {
    const u = Ne(t.events, n[2]),
      f = Ne(t.events, n[3]),
      c = { type: l, start: Object.assign({}, u), end: Object.assign({}, f) };
    if ((e.add(n[2], 0, [['enter', c, t]]), r !== 2)) {
      const h = t.events[n[2]],
        p = t.events[n[3]];
      if (
        ((h[1].end = Object.assign({}, p[1].end)),
        (h[1].type = 'chunkText'),
        (h[1].contentType = 'text'),
        n[3] > n[2] + 1)
      ) {
        const d = n[2] + 1,
          m = n[3] - n[2] - 1;
        e.add(d, m, []);
      }
    }
    e.add(n[3] + 1, 0, [['exit', c, t]]);
  }
  return (
    i !== void 0 &&
      ((o.end = Object.assign({}, Ne(t.events, i))), e.add(i, 0, [['exit', o, t]]), (o = void 0)),
    o
  );
}
function bi(e, t, n, r, i) {
  const o = [],
    a = Ne(t.events, n);
  (i && ((i.end = Object.assign({}, a)), o.push(['exit', i, t])),
    (r.end = Object.assign({}, a)),
    o.push(['exit', r, t]),
    e.add(n + 1, 0, o));
}
function Ne(e, t) {
  const n = e[t],
    r = n[0] === 'enter' ? 'start' : 'end';
  return n[1][r];
}
const cm = { name: 'tasklistCheck', tokenize: hm };
function fm() {
  return { text: { 91: cm } };
}
function hm(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? n(s)
      : (e.enter('taskListCheck'),
        e.enter('taskListCheckMarker'),
        e.consume(s),
        e.exit('taskListCheckMarker'),
        o);
  }
  function o(s) {
    return V(s)
      ? (e.enter('taskListCheckValueUnchecked'),
        e.consume(s),
        e.exit('taskListCheckValueUnchecked'),
        a)
      : s === 88 || s === 120
        ? (e.enter('taskListCheckValueChecked'),
          e.consume(s),
          e.exit('taskListCheckValueChecked'),
          a)
        : n(s);
  }
  function a(s) {
    return s === 93
      ? (e.enter('taskListCheckMarker'),
        e.consume(s),
        e.exit('taskListCheckMarker'),
        e.exit('taskListCheck'),
        l)
      : n(s);
  }
  function l(s) {
    return L(s) ? t(s) : j(s) ? e.check({ tokenize: pm }, t, n)(s) : n(s);
  }
}
function pm(e, t, n) {
  return W(e, r, 'whitespace');
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function dm(e) {
  return la([B0(), X0(), rm(e), lm(), fm()]);
}
const mm = {};
function bm(e) {
  const t = this,
    n = e || mm,
    r = t.data(),
    i = r.micromarkExtensions || (r.micromarkExtensions = []),
    o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  (i.push(dm(n)), o.push(O0()), a.push(M0(n)));
}
const gm = (e) => {
    const t = [],
      n = (r, i = []) => {
        if (typeof r == 'string') {
          t.push({ path: [...i], value: r });
          return;
        }
        typeof r != 'object' ||
          r === null ||
          Object.entries(r).forEach(([o, a]) => {
            n(a, [...i, o]);
          });
      };
    return (n(e), t.length === 1 ? t[0] : null);
  },
  gi = 240,
  Ja = ({ input: e, shouldTruncateText: t, Wrapper: n, className: r }) => {
    const [i, o] = X.useState('no-show-more-button-required'),
      a = X.useRef(null);
    return (
      X.useLayoutEffect(() => {
        a.current && t && a.current.scrollHeight > gi && o('showing-show-more-button');
      }, [e, t]),
      R.jsxs('div', {
        className: r,
        children: [
          R.jsx(n, {
            children: R.jsx('div', {
              ref: a,
              style: {
                maxHeight: i === 'showing-show-more-button' && t ? `${gi}px` : 'none',
                overflow: 'hidden',
              },
              children: R.jsx(ad, {
                className: 'prose dark:prose-invert prose-sm',
                remarkPlugins: [bm],
                children: e,
              }),
            }),
          }),
          i === 'showing-show-more-button' &&
            t &&
            R.jsxs(cn, {
              onClick: () => {
                o('showing-more');
              },
              variant: 'secondary',
              size: 'sm',
              className: 'mt-3 mb-5',
              children: [R.jsx(co, {}), 'Show more'],
            }),
          i === 'showing-more' &&
            t &&
            R.jsxs(cn, {
              onClick: () => {
                o('showing-show-more-button');
              },
              variant: 'secondary',
              size: 'sm',
              className: 'mt-3 mb-5',
              children: [R.jsx(fo, {}), 'Show less'],
            }),
        ],
      })
    );
  },
  ym = ({ input: e, name: t }) => {
    const n = gm(e);
    return n
      ? R.jsxs('div', {
          children: [
            n.path.length > 0 &&
              R.jsxs('div', {
                className: 'flex items-center text-sm text-muted-foreground mb-2',
                children: [
                  R.jsx('span', { className: 'font-mono', children: t ?? 'object' }),
                  n.path.map((r, i) =>
                    R.jsx(
                      B.Fragment,
                      { children: R.jsxs('span', { className: 'font-mono', children: ['.', r] }) },
                      i
                    )
                  ),
                ],
              }),
            R.jsx(Ja, { input: n.value, shouldTruncateText: !0, Wrapper: X.Fragment }),
          ],
        })
      : R.jsx(Vu, {
          data: e,
          shouldExpandNodeInitially: (r, i, o) => o < 4,
          theme: {
            scheme: 'grayscale',
            base00: 'transparent',
            base01: '#252525',
            base02: '#464646',
            base03: '#525252',
            base04: '#ababab',
            base05: '#b9b9b9',
            base06: '#e3e3e3',
            base07: '#f7f7f7',
            base08: '#7c7c7c',
            base09: '#999999',
            base0A: '#a0a0a0',
            base0B: '#8e8e8e',
            base0C: '#868686',
            base0D: '#686868',
            base0E: '#747474',
            base0F: '#5e5e5e',
          },
        });
  },
  xm = ({ file: e }) => {
    const t = e.path.split('.').pop();
    return ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(t)
      ? R.jsx('img', { src: Lt(e.path), alt: 'Evalite file', className: 'max-h-32' })
      : ['mp4', 'webm', 'ogg'].includes(t)
        ? R.jsx('video', {
            controls: !0,
            children: R.jsx('source', { src: Lt(e.path), type: `video/${t}` }),
          })
        : ['mp3', 'wav', 'ogg'].includes(t)
          ? R.jsx('audio', {
              controls: !0,
              children: R.jsx('source', { src: Lt(e.path), type: `audio/${t}` }),
            })
          : R.jsx(cn, {
              asChild: !0,
              className: 'uppercase',
              variant: 'secondary',
              size: 'sm',
              children: R.jsxs('a', {
                href: so(e.path),
                children: [
                  R.jsx(po, { className: 'size-4' }),
                  R.jsxs('span', { children: ['.', t] }),
                ],
              }),
            });
  },
  km = (e) =>
    typeof e == 'object' &&
    e !== null &&
    'name' in e &&
    'message' in e &&
    typeof e.name == 'string' &&
    typeof e.message == 'string',
  wm = ({ error: e }) =>
    R.jsxs('div', {
      className: 'flex items-start gap-2 text-red-500 dark:text-red-400 pr-4',
      children: [
        R.jsx(ho, { className: 'size-5 flex-shrink-0 mt-0.5' }),
        R.jsx('div', { className: 'whitespace-pre-wrap w-full break-words', children: e.message }),
      ],
    }),
  vb = (e) => {
    const t = e.Wrapper || X.Fragment;
    return typeof e.input == 'string' || typeof e.input == 'number'
      ? R.jsx(Ja, {
          Wrapper: t,
          input: e.input.toString(),
          className: e.className,
          shouldTruncateText: e.shouldTruncateText,
        })
      : wo.isEvaliteFile(e.input)
        ? R.jsx(t, { className: e.className, children: R.jsx(xm, { file: e.input }) })
        : km(e.input)
          ? R.jsx(t, { className: e.className, children: R.jsx(wm, { error: e.input }) })
          : typeof e.input == 'object' && e.input !== null
            ? R.jsx(t, {
                className: e.className,
                children: R.jsx(ym, { input: e.input, name: e.name }),
              })
            : R.jsx(t, {
                className: e.className,
                children: R.jsx('pre', { children: JSON.stringify(e.input, null, 2) }),
              });
  },
  vm = X.forwardRef(({ ...e }, t) => R.jsx('nav', { ref: t, 'aria-label': 'breadcrumb', ...e }));
vm.displayName = 'Breadcrumb';
const Cm = X.forwardRef(({ className: e, ...t }, n) =>
  R.jsx('ol', {
    ref: n,
    className: at(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      e
    ),
    ...t,
  })
);
Cm.displayName = 'BreadcrumbList';
const Sm = X.forwardRef(({ className: e, ...t }, n) =>
  R.jsx('li', { ref: n, className: at('inline-flex items-center gap-1.5', e), ...t })
);
Sm.displayName = 'BreadcrumbItem';
const Em = X.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const i = e ? uo : 'a';
  return R.jsx(i, { ref: r, className: at('transition-colors hover:text-foreground', t), ...n });
});
Em.displayName = 'BreadcrumbLink';
const Am = X.forwardRef(({ className: e, ...t }, n) =>
  R.jsx('span', {
    ref: n,
    role: 'link',
    'aria-disabled': 'true',
    'aria-current': 'page',
    className: at('font-normal text-foreground', e),
    ...t,
  })
);
Am.displayName = 'BreadcrumbPage';
const dt = 43200,
  yi = 1440,
  xi = Symbol.for('constructDateFrom');
function Ka(e, t) {
  return typeof e == 'function'
    ? e(t)
    : e && typeof e == 'object' && xi in e
      ? e[xi](t)
      : e instanceof Date
        ? new e.constructor(t)
        : new Date(t);
}
function Ce(e, t) {
  return Ka(e, e);
}
let Im = {};
function Fm() {
  return Im;
}
function ki(e) {
  const t = Ce(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return (n.setUTCFullYear(t.getFullYear()), +e - +n);
}
function qn(e, ...t) {
  const n = Ka.bind(null, e || t.find((r) => typeof r == 'object'));
  return t.map(n);
}
function bt(e, t) {
  const n = +Ce(e) - +Ce(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function Dm(e, t, n) {
  const [r, i] = qn(n?.in, e, t),
    o = r.getFullYear() - i.getFullYear(),
    a = r.getMonth() - i.getMonth();
  return o * 12 + a;
}
function _m(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function Tm(e, t) {
  return +Ce(e) - +Ce(t);
}
function Pm(e, t) {
  const n = Ce(e);
  return (n.setHours(23, 59, 59, 999), n);
}
function Lm(e, t) {
  const n = Ce(e),
    r = n.getMonth();
  return (n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n);
}
function Rm(e, t) {
  const n = Ce(e);
  return +Pm(n) == +Lm(n);
}
function Om(e, t, n) {
  const [r, i, o] = qn(n?.in, e, e, t),
    a = bt(i, o),
    l = Math.abs(Dm(i, o));
  if (l < 1) return 0;
  (i.getMonth() === 1 && i.getDate() > 27 && i.setDate(30), i.setMonth(i.getMonth() - a * l));
  let s = bt(i, o) === -a;
  Rm(r) && l === 1 && bt(r, o) === 1 && (s = !1);
  const u = a * (l - +s);
  return u === 0 ? 0 : u;
}
function Mm(e, t, n) {
  const r = Tm(e, t) / 1e3;
  return _m(n?.roundingMethod)(r);
}
const Nm = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  zm = (e, t, n) => {
    let r;
    const i = Nm[e];
    return (
      typeof i == 'string'
        ? (r = i)
        : t === 1
          ? (r = i.one)
          : (r = i.other.replace('{{count}}', t.toString())),
      n?.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  };
function un(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Bm = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  jm = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  $m = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Wm = {
    date: un({ formats: Bm, defaultWidth: 'full' }),
    time: un({ formats: jm, defaultWidth: 'full' }),
    dateTime: un({ formats: $m, defaultWidth: 'full' }),
  },
  Um = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  Hm = (e, t, n, r) => Um[e];
function Qe(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : 'standalone';
    let i;
    if (r === 'formatting' && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        l = n?.width ? String(n.width) : a;
      i = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        l = n?.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[a];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const qm = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  Vm = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  Gm = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  Ym = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  Xm = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  Jm = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  Km = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + 'st';
        case 2:
          return n + 'nd';
        case 3:
          return n + 'rd';
      }
    return n + 'th';
  },
  Qm = {
    ordinalNumber: Km,
    era: Qe({ values: qm, defaultWidth: 'wide' }),
    quarter: Qe({ values: Vm, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: Qe({ values: Gm, defaultWidth: 'wide' }),
    day: Qe({ values: Ym, defaultWidth: 'wide' }),
    dayPeriod: Qe({
      values: Xm,
      defaultWidth: 'wide',
      formattingValues: Jm,
      defaultFormattingWidth: 'wide',
    }),
  };
function Ze(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(i);
    if (!o) return null;
    const a = o[0],
      l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(l) ? eb(l, (c) => c.test(a)) : Zm(l, (c) => c.test(a));
    let u;
    ((u = e.valueCallback ? e.valueCallback(s) : s),
      (u = n.valueCallback ? n.valueCallback(u) : u));
    const f = t.slice(a.length);
    return { value: u, rest: f };
  };
}
function Zm(e, t) {
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function eb(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function tb(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const l = t.slice(i.length);
    return { value: a, rest: l };
  };
}
const nb = /^(\d+)(th|st|nd|rd)?/i,
  rb = /\d+/i,
  ib = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  ab = { any: [/^b/i, /^(a|c)/i] },
  ob = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  lb = { any: [/1/i, /2/i, /3/i, /4/i] },
  sb = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  ub = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  cb = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  fb = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  hb = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  pb = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  db = {
    ordinalNumber: tb({
      matchPattern: nb,
      parsePattern: rb,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Ze({
      matchPatterns: ib,
      defaultMatchWidth: 'wide',
      parsePatterns: ab,
      defaultParseWidth: 'any',
    }),
    quarter: Ze({
      matchPatterns: ob,
      defaultMatchWidth: 'wide',
      parsePatterns: lb,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: Ze({
      matchPatterns: sb,
      defaultMatchWidth: 'wide',
      parsePatterns: ub,
      defaultParseWidth: 'any',
    }),
    day: Ze({
      matchPatterns: cb,
      defaultMatchWidth: 'wide',
      parsePatterns: fb,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Ze({
      matchPatterns: hb,
      defaultMatchWidth: 'any',
      parsePatterns: pb,
      defaultParseWidth: 'any',
    }),
  },
  mb = {
    code: 'en-US',
    formatDistance: zm,
    formatLong: Wm,
    formatRelative: Hm,
    localize: Qm,
    match: db,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function bb(e, t, n) {
  const r = Fm(),
    i = n?.locale ?? r.locale ?? mb,
    o = 2520,
    a = bt(e, t);
  if (isNaN(a)) throw new RangeError('Invalid time value');
  const l = Object.assign({}, n, { addSuffix: n?.addSuffix, comparison: a }),
    [s, u] = qn(n?.in, ...(a > 0 ? [t, e] : [e, t])),
    f = Mm(u, s),
    c = (ki(u) - ki(s)) / 1e3,
    h = Math.round((f - c) / 60);
  let p;
  if (h < 2)
    return n?.includeSeconds
      ? f < 5
        ? i.formatDistance('lessThanXSeconds', 5, l)
        : f < 10
          ? i.formatDistance('lessThanXSeconds', 10, l)
          : f < 20
            ? i.formatDistance('lessThanXSeconds', 20, l)
            : f < 40
              ? i.formatDistance('halfAMinute', 0, l)
              : f < 60
                ? i.formatDistance('lessThanXMinutes', 1, l)
                : i.formatDistance('xMinutes', 1, l)
      : h === 0
        ? i.formatDistance('lessThanXMinutes', 1, l)
        : i.formatDistance('xMinutes', h, l);
  if (h < 45) return i.formatDistance('xMinutes', h, l);
  if (h < 90) return i.formatDistance('aboutXHours', 1, l);
  if (h < yi) {
    const d = Math.round(h / 60);
    return i.formatDistance('aboutXHours', d, l);
  } else {
    if (h < o) return i.formatDistance('xDays', 1, l);
    if (h < dt) {
      const d = Math.round(h / yi);
      return i.formatDistance('xDays', d, l);
    } else if (h < dt * 2)
      return ((p = Math.round(h / dt)), i.formatDistance('aboutXMonths', p, l));
  }
  if (((p = Om(u, s)), p < 12)) {
    const d = Math.round(h / dt);
    return i.formatDistance('xMonths', d, l);
  } else {
    const d = p % 12,
      m = Math.trunc(p / 12);
    return d < 3
      ? i.formatDistance('aboutXYears', m, l)
      : d < 9
        ? i.formatDistance('overXYears', m, l)
        : i.formatDistance('almostXYears', m + 1, l);
  }
}
const gb = 6e4,
  Cb = (e) => {
    const [, t] = X.useState(new Date());
    X.useEffect(() => {
      const i = setInterval(() => {
        t(new Date());
      }, gb);
      return () => clearInterval(i);
    }, []);
    const n = e.date.endsWith('Z') ? e.date : e.date + 'Z',
      r = new Date(n);
    return R.jsx('span', {
      className: e.className,
      children: bb(r, new Date(), { addSuffix: !0 }),
    });
  },
  Sb = (e) => (e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`),
  Eb = (e) =>
    !Array.isArray(e) || e.length === 0
      ? !1
      : e.every(
          (t) =>
            typeof t == 'object' && t !== null && typeof t.label == 'string' && t.value !== void 0
        );
export {
  vm as B,
  vb as D,
  Cb as L,
  xb as S,
  Cm as a,
  Sm as b,
  Em as c,
  wb as d,
  Sb as f,
  Eb as i,
  xo as s,
  kb as u,
};
