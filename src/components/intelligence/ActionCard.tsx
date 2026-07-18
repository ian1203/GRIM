import { CheckCircle2 } from "lucide-react"
import type { RecommendedAction } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ConfidenceIndicator } from "./ConfidenceIndicator"
import { ImpactValue } from "./ImpactValue"
import { PriorityBadge } from "./PriorityBadge"

export function ActionCard({
  action,
  prepared,
  onPrepare,
}: {
  action: RecommendedAction
  prepared: boolean
  onPrepare: () => void
}) {
  return (
    <Card
      className={`p-5 sm:p-6 ${
        prepared ? "border-success/30 bg-success-background/40" : ""
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <PriorityBadge priority={action.priority} />
            <span className="text-xs font-semibold text-text-muted">
              {prepared ? "Preparada localmente" : action.status}
            </span>
          </div>
          <h2 className="mt-3 text-base font-semibold text-text-primary">
            {action.title}
          </h2>
          <p className="mt-2 text-[13px] text-text-secondary">
            {action.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <ConfidenceIndicator value={action.confidence} />
            <span className="text-xs text-text-secondary">
              <strong>Responsable:</strong> {action.owner}
            </span>
            <span className="text-xs text-text-secondary">
              <strong>Tiempo:</strong> {action.time}
            </span>
          </div>
        </div>
        <div className="shrink-0 sm:text-right">
          <ImpactValue value={action.impact} tone="positive" />
          <Button
            onClick={onPrepare}
            variant={prepared ? "ghost" : "primary"}
            className="mt-4"
          >
            <CheckCircle2 aria-hidden="true" size={16} />
            {prepared ? "Quitar preparación" : action.cta}
          </Button>
        </div>
      </div>
    </Card>
  )
}
