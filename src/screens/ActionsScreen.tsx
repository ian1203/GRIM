import { useState } from "react"
import { ACTIONS } from "@/data/mockData"
import { ActionCard } from "@/components/intelligence/ActionCard"
import { Card } from "@/components/ui/Card"
import { PageHeader } from "@/components/ui/PageHeader"

export function ActionsScreen() {
  const [prepared, setPrepared] = useState<Set<number>>(new Set())
  const toggle = (id: number) =>
    setPrepared((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Plan de decisión"
        title="Estas decisiones pueden cambiar el resultado esperado del negocio."
        description={
          <>
            <strong className="font-semibold text-text-primary">
              {prepared.size} de {ACTIONS.length}
            </strong>{" "}
            acciones preparadas localmente. Ninguna se ejecuta en un sistema
            externo.
          </>
        }
      />
      <section aria-labelledby="priority-criteria-title" className="mb-6">
        <Card className="p-4 sm:px-5">
          <h2
            id="priority-criteria-title"
            className="text-[13px] font-semibold text-text-primary"
          >
            Criterio de priorización
          </h2>
          <p className="mt-1 text-[13px] leading-5 text-text-secondary">
            Las acciones están ordenadas por urgencia, valor económico y
            confianza de la señal.
          </p>
        </Card>
      </section>
      <div className="space-y-3">
        {ACTIONS.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            prepared={prepared.has(action.id)}
            onPrepare={() => toggle(action.id)}
            continuity={
              action.id === 1
                ? {
                    memory:
                      "Esta acción deriva de tres señales detectadas previamente.",
                    relationshipLabel: "Impacta directamente",
                    related: ["Inicio", "Clientes", "Pronóstico"],
                    question: "¿Qué resultado puede cambiar?",
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}
