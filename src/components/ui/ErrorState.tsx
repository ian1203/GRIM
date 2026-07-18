import { CircleAlert } from "lucide-react"
import { Card } from "./Card"

export function ErrorState({
  title = "Necesita atención",
  description = "No pudimos completar esta consulta. Tu trabajo permanece disponible.",
}: {
  title?: string
  description?: string
}) {
  return (
    <Card
      className="border-critical/20 bg-critical-background p-5"
      role="alert"
    >
      <div className="flex gap-3">
        <CircleAlert
          aria-hidden="true"
          className="shrink-0 text-critical"
          size={20}
        />
        <div>
          <h2 className="text-base font-semibold text-text-primary">{title}</h2>
          <p className="mt-1 text-[13px] text-text-secondary">{description}</p>
        </div>
      </div>
    </Card>
  )
}
