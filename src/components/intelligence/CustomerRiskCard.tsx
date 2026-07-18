import { Contact } from "lucide-react"
import { useState } from "react"
import type { Customer } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { PriorityBadge } from "./PriorityBadge"

export function CustomerRiskCard({ customer }: { customer: Customer }) {
  const [prepared, setPrepared] = useState(false)
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold text-text-primary">
              {customer.name}
            </h2>
            <span className="rounded-full border border-border px-2 py-0.5 text-xs font-medium text-text-muted">
              {customer.segment}
            </span>
          </div>
          <p className="mt-1 text-[13px] text-text-secondary">
            Última compra hace {customer.lastPurchase}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-base font-bold tabular-nums text-text-primary">
            {customer.annualValue}
          </p>
          <p className="text-xs text-text-muted">Valor anual</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 rounded-xl bg-surface-secondary p-4 sm:grid-cols-[auto_1fr]">
        <div>
          <p className="text-xs font-semibold text-text-muted">
            Riesgo estimado
          </p>
          <div className="mt-2 flex items-center gap-2">
            <PriorityBadge priority={customer.risk} />
            <span className="text-sm font-bold tabular-nums text-text-primary">
              {customer.abandonment}%
            </span>
          </div>
        </div>
        <div className="sm:border-l sm:border-border sm:pl-4">
          <p className="text-xs font-semibold text-text-muted">
            Por qué necesita atención
          </p>
          <p className="mt-1 text-[13px] text-text-secondary">
            {customer.cause}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] font-medium text-text-primary">
          {customer.recommendation}
        </p>
        <Button
          className="shrink-0"
          onClick={() => setPrepared((value) => !value)}
          variant={prepared ? "ghost" : "secondary"}
        >
          <Contact aria-hidden="true" size={16} />
          {prepared ? "Contacto preparado" : "Preparar contacto"}
        </Button>
      </div>
    </Card>
  )
}
