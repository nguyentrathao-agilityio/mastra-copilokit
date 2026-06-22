import {
  m as T,
  r as b,
  j as e,
  B as P,
  b as B,
  n as S,
  u as $,
  o as D,
  f as Q,
  L as O,
  k as C,
  l as I,
} from './index-7qPgmO9R.js';
import {
  u as q,
  s as y,
  i as A,
  D as x,
  B as H,
  a as V,
  b as g,
  S as k,
  f as L,
  L as W,
} from './utils-Co0f6_4R.js';
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = T('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J = T('Copy', [
  ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
  ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
]);
/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K = T('PanelLeftClose', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
  ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
  ['path', { d: 'm16 15-3-3 3-3', key: '14y99z' }],
]);
function X({
  value: a,
  className: n,
  variant: r = 'ghost',
  size: o = 'icon',
  label: p = 'Copy',
  onCopied: t,
  ...h
}) {
  const [l, j] = b.useState(!1);
  return (
    b.useEffect(() => {
      if (l) {
        const f = setTimeout(() => j(!1), 2e3);
        return () => clearTimeout(f);
      }
    }, [l]),
    e.jsxs(P, {
      size: o,
      variant: r,
      className: B('text-muted-foreground hover:text-foreground', n),
      onClick: async () => {
        try {
          (await navigator.clipboard.writeText(a), j(!0), t?.());
        } catch (f) {
          console.error('Failed to copy text:', f);
        }
      },
      ...h,
      children: [
        l ? e.jsx(G, { className: 'size-4' }) : e.jsx(J, { className: 'size-4' }),
        o !== 'icon' && (l ? 'Copied' : p),
      ],
    })
  );
}
const i = ({ title: a, description: n, children: r, copyableText: o }) =>
    e.jsxs('div', {
      className: 'text-sm',
      children: [
        e.jsx('div', {
          className: 'mb-3',
          children: e.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              e.jsxs('div', {
                className: 'flex-grow',
                children: [
                  e.jsx('h2', {
                    className: 'font-medium text-base text-foreground/60',
                    children: a,
                  }),
                  n && e.jsx('p', { className: 'text-foreground/50 text-xs mt-1', children: n }),
                ],
              }),
              o &&
                e.jsx('div', {
                  className: 'flex items-center gap-2',
                  children: e.jsx(X, { value: o }),
                }),
            ],
          }),
        }),
        e.jsx('div', { className: 'mt-1 text-foreground/60', children: r }),
      ],
    }),
  m = () => e.jsx(k, { className: 'mt-6 mb-4', orientation: 'horizontal' }),
  F = (a) => {
    const n = a.endPercent - a.startPercent;
    return e.jsx(O, {
      to: '/eval/$name/result/$resultIndex',
      params: { name: a.name, resultIndex: a.resultIndex },
      search: { trace: a.traceIndex },
      className: 'px-2 py-2 hover:bg-foreground/10 transition-colors',
      activeProps: { className: 'bg-foreground/20!' },
      activeOptions: { includeSearch: !0, exact: !0 },
      preload: 'intent',
      resetScroll: !1,
      children: ({ isActive: r }) =>
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs('div', {
              className: 'mb-1 flex items-center justify-between space-x-3',
              children: [
                e.jsx('span', {
                  className: 'block text-sm font-medium text-foreground/60',
                  children: a.title,
                }),
                e.jsx('span', { className: 'text-xs text-foreground/60', children: L(a.duration) }),
              ],
            }),
            e.jsxs('div', {
              className: 'relative w-full',
              children: [
                e.jsx('div', {
                  className: B(
                    'w-full rounded-full h-1 bg-foreground/20 transition-colors',
                    r && 'bg-foreground/30'
                  ),
                }),
                e.jsx('div', {
                  className: 'absolute top-0 w-full rounded-full h-1 bg-gray-500',
                  style: { left: `${a.startPercent}%`, width: `${n}%` },
                }),
              ],
            }),
          ],
        }),
    });
  },
  ee = function () {
    const { name: n, resultIndex: r } = S.useParams(),
      { timestamp: o, trace: p } = S.useSearch(),
      [
        {
          data: { result: t, prevResult: h, evaluation: l },
        },
        { data: j },
      ] = $({ queries: [D({ evalName: n, resultIndex: r, evalTimestamp: o ?? null }), Q] });
    q(j).isRunningEvalName(n) && l.created_at;
    const v = t.traces[0]?.start_time ?? 0,
      N = t.traces[t.traces.length - 1]?.end_time ?? 0,
      _ = N - v,
      c = p != null ? t.traces[p] : null,
      d =
        t.traces.length > 0 &&
        t.traces.every(
          (s) =>
            typeof s.input_tokens == 'number' &&
            typeof s.output_tokens == 'number' &&
            typeof s.total_tokens == 'number'
        )
          ? {
              input_tokens: y(t.traces, (s) => s.input_tokens),
              output_tokens: y(t.traces, (s) => s.output_tokens),
              total_tokens: y(t.traces, (s) => s.total_tokens),
            }
          : void 0,
      w = A(t.rendered_columns),
      z = e.jsxs(e.Fragment, {
        children: [
          e.jsx(i, {
            title: 'Input',
            description: 'The input passed to the task.',
            copyableText: typeof t.input == 'string' ? t.input : void 0,
            children: e.jsx(x, { shouldTruncateText: !1, input: t.input }),
          }),
          e.jsx(m, {}),
          t.expected
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(i, {
                    title: 'Expected',
                    description: 'A description of the expected output of the task.',
                    copyableText: typeof t.expected == 'string' ? t.expected : void 0,
                    children: e.jsx(x, { shouldTruncateText: !1, input: t.expected }),
                  }),
                  e.jsx(m, {}),
                ],
              })
            : null,
          e.jsx(i, {
            title: 'Output',
            description: 'The output of the task.',
            copyableText: typeof t.output == 'string' ? t.output : void 0,
            children: e.jsx(x, { shouldTruncateText: !1, input: t.output }),
          }),
        ],
      });
    return e.jsxs('div', {
      className: 'flex flex-col h-full',
      children: [
        e.jsx('div', {
          className: 'sticky top-0 z-50 bg-sidebar border-b border-sidebar-border shadow-sm',
          children: e.jsxs('div', {
            className: 'p-2 flex items-center gap-3',
            children: [
              e.jsx(P, {
                size: 'icon',
                variant: 'ghost',
                asChild: !0,
                children: e.jsx(O, {
                  to: '/eval/$name',
                  params: { name: n },
                  search: { timestamp: o ?? void 0 },
                  preload: 'intent',
                  resetScroll: !1,
                  children: e.jsx(K, { className: 'size-5 rotate-180' }),
                }),
              }),
              e.jsxs('div', {
                children: [
                  e.jsx('span', {
                    className: 'text-primary block font-semibold mb-1',
                    children: 'Trace',
                  }),
                  e.jsx(H, {
                    children: e.jsxs(V, {
                      children: [
                        e.jsx(g, {
                          children: e.jsx(C, {
                            score: t.score,
                            hasScores: t.scores.length > 0,
                            state: I({ score: t.score, prevScore: h?.score, status: l.status }),
                          }),
                        }),
                        e.jsx(k, { orientation: 'vertical', className: 'mx-1 h-4' }),
                        e.jsx(g, { children: L(t.duration) }),
                        e.jsx(k, { orientation: 'vertical', className: 'mx-1 h-4' }),
                        e.jsx(g, { children: e.jsx(W, { date: l.created_at }) }),
                        d &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(k, { orientation: 'vertical', className: 'mx-1 h-4' }),
                              e.jsxs(g, {
                                children: [
                                  d.total_tokens || d.input_tokens + d.output_tokens,
                                  ' ',
                                  'Tokens',
                                ],
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
        e.jsx('div', {
          className: 'flex-1 overflow-y-auto overflow-x-hidden w-full min-w-0',
          children: e.jsxs('div', {
            className: 'flex flex-row h-full',
            children: [
              e.jsxs('div', {
                className: 'w-44 flex flex-col gap-3 flex-shrink-0 p-2',
                children: [
                  e.jsx(F, {
                    duration: N - v,
                    title: 'Eval',
                    startPercent: 0,
                    endPercent: 100,
                    name: n,
                    resultIndex: r,
                  }),
                  t.traces.map((s, u) => {
                    const E = s.start_time - v,
                      R = s.end_time - v,
                      U = (E / _) * 100,
                      M = (R / _) * 100;
                    return e.jsx(
                      F,
                      {
                        duration: s.end_time - s.start_time,
                        title: `Trace ${u + 1}`,
                        name: n,
                        resultIndex: r,
                        traceIndex: u,
                        endPercent: M,
                        startPercent: U,
                      },
                      u
                    );
                  }),
                  t.traces.length === 0 &&
                    e.jsxs('span', {
                      className: 'text-xs block text-foreground/50 text-center text-balance',
                      children: [
                        'Use ',
                        e.jsx('code', { children: 'reportTrace' }),
                        ' to capture traces.',
                      ],
                    }),
                ],
              }),
              e.jsxs('div', {
                className: 'flex-grow border-l p-4 min-w-0 w-full',
                children: [
                  c == null &&
                    e.jsxs(e.Fragment, {
                      children: [
                        d &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs(i, {
                                title: 'Token Usage',
                                description: 'How many tokens the entire evaluation used.',
                                children: [
                                  e.jsxs('span', {
                                    className: 'block mb-1 text-sm',
                                    children: ['Input Tokens: ', d.input_tokens],
                                  }),
                                  e.jsxs('span', {
                                    className: 'block',
                                    children: ['Output Tokens: ', d.output_tokens],
                                  }),
                                ],
                              }),
                              e.jsx(m, {}),
                            ],
                          }),
                        !w && z,
                        w &&
                          t.rendered_columns.map((s, u) =>
                            e.jsxs(
                              b.Fragment,
                              {
                                children: [
                                  u > 0 && e.jsx(m, {}),
                                  e.jsx(i, {
                                    title: s.label,
                                    description: void 0,
                                    copyableText: typeof s.value == 'string' ? s.value : void 0,
                                    children: e.jsx(x, { shouldTruncateText: !1, input: s.value }),
                                  }),
                                ],
                              },
                              s.label
                            )
                          ),
                        t.scores.map((s) =>
                          e.jsxs(
                            b.Fragment,
                            {
                              children: [
                                e.jsx(m, {}),
                                e.jsx(
                                  i,
                                  {
                                    title: s.name,
                                    description: s.description,
                                    children: e.jsx(C, {
                                      hasScores: t.scores.length > 0,
                                      score: s.score ?? 0,
                                      state: I({
                                        score: s.score ?? 0,
                                        prevScore: h?.scores.find((u) => u.name === s.name)?.score,
                                        status: t.status,
                                      }),
                                    }),
                                  },
                                  s.name
                                ),
                                s.metadata
                                  ? e.jsx('div', {
                                      className: 'mt-2',
                                      children: e.jsx(x, {
                                        shouldTruncateText: !1,
                                        input: s.metadata,
                                        name: 'metadata',
                                      }),
                                    })
                                  : null,
                              ],
                            },
                            s.name
                          )
                        ),
                      ],
                    }),
                  c &&
                    e.jsxs(e.Fragment, {
                      children: [
                        typeof c.output_tokens == 'number' &&
                          typeof c.input_tokens == 'number' &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs(i, {
                                title: 'Token Usage',
                                description: 'How many tokens were used by this trace.',
                                children: [
                                  e.jsxs('span', {
                                    className: 'block mb-1 text-sm',
                                    children: ['Input Tokens: ', c.input_tokens],
                                  }),
                                  e.jsxs('span', {
                                    className: 'block',
                                    children: ['Output Tokens: ', c.output_tokens],
                                  }),
                                ],
                              }),
                              e.jsx(m, {}),
                            ],
                          }),
                        e.jsx(i, {
                          title: 'Input',
                          children: e.jsx(x, { shouldTruncateText: !1, input: c.input }),
                        }),
                        e.jsx(m, {}),
                        e.jsx(i, {
                          title: 'Output',
                          children: e.jsx(x, { shouldTruncateText: !1, input: c.output }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { ee as component };
