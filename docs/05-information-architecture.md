# Arquitectura de información

La navegación actual se preserva en orden y destinos. Sus etiquetas se normalizan al español y cada pantalla responde una pregunta mental.

```text
Inicio
Preguntar
Oportunidades
Clientes
Productos
Pronóstico
Acciones
Conectores
```

| Destino | Pregunta que responde | Papel en el ciclo |
|---|---|---|
| Inicio | ¿Qué necesita mi atención hoy? | Prioriza señales y siguiente acción |
| Preguntar | ¿Cómo entiendo o decido sobre esto? | Sintetiza evidencia y recomienda |
| Oportunidades | ¿Dónde puedo capturar o proteger valor? | Califica valor, esfuerzo y ventana |
| Clientes | ¿Qué relaciones importantes están en riesgo? | Aporta contexto y recomendación |
| Productos | ¿Qué productos requieren una decisión? | Resume tendencia, margen e inventario |
| Pronóstico | ¿Qué resultado es razonable esperar? | Compara escenarios y supuestos |
| Acciones | ¿Qué trabajo debo preparar o delegar? | Convierte recomendaciones en pasos honestos |
| Conectores | ¿Qué información sostiene a GRIM? | Expone estado, permisos y vigencia de fuentes |

La navegación usa estado local en esta fase. No existe React Router; no se añade durante la primera refactorización. Por ello no hay rutas profundas ni URLs compartibles todavía.

## Objeto central

Todas las experiencias comparten un `Decision Item`: conclusión, prioridad, área, impacto, explicación, confianza, recomendación, responsable, plazo, estado y evidencia. Las pantallas son perspectivas de ese ciclo, no módulos aislados.

## Sistema de atención

Inicio es la puerta principal y limita el trabajo visible a señales relevantes. Preguntar añade contexto. Oportunidades, Clientes y Productos permiten profundizar sin obligar al ejecutivo a explorar catálogos completos. Pronóstico expresa incertidumbre. Acciones prepara ejecución. Conectores explica la calidad del contexto.

## Evolución futura

React Router, entidades profundas y URLs compartibles se evaluarán después de estabilizar el sistema visual. Su incorporación debe conservar los ocho destinos y no convertir la navegación en una taxonomía de módulos internos.
