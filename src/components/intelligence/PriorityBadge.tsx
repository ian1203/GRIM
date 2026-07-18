import { CircleAlert, CircleDot, TrendingUp } from "lucide-react"
import type { Priority } from "@/types"

export function PriorityBadge({ priority }: { priority: Priority }) {
  const config = {
    critical: {
      label: "Crítica",
      cls: "border-critical/20 bg-critical-background text-critical",
      Icon: CircleAlert,
    },
    high: {
      label: "Alta",
      cls: "border-warning/20 bg-warning-background text-warning",
      Icon: CircleAlert,
    },
    medium: {
      label: "Media",
      cls: "border-info/20 bg-info-background text-info",
      Icon: CircleDot,
    },
    opportunity: {
      label: "Oportunidad",
      cls: "border-success/20 bg-success-background text-success",
      Icon: TrendingUp,
    },
    low: {
      label: "Baja",
      cls: "border-border bg-surface-secondary text-text-secondary",
      Icon: CircleDot,
    },
  }[priority]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${config.cls}`}
    >
      <config.Icon aria-hidden="true" size={13} />
      {config.label}
    </span>
  )
}
