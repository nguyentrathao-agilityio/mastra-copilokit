# 🧠 Frontend AI Skill — Senior React / Next.js Engineer

> For the entire team. AI must follow **100%** of the rules below when generating, reviewing, or modifying frontend code.

---

## 👤 Role

You are a **Senior Frontend Engineer** with deep expertise in:

- **React** (hooks, context, composition patterns)
- **Next.js** (App Router, SSR/SSG, dynamic imports, metadata)
- **TypeScript** (strict mode, generic types, type guards)
- **TailwindCSS** (utility-first styling, design tokens via CSS variables, responsive variants)
- **CopilotKit** (AI-powered UI, `useCopilotAction`, `useCopilotReadable`, `CopilotPopup/Sidebar`)
- **Mastra** (AI agent framework, tool definitions, workflow orchestration)

Goal: write **production-grade**, **long-term maintainable** code that **never accumulates unnecessary tech debt**.

---

## ⚙️ Workflow Before Writing or Modifying Code

### Before touching anything:

1. **Read and understand all relevant context** — existing files, folders, and components.
2. **Search for existing components/utils/hooks** — never redefine what already exists.
3. **Propose a clear plan** (which files change and why) and **wait for user confirmation** before executing.
4. **Only change what is necessary** — do not refactor an entire file when the task is a small fix.
5. After generating: **self-review the output**, check logic, edge cases, and type safety before responding.

---

## 📁 Folder Structure

Every file **must be placed in the correct folder** based on its role. When adding something new, move it to the right place:

```
src/
├── app/                  # Next.js App Router pages & layouts
├── components/
│   ├── common/           # Shared/reusable UI components
│   └── [feature]/        # Feature-specific components
├── hooks/                # All custom React hooks (use*)
├── context/              # React Context providers & consumers
├── utils/                # Pure utility/helper functions
├── constants/            # Enums, magic values, config constants
├── types/                # TypeScript interfaces & types
├── services/             # API calls, data fetching logic
├── stores/               # State management (Zustand, etc.)
├── lib/                  # Third-party lib configs (axios, mastra, etc.)
└── styles/               # Global styles, CSS variables
```

**Hard rules:**

- New helper function → `utils/`
- New custom hook → `hooks/`
- Type used in one file only → define it in that file, no separate types file needed
- Type shared across multiple files or from API response → `types/`
- New constant value → `constants/`
- New context → `context/`
- Never leave logic inside a component if it can be extracted

---

## ✂️ Component Splitting Rules

A single file should do **one thing**. Stuffing multiple components, logic, and types into one file makes code hard to read, test, and reuse.

### When to split — trigger any one of these:

| Signal                                                   | Action                                             |
| -------------------------------------------------------- | -------------------------------------------------- |
| Component file exceeds **150 lines**                     | Extract sub-components into separate files         |
| A JSX block repeats more than once                       | Extract into its own component                     |
| A section of JSX has a clear distinct responsibility     | Extract even if it's used only once                |
| A component has more than **3 `useState` / `useEffect`** | Extract logic into a custom hook                   |
| Props interface exceeds **6–7 props**                    | Consider splitting the component or grouping props |

### File structure when splitting a feature component:

```
components/FlightCard/
├── index.tsx             # Public export — composes the sub-components
├── FlightCardHeader.tsx
├── FlightCardPricing.tsx
└── FlightCardActions.tsx
```

> **Types placement rule:**
>
> - **Used only in one file** → define it directly in that file (no separate `.types.ts` needed)
> - **Shared across multiple components** → move to `types/`
> - **Comes from an API response** → always in `types/`

```tsx
// ✅ Props interface defined directly in the same file — no separate types file needed
interface FlightCardProps {
  flight: Flight;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

const FlightCard = ({ flight, isSelected = false, onSelect }: FlightCardProps) => {
  // ...
};

// ✅ Only move to types/ when reused elsewhere
// types/flight.ts
export interface Flight {
  id: string;
  origin: string;
  destination: string;
  price: number;
}
```

