"use client"

import { motion } from "framer-motion"

interface RocketProps {
  className?: string
  size?: number
}

export function Rocket({ className, size = 80 }: RocketProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size * 1.5} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket body */}
        <path
          d="M40 0C40 0 20 30 20 70C20 90 28 100 40 100C52 100 60 90 60 70C60 30 40 0 40 0Z"
          fill="url(#rocketGradient)"
        />

        {/* Window */}
        <circle cx="40" cy="45" r="12" fill="#1a1a2e" />
        <circle cx="40" cy="45" r="9" fill="#2a3a5e" />
        <ellipse cx="37" cy="42" rx="4" ry="3" fill="rgba(100,200,255,0.4)" />

        {/* Fins */}
        <path d="M20 70L5 95L20 90Z" fill="#d35400" />
        <path d="M60 70L75 95L60 90Z" fill="#d35400" />

        {/* Stripe */}
        <rect x="30" y="65" width="20" height="4" fill="#e74c3c" />

        {/* Flame */}
        <motion.g
          animate={{
            scaleY: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 0.3,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <ellipse cx="40" cy="110" rx="12" ry="15" fill="#f39c12" />
          <ellipse cx="40" cy="108" rx="8" ry="12" fill="#e74c3c" />
          <ellipse cx="40" cy="106" rx="4" ry="8" fill="#f1c40f" />
        </motion.g>

        <defs>
          <linearGradient id="rocketGradient" x1="20" y1="0" x2="60" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ecf0f1" />
            <stop offset="100%" stopColor="#bdc3c7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
