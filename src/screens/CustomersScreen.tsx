import { CUSTOMERS } from "@/data/mockData"
import { CustomerRiskCard } from "@/components/intelligence/CustomerRiskCard"
import { GrimInterpretation } from "@/components/intelligence/GrimInterpretation"
import { PageHeader } from "@/components/ui/PageHeader"
export function CustomersScreen() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Clientes"
        title="Clientes que requieren contexto"
        description={
          <>
            Solo los{" "}
            <strong className="font-semibold text-text-primary">
              cinco clientes
            </strong>{" "}
            con señales relevantes de 248 activos.
          </>
        }
      />
      <GrimInterpretation priority="Crítica">
        {[
          "Grupo Comercial Norte concentra el mayor riesgo entre los clientes premium.",
          "La posibilidad de recuperación disminuye si el contacto se posterga durante la próxima semana.",
          "GRIM recomienda priorizar esta conversación antes de iniciar campañas masivas.",
        ]}
      </GrimInterpretation>
      <div className="space-y-3">
        {CUSTOMERS.map((customer) => (
          <CustomerRiskCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  )
}
