import { ArrowRight } from "lucide-react"
import type { HomeSignal, Screen } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ConfidenceIndicator } from "./ConfidenceIndicator"
import { ImpactValue } from "./ImpactValue"
import { PriorityBadge } from "./PriorityBadge"

export function SecondaryDecisionCard({
  signal,
  onNavigate,
}: {
  signal: HomeSignal
  onNavigate: (screen: Screen) => void
}) {
  const positive = signal.priority === "opportunity"
  return (
    <Card className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <PriorityBadge priority={signal.priority} />
        <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          {signal.area}
        </span>
      </div>
      <div className="mt-5">
        <ImpactValue
          value={signal.impact}
          tone={positive ? "positive" : "critical"}
        />
        <h3 className="mt-3 text-base font-semibold leading-6 text-text-primary">
          {signal.title}
        </h3>
        <p className="mt-2 text-[13px] leading-5 text-text-secondary">
          {signal.explanation}
        </p>
      </div>
      <div className="mt-auto pt-5">
        <div className="border-t border-border pt-4">
          <ConfidenceIndicator value={signal.confidence} />
          <p className="mt-3 text-[13px] leading-5 text-text-secondary">
            <strong className="font-semibold text-text-primary">
              Siguiente:
            </strong>{" "}
            {signal.nextAction}
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={() => onNavigate("ask")}
          className="mt-3 px-0"
        >
          Entender la señal <ArrowRight aria-hidden="true" size={16} />
        </Button>
      </div>
    </Card>
  )
}