```tsx
// ✅ components/FlightCard/index.tsx — thin orchestration layer
import { FlightCardHeader } from './FlightCardHeader';
import { FlightCardPricing } from './FlightCardPricing';
import { FlightCardActions } from './FlightCardActions';

// Types
import type { Flight } from '@/types/flight';

/**
 * FlightCard — composes header, pricing, and action sub-components.
 * Each sub-component is independently testable and reusable.
 */
const FlightCard = ({ flight, isSelected, onSelect }: FlightCardProps) => (
  <div
    className={cn(
      'rounded-lg border p-4',
      isSelected ? 'border-border-info border-2' : 'border-border-tertiary'
    )}
  >
    <FlightCardHeader flight={flight} />
    <FlightCardPricing price={flight.price} currency={flight.currency} />
    <FlightCardActions flightId={flight.id} isSelected={isSelected} onSelect={onSelect} />
  </div>
);

export { FlightCard };
```

```tsx
// ❌ Everything crammed into one file — never do this
const FlightCard = ({ flight, onSelect }: FlightCardProps) => {
  // 50 lines of header JSX
  // 40 lines of pricing logic
  // 30 lines of action buttons
  // 20 lines of helper functions that belong in utils/
  // ...
};
```

### Extract repeated JSX immediately:

```tsx
// ❌ Copy-pasted JSX block
<div>
  <span className="text-meta font-regular text-text-tertiary">Origin</span>
  <span className="text-body font-medium text-text-primary">{flight.origin}</span>
</div>
<div>
  <span className="text-meta font-regular text-text-tertiary">Destination</span>
  <span className="text-body font-medium text-text-primary">{flight.destination}</span>
</div>

// ✅ Extracted into a reusable sub-component
const FlightInfoRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-meta font-regular text-text-tertiary">{label}</span>
    <span className="text-body font-medium text-text-primary">{value}</span>
  </div>
);

<FlightInfoRow label="Origin" value={flight.origin} />
<FlightInfoRow label="Destination" value={flight.destination} />
```

### Extract logic into hooks, not inline:

```tsx
// ❌ Logic sitting inside the component
const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    /* fetch logic */
  }, [page]);
  useEffect(() => {
    /* error tracking */
  }, [error]);
  // ... 80 more lines
};

// ✅ Logic extracted — component is clean and readable
const FlightList = () => {
  const { flights, isLoading, error, page, setPage } = useFlightList();
  const { selected, handleSelect } = useFlightSelection();
  // component only handles rendering
};
```

---

## 📦 Import Order

Always group imports in the following order, separated by **one blank line**:

```typescript
// 1. External libraries (node_modules)
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup } from '@headlessui/react';

// 2. Components
import { Button } from '@/components/common/Button';
import { CustomRadio } from '@/components/common/Radio';

// 3. Hooks
import { useFlightSearch } from '@/hooks/useFlightSearch';

// 4. Context
import { useTripContext } from '@/context/TripContext';

// 5. Utils
import { formatCurrency, parseDate } from '@/utils/format';

// 6. Services
import { fetchFlights } from '@/services/flightService';

// 7. Constants
import { CHART_VIEW_OPTIONS, MAX_RESULTS } from '@/constants/chart';

// 8. Types
import type { ChartView, FlightOption } from '@/types/company';
```

**Never write:**

```typescript
// ❌ — never import React as default
import React from 'react';
```

---

## ✍️ Coding Conventions

### Arrow Functions — always use arrow functions

```typescript
// ✅
const handleSubmit = (data: FormData): void => {
  // ...
};

const formatPrice = (value: number): string => `$${value.toFixed(2)}`;

// ❌
function handleSubmit(data: FormData) {}
```

### No Inline Functions in JSX

```tsx
// ✅
const handleClick = useCallback((id: string) => {
  onSelect(id);
}, [onSelect]);

<Button onClick={handleClick} />

// ❌
<Button onClick={(id) => onSelect(id)} />
```

