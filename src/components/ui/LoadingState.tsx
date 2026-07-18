import { LoaderCircle } from "lucide-react"

export function LoadingState({
  label = "Analizando información disponible",
}: {
  label?: string
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-[13px] text-text-secondary"
      role="status"
      aria-live="polite"
    >
      <LoaderCircle
        aria-hidden="true"
        className="animate-spin text-primary"
        size={18}
      />
      {label}
    </div>
  )
}
