import { CalendarClock, ShieldCheck } from "lucide-react"
import { FORECAST_SCENARIOS } from "@/data/mockData"
import { ForecastScenarioCard } from "@/components/intelligence/ForecastScenarioCard"
import { RecommendationCard } from "@/components/intelligence/RecommendationCard"
import { Card } from "@/components/ui/Card"
import { PageHeader } from "@/components/ui/PageHeader"

export function ForecastScreen() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Pronóstico"
        title="Escenarios de ingreso"
        description="Una estimación orientativa basada en los datos mock disponibles; no representa una garantía de resultado."
        meta={
          <span className="inline-flex items-center gap-2 text-xs font-medium text-text-muted">
            <CalendarClock aria-hidden="true" size={15} />
            Actualizado hoy, 09:45
          </span>
        }
      />
      <div className="grid gap-3 md:grid-cols-3">
        {FORECAST_SCENARIOS.map((scenario) => (
          <ForecastScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.3fr]">
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <ShieldCheck
              aria-hidden="true"
              className="text-primary"
              size={18}
            />
            <h2 className="text-base font-semibold">Confianza media</h2>
          </div>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary">
            Las señales de ventas e inventario son consistentes. Falta confirmar
            el comportamiento de cuatro cuentas B2B.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-text-muted">
            Rango esperado
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums text-text-primary">
            $326K–$378K
          </p>
        </Card>
        <Card className="p-5">
          <h2 className="text-base font-semibold">Principales supuestos</h2>
          <ul className="mt-3 space-y-2">
            {[
              "La Categoría Hogar mantiene su velocidad actual.",
              "Producto X no acelera su caída.",
              "Las cuentas B2B reanudan pedidos de forma parcial.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[13px] text-text-secondary"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="mt-4">
        <RecommendationCard>
          Preparar las acciones sobre Categoría Hogar y clientes inactivos
          elevaría el escenario esperado de $352K a aproximadamente $388K.
          Validar primero capacidad de inventario.
        </RecommendationCard>
      </div>
    </div>
  )
}
