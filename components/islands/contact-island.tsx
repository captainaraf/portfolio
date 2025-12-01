"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Twitter, MessageCircle } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
}

const contactCards = [
  { icon: Mail, label: "Email", value: "shaidozzamanaraf21@gmail.com", color: "#4a90d9" },
  { icon: MapPin, label: "Location", value: "Somewhere in Bangladesh", color: "#e74c3c" },
  { icon: Phone, label: "Phone", value: "Nope You Are Not Getting This", color: "#1abc9c" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/captainaraf", color: "#ffffff" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/captainaraf", color: "#1da1f2" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.com/users/the_araf", color: "#5865f2" },
]

export function ContactIsland({ x, y, isActive }: IslandProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full bg-green-500/20 blur-3xl pointer-events-none"
        style={{ width: 500, height: 500, left: -250, top: -250 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative w-[550px]">
        {/* Section title */}
        <motion.div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-400 mb-3">
            <Mail className="w-5 h-5" />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-primary">Mission Control</span>
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="text-center py-5" glowColor={`${card.color}30`}>
                  <motion.div
                    className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 cursor-pointer"
                    style={{ backgroundColor: `${card.color}20` }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </motion.div>
                  <h3 className="font-bold text-sm mb-1">{card.label}</h3>
                  <p className="text-xs text-muted-foreground break-all">{card.value}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {/* Social buttons */}
        <GlowCard>
          <h3 className="font-bold text-center mb-4">Connect With Me</h3>
          <div className="flex justify-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0.7, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="w-5 h-5" style={{ color: social.color }} />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              )
            })}
          </div>
        </GlowCard>
      </div>
    </motion.div>
  )
}
