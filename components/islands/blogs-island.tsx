"use client"

import { motion } from "framer-motion"
import { BookOpen, ArrowRight, Moon } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

interface IslandProps {
    x: number
    y: number
    isActive: boolean
}

export function BlogsIsland({ x, y, isActive }: IslandProps) {
    return (
        <motion.div
            className="absolute"
            style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.6 }}
            transition={{ duration: 0.5 }}
        >
            {/* Mare glow effect - silver/blue lunar themed */}
            <motion.div
                className="absolute rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
                style={{ width: 500, height: 500, left: -250, top: -250 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative w-[550px]">
                {/* Section title */}
                <motion.div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 mb-3">
                        <Moon className="w-5 h-5" />
                        <span className="font-semibold">Lunar Mare</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-primary">Thoughts</span>
                    </h2>
                    <p className="text-muted-foreground mt-2">Reflections, insights, and ideas shared with the world</p>
                </motion.div>

                {/* Main content */}
                <GlowCard glowColor="rgb(34, 211, 238, 0.3)">
                    <motion.div
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Icon */}
                        <motion.div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center bg-cyan-500/20"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        >
                            <BookOpen className="w-8 h-8 text-cyan-400" />
                        </motion.div>

                        {/* Text content */}
                        <div className="text-center">
                            <h3 className="font-bold text-xl mb-2">Substack Publication</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Dive into my latest thoughts on tech, startups, and life. New insights published regularly.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://captainaraf.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/30 transition-colors border border-cyan-500/30 hover:border-cyan-500/50"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>View My Thoughts</span>
                            <motion.div
                                className="inline-block"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.a>
                    </motion.div>
                </GlowCard>
            </div>
        </motion.div>
    )
}
