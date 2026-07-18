import { MessageCircleQuestion, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/Button"

export function DecisionContinuity({
  memory,
  relationshipLabel = "Relacionado con",
  related,
  question,
}: {
  memory: string
  relationshipLabel?: string
  related: string[]
  question: string
}) {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <div className="mt-4 border-t border-border pt-4">
      <p className="text-xs font-medium text-text-muted">{memory}</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-text-secondary">
            {relationshipLabel}
          </span>
          {related.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
        <Button variant="ghost" onClick={() => setOpen(true)} className="px-0">
          <MessageCircleQuestion aria-hidden="true" size={16} />
          {question}
        </Button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-text-primary/30 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="context-question-title"
            className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-raised)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Conversación contextual
                </p>
                <h2
                  id="context-question-title"
                  className="mt-2 text-2xl font-semibold leading-8 text-text-primary"
                >
                  {question}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Cerrar conversación contextual"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-text-secondary hover:bg-surface-secondary"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <p className="mt-4 text-[15px] leading-6 text-text-secondary">
              GRIM conservará el contexto de esta decisión para profundizar en
              evidencia, alternativas y consecuencias. La conversación estará
              disponible en una siguiente etapa del producto.
            </p>
            <div className="mt-6 flex justify-end">
              <Button variant="primary" onClick={() => setOpen(false)}>
                Entendido
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
