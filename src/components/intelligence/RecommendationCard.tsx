import { Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/Card"

export function RecommendationCard({ children }: { children: string }) {
  return (
    <Card className="border-primary/20 bg-primary-soft p-5">
      <div className="flex gap-3">
        <Lightbulb
          aria-hidden="true"
          className="shrink-0 text-primary"
          size={20}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Recomendación
          </p>
          <p className="mt-1 text-[13px] leading-5 text-text-secondary">
            {children}
          </p>
        </div>
      </div>
    </Card>
  )
}
