# Auditoría de interfaz

**Fecha:** 17 de julio de 2026  
**Alcance:** prototipo React disponible en `src/App.tsx` antes de la refactorización profesional.

## Resumen ejecutivo

GRIM ya contiene ocho experiencias navegables y datos mock útiles: Inicio, Preguntar, Oportunidades, Clientes, Productos, Pronóstico, Acciones y Conectores. El concepto de priorizar decisiones está presente, pero la implementación heredada de Figma Make concentra 1,214 líneas en un solo archivo, usa un tema oscuro hardcodeado, SVG inline, acciones que aparentan automatización y no incluye responsive real.

El build es estable. La prioridad no es reconstruir el producto, sino conservar sus flujos y separar estructura, datos y presentación mientras se implementa el design system oficial.

## Inventario real

| Área | Estado inicial | Recomendación aprobada |
|---|---|---|
| Entry point | `src/main.tsx` monta `App` correctamente | Conservar |
| Navegación | Estado local con ocho destinos | Conservar orden y lógica; normalizar labels al español |
| Router | No existe React Router | No introducirlo en esta fase |
| Pantallas | Ocho experiencias dentro de `App.tsx` | Extraer a `screens/` |
| Componentes | `Sidebar`, `PriorityBadge`, `ConfidenceBar`, `Sparkline` | Crear componentes semánticos reutilizables |
| Mocks | Constantes dentro de `App.tsx` | Mover a `data/mockData.ts` sin eliminarlos |
| Estilos | Tailwind v4 con valores oscuros y arbitrarios | Migrar a tokens semánticos y light mode |
| Iconos | 11 SVG inline | Sustituir por Lucide |
| Estados | Loading parcial en chat | Añadir contratos Empty, Loading y Error |
| Build | TypeScript + Vite exitoso | Mantener exit code 0 |

## Hallazgos priorizados

| Problema | Impacto | Prioridad | Solución |
|---|---|---:|---|
| Acciones mock aparentan ejecución o integración real | Erosiona confianza y promete capacidades inexistentes | P0 | Cambiar CTAs y feedback a preparar, revisar o solicitar evaluación |
| Tema oscuro hardcodeado sin tokens | Inconsistencia visual y alto costo de mantenimiento | P0 | Light mode mediante variables semánticas; dark preparado bajo `data-theme` |
| `App.tsx` monolítico | Riesgo alto de regresión y duplicación | P1 | Extraer shell, pantallas, componentes, tipos y mocks |
| Sin responsive | Sidebar fija y layouts horizontales fallan en móvil | P1 | Drawer móvil, cards apiladas y contenido sin margen fijo |
| Contraste, foco y labels insuficientes | Incumplimiento de accesibilidad y navegación difícil | P1 | Focus visible, labels, `aria-current`, live regions y texto ≥12 px |
| Confianza y probabilidad comparten indicador | Semántica ambigua | P1 | Indicadores separados y siempre acompañados por texto |
| Chat no estructura la respuesta ejecutiva | Se parece a mensajería genérica | P1 | Resumen, Evidencia, Impacto, Recomendación y Confianza |
| Forecast afirma intervalos no visibles | Sugiere precisión inexistente | P1 | Presentar escenarios, supuestos, confianza y nota de estimación |
| Conectores no muestran sincronización o permisos | Falta contexto para decidir | P2 | Separar conectados, disponibles y evaluación personalizada |
| No hay pruebas automatizadas | Riesgo de regresión posterior | P2 | Añadir pruebas en una iteración siguiente |

## Deuda heredada de Figma Make

- Un único archivo concentra UI, mocks y estado.
- Clases Tailwind repetidas y valores arbitrarios.
- SVG inline sin contrato accesible.
- Anchuras fijas orientadas a una sola captura desktop.
- Botones visuales sin comportamiento.

No quedan plugins, imports ni dependencias obligatorias de `.figma` en la configuración de producción.

## Principios evaluados

- **Decisiones antes que datos:** presente en Inicio y Oportunidades; debe reforzarse en Productos y Pronóstico.
- **Impacto antes que detalle:** presente, aunque no siempre incluye moneda o periodo.
- **IA explicable:** parcial; falta confianza y separación explícita de evidencia.
- **Acciones honestas:** incumplido en Acciones y Conectores antes de la refactorización.
- **Accesibilidad AA:** no alcanzada en la implementación inicial.
- **Responsive:** no implementado inicialmente.

## Criterio de salida de la refactorización

Las ocho experiencias deben permanecer visibles y navegables, compartir tokens oficiales, funcionar desde 320 px, no afirmar automatizaciones inexistentes, mostrar foco accesible y terminar `npm run build` con exit code 0.
