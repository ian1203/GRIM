# Biblioteca de componentes

Los componentes codifican decisiones de producto, no solo estilos. Todos soportan teclado, foco visible, estados de carga/error/ausencia, temas claro y oscuro, zoom y contenido localizado.

## Componentes base

### Card

**Propósito:** agrupar una unidad semántica con jerarquía clara. **No usar:** como envoltura decorativa de cada sección o en anidación profunda. **Variantes:** static, actionable, selectable, compact. **Estados:** default, hover, selected, loading, disabled.

### Button

**Propósito:** ejecutar una acción inmediata. **No usar:** para navegación textual (usar Link), estados o más de una acción primaria por región. **Variantes:** primary, secondary, ghost, destructive; tamaños compact, default, prominent. **Estados:** default, hover, active, focus-visible, loading, disabled.

### Input

**Propósito:** capturar datos breves con label persistente. **No usar:** para elección cerrada o búsqueda sin semántica de búsqueda. **Variantes:** text, number, currency, date, search, textarea. **Estados:** empty, filled, focus, valid, attention, disabled, read-only.

### Dialog

**Propósito:** confirmar una acción de riesgo o completar una tarea breve sin perder contexto. **No usar:** para contenido informativo largo, navegación o formularios complejos. **Variantes:** confirm, form, destructive. **Estados:** opening, idle, submitting, success, attention. Restaura foco al cerrar y admite Escape salvo durante una operación irreversible.

### Badge

**Propósito:** etiquetar estado o atributo breve. **No usar:** para acciones, frases o comunicar solo por color. **Variantes:** neutral, info, positive, attention, critical, confidence. **Estados:** stable, updated, muted.

### Alert

**Propósito:** comunicar una condición relevante dentro del flujo. **No usar:** como decoración persistente o para toda prioridad. **Variantes:** info, attention, critical, success. **Estados:** static, dismissible, with-action, resolving.

## Datos y visualización

### Chart

**Propósito:** revelar tendencia, distribución o relación que una frase no puede explicar. **No usar:** como ornamento, KPI ampliado, 3D, donut con muchas categorías o sin conclusión. **Variantes:** line, bar, area limitada, waterfall, bullet, scatter. **Estados:** loading, ready, partial-data, insufficient-data, stale. Incluye título conclusivo, resumen textual, unidades, periodo, fuente, tooltip accesible y alternativa tabular.

### Metric

**Propósito:** mostrar un valor con comparación y significado. **No usar:** como mosaico de KPIs sin relación con una decisión. **Variantes:** impact, trend, target, range. **Estados:** positive, neutral, attention, unavailable, stale.

### Evidence List

**Propósito:** separar hechos y fuentes que respaldan una inferencia. **No usar:** como volcado de registros. **Variantes:** compact, expanded, grouped-by-source. **Estados:** verified, conflicting, stale, missing.

### Confidence Indicator

**Propósito:** comunicar confianza calibrada y su motivo. **No usar:** como puntuación de precisión absoluta ni color aislado. **Variantes:** high, medium, low, unavailable. **Estados:** current, changed, under-review. Siempre incluye explicación (“Alta: 4 fuentes consistentes”).

## Componentes de inteligencia

Todos siguen la anatomía: conclusión → impacto → razón → confianza → acción → evidencia.

### Priority Card

**Propósito:** representar una decisión que requiere atención y plazo. **No usar:** para noticias, métricas pasivas o tareas sin impacto. **Variantes:** critical, attention, watch; compact y expanded. **Estados:** new, reviewing, decided, delegated, monitoring, resolved, dismissed.

### Insight Card

**Propósito:** explicar un patrón relevante que mejora comprensión, aunque aún no exige acción. **No usar:** para curiosidades o cada anomalía estadística. **Variantes:** change, pattern, causal-hypothesis, benchmark. **Estados:** new, read, promoted, archived, invalidated.

### Recommendation Card

**Propósito:** proponer una acción con resultado esperado y trade-offs. **No usar:** sin evidencia, propietario potencial o capacidad de actuar. **Variantes:** single-action, options, staged-plan. **Estados:** proposed, accepted, modified, rejected, executing, completed.

### Opportunity Card

**Propósito:** presentar valor potencial con esfuerzo, ventana y siguiente experimento. **No usar:** para pipeline existente sin señal adicional. **Variantes:** expansion, recovery, pricing, retention, acceleration. **Estados:** discovered, qualified, prioritized, pursuing, won, lost, expired.

### Forecast Card

**Propósito:** comunicar rango esperado, escenario, drivers e incertidumbre. **No usar:** para una cifra puntual sin intervalo ni como promesa. **Variantes:** revenue, cash, pipeline, scenario-comparison. **Estados:** current, changed, at-risk, stale, insufficient-data.

### Copilot Card

**Propósito:** encapsular una respuesta de IA que puede citarse, guardar o convertir en decisión. **No usar:** para saludo conversacional, texto sin estructura o respuesta puramente gráfica. **Variantes:** answer, synthesis, scenario, action-draft, clarification. **Estados:** generating, complete, low-confidence, needs-input, superseded, failed-safely.

## Componentes de flujo

### Action Bar

**Propósito:** reunir la acción recomendada y alternativas. **No usar:** con más de tres acciones visibles. **Variantes:** inline, sticky, selection. **Estados:** idle, pending, success, recoverable-failure.

### Decision Timeline

**Propósito:** mostrar señal, decisión, ejecución y resultado en orden. **No usar:** como log técnico de cada evento. **Variantes:** compact, full. **Estados:** active, overdue, completed, cancelled.

### Empty / Learning State

**Propósito:** explicar por qué no existe contenido y cómo avanzar. **No usar:** solo icono y “No hay datos”. **Variantes:** first-use, learning, filtered, disconnected, permission-limited. **Estados:** actionable, waiting, progress-known.

### Source Citation

**Propósito:** vincular una afirmación con origen, fecha y alcance. **No usar:** como lista genérica al pie. **Variantes:** inline, footnote, source-preview. **Estados:** available, stale, unavailable, access-restricted.

## Contrato mínimo de implementación

- API tipada con variantes cerradas; evitar props booleanas ambiguas.
- `className` solo amplía layout, no rompe anatomía ni significado.
- Estados asíncronos y mensajes accesibles forman parte de la API.
- Contenido variable se prueba con títulos largos, valores ausentes y localización.
- Cada componente incluye stories/ejemplos, pruebas de interacción y documentación de “no usar”.
