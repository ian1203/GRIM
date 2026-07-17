# Estándares de ingeniería

Estos estándares convierten el sistema de producto en software mantenible. Aplican a toda contribución nueva; las excepciones se documentan en la revisión de código.

## Stack y límites

- React 19 con componentes funcionales y APIs estables.
- TypeScript en modo `strict`; evitar `any`, casts injustificados y non-null assertions.
- Tailwind CSS v4 alimentado por variables semánticas de `07-design-tokens.md`.
- Vite para desarrollo y build.
- Dependencias nuevas requieren beneficio claro, salud del proyecto y análisis de tamaño/seguridad.

## Estructura propuesta

```text
src/
  app/             # providers, router, shell, configuración
  routes/          # composición por ruta; mínima lógica de dominio
  features/        # capacidades verticales por dominio de decisión
  entities/        # tipos y UI de Decision, Customer, Evidence, etc.
  components/
    ui/            # primitivas del design system
    intelligence/  # PriorityCard, RecommendationCard, ForecastCard
  hooks/           # hooks realmente compartidos
  services/        # API, analytics, integraciones
  lib/             # utilidades puras y configuración
  styles/          # tokens y estilos globales
  test/            # fixtures y helpers
```

Importaciones siguen una dirección: `app/routes → features → entities/components → lib`. Las primitivas no importan features. Evitar barrels amplios que oculten ciclos.

## Componentización

- Un componente tiene una responsabilidad semántica y una API pequeña.
- Preferir composición a props booleanas (`variant="critical"`, no `isRed isUrgent`).
- Mantener datos y efectos en feature hooks/services; UI presenta estado explícito.
- No extraer un componente solo por longitud; extraer por reutilización, responsabilidad o capacidad de prueba.
- Primitivas accesibles encapsulan foco, teclado y ARIA; no recrearlas en cada pantalla.

## TypeScript y datos

- Modelar estados remotos como uniones discriminadas: `idle | loading | success | empty | error`.
- Validar respuestas externas en el límite; tipos estáticos no sustituyen validación runtime.
- Distinguir dinero, porcentaje, fechas e IDs con tipos/objetos de dominio; nunca calcular dinero con strings formateados.
- Fechas se transportan en ISO 8601 con zona/UTC y se formatean en presentación.
- Las APIs de IA incluyen fuentes, confianza, vigencia, estado y trazabilidad.

## Hooks y estado

- Hooks comienzan con `use` y representan una capacidad, no un cajón de utilidades.
- No usar `useEffect` para datos derivados ni sincronización evitable; calcular durante render o en eventos.
- Estado local para interacción efímera; URL para filtros compartibles; servidor/cache para datos remotos.
- Cada efecto declara cancelación, dependencias correctas y conducta ante respuestas fuera de orden.
- Context se reserva para dependencias globales estables; evitar providers monolíticos.

## Naming

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes/archivos | PascalCase | `PriorityCard.tsx` |
| Hooks | camelCase con `use` | `useDecisionEvidence.ts` |
| Funciones/variables | camelCase | `formatRevenueImpact` |
| Tipos | PascalCase | `DecisionStatus` |
| Constantes globales | UPPER_SNAKE_CASE | `MAX_VISIBLE_PRIORITIES` |
| Rutas/carpetas feature | kebab-case | `attention-rules/` |
| Tests | archivo + `.test` | `PriorityCard.test.tsx` |

Nombrar por intención de negocio, no implementación (`RevenueImpact`, no `BlueNumber`). Eventos describen resultado (`decision_assigned`), no click físico.

## Tailwind y estilos

- Consumir tokens semánticos; no valores arbitrarios salvo layout excepcional documentado.
- Usar utilidades en componentes y variantes tipadas para patrones; no construir clases desde strings dinámicos no detectables.
- `className` permite layout externo limitado; no cambiar anatomía o estado.
- El tema oscuro usa las mismas clases mediante variables CSS y atributo `data-theme`.
- Probar ambos temas; evitar `dark:` disperso cuando el token puede resolverlo.

## Accesibilidad

- WCAG 2.2 AA como mínimo.
- HTML semántico antes que ARIA; jerarquía de headings correcta y landmarks.
- Todo flujo operable por teclado, foco visible y restaurado en overlays.
- Área táctil mínima 44×44 px; contraste 4.5:1 texto normal y 3:1 componentes/texto grande.
- Estados no dependen solo de color; cambios asíncronos relevantes usan live regions con moderación.
- Charts tienen resumen textual y alternativa de datos; dialogs gestionan nombre, foco y escape.
- CI incluye lint accesible automatizado, pero la revisión manual con teclado y lector de pantalla es obligatoria en flujos críticos.

## Responsive y rendimiento

- Mobile-first sin ocultar decisiones críticas; probar 320, 768, 1024 y 1440 px y zoom 200 %.
- Objetivos p75: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 en hardware/red representativos.
- Dividir por rutas y capacidades pesadas; cargar charts y editores bajo demanda.
- Evitar waterfalls, renders innecesarios y payloads de datos ilimitados; virtualizar listas grandes solo cuando medición lo justifique.
- Skeletons reflejan layout; reservar espacio para evitar saltos. No optimizar con memoización sin perfilado.

## Estados y resiliencia

Toda consulta contempla loading, success, empty, partial, stale y recoverable failure. Las mutaciones son idempotentes cuando sea posible, evitan doble envío y preservan el trabajo ante fallos. Error boundaries aíslan rutas/capacidades y ofrecen recuperación.

## Testing

- **Unitario:** lógica de dominio, formato, scoring y transformaciones.
- **Componente:** accesibilidad, variantes, teclado y estados; probar comportamiento, no implementación.
- **Integración:** consulta → comprensión → decisión → acción con servicios simulados a nivel de red.
- **E2E:** flujos críticos y permisos con datos deterministas.
- **Visual:** componentes del sistema, breakpoints y ambos temas.
- **IA:** fixtures de evidencia, fidelidad de citas, confianza y respuestas ante datos insuficientes.

Cada bug corregido añade una prueba de regresión proporcional. No perseguir cobertura porcentual sin valor; exigir cobertura de estados y riesgos.

## Calidad y entrega

Antes de merge: typecheck, lint, formato, tests, build, auditoría accesible y revisión visual relevante. PRs pequeños explican problema, decisión, evidencia de prueba, capturas cuando hay UI y riesgos de rollout. Features de alto impacto usan flags, observabilidad y rollback.

No registrar PII, prompts sensibles o respuestas completas sin necesidad. Analytics usa eventos tipados, consentimiento aplicable y propiedades mínimas. Errores incluyen correlation ID y contexto técnico sin exponerlo al usuario.

## Definition of Done

- Cumple visión, principios UI/UX y anatomía del componente.
- Incluye todos los estados, responsive, light/dark y accesibilidad.
- Está tipado, probado y observable.
- Copy sigue la voz de GRIM.
- Datos de IA muestran evidencia, confianza y vigencia.
- La documentación cambia cuando cambia el contrato.
