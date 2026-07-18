import { useState } from "react"
import { OPPORTUNITIES } from "@/data/mockData"
import { OpportunityCard } from "@/components/intelligence/OpportunityCard"
import { PageHeader } from "@/components/ui/PageHeader"

const filters = [
  "Todos",
  "Ventas",
  "Clientes",
  "Inventario",
  "Marketing",
  "Operaciones",
]
export function OpportunitiesScreen() {
  const [filter, setFilter] = useState("Todos")
  const items =
    filter === "Todos"
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((item) => item.area === filter)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Oportunidades"
        title="Valor que merece una decisión"
        description={`${OPPORTUNITIES.length} oportunidades demostrativas ordenadas por impacto esperado.`}
      />
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`min-h-11 shrink-0 rounded-lg border px-4 text-xs font-semibold ${
              filter === item
                ? "border-primary/20 bg-primary-soft text-primary"
                : "border-border bg-surface text-text-secondary hover:border-primary/30"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <OpportunityCard
            key={item.id}
            opportunity={item}
            showPriorityReason={item.id === "recover-clients"}
          />
        ))}
      </div>
    </div>
  )
}
