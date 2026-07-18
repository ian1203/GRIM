import { Menu } from "lucide-react"
import { useState, type ReactNode } from "react"
import type { Screen } from "@/types"
import { Sidebar } from "@/components/navigation/Sidebar"

export function AppShell({
  current,
  onNavigate,
  children,
}: {
  current: Screen
  onNavigate: (screen: Screen) => void
  children: ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-text-primary">
      <Sidebar
        current={current}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={onNavigate}
      />
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-surface/95 px-4 backdrop-blur lg:hidden">
          <button
            aria-label="Abrir navegación"
            onClick={() => setMenuOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-lg text-text-secondary hover:bg-surface-secondary"
          >
            <Menu aria-hidden="true" size={22} />
          </button>
          <span className="ml-3 text-sm font-bold">GRIM Analytics</span>
        </header>
        <main
          id="main-content"
          className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12"
        >
          {children}
        </main>
      </div>
    </div>
  )
}
