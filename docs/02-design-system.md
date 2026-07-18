# Sistema de diseño

GRIM se siente preciso, sereno y ejecutivo. Light mode es el tema principal; dark mode comparte los mismos tokens semánticos y queda disponible bajo `data-theme="dark"`.

## Paleta oficial

| Rol | Light | Uso |
|---|---:|---|
| Background | `#F8FAFC` | Canvas de aplicación |
| Surface | `#FFFFFF` | Cards, sidebar y paneles |
| Surface secondary | `#F1F5F9` | Agrupación y controles secundarios |
| Border | `#E2E8F0` | Separadores y contornos |
| Primary | `#4F46E5` | Acción y selección |
| Primary hover | `#4338CA` | Hover de acción primaria |
| Primary soft | `#EEF2FF` | Selección y contexto de IA |
| Text primary | `#0F172A` | Títulos y texto principal |
| Text secondary | `#475569` | Explicación |
| Text muted | `#64748B` | Metadatos accesibles |
| Success | `#059669` | Resultado favorable |
| Success background | `#ECFDF5` | Superficie favorable |
| Warning | `#D97706` | Atención preventiva |
| Warning background | `#FFFBEB` | Superficie preventiva |
| Critical | `#DC2626` | Riesgo material |
| Critical background | `#FEF2F2` | Superficie crítica |
| Info | `#0284C7` | Información verificada |
| Info background | `#F0F9FF` | Superficie informativa |

Nunca usar negro puro ni grises de bajo contraste para texto. El color siempre se acompaña por texto, icono o estructura.

## Tipografía

Inter es la fuente oficial. Monoespaciada se limita a métricas, timestamps y labels técnicos.

| Rol | Tamaño / línea | Peso |
|---|---:|---:|
| Display | 40 / 48 px | 700 |
| Page title | 32 / 40 px | 700 |
| Section title | 24 / 32 px | 600 |
| Card title | 16 / 24 px | 600 |
| Body | 15 / 24 px | 400 |
| Small | 13 / 20 px | 400 |
| Caption | 12 / 16 px | 500 |

No usar texto inferior a 12 px.

## Espaciado, radios y sombras

Escala: `4, 8, 12, 16, 24, 32, 40, 48, 64 px`. Radios: small 8 px, medium 12 px, large 16 px, pill 999 px. Las sombras son suaves y se reservan para superficies elevadas; bordes y fondos construyen la jerarquía habitual.

## Componentes

- Botones: primary, secondary, ghost y critical; mínimo táctil 44 px.
- Inputs: label persistente, helper/error y focus ring visible.
- Cards: una unidad semántica; conclusión, impacto, contexto y acción.
- Badges: atributos breves; nunca frases ni significado solo por color.
- Feedback: loading anunciado, empty con siguiente paso y error recuperable.

## Iconografía y movimiento

Lucide es la única familia. Tamaño habitual 18–20 px, trazo coherente y `aria-hidden` cuando es decorativa. Movimiento: 120 ms para respuesta, 180 ms para controles y 240 ms para paneles; respetar `prefers-reduced-motion`.

## Grid y responsive

- Móvil: 4 columnas, margen 16 px, navegación drawer y cards apiladas.
- Tablet: 8 columnas, margen 24 px, sidebar colapsable.
- Desktop: 12 columnas, sidebar fija y contenido de lectura hasta 760 px.
- Pantallas amplias aumentan margen, no densidad.

## Criterios visuales

Una pantalla tiene una decisión dominante, máximo tres visualizaciones justificadas y una sola acción primaria por región. El impacto aparece antes que el detalle y toda cifra declara periodo o contexto cuando pueda ser ambigua.
