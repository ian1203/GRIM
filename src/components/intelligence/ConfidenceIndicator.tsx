export function ConfidenceIndicator({ value }: { value: number }) {
  const label = value >= 80 ? "Evidencia alta" : value >= 60 ? "Evidencia media" : "Evidencia inicial"
  return (
    <div className="flex items-center gap-2" aria-label={`${label}, basada en una puntuación demostrativa de ${value}%`}>
      <span className="text-xs font-semibold text-text-muted">
        Nivel de evidencia
      </span>
      <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary">
        {label.replace("Evidencia ", "")}
      </span>
    </div>
  )
}
