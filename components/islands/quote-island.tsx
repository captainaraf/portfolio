"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
}

export function QuoteIsland({ x, y, isActive }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full bg-purple-500/25 blur-3xl pointer-events-none"
        style={{ width: 450, height: 450, left: -225, top: -225 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative w-[450px]">
        <motion.div
          className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 text-center"
          animate={{
            boxShadow: isActive ? "0 0 60px rgba(155, 89, 182, 0.3)" : "0 0 30px rgba(155, 89, 182, 0.1)",
          }}
        >
          {/* Floating quote icons */}
          <motion.div
            className="absolute -top-4 -left-4 text-accent/50"
            animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Quote className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 text-accent/50 rotate-180"
            animate={{ rotate: [180, 190, 180], y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <Quote className="w-10 h-10" />
          </motion.div>

          {/* Stars decoration */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 5}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}

          <motion.blockquote
            className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
              "We choose to go to the Moon, and do other things, not because they are easy, but because they are hard."
            </span>
          </motion.blockquote>

          <motion.cite
            className="text-muted-foreground not-italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            — JFK
          </motion.cite>

          {/* Orbital ring */}
          <motion.div
            className="absolute inset-0 border border-accent/10 rounded-3xl pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
