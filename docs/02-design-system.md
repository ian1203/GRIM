# Sistema de diseño

Este sistema traduce la personalidad de GRIM —precisa, serena y ejecutiva— a reglas visuales. El tema claro es el entorno principal; el oscuro conserva jerarquía y contraste, pero no redefine el producto.

## Color

La interfaz usa neutros cálidos y tinta azulada para reducir fatiga. Indigo comunica acción e inteligencia; verde, ámbar y rojo se reservan para significado y nunca decoran grandes superficies.

### Tema claro — principal

| Rol | Token | Valor | Uso |
|---|---|---:|---|
| Canvas | `bg-canvas` | `#F7F8FA` | Fondo de aplicación |
| Surface | `bg-surface` | `#FFFFFF` | Cards, menús, paneles |
| Subtle | `bg-subtle` | `#F0F2F5` | Agrupación, hover neutro |
| Strong | `bg-strong` | `#E3E7ED` | Selección neutra |
| Text | `text-primary` | `#172033` | Texto principal |
| Secondary | `text-secondary` | `#536078` | Texto de apoyo |
| Muted | `text-muted` | `#7B879C` | Metadatos |
| Border | `border-default` | `#DDE2EA` | Separadores y bordes |
| Action | `accent` | `#4F46E5` | Acción primaria, foco |
| Action hover | `accent-hover` | `#4338CA` | Hover |
| Action subtle | `accent-subtle` | `#EEF2FF` | Fondo contextual |
| Positive | `positive` | `#16825D` | Resultado favorable |
| Warning | `warning` | `#B56908` | Riesgo preventivo |
| Critical | `critical` | `#C53A46` | Riesgo material |
| Info | `info` | `#2167C7` | Información verificada |

### Tema oscuro — secundario

| Rol | Token | Valor | Uso |
|---|---|---:|---|
| Canvas | `bg-canvas` | `#0D111A` | Fondo de aplicación |
| Surface | `bg-surface` | `#141A25` | Cards, menús, paneles |
| Subtle | `bg-subtle` | `#1B2330` | Agrupación, hover |
| Strong | `bg-strong` | `#263143` | Selección neutra |
| Text | `text-primary` | `#F3F5F8` | Texto principal |
| Secondary | `text-secondary` | `#B2BDCE` | Texto de apoyo |
| Muted | `text-muted` | `#8491A5` | Metadatos |
| Border | `border-default` | `#2A3547` | Separadores y bordes |
| Action | `accent` | `#8B83FF` | Acción primaria, foco |
| Action hover | `accent-hover` | `#A49EFF` | Hover |
| Action subtle | `accent-subtle` | `#24254A` | Fondo contextual |
| Positive | `positive` | `#45C99A` | Resultado favorable |
| Warning | `warning` | `#F0AD4E` | Riesgo preventivo |
| Critical | `critical` | `#FF7781` | Riesgo material |
| Info | `info` | `#69A7F5` | Información verificada |

Los pares de texto y fondo deben cumplir WCAG 2.2 AA: 4.5:1 para texto normal y 3:1 para texto grande y controles. El color nunca es el único portador de significado.

## Tipografía

Fuente principal: `Inter Variable`, con `ui-sans-serif, system-ui, sans-serif` como fallback. Datos tabulares usan `font-variant-numeric: tabular-nums`. Código, identificadores y fórmulas usan `ui-monospace`.

| Estilo | Tamaño / línea | Peso | Uso |
|---|---:|---:|---|
| Display | 40 / 48 px | 600 | Mensaje principal excepcional |
| H1 | 32 / 40 px | 600 | Decisión o propósito de pantalla |
| H2 | 24 / 32 px | 600 | Sección principal |
| H3 | 20 / 28 px | 600 | Card o subsección |
| Body lg | 18 / 28 px | 400 | Resumen ejecutivo |
| Body | 16 / 24 px | 400 | Lectura principal |
| Body sm | 14 / 20 px | 400 | Apoyo y controles |
| Label | 13 / 16 px | 600 | Etiquetas breves |
| Caption | 12 / 16 px | 500 | Fuente, tiempo, confianza |

No usar más de cuatro estilos tipográficos por vista. Los títulos describen conclusiones (“Renovar tres cuentas protege $1.2 M”), no contenedores (“Resumen”).

## Espaciado y grid

