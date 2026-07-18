import { ArrowRight } from "lucide-react"
import type { HomeSignal, Screen } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ConfidenceIndicator } from "./ConfidenceIndicator"
import { ImpactValue } from "./ImpactValue"
import { PriorityBadge } from "./PriorityBadge"

export function InsightCard({
  signal,
  onNavigate,
}: {
  signal: HomeSignal
  onNavigate: (screen: Screen) => void
}) {
  return (
    <Card
      className={`p-5 sm:p-6 ${
        signal.priority === "critical"
          ? "border-l-4 border-l-critical"
          : signal.priority === "opportunity"
            ? "border-l-4 border-l-success"
            : ""
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <PriorityBadge priority={signal.priority} />
            <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              {signal.area}
            </span>
          </div>
          <h2 className="text-base font-semibold leading-6 text-text-primary">
            {signal.title}
          </h2>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary">
            {signal.explanation}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <ConfidenceIndicator value={signal.confidence} />
            <span className="text-xs text-text-secondary">
              <strong className="font-semibold">Siguiente:</strong>{" "}
              {signal.nextAction}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-stretch gap-3 sm:block sm:text-right">
          <ImpactValue
            value={signal.impact}
            tone={signal.priority === "opportunity" ? "positive" : "critical"}
          />
          <Button onClick={() => onNavigate("ask")} className="mt-0 sm:mt-4">
            Ver explicación <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
