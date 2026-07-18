import { Cable, FileSearch } from "lucide-react"
import { useState } from "react"
import { CONNECTORS } from "@/data/mockData"
import { ConnectorCard } from "@/components/intelligence/ConnectorCard"
import { GrimInterpretation } from "@/components/intelligence/GrimInterpretation"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { PageHeader } from "@/components/ui/PageHeader"

export function ConnectorsScreen() {
  const [customRequested, setCustomRequested] = useState(false)
  const connected = CONNECTORS.filter((item) => item.connected),
    available = CONNECTORS.filter((item) => !item.connected)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Conectores"
        title="Fuentes de contexto"
        description="Estado demostrativo de las fuentes que pueden alimentar las recomendaciones de GRIM."
      />
      <GrimInterpretation priority="Contextual">
        {[
          "Ventas y pagos permiten medir impacto; inventario explica si una oportunidad puede atenderse.",
          "El contexto de clientes mejora la prioridad y precisión de cada recomendación.",
          "GRIM recomienda revisar primero la vigencia de las fuentes que sostienen decisiones críticas.",
        ]}
      </GrimInterpretation>
      <section aria-labelledby="connected-title">
        <h2 id="connected-title" className="mb-3 text-2xl font-semibold">
          Conectados
        </h2>
        <div className="space-y-3">
          {connected.map((item) => (
            <ConnectorCard key={item.id} connector={item} />
          ))}
        </div>
      </section>
      <section aria-labelledby="available-title" className="mt-8">
        <h2 id="available-title" className="mb-3 text-2xl font-semibold">
          Disponibles
        </h2>
        <div className="space-y-3">
          {available.map((item) => (
            <ConnectorCard key={item.id} connector={item} />
          ))}
        </div>
      </section>
      <section aria-labelledby="custom-title" className="mt-8">
        <Card className="border-primary/20 bg-primary-soft p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface text-primary">
              <Cable aria-hidden="true" size={21} />
            </div>
            <div className="flex-1">
              <h2 id="custom-title" className="text-base font-semibold">
                Integración personalizada
              </h2>
              <p className="mt-1 text-[13px] text-text-secondary">
                Solicita una evaluación de compatibilidad, permisos y alcance
                para un sistema propio.
              </p>
            </div>
            <Button
              onClick={() => setCustomRequested((value) => !value)}
              variant={customRequested ? "ghost" : "secondary"}
            >
              <FileSearch aria-hidden="true" size={16} />
              {customRequested
                ? "Evaluación preparada"
                : "Solicitar evaluación"}
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