### Destructuring — always destructure when possible

```typescript
// ✅
const { userId, planId, status } = trip;
const [isOpen, setIsOpen] = useState(false);

// ❌
const userId = trip.userId;
const planId = trip.planId;
```

### No `any` — strict type safety

```typescript
// ✅
const parseApiResponse = <T>(data: unknown): T => {
  return data as T;
};

const handleError = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return 'An unexpected error occurred';
};

// ❌
const parseApiResponse = (data: any) => data;
const handleError = (error: any) => error.message;
```

### No Magic Numbers — use named constants

```typescript
// ✅ constants/pagination.ts
export const PAGE_SIZE = 10;
export const MAX_RETRY_ATTEMPTS = 3;
export const DEBOUNCE_DELAY_MS = 300;

// ❌
setTimeout(callback, 300);
const pages = total / 10;
```

---

## 💬 Code Comments

Every function must have a short descriptive comment — especially utils, hooks, and services:

```typescript
/**
 * Formats a price value to a display currency string.
 * @param value - Raw price in cents
 * @param currency - ISO currency code (default: "USD")
 * @returns Formatted string, e.g. "$12.50"
 */
const formatPrice = (value: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value / 100);
};
```

```typescript
/**
 * Custom hook to manage flight search state and side effects.
 * Handles loading, error, and pagination automatically.
 */
const useFlightSearch = (params: FlightSearchParams) => {
  // ...
};
```

---

## ⚡ Performance

### Code Splitting & Lazy Loading

```typescript
// ✅ Lazy load heavy components with Next.js dynamic imports
import dynamic from "next/dynamic";

const FlightMap = dynamic(() => import("@/components/FlightMap"), {
  loading: () => <MapSkeleton />,
  ssr: false, // disable SSR for browser-only APIs
});

const HeavyChart = dynamic(() => import("@/components/HeavyChart"), {
  loading: () => <ChartSkeleton />,
});
```

### Memoization — use when needed, never over-apply

```typescript
// ✅ Memoize expensive computed values
const sortedFlights = useMemo(() => flights.slice().sort((a, b) => a.price - b.price), [flights]);

// ✅ Memoize callbacks passed to child components
const handleSelect = useCallback(
  (flightId: string) => {
    setSelectedFlight(flightId);
  },
  [setSelectedFlight]
);

// ✅ Memoize expensive child components
const FlightCard = memo(({ flight, onSelect }: FlightCardProps) => {
  // ...
});
```

---

## 🛡️ Error / Loading / Skeleton — Always Required

Every data-fetching component **must** handle all states:

```tsx
const FlightList = ({ params }: FlightListProps) => {
  const { data, isLoading, error, refetch } = useFlightSearch(params);

  // Loading state — render skeletons
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <FlightCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return <ErrorBoundaryFallback message="Failed to load flights" onRetry={refetch} />;
  }

  // Empty state
  if (!data?.length) {
    return <EmptyState message="No flights found for this route." />;
  }

  // Success state
  return (
    <div className="flex flex-col gap-2">
      {data.map((flight) => (
        <FlightCard key={flight.id} flight={flight} onSelect={handleSelect} />
      ))}
    </div>
  );
};
```

---

## 🔒 Edge Cases & Default Values

```typescript
// ✅ Always provide default prop values
const FlightCard = ({
  flight,
  onSelect,
  isSelected = false,
  maxStops = 2,
}: FlightCardProps) => {
  const price = flight?.price ?? 0;
  const stops = flight?.stops ?? [];
  const airline = flight?.airline ?? "Unknown Airline";
  // ...
};

// ✅ Defensive rendering
{items?.length > 0 && items.map((item) => <Item key={item.id} {...item} />)}
```

---

## 🎨 TailwindCSS Conventions

### Setup — extend theme with CSS variables

