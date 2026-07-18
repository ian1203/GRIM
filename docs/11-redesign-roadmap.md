# Roadmap de rediseño

Este roadmap ordena el trabajo por reducción de riesgo e impacto sobre la decisión. No autoriza todavía programación; cada fase comienza con evidencia y termina con un criterio de salida.

> Actualización 17 jul 2026: la UI original de Figma Make fue recuperada. La primera refactorización conserva sus ocho destinos y mocks, y materializa tokens, componentes, light mode, accesibilidad y responsive. Las fases de datos reales, evaluación con usuarios y automatización continúan vigentes.

## Estrategia

Construir de adentro hacia afuera: primero el contrato de decisión y su ciclo completo; después el briefing, oportunidades y exploración; al final, automatización avanzada. El objetivo inicial no es “tener todas las pantallas”, sino probar que un Director General entiende y resuelve una prioridad mejor con GRIM.

## Orden por impacto

| Orden | Iniciativa | Impacto | Esfuerzo | Dependencias |
|---:|---|---|---|---|
| 1 | Modelo y anatomía de Decision Item | Muy alto | Medio | Documentación fundacional |
| 2 | Flujo Prioridad → Acción → Seguimiento | Muy alto | Alto | Modelo de decisión, fixtures |
| 3 | Evidencia, confianza y vigencia de IA | Muy alto | Medio | Contratos de fuente |
| 4 | Design tokens y primitivas accesibles | Alto | Medio | Sistema de diseño |
| 5 | Briefing de Inicio priorizado | Alto | Medio | Prioridades funcionales |
| 6 | Medición de comprensión y resultado | Alto | Medio | Flujo instrumentado |
| 7 | Oportunidades y promoción a prioridad | Alto | Alto | Ciclo de decisión estable |
| 8 | Copilot contextual | Alto | Alto | Evidencia, permisos, memoria |
| 9 | Explorar por pregunta/entidad | Medio | Alto | Modelo semántico y búsqueda |
| 10 | Dark mode, personalización y automatización avanzada | Medio | Medio/alto | Sistema estable y uso real |

## Fase 0 — Alinear y validar los cimientos

**Objetivo:** convertir la documentación en decisiones comprobables antes de UI de alta fidelidad.

- Entrevistar a 5–8 Directores Generales sobre decisiones recientes, fuentes, demoras y costo.
- Reunir 20–30 ejemplos anonimizados de señales comerciales reales.
- Definir taxonomía de impacto, urgencia, confianza, estados y permisos.
- Validar la métrica norte y sus eventos de soporte.
- Crear un mapa de riesgos de IA, privacidad y acciones sensibles.
- Acordar un decision log para excepciones a estos documentos.

**Salida:** escenarios priorizados, contrato de Decision Item aprobado, métricas baseline y criterios de confianza.  
**No incluir:** pixel polish, catálogo amplio de gráficas o navegación completa.

## Fase 1 — Prototipo de una decisión completa

**Objetivo:** demostrar comprensión y acción con un único flujo de alto valor.

- Diseñar en baja fidelidad la bandeja de prioridades y el detalle.
- Incluir conclusión, impacto, razón, evidencia, confianza, recomendación, responsable y plazo.
- Probar acción/delegación, seguimiento, descarte con motivo y corrección de contexto.
- Diseñar estados loading, learning, partial, stale, conflict y recoverable failure.
- Probar con contenido realista en mobile y desktop; light theme primero.

**Salida:** al menos 80 % de participantes identifica la prioridad principal en 10 s y explica por qué importa en 60 s; las acciones y niveles de confianza se comprenden sin facilitación.

## Fase 2 — Sistema mínimo implementable

**Objetivo:** preparar consistencia y accesibilidad sin sobredimensionar la biblioteca.

- Materializar tokens, tipografía, foco, grid y ambos temas.
- Diseñar Button, Input, Dialog, Badge, Alert, Card, Empty State y Source Citation.
- Diseñar Priority, Evidence, Confidence, Recommendation, Action Bar y Timeline.
- Documentar contratos, estados, contenido extremo y ejemplos de “no usar”.
- Definir matriz de pruebas visuales, accesibles y responsive.

