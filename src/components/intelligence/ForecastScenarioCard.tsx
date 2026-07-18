import type { ForecastScenario } from "@/types"
import { Card } from "@/components/ui/Card"

export function ForecastScenarioCard({
  scenario,
}: {
  scenario: ForecastScenario
}) {
  const tone = {
    success: "border-t-success text-success",
    primary: "border-t-primary text-primary",
    critical: "border-t-critical text-critical",
  }[scenario.tone]
  return (
    <Card className={`border-t-4 p-5 ${tone}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        {scenario.label}
      </p>
      <p className="mt-2 text-2xl font-bold tabular-nums">
        ${(scenario.value / 1000).toFixed(0)}K
      </p>
      <p className="mt-2 text-[13px] leading-5 text-text-secondary">
        {scenario.note}
      </p>
    </Card>
  )
}
