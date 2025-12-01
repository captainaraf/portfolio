"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Medal, Crown, Gem, Sparkles, CpuIcon, Heart } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
}

const achievements = [
  { icon: Sparkles, title: "National Camper", org: "Bangladesh Artificial Intelligence Olympiad 2025", color: "#ffd700" },
  { icon: CpuIcon, title: "National Contestant", org: "Bangladesh Olympiad in Informatics 2025", color: "#c0c0c0" },
  { icon: Star, title: "Divisional Runners Up", org: "National High School Programming Contest 2025", color: "#ff6b35" },
  { icon: Medal, title: "Nationalist", org: "Father Timm Memorial Programming Contest 2025", color: "#cd7f32" },
  { icon: Heart, title: "Loved", org: "By People", color: "#9b59b6" },
]

export function HallOfFameIsland({ x, y, isActive }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full bg-yellow-500/20 blur-3xl pointer-events-none"
        style={{ width: 500, height: 500, left: -250, top: -250 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative w-[550px]">
        {/* Section title */}
        <motion.div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 mb-3">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Hall of Fame</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Stellar <span className="text-primary">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <GlowCard className="h-full" glowColor={`${achievement.color}30`}>
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                    <motion.div
                      className="p-2.5 rounded-xl"
                      style={{ backgroundColor: `${achievement.color}20` }}
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: achievement.color }} />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-sm">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground">{achievement.org}</p>
                    </div>
                  </motion.div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
