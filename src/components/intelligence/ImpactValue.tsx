export function ImpactValue({
  value,
  tone = "neutral",
}: {
  value: string
  tone?: "positive" | "critical" | "neutral"
}) {
  const color =
    tone === "positive"
      ? "text-success"
      : tone === "critical"
        ? "text-critical"
        : "text-text-primary"
  return (
    <p className={`text-base font-bold tabular-nums ${color}`}>
      <span className="sr-only">Impacto económico: </span>
      {value}
    </p>
  )
}
