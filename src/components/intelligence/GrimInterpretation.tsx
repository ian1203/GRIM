import { Sparkles } from "lucide-react"
import { Card } from "@/components/ui/Card"

export function GrimInterpretation({
  priority,
  children,
}: {
  priority: "Crítica" | "Alta" | "Media" | "Contextual"
  children: string[]
}) {
  return (
    <section aria-labelledby="grim-interpretation-title" className="mb-8">
      <Card className="border-primary/20 bg-primary-soft p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface text-primary shadow-[var(--shadow-subtle)]">
            <Sparkles aria-hidden="true" size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2
                id="grim-interpretation-title"
                className="text-base font-semibold text-text-primary"
              >
                Interpretación de GRIM
              </h2>
              <span className="rounded-full border border-primary/20 bg-surface px-2.5 py-1 text-xs font-semibold text-primary">
                Prioridad {priority.toLowerCase()}
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              {children.slice(0, 3).map((sentence) => (
                <p
                  key={sentence}
                  className="text-[13px] leading-5 text-text-secondary"
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
