import {
  Home,
  MessageSquareText,
  Sparkles,
  Users,
  PackageSearch,
  ChartNoAxesCombined,
  ListChecks,
  PlugZap,
  X,
} from "lucide-react"
import type { Screen } from "@/types"

const navigation = [
  { id: "home" as const, label: "Inicio", Icon: Home },
  { id: "ask" as const, label: "Preguntar", Icon: MessageSquareText },
  { id: "opportunities" as const, label: "Oportunidades", Icon: Sparkles },
  { id: "customers" as const, label: "Clientes", Icon: Users },
  { id: "products" as const, label: "Productos", Icon: PackageSearch },
  { id: "forecast" as const, label: "Pronóstico", Icon: ChartNoAxesCombined },
  { id: "actions" as const, label: "Acciones", Icon: ListChecks },
  { id: "connectors" as const, label: "Conectores", Icon: PlugZap },
]

export function Sidebar({
  current,
  open,
  onClose,
  onNavigate,
}: {
  current: Screen
  open: boolean
  onClose: () => void
  onNavigate: (screen: Screen) => void
}) {
  return (
    <>
      <button
        aria-label="Cerrar navegación"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-text-primary/30 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Navegación principal"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform duration-200 lg:visible lg:translate-x-0 ${
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-white">
              G
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">
                GRIM Analytics
              </p>
              <p className="text-xs text-text-muted">Revenue Intelligence</p>
            </div>
          </div>
          <button
            aria-label="Cerrar navegación"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-lg text-text-secondary hover:bg-surface-secondary lg:hidden"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navigation.map(({ id, label, Icon }) => {
            const active = current === id
            return (
              <button
                key={id}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  onNavigate(id)
                  onClose()
                }}
                className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-[13px] font-semibold transition-colors ${
                  active
                    ? "bg-primary-soft text-primary"
                    : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                }`}
              >
                <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                {label}
              </button>
            )
          })}
        </nav>
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-xl bg-surface-secondary p-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              G
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-text-primary">
                Gerardo
              </p>
              <p className="truncate text-xs text-text-muted">
                Director General
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
