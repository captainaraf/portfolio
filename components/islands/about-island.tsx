"use client"

import { motion } from "framer-motion"
import { Telescope, Rocket, Target, Sparkles } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
}

const stats = [
  { icon: Rocket, label: "Years Experience", value: "5+", color: "text-primary" },
  { icon: Target, label: "Projects Completed", value: "20+", color: "text-accent" },
  { icon: Sparkles, label: "Startup Attempts", value: "10+", color: "text-chart-4" },
]

const expertise = [
  "Machine Learning & Data Science",
  "Web Development",
  "Mobile App Development",
  "AI Engineering",
  "Business Strategies",
  "Backend and API Development",
  "Low Level Software Development",
]

export function AboutIsland({ x, y, isActive }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full bg-accent/20 blur-3xl pointer-events-none"
        style={{ width: 500, height: 500, left: -250, top: -250 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative w-[600px]">
        {/* Section title */}
        <motion.div className="text-center mb-6" animate={{ y: isActive ? 0 : 10 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">About</span> My Mission
          </h2>
          <p className="text-muted-foreground">My journey to greatness</p>
        </motion.div>

        {/* Story card */}
        <GlowCard className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Telescope className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">My Story</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            I have always wanted to do things that help people. The journey began when I realized I could code and build automation tools that would help my mother with her office works. This initial spark, was enough to ignite an entire wildfire inside me. Soon, the passion of helping my mother turned into the passion of helping entire humanity. I started building things that serve a broader audience, my school friends, my community, and hopefully in future, <span className="font-bold">The Entire World.</span>
          </p>
        </GlowCard>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="text-center py-4">
                  <Icon className={`w-6 h-6 mx-auto mb-1 ${stat.color}`} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {/* Expertise */}
        <GlowCard className="mb-4">
          <h3 className="text-lg font-bold mb-3">Fields of Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </GlowCard>

        {/* Future Vision */}
        <GlowCard glowColor="rgba(155, 89, 182, 0.3)">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-accent" />
            Future Vision
          </h3>
          <p className="text-muted-foreground text-sm">
            I believe that serving science is serving humanity. I want to innovate in the tech field such that every human in the world gets to benefit from the same technology, without any kind of imbalance. Just like Thanos says, <span className="font-bold">Perfectly Balanced, As All Things Should Be.</span>
          </p>
        </GlowCard>
      </div>
    </motion.div>
  )
}
