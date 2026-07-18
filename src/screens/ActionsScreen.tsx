import { useState } from "react"
import { ACTIONS } from "@/data/mockData"
import { ActionCard } from "@/components/intelligence/ActionCard"
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
        eyebrow="Acciones"
        title="Siguientes pasos recomendados"
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
      <div className="space-y-3">
        {ACTIONS.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            prepared={prepared.has(action.id)}
            onPrepare={() => toggle(action.id)}
          />
        ))}
      </div>
    </div>
  )
}
