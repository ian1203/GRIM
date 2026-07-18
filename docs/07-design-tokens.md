# Design tokens

Los tokens oficiales viven en `src/design-system/tokens/` y sus alias CSS en `src/index.css`. Los componentes consumen nombres semánticos; nunca colores hexadecimales ni valores de marca directos.

## Estructura

```text
src/design-system/tokens/
  colors.ts
  spacing.ts
  typography.ts
  radius.ts
  shadows.ts
  motion.ts
  index.ts
```

## Color

| Token semántico | Light | Dark preparado |
|---|---:|---:|
| `background` | `#F8FAFC` | `#0F172A` |
| `surface` | `#FFFFFF` | `#172033` |
| `surfaceSecondary` | `#F1F5F9` | `#1E293B` |
| `border` | `#E2E8F0` | `#334155` |
| `primary` | `#4F46E5` | `#818CF8` |
| `primaryHover` | `#4338CA` | `#A5B4FC` |
| `primarySoft` | `#EEF2FF` | `#252A4A` |
| `textPrimary` | `#0F172A` | `#F8FAFC` |
| `textSecondary` | `#475569` | `#CBD5E1` |
| `textMuted` | `#64748B` | `#94A3B8` |
| `success` | `#059669` | `#34D399` |
| `warning` | `#D97706` | `#FBBF24` |
| `critical` | `#DC2626` | `#F87171` |
| `info` | `#0284C7` | `#38BDF8` |

Light se activa en `:root`. Dark solo se activa explícitamente con `data-theme="dark"`; no sigue automáticamente la preferencia del sistema durante esta fase.

## Tipografía

```ts
display:      40 / 48 / 700
pageTitle:    32 / 40 / 700
sectionTitle: 24 / 32 / 600
cardTitle:    16 / 24 / 600
body:         15 / 24 / 400
small:        13 / 20 / 400
caption:      12 / 16 / 500
```

## Espaciado, radios, elevación y movimiento

- Espaciado: `4, 8, 12, 16, 24, 32, 40, 48, 64`.
- Radios: `8, 12, 16, 999`.
- Elevación: `subtle`, `raised`, `overlay`.
- Movimiento: `fast 120 ms`, `normal 180 ms`, `slow 240 ms`.
- Curvas: `standard` y `enter`; reducción de movimiento se respeta globalmente.

## Consumo

Tailwind v4 expone utilidades como `bg-background`, `bg-surface`, `text-text-primary`, `border-border`, `bg-primary-soft` y `text-critical`. Los estados combinan texto/icono con color. Los SVG y sparklines usan variables semánticas CSS cuando requieren un valor de `stroke`.

## Gobierno

- Prohibido agregar hexadecimales fuera de `colors.ts` y las variables canónicas de `index.css`.
- Un nuevo token requiere un significado reusable y ambos temas.
- Los tokens no llevan nombres de pantalla o componente puntual.
- Cambiar color exige revisar contraste y las ocho pantallas.
