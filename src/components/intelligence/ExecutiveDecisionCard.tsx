import { ArrowRight, ShieldAlert } from "lucide-react"
import type { HomeSignal, Screen } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ConfidenceIndicator } from "./ConfidenceIndicator"
import { PriorityBadge } from "./PriorityBadge"

export function ExecutiveDecisionCard({
  signal,
  onNavigate,
}: {
  signal: HomeSignal
  onNavigate: (screen: Screen) => void
}) {
  return (
    <Card className="overflow-hidden border-critical/20">
      <div className="border-b border-critical/10 bg-critical-background px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <PriorityBadge priority={signal.priority} />
            <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              {signal.area}
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-critical">
            <ShieldAlert aria-hidden="true" size={16} />
            Decisión más importante del día
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
              Impacto económico en riesgo
            </p>
            <p className="mt-2 text-[40px] font-bold leading-[48px] tracking-[-0.035em] text-critical sm:text-5xl">
              {signal.impact}
            </p>
            <h2 className="mt-6 text-2xl font-semibold leading-8 text-text-primary">
              {signal.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-6 text-text-secondary">
              {signal.explanation}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-secondary p-5 lg:w-72">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Recomendación
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-6 text-text-primary">
              {signal.nextAction}
            </p>
            <div className="mt-4 border-t border-border pt-4">
              <ConfidenceIndicator value={signal.confidence} />
            </div>
            <Button
              variant="primary"
              onClick={() => onNavigate("ask")}
              className="mt-5 w-full"
            >
              Revisar decisión <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
