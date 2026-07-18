import { ClipboardPlus, Send, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { INITIAL_MESSAGES } from "@/data/mockData"
import type { AssistantMessage } from "@/types"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { LoadingState } from "@/components/ui/LoadingState"
import { ConfidenceIndicator } from "@/components/intelligence/ConfidenceIndicator"
import { GrimInterpretation } from "@/components/intelligence/GrimInterpretation"
import { ImpactValue } from "@/components/intelligence/ImpactValue"

const suggestions = [
  "¿Qué clientes debo recuperar?",
  "¿Qué productos impulsar este mes?",
  "¿Cómo proteger el margen operativo?",
]
const history = [
  "¿Por qué bajaron las ventas?",
  "¿Qué clientes debo recuperar?",
  "Análisis de margen por categoría",
]

export function AskScreen() {
  const [messages, setMessages] =
      useState<AssistantMessage[]>(INITIAL_MESSAGES),
    [input, setInput] = useState(""),
    [loading, setLoading] = useState(false),
    [activeHistory, setActiveHistory] = useState(0),
    [preparedMessages, setPreparedMessages] = useState<Set<string>>(new Set())
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )
  const send = () => {
    const question = input.trim()
    if (!question || loading) return
    setMessages((current) => [
      ...current,
      { id: `q-${Date.now()}`, role: "user", summary: question },
    ])
    setInput("")
    setLoading(true)
    timeoutRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          summary:
            "La recuperación de clientes concentra el mayor impacto inmediato.",
          evidence: [
            "23 clientes Mid-Market no recibieron seguimiento en 60 días.",
            "Ocho de ellos superan $20,000 de valor anual.",
            "El segmento comparable conserva 91% de retención.",
          ],
          impact: "$142,000 de valor potencial",
          recommendation:
            "Preparar contacto para los ocho clientes de mayor valor y revisar el resultado antes de ampliar la campaña.",
          confidence: 82,
        },
      ])
      setLoading(false)
    }, 900)
  }
  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
          Conversaciones de muestra
        </p>
        <div className="space-y-1">
          {history.map((item, index) => (
            <button
              key={item}
              onClick={() => {
                setActiveHistory(index)
                setInput(item)
              }}
              aria-current={activeHistory === index ? "true" : undefined}
              className={`w-full rounded-xl px-3 py-3 text-left text-[13px] transition-colors ${
                activeHistory === index
                  ? "bg-primary-soft font-semibold text-primary"
                  : "text-text-secondary hover:bg-surface-secondary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>
      <section aria-labelledby="ask-title">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Asesor ejecutivo
          </p>
          <h1
            id="ask-title"
            className="mt-2 text-[32px] font-bold leading-10 tracking-[-0.025em]"
          >
            Preguntar
          </h1>
          <p className="mt-2 text-[15px] text-text-secondary">
            Profundiza en una decisión específica cuando el contexto preparado
            por GRIM no sea suficiente.
          </p>
        </header>
        <GrimInterpretation priority="Contextual">
          {[
            "GRIM ya interpreta y prioriza información en cada pantalla del producto.",
            "Usa este espacio para contrastar una hipótesis, explorar evidencia o convertir una inquietud propia en una decisión.",
          ]}
        </GrimInterpretation>
        <div className="space-y-5">
          {messages.map((message) =>
            message.role === "user" ? (
              <div key={message.id} className="flex justify-end">
                <div className="max-w-xl rounded-2xl rounded-tr-sm bg-primary px-5 py-3 text-[15px] leading-6 text-white">
                  {message.summary}
                </div>
              </div>
            ) : (
              <Card key={message.id} className="max-w-2xl p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-2 text-primary">
                  <Sparkles aria-hidden="true" size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Respuesta de GRIM
                  </span>
                </div>
                <div className="space-y-5">
                  <section>
                    <h2 className="text-base font-semibold">
                      Resumen ejecutivo
                    </h2>
                    <p className="mt-1 text-[13px] leading-5 text-text-secondary">
                      {message.summary}
                    </p>
                  </section>
                  {message.evidence && (
                    <section>
                      <h2 className="text-base font-semibold">Evidencia</h2>
                      <ul className="mt-2 space-y-2">
                        {message.evidence.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-[13px] leading-5 text-text-secondary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <section className="rounded-xl bg-surface-secondary p-4">
                      <h2 className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                        Impacto
                      </h2>
                      <div className="mt-2">
                        <ImpactValue
                          value={message.impact ?? "Por estimar"}
                          tone="critical"
                        />
                      </div>
                    </section>
                    <section className="rounded-xl bg-primary-soft p-4">
                      <h2 className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Confianza
                      </h2>
                      <div className="mt-2">
                        <ConfidenceIndicator value={message.confidence ?? 0} />
                      </div>
                    </section>
                  </div>
                  {message.recommendation && (
                    <section>
                      <h2 className="text-base font-semibold">Recomendación</h2>
                      <p className="mt-1 text-[13px] leading-5 text-text-secondary">
                        {message.recommendation}
                      </p>
                    </section>
                  )}
                  <Button
                    onClick={() =>
                      setPreparedMessages((current) => {
                        const next = new Set(current)
                        if (next.has(message.id)) next.delete(message.id)
                        else next.add(message.id)
                        return next
                      })
                    }
                    variant={
                      preparedMessages.has(message.id) ? "ghost" : "secondary"
                    }
                  >
                    <ClipboardPlus aria-hidden="true" size={16} />
                    {preparedMessages.has(message.id)
                      ? "Tarea preparada"
                      : "Preparar tarea"}
                  </Button>
                </div>
              </Card>
            ),
          )}
          {loading && (
            <LoadingState label="GRIM está contrastando las señales disponibles" />
          )}
        </div>
        <div className="sticky bottom-0 mt-6 border-t border-border bg-background/95 py-4 backdrop-blur">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="min-h-11 rounded-full border border-border bg-surface px-4 text-xs font-semibold text-text-secondary hover:border-primary/30 hover:text-primary"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <label
            htmlFor="business-question"
            className="mb-2 block text-[13px] font-semibold text-text-primary"
          >
            Pregunta sobre tu negocio
          </label>
          <div className="flex gap-2">
            <input
              id="business-question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") send()
              }}
              placeholder="Ejemplo: ¿qué cliente requiere atención primero?"
              className="min-h-11 min-w-0 flex-1 rounded-xl border border-border bg-surface px-4 text-[15px] text-text-primary placeholder:text-text-muted focus:border-primary"
            />
            <Button
              variant="primary"
              onClick={send}
              aria-label="Enviar pregunta"
              disabled={loading || !input.trim()}
            >
              <Send aria-hidden="true" size={18} />
              <span className="hidden sm:inline">Enviar</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
