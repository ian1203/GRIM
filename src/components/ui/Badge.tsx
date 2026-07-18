import type { ReactNode } from "react"

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "primary" | "success" | "warning" | "critical" | "info"
}) {
  const tones = {
    neutral: "border-border bg-surface-secondary text-text-secondary",
    primary: "border-primary/20 bg-primary-soft text-primary",
    success: "border-success/20 bg-success-background text-success",
    warning: "border-warning/20 bg-warning-background text-warning",
    critical: "border-critical/20 bg-critical-background text-critical",
    info: "border-info/20 bg-info-background text-info",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
