export function Sparkline({
  data,
  tone,
}: {
  data: number[]
  tone: "positive" | "critical" | "neutral"
}) {
  const width = 96,
    height = 32,
    min = Math.min(...data),
    max = Math.max(...data),
    range = max - min || 1
  const points = data
    .map(
      (value, index) =>
        `${(index / (data.length - 1)) * width},${height - ((value - min) / range) * (height - 6) - 3}`,
    )
    .join(" ")
  const stroke =
    tone === "positive"
      ? "var(--success)"
      : tone === "critical"
        ? "var(--critical)"
        : "var(--primary)"
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <polyline
        points={points}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
