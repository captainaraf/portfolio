"use client"

import { motion } from "framer-motion"

export function FloatingAstronaut({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Helmet */}
        <circle cx="60" cy="45" r="30" fill="#e0e0e0" />
        <circle cx="60" cy="45" r="25" fill="#1a1a2e" />
        <ellipse cx="60" cy="45" rx="20" ry="18" fill="#2a2a4e" />
        <ellipse cx="55" cy="40" rx="8" ry="6" fill="rgba(100,200,255,0.3)" />

        {/* Body */}
        <rect x="40" y="70" width="40" height="35" rx="8" fill="#e0e0e0" />
        <rect x="45" y="75" width="30" height="25" rx="4" fill="#c0c0c0" />

        {/* Arms */}
        <rect x="20" y="75" width="25" height="12" rx="6" fill="#e0e0e0" />
        <rect x="75" y="75" width="25" height="12" rx="6" fill="#e0e0e0" />

        {/* Legs */}
        <rect x="42" y="100" width="14" height="18" rx="4" fill="#e0e0e0" />
        <rect x="64" y="100" width="14" height="18" rx="4" fill="#e0e0e0" />

        {/* Backpack */}
        <rect x="30" y="72" width="10" height="25" rx="3" fill="#888" />

        {/* Flag patch */}
        <rect x="50" y="80" width="8" height="6" fill="#4a90d9" />
      </svg>
    </motion.div>
  )
}
