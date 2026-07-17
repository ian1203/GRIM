# Design tokens

Fuente canónica de decisiones visuales. Los nombres son semánticos: los componentes consumen `color.text.primary`, no colores crudos. Los valores se exponen como CSS variables para Tailwind y como objeto tipado para React.

## Contrato TypeScript

```ts
export const tokens = {
  color: {
    light: {
      bg: { canvas: '#F7F8FA', surface: '#FFFFFF', subtle: '#F0F2F5', strong: '#E3E7ED', inverse: '#172033' },
      text: { primary: '#172033', secondary: '#536078', muted: '#7B879C', inverse: '#FFFFFF' },
      border: { subtle: '#E9ECF1', default: '#DDE2EA', strong: '#B8C1CF' },
      accent: { default: '#4F46E5', hover: '#4338CA', active: '#3730A3', subtle: '#EEF2FF' },
      status: { positive: '#16825D', warning: '#B56908', critical: '#C53A46', info: '#2167C7' },
    },
    dark: {
      bg: { canvas: '#0D111A', surface: '#141A25', subtle: '#1B2330', strong: '#263143', inverse: '#F3F5F8' },
      text: { primary: '#F3F5F8', secondary: '#B2BDCE', muted: '#8491A5', inverse: '#0D111A' },
      border: { subtle: '#202A39', default: '#2A3547', strong: '#45536A' },
      accent: { default: '#8B83FF', hover: '#A49EFF', active: '#C0BCFF', subtle: '#24254A' },
      status: { positive: '#45C99A', warning: '#F0AD4E', critical: '#FF7781', info: '#69A7F5' },
    },
  },
  space: { 0: '0', 0.5: '2px', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px' },
  font: {
    family: { sans: 'Inter Variable, ui-sans-serif, system-ui, sans-serif', mono: 'ui-monospace, SFMono-Regular, monospace' },
    size: { xs: '12px', sm: '13px', base: '14px', md: '16px', lg: '18px', xl: '20px', '2xl': '24px', '3xl': '32px', '4xl': '40px' },
    line: { xs: '16px', sm: '16px', base: '20px', md: '24px', lg: '28px', xl: '28px', '2xl': '32px', '3xl': '40px', '4xl': '48px' },
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    tracking: { tight: '-0.02em', normal: '0', wide: '0.02em' },
  },
  radius: { none: '0', sm: '6px', md: '10px', lg: '14px', xl: '20px', full: '9999px' },
  elevation: {
    0: 'none',
    1: '0 1px 2px rgb(23 32 51 / 0.06)',
    2: '0 8px 24px rgb(23 32 51 / 0.10)',
    3: '0 20px 48px rgb(23 32 51 / 0.16)',
  },
  opacity: { disabled: 0.45, muted: 0.64, scrim: 0.56, hoverOverlay: 0.06, pressedOverlay: 0.10 },
  motion: {
    duration: { instant: '0ms', fast: '100ms', normal: '180ms', slow: '240ms', deliberate: '320ms' },
    easing: { standard: 'cubic-bezier(.2,0,0,1)', enter: 'cubic-bezier(.16,1,.3,1)', exit: 'cubic-bezier(.4,0,1,1)' },
  },
  layout: {
    contentMax: '1280px', readingMax: '720px', sidebar: '240px', sidebarCollapsed: '64px',
    breakpoint: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
    z: { base: 0, sticky: 10, dropdown: 30, overlay: 40, modal: 50, toast: 60, command: 70 },
  },
} as const;
```

## Variables CSS

```css
:root {
  color-scheme: light;
  --color-bg-canvas: #f7f8fa;
  --color-bg-surface: #fff;
  --color-bg-subtle: #f0f2f5;
  --color-bg-strong: #e3e7ed;
  --color-text-primary: #172033;
  --color-text-secondary: #536078;
  --color-text-muted: #7b879c;
  --color-border-subtle: #e9ecf1;
  --color-border-default: #dde2ea;
  --color-border-strong: #b8c1cf;
  --color-accent: #4f46e5;
  --color-accent-hover: #4338ca;
  --color-accent-subtle: #eef2ff;
  --color-positive: #16825d;
  --color-warning: #b56908;
  --color-critical: #c53a46;
  --color-info: #2167c7;
}

[data-theme='dark'] {
  color-scheme: dark;
  --color-bg-canvas: #0d111a;
  --color-bg-surface: #141a25;
  --color-bg-subtle: #1b2330;
  --color-bg-strong: #263143;
  --color-text-primary: #f3f5f8;
  --color-text-secondary: #b2bdce;
  --color-text-muted: #8491a5;
  --color-border-subtle: #202a39;
  --color-border-default: #2a3547;
  --color-border-strong: #45536a;
  --color-accent: #8b83ff;
  --color-accent-hover: #a49eff;
  --color-accent-subtle: #24254a;
  --color-positive: #45c99a;
  --color-warning: #f0ad4e;
  --color-critical: #ff7781;
  --color-info: #69a7f5;
}
```

## Tokens de componentes

| Token | Alias |
|---|---|
| `button.primary.bg` | `color.accent.default` |
| `button.primary.bgHover` | `color.accent.hover` |
| `button.height.default` | `space.10` |
| `input.height.default` | `space.10` |
| `input.focusRing` | `color.accent.default` |
| `card.bg` | `color.bg.surface` |
| `card.border` | `color.border.default` |
| `card.radius` | `radius.lg` |
| `dialog.radius` | `radius.xl` |
| `focus.width` | `2px` |
| `touchTarget.min` | `44px` |

## Reglas de uso

- No introducir hex, sombras o duraciones directamente en componentes.
- Un nuevo token requiere un significado reutilizable; no nombres por pantalla.
- Las variantes de tema comparten el mismo nombre semántico.
- Estados combinan color, icono y texto.
- El tema inicial respeta preferencia guardada; si no existe, usa light. Dark es opt-in.
- Cambiar tokens exige revisión visual de ambos temas y contraste automatizado.