**Salida:** el primer flujo puede construirse solo con componentes documentados; contraste AA y teclado aprobados.  
**Nota:** dark mode se soporta estructuralmente, pero el refinamiento visual sigue al tema claro.

## Fase 3 — MVP de Revenue Decision Loop

**Objetivo:** cerrar el ciclo con datos reales y aprendizaje observable.

- Implementar una fuente prioritaria y normalización de evidencia.
- Entregar prioridad, explicación, confirmación humana y resultado.
- Instrumentar `priority_viewed`, `evidence_opened`, `recommendation_accepted/modified/rejected`, `decision_assigned` y `decision_resolved`.
- Añadir auditoría, permisos, recuperación y monitoreo de calidad.
- Medir tiempo de comprensión, tasa de acción, irrelevancia y resultado comercial.

**Salida:** decisiones reales resueltas end-to-end; ninguna recomendación de alto impacto carece de fuente, confianza o aprobación correspondiente.

## Fase 4 — Briefing y sistema de atención

**Objetivo:** reducir búsqueda y visitas innecesarias.

- Crear Inicio como briefing de hasta cinco asuntos, cambios y compromisos.
- Definir deduplicación, agrupación, quiet hours y umbrales de materialidad.
- Añadir seguimiento y digest; reservar push/email inmediato para urgencia real.
- Evaluar fatiga, descartes y tiempo hasta acción.

**Salida:** usuarios encuentran lo importante sin explorar; notificaciones irrelevantes por debajo del umbral acordado.

## Fase 5 — Oportunidades y escenarios

**Objetivo:** pasar de protección de ingreso a captura de valor.

- Diseñar oportunidades con valor esperado, esfuerzo, ventana y experimento.
- Permitir promover a prioridad con responsable y plazo.
- Incorporar Forecast Cards con rangos, supuestos y escenarios.
- Comparar decisiones sin convertir la vista en dashboard.

**Salida:** oportunidades calificadas generan acciones trazables y el usuario comprende la incertidumbre del forecast.

## Fase 6 — Copilot contextual

**Objetivo:** permitir preguntas y síntesis sin perder evidencia ni continuidad.

- Lanzar Copilot desde contexto de prioridad, cliente o escenario.
- Usar respuestas estructuradas con citas, confianza y acción.
- Guardar decisiones útiles en el timeline; no aislarlas en historial de chat.
- Añadir clarificación, conflicto de fuentes y límites de permisos.
- Evaluar fidelidad, utilidad, concisión, calibración y seguridad.

**Salida:** respuestas críticas pasan evaluaciones de grounding y los usuarios pueden convertir conversación en decisión sin recapturar contexto.

## Fase 7 — Explorar y escala

**Objetivo:** ofrecer profundidad a especialistas sin contaminar la experiencia ejecutiva.

- Búsqueda por lenguaje natural y entidades conectadas.
- Profundidad analítica, exportación y vistas de especialista bajo demanda.
- Nuevas fuentes, roles, gobernanza y reglas de atención.
- Rendimiento, localización, monedas y zonas horarias.

**Salida:** ampliar cobertura no aumenta navegación principal ni deteriora las métricas de comprensión.

## Lo que se pospone deliberadamente

- Constructor genérico de dashboards y reportes.
- Catálogo extenso de widgets o gráficas.
- Automatización irreversible sin historial de confianza.
- Personalización visual profunda por cliente.
- Gamificación, badges de actividad y feeds sociales.
- Reemplazar CRM/ERP o replicar sus módulos.

## Cadencia de decisión

Cada fase sigue: evidencia → hipótesis → prototipo → prueba → decisión documentada → implementación → medición. No avanzar por calendario si falla el criterio de salida. Revisar este roadmap mensualmente con Producto, Diseño, Ingeniería, Datos y responsables comerciales.

## Métricas de programa

- Tiempo para identificar y comprender una prioridad.
- Decisiones de alto impacto resueltas con evidencia por semana.
- Porcentaje de señales accionables, descartadas y duplicadas.
- Aceptación, modificación y resultado de recomendaciones.
- Calibración de confianza y tasa de corrección humana.
- Valor capturado/protegido con metodología acordada.
- Accesibilidad, rendimiento y fallos recuperables por flujo.

El éxito final es menor carga cognitiva y mejores decisiones, no mayor tiempo de sesión ni mayor cantidad de pantallas.
