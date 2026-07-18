import { CUSTOMERS } from "@/data/mockData"
import { CustomerRiskCard } from "@/components/intelligence/CustomerRiskCard"
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
      <div className="space-y-3">
        {CUSTOMERS.map((customer) => (
          <CustomerRiskCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  )
}