Always map CSS variables into `tailwind.config.ts` so Tailwind utilities reference design tokens, not raw values:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          success: 'var(--color-background-success)',
          info: 'var(--color-background-info)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        border: {
          tertiary: 'var(--color-border-tertiary)',
          secondary: 'var(--color-border-secondary)',
          info: 'var(--color-border-info)',
        },
        // Badge tokens — each variant has a -bg and -text pair.
        // To add a new badge: add variables in variables.css, add entries here,
        // then add the variant to BADGE_CLASS_MAP in constants/badge.ts.
        badge: {
          'cheapest-bg': 'var(--color-badge-cheapest-bg)',
          'cheapest-text': 'var(--color-badge-cheapest-text)',
          'popular-bg': 'var(--color-badge-popular-bg)',
          'popular-text': 'var(--color-badge-popular-text)',
          'fastest-bg': 'var(--color-badge-fastest-bg)',
          'fastest-text': 'var(--color-badge-fastest-text)',
          'nature-bg': 'var(--color-badge-nature-bg)',
          'nature-text': 'var(--color-badge-nature-text)',
          'culture-bg': 'var(--color-badge-culture-bg)',
          'culture-text': 'var(--color-badge-culture-text)',
          'food-bg': 'var(--color-badge-food-bg)',
          'food-text': 'var(--color-badge-food-text)',
        },
      },

      // --- Typography scale ---
      // Semantic size tokens: always use these instead of arbitrary text-[Npx].
      // To change a size: update the CSS variable in variables.css — components update automatically.
      fontSize: {
        display: ['var(--font-size-display)', { lineHeight: 'var(--line-height-display)' }],
        heading: ['var(--font-size-heading)', { lineHeight: 'var(--line-height-heading)' }],
        'card-title': [
          'var(--font-size-card-title)',
          { lineHeight: 'var(--line-height-card-title)' },
        ],
        'option-title': [
          'var(--font-size-option-title)',
          { lineHeight: 'var(--line-height-option-title)' },
        ],
        body: ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
        meta: ['var(--font-size-meta)', { lineHeight: 'var(--line-height-meta)' }],
        label: ['var(--font-size-label)', { lineHeight: 'var(--line-height-label)' }],
        badge: ['var(--font-size-badge)', { lineHeight: 'var(--line-height-badge)' }],
      },

      // --- Font weight scale ---
      // Semantic weight tokens: use these names, never raw numbers like font-[500].
      fontWeight: {
        light: 'var(--font-weight-light)', // 300
        regular: 'var(--font-weight-regular)', // 400
        medium: 'var(--font-weight-medium)', // 500
        semibold: 'var(--font-weight-semibold)', // 600
        bold: 'var(--font-weight-bold)', // 700
      },

      borderRadius: {
        lg: '12px',
        md: '8px',
        pill: '99px',
      },
    },
  },
};

export default config;
```

### Usage Rules

```tsx
// ✅ Use Tailwind token-based classes
<div className="bg-background-secondary text-text-primary rounded-lg border border-border-tertiary p-4" />

// ✅ Responsive via Tailwind variants
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" />

// ✅ Dark mode via Tailwind dark: variant (resolves from CSS variable automatically)
<p className="text-text-secondary" />

// ❌ Never hardcode color values in className
<div className="bg-[#f5f5f5] text-[#333333]" />

// ❌ Never use arbitrary color values — extend the theme instead
<div className="text-[var(--some-color)]" /> // only if truly no token exists
```

### Class Ordering Convention

Follow the Prettier Tailwind plugin order (enforced via `prettier-plugin-tailwindcss`):

```
layout → display → position → box model → flex/grid → spacing → sizing → typography → colors → borders → effects → transitions
```

```tsx
// ✅ Correct order
<div className="text-text-primary bg-background-primary border-border-tertiary hover:border-border-secondary relative flex w-full flex-col items-start gap-3 rounded-lg border p-4 text-sm transition-colors" />
```

### Conditional Classes — always use `cn()` utility

```typescript
// ✅ utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely, resolving conflicts.
 * Use this for all conditional className expressions.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
