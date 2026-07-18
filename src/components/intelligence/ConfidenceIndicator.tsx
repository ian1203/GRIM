export function ConfidenceIndicator({ value }: { value: number }) {
  const label = value >= 80 ? "Alta" : value >= 60 ? "Media" : "Inicial"
  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Confianza ${label}, ${value}%`}
    >
      <span className="text-xs font-semibold text-text-secondary">
        Confianza {label}
      </span>
      <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold tabular-nums text-primary">
        {value}%
      </span>
    </div>
  )
}
