"use client"

import { motion } from "framer-motion"
import { Rocket } from "@/components/space/rocket"
import { ChevronDown } from "lucide-react"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
  onNavigate: (sectionId: string) => void
}

export function HeroIsland({ x, y, isActive, onNavigate }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.7 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glowing platform */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
          style={{ width: 600, height: 600, left: -300, top: -300 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Orbital rings */}
        <motion.div
          className="absolute border border-primary/20 rounded-full pointer-events-none"
          style={{ width: 500, height: 500, left: -250, top: -250 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute border border-accent/15 rounded-full pointer-events-none"
          style={{ width: 650, height: 650, left: -325, top: -325 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Flying rocket decoration */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ left: 200, top: -150 }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [45, 50, 45],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Rocket size={60} />
        </motion.div>

        {/* Content card */}
        <div className="relative w-[500px] bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 text-center">
          {/* Profile image */}
          <motion.div className="relative inline-block mb-6" whileHover={{ scale: 1.05 }}>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/50 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/50">
              <img src="/araf.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 bg-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ transformOrigin: "64px 64px", left: "50%", top: "50%", marginLeft: -6, marginTop: -6 }}
            />
          </motion.div>

          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" animate={{ opacity: isActive ? 1 : 0.8 }}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Shaidozzaman Araf
            </span>
          </motion.h1>

          <p className="text-lg text-muted-foreground mb-6">
            Software Developer • AI Engineer • Business Enthusiast
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                onNavigate("projects")
              }}
            >
              <span className="relative z-10">Explore My Work</span>
            </motion.button>
            <motion.button
              className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                onNavigate("contact")
              }}
            >
              Contact Me
            </motion.button>
          </div>

          {/* Hint to explore */}
          <motion.div
            className="mt-8 text-muted-foreground text-sm flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-4 h-4" />
            <span>Navigate to explore more</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