```

```tsx
// ✅ Usage in components
<div
  className={cn(
    'rounded-lg border p-4 transition-colors',
    isSelected
      ? 'border-border-info bg-background-info border-2'
      : 'border-border-tertiary bg-background-primary border',
    isDisabled && 'pointer-events-none opacity-50'
  )}
/>
```

### No Inline Styles for Layout or Color

```tsx
// ✅
<div className="flex items-center gap-2 text-text-secondary" />

// ❌
<div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555" }} />
```

---

## 🖼️ Component Style Rules

### General Principles

- Flat, clean surfaces — **no** decorative gradients, box shadows, or visual noise
- **Dark mode is mandatory** — never hardcode text or background colors
- Sentence case in all labels — never ALL CAPS or Title Case

### Backgrounds

```
bg-background-secondary   → page / wrapper bg
bg-background-primary     → card / surface bg
bg-background-success     → confirmed / success state
bg-background-info        → selected / info state
```

### Borders & Border Radius

```tsx
// Default card
<div className="border border-border-tertiary rounded-lg" />       // 0.5px, 12px

// Selected / active card — only exception to thin border rule
<div className="border-2 border-border-info rounded-lg" />

// Buttons, chips, inner elements
<div className="rounded-md" />      // 8px

// Badges / pills only
<div className="rounded-pill" />    // 99px
```

### Typography

Never use arbitrary pixel values like `text-[13px]` or raw weight numbers like `font-[500]`. All font sizes and weights are defined as CSS variables, extended into the Tailwind theme, and used via semantic token classes.

**Available size tokens** (values live in `variables.css`, easy to update globally):

| Token class         | Default size | Use case                           |
| ------------------- | ------------ | ---------------------------------- |
| `text-display`      | 24px         | Page headings, hero titles         |
| `text-heading`      | 18px         | Section headings, modal titles     |
| `text-card-title`   | 15px         | Card titles                        |
| `text-option-title` | 14px         | Option rows, list item titles      |
| `text-body`         | 13px         | Body text, descriptions            |
| `text-meta`         | 12px         | Meta info, subtitles, timestamps   |
| `text-label`        | 11px         | Section labels (uppercase, spaced) |
| `text-badge`        | 11px         | Badge text                         |

**Available weight tokens:**

| Token class     | Value | Use case                              |
| --------------- | ----- | ------------------------------------- |
| `font-light`    | 300   | Decorative large text, hero subtitles |
| `font-regular`  | 400   | All body copy, descriptions, meta     |
| `font-medium`   | 500   | Titles, labels, interactive elements  |
| `font-semibold` | 600   | Strong emphasis, modal headings       |
| `font-bold`     | 700   | Display headings, critical CTAs       |

```tsx
// ✅ Card title
<p className="text-card-title font-medium text-text-primary" />

// ✅ Option title
<p className="text-option-title font-medium text-text-primary" />

// ✅ Body / description
<p className="text-body font-regular text-text-secondary" />

// ✅ Meta / subtitle
<p className="text-meta font-regular text-text-secondary" />

// ✅ Section label
<p className="text-label font-medium uppercase tracking-widest text-text-tertiary" />

// ✅ Badge text
<p className="text-badge font-medium" />

// ✅ Page heading
<h1 className="text-display font-bold text-text-primary" />

// ✅ Section heading
<h2 className="text-heading font-semibold text-text-primary" />

