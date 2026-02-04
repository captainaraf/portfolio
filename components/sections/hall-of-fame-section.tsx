"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star } from "lucide-react"

const awards = [
    {
        title: "Best Startup Award",
        organization: "Innovation Summit 2026",
        description: "Awarded 'Best Startup' for PippaQuiz, recognizing excellence in AI-driven educational innovation.",
        icon: Trophy,
        color: "text-purple-500",
        border: "border-purple-500/20",
    },
    {
        title: "National Finalist",
        organization: "Bangladesh Olympiad in AI",
        description: "Top 10 National Finalist among 5000+ participants nationwide.",
        icon: Star,
        color: "text-yellow-500",
        border: "border-yellow-500/20",
    },
    {
        title: "Divisional Runner Up",
        organization: "National High School Programming Contest",
        description: "Secured 2nd Place in the Divisional Round of NHSPC among hundreds of competitive programmers.",
        icon: Medal,
        color: "text-blue-500",
        border: "border-blue-500/20",
    },
    {
        title: "National Contestant",
        organization: "Bangladesh Olympiad in Informatics",
        description: "Selected as a National Contestant for BdOI, representing top algorithmic talent in the country.",
        icon: Award,
        color: "text-green-500",
        border: "border-green-500/20",
    },
]

export function HallOfFameSection() {
    return (
        <section id="hall-of-fame" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-muted-foreground text-sm font-medium mb-6">
                    <Trophy className="w-4 h-4" />
                    <span>Honors & Awards</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Hall of Fame</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    Recognition of excellence in technology, innovation, and problem solving.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`group relative p-8 rounded-3xl border bg-card/30 hover:bg-card/80 transition-all duration-300 ${award.border}`}
                    >
                        <div className="flex items-start gap-6">
                            <div className={`p-4 rounded-2xl bg-background border ${award.border} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <award.icon className={`w-8 h-8 ${award.color}`} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{award.title}</h3>
                                <div className="text-sm font-semibold text-muted-foreground mb-3">{award.organization}</div>
                                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