Unidad base: 4 px. Escala: `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`. Espaciado interior habitual: 16 px móvil, 20–24 px desktop. Separación entre secciones: 32–48 px.

Grid desktop: 12 columnas, ancho máximo de contenido 1280 px, gutter 24 px y márgenes 32 px. Tablet: 8 columnas, gutter y margen 24 px. Móvil: 4 columnas, gutter 16 px y margen 16 px. El contenido ejecutivo de lectura se limita a 720 px; no se estira para llenar el canvas.

## Border radius

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 6 px | Badges, controles compactos |
| `radius-md` | 10 px | Inputs, botones |
| `radius-lg` | 14 px | Cards |
| `radius-xl` | 20 px | Dialogs, paneles destacados |
| `radius-full` | 9999 px | Avatares, estado puntual |

## Elevación y sombras

| Nivel | Sombra clara | Uso |
|---|---|---|
| 0 | Ninguna | Jerarquía por borde |
| 1 | `0 1px 2px rgb(23 32 51 / .06)` | Card interactiva |
| 2 | `0 8px 24px rgb(23 32 51 / .10)` | Popover |
| 3 | `0 20px 48px rgb(23 32 51 / .16)` | Dialog |

En oscuro, usar bordes y superficies antes que sombras. No usar sombras de color.

## Botones

- Alturas: 32 px compacto, 40 px estándar, 48 px prominente; área táctil mínima 44×44 px.
- Variantes: primary (una por región), secondary, ghost y destructive.
- Estados: default, hover, active, focus-visible, loading y disabled.
- Loading conserva ancho y texto accesible; disabled no sustituye una explicación.
- El texto expresa acción y objeto: “Asignar seguimiento”, no “Continuar”.

| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| Primary | Accent | Blanco/alto contraste | Transparente |
| Secondary | Surface | Primary | Default |
| Ghost | Transparente | Secondary | Transparente |
| Destructive | Critical | Blanco | Transparente |

## Inputs

Altura estándar 40 px; label persistente sobre el campo; descripción o error bajo el campo. Focus ring de 2 px con offset de 2 px. Placeholder es ejemplo, nunca label. Formatos financieros indican moneda y periodo. Validación ocurre al perder foco o enviar, no en cada pulsación salvo requisitos claramente progresivos.

## Cards

Una card representa una unidad semántica, no decoración. Fondo surface, borde de 1 px, radio 14 px y padding 20–24 px. Una card accionable tiene título conclusivo, impacto, explicación breve, evidencia/confianza, siguiente acción y estado. No anidar más de un nivel de cards.

## Badges y estados

Badges etiquetan atributos estables o estado breve; no contienen frases. Combinan texto, icono y color.

| Estado | Lenguaje | Color | Ejemplo |
|---|---|---|---|
| Informativo | Neutral | Info | “Actualizado hace 8 min” |
| Favorable | Avance | Positive | “En trayectoria” |
| Atención | Preventivo | Warning | “Revisar esta semana” |
| Crítico | Material | Critical | “Actuar hoy” |
| IA | Confianza | Accent/neutral | “Confianza alta” |

## Animación

La animación explica cambio, continuidad o resultado. Duraciones: 100 ms respuesta inmediata, 180 ms transición de control, 240 ms panel, 320 ms reorganización compleja. Curvas: entrada `cubic-bezier(.16,1,.3,1)`, salida `cubic-bezier(.4,0,1,1)`. Sin rebotes, parallax ni animaciones decorativas. Respetar `prefers-reduced-motion`; los datos nuevos nunca desplazan contenido mientras el usuario lee.

## Responsive

- `<640`: navegación compacta, una columna, acciones esenciales persistentes.
- `640–1023`: 4–8 columnas, paneles secundarios bajo el contenido.
- `≥1024`: 12 columnas, navegación lateral y detalle contextual opcional.
- `≥1440`: aumenta margen, no densidad ni longitud de línea.

Las tablas se transforman en listas priorizadas; las gráficas conservan lectura y resumen textual. No ocultar información crítica solo por tamaño de pantalla.

## Iconografía

Usar una sola familia outline de 20 px, trazo 1.75–2 px, esquinas redondeadas y metáforas conocidas. Tamaños: 16 px inline, 20 px controles, 24 px navegación. Todo icono interactivo tiene nombre accesible; acompañar con texto cuando la acción no sea universal. Evitar iconos de IA como magia o destellos para no sugerir infalibilidad.