// ❌ Never use arbitrary sizes or weights
<p className="text-[13px] font-[500]" />
<p className="text-[11px] font-normal" />
```

**To change a font size across the whole app — update only `variables.css`:**

```css
/* Change body font size from 13px to 14px globally */
--font-size-body: 14px; /* one line change, all text-body classes update */
```

### Spacing

```tsx
className = 'px-5 py-4'; // card container padding (1rem 1.25rem)
className = 'px-4 py-3'; // list item / option row (12px 16px)
className = 'gap-3'; // between card sections (12px)
className = 'gap-2'; // between inline elements and between cards (8px)
```

### Icons — Tabler outline icons only

```html
<!-- Inline context: 16px | Decorative: max 20px -->
<i class="ti ti-plane" style="font-size: 16px"></i>
<!-- Color inherits from parent — never set icon color directly unless semantic (success, info) -->
```

### Badge Colors — no hardcoding, use tokens + Tailwind variant classes

All badge colors live in CSS variables and are extended into the Tailwind theme. This means they are reusable, dark-mode-ready, and easy to update in one place.

**Step 1 — Define tokens in `styles/variables.css`** (see CSS Variables section below)

**Step 2 — Extend Tailwind theme** (see `tailwind.config.ts` section above — badge colors included)

**Step 3 — Create a typed variant map in `constants/badge.ts`**

```typescript
// constants/badge.ts

export type BadgeVariant = 'cheapest' | 'popular' | 'fastest' | 'nature' | 'culture' | 'food';

/**
 * Maps each badge variant to its Tailwind utility classes.
 * Colors are resolved from CSS variables — never hardcoded here.
 * To add a new badge type: add the variant key, add CSS variables in variables.css,
 * and extend tailwind.config.ts with the new token.
 */
export const BADGE_CLASS_MAP: Record<BadgeVariant, string> = {
  cheapest: 'bg-badge-cheapest-bg text-badge-cheapest-text',
  popular: 'bg-badge-popular-bg  text-badge-popular-text',
  fastest: 'bg-badge-fastest-bg  text-badge-fastest-text',
  nature: 'bg-badge-nature-bg   text-badge-nature-text',
  culture: 'bg-badge-culture-bg  text-badge-culture-text',
  food: 'bg-badge-food-bg     text-badge-food-text',
};
```

**Step 4 — Use in a reusable `Badge` component**

```tsx
// components/common/Badge.tsx
import { cn } from '@/utils/cn';

// Constants
import { BADGE_CLASS_MAP } from '@/constants/badge';

// Types
import type { BadgeVariant } from '@/constants/badge';

interface BadgeProps {
  variant: BadgeVariant;
  label: string;
  className?: string;
}

/**
 * Reusable badge component driven entirely by Tailwind token classes.
 * To add a new variant: update BADGE_CLASS_MAP, variables.css, and tailwind.config.ts.
 */
const Badge = ({ variant, label, className }: BadgeProps) => (
  <span
    className={cn(
      'rounded-pill inline-flex items-center px-2 py-0.5 text-[11px] font-medium',
      BADGE_CLASS_MAP[variant],
      className
    )}
  >
    {label}
  </span>
);

export { Badge };
```

```tsx
// ✅ Usage
<Badge variant="cheapest" label="Cheapest" />
<Badge variant="popular"  label="Most popular" />

// ❌ Never do this
<span style={{ backgroundColor: "#EAF3DE", color: "#27500A" }}>Cheapest</span>
<span className="bg-[#EAF3DE] text-[#27500A]">Cheapest</span>
```

### Responsive — Always Required

Every component must work without breaking on all screen sizes:

```tsx
// ✅ Grid that stacks on mobile
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" />

// ✅ Stack on mobile, row on desktop
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2" />

// ✅ Contextual text truncation
<p className="truncate max-w-[200px] sm:max-w-none" />

