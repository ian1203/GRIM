import { RefreshCw, Settings2 } from "lucide-react"
import { useState } from "react"
import type { Connector } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export function ConnectorCard({ connector }: { connector: Connector }) {
  const [reviewed, setReviewed] = useState(false)
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Settings2 aria-hidden="true" size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-text-primary">
              {connector.name}
            </h3>
            <Badge tone={connector.connected ? "success" : "neutral"}>
              {connector.connected ? "Conectado" : "Disponible"}
            </Badge>
          </div>
          <p className="mt-1 text-[13px] text-text-secondary">
            {connector.description}
          </p>
          {connector.connected && (
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
              <span>Última sincronización: {connector.lastSync}</span>
              <span>{connector.permissions}</span>
            </div>
          )}
        </div>
        <Button
          className="shrink-0"
          onClick={() => setReviewed((value) => !value)}
          variant={reviewed ? "ghost" : "secondary"}
        >
          <RefreshCw aria-hidden="true" size={16} />
          {reviewed
            ? "Revisión preparada"
            : connector.connected
              ? "Revisar conexión"
              : "Evaluar conexión"}
        </Button>
      </div>
    </Card>
  )
}
