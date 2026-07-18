import type { HTMLAttributes, ReactNode } from "react"

export function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-[var(--shadow-subtle)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