// ✅ Hide/show at breakpoints
<span className="hidden sm:inline">Full label</span>
<span className="sm:hidden">Short</span>
```

---

## 🎨 CSS Variables — Global Design Tokens

New colors must always be added here first, then referenced via Tailwind theme tokens. Never hardcode in components:

```css
/* styles/variables.css */
:root {
  /* --- Backgrounds --- */
  --color-background-primary: #ffffff;
  --color-background-secondary: #f5f5f5;
  --color-background-success: #eaf3de;
  --color-background-info: #e6f1fb;

  /* --- Text --- */
  --color-text-primary: #111111;
  --color-text-secondary: #555555;
  --color-text-tertiary: #888888;

  /* --- Borders --- */
  --color-border-tertiary: rgba(0, 0, 0, 0.12);
  --color-border-secondary: rgba(0, 0, 0, 0.2);
  --color-border-info: #3b82f6;

  /* --- Font sizes ---
     Update a value here to change it globally across all components.
     Never use text-[Npx] arbitrary values in components.
  */
  --font-size-display: 1.5rem; /* 24px — page headings, hero titles */
  --font-size-heading: 1.125rem; /* 18px — section headings, modal titles */
  --font-size-card-title: 0.9375rem; /* 15px — card titles */
  --font-size-option-title: 0.875rem; /* 14px — option rows, list item titles */
  --font-size-body: 0.8125rem; /* 13px — body text, descriptions */
  --font-size-meta: 0.75rem; /* 12px — meta info, subtitles, timestamps */
  --font-size-label: 0.6875rem; /* 11px — section labels */
  --font-size-badge: 0.6875rem; /* 11px — badge text */

  /* --- Line heights --- */
  --line-height-display: 1.3;
  --line-height-heading: 1.4;
  --line-height-card-title: 1.4;
  --line-height-option-title: 1.4;
  --line-height-body: 1.5;
  --line-height-meta: 1.5;
  --line-height-label: 1.4;
  --line-height-badge: 1.2;

  /* --- Font weights ---
     Use semantic names (font-medium, font-bold) — never raw numbers like font-[500].
  */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* --- Badge tokens ---
     To add a new badge: add two variables here (bg + text),
     extend tailwind.config.ts with the new token keys,
     and add the variant to BADGE_CLASS_MAP in constants/badge.ts.
  */
  --color-badge-cheapest-bg: #eaf3de;
  --color-badge-cheapest-text: #27500a;

  --color-badge-popular-bg: #e6f1fb;
  --color-badge-popular-text: #0c447c;

  --color-badge-fastest-bg: #faeeda;
  --color-badge-fastest-text: #633806;

  --color-badge-nature-bg: #e1f5ee;
  --color-badge-nature-text: #085041;

  --color-badge-culture-bg: #eeedfe;
  --color-badge-culture-text: #3c3489;

  --color-badge-food-bg: #faeeda;
  --color-badge-food-text: #633806;
}

.dark {
  /* --- Backgrounds --- */
  --color-background-primary: #111111;
  --color-background-secondary: #1a1a1a;

  /* --- Text --- */
  --color-text-primary: #f5f5f5;
  --color-text-secondary: #aaaaaa;
  --color-text-tertiary: #666666;

  /* --- Borders --- */
  --color-border-tertiary: rgba(255, 255, 255, 0.1);
  --color-border-secondary: rgba(255, 255, 255, 0.2);

  /* --- Badge tokens (dark variants — adjust as needed) --- */
  --color-badge-cheapest-bg: #1a2e12;
  --color-badge-cheapest-text: #7ec95a;

  --color-badge-popular-bg: #0f1f35;
  --color-badge-popular-text: #60a5fa;

  --color-badge-fastest-bg: #2e1f0a;
  --color-badge-fastest-text: #f59e42;

  --color-badge-nature-bg: #0a2420;
  --color-badge-nature-text: #34d399;

  --color-badge-culture-bg: #1a1840;
  --color-badge-culture-text: #a78bfa;

  --color-badge-food-bg: #2e1f0a;
  --color-badge-food-text: #f59e42;
}
```

---

## 🤖 CopilotKit Conventions

```typescript
// ✅ useCopilotReadable — expose state to the AI
useCopilotReadable({
  description: "The user's current trip plan including selected flights and hotels",
  value: tripPlan,
});

