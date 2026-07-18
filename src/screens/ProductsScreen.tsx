import { useState } from "react"
import { PRODUCTS } from "@/data/mockData"
import type { ProductStatus } from "@/types"
import { ProductSignalCard } from "@/components/intelligence/ProductSignalCard"
import { PageHeader } from "@/components/ui/PageHeader"
interface ProductFilter {
  label: string
  value: ProductStatus | "all"
}

const filters: ProductFilter[] = [
  { label: "Todos", value: "all" },
  { label: "En crecimiento", value: "growing" },
  { label: "En riesgo", value: "risk" },
  { label: "Oportunidad", value: "opportunity" },
  { label: "Estables", value: "stable" },
]
export function ProductsScreen() {
  const [filter, setFilter] = useState<ProductStatus | "all">("all")
  const items =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.status === filter)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Cambio estructural"
        title="Un producto cambió el comportamiento esperado del negocio."
        description="Productos que requieren una decisión, no el catálogo completo."
      />
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            aria-pressed={filter === item.value}
            className={`min-h-11 shrink-0 rounded-lg border px-4 text-xs font-semibold ${
              filter === item.value
                ? "border-primary/20 bg-primary-soft text-primary"
                : "border-border bg-surface text-text-secondary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <ProductSignalCard
            key={item.id}
            product={item}
            showGrimReading={item.id === "product-x"}
            continuity={
              item.id === "product-x"
                ? {
                    memory:
                      "Esta señal fue promovida desde el análisis matutino.",
                    related: [
                      "Grupo Comercial Norte",
                      "Escenario esperado",
                      "Acción #1",
                    ],
                    question: "¿Qué explica este cambio?",
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}
