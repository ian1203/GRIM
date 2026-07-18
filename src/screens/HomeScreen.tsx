import { ArrowRight, CalendarDays } from "lucide-react"
import { HOME_SIGNALS } from "@/data/mockData"
import type { Screen } from "@/types"
import { ExecutiveDecisionCard } from "@/components/intelligence/ExecutiveDecisionCard"
import { SecondaryDecisionCard } from "@/components/intelligence/SecondaryDecisionCard"
import { Button } from "@/components/ui/Button"

export function HomeScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const primaryDecision = HOME_SIGNALS[0]
  const secondaryDecisions = HOME_SIGNALS.slice(1, 3)
  const remainingSignals = HOME_SIGNALS.length - 3

  return (
    <div className="mx-auto max-w-5xl">
      <header className="mb-8 sm:mb-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Briefing ejecutivo de hoy
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-text-muted">
            <CalendarDays aria-hidden="true" size={15} />
            Actualizado hoy
          </span>
        </div>
        <h1 className="max-w-4xl text-[32px] font-bold leading-10 tracking-[-0.03em] text-text-primary sm:text-[40px] sm:leading-[48px]">
          Hoy puedes proteger $75,700 en riesgo y capturar $62,000 en
          oportunidades.
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-6 text-text-secondary">
          Empieza por la caída de Producto X. Es la señal con mayor urgencia,
          impacto recurrente y evidencia disponible.
        </p>
      </header>

      <section aria-labelledby="primary-decision-title">
        <h2 id="primary-decision-title" className="sr-only">
          Decisión principal
        </h2>
        <ExecutiveDecisionCard
          signal={primaryDecision}
          onNavigate={onNavigate}
        />
      </section>

      <section aria-labelledby="secondary-decisions-title" className="mt-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="secondary-decisions-title"
              className="text-2xl font-semibold leading-8 text-text-primary"
            >
              Después de la decisión principal
            </h2>
            <p className="mt-1 text-[13px] text-text-secondary">
              Dos señales que también merecen atención durante el día.
            </p>
          </div>
          <span className="text-xs font-medium text-text-muted">
            Ordenadas por impacto y urgencia
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {secondaryDecisions.map((signal) => (
            <article key={signal.id}>
              <SecondaryDecisionCard
                signal={signal}
                onNavigate={onNavigate}
              />
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-surface-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] font-semibold text-text-primary">
            Hay {remainingSignals} señales adicionales en segundo plano.
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Revísalas cuando hayas atendido las decisiones prioritarias.
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={() => onNavigate("opportunities")}
          className="shrink-0"
        >
          Explorar el resto <ArrowRight aria-hidden="true" size={16} />
        </Button>
      </footer>
    </div>
  )
}