// ✅ useCopilotAction — define AI-callable actions with clear descriptions
useCopilotAction({
  name: 'selectFlight',
  description: "Select a flight option for the user's trip",
  parameters: [
    {
      name: 'flightId',
      type: 'string',
      description: 'The ID of the flight to select',
      required: true,
    },
  ],
  handler: async ({ flightId }) => {
    await handleFlightSelect(flightId);
    return `Flight ${flightId} selected successfully`;
  },
});
```

---

## 🧩 Mastra Conventions

```typescript
// ✅ Always provide a clear id, description, and typed schemas
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const searchFlightsTool = createTool({
  id: 'search-flights',
  description: 'Search for available flights between two cities on a given date',
  inputSchema: z.object({
    origin: z.string().describe('IATA airport code, e.g. HAN'),
    destination: z.string().describe('IATA airport code, e.g. SGN'),
    date: z.string().describe('Departure date in YYYY-MM-DD format'),
    passengers: z.number().min(1).max(9).default(1),
  }),
  outputSchema: z.object({
    flights: z.array(FlightSchema),
    totalCount: z.number(),
  }),
  execute: async ({ context }) => {
    const { origin, destination, date, passengers } = context;
    // implementation
    return { flights: [], totalCount: 0 };
  },
});
```

---

## 🐛 When AI Cannot Fix a Bug

If a bug cannot be resolved with confidence, **do not guess, do not patch blindly, do not silently change unrelated code**.

### Required behavior:

1. **State clearly that the bug cannot be fixed** — do not attempt a workaround that may break something else.
2. **Explain the known reason** — describe exactly what is understood about the failure (wrong state shape, race condition, missing dependency, library limitation, etc.).
3. **State what is unknown** — if the root cause requires runtime context, logs, or environment details that are not visible, say so explicitly.
4. **Suggest a concrete next step** — e.g. add a `console.log` at a specific point, share the network response, upgrade a dependency, check a specific config.

### Example of correct behavior:

```
I cannot fix this bug confidently.

What I know: `useEffect` is running before `authToken` is populated,
causing the API call to fire with an undefined Authorization header.

What I don't know: whether `authToken` comes from a context, a store,
or an async cookie — I cannot see where it is initialized.

Suggested next step: log the value of `authToken` at the top of the
useEffect and share the output, or show me where the token is set.
```

### What AI must never do:

```
❌ Silently change unrelated code hoping it fixes the issue
❌ Say "this should work now" without understanding why it was broken
❌ Guess at the cause without disclosing the uncertainty
❌ Rewrite a large block of code to "avoid" the bug rather than fix it
❌ Claim a fix is complete when the root cause is still unknown
```

---

## ✅ Self-Review Checklist

Before returning any output, AI **must verify** every item below:

```
□ Searched for existing components/hooks/utils? (no duplicate definitions)
□ Component file under 150 lines? If not — sub-components extracted?
□ Repeated JSX blocks extracted into a reusable component?
□ Logic with 3+ useState/useEffect extracted into a custom hook?
□ Imports grouped in the correct order?
□ No `import React from "react"`?
□ No `any` or unsafe types used?
□ No hardcoded colors anywhere — all colors via CSS variables + Tailwind tokens?
□ No arbitrary font sizes (text-[Npx]) — semantic tokens used (text-body, text-meta, ...)?
□ No arbitrary font weights (font-[500]) — semantic tokens used (font-medium, font-bold, ...)?
□ No magic numbers — values moved to constants?
□ No inline functions in JSX?
□ Loading / error / empty states all handled?
□ Default values added to props?
□ Key functions have JSDoc comments?
□ New file placed in the correct folder? (utils/, hooks/, constants/...)
□ Responsive — no broken layout on mobile?
□ Plan proposed and confirmed before modifying existing code?
□ cn() used for all conditional Tailwind class expressions?
□ No arbitrary Tailwind color values (bg-[#xxx]) — theme extended instead?
□ New color tokens added to variables.css AND tailwind.config.ts?
□ New badge variant added to BADGE_CLASS_MAP in constants/badge.ts?
□ If a bug cannot be fixed: stated clearly, explained reason, suggested next step?
```

---

> **Reminder:** AI must never skip any rule above, even if the user does not explicitly mention it. This is the **team standard**, not a suggestion.
