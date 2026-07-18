import type { ButtonHTMLAttributes, ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost" | "critical"

export function Button({
  variant = "secondary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}) {
  const variants: Record<Variant, string> = {
    primary: "border-primary bg-primary text-white hover:bg-primary-hover",
    secondary:
      "border-border bg-surface text-text-secondary hover:border-primary/30 hover:bg-primary-soft hover:text-primary",
    ghost:
      "border-transparent bg-transparent text-text-secondary hover:bg-surface-secondary hover:text-text-primary",
    critical: "border-critical bg-critical text-white hover:opacity-90",
  }
  return (
    <button
      type={props.type ?? "button"}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-[13px] font-semibold transition-colors disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
