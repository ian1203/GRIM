import type { ProductSignal } from "@/types"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { Sparkline } from "./Sparkline"

export function ProductSignalCard({ product }: { product: ProductSignal }) {
  const config = {
    growing: { label: "En crecimiento", tone: "success" as const },
    risk: { label: "En riesgo", tone: "critical" as const },
    opportunity: { label: "Oportunidad", tone: "warning" as const },
    stable: { label: "Estable", tone: "neutral" as const },
  }[product.status]
  const sparkTone =
    product.status === "growing" || product.status === "opportunity"
      ? "positive"
      : product.status === "risk"
        ? "critical"
        : "neutral"
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            {product.category}
          </p>
          <h2 className="mt-1 text-base font-semibold text-text-primary">
            {product.name}
          </h2>
          <div className="mt-3">
            <Badge tone={config.tone}>{config.label}</Badge>
          </div>
        </div>
        <div className="text-right">
          <Sparkline data={product.spark} tone={sparkTone} />
          <p
            className={`mt-1 text-sm font-bold tabular-nums ${
              sparkTone === "positive"
                ? "text-success"
                : sparkTone === "critical"
                  ? "text-critical"
                  : "text-text-secondary"
            }`}
          >
            {product.trend}
          </p>
          <span className="sr-only">Tendencia durante catorce periodos</span>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-3 gap-3 rounded-xl bg-surface-secondary p-4">
        {[
          ["Velocidad", product.velocity],
          ["Margen", product.margin],
          ["Inventario", product.inventory],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-semibold text-text-muted">{label}</dt>
            <dd className="mt-1 text-[13px] font-semibold text-text-primary">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[13px] text-text-secondary">
        <strong className="text-text-primary">Recomendación:</strong>{" "}
        {product.recommendation}
      </p>
    </Card>
  )
}
