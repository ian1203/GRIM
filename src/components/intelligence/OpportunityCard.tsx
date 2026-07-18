import { ClipboardPlus } from "lucide-react"
import { useState } from "react"
import type { Opportunity } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ConfidenceIndicator } from "./ConfidenceIndicator"
import { ImpactValue } from "./ImpactValue"
import { PriorityBadge } from "./PriorityBadge"

export function OpportunityCard({
  opportunity,
  showPriorityReason = false,
}: {
  opportunity: Opportunity
  showPriorityReason?: boolean
}) {
  const [prepared, setPrepared] = useState(false)
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <PriorityBadge priority={opportunity.priority} />
            <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              {opportunity.area}
            </span>
          </div>
          <h2 className="mt-3 text-base font-semibold text-text-primary">
            {opportunity.title}
          </h2>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary">
            {opportunity.description}
          </p>
        </div>
        <div className="shrink-0 sm:text-right">
          <ImpactValue value={opportunity.impact} tone="positive" />
          <p className="mt-1 text-xs text-text-muted">Impacto esperado</p>
        </div>
      </div>
      {showPriorityReason && (
        <aside className="mt-4 rounded-xl bg-success-background px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-success">
            Por qué GRIM la prioriza
          </h3>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary">
            Combina alto impacto económico, una ventana de acción corta y una
            ejecución relativamente simple.
          </p>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary">
            Postergarla reduce la probabilidad de recuperar relaciones
            comerciales antes de ampliar esfuerzos en otros frentes.
          </p>
        </aside>
      )}
      <div className="mt-5 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
          <ConfidenceIndicator value={opportunity.confidence} />
          <span className="text-xs text-text-secondary">
            <strong>Horizonte:</strong> {opportunity.time}
          </span>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <p className="text-[13px] font-medium text-text-primary">
            {opportunity.action}
          </p>
          <Button
            onClick={() => setPrepared((value) => !value)}
            variant={prepared ? "ghost" : "secondary"}
          >
            <ClipboardPlus aria-hidden="true" size={16} />
            {prepared ? "Tarea preparada" : "Preparar tarea"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
