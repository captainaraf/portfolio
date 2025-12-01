"use client"

import { motion } from "framer-motion"

interface PlanetProps {
  className?: string
  size?: number
  color?: string
  ringColor?: string
  hasRing?: boolean
}

export function Planet({
  className,
  size = 100,
  color = "#4a90d9",
  ringColor = "#7ab3e0",
  hasRing = false,
}: PlanetProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 60,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <svg
        width={size * (hasRing ? 2 : 1)}
        height={size}
        viewBox={`0 0 ${hasRing ? 200 : 100} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {hasRing && (
          <ellipse cx="100" cy="50" rx="90" ry="20" stroke={ringColor} strokeWidth="4" fill="none" opacity="0.6" />
        )}
        <circle cx={hasRing ? 100 : 50} cy="50" r="40" fill={`url(#planetGradient-${color})`} />
        <ellipse cx={hasRing ? 90 : 40} cy="35" rx="15" ry="10" fill="rgba(255,255,255,0.2)" />
        <defs>
          <radialGradient id={`planetGradient-${color}`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#1a1a2e" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
