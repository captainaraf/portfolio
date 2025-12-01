"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = "rgba(74, 144, 217, 0.3)" }: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative p-6 bg-card/50 backdrop-blur-lg border border-border rounded-2xl overflow-hidden group",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px ${glowColor}`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
