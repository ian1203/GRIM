import { ArrowRight } from "lucide-react"
import { HOME_SIGNALS } from "@/data/mockData"
import type { Screen } from "@/types"
import { InsightCard } from "@/components/intelligence/InsightCard"
import { Button } from "@/components/ui/Button"

export function HomeScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const hour = new Date().getHours(),
    greeting =
      hour < 12 ? "Buenos días" : hour < 19 ? "Buenas tardes" : "Buenas noches"
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-10 sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Copiloto ejecutivo
        </p>
        <h1 className="text-[32px] font-bold leading-10 tracking-[-0.025em] text-text-primary sm:text-[40px] sm:leading-[48px]">
          {greeting}, Gerardo.
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-text-secondary">
          GRIM detectó{" "}
          <strong className="font-semibold text-text-primary">5 señales</strong>{" "}
          que requieren tu atención hoy.
        </p>
      </header>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
            Qué necesita tu atención hoy
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Prioridades demostrativas ordenadas por impacto y urgencia
          </p>
        </div>
        <span className="text-xs font-medium text-text-muted">
          Actualizado hoy
        </span>
      </div>
      <div className="space-y-3">
        {HOME_SIGNALS.map((signal) => (
          <InsightCard
            key={signal.id}
            signal={signal}
            onNavigate={onNavigate}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button variant="ghost" onClick={() => onNavigate("opportunities")}>
          Ver oportunidades <ArrowRight aria-hidden="true" size={16} />
        </Button>
      </div>
    </div>
  )
}
