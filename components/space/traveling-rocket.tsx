"use client"

import { useId, useMemo } from "react"

interface TravelingRocketProps {
  startX: number
  startY: number
  endX: number
  endY: number
  duration?: number
  delay?: number
  size?: number
}

export function TravelingRocket({
  startX,
  startY,
  endX,
  endY,
  duration = 12,
  delay = 0,
  size = 30,
}: TravelingRocketProps) {
  const pathId = useId()

  // Calculate angle for rocket rotation
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)

  // Create a curved path between points
  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2

  // Use a deterministic random value based on coordinates to avoid hydration mismatch
  const curveOffset = useMemo(() => {
    const seed = startX + startY + endX + endY
    const pseudoRandom = Math.abs(Math.sin(seed))
    return 100 + pseudoRandom * 100
  }, [startX, startY, endX, endY])

  const controlX = midX + curveOffset * Math.cos(((angle + 90) * Math.PI) / 180)
  const controlY = midY + curveOffset * Math.sin(((angle + 90) * Math.PI) / 180)

  return (
    <svg className="absolute inset-0 pointer-events-none overflow-visible" style={{ width: "100%", height: "100%" }}>
      <defs>
        <path id={pathId} d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`} fill="none" />
      </defs>

      {/* Faint trail path */}
      <path
        d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        fill="none"
        stroke="rgba(255, 150, 50, 0.1)"
        strokeWidth="2"
        strokeDasharray="8,8"
      />

      {/* Rocket following the path */}
      <g
        style={{
          offsetPath: `path("M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}")`,
          animation: `rocket-travel ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <g transform={`rotate(${angle + 90})`}>
          {/* Rocket body */}
          <path
            d={`M 0 ${-size / 2} 
                C ${size / 4} ${-size / 2} ${size / 3} ${-size / 4} ${size / 3} 0 
                C ${size / 3} ${size / 4} ${size / 4} ${size / 3} 0 ${size / 2}
                C ${-size / 4} ${size / 3} ${-size / 3} ${size / 4} ${-size / 3} 0
                C ${-size / 3} ${-size / 4} ${-size / 4} ${-size / 2} 0 ${-size / 2}`}
            fill="url(#rocketBodyGrad)"
          />
          {/* Window */}
          <circle cx="0" cy={-size / 6} r={size / 8} fill="#1a2a4a" />
          <circle cx="0" cy={-size / 6} r={size / 12} fill="#3a5a8a" />
          {/* Fins */}
          <path
            d={`M ${-size / 3} ${size / 4} L ${-size / 2} ${size / 2} L ${-size / 4} ${size / 3} Z`}
            fill="#e74c3c"
          />
          <path d={`M ${size / 3} ${size / 4} L ${size / 2} ${size / 2} L ${size / 4} ${size / 3} Z`} fill="#e74c3c" />
          {/* Flame */}
          <ellipse cx="0" cy={size / 2 + size / 4} rx={size / 6} ry={size / 4} fill="#f39c12" opacity="0.9" />
          <ellipse cx="0" cy={size / 2 + size / 5} rx={size / 10} ry={size / 6} fill="#e74c3c" />
          <ellipse cx="0" cy={size / 2 + size / 6} rx={size / 16} ry={size / 8} fill="#f1c40f" />
        </g>
      </g>

      <defs>
        <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#c0c0c0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
