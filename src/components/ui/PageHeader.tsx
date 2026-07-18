import type { ReactNode } from "react"

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string
  title: string
  description: ReactNode
  meta?: ReactNode
}) {
  return (
    <header className="mb-8 sm:mb-10">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
        {meta}
      </div>
      <h1 className="text-[32px] font-bold leading-10 tracking-[-0.025em] text-text-primary">
        {title}
      </h1>
      <div className="mt-2 max-w-2xl text-[15px] leading-6 text-text-secondary">
        {description}
      </div>
    </header>
  )
}
