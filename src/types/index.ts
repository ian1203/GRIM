export type Screen = "home" | "ask" | "opportunities" | "customers" | "products" | "forecast" | "actions" | "connectors"
export type Priority = "critical" | "high" | "medium" | "opportunity" | "low"
export type ProductStatus = "growing" | "risk" | "opportunity" | "stable"
export type ConfidenceLevel = "Alta" | "Media" | "Inicial"

export interface HomeSignal {
  id: string
  priority: Priority
  title: string
  explanation: string
  impact: string
  area: string
  confidence: number
  nextAction: string
}
export interface Opportunity {
  id: string
  area: string
  priority: Priority
  title: string
  description: string
  impact: string
  confidence: number
  time: string
  action: string
}
export interface Customer {
  id: string
  name: string
  segment: string
  risk: Exclude<Priority, "opportunity">
  lastPurchase: string
  annualValue: string
  abandonment: number
  cause: string
  recommendation: string
}
export interface ProductSignal {
  id: string
  name: string
  category: string
  status: ProductStatus
  trend: string
  velocity: string
  margin: string
  inventory: string
  recommendation: string
  spark: number[]
}
export interface ForecastScenario {
  id: string
  label: string
  value: number
  note: string
  tone: "success" | "primary" | "critical"
}
export interface RecommendedAction {
  id: number
  priority: Priority
  title: string
  description: string
  impact: string
  confidence: number
  time: string
  owner: string
  status: string
  cta: string
}
export interface Connector {
  id: string
  name: string
  description: string
  connected: boolean
  lastSync?: string
  permissions?: string
}
export interface AssistantMessage {
  id: string
  role: "user" | "assistant"
  summary: string
  evidence?: string[]
  impact?: string
  recommendation?: string
  confidence?: number
}
