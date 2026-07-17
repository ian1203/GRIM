# Arquitectura de información

La arquitectura sigue el flujo mental de una decisión, no la estructura interna de datos ni los departamentos de la empresa.

```text
Inicio
  ↓
Prioridades ──→ Detalle de decisión ──→ Acción / Delegación ──→ Seguimiento
  ↓                       ↑
Oportunidades             │
  ↓                       │
Copilot ──────────────────┘
  ↓
Explorar

Configuración (contexto global, no paso del flujo)
```

## Navegación principal

### Inicio

**Pregunta mental:** “¿Qué cambió y cómo está el negocio?”

Briefing ejecutivo temporal. Muestra hasta cinco asuntos: compromisos pendientes, cambios materiales y progreso desde la última visita. No replica todas las prioridades ni contiene una cuadrícula de KPIs.

### Prioridades

**Pregunta mental:** “¿Qué necesita mi atención ahora?”

Bandeja ordenada por impacto, urgencia, confianza y capacidad de acción. Cada elemento es una decisión con estado: nueva, en revisión, decidida, delegada, en seguimiento o cerrada. Filtros secundarios: horizonte, responsable y tipo de impacto.

### Oportunidades

**Pregunta mental:** “¿Dónde puedo capturar valor adicional?”

Señales de crecimiento que no son urgencias: expansión, recuperación, precio, mezcla, retención o aceleración. Se ordenan por valor esperado y esfuerzo. Una oportunidad promovida se convierte en prioridad con dueño y plazo.

### Copilot

**Pregunta mental:** “Ayúdame a entender o decidir.”

Espacio conversacional contextual. Sugiere preguntas basadas en la vista y puede comparar escenarios, sintetizar evidencia o preparar acciones. Las respuestas relevantes se guardan dentro de una decisión; el chat no se convierte en un archivo aislado.

### Explorar

**Pregunta mental:** “Quiero comprobar algo específico.”

Acceso bajo demanda a clientes, pipeline, ingresos y señales históricas mediante búsqueda y preguntas, no menús de módulos. Es la profundidad analítica, no la puerta de entrada. Los hallazgos pueden fijarse como oportunidad o prioridad.

### Configuración

**Pregunta mental:** “¿Qué contexto y permisos usa GRIM?”

Organiza fuentes de datos, modelo de negocio, equipo y roles, reglas de atención, notificaciones, seguridad y facturación. Se separa del flujo diario porque configura el sistema, no decide sobre el negocio.

## Objeto central: Decision Item

La arquitectura se sostiene sobre un objeto común:

| Campo | Función |
|---|---|
| Conclusión | Qué necesita atención |
| Impacto | Valor, riesgo o tiempo asociado |
| Razón | Por qué apareció y por qué ahora |
| Evidencia | Fuentes y hechos observados |
| Confianza | Calidad y suficiencia de evidencia |
| Recomendación | Acción sugerida y alternativas |
| Responsable | Quién decide o ejecuta |
| Plazo | Cuándo pierde valor o se revisa |
| Estado | Posición en el ciclo de decisión |
| Resultado | Qué ocurrió y qué aprendió GRIM |

Priority, Opportunity e Insight son vistas del mismo ciclo, no silos incompatibles.

## Jerarquía y rutas propuestas

```text
/
/priorities
/priorities/:decisionId
/opportunities
/opportunities/:opportunityId
/copilot
/explore
/explore/:entityType/:entityId
/settings/context
/settings/data-sources
/settings/team
/settings/attention-rules
/settings/notifications
/settings/security
/settings/billing
```

## Búsqueda y navegación contextual

El command menu permite ir a una decisión, cliente, persona o acción; no sustituye la navegación base. Cada entidad muestra relaciones relevantes —cliente, responsable, periodo, fuente— y un rastro de vuelta a la decisión. La búsqueda acepta lenguaje natural y devuelve respuestas resumidas antes que listas de resultados.

## Sistema de atención

- **Briefing:** digest periódico; no badge permanente.
- **Inbox de prioridades:** trabajo que requiere decisión.
- **Notificación:** solo cambio material con urgencia real.
- **Seguimiento:** compromisos con responsable y fecha.

Los badges muestran trabajo nuevo o vencido, no actividad genérica. Una señal vista no equivale a una decisión resuelta.

## Por qué esta arquitectura

Comienza con atención, avanza hacia valor y ofrece conversación o exploración según la incertidumbre. Evita obligar al ejecutivo a conocer dónde vive un dato. También permite que GRIM evolucione: nuevas fuentes o modelos alimentan el mismo ciclo sin añadir módulos a la navegación.
