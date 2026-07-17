# Auditoría de interfaz

**Fecha:** 17 de julio de 2026  
**Alcance:** estado local del repositorio `/Users/ianvicente/GRIM`  
**Método:** inspección de estructura, fuentes y configuración; contraste contra `01-product-vision.md` a `10-engineering-standards.md`. No se modificó ninguna pantalla.

## Resumen ejecutivo

No existen pantallas implementadas que puedan auditarse visualmente. El proyecto contiene configuración de Vite, React 19, TypeScript y Tailwind, pero `src/App.tsx`, `src/main.tsx`, `src/index.css` y `src/imports/pasted_text/grim-analytics-mvp-design.md` están vacíos (0 bytes). No hay rutas, componentes, markup, estilos, assets ni tests de UI.

Por ello, esta auditoría no atribuye violaciones visuales inexistentes ni inventa flujos. El hallazgo principal es una **ausencia de experiencia de producto**: hoy el proyecto no puede renderizar GRIM ni demostrar los principios definidos. La severidad expresa riesgo para construir los cimientos, no calidad de pantallas que aún no existen.

## Inventario verificable

| Área | Evidencia | Estado |
|---|---|---|
| Bootstrap React | `src/main.tsx` vacío | No implementado |
| Aplicación / pantallas | `src/App.tsx` vacío | No implementado |
| Estilos y tokens | `src/index.css` vacío | No implementado |
| Brief importado | Markdown importado vacío | Sin contenido auditable |
| Routing | Sin archivos/dependencia de router | No implementado |
| Componentes | Sin directorio/archivos | No implementado |
| Tests | Sin tests ni scripts de test | No implementado |
| Build tooling | Vite, React, TypeScript, Tailwind presentes | Scaffold disponible |

## Escala de prioridad

- **P0 — Fundacional:** bloquea ejecución, evaluación o confianza básica.
- **P1 — Alta:** necesario para validar valor y evitar deuda estructural.
- **P2 — Media:** amplía calidad, cobertura o profundidad después del flujo central.
- **P3 — Baja:** optimización posterior respaldada por evidencia.

## Hallazgos

| Problema | Impacto | Prioridad | Recomendación |
|---|---|---:|---|
| La aplicación no tiene entry point implementado | No se puede montar React ni evaluar una pantalla, accesibilidad o flujo | P0 | En la fase de implementación, crear el shell mínimo, providers y routing; conservar esta fase como solo documentación |
| No existe ninguna pantalla o flujo de decisión | GRIM no responde qué necesita atención, por qué ni qué hacer | P0 | Diseñar y validar primero el flujo vertical Prioridad → Evidencia → Recomendación → Acción → Seguimiento |
| No existe objeto de dominio implementado para decisiones | Riesgo de estructurar el producto por módulos/KPIs y duplicar modelos | P0 | Convertir `Decision Item` de arquitectura en contrato TypeScript y API antes de componer vistas |
| Tokens y temas no están implementados | Cualquier UI futura podría introducir valores arbitrarios e inconsistencia | P0 | Implementar `07-design-tokens.md` como variables CSS y mapping de Tailwind antes de componentes de producto |
| No existe biblioteca de componentes | Alto riesgo de cards genéricas, estados inconsistentes y patrones inaccesibles | P1 | Construir primitivas esenciales y después Priority, Evidence, Confidence, Recommendation y Action |
| No existe navegación ni arquitectura aplicada | El usuario no puede ubicarse y el equipo podría derivar hacia módulos | P1 | Prototipar Inicio, Prioridades, Oportunidades, Copilot, Explorar y Configuración con rutas estables |
| No hay estados loading, empty, partial, stale o failure | Futuras vistas pueden quedar vacías o generar desconfianza | P1 | Definir fixtures y acceptance criteria para todos los estados antes de conectar datos reales |
| No existe implementación de evidencia/confianza de IA | Una recomendación futura podría parecer una caja negra | P1 | Hacer de Source Citation, Evidence List y Confidence Indicator requisitos del primer slice |
| No hay infraestructura de accesibilidad verificable | No puede asegurarse teclado, foco, semántica, contraste o lector de pantalla | P1 | Elegir primitivas accesibles, configurar checks y probar manualmente el primer flujo |
| No hay estrategia responsive ni dark mode en código | Riesgo de retrofits costosos y pérdida de información crítica | P1 | Implementar mobile-first y variables de tema desde el primer componente, aunque light sea principal |
| No existen pruebas ni scripts de calidad | Regresiones de flujo, estados y decisiones quedarían invisibles | P1 | Añadir typecheck, lint, unit/component tests y smoke E2E junto al primer slice, no al final |
| No existe instrumentación del ciclo de decisión | No podrá medirse si GRIM reduce carga cognitiva o genera valor | P2 | Definir eventos tipados para ver, comprender, aceptar, delegar, descartar y resolver decisiones |
| No existe contenido real o fixture de dominio | Diseñar con lorem ipsum ocultaría problemas de claridad y longitud | P2 | Crear escenarios realistas y anonimizados con moneda, periodos, evidencia conflictiva y confianza variable |

## Violaciones de principios observables

No se observan dashboards tradicionales, exceso de gráficas, tablas enormes, mala copy ni patrones inaccesibles porque no existe markup o UI. Tampoco puede afirmarse cumplimiento. Todos los principios quedan en estado **no evaluable** hasta que haya una pantalla renderizable.

| Principio | Estado actual | Evidencia necesaria para aprobar |
|---|---|---|
| Una pantalla = una decisión | No evaluable | Vista con decisión dominante y una acción primaria |
| Decisiones antes que datos | No evaluable | Jerarquía conclusión → impacto → razón → acción → evidencia |
| Máximo tres gráficas | No evaluable | Inventario visual y propósito de cada gráfica |
| Contexto antes que números | No evaluable | Periodo, comparación, moneda y actualización junto a métricas |
| IA explicable | No evaluable | Hechos, fuentes, confianza, supuestos y acción |
| Accesibilidad AA | No evaluable | Auditoría automatizada y manual del flujo renderizado |

## Riesgo principal

El mayor riesgo no es “mejorar” una interfaz débil, sino construir demasiado pronto una interfaz convencional sobre un scaffold vacío. La mitigación es implementar un solo flujo vertical con el objeto Decision Item y medir comprensión antes de expandir navegación, visualizaciones o automatización.

## Próxima auditoría

Repetir cuando exista un prototipo funcional del primer slice. Debe incluir revisión heurística, recorrido de teclado, lector de pantalla, contraste, 320–1440 px, zoom 200 %, ambos temas, estados asíncronos, contenido extremo y prueba con al menos cinco usuarios del perfil ejecutivo. Registrar capturas, ruta, viewport y commit auditado.
