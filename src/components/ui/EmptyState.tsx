import { Inbox } from "lucide-react"
import { Card } from "./Card"

export function EmptyState({
  title = "Todavía no encontramos señales suficientes",
  description = "GRIM seguirá evaluando la información disponible.",
}: {
  title?: string
  description?: string
}) {
  return (
    <Card className="p-8 text-center">
      <Inbox aria-hidden="true" className="mx-auto mb-3 text-text-muted" />
      <h2 className="text-base font-semibold text-text-primary">{title}</h2>
      <p className="mt-1 text-[13px] text-text-secondary">{description}</p>
    </Card>
  )
}
