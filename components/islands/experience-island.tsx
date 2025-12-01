"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
}

const experiences = [
  {
    role: "Assistant Executive of Technology",
    company: "WhiteBoard Initiatives",
    period: "2025 - Present",
    description: "Playing a major role in the technology department of one of the largest STEM non profits in Bangladesh. Organizing events, managing projects, and leading teams that impact thousands of students.",
    color: "#4a90d9",
  },
  {
    role: "Software Engineer",
    company: "Prodigy Studios",
    period: "2025 - Present",
    description: "Offering my expertise in software development to help create innovative and scalable solutions.",
    color: "#9b59b6",
  },
  {
    role: "Co-Founder, CEO & CTO",
    company: "Dead Mans Tech",
    period: "2025 - Present",
    description: "A SaaS company aimed at making people's lives easier with the technologies we build.",
    color: "#27ae60",
  },
  {
    role: "Discord Bot Developer",
    company: "Fiverr",
    period: "2021 - 2023",
    description: "Developed custom Discord bots for clients, enhancing their server functionalities and user engagement.",
    color: "#e67e22",
  },
]

export function ExperienceIsland({ x, y, isActive }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
        style={{ width: 500, height: 500, left: -250, top: -250 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative w-[500px]">
        {/* Section title */}
        <motion.div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 mb-3">
            <Briefcase className="w-5 h-5" />
            <span className="font-semibold">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience <span className="text-primary">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {/* Experience items */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <GlowCard className="ml-12 relative" glowColor={`${exp.color}25`}>
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[42px] top-4 w-4 h-4 rounded-full border-2"
                    style={{ borderColor: exp.color, backgroundColor: `${exp.color}40` }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  />

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="font-bold" style={{ color: exp.color }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
